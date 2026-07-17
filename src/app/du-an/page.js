import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Dự án đã thực hiện',
  description: 'Hơn 500 công trình PCCC đã hoàn thành: Big C/Go!, MM Mega Market, Intel, Colgate, Bosch, FrieslandCampina, VSIP, Novotel...',
}

const projectGroups = [
  {
    group: 'Siêu thị & Trung tâm phân phối',
    href: '/du-an/sieu-thi-tttm',
    projects: [
      { slug: 'bigc-thang-long', name: 'Big C Thăng Long (GO! Thăng Long)', detail: 'Hà Nội', systems: ['Sprinkler tự động', 'Báo cháy tự động', 'Hosereel'], img: '/images/projects/biggg.jpg' },
      { slug: 'bigc-an-lac', name: 'Big C An Lạc (GO! An Lạc)', detail: 'TP. Hồ Chí Minh', systems: ['Sprinkler', 'Chữa cháy vách tường', 'Báo cháy'], img: '/images/projects/canlac.jpg' },
      { slug: 'bigc-can-tho', name: 'Big C Cần Thơ (GO! Cần Thơ)', detail: 'Cần Thơ', systems: ['Sprinkler', 'Báo cháy tự động', 'Hệ thống màn cuốn tự động ngăn khói cháy'], img: '/images/projects/go can tho.jpg' },
      { slug: 'mm-mega-market-an-phu', name: 'MM Mega Market An Phú', detail: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Hosereel & Hydrant', 'Họng nước cứu hỏa'], img: '/images/projects/mm an phu.jpg' },
      { slug: 'mm-mega-market-hiep-phu', name: 'MM Mega Market Hiệp Phú', detail: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Hosereel & Hydrant', 'Họng nước cứu hỏa'], img: '/images/projects/mm hiep phuu.jpg' },
      { slug: 'mm-mega-market-binh-phu', name: 'MM Mega Market Bình Phú', detail: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Đèn chiếu sáng sự cố và thoát hiểm'], img: '/images/projects/mm binh phu.png' },
    ],
  },
  {
    group: 'Nhà máy & Khu công nghiệp',
    href: '/du-an/nha-may-khu-cn',
    projects: [
      { slug: 'robert-bosch', name: 'Nhà máy Robert Bosch', detail: 'Đồng Nai', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Bình chữa cháy xách tay'], img: '/images/projects/bosch.png' },
      { slug: 'tata-coffee', name: 'Nhà máy Tata Coffee', detail: 'Bình Dương', systems: ['Sprinkler tự động', 'Chữa cháy vách tường'], img: '/images/projects/tata.png' },
      { slug: 'tombow', name: 'Nhà máy mới Tombow', detail: 'TP. Hồ Chí Minh', systems: ['Sprinkler', 'Báo cháy', 'Hosereel'], img: '/images/projects/tombow.jpg' },
      { slug: 'shell-go-dau', name: 'Shell Gò Dầu (TOP Solvent)', detail: 'Đồng Nai', systems: ['Chữa cháy tự động', 'Chữa cháy vách tường', 'Họng nước cứu hỏa'], img: '/images/projects/shell.webp' },
      { slug: 'intersnack', name: 'Nhà máy Chế Biến Hạt Điều - Intersnack', detail: 'Đồng Nai', systems: ['Sprinkler', 'Chữa cháy vách tường trong và ngoài nhà', 'Bình chữa cháy xách tay'], img: '/images/projects/intersnack.jpg' },
      { slug: 'frieslandcampina', name: 'FrieslandCampina Việt Nam', detail: 'Bình Dương', systems: ['Hệ thống Sprinkler'], img: '/images/projects/friesland.webp' },
    ],
  },
  {
    group: 'Khách sạn & Cao tầng',
    href: '/du-an/khach-san',
    projects: [
      { slug: 'majestic-hotel', name: 'Khách sạn Majestic', detail: 'TP. Hồ Chí Minh', systems: ['Chữa cháy tự động', 'Chữa cháy vách tường', 'Họng nước cứu hỏa', 'Hệ thống báo cháy'], img: '/images/projects/majestic.webp' },
      { slug: 'novotel-da-nang', name: 'Khách sạn Novotel Đà Nẵng', detail: 'Đà Nẵng', systems: ['Hệ thống chữa cháy tự động khí CO2', 'Hệ thống chữa cháy khí FM200 cho phòng Server'], img: '/images/projects/novotel1.jpg' },
      { slug: 'hung-ngan', name: 'Khu nhà ở cao tầng Hưng Ngân', detail: 'TP. Hồ Chí Minh', systems: ['Hệ thống PCCC và chống sét Block B1'], img: '/images/projects/hung ngan.jpg' },
      { slug: 'saroma-villa', name: 'Biệt thự Saroma Villa - Sala Thủ Thiêm', detail: 'TP. Hồ Chí Minh', systems: ['Sprinkler', 'Chữa cháy vách tường'], img: '/images/projects/saroma.jpg' },
      { slug: 'imperial-vung-tau', name: 'The Imperial Residences', detail: 'Vũng Tàu', systems: ['Sprinkler', 'Chữa cháy vách tường', 'Báo cháy tự động'], img: '/images/projects/imperiall.jpg' },
      { slug: 'riviera-point', name: 'Residential Area Riviera Point', detail: 'TP. Hồ Chí Minh', systems: ['Thiết kế PCCC', 'Hệ thống chống sét'], img: '/images/projects/river.jpeg' },
    ],
  },
  {
    group: 'Công trình công cộng',
    href: '/du-an/cong-trinh-cong-cong',
    projects: [
      { slug: 'ubnd-hcm', name: 'Trụ sở UBND Thành phố Hồ Chí Minh', detail: 'TP. Hồ Chí Minh', systems: ['Camera quan sát', 'Báo cháy tự động'], img: '/images/projects/ubnd.webp' },
      { slug: 'ubnd-dong-nai', name: 'Trụ sở UBND Tỉnh Đồng Nai', detail: 'Đồng Nai', systems: ['Camera quan sát', 'Hệ thống chống sét', 'Báo cháy tự động'], img: '/images/projects/dong nai.jpeg' },
      { slug: 'thu-vien-dong-nai', name: 'Thư Viện Tỉnh Đồng Nai', detail: 'Đồng Nai', systems: ['Hệ thống báo cháy', 'Hệ thống chống sét'], img: '/images/projects/thuvien.jpg' },
    ],
  },
]

const refProjects = [
  { stt: 1,  name: 'Intel Việt Nam', systems: 'Hệ thống chữa cháy tự động', year: '2008' },
  { stt: 2,  name: 'Colgate Palmolive Đà Nẵng', systems: 'Hệ thống chữa cháy tự động', year: '2008' },
  { stt: 3,  name: 'Big C Đồng Nai mở rộng (Gói thầu C3)', systems: 'Hệ thống chữa cháy tự động', year: '2007' },
  { stt: 4,  name: 'Big C Gò Vấp', systems: 'Hệ thống báo cháy', year: '2007' },
  { stt: 5,  name: 'Metro HCMG', systems: 'Hệ thống chữa cháy tự động', year: '2006' },
  { stt: 6,  name: 'Metro Hà Nội 2', systems: 'Hệ thống chữa cháy tự động', year: '2006' },
  { stt: 7,  name: 'Metro Thăng Long', systems: 'Hệ thống chữa cháy ngoài trời · Hosereel · Báo cháy', year: '2006' },
  { stt: 8,  name: 'Big C Hải Phòng', systems: 'Hệ thống chữa cháy tự động', year: '2006' },
  { stt: 9,  name: 'Big C Hoàng Văn Thụ', systems: 'Hệ thống chữa cháy tự động', year: '2005' },
  { stt: 10, name: 'XN Xây Lắp & Cơ Khí Xây dựng', systems: 'Hệ thống chữa cháy', year: '2005' },
  { stt: 11, name: 'Metro Đà Nẵng', systems: 'Hệ thống chữa cháy tự động · Hosereel · Vách tường', year: '2005' },
  { stt: 12, name: 'Metro Hải Phòng', systems: 'Hệ thống chữa cháy tự động', year: '2005' },
  { stt: 13, name: 'Thư viện Tỉnh Đồng Nai', systems: 'Hệ thống chữa cháy tự động · Báo cháy', year: '2004' },
  { stt: 14, name: 'Big C Thăng Long – Hà Nội', systems: 'Hệ thống chữa cháy tự động', year: '2004' },
  { stt: 15, name: 'Metro Cần Thơ', systems: 'Hệ thống chữa cháy tự động · Cấp thoát nước', year: '2003' },
  { stt: 16, name: 'Bayer Sài Gòn – Bình Dương', systems: 'Hệ thống chữa cháy ngoài trời · Hosereel', year: '2003' },
  { stt: 17, name: 'Big C Miền Đông', systems: 'Hệ thống chữa cháy tự động', year: '2003' },
  { stt: 18, name: 'Trung Tâm TM Sa Đéc', systems: 'Hệ thống báo cháy · Chống sét', year: '2002' },
  { stt: 19, name: 'Big C An Lạc', systems: 'Hệ thống chữa cháy tự động · Hosereel · Vách tường · Báo cháy', year: '2001' },
  { stt: 20, name: 'VP Tỉnh Ủy Vĩnh Long', systems: 'Hệ thống báo cháy · Chống sét', year: '2001' },
  { stt: 21, name: 'TT Lưu trữ Tỉnh Vĩnh Long', systems: 'Hệ thống báo động · Chữa cháy CO2 tự động', year: '2001' },
  { stt: 22, name: 'Dụ Tân Phương Nam', systems: 'Hệ thống Camera', year: '2001' },
  { stt: 23, name: 'TT Giải trí Bowling Đầm Sen', systems: 'Hệ thống báo cháy', year: '2001' },
  { stt: 24, name: 'Bưu điện Tây Ninh', systems: 'Hệ thống báo cháy', year: '2001' },
  { stt: 25, name: 'Nhà Máy Dược Sanofi Việt Nam', systems: 'Hệ thống chữa cháy tự động', year: '2000' },
  { stt: 26, name: 'Khách sạn Cửu Long – Majestic', systems: 'Hệ thống chữa cháy tự động · Báo cháy', year: '2000' },
  { stt: 27, name: 'Dy TNHH UNI – PRESIDENT', systems: 'Hệ thống báo cháy', year: '2000' },
  { stt: 28, name: 'Công ty LD Dầu Khí Sông Trà – Quảng Ngãi', systems: 'Hệ thống báo cháy', year: '2000' },
  { stt: 29, name: 'Shell Gò Dầu', systems: 'Hệ thống chữa cháy Foam · Báo cháy', year: '1999' },
  { stt: 30, name: 'Nhà Máy Dược – Vĩnh Long', systems: 'Hệ thống chữa cháy tự động · Báo cháy', year: '1999' },
  { stt: 31, name: 'Kho lưu trữ VP UB Tỉnh Vĩnh Long', systems: 'Hệ thống báo động · Chữa cháy CO2 tự động', year: '1999' },
  { stt: 32, name: 'Khách sạn Bình Minh – Phan Thiết', systems: 'Hệ thống báo cháy · Tổng đài điện thoại', year: '1999' },
  { stt: 33, name: 'BSC Đồng Nai', systems: 'Hệ thống chữa cháy tự động · Báo cháy', year: '1998' },
  { stt: 34, name: 'VP HĐND Tỉnh Vĩnh Long', systems: 'Hệ thống chữa cháy tự động · Camera quan sát', year: '1998' },
  { stt: 35, name: 'Siêu thị Nhật Nam', systems: 'Hệ thống chữa cháy tự động · Báo cháy', year: '1998' },
]

const stats = [
  ['500+', 'Công trình hoàn thành'],
  ['25+', 'Năm kinh nghiệm'],
  ['50+', 'Khách hàng doanh nghiệp'],
  ['3', 'Chi nhánh toàn quốc'],
]

export default function DuAnPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">

        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2">
            <Link href="/" className="hover:text-brand-red">Trang chủ</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium">Dự án đã thực hiện</span>
          </div>
        </div>

        {/* Hero */}
        <div className="relative bg-brand-gray text-white py-12 overflow-hidden">
          <Image src="/images/tieuchuan2/tc-sp-cong-trinh.jpg" alt="Dự án PCCC Bảo An" fill className="object-cover opacity-25" />
          <div className="relative z-10 container-main">
            <h1 className="text-2xl font-bold mb-2">Dự án tiêu biểu</h1>
            <p className="text-gray-400 text-sm max-w-2xl">
              Hơn 500 công trình hoàn thành trong 25 năm — đối tác tin cậy của những thương hiệu
              lớn nhất tại Việt Nam và quốc tế.
            </p>
          </div>
        </div>

        {/* Số liệu */}
        <div className="bg-brand-red text-white">
          <div className="container-main py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {stats.map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold">{num}</div>
                  <div className="text-red-100 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-main py-10 space-y-12">

          {/* Dự án tiêu biểu theo nhóm */}
          {projectGroups.map(group => (
            <div key={group.group}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-7 bg-brand-red rounded-full" />
                  <h2 className="text-xl font-bold text-brand-gray">{group.group}</h2>
                  <span className="text-xs bg-brand-red-light text-brand-red px-2 py-0.5 rounded-full">
                    {group.projects.length} công trình
                  </span>
                </div>
                <Link href={group.href}
                  className="text-xs text-brand-red hover:underline hidden sm:flex items-center gap-1">
                  Xem tất cả
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.projects.map(p => (
                  <Link key={p.slug} href={`/du-an/${p.slug}`}
                    className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-brand-red transition-all duration-300 group block">
                    <div className="relative h-44 bg-gray-100 overflow-hidden">
                      <Image src={p.img} alt={p.name} fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-xs text-gray-300">{p.detail}</p>
                      </div>
                      <div className="absolute top-3 right-3 bg-white/90 text-brand-red text-xs px-2 py-1 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Xem chi tiết
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-brand-gray mb-2 group-hover:text-brand-red transition-colors text-sm leading-snug">
                        {p.name}
                      </h3>
                      <div className="space-y-1">
                        {p.systems.map(sys => (
                          <div key={sys} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                            <span className="text-xs text-brand-gray-mid">{sys}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Bảng dự án tham khảo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 bg-brand-red rounded-full" />
              <h2 className="text-xl font-bold text-brand-gray">Dự án tham khảo</h2>
              <span className="text-xs bg-brand-red-light text-brand-red px-2 py-0.5 rounded-full">
                {refProjects.length} công trình
              </span>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-gray text-white">
                      <th className="px-4 py-3 text-left font-semibold w-10">STT</th>
                      <th className="px-4 py-3 text-left font-semibold">Công trình</th>
                      <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Hạng mục</th>
                      <th className="px-4 py-3 text-left font-semibold w-16">Năm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {refProjects.map((p, i) => (
                      <tr key={p.stt} className={`border-b border-gray-100 hover:bg-brand-red-light transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="px-4 py-3 text-brand-gray-mid font-medium">{p.stt}</td>
                        <td className="px-4 py-3 text-brand-gray font-medium">{p.name}</td>
                        <td className="px-4 py-3 text-brand-gray-mid hidden md:table-cell">{p.systems}</td>
                        <td className="px-4 py-3 text-brand-red font-medium">{p.year}</td>
                      </tr>
                    ))}
                    <tr className="bg-brand-red-light">
                      <td colSpan={4} className="px-4 py-3 text-brand-red text-xs italic text-center">
                        Và còn rất nhiều dự án khác trên toàn quốc
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-gray rounded-xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Bạn cần lắp đặt hệ thống PCCC?</h3>
            <p className="text-gray-400 text-sm mb-5">Liên hệ ngay để được khảo sát và tư vấn miễn phí</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="tel:+84968552345" className="btn-primary">Gọi: 0968 552 345</a>
              <Link href="/bao-gia" className="btn-outline border-white text-white hover:bg-white hover:text-brand-gray">Yêu cầu báo giá</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
