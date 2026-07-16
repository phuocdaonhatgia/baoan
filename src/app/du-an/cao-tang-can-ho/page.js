import ProjectLayout from '@/components/ProjectLayout'

export const metadata = {
  title: 'Dự án Cao tầng & Căn hộ',
  description: 'PCCC cho tòa nhà cao tầng và khu căn hộ: Riviera Point, Hưng Ngân, Imperial Vũng Tàu — Bảo An Engineering.',
}

const projects = [
  { name: 'Residential Area Riviera Point', location: 'Quận 7, TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Báo cháy địa chỉ', 'Hosereel', 'Họng nước'], img: '/images/duan2/trung-tam.jpg' },
  { name: 'Khu nhà ở cao tầng Hưng Ngân Block B1', location: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Báo cháy', 'Hosereel', 'Cửa chống cháy'], img: '/images/duan2/trung-tam.jpg' },
  { name: 'Phòng Phú Plaza', location: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Báo cháy địa chỉ', 'Camera'], img: '/images/duan2/trung-tam.jpg' },
  { name: 'Dy TNHH UNI — PRESIDENT', location: 'TP. Hồ Chí Minh', systems: ['Báo cháy tự động'], img: '/images/duan2/trung-tam.jpg' },
]

export default function CaoTangCanHoPage() {
  return (
    <ProjectLayout
      title="Cao tầng & Căn hộ"
      desc="Hệ thống PCCC cho nhà cao tầng yêu cầu hệ thống Dry Riser, họng tiếp nước và thang máy chữa cháy riêng biệt theo TCVN 3890:2009."
      currentHref="/du-an/cao-tang-can-ho"
      stats={[['4+', 'Công trình'], ['TCVN 3890', 'Tiêu chuẩn chính'], ['Dry Riser', 'Giải pháp chính'], ['2000', 'Năm bắt đầu']]}
      projects={projects}
    />
  )
}
