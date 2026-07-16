import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TinTucClient from './TinTucClient'

export const metadata = {
  title: 'Tin tức & Kiến thức PCCC',
  description: 'Tin tức mới nhất về PCCC, quy định pháp luật, kiến thức phòng cháy chữa cháy — Bảo An Engineering.',
}

export default function TinTucPage() {
  return (
    <>
      <Header />
      <TinTucClient />
      <Footer />
    </>
  )
}