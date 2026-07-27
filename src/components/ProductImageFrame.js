import Image from 'next/image'

/**
 * Khung hiển thị ảnh sản phẩm theo phong cách "phiếu kiểm định kỹ thuật":
 * nền chấm lưới mờ (gợi ý bản vẽ kỹ thuật), 4 góc bo viền đỏ như khung ngắm,
 * nhãn góc trên-trái (mã sản phẩm / danh mục), và dải chip tiêu chuẩn bên dưới.
 *
 * Dùng chung cho: card danh sách, ảnh chính trang chi tiết, card sản phẩm liên quan.
 */
export default function ProductImageFrame({
  src,
  alt,
  tag,
  chips = [],
  brackets = true,
  aspect = 'aspect-square',
  backdropPadding = 'p-5',
}) {
  return (
    <div className="w-full">
      <div
        className={`relative rounded-2xl border border-gray-200 bg-gray-50 ${backdropPadding} overflow-hidden`}
        style={{
          backgroundImage: 'radial-gradient(#d8dce1 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      >
        {tag && (
          <span className="absolute top-3 left-3 z-10 bg-brand-red text-white text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
            {tag}
          </span>
        )}

        <div className={`relative ${aspect} rounded-xl bg-white border border-gray-100 shadow-sm`}>
          {brackets && (
            <>
              <span className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-brand-red rounded-tl-lg pointer-events-none" />
              <span className="absolute -top-px -right-px w-5 h-5 border-t-2 border-r-2 border-brand-red rounded-tr-lg pointer-events-none" />
              <span className="absolute -bottom-px -left-px w-5 h-5 border-b-2 border-l-2 border-brand-red rounded-bl-lg pointer-events-none" />
              <span className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-brand-red rounded-br-lg pointer-events-none" />
            </>
          )}
          <div className="absolute inset-5 sm:inset-6">
            <Image src={src} alt={alt} fill className="object-contain" />
          </div>
        </div>
      </div>

      {chips.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {chips.map(c => (
            <span
              key={c}
              className="text-[11px] font-medium text-brand-gray-mid bg-white border border-gray-200 rounded-full px-3 py-1"
            >
              {c}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
