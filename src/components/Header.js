'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const duAnLinks = [
  { label: 'Tất cả dự án',          href: '/du-an' },
  { label: 'Siêu thị & TTTM',       href: '/du-an/sieu-thi-tttm' },
  { label: 'Nhà máy & Khu CN',      href: '/du-an/nha-may-khu-cn' },
  { label: 'Khách sạn',             href: '/du-an/khach-san' },
  { label: 'Cao tầng & Căn hộ',     href: '/du-an/cao-tang-can-ho' },
  { label: 'Công trình công cộng',  href: '/du-an/cong-trinh-cong-cong' },
]

const navLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Sản phẩm',  href: '/san-pham' },
  { label: 'Dịch vụ',   href: '/dich-vu' },
  { label: 'Dự án',     href: '/du-an', children: duAnLinks },
  { label: 'Tiêu chuẩn',href: '/tieu-chuan' },
  { label: 'Tin tức',   href: '/tin-tuc' },
  { label: 'Liên hệ',   href: '/lien-he' },
]

export default function Header() {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [duAnOpen, setDuAnOpen]     = useState(false)
  const [duAnMobile, setDuAnMobile] = useState(false)
  const dropRef = useRef(null)

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClick(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDuAnOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Thanh thông tin */}
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

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/logo.png" alt="Bảo An Engineering"
              width={140} height={96} className="h-10 w-auto object-contain" priority />
          </Link>

          {/* Menu desktop */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link =>
              link.children ? (
                <div key={link.href} className="relative" ref={dropRef}>
                  <button
                    onClick={() => setDuAnOpen(o => !o)}
                    className="px-3 py-2 text-sm font-medium text-brand-gray hover:text-brand-red transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${duAnOpen ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {duAnOpen && (
                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-2 w-56 border border-gray-100 z-50 mt-1">
                      {link.children.map((child, i) => (
                        <div key={child.href}>
                          {i === 1 && (
                            <div className="mx-3 my-1 border-t border-gray-100" />
                          )}
                          <Link
                            href={child.href}
                            onClick={() => setDuAnOpen(false)}
                            className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-brand-red-light hover:text-brand-red
                              ${i === 0 ? 'text-brand-red font-semibold' : 'text-brand-gray'}`}
                          >
                            {i > 0 && <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />}
                            {child.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href}
                  className="px-3 py-2 text-sm font-medium text-brand-gray hover:text-brand-red transition-colors whitespace-nowrap">
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Nút báo giá + hamburger */}
          <div className="flex items-center gap-3">
            <Link href="/bao-gia" className="hidden sm:inline-flex btn-primary text-sm py-2 px-4">
              Yêu cầu báo giá
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-brand-gray" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3">
            {navLinks.map(link =>
              link.children ? (
                <div key={link.href}>
                  <button
                    onClick={() => setDuAnMobile(o => !o)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-brand-gray border-b border-gray-50"
                  >
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform ${duAnMobile ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {duAnMobile && (
                    <div className="bg-gray-50">
                      {link.children.map(child => (
                        <Link key={child.href} href={child.href}
                          onClick={() => { setMenuOpen(false); setDuAnMobile(false) }}
                          className="block px-8 py-2.5 text-sm text-brand-gray-mid hover:text-brand-red border-b border-gray-100">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-brand-gray hover:text-brand-red border-b border-gray-50">
                  {link.label}
                </Link>
              )
            )}
            <div className="px-4 pt-3">
              <Link href="/bao-gia" onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center text-sm">
                Yêu cầu báo giá
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
