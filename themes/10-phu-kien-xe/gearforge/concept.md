# Brief website — GEARFORGE

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** PROMPT THIẾT KẾ WEBSITE BÁN PHỤ KIỆN XE
- **Tên thương hiệu / dự án:** **GEARFORGE** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website thương mại điện tử cho GEARFORGE, thương hiệu chuyên kinh doanh phụ kiện và đồ chơi xe máy, ô tô. Website có giao diện hiện đại, cá tính, mang tinh thần tốc độ và công nghệ cơ khí. Mục tiêu là trưng bày sản phẩm, giúp khách hàng tìm kiếm phụ kiện phù hợp và đặt mua dễ dàng.

Phong cách thiết kế: Automotive Performance, Modern Industrial, Sporty, Premium Tech.

Màu sắc chủ đạo: Đen than #111318, xám kim loại #292D33, trắng bạc #F3F4F6, cam nổi bật #FF6B2C.

Sử dụng hình ảnh xe độ, chi tiết cơ khí, phụ kiện kim loại và ánh sáng tương phản mạnh. Typography đậm, hiện đại, bố cục rõ ràng, tạo cảm giác chuyên nghiệp như một thương hiệu phụ kiện xe cao cấp.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Minimal / Premium / Editorial** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** — BA chọn. Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Instrument Serif:ital@0;1`, body `Geist:wght@300;400;500;600`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Instrument Serif`: có trên Google Fonts nhưng **THIẾU ký tự tiếng Việt** ✗
  - Tool kiểm tra font preset: `Geist`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 2.455 ký tự, 61 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. Cấu trúc website — 3 trang chính

Trang 1: Trang chủ (Home)

Header gồm logo GEARFORGE và menu điều hướng đến 3 trang chính.

Hero banner nổi bật với hình ảnh xe độ, tiêu đề “UPGRADE YOUR RIDE.”, mô tả thương hiệu và nút “Khám phá bộ sưu tập”.

Giới thiệu ngắn về GEARFORGE, định hướng thiết kế và giá trị thương hiệu.

Khu vực danh mục nổi bật: Phụ kiện ô tô, phụ kiện xe máy, đồ chơi xe, phụ kiện nội thất và thiết bị công nghệ.

Trưng bày một số sản phẩm tiêu biểu dưới dạng thẻ hình ảnh, gồm tên, mô tả ngắn và nút “Xem chi tiết”.

Banner giới thiệu phong cách sống, tinh thần tốc độ và chất lượng sản phẩm.

Khu vực giá trị thương hiệu và footer có thông tin liên hệ, mạng xã hội.

Trang 2: Bộ sưu tập sản phẩm (Collections)

Trưng bày toàn bộ danh mục phụ kiện bằng bố cục lưới 3–4 cột trên desktop.

Mỗi thẻ sản phẩm gồm hình ảnh chất lượng cao, tên sản phẩm, loại phụ kiện và mô tả ngắn.

Phân loại theo phụ kiện ô tô, xe máy, ngoại thất, nội thất và thiết bị công nghệ.

Có bộ lọc danh mục và thanh tìm kiếm để khách tham quan dễ dàng khám phá sản phẩm.

Khi chọn sản phẩm, mở trang chi tiết hoặc cửa sổ giới thiệu riêng.

Không hiển thị giá bán, nút mua hàng, giỏ hàng hoặc các yếu tố thúc đẩy giao dịch.

Trang 3: Chi tiết sản phẩm & Công nghệ (Product Showcase)

Trình bày chi tiết từng phụ kiện với thư viện hình ảnh lớn, hình chụp cận cảnh chất liệu và thiết kế.

Hiển thị tên sản phẩm, câu chuyện thiết kế, công dụng, chất liệu, thông số kỹ thuật và dòng xe tương thích.

Có khu vực giới thiệu công nghệ, điểm nổi bật và giá trị sử dụng của sản phẩm.

Cho phép chuyển đổi giữa các sản phẩm liên quan và quay lại bộ sưu tập.

Có nút “Tìm hiểu thêm” hoặc “Liên hệ tư vấn”, dẫn đến thông tin liên hệ ở footer hoặc trang chủ.

Thiết kế theo phong cách editorial kết hợp hình ảnh sản phẩm, tạo cảm giác như một catalogue phụ kiện xe cao cấp.

3. Trải nghiệm người dùng

Điều hướng mạch lạc giữa 3 trang, header và footer đồng bộ.

Tìm kiếm, lọc danh mục và xem chi tiết sản phẩm hoạt động tốt.

Hình ảnh sản phẩm là trọng tâm, kết hợp mô tả ngắn gọn, dễ đọc.

Responsive trên máy tính, tablet và điện thoại.

Nội dung, hình ảnh và dữ liệu sản phẩm thống nhất trên toàn website.

4. Hiệu ứng và chuyển động

Sử dụng hiệu ứng xuất hiện nhẹ khi cuộn, hover phóng to ảnh sản phẩm, chuyển cảnh mượt và hiệu ứng tương tác tinh tế. Có thể dùng hình ảnh xe toàn màn hình và hiệu ứng parallax nhẹ để tăng cảm giác tốc độ. Tránh animation quá phức tạp.
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
