'use client'
import { useState } from 'react'
import Image from "next/image";

// Thay số Zalo của Bảo An vào đây
const ZALO_NUMBER = '0968552345'
const PHONE_NUMBER = '+84968552345'

export default function FloatingButtons() {
  const [showTooltip, setShowTooltip] = useState(null)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Nút Zalo */}
      <div className="relative">
        {showTooltip === 'zalo' && (
          <div className="absolute right-16 bottom-1 bg-white text-brand-gray text-xs font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap border border-gray-100">
            Chat Zalo ngay
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-white" />
          </div>
        )}
        <a
          href={`https://zalo.me/${ZALO_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip('zalo')}
          onMouseLeave={() => setShowTooltip(null)}
          aria-label="Chat Zalo"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
          style={{ background: 'linear-gradient(135deg, #0068FF 0%, #00AAFF 100%)' }}
        >
 <Image
    src='/zalo.webp'
    alt="Zalo"
    width={32}
    height={32}
  />
        </a>
      </div>

      {/* Nút Gọi điện */}
      <div className="relative">
        {showTooltip === 'phone' && (
          <div className="absolute right-16 bottom-1 bg-white text-brand-gray text-xs font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap border border-gray-100">
            0968 552 345
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-white" />
          </div>
        )}
        <a
          href={`tel:${PHONE_NUMBER}`}
          onMouseEnter={() => setShowTooltip('phone')}
          onMouseLeave={() => setShowTooltip(null)}
          aria-label="Gọi điện"
          className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center shadow-xl hover:bg-brand-red-dark hover:scale-110 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
        </a>
      </div>

    </div>
  )
}
