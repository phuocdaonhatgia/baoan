import ProjectLayout from '@/components/ProjectLayout'

export const metadata = {
  title: 'Dự án Siêu thị & Trung tâm thương mại',
  description: 'Các dự án PCCC tại siêu thị và trung tâm thương mại: Big C, MM Mega Market, Go!, Tops Market — Bảo An Engineering.',
}

const projects = [
  { slug: 'bigc-thang-long', name: 'Big C Nha Trang (Go! Nha Trang)', location: 'Nha Trang', systems: ['Sprinkler tự động và báo cháy tự động', 'Chữa cháy vách tường', 'Chữa cháy khí sạch cho phòng Server','Hệ thống Cửa trượt chống cháy và Cửa thoát hiểm','Hệ thống đèn chiếu sáng sự cố và thoát hiểm'], img: '/images/projects/bigcnhatrang.jpg' },
  { slug: 'bigc-an-lac', name: 'Big C Lê Trọng Tấn (Tops Market Lê Trọng Tấn)', location: 'Hà Nội', systems: ['Sprinkler tự động và báo cháy tự động', 'Chữa cháy vách tường', 'Chữa cháy khí sạch cho phòng Server','Hệ thống Cửa trượt chống cháy và Cửa thoát hiểm','Hệ thống đèn chiếu sáng sự cố và thoát hiểm'], img: '/images/projects/hanoi.jpg' },
  { name: 'Big C Ninh Bình (Go! Ninh Bình)', location: 'Ninh Bình', systems: ['Sprinkler tự động và báo cháy tự động', 'Chữa cháy vách tường', 'Chữa cháy khí sạch cho phòng Server','Hệ thống Cửa trượt chống cháy và Cửa thoát hiểm','Hệ thống đèn chiếu sáng sự cố và thoát hiểm','Chữa cháy tự động bằng CO2'], img: '/images/projects/ninhbinh.jpg' },
  { name: 'Big C Quy Nhơn (Go! Quy Nhơn)', location: 'Quy Nhơn', systems: ['Sprinkler tự động và báo cháy tự động', 'Chữa cháy vách tường', 'Chữa cháy khí sạch cho phòng Server','Hệ thống Cửa trượt chống cháy và Cửa thoát hiểm'], img: '/images/projects/kimcuc.jpg' },
  { name: 'Big C Hạ Long (Go! Hạ Long)', location: 'Quảng Ninh', systems: ['Sprinkler tự động', 'Báo cháy tự động', 'Chữa cháy vách tường','Chữa cháy khí sạch cho phòng Server','Chữa cháy tự động CO2',' Cửa trượt chống cháy và Cửa thoát hiểm' ], img: '/images/projects/halong.jpg' },
  { name: 'Big C Đà Lạt (Go! Đà Lạt)', location: 'Đà Lạt', systems: ['Sprinkler tự động', 'Báo cháy tự động','Chữa cháy vách tường','Chữa cháy khí sạch cho phòng Server','Cửa trượt chống cháy và Cửa thoát hiểm'], img: '/images/projects/da lat.jpg' },
  { slug: 'mm-mega-market-an-phu', name: 'MM Mega Market An Phú', location: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Hosereel & Hydrant', 'Họng nước cứu hỏa'], img: '/images/projects/dalat.jpg' },
  { name: 'MM Mega Market Hiệp Phú', location: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Hosereel', 'Họng nước cứu hỏa'], img: '/images/duan2/metro-hiep-phu.jpg' },
  { name: 'Metro Thăng Long', location: 'Hà Nội', systems: ['Sprinkler tự động', 'Chữa cháy ngoài trời', 'Chữa cháy vách tường'], img: '/images/duan2/metro-an-phu.jpg' },
  { name: 'Metro Hà Nội 2', location: 'Hà Nội', systems: ['Sprinkler tự động', 'Hosereel'], img: '/images/duan2/metro-hiep-phu.jpg' },
  { name: 'Metro Đà Nẵng', location: 'Đà Nẵng', systems: ['Sprinkler tự động', 'Chữa cháy ngoài trời', 'Vách tường'], img: '/images/duan2/metro-an-phu.jpg' },
  { name: 'Metro Cần Thơ', location: 'Cần Thơ', systems: ['Sprinkler tự động', 'Cấp thoát nước', 'Hosereel'], img: '/images/duan2/metro-hiep-phu.jpg' },
  { name: 'Trung tâm TM Sa Đéc', location: 'Đồng Tháp', systems: ['Báo cháy tự động', 'Chống sét'], img: '/images/duan2/trung-tam.jpg' },
]

export default function SieuThiTTTMPage() {
  return (
    <ProjectLayout
      title="Siêu thị & Trung tâm thương mại"
      desc="24 siêu thị Big C/Go! và 21 trung tâm MM Mega Market (Metro Cash & Carry) trên toàn quốc — Bảo An Engineering là đối tác PCCC tin cậy hơn 20 năm."
      currentHref="/du-an/sieu-thi-tttm"
      stats={[['13+', 'Công trình'], ['24', 'Big C / Go!'], ['21', 'MM Mega Market'], ['2001', 'Năm bắt đầu']]}
      projects={projects}
    />
  )
}
