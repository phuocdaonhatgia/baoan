import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Tin tức & Kiến thức PCCC',
  description: 'Tin tức mới nhất về PCCC, quy định pháp luật, kiến thức phòng cháy chữa cháy — Bảo An Engineering.',
}

const posts = [
  {
    id: 1,
    cat: 'Tin tức PCCC',
    catColor: 'bg-red-50 text-red-700',
    title: 'Hà Nội diễn tập chữa cháy, cứu hộ 1.000 người tại Lotte Mall West Lake',
    excerpt: 'Sáng 11-7, Công an thành phố Hà Nội tổ chức thành công buổi diễn tập PCCC và cứu nạn, cứu hộ cấp Thành phố tại Lotte Mall West Lake Hanoi (Tây Hồ), do Thiếu tướng Nguyễn Hồng Ky trực tiếp chỉ đạo. Đây là cuộc diễn tập quy mô lớn nhằm kiểm tra năng lực ứng phó của lực lượng PCCC tại các trung tâm thương mại lớn với hơn 1.000 người tham gia.',
    date: '12/07/2026',
    readTime: '3 phút',
    source: 'An ninh Thủ đô',
    url: 'https://anninhthudo.vn/ha-noi-dien-tap-chua-chay-cuu-ho-1000-nguoi-tai-lotte-mall-west-lake-hanoi-post659326.antd',
    img: '/images/tin-tuc/chua-chay-1.jpg',
    featured: true,
  },
  {
    id: 2,
    cat: 'Pháp lý PCCC',
    catColor: 'bg-purple-50 text-purple-700',
    title: 'Từ 1/7, chủ đầu tư tự nghiệm thu PCCC — Được hiểu là thế nào?',
    excerpt: 'Từ ngày 1/7/2026, theo Nghị quyết 66.18/2026/NQ-CP, chủ đầu tư được tự tổ chức nghiệm thu hệ thống PCCC và tự chịu trách nhiệm trước pháp luật, thay vì chờ cơ quan công an kiểm tra như trước. Việc bỏ thủ tục không đồng nghĩa bỏ quy trình nghiệm thu — chủ đầu tư vẫn phải lập biên bản đầy đủ.',
    date: '28/06/2026',
    readTime: '5 phút',
    source: 'VnExpress',
    url: 'https://vnexpress.net/tu-1-7-chu-dau-tu-tu-nghiem-thu-phong-chay-chua-chay-duoc-hieu-la-the-nao-5091502.html',
    img: '/images/tin-tuc/bigc-cong-trinh.jpg',
  },
  {
    id: 3,
    cat: 'Pháp lý PCCC',
    catColor: 'bg-purple-50 text-purple-700',
    title: 'Chính thức bỏ 3 thủ tục nghiệm thu PCCC với công trình từ 1/7/2026',
    excerpt: 'Nghị quyết 66.18/2026/NQ-CP bãi bỏ 3 thủ tục hành chính PCCC: kiểm tra công tác nghiệm thu; nghiệm thu đối với công trình đã được cấp giấy chứng nhận thẩm duyệt; và phục hồi hoạt động cơ sở. Chủ đầu tư được trao thêm quyền nhưng tăng trách nhiệm pháp lý — vi phạm có thể bị truy cứu hình sự.',
    date: '22/06/2026',
    readTime: '4 phút',
    source: 'VnExpress',
    url: 'https://vnexpress.net/bo-thu-tuc-nghiem-thu-pccc-voi-cong-trinh-phuong-tien-5088141.html',
    img: '/images/tin-tuc/kcn-tan-tao.jpg',
  },
  {
    id: 4,
    cat: 'Pháp lý PCCC',
    catColor: 'bg-purple-50 text-purple-700',
    title: 'Bảng tra cứu 10.000 nhà cho thuê, doanh nghiệp thuộc diện kiểm tra PCCC của Công an Hà Nội',
    excerpt: 'Công an Hà Nội công bố danh sách hàng chục nghìn cơ sở nhà cho thuê và doanh nghiệp thuộc diện phải kiểm tra định kỳ về PCCC. Tra cứu để biết cơ sở của bạn có nằm trong danh sách không và cần chuẩn bị gì trước khi đoàn kiểm tra đến.',
    date: '10/06/2026',
    readTime: '3 phút',
    source: 'VnExpress',
    url: 'https://vnexpress.net/bang-tra-cuu-10-000-nha-cho-thue-doanh-nghiep-thuoc-dien-kiem-tra-cua-cong-an-ha-noi-5072632.html',
    img: '/images/tin-tuc/bigc-ninh-binh.jpg',
  },
  {
    id: 5,
    cat: 'Sự cố PCCC',
    catColor: 'bg-orange-50 text-orange-700',
    title: '31 chiến sĩ bị bỏng, bị axit văng vào mắt khi chữa cháy tại Khu chế xuất Tân Thuận',
    excerpt: 'Vụ cháy tại Công ty CX Technology Việt Nam trong KCX Tân Thuận (quận 7, TP.HCM) ngày 30-4-2020 khiến 31 cán bộ chiến sĩ bị bỏng, trong đó 5 người bị nặng. Bình ắcquy chứa axit bị vỡ, hóa chất hòa vào nước chữa cháy gây bỏng rát — bài học về nhận diện nguy hiểm hóa chất trong công trình.',
    date: '01/05/2020',
    readTime: '4 phút',
    source: 'Tuổi Trẻ',
    url: 'https://tuoitre.vn/31-chien-si-bi-bong-bi-axit-vang-vao-mat-khi-chua-chay-cong-ty-tai-khu-che-xuat-tan-thuan-20200501153408872.htm',
    img: '/images/tin-tuc/ngon-lua.jpg',
  },
  {
    id: 6,
    cat: 'Kiến thức PCCC',
    catColor: 'bg-blue-50 text-blue-700',
    title: 'Hệ thống chữa cháy Sprinkler tự động — Nguyên lý hoạt động và phân loại',
    excerpt: 'Hệ thống Sprinkler là giải pháp chữa cháy tự động phổ biến nhất thế giới. Nguyên lý kích hoạt bằng nhiệt, các loại đầu phun và tiêu chuẩn NFPA 13, TCVN 7336 áp dụng tại Việt Nam.',
    date: '15/03/2024',
    readTime: '5 phút',
    source: 'Bảo An Engineering',
    url: '/san-pham#sprinkler',
    img: '/images/tieuchuan2/tc-hoat-dong-cong-truong.jpg',
  },
  {
    id: 7,
    cat: 'Hướng dẫn',
    catColor: 'bg-green-50 text-green-700',
    title: 'Cách chọn bình chữa cháy phù hợp cho từng loại đám cháy A, B, C',
    excerpt: 'CO2, bột ABC hay bọt Foam — mỗi loại bình chữa cháy phù hợp với loại đám cháy khác nhau. Hướng dẫn chi tiết giúp lựa chọn đúng và sử dụng hiệu quả theo tiêu chuẩn TCVN 3890:2009.',
    date: '18/02/2024',
    readTime: '4 phút',
    source: 'Bảo An Engineering',
    url: '/san-pham#binh-chua-chay',
    img: '/images/sanpham/lang-phun-nuoc.png',
  },
  {
    id: 8,
    cat: 'Bảo trì',
    catColor: 'bg-yellow-50 text-yellow-700',
    title: 'Lịch bảo trì hệ thống PCCC — Những việc cần làm hàng tháng, hàng quý',
    excerpt: 'Bảo trì định kỳ hệ thống PCCC không chỉ là yêu cầu pháp lý mà còn đảm bảo an toàn cho công trình. Hướng dẫn lịch bảo trì chuẩn cho nhà máy và văn phòng theo TCVN 3890:2009.',
    date: '05/02/2024',
    readTime: '6 phút',
    source: 'Bảo An Engineering',
    url: '/dich-vu',
    img: '/images/dichvu/bien-phap-thi-cong.jpg',
  },
]

