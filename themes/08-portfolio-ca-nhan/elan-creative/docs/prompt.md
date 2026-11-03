# Prompt đã dùng — ÉLAN CREATIVE

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
# Brief website — ÉLAN CREATIVE

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website portfolio cá nhân
- **Tên thương hiệu / dự án:** **ÉLAN CREATIVE** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Giới thiệu portfolio cá nhân thui . Là một mẫu cho các khách hàng của tui tham khảo
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

> Nguyên văn, 1.698 ký tự, 29 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
Thiết kế landing page Portfolio & CV cho một Graphic Designer hoặc Visual Designer mang thương hiệu cá nhân ÉLAN CREATIVE.

**1. Phong cách thiết kế**

Theo đuổi phong cách Swiss Editorial kết hợp Creative Art Direction. Website phải trông giống một ấn phẩm thiết kế đương đại, không giống giao diện công ty thông thường.

- Màu chủ đạo: trắng ngà, đen tuyền và đỏ cam.
- Font chữ: sans-serif hiện đại kết hợp typography cỡ lớn.
- Bố cục bất đối xứng, khoảng trắng rộng, tiêu đề lớn và hình ảnh dự án nổi bật.
- Sử dụng số thứ tự, đường kẻ và nhãn nhỏ để tạo nhịp điệu thị giác.

**2. Bố cục landing page**

- Header: Tên thương hiệu, menu Work, About, Resume và Contact.
- Hero: Tên designer hiển thị thật lớn, chức danh Creative Designer và một câu giới thiệu thể hiện tư duy sáng tạo.
- Selected Works: Trình bày 4 dự án với kích thước hình ảnh khác nhau, gồm thiết kế nhận diện thương hiệu, poster, editorial và chiến dịch hình ảnh.
- Design Philosophy: Giới thiệu quan điểm thiết kế và quy trình sáng tạo.
- Skills: Branding, Typography, Layout Design, Art Direction và các công cụ chuyên môn.
- Resume: Kinh nghiệm làm việc, học vấn, chứng chỉ và thành tựu.
- Contact: Email, LinkedIn và lời mời hợp tác.
- Footer: Thiết kế tối giản, có dòng chữ thể hiện dấu ấn cá nhân.

**3. Hiệu ứng**

Các dự án có hiệu ứng hover làm thay đổi kích thước hoặc vị trí hình ảnh nhẹ. Tiêu đề xuất hiện theo từng nhóm khi cuộn trang. Có thể sử dụng con trỏ tùy chỉnh trên desktop nhưng phải giữ khả năng sử dụng thông thường.

**4. Yêu cầu đầu ra**

Tất cả nội dung nằm trên một landing page duy nhất. Ưu tiên chất lượng trình bày dự án và khả năng thể hiện cá tính thiết kế. Không thêm chức năng bán sản phẩm.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Nhà hàng / quán cà phê** (`recipe:restaurant-cafe`, chưa đánh giá): Hero-cinematic hoặc hero-offset → story-letter → menu dạng features-numbered / tabs → gallery-filmstrip → contact-split (giờ mở cửa, bản đồ, đặt bàn = bản demo).

**Bố cục gợi ý**
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 9 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Hero ảnh chồng lệch** (`composition:hero-offset`, chưa đánh giá): 2–3 ảnh chồng lệch / xoay nhẹ, tiêu đề đè mép ảnh, nhãn dán bo tròn.
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **Footer wordmark lớn** (`composition:footer-big`, chưa đánh giá): Tên thương hiệu cực lớn ở đáy, 3–4 cột link / liên hệ phía trên.

**Chuyển động gợi ý**
- **Lưới hiện lần lượt** (`motion:stagger-grid`, chưa đánh giá): `data-reveal-stagger="80"` trên khối cha của lưới thẻ. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Băng chuyền chữ / logo** (`motion:marquee`, chưa đánh giá): `data-marquee="40"`. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Tương tác chuột (tilt / magnetic / spotlight)** (`motion:pointer-fx`, chưa đánh giá): `data-tilt="6"` thẻ, `data-magnetic="0.3"` CTA, `data-spotlight` panel tối. Tự tắt trên điện thoại. _Tránh:_ Dùng cho phong cách tinh tế (editorial, luxury, minimal); Tôn trọng prefers-reduced-motion (thư viện đã xử lý).

**Tránh lặp:** các website dựng gần đây đã dùng `hero-split`, `features-tabs`, `gallery-lookbook`, `features-numbered`, `hero-slider`, `features-bento`, `cta-type` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


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
