export async function POST(request) {
  try {
    const body = await request.json()
    const { hoTen, dienThoai, email, loaiCongTrinh, dienTich, sanPham, ghiChu } = body

    if (!hoTen || !dienThoai) {
      return Response.json({ error: 'Thiếu thông tin bắt buộc' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    if (!RESEND_API_KEY) {
      console.log('[DEV] Chưa có RESEND_API_KEY')
      return Response.json({ success: true, dev: true })
    }

    const sanPhamList = Array.isArray(sanPham) && sanPham.length > 0
      ? sanPham.map(s => `<li style="margin-bottom:4px">• ${s}</li>`).join('')
      : '<li>• Chưa chọn cụ thể</li>'

    const thoiGian = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })

    const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8">
<style>
  body{font-family:Arial,sans-serif;color:#1F2937;margin:0;padding:0;background:#F9FAFB}
  .wrap{max-width:600px;margin:24px auto;background:white;border-radius:12px;overflow:hidden;border:1px solid #E5E7EB}
  .hd{background:#CC1F1F;padding:24px 32px}
  .hd h1{color:white;margin:0;font-size:20px}
  .hd p{color:#FFD0D0;margin:6px 0 0;font-size:13px}
  .bd{padding:28px 32px}
  .sec{background:#F9FAFB;border-radius:8px;padding:16px 20px;margin-bottom:16px;border-left:3px solid #CC1F1F}
  .lbl{font-size:11px;color:#9CA3AF;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px}
  .val{font-size:15px;color:#111827;font-weight:500}
  ul{margin:8px 0 0;padding:0;list-style:none}
  .ft{background:#F3F4F6;padding:14px 32px;font-size:12px;color:#9CA3AF;text-align:center}
</style></head><body>
<div class="wrap">
  <div class="hd">
    <h1>🔥 Yêu cầu báo giá mới</h1>
    <p>Nhận lúc: ${thoiGian}</p>
  </div>
  <div class="bd">
    <div class="sec">
      <div class="lbl">Khách hàng</div>
      <div class="val">${hoTen}</div>
    </div>
    <div class="sec">
      <div class="lbl">Điện thoại</div>
      <div class="val"><a href="tel:${dienThoai}" style="color:#CC1F1F">${dienThoai}</a></div>
    </div>
    ${email ? `<div class="sec"><div class="lbl">Email</div><div class="val"><a href="mailto:${email}" style="color:#CC1F1F">${email}</a></div></div>` : ''}
    ${loaiCongTrinh ? `<div class="sec"><div class="lbl">Loại công trình</div><div class="val">${loaiCongTrinh}${dienTich ? ` — ${dienTich}` : ''}</div></div>` : ''}
    <div class="sec">
      <div class="lbl">Sản phẩm / Dịch vụ cần báo giá</div>
      <ul>${sanPhamList}</ul>
    </div>
    ${ghiChu ? `<div class="sec"><div class="lbl">Ghi chú</div><div class="val" style="white-space:pre-wrap">${ghiChu}</div></div>` : ''}
    <p style="font-size:13px;color:#6B7280;margin-top:20px">
      Vui lòng liên hệ lại khách hàng trong <strong style="color:#CC1F1F">24 giờ</strong>.
    </p>
  </div>
  <div class="ft">Email tự động từ website baoanengineering.com · Bảo An Engineering</div>
</div>
</body></html>`

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['nhatgiaphuoc.dao@gmail.com'],
        reply_to: email || undefined,
        subject: `[Báo giá PCCC] ${hoTen} — ${dienThoai}`,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return Response.json({ error: 'Gửi email thất bại' }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('API error:', err)
    return Response.json({ error: 'Lỗi server' }, { status: 500 })
  }
}
