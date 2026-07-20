'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const bannerSlides = [
    {
    img: '/images/banner/slide-new-4.jpg',
    tag: 'Bao An Engineering',
    title: 'Công ty TNHH Bảo An',
    desc: '25 năm kinh nghiệm, hơn 500 công trình hoàn thành, 3 chi nhánh tại Đồng Nai, TP.HCM và Hà Nội.',
  },
  {
    img: '/images/banner/slide-new-1.jpg',
    tag: 'Xưởng chế tạo sản xuất',
    title: 'Hệ thống PCCC chuyên nghiệp cho mọi công trình',
    desc: 'Bảo An Engineering — đối tác PCCC tin cậy của Big C, Metro, Intel, Colgate. Tư vấn — Thiết kế — Cung cấp — Lắp đặt toàn diện.',
  },
  {
    img: '/images/banner/slide-new-2.jpg',
    tag: 'Bảo quản vận chuyển đến công trường',
  title: 'Chất lượng tạo nên uy tín',
  desc: 'Lựa chọn vật tư kỹ lưỡng, quy trình thi công chuẩn hóa và giám sát chặt chẽ để mang đến công trình bền vững.'
  },
  {
    img: '/images/banner/slide-new-3.jpg',
    tag: 'Hoạt động trên công trường',
    title: 'Lắp đặt hệ thống PCCC đúng tiêu chuẩn quốc tế',
    desc: 'Áp dụng tiêu chuẩn NFPA (Mỹ), APSAD (Pháp), TCVN — nghiệm thu bàn giao hồ sơ hoàn công đầy đủ.',
  },
  {
    img: '/images/banner/slide-new-5.jpg',
    tag: 'Doanh nghiệp Việt vì người Việt',
    title: 'Được vinh danh tại Thành phố Hồ Chí Minh',
    desc: 'Bảo An Engineering — thương hiệu PCCC uy tín, được tin tưởng bởi hàng trăm doanh nghiệp lớn trong và ngoài nước.',
  },
]

const services = [
  { num: '01', title: 'Tư vấn & Thiết kế', desc: 'Khảo sát thực địa, tính toán lưu lượng, thiết kế hệ thống đúng tiêu chuẩn NFPA, APSAD, TCVN.', img: '/images/tieuchuan2/tuvan.jpg' },
  { num: '02', title: 'Cung cấp thiết bị', desc: 'Phân phối chính hãng các thiết có đầy đủ chứng nhận UL, FM, VdS.', img: '/images/dichvu/cungcapthietbi.jpg' },
  { num: '03', title: 'Lắp đặt hệ thống', desc: 'Xưởng chế tạo riêng tại Đồng Nai, thi công đúng tiến độ, nghiệm thu bàn giao hồ sơ hoàn công.', img: '/images/dichvu/lapdathethong.jpg' },
  { num: '04', title: 'Bảo trì định kỳ', desc: 'Hợp đồng bảo trì dài hạn, kiểm tra định kỳ, đảm bảo hệ thống sẵn sàng hoạt động 24/7.', img: '/images/tieuchuan2/dinhky.jpg' },
]

const productCategories = [
  { name: 'Hệ thống Sprinkler tự động', href: '/san-pham#sprinkler',      desc: 'Đầu phun, van báo động, phụ kiện' },
  { name: 'Hosereel & Hydrant',          href: '/san-pham#hosereel-hydrant', desc: 'Hộp tủ, cuộn vòi, trụ chữa cháy' },
  { name: 'Bình chữa cháy',             href: '/san-pham#binh-chua-chay',  desc: 'CO2, ABC, xe đẩy chữa cháy' },
  { name: 'Báo cháy tự động',           href: '/san-pham#bao-chay',        desc: 'Hệ thống thông thường và địa chỉ' },
  { name: 'Thiết bị Foam',              href: '/san-pham#foam',             desc: 'Dung dịch, bộ trộn, súng phun Foam' },
  { name: 'Khí sạch FM200 / CO2',       href: '/san-pham#khi-sach',        desc: 'Phòng máy chủ, kho lưu trữ tài liệu' },
  { name: 'Camera & An ninh',           href: '/san-pham#camera',           desc: 'Camera trong nhà và ngoài trời' },
  { name: 'Cửa chống cháy',            href: '/san-pham#thiet-bi-khac',    desc: 'Cửa thép, cửa trượt chống cháy' },
]

