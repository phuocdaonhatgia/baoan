import ProjectLayout from '@/components/ProjectLayout'

export const metadata = {
  title: 'Dự án Khách sạn & Resort',
  description: 'PCCC cho khách sạn và resort: Novotel Đà Nẵng, Majestic TP.HCM, Imperial Vũng Tàu — Bảo An Engineering.',
}

const projects = [
  { slug: 'novotel-da-nang', name: 'Novotel Đà Nẵng', location: 'Đà Nẵng', systems: ['Hệ thống chữa cháy khí FM200 cho phòng Server', 'Hệ thống chữa cháy tự động khí CO2'], img: '/images/projects/novotel1.jpg' },
  { slug: 'majestic-hotel', name: 'Khách sạn Cửu Long — Majestic', location: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Báo cháy tự động', 'Hosereel'], img: '/images/projects/majestic.jpg' },
 { slug: 'hung-ngan',           name: 'Khu cao tầng Hưng Ngân', detail: 'TP. Hồ Chí Minh', systems: ['Hệ thống PCCC & chống sét Block B1'], img: '/images/projects/hung ngan.jpg' },
{ slug: 'imperial-vung-tau',   name: 'The Imperial Residences', location: 'Vũng Tàu', systems: ['Sprinkler', 'Chữa cháy vách tường', 'Báo cháy tự động'], img: '/images/projects/imperial.webp' },
  { name: 'Khách sạn Bình Minh — Phan Thiết', location: 'Bình Thuận', systems: ['Báo cháy tự động', 'Tổng đài điện thoại'], img: '/images/projects/khach-san.jpg' },
    { name: 'Biệt thự Villa khu đô thị Sala Thủ Thiêm', location: 'Hồ Chí Minh', systems: ['Chữa cháy tự động Sprinkler','Chữa cháy vách tường'], img: '/images/projects/bietthu.jpg' },
   { slug: 'riviera-point',  name: 'Riviera Point Quận 7',  location: 'Hồ Chí Minh', systems: ['Thiết kế PCCC', 'Hệ thống chống sét'], img: '/images/projects/river.jpeg' },
]

export default function KhachSanPage() {
  return (
    <ProjectLayout
      title="Khách sạn & Resort"
      desc="Hệ thống PCCC cho khách sạn đòi hỏi tiêu chuẩn cao về thẩm mỹ (đầu phun concealed), độ tin cậy và tuân thủ quy định PCCC cho công trình lưu trú."
      currentHref="/du-an/khach-san"
      stats={[['5+', 'Khách sạn'], ['5 sao', 'Hạng cao nhất'], ['Concealed', 'Đầu phun ẩn'], ['NFPA · TCVN', 'Tiêu chuẩn']]}
      projects={projects}
    />
  )
}
