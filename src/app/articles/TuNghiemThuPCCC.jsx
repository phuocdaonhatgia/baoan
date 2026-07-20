import Image from "next/image";

export default function TuNghiemThuPCCC() {
  return (
    <div className="space-y-6">
      <p className="leading-8 text-justify">
        Từ ngày <strong>01/07/2026</strong>, theo Nghị quyết
        66.18/2026/NQ-CP của Chính phủ, thủ tục{" "}
        <strong>nghiệm thu về phòng cháy, chữa cháy (PCCC)</strong> đối với
        nhiều công trình và phương tiện{" "}
        <strong>chính thức được bãi bỏ</strong>. Điều này đồng nghĩa với việc
        chủ đầu tư không còn phải chờ cơ quan Công an kiểm tra và chấp thuận
        kết quả nghiệm thu PCCC trước khi đưa công trình vào sử dụng như trước
        đây. Chính sách mới được ban hành nhằm cắt giảm thủ tục hành chính,
        rút ngắn thời gian triển khai dự án và tạo điều kiện thuận lợi hơn cho
        hoạt động đầu tư, sản xuất, kinh doanh.
      </p>

      <p className="leading-8 text-justify">
        Đáng chú ý, việc <strong>bãi bỏ thủ tục nghiệm thu</strong> không đồng
        nghĩa với việc nới lỏng các yêu cầu về an toàn PCCC. Chủ đầu tư vẫn phải{" "}
        <strong>tự chịu trách nhiệm trước pháp luật</strong> về chất lượng hệ
        thống PCCC của công trình. Cơ quan chức năng sẽ chuyển từ cơ chế{" "}
        <strong>tiền kiểm sang hậu kiểm</strong>, tăng cường thanh tra, kiểm
        tra trong quá trình công trình hoạt động và xử lý nghiêm các trường hợp
        vi phạm nếu không đáp ứng yêu cầu về an toàn cháy, nổ.
      </p>

      {/* Chỉ 1 ảnh duy nhất trong bài - dùng làm ảnh minh họa giữa bài */}
      <div>
        <div className="relative w-full h-72 md:h-[450px] rounded-xl overflow-hidden">
          <Image
            src="/images/tin-tuc/tintuc.webp"
            alt="Lực lượng Công an kiểm tra hệ thống PCCC tại công trình"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs italic text-right text-gray-500">
          Ảnh: Bộ Công An
        </p>
      </div>

      <p className="leading-8 text-justify">
        Đối với các doanh nghiệp và chủ đầu tư, việc cắt giảm thủ tục hành
        chính là cơ hội giúp rút ngắn tiến độ đưa công trình vào khai thác,
        nhưng cũng đặt ra yêu cầu cao hơn về trách nhiệm trong việc tuân thủ
        quy định PCCC. Do đó, các đơn vị nên{" "}
        <strong>
          lựa chọn đơn vị tư vấn, thiết kế và thi công PCCC có năng lực
        </strong>
        , đồng thời <strong>lưu trữ đầy đủ hồ sơ kỹ thuật</strong> để phục vụ
        công tác hậu kiểm. <strong>Chủ động tuân thủ đúng quy định</strong> sẽ
        giúp công trình vận hành an toàn, hạn chế rủi ro pháp lý và bảo vệ
        hiệu quả tính mạng, tài sản của doanh nghiệp cũng như cộng đồng.
      </p>
    </div>
  );
}