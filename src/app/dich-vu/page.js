import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Dịch vụ PCCC',
  description: 'Tư vấn, thiết kế, cung cấp và lắp đặt hệ thống phòng cháy chữa cháy — Bảo An Engineering.',
}

const services = [
  {
    num: '01',
    title: 'Tư vấn & Thiết kế',
    desc: 'Đội ngũ kỹ sư có chuyên môn cao thực hiện khảo sát thực địa, tính toán lưu lượng và áp lực, lựa chọn thiết bị phù hợp và lập hồ sơ thiết kế đúng tiêu chuẩn NFPA, APSAD, TCVN.',
    items: [
      'Khảo sát và đánh giá rủi ro cháy nổ',
      'Thiết kế hệ thống Sprinkler, báo cháy, Foam, FM200',
      'Lập bản vẽ thi công và thuyết minh kỹ thuật',
      'Tư vấn lựa chọn tiêu chuẩn phù hợp (NFPA / APSAD / TCVN)',
      'Hỗ trợ thủ tục cấp phép PCCC với cơ quan chức năng',
    ],
    img: '/images/tieuchuan2/tuvan.jpg',
  },
  {
    num: '02',
    title: 'Cung cấp thiết bị',
    desc: 'Bảo An là nhà phân phối chính hãng các thương hiệu PCCC hàng đầu thế giới. Toàn bộ thiết bị đều có đầy đủ chứng nhận UL, FM, VdS, CE và chứng nhận Cục CSPCCC Bộ Công an Việt Nam.',
    items: [
      'Đầu phun Sprinkler',
      'Tủ & cuộn vòi Hosereel — Bảo An Engineering',
      'Bơm chữa cháy — Salmson, Penta',
      'Hệ thống báo cháy — Ampac, Siemens',
      'Khí chữa cháy FM200 — Kidde, Siemens',
      'Bình chữa cháy CO2, ABC — chứng nhận Bộ CA',
    ],
    img: '/images/dichvu/thietbi.jpg',
  },
  {
    num: '03',
    title: 'Lắp đặt hệ thống',
    desc: 'Xưởng chế tạo riêng tại Đồng Nai đảm bảo chất lượng gia công và tiến độ thi công. Đội ngũ công nhân lành nghề với kinh nghiệm thi công trên các công trình trọng điểm quốc gia và quốc tế.',
    items: [
      'Thi công theo đúng bản vẽ thiết kế được duyệt',
      'Xưởng chế tạo riêng — kiểm soát chất lượng đầu vào',
      'Nghiệm thu từng hạng mục theo tiêu chuẩn',
      'Bàn giao hồ sơ hoàn công đầy đủ',
      'Hỗ trợ nghiệm thu với cơ quan PCCC địa phương',
    ],
    img: '/images/dichvu/dichvulapdat.jpg',
  },
  {
    num: '04',
    title: 'Bảo trì định kỳ',
    desc: 'Hợp đồng bảo trì dài hạn với lịch kiểm tra định kỳ, đảm bảo toàn bộ hệ thống PCCC luôn trong tình trạng sẵn sàng hoạt động. Báo cáo chi tiết sau mỗi lần kiểm tra.',
    items: [
      'Kiểm tra áp lực và lưu lượng hệ thống Sprinkler',
      'Vệ sinh và kiểm tra đầu phun, van, bơm',
      'Test hệ thống báo cháy và thiết bị liên động',
      'Thay thế linh kiện hao mòn',
      'Báo cáo tình trạng hệ thống sau mỗi lần bảo trì',
    ],
    img: '/images/dichvu/baotri.jpg',
  },
]

const processSteps = [
  { step: '1', title: 'Tiếp nhận yêu cầu', desc: 'Khách hàng liên hệ qua điện thoại, email hoặc form báo giá. Bảo An phản hồi trong vòng 24 giờ.' },
  { step: '2', title: 'Khảo sát thực địa', desc: 'Kỹ sư Bảo An đến khảo sát công trình miễn phí, đánh giá yêu cầu kỹ thuật thực tế.' },
  { step: '3', title: 'Lập hồ sơ thiết kế', desc: 'Thiết kế hệ thống, lập bản vẽ thi công và dự toán chi phí chi tiết.' },
  { step: '4', title: 'Ký hợp đồng', desc: 'Thống nhất hợp đồng thi công với điều khoản rõ ràng về tiến độ, chất lượng, bảo hành.' },
  { step: '5', title: 'Thi công & Nghiệm thu', desc: 'Thi công theo tiến độ cam kết, nghiệm thu từng hạng mục, bàn giao hồ sơ hoàn công.' },
  { step: '6', title: 'Bảo trì dài hạn', desc: 'Ký hợp đồng bảo trì định kỳ, đảm bảo hệ thống hoạt động ổn định lâu dài.' },
]

export default function DichVuPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2">
            <Link href="/" className="hover:text-brand-red transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium">Dịch vụ</span>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-brand-gray text-white py-12">
          <div className="container-main">
            <h1 className="text-2xl font-bold mb-2">Dịch vụ PCCC toàn diện</h1>
            <p className="text-gray-400 text-sm max-w-2xl">
              Từ tư vấn thiết kế đến lắp đặt và bảo trì — Bảo An Engineering đồng hành
              cùng công trình của bạn từ đầu đến cuối.
            </p>
          </div>
        </div>

        {/* Danh sách dịch vụ */}
        <div className="bg-brand-gray-light">
          {services.map((s, i) => (
            <div key={s.num} className={`py-16 ${i % 2 === 1 ? 'bg-white' : ''}`}>
              <div className="container-main">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Nội dung */}
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="text-brand-red font-bold text-sm mb-2 uppercase tracking-widest">
                      Dịch vụ {s.num}
                    </div>
                    <h2 className="text-2xl font-bold text-brand-gray mb-4">{s.title}</h2>
                    <p className="text-brand-gray-mid leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-2.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-brand-gray">
                          <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link href="/bao-gia" className="btn-primary">
                        Yêu cầu tư vấn miễn phí
                      </Link>
                    </div>
                  </div>
                  {/* Ảnh */}
                  <div className={`relative h-72 lg:h-80 rounded-xl overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-gray/20" />
                    <div className="absolute top-4 left-4 w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{s.num}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quy trình */}
        <section className="py-16 bg-brand-gray text-white">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Quy trình làm việc</h2>
              <p className="text-gray-400">Minh bạch, chuyên nghiệp từ bước đầu tiên đến hoàn công</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((p, i) => (
                <div key={p.step} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-brand-red transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{p.step}</span>
                    </div>
                    <h3 className="font-semibold text-white">{p.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-brand-red text-white">
          <div className="container-main text-center">
            <h2 className="text-2xl font-bold mb-3">Liên hệ để được tư vấn ngay hôm nay</h2>
            <p className="text-red-100 mb-7 max-w-xl mx-auto text-sm">
              Kỹ sư Bảo An sẵn sàng đến khảo sát và tư vấn miễn phí cho công trình của bạn
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+84968552345" className="bg-white text-brand-red font-bold px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
                Gọi: 0968 552 345
              </a>
              <Link href="/bao-gia" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-brand-red transition-colors">
                Gửi yêu cầu báo giá
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
