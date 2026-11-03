# Brief website — LUMIÈRE

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website portfolio cá nhân
- **Tên thương hiệu / dự án:** **LUMIÈRE** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Xây dựng một landing page portfolio dành cho nhiếp ảnh gia chuyên nghiệp.

Website phải khiến người xem cảm nhận được phong cách nghệ thuật của tác giả ngay từ màn hình đầu tiên.

Hình ảnh là yếu tố chính. Chữ, nút bấm và các chi tiết giao diện chỉ đóng vai trò hỗ trợ.

Đối tượng:

Khách hàng cá nhân.

Thương hiệu thời trang.

Tạp chí.

Đơn vị tổ chức sự kiện.

Đối tác sáng tạo.

Nhà tuyển dụng trong lĩnh vực hình ảnh.
- **Đối tượng khách truy cập:** BA không ghi — tự suy ra từ chủ đề, mục đích (ảnh hưởng giọng văn, hình ảnh, CTA).
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Art Gallery** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** (mặc định của preset). Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Cormorant Garamond:ital,wght@0,400;0,600;1,400`, body `Montserrat:wght@400;500`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Cormorant Garamond`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Montserrat`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 4.911 ký tự, 222 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
# MASTER PROMPT — LUMIÈRE
## Thiết kế landing page Portfolio & CV cho nhiếp ảnh gia

### 1. MỤC TIÊU

Xây dựng một landing page portfolio dành cho nhiếp ảnh gia chuyên nghiệp.

Website phải khiến người xem cảm nhận được phong cách nghệ thuật của tác giả ngay từ màn hình đầu tiên.

Hình ảnh là yếu tố chính. Chữ, nút bấm và các chi tiết giao diện chỉ đóng vai trò hỗ trợ.

Đối tượng:
- Khách hàng cá nhân.
- Thương hiệu thời trang.
- Tạp chí.
- Đơn vị tổ chức sự kiện.
- Đối tác sáng tạo.
- Nhà tuyển dụng trong lĩnh vực hình ảnh.

### 2. ART DIRECTION

Phong cách:
Fine Art Photography Gallery.

Bảng màu:
- Đen sâu: #101010.
- Xám than: #1A1A1A.
- Trắng ngà: #F3F0E9.
- Xám phụ: #9B9B9B.

Typography:
- Tiêu đề: Cormorant Garamond hoặc serif thanh lịch.
- Nội dung: Inter.
- Nhãn ảnh: sans-serif cỡ nhỏ.

Không sử dụng quá nhiều card, border bo tròn hoặc màu sắc rực rỡ.

Ưu tiên hình ảnh có bố cục điện ảnh, ánh sáng tốt và màu sắc nhất quán.

### 3. HEADER

Thiết kế header tối giản.

Bên trái:
LUMIÈRE — tên thương hiệu.

Ở giữa hoặc bên phải:
- PORTFOLIO.
- ABOUT.
- EXPERIENCE.
- CONTACT.

Có thể bổ sung nhãn:
PHOTOGRAPHER / VISUAL ARTIST.

Header trong suốt ở đầu trang, chuyển sang nền tối khi cuộn.

### 4. HERO — FULL-SCREEN PHOTOGRAPHY

Màn hình đầu tiên sử dụng một bức ảnh nổi bật chiếm gần toàn bộ chiều rộng và chiều cao.

Ảnh phải có khả năng làm nền mà không khiến chữ khó đọc.

Có thể sử dụng:
- Ảnh chân dung nghệ thuật.
- Ảnh thời trang.
- Ảnh phong cảnh điện ảnh.
- Ảnh đời sống mang tính kể chuyện.

Đặt tên nhiếp ảnh gia ở một vị trí có chủ đích, không nhất thiết căn giữa.

Hiển thị:
- Photographer / Visual Storyteller.
- Một câu mô tả phong cách sáng tác.
- Nút Explore Portfolio.
- Chỉ báo cuộn xuống.

Không tự động phát video hoặc âm thanh.

### 5. SELECTED SERIES — BỘ SƯU TẬP ẢNH

Chia thành các series độc lập.

Ví dụ:
01 — HUMAN STORIES.
02 — FASHION & FORM.
03 — PLACES & LIGHT.
04 — EVERYDAY MOMENTS.

Mỗi series có:
- Ảnh bìa.
- Tên series.
- Năm thực hiện.
- Thể loại.
- Mô tả ngắn.
- Số lượng ảnh nếu có dữ liệu.

Không trình bày các series theo cùng một kích thước.

Có thể dùng:
- Ảnh ngang toàn chiều rộng.
- Cặp ảnh dọc.
- Gallery dạng masonry.
- Một ảnh lớn kết hợp các ảnh nhỏ.

Mục tiêu là tạo nhịp điệu như một triển lãm nhiếp ảnh thực tế.

### 6. IMAGE VIEWER

Khi người dùng nhấn vào ảnh, mở lightbox trên cùng trang.

Chức năng:
- Hiển thị ảnh lớn.
- Nút ảnh trước và ảnh tiếp theo.
- Đóng bằng nút Close hoặc phím Escape.
- Hiển thị chú thích nếu có.
- Hỗ trợ bàn phím.
- Khóa cuộn nền khi lightbox mở.
- Trả lại vị trí cuộn khi đóng.

Trên mobile:
- Cho phép chạm để chuyển ảnh.
- Nút đóng dễ nhìn.
- Không để ảnh vượt quá màn hình.

Đây là tương tác nằm trong landing page, không tạo trang gallery riêng.

### 7. PHOTOGRAPHER STATEMENT

Thiết kế một section nền sáng để tạo tương phản với gallery tối.

Tiêu đề:
"Photography is a way of paying attention."

Bên dưới:
- Tiểu sử.
- Quan điểm sáng tác.
- Nguồn cảm hứng.
- Cách tiếp cận ánh sáng, con người và không gian.

Bố cục gồm một ảnh chân dung nhỏ và một đoạn giới thiệu khoảng 100–150 từ.

### 8. EXPERIENCE & SELECTED CLIENTS

Hiển thị:
- Kinh nghiệm làm việc.
- Các dự án đã tham gia.
- Triển lãm.
- Tạp chí hoặc thương hiệu từng cộng tác.
- Giải thưởng nếu có.

Chỉ sử dụng dữ liệu thật hoặc nội dung minh họa được đánh dấu.

Không tạo logo thương hiệu giả để gây hiểu nhầm về khách hàng.

### 9. SKILLS & EQUIPMENT

Các nhóm:
- Portrait Photography.
- Fashion Photography.
- Documentary Photography.
- Lighting.
- Color Grading.
- Photo Editing.

Phần thiết bị chỉ xuất hiện nếu phù hợp với mục tiêu cá nhân.

Không cần biến section này thành danh sách dài các mẫu máy ảnh.

### 10. CV & CONTACT

Hiển thị phần CV gồm:
- Học vấn.
- Kinh nghiệm.
- Workshop hoặc chương trình chuyên môn.
- Thành tích.
- Dự án nổi bật.

Nút Download CV chỉ hoạt động khi có tệp thật.

Phần liên hệ:
- Email.
- Instagram hoặc nền tảng portfolio phù hợp.
- Địa điểm làm việc.
- Nút Inquire About a Project.

### 11. HIỆU ỨNG

- Ảnh xuất hiện nhẹ khi cuộn.
- Zoom ảnh rất nhỏ khi hover.
- Chuyển cảnh fade giữa các ảnh.
- Gallery không tải toàn bộ ảnh độ phân giải lớn cùng lúc.
- Sử dụng lazy loading cho ảnh bên dưới màn hình đầu tiên.

Không sử dụng hiệu ứng khiến ảnh bị méo, đổi màu hoặc mất chất lượng.

### 12. RESPONSIVE

Desktop:
- Hình ảnh lớn.
- Gallery tự do.
- Typography thanh lịch.

Tablet:
- Điều chỉnh số cột.
- Giữ tỷ lệ ảnh.

Mobile:
- Một cột hoặc hai ảnh nhỏ cạnh nhau khi phù hợp.
- Ưu tiên ảnh dọc.
- Không yêu cầu hover.
- Tối ưu thời gian tải.

### 13. NGHIỆM THU

Tạo một landing page duy nhất, có khả năng thay thế ảnh và thông tin cá nhân.

Không tạo chức năng bán ảnh, đặt hàng hoặc thanh toán.

Không sử dụng ảnh mờ, ảnh lặp lại hoặc ảnh không phù hợp với chủ đề.

Kết quả phải giống một triển lãm nhiếp ảnh trực tuyến có tính nghệ thuật, không giống một website doanh nghiệp thông thường.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Nhà hàng / quán cà phê** (`recipe:restaurant-cafe`, chưa đánh giá): Hero-cinematic hoặc hero-offset → story-letter → menu dạng features-numbered / tabs → gallery-filmstrip → contact-split (giờ mở cửa, bản đồ, đặt bàn = bản demo).

**Bố cục gợi ý**
- **Thư viện masonry** (`composition:gallery-masonry`, chưa đánh giá, đã dùng 4 lần): `columns-1 sm:columns-2 lg:columns-3`, ảnh `data-lightbox`.
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 1 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 12 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 10 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.

**Tránh lặp:** các website dựng gần đây đã dùng `hero-full-slider`, `features-bento`, `cta-type`, `hero-type`, `gallery-lookbook`, `features-tabs`, `hero-split`, `features-numbered`, `hero-slider` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Art Gallery (`gallery`)
Hình ảnh lớn như phòng triển lãm — tác phẩm là trung tâm.

**Hợp với:** phòng tranh, nhiếp ảnh gia, nghệ sĩ, bảo tàng / triển lãm
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `wall` #F7F6F3 · `ink` #0E0E0E · `gray` #8A8780 · `line` #E2DFD8 · `accent` #9C2F2F
**Font** (Google Fonts): display `Cormorant Garamond:ital,wght@0,400;0,600;1,400` · body `Montserrat:wght@400;500`

**Thành phần giao diện**
- Nút chữ + mũi tên; không thẻ
- Đường kẻ mảnh; ảnh góc vuông
**Chữ**
- Tiêu đề Cormorant lớn; tên tác phẩm in nghiêng; nhãn Montserrat chữ hoa 11px như nhãn tường bảo tàng (tác giả · năm · chất liệu).
**Bố cục**
- Ảnh chiếm phần lớn khung, khoảng trắng quanh như vách trưng bày; nhãn tác phẩm nhỏ cạnh ảnh.
- Lightbox cho mọi tác phẩm; điều hướng tối giản, không che ảnh.
**Ảnh**
- Ảnh tác phẩm / chân dung nghệ sĩ / không gian triển lãm — không phủ màu, không lọc làm sai tác phẩm.
**Khoảng trắng:** Rất rộng quanh ảnh.
**Chuyển động mặc định:** Level 1 — Basic
- `data-reveal="clip"` cho ảnh, `data-lightbox`; `data-cursor-label="Xem"` trên ảnh tác phẩm.
- Không particles / parallax / tilt.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-type` → `gallery-lookbook` → `gallery-masonry` → `story-editorial` → `quote-full` → `cta-type` → `footer-minimal`
**Được phép (ghi đè layout-guide mục 3):** con trỏ có nhãn "Xem" trên ảnh tác phẩm
**Tránh:** lớp phủ màu lên tác phẩm; bo góc ảnh; hiệu ứng che tác phẩm
