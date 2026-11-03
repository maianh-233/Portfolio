# Brief website — BLOOM & CRUMB

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website tiệm bánh
- **Tên thương hiệu / dự án:** **BLOOM & CRUMB** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** 1. Tổng quan

Thiết kế website giới thiệu BLOOM & CRUMB, thương hiệu bánh thủ công lấy cảm hứng từ khu vườn, nguyên liệu tự nhiên và nhịp sống chậm. Giao diện cần có cảm giác chân thật, tinh tế, gần thiên nhiên; không sử dụng phong cách vintage quá cũ hoặc pastel dễ thương.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **English — Tiếng Anh** → `<html lang="en">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Anh: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Nature / Organic / Atmospheric** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 2 — Atmospheric** (mặc định của preset). Được dùng: thêm `data-split`, `data-reveal="clip"`, `data-reveal-stagger`, `data-parallax` ≤ 0.2, marquee, kéo ngang; atmos.js: `data-float`, `data-gradient-shift`, `data-clouds` / `data-particles` ở **một** section trên mỗi trang.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Fraunces:opsz,wght@9..144,400;9..144,600`, body `Manrope:wght@400;500;700`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Fraunces`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Tool kiểm tra font preset: `Manrope`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Font nào thiếu ký tự tiếng Anh → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Inter` / `Source Serif 4`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 2.051 ký tự, 61 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. Art direction

Xanh sage #A6B49A, kem yến mạch #F5F0E5, nâu đất #8B6F52, xanh rừng #384A38.

Heading dùng serif mềm mại; nội dung dùng sans-serif gọn gàng.

Hình ảnh: sourdough, croissant, tart trái cây, bánh mì hạt, hoa tươi, bột mì, vải linen và nguyên liệu trên bàn gỗ.

Ánh sáng tự nhiên, bóng đổ mềm, tông màu trung tính.

Sử dụng các mảng ảnh lớn, khung hình không đồng đều và đường nét thực vật tối giản.

Tránh quá nhiều họa tiết lá, nền xanh toàn bộ hoặc hiệu ứng giấy nhám nặng.

3. Trang chủ

Header màu kem, logo BLOOM & CRUMB, menu và VI–EN.

Hero chia đôi bất đối xứng: ảnh bánh thủ công lớn bên trái, headline “Baked Slowly, Made with Nature” bên phải.

Một đoạn giới thiệu triết lý làm bánh, trình bày với nhiều khoảng trắng.

Section “From Our Oven”: 3 sản phẩm tiêu biểu, mỗi thẻ có ảnh và mô tả nguyên liệu.

Section “Inspired by Nature”: ảnh nguyên liệu, hoa, bàn làm bánh; văn bản ngắn giải thích nguồn cảm hứng.

Gallery không gian tiệm dạng ảnh ngang xen ảnh dọc.

Footer nền xanh rừng, chữ kem và điều hướng đơn giản.

4. Trang Sản phẩm & Menu

Hero ngắn với ảnh nguyên liệu hoặc khay bánh.

Danh mục Artisan Bread, Viennoiserie, Fruit Tarts, Seasonal Bakes.

Desktop dùng lưới 3 cột; một số sản phẩm nổi bật chiếm hai cột để tạo nhịp điệu.

Mỗi sản phẩm có ảnh, tên, mô tả hương vị và nguyên liệu nổi bật nếu phù hợp.

Dùng nền kem, đường kẻ mảnh, không đóng khung mọi sản phẩm.

5. Trang Về chúng tôi

Hero ảnh bàn làm bánh trong ánh sáng ban mai.

Câu chuyện thương hiệu và triết lý làm bánh thủ công.

Ba nội dung biên tập: nguyên liệu, quy trình, cảm hứng theo mùa.

Ảnh cận cảnh bột, lớp vỏ bánh, trái cây và không gian.

Không tự khẳng định hữu cơ, thuần chay hoặc nguồn gốc nguyên liệu nếu chưa có dữ kiện.

6. Chuyển động

Ảnh xuất hiện bằng fade nhẹ, đường nét thực vật chuyển động chậm, hover zoom ảnh rất nhẹ. Tôn trọng reduced motion và ưu tiên tải nhanh.

7. Ràng buộc

Tối đa 3 trang; Việt–Anh đầy đủ; không có đặt bánh, giỏ hàng, checkout, form mua hàng hoặc chức năng giao dịch. Có nút chuyển trang anh việt
~~~

## Preset

### Preset: Nature / Organic / Atmospheric (`nature`)
Rêu, gỗ, sương sớm — chất liệu tự nhiên, nhịp chậm.

**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `moss` #3F5A3C · `fern` #6F8B5E · `mist` #F4F1EA · `sand` #E9E1D1 · `bark` #5A4636 · `sky` #BFD3D6 · `ochre` #C98A3D · `ink` #1F271D
**Font** (Google Fonts): display `Fraunces:opsz,wght@9..144,400;9..144,600` · body `Manrope:wght@400;500;700`

**Chữ**
- Tiêu đề Fraunces (serif mềm), một từ in nghiêng màu fern để nhấn ý.
- Thân bài Manrope 17px, màu ink/75; số liệu (độ cao, nhiệt độ, mùa) đặt thành nhãn nhỏ.
**Bố cục**
- Bố cục hữu cơ: ảnh bo góc lớn (rounded-[2rem]) hoặc vòm (rounded-t-full) xen ảnh vuông sắc cạnh.
- Lưới lệch nhịp 12 cột: ảnh chiếm 7 cột, chữ 4 cột lệch xuống; dải ảnh ngang kéo được.
- Nền mist / sand xen một dải moss đậm cho phần số liệu hoặc trích dẫn.
**Ảnh**
- Ảnh thật: rừng sương, lá cận cảnh, bàn tay làm việc, chất liệu gỗ / đá / vải lanh.
- Tông ấm hơi phai: `saturate-[.9] sepia-[.08]`.
**Khoảng trắng:** Rộng rãi, `py-24 lg:py-32`, khối chữ ngắn.
**Chuyển động mặc định:** Level 2 — Atmospheric
- `data-reveal="clip"` cho ảnh lớn, `data-reveal-stagger` cho lưới, `data-parallax` 0.1–0.15 cho ảnh hero.
- Một section có `data-particles="dust"` (nắng xuyên rừng) hoặc `data-clouds` mỏng (sương) — không hơn.
- `data-float` rất nhẹ (6px) cho 1–2 chi tiết trang trí (lá, nhãn).
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-split` → `story-editorial` → `features-numbered` → `gallery-lookbook` → `stats-band` → `quote-full` → `contact-split` → `footer-big`
**Được phép (ghi đè layout-guide mục 3):** sương mỏng bằng gradient; hình vòm / bo lớn
**Tránh:** xanh lá tươi chói; icon lá cây clip-art; gradient đa màu
