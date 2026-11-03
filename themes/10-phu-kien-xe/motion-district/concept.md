# Brief website — MOTION DISTRICT

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** PROMPT THIẾT KẾ WEBSITE BÁN PHỤ KIỆN XE
- **Tên thương hiệu / dự án:** **MOTION DISTRICT** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website thương mại điện tử cho MOTION DISTRICT, thương hiệu chuyên kinh doanh phụ kiện xe máy, đồ bảo hộ và đồ chơi xe dành cho giới trẻ yêu thích phong cách đường phố.

Định hướng thiết kế: Urban Moto Lifestyle, Street Culture, Contemporary Editorial.

Khác với phong cách garage công nghiệp truyền thống, website mang tinh thần streetwear, năng động và phóng khoáng. Kết hợp hình ảnh xe máy trong bối cảnh đô thị, đường phố về đêm, những chuyến đi và văn hóa biker hiện đại.

Bảng màu: Kem nhạt #F3F0E8, xanh rêu đậm #35483B, đen mực #191A18, đỏ gạch #C6533B.

Sử dụng typography sans-serif đậm kết hợp font editorial, hình ảnh mang chất ảnh phim, bố cục bất đối xứng, nhãn dán đồ họa và các mảng màu tương phản. Giao diện phải có cá tính riêng, không giống các website bán phụ kiện xe thông thường.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **English — Tiếng Anh** → `<html lang="en">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Anh: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Minimal / Premium / Editorial** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
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

> Nguyên văn, 3.044 ký tự, 79 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. Cấu trúc website — 3 trang chính

Trang 1: Trang chủ (Home)

Header gồm logo MOTION DISTRICT và menu điều hướng đến 3 trang chính.

Hero banner với hình ảnh xe máy trong không gian đô thị, tiêu đề lớn “RIDE YOUR OWN WAY.”, mô tả ngắn và nút “Khám phá bộ sưu tập”.

Giới thiệu ngắn về thương hiệu, triết lý thiết kế và tinh thần tự do.

Các danh mục nổi bật: Phụ kiện xe, mũ bảo hiểm, đồ bảo hộ, túi gắn xe và đồ chơi xe.

Khu vực giới thiệu các sản phẩm tiêu biểu bằng hình ảnh lớn, tên sản phẩm và mô tả ngắn.

Banner kể câu chuyện về văn hóa biker và phong cách sống đô thị.

Footer gồm thông tin thương hiệu, liên hệ và mạng xã hội.

Trang 2: Bộ sưu tập (Collections)

Trưng bày các dòng phụ kiện theo bố cục lưới 3–4 cột trên desktop.

Mỗi thẻ gồm ảnh sản phẩm, tên, danh mục và mô tả ngắn.

Phân loại theo phụ kiện xe máy, mũ bảo hiểm, đồ bảo hộ, túi gắn xe và phụ kiện phong cách.

Có bộ lọc danh mục và tìm kiếm để khách tham quan dễ khám phá.

Khi nhấn vào sản phẩm, mở trang chi tiết hoặc cửa sổ giới thiệu sản phẩm.

Không hiển thị giá bán, giỏ hàng hoặc nút mua hàng.

Trang 3: Chi tiết sản phẩm & Câu chuyện thiết kế (Product Showcase)

Trình bày sản phẩm bằng hình ảnh lớn, ảnh cận cảnh chất liệu, kiểu dáng và chi tiết hoàn thiện.

Hiển thị tên sản phẩm, câu chuyện thiết kế, công năng, chất liệu, thông số kỹ thuật và khả năng tương thích với từng dòng xe nếu có.

Giới thiệu điểm nổi bật, cảm hứng sáng tạo và giá trị sử dụng của sản phẩm.

Có khu vực gợi ý các sản phẩm cùng bộ sưu tập.

Cho phép chuyển sang sản phẩm khác hoặc quay lại trang Bộ sưu tập.

Có nút “Tìm hiểu thêm” hoặc “Liên hệ thương hiệu”, không có chức năng đặt mua.

3. Ngôn ngữ thiết kế

Kết hợp ảnh sản phẩm nền trung tính với ảnh lifestyle ngoài đường phố.

Sử dụng chữ lớn, khoảng trắng rộng, bố cục bất đối xứng và các chi tiết đồ họa lấy cảm hứng từ poster đô thị.

Tạo cảm giác như một tạp chí về xe máy, phụ kiện và văn hóa đường phố.

Tránh phong cách gara công nghiệp, giao diện cửa hàng trực tuyến truyền thống và hiệu ứng neon.

Giữ giao diện nhất quán trên cả 3 trang.

4. Hiệu ứng và trải nghiệm

Sử dụng animation vừa phải: ảnh phóng to nhẹ khi hover, hiệu ứng xuất hiện khi cuộn, chuyển cảnh mượt và parallax nhẹ ở banner lớn. Ưu tiên hình ảnh và bố cục hơn hiệu ứng phức tạp.

Website phải responsive trên máy tính, tablet và điện thoại. Các liên kết điều hướng, tìm kiếm, bộ lọc danh mục và chức năng xem chi tiết sản phẩm cần hoạt động tốt.

5. Yêu cầu bắt buộc

Chỉ tạo 3 trang chính: Home, Collections và Product Showcase.

Đây là website giới thiệu thương hiệu và trưng bày phụ kiện, KHÔNG phải website bán hàng.

Không có giá bán, giỏ hàng, thanh toán, đặt hàng, mã giảm giá hoặc tài khoản mua hàng.

Không sử dụng nút “Mua ngay”, “Thêm vào giỏ hàng” hoặc các CTA giao dịch.

Chỉ sử dụng CTA như “Khám phá bộ sưu tập”, “Xem chi tiết”, “Tìm hiểu thêm” và “Liên hệ”.

Không tạo thêm trang chính ngoài 3 trang đã chỉ định.

Ưu tiên giao diện có cá tính, hình ảnh ấn tượng, trải nghiệm khám phá trực quan và bản sắc thương hiệu rõ ràng.
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
