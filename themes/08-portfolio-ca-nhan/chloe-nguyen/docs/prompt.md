# Prompt đã dùng — Chloe Nguyen

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
# Brief website — Chloe Nguyen

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website portfolio cá nhân
- **Tên thương hiệu / dự án:** **Chloe Nguyen** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** BA không ghi — tự suy ra từ chủ đề và các mục dưới, ghi suy luận vào `_build/sitemap.json` (`purposeInferred`).
- **Đối tượng khách truy cập:** BA không ghi — tự suy ra từ chủ đề, mục đích (ảnh hưởng giọng văn, hình ảnh, CTA).
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Editorial / Magazine** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** (mặc định của preset). Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Noto Serif Display:ital,wght@0,400;1,400`, body `Geist:wght@300;400;500;600`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Noto Serif Display`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Geist`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 7.731 ký tự, 271 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
Thiết kế một landing page portfolio cá nhân cho **Chloe Nguyen**, một chuyên viên tổ chức đám cưới hiện đại và Creative Director.

### 1. Mục tiêu

Đây là portfolio của một cá nhân, không phải website công ty tổ chức sự kiện.

Website cần giới thiệu:
- Chân dung và thương hiệu cá nhân.
- Phong cách thiết kế và tư duy sáng tạo.
- Các dự án cưới hiện đại tiêu biểu.
- Quy trình phát triển concept.
- Kinh nghiệm làm việc, kỹ năng và học vấn.
- Thông tin liên hệ và CV.

Sử dụng dữ liệu giả định để tạo nội dung demo hoàn chỉnh.

### 2. Phong cách thiết kế

Phong cách: Modern Luxury × Fashion Editorial × Contemporary Wedding Design.

Bảng màu:
- Trắng ngà `#FAF9F6`.
- Be cát `#E7DFD4`.
- Đen than `#242424`.
- Xám đá `#B9B5AF`.
- Xanh olive `#737B68`.

Typography:
- Heading: Cormorant Garamond hoặc Playfair Display.
- Body: Inter.

Thiết kế cần giống portfolio của một người làm sáng tạo, sử dụng ảnh lớn, bố cục bất đối xứng, khoảng trắng rộng và typography có tính biên tập.

Không thiết kế giống website dịch vụ cưới thông thường.

### 3. Header

Tên cá nhân: CHLOE NGUYEN.

Chức danh nhỏ: WEDDING PLANNER & CREATIVE DIRECTOR.

Menu:
HOME · ABOUT · SELECTED WORK · EXPERIENCE · CONTACT.

CTA: VIEW CV.

Header tối giản, không dùng quá nhiều đường viền hoặc hiệu ứng.

### 4. Hero

Tạo một hero có chất lượng hình ảnh như bìa tạp chí thời trang cao cấp.

Sử dụng ảnh không gian cưới hiện đại với kiến trúc ấn tượng, hoa nghệ thuật, bàn tiệc tối giản và ánh sáng tự nhiên.

Kết hợp với một ảnh chân dung editorial của Chloe.

Nội dung:

**CHLOE NGUYEN**

Modern Wedding Planner & Creative Director.

**“Creating Celebrations That Feel Entirely Your Own.”**

“I bring together thoughtful planning, contemporary aesthetics, and personal storytelling to create wedding experiences with a distinctive point of view.”

CTA:
- EXPLORE MY WORK.
- ABOUT ME.

Không dùng hero chia đôi theo kiểu website doanh nghiệp thông thường. Hãy tạo bố cục có chiều sâu và điểm nhấn hình ảnh rõ ràng.

### 5. About Me

Tiêu đề: “I See Every Wedding as a Creative Story.”

Nội dung mẫu:

“I approach wedding planning through the lens of design, atmosphere, and human connection. From the first moodboard to the final detail, I enjoy turning ideas into carefully considered experiences that reflect the people behind them.”

Giới thiệu Chloe là một Wedding Planner có 6 năm kinh nghiệm giả định.

Các thế mạnh:
- Creative direction.
- Concept development.
- Visual storytelling.
- Event planning.
- Spatial styling.
- Guest experience.

Bố cục kết hợp ảnh cá nhân, đoạn giới thiệu ngắn và các chú thích editorial.

### 6. Selected Work

Tiêu đề: “A Collection of Celebrations.”

Tạo ba dự án giả định có phong cách hình ảnh khác nhau.

