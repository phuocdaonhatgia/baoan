'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Sản phẩm', href: '/san-pham' },
  { label: 'Dịch vụ', href: '/dich-vu' },
  { label: 'Dự án', href: '/du-an' },
  { label: 'Tiêu chuẩn', href: '/tieu-chuan' },
  { label: 'Tin tức', href: '/tin-tuc' },
  { label: 'Liên hệ', href: '/lien-he' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-brand-gray text-white text-xs py-2 hidden sm:block">
        <div className="container-main flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>Điện thoại: (84.28) 362 02114 — 0968 552 345</span>
            <span>Email: baoan@baoanengineering.com</span>
          </div>
          <span className="text-gray-400">Tiêu chuẩn: NFPA · APSAD · TCVN</span>
        </div>
      </div>
      <nav className="container-main">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/logo.png" alt="Bảo An Engineering" width={140} height={96} className="h-10 w-auto object-contain" priority />
          </Link>
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-brand-gray hover:text-brand-red transition-colors whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/bao-gia" className="hidden sm:inline-flex btn-primary text-sm py-2 px-4">Yêu cầu báo giá</Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-brand-gray" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-brand-gray hover:text-brand-red border-b border-gray-50">
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Link href="/bao-gia" onClick={() => setMenuOpen(false)} className="btn-primary w-full justify-center text-sm">Yêu cầu báo giá</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
