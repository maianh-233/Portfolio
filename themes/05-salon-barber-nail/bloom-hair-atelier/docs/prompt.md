# Prompt đã dùng — BLOOM HAIR ATELIER

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
# Brief website — BLOOM HAIR ATELIER

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu tiệm salon tóc
- **Tên thương hiệu / dự án:** **BLOOM HAIR ATELIER** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu BLOOM HAIR ATELIER, một salon tóc nghệ thuật dành cho khách hàng yêu thích vẻ đẹp nữ tính, màu nhuộm sáng tạo và những kiểu tóc mềm mại, giàu tính thẩm mỹ.

BLOOM không chỉ là nơi cắt và nhuộm tóc mà còn là không gian để mỗi khách hàng thể hiện cá tính qua màu sắc, kiểu dáng và phong cách riêng.

Website cần mang tinh thần của một thương hiệu làm đẹp hiện đại, kết hợp vẻ mềm mại của hoa lá với phong cách editorial của các tạp chí thời trang.
- **Đối tượng khách truy cập:** Khách có nhu cầu làm tóc sẽ xem
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **English — Tiếng Anh** → `<html lang="en">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Anh: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Editorial / Magazine** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
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

> Nguyên văn, 5.495 ký tự, 127 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
# PROJECT: BLOOM HAIR ATELIER
## Soft Feminine × Contemporary Editorial × Artistic Hair Color

### 1. CONCEPT

Thiết kế website giới thiệu **BLOOM HAIR ATELIER**, salon tóc theo đuổi phong cách nữ tính, hiện đại và sáng tạo trong nghệ thuật tạo kiểu, nhuộm tóc.

Tinh thần thiết kế:
- Nữ tính nhưng không trẻ con, lãng mạn nhưng không sến.
- Pastel nhưng vẫn có chiều sâu, sang trọng nhưng gần gũi.
- Bố cục editorial bất đối xứng, typography thanh lịch, khoảng trắng thoáng.
- Hình ảnh tóc và màu nhuộm là trọng tâm, không gian salon chỉ đóng vai trò bổ trợ.
- Tránh giao diện spa truyền thống, quá nhiều hoa trang trí hoặc các card bo tròn giống nhau.

### 2. COLOR PALETTE

**Lavender phải là màu nhận diện nổi bật của toàn bộ website.**

- Bloom Lavender — `#B7A1D9`: màu chủ đạo, CTA và điểm nhấn.
- Soft Lavender — `#E9E0F3`: nền các section.
- Milky White — `#FFFDFB`: nền chính.
- Petal Pink — `#F2DDE5`: màu phụ nữ tính.
- Smoky Lilac — `#87768F`: tiêu đề và chi tiết nhấn.
- Deep Plum — `#382B3D`: chữ chính và footer.
- Soft Taupe — `#B9AEB7`: đường phân cách và chi tiết phụ.

Phối màu nhẹ nhàng nhưng có tương phản rõ ràng. Lavender phải xuất hiện xuyên suốt, không để hồng hoặc màu trung tính lấn át. Hạn chế gradient, màu neon và hiệu ứng trang trí rườm rà.

### 3. TYPOGRAPHY & IMAGES

- Heading: Cormorant Garamond hoặc DM Serif Display.
- Body: Manrope hoặc Inter, hỗ trợ đầy đủ tiếng Việt.
- Hình ảnh ưu tiên tóc layer, tóc uốn sóng, balayage và các màu Rose Brown, Lavender Brown, Beige Blonde, Soft Pink.
- Sử dụng ảnh chất lượng cao, ánh sáng tự nhiên, thể hiện rõ kết cấu và màu tóc.
- Không dùng ảnh spa, massage hoặc chăm sóc da làm hình ảnh chính.

### 4. WEBSITE STRUCTURE

Xây dựng 4 trang HTML riêng biệt:

#### PAGE 01 — HOME

- **Hero:** Ảnh người mẫu tóc nổi bật, headline “Bloom Into Your Own Beauty”, mô tả thương hiệu và nút khám phá dịch vụ, bộ sưu tập.
- **Our Signature:** Giới thiệu triết lý tôn vinh vẻ đẹp cá nhân.
- **Signature Services:** Cắt tạo kiểu, nhuộm màu, chăm sóc tóc; có ảnh, mô tả và giá tham khảo.
- **Color Stories:** Giới thiệu Rose Brown, Lavender Brown, Beige Blonde và Soft Pink bằng hình ảnh riêng.
- **Meet the Artists:** Ba hồ sơ stylist với ảnh, chuyên môn và mô tả ngắn.
- **Brand Quote & CTA:** Trích dẫn thương hiệu và nút khám phá dịch vụ.

#### PAGE 02 — SERVICES

- Hero giới thiệu dịch vụ.
- Quy trình tư vấn gồm 4 bước: Discover, Consult, Create, Finish.
- Chia dịch vụ thành 4 nhóm:
  1. Haircut & Styling.
  2. Hair Coloring.
  3. Perm & Texture.
  4. Hair Treatment.
- Mỗi dịch vụ hiển thị tên, mô tả, thời lượng và giá tham khảo.
- Thêm section “Find Your Hair Mood” với 4 phong cách: Soft, Romantic, Modern, Bold.
- Có ghi chú giá và thời lượng có thể thay đổi tùy tình trạng tóc.

