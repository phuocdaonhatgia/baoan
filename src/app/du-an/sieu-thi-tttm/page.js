import ProjectLayout from '@/components/ProjectLayout'

export const metadata = {
  title: 'Dự án Siêu thị & Trung tâm thương mại',
  description: 'Các dự án PCCC tại siêu thị và trung tâm thương mại: Big C, MM Mega Market, Go!, Tops Market — Bảo An Engineering.',
}

const projects = [
  { slug: 'bigc-le-trong-tan', name: 'Big C Lê Trọng Tấn (Tops Market Lê Trọng Tấn)', location: 'Hà Nội', systems: ['Sprinkler tự động và báo cháy tự động', 'Chữa cháy vách tường', 'Chữa cháy khí sạch cho phòng Server','Hệ thống Cửa trượt chống cháy và Cửa thoát hiểm','Đèn chiếu sáng sự cố và thoát hiểm'], img: '/images/projects/hanoi.jpg' },
  { slug: 'bigc-thang-long', name: 'Big C Thăng Long (GO! Thăng Long)', type: 'Siêu thị & TTTM', location: 'Hà Nội', year: '2010', systems: ['Hệ thống Chữa cháy tự động', 'Họng nước cứu hỏa', 'Hệ thống chữa cháy vách tường'], img: '/images/projects/biggg.jpg' },
  { slug: 'bigc-an-lac', name: 'Big C An Lạc (GO! An Lạc)', type: 'Siêu thị & TTTM', location: 'TP. Hồ Chí Minh', year: '2010', systems: ['Hệ thống chữa cháy tự động', 'Họng nước cứu hỏa', 'Hệ thống chữa cháy vách tường', 'Hệ thống báo cháy tự động'], img: '/images/projects/canlac.jpg' },
  { slug:'bigc-quy-nhon',name: 'Big C Quy Nhơn (Go! Quy Nhơn)', location: 'Quy Nhơn', systems: ['Sprinkler tự động và báo cháy tự động', 'Chữa cháy vách tường', 'Chữa cháy khí sạch cho phòng Server','Hệ thống Cửa trượt chống cháy và Cửa thoát hiểm'], img: '/images/projects/kimcuc.jpg' },
  {  slug:'bigc-ha-long',name: 'Big C Hạ Long (Go! Hạ Long)', location: 'Quảng Ninh', systems: ['Sprinkler tự động', 'Báo cháy tự động', 'Chữa cháy vách tường','Chữa cháy khí sạch cho phòng Server','Chữa cháy tự động CO2',' Cửa trượt chống cháy và Cửa thoát hiểm' ], img: '/images/projects/halong.jpg' },
  {  slug:'bigc-da-lat',name: 'Big C Đà Lạt (Go! Đà Lạt)', location: 'Đà Lạt', systems: ['Sprinkler tự động', 'Báo cháy tự động','Chữa cháy vách tường','Chữa cháy khí sạch cho phòng Server','Cửa trượt chống cháy và Cửa thoát hiểm'], img: '/images/projects/da lat.jpg' },
  { slug: 'mm-mega-market-hung-phu', name: 'MM Mega Market Hưng Phú', location: 'TP. Hồ Chí Minh', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Bình chữa cháy xách tay','Hệ thống Báo cháy và chữa cháy CO2 tự động'], img: '/images/projects/hung phu.jpg' },
  {slug: 'mm-mega-market-bien-hoa', name: 'MM Mega Market Biên Hoà', location: 'Đồng Nai', systems: ['Sprinkler tự động', 'Hệ thống đèn chiếu sáng sự cố và thoát hiểm', 'Chữa cháy vách tường'], img: '/images/projects/bien hoa.jpg' },
  { slug:'mm-mega-market-thanh-xuan', name: 'MM Mega Market Thanh Xuân', location: 'Hồ Chí Minh', systems: ['.....'], img: '/images/projects/thanh xuan.jpg' },
  {slug:"metro-ha-dong", name: 'Metro Hà Đông', location: 'Hà Nội', systems: ['Sprinkler tự động', 'Chữa cháy trong nhà và ngoài nhà'], img: '/images/projects/metrohadong.jpg' },
    {slug: 'metro-da-nang', name: 'Metro Đà Nẵng', location: 'Đà Nẵng', systems: ['Hệ thống chữa cháy tự động','Hệ thống chữa cháy ngoài trời','Hệ thống chữa cháy vách tường'], img: '/images/projects/metrodanang2.jpg' },
  { slug:"metro-rach-gia",name: 'Metro Rạch Giá', location: 'Kiên Giang', systems: ['Sprinkler tự động', 'Chữa cháy trong nhà và ngoài nhà'], img: '/images/projects/rachgia.png' },
  { slug:"emart-go-vap",name: 'Emart Gò Vấp', location: 'Hồ Chí Minh', systems: ['Sprinkler tự động', 'Chữa cháy vách tường','Bình chữa cháy xách tay','Hệ thống Báo cháy'], img: '/images/projects/emart.jpg' },
  { slug:"khu-thuong-mai-binh-dien",name: 'Khu Thương mại Bình Điền', location: 'Hồ Chí Minh', systems: ['Chữa cháy tường nước Sprinkler', 'Chữa cháy vách tường','Hệ thống chống sét lan truyền','Hệ thống Báo cháy tự động'], img: '/images/projects/cho binh dien.jpg' },
  { slug:"sieu-thi-nhat-nam",name: 'Siêu Thị Nhật Nam', location: 'Hồ Chí Minh', systems: ['Chữa cháy tự động', 'Báo cháy tự động'], img: '/images/projects/sieuthinhatnam.jpeg'   },
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
