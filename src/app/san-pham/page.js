import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Sản phẩm PCCC',
  description: 'Thiết bị PCCC chính hãng: Sprinkler, Hosereel, Hydrant, Bình chữa cháy, Báo cháy, FM200, Cửa chống cháy — Tiêu chuẩn UL, FM, BS, TCVN.',
}

// ================================================================
// DỮ LIỆU SẢN PHẨM THẬT từ file thông tin Bảo An Engineering
// ================================================================
const categories = [
  {
    id: 'sprinkler',
    title: 'Hệ thống Sprinkler tự động',
    desc: 'Hệ thống chữa cháy tự động phổ biến nhất thế giới — phát hiện và dập tắt đám cháy ngay khi nhiệt độ tăng cao, không cần con người can thiệp.',
    products: [
      {
        id: 'sp-01',
        name: 'Đầu phun Sprinkler',
        img: '/images/sanpham/dau-phun.png',
        brand: 'Tyco / Viking',
        specs: [
          { label: 'Tiêu chuẩn', value: 'UL Listed, FM Approved' },
          { label: 'K-factor', value: '5.6, 8.0, 11.2, 14.0, 16.8' },
          { label: 'Nhiệt độ kích hoạt', value: '57°C, 68°C, 79°C, 93°C, 141°C' },
          { label: 'Loại đầu phun', value: 'Upright, Pendent, Concealed, Sidewall' },
          { label: 'Áp lực làm việc', value: 'Tối thiểu 0.5 Bar — Tối đa 12 Bar' },
          { label: 'Kết nối', value: '1/2" BSP, 3/4" BSP' },
        ],
        desc: 'Đầu phun Sprinkler tự động kích hoạt khi nhiệt độ môi trường đạt đến ngưỡng định sẵn. Đầu phun vỡ bóng thủy tinh giải phóng nước phun theo bán kính thiết kế bao phủ 9–16m² mỗi đầu phun.',
      },
      {
        id: 'sp-02',
        name: 'Van báo động (Alarm Check Valve)',
        img: '/images/sanpham/van-bao-dong.png',
        brand: 'Tyco',
        specs: [
          { label: 'Tiêu chuẩn', value: 'BS 5041, UL Listed' },
          { label: 'Áp lực làm việc', value: '15 Bar' },
          { label: 'Áp lực thử nghiệm', value: '20 Bar' },
          { label: 'Kích cỡ', value: 'DN50, DN65, DN80, DN100, DN150, DN200' },
          { label: 'Vật liệu thân', value: 'Gang cầu (Ductile Iron)' },
          { label: 'Kết nối', value: 'Mặt bích theo BS 10 Table E' },
        ],
        desc: 'Van báo động là thiết bị kiểm soát chính trong hệ thống Sprinkler ướt (Wet Pipe). Khi đầu phun kích hoạt, van mở cho nước chảy qua đồng thời cấp tín hiệu báo động về trung tâm.',
      },
      {
        id: 'sp-03',
        name: 'Van cổng (Gate Valve)',
        img: '/images/sanpham/van-cong.png',
        brand: 'Tyco / Bảo An Engineering',
        specs: [
          { label: 'Tiêu chuẩn', value: 'UL Listed, FM Approved' },
          { label: 'Áp lực làm việc', value: '15 Bar' },
          { label: 'Kích cỡ', value: 'DN25 đến DN200' },
          { label: 'Vật liệu', value: 'Gang cầu, đầu nối đồng thau' },
          { label: 'Sơn', value: 'Epoxy đỏ chống gỉ' },
          { label: 'Kiểm soát', value: 'OS&Y (Outside Screw & Yoke) — có thể nhìn thấy trạng thái' },
        ],
        desc: 'Van cổng dùng để cô lập từng khu vực trong hệ thống Sprinkler khi bảo trì. Loại OS&Y cho phép kiểm tra trực quan trạng thái mở/đóng từ xa.',
      },
    ],
  },
  {
    id: 'hosereel-hydrant',
    title: 'Hosereel & Hydrant (Chữa cháy vách tường)',
    desc: 'Hệ thống chữa cháy bán tự động cho phép nhân viên bảo vệ và lực lượng PCCC dùng vòi nước áp lực cao để dập tắt đám cháy ngay tại chỗ.',
    products: [
      {
        id: 'hr-01',
        name: 'Hộp tủ Hosereel ngoài trời',
        img: '/images/sanpham/hop-tu-ngoai-nha.png',
        brand: 'Bảo An Engineering',
        specs: [
          { label: 'Mã sản phẩm', value: 'BA-HC.1 / BA-HC.2 / BA-HC.3' },
          { label: 'Vật liệu', value: 'Thép mềm (Mild Steel) 1.0mm' },
          { label: 'Màu sắc', value: 'Đỏ — Sơn tĩnh điện Epoxy Powder Red' },
          { label: 'Lắp đặt', value: 'Gắn tường hoặc chân đế cố định' },
          { label: 'Kích thước BA-HC.1', value: 'L×B×C: 900 × 750mm' },
          { label: 'Kích thước BA-HC.2', value: 'L×B×C: 1250 × 800 × 250mm' },
          { label: 'Kích thước BA-HC.3', value: 'L×B×C: 1350 × 750 × 250mm' },
        ],
        desc: 'Hộp tủ Hosereel ngoài trời của Bảo An Engineering được sản xuất tại xưởng chế tạo riêng tại Đồng Nai. Thiết kế chắc chắn, chống thấm nước, phù hợp lắp đặt tại sân, hành lang ngoài trời, kho hàng.',
      },
      {
        id: 'hr-02',
        name: 'Cuộn vòi chữa cháy (Fire Hose Reel)',
        img: '/images/sanpham/cuon-voi.png',
        brand: 'SRI — Tiêu chuẩn BS & AS',
        specs: [
          { label: 'Tiêu chuẩn', value: 'EN671 (BS), AS1221 (Úc) — Chứng nhận BSI & QAS' },
          { label: 'Đường kính vòi', value: '25mm (1")' },
          { label: 'Chiều dài vòi', value: '30m (tiêu chuẩn)' },
          { label: 'Loại', value: 'Swing type (quay 180°), Fixed type, Manual/Automatic' },
          { label: 'Áp lực làm việc', value: '15 Bar — Thử nghiệm 20 Bar' },
          { label: 'Vật liệu đường nước', value: 'Kim loại không màu (Non-ferrous) — Chống ăn mòn' },
        ],
        desc: 'Cuộn vòi Hosereel loại swing quay 180° cho phép lắp âm tường và rút vòi theo mọi hướng. Valve tự động mở sau 2 vòng quay của cuộn vòi. Được kiểm tra định kỳ bởi BSI và QAS Australia.',
      },
      {
        id: 'hr-03',
        name: 'Vòi chữa cháy ni lông tráng cao su',
        img: '/images/sanpham/voi-chua-chay.png',
        brand: 'Tiêu chuẩn TCVN',
        specs: [
          { label: 'Vật liệu', value: 'Ni lông tráng cao su 2 lớp' },
          { label: 'Đường kính trong', value: '50mm, 65mm' },
          { label: 'Chiều dài', value: '20m, 25m, 30m' },
          { label: 'Áp lực làm việc', value: '16 Bar' },
          { label: 'Chứng nhận', value: 'Cục CSPCCC Bộ Công an' },
          { label: 'Đầu nối', value: 'Theo tiêu chuẩn TCVN' },
        ],
        desc: 'Vòi chữa cháy ni lông tráng cao su dùng với hydrant ngoài trời và hệ thống cấp nước PCCC. Lớp cao su bên ngoài bảo vệ vòi khỏi trầy xước, chịu nhiệt và chịu áp lực tốt.',
      },
      {
        id: 'hr-04',
        name: 'Lăng phun nước chữa cháy',
        img: '/images/sanpham/lang-phun-nuoc.png',
        brand: 'Tiêu chuẩn TCVN',
        specs: [
          { label: 'Vật liệu', value: 'Nhôm đúc hoặc đồng thau' },
          { label: 'Đường kính đầu ra', value: '13mm, 16mm, 19mm, 22mm' },
          { label: 'Loại tia nước', value: 'Tia đặc (Jet) và phun sương (Spray/Fog)' },
          { label: 'Chứng nhận', value: 'Cục CSPCCC Bộ Công an' },
          { label: 'Ứng dụng', value: 'Dùng với vòi 50mm và 65mm' },
        ],
        desc: 'Lăng phun nước điều chỉnh được kiểu phun: tia đặc để tấn công đám cháy từ xa hoặc phun sương để làm mát và che chắn. Dùng với vòi chữa cháy kết nối hệ thống Hydrant.',
      },
      {
        id: 'hr-05',
        name: 'Trụ chữa cháy (Fire Hydrant)',
        img: '/images/sanpham/tru-chua-chay.png',
        brand: 'Tyco / Bảo An Engineering',
        specs: [
          { label: 'Tiêu chuẩn', value: 'BS 5041 — Wet & Dry Riser Equipment' },
          { label: 'Áp lực làm việc', value: '15 Bar' },
          { label: 'Áp lực thử nghiệm', value: '20 Bar' },
          { label: 'Loại', value: 'Nổi (Wet barrel) và chìm (Dry barrel)' },
          { label: 'Đầu ra', value: '2 miệng × 65mm hoặc 1 miệng × 100mm' },
          { label: 'Chứng nhận', value: 'BS 750, TCVN 4513' },
        ],
        desc: 'Trụ chữa cháy lắp ngoài trời cung cấp điểm kết nối nước cho xe chữa cháy và hệ thống hydrant. Màu đỏ, dễ nhận biết, lắp đặt theo TCVN 4513:1988.',
      },
      {
        id: 'hr-06',
        name: 'Họng tiếp nước (Breeching Inlet)',
        img: '/images/sanpham/he-thong-ong-dung.png',
        brand: 'Tyco',
        specs: [
          { label: 'Tiêu chuẩn', value: 'BS 5041 Part 3 & 4' },
          { label: 'Vật liệu thân', value: 'Gang cầu BS 2789 hoặc Gang xám BS 1452' },
          { label: 'Đầu vào', value: 'Instantaneous Male Copper Alloy theo BS 1400' },
          { label: 'Đầu ra 2 way', value: 'Mặt bích 4" BS 10 Table E' },
          { label: 'Đầu ra 4 way', value: 'Mặt bích 6" BS 10 Table E' },
          { label: 'Áp lực làm việc', value: '15 Bar — Thử nghiệm 20 Bar' },
        ],
        desc: 'Họng tiếp nước cho phép xe cứu hỏa bơm nước vào hệ thống ống đứng (Dry Riser) trong tòa nhà cao tầng. Loại 2-way và 4-way lắp đặt ở tầng trệt, dễ tiếp cận.',
      },
    ],
  },
  {
    id: 'phu-kien',
    title: 'Phụ kiện & Vật tư PCCC',
    desc: 'Linh kiện phụ trợ cần thiết cho việc lắp đặt hệ thống PCCC: vòng treo ống, kẹp gang, khớp nối — sản xuất bởi Bảo An Engineering, tuân thủ MSS SP-69/SP-58.',
    products: [
      {
        id: 'pk-01',
        name: 'Vòng treo ống — Điều chỉnh (Adjustable Swivel Ring)',
        img: '/images/sanpham/treo-ong.png',
        brand: 'Bảo An Engineering',
        specs: [
          { label: 'Mã sản phẩm', value: 'BA-R01 đến BA-R05' },
          { label: 'Tiêu chuẩn', value: 'TCVN, NFPA, MSS SP-69 & SP-58 Type 10' },
          { label: 'Vật liệu', value: 'Thép mạ kẽm điện phân (Pre-Galvanized)' },
          { label: 'Kích cỡ ống', value: '3/4" đến 2" (DN20 đến DN50)' },
          { label: 'Tải trọng thiết kế', value: '300–475 lbs (1.33–2.11 kN)' },
          { label: 'Ứng dụng', value: 'Treo ống có và không có bảo ôn' },
        ],
        desc: 'Vòng treo ống điều chỉnh được cho phép thay đổi chiều cao lắp đặt linh hoạt. Phù hợp treo ống Sprinkler trên trần nhà xưởng và siêu thị. Sản xuất tại xưởng Bảo An, Đồng Nai.',
      },
      {
        id: 'pk-02',
        name: 'Vòng treo ống mở rộng (Extended Clevis Hanger)',
        img: '/images/sanpham/treo-ong.png',
        brand: 'Bảo An Engineering',
        specs: [
          { label: 'Mã sản phẩm', value: 'BA-H-2½ đến BA-H-8' },
          { label: 'Tiêu chuẩn', value: 'TCVN, NFPA, MSS SP-69 & SP-58' },
          { label: 'Vật liệu', value: 'Thép (tùy chọn Inox 304 cho môi trường ăn mòn)' },
          { label: 'Kích cỡ ống', value: '2½" đến 8" (DN65 đến DN200)' },
          { label: 'Tải trọng thiết kế', value: '1350–2000 lbs (6.0–8.89 kN)' },
          { label: 'Nhiệt độ', value: 'Đến 565°C khi dùng Inox 304' },
        ],
        desc: 'Vòng treo ống cỡ lớn cho đường ống chính (Main) trong hệ thống Sprinkler và cấp nước PCCC. Độ điều chỉnh cao linh hoạt cho mọi cấu trúc trần.',
      },
      {
        id: 'pk-03',
        name: 'Kẹp gang (Beam Clamp)',
        img: '/images/sanpham/kep-gang.png',
        brand: 'Bảo An Engineering',
        specs: [
          { label: 'Mã sản phẩm', value: 'BA-BC001 (Wide Jaw Reversible C-Clamp)' },
          { label: 'Tiêu chuẩn', value: 'Chứng nhận KT3-1782CK8 — Quality Assurance Testing Center 3' },
          { label: 'Vật liệu', value: 'Gang cầu (Ductile Iron)' },
          { label: 'Bề mặt', value: 'Thường hoặc mạ kẽm điện phân' },
          { label: 'Tải trọng thiết kế', value: '500 lbs (2.22 kN)' },
          { label: 'Ứng dụng', value: 'Gắn thanh treo lên xà (Bar Joist) — không cần khoan' },
        ],
        desc: 'Kẹp gang kẹp trực tiếp vào xà thép mà không cần khoan hay hàn. Đặc biệt hữu ích trong thi công nhà xưởng khung thép tiền chế.',
      },
      {
        id: 'pk-04',
        name: 'Khớp nối nhanh (Victaulic Coupling)',
        img: '/images/sanpham/khop-noi-nhanh.png',
        brand: 'Victaulic',
        specs: [
          { label: 'Kích cỡ', value: '1¼" đến 12" (DN32 đến DN300)' },
          { label: 'Áp lực', value: 'Đến 500 psig (34.5 Bar)' },
          { label: 'Vật liệu', value: 'Gang cầu, Inox 304/316, thép Carbon' },
          { label: 'Gioăng', value: 'EPDM, Nitrile, Silicone (tùy môi trường)' },
          { label: 'Ứng dụng', value: 'Hệ thống Sprinkler, ống nước PCCC áp lực cao' },
          { label: 'Lắp đặt', value: 'Không cần hàn — giảm 60% thời gian so với hàn thông thường' },
        ],
        desc: 'Khớp nối nhanh Victaulic là giải pháp kết nối ống không cần hàn, giúp rút ngắn thời gian thi công đáng kể. Được ứng dụng rộng rãi tại các dự án Big C, Metro, Intel tại Việt Nam.',
      },
    ],
  },
  {
    id: 'binh-chua-chay',
    title: 'Bình chữa cháy',
    desc: 'Bình chữa cháy xách tay và xe đẩy dùng cho đám cháy loại A, B, C. Đầy đủ chứng nhận Cục CSPCCC Bộ Công an.',
    products: [
      {
        id: 'bcc-01',
        name: 'Bình chữa cháy CO2 (3kg, 5kg)',
        img: '/images/sanpham/van-cong.png',
        brand: 'Việt Nam / Trung Quốc',
        specs: [
          { label: 'Chứng nhận', value: 'Cục CSPCCC Bộ Công an' },
          { label: 'Dung tích', value: '3kg, 5kg' },
          { label: 'Loại đám cháy', value: 'B (xăng dầu), C (điện)' },
          { label: 'Áp lực nạp', value: '50–60 Bar' },
          { label: 'Nhiệt độ bảo quản', value: '-20°C đến +55°C' },
          { label: 'Tần suất kiểm tra', value: '12 tháng/lần' },
        ],
        desc: 'Bình CO2 không để lại cặn, không dẫn điện — phù hợp chữa cháy thiết bị điện tử, phòng máy chủ, phòng điều khiển. Không dùng cho đám cháy loại A (gỗ, giấy).',
      },
      {
        id: 'bcc-02',
        name: 'Bình chữa cháy bột ABC (4kg, 8kg)',
        img: '/images/sanpham/van-cong.png',
        brand: 'Việt Nam',
        specs: [
          { label: 'Chứng nhận', value: 'Cục CSPCCC Bộ Công an' },
          { label: 'Dung tích', value: '4kg, 8kg' },
          { label: 'Loại đám cháy', value: 'A (chất rắn), B (xăng dầu), C (điện)' },
          { label: 'Áp lực nạp', value: '14–16 Bar' },
          { label: 'Tầm phun', value: '3–5 mét' },
          { label: 'Thời gian phun', value: '12–18 giây' },
        ],
        desc: 'Bình bột ABC đa năng chữa được 3 loại đám cháy A, B, C. Là loại bình phổ biến nhất tại Việt Nam, bắt buộc trang bị theo TCVN 3890:2009.',
      },
    ],
  },
  {
    id: 'bao-chay',
    title: 'Báo cháy tự động',
    desc: 'Hệ thống phát hiện đám cháy từ sớm qua cảm biến nhiệt, khói — gửi tín hiệu về trung tâm và kích hoạt còi/đèn báo động.',
    products: [
      {
        id: 'bc-01',
        name: 'Hệ thống báo cháy địa chỉ (Addressable)',
        img: '/images/sanpham/van-bao-dong.png',
        brand: 'Ampac / Siemens',
        specs: [
          { label: 'Tiêu chuẩn', value: 'AS 7240, EN54, TCVN 5738:2001' },
          { label: 'Đầu báo', value: 'Địa chỉ hóa từng đầu (từng phòng riêng biệt)' },
          { label: 'Số loop/tủ', value: '1–8 loop' },
          { label: 'Thiết bị/loop', value: 'Đến 250 thiết bị/loop' },
          { label: 'Ứng dụng', value: 'Nhà máy, siêu thị, tòa nhà cao tầng' },
          { label: 'Chứng nhận', value: 'UL, FM (Ampac), CE (Siemens)' },
        ],
        desc: 'Hệ thống báo cháy địa chỉ xác định chính xác vị trí đầu báo nào phát hiện cháy, hiển thị trên màn hình trung tâm. Phù hợp công trình lớn cần quản lý chi tiết.',
      },
      {
        id: 'bc-02',
        name: 'Hệ thống báo cháy thông thường (Conventional)',
        img: '/images/sanpham/van-bao-dong.png',
        brand: 'Ampac / Siemens',
        specs: [
          { label: 'Tiêu chuẩn', value: 'EN54, TCVN 5738:2001' },
          { label: 'Cấu trúc', value: 'Phân vùng (Zone) — mỗi zone là 1 khu vực' },
          { label: 'Số zone/tủ', value: '2–32 zone' },
          { label: 'Ứng dụng', value: 'Nhà kho, nhà xưởng vừa và nhỏ' },
          { label: 'Ưu điểm', value: 'Chi phí thấp, dễ bảo trì, phù hợp công trình đơn giản' },
        ],
        desc: 'Hệ thống báo cháy thông thường phát hiện cháy theo vùng (zone). Phù hợp cho công trình nhỏ và vừa, chi phí đầu tư thấp hơn hệ thống địa chỉ.',
      },
    ],
  },
  {
    id: 'foam',
    title: 'Thiết bị Foam',
    desc: 'Hệ thống chữa cháy bằng bọt Foam dùng cho kho xăng dầu, nhà máy hóa chất, sân bay — nơi nước không thể dập tắt đám cháy chất lỏng dễ cháy.',
    products: [
      {
        id: 'foam-01',
        name: 'Dung dịch Foam AFFF 3% và 6%',
        img: '/images/sanpham/lang-phun-nuoc.png',
        brand: 'Ansul / Buckeye',
        specs: [
          { label: 'Loại', value: 'AFFF (Aqueous Film Forming Foam)' },
          { label: 'Tỷ lệ pha', value: '3% và 6% với nước' },
          { label: 'Tiêu chuẩn', value: 'UL 162, MIL-F-24385' },
          { label: 'Loại đám cháy', value: 'B (xăng, dầu diesel, dung môi)' },
          { label: 'Đóng gói', value: 'Thùng 25L, 200L' },
          { label: 'Chứng nhận', value: 'UL Listed, FM Approved' },
        ],
        desc: 'Foam AFFF tạo màng phim nước mỏng trên bề mặt chất lỏng, cắt đứt nguồn oxy và ngăn bay hơi nhiên liệu. Ứng dụng tại Shell Gò Dầu và các kho xăng dầu của Bảo An.',
      },
    ],
  },
  {
    id: 'khi-sach',
    title: 'Khí sạch FM200 / CO2',
    desc: 'Hệ thống chữa cháy sạch không để lại cặn — bảo vệ phòng máy chủ, phòng điều khiển, kho lưu trữ dữ liệu và tài liệu quý.',
    products: [
      {
        id: 'ks-01',
        name: 'Hệ thống chữa cháy FM-200 (HFC-227ea)',
        img: '/images/sanpham/van-bao-dong.png',
        brand: 'Kidde / Siemens',
        specs: [
          { label: 'Tiêu chuẩn', value: 'NFPA 2001, ISO 14520' },
          { label: 'Chứng nhận', value: 'UL Listed, FM Approved' },
          { label: 'ODP', value: '0 (không phá tầng ozone)' },
          { label: 'GWP', value: '3220 (thân thiện môi trường hơn Halon)' },
          { label: 'Nồng độ thiết kế', value: '7.9% (theo NFPA 2001)' },
          { label: 'Thời gian xả', value: 'Nhỏ hơn 10 giây' },
        ],
        desc: 'FM200 là khí chữa cháy sạch phổ biến nhất thay thế Halon. Không dẫn điện, không để lại cặn, an toàn cho người trong thời gian ngắn. Ứng dụng tại Intel Vietnam, phòng máy chủ ngân hàng.',
      },
    ],
  },
  {
    id: 'camera',
    title: 'Camera & An ninh',
    desc: 'Hệ thống camera quan sát và an ninh tích hợp với hệ thống PCCC — giám sát 24/7, phát hiện sớm nguy cơ cháy nổ.',
    products: [
      {
        id: 'cam-01',
        name: 'Camera quan sát trong nhà và ngoài trời',
        img: '/images/sanpham/truc-chay-ngoai-nha.jpg',
        brand: 'Hikvision / Dahua',
        specs: [
          { label: 'Độ phân giải', value: '2MP (1080p), 4MP, 8MP (4K)' },
          { label: 'Loại', value: 'Dome (trong nhà), Bullet (ngoài trời), PTZ' },
          { label: 'Chống nước', value: 'IP66/IP67 (camera ngoài trời)' },
          { label: 'Hồng ngoại', value: 'Ban đêm đến 30m, 50m, 100m' },
          { label: 'Lưu trữ', value: 'NVR/DVR 4–64 kênh, HDD 1–8TB' },
          { label: 'Tiêu chuẩn', value: 'ONVIF Profile S — tương thích đa hãng' },
        ],
        desc: 'Hệ thống camera giám sát tích hợp báo động chuyển động, kết nối phần mềm quản lý trung tâm. Lắp đặt tại kho hàng, nhà máy, siêu thị — kết hợp với hệ thống PCCC tạo giải pháp an toàn toàn diện.',
      },
    ],
  },
  {
    id: 'thiet-bi-khac',
    title: 'Cửa chống cháy',
    desc: 'Cửa chống cháy ngăn chặn lan truyền lửa và khói giữa các khu vực, bảo vệ lối thoát hiểm an toàn trong trường hợp xảy ra hỏa hoạn.',
    products: [
      {
        id: 'ccc-01',
        name: 'Cửa thép chống cháy (Fire Steel Door)',
        img: '/images/sanpham/cua-chong-chay.png',
        brand: 'Bảo An Engineering',
        specs: [
          { label: 'Mã sản phẩm', value: 'RF60 (60 phút), RF120 (120 phút)' },
          { label: 'Màu sắc', value: 'Trắng kem, Trắng ngà, Trắng (nhiều lựa chọn)' },
          { label: 'Lắp đặt', value: 'Mở trái (L) hoặc phải (R) — 7 kiểu mở' },
          { label: 'Kích thước cánh', value: '800×2050mm đến 1300×2140mm' },
          { label: 'Tùy chọn', value: 'Cửa một cánh, hai cánh — có thể có cửa sổ kính' },
          { label: 'Phụ kiện chuẩn', value: 'Khóa trụ, thanh thoát hiểm (push bar), bản lề, tay nắm, door closer' },
        ],
        desc: 'Cửa thép chống cháy RF60 và RF120 ngăn lửa lan truyền trong 60 và 120 phút. Tự động đóng khi có báo động cháy. Phù hợp lắp tại cầu thang thoát hiểm, buồng thang máy, phòng kỹ thuật.',
      },
    ],
  },
]

