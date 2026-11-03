# Prompt đã dùng — FORM & FOLLICLE

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
# Brief website — FORM & FOLLICLE

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu salon tóc
- **Tên thương hiệu / dự án:** **FORM & FOLLICLE** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu FORM & FOLLICLE, salon tóc hiện đại dành cho khách hàng trẻ yêu thích các kiểu tóc cá tính, kỹ thuật cắt chính xác và màu nhuộm thời trang.
- **Đối tượng khách truy cập:** Khách có nhu cầu làm tóc sẽ xem
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Art Gallery** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** (mặc định của preset). Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Cormorant Garamond:ital,wght@0,400;0,600;1,400`, body `Montserrat:wght@400;500`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Cormorant Garamond`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Montserrat`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 9.161 ký tự, 285 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
# PROJECT: FORM & FOLLICLE
## Urban Contemporary × Swiss Graphic Design × Hair Culture

### 1. CONCEPT & ART DIRECTION

Thiết kế website giới thiệu **FORM & FOLLICLE**, một salon tóc hiện đại dành cho khách hàng trẻ yêu thích kiểu tóc cá tính, kỹ thuật cắt chính xác và màu nhuộm thời trang.

Tinh thần thiết kế:
- Urban Contemporary kết hợp Swiss Graphic Design.
- Cá tính, mạnh mẽ, có tính biên tập và cảm giác như một tạp chí thời trang đô thị.
- Grid rõ ràng, bố cục bất đối xứng, đường kẻ hình học và tiêu đề cỡ lớn.
- Hình ảnh tóc là trọng tâm, không gian salon đóng vai trò bổ trợ.
- Tránh phong cách nữ tính pastel, giao diện spa, luxury truyền thống hoặc các card bo tròn đại trà.

### 2. COLOR PALETTE

**Cobalt Blue là màu nhận diện chủ đạo**, tạo độ tương phản mạnh với trắng, đen và xám bạc.

- Cobalt Blue — `#2455E8`: màu thương hiệu, CTA và khối nhấn.
- Electric Blue — `#426BFF`: điểm nhấn phụ cho hover hoặc chi tiết đồ họa.
- Pure White — `#FFFFFF`: nền chính, tạo khoảng trắng.
- Jet Black — `#111111`: chữ, tiêu đề và nền tương phản.
- Silver Gray — `#C5C7CC`: đường kẻ, nhãn phụ và chi tiết nền.
- Light Gray — `#F2F3F5`: nền section phụ.

Quy tắc phối màu:
- Trắng và đen tạo cấu trúc chính; cobalt blue xuất hiện xuyên suốt để duy trì nhận diện.
- Dùng xanh cobalt cho các mảng lớn ở Hero, Manifesto và CTA.
- Không lạm dụng gradient, màu pastel hoặc hiệu ứng phát sáng.
- Bảo đảm độ tương phản tốt giữa chữ và nền.

### 3. TYPOGRAPHY & IMAGES

**Typography**
- Heading: Space Grotesk hoặc Archivo.
- Body: Inter hoặc IBM Plex Sans.
- Tiêu đề lớn, đậm, có thể viết hoa và ngắt dòng có chủ đích.
- Sử dụng số thứ tự, nhãn nhỏ, mã bộ sưu tập và đường kẻ để tạo cảm giác Swiss Graphic Design.
- Hỗ trợ đầy đủ dấu tiếng Việt; bố cục tự thích ứng khi chuyển sang tiếng Anh.

**Hình ảnh**
- Ưu tiên các kiểu tóc Bob, Wolf Cut, Mullet, Textured Layers, Pixie và tóc nhuộm màu nổi bật.
- Hình ảnh chân dung thời trang, crop mạnh, ánh sáng có chiều sâu.
- Ảnh stylist đang cắt, nhuộm hoặc tạo kiểu tóc.
- Ảnh không gian salon hiện đại, vật liệu kim loại, gương lớn và nội thất tối giản.
- Tránh ảnh spa, ảnh stock thiếu liên quan và việc lặp lại cùng một hình ảnh quá nhiều lần.

### 4. GLOBAL HEADER & FOOTER

**Header dùng thống nhất trên cả 4 trang:**
- Logo chữ FORM & FOLLICLE.
- Menu Home, Services, Archive, Studio.
- Bộ chuyển ngôn ngữ VI / EN.
- CTA Book a Visit / Đặt lịch.
- Có trạng thái active cho trang hiện tại.
- Header có thể chuyển nền khi cuộn.
- Mobile sử dụng menu thu gọn, dễ thao tác.

