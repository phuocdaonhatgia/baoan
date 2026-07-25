import ProjectLayout from '@/components/ProjectLayout'

export const metadata = {
  title: 'Dự án Nhà máy & Khu công nghiệp',
  description: 'PCCC cho nhà máy sản xuất và khu công nghiệp: Intel, Colgate, Bosch, FrieslandCampina, VSIP — Bảo An Engineering.',
}

const projects = [
  { slug: 'nha-may-tomnbow', name: 'Nhà máy mới Tombow', location: 'Hồ Chí Minh', systems: ['Hệ thống chữa cháy tự động Sprinkler', 'Hệ thống chữa cháy Hydrant ngoài nhà', 'Hệ thống chữa cháy vách tường và bình chữa cháy', 'Hệ thống báo cháy tự động', 'Hệ thống chống sét lan truyền'], img: '/images/projects/tombow1.webp' },
  { slug:'nha-may-hyosung-viet-nam',name: 'Nhà máy Hyosung Việt Nam', location: 'Đồng Nai', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Họng chữa cháy ngoài nhà'], img: '/images/projects/hyosung.jpg' },
  { slug: 'nha-may-cofidec', name: 'Nhà máy chế biến nông thủy sản xuất khẩu Cofidec', location: 'Hồ Chí Minh', systems: ['Hệ thống chữa cháy tự động Sprinkler', 'Hệ thống chữa cháy Hydrant ngoài nhà', 'Hệ thống chữa cháy vách tường và bình chữa cháy', 'Hệ thống báo cháy tự động', 'Hệ thống chống sét'], img: '/images/projects/cofidec.jpg' },
  { slug: 'nha-may-colgate-palmolive', name: 'Nhà máy Colgate Palmolive', location: 'Bình Dương', systems: ['Chữa cháy tự động', 'Chữa cháy vách tường', 'Họng nước cứu hỏa'], img: '/images/projects/colgate.webp' },
  { slug:'nha-may-doosan-vina', name: 'Nhà máy Doosan Vina', location: 'Quảng Ngãi', systems: ['Họng chữa cháy ngoài nhà','Chữa cháy vách tường'], img: '/images/projects/doosan1.jpg' },
  { slug: 'cong-ty-ld-crown-sai-gon', name: 'Công ty LD Crown Sài Gòn', location: 'Hồ Chí Minh', systems: ['Chữa cháy tự động Sprinkler', 'Chữa cháy vách tường và ngoài nhà', 'Báo cháy tự động'], img: '/images/projects/crown.jpg' },
  { slug: 'nha-may-nghien-lafarge-nhon-trach', name: 'Nhà máy nghiền xi măng Lafarge Nhơn Trạch', location: 'Đồng Nai', systems: ['Hệ thống chữa cháy Hydrant ngoài nhà', 'Hệ thống chữa cháy vách tường và bình chữa cháy', 'Hệ thống báo cháy tự động', 'Hệ thống chống sét'], img: '/images/projects/lafarge.jpg' },
  {  slug: 'nha-may-actec',name: 'Nhà máy Actec', location: 'Bình Dương', systems: ['Hệ thống chữa cháy Hydrant ngoài nhà', 'Hệ thống chữa cháy vách tường và bình chữa cháy', 'Hệ thống báo cháy tự động'], img: '/images/projects/actec4k.jpg' },
  {  slug: 'nha-may-son-akzo-nobel-viet-nam',name: 'Nhà máy sơn Akzo Nobel Việt Nam', location: 'Đồng Nai', systems: ['Chữa cháy tự động Sprinkler', 'Chữa cháy vách tường ', 'Chữa cháy hydrant bằng Foam','Hệ chữ cháy FM200'], img: '/images/projects/akzo.webp' },
  {  slug: 'kcn-vsip-binh-duong',name: 'Khu Công nghiệp VSIP Bình Dương', location: 'Bình Dương', systems: ['Họng nước cứu hỏa', 'Báo cháy tự động', 'Chữa cháy vách tường'], img: '/images/projects/vsip13.jpeg' },
  { slug: 'cong-ty-san-xuat-thien-bao', name: 'Công Ty TNHH Sản Xuất Thương Mại Quốc Tế Thiên Bảo', location: 'Hồ Chí Minh', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Bình chữa cháy xách tay','Hệ thống Báo cháy','Hệ thống chống sét'], img: '/images/projects/thienbao.jpg' },
  { slug: 'nha-may-duoc-gelatin-capsule', name: 'Nhà máy dược Gelatin Capsule', location: 'Đồng Nai', systems: ['Chữa cháy tự động', 'Chữa cháy vách tường', 'Họng nước cứu hỏa'], img: '/images/projects/gelatin.jpg' },
    { slug: 'nha-may-dutch-lady-binh-duong',name: 'Nhà máy Dutch Lady Bình Dương', location: 'Bình Dương', systems: ['.......'], img: '/images/projects/binhduong.jpeg' },
  {  slug: 'nha-may-bel', name: 'Nhà máy Bel', location: 'Bình Dương', systems: ['............'], img: '/images/projects/bel.jpg' },
]

export default function NhaMayKhuCNPage() {
  return (
    <ProjectLayout
      title="Nhà máy & Khu công nghiệp"
      desc="Thi công hệ thống PCCC cho các nhà máy sản xuất, khu công nghiệp trong và ngoài nước tại Việt Nam. Tuân thủ nghiêm ngặt tiêu chuẩn NFPA, APSAD được yêu cầu bởi các tập đoàn đa quốc gia."
      currentHref="/du-an/nha-may-khu-cn"
      stats={[['30+', 'Nhà máy lớn'], ['Tata Coffee · Bosch · Olam · Intersnack', 'Khách hàng tiêu biểu'], ['NFPA · APSAD', 'Tiêu chuẩn áp dụng'], ['2003', 'Năm bắt đầu']]}
      projects={projects}
    />
  )
}
