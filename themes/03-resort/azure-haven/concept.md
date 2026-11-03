# Brief website — AZURE HAVEN

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Tên thương hiệu / dự án:** **AZURE HAVEN** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Xây dựng website giới thiệu AZURE HAVEN, một resort nghỉ dưỡng nhiệt đới cao cấp bên bờ biển. Website phải truyền tải cảm giác thư giãn, tự do, riêng tư và sang trọng thông qua hình ảnh thiên nhiên, không gian mở và bố cục giàu tính thẩm mỹ.

Đây là website giới thiệu thương hiệu, không phải nền tảng giao dịch.
- **Đối tượng khách truy cập:** Nhắm đến khách du lịch muốn lưu trú
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Luxury / Premium** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 2 — Atmospheric** (mặc định của preset). Được dùng: thêm `data-split`, `data-reveal="clip"`, `data-reveal-stagger`, `data-parallax` ≤ 0.2, marquee, kéo ngang; atmos.js: `data-float`, `data-gradient-shift`, `data-clouds` / `data-particles` ở **một** section trên mỗi trang.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Playfair Display:ital,wght@0,400;0,600;1,400`, body `Manrope:wght@300;400;500`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Playfair Display`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Manrope`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 3.418 ký tự, 87 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
Bảng màu chủ đạo:
- Deep Ocean: #123B46
- Turquoise: #55B9B2
- Sand Beige: #E9D9BE
- Warm White: #FAF8F2
- Palm Green: #667C59
ART DIRECTION
Phong cách Tropical Luxury kết hợp Contemporary Resort Design.
Sử dụng hình ảnh biển xanh ngọc, bãi cát sáng, hàng dừa, hồ bơi vô cực và villa mở ra đại dương.
Bảng màu gồm Deep Ocean #123B46, Turquoise #55B9B2, Sand Beige #E9D9BE, Warm White #FAF8F2 và Palm Green #667C59.
Typography kết hợp serif thanh lịch cho tiêu đề và sans-serif hiện đại cho nội dung. Tiêu đề lớn, khoảng cách chữ thoáng, hạn chế chữ in hoa toàn bộ.

3. TRANG CHỦ — INDEX.HTML

Header nền trong suốt khi bắt đầu, chuyển sang nền sáng khi cuộn.

Logo AZURE HAVEN đặt bên trái; menu và công tắc VI/EN đặt bên phải.

Hero toàn màn hình sử dụng ảnh resort ven biển chất lượng cao.

Tiêu đề lớn: “Where the Ocean Meets Serenity”.

Nội dung giới thiệu ngắn về thiên đường nghỉ dưỡng nhiệt đới.

Nút điều hướng “Khám phá resort”, dẫn đến trang giới thiệu.

Section giới thiệu resort sử dụng bố cục hai cột bất đối xứng: một ảnh lớn, một đoạn văn ngắn.

Section phòng nghỉ và villa trình bày bằng các thẻ ảnh lớn, có tên, mô tả và nút xem chi tiết.

Section tiện ích giới thiệu hồ bơi vô cực, nhà hàng, spa và khu vườn nhiệt đới.

Section trải nghiệm nổi bật sử dụng ảnh tràn chiều rộng và chữ phủ nhẹ trên ảnh.

Footer nền Deep Ocean, chứa logo, giới thiệu ngắn, điều hướng và thông tin liên hệ.

4. TRANG GIỚI THIỆU — PAGES/ABOUT.HTML

Hero sử dụng ảnh hàng dừa và kiến trúc resort.

Tiêu đề: “A Sanctuary by the Sea”.

Kể câu chuyện thương hiệu qua các đoạn văn ngắn, giàu cảm xúc.

Section triết lý nghỉ dưỡng: thiên nhiên, sự riêng tư và trải nghiệm cá nhân.

Section kiến trúc và cảnh quan với ảnh lớn, bố cục xen kẽ trái – phải.

Section giá trị thương hiệu sử dụng typography nổi bật và các khối nội dung tối giản.

Kết thúc bằng ảnh toàn cảnh resort và lời giới thiệu ngắn.

5. PHÒNG, VILLA & TIỆN ÍCH — PAGES/ACCOMMODATION.HTML

Hero giới thiệu không gian lưu trú.

Phần đầu phân biệt rõ phòng nghỉ, bungalow và villa.

Danh sách loại phòng bằng các thẻ ảnh lớn, ưu tiên tỷ lệ ngang.

Mỗi thẻ có tên, diện tích minh họa, sức chứa tham khảo và mô tả không gian.

Section villa riêng tư với ảnh lớn và phần mô tả bên cạnh.

Section tiện ích sử dụng lưới hình ảnh gồm hồ bơi, spa, nhà hàng, bãi biển riêng và khu vườn.

Không hiển thị giá, tình trạng phòng, lịch trống hoặc nút đặt phòng.

TRẢI NGHIỆM & KHÁM PHÁ — PAGES/EXPERIENCES.HTML
Hero thể hiện cảnh biển lúc bình minh.
Giới thiệu các trải nghiệm: ngắm hoàng hôn, yoga bên biển, khám phá thiên nhiên, ẩm thực nhiệt đới và thư giãn tại spa.
Sử dụng gallery ảnh lớn với tỷ lệ đa dạng.
Mỗi trải nghiệm có tiêu đề, mô tả và hình ảnh riêng.
Cuối trang là section giới thiệu vẻ đẹp thiên nhiên xung quanh resort.

MOTION & INTERACTION
Hero image zoom nhẹ khi tải trang.
Nội dung xuất hiện bằng fade-up khi cuộn.
Ảnh có hiệu ứng zoom nhẹ khi hover.
Các section ảnh có thể sử dụng hiệu ứng parallax rất nhẹ.
Menu mobile dạng drawer.
Nút chuyển ngôn ngữ hoạt động trên toàn bộ bốn trang.

RÀNG BUỘC
Không tạo đặt phòng, đặt lịch, biểu mẫu đặt dịch vụ, giỏ hàng hoặc thanh toán.
Không sử dụng một bố cục lặp lại cho tất cả section. Ưu tiên hình ảnh chất lượng cao, khoảng trắng rộng và thiết kế responsive.
Sử dụng HTML, CSS và JavaScript thuần. Các liên kết nội bộ phải hoạt động chính xác. Yêu cầu có nút chuyển đổi giữa 2 ngôn ngữ Tiếng Anh và Tiếng Việt
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Spa / làm đẹp** (`recipe:spa-beauty`, chưa đánh giá): Hero-split ảnh không gian → features-alternate liệu trình → stats/quote → gallery-masonry → contact-split (đặt lịch = bản demo).
- **Du lịch / khu nghỉ dưỡng** (`recipe:travel-resort`, chưa đánh giá): Hero-cinematic → story-pinned (3 khoảnh khắc) → gallery-lookbook → features-alternate (phòng / tour) → cta-fullbleed. Trang chi tiết tour / phòng.

**Bố cục gợi ý**
- **Hero ảnh tràn viền điện ảnh** (`composition:hero-cinematic`, chưa đánh giá, đã dùng 3 lần): Ảnh tràn `min-h-[100dvh]`, gradient từ đáy, tiêu đề góc dưới-trái cực lớn, CTA + 1 dòng phụ đề. _Tránh:_ Chữ đè mặt người / chủ thể ảnh; Thiếu lớp phủ → chữ không đọc được.
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 16 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.
- **Hero cảnh nhiều lớp** (`composition:hero-scene`, chưa đánh giá): Bầu trời gradient + mây + hạt + ảnh phong cảnh hòa đáy (`data-layers`, `data-depth`, mask-image). _Tránh:_ Không gắn data-reveal / data-parallax lên lớp data-depth.
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 18 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.

**Chuyển động gợi ý**
- **Ảnh mở màn che** (`motion:clip-image`, chưa đánh giá): `data-reveal="clip"` trên khung ảnh overflow-hidden chứa <img>. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Chữ tiêu đề trượt lên** (`motion:split-title`, chưa đánh giá): `data-split="words"` cho 1–2 tiêu đề lớn mỗi trang. _Tránh:_ CJK: tách theo chữ, không theo từ; Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Parallax ảnh hero** (`motion:parallax-hero`, chưa đánh giá): `data-parallax="0.15"` trên lớp bọc `absolute inset-x-0 -inset-y-[15%]`. _Tránh:_ Đặt chung phần tử có data-reveal / data-tilt; Dùng inset-0 → lộ mép.

**Tránh lặp:** các website dựng gần đây đã dùng `hero-split`, `features-numbered`, `gallery-lookbook`, `cta-type`, `hero-cinematic`, `hero-offset`, `features-tabs`, `features-bento` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Luxury / Premium (`luxury`)
Tinh tế, khoảng trắng có chủ đích, chất liệu cao cấp.

**Hợp với:** khách sạn / biệt thự cao cấp, trang sức / đồng hồ, nước hoa, bất động sản cao cấp
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `ivory` #F6F1E9 · `onyx` #141210 · `taupe` #8C7B6B · `champagne` #C8A96A · `line` #E3D9CA
**Font** (Google Fonts): display `Playfair Display:ital,wght@0,400;0,600;1,400` · body `Manrope:wght@300;400;500`

**Thành phần giao diện**
- Nút viền mảnh, chữ hoa giãn; hover lấp nền chậm
- Không bo góc, không bóng
**Chữ**
- Tiêu đề Playfair Display mảnh, cỡ lớn, một phần in nghiêng; nhãn chữ hoa `tracking-[0.3em]` 11px; thân Manrope 300 / 400.
**Bố cục**
- Đối xứng có kiểm soát; ảnh lớn trong khung mảnh; đường kẻ champagne mảnh; nhịp chậm.
**Ảnh**
- Ảnh sản phẩm / không gian cao cấp, ánh sáng mềm, chi tiết chất liệu cận cảnh.
**Khoảng trắng:** Rất rộng, nhịp chậm.
**Chuyển động mặc định:** Level 2 — Atmospheric
- `data-reveal="clip"` cho ảnh, `data-parallax` 0.1, `data-split="words"` cho 1 tiêu đề; chuyển động chậm, êm.
- Không particles / tilt / cursor / ripple.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-cinematic` → `story-editorial` → `gallery-lookbook` → `features-alternate` → `quote-full` → `cta-type` → `footer-big`
**Tránh:** vàng chói / gradient vàng; nhiều màu; icon dày; chữ đậm nặng
