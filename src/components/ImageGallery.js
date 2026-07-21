'use client'
import { useState } from 'react'
import Image from 'next/image'

const THUMB_SHOW = 3

export default function ImageGallery({ images, name }) {
  const [active, setActive]       = useState(0)
  const [thumbStart, setThumbStart] = useState(0)
  const total = images.length

  function goMain(i) {
    setActive(i)
    if (i < thumbStart) setThumbStart(i)
    else if (i >= thumbStart + THUMB_SHOW) setThumbStart(i - THUMB_SHOW + 1)
  }

  function prevThumb() {
    const newStart = Math.max(0, thumbStart - 1)
    setThumbStart(newStart)
  }

  function nextThumb() {
    const maxStart = Math.max(0, total - THUMB_SHOW)
    const newStart = Math.min(maxStart, thumbStart + 1)
    setThumbStart(newStart)
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
      </div>

      {/* Thumbnail slider */}
      {total > 1 && (
        <div className="flex items-stretch gap-2">

          {/* Nút trái */}
          <button
            onClick={prevThumb}
            disabled={thumbStart === 0}
            aria-label="Ảnh trước"
            className="w-8 flex-shrink-0 rounded-lg border border-gray-200 flex items-center justify-center text-brand-gray bg-white hover:border-brand-red hover:text-brand-red transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Thumbnails */}
          <div className="flex gap-2 flex-1">
            {Array.from({ length: THUMB_SHOW }).map((_, idx) => {
              const realIdx = thumbStart + idx
              if (realIdx >= total) {
                // Ô trống nếu không đủ ảnh
                return <div key={idx} className="flex-1" />
              }

              const isActive = realIdx === active
              // Mờ thumbnail cuối nếu còn ảnh phía sau
              const isDimmed = idx === THUMB_SHOW - 1 && thumbStart + THUMB_SHOW < total

              return (
                <button
                  key={realIdx}
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
                  {/* Lớp mờ + số ảnh còn lại */}
                  {isDimmed && (
                    <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        +{total - thumbStart - THUMB_SHOW}
                      </span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Nút phải */}
          <button
            onClick={nextThumb}
            disabled={thumbStart + THUMB_SHOW >= total}
            aria-label="Ảnh tiếp theo"
            className="w-8 flex-shrink-0 rounded-lg border border-gray-200 flex items-center justify-center text-brand-gray bg-white hover:border-brand-red hover:text-brand-red transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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