**Footer:**
- Nền đen hoặc cobalt blue, chữ trắng.
- Chia cột Brand, Navigation, Contact và Social.
- Hiển thị địa chỉ, giờ hoạt động, điện thoại và email mẫu.
- Có CTA Đặt lịch.
- Giữ thiết kế mạnh mẽ, gọn gàng và đồng nhất trên mọi trang.

### 5. PAGE 01 — HOME

#### Hero: HAIR HAS A FORM.

- Bố cục bất đối xứng, hình ảnh người mẫu lệch khỏi trung tâm.
- Headline cực lớn: **“HAIR HAS A FORM.”**
- Mô tả ngắn về nghệ thuật cắt tóc, kết cấu và màu nhuộm.
- CTA Explore Services và View Archive.
- Sử dụng khối cobalt blue, đường kẻ và nhãn nhỏ “CUT / COLOR / TEXTURE”.
- Tránh để chữ và hình ảnh cạnh tranh, bảo đảm tiêu đề vẫn dễ đọc.

#### Manifesto

- Nền cobalt blue, chữ trắng.
- Headline: “HAIR IS AN ATTITUDE.”
- Một đoạn tuyên ngôn ngắn về mái tóc như phương tiện thể hiện cá tính.
- Typography lớn, bố cục tối giản, không sử dụng card.

#### Service Index

Giới thiệu các dịch vụ theo dạng danh sách biên tập, gồm số thứ tự, tên, mô tả và liên kết:

- 01 — Cut.
- 02 — Color.
- 03 — Texture.
- 04 — Treatment.

Ba dịch vụ nổi bật có ảnh minh họa với tỷ lệ khác nhau. Tránh trình bày tất cả thành những card giống nhau.

#### Style Archive Preview

- Grid ảnh tóc bất đối xứng.
- Hiển thị tên kiểu tóc, danh mục và mã ảnh.
- CTA Explore the Archive dẫn đến trang Archive.

#### Studio Snapshot

- Ảnh stylist đang làm việc và không gian salon.
- Giới thiệu ngắn về triết lý sáng tạo của studio.
- CTA About the Studio dẫn đến trang Studio.

### 6. PAGE 02 — SERVICES & PRICING

#### Services Hero

- Headline: **“THE SERVICE INDEX.”**
- Mô tả ngắn về dịch vụ cắt, nhuộm, tạo kết cấu và chăm sóc tóc.
- Bố cục typography lớn kết hợp ảnh tóc.

#### Service Categories

Chia thành bốn nhóm:

**01. CUT**
- Signature Haircut.
- Bob & Short Cut.
- Wolf Cut & Mullet.
- Textured Layers.

**02. COLOR**
- Full Hair Color.
- Root Touch-up.
- Highlights.
- Balayage.
- Creative Color.

**03. TEXTURE**
- Natural Perm.
- Digital Perm.
- Texture Styling.
- Blowout & Styling.

**04. TREATMENT**
- Deep Conditioning.
- Repair Treatment.
- Color Care.
- Scalp Care.

Mỗi dịch vụ cần có tên, mô tả ngắn, thời lượng và giá tham khảo. Có thể sử dụng dữ liệu mẫu, đồng thời ghi rõ giá và thời lượng có thể thay đổi tùy tình trạng tóc.

#### The Process

Trình bày quy trình thành bốn bước:

1. Consult — Tư vấn nhu cầu.
2. Define — Xác định kiểu tóc và kỹ thuật.
3. Create — Thực hiện dịch vụ.
4. Finish — Hoàn thiện và hướng dẫn chăm sóc.

Sử dụng số thứ tự lớn, đường kẻ và nhãn cobalt blue thay vì card truyền thống.

#### Final CTA

- Headline: “LET'S FIND YOUR FORM.”
- CTA Explore the Archive.
- Có thể thêm nút Đặt lịch dưới dạng minh họa.

### 7. PAGE 03 — STYLE ARCHIVE

Đây là trang trình diễn năng lực sáng tạo của FORM & FOLLICLE. Hình ảnh phải chiếm phần lớn diện tích.

#### Archive Hero

