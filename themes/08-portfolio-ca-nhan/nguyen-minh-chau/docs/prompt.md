# Prompt đã dùng — Nguyễn Minh Châu

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
# Brief website — Nguyễn Minh Châu

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website portfolio cá nhân
- **Tên thương hiệu / dự án:** **Nguyễn Minh Châu** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
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

- Preset: **Neo-Brutalism / Bold** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 2 — Atmospheric** (mặc định của preset). Được dùng: thêm `data-split`, `data-reveal="clip"`, `data-reveal-stagger`, `data-parallax` ≤ 0.2, marquee, kéo ngang; atmos.js: `data-float`, `data-gradient-shift`, `data-clouds` / `data-particles` ở **một** section trên mỗi trang.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Bricolage Grotesque:opsz,wght@12..96,400;12..96,800`, body `Bricolage Grotesque:opsz,wght@12..96,400;12..96,500`, nhãn `Instrument Serif`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Bricolage Grotesque`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Tool kiểm tra font preset: `Instrument Serif`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Font nào thiếu ký tự tiếng Anh → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Inter` / `Source Serif 4`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 5.715 ký tự, 188 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
Thiết kế một landing page portfolio cá nhân cho **Nguyễn Minh Châu**, một chuyên viên tổ chức cưới hỏi truyền thống Việt Nam.

### 1. Mục tiêu

Đây là website giới thiệu năng lực nghề nghiệp của một cá nhân, không phải website công ty tổ chức tiệc cưới.

Website cần thể hiện:
- Chân dung và câu chuyện nghề nghiệp của Minh Châu.
- Sự am hiểu về nghi lễ cưới hỏi truyền thống Việt Nam.
- Các dự án cưới hỏi tiêu biểu đã tham gia.
- Quy trình làm việc và kỹ năng chuyên môn.
- Kinh nghiệm làm việc, học vấn và chứng chỉ.
- Thông tin liên hệ và CV.

Sử dụng thông tin giả định để tạo một portfolio demo hoàn chỉnh. Không sử dụng placeholder trong nội dung hiển thị.

### 2. Phong cách thiết kế

Kết hợp Vietnamese Heritage, Contemporary Editorial và Personal Portfolio.

Bảng màu:
- Đỏ trầm `#8E2028`.
- Kem ấm `#F7F0E5`.
- Vàng cổ `#B79A62`.
- Nâu đậm `#3C2B25`.

Font chữ:
- Heading: Cormorant Garamond.
- Body: Be Vietnam Pro hoặc Inter.

Giao diện phải thanh lịch, có chiều sâu văn hóa và giàu hình ảnh. Tránh thiết kế giống website nhà hàng tiệc cưới hoặc trang bán dịch vụ.

### 3. Header

Bên trái: NGUYỄN MINH CHÂU.

Dòng phụ: TRADITIONAL WEDDING PLANNER.

Menu:
HOME · ABOUT ME · PORTFOLIO · EXPERIENCE · CONTACT.

Nút nổi bật: VIEW MY CV.

Tất cả liên kết điều hướng đến các section tương ứng trên cùng landing page.

### 4. Hero

Tạo một hero mang dấu ấn cá nhân, không sử dụng bố cục doanh nghiệp thông thường.

Bố cục gồm:
- Ảnh chân dung Minh Châu trong trang phục thanh lịch.
- Một ảnh phụ về không gian lễ gia tiên hoặc mâm quả cưới hỏi.
- Typography lớn.
- Các chi tiết đồ họa lấy cảm hứng từ dấu triện và đường nét truyền thống Việt Nam.

Nội dung:

**NGUYỄN MINH CHÂU**

Traditional Wedding Planner

**“Gìn giữ nét truyền thống, chăm chút từng khoảnh khắc trọng đại.”**

“Tôi theo đuổi công việc tổ chức cưới hỏi bằng sự chỉn chu, am hiểu phong tục và khả năng điều phối. Với tôi, mỗi nghi lễ đều mang một ý nghĩa riêng và xứng đáng được chuẩn bị bằng sự tôn trọng, chu đáo.”

CTA:
- KHÁM PHÁ DỰ ÁN.
- XEM HỒ SƠ NGHỀ NGHIỆP.

### 5. About Me

Tiêu đề: “Người đứng sau những ngày hỷ trọn vẹn.”

Giới thiệu Minh Châu là một Wedding Planner có 5 năm kinh nghiệm giả định trong việc hỗ trợ tổ chức lễ ăn hỏi, lễ gia tiên và lễ cưới.

