import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// ================================================================
// DỮ LIỆU DỰ ÁN — THÊM/SỬA Ở ĐÂY
// Mỗi dự án là 1 object trong mảng này
// ================================================================
const allProjects = [
  {
    slug: 'bigc-thang-long',         // URL: /du-an/bigc-thang-long
    name: 'Big C Thăng Long',
    type: 'Siêu thị & TTTM',
    location: 'Hà Nội',
    year: '2004',
    systems: [
      'Hệ thống chữa cháy tự động Sprinkler',
      'Hệ thống chữa cháy ngoài trời',
      'Hệ thống chữa cháy vách tường Hosereel',
    ],
    images: [
      '/images/duan2/bigc-thang-long.jpg',
      '/images/duan2/bigc-tong.jpg',
      // Thêm ảnh vào đây: '/images/du-an/bigc-thang-long/anh-2.jpg',
    ],
  },
  {
    slug: 'bigc-an-lac',
    name: 'Big C An Lạc',
    type: 'Siêu thị & TTTM',
    location: 'TP. Hồ Chí Minh',
    year: '2001',
    systems: [
      'Hệ thống chữa cháy tự động Sprinkler',
      'Hệ thống chữa cháy ngoài trời',
      'Hệ thống chữa cháy vách tường',
      'Hệ thống báo cháy tự động',
      'Bình chữa cháy',
    ],
    images: [
      '/images/duan2/bigc-an-lac.jpg',
      '/images/duan2/bigc-tong.jpg',
    ],
  },
  {
    slug: 'mm-mega-market-an-phu',
    name: 'MM Mega Market An Phú',
    type: 'Siêu thị & TTTM',
    location: 'TP. Hồ Chí Minh',
    year: '2006',
    systems: [
      'Hệ thống chữa cháy tự động Sprinkler',
      'Hệ thống Hosereel & Hydrant',
      'Họng nước cứu hỏa ngoài trời',
    ],
    images: [
      '/images/duan2/metro-an-phu.jpg',
      '/images/projects/metro-1.jpg',
      '/images/projects/metro-2.jpg',
    ],
  },
  {
    slug: 'intel-viet-nam',
    name: 'Intel Việt Nam',
    type: 'Nhà máy & Khu CN',
    location: 'Bình Dương',
    year: '2008',
    systems: [
      'Hệ thống chữa cháy khí sạch FM200',
      'Hệ thống báo cháy địa chỉ Siemens',
      'Hệ thống Sprinkler tự động',
      'Hệ thống camera an ninh',
    ],
    images: [
      '/images/duan2/khu-cong-nghiep.jpg',
    ],
  },
  {
    slug: 'colgate-palmolive',
    name: 'Nhà máy Colgate Palmolive',
    type: 'Nhà máy & Khu CN',
    location: 'Bình Dương',
    year: '2008',
    systems: [
      'Hệ thống chữa cháy tự động Sprinkler',
      'Hệ thống chữa cháy vách tường',
      'Họng nước cứu hỏa ngoài trời',
    ],
    images: [
      '/images/duan2/colgate.jpg',
    ],
  },
  {
    slug: 'shell-go-dau',
    name: 'Shell Gò Dầu (TOP Solvent)',
    type: 'Nhà máy & Khu CN',
    location: 'Tây Ninh',
    year: '1999',
    systems: [
      'Hệ thống chữa cháy Foam',
      'Hệ thống báo cháy tự động',
      'Hệ thống Hosereel',
    ],
    images: [
      '/images/duan2/shell-go-dau.jpg',
    ],
  },
  {
    slug: 'novotel-da-nang',
    name: 'Novotel Đà Nẵng',
    type: 'Khách sạn',
    location: 'Đà Nẵng',
    year: '2010',
    systems: [
      'Hệ thống Sprinkler tự động (đầu phun concealed)',
      'Hệ thống báo cháy địa chỉ',
      'Hệ thống camera an ninh',
      'Hệ thống Hosereel',
    ],
    images: [
      '/images/projects/novotel.jpg',
    ],
  },
  {
    slug: 'majestic-hotel',
    name: 'Khách sạn Cửu Long — Majestic',
    type: 'Khách sạn',
    location: 'TP. Hồ Chí Minh',
    year: '2000',
    systems: [
      'Hệ thống chữa cháy tự động Sprinkler',
      'Hệ thống báo cháy tự động',
      'Hệ thống Hosereel',
    ],
    images: [
      '/images/duan2/khach-san.jpg',
    ],
  },
  // ================================================================
  // THÊM DỰ ÁN MỚI Ở ĐÂY — copy từ template bên dưới:
  // {
  //   slug: 'ten-du-an',           // dùng ký tự thường, không dấu, nối bằng dấu -
  //   name: 'Tên dự án đầy đủ',
  //   type: 'Loại công trình',     // Siêu thị & TTTM / Nhà máy & Khu CN / Khách sạn / Cao tầng & Căn hộ / Công trình công cộng
  //   location: 'Tỉnh/Thành phố',
  //   year: '2024',
  //   systems: [
  //     'Hạng mục 1',
  //     'Hạng mục 2',
  //   ],
  //   images: [
  //     '/images/du-an/ten-du-an/anh-1.jpg',
  //     '/images/du-an/ten-du-an/anh-2.jpg',
  //   ],
  // },
  // ================================================================
]

