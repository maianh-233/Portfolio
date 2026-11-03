# BrightPath - Học viện Anh ngữ — Request & SRS tổng quan

EDU-01 · LASA 1000 Themes · Lĩnh vực `06-giao-duc-dao-tao` · Ngày 19/10/2026

## 1. Tổng quan theme

Website template cho trung tâm/học viện tiếng Anh tại Việt Nam. Gồm 3 trang HTML tĩnh (HTML/CSS/Vanilla JS), không backend. Concept: **Confident Modern Learning**. Brand, liên hệ và nội dung là dữ liệu minh họa.

## 2. Mục tiêu kinh doanh

Giúp khách tìm đúng khóa theo mục tiêu và trình độ, hiểu chương trình và phương pháp, rồi để lại yêu cầu tư vấn hoặc gọi/email trực tiếp.

## 3. Đối tượng sử dụng

Học sinh, sinh viên · người đi làm · phụ huynh tìm khóa cho con · người chuẩn bị thi IELTS.

## 4. User stories

- US-01: Là người học, tôi chọn mục tiêu để thấy khóa phù hợp.
- US-02: Là người học, tôi lọc khóa theo trình độ và xem các học phần.
- US-03: Là phụ huynh, tôi xem phương pháp và lộ trình trước khi liên hệ.
- US-04: Là khách, tôi để lại thông tin để được tư vấn.

## 5. Business workflows

Chọn mục tiêu → tìm khóa theo trình độ → xem chương trình và lộ trình → xem phương pháp → đăng ký nhận tư vấn (bản nháp gửi qua email/Zalo hoặc gọi hotline).

## 6. Sitemap 3 trang

| Trang | Nội dung chính |
| --- | --- |
| `web/index.html` | Hero, mục tiêu học, khóa học nổi bật, phương pháp, lộ trình A1→C1, trải nghiệm lớp học, CTA tư vấn |
| `web/pages/about.html` | Giới thiệu, triết lý đào tạo, chu trình buổi học, đội ngũ (minh họa), môi trường học, giá trị, CTA |
| `web/pages/courses.html` | Bộ lọc mục tiêu/trình độ, danh sách khóa + accordion chương trình, lộ trình timeline, hỏi đáp, form tư vấn |

## 7. Functional Requirements (FR)

FR-001 điều hướng 3 trang · FR-002 lọc khóa theo mục tiêu · FR-003 lọc theo trình độ · FR-004 xem chương trình (accordion) · FR-005 xem lộ trình · FR-006 form tư vấn có validation · FR-007 CTA hotline/email hoạt động.

## 8. Business Rules (BR)

- BR-01: Mỗi khóa có tên, mục tiêu, trình độ, mô tả, các học phần.
- BR-02: Không có bài kiểm tra trình độ giả lập.
- BR-03: Không hứa điểm IELTS đầu ra.
- BR-04: Không bịa học phí, lịch khai giảng, chứng chỉ (ghi "tư vấn viên thông tin").
- BR-05: Form không giả lập gửi thành công; chỉ tạo bản nháp để sao chép/tải/gửi email/Zalo.

## 9. Data Requirements

9 khóa mẫu (4 mục tiêu × 4 cấp A1–A2/B1/B2/C1) viết sẵn trong HTML. Form: họ tên*, điện thoại*, email, đối tượng*, mục tiêu*, trình độ, khóa quan tâm, thời gian/kênh liên hệ, ghi chú, đồng ý*. Liên hệ cấu hình tại `assets/js/site-config.js`.

## 10. Non-functional Requirements

100% tiếng Việt, responsive 375/768/1024/1440, chạy được qua `file://`, font/ảnh local, SEO meta + OG, bàn phím, `prefers-reduced-motion`.

## 11. Acceptance Criteria (AC)

- AC-01: Từ mọi trang đều đi tới được 2 trang còn lại.
- AC-02: Lọc theo mục tiêu và trình độ hiển thị đúng khóa, có trạng thái trống.
- AC-03: Bấm "Xem chương trình" thì đóng/mở được danh sách học phần.
- AC-04: Form báo lỗi khi thiếu hoặc sai dữ liệu; khi hợp lệ thì hiện bản nháp kèm câu "chưa được gửi đi".
- AC-05: Link tel/mailto/Zalo đúng; không có link hỏng hay ảnh lỗi.

## 12. Traceability Matrix

