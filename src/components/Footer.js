import Link from 'next/link'
import Image from 'next/image'

const productLinks = [
  ['Hệ thống Sprinkler tự động', '/san-pham#sprinkler'],
  ['Hosereel & Hydrant', '/san-pham#hosereel-hydrant'],
  ['Bình chữa cháy CO2 / ABC', '/san-pham#binh-chua-chay'],
  ['Báo cháy tự động', '/san-pham#bao-chay'],
  ['Khí sạch FM200 / CO2', '/san-pham#khi-sach'],
  ['Camera & An ninh', '/san-pham#camera'],
  ['Cửa chống cháy', '/san-pham#thiet-bi-khac'],
]
const quickLinks = [
  ['Giới thiệu công ty', '/gioi-thieu'],
  ['Dự án đã thực hiện', '/du-an'],
  ['Tiêu chuẩn PCCC', '/tieu-chuan'],
  ['Tin tức & Kiến thức', '/tin-tuc'],
  ['Yêu cầu báo giá', '/bao-gia'],
  ['Liên hệ', '/lien-he'],
]
const branches = [
  { name: 'Trụ sở Đồng Nai', address: 'Khu phố Bình Lâm, phường Long Thành, TP. Đồng Nai', phone: '(84.28) 362 02114 — 362 07114', tel: '+842836202114' },
  { name: 'Chi nhánh Hà Nội', address: '39A, ngõ 48/67 Ngô Gia Tự, P. Việt Hưng, Q. Long Biên, Hà Nội', phone: '(84.4) 38 432 223', tel: '+84438432223' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-gray text-white">
      <div className="container-main py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image src="/images/logo.png" alt="Bảo An Engineering" width={140} height={100} className="h-10 w-auto object-contain mb-5" />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Chuyên tư vấn, thiết kế, cung cấp và lắp đặt hệ thống PCCC theo tiêu chuẩn NFPA, APSAD, TCVN.</p>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-xs text-gray-500 mb-1">Khách hàng tiêu biểu</p>
              <p className="text-sm text-gray-300">Big C · Metro · Intel · Colgate · Bosch · VSIP</p>
            </div>
            <div className="border-t border-gray-700 pt-4 mt-4">
              <p className="text-xs text-gray-500 mb-1">Nhà phân phối</p>
              <p className="text-sm text-gray-300">Tyco · Viking · Salmson · Ansul · Siemens</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-5 text-gray-300">Sản phẩm PCCC</h3>
            <ul className="space-y-2.5">
              {productLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-brand-red transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-600 rounded-full flex-shrink-0" />{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-5 text-gray-300">Liên kết nhanh</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-brand-red transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-600 rounded-full flex-shrink-0" />{label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <a href="mailto:baoan@baoanengineering.com" className="text-sm text-gray-400 hover:text-brand-red break-all">baoan@baoanengineering.com</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-5 text-gray-300">Văn phòng & Chi nhánh</h3>
            <div className="space-y-5">
              {branches.map(b => (
                <div key={b.name} className="border-l-2 border-brand-red pl-3">
                  <p className="text-white text-xs font-semibold mb-1">{b.name}</p>
                  <p className="text-gray-400 text-xs leading-relaxed mb-1">{b.address}</p>
                  <a href={`tel:${b.tel}`} className="text-gray-300 text-xs hover:text-brand-red transition-colors">{b.phone}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container-main py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2024 Công ty TNHH Bảo An Engineering. Tất cả quyền được bảo lưu.</p>
          <p>Hotline: <a href="tel:+84968552345" className="hover:text-brand-red">0968 552 345</a></p>
        </div>
      </div>
    </footer>
  )
}
