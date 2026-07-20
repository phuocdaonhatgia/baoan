import Image from "next/image";

export default function PinAcQuy() {
  return (
    <div className="space-y-6">

      <p className="leading-8 text-justify">
        Vụ <strong>cháy xe điện tại Đà Nẵng</strong> thời gian gần đây một lần
        nữa làm dấy lên lo ngại về nguy cơ cháy nổ liên quan đến pin lithium và
        ắc quy trong quá trình sử dụng cũng như vận chuyển. Khi xảy ra sự cố,
        pin có thể sinh nhiệt rất nhanh, phát tán khí độc và khiến ngọn lửa bùng
        phát dữ dội hơn so với các đám cháy thông thường. Điều này cho thấy việc
        vận chuyển các loại pin và ắc quy cần được quản lý chặt chẽ nhằm giảm
        thiểu rủi ro cho người và phương tiện.
      </p>

      <p className="leading-8 text-justify">
        Theo các quy định hiện hành, <strong>pin lithium và ắc quy được xếp vào
        nhóm hàng hóa có nguy cơ gây cháy nổ</strong> nếu không được đóng gói,
        bảo quản và vận chuyển đúng quy chuẩn. Các đơn vị vận tải phải kiểm tra
        tình trạng pin trước khi xếp hàng, không vận chuyển pin bị hư hỏng,
        phồng rộp hoặc rò rỉ điện phân. Đồng thời, hàng hóa phải được cố định
        chắc chắn để tránh va đập, chập điện hoặc phát sinh nguồn nhiệt trong
        quá trình di chuyển.
      </p>

      <div className="my-8">
        <div className="relative w-full h-[430px] rounded-xl overflow-hidden">
          <Image
            src="/images/tin-tuc/pin-acquy.jpg"
            alt="Vận chuyển pin và ắc quy"
            fill
            className="object-cover"
          />
        </div>

        <p className="mt-2 text-xs italic text-right text-gray-500">
          Vụ cháy xảy ra tháng 5/2026 tại cây xăng Petrolimex số 90, thôn Tú Cẩm, xã Thăng Điền. 
        </p>
      </div>

      <p className="leading-8 text-justify">
        Bên cạnh đó, phương tiện vận chuyển cần được trang bị đầy đủ{" "}
        <strong>thiết bị phòng cháy, chữa cháy</strong>, người điều khiển và
        nhân viên bốc xếp phải được hướng dẫn xử lý khi phát hiện pin có dấu
        hiệu bất thường như bốc khói, phát nhiệt hoặc biến dạng. Đối với các
        lô hàng lớn, doanh nghiệp cần xây dựng phương án ứng phó sự cố và tổ
        chức huấn luyện định kỳ nhằm hạn chế thiệt hại nếu xảy ra cháy nổ.
      </p>

      <p className="leading-8 text-justify">
        Các chuyên gia cũng khuyến cáo doanh nghiệp không nên chủ quan với
        những viên pin đã qua sử dụng hoặc pin bị hỏng. Việc thu gom, lưu trữ
        và vận chuyển phải tuân thủ đúng quy định của pháp luật, tránh để pin
        tiếp xúc trực tiếp với kim loại hoặc môi trường có nhiệt độ cao.
        <strong> Tuân thủ đúng quy trình vận chuyển không chỉ bảo vệ tài sản mà
        còn góp phần bảo đảm an toàn cho người tham gia giao thông và cộng
        đồng.</strong>
      </p>

    </div>
  );
}