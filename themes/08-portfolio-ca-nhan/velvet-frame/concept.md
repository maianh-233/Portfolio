# Brief website — VELVET FRAME

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website portfolio cá nhân
- **Tên thương hiệu / dự án:** **VELVET FRAME** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** BA không ghi — tự suy ra từ chủ đề và các mục dưới, ghi suy luận vào `_build/sitemap.json` (`purposeInferred`).
- **Đối tượng khách truy cập:** BA không ghi — tự suy ra từ chủ đề, mục đích (ảnh hưởng giọng văn, hình ảnh, CTA).
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **English — Tiếng Anh** → `<html lang="en">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Anh: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Editorial / Magazine** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** (mặc định của preset). Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Instrument Serif:ital@0;1`, body `Geist:wght@300;400;500;600`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Instrument Serif`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Tool kiểm tra font preset: `Geist`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Font nào thiếu ký tự tiếng Anh → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Inter` / `Source Serif 4`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 8.735 ký tự, 231 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
# VELVET FRAME — FASHION PORTFOLIO & CV

## 1. PROJECT OVERVIEW

Thiết kế một landing page portfolio cá nhân cho **Fashion Designer / Fashion Stylist / Creative Director**.

Mục tiêu: thể hiện gu thẩm mỹ, tư duy sáng tạo, năng lực chuyên môn và kinh nghiệm trong ngành thời trang.

**Art direction:** Luxury Fashion Editorial × Contemporary Fashion Archive × Avant-Garde Minimalism.

Website phải giống một trang editorial của tạp chí thời trang cao cấp, được art-direct có chủ đích. Tránh giao diện CV thông thường, website doanh nghiệp hoặc cửa hàng thời trang.

Chỉ tạo **một landing page duy nhất**, không có trang con, giỏ hàng, mua hàng hoặc thanh toán.

## 2. VISUAL IDENTITY

### Color palette
- Charcoal Black: `#151313`
- Warm Cream: `#F2EADF`
- Burgundy: `#702B3B`
- Chocolate Brown: `#513A32`
- Smoke Grey: `#A7A09A`

Sử dụng màu kem làm nền chủ đạo cho các khu vực editorial; kết hợp nền đen cho những section cần tạo điểm nhấn. Burgundy và nâu chocolate chỉ xuất hiện có chọn lọc.

### Typography
- Headings: Bodoni Moda hoặc serif thời trang tương đương.
- Body: Inter.
- Labels: sans-serif viết hoa, letter-spacing rộng.

Tạo tương phản rõ ràng giữa tiêu đề serif cỡ lớn và nội dung sans-serif tối giản. Có thể sử dụng typography oversized, chữ chạy dọc hoặc chữ đặt chồng lên ảnh khi phù hợp.

### Layout
- Lưới bất đối xứng, khoảng trắng lớn.
- Hình ảnh có nhiều tỷ lệ và kích thước khác nhau.
- Đường kẻ mảnh, caption nhỏ, số thứ tự và nhãn editorial.
- Tránh card bo tròn, bóng đổ nặng, gradient sặc sỡ và bố cục lặp lại.

## 3. HEADER & HERO

### Header
Wordmark: **VELVET FRAME**

Navigation: WORK / ABOUT / AESTHETIC / EXPERIENCE / CONTACT.

Có thể thêm dòng mô tả nhỏ: FASHION DESIGNER / STYLIST / CREATIVE DIRECTION.

Header tối giản, có thể dùng nền trong suốt ở đầu trang và chuyển sang nền đặc khi cuộn nếu phù hợp. Menu phải hoạt động trên desktop và mobile.

### Hero — Fashion Campaign

Tạo phần mở đầu ấn tượng như trang bìa của một fashion editorial.

- Sử dụng một ảnh thời trang chủ đạo chất lượng cao.
- Kết hợp ảnh dọc toàn chiều cao hoặc ảnh ngang lớn với typography bất đối xứng.
- Hiển thị tên cá nhân nổi bật.
- Tagline: **“Clothing as a Form of Expression.”**
- Có chức danh và phần giới thiệu ngắn.
- CTA: “EXPLORE MY WORK” dẫn đến khu vực dự án.

Ảnh và chữ phải có sự tương tác về bố cục nhưng vẫn dễ đọc. Không đặt mọi thành phần vào một hero card thông thường.

## 4. SIGNATURE PROJECTS

Trình bày 4 dự án tiêu biểu:

1. Fashion Collection.
2. Editorial Styling.
3. Campaign Art Direction.
4. Costume / Concept Design.

Mỗi dự án cần có tên concept, năm, vai trò, mục tiêu sáng tạo, mô tả ngắn và hình ảnh thể hiện kết quả.

Có thể bổ sung moodboard, chất liệu, kỹ thuật, đội ngũ cộng tác hoặc ghi chú hậu trường nếu có dữ liệu.