| FR | AC | Trang |
| --- | --- | --- |
| FR-001 | AC-01 | cả 3 |
| FR-002, FR-003 | AC-02 | index, courses |
| FR-004 | AC-03 | courses |
| FR-005 | AC-01 | index, courses |
| FR-006 | AC-04 | courses |
| FR-007 | AC-05 | cả 3 |

## 13. Design Blueprint

Bản v2 (19/10/2026), làm lại theo góp ý "trông AI, không tự nhiên, chưa giống reference": bố cục kiểu tổ chức giáo dục, tham khảo cấu trúc British Council, không chép giao diện.

- **Màu:** Navy `#173D70`, Academic Blue `#2674C8`, Warm Yellow `#F4CC58`, trắng, Soft Gray `#F4F7FB`.
- **Font:** Be Vietnam Pro (WOFF2 local), tiêu đề weight 600–700, lead weight 300.
- **Header:** thanh tiện ích, dải navy chứa logo + hotline + nút pill vàng, menu dạng tab (tab đang mở màu vàng). Mobile: thanh "Menu" full width. Đổi so với blueprint gốc (header pill nổi) cho giống reference.
- **Bố cục trang:** breadcrumb, H1 có gạch vàng ngắn, cột nội dung kèm sidebar "Trong trang này" (mobile thu gọn thành nút).
- **Hero:** split giữa chữ và ảnh lớp học, ảnh có khối hình học (thanh vàng, khối navy, chấm tròn xanh).
- **Button:** pill 999px có mũi tên trong vòng tròn; link phụ có gạch chân chạy.
- **Khóa học:** dạng hàng trong bảng (tên + nhãn trình độ, mô tả, đối tượng, "Xem chương trình" + tab màu theo mục tiêu), bấm để mở accordion học phần.
- **Lộ trình:** trang chủ dùng thanh accordion theo cấp độ, trang Khóa học dùng timeline dọc. Phương pháp dùng ảnh + danh sách.
- **Motion:** fade nhẹ khi cuộn, đường timeline chạy theo cuộn; tắt khi reduced motion.

## 14. Reference URLs

- https://www.britishcouncil.vn/en/english-courses/adults, `/adults/levels`, `/adults/classes/programmes-pricing` (đã chụp màn hình bằng trình duyệt ngày 19/10/2026): học cách tổ chức header tab, sidebar "In this section", danh sách khóa dạng bảng chia nhóm, accordion cấp độ CEFR, panel tư vấn. Không sao chép logo, hình khối, nội dung hay mã nguồn.
- Ảnh: Unsplash (Unsplash License), các ID `photo-1571260899304`, `1522202176988`, `1543269865`, `1552664730`, `1513258496099`, `1434030216411`, `1524178232363`, `1556761175`, `1521737604893`, `1488190211105`. Chưa ghi được tên tác giả.
- Font: Google Fonts, SIL OFL 1.1 (`web/assets/fonts/OFL.txt`).

## 15. Những chức năng ngoài phạm vi

Gửi form lên máy chủ, đăng ký/giữ chỗ, thanh toán học phí, bài kiểm tra trình độ, đăng nhập học viên, lịch khai giảng thật.

## 16. Kết quả kiểm tra bàn giao

Chạy lại sau khi làm bản v2, ngày 19/10/2026, Chromium headless (Playwright).

| Hạng mục | Kết quả |
| --- | --- |
| Checker bàn giao (cấu trúc, info.json, docs, 3 trang × 375/768/1024/1440, assets, console, link, SEO, `file://`, menu mobile, Tab, reduced motion, tắt JS, thumb 16:9) | 88/88 đạt |
| Tương tác (tab mục tiêu, lọc bằng select + URL, trạng thái trống, accordion bằng bàn phím, link lộ trình, chọn sẵn khóa vào form, validation, bản nháp, mailto chỉ kiểm URL, bản nháp lỗi thời, tải .txt, điều hướng `file://`) | 21/21 đạt |
| Visual QA 1440 + 375 cả 3 trang | Đã xem ảnh; đã chỉnh logo trên nền navy, cụm chấm tròn che ảnh, mục lục bên đánh dấu sai mục |

**Chưa kiểm:** Safari/Firefox, thiết bị thật, trình đọc màn hình.

**Còn thiếu từ đơn vị:** tên tác giả (`info.json`), liên hệ thật (`site-config.js` và HTML), tên tác giả ảnh Unsplash, ảnh cơ sở thật, học phí, lịch khai giảng.
