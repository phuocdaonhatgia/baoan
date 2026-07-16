import ProjectLayout from '@/components/ProjectLayout'

export const metadata = {
  title: 'Dự án Công trình công cộng',
  description: 'PCCC cho công trình công cộng: UBND TP.HCM, Thư viện Đồng Nai, Bowling Đầm Sen, Bưu điện — Bảo An Engineering.',
}

const projects = [
  { name: 'Trụ sở UBND Thành phố Hồ Chí Minh', location: 'TP. Hồ Chí Minh', systems: ['Camera quan sát', 'Báo cháy tự động'], img: '/images/duan2/trung-tam.jpg' },
  { name: 'Thư viện Tỉnh Đồng Nai', location: 'Đồng Nai', systems: ['Báo cháy tự động', 'Chống sét'], img: '/images/duan2/du-an-khac.jpg' },
  { name: 'TT Giải trí Bowling Đầm Sen', location: 'TP. Hồ Chí Minh', systems: ['Báo cháy tự động', 'Hosereel'], img: '/images/duan2/du-an-khac.jpg' },
  { name: 'Bưu điện Tây Ninh', location: 'Tây Ninh', systems: ['Báo cháy tự động'], img: '/images/duan2/du-an-khac.jpg' },
  { name: 'VP Tỉnh Ủy Vĩnh Long', location: 'Vĩnh Long', systems: ['Báo cháy', 'Chống sét', 'Camera'], img: '/images/duan2/du-an-khac.jpg' },
  { name: 'TT Lưu trữ Tỉnh Vĩnh Long', location: 'Vĩnh Long', systems: ['Báo cháy tự động', 'Chữa cháy CO2 tự động'], img: '/images/duan2/du-an-khac.jpg' },
  { name: 'VP HĐND Tỉnh Vĩnh Long', location: 'Vĩnh Long', systems: ['Sprinkler tự động', 'Camera quan sát'], img: '/images/duan2/du-an-khac.jpg' },
  { name: 'Công ty LD Dầu Khí Sông Trà', location: 'Quảng Ngãi', systems: ['Báo cháy tự động', 'Chống sét'], img: '/images/duan2/du-an-khac.jpg' },
  { name: 'XN Xây Lắp & Cơ Khí Xây dựng', location: 'TP. Hồ Chí Minh', systems: ['Hệ thống chữa cháy tự động'], img: '/images/duan2/du-an-khac.jpg' },
]

export default function CongTrinhCongCongPage() {
  return (
    <ProjectLayout
      title="Công trình công cộng"
      desc="PCCC cho trụ sở cơ quan nhà nước, trung tâm văn hóa, giải trí và các công trình phục vụ cộng đồng — tuân thủ nghiêm ngặt quy định PCCC Việt Nam."
      currentHref="/du-an/cong-trinh-cong-cong"
      stats={[['9+', 'Công trình'], ['TCVN', 'Tiêu chuẩn chính'], ['Nhà nước', 'Chủ đầu tư'], ['1999', 'Năm bắt đầu']]}
      projects={projects}
    />
  )
}