- Headline: **“ARCHIVE / 001”**
- Mô tả ngắn về bộ sưu tập kiểu tóc, kết cấu và màu nhuộm của studio.
- Hình ảnh nổi bật được crop theo phong cách editorial.

#### Gallery Filters

Tạo bộ lọc:
- All.
- Cut.
- Color.
- Texture.

Bộ lọc hoạt động bằng JavaScript, không tải lại trang. Nhãn và trạng thái được cập nhật theo ngôn ngữ hiện tại.

#### Gallery Grid

- Tối thiểu 12 ảnh.
- Sử dụng CSS Grid bất đối xứng, kết hợp ảnh dọc và ngang.
- Có ảnh lớn làm điểm nhấn, không đóng khung tất cả ảnh trong card giống nhau.
- Nội dung gồm mã bộ sưu tập, tên kiểu tóc, danh mục và mô tả ngắn.

Gợi ý nội dung:
- Precision Bob.
- Wolf Cut.
- Modern Mullet.
- Textured Layers.
- Platinum Blonde.
- Cobalt Accent.
- Copper Red.
- Soft Balayage.
- Textured Pixie.
- Wet Look.
- Graphic Fringe.
- Short Shag.

#### Hover & Lightbox

- Hover làm ảnh phóng to nhẹ và hiện thông tin.
- Nhấn ảnh mở lightbox với ảnh lớn, tên, danh mục và mô tả.
- Có nút đóng, điều hướng ảnh trước/sau và hỗ trợ phím Escape.
- Không làm méo ảnh hoặc gây cuộn nền khi lightbox mở.

#### Studio Hair Direction

Giới thiệu ngắn các xu hướng và kỹ thuật mà studio theo đuổi: precision cutting, expressive color và natural texture.

CTA dẫn đến Services.

### 8. PAGE 04 — STUDIO

#### Studio Hero

- Headline: **“A STUDIO FOR SELF-EXPRESSION.”**
- Ảnh stylist đang làm việc trong không gian hiện đại.
- Mô tả ngắn về FORM & FOLLICLE và cách tiếp cận nghệ thuật tóc.

#### Our Story

Giới thiệu thương hiệu như một không gian sáng tạo dành cho những người muốn thể hiện cá tính qua kiểu tóc. Không tự tạo lịch sử thành lập hoặc thành tích chưa được xác minh.

#### Our Method

Trình bày ba nguyên tắc:

- **FORM:** Chú trọng hình dáng, tỷ lệ và kỹ thuật cắt.
- **COLOR:** Khám phá màu nhuộm phù hợp với phong cách cá nhân.
- **TEXTURE:** Tạo chuyển động và kết cấu tự nhiên cho mái tóc.

Dùng bố cục typography lớn, đường kẻ và hình ảnh minh họa.

#### Meet the Stylists

Giới thiệu ba stylist bằng dữ liệu mẫu. Mỗi hồ sơ gồm:
- Ảnh chân dung.
- Tên và vai trò.
- Chuyên môn.
- Phong cách sáng tạo.

Không sử dụng avatar hoạt hình hoặc trình bày thông tin mẫu như dữ liệu đã xác minh.

#### Inside the Studio

- Gallery 4–6 ảnh không gian salon.
- Tập trung vào khu vực cắt tóc, gương, ghế stylist, vật liệu kim loại và ánh sáng.
- Bố cục ảnh bất đối xứng, thống nhất với phong cách đô thị.

#### Contact & Visit

Hiển thị địa chỉ, giờ hoạt động, điện thoại, email và liên kết mạng xã hội dưới dạng dữ liệu mẫu có ghi chú rõ ràng.

### 9. BILINGUAL — VIETNAMESE & ENGLISH

Toàn bộ 4 trang phải hỗ trợ tiếng Việt và tiếng Anh, bao gồm menu, nội dung, dịch vụ, bộ lọc, lightbox, CTA và footer.

- Chuyển ngôn ngữ ngay trên trang hiện tại.
- Duy trì ngôn ngữ khi điều hướng giữa các trang.
- Không tự động quay về Home khi đổi ngôn ngữ.
- Bố cục phải thích ứng với độ dài văn bản ở cả hai ngôn ngữ.

### 10. TECHNICAL REQUIREMENTS

