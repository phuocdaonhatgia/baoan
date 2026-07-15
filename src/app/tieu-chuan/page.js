import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Tiêu chuẩn PCCC',
  description: 'Các tiêu chuẩn PCCC quốc tế áp dụng tại Bảo An Engineering: NFPA (Mỹ), APSAD (Pháp), TCVN (Việt Nam), BS (Anh).',
}

const standards = [
  {
    code: 'NFPA', country: 'Hoa Kỳ',
    fullName: 'National Fire Protection Association',
    desc: 'Bộ tiêu chuẩn PCCC được áp dụng rộng rãi nhất thế giới, đặc biệt phổ biến tại các dự án có vốn đầu tư nước ngoài tại Việt Nam như Intel, Colgate, Big C.',
    img: '/images/tieuchuan2/tc-hoat-dong-cong-truong.jpg',
    codes: [
      { code: 'NFPA 13', name: 'Lắp đặt hệ thống Sprinkler' },
      { code: 'NFPA 14', name: 'Hệ thống Standpipe và Hosereel' },
      { code: 'NFPA 20', name: 'Lắp đặt bơm chữa cháy' },
      { code: 'NFPA 72', name: 'Hệ thống báo cháy quốc gia' },
      { code: 'NFPA 11', name: 'Hệ thống chữa cháy bằng Foam' },
      { code: 'NFPA 2001', name: 'Hệ thống chữa cháy khí sạch' },
    ],
  },
  {
    code: 'APSAD', country: 'Pháp',
    fullName: 'Assemblée Plénière des Sociétés Assurances Dommages',
    desc: 'Tiêu chuẩn bảo hiểm của Pháp, được áp dụng tại các dự án liên quan đến nhà bảo hiểm châu Âu. Metro Cash & Carry, Novotel và nhiều tập đoàn Pháp tại Việt Nam yêu cầu tiêu chuẩn này.',
    img: '/images/tieuchuan2/tc-giai-phap.jpg',
    codes: [
      { code: 'APSAD R1', name: 'Chữa cháy tự động bằng nước — Sprinkler' },
      { code: 'APSAD R5', name: 'Hệ thống chữa cháy CO2' },
      { code: 'APSAD R7', name: 'Thiết bị báo cháy tự động' },
      { code: 'APSAD R17', name: 'Hệ thống chữa cháy Foam' },
    ],
  },
  {
    code: 'TCVN', country: 'Việt Nam',
    fullName: 'Tiêu chuẩn Quốc gia Việt Nam',
    desc: 'Tiêu chuẩn bắt buộc áp dụng cho mọi công trình tại Việt Nam theo quy định của Bộ Công an và Bộ Xây dựng. Bảo An Engineering đảm bảo tuân thủ đầy đủ hệ thống TCVN hiện hành.',
    img: '/images/tieu-chuan/tcvn.jpg',
    codes: [
      { code: 'TCVN 3890:2009', name: 'Phương tiện PCCC cho nhà và công trình' },
      { code: 'TCVN 7336:2003', name: 'Hệ thống Sprinkler tự động' },
      { code: 'TCVN 5738:2001', name: 'Hệ thống báo cháy tự động' },
      { code: 'TCVN 7161:2009', name: 'Hệ thống chữa cháy khí' },
      { code: 'TCVN 9385:2012', name: 'Chống sét cho công trình xây dựng' },
    ],
  },
  {
    code: 'BS', country: 'Anh',
    fullName: 'British Standards Institution',
    desc: 'Tiêu chuẩn Anh quốc được áp dụng tại các dự án có đối tác hoặc nhà bảo hiểm từ Anh và các nước Commonwealth. Thường gặp trong các dự án bất động sản thương mại cao cấp.',
    img: '/images/tieuchuan2/tc-lap-dat.jpg',
    codes: [
      { code: 'BS EN 12845', name: 'Hệ thống Sprinkler cố định' },
      { code: 'BS 5041', name: 'Hosereel và thiết bị nước chữa cháy' },
      { code: 'BS 5839', name: 'Hệ thống báo cháy và cứu hỏa' },
      { code: 'BS 7671', name: 'Yêu cầu lắp đặt điện' },
    ],
  },
]

const certifications = [
  { name: 'UL Listed', org: 'Underwriters Laboratories — Hoa Kỳ', desc: 'Chứng nhận an toàn sản phẩm tin cậy nhất Bắc Mỹ' },
  { name: 'FM Approved', org: 'Factory Mutual — Hoa Kỳ', desc: 'Chứng nhận bảo hiểm và an toàn công nghiệp toàn cầu' },
  { name: 'VdS', org: 'Verband der Schadenversicherer — Đức', desc: 'Chứng nhận bảo hiểm và an toàn cháy nổ châu Âu' },
  { name: 'CE Marking', org: 'Liên minh châu Âu', desc: 'Chứng nhận tuân thủ tiêu chuẩn an toàn châu Âu' },
  { name: 'Cục CSPCCC', org: 'Bộ Công an Việt Nam', desc: 'Chứng nhận bắt buộc cho thiết bị PCCC lưu thông tại Việt Nam' },
]