#### PAGE 03 — GALLERY

- Hero với headline “A Little More Color”.
- Bộ lọc All Looks, Hair Color, Haircut, Styling.
- Tối thiểu 12 ảnh tóc, sử dụng CSS Grid hoặc masonry bất đối xứng.
- Hiệu ứng hover phóng to nhẹ.
- Nhấn ảnh mở lightbox, hỗ trợ xem ảnh trước/sau, đóng bằng nút hoặc phím Escape.
- Section “The Colors We Love” giới thiệu bảng màu tóc đặc trưng.
- CTA dẫn đến trang Services.

#### PAGE 04 — ABOUT

- Hero giới thiệu không gian BLOOM.
- **Our Story:** Ý nghĩa tên thương hiệu và triết lý làm đẹp cá nhân hóa.
- **Our Philosophy:** Ba giá trị Beauty, Creativity, Individuality.
- **Meet the Artists:** Hồ sơ chi tiết của các stylist.
- **Inside the Atelier:** Gallery 4–6 ảnh không gian salon.
- **Contact & Visit:** Địa chỉ, giờ hoạt động, điện thoại, email dưới dạng dữ liệu minh họa.

Không tự tạo lịch sử thành lập, giải thưởng hoặc thành tích chưa được xác minh.

### 5. GLOBAL HEADER & FOOTER

**Header dùng thống nhất trên cả 4 trang:**
- Logo BLOOM HAIR ATELIER.
- Menu Home, Services, Gallery, About.
- Bộ chuyển ngôn ngữ VI / EN.
- Nút Book a Visit / Đặt lịch.
- Header responsive, có menu mobile và trạng thái khi cuộn.

**Footer dùng thống nhất:**
- Logo và giới thiệu ngắn.
- Liên kết đến 4 trang.
- Thông tin liên hệ mẫu.
- Liên kết mạng xã hội dạng minh họa.
- Bản quyền.

### 6. BILINGUAL — VIETNAMESE & ENGLISH

Toàn bộ website phải hỗ trợ tiếng Việt và tiếng Anh, bao gồm:
- Menu, tiêu đề, mô tả và nút CTA.
- Tên dịch vụ, giá, bộ lọc và thông tin stylist.
- Lightbox, footer và các nội dung phụ.

Chuyển ngôn ngữ ngay trên trang hiện tại, không tự động quay về Home. Bố cục phải thích ứng với độ dài văn bản của từng ngôn ngữ.

### 7. TECHNICAL REQUIREMENTS

- Sử dụng HTML, CSS và JavaScript thuần.
- Tổ chức 4 file HTML riêng, dùng chung CSS và JavaScript.
- Responsive trên desktop, tablet và mobile.
- Tạo CSS variables cho toàn bộ bảng màu.
- Menu, chuyển ngôn ngữ, bộ lọc gallery và lightbox phải hoạt động.
- Tối ưu hình ảnh, hiệu ứng chuyển động nhẹ nhàng và khả năng truy cập.
- Kiểm tra đường dẫn, tránh ảnh lỗi và bảo đảm các trang liên kết chính xác.

### 8. SCOPE & FINAL REQUIREMENTS

Đây là website giới thiệu salon, **không phải website thương mại điện tử**.

Không triển khai backend, database, đăng nhập, giỏ hàng, thanh toán, API hoặc quy trình đặt lịch thực tế. Nút Đặt lịch chỉ là thành phần giao diện minh họa.

Sử dụng dữ liệu mẫu có ghi chú rõ ràng. Ưu tiên chất lượng hình ảnh, bố cục editorial và sự nhất quán của màu lavender. Mỗi trang cần có cách sắp xếp nội dung riêng, tránh lặp lại cùng một bố cục.

**Kết quả mong muốn:** Một website salon tóc nữ tính, hiện đại, giàu tính nghệ thuật, nhận diện lavender rõ ràng và có thể sử dụng tốt bằng cả tiếng Việt lẫn tiếng Anh.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Spa / làm đẹp** (`recipe:spa-beauty`, chưa đánh giá): Hero-split ảnh không gian → features-alternate liệu trình → stats/quote → gallery-masonry → contact-split (đặt lịch = bản demo).

**Bố cục gợi ý**
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 3 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 24 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 30 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 24 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.

**Tránh lặp:** các website dựng gần đây đã dùng `hero-split`, `gallery-lookbook`, `cta-type`, `hero-cinematic`, `features-tabs`, `cta-fullbleed`, `features-bento` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Editorial / Magazine (`editorial`)
Như tạp chí in: chữ lớn, lưới bất đối xứng, rất ít màu.

**Hợp với:** thời trang, tạp chí / xuất bản, kiến trúc, thương hiệu cá nhân
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `paper` #F5F3EF · `ink` #111111 · `stone` #D9D4CB · `muted` #6B6760 · `bronze` #8C6A43
**Font** (Google Fonts): display `Instrument Serif:ital@0;1` · body `Geist:wght@300;400;500;600`

**Thành phần giao diện**
- Nút chữ + gạch chân chạy hoặc khung chữ nhật viền 1px, góc vuông
- Không thẻ; phân khối bằng đường kẻ mảnh và số mục "No. 01"
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
~~~~