export default function SanPhamPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2">
            <Link href="/" className="hover:text-brand-red transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium">Sản phẩm PCCC</span>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-brand-gray text-white py-10">
          <div className="container-main">
            <h1 className="text-2xl font-bold mb-2">Catalogue sản phẩm PCCC</h1>
            <p className="text-gray-400 text-sm max-w-2xl">
              Thiết bị PCCC chính hãng từ Tyco, Viking, Victaulic, SRI — đầy đủ chứng nhận UL, FM, BS, VdS, TCVN.
              Sản xuất tại xưởng Bảo An Engineering, Đồng Nai.
            </p>
          </div>
        </div>

        <div className="container-main py-10">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar danh mục */}
            <aside className="lg:w-60 flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden sticky top-24">
                <div className="bg-brand-red text-white text-sm font-semibold px-4 py-3">
                  Danh mục sản phẩm
                </div>
                <div className="p-2">
                  {categories.map(cat => (
                    <a key={cat.id} href={`#${cat.id}`}
                      className="flex items-center gap-2 px-3 py-2.5 text-sm text-brand-gray hover:bg-brand-red-light hover:text-brand-red rounded-lg transition-colors">
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                      {cat.title}
                    </a>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-100 bg-brand-red-light">
                  <p className="text-xs text-brand-gray-mid mb-2">Cần tư vấn sản phẩm?</p>
                  <a href="tel:+84968552345" className="btn-primary text-xs py-2 px-3 w-full justify-center">
                    Gọi: 0968 552 345
                  </a>
                </div>
              </div>
            </aside>

            {/* Nội dung sản phẩm */}
            <div className="flex-1 space-y-14">
              {categories.map(cat => (
                <div key={cat.id} id={cat.id}>
                  {/* Tiêu đề danh mục */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1 h-7 bg-brand-red rounded-full" />
                    <h2 className="text-xl font-bold text-brand-gray">{cat.title}</h2>
                    <span className="text-xs bg-brand-red-light text-brand-red px-2 py-0.5 rounded-full">
                      {cat.products.length} sản phẩm
                    </span>
                  </div>
                  <p className="text-brand-gray-mid text-sm mb-6 pl-5">{cat.desc}</p>

                  {/* Danh sách sản phẩm */}
                  <div className="space-y-5">
                    {cat.products.map(p => (
                      <div key={p.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-brand-red hover:shadow-md transition-all duration-200">
                        <div className="grid md:grid-cols-4 gap-0">
                          {/* Ảnh sản phẩm */}
                          <div className="md:col-span-1 bg-gray-50 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-100 min-h-[200px]">
                            <div className="relative w-full max-w-[200px] h-48">
                              <Image
                                src={p.img}
                                alt={p.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>

                          {/* Thông tin sản phẩm */}
                          <div className="md:col-span-3 p-6">
                            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                              <div>
                                <h3 className="text-lg font-bold text-brand-gray">{p.name}</h3>
                                <span className="text-xs bg-brand-red-light text-brand-red px-2 py-0.5 rounded-full mt-1 inline-block">
                                  {p.brand}
                                </span>
                              </div>
                              <Link
                                href={`/bao-gia?sp=${encodeURIComponent(p.name)}`}
                                className="btn-primary text-sm py-2 px-4 flex-shrink-0"
                              >
                                Yêu cầu báo giá
                              </Link>
                            </div>

                            <p className="text-brand-gray-mid text-sm leading-relaxed mb-4">{p.desc}</p>

                            {/* Thông số kỹ thuật */}
                            <div>
                              <p className="text-xs font-semibold text-brand-gray uppercase tracking-wide mb-2">
                                Thông số kỹ thuật
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                {p.specs.map(spec => (
                                  <div key={spec.label} className="flex items-start gap-2 text-xs bg-gray-50 rounded-lg px-3 py-2">
                                    <span className="text-brand-gray-mid min-w-[100px] flex-shrink-0">{spec.label}:</span>
                                    <span className="text-brand-gray font-medium leading-relaxed">{spec.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Banner liên hệ */}
              <div className="bg-brand-gray rounded-xl p-8 text-white text-center">
                <h3 className="text-xl font-bold mb-2">Cần báo giá hoặc catalogue chi tiết?</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Liên hệ đội ngũ kỹ thuật Bảo An để nhận báo giá và tư vấn lựa chọn thiết bị phù hợp với công trình của bạn
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="tel:+84968552345" className="btn-primary">
                    Gọi: 0968 552 345
                  </a>
                  <a href="mailto:baoan@baoanengineering.com" className="btn-outline border-white text-white hover:bg-white hover:text-brand-gray">
                    Gửi email
                  </a>
                  <Link href="/bao-gia" className="btn-outline border-white text-white hover:bg-white hover:text-brand-gray">
                    Form báo giá online
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
