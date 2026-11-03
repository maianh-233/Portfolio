# Brief website — HỒN VIỆT

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Web trung tâm dạy nhạc cụ dân tộc
- **Tên thương hiệu / dự án:** **HỒN VIỆT** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website đa trang giới thiệu HỒN VIỆT, trung tâm đào tạo nhạc cụ dân tộc Việt Nam với định hướng bảo tồn di sản thông qua hình thức truyền nghề trực tiếp. Trung tâm mời các nghệ nhân và người có chuyên môn sâu về nhạc cụ truyền thống đứng lớp, hướng dẫn học viên từ kỹ thuật biểu diễn đến chiều sâu văn hóa của âm nhạc dân tộc.

Website chỉ phục vụ mục đích giới thiệu trung tâm, nghệ nhân, chương trình học và hoạt động văn hóa; không phải website thương mại điện tử.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
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
  - Tool kiểm tra font preset: `Young Serif`: có trên Google Fonts nhưng **THIẾU ký tự tiếng Việt** ✗
  - Tool kiểm tra font preset: `Work Sans`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Courier Prime`: có trên Google Fonts nhưng **THIẾU ký tự tiếng Việt** ✗
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 4.770 ký tự, 101 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
1. Art Direction — Mỹ học Việt Nam hoài cổ

Xây dựng giao diện mang cảm giác của một ngôi nhà Việt xưa, một thư phòng cổ hoặc không gian nghệ thuật truyền thống được lưu giữ qua nhiều thế hệ.

Sử dụng chất liệu thị giác gồm gỗ lâu năm, giấy dó ngả vàng, giấy bản, vải linen thô, mực tàu, đồng hun, gốm cũ và bề mặt sơn đã phai màu. Kết hợp ánh sáng tự nhiên xuyên qua cửa gỗ, bóng nắng trên nền nhà, vân gỗ, nếp giấy và những chi tiết thủ công không hoàn hảo.

Bảng màu gồm vàng giấy cũ #E8D9B8, nâu gỗ #594333, đỏ son trầm #843D32, xanh rêu #62664A và đen mực #292720.

Typography kết hợp kiểu chữ serif cổ điển có dấu tiếng Việt đẹp với font chữ hiện đại dễ đọc. Có thể sử dụng thư pháp hoặc chữ viết tay cho các câu dẫn ngắn, không lạm dụng khiến giao diện khó đọc.

Hình ảnh cần chân thực, giàu cảm xúc: nghệ nhân chơi đàn trong không gian gỗ cũ, đôi tay đang gảy đàn tranh, người thầy hướng dẫn học viên, nhạc cụ lâu năm, bản nhạc viết tay và những buổi truyền dạy gần gũi.

Tránh giao diện công nghệ, gradient rực rỡ, màu neon, card bo góc quá nhiều, hình ảnh stock văn phòng và các hiệu ứng hiện đại làm mất chất hoài cổ.

2. Cấu trúc website đa trang

Trang chủ

Hero toàn màn hình với ảnh nghệ nhân biểu diễn nhạc cụ dân tộc trong không gian Việt xưa.

Tiêu đề: “Giữ tiếng xưa, truyền hồn Việt”.

Lời giới thiệu: “Nơi nghệ nhân truyền nghề, nơi âm vang dân tộc tiếp nối qua những thế hệ”.

Giới thiệu triết lý truyền dạy, các nhạc cụ đào tạo và những nghệ nhân đứng lớp.

Khu vực ảnh kể chuyện về không gian học tập và hoạt động truyền nghề.

CTA: “Gặp gỡ nghệ nhân”, “Khám phá lớp học”.

Trang Nghệ nhân

Là trang trọng tâm, tôn vinh những người trực tiếp truyền dạy.

Mỗi nghệ nhân có chân dung, chuyên môn, hành trình gắn bó với nhạc cụ, kinh nghiệm biểu diễn và triết lý truyền nghề.

Thiết kế như những trang chân dung trong một cuốn sách tư liệu văn hóa.

Có trang chi tiết riêng cho từng nghệ nhân, với hình ảnh và câu chuyện được trình bày trang trọng.

Không tự tạo danh hiệu, giải thưởng hoặc thành tích có thật khi chưa có dữ liệu.

Trang Chương trình học

Giới thiệu các lớp đàn tranh, đàn bầu, đàn nguyệt, đàn tỳ bà, sáo trúc và các nhạc cụ dân tộc khác.

Phân chia theo trình độ nhập môn, cơ bản và nâng cao nếu phù hợp với chương trình thực tế.

Nêu rõ nội dung học, phương pháp thực hành cùng nghệ nhân và giá trị văn hóa của từng nhạc cụ.

Trình bày bằng bố cục biên tập kiểu tạp chí hoặc danh mục tư liệu, không sử dụng giao diện bán khóa học.

Trang Di sản nhạc cụ

Giới thiệu nguồn gốc, cấu tạo, âm sắc và vai trò văn hóa của từng nhạc cụ.

Hình ảnh chi tiết, chú thích ngắn và bố cục gợi liên tưởng đến sách nghiên cứu hoặc hồ sơ lưu trữ.

Có thể bổ sung âm thanh minh họa và video biểu diễn nếu có tư liệu phù hợp.

Trang Không gian truyền nghề

Giới thiệu lớp học, các buổi thực hành, hoạt động giao lưu và những khoảnh khắc nghệ nhân hướng dẫn học viên.

Ưu tiên ảnh tư liệu tự nhiên, không tạo cảm giác lớp học thương mại.

Kể câu chuyện về sự tiếp nối giữa nghệ nhân và thế hệ trẻ.

Trang Văn hóa & sự kiện

Giới thiệu buổi biểu diễn, workshop, giao lưu nghệ nhân và hoạt động gìn giữ âm nhạc truyền thống.

Trình bày theo dạng nhật ký văn hóa, tạp chí hoặc sổ lưu trữ.

Mỗi bài viết có trang nội dung riêng.

Trang Về Hồn Việt & Liên hệ

Câu chuyện hình thành trung tâm, sứ mệnh và quan điểm bảo tồn văn hóa.

Giới thiệu không gian, đội ngũ và định hướng truyền nghề.

Thông tin liên hệ và biểu mẫu đăng ký tư vấn hoặc tìm hiểu lớp học.

3. Bố cục và tương tác

Thiết kế mỗi trang như một chương trong cuốn sách văn hóa Việt Nam: ảnh lớn, tiêu đề giàu cảm xúc, khoảng trắng có chủ ý, đường phân cách mảnh và chú thích ảnh mang phong cách tư liệu.

Sử dụng nền giấy cũ xen kẽ những khu vực nền nâu gỗ. Có thể thêm họa tiết trống đồng, hoa văn dân gian hoặc nét mực thủ công ở mức tiết chế. Không sử dụng họa tiết cung đình Trung Hoa thay cho bản sắc Việt Nam.

Animation nhẹ nhàng: ảnh xuất hiện từ từ khi cuộn, chuyển cảnh mềm, hiệu ứng giấy hoặc mực rất tinh tế. Ưu tiên cảm xúc và nội dung hơn hiệu ứng.

Menu rõ ràng, responsive, các liên kết hoạt động đúng chức năng. Biểu mẫu liên hệ có xác thực dữ liệu và thông báo kết quả.

4. Yêu cầu đầu ra

Xây dựng website đa trang hoàn chỉnh, mỗi trang có nội dung và bố cục riêng, không chỉ là một landing page kéo dài. Giữ thiết kế nhất quán nhưng tránh lặp lại cùng một mẫu card ở tất cả các trang.

Không có giỏ hàng, mua nhạc cụ, thanh toán hoặc chức năng thương mại điện tử. Không tự bịa thông tin về nghệ nhân thật; sử dụng nội dung mẫu có thể thay thế khi chưa có dữ liệu.

Mục tiêu: Tạo ra một không gian văn hóa số giàu chất liệu cổ và cảm xúc hoài niệm, nơi người xem cảm nhận được giá trị của việc học nhạc cụ dân tộc trực tiếp từ nghệ nhân và sự tiếp nối của di sản Việt Nam.
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