**PROJECT 01 — THE ART OF STILLNESS**

- Concept: Minimalist Architectural Wedding.
- Location: Ho Chi Minh City.
- Guest count: 90.
- Palette: Ivory, stone gray, champagne.
- Nội dung: Một đám cưới hiện đại với hình khối tối giản, hoa trắng có cấu trúc, bàn tiệc dài và ánh sáng được tính toán cẩn thận.
- Vai trò: Creative direction, concept development, event layout, styling.

**PROJECT 02 — AFTERGLOW**

- Concept: Contemporary Garden Wedding.
- Location: Da Lat.
- Guest count: 65.
- Palette: Sage green, ivory, dusty rose.
- Nội dung: Đám cưới ngoài trời với hoa tự nhiên, ánh sáng cuối ngày, bàn tiệc linen và không gian thân mật.
- Vai trò: Moodboard, floral direction, guest experience, event-day coordination.

**PROJECT 03 — SOMEWHERE, TOGETHER**

- Concept: Destination Wedding.
- Location: Bali, Indonesia.
- Guest count: 40.
- Palette: Sand, warm white, terracotta.
- Nội dung: Lễ cưới quy mô nhỏ, không gian mở, chất liệu tự nhiên và trải nghiệm gần gũi với thiên nhiên.
- Vai trò: Concept development, destination planning, vendor coordination, timeline.

Đây đều là dự án hư cấu dùng để minh họa thiết kế.

### Cách trình bày dự án

Không dùng lưới card đồng nhất.

- Dự án 01: Ảnh kiến trúc lớn và typography mạnh.
- Dự án 02: Collage hình ảnh hoa, ánh sáng và chi tiết bàn tiệc.
- Dự án 03: Ảnh toàn cảnh kết hợp nội dung dự án theo phong cách editorial.

Mỗi dự án cần có:
- Tên.
- Concept.
- Địa điểm.
- Quy mô.
- Vai trò cá nhân.
- Mô tả ngắn về ý tưởng và quá trình thực hiện.

Khi chọn dự án, mở nội dung chi tiết ngay trong landing page bằng lightbox hoặc panel.

### 7. Creative Expertise

Tiêu đề: “The Thinking Behind the Details.”

Trình bày bốn nhóm năng lực:

**CREATIVE DIRECTION**
Phát triển concept, moodboard và ngôn ngữ hình ảnh.

**SPATIAL STYLING**
Sắp đặt không gian, hoa, bàn tiệc, vật liệu và ánh sáng.

**EVENT PLANNING**
Quản lý timeline, công việc chuẩn bị và phối hợp nhà cung cấp.

**GUEST EXPERIENCE**
Thiết kế hành trình trải nghiệm và tạo sự nhất quán cho toàn bộ sự kiện.

Dùng hình ảnh, typography và đường phân cách tinh tế. Không sử dụng icon doanh nghiệp đại trà.

### 8. Work Experience

Tạo timeline nghề nghiệp giả định.

**2022–Present — Independent Wedding Planner & Creative Director**
- Phát triển concept cho các dự án cưới hiện đại.
- Xây dựng moodboard và creative direction.
- Phối hợp đội ngũ trang trí và nhà cung cấp.
- Quản lý timeline và điều phối ngày cưới.

**2020–2022 — Event Designer, Atelier Events**
- Hỗ trợ phát triển concept sự kiện.
- Chuẩn bị tài liệu thiết kế và moodboard.
- Phối hợp đội ngũ trang trí.
- Hỗ trợ triển khai sự kiện.

**2019–2020 — Event Planning Assistant, The Modern Collective**
- Hỗ trợ lập kế hoạch.
- Chuẩn bị checklist.
- Phối hợp với nhà cung cấp.
- Kiểm tra công tác chuẩn bị.

### 9. Education & Certifications

- Bachelor of Event Management — Saigon Creative Institute, 2019.
- Certificate in Event Design & Styling — chương trình đào tạo giả định, 2021.

Tất cả dữ liệu là nội dung mẫu phục vụ demo.

### 10. Selected Highlights

Trình bày bằng typography lớn:
- 24+ Wedding Concepts Developed.
- 6 Years of Experience.
- 3 Signature Design Directions.

Đây là số liệu hư cấu, không phải thành tích đã được xác minh.

Không tạo biểu đồ doanh thu hoặc KPI kinh doanh.

