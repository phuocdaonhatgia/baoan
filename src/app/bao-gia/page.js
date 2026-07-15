'use client'
import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const productOptions = [
  'Hệ thống Sprinkler tự động',
  'Hosereel & Hydrant trong nhà',
  'Hosereel & Hydrant ngoài trời',
  'Bình chữa cháy CO2',
  'Bình chữa cháy bột ABC',
  'Hệ thống báo cháy tự động',
  'Hệ thống chữa cháy FM200',
  'Hệ thống chữa cháy Foam',
  'Camera & Hệ thống an ninh',
  'Cửa chống cháy',
  'Bảo trì hệ thống PCCC',
  'Khác (ghi rõ trong ghi chú)',
]

const projectTypes = [
  'Nhà máy / Xưởng sản xuất',
  'Siêu thị / Trung tâm thương mại',
  'Khách sạn / Resort',
  'Văn phòng / Tòa nhà',
  'Kho hàng / Khu công nghiệp',
  'Bệnh viện / Trường học',
  'Chung cư / Căn hộ',
  'Nhà ở riêng lẻ',
  'Khác',
]

export default function BaoGiaPage() {
  const [form, setForm] = useState({
    hoTen: '', dienThoai: '', email: '',
    loaiCongTrinh: '', dienTich: '',
    sanPham: [], ghiChu: '',
  })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function handleCheckbox(val) {
    setForm(f => ({
      ...f,
      sanPham: f.sanPham.includes(val)
        ? f.sanPham.filter(x => x !== val)
        : [...f.sanPham, val],
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/bao-gia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-brand-gray-light flex items-center justify-center py-20">
          <div className="bg-white rounded-2xl border border-gray-100 p-10 max-w-md w-full mx-4 text-center shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-brand-gray mb-3">Gửi yêu cầu thành công!</h2>
            <p className="text-brand-gray-mid text-sm leading-relaxed mb-2">
              Chúng tôi đã nhận được yêu cầu của <strong>{form.hoTen}</strong>.
            </p>
            <p className="text-brand-gray-mid text-sm leading-relaxed mb-6">
              Đội ngũ kỹ thuật Bảo An sẽ liên hệ lại qua số <strong className="text-brand-red">{form.dienThoai}</strong> trong vòng <strong>24 giờ</strong>.
            </p>
            <div className="bg-brand-red-light rounded-lg p-4 mb-6 text-sm text-brand-gray">
              <p className="font-medium mb-1">Cần hỗ trợ khẩn cấp?</p>
              <a href="tel:+84968552345" className="text-brand-red font-bold text-base">0968 552 345</a>
            </div>
            <Link href="/" className="btn-primary w-full justify-center">Quay về trang chủ</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">
        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2">
            <Link href="/" className="hover:text-brand-red">Trang chủ</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium">Yêu cầu báo giá</span>
          </div>
        </div>
        <div className="bg-brand-gray text-white py-10">
          <div className="container-main">
            <h1 className="text-2xl font-bold mb-2">Yêu cầu báo giá</h1>
            <p className="text-gray-400 text-sm">Điền thông tin bên dưới — đội ngũ kỹ sư Bảo An sẽ liên hệ và gửi báo giá trong vòng 24 giờ</p>
          </div>
        </div>

        <div className="container-main py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 space-y-6">

                {/* Bước 1: Thông tin liên hệ */}
                <div>
                  <h2 className="text-base font-bold text-brand-gray mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <span className="w-6 h-6 bg-brand-red text-white rounded-full text-xs flex items-center justify-center font-bold">1</span>
                    Thông tin liên hệ
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-gray mb-1.5">Họ và tên <span className="text-brand-red">*</span></label>
                      <input type="text" name="hoTen" value={form.hoTen} onChange={handleChange} required
                        placeholder="Nguyễn Văn A"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-gray mb-1.5">Số điện thoại <span className="text-brand-red">*</span></label>
                      <input type="tel" name="dienThoai" value={form.dienThoai} onChange={handleChange} required
                        placeholder="0968 552 345"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-brand-gray mb-1.5">Email</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="email@congty.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Bước 2: Thông tin công trình */}
                <div>
                  <h2 className="text-base font-bold text-brand-gray mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <span className="w-6 h-6 bg-brand-red text-white rounded-full text-xs flex items-center justify-center font-bold">2</span>
                    Thông tin công trình
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-gray mb-1.5">Loại công trình</label>
                      <select name="loaiCongTrinh" value={form.loaiCongTrinh} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors bg-white">
                        <option value="">Chọn loại công trình</option>
                        {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-gray mb-1.5">Diện tích (m²)</label>
                      <input type="text" name="dienTich" value={form.dienTich} onChange={handleChange}
                        placeholder="VD: 5.000 m²"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Bước 3: Chọn sản phẩm */}
                <div>
                  <h2 className="text-base font-bold text-brand-gray mb-1 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <span className="w-6 h-6 bg-brand-red text-white rounded-full text-xs flex items-center justify-center font-bold">3</span>
                    Sản phẩm / Dịch vụ cần báo giá
                  </h2>
                  <p className="text-xs text-brand-gray-mid mb-4">Chọn một hoặc nhiều hạng mục</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {productOptions.map(opt => (
                      <label key={opt}
                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                          form.sanPham.includes(opt) ? 'border-brand-red bg-brand-red-light' : 'border-gray-200 hover:border-gray-300'
                        }`}>
                        <input type="checkbox" checked={form.sanPham.includes(opt)} onChange={() => handleCheckbox(opt)}
                          className="mt-0.5 accent-brand-red flex-shrink-0" />
                        <span className={`text-xs leading-relaxed ${form.sanPham.includes(opt) ? 'text-brand-red font-medium' : 'text-brand-gray-mid'}`}>
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Bước 4: Ghi chú */}
                <div>
                  <h2 className="text-base font-bold text-brand-gray mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <span className="w-6 h-6 bg-brand-red text-white rounded-full text-xs flex items-center justify-center font-bold">4</span>
                    Ghi chú thêm
                  </h2>
                  <textarea name="ghiChu" value={form.ghiChu} onChange={handleChange} rows={4}
                    placeholder="Mô tả thêm về công trình, yêu cầu đặc biệt, tiêu chuẩn cần áp dụng..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none" />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                    Có lỗi xảy ra. Vui lòng thử lại hoặc gọi trực tiếp <a href="tel:+84968552345" className="font-bold underline">0968 552 345</a>.
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="btn-primary w-full justify-center py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Đang gửi...
                    </span>
                  ) : 'Gửi yêu cầu báo giá'}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-brand-gray mb-4 text-sm">Liên hệ trực tiếp</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-brand-gray-mid mb-1 uppercase tracking-wide">Hotline</p>
                    <a href="tel:+84968552345" className="text-brand-red font-bold text-xl hover:underline block">0968 552 345</a>
                    <a href="tel:+842836202114" className="text-brand-gray-mid text-sm hover:text-brand-red block mt-0.5">(84.28) 362 02114</a>
                  </div>
                  <div>
                    <p className="text-xs text-brand-gray-mid mb-1 uppercase tracking-wide">Email</p>
                    <a href="mailto:baoan@baoanengineering.com" className="text-sm text-brand-gray hover:text-brand-red break-all">
                      baoan@baoanengineering.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-brand-gray mb-4 text-sm">Tại sao chọn Bảo An?</h3>
                <div className="space-y-3">
                  {[
                    ['Tư vấn miễn phí', 'Khảo sát thực địa không tính phí'],
                    ['Tiêu chuẩn quốc tế', 'NFPA, APSAD, TCVN — chấp nhận bảo hiểm'],
                    ['Thiết bị chính hãng', 'Tyco, Viking, Ansul, Siemens'],
                    ['Bảo hành dài hạn', 'Bảo trì và bảo hành toàn bộ hệ thống'],
                    ['Phản hồi nhanh', 'Báo giá trong vòng 24 giờ'],
                  ].map(([title, desc]) => (
                    <div key={title} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0 mt-1.5" />
                      <div>
                        <p className="text-sm font-medium text-brand-gray">{title}</p>
                        <p className="text-xs text-brand-gray-mid">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-red rounded-xl p-5 text-white text-center">
                <p className="font-bold mb-1">Báo giá trong 24 giờ</p>
                <p className="text-red-100 text-xs">Sau khi nhận yêu cầu, kỹ sư Bảo An sẽ liên hệ và gửi báo giá chi tiết ngay</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
