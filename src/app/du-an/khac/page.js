import ProjectLayout from '@/components/ProjectLayout'

export const metadata = {
  title: 'Dự án khác  ',
  description: 'Các dự án khác của Bao An Engineering',
}

const projects = [
  { name: 'Karaoke Thái Bình', location: 'Đồng Hới', systems: ['Sprinkler tự động', 'Báo cháy tự động','Chữa cháy vách tường','Chữa cháy Sol Khí cho các phòng hát','Hệ thống Cửa thoát hiểm, Chống Sét','Đèn chiếu sáng sự cố và thoát hiểm'], img: '/images/projects/thaibinh.jpg' },
  { name: 'Trung tâm kho vận Yên Nghĩa', location: 'Hà Nội', systems: ['Hệ thống báo cháy tự động'], img: '/images/projects/kho van.png' },
  { name: '	Phòng khám 2 – Viện Tim TP.HCM', location: 'Hồ Chí Minh', systems: ['........'], img: '/images/projects/vientim.jpg' },
  { name: 'Lotte Cinema Hạ Long', location: 'Quảng Ninh', systems: ['.......'], img: '/images/projects/lotte.webp' },
]

export default function DuAnKhac() {
  return (
    <ProjectLayout
      title="Dự án khác"
      desc="Các dự án khác của Bao An Engineering"
      currentHref="/du-an/khac"
      stats={[['9+', 'Công trình'], ['TCVN', 'Tiêu chuẩn chính'], ['25 năm', 'Kinh nghiệm'], ['1999', 'Năm bắt đầu']]}
      projects={projects}
    />
  )
}
