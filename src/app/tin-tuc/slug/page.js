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

              {/* 1. Danh mục + Title */}
              <span className={`inline-block text-xs px-2 py-0.5 rounded-full mb-4 ${post.catColor}`}>
                {post.cat}
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-gray">
                {post.title}
              </h1>

              {/* 2. Ngày đăng */}
              <div className="mt-4 flex items-center gap-2 text-sm text-brand-gray-mid">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} đọc</span>
              </div>

              {/* 3. Điểm nổi bật */}
              {post.highlights && (
                <div className="my-8 rounded-xl border border-red-200 bg-red-50 p-6">
                  <h3 className="mb-4 text-lg font-bold text-red-700">
                    📌 Điểm nổi bật
                  </h3>
                  {post.highlights}
                </div>
              )}

              {/* 4. Video (nếu có) - size vừa phải + nguồn nhỏ */}
              {post.video && (
                <div className="my-8">
                  <div className="mx-auto max-w-2xl overflow-hidden rounded-xl bg-black">
                    <video
                      controls
                      className="w-full max-h-[420px] rounded-xl"
                      preload="metadata"
                    >
                      <source src={post.video} type="video/mp4" />
                    </video>
                  </div>
                  {post.videoSource && (
                    <p className="mt-2 text-xs italic text-center text-gray-500">
                      Nguồn video: {post.videoSource}
                    </p>
                  )}
                </div>
              )}

              {/* 5. Nội dung bài viết */}
              <div className="prose max-w-none mt-4">
                {post.content}
              </div>

              {/* 6. Ảnh minh họa trong bài (chỉ hiện khi content KHÔNG phải component
                   tự chèn ảnh riêng - xem quy ước heroImage trong data.js) */}
              {post.heroImage && (
                <div className="my-8">
                  <div className="mx-auto max-w-2xl relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {post.imageSource && (
                    <p className="mt-2 text-xs italic text-center text-gray-500">
                      Ảnh: {post.imageSource}
                    </p>
                  )}
                </div>
              )}

              {/* Nguồn bài viết gốc (nếu là tin tổng hợp từ báo khác) */}
              {post.sources && (
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium mb-2">Nguồn tham khảo:</p>
                  <ul className="space-y-1 text-sm">
                    {post.sources.map((source, index) => (
                      source?.name && (
                        <li key={index}>
                          {index + 1}.{" "}
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-red hover:underline"
                          >
                            {source.name}
                          </a>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              )}

              {/* Nguồn đơn (bài không tổng hợp nhiều nguồn) */}
              {!post.sources && post.source && post.sourceUrl && (
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <p className="text-sm">
                    Nguồn:{" "}
                    <a
                      href={post.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-red hover:underline"
                    >
                      {post.source}
                    </a>
                  </p>
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