// Map loại -> link danh mục
const typeToHref = {
  'Siêu thị & TTTM':       '/du-an/sieu-thi-tttm',
  'Nhà máy & Khu CN':      '/du-an/nha-may-khu-cn',
  'Khách sạn':              '/du-an/khach-san',
  'Cao tầng & Căn hộ':     '/du-an/cao-tang-can-ho',
  'Công trình công cộng':  '/du-an/cong-trinh-cong-cong',
}

export async function generateStaticParams() {
  return allProjects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const project = allProjects.find(p => p.slug === params.slug)
  if (!project) return { title: 'Dự án không tồn tại' }
  return {
    title: project.name,
    description: `Hệ thống PCCC tại ${project.name} — ${project.location}. ${project.systems.join(', ')}.`,
  }
}

export default function DuAnChiTietPage({ params }) {
  const project = allProjects.find(p => p.slug === params.slug)

  // Trang 404 nếu không tìm thấy
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

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">

        {/* Breadcrumb */}
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

            {/* Cột trái: Ảnh */}
            <div className="lg:col-span-2 space-y-4">

              {/* Ảnh chính */}
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-100" style={{paddingBottom:'62%'}}>
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Ảnh phụ (nếu có nhiều hơn 1) */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {project.images.slice(1).map((img, i) => (
                    <div key={i} className="relative rounded-lg overflow-hidden bg-gray-100" style={{paddingBottom:'70%'}}>
                      <Image src={img} alt={`${project.name} ${i + 2}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              )}

              {/* Hạng mục thi công */}
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

              {/* Thông tin cơ bản */}
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h1 className="text-xl font-bold text-brand-gray mb-5 leading-snug">{project.name}</h1>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-brand-red-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-brand-gray-mid mb-0.5">Loại công trình</p>
                      <p className="text-sm font-medium text-brand-gray">{project.type}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-brand-red-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-brand-gray-mid mb-0.5">Địa điểm</p>
                      <p className="text-sm font-medium text-brand-gray">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-brand-red-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-brand-gray-mid mb-0.5">Năm hoàn thành</p>
                      <p className="text-sm font-medium text-brand-gray">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-brand-red-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-brand-gray-mid mb-0.5">Số hạng mục</p>
                      <p className="text-sm font-medium text-brand-gray">{project.systems.length} hạng mục PCCC</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Xem thêm dự án cùng loại */}
              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <p className="text-sm font-semibold text-brand-gray mb-3">Dự án cùng loại</p>
                <Link href={catHref}
                  className="flex items-center gap-2 text-sm text-brand-red hover:underline">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Xem tất cả {project.type}
                </Link>
              </div>

              {/* CTA */}
              <div className="bg-brand-red rounded-xl p-5 text-white">
                <p className="font-bold mb-1 text-sm">Cần tư vấn dự án tương tự?</p>
                <p className="text-red-100 text-xs mb-4">Liên hệ để được khảo sát và báo giá miễn phí</p>
                <div className="space-y-2">
                  <a href="tel:+84968552345"
                    className="flex items-center justify-center gap-2 bg-white text-brand-red font-bold py-2.5 rounded-lg hover:bg-red-50 transition-colors text-sm w-full">
                    Gọi: 0968 552 345
                  </a>
                  <Link href="/bao-gia"
                    className="flex items-center justify-center gap-2 border border-white text-white py-2.5 rounded-lg hover:bg-white hover:text-brand-red transition-colors text-sm w-full">
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
