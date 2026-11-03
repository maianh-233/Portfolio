# Brief website — MILKY DAY

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website giới thiệu thương hiệu trà sữa và bánh ngọt
- **Tên thương hiệu / dự án:** **MILKY DAY** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu thương hiệu trà sữa và bánh ngọt MILKY DAY. Thương hiệu hướng đến học sinh, sinh viên và người trẻ, mang tinh thần vui vẻ, ngọt ngào, gần gũi. Website phải giống một thương hiệu F&B được đầu tư nhận diện chuyên nghiệp, không phải giao diện bán hàng có sẵn.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
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
  - Tool kiểm tra font preset: `Fraunces`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Manrope`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 2.210 ký tự, 69 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. Art direction

Màu chính: hồng phấn #F5C8D8.

Nền: kem sữa #FFF8EF.

Màu chữ: nâu cacao #69483F.

Màu nhấn: vàng bơ #FFE6A7.

Heading dùng font sans-serif tròn, đậm; phần mô tả dùng sans-serif dễ đọc; có thể dùng chữ viết tay cho nhãn trang trí ngắn.

Bo góc lớn 20–32px, nút dạng pill, bóng đổ nhẹ, viền mềm.

Hình ảnh: trà sữa dâu, matcha latte, cupcake, cookie, bánh kem mini. Ưu tiên ảnh studio sáng, nền pastel và ánh sáng dịu.

Chi tiết đồ họa: ngôi sao nhỏ, nét vẽ kem, sticker trái tim, đường cong và hình bong bóng.

Không phủ sticker lên nội dung chính, không khiến giao diện giống trang dành cho trẻ nhỏ.

3. Trang chủ

Header nền kem, logo MILKY DAY dạng chữ, menu Trang chủ / Sản phẩm & Menu / Về chúng tôi và công tắc VI–EN.

Hero chia hai cột: bên trái là headline “Một ngày ngọt ngào hơn, từ ngụm đầu tiên”; bên phải là ảnh lớn gồm trà sữa và bánh. Có CTA “Khám phá menu”.

Dải giới thiệu ngắn về thương hiệu với ba từ khóa: Fresh, Sweet, Happy.

Khu vực “Được yêu thích” gồm 4 thẻ sản phẩm, ảnh vuông hoặc dọc, tên và mô tả ngắn.

Dải ảnh ghép thể hiện đồ uống, bánh ngọt và khoảnh khắc tại tiệm.

Phần giới thiệu không gian thương hiệu với CTA “Câu chuyện của chúng tôi”.

Footer nền hồng nhạt, logo, mô tả, điều hướng và thông tin liên hệ mẫu.

4. Trang Sản phẩm & Menu

Hero ngắn, không chiếm toàn màn hình.

Thanh danh mục: Trà sữa, Trà trái cây, Bánh ngọt, Cookie & Cupcake.

Lưới 3 cột desktop, 2 cột tablet, 1–2 cột mobile tùy chiều rộng.

Mỗi thẻ có ảnh, tên món, mô tả hương vị và nhãn phân loại nếu cần.

Có bộ lọc danh mục hoạt động bằng client-side; không cần backend.

Kết thúc bằng một dải hình ảnh và CTA quay về Trang chủ.

5. Trang Về chúng tôi

Hero ảnh không gian tiệm.

Câu chuyện thương hiệu với văn phong gần gũi.

Ba giá trị: nguyên liệu được chọn lọc, hương vị vui tươi, không gian thân thiện.

Ảnh chi tiết đồ uống, bánh và không gian.

Footer đồng bộ.

6. Chuyển động

Dùng fade-in nhẹ khi cuộn, hover nâng thẻ 3–4px, sticker trang trí chuyển động rất nhẹ. Tắt hoặc giảm chuyển động khi người dùng bật reduced motion.

7. Ràng buộc

Tuân thủ toàn bộ QUY CHUẨN CHUNG. Tối đa 3 trang, song ngữ hoàn chỉnh, không có đặt hàng, giỏ hàng, thanh toán hoặc form giao dịch.
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