// duantrangchu: Big C, Khách sạn Majestic, VSIP, Metro, Shell Gò Dầu, Trụ sở UBND
const projects = [
  { name: 'Big C / Go! Việt Nam', type: 'Siêu thị', systems: ['Sprinkler tự động', 'Báo cháy tự động', 'Hosereel'], img: '/images/duantrangchu/tc-bigc.jpg' },
  { name: 'Khách sạn Majestic', type: 'Khách sạn', systems: ['Sprinkler', 'Báo cháy địa chỉ', 'Hosereel'], img: '/images/duantrangchu/tc-kcn.jpg' },
  { name: 'VSIP Bình Dương', type: 'Khu công nghiệp', systems: ['Báo cháy tự động', 'Chữa cháy vách tường', 'Họng nước'], img: '/images/duantrangchu/tc-khach-san.jpg' },
  { name: 'MM Mega Market Việt Nam', type: 'Trung tâm phân phối', systems: ['Sprinkler tự động', 'Hosereel & Hydrant', 'Họng nước cứu hỏa'], img: '/images/duantrangchu/tc-metro.jpg' },
  { name: 'Shell Gò Dầu (TOP Solvent)', type: 'Kho xăng dầu', systems: ['Chữa cháy Foam', 'Báo cháy tự động', 'Hosereel'], img: '/images/duantrangchu/tc-shell.jpg' },
  { name: 'Trụ sở UBND TPHCM', type: 'Cơ quan hành chính nhà nước', systems: ['Sprinkler', 'Báo cháy địa chỉ', 'Hosereel'], img: '/images/duantrangchu/tc-trung-tam.jpg' },
]

const stats = [
  { num: '25+', label: 'Năm kinh nghiệm' },
  { num: '500+', label: 'Công trình hoàn thành' },
  { num: '3', label: 'Chi nhánh toàn quốc' },
  { num: '50+', label: 'Khách hàng doanh nghiệp lớn' },
]

const distributors = [
  {
    name: 'Tyco',
    country: 'Mỹ',
    spec: 'Sprinkler, Van, Bơm',
    logo: '/images/nhaphanphoi/tyco.png',
  },
  {
    name: 'Hochiki',
    country: 'Nhật Bản',
    spec: 'Báo cháy',
    logo: '/images/nhaphanphoi/hochiki.jpg',
  },
  {
    name: 'Salmon',
    country: 'Pháp',
    spec: 'Bơm chữa cháy',
    logo: '/images/nhaphanphoi/salmon.png',
  },
  {
    name: 'Seah',
    country: 'Hàn Quốc',
    spec: 'Ống thép PCCC',
    logo: '/images/nhaphanphoi/seah.png',
  },
  {
    name: 'Ansul',
    country: 'Mỹ',
    spec: 'Foam, Khí sạch',
    logo: '/images/nhaphanphoi/ansul.png',
  },
]

const clients = [
  'Big C / Go! Việt Nam', 'MM Mega Market', 'Intel Vietnam',
  'Colgate Palmolive', 'Robert Bosch', 'FrieslandCampina',
  'Shell (TOP Solvent)', 'VSIP Bình Dương', 'Novotel Đà Nẵng',
  'Hyosung Đồng Nai', 'OLAM Ducati', 'Intersnack',
  'TATA Coffee', 'Gelatin Capsule', 'Bayer Agritech',
]

