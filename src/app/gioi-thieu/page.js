import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Giới thiệu công ty',
  description: 'Bảo An Engineering — thành lập 1999, chuyên tư vấn thiết kế, cung cấp và lắp đặt hệ thống PCCC. 3 chi nhánh Đồng Nai, TP.HCM, Hà Nội.',
}

const milestones = [
  { year: '1999', event: 'Thành lập Công ty TNHH Bảo An tại Khu công nghiệp Bình Sơn, Long Thành, Đồng Nai' },
  { year: '2001', event: 'Hoàn thành dự án đầu tiên — hệ thống PCCC cho các nhà máy tại Đồng Nai' },
  { year: '2005', event: 'Mở chi nhánh TP. Hồ Chí Minh, bắt đầu hợp tác với Metro Cash & Carry' },
  { year: '2007', event: 'Trở thành nhà phân phối chính hãng Tyco và Viking' },
  { year: '2010', event: 'Hoàn thành chuỗi dự án Big C (Go! Việt Nam) trên toàn quốc' },
  { year: '2013', event: 'Ký hợp đồng với Intel Vietnam và Colgate Palmolive Bình Dương' },
  { year: '2015', event: 'Mở chi nhánh Hà Nội, phủ sóng 3 miền Bắc — Trung — Nam' },
  { year: '2018', event: 'Đạt mốc 400 công trình hoàn thành, mở rộng xưởng chế tạo tại Đồng Nai' },
  { year: '2020', event: 'Hợp tác với Robert Bosch, FrieslandCampina, OLAM Ducati' },
  { year: '2026', event: 'Hơn 500 công trình hoàn thành, tiếp tục phát triển mạng lưới đối tác quốc tế' },
]

const strengths = [
  { num: '01', title: 'Kinh nghiệm 25 năm', desc: 'Thi công PCCC cho nhà máy, siêu thị, khách sạn, khu công nghiệp — tích lũy kinh nghiệm xử lý mọi tình huống kỹ thuật phức tạp.' },
  { num: '02', title: 'Xưởng chế tạo riêng', desc: 'Xưởng chế tạo tại Đồng Nai kiểm soát chất lượng đầu vào, đảm bảo tiến độ thi công và giảm chi phí trung gian.' },
  { num: '03', title: 'Thiết bị chính hãng', desc: 'Nhà phân phối ủy quyền: Tyco, Viking, Salmson, Ansul, Ampac, Siemens — đầy đủ chứng nhận UL, FM, VdS, TCVN.' },
  { num: '04', title: 'Đa tiêu chuẩn', desc: 'Thiết kế và thi công theo NFPA (Mỹ), APSAD (Pháp), TCVN, BS (Anh) — đáp ứng mọi yêu cầu bảo hiểm.' },
  { num: '05', title: 'Hỗ trợ pháp lý', desc: 'Hỗ trợ thủ tục thẩm duyệt thiết kế PCCC và nghiệm thu với Cục CSPCCC Bộ Công an.' },
  { num: '06', title: 'Bảo trì dài hạn', desc: 'Hợp đồng bảo trì định kỳ, hỗ trợ khẩn cấp 24/7 cho khách hàng có hợp đồng bảo trì.' },
]

const companyPhotos = [
  { img: '/images/tieu-chuan/test2.jpg', cap: 'Vận hành thử hệ thống' },
  { img: '/images/gioithieu/thucte.jpg',      cap: 'Chế tạo đường ống' },
  { img: '/images/gioithieu/hop.jpg',   cap: 'Hội nghị an toàn lao động' },
  { img: '/images/gioithieu/congty.jpg',          cap: 'Lắp đặt thi công' },
  { img: '/images/gioithieu/banner-truong.jpg',       cap: 'Trụ sở Bảo An Đồng Nai' },
  { img: '/images/gioithieu/training.jpg',    cap: 'Huấn luyện nhân viên' },
  { img: '/images/gioithieu/sp-cong-trinh-2.jpg',    cap: 'Sản phẩm là công trình (2)' },
]