// Gallery ảnh thực tế thi công của Bảo An
const gallery = [
  { img: '/images/tieuchuan2/tc-giai-phap.jpg',          caption: 'Giải pháp kỹ thuật PCCC' },
  { img: '/images/dichvu/congnghe.png', caption: 'Công nghệ mới, hiện đại' },
  { img: '/images/tieuchuan2/tc-he-thong.jpg',            caption: 'Hệ thống showroom thiết bị' },
  { img: '/images/tieuchuan2/tc-lap-dat.jpg',             caption: 'Bảo quản vận chuyển đến công trường' },
  { img: '/images/tieuchuan2/tc-sp-cong-trinh.jpg',       caption: 'Sản phẩm lắp đặt tại công trình' },
  { img: '/images/dichvu/ky niem 10 nam.jpg',         caption: 'Kỷ niệm 10 năm Big C' },
  { img: '/images/dichvu/vanchuyen.png',         caption: 'Bảo quản vận chuyển an toàn' },
  { img: '/images/dichvu/tu-van-thiet-ke.jpg',            caption: 'Tư vấn thiết kế hệ thống' },
]

export default function TieuChuanPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-gray-light">

        <div className="bg-white border-b border-gray-100 py-3">
          <div className="container-main text-sm text-brand-gray-mid flex items-center gap-2">
            <Link href="/" className="hover:text-brand-red">Trang chủ</Link>
            <span>/</span>
            <span className="text-brand-gray font-medium">Tiêu chuẩn PCCC</span>
          </div>
        </div>

        <div className="bg-brand-gray text-white py-12">
          <div className="container-main">
            <h1 className="text-2xl font-bold mb-2">Tiêu chuẩn PCCC áp dụng</h1>
            <p className="text-gray-400 text-sm max-w-2xl">
              Bảo An Engineering thiết kế và thi công theo các bộ tiêu chuẩn quốc tế nghiêm ngặt nhất,
              đảm bảo hệ thống được chấp thuận bởi cơ quan chức năng và công ty bảo hiểm.
            </p>
          </div>
        </div>

        <div className="container-main py-10 space-y-8">

          {/* 4 tiêu chuẩn với ảnh */}
          {standards.map((s, i) => (
            <div key={s.code} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              {/* Header tiêu chuẩn */}
              <div className="flex items-center gap-4 p-6 border-b border-gray-100 bg-gray-50">
                <div className="w-16 h-16 bg-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{s.code}</span>
                </div>
                <div>
                  <h2 className="font-bold text-brand-gray text-lg">{s.code} — {s.country}</h2>
                  <p className="text-brand-gray-mid text-sm">{s.fullName}</p>
                </div>
              </div>

              {/* Nội dung: ảnh + mô tả + danh sách mã */}
              <div className={`grid lg:grid-cols-3 gap-0 ${i % 2 === 1 ? '' : ''}`}>
                {/* Ảnh thực tế */}
                <div className="relative h-52 lg:h-auto overflow-hidden bg-gray-100">
                  <Image
                    src={s.img}
                    alt={`Thi công theo tiêu chuẩn ${s.code}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-gray/40" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white text-xs bg-brand-red px-2 py-1 rounded">
                      Áp dụng tại công trình Bảo An
                    </span>
                  </div>
                </div>

                {/* Mô tả */}
                <div className="p-6">
                  <p className="text-brand-gray-mid text-sm leading-relaxed">{s.desc}</p>
                </div>

                {/* Danh sách mã tiêu chuẩn */}
                <div className="p-6 bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-100">
                  <p className="text-xs text-brand-gray-mid uppercase tracking-wide mb-3 font-medium">
                    Các mã thường áp dụng
                  </p>
                  <div className="space-y-2">
                    {s.codes.map(c => (
                      <div key={c.code} className="flex items-start gap-2">
                        <span className="text-xs bg-brand-red-light text-brand-red px-2 py-0.5 rounded font-mono flex-shrink-0 mt-0.5">
                          {c.code}
                        </span>
                        <span className="text-xs text-brand-gray leading-relaxed">{c.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Gallery ảnh thi công thực tế */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-brand-gray mb-2">Hình ảnh thực tế</h2>
            <p className="text-brand-gray-mid text-sm mb-6">
              Các công trình của Bảo An Engineering thi công theo đúng tiêu chuẩn quốc tế
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {gallery.map((g, i) => (
                <div key={i} className="relative h-40 rounded-lg overflow-hidden bg-gray-100 group">
                  <Image
                    src={g.img}
                    alt={g.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs leading-tight bg-black/60 rounded px-2 py-1">{g.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chứng nhận sản phẩm */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-brand-gray mb-2">Chứng nhận thiết bị</h2>
            <p className="text-brand-gray-mid text-sm mb-6">
              Toàn bộ thiết bị Bảo An cung cấp đều có ít nhất một trong các chứng nhận sau:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map(c => (
                <div key={c.name} className="border border-gray-100 rounded-lg p-4 hover:border-brand-red transition-colors">
                  <div className="font-bold text-brand-red mb-1">{c.name}</div>
                  <div className="text-xs text-brand-gray-mid mb-2">{c.org}</div>
                  <div className="text-xs text-brand-gray leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-gray rounded-xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Cần tư vấn tiêu chuẩn phù hợp cho công trình?</h3>
            <p className="text-gray-400 text-sm mb-5">
              Kỹ sư Bảo An sẽ tư vấn tiêu chuẩn phù hợp nhất dựa trên loại công trình, yêu cầu bảo hiểm và quy định địa phương.
            </p>
            <Link href="/bao-gia" className="btn-primary px-8">
              Yêu cầu tư vấn miễn phí
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
