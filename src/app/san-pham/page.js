import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { categories } from '@/app/data/products'

export const metadata = {
  title: 'Sản phẩm PCCC',
  description: 'Vật tư thiết bị PCCC: ống thép, đầu phun Sprinkler, van điều khiển, hosereel, bình chữa cháy — đầy đủ tiêu chuẩn UL, FM, ASTM, ANSI, TCVN.',
}

export default function SanPhamPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2">
            <Link href="/" className="hover:text-brand-red transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium">Sản phẩm PCCC</span>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-brand-gray text-white py-10">
          <div className="container-main">
            <h1 className="text-2xl font-bold mb-2">Catalogue vật tư thiết bị PCCC</h1>
            <p className="text-gray-400 text-sm max-w-2xl">
              Vật tư PCCC chính hãng từ Tyco, Fivalco, Potter, Jakob, Jotun — đầy đủ chứng nhận UL, FM, ASTM, ANSI, TCVN,
              sản xuất và cung ứng theo hồ sơ vật tư đã được phê duyệt tại các công trình thực tế.
            </p>
          </div>
        </div>

        <div className="container-main py-10">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar danh mục */}
            <aside className="lg:w-60 flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden sticky top-24">
                <div className="bg-brand-red text-white text-sm font-semibold px-4 py-3">
                  Danh mục sản phẩm
                </div>
                <div className="p-2">
                  {categories.map(cat => (
                    <a key={cat.id} href={`#${cat.id}`}
                      className="flex items-center gap-2 px-3 py-2.5 text-sm text-brand-gray hover:bg-brand-red-light hover:text-brand-red rounded-lg transition-colors">
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                      {cat.title}
                    </a>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-100 bg-brand-red-light">
                  <p className="text-xs text-brand-gray-mid mb-2">Cần tư vấn sản phẩm?</p>
                  <a href="tel:+84968552345" className="btn-primary text-xs py-2 px-3 w-full justify-center">
                    Gọi: 0968 552 345
                  </a>
                </div>
              </div>
            </aside>

            {/* Nội dung sản phẩm */}
            <div className="flex-1 space-y-14">
              {categories.map(cat => (
                <div key={cat.id} id={cat.id}>
                  {/* Tiêu đề danh mục */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1 h-7 bg-brand-red rounded-full" />
                    <h2 className="text-xl font-bold text-brand-gray">{cat.title}</h2>
                    <span className="text-xs bg-brand-red-light text-brand-red px-2 py-0.5 rounded-full">
                      {cat.products.length} sản phẩm
                    </span>
                  </div>
                  <p className="text-brand-gray-mid text-sm mb-6 pl-5">{cat.desc}</p>

                  {/* Danh sách sản phẩm */}
                  <div className="space-y-5">
                    {cat.products.map(p => (
                      <div key={p.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-brand-red hover:shadow-md transition-all duration-200">
                        <div className="grid md:grid-cols-4 gap-0">
                          {/* Ảnh sản phẩm */}
                          <Link
                            href={`/san-pham/${p.id}`}
                            className="md:col-span-1 bg-gray-50 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-100 min-h-[200px]"
                          >
                            <div className="relative w-full max-w-[200px] h-48">
                              <Image
                                src={p.img}
                                alt={p.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </Link>

                          {/* Thông tin sản phẩm */}
                          <div className="md:col-span-3 p-6">
                            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                              <div>
                                <p className="text-xs text-brand-gray-mid font-medium mb-1">Mã: {p.code}</p>
                                <Link href={`/san-pham/${p.id}`}>
                                  <h3 className="text-lg font-bold text-brand-gray hover:text-brand-red transition-colors">{p.name}</h3>
                                </Link>
                                <span className="text-xs bg-brand-red-light text-brand-red px-2 py-0.5 rounded-full mt-1 inline-block">
                                  {p.brand}
                                </span>
                              </div>
                              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                <Link
                                  href={`/bao-gia?sp=${encodeURIComponent(p.name)}`}
                                  className="btn-primary text-sm py-2 px-4"
                                >
                                  Yêu cầu báo giá
                                </Link>
                                <Link
                                  href={`/san-pham/${p.id}`}
                                  className="text-xs text-brand-red font-semibold hover:underline"
                                >
                                  Xem chi tiết →
                                </Link>
                              </div>
                            </div>

                            <p className="text-brand-gray-mid text-sm leading-relaxed mb-4">{p.desc}</p>

                            {/* Thông số kỹ thuật */}
                            <div>
                              <p className="text-xs font-semibold text-brand-gray uppercase tracking-wide mb-2">
                                Thông số kỹ thuật
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                {p.specs.map(spec => (
                                  <div key={spec.label} className="flex items-start gap-2 text-xs bg-gray-50 rounded-lg px-3 py-2">
                                    <span className="text-brand-gray-mid min-w-[100px] flex-shrink-0">{spec.label}:</span>
                                    <span className="text-brand-gray font-medium leading-relaxed">{spec.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Banner liên hệ */}
              <div className="bg-brand-gray rounded-xl p-8 text-white text-center">
                <h3 className="text-xl font-bold mb-2">Cần báo giá hoặc catalogue chi tiết?</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Liên hệ đội ngũ kỹ thuật để nhận báo giá và tư vấn lựa chọn thiết bị phù hợp với công trình của bạn
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="tel:+84968552345" className="btn-primary">
                    Gọi: 0968 552 345
                  </a>
                  <Link href="/bao-gia" className="btn-outline border-white text-white hover:bg-white hover:text-brand-gray">
                    Form báo giá online
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
