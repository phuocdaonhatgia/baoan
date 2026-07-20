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
  { slug: 'mm-mega-market-hung-phu', name: 'MM Mega Market Hưng Phú', location: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Bình chữa cháy xách tay','Hệ thống Báo cháy và chữa cháy CO2 tự động'], img: '/images/projects/hung phu.jpg' },
  { name: 'MM Mega Market Đà Nẵng', location: 'Đà Nẵng', systems: ['Sprinkler tự động', 'Hosereel', 'Chữa cháy vách tường'], img: '/images/projects/mm da nang.jpg' },
  { name: 'MM Mega Market Biên Hoà', location: 'Đồng Nai', systems: ['Sprinkler tự động', 'Hệ thống đèn chiếu sáng sự cố và thoát hiểm', 'Chữa cháy vách tường'], img: '/images/projects/bien hoa.jpg' },
  { name: 'MM Mega Market Thanh Xuân', location: 'Hồ Chí Minh', systems: ['Sprinkler tự động', 'Hosereel'], img: '/images/projects/thanh xuan.jpg' },
  { name: 'Metro Hà Đông', location: 'Hà Nội', systems: ['Sprinkler tự động', 'Chữa cháy trong nhà và ngoài nhà'], img: '/images/projects/metro-rach-gia.jpg' },
  { name: 'Metro Rạch Giá', location: 'Kiên Giang', systems: ['Sprinkler tự động', 'Chữa cháy trong nhà và ngoài nhà'], img: '/images/projects/metro.jpg' },
  { name: 'Emart Gò Vấp', location: 'Hồ Chí Minh', systems: ['Sprinkler tự động', 'Chữa cháy vách tường','Bình chữa cháy xách tay','Hệ thống Báo cháy'], img: '/images/projects/emart.jpg' },
  { name: 'Khu Thương mại Bình Điền', location: 'Hồ Chí Minh', systems: ['Chữa cháy tường nước Sprinkler', 'Chữa cháy vách tường','Hệ thống chống sét lan truyền','Hệ thống Báo cháy tự động'], img: '/images/projects/cho binh dien.jpg' },
  { name: 'Siêu Thị Nhật Nam', location: 'Hồ Chí Minh', systems: ['Chữa cháy tự động', 'Báo cháy tự động'], img: '/images/projects/nhat nam.jpg' },
]

export default function SieuThiTTTMPage() {
  return (
    <ProjectLayout
      title="Siêu thị & Trung tâm thương mại"
      desc="24 siêu thị Big C/Go! và 21 trung tâm MM Mega Market (Metro Cash & Carry) trên toàn quốc — Bảo An Engineering là đối tác PCCC tin cậy hơn 20 năm."
      currentHref="/du-an/sieu-thi-tttm"
      stats={[['50+', 'Công trình'], ['24', 'Big C / Go!'], ['21', 'MM Mega Market'], ['2001', 'Năm bắt đầu']]}
      projects={projects}
    />
  )
}
