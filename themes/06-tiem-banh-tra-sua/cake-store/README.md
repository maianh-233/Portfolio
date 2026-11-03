# Prototype - Website quảng bá tiệm bánh kem và đặt bánh trực tuyến

Prototype trình diễn cho khách hàng, dựng theo SRS `SRS-TIEMBANH-001` v0.2 (Phần 9 Giao diện). Toàn bộ **dữ liệu và xử lý đều là giả**.

## Cách chạy

- Mở `index.html` bằng trình duyệt (chạy được qua `file://`, không cần build).
- Hoặc chạy một static server bất kỳ tại thư mục này, ví dụ `npx serve .` rồi mở địa chỉ được in ra.
- Cần Internet để tải Tailwind CDN, Google Fonts (Dancing Script, Nunito), bộ icon Phosphor, ảnh minh họa picsum.photos và bản đồ Google.
- Nút **"Đặt lại dữ liệu"** trên dải "Bản demo - dữ liệu giả" (trên cùng mọi trang) xóa mọi thay đổi đã lưu trong trình duyệt.

## Danh sách trang

| File | Màn hình | Mã SCR | Mô tả ngắn |
|---|---|---|---|
| `index.html` | Trang chủ | SCR-001 | Hero ảnh bánh + "Đặt bánh ngay", băng khuyến mãi, Bánh bán chạy, Bánh mới ra (bento), cảm nhận khách, địa chỉ + giờ mở cửa + bản đồ |
| `gioi-thieu.html` | Giới thiệu tiệm | SCR-002 | Câu chuyện, thư viện ảnh không gian (bấm để phóng to), khối kêu gọi |
| `danh-sach-banh.html` | Danh sách bánh | SCR-003 | Tìm theo tên (có/không dấu), lọc hương vị, khoảng giá, sắp xếp, "Xem thêm" 12/lần, bộ lọc giữ trên URL. `?demo=error` xem trạng thái lỗi |
| `chi-tiet-banh.html` | Chi tiết bánh | SCR-004 | Bộ ảnh, chọn cỡ cập nhật giá ngay, lưu ý dị ứng nổi bật, đánh giá + phân bố sao, gợi ý bánh. `?slug=<slug>` |
| `dat-banh.html` | Đặt bánh (4 bước) | SCR-005 | Thanh tiến độ, lịch còn suất / gần đầy / hết suất / ngày nghỉ, điểm tích lũy theo SĐT, phương thức thanh toán, xem lại + sửa từng mục, lưu tạm form. `?demo=save-error` xem lỗi lưu |
| `dat-banh-thanh-cong.html` | Đặt bánh thành công | SCR-006 | Confetti 1 lần + lời nhắn dễ thương, mã đơn + sao chép, hướng dẫn cọc |
| `tra-cuu-don.html` | Tra cứu đơn | SCR-007 | Mã đơn + SĐT, thanh trạng thái, hủy khi Chờ xác nhận, giới hạn 5 lần / 15 phút. Có danh sách dữ liệu thử |
| `viet-danh-gia.html` | Viết đánh giá | SCR-008 | Chấm sao, cảm nhận, ảnh thật; chỉ đơn Hoàn thành |
| `bai-viet.html` | Danh sách bài viết | SCR-009 | Tab chuyên mục, 9 bài / trang |
| `chi-tiet-bai-viet.html` | Chi tiết bài viết | SCR-010 | Khung đọc 720 px, khối kêu gọi, bài liên quan |
| `lien-he.html` | Liên hệ | SCR-011 | Địa chỉ, giờ mở cửa (nhãn Đang mở / Đã đóng), gọi / Zalo, MXH, bản đồ |
| `khong-tim-thay.html` | Không tìm thấy (404) | SCR-012 | Biến thể chung, `?type=cake` (bánh ngừng bán), `?type=post` |
| `qt-dang-nhap.html` | Đăng nhập quản trị | SCR-013 | Hiện / ẩn mật khẩu, sai 5 lần khóa 15 phút, quên mật khẩu |
| `qt-don-hang.html` | Danh sách đơn | SCR-014 | Bảng (máy tính) / thẻ (điện thoại) đủ 8 thông tin q18, lọc nhanh, sắp xếp cột, xem theo lịch, **Giả lập đơn mới** (huy hiệu + chuông + toast) |
| `qt-chi-tiet-don.html` | Chi tiết đơn | SCR-015 | Một nút chính theo trạng thái, phí giao, chưa liên lạc được, từ chối + lý do, ghi nhận cọc / thanh toán, lịch sử, ghi chú nội bộ |
| `qt-banh.html` | Danh sách bánh (quản trị) | SCR-016 | Công tắc Đang bán / Ngừng bán (xác nhận khi ẩn), lọc |
| `qt-sua-banh.html` | Thêm / sửa bánh | SCR-017 | Tab VI / EN, ảnh (chọn đại diện), dị ứng, bảng cỡ + giá có khóa quyền giá, lịch sử giá |
| `qt-noi-dung.html` | Nội dung và bài viết | SCR-018 | 6 tab: Trang chủ, Câu chuyện, Ảnh không gian, Cảm nhận khách, Bài viết (trình soạn cơ bản), Thông tin liên hệ |
| `qt-danh-gia.html` | Quản lý đánh giá | SCR-019 | Duyệt / Từ chối / Ẩn / Hiện lại, lọc theo trạng thái, sao, bánh |
| `qt-khuyen-mai.html` | Khuyến mãi và điểm | SCR-020 | Chương trình giảm giá (xem trước băng trang chủ), điểm khách quen theo SĐT, điều chỉnh điểm |
| `qt-thong-ke.html` | Thống kê | SCR-021 | Doanh thu, số đơn (cột chồng + mốc ~4 đơn/ngày), bánh bán chạy, đơn hủy, bảng theo tháng |
| `qt-tai-khoan.html` | Tài khoản và phân quyền | SCR-022 | Thêm tài khoản, quyền sửa giá, khóa / mở khóa, đổi mật khẩu |
| `qt-cai-dat.html` | Cài đặt vận hành | SCR-023 | Số ngày đặt trước, sức chứa, khung giờ, lịch sức chứa + ngày nghỉ, cọc, ngân hàng / ví / QR, phí giao, email nhận đơn |