Nội dung nhấn mạnh:
- Tình yêu với văn hóa cưới hỏi Việt Nam.
- Khả năng tổ chức và điều phối công việc.
- Sự cẩn thận trong từng nghi thức.
- Khả năng giao tiếp và phối hợp với hai gia đình.
- Mong muốn kết hợp giá trị truyền thống với cách tổ chức chuyên nghiệp.

Bố cục kết hợp chân dung cá nhân, đoạn giới thiệu và một câu trích dẫn nổi bật.

### 6. Selected Projects

Tiêu đề: “Những dự án tôi tự hào.”

Tạo ba dự án cưới hỏi giả định.

**Dự án 01 — Hồng Duyên**

- Loại hình: Lễ ăn hỏi và lễ gia tiên.
- Địa điểm: Thành phố Hồ Chí Minh.
- Quy mô: 60 khách.
- Concept: Áo dài đỏ, mâm quả truyền thống, không gian gia tiên trang trọng.
- Vai trò: Chuẩn bị timeline, phối hợp lễ vật, điều phối trình tự nghi lễ.

**Dự án 02 — Sen Hồng Gia Lễ**

- Loại hình: Lễ cưới truyền thống.
- Địa điểm: Cần Thơ.
- Quy mô: 100 khách.
- Concept: Hoa sen, đỏ trầm, kem và vàng cổ.
- Vai trò: Hỗ trợ phát triển concept, phối hợp trang trí và kiểm tra công tác chuẩn bị.

**Dự án 03 — Tơ Hồng Sum Vầy**

- Loại hình: Lễ cưới quy mô gia đình.
- Địa điểm: Huế.
- Quy mô: 80 khách.
- Concept: Không gian ấm cúng, trang phục truyền thống và hoa tươi.
- Vai trò: Lập kế hoạch, quản lý timeline và điều phối ngày cưới.

Mỗi dự án phải có ảnh lớn, tên dự án, địa điểm, vai trò cá nhân và mô tả ngắn về quá trình thực hiện.

Sử dụng ba bố cục hình ảnh khác nhau thay vì ba card giống hệt nhau.

Cho phép mở rộng thông tin dự án bằng lightbox hoặc panel ngay trên trang.

### 7. My Expertise

Tiêu đề: “Năng lực chuyên môn.”

Trình bày:
- Traditional Wedding Planning.
- Ceremony Coordination.
- Wedding Timeline Management.
- Vendor Coordination.
- Traditional Ceremony Preparation.
- Family Communication.
- Event Styling.

Sử dụng typography, đường phân cách và hình ảnh chi tiết. Không dùng thanh phần trăm kỹ năng.

### 8. Work Experience

Tạo timeline nghề nghiệp giả định.

**2023–Hiện tại — Independent Wedding Planner**
- Lập kế hoạch tổ chức lễ cưới hỏi.
- Phối hợp với gia đình và các đơn vị cung cấp dịch vụ.
- Chuẩn bị checklist và timeline.
- Điều phối các công việc trong ngày diễn ra sự kiện.

**2021–2023 — Event Coordinator, An Duyên Wedding Studio**
- Hỗ trợ tổ chức lễ ăn hỏi và lễ cưới.
- Phối hợp đội ngũ trang trí.
- Theo dõi tiến độ chuẩn bị.
- Hỗ trợ điều phối nghi thức.

### 9. Education & Certifications

- Cử nhân Quản trị sự kiện — Học viện Sự kiện Việt, 2021.
- Chứng nhận Event Planning Fundamentals — chương trình đào tạo giả định, 2022.

Đây là dữ liệu minh họa, không đại diện cho bằng cấp hoặc chứng chỉ có thật.

### 10. Contact

Tiêu đề: “Hãy cùng bắt đầu một cuộc trò chuyện.”

Thông tin:
- Email: minchau@example.com.
- Location: Ho Chi Minh City, Vietnam.
- LinkedIn: hồ sơ demo.
- Instagram: hồ sơ demo.

Nút:
- EMAIL ME.
- DOWNLOAD CV.

Nếu chưa có file CV PDF, hãy tạo nút demo rõ ràng hoặc cung cấp một file CV mẫu có thể tải xuống.

### 11. Thiết kế và kỹ thuật

