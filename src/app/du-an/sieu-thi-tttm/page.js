import ProjectLayout from '@/components/ProjectLayout'

export const metadata = {
  title: 'Dự án Siêu thị & Trung tâm thương mại',
  description: 'Các dự án PCCC tại siêu thị và trung tâm thương mại: Big C, MM Mega Market, Go!, Tops Market — Bảo An Engineering.',
}

const projects = [
  { slug: 'bigc-thang-long', name: 'Big C Thăng Long (Go! Thăng Long)', location: 'Hà Nội', systems: ['Sprinkler tự động', 'Báo cháy tự động', 'Hosereel & Hydrant'], img: '/images/duan2/bigc-thang-long.jpg' },
  { slug: 'bigc-an-lac', name: 'Big C An Lạc (Go! An Lạc)', location: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Báo cháy', 'Hosereel'], img: '/images/duan2/bigc-an-lac.jpg' },
  { name: 'Big C Đồng Nai (Go! Đồng Nai)', location: 'Đồng Nai', systems: ['Sprinkler tự động', 'Báo cháy tự động', 'Hosereel'], img: '/images/duan2/bigc-tong.jpg' },
  { name: 'Big C Đà Nẵng', location: 'Đà Nẵng', systems: ['Sprinkler tự động', 'Báo cháy', 'Hosereel'], img: '/images/duan2/bigc-tong.jpg' },
  { name: 'Big C Hải Phòng', location: 'Hải Phòng', systems: ['Sprinkler tự động', 'Báo cháy tự động', 'Chữa cháy vách tường'], img: '/images/duan2/bigc-tong.jpg' },
  { name: 'Big C Hoàng Văn Thụ', location: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Báo cháy'], img: '/images/duan2/bigc-tong.jpg' },
  { slug: 'mm-mega-market-an-phu', name: 'MM Mega Market An Phú', location: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Hosereel & Hydrant', 'Họng nước cứu hỏa'], img: '/images/duan2/metro-an-phu.jpg' },
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
