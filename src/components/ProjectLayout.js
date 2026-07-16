import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const categories = [
  { label: 'Tất cả dự án',         href: '/du-an' },
  { label: 'Siêu thị & TTTM',      href: '/du-an/sieu-thi-tttm' },
  { label: 'Nhà máy & Khu CN',     href: '/du-an/nha-may-khu-cn' },
  { label: 'Khách sạn',            href: '/du-an/khach-san' },
  { label: 'Cao tầng & Căn hộ',    href: '/du-an/cao-tang-can-ho' },
  { label: 'Công trình công cộng', href: '/du-an/cong-trinh-cong-cong' },
]

export default function ProjectLayout({ title, desc, currentHref, projects, stats }) {
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
            {currentHref !== '/du-an' && (
              <>
                <span>/</span>
                <span className="text-brand-gray font-medium">{title}</span>
              </>
            )}
          </div>
        </div>

        {/* Hero */}
        <div className="bg-brand-gray text-white py-10">
          <div className="container-main">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p className="text-gray-400 text-sm max-w-2xl">{desc}</p>
          </div>
        </div>

        {/* Số liệu */}
        {stats && (
          <div className="bg-brand-red text-white">
            <div className="container-main py-5">
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
        )}

        <div className="container-main py-10">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar */}
            <aside className="lg:w-56 flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden sticky top-24">
                <div className="bg-brand-red text-white text-sm font-semibold px-4 py-3">
                  Loại công trình
                </div>
                <div className="p-2">
                  {categories.map(cat => (
                    <Link key={cat.href} href={cat.href}
                      className={`flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg transition-colors ${
                        cat.href === currentHref
                          ? 'bg-brand-red-light text-brand-red font-semibold'
                          : 'text-brand-gray hover:bg-brand-red-light hover:text-brand-red'
                      }`}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        cat.href === currentHref ? 'bg-brand-red' : 'bg-gray-300'
                      }`} />
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Lưới dự án */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {projects.map((p, i) => {
                  const CardWrapper = p.slug ? Link : 'div'
                  const wrapperProps = p.slug
                    ? { href: `/du-an/${p.slug}` }
                    : {}
                  return (
                    <CardWrapper key={i} {...wrapperProps}
                      className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-brand-red transition-all duration-300 group block">
                      <div className="relative h-48 bg-gray-100 overflow-hidden">
                        <Image src={p.img} alt={p.name} fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        {p.location && (
                          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs">
                            <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {p.location}
                          </div>
                        )}
                        {p.slug && (
                          <div className="absolute top-3 right-3 bg-white/90 text-brand-red text-xs px-2 py-1 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Xem chi tiết
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-brand-gray mb-3 group-hover:text-brand-red transition-colors leading-snug">
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
                    </CardWrapper>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="mt-10 bg-brand-gray rounded-xl p-8 text-white text-center">
                <h3 className="text-xl font-bold mb-2">Cần tư vấn hệ thống PCCC?</h3>
                <p className="text-gray-400 text-sm mb-5">Liên hệ ngay để được khảo sát và báo giá miễn phí</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="tel:+84968552345" className="btn-primary">Gọi: 0968 552 345</a>
                  <Link href="/bao-gia" className="btn-outline border-white text-white hover:bg-white hover:text-brand-gray">
                    Yêu cầu báo giá
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