- HTML, CSS và JavaScript thuần.
- Bốn file HTML riêng: `index.html`, `services.html`, `archive.html`, `studio.html`.
- Sử dụng CSS và JavaScript dùng chung.
- Responsive trên desktop, tablet và mobile.
- Tạo CSS variables cho bảng màu.
- Menu, chuyển ngôn ngữ, bộ lọc và lightbox phải hoạt động.
- Kiểm tra đường dẫn, tránh ảnh lỗi và bảo đảm các trang liên kết chính xác.
- Hiệu ứng chuyển động tiết chế, ưu tiên trải nghiệm và tốc độ tải.

### 11. SCOPE & FINAL REQUIREMENTS

Đây là website giới thiệu salon, không phải website thương mại điện tử.

Không triển khai backend, database, đăng nhập, giỏ hàng, thanh toán, API hoặc quy trình đặt lịch thực tế. Nút Đặt lịch chỉ mang tính minh họa.

**Kết quả mong muốn:** Website có bản sắc đô thị mạnh mẽ, sử dụng cobalt blue làm điểm nhận diện, kết hợp Swiss Graphic Design, typography lớn và gallery tóc cá tính. Bốn trang phải có bố cục riêng nhưng vẫn tạo thành một hệ thống thương hiệu nhất quán.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Tổ hợp gallery: hero-cinematic → gallery-lookbook → story-letter…** (`recipe:learned-gallery-mvlwv4et`, bản nháp): Trang chủ: hero-cinematic → gallery-lookbook → story-letter → timeline → features-numbered → accordion-cv → cta-type. Ý tưởng thị giác: Đi qua một phòng triển lãm: tường tối, ảnh lớn góc vuông, dưới mỗi tác phẩm là nhãn tường bảo tàng nhỏ (tên in nghiêng + series · năm · thể loại); một phòng sáng màu trắng ngà cho lời tự bạch của tác giả

**Bố cục gợi ý**
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 25 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 4 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 25 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.
- **Hero chia đôi chữ – ảnh** (`composition:hero-split`, chưa đánh giá, đã dùng 10 lần): Chữ 5–6/12 cột trái, ảnh tràn mép phải ở lg+; mobile chữ → ảnh.

**Tránh lặp:** các website dựng gần đây đã dùng `hero-type`, `features-numbered`, `gallery-lookbook`, `hero-split`, `cta-type`, `hero-cinematic`, `features-tabs`, `cta-fullbleed`, `features-bento` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Art Gallery (`gallery`)
Hình ảnh lớn như phòng triển lãm — tác phẩm là trung tâm.

**Hợp với:** phòng tranh, nhiếp ảnh gia, nghệ sĩ, bảo tàng / triển lãm
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `wall` #F7F6F3 · `ink` #0E0E0E · `gray` #8A8780 · `line` #E2DFD8 · `accent` #9C2F2F
**Font** (Google Fonts): display `Cormorant Garamond:ital,wght@0,400;0,600;1,400` · body `Montserrat:wght@400;500`

**Thành phần giao diện**
- Nút chữ + mũi tên; không thẻ
- Đường kẻ mảnh; ảnh góc vuông
**Chữ**
- Tiêu đề Cormorant lớn; tên tác phẩm in nghiêng; nhãn Montserrat chữ hoa 11px như nhãn tường bảo tàng (tác giả · năm · chất liệu).
**Bố cục**
- Ảnh chiếm phần lớn khung, khoảng trắng quanh như vách trưng bày; nhãn tác phẩm nhỏ cạnh ảnh.
- Lightbox cho mọi tác phẩm; điều hướng tối giản, không che ảnh.
**Ảnh**
- Ảnh tác phẩm / chân dung nghệ sĩ / không gian triển lãm — không phủ màu, không lọc làm sai tác phẩm.
**Khoảng trắng:** Rất rộng quanh ảnh.
**Chuyển động mặc định:** Level 1 — Basic
- `data-reveal="clip"` cho ảnh, `data-lightbox`; `data-cursor-label="Xem"` trên ảnh tác phẩm.
- Không particles / parallax / tilt.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-type` → `gallery-lookbook` → `gallery-masonry` → `story-editorial` → `quote-full` → `cta-type` → `footer-minimal`
**Được phép (ghi đè layout-guide mục 3):** con trỏ có nhãn "Xem" trên ảnh tác phẩm
**Tránh:** lớp phủ màu lên tác phẩm; bo góc ảnh; hiệu ứng che tác phẩm
~~~~
