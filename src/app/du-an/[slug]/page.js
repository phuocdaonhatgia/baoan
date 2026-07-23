import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ImageGallery from '@/components/ImageGallery'

const allProjects = [
  { slug: 'bigc-thang-long', name: 'Big C Thăng Long (GO! Thăng Long)', type: 'Siêu thị & TTTM', location: 'Số 222 đường Trần Duy Hưng, phường Trung Hòa, quận Cầu Giấy, Hà Nội', year: '2010', systems: ['Hệ thống Chữa cháy tự động', 'Họng nước cứu hỏa', 'Hệ thống chữa cháy vách tường'], images: ['/images/projects/biggg.jpg', '/images/projects/thang longgg.webp', '/images/projects/bigthang.png'] },
  { slug: 'bigc-an-lac', name: 'Big C An Lạc (GO! An Lạc)', type: 'Siêu thị & TTTM', location: 'Số 1231 Quốc lộ 1A, Khu phố 5, Phường Bình Trị Đông B, Quận Bình Tân, TP. Hồ Chí Minh.', year: '2010', systems: ['Hệ thống chữa cháy tự động', 'Họng nước cứu hỏa', 'Hệ thống chữa cháy vách tường', 'Hệ thống báo cháy tự động'], images: ['/images/projects/canlac.jpg', '/images/projects/anbig.jpg', '/images/projects/bentrong.jpg'] },
  { slug: 'bigc-le-trong-tan', name: 'Big Lê Trọng Tấn (Tops Market Lê Trọng Tấn)', type: 'Siêu thị & TTTM', location: 'Toà Artemis, 3 P. Lê Trọng Tấn, Phương Liệt, Hà Nội ', year: '2019', systems: ['Sprinkler tự động và báo cháy tự động', 'Chữa cháy vách tường', 'Chữa cháy khí sạch cho phòng Server','Hệ thống Cửa trượt chống cháy và Cửa thoát hiểm','Hệ thống đèn chiếu sáng sự cố và thoát hiểm'], images: ['/images/projects/hanoi.jpg','/images/projects/letrong.png','/images/projects/bentrongle.png'] },
    { slug: 'bigc-ninh-binh', name: 'Big C NIinh Bình (GO! Ninh Bình)', type: 'Siêu thị & TTTM', location: 'Đường Trần Nhân Tông, xã Ninh Phúc, thành phố Ninh Bình, tỉnh Ninh Bình', year: '2013', systems: ['Sprinkler tự động và báo cháy tự động', 'Chữa cháy vách tường', 'Chữa cháy khí sạch cho phòng Server','Hệ thống Cửa trượt chống cháy và Cửa thoát hiểm','Hệ thống đèn chiếu sáng sự cố và thoát hiểm','Chữa cháy tự động bằng CO2'], images: ['/images/projects/ninhbinh.jpg', '/images/projects/big_c_ninh_binh.jpg', '/images/projects/bentrongninhbinh.jpg'] },
  { slug: 'bigc-nha-trang', name: 'Big C Nha Trang (Go! Nha Trang)', type: 'Siêu thị & TTTM', location: 'Lô số 4, đường 19/5, Khu đô thị Vĩnh Điềm Trung, xã Vĩnh Hiệp, TP. Nha Trang, tỉnh Khánh Hòa', year: '2014', systems: ['Sprinkler tự động và báo cháy tự động', 'Chữa cháy vách tường', 'Chữa cháy khí sạch cho phòng Server','Hệ thống Cửa trượt chống cháy và Cửa thoát hiểm','Hệ thống đèn chiếu sáng sự cố và thoát hiểm'], images: ['/images/projects/bigcnhatrang.jpg','/images/projects/nhatrang.jpg','/images/projects/bigtrang.jpg'] },
  { slug: 'bigc-can-tho', name: 'Big C Cần Thơ (GO! Cần Thơ)', type: 'Siêu thị & TTTM', location: 'Lô, Đường số 1, KHU DÂN CƯ ĐÔ THỊ MỚI HƯNG PHÚ, Hưng Phú, Cần Thơ', year: '2024 (GO! Cần Thơ), 2012 (Big C Cần Thơ)', systems: ['Hệ thống Sprinkler tự động', 'Hệ thống báo cháy tự động', 'Màn cuốn tự động ngăn khói cháy','Hệ thống chữa cháy khí sạch cho phòng Server','Hệ thống Cửa trượt chống cháy và Cửa thoát hiểm','Chữa cháy vách tường '], images: ['/images/projects/gocantho.jpg','/images/projects/go.jpg', '/images/projects/go!.jpg','/images/projects/canthobigc.jpg', '/images/projects/cantho.jpg','/images/projects/canthobig.jpg'] },
  { slug: 'mm-mega-market-an-phu', name: 'MM Mega Market An Phú', type: 'Siêu thị & TTTM', location: 'Khu B, Khu đô thị An Phú An Khánh, Bình Trưng, Hồ Chí Minh', year: '2024', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Hệ thống đèn chiếu sáng sự cố và thoát hiểm'], images: ['/images/projects/mm hiep phu.jpg', '/images/projects/hiepphu.jpg','/images/projects/mm.jpg'] },
  { slug: 'mm-mega-market-hiep-phu', name: 'Cải tạo khu bán hàng – Siêu thị MM Mega Market Hiệp Phú', type: 'Siêu thị & TTTM', location: 'Quốc lộ 1A, Phường Tân Thới Hiệp, Quận 12, TP. Hồ Chí Minh', year: '2024', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Hệ thống đèn chiếu sáng sự cố và thoát hiểm'], images: ['/images/projects/mm hiep phu.jpg', '/images/projects/hiepphu.jpg','/images/projects/mm.jpg'] },
  { slug: 'mm-mega-market-binh-phu', name: '	Cải tạo khu bán hàng – Siêu thị MM Mega Market Bình Phú', type: 'Siêu thị & TTTM', location: '10A Bình Phú, Hồ Chí Minh', year: '2026', systems: ['Hệ thống Sprinkler tự động', 'Hệ thống chữa cháy vách tường', 'Đèn chiếu sáng sự cố và thoát hiểm'], images: ['/images/projects/mm binh phu.png','/images/projects/binhphu.png','/images/projects/binhphumm.png'] },
  { slug: 'robert-bosch', name: 'Nhà máy Robert Bosch', type: 'Nhà máy & Khu CN', location: 'Đường số 8, Khu công nghiệp Long Thành, Huyện Long Thành Tỉnh Đồng Nai, Việt Nam', year: '2019 và 2012 (Chữa cháy tự động Sprinkler cho kệ hàng)', systems: ['Sprinkler tự động', 'Báo cháy tự động', 'Bình chữa cháy xách tay'], images: ['/images/projects/bosch.png','/images/projects/bosch1.webp','/images/projects/bosch2.png'] },
  { slug: 'tata-coffee', name: 'Nhà máy Tata Coffee', type: 'Nhà máy & Khu CN', location: 'Số 12, đường số 32, KCN VSIP II-A, phường Vĩnh Tân, TP. Tân Uyên, tỉnh Bình Dươn', year: '2019', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Bình chữa cháy xách tay'], images: ['/images/projects/tata.png','/images/projects/coffe.jpg','/images/projects/tatacofee.png'] },
  { slug: 'intel-viet-nam', name: 'Intel Việt Nam', type: 'Nhà máy & Khu CN', location: 'Lô I2, Đường D1, Khu Công nghệ cao TP.HCM, Phường Tăng Nhơn Phú B, Thành phố Thủ Đức, TP.HCM', year: '2010', systems: ['Chữa cháy tự động', 'Họng nước cứu hỏa', 'Chữa cháy vách tường '], images: ['/images/projects/intel.webp','/images/projects/intel.jpg ','/images/projects/intelvietnam.jpg '] },
   { slug: 'olam', name: 'Công Ty TNHH Chế Biến Thực Phẩm Olam Việt Nam', type: 'Nhà máy & Khu CN', location: 'Lô L, Đường Số 6, Khu công nghiệp (KCN) An Phước, Xã An Phước, Huyện Long Thành, Tỉnh Đồng Nai.', year: '2015', systems: ['Sprinkler tự động', 'Hệ thống báo cháy', 'Bình chữa cháy xách tay', 'Chữa cháy vách tường '], images: ['/images/projects/olam.jpg','/images/projects/olam1.png','/images/projects/olam3.jpg'] },
  { slug: 'colgate-palmolive', name: 'Nhà máy Colgate Palmolive', type: 'Nhà máy & Khu CN', location: 'Bình Dương', year: '2008', systems: ['Hệ thống Sprinkler tự động', 'Hệ thống chữa cháy vách tường', 'Họng nước cứu hỏa ngoài trời'], images: ['/images/projects/colgate.jpg'] },
  { slug: 'top-solvent', name: 'Nhà máy TOP Solvent (Shell Gò Dầu) ', type: 'Nhà máy & Khu CN', location: 'KCN Gò Dầu, Xã Phước Thái, TP Đồng Nai, Việt Nam', year: '2012', systems: ['Chữa cháy vách tường trong và ngoài nhà', 'Hệ thống Báo cháy tự động'], images: ['/images/projects/solvent2.webp','/images/projects/solvent3.webp','/images/projects/solvent3.jpg'] },
  { slug: 'intersnack', name: 'Nhà máy Chế Biến Hạt Điều - Intersnack', type: 'Nhà máy & Khu CN', location: 'Ấp Kinh Tế, Xã Bình Minh, Thành phố Tây Ninh, Tỉnh Tây Ninh, Việt Nam', year: '2024', systems: ['Sprinker tự động', 'Chữa cháy vách tường', 'Bình chữa cháy xách tay'], images: ['/images/projects/intersnack.jpg','/images/projects/intersnack1.jpg','/images/projects/intersnack2.jpg'] },
  { slug: 'frieslandcampina', name: 'FrieslandCampina Việt Nam', type: 'Nhà máy & Khu CN', location: 'Bình Dương', year: '2010', systems: ['Hệ thống Sprinkler tự động'], images: ['/images/projects/colgate.jpg'] },
  { slug: 'majestic-hotel', name: 'Khách sạn Majestic', type: 'Khách sạn', location: 'Số 01 đường Đồng Khởi, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh', year: '2010', systems: ['Chữa cháy tự động', 'Chữa cháy vách tường', 'Hệ thống báo cháy'], images: ['/images/projects/majestic.webp','/images/projects/majestic2.jpg','/images/projects/majestic3.jpg'] },
  { slug: 'novotel-da-nang', name: 'Khách sạn Novotel Đà Nẵng', type: 'Khách sạn', location: 'Số 36 Bạch Đằng, phường Hải Châu, quận Hải Châu, thành phố Đà Nẵng', year: '2013', systems: ['Hệ thống chữa cháy tự động khí CO2', 'Hệ thống chữa cháy khí FM200 cho phòng Server'], images: ['/images/projects/novotel1.jpg','/images/projects/novotel2.jpg','/images/projects/novotel3.jpg'] },
  { slug: 'hung-ngan', name: 'Khu nhà ở cao tầng và khu phức hợp thương mại Hưng Ngân', type: 'Cao tầng & Căn hộ', location: 'Đường Tân Chánh Hiệp 21 (số 48A Dương Thị Mười), Phường Tân Chánh Hiệp, Quận 12, Thành phố Hồ Chí Minh', year: '2016', systems: ['Hệ thống PCCC và chống sét Block B1'], images: ['/images/projects/hung ngan.jpg','/images/projects/hungngan1.jpg','/images/projects/hungngan2.jpg'] },
  { slug: 'imperial-vung-tau', name: 'The Imperial Residences', type: 'Khách sạn', location: 'Số 159-163 Thùy Vân, phường Thắng Tam, thành phố Vũng Tàu', year: '2014', systems: ['Hệ thống Sprinkler', 'Hệ thống chữa cháy vách tường', 'Hệ thống báo cháy tự động'], images: ['/images/projects/imperial.webp','/images/projects/imperiall.jpg','/images/projects/imperial2.avif'] },
  { slug: 'riviera-point', name: 'Residential Area Riviera Point', type: 'Cao tầng & Căn hộ', location: 'Số 2 đường Nguyễn Văn Tưởng và 584 Huỳnh Tấn Phát (phường Phú Thuận, Quận 7, TP.HCM)', year: '2010', systems: ['Thiết kế PCCC', 'Hệ thống chống sét'], images: ['/images/projects/river.jpeg','/images/projects/river1.jpg','/images/projects/river2.jpg'] },
  { slug: 'ubnd-hcm', name: 'Trụ sở UBND TP. Hồ Chí Minh', type: 'Công trình công cộng', location: '86 Lê Thánh Tôn, Sài Gòn, Hồ Chí Minh', year: '2010', systems: ['Hệ thống camera quan sát', 'Hệ thống báo cháy tự động'], images: ['/images/projects/ubnd.webp','/images/projects/unnd3.png','/images/projects/ubnd2.jpg'] },
  { slug: 'thu-vien-dong-nai', name: 'Thư Viện Tỉnh Đồng Nai', type: 'Công trình công cộng', location: 'Số 1 Nguyễn Ái Quốc, Tân Triều, Đồng Nai', year: '2005', systems: ['Báo cháy tự động', 'Hệ thống chống sét'], images: ['/images/projects/thuvien.jpg','/images/projects/thuvien1.jpg','/images/projects/thuvien2.jpg'] },



  { slug: 'bigc-quy-nhon', name: 'Big C Quy Nhơn (Go! Quy Nhơn)', type: 'Siêu thị & TTTM', location: 'TTTM Kim Cúc Plaza, Khu đô thị Xanh Vũng Chua, Quốc lộ 1D, phường Ghềnh Ráng, TP. Quy Nhơn', year: '2014', systems: ['Sprinkler tự động và báo cháy tự động', 'Chữa cháy vách tường', 'Chữa cháy khí sạch cho phòng Server','Hệ thống Cửa trượt chống cháy và Cửa thoát hiểm'], images: ['/images/projects/kimcuc.jpg','/images/projects/kimcuc1.webp','/images/projects/kimcuc2.jpg'] },
    { slug: 'bigc-ha-long', name: 'Big C Hạ Long (Go! Hạ Long)', type: 'Siêu thị & TTTM', location: 'Khu dân cư Cột 5, Phường Hồng Hải, Thành phố Hạ Long, Tỉnh Quảng Ninh', year: '2013', systems: ['Sprinkler tự động', 'Báo cháy tự động', 'Chữa cháy vách tường','Chữa cháy khí sạch cho phòng Server','Chữa cháy tự động CO2',' Cửa trượt chống cháy và Cửa thoát hiểm'], images: ['/images/projects/halong.jpg','/images/projects/halong1.jpg','/images/projects/halong2.jpg'] },
     { slug: 'bigc-da-lat', name: 'Big C Đà Lạt (Go! Đà Lạt)', type: 'Siêu thị & TTTM', location: 'Quảng trường Lâm Viên, góc đường Hồ Tùng Mậu và Trần Quốc Toản, Phường 10, TP. Đà Lạt', year: '2013', systems: ['Sprinkler tự động', 'Báo cháy tự động','Chữa cháy vách tường','Chữa cháy khí sạch cho phòng Server','Cửa trượt chống cháy và Cửa thoát hiểm'], images: ['/images/projects/da lat.jpg','/images/projects/bigc1.jpg','/images/projects/bigc2.jpg'] },
     { slug: 'mm-mega-market-hung-phu', name: 'MM Food Service Hưng Phú - MM Mega Market Việt Nam', type: 'Siêu thị & TTTM', location: 'Số 9B đường Kha Vạn Cân, Phường Linh Đông, Thành phố Thủ Đức, TP. Hồ Chí Minh.', year: '2024', systems: ['Sprinkler tự động', 'Chữa cháy vách tường', 'Bình chữa cháy xách tay','Hệ thống Báo cháy và chữa cháy CO2 tự động'], images: ['/images/projects/hung phu.jpg','/images/projects/hungphu1.jpg','/images/projects/hungphu.webp'] },
         { slug:'mm-mega-market-thanh-xuan', name: 'MM Mega Market Thanh Xuân', type: 'Siêu thị & TTTM', location: 'Tầng hầm B1, dự án Imperial Plaza, số 360 đường Giải Phóng, phường Phương Liệt, Quận Thanh Xuân, Hà Nội.', year: '2019', systems: ['.....'], images: ['/images/projects/thanh xuan.jpg','/images/projects/thanhxuan3.avif','/images/projects/thanhxuan2.webp'] },
      { slug: 'mm-mega-market-bien-hoa', name: 'Cải tạo khu bán hàng – Siêu thị MM Mega Market Biên Hòa', type: 'Siêu thị & TTTM', location: 'Số 1806 đường Nguyễn Ái Quốc, khu phố 4, phường Quang Vinh, thành phố Biên Hòa, tỉnh Đồng Nai.', year: '2024', systems: ['Sprinkler tự động', 'Hệ thống đèn chiếu sáng sự cố và thoát hiểm', 'Chữa cháy vách tường'], images: ['/images/projects/bien hoa.jpg','/images/projects/bienhoa2.jpg','/images/projects/bienhoa.jpg'] },
     { slug: 'metro-da-nang', name: 'Metro Đà Nẵng', type: 'Siêu thị & TTTM', location: 'Số 5 Cách Mạng Tháng Tám, phường Hòa Cường Nam, quận Cẩm Lệ, thành phố Đà Nẵng', year: '2005', systems: ['Hệ thống chữa cháy tự động','Hệ thống chữa cháy ngoài trời','Hệ thống chữa cháy vách tường'], images: ['/images/projects/metrodanang2.jpg','/images/projects/metrodanang.jpeg','/images/projects/metrodanang1.jpg'] },
      { slug: 'metro-ha-dong', name: 'Metro Hà Đông', type: 'Siêu thị & TTTM', location: 'Số 5 Cách Mạng Tháng Tám, phường Hòa Cường Nam, quận Cẩm Lệ, thành phố Đà Nẵng', year: '2012', systems: ['Sprinkler tự động', 'Chữa cháy trong nhà và ngoài nhà'], images: ['/images/projects/metrohadong.jpg','/images/projects/metrohadong.jpeg','/images/projects/metrohadong3.jpg'] },
       { slug: 'metro-rach-gia', name: 'Metro Rạch Giá', type: 'Siêu thị & TTTM', location: 'Lô A11, Đường 3 Tháng 2, Phường Vĩnh Bảo, Thành phố Rạch Giá, Tỉnh Kiên Giang', year: '2012', systems: ['Sprinkler tự động', 'Chữa cháy trong nhà và ngoài nhà'], images: ['/images/projects/rachgia.png','/images/projects/rachgia.jpg','/images/projects/rachgia.webp'] },
{ slug: 'emart-go-vap', name: 'Cải tạo một phần Khu văn phòng tầng 2 và Bảo Trì Emart Gò Vấp', type: 'Siêu thị & TTTM', location: '366 Đ. Phan Văn Trị, An Nhơn, Hồ Chí Minh', year: '2024', systems: ['Sprinkler tự động', 'Chữa cháy vách tường','Bình chữa cháy xách tay','Hệ thống Báo cháy'], images: ['/images/projects/emart.jpg','/images/projects/emart1.jpg','/images/projects/emart2.jpg'] },
 { slug: 'khu-thuong-mai-binh-dien', name: 'Khu Thương mại Bình Điền – Giai đoạn 2A', type: 'Siêu thị & TTTM', location: 'Đường Quản Trọng Linh, khu phố 6, phường 7, Quận 8, TP. HCM', year: '2014', systems: ['Chữa cháy tường nước Sprinkler', 'Chữa cháy vách tường','Hệ thống chống sét lan truyền','Hệ thống Báo cháy tự động'], images: ['/images/projects/cho binh dien.jpg','/images/projects/binhdien.jpg','/images/projects/binhdien2.jpg'] },
  { slug: 'sieu-thi-nhat-nam', name: 'Siêu Thị Nhật Nam', type: 'Siêu thị & TTTM', location: 'Số 54 – 56 đường Nguyễn Trãi, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh', year: '1998', systems: ['Chữa cháy tự động', 'Báo cháy tự động'], images: ['/images/projects/sieuthinhatnam.jpeg','/images/projects/nhat nam.jpg','/images/projects/nhatnam.jpeg'] },
]
const typeToHref = {
  'Siêu thị & TTTM':      '/du-an/sieu-thi-tttm',
  'Nhà máy & Khu CN':     '/du-an/nha-may-khu-cn',
  'Khách sạn':             '/du-an/khach-san',
  'Cao tầng & Căn hộ':    '/du-an/cao-tang-can-ho',
  'Công trình công cộng': '/du-an/cong-trinh-cong-cong',
}

export async function generateStaticParams() {
  return allProjects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const project = allProjects.find(p => p.slug === params.slug)
  if (!project) return { title: 'Dự án không tồn tại' }
  return {
    title: project.name,
    description: `PCCC tại ${project.name} — ${project.location}. ${project.systems.join(', ')}.`,
  }
}

export default function DuAnChiTietPage({ params }) {
  const project = allProjects.find(p => p.slug === params.slug)

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-brand-gray-light flex items-center justify-center py-20">
          <div className="text-center px-4">
            <div className="text-6xl font-bold text-brand-red mb-4">404</div>
            <h1 className="text-xl font-bold text-brand-gray mb-3">Không tìm thấy dự án</h1>
            <Link href="/du-an" className="btn-primary">Xem tất cả dự án</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const catHref = typeToHref[project.type] || '/du-an'

  const infoItems = [
    {
      label: 'Loại công trình', value: project.type,
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
    },
    {
      label: 'Địa điểm', value: project.location,
      icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
    },
    {
      label: 'Năm hoàn thành', value: project.year,
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    },
    {
      label: 'Số hạng mục', value: `${project.systems.length} hạng mục PCCC`,
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">

        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-brand-red">Trang chủ</Link>
            <span>/</span>
            <Link href="/du-an" className="hover:text-brand-red">Dự án</Link>
            <span>/</span>
            <Link href={catHref} className="hover:text-brand-red">{project.type}</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium">{project.name}</span>
          </div>
        </div>

        <div className="container-main py-10">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Cột trái: Gallery + hạng mục */}
            <div className="lg:col-span-2 space-y-5">
              <ImageGallery images={project.images} name={project.name} />

              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="font-bold text-brand-gray mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <span className="w-1 h-5 bg-brand-red rounded-full" />
                  Hạng mục thi công
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.systems.map(sys => (
                    <div key={sys} className="flex items-start gap-3 bg-brand-gray-light rounded-lg px-4 py-3">
                      <span className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0 mt-1.5" />
                      <span className="text-sm text-brand-gray">{sys}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cột phải: Thông tin */}
            <div className="space-y-5">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h1 className="text-xl font-bold text-brand-gray mb-5 leading-snug">{project.name}</h1>
                <div className="space-y-4">
                  {infoItems.map(item => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-brand-red-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-brand-gray-mid mb-0.5">{item.label}</p>
                        <p className="text-sm font-medium text-brand-gray">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <p className="text-sm font-semibold text-brand-gray mb-3">Dự án cùng loại</p>
                <Link href={catHref} className="flex items-center gap-2 text-sm text-brand-red hover:underline">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Xem tất cả {project.type}
                </Link>
              </div>

              <div className="bg-brand-red rounded-xl p-5 text-white">
                <p className="font-bold mb-1 text-sm">Cần tư vấn dự án tương tự?</p>
                <p className="text-red-100 text-xs mb-4">Liên hệ để được khảo sát và báo giá miễn phí</p>
                <div className="space-y-2">
                  <a href="tel:+84968552345" className="flex items-center justify-center bg-white text-brand-red font-bold py-2.5 rounded-lg hover:bg-red-50 transition-colors text-sm w-full">
                    Gọi: 0968 552 345
                  </a>
                  <Link href="/bao-gia" className="flex items-center justify-center border border-white text-white py-2.5 rounded-lg hover:bg-white hover:text-brand-red transition-colors text-sm w-full">
                    Gửi yêu cầu báo giá
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
