# Prompt đã dùng — MOSS & MIST NAIL STUDIO

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
# Brief website — MOSS & MIST NAIL STUDIO

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu
- **Tên thương hiệu / dự án:** **MOSS & MIST NAIL STUDIO** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu MOSS & MIST NAIL STUDIO, nail studio lấy cảm hứng từ thực vật, vẻ đẹp tự nhiên và nghệ thuật chăm sóc móng tinh tế.
- **Đối tượng khách truy cập:** Khách có nhu cầu sẽ xem
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

- **KHÔNG khả dụng**: openverse: quá 15s không phản hồi.
- Gọi `search_images` **tối đa 1 lần** để xác nhận; vẫn lỗi thì không gọi nữa — chuyển sang **link ảnh**: tìm bằng WebSearch (Pinterest, trang ảnh, trang của thương hiệu…) rồi kiểm qua `link_image`, ghi `"status": "link"` trong sitemap.json. Không có link phù hợp mới dựng bố cục không ảnh (`"status": "none"`). **Không vẽ SVG / CSS thay ảnh chụp.**

## 8. Chú thích bổ sung của BA

> Nguyên văn, 2.809 ký tự, 74 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
# PROJECT: MOSS & MIST NAIL STUDIO
## Botanical Nail Care Studio

Thiết kế website giới thiệu MOSS & MIST NAIL STUDIO, nail studio lấy cảm hứng từ thực vật, vẻ đẹp tự nhiên và nghệ thuật chăm sóc móng tinh tế.

### 1. ART DIRECTION
- Botanical Modern kết hợp Organic Editorial.
- Màu xanh sage, xanh rêu, kem và nâu gỗ nhạt.
- Typography serif tự nhiên kết hợp sans-serif.
- Hình ảnh lá cây, hoa nhỏ, chất liệu đá, gỗ và nail art lấy cảm hứng từ thực vật.
- Layout mềm mại, đường cong hữu cơ, khoảng trắng rộng.
- Tránh biến website thành spa hoặc cửa hàng mỹ phẩm.

### 2. TRANG CHỦ — HOME
**Header**
- Logo MOSS & MIST.
- Menu, chuyển ngôn ngữ VI / EN và CTA Đặt lịch.
- Nền kem, đường kẻ mảnh.

**Hero**
- Hình ảnh nail art hoa lá hoặc bàn tay trên nền thực vật.
- Tiêu đề "A Little Nature at Your Fingertips".
- Mô tả ngắn về nghệ thuật nail lấy cảm hứng từ thiên nhiên.
- CTA khám phá dịch vụ.
- Bố cục kết hợp hình ảnh lớn và typography mềm mại.

**Our Philosophy**
- Giới thiệu triết lý chăm sóc móng nhẹ nhàng.
- Ba giá trị: Natural Beauty, Thoughtful Care, Artful Details.

**Signature Services**
- Botanical Nail Art, Natural Manicure và Gel Polish.
- Ảnh, mô tả và giá tham khảo.

**Botanical Collection**
- Gallery các bộ móng lấy cảm hứng từ lá, hoa, màu đất và mùa.

**The Studio**
- Giới thiệu không gian, chất liệu tự nhiên và đội ngũ nail artist.

**Footer**
- Thông tin liên hệ, giờ hoạt động và CTA.

### 3. TRANG DỊCH VỤ — SERVICES & PRICING
- Hero với tiêu đề "Thoughtful Nail Care".
- Nhóm Natural Manicure, Pedicure, Gel Polish, Nail Extensions và Botanical Nail Art.
- Mỗi nhóm có ảnh minh họa, mô tả, thời lượng và giá tham khảo.
- Section giới thiệu các phong cách nail art lấy cảm hứng từ thực vật.
- Bảng giá được trình bày nhẹ nhàng, dễ đọc.
- Có mục hướng dẫn chăm sóc móng cơ bản sau dịch vụ.

### 4. TRANG BỘ SƯU TẬP — BOTANICAL COLLECTION
- Hero với ảnh nail art hoa lá.
- Tiêu đề "Inspired by Nature".
- Bộ lọc Floral, Leaves, Earth Tones, Minimal và Seasonal.
- Gallery dạng editorial, kết hợp ảnh cận cảnh và hình minh họa thực vật.
- Mỗi ảnh có tên thiết kế, màu chủ đạo và mô tả ngắn.
- Nhấn ảnh mở lightbox.
- Cuối trang có phần giới thiệu cảm hứng thiết kế.

