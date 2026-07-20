import ProjectLayout from '@/components/ProjectLayout'

export const metadata = {
  title: 'Dự án Khách sạn & Resort',
  description: 'PCCC cho khách sạn và resort: Novotel Đà Nẵng, Majestic TP.HCM, Imperial Vũng Tàu — Bảo An Engineering.',
}

const projects = [
  { slug: 'novotel-da-nang', name: 'Novotel Đà Nẵng', location: 'Đà Nẵng', systems: ['Hệ thống chữa cháy khí FM200 cho phòng Server', 'Hệ thống chữa cháy tự động khí CO2'], img: '/images/projects/novotel.jpg' },
  { slug: 'majestic-hotel', name: 'Khách sạn Cửu Long — Majestic', location: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Báo cháy tự động', 'Hosereel'], img: '/images/projects/majestic.jpg' },
  { name: 'The Imperial Residences Vũng Tàu', location: 'Vũng Tàu', systems: ['Sprinkler', 'Báo cháy địa chỉ', 'Hosereel', 'Camera'], img: '/images/projects/khach-san.jpg' },
  { name: 'Khách sạn Bình Minh — Phan Thiết', location: 'Bình Thuận', systems: ['Báo cháy tự động', 'Tổng đài điện thoại'], img: '/images/projects/khach-san.jpg' },
  { name: 'Khách sạn Nhà khách UBND Tỉnh Bình Thuận', location: 'Bình Thuận', systems: ['Báo cháy tự động'], img: '/images/projects/khach-san.jpg' },
]

export default function KhachSanPage() {
  return (
    <ProjectLayout
      title="Khách sạn & Resort"
      desc="Hệ thống PCCC cho khách sạn đòi hỏi tiêu chuẩn cao về thẩm mỹ (đầu phun concealed), độ tin cậy và tuân thủ quy định PCCC cho công trình lưu trú."
      currentHref="/du-an/khach-san"
      stats={[['5+', 'Khách sạn'], ['5 sao', 'Hạng cao nhất'], ['Concealed', 'Đầu phun ẩn'], ['BS · TCVN', 'Tiêu chuẩn']]}
      projects={projects}
    />
  )
}
