# Brief website — MECHAVANCE

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website Giowis thiệu xưởng cơ khí MECHAVANCE
- **Tên thương hiệu / dự án:** **MECHAVANCE** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế Landing Page giới thiệu MECHAVANCE, doanh nghiệp hoạt động trong lĩnh vực cơ khí chính xác, gia công kim loại và chế tạo chi tiết máy công nghiệp.

Thông điệp thương hiệu: “Precision in Every Detail.”

Website thể hiện năng lực kỹ thuật, độ chính xác trong sản xuất, quy trình kiểm soát chất lượng và tinh thần đổi mới công nghệ. Đối tượng hướng đến là doanh nghiệp sản xuất, đối tác công nghiệp và khách hàng có nhu cầu tìm hiểu năng lực gia công.

Đây là website giới thiệu doanh nghiệp, không phải website thương mại điện tử. Không xây dựng giỏ hàng, thanh toán, đăng nhập, quản lý đơn hàng hoặc chức năng đặt mua máy móc.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Futuristic / Digital Art** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** — BA chọn. Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Unbounded:wght@400;600;800`, body `IBM Plex Sans:wght@400;500;600`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Unbounded`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `IBM Plex Sans`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `JetBrains Mono`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 5.543 ký tự, 188 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
- Phong cách thiết kế

Phong cách: Industrial Modern, Engineering, Technical Minimalism.

Màu chủ đạo: xám than, đen graphite, trắng bạc; sử dụng cam công nghiệp làm màu nhấn.

Typography mạnh mẽ, hiện đại, rõ ràng, gợi cảm giác chính xác và kỹ thuật.

Hình ảnh máy CNC, robot công nghiệp, chi tiết kim loại, bản vẽ kỹ thuật và nhà xưởng hiện đại.

Kết hợp lưới bố cục hình học, đường kẻ kỹ thuật, thông số minh họa và các mảng hình ảnh lớn.

Giao diện phải có chiều sâu, chuyên nghiệp, không giống trang bán hàng thiết bị.

Tránh lạm dụng gradient, hiệu ứng neon hoặc phong cách công nghệ viễn tưởng quá mức.
Section 1 — Hero

Thiết kế màn hình mở đầu ấn tượng với hình ảnh máy CNC đang gia công kim loại hoặc dây chuyền sản xuất công nghiệp.

Tiêu đề chính:

“ENGINEERING PRECISION. BUILDING THE FUTURE.”

Mô tả: MECHAVANCE cung cấp giải pháp gia công cơ khí chính xác, chế tạo chi tiết máy và hỗ trợ sản xuất công nghiệp bằng quy trình kỹ thuật chuyên nghiệp.

Bao gồm:

Logo MECHAVANCE.

Menu: Trang chủ, Giới thiệu, Năng lực, Công nghệ, Dự án, Liên hệ.

Hai CTA: “Khám phá năng lực” và “Tìm hiểu doanh nghiệp”.

Một số đường nét mô phỏng bản vẽ CAD hoặc thông số kỹ thuật làm điểm nhấn.

Section 2 — About the Company

Giới thiệu doanh nghiệp, định hướng phát triển, sứ mệnh và giá trị cốt lõi.

Trình bày các nội dung:

Năng lực kỹ thuật.

Tính chính xác trong gia công.

Tính ổn định của quy trình sản xuất.

Cam kết về chất lượng và an toàn.

Bố cục kết hợp hình ảnh nhà xưởng với phần giới thiệu ngắn gọn, rõ ràng. Không tự tạo lịch sử hoạt động, chứng nhận hoặc thành tích chưa có dữ liệu.

Section 3 — Engineering Capabilities

Trình bày các nhóm năng lực dưới dạng card kỹ thuật:

CNC Machining: Gia công phay, tiện CNC và chi tiết cơ khí chính xác.

Sheet Metal Fabrication: Gia công, cắt và tạo hình kim loại tấm.

Mechanical Components: Chế tạo các chi tiết và bộ phận máy.

Industrial Fabrication: Gia công kết cấu và cụm chi tiết công nghiệp.

Technical Design: Thiết kế, đọc hiểu bản vẽ và hỗ trợ triển khai kỹ thuật.

Mỗi card gồm hình ảnh thực tế, tiêu đề, mô tả ngắn và hiệu ứng hover nhẹ.

Section 4 — Machinery & Technology

Giới thiệu hệ thống thiết bị và công nghệ gia công.

Sử dụng hình ảnh máy CNC, thiết bị đo kiểm, robot công nghiệp và quy trình gia công kim loại.

Thiết kế dạng gallery kết hợp thông tin kỹ thuật ngắn. Chỉ đưa tên model máy, thông số và công nghệ cụ thể khi có dữ liệu; nếu không, sử dụng nội dung minh họa có thể chỉnh sửa.

Section 5 — Production Process

Mô tả quy trình làm việc theo trình tự trực quan:

Tiếp nhận yêu cầu kỹ thuật.

Phân tích bản vẽ và vật liệu.

Lập phương án gia công.

Tiến hành chế tạo.

Kiểm tra chất lượng.

Hoàn thiện sản phẩm.

Sử dụng sơ đồ tuyến tính, đường nối kỹ thuật và icon đơn giản. Trên mobile, chuyển thành danh sách dọc dễ đọc.

Section 6 — Quality Control

Giới thiệu định hướng kiểm soát chất lượng trong quá trình sản xuất.

Tập trung vào:

Độ chính xác kích thước.

Kiểm tra vật liệu và bề mặt.

Kiểm soát sai số gia công.

Quy trình kiểm tra và nghiệm thu.

