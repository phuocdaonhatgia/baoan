import ProjectLayout from '@/components/ProjectLayout'

export const metadata = {
  title: 'Dự án Nhà máy & Khu công nghiệp',
  description: 'PCCC cho nhà máy sản xuất và khu công nghiệp: Intel, Colgate, Bosch, FrieslandCampina, VSIP — Bảo An Engineering.',
}

const projects = [
  { slug: 'tombow', name: 'Nhà máy mới Tombow', location: 'Hồ Chí Minh', systems: ['Sprinkler tự động', 'Chữa cháy vách tường'], img: '/images/projects/tombow.jpg' },
  { name: 'Nhà máy Hyosung Việt Nam', location: 'Đồng Nai', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Họng chữa cháy ngoài nhà'], img: '/images/projects/hyosung.jpg' },
  { name: 'Nhà máy chế biến nông thủy sản xuất khẩu Cofidec', location: 'Hồ Chí Minh', systems: ['Hệ thống phòng cháy chữa cháy','Hệ thống chống sét'], img: '/images/projects/cofidec.jpg' },
  { name: 'Nhà máy Colgate Palmolive', location: 'Bình Dương', systems: ['Chữa cháy tự động', 'Chữa cháy vách tường', 'Họng nước cứu hỏa'], img: '/images/projects/colgate.webp' },
  { name: 'Nhà máy Doosan Vina', location: 'Quảng Ngãi', systems: ['Họng chữa cháy ngoài nhà','Chữa cháy vách tường'], img: '/images/projects/nha-may-doosan.jpg' },
  { name: 'Công ty LD Crown Sài Gòn', location: 'Hồ Chí Minh', systems: ['Chữa cháy tự động Sprinkler', 'Chữa cháy vách tường và ngoài nhà', 'Báo cháy tự động'], img: '/images/projects/crown.jpg' },
  { name: 'Nhà máy nghiền xi măng Lafarge Nhơn Trạch', location: 'Đồng Nai', systems: ['Chữa cháy vách tường', 'Hệ thống chống sét', 'Báo cháy tự động'], img: '/images/projects/lafarge.jpg' },
  { name: 'Nhà máy Actec', location: 'Hưng Yên', systems: ['Chữa cháy vách tường và hydrant ngoài nhà', 'Báo cháy tự động'], img: '/images/projects/atec.png' },
  { name: 'Nhà máy sơn Akzo Nobel Việt Nam', location: 'Đồng Nai', systems: ['Chữa cháy tự động Sprinkler', 'Chữa cháy vách tường ', 'Hệ thống chữa cháy bằng Foam'], img: '/images/projects/nobel.jpg' },
  { name: 'Khu Công nghiệp VSIP Bình Dương', location: 'Bình Dương', systems: ['Họng nước cứu hỏa', 'Báo cháy tự động', 'Chữa cháy vách tường'], img: '/images/projects/vsip.jpg' },
  { slug: 'thienbao', name: 'Công Ty TNHH Sản Xuất Thương Mại Quốc Tế Thiên Bảo', location: 'Hồ Chí Minh', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Bình chữa cháy xách tay','Hệ thống Báo cháy','Hệ thống chống sét'], img: '/images/projects/thienbao.jpg' },
  { name: 'Nhà máy dược Gelatin Capsule', location: 'Đồng Nai', systems: ['Chữa cháy tự động', 'Chữa cháy vách tường', 'Họng nước cứu hỏa'], img: '/images/projects/gelatin.jpg' },
  { name: 'Kho Lạnh Satra', location: 'Hồ Chí Minh', systems: ['Chữa cháy tường nước Sprinkler', 'Chữa cháy vách tường','Hệ thống chống sét lan truyền','Hệ thống Báo cháy tự động'], img: '/images/projects/satra.webp' },
    { name: 'Nhà máy Dutch Lady Bình Dương', location: 'Bình Dương', systems: ['.......'], img: '/images/projects/binhduong.jpeg' },
  { name: 'Nhà máy Bel', location: 'Bình Dương', systems: ['............'], img: '/images/projects/bel.jpg' },
]

export default function NhaMayKhuCNPage() {
  return (
    <ProjectLayout
      title="Nhà máy & Khu công nghiệp"
      desc="Thi công hệ thống PCCC cho các nhà máy sản xuất, khu công nghiệp trong và ngoài nước tại Việt Nam. Tuân thủ nghiêm ngặt tiêu chuẩn NFPA, APSAD được yêu cầu bởi các tập đoàn đa quốc gia."
      currentHref="/du-an/nha-may-khu-cn"
      stats={[['30+', 'Nhà máy lớn'], ['Intel · Bosch · Colgate', 'Khách hàng tiêu biểu'], ['NFPA · APSAD', 'Tiêu chuẩn áp dụng'], ['2003', 'Năm bắt đầu']]}
      projects={projects}
    />
  )
}
