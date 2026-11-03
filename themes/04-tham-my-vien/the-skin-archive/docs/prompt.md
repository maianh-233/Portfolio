# Prompt đã dùng — THE SKIN ARCHIVE

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
# Brief website — THE SKIN ARCHIVE

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website thẩm mỹ viện
- **Tên thương hiệu / dự án:** **THE SKIN ARCHIVE** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu THE SKIN ARCHIVE, một cơ sở chăm sóc da và thẩm mỹ với cách tiếp cận dựa trên sự tìm hiểu, theo dõi và chăm sóc làn da có hệ thống.

Art direction: Retro Medical Archive. Sử dụng kem cũ, burgundy, nâu mực và xanh xám. Kết hợp typography serif cổ điển với sans-serif hiện đại, nhãn hồ sơ, số hiệu, đường kẻ mảnh và hình ảnh có chất liệu tư liệu. Không sử dụng phong cách luxury hoặc giao diện spa thông thường.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **English — Tiếng Anh** → `<html lang="en">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Anh: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Vintage / Retro / Film** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 2 — Atmospheric** (mặc định của preset). Được dùng: thêm `data-split`, `data-reveal="clip"`, `data-reveal-stagger`, `data-parallax` ≤ 0.2, marquee, kéo ngang; atmos.js: `data-float`, `data-gradient-shift`, `data-clouds` / `data-particles` ở **một** section trên mỗi trang.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Young Serif:wght@400`, body `Work Sans:wght@400;500;700`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Young Serif`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Tool kiểm tra font preset: `Work Sans`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Tool kiểm tra font preset: `Courier Prime`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Font nào thiếu ký tự tiếng Anh → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Inter` / `Source Serif 4`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 927 ký tự, 11 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
Ba trang chính:

Trang chủ: Hero giống trang bìa một hồ sơ lưu trữ, giới thiệu triết lý thương hiệu, các nhóm dịch vụ và quy trình tìm hiểu nhu cầu da.

Dịch vụ thẩm mỹ & Bảng giá: Trình bày các nhóm dịch vụ dưới dạng danh mục hồ sơ, mỗi mục có mã số minh họa, mô tả, mục đích, thông tin cần biết và giá tham khảo nếu có dữ liệu. Mã số chỉ phục vụ thiết kế, không giả làm mã hồ sơ y tế thật.

Về chúng tôi: Câu chuyện thương hiệu, đội ngũ, không gian và quy trình tư vấn được trình bày như một bộ tư liệu có cấu trúc.

Có công tắc ngôn ngữ Việt – English và nội dung song ngữ đầy đủ. Nút “Đặt lịch tư vấn / Book a Consultation” mở form, xuất hiện tại header, cuối trang và nút nổi trên điện thoại.

Website chỉ giới thiệu dịch vụ, không bán hàng. Không tự tạo hồ sơ bệnh nhân, ảnh trước–sau giả, dữ liệu điều trị hoặc chứng nhận. Thiết kế phải tạo cảm giác tư liệu độc đáo nhưng không làm khách nhầm lẫn với hồ sơ bệnh án thật.
~~~

## Preset

### Preset: Vintage / Retro / Film (`film`)
Hạt phim, màu phai, nhãn đánh máy — hoài niệm có chủ đích.

**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `cream` #EFE6D2 · `ink` #2A211B · `faded-red` #B4442F · `mustard` #D9A441 · `teal` #2F6F6A · `paper` #F7F1E3
**Font** (Google Fonts): display `Young Serif:wght@400` · body `Work Sans:wght@400;500;700` · nhãn `Courier Prime:wght@400;700`

**Chữ**
- Tiêu đề Young Serif, cỡ lớn, có thể đặt trong khung viền kép như nhãn đĩa than.
- Nhãn / chú thích Courier Prime (đánh máy): số khung "FR. 24A", ngày tháng, giá.
**Bố cục**
- Ảnh khung polaroid / dải phim có lỗ (border-dashed), xoay nhẹ ±2° (`rotate-[-2deg]`).
- Khối màu phẳng (mustard, teal, faded-red) cắt ngang trang; đường kẻ đôi.
- Lớp hạt phim phủ toàn trang: một `<div>` fixed `pointer-events-none` với nhiễu bằng SVG feTurbulence, opacity .08.
**Ảnh**
- Ảnh thật tông ấm, phai: `sepia-[.25] saturate-[.85] contrast-[1.05]`; khung viền trắng dày.
**Khoảng trắng:** Vừa phải, nhịp dày hơn editorial; khối xếp chồng như sổ lưu niệm.
**Chuyển động mặc định:** Level 2 — Atmospheric
- `data-reveal="up"` + `data-reveal-stagger` cho ảnh polaroid, `data-float` rất nhẹ cho 1 ảnh xoay.
- `data-marquee` cho dải chữ kiểu băng rôn; `data-drag-scroll` cho dải phim.
- Không particles kiểu lấp lánh; không blur.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-offset` → `story-letter` → `gallery-filmstrip` → `features-alternate` → `stats-band` → `cta-fullbleed` → `footer-minimal`
**Được phép (ghi đè layout-guide mục 3):** hạt nhiễu SVG feTurbulence làm lớp phủ; ảnh xoay nhẹ
**Tránh:** gradient hiện đại; glassmorphism; font sans hình học
~~~~