function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const next = useCallback(() => setCurrent(c => (c + 1) % bannerSlides.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + bannerSlides.length) % bannerSlides.length), [])
  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [paused, next])
  return (
    <section className="relative overflow-hidden bg-brand-gray" style={{ minHeight: '580px' }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {bannerSlides.map((slide, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}>
          <Image src={slide.img} alt={slide.title} fill priority={i === 0} className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gray/90 via-brand-gray/65 to-transparent" />
        </div>
      ))}
      <div className="relative z-10 container-main flex items-center min-h-[580px]">
        <div className="max-w-xl py-16">
          <div className="inline-block border border-brand-red/60 bg-brand-red/10 text-sm text-red-300 px-4 py-1.5 rounded-full mb-5">
            {bannerSlides[current].tag}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            {bannerSlides[current].title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">{bannerSlides[current].desc}</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/bao-gia" className="btn-primary px-8 py-3 text-base">Liên Hệ Tư Vấn</Link>
            <Link href="/du-an" className="px-8 py-3 text-base font-semibold text-white border-2 border-white/40 rounded-lg hover:border-white transition-colors">
              Xem dự án thực tế
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 border-t border-white/20">
            {stats.map(s => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-brand-red">{s.num}</div>
                <div className="text-xs text-gray-400 mt-0.5 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/25 border border-white/20 rounded-full flex items-center justify-center text-white transition-all">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/25 border border-white/20 rounded-full flex items-center justify-center text-white transition-all">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {bannerSlides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-brand-red' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`} />
        ))}
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />

        {/* Giới thiệu nhanh */}
        <section className="bg-white py-8 border-b border-gray-100">
          <div className="container-main">
            <p className="text-brand-gray-mid text-center text-lg leading-relaxed max-w-1xl mx-auto">
              <strong className="text-brand-red">Bảo An Engineering</strong> — thành lập năm 1999, chuyên môn hóa bởi tiêu chuẩn công nghiệp cao nhất về PCCC.
               <em className="text-brand-red"><br></br>"Bạn không cần nhiều, mà chỉ cần đúng!"</em >
            </p>
          </div>
        </section>
        {/* Về chúng tôi — 3 ảnh từ gioithieutrangchu */}
        <section className="py-16 bg-brand-gray-light">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-xl overflow-hidden col-span-2" style={{height:'220px'}}>
                  <Image src="/images/gioithieutrangchu/gtc-thanhvien.jpg" alt="Đội ngũ nhân viên Bảo An Engineering" fill className="object-cover" />
                  <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">Đội ngũ nhân viên Bảo An Engineering</div>
                </div>
                <div className="relative rounded-xl overflow-hidden" style={{height:'150px'}}>
                  <Image src="/images/gioithieutrangchu/gtc-baoan.jpg" alt="Cơ sở Bảo An Đồng Nai" fill className="object-cover" />
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Cơ sở Đồng Nai</div>
                </div>
                <div className="relative rounded-xl overflow-hidden" style={{height:'150px'}}>
                  <Image src="/images/gioithieutrangchu/gtc-truong.jpg" alt="Trụ sở Bảo An" fill className="object-cover" />
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Trụ sở Bảo An</div>
                </div>
              </div>
              <div>
                <div className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">Về chúng tôi</div>
                <h2 className="text-2xl font-bold text-brand-gray mb-4">Bảo An Engineering — Thành lập từ năm 1999</h2>
                <p className="text-brand-gray-mid leading-relaxed mb-4">
                  Công ty TNHH Bảo An hoạt động trong lĩnh vực tư vấn thiết kế, cung cấp và lắp đặt hệ thống
                  PCCC cho các công trình công nghiệp và thương mại trên toàn quốc.
                </p>
                <p className="text-brand-gray-mid leading-relaxed mb-6">
                  Slogan: <strong className="text-brand-red">"Bạn không cần nhiều, mà chỉ cần đúng!"</strong> —
                  phản ánh cam kết về chất lượng tiêu chuẩn kỹ thuật và dịch vụ với giá cả hợp lý nhất.
                </p>
                <div className="space-y-2 mb-6">
                  {['Trung thực, tôn trọng và hợp tác', 'Cam kết tiêu chuẩn chất lượng ISO', 'Sáng tạo và hiệu quả trong từng dự án'].map(v => (
                    <div key={v} className="flex items-center gap-3 text-sm text-brand-gray">
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />{v}
                    </div>
                  ))}
                </div>
                <Link href="/gioi-thieu" className="btn-primary">Tìm hiểu thêm về chúng tôi</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Dịch vụ — có ảnh thật */}
        <section className="py-16 bg-brand-gray-light">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="section-title">Dịch vụ của chúng tôi</h2>
              <p className="section-subtitle">Giải pháp PCCC toàn diện từ A đến Z</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(s => (
                <div key={s.num} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-brand-red hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{s.num}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-brand-gray mb-2 group-hover:text-brand-red transition-colors">{s.title}</h3>
                    <p className="text-brand-gray-mid text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/dich-vu" className="btn-outline">Xem chi tiết dịch vụ</Link>
            </div>
          </div>
        </section>

        {/* Danh mục sản phẩm */}
        <section className="py-16 bg-white">
          <div className="container-main">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
              <div>
                <h2 className="section-title mb-1">Danh mục sản phẩm PCCC</h2>
                <p className="text-brand-gray-mid">Thiết bị chính hãng — đầy đủ chứng nhận UL, FM, VdS, TCVN</p>
              </div>
              <Link href="/san-pham" className="btn-outline text-sm py-2 flex-shrink-0">Xem tất cả</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {productCategories.map(cat => (
                <Link key={cat.name} href={cat.href}
                  className="group border border-gray-200 rounded-xl p-5 hover:border-brand-red hover:shadow-md transition-all bg-white">
                  <div className="w-8 h-1 bg-brand-red rounded-full mb-4 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-semibold text-brand-gray text-sm mb-1 group-hover:text-brand-red transition-colors leading-snug">{cat.name}</h3>
                  <p className="text-xs text-brand-gray-mid">{cat.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Nhà phân phối — 6 nhà */}
<section className="py-14 bg-brand-gray text-white">
  <div className="container-main">
    <div className="text-center mb-10">
      <h2 className="text-2xl font-bold mb-2">
        Nhà cung cấp chính hãng
      </h2>
      <p className="text-gray-400 text-sm">
        Mạng lưới cung cấp từ những thương hiệu PCCC hàng đầu thế giới
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
      {distributors.map((d) => (
        <div
          key={d.name}
          className="w-full max-w-[220px] bg-gray-800 rounded-xl px-5 py-4 text-center border border-gray-700 hover:border-brand-red hover:shadow-lg transition-all duration-300"
        >
          {/* Tên */}
          <div className="text-white font-bold text-lg mb-3">
            {d.name}
          </div>

          {/* Logo */}
          <div className="relative w-14 h-14 mx-auto mb-2 rounded-lg overflow-hidden bg-white p-1">
            <Image
              src={d.logo}
              alt={d.name}
              fill
              className="object-contain rounded-md"
            />
          </div>

          {/* Quốc gia */}
          <div className="text-brand-red text-xs mb-2">
            {d.country}
          </div>

          {/* Mô tả */}
          <div className="text-gray-400 text-xs leading-tight">
            {d.spec}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Dự án tiêu biểu — ảnh từ duantrangchu */}
        <section className="py-16 bg-brand-gray-light">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="section-title">Dự án tiêu biểu</h2>
              <p className="section-subtitle">Được tin tưởng bởi những thương hiệu lớn tại Việt Nam và quốc tế</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(p => (
                <div key={p.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-brand-red transition-all duration-300 group">
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3 bg-brand-red text-white text-xs px-2 py-1 rounded">{p.type}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-brand-gray mb-3 group-hover:text-brand-red transition-colors">{p.name}</h3>
                    <ul className="space-y-1">
                      {p.systems.map(sys => (
                        <li key={sys} className="text-xs text-brand-gray-mid flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />{sys}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/du-an" className="btn-primary px-10 py-3">Xem tất cả dự án</Link>
            </div>
          </div>
        </section>

        {/* Khách hàng */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="container-main">
            <h2 className="text-center text-sm font-semibold text-brand-gray-mid uppercase tracking-widest mb-8">
              Khách hàng tin tưởng Bảo An Engineering
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {clients.map(name => (
                <span key={name} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-brand-gray font-medium hover:border-brand-red hover:text-brand-red transition-colors cursor-default">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Tiêu chuẩn */}
        <section className="py-16 bg-brand-gray text-white">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Áp dụng tiêu chuẩn quốc tế</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Mỗi công trình được thiết kế và thi công theo tiêu chuẩn quốc tế nghiêm ngặt nhất —
                  đảm bảo bảo hiểm công trình và an toàn pháp lý tại Việt Nam.
                </p>
                <Link href="/tieu-chuan" className="btn-outline border-white text-white hover:bg-white hover:text-brand-gray text-sm py-2 px-6">
                  Tìm hiểu các tiêu chuẩn
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { code: 'NFPA', country: 'Hoa Kỳ', full: 'National Fire Protection Association' },
                  { code: 'APSAD', country: 'Pháp', full: 'Assemblée Plénière des Sociétés Assurances' },
                  { code: 'TCVN', country: 'Việt Nam', full: 'Tiêu chuẩn Quốc gia Việt Nam về PCCC' },
                ].map(s => (
                  <div key={s.code} className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-brand-red transition-colors">
                    <div className="text-xl font-bold text-brand-red mb-1">{s.code}</div>
                    <div className="text-sm text-white font-medium mb-1">{s.country}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{s.full}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-red text-white">
          <div className="container-main text-center">
            <h2 className="text-3xl font-bold mb-3">Cần tư vấn hệ thống PCCC cho công trình?</h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Kỹ sư Bảo An sẵn sàng khảo sát và tư vấn miễn phí. Báo giá trong vòng 24 giờ.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+84968552345" className="bg-white text-brand-red font-bold px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
                Gọi ngay: 0968 552 345
              </a>
              <Link href="/bao-gia" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-brand-red transition-colors">
                Gửi yêu cầu báo giá
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a href="tel:+84968552345" className="fixed bottom-6 right-6 z-50 bg-brand-red text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-brand-red-dark transition-colors" title="Gọi: 0968 552 345">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>
      </a>
    </>
  )
}
