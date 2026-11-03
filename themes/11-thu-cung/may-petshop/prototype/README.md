# Mây Pet Spa - Landing page (prototype nhanh)

- **Hướng thiết kế:** tiệm spa thú cưng nhỏ ở địa phương, tông xanh mây pastel (thang `may-50…900`) trên nền trắng, chữ Lexend (tiêu đề) và Be Vietnam Pro (nội dung). Card bo 24px, nút bo tròn hoàn toàn. Ảnh thật chụp chó mèo.
- **Mức chuyển động:** Sinh động. Tiêu đề hero hiện từng chữ, ảnh hero có parallax, số liệu tự đếm, thẻ hiện lần lượt khi cuộn, thẻ dịch vụ nghiêng nhẹ theo chuột, nút chính hút theo con trỏ, khối quy trình có spotlight, header thu gọn khi cuộn.
- **Các section (10):** Header, Hero tách đôi, Dải số liệu, Dịch vụ dạng bento (Tắm / Tỉa lông / Giữ theo giờ), Bảng giá có tab theo cân nặng, Cửa hàng có tab nhóm hàng và giỏ hàng, Quy trình 4 bước, Đánh giá, Hỏi đáp, Đặt lịch kèm liên hệ và bản đồ, Footer. Trên điện thoại có thanh dính đáy: Gọi / Zalo / Đặt lịch.
- **Tương tác giả lập:** giỏ hàng (lưu `localStorage`), đặt hàng nhận tại tiệm hoặc giao tận nơi, form đặt lịch có kiểm tra dữ liệu bằng tiếng Việt. Bấm "Đặt lịch" ở thẻ dịch vụ sẽ tự chọn sẵn dịch vụ đó trong form.
- **Thông tin tự đặt (cần khách xác nhận):** tên tiệm, địa chỉ, số điện thoại, giá, danh sách sản phẩm, đánh giá.
- **Cách mở:** mở trực tiếp `index.html` bằng trình duyệt (chạy được qua `file://`, cần Internet để tải Tailwind CDN, font và bản đồ).
- Ảnh lấy qua công cụ, có ghi nguồn trong `assets/img/CREDITS.md`. Nên thay bằng ảnh chụp thật của tiệm khi có.
