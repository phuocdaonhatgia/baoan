import ProjectLayout from '@/components/ProjectLayout'

export const metadata = {
  title: 'Dự án Nhà máy & Khu công nghiệp',
  description: 'PCCC cho nhà máy sản xuất và khu công nghiệp: Intel, Colgate, Bosch, FrieslandCampina, VSIP — Bảo An Engineering.',
}

const projects = [
  { slug: 'intel-viet-nam', name: 'Intel Việt Nam', location: 'Bình Dương', systems: ['Chữa cháy FM200', 'Báo cháy địa chỉ', 'Sprinkler', 'Camera an ninh'], img: '/images/duan2/khu-cong-nghiep.jpg' },
  { slug: 'colgate-palmolive', name: 'Nhà máy Colgate Palmolive', location: 'Bình Dương', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Họng nước cứu hỏa'], img: '/images/duan2/colgate.jpg' },
  { name: 'Nhà máy Robert Bosch Đồng Nai (Lth 102 & 103)', location: 'Đồng Nai', systems: ['Sprinkler tự động', 'Báo cháy tự động', 'Hosereel'], img: '/images/duan2/nha-may.jpg' },
  { name: 'FrieslandCampina Việt Nam', location: 'Bình Dương', systems: ['Sprinkler tự động', 'Foam', 'Báo cháy'], img: '/images/duan2/nha-may.jpg' },
  { name: 'VSIP Bình Dương Industrial Zone', location: 'Bình Dương', systems: ['Báo cháy tự động', 'Chữa cháy vách tường', 'Họng nước'], img: '/images/duan2/khu-cong-nghiep.jpg' },
  { name: 'Nhà máy Hyosung Đồng Nai', location: 'Đồng Nai', systems: ['Sprinkler', 'Báo cháy địa chỉ', 'Hosereel'], img: '/images/duan2/nha-may.jpg' },
  { name: 'OLAM Ducati Đồng Nai', location: 'Đồng Nai', systems: ['Sprinkler', 'Hosereel', 'Báo cháy'], img: '/images/duan2/nha-may.jpg' },
  { name: 'Nhà máy AKZO NOBEL Coating', location: 'Đồng Nai', systems: ['Sprinkler tự động', 'Foam', 'Báo cháy'], img: '/images/duan2/colgate.jpg' },
  { name: 'Intersnack Tây Ninh', location: 'Tây Ninh', systems: ['Sprinkler', 'Báo cháy', 'Hosereel'], img: '/images/duan2/khu-cong-nghiep.jpg' },
  { name: 'TOP Solvent (Shell Gò Dầu)', location: 'Tây Ninh', systems: ['Chữa cháy Foam', 'Báo cháy tự động', 'Hosereel'], img: '/images/duan2/shell-go-dau.jpg' },
  { name: 'Nhà máy Xi măng Lafarge', location: 'Kiên Giang', systems: ['Sprinkler', 'Báo cháy', 'Hosereel'], img: '/images/duan2/nha-may.jpg' },
  { name: 'Bayer Agritech Sài Gòn', location: 'Bình Dương', systems: ['Sprinkler', 'Báo cháy', 'Hosereel ngoài trời'], img: '/images/duan2/bayer-agritech.jpg' },
  { name: 'Nhà máy Dược Sanofi Việt Nam', location: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Báo cháy', 'Hosereel'], img: '/images/duan2/nha-may.jpg' },
  { name: 'TATA Coffee Việt Nam', location: 'Đồng Nai', systems: ['Sprinkler', 'Báo cháy', 'Hosereel'], img: '/images/duan2/nha-may.jpg' },
  { name: 'Nhà máy Gelatin Capsule', location: 'Bình Dương', systems: ['Sprinkler tự động', 'FM200', 'Báo cháy địa chỉ'], img: '/images/duan2/nha-may.jpg' },
]

export default function NhaMayKhuCNPage() {
  return (
    <ProjectLayout
      title="Nhà máy & Khu công nghiệp"
      desc="Thi công hệ thống PCCC cho các nhà máy sản xuất, khu công nghiệp trong và ngoài nước tại Việt Nam. Tuân thủ nghiêm ngặt tiêu chuẩn NFPA, APSAD được yêu cầu bởi các tập đoàn đa quốc gia."
      currentHref="/du-an/nha-may-khu-cn"
      stats={[['15+', 'Nhà máy lớn'], ['Intel · Bosch · Colgate', 'Khách hàng tiêu biểu'], ['NFPA · APSAD', 'Tiêu chuẩn áp dụng'], ['2003', 'Năm bắt đầu']]}
      projects={projects}
    />
  )
}
