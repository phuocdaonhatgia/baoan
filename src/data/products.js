// Dữ liệu sản phẩm PCCC — tổng hợp từ hồ sơ "List of Material Approval"
// và các catalogue kỹ thuật gốc (Tyco, Fivalco, Potter, Jakob, DSW, Bảo An, Jotun...)
// Ảnh: dùng ảnh mẫu tạm thời — thay bằng ảnh thật tại /public/images/sanpham/
import Image from 'next/image'
const PLACEHOLDER_IMG = '/images/sanpham/hinhanhmau.jpg'

export const categories = [
  {
    id: 'ong-va-phu-kien-thep',
    title: 'Ống thép & Phụ kiện đường ống',
    desc: 'Hệ thống đường ống thép cho công trình PCCC — ống thép đen, phụ kiện ren, phụ kiện hàn, khớp nối rãnh và mặt bích, tuân thủ tiêu chuẩn ASTM, ANSI.',
    products: [
      {
        id: 'ff001',
        code: 'FF001',
        name: 'Ống thép đen DN25 – DN150',
        img: "/images/san-pham/seahongthep.jpg",
        brand: 'Seah / Việt Nam',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF001' },
          { label: 'Tiêu chuẩn', value: 'ASTM A53, Schedule 40, Grade A' },
          { label: 'Kích cỡ', value: 'DN25, DN32, DN40, DN50, DN65, DN80, DN100, DN150' },
          { label: 'Độ dày thành ống', value: 'DN25: 3.38mm — DN150: 7.11mm' },
          { label: 'Ứng dụng', value: 'Đường ống chính và nhánh hệ thống PCCC' },
        ],
        desc: 'Ống thép đen dùng cho hệ thống đường ống chữa cháy, đáp ứng tiêu chuẩn ASTM A53 Schedule 40 Grade A. Độ dày thành ống thay đổi theo từng cỡ ống, đảm bảo khả năng chịu áp lực làm việc của hệ thống Sprinkler và Hydrant.',
        detail: 'Đây là chủng loại ống thép được sử dụng phổ biến nhất trong các công trình PCCC tại Việt Nam, phù hợp cho cả đường ống chính và đường ống nhánh cấp nước tới đầu phun Sprinkler, họng nước vách tường. Ống được sản xuất theo tiêu chuẩn ASTM A53 Schedule 40 Grade A, đảm bảo độ bền cơ học và khả năng chịu áp lực thử nghiệm theo yêu cầu của TCVN và NFPA. Sản phẩm cần được sơn phủ chống gỉ (xem thêm mục Sơn chuyên dụng) trước khi lắp đặt và bàn giao.',
      },
      {
        id: 'ff002',
        code: 'FF002',
        name: 'Ống thép đen DN250',
        img: PLACEHOLDER_IMG,
        brand: 'Cangzhou Huaye / Trung Quốc',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF002' },
          { label: 'Tiêu chuẩn', value: 'ASTM A53M, Schedule 40, Grade B' },
          { label: 'Kích cỡ', value: 'DN250' },
          { label: 'Độ dày thành ống', value: '9.27mm' },
          { label: 'Ứng dụng', value: 'Tuyến ống chính cấp nước PCCC lưu lượng lớn' },
        ],
        desc: 'Ống thép đen cỡ lớn DN250, tiêu chuẩn ASTM A53M Schedule 40 Grade B, dùng cho các tuyến ống trục chính tại công trình có lưu lượng nước chữa cháy lớn như nhà máy, kho xưởng quy mô lớn.',
        detail: 'Ống DN250 thường được sử dụng làm tuyến ống trục chính (main riser) dẫn nước từ trạm bơm chữa cháy đến các khu vực phân phối trong công trình có diện tích lớn hoặc yêu cầu lưu lượng cao. Độ dày thành ống 9.27mm đảm bảo an toàn ở áp lực làm việc và áp lực thử nghiệm theo tiêu chuẩn ASTM A53M Grade B.',
      },
      {
        id: 'ff016',
        code: 'FF016',
        name: 'Phụ kiện ren gang dẻo (Malleable Iron Fitting)',
        img: PLACEHOLDER_IMG,
        brand: 'Mech / Trung Quốc',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF016' },
          { label: 'Loại phụ kiện', value: 'Co 90°, Tê đều, Tê giảm, Măng sông giảm' },
          { label: 'Kích cỡ', value: 'DN25 đến DN50' },
          { label: 'Kiểu kết nối', value: 'Ren (Thread)' },
          { label: 'Vật liệu', value: 'Gang dẻo (Malleable Iron)' },
        ],
        desc: 'Phụ kiện ống ren bằng gang dẻo dùng cho các nhánh ống nhỏ DN25–DN50 trong hệ thống PCCC, lắp đặt nhanh, không cần hàn.',
        detail: 'Phụ kiện gang dẻo loại ren phù hợp cho các đoạn ống nhánh nhỏ, dẫn nước tới từng đầu phun Sprinkler hoặc thiết bị đầu cuối. Kết nối bằng ren giúp thi công nhanh, dễ tháo lắp khi bảo trì, phù hợp với các công trình dân dụng và thương mại quy mô vừa.',
      },
      {
        id: 'ff017',
        code: 'FF017',
        name: 'Phụ kiện hàn đối đầu (Butt Welding Fitting)',
        img: PLACEHOLDER_IMG,
        brand: 'Dy Bend Vina / Việt Nam',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF017' },
          { label: 'Loại phụ kiện', value: 'Co 90°, Tê đều, Tê giảm, Măng sông giảm' },
          { label: 'Kích cỡ', value: 'DN65 đến DN250' },
          { label: 'Kiểu kết nối', value: 'Hàn đối đầu (Butt Welding)' },
          { label: 'Vật liệu', value: 'Thép đen' },
        ],
        desc: 'Phụ kiện thép hàn đối đầu cho các tuyến ống chính cỡ lớn DN65–DN250, đảm bảo độ bền và độ kín khít mối hàn cho hệ thống áp lực cao.',
        detail: 'Sử dụng cho các tuyến ống trục chính và ống trục đứng nơi yêu cầu độ bền kết nối cao. Mối hàn đối đầu đảm bảo độ kín tuyệt đối, phù hợp lắp đặt tại các vị trí chịu áp lực và rung động trong quá trình vận hành hệ thống bơm chữa cháy.',
      },
      {
        id: 'ff018',
        code: 'FF018',
        name: 'Khớp nối rãnh (Grooved Coupling) Type 1G',
        img: PLACEHOLDER_IMG,
        brand: 'WPT / Trung Quốc',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF018' },
          { label: 'Loại', value: 'Type 1G — Rigid Coupling' },
          { label: 'Vật liệu', value: 'Gang cầu (Ductile Iron)' },
          { label: 'Kích cỡ', value: 'DN65 đến DN150' },
        ],
        desc: 'Khớp nối rãnh loại cứng (Rigid Coupling), lắp đặt nhanh không cần hàn, được sử dụng phổ biến trong thi công hệ thống Sprinkler nhờ rút ngắn thời gian lắp đặt.',
        detail: 'Khớp nối rãnh Type 1G kết nối hai đoạn ống có rãnh (grooved end) mà không cần hàn hay ren, giúp giảm đáng kể thời gian thi công so với phương pháp truyền thống. Vật liệu gang cầu đảm bảo độ bền cơ học và khả năng chịu áp lực trong hệ thống Sprinkler.',
      },
      {
        id: 'ff019',
        code: 'FF019',
        name: 'Mặt bích thép Slip On',
        img: PLACEHOLDER_IMG,
        brand: 'Phú Long / Việt Nam',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF019' },
          { label: 'Tiêu chuẩn', value: 'ANSI B16.5, Class 150' },
          { label: 'Loại', value: 'Slip On, hàn đối đầu' },
          { label: 'Vật liệu', value: 'Thép đen' },
        ],
        desc: 'Mặt bích thép đen loại Slip On theo tiêu chuẩn ANSI B16.5 Class 150, dùng để kết nối van và thiết bị vào đường ống chính của hệ thống PCCC.',
        detail: 'Mặt bích Slip On được hàn vào đầu ống, dùng làm điểm kết nối với van, thiết bị đo, hoặc các đoạn ống khác trong hệ thống. Class 150 phù hợp với áp lực làm việc thông thường của hệ thống chữa cháy dân dụng và công nghiệp.',
      },
    ],
  },
  {
    id: 'dau-phun-sprinkler',
    title: 'Đầu phun Sprinkler',
    desc: 'Đầu phun Sprinkler tự động phản hồi nhanh (Quick Response), chuẩn UL/FM, đa dạng hệ số K phù hợp với từng loại công trình và tải trọng cháy.',
    products: [
      {
        id: 'ff003',
        code: 'FF003',
        name: 'Đầu phun Sprinkler K=5.6 (Upright & Pendent)',
        img: PLACEHOLDER_IMG,
        brand: 'Tyco / Vương quốc Anh',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF003' },
          { label: 'Model', value: 'TY313 (Upright) / TY323 (Pendent)' },
          { label: 'Hệ số K', value: '5.6 (80)' },
          { label: 'Loại phản hồi', value: 'Quick Response, RTI ≤ 50' },
          { label: 'Nhiệt độ kích hoạt', value: '68°C (155°F)' },
          { label: 'Áp lực làm việc tối đa', value: '12 Bar (175 PSI)' },
          { label: 'Bề mặt', value: 'Mạ Crôm (Chrome plated)' },
        ],
        desc: 'Đầu phun Sprinkler phản hồi nhanh, hệ số K=5.6, có cả hai kiểu lắp Upright (hướng lên) và Pendent (hướng xuống), phù hợp cho hầu hết công trình dân dụng và thương mại.',
        detail: 'Đây là loại đầu phun Sprinkler thông dụng nhất, đáp ứng chuẩn UL Listed và FM Approved. Kiểu Upright lắp hướng lên trên phù hợp khu vực không trần treo (nhà kho, tầng hầm), trong khi kiểu Pendent lắp hướng xuống dưới phù hợp các khu vực có trần treo (văn phòng, trung tâm thương mại). Loại Quick Response với chỉ số RTI ≤ 50 giúp đầu phun kích hoạt nhanh hơn so với loại tiêu chuẩn, giảm thiểu thiệt hại do cháy lan.',
      },
      {
        id: 'ff004',
        code: 'FF004',
        name: 'Đầu phun Sprinkler Upright K=8.0',
        img: PLACEHOLDER_IMG,
        brand: 'Tyco / Vương quốc Anh',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF004' },
          { label: 'Model', value: 'TY4131' },
          { label: 'Hệ số K', value: '8.0 (115)' },
          { label: 'Loại phản hồi', value: 'Quick Response, RTI ≤ 50' },
          { label: 'Nhiệt độ kích hoạt', value: '68°C (155°F)' },
          { label: 'Áp lực làm việc tối đa', value: '12 Bar (175 PSI)' },
        ],
        desc: 'Đầu phun Sprinkler Upright hệ số K=8.0, lưu lượng phun lớn hơn K=5.6, phù hợp khu vực có yêu cầu mật độ phun nước cao hơn.',
        detail: 'Với hệ số K=8.0, đầu phun cho lưu lượng nước lớn hơn ở cùng một áp lực so với loại K=5.6, phù hợp bố trí tại các khu vực có nguy cơ cháy trung bình đến cao như nhà xưởng sản xuất, khu vực lưu trữ hàng hóa.',
      },
      {
        id: 'ff005',
        code: 'FF005',
        name: 'Đầu phun Sprinkler Upright K=11.2',
        img: PLACEHOLDER_IMG,
        brand: 'Tyco / Vương quốc Anh',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF005' },
          { label: 'Model', value: 'TY5137' },
          { label: 'Hệ số K', value: '11.2 (160)' },
          { label: 'Loại phản hồi', value: 'Quick Response, RTI ≤ 50' },
          { label: 'Nhiệt độ kích hoạt', value: '68°C (155°F)' },
          { label: 'Áp lực làm việc tối đa', value: '12 Bar (175 PSI)' },
        ],
        desc: 'Đầu phun Sprinkler hệ số K=11.2, dùng cho khu vực có tải trọng cháy cao, nhà kho chứa hàng hóa dễ cháy cần lưu lượng nước lớn.',
        detail: 'Hệ số K=11.2 cho lưu lượng phun lớn nhất trong nhóm sản phẩm, thường được thiết kế cho hệ thống chữa cháy kho hàng cao tầng (High-piled storage), khu vực lưu trữ hàng hóa dễ cháy theo yêu cầu tính toán thủy lực của NFPA 13.',
      },
    ],
  },
  {
    id: 'van-thiet-bi-kiem-soat',
    title: 'Van & Thiết bị kiểm soát hệ thống',
    desc: 'Các loại van điều khiển, van báo động, công tắc giám sát và công tắc dòng chảy — thành phần cốt lõi đảm bảo hệ thống PCCC vận hành chính xác và an toàn.',
    products: [
      {
        id: 'ff007',
        code: 'FF007',
        name: 'Van báo động (Alarm Check Valve)',
        img: PLACEHOLDER_IMG,
        brand: 'Tyco / Trung Quốc',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF007' },
          { label: 'Tiêu chuẩn', value: 'UL Listed, FM Approved' },
          { label: 'Model', value: 'AV-1-300, kiểu đứng (Vertical)' },
          { label: 'Kích cỡ', value: 'DN100, DN150' },
          { label: 'Kết nối', value: 'Mặt bích x Mặt bích' },
          { label: 'Áp lực làm việc', value: '1.4 – 20.7 Bar' },
        ],
        desc: 'Van báo động kiểu đứng, kiểm soát dòng nước và kích hoạt tín hiệu báo động khi hệ thống Sprinkler hoạt động.',
        detail: 'Van báo động là thiết bị trung tâm của hệ thống Sprinkler ướt (Wet Pipe). Khi một hoặc nhiều đầu phun kích hoạt, áp lực nước làm mở van, đồng thời một phần dòng nước được dẫn qua công tắc báo động (Water Motor Alarm) để phát tín hiệu về trung tâm báo cháy.',
      },
      {
        id: 'ff008',
        code: 'FF008',
        name: 'Van giảm áp (Pressure Reducing Valve)',
        img: PLACEHOLDER_IMG,
        brand: 'Tyco / Vương quốc Anh',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF008' },
          { label: 'Tiêu chuẩn', value: 'UL Listed, FM Approved' },
          { label: 'Model', value: 'PRV-1' },
          { label: 'Kích cỡ', value: 'DN100' },
          { label: 'Kiểu thân van', value: 'Globe' },
          { label: 'Mặt bích', value: 'ANSI B16.1, Class 125' },
        ],
        desc: 'Van giảm áp kiểu Globe, duy trì áp lực nước ổn định trong hệ thống ống đứng của các tòa nhà cao tầng, tránh áp lực dư thừa gây hư hại thiết bị.',
        detail: 'Trong các công trình cao tầng, áp lực nước tại các tầng thấp thường vượt quá giới hạn cho phép của thiết bị đầu cuối (họng nước, cuộn vòi). Van giảm áp PRV-1 giúp điều tiết áp lực về mức an toàn, đảm bảo hệ thống hoạt động ổn định trên toàn bộ chiều cao công trình.',
      },
      {
        id: 'ff009',
        code: 'FF009',
        name: 'Van cổng OS&Y (Gate Valve)',
        img: PLACEHOLDER_IMG,
        brand: 'Fivalco / Trung Quốc',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF009' },
          { label: 'Vật liệu', value: 'Gang cầu (Ductile Iron)' },
          { label: 'Kích cỡ', value: 'DN100, DN150' },
          { label: 'Áp lực làm việc', value: '21 Bar (300 PSI)' },
          { label: 'Tiêu chuẩn', value: 'UL Listed, FM Approved' },
          { label: 'Mặt bích', value: 'ANSI B16.1, Class 125' },
        ],
        desc: 'Van cổng OS&Y (Outside Screw & Yoke) cho phép kiểm soát trực quan trạng thái đóng/mở, dùng để cô lập từng khu vực trong hệ thống Sprinkler khi bảo trì.',
        detail: 'Cấu tạo OS&Y có trục vít lộ ra ngoài thân van, cho phép nhân viên vận hành quan sát trực tiếp trạng thái mở hay đóng của van từ xa — một yêu cầu bắt buộc theo NFPA đối với van kiểm soát chính của hệ thống Sprinkler.',
      },
      {
        id: 'ff010',
        code: 'FF010',
        name: 'Công tắc dòng chảy (Flow Switch)',
        img: PLACEHOLDER_IMG,
        brand: 'Potter / Hoa Kỳ',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF010' },
          { label: 'Model', value: 'VSR-4 (DN100), VSR-6 (DN150)' },
          { label: 'Tiêu chuẩn', value: 'UL Listed, FM Approved' },
        ],
        desc: 'Công tắc dòng chảy phát hiện lưu lượng nước trong đường ống và gửi tín hiệu báo động về trung tâm khi hệ thống Sprinkler kích hoạt.',
        detail: 'Flow Switch được lắp trực tiếp trên đường ống chính, cánh cảm biến (paddle) bên trong sẽ tác động khi có dòng nước chảy qua, kích hoạt tiếp điểm điện gửi tín hiệu về tủ trung tâm báo cháy, giúp phát hiện sớm khu vực xảy ra sự cố.',
      },
      {
        id: 'ff011',
        code: 'FF011',
        name: 'Công tắc giám sát van cổng (Supervisory Switch)',
        img: PLACEHOLDER_IMG,
        brand: 'Potter / Hoa Kỳ',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF011' },
          { label: 'Model', value: 'OSYSU-1' },
          { label: 'Tiêu chuẩn', value: 'UL & FM Approved' },
        ],
        desc: 'Công tắc giám sát gắn trên van cổng OS&Y, cảnh báo ngay khi van bị đóng ngoài ý muốn, đảm bảo hệ thống luôn ở trạng thái sẵn sàng hoạt động.',
        detail: 'Lắp kèm với van cổng OS&Y, công tắc giám sát sẽ gửi tín hiệu cảnh báo tới trung tâm nếu van bị vặn đóng quá 2 vòng so với vị trí mở hoàn toàn — ngăn ngừa tình huống hệ thống Sprinkler mất khả năng hoạt động do van bị đóng nhầm.',
      },
      {
        id: 'ff014',
        code: 'FF014',
        name: 'Van góc (Angle Gate Valve)',
        img: PLACEHOLDER_IMG,
        brand: 'Shin Yi / Việt Nam',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF014' },
          { label: 'Model', value: 'FHIA-0050-16' },
        ],
        desc: 'Van góc dùng lắp đặt tại các họng chờ chữa cháy vách tường (Hosereel), điều khiển đóng/mở dòng nước cấp cho vòi chữa cháy.',
        detail: 'Van góc lắp tại vị trí cuối nhánh ống, kết nối trực tiếp với vòi chữa cháy trong tủ Hosereel, cho phép nhân viên bảo vệ hoặc lực lượng PCCC nhanh chóng mở van để sử dụng khi có sự cố.',
      },
      {
        id: 'ff015',
        code: 'FF015',
        name: 'Van xả khí tự động (Automatic Air Valve)',
        img: PLACEHOLDER_IMG,
        brand: 'Shin Yi / Việt Nam',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF015' },
          { label: 'Model', value: 'ARVT-0025-BP' },
          { label: 'Kích cỡ', value: 'DN25' },
          { label: 'Áp lực danh định', value: 'PN16' },
        ],
        desc: 'Van xả khí tự động lắp tại các điểm cao của hệ thống đường ống, giúp loại bỏ khí tích tụ, tránh hiện tượng thủy kích và ăn mòn đường ống.',
        detail: 'Khí tích tụ tại các điểm cao trong hệ thống đường ống có thể gây ra hiện tượng thủy kích (water hammer) và tăng tốc độ ăn mòn ống. Van xả khí tự động ARVT-0025-BP giải quyết vấn đề này bằng cách tự động xả khí ra ngoài mà không cần can thiệp thủ công.',
      },
      {
        id: 'ff021',
        code: 'FF021',
        name: 'Van bướm (Butterfly Valve)',
        img: PLACEHOLDER_IMG,
        brand: 'Fivalco / Trung Quốc',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF021' },
          { label: 'Loại', value: 'Wafer type (kiểu kẹp)' },
          { label: 'Kích cỡ', value: 'DN100' },
          { label: 'Áp lực làm việc', value: '21 Bar (300 PSI)' },
          { label: 'Tiêu chuẩn', value: 'UL Listed, FM Approved' },
        ],
        desc: 'Van bướm kiểu kẹp (Wafer), gọn nhẹ, thao tác đóng mở nhanh, dùng để cô lập từng đoạn ống trong hệ thống PCCC.',
        detail: 'So với van cổng, van bướm có kích thước gọn hơn, trọng lượng nhẹ hơn và thời gian đóng/mở nhanh hơn, phù hợp lắp đặt tại các vị trí không gian hạn chế trong phòng bơm hoặc trục kỹ thuật.',
      },
    ],
  },
  {
    id: 'hosereel-nozzle',
    title: 'Hosereel, Lăng phun & Tủ chữa cháy',
    desc: 'Thiết bị chữa cháy vách tường bán tự động — cuộn vòi, lăng phun và tủ đựng thiết bị, cho phép dập tắt đám cháy nhanh chóng ngay tại chỗ.',
    products: [
      {
        id: 'ff012',
        code: 'FF012',
        name: 'Cuộn vòi chữa cháy (Fire Hose Reel)',
        img: PLACEHOLDER_IMG,
        brand: 'Jakob / Đức',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF012' },
          { label: 'Kích cỡ', value: 'DN50 x 30m' },
          { label: 'Tiêu chuẩn lắp đặt', value: 'TCVN & NFPA' },
        ],
        desc: 'Cuộn vòi chữa cháy DN50 dài 30m, lắp đặt theo tiêu chuẩn TCVN và NFPA, dùng trong hệ thống chữa cháy vách tường (Hosereel).',
        detail: 'Cuộn vòi Jakob xuất xứ Đức, cho phép nhân viên bảo vệ hoặc người sử dụng tòa nhà thao tác đơn giản để kéo vòi và dập tắt đám cháy giai đoạn đầu trước khi lực lượng PCCC chuyên nghiệp có mặt.',
      },
      {
        id: 'ff013',
        code: 'FF013',
        name: 'Lăng phun chữa cháy (Fire Nozzle)',
        img: PLACEHOLDER_IMG,
        brand: 'DSW / Trung Quốc',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF013' },
          { label: 'Model', value: 'ZYB06' },
          { label: 'Kích cỡ', value: 'DN50, tích hợp đồng hồ đo áp' },
          { label: 'Tiêu chuẩn lắp đặt', value: 'TCVN & NFPA' },
        ],
        desc: 'Lăng phun DN50 tích hợp đồng hồ đo áp lực (Clock), dùng kết hợp với cuộn vòi chữa cháy trong hệ thống Hosereel.',
        detail: 'Đồng hồ đo áp tích hợp trên lăng phun ZYB06 giúp người sử dụng theo dõi trực tiếp áp lực nước khi thao tác chữa cháy, đảm bảo hiệu quả phun và an toàn khi vận hành.',
      },
      {
        id: 'ff020',
        code: 'FF020',
        name: 'Tủ đựng cuộn vòi chữa cháy (Fire Hose Reel Cabinet)',
        img: PLACEHOLDER_IMG,
        brand: 'Bảo An Engineering / Việt Nam',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF020' },
          { label: 'Kích thước', value: '900(H) x 800(W) x 250(D) mm' },
          { label: 'Vật liệu', value: 'Thép tấm dày 1.2mm' },
          { label: 'Phụ kiện kèm theo', value: 'Giá đỡ (support) lắp đặt tủ' },
        ],
        desc: 'Tủ chữa cháy sản xuất tại xưởng Bảo An Engineering, chứa cuộn vòi, lăng phun và các thiết bị chữa cháy vách tường.',
        detail: 'Tủ được gia công từ thép tấm dày 1.2mm, sơn tĩnh điện màu đỏ, thiết kế chắc chắn để chứa trọn bộ thiết bị Hosereel (cuộn vòi, lăng phun, van góc). Sản xuất trực tiếp tại xưởng chế tạo Bảo An Engineering, Đồng Nai.',
      },
    ],
  },
  {
    id: 'binh-chua-chay',
    title: 'Bình chữa cháy',
    desc: 'Bình chữa cháy xách tay dùng cho đám cháy loại A, B, C — đầy đủ chứng nhận theo tiêu chuẩn Malaysia và tương thích quy chuẩn PCCC Việt Nam.',
    products: [
      {
        id: 'ff006-co2',
        code: 'FF006',
        name: 'Bình chữa cháy CO2 5kg',
        img: PLACEHOLDER_IMG,
        brand: 'Eversafe / Malaysia',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF006' },
          { label: 'Model', value: 'EEC 5e1' },
          { label: 'Dung tích', value: '5kg' },
          { label: 'Loại đám cháy', value: 'B (xăng dầu), C (thiết bị điện)' },
        ],
        desc: 'Bình CO2 dung tích 5kg, không để lại cặn, không dẫn điện — phù hợp chữa cháy thiết bị điện tử, phòng máy chủ, tủ điện.',
        detail: 'Bình CO2 EEC 5e1 phù hợp lắp đặt tại các khu vực có thiết bị điện, điện tử nhạy cảm như phòng máy chủ, phòng điều khiển, tủ điện — nơi không thể dùng bột hoặc nước để chữa cháy vì có thể gây hư hỏng thiết bị.',
      },
      {
        id: 'ff006-abc',
        code: 'FF006',
        name: 'Bình chữa cháy bột ABC 4kg',
        img: PLACEHOLDER_IMG,
        brand: 'Eversafe / Malaysia',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF006' },
          { label: 'Model', value: 'EED 4' },
          { label: 'Dung tích', value: '4kg' },
          { label: 'Loại đám cháy', value: 'A (chất rắn), B (xăng dầu), C (điện)' },
        ],
        desc: 'Bình bột ABC đa năng 4kg, chữa được cả 3 loại đám cháy A, B, C — loại bình phổ biến nhất, bắt buộc trang bị tại hầu hết công trình.',
        detail: 'Bình bột ABC EED 4 là loại bình chữa cháy đa năng, phù hợp trang bị đại trà tại hành lang, cầu thang, khu vực sản xuất và văn phòng theo yêu cầu bắt buộc của quy chuẩn PCCC.',
      },
    ],
  },
  {
    id: 'son-chuyen-dung',
    title: 'Sơn chuyên dụng cho ống PCCC',
    desc: 'Hệ sơn lót và sơn phủ chuyên dụng, tăng độ bền và khả năng chống ăn mòn cho đường ống thép hệ thống PCCC.',
    products: [
      {
        id: 'ff022',
        code: 'FF022',
        name: 'Hệ sơn lót & sơn phủ ống PCCC',
        img: PLACEHOLDER_IMG,
        brand: 'Jotun / Việt Nam',
        specs: [
          { label: 'Mã sản phẩm', value: 'FF022' },
          { label: 'Sơn lót', value: 'Pilot QD Primer — màu Xám (Grey)' },
          { label: 'Sơn phủ', value: 'Jota QD Topcoat — màu RAL 3000 (Đỏ)' },
        ],
        desc: 'Hệ sơn 2 lớp chuyên dụng cho đường ống PCCC: lớp sơn lót chống gỉ và lớp sơn phủ màu đỏ đặc trưng RAL 3000, tăng độ bền và dễ nhận diện đường ống.',
        detail: 'Trước khi sơn phủ, bề mặt ống thép cần được xử lý và phủ lớp sơn lót Pilot QD Primer màu xám để chống gỉ. Sau đó, lớp sơn phủ Jota QD Topcoat màu đỏ RAL 3000 vừa bảo vệ bề mặt vừa giúp nhận diện đường ống PCCC theo quy định.',
      },
    ],
  },
]

// Hàm tiện ích: tìm sản phẩm theo id (dùng cho trang chi tiết)
export function findProductById(id) {
  for (const cat of categories) {
    const product = cat.products.find(p => p.id === id)
    if (product) return { product, category: cat }
  }
  return null
}

// Hàm tiện ích: lấy toàn bộ sản phẩm dạng phẳng (dùng cho generateStaticParams)
export function getAllProductIds() {
  return categories.flatMap(cat => cat.products.map(p => p.id))
}

// Hàm tiện ích: trích các chip ngắn (tiêu chuẩn/chứng nhận) từ specs để hiển thị dưới khung ảnh
export function getSpecChips(product, max = 3) {
  const standardSpec = product.specs.find(s =>
    s.label.toLowerCase().includes('tiêu chuẩn')
  )
  if (!standardSpec) return []
  return standardSpec.value
    .split(/[,/]/)
    .map(s => s.trim())
    .filter(Boolean)
    .slice(0, max)
}