export default function GioiThieuPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">

        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2">
            <Link href="/" className="hover:text-brand-red">Trang chủ</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium">Giới thiệu</span>
          </div>
        </div>

        {/* Hero với ảnh công ty thật */}
        <div className="relative bg-brand-gray text-white py-16 overflow-hidden">
          <Image src="/images/gioi-thieu/baoan.png" alt="Bảo An Engineering" fill className="object-cover opacity-25" />
          <div className="relative z-10 container-main grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl font-bold mb-4">Công ty TNHH Bảo An</h1>
              <p className="text-gray-300 leading-relaxed mb-4">
                Thành lập từ tháng 6 năm 1999 tại Khu công nghiệp Bình Sơn, Long Thành, Đồng Nai.
                Bảo An Engineering chuyên tư vấn thiết kế, cung cấp và lắp đặt hệ thống phòng cháy
                chữa cháy cho các công trình công nghiệp, thương mại và dân dụng trên toàn quốc.
              </p>
              <p className="text-red-300 font-semibold italic mb-6">
                "Bạn không cần nhiều, mà chỉ cần đúng!"
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[['1999', 'Năm thành lập'], ['500+', 'Công trình'], ['3', 'Chi nhánh'], ['50+', 'Khách hàng lớn']].map(([num, label]) => (
                  <div key={label} className="bg-gray-800/80 rounded-xl p-4 border border-gray-700 text-center">
                    <div className="text-2xl font-bold text-brand-red mb-1">{num}</div>
                    <div className="text-gray-400 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden border border-gray-700">
              <Image src="/images/gioi-thieu/baoan.png" alt="Bảo An Engineering banner" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="container-main py-12 space-y-12">

          {/* Tầm nhìn + Sứ mệnh + Giá trị */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Tầm nhìn', color: 'border-brand-red', content: 'Nhằm hướng đến là một trong những nhà thầu PCCC hàng đầu về chất lượng tiêu chuẩn kỹ thuật và dịch vụ với giá cả hợp lý nhất đến Quý khách hàng.' },
              { title: 'Sứ mệnh', color: 'border-blue-500', content: 'Cung cấp giải pháp PCCC đúng tiêu chuẩn, đúng kỹ thuật với thiết bị chính hãng từ Tyco, Viking, Ansul, Ampac, Siemens — đảm bảo an toàn tuyệt đối cho mọi công trình.' },
              { title: 'Giá trị cốt lõi', color: 'border-green-500', content: 'Trung thực, tôn trọng và hợp tác. Cam kết tiêu chuẩn chất lượng. Sáng tạo, đổi mới và hiệu quả trong việc gia tăng giá trị của khách hàng và đối tác.' },
            ].map(item => (
              <div key={item.title} className={`bg-white rounded-xl border-l-4 ${item.color} border border-gray-100 p-6`}>
                <h3 className="font-bold text-brand-gray text-lg mb-3">{item.title}</h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Điểm mạnh */}
          <div>
            <h2 className="text-2xl font-bold text-brand-gray mb-2">Tại sao chọn Bảo An?</h2>
            <p className="text-brand-gray-mid mb-8">Những lợi thế cạnh tranh khác biệt</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {strengths.map(s => (
                <div key={s.num} className="bg-white rounded-xl border border-gray-100 p-6 hover:border-brand-red transition-colors">
                  <div className="w-9 h-9 bg-brand-red-light rounded-lg flex items-center justify-center mb-4">
                    <span className="text-brand-red font-bold text-sm">{s.num}</span>
                  </div>
                  <h3 className="font-bold text-brand-gray mb-2">{s.title}</h3>
                  <p className="text-brand-gray-mid text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery ảnh công ty */}
          <div>
            <h2 className="text-2xl font-bold text-brand-gray mb-2">Hình ảnh công ty</h2>
            <p className="text-brand-gray-mid mb-6">Văn phòng, showroom và đội ngũ Bảo An Engineering</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {companyPhotos.map((p, i) => (
<div
  key={i}
  className="relative h-52 rounded-xl overflow-hidden group bg-gray-100"
>
                  <Image src={p.img} alt={p.cap} fill className="object-cover group-hover:scale-105 transition-transform duration-400" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs bg-black/60 rounded px-2 py-1">{p.cap}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-brand-gray mb-8">Lịch sử hình thành</h2>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
                    </div>
                    {i < milestones.length - 1 && <div className="w-0.5 bg-gray-200 flex-1 my-1" />}
                  </div>
                  <div className="pb-7">
                    <div className="font-bold text-brand-red text-sm mb-1">{m.year}</div>
                    <div className="text-brand-gray text-sm leading-relaxed">{m.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-red rounded-xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Hợp tác với Bảo An Engineering</h3>
            <p className="text-red-100 text-sm mb-5">Liên hệ ngay để được tư vấn miễn phí và nhận báo giá trong 24 giờ</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="tel:+84968552345" className="bg-white text-brand-red font-bold px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
                Gọi: 0968 552 345
              </a>
              <Link href="/bao-gia" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-brand-red transition-colors">
                Gửi yêu cầu báo giá
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
