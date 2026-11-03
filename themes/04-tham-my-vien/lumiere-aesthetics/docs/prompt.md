# Prompt đã dùng — LUMIÈRE AESTHETICS

> BA Tool sinh website bằng Claude Agent SDK với skill `srs-builder` (MODE `quick-prototype`, hướng dẫn trong `references/quick-guide.md`) và skill thiết kế `design-taste-frontend`.
> Lệnh gọi skill và toàn bộ brief AI đọc được chép nguyên văn bên dưới.

## 1. Lệnh gọi

```
/srs-builder MODE: quick-prototype
PROJECT_TYPE: website
PROJECT_DIR: <thư mục theme>
TARGET_DIR: <thư mục theme>/web
```

## 2. Brief AI đọc (`concept.md`)

~~~~markdown
# Brief website — LUMIÈRE AESTHETICS

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website thẩm mỹ viện
- **Tên thương hiệu / dự án:** **LUMIÈRE AESTHETICS** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website đa trang giới thiệu thẩm mỹ viện LUMIÈRE AESTHETICS, thuộc lĩnh vực thẩm mỹ y khoa cao cấp.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Minimal / Premium / Editorial** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** — BA chọn. Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Instrument Serif:ital@0;1`, body `Geist:wght@300;400;500;600`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Instrument Serif`: có trên Google Fonts nhưng **THIẾU ký tự tiếng Việt** ✗
  - Tool kiểm tra font preset: `Geist`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 1.142 ký tự, 13 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
Phong cách: Luxury Medical Editorial. Sử dụng trắng ngà, champagne, be sáng và nâu nhạt; typography thanh lịch, bố cục thoáng, hình ảnh phòng khám hiện đại và chân dung chuyên gia chuyên nghiệp.

Ba trang chính:

Trang chủ: Hero chia đôi hình ảnh và nội dung, giới thiệu định hướng thẩm mỹ, các nhóm dịch vụ nổi bật, thế mạnh chuyên môn và lời mời tư vấn.

Dịch vụ thẩm mỹ & Bảng giá: Trình bày các nhóm chăm sóc da, trẻ hóa da, điều trị da và thẩm mỹ không phẫu thuật; mỗi dịch vụ có mô tả, mục đích và giá tham khảo nếu được cung cấp.

Về chúng tôi: Câu chuyện thương hiệu, đội ngũ chuyên gia, cơ sở vật chất, quy trình tư vấn và cam kết an toàn.

Có nút chuyển đổi tiếng Việt – English, toàn bộ nội dung được biên soạn đầy đủ bằng cả hai ngôn ngữ. Nút “Đặt lịch tư vấn / Book a Consultation” mở form nhập họ tên, số điện thoại hoặc email, dịch vụ quan tâm, thời gian mong muốn và ghi chú. Đặt nút ở header, cuối trang và dạng nút nổi trên điện thoại.

Đây là website giới thiệu, không bán hàng, không giỏ hàng, không thanh toán trực tuyến. Tổng thể phải sang trọng, đáng tin cậy, chuẩn ngành thẩm mỹ y khoa, không dùng hiệu ứng phô trương.
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
~~~~