### 5. TRANG GIỚI THIỆU — OUR STUDIO
- Hero ảnh không gian với cây xanh và ánh sáng tự nhiên.
- Câu chuyện thương hiệu và cảm hứng từ thiên nhiên.
- Giới thiệu đội ngũ nail artist với ảnh và chuyên môn.
- Gallery bàn làm móng, vật liệu và các chi tiết nội thất.
- Section mô tả trải nghiệm tại studio.
- Thông tin liên hệ, giờ mở cửa và địa chỉ mẫu.

### 6. YÊU CẦU
- Song ngữ Việt – Anh đầy đủ trên cả 4 trang.
- Responsive, HTML/CSS/JS thuần.
- Menu, gallery, bộ lọc và lightbox hoạt động.
- CTA Đặt lịch chỉ để minh họa giao diện, không xử lý lịch hẹn.
- Không backend, không bán sản phẩm, không thanh toán.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Spa / làm đẹp** (`recipe:spa-beauty`, chưa đánh giá): Hero-split ảnh không gian → features-alternate liệu trình → stats/quote → gallery-masonry → contact-split (đặt lịch = bản demo).
- **Nhà hàng / quán cà phê** (`recipe:restaurant-cafe`, chưa đánh giá): Hero-cinematic hoặc hero-offset → story-letter → menu dạng features-numbered / tabs → gallery-filmstrip → contact-split (giờ mở cửa, bản đồ, đặt bàn = bản demo).

**Bố cục gợi ý**
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 37 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.
- **Hero cảnh nhiều lớp** (`composition:hero-scene`, chưa đánh giá, đã dùng 1 lần): Bầu trời gradient + mây + hạt + ảnh phong cảnh hòa đáy (`data-layers`, `data-depth`, mask-image). _Tránh:_ Không gắn data-reveal / data-parallax lên lớp data-depth.
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 6 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **Hero chia đôi chữ – ảnh** (`composition:hero-split`, chưa đánh giá, đã dùng 13 lần): Chữ 5–6/12 cột trái, ảnh tràn mép phải ở lg+; mobile chữ → ảnh.

**Chuyển động gợi ý**
- **Ảnh mở màn che** (`motion:clip-image`, chưa đánh giá): `data-reveal="clip"` trên khung ảnh overflow-hidden chứa <img>. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Parallax ảnh hero** (`motion:parallax-hero`, chưa đánh giá): `data-parallax="0.15"` trên lớp bọc `absolute inset-x-0 -inset-y-[15%]`. _Tránh:_ Đặt chung phần tử có data-reveal / data-tilt; Dùng inset-0 → lộ mép.
- **Hạt sáng / mây** (`motion:atmos-particles`, chưa đánh giá): atmos.js: `data-particles="dust|fireflies|stars|petals"` một section (Level 2), `data-clouds="3"`. _Tránh:_ Chữ trên nền có hạt thiếu tương phản; Tôn trọng prefers-reduced-motion (thư viện đã xử lý).

**Tránh lặp:** các website dựng gần đây đã dùng `hero-split`, `features-numbered`, `gallery-lookbook`, `features-alternate`, `cta-type`, `hero-offset`, `features-bento` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Nature / Organic / Atmospheric (`nature`)
Rêu, gỗ, sương sớm — chất liệu tự nhiên, nhịp chậm.

**Hợp với:** nông sản / hữu cơ, trà / thảo mộc, homestay / retreat, spa thiên nhiên, du lịch sinh thái
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `moss` #3F5A3C · `fern` #6F8B5E · `mist` #F4F1EA · `sand` #E9E1D1 · `bark` #5A4636 · `sky` #BFD3D6 · `ochre` #C98A3D · `ink` #1F271D
**Font** (Google Fonts): display `Fraunces:opsz,wght@9..144,400;9..144,600` · body `Manrope:wght@400;500;700`

**Thành phần giao diện**
- Nút bo tròn mềm nền moss, chữ mist
- Ảnh bo lớn / vòm; thẻ nền sand không viền, bóng rất nhẹ
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
~~~~