Sử dụng hình ảnh thiết bị đo lường, kỹ thuật viên kiểm tra chi tiết máy và các bản vẽ kỹ thuật. Không tuyên bố đạt tiêu chuẩn ISO hoặc chứng nhận cụ thể khi chưa được cung cấp.

Section 7 — Featured Projects

Trưng bày các dự án hoặc sản phẩm cơ khí tiêu biểu dưới dạng portfolio.

Mỗi dự án có:

Hình ảnh chi tiết máy hoặc sản phẩm gia công.

Tên dự án.

Nhóm ứng dụng.

Mô tả kỹ thuật ngắn.

Vật liệu hoặc công nghệ sử dụng nếu có dữ liệu.

Ưu tiên bố cục hình ảnh lớn, bất đối xứng, thể hiện rõ kết cấu và độ hoàn thiện của sản phẩm. Dự án mẫu phải được nhận diện là nội dung minh họa.

Section 8 — Industries We Serve

Giới thiệu các lĩnh vực ứng dụng của năng lực cơ khí:

Sản xuất công nghiệp.

Thiết bị tự động hóa.

Máy móc và thiết bị kỹ thuật.

Công nghiệp phụ trợ.

Chế tạo và lắp ráp cơ khí.

Sử dụng hình ảnh đại diện cho từng lĩnh vực, kết hợp bố cục dạng lưới hiện đại.

Section 9 — Contact & Footer

Giới thiệu thông tin liên hệ doanh nghiệp, địa chỉ nhà máy, email, số điện thoại và các kênh liên lạc dưới dạng dữ liệu mẫu có thể chỉnh sửa.

Tiêu đề CTA:

“LET'S BUILD SOMETHING PRECISE.”

Có nút “Liên hệ với chúng tôi”, dẫn đến khu vực thông tin liên hệ hoặc ứng dụng email. Không triển khai hệ thống báo giá hay đặt hàng tự động.

Footer bao gồm logo, mô tả ngắn, liên kết điều hướng và thông tin doanh nghiệp.

4. Animation và tương tác

Hero có hiệu ứng xuất hiện tiêu đề và hình ảnh theo từng lớp.

Các section xuất hiện nhẹ nhàng khi cuộn trang.

Hình ảnh máy móc có hiệu ứng zoom nhẹ khi hover.

Đường kẻ kỹ thuật có thể xuất hiện theo chuyển động để gợi cảm giác bản vẽ cơ khí.

Card dự án có chuyển động tinh tế, ưu tiên hình ảnh và nội dung.

Menu điều hướng cuộn đến đúng section.

Không lạm dụng hiệu ứng 3D nặng, mô phỏng máy móc phức tạp hoặc animation gây chậm trang.

5. Yêu cầu triển khai

Xây dựng website hoàn chỉnh, có thể chạy được, không chỉ là mockup tĩnh.

Responsive trên desktop, tablet và mobile.

Bảo đảm nội dung dễ đọc, tương phản tốt và bố cục nhất quán.

Sử dụng hình ảnh phù hợp với ngành cơ khí công nghiệp.

Tạo dữ liệu mẫu có cấu trúc rõ ràng, dễ thay thế.

Kiểm tra liên kết, CTA, điều hướng, lỗi hiển thị và hiện tượng tràn ngang.

Không tự thêm chức năng bán hàng, quản lý kho, báo giá tự động hoặc quản lý sản xuất.

Kết quả mong muốn: Một Landing Page giới thiệu doanh nghiệp cơ khí mang diện mạo công nghiệp hiện đại, thể hiện rõ năng lực kỹ thuật, quy trình sản xuất và độ chính xác; chuyên nghiệp, trực quan và có bản sắc riêng.
~~~

## Preset

### Preset: Futuristic / Digital Art (`futuristic`)
Nền tối, lưới kỹ thuật, ánh neon tiết chế.

**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `void` #07080C · `panel` #10131B · `line` #232838 · `ink` #E8ECF5 · `muted` #8A93A6 · `acid` #C6FF3D · `cyan` #3DF2E0
**Font** (Google Fonts): display `Unbounded:wght@400;600;800` · body `IBM Plex Sans:wght@400;500;600` · nhãn `JetBrains Mono:wght@400;600`

**Chữ**
- Tiêu đề Unbounded, chữ hoa / thường trộn, cỡ lớn; nhãn JetBrains Mono kiểu chỉ số hệ thống `[ 02 / MODULE ]`.
**Bố cục**
- Nền void, lưới kẻ mảnh (background-image linear-gradient 1px) mờ 6%; khối panel viền line.
- Bento không đều cho tính năng; dải số liệu mono; con số lớn.
**Ảnh**
- Ảnh thật: kiến trúc đêm, ánh đèn, phần cứng cận cảnh — xử lý `grayscale contrast-125` + lớp phủ màu acid/cyan mix-blend-color.
**Khoảng trắng:** Đặc hơn: `py-20`, mật độ thông tin cao nhưng căn lưới chặt.
**Chuyển động mặc định:** Level 3 — Advanced
- `data-spotlight` cho panel, `data-scrub` cho chữ lớn, `data-particles="stars"` mật độ thấp ở hero, `data-gradient-shift` cho một dải CTA.
- `data-cursor="ring"` được phép; `data-tilt` nhẹ (4) cho thẻ.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-type` → `features-bento` → `stats-band` → `story-pinned` → `gallery-masonry` → `cta-sky` → `footer-big`
**Được phép (ghi đè layout-guide mục 3):** lưới kỹ thuật; quầng sáng neon nhỏ
**Tránh:** gradient tím–xanh; robot / não bộ clip-art; glassmorphism tràn lan
