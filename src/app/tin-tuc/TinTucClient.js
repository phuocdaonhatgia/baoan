'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { posts } from './data'

const TABS = [
  { key: 'tin-tuc', label: 'Tin tức' },
  { key: 'video', label: 'Video' },
  { key: 'hinh-anh', label: 'Hình ảnh' },
]

const ITEMS_PER_PAGE = 6

export default function TinTucClient() {
  const [activeTab, setActiveTab] = useState('tin-tuc')
  const [page, setPage] = useState(1)

  const filtered = posts.filter(p => p.type === activeTab)

  // Bài nổi bật chỉ hiện ở tab "Tin tức", trang 1
  const showFeatured = activeTab === 'tin-tuc' && page === 1 && filtered.length > 0
  const featured = showFeatured ? filtered[0] : null
  const gridSource = showFeatured ? filtered.slice(1) : filtered

  const totalPages = Math.max(1, Math.ceil(gridSource.length / ITEMS_PER_PAGE))
  const start = (page - 1) * ITEMS_PER_PAGE
  const pageItems = gridSource.slice(start, start + ITEMS_PER_PAGE)

  function handleTabChange(key) {
    setActiveTab(key)
    setPage(1)
  }

  function goToPage(p) {
    if (p < 1 || p > totalPages) return
    setPage(p)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isEmpty = !featured && gridSource.length === 0

  return (
    <main className="min-h-screen bg-brand-gray-light">
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2">
          <Link href="/" className="hover:text-brand-red">Trang chủ</Link>
          <span>/</span>
          <span className="text-brand-gray font-medium">Tin tức & Kiến thức</span>
        </div>
      </div>

      <div className="bg-brand-gray text-white py-12">
        <div className="container-main">
          <h1 className="text-2xl font-bold mb-2">Tin tức & Kiến thức PCCC</h1>
          <p className="text-gray-400 text-sm">Cập nhật thông tin mới nhất về PCCC, quy định pháp luật và kiến thức chuyên sâu</p>
        </div>
      </div>

      <div className="container-main py-10">

        {/* Tabs: Tin tức / Video / Hình ảnh */}
        <div className="flex items-center gap-1 mb-8 border-b border-gray-200">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`px-5 py-3 text-sm font-semibold border-b-2 -mb-px transition-colors ${
                activeTab === tab.key
                  ? 'border-brand-red text-brand-red'
                  : 'border-transparent text-brand-gray-mid hover:text-brand-gray'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {isEmpty ? (
          <div className="text-center py-20 text-brand-gray-mid bg-white rounded-xl border border-gray-100">
            <p>Chưa có nội dung nào trong mục này.</p>
            <p className="text-sm mt-1">Nội dung sẽ được cập nhật sớm.</p>
          </div>
        ) : (
          <>
            {/* Bài viết nổi bật */}
            {featured && (
              <Link
                href={`/tin-tuc/slug?slug=${featured.slug}`}
                className="group block bg-white rounded-xl border border-gray-100 overflow-hidden mb-8 hover:border-brand-red hover:shadow-lg transition-all"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto overflow-hidden bg-gray-100">
                    <Image src={featured.img} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-brand-red text-white text-xs px-3 py-1 rounded-full font-medium">
                      Mới nhất
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className={`inline-block text-xs px-2 py-0.5 rounded-full self-start mb-3 ${featured.catColor}`}>
                      {featured.cat}
                    </span>
                    <h2 className="text-xl font-bold text-brand-gray mb-3 group-hover:text-brand-red transition-colors leading-snug">
                      {featured.title}
                    </h2>
                    <p className="text-brand-gray-mid text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-brand-gray-mid">
                        {featured.date} · {featured.readTime} đọc · <span className="text-brand-red">{featured.source}</span>
                      </div>
                      <span className="text-sm text-brand-red font-medium group-hover:underline">Đọc tiếp</span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Lưới bài viết */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageItems.map(p => (
                <Link
                  key={p.id}
                  href={`/tin-tuc/slug?slug=${p.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-brand-red hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative h-44 bg-gray-100 overflow-hidden">
                    <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${p.catColor}`}>{p.cat}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-brand-gray text-sm mb-2 leading-snug group-hover:text-brand-red transition-colors flex-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-brand-gray-mid leading-relaxed mb-4 line-clamp-3">{p.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="text-xs text-brand-gray-mid">
                        {p.date} · <span className="text-brand-red">{p.source}</span>
                      </div>
                      <span className="text-xs text-brand-red font-medium group-hover:underline">Đọc tiếp</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Phân trang 1 2 3 */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  className="w-9 h-9 rounded-full border border-gray-200 bg-white text-brand-gray-mid text-sm flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Trang trước"
                >
                  ‹
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                  <button
                    key={num}
                    onClick={() => goToPage(num)}
                    className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
                      page === num
                        ? 'bg-brand-red text-white'
                        : 'bg-white text-brand-gray-mid border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {num}
                  </button>
                ))}

                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  className="w-9 h-9 rounded-full border border-gray-200 bg-white text-brand-gray-mid text-sm flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Trang sau"
                >
                  ›
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}