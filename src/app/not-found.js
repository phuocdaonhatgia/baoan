import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] bg-brand-gray-light flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="text-8xl font-bold text-brand-red mb-4">404</div>
          <h1 className="text-2xl font-bold text-brand-gray mb-3">Trang không tìm thấy</h1>
          <p className="text-brand-gray-mid mb-8 max-w-md mx-auto">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-primary">Về trang chủ</Link>
            <Link href="/lien-he" className="btn-outline">Liên hệ hỗ trợ</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