Nếu các con số làm thiết kế quá giống website doanh nghiệp, hãy thay bằng danh sách dự án hoặc hình ảnh.

### 11. Contact

Tiêu đề:

**“Have a Vision in Mind?”**

Nội dung:

“I'd love to hear about your ideas, creative collaborations, or professional opportunities.”

Thông tin mẫu:
- Email: chloe.nguyen@example.com.
- Location: Ho Chi Minh City, Vietnam.
- LinkedIn: hồ sơ demo.
- Instagram: hồ sơ demo.

Có nút EMAIL ME và DOWNLOAD CV.

Nếu không có backend, không giả lập thông báo gửi form thành công.

### 12. Footer

CHLOE NGUYEN.

Modern Wedding Planner & Creative Director.

Navigation, email, social links và copyright.

Câu kết:
“Thoughtfully designed. Beautifully remembered.”

### 13. Hiệu ứng và kỹ thuật

- Image reveal nhẹ khi cuộn.
- Hover tinh tế trên gallery.
- Lightbox chuyển cảnh mượt.
- Typography fade-in.
- Header thay đổi nền khi cuộn.
- Responsive đầy đủ trên desktop, tablet và mobile.
- Tối ưu hình ảnh, hỗ trợ alt text.
- Không có cuộn ngang.
- Không dùng animation quá mức.
- Không thêm ecommerce hoặc thanh toán.
- Tất cả nút và liên kết phải hoạt động đúng.

### 14. Yêu cầu hình ảnh

Ưu tiên:
- Wedding editorial photography.
- Contemporary architecture.
- Sculptural floral arrangements.
- Minimalist tablescapes.
- Natural materials.
- Destination wedding landscapes.
- Modern stationery.
- Candlelit reception.

Ba dự án phải có hình ảnh và màu sắc khác nhau rõ ràng.

Không sử dụng ảnh cưới truyền thống Việt Nam làm ngôn ngữ hình ảnh chủ đạo.

Không tuyên bố ảnh mẫu là ảnh sự kiện thật do Chloe tổ chức.

KẾT QUẢ: Một landing page portfolio cá nhân Wedding Planner hiện đại, giàu tính nghệ thuật, có CV rõ ràng và thể hiện được cả năng lực sáng tạo lẫn khả năng tổ chức sự kiện chuyên nghiệp.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Tổ hợp editorial: hero-type → gallery-lookbook → gallery-masonry…** (`recipe:learned-editorial-mvomj0g8`, bản nháp): Trang chủ: hero-type → gallery-lookbook → gallery-masonry → timeline → features-tabs → features-numbered → story-editorial → cta-type. Ý tưởng thị giác: Trang tạp chí thời trang được dàn trang: tiêu đề Bodoni cực lớn đè lên mép ảnh, đường kẻ mảnh 1px và số trang 'No.' chạy xuyên suốt như các trang đôi của một ấn phẩm in; nền kem xen nền charcoal, burgundy chỉ dùng cho điểm nhấn

**Bố cục gợi ý**
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 12 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 3 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 14 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Hero chia đôi chữ – ảnh** (`composition:hero-split`, chưa đánh giá, đã dùng 5 lần): Chữ 5–6/12 cột trái, ảnh tràn mép phải ở lg+; mobile chữ → ảnh.

**Tránh lặp:** các website dựng gần đây đã dùng `hero-type`, `gallery-lookbook`, `gallery-masonry`, `features-numbered`, `features-tabs`, `cta-type`, `hero-split`, `features-bento`, `cta-fullbleed` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Editorial / Magazine (`editorial`)
Như tạp chí in: chữ lớn, lưới bất đối xứng, rất ít màu.

**Hợp với:** thời trang, tạp chí / xuất bản, kiến trúc, thương hiệu cá nhân
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `paper` #F5F3EF · `ink` #111111 · `stone` #D9D4CB · `muted` #6B6760 · `bronze` #8C6A43
**Font** (Google Fonts): display `Noto Serif Display:ital,wght@0,400;1,400` · body `Geist:wght@300;400;500;600`
_(Đã thay font thiếu dấu tiếng Việt của preset gốc bằng font cùng tinh thần có đủ dấu.)_

**Thành phần giao diện**
- Nút chữ + gạch chân chạy hoặc khung chữ nhật viền 1px, góc vuông
- Không thẻ; phân khối bằng đường kẻ mảnh và số mục "No. 01"
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
