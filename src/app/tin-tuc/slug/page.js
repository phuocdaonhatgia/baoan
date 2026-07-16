import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { posts, getPostBySlug } from '../data'

export async function generateMetadata({ searchParams }) {
  const post = getPostBySlug(searchParams?.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Bảo An Engineering`,
    description: post.excerpt,
  }
}

export default function BaiVietChiTietPage({ searchParams }) {
  const post = getPostBySlug(searchParams?.slug)
  if (!post) notFound()

  const related = posts
    .filter(p => p.slug !== post.slug && p.type === post.type)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">

        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-brand-red">Trang chủ</Link>
            <span>/</span>
            <Link href="/tin-tuc" className="hover:text-brand-red">Tin tức & Kiến thức</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium line-clamp-1">{post.title}</span>
          </div>
        </div>

        <div className="container-main py-10">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Nội dung chính */}
            <article className="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-6 md:p-10">
              <span className={`inline-block text-xs px-2 py-0.5 rounded-full mb-4 ${post.catColor}`}>
                {post.cat}
              </span>

              <h1 className="text-2xl md:text-3xl font-bold text-brand-gray mb-4 leading-snug">
                {post.title}
              </h1>

              <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs text-brand-gray-mid mb-6 pb-6 border-b border-gray-100">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} đọc</span>
                <span>·</span>
                <span className="text-brand-red font-medium">{post.source}</span>
              </div>

              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden bg-gray-100 mb-8">
                <Image src={post.img} alt={post.title} fill className="object-cover" priority />
              </div>

              {/* Văn bản mẫu — thay bằng nội dung thật */}
              <div className="prose prose-sm md:prose-base max-w-none text-brand-gray-mid leading-relaxed space-y-4">
                {post.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Ảnh mẫu bổ sung — thay bằng ảnh thật nếu cần */}
              {post.gallery && post.gallery.length > 1 && (
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {post.gallery.map((src, i) => (
                    <div key={i} className="relative h-48 rounded-lg overflow-hidden bg-gray-100">
                      <Image src={src} alt={`${post.title} - ảnh ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {/* Nguồn bài viết gốc (nếu là tin tổng hợp từ báo khác) */}
              {post.sourceUrl && (
                <div className="mt-10 pt-6 border-t border-gray-100 text-sm text-brand-gray-mid">
                  Nguồn:{' '}
                  <a
                    href={post.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red font-medium hover:underline"
                  >
                    {post.source}
                  </a>
                </div>
              )}

              {/* Link liên quan tới sản phẩm/dịch vụ nội bộ (nếu có) */}
              {post.relatedLink && (
                <div className="mt-4">
                  <Link href={post.relatedLink} className="text-brand-red font-medium text-sm hover:underline">
                    Xem sản phẩm / dịch vụ liên quan →
                  </Link>
                </div>
              )}

              <div className="mt-10">
                <Link href="/tin-tuc" className="text-sm text-brand-gray-mid hover:text-brand-red">
                  ← Quay lại danh sách tin tức
                </Link>
              </div>
            </article>

            {/* Sidebar bài viết liên quan */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-100 p-6 sticky top-6">
                <h3 className="font-bold text-brand-gray mb-4 text-sm uppercase tracking-wide">
                  Bài viết liên quan
                </h3>
                <div className="space-y-4">
                  {related.length === 0 && (
                    <p className="text-xs text-brand-gray-mid">Chưa có bài viết liên quan.</p>
                  )}
                  {related.map(p => (
                    <Link
                      key={p.id}
                      href={`/tin-tuc/slug?slug=${p.slug}`}
                      className="group flex gap-3 items-start"
                    >
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                        <Image src={p.img} alt={p.title} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-brand-gray group-hover:text-brand-red transition-colors line-clamp-2 leading-snug">
                          {p.title}
                        </p>
                        <p className="text-xs text-brand-gray-mid mt-1">{p.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}