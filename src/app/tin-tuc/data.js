// Dữ liệu bài viết cho mục Tin tức & Kiến thức PCCC
//
// type: dùng để lọc theo 3 tab đầu trang — 'tin-tuc' | 'video' | 'hinh-anh'
// slug: dùng để tạo link chi tiết /tin-tuc/[slug]
//
// img: ẢNH ĐẠI DIỆN (cover) — dùng ở trang danh sách /tin-tuc, sidebar "Bài viết liên quan",
//      trang chủ... KHÔNG dùng trong trang chi tiết. Bài nào cũng NÊN có field này.
//
// heroImage: ảnh minh họa hiển thị trong trang CHI TIẾT (sau phần nội dung), CHỈ dùng cho
//      những bài có content là mảng văn bản thường. Nếu content là 1 component JSX riêng
//      (ví dụ TuNghiemThuPCCC, PinAcQuy) mà component đó đã tự chèn ảnh bên trong rồi thì
//      KHÔNG set heroImage nữa để tránh lặp ảnh 2 lần.
//
// imageSource: nguồn của heroImage, hiển thị nhỏ bên dưới ảnh ở trang chi tiết
// sourceUrl / source: nếu bài được tổng hợp lại từ 1 báo khác, để link "xem bài gốc" ở cuối trang
// sources: nếu bài tổng hợp từ NHIỀU báo, dùng mảng { name, url }
import TuNghiemThuPCCC from "src/app/articles/TuNghiemThuPCCC.jsx";
import PinAcQuy from "src/app/articles/PinAcQuy";
export const posts = [
  {
    id: 1,
    slug: 'ha-noi-dien-tap-chua-chay-lotte-mall-west-lake',
    type: 'tin-tuc',
    cat: 'Tin tức PCCC',
    catColor: 'bg-red-50 text-red-700',
    title: 'Hà Nội diễn tập chữa cháy, cứu hộ 1.000 người tại Lotte Mall West Lake',
    excerpt:
      'Sáng 11-7, Công an thành phố Hà Nội tổ chức thành công buổi diễn tập PCCC và cứu nạn, cứu hộ cấp Thành phố tại Lotte Mall West Lake Hanoi (Tây Hồ), do Thiếu tướng Nguyễn Hồng Ky trực tiếp chỉ đạo. Đây là cuộc diễn tập quy mô lớn nhằm kiểm tra năng lực ứng phó của lực lượng PCCC tại các trung tâm thương mại lớn với hơn 1.000 người tham gia.',
    content: [
      'Nội dung chi tiết của bài viết sẽ được cập nhật tại đây. Đây là đoạn văn bản mẫu — vui lòng thay thế bằng nội dung thật khi biên tập bài.',
      'Đoạn thứ hai: mô tả diễn biến buổi diễn tập, các lực lượng tham gia, kịch bản xử lý tình huống cháy nổ giả định.',
      'Đoạn kết: đánh giá kết quả diễn tập và bài học rút ra cho công tác PCCC tại các trung tâm thương mại.',
    ],
    date: '12/07/2026',
    readTime: '3 phút',
    source: 'An ninh Thủ đô',
    sourceUrl:
      'https://anninhthudo.vn/ha-noi-dien-tap-chua-chay-cuu-ho-1000-nguoi-tai-lotte-mall-west-lake-hanoi-post659326.antd',
    img: '/images/tin-tuc/chua-chay-1.jpg',
    heroImage: '/images/tin-tuc/chua-chay-1.jpg',
    imageSource: 'An ninh Thủ đô',
    gallery: ['/images/tin-tuc/chua-chay-1.jpg'],
    featured: true,
  },
  {
    id: 2,
    slug: 'tu-1-7-chu-dau-tu-tu-nghiem-thu-pccc',
    type: 'tin-tuc',
    cat: 'Pháp lý PCCC',
    catColor: 'bg-purple-50 text-purple-700',
    title: 'Từ ngày 01/7/2026 bãi bỏ thủ tục nghiệm thu về PCCC',
    excerpt:
      'Từ ngày 1/7/2026, theo Nghị quyết 66.18/2026/NQ-CP, chủ đầu tư được tự tổ chức nghiệm thu hệ thống PCCC và tự chịu trách nhiệm trước pháp luật, thay vì chờ cơ quan công an kiểm tra như trước. Việc bỏ thủ tục không đồng nghĩa bỏ quy trình nghiệm thu — chủ đầu tư vẫn phải lập biên bản đầy đủ.',
    // content là component riêng, ảnh minh họa nằm SẴN bên trong component này
    // → KHÔNG set heroImage ở đây nữa để tránh hiển thị ảnh 2 lần.
    content: <TuNghiemThuPCCC />,
    date: '28/06/2026',
    readTime: '3 phút',
    sources: [
      {
        name: "An Ninh Hải Phòng",
        url: "https://anhp.vn/bai-bo-mot-so-thu-tuc-kiem-tra-nghiem-thu-ve-phong-chay-va-chua-chay-tu-ngay-172026-d78503.html"
      },
      {
        name: "Tuổi Trẻ",
        url: "https://tuoitre.vn/plo/tu-1-7-chinh-thuc-bo-thu-tuc-nghiem-thu-pccc-voi-cong-trinh-phuong-tien-da-tham-dinh-thiet-ke-post912786.html"
      },
      {
        name: "Thư Viện Pháp Luật",
        url: "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/chinh-thuc-bo-thu-tuc-nghiem-thu-pccc-voi-cong-trinh-phuong-tien-tu-0172026-theo-nghi-quyet-6618202-276131.html"
      }
    ],
    // img: BẮT BUỘC giữ lại — đây là ảnh cover hiển thị ở trang danh sách & sidebar.
    img: '/images/tin-tuc/tintuc.webp',
  },
  {
    id: 3,
    slug: 'vu-chay-xe-can-lam-gi-bao-dam-an-',
    type: 'tin-tuc',
    cat: 'Kiến Thức PCCC',
    catColor: 'bg-purple-50 text-purple-700',
    title: 'Từ vụ cháy xe chở pin tại Đà Nẵng: Cần làm gì để đảm bảo an toàn?',
    excerpt:
      'Nghị quyết 66.18/2026/NQ-CP bãi bỏ 3 thủ tục hành chính PCCC: kiểm tra công tác nghiệm thu; nghiệm thu đối với công trình đã được cấp giấy chứng nhận thẩm duyệt; và phục hồi hoạt động cơ sở. Chủ đầu tư được trao thêm quyền nhưng tăng trách nhiệm pháp lý — vi phạm có thể bị truy cứu hình sự.',
    highlights: (
      <ul className="list-disc space-y-3 pl-6">
        <li>
          <strong>Từ 01/07/2026</strong> chính thức bãi bỏ 03 thủ tục nghiệm thu
          PCCC.
        </li>
        <li>
          Chuyển từ <strong>tiền kiểm sang hậu kiểm</strong>.
        </li>
        <li>
          Chủ đầu tư <strong>tự chịu trách nhiệm trước pháp luật</strong>.
        </li>
      </ul>
    ),
    content: [<PinAcQuy key="pin-ac-quy" />],
    date: '30/05/2026',
    readTime: '4 phút',
    sources: [
      {
        name: "VnExpress",
        url: "https://vnexpress.net/luat-quy-dinh-van-chuyen-pin-ac-quy-the-nao-de-chong-chay-no-xe-5078957.html"
      },
      {
        name: "Báo Hải Phòng",
        url: "https://baohaiphong.vn/xe-cho-pin-va-ac-quy-can-tuan-thu-quy-dinh-gi-de-tranh-chay-no-543259.html"
      },
    ],
    video: "/video/pin-acquy.mp4",
    videoSource: "Camera An Ninh",
    // img: ảnh cover cho danh sách/sidebar. Bài này minh họa chính bằng video
    // nên KHÔNG set heroImage (tránh vừa có video vừa có ảnh lặp trong bài).
    img: '/images/tin-tuc/techz.jpg',
  },
  {
    id: 4,
    slug: 'bang-tra-cuu-10000-nha-cho-thue-pccc-ha-noi',
    type: 'tin-tuc',
    cat: 'Pháp lý PCCC',
    catColor: 'bg-purple-50 text-purple-700',
    title: 'Bảng tra cứu 10.000 nhà cho thuê, doanh nghiệp thuộc diện kiểm tra PCCC của Công an Hà Nội',
    excerpt:
      'Công an Hà Nội công bố danh sách hàng chục nghìn cơ sở nhà cho thuê và doanh nghiệp thuộc diện phải kiểm tra định kỳ về PCCC. Tra cứu để biết cơ sở của bạn có nằm trong danh sách không và cần chuẩn bị gì trước khi đoàn kiểm tra đến.',
    content: [
      'Nội dung chi tiết của bài viết sẽ được cập nhật tại đây. Đây là đoạn văn bản mẫu — vui lòng thay thế bằng nội dung thật khi biên tập bài.',
      'Đoạn thứ hai: hướng dẫn cách tra cứu và các mốc thời gian kiểm tra dự kiến.',
      'Đoạn kết: gợi ý checklist chuẩn bị trước khi đoàn kiểm tra PCCC đến làm việc.',
    ],
    date: '10/06/2026',
    readTime: '3 phút',
    source: 'VnExpress',
    sourceUrl:
      'https://vnexpress.net/bang-tra-cuu-10-000-nha-cho-thue-doanh-nghiep-thuoc-dien-kiem-tra-cua-cong-an-ha-noi-5072632.html',
    img: '/images/tin-tuc/bigc-ninh-binh.jpg',
    heroImage: '/images/tin-tuc/bigc-ninh-binh.jpg',
    imageSource: 'VnExpress',
    gallery: ['/images/tin-tuc/bigc-ninh-binh.jpg'],
  },
  {
    id: 5,
    slug: '31-chien-si-bi-bong-khu-che-xuat-tan-thuan',
    type: 'tin-tuc',
    cat: 'Sự cố PCCC',
    catColor: 'bg-orange-50 text-orange-700',
    title: '31 chiến sĩ bị bỏng, bị axit văng vào mắt khi chữa cháy tại Khu chế xuất Tân Thuận',
    excerpt:
      'Vụ cháy tại Công ty CX Technology Việt Nam trong KCX Tân Thuận (quận 7, TP.HCM) ngày 30-4-2020 khiến 31 cán bộ chiến sĩ bị bỏng, trong đó 5 người bị nặng. Bình ắcquy chứa axit bị vỡ, hóa chất hòa vào nước chữa cháy gây bỏng rát — bài học về nhận diện nguy hiểm hóa chất trong công trình.',
    content: [
      'Nội dung chi tiết của bài viết sẽ được cập nhật tại đây. Đây là đoạn văn bản mẫu — vui lòng thay thế bằng nội dung thật khi biên tập bài.',
      'Đoạn thứ hai: diễn biến vụ cháy, nguyên nhân và mức độ thiệt hại.',
      'Đoạn kết: bài học về an toàn hóa chất và quy trình ứng phó sự cố tại khu công nghiệp.',
    ],
    date: '01/05/2020',
    readTime: '4 phút',
    source: 'Tuổi Trẻ',
    sourceUrl:
      'https://tuoitre.vn/31-chien-si-bi-bong-bi-axit-vang-vao-mat-khi-chua-chay-cong-ty-tai-khu-che-xuat-tan-thuan-20200501153408872.htm',
    img: '/images/tin-tuc/ngon-lua.jpg',
    heroImage: '/images/tin-tuc/ngon-lua.jpg',
    imageSource: 'Tuổi Trẻ',
    gallery: ['/images/tin-tuc/ngon-lua.jpg'],
  },
  {
    id: 6,
    slug: 'he-thong-chua-chay-sprinkler-tu-dong',
    type: 'tin-tuc',
    cat: 'Kiến thức PCCC',
    catColor: 'bg-blue-50 text-blue-700',
    title: 'Hệ thống chữa cháy Sprinkler tự động — Nguyên lý hoạt động và phân loại',
    excerpt:
      'Hệ thống Sprinkler là giải pháp chữa cháy tự động phổ biến nhất thế giới. Nguyên lý kích hoạt bằng nhiệt, các loại đầu phun và tiêu chuẩn NFPA 13, TCVN 7336 áp dụng tại Việt Nam.',
    content: [
      'Nội dung chi tiết của bài viết sẽ được cập nhật tại đây. Đây là đoạn văn bản mẫu — vui lòng thay thế bằng nội dung thật khi biên tập bài.',
      'Đoạn thứ hai: giải thích nguyên lý kích hoạt bằng nhiệt và cấu tạo đầu phun Sprinkler.',
      'Đoạn kết: so sánh tiêu chuẩn NFPA 13 và TCVN 7336, khuyến nghị lựa chọn cho công trình.',
    ],
    date: '15/03/2024',
    readTime: '5 phút',
    source: 'Bảo An Engineering',
    sourceUrl: null,
    relatedLink: '/san-pham#sprinkler',
    img: '/images/tieuchuan2/tc-hoat-dong-cong-truong.jpg',
    heroImage: '/images/tieuchuan2/tc-hoat-dong-cong-truong.jpg',
    imageSource: 'Bảo An Engineering',
    gallery: ['/images/tieuchuan2/tc-hoat-dong-cong-truong.jpg'],
  },
  {
    id: 7,
    slug: 'cach-chon-binh-chua-chay-phu-hop',
    type: 'tin-tuc',
    cat: 'Hướng dẫn',
    catColor: 'bg-green-50 text-green-700',
    title: 'Cách chọn bình chữa cháy phù hợp cho từng loại đám cháy A, B, C',
    excerpt:
      'CO2, bột ABC hay bọt Foam — mỗi loại bình chữa cháy phù hợp với loại đám cháy khác nhau. Hướng dẫn chi tiết giúp lựa chọn đúng và sử dụng hiệu quả theo tiêu chuẩn TCVN 3890:2009.',
    content: [
      'Nội dung chi tiết của bài viết sẽ được cập nhật tại đây. Đây là đoạn văn bản mẫu — vui lòng thay thế bằng nội dung thật khi biên tập bài.',
      'Đoạn thứ hai: phân loại đám cháy A, B, C và loại bình chữa cháy tương ứng.',
      'Đoạn kết: hướng dẫn sử dụng đúng cách và lưu ý an toàn theo TCVN 3890:2009.',
    ],
    date: '18/02/2024',
    readTime: '4 phút',
    source: 'Bảo An Engineering',
    sourceUrl: null,
    relatedLink: '/san-pham#binh-chua-chay',
    img: '/images/sanpham/lang-phun-nuoc.png',
    heroImage: '/images/sanpham/lang-phun-nuoc.png',
    imageSource: 'Bảo An Engineering',
    gallery: ['/images/sanpham/lang-phun-nuoc.png'],
  },
  {
    id: 8,
    slug: 'lich-bao-tri-he-thong-pccc',
    type: 'tin-tuc',
    cat: 'Bảo trì',
    catColor: 'bg-yellow-50 text-yellow-700',
    title: 'Lịch bảo trì hệ thống PCCC — Những việc cần làm hàng tháng, hàng quý',
    excerpt:
      'Bảo trì định kỳ hệ thống PCCC không chỉ là yêu cầu pháp lý mà còn đảm bảo an toàn cho công trình. Hướng dẫn lịch bảo trì chuẩn cho nhà máy và văn phòng theo TCVN 3890:2009.',
    content: [
      'Nội dung chi tiết của bài viết sẽ được cập nhật tại đây. Đây là đoạn văn bản mẫu — vui lòng thay thế bằng nội dung thật khi biên tập bài.',
      'Đoạn thứ hai: lịch bảo trì chi tiết theo tháng/quý/năm cho từng hạng mục hệ thống PCCC.',
      'Đoạn kết: lợi ích của bảo trì định kỳ và khuyến nghị lựa chọn đơn vị bảo trì uy tín.',
    ],
    date: '05/02/2024',
    readTime: '6 phút',
    source: 'Bảo An Engineering',
    sourceUrl: null,
    relatedLink: '/dich-vu',
    img: '/images/dichvu/bien-phap-thi-cong.jpg',
    heroImage: '/images/dichvu/bien-phap-thi-cong.jpg',
    imageSource: 'Bảo An Engineering',
    gallery: ['/images/dichvu/bien-phap-thi-cong.jpg'],
  },
]

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug)
}