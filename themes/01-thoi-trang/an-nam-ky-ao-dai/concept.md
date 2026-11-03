# Brief website — An Nam Ký Test

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website thương hiệu thời trang áo dài Việt Nam
- **Tên thương hiệu / dự án:** **An Nam Ký Test** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Xây dựng nhận diện thương hiệu
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Minimal / Premium / Editorial** — BA chọn. Áp dụng thật vào bố cục, chữ, màu, ảnh, khoảng trắng, thành phần giao diện và hiệu ứng.
- Mức chuyển động: **Level 1 — Basic** — BA chọn. Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA yêu cầu: «#7A1F2B, kem và xanh rêu» — **ưu tiên tuyệt đối**, thay bảng màu preset. Mã HEX dùng đúng mã; tên / mô tả màu → chọn giá trị HEX cụ thể sát nghĩa nhất.
- Tự dựng thêm màu bổ trợ (nền, chữ, viền, trạng thái) hài hòa. Chữ trên nền đạt tương phản WCAG AA (≥ 4.5:1 thân bài, ≥ 3:1 chữ lớn).
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA yêu cầu font: «Playfair Display» — dùng đúng font này, **không tự đổi** nếu font dùng được.
  - Tool kiểm tra: `Playfair Display`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Thiếu ký tự / không có trên Google Fonts → vẫn đặt font BA yêu cầu đầu tiên trong `font-family`, ngay sau là fallback `"Be Vietnam Pro"` (nạp từ Google Fonts) rồi `system-ui, "Segoe UI", Roboto, Arial, sans-serif` — ký tự thiếu sẽ hiển thị bằng fallback. Ghi quyết định vào `adjustments`.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

| # | Section (id danh mục) | Gợi ý vị trí | Mô tả của BA (nguyên văn) |
|---|---|---|---|
| 1 | About / Câu chuyện thương hiệu (`story`) | Trang About riêng + đoạn giới thiệu ngắn trên trang chủ | Kể về quá trình hình thành thương hiệu và cảm hứng từ văn hóa Việt Nam. |
| 2 | Collections / Bộ sưu tập (`collections`) | Trang Collections + trang chi tiết bộ sưu tập | _(trống — AI tự xây dựng nội dung, bố cục, ảnh)_ |
| 3 | Contact / Liên hệ (`contact`) | Trang Contact riêng | _(trống — AI tự xây dựng nội dung, bố cục, ảnh)_ |

- Đây là định hướng **ưu tiên**: phân bổ vào đúng trang (không dồn hết vào trang chủ); section nào cần trang riêng / trang chi tiết thì tạo route riêng.
- Section có mô tả của BA → làm đúng mô tả đó. Section không hợp mục đích website → điều chỉnh / bỏ và ghi lý do vào `adjustments`.
- Chỉ thêm section BA không chọn khi cần cho trang trọn vẹn (header, footer, CTA cuối trang…); không tạo nội dung trùng lặp giữa các trang.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 117 ký tự, 3 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
Website chỉ giới thiệu thương hiệu, không có mua hàng.
Ưu tiên nhiều khoảng trắng.
YÊU CẦU CUỐI: không dùng gradient.
~~~

## Preset

### Preset: Minimal / Premium / Editorial (`editorial`)
Như tạp chí in: chữ lớn, lưới chặt, rất ít màu.

**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `paper` #F5F3EF · `ink` #111111 · `stone` #D9D4CB · `muted` #6B6760 · `bronze` #8C6A43
**Font** (Google Fonts): display `Instrument Serif:ital@0;1` · body `Geist:wght@300;400;500;600`

**Chữ**
- Tiêu đề Instrument Serif cực lớn (đến 10rem ở 2xl), một phần in nghiêng; tracking-tight.
- Thân Geist 16px; nhãn chữ hoa 11px tracking-[0.2em]; số trang / số mục kiểu tạp chí (No. 01).
**Bố cục**
- Lưới 12 cột với đường kẻ mảnh (border-ink/15) chia khối; căn trái tuyệt đối.
- Hero chữ là chính (`hero-type`), ảnh nhỏ đặt lệch; ảnh lớn xuất hiện ở section sau như trang đôi tạp chí.
- Không thẻ có bóng đổ; phân tách bằng đường kẻ và khoảng trắng.
**Ảnh**
- Ảnh studio / kiến trúc, nền trơn, nhiều khoảng trống; có thể đen trắng (`grayscale`) với 1 ảnh màu làm điểm nhấn.
**Khoảng trắng:** Rất rộng nhưng có kỷ luật: lề cố định, khối căn theo lưới.
**Chuyển động mặc định:** Level 1 — Basic
- Chỉ `data-reveal="fade"`/`"up"`, `data-reveal="clip"` cho 1–2 ảnh lớn, `data-split="words"` cho 1 tiêu đề.
- Hover: gạch chân chạy, ảnh phóng chậm 1.04. Không particles / clouds / tilt / cursor.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-type` → `story-editorial` → `gallery-lookbook` → `features-numbered` → `quote-full` → `cta-type` → `footer-big`
**Tránh:** bo góc lớn; bóng đổ; nhiều màu; icon trang trí
