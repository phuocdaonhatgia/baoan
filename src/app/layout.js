import './globals.css'

export const metadata = {
  title: { default: 'Bảo An Engineering – Tư vấn, Lắp đặt Hệ thống PCCC', template: '%s | Bảo An Engineering' },
  description: 'Chuyên tư vấn, thiết kế, cung cấp và lắp đặt hệ thống PCCC: báo cháy tự động, chữa cháy Sprinkler, FM200, Foam. Tiêu chuẩn NFPA, APSAD, TCVN.',
  keywords: ['PCCC', 'phòng cháy chữa cháy', 'lắp đặt PCCC', 'Bảo An Engineering', 'Đồng Nai', 'TP HCM'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
