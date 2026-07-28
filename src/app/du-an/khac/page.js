import ProjectLayout from '@/components/ProjectLayout'

export const metadata = {
  title: 'Dự án khác  ',
  description: 'Các dự án khác của Bao An Engineering',
}

const projects = [
  { name: 'Karaoke Thái Bình', location: 'Đồng Hới', systems: ['Sprinkler tự động', 'Báo cháy tự động','Chữa cháy vách tường','Chữa cháy Sol Khí cho các phòng hát','Hệ thống Cửa thoát hiểm, Chống Sét','Đèn chiếu sáng sự cố và thoát hiểm'], img: '/images/projects/thaibinh.jpg' },
  { name: 'Trung tâm kho vận Yên Nghĩa', location: 'Hà Nội', systems: ['Hệ thống báo cháy tự động'], img: '/images/projects/kho van.png' },
  { name: '	Phòng khám 2 – Viện Tim TP.HCM', location: 'Hồ Chí Minh', systems: ['Sprinkler tự động','Hệ thộng báo cháy','Chữa cháy vách tường'], img: '/images/projects/vientim.jpg' },
      {slug: 'truong-phap-quoc-te-marguerite-duras', name: 'Trường pháp Quốc tế Marguerite Duras', location: 'Hồ Chí Minh.', systems: ['Chữa cháy vách tường','Báo cháy tự động'], img: '/images/projects/duras2.jpg' },
  {slug:'nha-huu-duong-rosa-lima', name: 'Nhà hưu dưỡng của Hội dòng Đa Minh Rosa Lima ', location: 'Hồ Chí Minh', systems: ['Thiết kế kiến trúc và PCCC'], img: '/images/projects/rosa-lima.jpg' },
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
