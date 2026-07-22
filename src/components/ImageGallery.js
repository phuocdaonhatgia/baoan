'use client'
import { useState } from 'react'
import Image from 'next/image'

const THUMB_SHOW = 3

export default function ImageGallery({ images, name }) {
  const [active, setActive] = useState(0)
  const [thumbStart, setThumbStart] = useState(0)
  const total = images.length

  function goMain(i) {
    setActive(i)
  }

  function prevImage() {
    prevThumb()
  }

  function nextImage() {
    nextThumb()
  }

  function prevThumb() {
    const newActive = (active - 1 + total) % total
    const relative = (newActive - thumbStart + total) % total
    if (relative >= THUMB_SHOW) {
      // Nhảy sang cụm 3 ảnh mới, active nằm ở vị trí đầu tiên
      setThumbStart(newActive)
    }
    setActive(newActive)
  }

  function nextThumb() {
    const newActive = (active + 1) % total
    const relative = (newActive - thumbStart + total) % total
    if (relative >= THUMB_SHOW) {
      // Nhảy sang cụm 3 ảnh mới, active nằm ở vị trí đầu tiên
      setThumbStart(newActive)
    }
    setActive(newActive)
  }

  // Lấy danh sách index thumbnail hiển thị, dạng vòng lặp
  function getVisibleThumbIndexes() {
    const indexes = []
    for (let i = 0; i < Math.min(THUMB_SHOW, total); i++) {
      indexes.push((thumbStart + i) % total)
    }
    return indexes
  }

  return (
    <div className="space-y-3">

      {/* Ảnh chính */}
      <div className="relative w-full rounded-xl overflow-hidden bg-gray-100" style={{ height: '420px' }}>
        <Image
          src={images[active]}
          alt={`${name} - ảnh ${active + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority
        />

        {total > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Ảnh trước"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              aria-label="Ảnh tiếp theo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail slider */}
      {total > 1 && (
        <div className="flex items-stretch gap-2">

          {/* Nút trái */}
          <button
            onClick={prevThumb}
            aria-label="Ảnh trước"
            className="w-8 flex-shrink-0 rounded-lg border border-gray-200 flex items-center justify-center text-brand-gray bg-white hover:border-brand-red hover:text-brand-red transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Thumbnails */}
          <div className="flex gap-2 flex-1">
            {getVisibleThumbIndexes().map((realIdx, idx) => {
              const isActive = realIdx === active

              return (
                <button
                  key={`${realIdx}-${idx}`}
                  onClick={() => goMain(realIdx)}
                  className={`relative flex-1 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none ${
                    isActive
                      ? 'ring-2 ring-brand-red ring-offset-1'
                      : 'ring-1 ring-gray-200 hover:ring-brand-red'
                  }`}
                  style={{ height: '90px' }}
                  aria-label={`Xem ảnh ${realIdx + 1}`}
                >
                  <Image
                    src={images[realIdx]}
                    alt={`${name} thumbnail ${realIdx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              )
            })}
          </div>

          {/* Nút phải */}
          <button
            onClick={nextThumb}
            aria-label="Ảnh tiếp theo"
            className="w-8 flex-shrink-0 rounded-lg border border-gray-200 flex items-center justify-center text-brand-gray bg-white hover:border-brand-red hover:text-brand-red transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