Mỗi trang gắn `data-screen="SCR-xxx"` trên `<body>` để truy vết với SRS.

## Tài khoản quản trị thử

Mật khẩu chung: `banhkem123`

| Email | Vai trò | Ghi chú |
|---|---|---|
| `chutiem@tiembanhkem.vn` | Chủ tiệm | Đủ quyền |
| `hoa@tiembanhkem.vn` | Nhân viên | Có quyền sửa giá |
| `vy@tiembanhkem.vn` | Nhân viên | Không sửa giá (thấy ô giá bị khóa ở SCR-017); không thấy Khuyến mãi, Thống kê, Cài đặt |
| `nam@tiembanhkem.vn` | Nhân viên | Tài khoản đã khóa (E-TK-13) |

## Kịch bản trình diễn gợi ý

1. Trang chủ → bấm một bánh → đổi cỡ xem giá đổi → "Đặt bánh này".
2. Đi hết 4 bước (SĐT `0901234567` có 120 điểm để thử "Dùng điểm") → Gửi đơn → confetti.
3. "Tra cứu đơn" → thử hủy đơn vừa đặt.
4. Đăng nhập chủ tiệm → Đơn hàng → bật chuông → "Giả lập đơn mới" → mở đơn → Xác nhận (nhập phí giao) → Ghi nhận cọc → làm bánh → hoàn thành (cộng điểm).
5. Tra cứu đơn `Hoàn thành` (xem dữ liệu thử ở trang Tra cứu) → Đánh giá bánh → vào Quản lý đánh giá để duyệt.

## Công nghệ và cấu trúc

- HTML + Tailwind CSS (CDN) + JavaScript thuần. Không framework, không ES module, không `fetch`.
- Thứ tự nạp script mỗi trang: `mock-data.js` → `layout.js` → `app.js` → script riêng của trang.