- Chỉ xây dựng một landing page.
- Không thêm chức năng thương mại điện tử.
- Không thêm hệ thống đặt dịch vụ hoặc thanh toán.
- Hình ảnh cưới hỏi truyền thống Việt Nam phải là trọng tâm.
- Sử dụng animation nhẹ khi cuộn trang.
- Đảm bảo responsive trên desktop, tablet và mobile.
- Không có cuộn ngang.
- Tất cả menu và nút phải hoạt động đúng.
- Không tuyên bố dữ liệu giả định là thành tích có thật.

KẾT QUẢ: Một portfolio cá nhân Wedding Planner mang bản sắc Việt Nam, có hình ảnh đẹp, thể hiện năng lực nghề nghiệp và phù hợp để giới thiệu bản thân hoặc ứng tuyển công việc.

~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Nhà hàng / quán cà phê** (`recipe:restaurant-cafe`, chưa đánh giá): Hero-cinematic hoặc hero-offset → story-letter → menu dạng features-numbered / tabs → gallery-filmstrip → contact-split (giờ mở cửa, bản đồ, đặt bàn = bản demo).

**Bố cục gợi ý**
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 14 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Hero chia đôi chữ – ảnh** (`composition:hero-split`, chưa đánh giá, đã dùng 5 lần): Chữ 5–6/12 cột trái, ảnh tràn mép phải ở lg+; mobile chữ → ảnh.
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 3 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **CTA ảnh tràn** (`composition:cta-fullbleed`, chưa đánh giá, đã dùng 2 lần): Ảnh tràn + lớp phủ, tiêu đề lớn + 1 nút chính.

**Chuyển động gợi ý**
- **Lưới hiện lần lượt** (`motion:stagger-grid`, chưa đánh giá): `data-reveal-stagger="80"` trên khối cha của lưới thẻ. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Băng chuyền chữ / logo** (`motion:marquee`, chưa đánh giá): `data-marquee="40"`. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).

**Tránh lặp:** các website dựng gần đây đã dùng `hero-type`, `gallery-lookbook`, `gallery-masonry`, `features-numbered`, `features-tabs`, `cta-type`, `hero-split`, `features-bento`, `cta-fullbleed` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Neo-Brutalism / Bold (`bold`)
Khối rõ, viền mạnh, chữ khổng lồ, tương phản nổi bật — phá lưới có kiểm soát.

**Hợp với:** agency sáng tạo, portfolio thiết kế, lễ hội / sự kiện trẻ, thương hiệu Gen Z
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `paper` #F2EFE6 · `ink` #0F0F0F · `signal` #FF4D1F · `cobalt` #2340FF · `acid` #E9FF3B
**Font** (Google Fonts): display `Bricolage Grotesque:opsz,wght@12..96,400;12..96,800` · body `Bricolage Grotesque:opsz,wght@12..96,400;12..96,500` · nhãn `Instrument Serif`

**Thành phần giao diện**
- Nút khối màu viền 2–3px ink, bóng cứng lệch `shadow-[5px_5px_0_#0F0F0F]`, nhấn xuống khi bấm
- Thẻ viền dày góc vuông; nhãn dán (sticker) bo tròn
**Chữ**
- Một family Bricolage Grotesque: tiêu đề 800 cực lớn (tràn khung, chữ chạm mép), thân 400; điểm nhấn Instrument Serif nghiêng.
**Bố cục**
- Khối màu phẳng full-bleed đổi liên tục (signal → cobalt → paper); chữ khổng lồ chồng lên ảnh.
- Phá lưới có chủ đích: ảnh lệch, chữ xoay 90°, nhãn dán (sticker) bo tròn.
**Ảnh**
- Ảnh thật tương phản mạnh, cắt sát; có thể cắt khung hình tròn / pill.
**Khoảng trắng:** Ít hơn, dày đặc năng lượng nhưng mỗi section một ý.
**Chuyển động mặc định:** Level 2 — Atmospheric
- `data-marquee` chữ lớn, `data-magnetic` CTA, `data-tilt` thẻ dự án, `data-split="chars"` cho 1 tiêu đề, `data-cursor="dot"` + `data-cursor-label`.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-offset` → `features-bento` → `gallery-masonry` → `stats-band` → `quote-full` → `cta-type` → `footer-big`
**Được phép (ghi đè layout-guide mục 3):** chữ xoay / chồng ảnh; khối màu bão hòa
**Tránh:** pastel nhạt nhòa; bố cục an toàn đối xứng
~~~~
