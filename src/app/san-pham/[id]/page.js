import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { categories, findProductById, getAllProductIds }  from '@/app/data/products'

export async function generateStaticParams() {
  return getAllProductIds().map(id => ({ id }))
}

export async function generateMetadata({ params }) {
  const found = findProductById(params.id)
  if (!found) return { title: 'Sản phẩm không tồn tại' }
  const { product } = found
  return {
    title: `${product.name} | Sản phẩm PCCC`,
    description: product.desc,
  }
}

export default function ChiTietSanPhamPage({ params }) {
  const found = findProductById(params.id)
  if (!found) notFound()

  const { product, category } = found

  // Sản phẩm liên quan cùng danh mục (tối đa 3)
  const related = category.products.filter(p => p.id !== product.id).slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-brand-red transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/san-pham" className="hover:text-brand-red transition-colors">Sản phẩm PCCC</Link>
            <span>/</span>
            <Link href={`/san-pham#${category.id}`} className="hover:text-brand-red transition-colors">{category.title}</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium">{product.name}</span>
          </div>
        </div>

        <div className="container-main py-10">
          {/* Khối thông tin chính */}
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Ảnh sản phẩm */}
              <div className="bg-gray-50 flex items-center justify-center p-10 border-b md:border-b-0 md:border-r border-gray-100 min-h-[360px]">
                <div className="relative w-full max-w-[320px] h-80">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Thông tin */}
              <div className="p-8">
                <p className="text-xs text-brand-gray-mid font-medium mb-2">Mã sản phẩm: {product.code}</p>
                <h1 className="text-2xl font-bold text-brand-gray mb-2">{product.name}</h1>
                <span className="text-xs bg-brand-red-light text-brand-red px-3 py-1 rounded-full inline-block mb-4">
                  {product.brand}
                </span>

                <p className="text-brand-gray-mid text-sm leading-relaxed mb-6">
                  {product.desc}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <Link
                    href={`/bao-gia?sp=${encodeURIComponent(product.name)}`}
                    className="btn-primary text-sm py-2.5 px-5"
                  >
                    Yêu cầu báo giá
                  </Link>
                  <a href="tel:+84968552345" className="btn-outline text-sm py-2.5 px-5">
                    Gọi: 0968 552 345
                  </a>
                </div>

                {/* Thông số kỹ thuật nhanh */}
                <div>
                  <p className="text-xs font-semibold text-brand-gray uppercase tracking-wide mb-2">
                    Thông số kỹ thuật
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {product.specs.map(spec => (
                      <div key={spec.label} className="flex items-start gap-2 text-xs bg-gray-50 rounded-lg px-3 py-2">
                        <span className="text-brand-gray-mid min-w-[100px] flex-shrink-0">{spec.label}:</span>
                        <span className="text-brand-gray font-medium leading-relaxed">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mô tả chi tiết */}
            <div className="border-t border-gray-100 p-8">
              <h2 className="text-lg font-bold text-brand-gray mb-3">Mô tả chi tiết & ứng dụng</h2>
              <p className="text-brand-gray-mid text-sm leading-relaxed whitespace-pre-line">
                {product.detail || product.desc}
              </p>
            </div>
          </div>

          {/* Sản phẩm liên quan */}
          {related.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-7 bg-brand-red rounded-full" />
                <h2 className="text-xl font-bold text-brand-gray">Sản phẩm cùng danh mục</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map(p => (
                  <Link
                    key={p.id}
                    href={`/san-pham/${p.id}`}
                    className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-brand-red hover:shadow-md transition-all duration-200 block"
                  >
                    <div className="bg-gray-50 flex items-center justify-center p-6 h-40 border-b border-gray-100">
                      <div className="relative w-full h-full">
                        <Image src={p.img} alt={p.name} fill className="object-contain" />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-brand-gray-mid mb-1">Mã: {p.code}</p>
                      <h3 className="text-sm font-bold text-brand-gray hover:text-brand-red transition-colors line-clamp-2">
                        {p.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Banner liên hệ */}
          <div className="bg-brand-gray rounded-xl p-8 text-white text-center mt-12">
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
      </main>
      <Footer />
    </>
  )
}