**Bố cục phải đa dạng:** một dự án dùng ảnh dọc lớn, một dự án dùng ảnh ngang toàn chiều rộng, một dự án dùng bộ ba ảnh và một dự án kết hợp moodboard với chú thích.

Không hiển thị bốn dự án theo cùng một kiểu card. Tạo cảm giác như đang xem một bộ sưu tập editorial được tuyển chọn kỹ lưỡng.

Nếu có thể, cho phép nhấp vào dự án để mở phần chi tiết dạng accordion hoặc overlay ngay trên trang, không tạo trang con.

## 5. MOODBOARD & AESTHETIC

Tạo một section thể hiện ngôn ngữ thẩm mỹ riêng của nhà thiết kế.

Bao gồm:
- Color Palette.
- Fabric & Texture.
- Silhouette.
- Reference Images.
- Concept Notes.

Sử dụng ảnh vải, đường may, nếp gấp, chi tiết trang phục, phụ kiện và ánh sáng để tạo một collage có chủ đích.

Có thể thêm nhãn, đường nối, chú thích nhỏ và mã màu. Moodboard phải là một bố cục biên tập tĩnh, không cần chức năng kéo thả.

## 6. DESIGN PROCESS

Trình bày quy trình sáng tạo bằng typography, đường kẻ hoặc layout dạng timeline:

01 — RESEARCH  
Nghiên cứu chủ đề, xu hướng, văn hóa và tư liệu hình ảnh.

02 — CONCEPT  
Xây dựng ý tưởng, moodboard, bảng màu và định hướng thẩm mỹ.

03 — DEVELOPMENT  
Phát triển phom dáng, chất liệu, bản phác thảo hoặc phương án styling.

04 — STYLING & FITTING  
Hoàn thiện trang phục, phối đồ, thử đồ hoặc điều chỉnh thiết kế tùy vai trò.

05 — FINAL PRESENTATION  
Trình bày bộ sưu tập, editorial, campaign hoặc sản phẩm sáng tạo cuối cùng.

Điều chỉnh mô tả theo chuyên môn thực tế. Không bắt buộc nhà thiết kế và stylist phải có quy trình giống hệt nhau.

## 7. SKILLS & TOOLS

Chia thành các nhóm rõ ràng:

- Fashion Design.
- Styling & Visual Composition.
- Textile & Material Research.
- Trend Research.
- Creative Direction.
- Garment Construction nếu phù hợp.

Công cụ có thể gồm Adobe Illustrator, Photoshop, CLO 3D hoặc phần mềm chuyên môn khác.

Chỉ hiển thị kỹ năng và công cụ phù hợp với nhân vật. Không tự tạo phần trăm kỹ năng, chứng nhận hoặc mức độ thành thạo khi không có dữ liệu.

## 8. EXPERIENCE & CV

Thiết kế section kinh nghiệm theo dạng editorial résumé hoặc timeline tối giản.

Có thể gồm:
- Work Experience.
- Selected Collections.
- Editorial & Campaigns.
- Fashion Shows / Exhibitions.
- Education.
- Certificates & Awards.

Ưu tiên phân cấp chữ rõ ràng, năm và vai trò dễ quét mắt. Khu vực CV phải hòa hợp với thẩm mỹ toàn trang, không giống dashboard tuyển dụng.

Nếu có file CV thật, tạo nút tải xuống. Nếu chưa có file, không tạo liên kết tải xuống giả.

## 9. ABOUT

Sử dụng bố cục kết hợp chân dung hoặc ảnh hậu trường với nội dung giới thiệu.

Nội dung tập trung vào:
- Nguồn cảm hứng sáng tạo.
- Quan điểm về thời trang.
- Cách tiếp cận chất liệu và hình thể.
- Định hướng nghề nghiệp.

Tiêu đề gợi ý: **“An Eye for Detail. A Mind for Expression.”**

Giữ văn phong cá nhân, súc tích và có chiều sâu. Không sử dụng đoạn giới thiệu sáo rỗng như một website doanh nghiệp.

## 10. CONTACT

Tạo section kết thúc có tính nhận diện mạnh.

Headline: **“LET’S CREATE SOMETHING DISTINCTIVE.”**

Hiển thị email, Instagram, LinkedIn và địa điểm nếu có dữ liệu.

CTA: **“CONTACT FOR COLLABORATION”** mở email hoặc dẫn đến thông tin liên hệ phù hợp.

Không tự tạo địa chỉ email, tài khoản mạng xã hội hoặc thông tin cá nhân không có thật.

## 11. IMAGERY & ART DIRECTION

Hình ảnh là thành phần cốt lõi của website.

Ưu tiên hình ảnh:
- Fashion editorial có ánh sáng và bố cục chuyên nghiệp.
- Chân dung người mẫu với biểu cảm tự nhiên.
- Chi tiết chất liệu, đường may, nếp vải và silhouette.
- Hậu trường fitting, phác thảo và quá trình sáng tạo.
- Bộ ảnh có màu sắc nhất quán với palette.

