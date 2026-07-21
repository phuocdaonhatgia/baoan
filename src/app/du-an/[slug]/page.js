import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ImageGallery from '@/components/ImageGallery'

const allProjects = [
  { slug: 'bigc-thang-long', name: 'Big C Thăng Long (GO! Thăng Long)', type: 'Siêu thị & TTTM', location: 'Hà Nội', year: '2004', systems: ['Hệ thống chữa cháy tự động Sprinkler', 'Hệ thống chữa cháy ngoài trời', 'Hệ thống chữa cháy vách tường Hosereel'], images: ['/images/duan2/bigc-thang-long.jpg', '/images/duan2/bigc-an-lac.jpg', '/images/duan2/bigc-tong.jpg'] },
  { slug: 'bigc-an-lac', name: 'Big C An Lạc (GO! An Lạc)', type: 'Siêu thị & TTTM', location: 'TP. Hồ Chí Minh', year: '2001', systems: ['Hệ thống chữa cháy tự động Sprinkler', 'Hệ thống chữa cháy ngoài trời', 'Hệ thống chữa cháy vách tường', 'Hệ thống báo cháy tự động', 'Bình chữa cháy'], images: ['/images/duan2/bigc-an-lac.jpg', '/images/duan2/bigc-tong.jpg'] },
  { slug: 'bigc-can-tho', name: 'Big C Cần Thơ (GO! Cần Thơ)', type: 'Siêu thị & TTTM', location: 'Cần Thơ', year: '2007', systems: ['Hệ thống Sprinkler tự động', 'Hệ thống báo cháy tự động', 'Màn cuốn tự động ngăn khói cháy'], images: ['/images/duan2/bigc-tong.jpg'] },
  { slug: 'mm-mega-market-an-phu', name: 'MM Mega Market An Phú', type: 'Siêu thị & TTTM', location: 'TP. Hồ Chí Minh', year: '2006', systems: ['Hệ thống Sprinkler tự động', 'Hệ thống Hosereel & Hydrant', 'Họng nước cứu hỏa ngoài trời'], images: ['/images/duan2/metro-an-phu.jpg', '/images/duan2/metro-hiep-phu.jpg', '/images/projects/metro-1.jpg', '/images/projects/metro-2.jpg'] },
  { slug: 'mm-mega-market-hiep-phu', name: 'MM Mega Market Hiệp Phú', type: 'Siêu thị & TTTM', location: 'TP. Hồ Chí Minh', year: '2006', systems: ['Hệ thống Sprinkler tự động', 'Hệ thống Hosereel & Hydrant', 'Họng nước cứu hỏa'], images: ['/images/duan2/metro-hiep-phu.jpg', '/images/projects/metro-3.jpg'] },
  { slug: 'mm-mega-market-binh-phu', name: 'MM Mega Market Bình Phú', type: 'Siêu thị & TTTM', location: 'TP. Hồ Chí Minh', year: '2007', systems: ['Hệ thống Sprinkler tự động', 'Hệ thống chữa cháy vách tường', 'Đèn chiếu sáng sự cố và thoát hiểm'], images: ['/images/duan2/metro-an-phu.jpg'] },
  { slug: 'robert-bosch', name: 'Nhà máy Robert Bosch', type: 'Nhà máy & Khu CN', location: 'Đồng Nai', year: '2010', systems: ['Hệ thống Sprinkler tự động', 'Hệ thống chữa cháy vách tường', 'Bình chữa cháy xách tay'], images: ['/images/duan2/nha-may.jpg'] },
  { slug: 'tata-coffee', name: 'Nhà máy Tata Coffee', type: 'Nhà máy & Khu CN', location: 'Bình Dương', year: '2012', systems: ['Hệ thống Sprinkler tự động', 'Hệ thống chữa cháy vách tường'], images: ['/images/duan2/nha-may.jpg'] },
  { slug: 'shell-go-dau', name: 'Shell Gò Dầu (TOP Solvent)', type: 'Nhà máy & Khu CN', location: 'Đồng Nai', year: '1999', systems: ['Hệ thống chữa cháy Foam', 'Hệ thống báo cháy tự động', 'Hệ thống Hosereel'], images: ['/images/duan2/shell-go-dau.jpg'] },
  { slug: 'intersnack', name: 'Nhà máy Chế Biến Hạt Điều - Intersnack', type: 'Nhà máy & Khu CN', location: 'Đồng Nai', year: '2009', systems: ['Hệ thống Sprinkler', 'Chữa cháy vách tường trong và ngoài nhà', 'Bình chữa cháy xách tay'], images: ['/images/duan2/khu-cong-nghiep.jpg'] },
  { slug: 'frieslandcampina', name: 'FrieslandCampina Việt Nam', type: 'Nhà máy & Khu CN', location: 'Bình Dương', year: '2010', systems: ['Hệ thống Sprinkler tự động'], images: ['/images/duan2/colgate.jpg'] },
  { slug: 'intel-viet-nam', name: 'Intel Việt Nam', type: 'Nhà máy & Khu CN', location: 'Bình Dương', year: '2008', systems: ['Hệ thống chữa cháy khí sạch FM200', 'Hệ thống báo cháy địa chỉ Siemens', 'Hệ thống Sprinkler tự động', 'Camera an ninh'], images: ['/images/duan2/khu-cong-nghiep.jpg'] },
  { slug: 'colgate-palmolive', name: 'Nhà máy Colgate Palmolive', type: 'Nhà máy & Khu CN', location: 'Bình Dương', year: '2008', systems: ['Hệ thống Sprinkler tự động', 'Hệ thống chữa cháy vách tường', 'Họng nước cứu hỏa ngoài trời'], images: ['/images/duan2/colgate.jpg'] },
  { slug: 'majestic-hotel', name: 'Khách sạn Majestic', type: 'Khách sạn', location: 'TP. Hồ Chí Minh', year: '2000', systems: ['Hệ thống chữa cháy tự động', 'Hệ thống chữa cháy vách tường', 'Họng nước cứu hỏa', 'Hệ thống báo cháy'], images: ['/images/duan2/khach-san.jpg'] },
  { slug: 'novotel-da-nang', name: 'Khách sạn Novotel Đà Nẵng', type: 'Khách sạn', location: 'Đà Nẵng', year: '2010', systems: ['Hệ thống chữa cháy tự động khí CO2', 'Hệ thống chữa cháy khí FM200 cho phòng Server'], images: ['/images/projects/novotel.jpg'] },
  { slug: 'hung-ngan', name: 'Khu nhà ở cao tầng Hưng Ngân', type: 'Cao tầng & Căn hộ', location: 'TP. Hồ Chí Minh', year: '2012', systems: ['Hệ thống PCCC và chống sét Block B1'], images: ['/images/duan2/trung-tam.jpg'] },
  { slug: 'imperial-vung-tau', name: 'The Imperial Residences', type: 'Cao tầng & Căn hộ', location: 'Vũng Tàu', year: '2014', systems: ['Hệ thống Sprinkler', 'Hệ thống chữa cháy vách tường', 'Hệ thống báo cháy tự động'], images: ['/images/duan2/trung-tam.jpg'] },
  { slug: 'riviera-point', name: 'Residential Area Riviera Point', type: 'Cao tầng & Căn hộ', location: 'TP. Hồ Chí Minh', year: '2015', systems: ['Thiết kế PCCC', 'Hệ thống chống sét'], images: ['/images/duan2/trung-tam.jpg'] },
  { slug: 'ubnd-hcm', name: 'Trụ sở UBND TP. Hồ Chí Minh', type: 'Công trình công cộng', location: 'TP. Hồ Chí Minh', year: '2005', systems: ['Hệ thống camera quan sát', 'Hệ thống báo cháy tự động'], images: ['/images/duan2/du-an-khac.jpg'] },
  { slug: 'ubnd-dong-nai', name: 'Trụ sở UBND Tỉnh Đồng Nai', type: 'Công trình công cộng', location: 'Đồng Nai', year: '2005', systems: ['Camera quan sát', 'Hệ thống chống sét', 'Báo cháy tự động'], images: ['/images/duan2/du-an-khac.jpg'] },
  { slug: 'thu-vien-dong-nai', name: 'Thư Viện Tỉnh Đồng Nai', type: 'Công trình công cộng', location: 'Đồng Nai', year: '2004', systems: ['Hệ thống báo cháy tự động', 'Hệ thống chống sét'], images: ['/images/duan2/du-an-khac.jpg'] },
]

