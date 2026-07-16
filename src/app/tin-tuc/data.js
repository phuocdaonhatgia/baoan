// Dữ liệu bài viết cho mục Tin tức & Kiến thức PCCC
//
// type: dùng để lọc theo 3 tab đầu trang — 'tin-tuc' | 'video' | 'hinh-anh'
// slug: dùng để tạo link chi tiết /tin-tuc/[slug]
// content: mảng các đoạn văn cho trang chi tiết — ĐÂY LÀ VĂN BẢN MẪU, tự thay bằng nội dung thật
// gallery: mảng ảnh cho trang chi tiết — ĐÂY LÀ ẢNH MẪU, tự thay bằng ảnh thật
// sourceUrl: nếu bài được tổng hợp lại từ báo khác, để link "xem bài gốc" ở cuối trang chi tiết

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
    gallery: ['/images/tin-tuc/chua-chay-1.jpg'],
    featured: true,
  },
  {
    id: 2,
    slug: 'tu-1-7-chu-dau-tu-tu-nghiem-thu-pccc',
    type: 'tin-tuc',
    cat: 'Pháp lý PCCC',
    catColor: 'bg-purple-50 text-purple-700',
    title: 'Từ 1/7, chủ đầu tư tự nghiệm thu PCCC — Được hiểu là thế nào?',
    excerpt:
      'Từ ngày 1/7/2026, theo Nghị quyết 66.18/2026/NQ-CP, chủ đầu tư được tự tổ chức nghiệm thu hệ thống PCCC và tự chịu trách nhiệm trước pháp luật, thay vì chờ cơ quan công an kiểm tra như trước. Việc bỏ thủ tục không đồng nghĩa bỏ quy trình nghiệm thu — chủ đầu tư vẫn phải lập biên bản đầy đủ.',
    content: [
      'Nội dung chi tiết của bài viết sẽ được cập nhật tại đây. Đây là đoạn văn bản mẫu — vui lòng thay thế bằng nội dung thật khi biên tập bài.',
      'Đoạn thứ hai: phân tích quy định mới, phạm vi áp dụng và trách nhiệm pháp lý của chủ đầu tư.',
      'Đoạn kết: khuyến nghị cho doanh nghiệp/chủ đầu tư để tuân thủ đúng quy định.',
    ],
    date: '28/06/2026',
    readTime: '5 phút',
    source: 'VnExpress',
    sourceUrl:
      'https://vnexpress.net/tu-1-7-chu-dau-tu-tu-nghiem-thu-phong-chay-chua-chay-duoc-hieu-la-the-nao-5091502.html',
    img: '/images/tin-tuc/bigc-cong-trinh.jpg',
    gallery: ['/images/tin-tuc/bigc-cong-trinh.jpg'],
  },
  {
    id: 3,
    slug: 'bo-3-thu-tuc-nghiem-thu-pccc-tu-1-7-2026',
    type: 'tin-tuc',
    cat: 'Pháp lý PCCC',
    catColor: 'bg-purple-50 text-purple-700',
    title: 'Chính thức bỏ 3 thủ tục nghiệm thu PCCC với công trình từ 1/7/2026',
    excerpt:
      'Nghị quyết 66.18/2026/NQ-CP bãi bỏ 3 thủ tục hành chính PCCC: kiểm tra công tác nghiệm thu; nghiệm thu đối với công trình đã được cấp giấy chứng nhận thẩm duyệt; và phục hồi hoạt động cơ sở. Chủ đầu tư được trao thêm quyền nhưng tăng trách nhiệm pháp lý — vi phạm có thể bị truy cứu hình sự.',
    content: [
      'Nội dung chi tiết của bài viết sẽ được cập nhật tại đây. Đây là đoạn văn bản mẫu — vui lòng thay thế bằng nội dung thật khi biên tập bài.',
      'Đoạn thứ hai: liệt kê chi tiết 3 thủ tục bị bãi bỏ và ảnh hưởng đến doanh nghiệp, chủ đầu tư.',
      'Đoạn kết: lưu ý về trách nhiệm pháp lý tăng thêm và các bước cần chuẩn bị.',
    ],
    date: '22/06/2026',
    readTime: '4 phút',
    source: 'VnExpress',
    sourceUrl:
      'https://vnexpress.net/bo-thu-tuc-nghiem-thu-pccc-voi-cong-trinh-phuong-tien-5088141.html',
    img: '/images/tin-tuc/kcn-tan-tao.jpg',
    gallery: ['/images/tin-tuc/kcn-tan-tao.jpg'],
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
    gallery: ['/images/dichvu/bien-phap-thi-cong.jpg'],
  },
]

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug)
}