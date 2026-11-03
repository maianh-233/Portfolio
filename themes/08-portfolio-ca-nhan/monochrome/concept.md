# Brief website — MONOCHROME

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website portfolio cá nhân
- **Tên thương hiệu / dự án:** **MONOCHROME** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
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

- Preset: **Corporate / Professional** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** (mặc định của preset). Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Lexend:wght@500;600;700`, body `Source Sans 3:wght@400;600`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Lexend`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Source Sans 3`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 9.704 ký tự, 315 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
# MASTER PROMPT — MONOCHROME
## Architectural Portfolio & Professional CV

### 1. PROJECT OVERVIEW

Thiết kế một landing page Portfolio & CV cá nhân dành cho kiến trúc sư hoặc nhà thiết kế nội thất.

Website phải thể hiện tư duy không gian, khả năng phát triển concept, kỹ năng thiết kế, hiểu biết vật liệu và kinh nghiệm chuyên môn.

Đây là portfolio cá nhân, không phải website công ty kiến trúc, công ty xây dựng hoặc bất động sản.

Định hướng tổng thể: **Architectural Minimalism × Architectural Editorial × Contemporary Swiss Design.**

Tham khảo tinh thần của các ấn phẩm kiến trúc quốc tế: tối giản, giàu hình ảnh, bố cục chính xác, typography có hệ thống và khoảng trắng được sử dụng có chủ đích.

### 2. VISUAL IDENTITY

**Bảng màu:**
- Nền chính: #F5F5F2.
- Trắng: #FFFFFF.
- Đen: #191919.
- Xám bê tông: #B7B7B0.
- Xám phụ: #666660.
- Nâu đá: #827B70.

Ưu tiên nền sáng, kết hợp hình ảnh vật liệu tự nhiên. Có thể sử dụng một section nền tối để tạo điểm nhấn.

Không sử dụng gradient sặc sỡ, màu neon, hiệu ứng kính mờ hoặc bóng đổ nặng.

**Typography:**
- Tiêu đề: Manrope.
- Nội dung: Inter.
- Metadata và chú thích kỹ thuật: IBM Plex Mono.

Tiêu đề lớn nhưng không lấn át hình ảnh. Nội dung dễ đọc, chú thích nhỏ và có phân cấp rõ ràng.

**Layout:**
- Desktop sử dụng lưới 12 cột.
- Container rộng khoảng 90% viewport.
- Đường kẻ mảnh, góc vuông, khoảng trắng rộng.
- Bố cục bất đối xứng có chủ đích.
- Không sử dụng card bo tròn theo phong cách dashboard.
- Không lặp lại một bố cục cho tất cả section.

### 3. HEADER & NAVIGATION

Header tối giản gồm:
- Tên kiến trúc sư.
- ARCHITECT / INTERIOR DESIGNER.
- Projects.
- Approach.
- Expertise.
- Resume.
- Contact.

Header có thể sticky với chiều cao nhỏ.

Các liên kết phải cuộn đến đúng section. Trên mobile, sử dụng menu thu gọn có thể mở và đóng.

### 4. HERO — ARCHITECTURAL STATEMENT

Tạo bố cục hai vùng không đối xứng:
- Một bên là tên cá nhân, chức danh, tuyên ngôn thiết kế và đoạn giới thiệu.
- Bên còn lại là hình ảnh kiến trúc nổi bật.

Tỷ lệ tham khảo: 40% nội dung và 60% hình ảnh.

Tuyên ngôn mẫu:

"Designing spaces that balance light, material, and human experience."

Đoạn giới thiệu ngắn thể hiện cách tiếp cận kiến trúc, vật liệu và trải nghiệm con người.

CTA:
- VIEW SELECTED PROJECTS.
- EXPLORE PROFILE.
- DOWNLOAD CV nếu có file thực tế.

Hình ảnh hero phải chất lượng cao, thể hiện chiều sâu không gian, ánh sáng và hình khối. Không để chữ che công trình hoặc sử dụng overlay quá nặng.

### 5. SELECTED PROJECTS

Trình bày 3–4 dự án với bố cục khác nhau.

Có thể bao gồm kiến trúc nhà ở, thiết kế nội thất, không gian hospitality hoặc dự án concept.

**Project 01 — Featured Project**
- Ảnh ngang lớn.
- Tên dự án và mô tả concept.
- Loại công trình, địa điểm, năm và vai trò cá nhân.

**Project 02 — Vertical Composition**
- Ảnh dọc.
- Bố cục lệch trục.
- Kết hợp hình ảnh và metadata.

**Project 03 — Drawing & Spatial Study**
- Kết hợp phối cảnh với mặt bằng, mặt cắt hoặc sơ đồ.
- Chú thích kỹ thuật rõ ràng.
- Không thu nhỏ bản vẽ đến mức khó đọc.

**Project 04 — Editorial Grid**
- Kết hợp một ảnh lớn với các ảnh chi tiết.
- Tạo nhịp điệu thị giác khác biệt so với những dự án trước.

Mỗi dự án có thể hiển thị:
- Project name.
- Project type.
- Location.
- Year.
- Scale.
- Individual role.
- Design concept.
- Main materials.

Chỉ hiển thị thông tin thực tế hoặc placeholder rõ ràng.

Không biến mọi dự án thành các card giống nhau. Không gán công trình tham khảo cho kiến trúc sư như tác phẩm cá nhân.

### 6. PROJECT CASE STUDY

Mỗi dự án có nút EXPLORE PROJECT để mở rộng nội dung ngay trong trang bằng accordion.

Không tạo trang dự án riêng.

Nội dung gồm:
- Context: Bối cảnh và nhu cầu.
- Design Challenge: Vấn đề cần giải quyết.
- Concept Development: Quá trình hình thành ý tưởng.
- Material Strategy: Lý do lựa chọn vật liệu.
- Design Outcome: Kết quả hoặc mục tiêu thiết kế.

Có thể sử dụng hình ảnh, sơ đồ và bản vẽ minh họa.

Accordion phải hoạt động thực tế, hỗ trợ mobile và bàn phím.

### 7. DESIGN APPROACH

Tiêu đề: A Way of Seeing Space.

Trình bày ba nguyên tắc thiết kế:

**LIGHT:** Vai trò của ánh sáng tự nhiên, bóng đổ và chiều sâu không gian.

**MATERIAL:** Cách vật liệu ảnh hưởng đến cảm giác, màu sắc và trải nghiệm kiến trúc.

**SPACE:** Cách tổ chức công năng, luồng di chuyển, tầm nhìn và không gian chuyển tiếp.

Mỗi nguyên tắc có hình ảnh riêng, tiêu đề và đoạn mô tả ngắn.

Có thể sử dụng ba cột không đồng đều hoặc một hình ảnh lớn kết hợp hai hình nhỏ.

Nội dung cần có ý nghĩa chuyên môn, không chỉ là khẩu hiệu.

### 8. EXPERTISE & TOOLS

Trình bày các nhóm năng lực phù hợp với cá nhân:
- Architectural Design.
- Interior Architecture.
- Spatial Planning.
- Concept Development.
- 3D Visualization.
- Technical Drawing.
- Material Research.

Phần mềm có thể bao gồm AutoCAD, Revit, SketchUp, Rhino, Blender, V-Ray hoặc Adobe Creative Suite.

Chỉ hiển thị công cụ thực sự được sử dụng.

Trình bày bằng typography và danh sách tối giản. Không sử dụng thanh tiến độ kỹ năng giả hoặc tỷ lệ phần trăm thiếu căn cứ.

### 9. PROFESSIONAL RESUME

Sử dụng timeline tối giản kết hợp đường kẻ mảnh.

Bao gồm:
- Kinh nghiệm làm việc.
- Văn phòng kiến trúc.
- Vai trò và trách nhiệm.
- Học vấn.
- Chứng chỉ.
- Giải thưởng nếu có.

Mỗi mục có thời gian, tên đơn vị và mô tả ngắn.

Không bịa kinh nghiệm, bằng cấp hoặc giải thưởng.

Có nút DOWNLOAD CV nếu tồn tại file PDF thật.

### 10. ABOUT & CONTACT

Phần About giới thiệu quan điểm nghề nghiệp, lĩnh vực quan tâm và cách tiếp cận thiết kế. Không lặp lại nguyên văn phần Hero.

Phần Contact sử dụng hình ảnh kiến trúc có tính biểu tượng hoặc chi tiết vật liệu làm điểm kết thúc.

Tiêu đề:

"Let's Create Meaningful Spaces."

Hiển thị email, LinkedIn và liên kết CV/Portfolio PDF nếu có tài liệu thực tế.

Footer tối giản, gồm tên cá nhân, chức danh, liên kết điều hướng và thông tin bản quyền phù hợp.

Không tạo liên kết giả hoặc biểu mẫu gửi thông tin không hoạt động.

### 11. IMAGE ART DIRECTION

Hình ảnh là thành phần chủ đạo của website.

Ưu tiên:
- Kiến trúc đương đại.
- Nội thất tối giản.
- Ánh sáng tự nhiên.
- Bê tông, đá, gỗ và kim loại.
- Chi tiết cấu trúc và vật liệu.
- Bản vẽ kiến trúc và sơ đồ không gian.

Sử dụng ảnh ngang, ảnh dọc, ảnh vuông và hình ảnh chi tiết theo từng dự án.

Không lặp lại hình ảnh ở nhiều section nếu không có chủ đích.

Nếu có công cụ tìm kiếm ảnh, hãy chọn ảnh phù hợp và kiểm tra URL. Không tạo URL ảnh ngẫu nhiên.

Nếu chưa có hình ảnh thực tế, dùng placeholder đẹp, đúng tỷ lệ và dễ thay thế.

Không sử dụng ảnh minh họa để khẳng định kiến trúc sư đã thiết kế hoặc xây dựng công trình đó.

### 12. MOTION DESIGN

Animation nhẹ, chậm vừa phải và có chủ đích.

- Hero xuất hiện bằng opacity và dịch chuyển nhẹ.
- Section reveal khi cuộn.
- Đường kẻ mở rộng khi section xuất hiện.
- Hình ảnh phóng to nhẹ khi hover.
- Metadata xuất hiện theo thứ tự.
- Parallax chỉ sử dụng khi thực sự cần thiết.

Không sử dụng hiệu ứng xoay, nảy, zoom mạnh hoặc chuyển động liên tục.

Tổng thể phải tĩnh tại, tinh tế và tập trung vào kiến trúc.

Hỗ trợ `prefers-reduced-motion`. Animation không được gây giật hoặc cản trở thao tác.

### 13. RESPONSIVE DESIGN

**Desktop:** Hình ảnh lớn, lưới nhiều cột, bố cục bất đối xứng và metadata rõ ràng.

**Tablet:** Giảm số cột, điều chỉnh khoảng cách và giữ tỷ lệ hình ảnh.

**Mobile:** Một cột, menu thu gọn, chữ dễ đọc, chú thích đặt dưới ảnh và không có cuộn ngang.

Không thu nhỏ bản vẽ đến mức không đọc được. Không để chữ, hình ảnh hoặc nút bị tràn màn hình.

Kiểm tra giao diện tại các chiều rộng 1440px, 1024px, 768px, 390px và 360px.

### 14. FUNCTIONALITY & PERFORMANCE

- Navigation hoạt động đúng.
- Accordion mở và đóng chính xác.
- Tất cả liên kết dẫn đến đích hợp lệ.
- Email sử dụng `mailto:` khi có địa chỉ thật.
- CV và Portfolio PDF chỉ tải khi có file.
- Ảnh có alt text phù hợp.
- Ảnh ngoài viewport được lazy-load.
- Ảnh hero không bị trì hoãn không cần thiết.
- Tối ưu kích thước ảnh và font.
- Không có lỗi JavaScript nghiêm trọng.
- Không sử dụng thư viện nặng nếu không cần thiết.
- Đảm bảo trạng thái focus và khả năng sử dụng bằng bàn phím.

Nếu đang làm việc trong dự án có sẵn, hãy kiểm tra cấu trúc hiện tại và tận dụng công nghệ đã được thiết lập. Không tự ý viết lại các phần không liên quan.

### 15. CONTENT ACCURACY

Không tự bịa tên, dự án, địa điểm, diện tích, kinh nghiệm, chứng chỉ hoặc giải thưởng.

Phân biệt rõ:
- BUILT PROJECT.
- CONCEPT DESIGN.
- ACADEMIC PROJECT.
- PERSONAL STUDY.
- UNBUILT PROJECT.

Sử dụng placeholder khi thiếu dữ liệu. Nội dung mẫu phải dễ thay thế.

### 16. FINAL QUALITY STANDARD

Trước khi hoàn thành, kiểm tra:
- Bố cục có thực sự mang tinh thần kiến trúc không?
- Các section có nhịp điệu khác nhau không?
- Hình ảnh có đủ chất lượng và liên quan không?
- Typography và metadata có nhất quán không?
- Các tương tác có hoạt động không?
- Giao diện mobile có hoàn chỉnh không?
- Có liên kết hỏng, ảnh lỗi hoặc nội dung giả không?

**Ưu tiên theo thứ tự:**

1. Chất lượng hình ảnh và Art Direction.
2. Bố cục editorial có bản sắc.
3. Typography, khoảng trắng và hệ thống lưới.
4. Nội dung chuyên nghiệp, có tính xác thực.
5. Animation tinh tế.
6. Responsive, accessibility và hiệu năng.

### FINAL GOAL

Tạo một landing page Portfolio & CV kiến trúc sư có cảm giác như một ấn phẩm kiến trúc đương đại được thiết kế riêng.

Website phải có chiều sâu thị giác, bố cục bất đối xứng có chủ đích, hình ảnh chất lượng cao và nội dung dễ thay thế.

Không giống website công ty xây dựng. Không giống template CV thông thường. Không lạm dụng hiệu ứng.

**Sản phẩm cuối cùng phải tối giản nhưng không đơn điệu, chuyên nghiệp nhưng có cá tính, giàu hình ảnh nhưng vẫn dễ đọc và sử dụng thực tế.**
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Trung tâm giáo dục / ngoại ngữ** (`recipe:education-center`, chưa đánh giá): Hero-split (học viên thật) → stats-band (chỉ số có thật) → features-tabs khóa học → timeline lộ trình → quote-full → contact-split (form đăng ký học thử = bản demo). Trang: Khóa học + chi tiết khóa, Giáo viên, Liên hệ.

**Bố cục gợi ý**
- **Hero chia đôi chữ – ảnh** (`composition:hero-split`, chưa đánh giá, đã dùng 3 lần): Chữ 5–6/12 cột trái, ảnh tràn mép phải ở lg+; mobile chữ → ảnh.
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 1 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **Danh sách đánh số lớn** (`composition:features-numbered`, chưa đánh giá, đã dùng 7 lần): Số 01 02 03 font display, tên · mô tả · mũi tên, đường kẻ mảnh, hover đổi nền.
- **Dải số liệu** (`composition:stats-band`, chưa đánh giá, đã dùng 2 lần): 3–4 số `data-count-to`, nền đậm, chia cột bằng đường kẻ. _Tránh:_ Không bịa số liệu — chỉ dùng số có trong tài liệu / do người dùng cung cấp.

**Chuyển động gợi ý**
- **Số đếm** (`motion:count-up`, chưa đánh giá): `data-count-to="1284" data-suffix="+"`, viết sẵn giá trị cuối trong thẻ. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).

**Tránh lặp:** các website dựng gần đây đã dùng `hero-cinematic`, `gallery-lookbook`, `features-numbered`, `cta-type`, `hero-full-slider`, `features-bento`, `hero-type`, `features-tabs`, `hero-split` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Corporate / Professional (`corporate`)
Chuyên nghiệp, đáng tin, dễ đọc — thông tin rõ ràng.

**Hợp với:** tư vấn, luật, tài chính / bảo hiểm, công ty B2B, giới thiệu sản phẩm phần mềm
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `white` #FFFFFF · `mist` #F4F6F8 · `navy` #0F2A47 · `blue` #1F5FBF · `slate` #4A5868 · `line` #DCE2E8 · `gold` #C9A227
**Font** (Google Fonts): display `Lexend:wght@500;600;700` · body `Source Sans 3:wght@400;600`

**Thành phần giao diện**
- Nút chữ nhật bo 6px nền blue; nút phụ viền
- Thẻ trắng viền line bo 8px, bóng rất nhẹ; icon nét đơn
**Chữ**
- Tiêu đề Lexend 600 cỡ vừa phải (clamp 2.5rem → 4.5rem); thân Source Sans 3 17px; phân cấp H1 / H2 / H3 rõ, dòng ≤ 70 ký tự.
**Bố cục**
- Lưới 12 cột đều; hero-split chữ + ảnh người thật làm việc; dải số liệu tin cậy; logo đối tác.
- Nền trắng / mist xen kẽ; một dải navy cho số liệu hoặc CTA.
**Ảnh**
- Ảnh thật con người, văn phòng, buổi làm việc, ánh sáng tự nhiên; tránh ảnh bắt tay dàn dựng.
**Khoảng trắng:** Cân đối: `py-20 lg:py-28`.
**Chuyển động mặc định:** Level 1 — Basic
- `data-reveal="up"`, `data-count-to`, `data-header="shrink"`; hover nâng thẻ nhẹ. Không particles / cursor / tilt.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-split` → `features-numbered` → `stats-band` → `features-tabs` → `quote-full` → `contact-split` → `footer-big`
**Tránh:** hiệu ứng phô trương; màu bão hòa; font trang trí