```
assets/
  css/custom.css     nút, ô nhập, chip, lịch, skeleton, mép sóng chân trang, giảm chuyển động
  js/mock-data.js    window.MOCK: tiệm, cài đặt, 21 bánh, đánh giá, cảm nhận, bài viết, khuyến mãi, khách quen, 14 đơn, tài khoản, thống kê 90 ngày
  js/layout.js       cấu hình Tailwind (màu, font theo SRS 9.3, 9.4), đầu trang / chân trang / nút nổi Zalo-Gọi, thanh bên / thanh tab quản trị
  js/app.js          Store, DB, Fmt, I18n, Toast, Modal, Lightbox, Cakes, Promo, Reviews, Capacity, Orders, Customers, Auth, Bell, Confetti, UI, Calendar, Uploader, FormUI
```

## Thiết kế

- Design system theo SRS 9.1 → 9.5: hồng phấn `#F4A7B9`, hồng đậm `#C2456A` (nút chính), kem `#FFF6EC`, be `#F3E3D3`, bạc hà `#BDE7D6`, vàng nhạt `#FFF1B8`, chữ `#4A2C35`; tiêu đề **Dancing Script** (chỉ tiêu đề lớn), nội dung **Nunito**; bo góc 12 / 16 / 24 px, nút bo tròn hoàn toàn; bóng ánh hồng.
- Phần quản trị không dùng chữ viết tay, bớt trang trí, dùng tốt trên cả điện thoại (thanh tab dưới) và máy tính (thanh bên).
- Responsive 360 px → 1280 px+; tôn trọng `prefers-reduced-motion` (tắt confetti, thay bằng bánh nhún nhẹ); nhãn trạng thái luôn có chữ; mọi ô nhập có nhãn; hộp thoại giữ tiêu điểm, Esc để đóng.
- Icon: Phosphor (một bộ duy nhất). Logo là logo chữ tạm (tiệm chưa có logo, OI-028).

## Ghi chú: dữ liệu giả và chỗ chưa mô phỏng

- **Dữ liệu giả, chờ xác nhận:** tên tiệm "Tiệm Bánh Kem" (tạm), số điện thoại / Zalo, giờ mở cửa, quận / thành phố của địa chỉ 292/12 Cách Mạng Tháng 8 (OI-005, OI-023); tài khoản ngân hàng, ảnh QR (OI-011); số ngày đặt trước = 2 (OI-001); sức chứa = 10 bánh/ngày (OI-002); tỉ lệ cọc 50% (OI-003); bảng phí giao (OI-004); khung giờ nhận (OI-017); quy tắc điểm 10.000 ₫ = 1 điểm, 1 điểm = 100 ₫ (OI-006); đánh giá mới chờ duyệt (OI-013); câu chữ lời nhắn thành công (OI-032).
- **Ảnh** là ảnh ngẫu nhiên từ picsum.photos, không phải ảnh bánh thật (tiệm sẽ chụp mới, OI-030).
- **Lưu trữ:** mọi thay đổi lưu trong `localStorage` của trình duyệt (có dự phòng bộ nhớ tạm). Ảnh tải lên chỉ xem trước trong phiên, không lưu thật.
- **Chưa mô phỏng:** gửi email (FR-019, chỉ hiện dòng thông báo), kiểm tra đơn mới tự động mỗi 30 giây (thay bằng nút "Giả lập đơn mới"), thanh toán thật, bản đồ khi mất mạng (E-GT-01 chỉ hiện địa chỉ dạng chữ ở khối bên cạnh), chèn ảnh trong trình soạn bài viết, gửi email quên mật khẩu.
- **Song ngữ:** nút VI / EN đổi menu, chân trang, nút, tiêu đề khối, tên bánh, mô tả, câu chuyện, bài viết (thiếu bản EN thì hiện bản VI). Nội dung form đặt bánh và tra cứu đơn mới dịch một phần. Phần quản trị chỉ tiếng Việt.
- Các mục `[ĐỀ XUẤT]` trong SRS (4 bước đặt bánh, sắp xếp, mốc giá, phân trang, xem theo lịch...) được dựng như đề xuất để khách duyệt.