Phối hợp ảnh cận cảnh, ảnh toàn thân, ảnh dọc và ảnh ngang. Tránh sử dụng nhiều ảnh có cùng góc chụp hoặc cùng bố cục.

Nếu có công cụ tìm kiếm hình ảnh, ưu tiên ảnh phù hợp với concept thực tế. Nếu không có ảnh cá nhân hoặc ảnh dự án, sử dụng ảnh minh họa phù hợp và dễ thay thế; không giả vờ rằng đó là tác phẩm thật của chủ portfolio.

## 12. MOTION & INTERACTIONS

Sử dụng chuyển động tinh tế:
- Tiêu đề xuất hiện theo từng lớp khi tải trang.
- Ảnh reveal nhẹ khi cuộn.
- Hover zoom chậm trên ảnh dự án.
- Chuyển động typography có kiểm soát.
- Menu và anchor navigation mượt mà.
- Chuyển cảnh nhẹ giữa các section.

Không lạm dụng parallax, hiệu ứng 3D, con trỏ tùy chỉnh hoặc animation liên tục. Ưu tiên tốc độ, khả năng đọc và cảm giác cao cấp. Tôn trọng cài đặt giảm chuyển động của hệ điều hành.

## 13. RESPONSIVE & FUNCTIONALITY

- Desktop: thể hiện rõ bố cục editorial bất đối xứng và hình ảnh lớn.
- Tablet: điều chỉnh lưới, kích thước chữ và khoảng cách.
- Mobile: giữ thứ tự kể chuyện, ảnh đủ lớn và chữ dễ đọc; chuyển bố cục phức tạp thành một cột khi cần.
- Không có cuộn ngang ngoài ý muốn.
- Tất cả menu, anchor, CTA, accordion và liên kết phải hoạt động.
- Tối ưu ảnh, sử dụng lazy loading khi phù hợp và bổ sung alt text.
- Đảm bảo độ tương phản và kích thước chữ dễ đọc.

## 14. CONTENT ACCURACY & CUSTOMIZATION

Tất cả tên, dự án, ảnh, năm, kinh nghiệm, học vấn và thông tin liên hệ phải dễ thay thế.

Không bịa đặt dự án đã thực hiện, khách hàng, thương hiệu hợp tác, giải thưởng hoặc kinh nghiệm. Khi thiếu dữ liệu, dùng nội dung mẫu có nhãn rõ ràng như “Sample Project” hoặc placeholder dễ nhận biết.

Phân biệt rõ dự án thực tế, dự án cá nhân, bài tập học thuật và concept chưa sản xuất.

## 15. FINAL QUALITY STANDARD

Trước khi hoàn thành, kiểm tra:
- Website có thực sự giống fashion editorial cao cấp không?
- Bố cục các dự án có đa dạng không?
- Hình ảnh và typography có tạo được cá tính riêng không?
- Palette có nhất quán không?
- Nội dung có dễ thay thế không?
- Menu, nút bấm và liên kết có hoạt động không?
- Giao diện mobile có chỉn chu không?

**KẾT QUẢ MONG MUỐN:** Một landing page portfolio thời trang có tính nghệ thuật, cá tính rõ ràng, hình ảnh giàu cảm xúc và bố cục như một ấn phẩm editorial cao cấp. Website phải thể hiện năng lực sáng tạo của một cá nhân trong ngành thời trang, không phải cửa hàng bán quần áo hay mẫu CV đại trà.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Doanh nghiệp B2B / tư vấn** (`recipe:corporate-b2b`, chưa đánh giá): Hero-split → features-numbered dịch vụ → stats-band → list-cards case study → quote-full → contact-split. Trang dịch vụ + chi tiết.

**Bố cục gợi ý**
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 1 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 10 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.
- **Hero chia đôi chữ – ảnh** (`composition:hero-split`, chưa đánh giá, đã dùng 5 lần): Chữ 5–6/12 cột trái, ảnh tràn mép phải ở lg+; mobile chữ → ảnh.
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 15 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.

**Tránh lặp:** các website dựng gần đây đã dùng `hero-split`, `gallery-lookbook`, `features-bento`, `features-numbered`, `cta-fullbleed`, `hero-cinematic`, `cta-type`, `hero-full-slider` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Editorial / Magazine (`editorial`)
Như tạp chí in: chữ lớn, lưới bất đối xứng, rất ít màu.

**Hợp với:** thời trang, tạp chí / xuất bản, kiến trúc, thương hiệu cá nhân
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `paper` #F5F3EF · `ink` #111111 · `stone` #D9D4CB · `muted` #6B6760 · `bronze` #8C6A43
**Font** (Google Fonts): display `Instrument Serif:ital@0;1` · body `Geist:wght@300;400;500;600`

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