const typeToHref = {
  'Siêu thị & TTTM':      '/du-an/sieu-thi-tttm',
  'Nhà máy & Khu CN':     '/du-an/nha-may-khu-cn',
  'Khách sạn':             '/du-an/khach-san',
  'Cao tầng & Căn hộ':    '/du-an/cao-tang-can-ho',
  'Công trình công cộng': '/du-an/cong-trinh-cong-cong',
}

export async function generateStaticParams() {
  return allProjects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const project = allProjects.find(p => p.slug === params.slug)
  if (!project) return { title: 'Dự án không tồn tại' }
  return {
    title: project.name,
    description: `PCCC tại ${project.name} — ${project.location}. ${project.systems.join(', ')}.`,
  }
}

export default function DuAnChiTietPage({ params }) {
  const project = allProjects.find(p => p.slug === params.slug)

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-brand-gray-light flex items-center justify-center py-20">
          <div className="text-center px-4">
            <div className="text-6xl font-bold text-brand-red mb-4">404</div>
            <h1 className="text-xl font-bold text-brand-gray mb-3">Không tìm thấy dự án</h1>
            <Link href="/du-an" className="btn-primary">Xem tất cả dự án</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const catHref = typeToHref[project.type] || '/du-an'

  const infoItems = [
    {
      label: 'Loại công trình', value: project.type,
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
    },
    {
      label: 'Địa điểm', value: project.location,
      icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
    },
    {
      label: 'Năm hoàn thành', value: project.year,
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    },
    {
      label: 'Số hạng mục', value: `${project.systems.length} hạng mục PCCC`,
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">

        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-brand-red">Trang chủ</Link>
            <span>/</span>
            <Link href="/du-an" className="hover:text-brand-red">Dự án</Link>
            <span>/</span>
            <Link href={catHref} className="hover:text-brand-red">{project.type}</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium">{project.name}</span>
          </div>
        </div>

        <div className="container-main py-10">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Cột trái: Gallery + hạng mục */}
            <div className="lg:col-span-2 space-y-5">
              <ImageGallery images={project.images} name={project.name} />

              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="font-bold text-brand-gray mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <span className="w-1 h-5 bg-brand-red rounded-full" />
                  Hạng mục thi công
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.systems.map(sys => (
                    <div key={sys} className="flex items-start gap-3 bg-brand-gray-light rounded-lg px-4 py-3">
                      <span className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0 mt-1.5" />
                      <span className="text-sm text-brand-gray">{sys}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cột phải: Thông tin */}
            <div className="space-y-5">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h1 className="text-xl font-bold text-brand-gray mb-5 leading-snug">{project.name}</h1>
                <div className="space-y-4">
                  {infoItems.map(item => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-brand-red-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-brand-gray-mid mb-0.5">{item.label}</p>
                        <p className="text-sm font-medium text-brand-gray">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <p className="text-sm font-semibold text-brand-gray mb-3">Dự án cùng loại</p>
                <Link href={catHref} className="flex items-center gap-2 text-sm text-brand-red hover:underline">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Xem tất cả {project.type}
                </Link>
              </div>

              <div className="bg-brand-red rounded-xl p-5 text-white">
                <p className="font-bold mb-1 text-sm">Cần tư vấn dự án tương tự?</p>
                <p className="text-red-100 text-xs mb-4">Liên hệ để được khảo sát và báo giá miễn phí</p>
                <div className="space-y-2">
                  <a href="tel:+84968552345" className="flex items-center justify-center bg-white text-brand-red font-bold py-2.5 rounded-lg hover:bg-red-50 transition-colors text-sm w-full">
                    Gọi: 0968 552 345
                  </a>
                  <Link href="/bao-gia" className="flex items-center justify-center border border-white text-white py-2.5 rounded-lg hover:bg-white hover:text-brand-red transition-colors text-sm w-full">
                    Gửi yêu cầu báo giá
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
