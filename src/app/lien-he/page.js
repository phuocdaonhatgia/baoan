import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Liên hệ',
  description: 'Liên hệ Bảo An Engineering — 3 chi nhánh tại Đồng Nai, TP. HCM, Hà Nội. Hotline: 0968 552 345.',
}

const branches = [
  {
    name: 'Trụ sở Đồng Nai',
    address: '131 Ấp Bình Lâm, xã Lộc An, Huyện Long Thành, tỉnh Đồng Nai',
    phone: '(84.28) 362 02114',
    tel: '+842836202114',
    mapUrl: 'https://maps.google.com/?q=Lộc+An,+Long+Thành,+Đồng+Nai',
    primary: true,
  },
  {
    name: 'Chi nhánh TP. Hồ Chí Minh',
    address: '10/2 Đồng Nai, Phường 2, Quận Tân Bình, TP. Hồ Chí Minh',
    phone: '(84.8) 35 470 045',
    tel: '+84835470045',
    mapUrl: 'https://maps.google.com/?q=Tân+Bình,+TP+Hồ+Chí+Minh',
    primary: false,
  },
  {
    name: 'Chi nhánh Hà Nội',
    address: '39A, ngõ 48/67 Ngô Gia Tự, Phường Việt Hưng, Quận Long Biên, Hà Nội',
    phone: '(84.4) 38 432 223',
    tel: '+84438432223',
    mapUrl: 'https://maps.google.com/?q=Long+Biên,+Hà+Nội',
    primary: false,
  },
]

export default function LienHePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">

        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2">
            <Link href="/" className="hover:text-brand-red">Trang chủ</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium">Liên hệ</span>
          </div>
        </div>

        <div className="bg-brand-gray text-white py-10">
          <div className="container-main">
            <h1 className="text-2xl font-bold mb-2">Liên hệ với chúng tôi</h1>
            <p className="text-gray-400 text-sm">3 chi nhánh tại Đồng Nai, TP. Hồ Chí Minh và Hà Nội</p>
          </div>
        </div>

        <div className="container-main py-10">

          {/* Hotline nổi bật */}
          <div className="bg-brand-red rounded-xl p-6 text-white text-center mb-8">
            <p className="text-red-100 text-sm mb-1">Hotline hỗ trợ 24/7</p>
            <a href="tel:+84968552345" className="text-3xl font-bold hover:text-red-100 transition-colors">
              0968 552 345
            </a>
            <p className="text-red-100 text-sm mt-1">
              hoặc email:{' '}
              <a href="mailto:baoan@baoanengineering.com" className="underline hover:text-white">
                baoan@baoanengineering.com
              </a>
            </p>
          </div>

          {/* 3 chi nhánh */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {branches.map((b) => (
              <div
                key={b.name}
                className={`bg-white rounded-xl border p-6 ${
                  b.primary ? 'border-brand-red shadow-md' : 'border-gray-100'
                }`}
              >
                {b.primary && (
                  <span className="inline-block bg-brand-red text-white text-xs px-2 py-0.5 rounded-full mb-3">
                    Trụ sở chính
                  </span>
                )}
                <h3 className="font-bold text-brand-gray mb-3">{b.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2 text-brand-gray-mid">
                    <svg className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="leading-relaxed">{b.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${b.tel}`} className="text-brand-gray hover:text-brand-red transition-colors font-medium">
                      {b.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={b.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs text-brand-red hover:underline"
                >
                  Xem bản đồ
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/bao-gia" className="btn-primary px-10 py-3 text-base">
              Gửi yêu cầu báo giá ngay
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