export default function TinTucPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">

        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2">
            <Link href="/" className="hover:text-brand-red">Trang chủ</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium">Tin tức & Kiến thức</span>
          </div>
        </div>

        <div className="bg-brand-gray text-white py-12">
          <div className="container-main">
            <h1 className="text-2xl font-bold mb-2">Tin tức & Kiến thức PCCC</h1>
            <p className="text-gray-400 text-sm">Cập nhật thông tin mới nhất về PCCC, quy định pháp luật và kiến thức chuyên sâu</p>
          </div>
        </div>

        <div className="container-main py-10">

          {/* Bài viết nổi bật */}
          <a href={featured.url} target="_blank" rel="noopener noreferrer"
            className="group block bg-white rounded-xl border border-gray-100 overflow-hidden mb-8 hover:border-brand-red hover:shadow-lg transition-all">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden bg-gray-100">
                <Image src={featured.img} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-brand-red text-white text-xs px-3 py-1 rounded-full font-medium">
                  Mới nhất
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className={`inline-block text-xs px-2 py-0.5 rounded-full self-start mb-3 ${featured.catColor}`}>
                  {featured.cat}
                </span>
                <h2 className="text-xl font-bold text-brand-gray mb-3 group-hover:text-brand-red transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-brand-gray-mid text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-brand-gray-mid">
                    {featured.date} · {featured.readTime} đọc · <span className="text-brand-red">{featured.source}</span>
                  </div>
                  <span className="text-sm text-brand-red font-medium group-hover:underline">Đọc tiếp</span>
                </div>
              </div>
            </div>
          </a>

          {/* Lưới bài viết */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(p => (
              <a key={p.id}
                href={p.url}
                target={p.url.startsWith('http') ? '_blank' : '_self'}
                rel={p.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-brand-red hover:shadow-md transition-all flex flex-col">
                <div className="relative h-44 bg-gray-100 overflow-hidden">
                  <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${p.catColor}`}>{p.cat}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-brand-gray text-sm mb-2 leading-snug group-hover:text-brand-red transition-colors flex-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-brand-gray-mid leading-relaxed mb-4 line-clamp-3">{p.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="text-xs text-brand-gray-mid">
                      {p.date} · <span className="text-brand-red">{p.source}</span>
                    </div>
                    <span className="text-xs text-brand-red font-medium group-hover:underline">Đọc tiếp</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
