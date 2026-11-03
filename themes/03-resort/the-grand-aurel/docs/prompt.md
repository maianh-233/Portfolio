# Prompt đã dùng — THE GRAND AUREL

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
# Brief website — THE GRAND AUREL

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Tên thương hiệu / dự án:** **THE GRAND AUREL** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Xây dựng website giới thiệu THE GRAND AUREL, một resort cao cấp lấy cảm hứng từ những cung điện, dinh thự quý tộc và khu vườn hoàng gia châu Âu.

Thương hiệu đại diện cho vẻ đẹp di sản, nghệ thuật kiến trúc và phong cách nghỉ dưỡng thanh lịch vượt thời gian. Website cần mang lại cảm giác như đang bước vào một dinh thự châu Âu được gìn giữ qua nhiều thế hệ.

Phong cách chủ đạo: European Heritage Luxury kết hợp Classical Palace Elegance.

Không sử dụng phong cách hiện đại tối giản, thiết kế công nghệ hoặc bố cục resort nhiệt đới thông thường. Tránh biến website thành một trang giới thiệu khách sạn đại trà.
- **Đối tượng khách truy cập:** Khách hàng du lịch muốn lưu trú
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

> Nguyên văn, 11.202 ký tự, 382 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. ART DIRECTION — COLOR PALETTE

Sử dụng bảng màu mới gồm:

Royal Blue #263B5A: Xanh hoàng gia, màu nhận diện chính cho các section quan trọng, tiêu đề nổi bật và một số mảng nền.

Antique Gold #B69A62: Vàng cổ, dùng cho đường viền, biểu tượng, đường phân cách và chi tiết trang trí.

Warm Ivory #F4EFE5: Trắng ngà ấm, dùng làm nền chính để tạo cảm giác thanh lịch và cổ điển.

Forest Green #34483A: Xanh rừng sâu, dành cho các section về khu vườn, cảnh quan và trải nghiệm nghỉ dưỡng.

Espresso Brown #40332C: Nâu gỗ trầm, dùng cho nội dung phụ, chi tiết nội thất và những khu vực cần cảm giác ấm áp.

Nguyên tắc phối màu:

Warm Ivory chiếm phần lớn diện tích giao diện, giúp tổng thể sáng và thoáng.

Royal Blue tạo dấu ấn thị giác mạnh, đặc biệt ở hero, section giới thiệu thương hiệu và footer.

Antique Gold chỉ dùng làm điểm nhấn, không phủ vàng quá nhiều.

Forest Green dành riêng cho các nội dung gắn với khu vườn và thiên nhiên.

Espresso Brown bổ sung chiều sâu cho các chi tiết mang tính di sản.

Không sử dụng gradient neon, màu pastel ngọt ngào hoặc các mảng màu rực rỡ làm mất đi vẻ cổ điển.

3. TYPOGRAPHY & DECORATIVE DETAILS

Typography:

Tiêu đề: Cormorant Garamond hoặc Playfair Display, tạo cảm giác cổ điển và sang trọng.

Nội dung: Be Vietnam Pro hoặc một sans-serif thanh lịch, dễ đọc và hỗ trợ tiếng Việt tốt.

Có thể sử dụng chữ in hoa với khoảng cách ký tự rộng cho tên thương hiệu, nhãn section và các dòng giới thiệu ngắn.

Tiêu đề chính cần có kích thước lớn, cách trình bày giàu tính editorial.

Chi tiết trang trí:

Đường viền Antique Gold mảnh.

Khung ảnh cổ điển, đường phân cách đối xứng và họa tiết hình học lấy cảm hứng từ kiến trúc châu Âu.

Các chi tiết trang trí dạng huy hiệu hoặc monogram có thể xuất hiện quanh logo, nhưng phải tiết chế.

Sử dụng khoảng trắng có chủ đích, kết hợp bố cục đối xứng với một số layout lệch trục tinh tế.

Có thể sử dụng họa tiết giấy dập nổi hoặc vân giấy nhẹ ở một vài khu vực.

Không lạm dụng hoa văn baroque, họa tiết hoàng gia hoặc khung viền dày đặc. Mục tiêu là sang trọng, không nặng nề.

4. IMAGE ART DIRECTION

Ưu tiên hình ảnh có tính điện ảnh, ánh sáng tự nhiên và chiều sâu kiến trúc.

Nhóm hình ảnh cần có:

Dinh thự châu Âu với mặt tiền đối xứng, cột đá và cửa sổ cao.

Đại sảnh với cầu thang đá, đèn chùm và trần cao.

Phòng nghỉ có nội thất cổ điển, rèm vải cao cấp và đồ nội thất gỗ.

Khu vườn kiểu Pháp với lối đi đối xứng, hàng cây được cắt tỉa và đài phun nước.

Nhà hàng thanh lịch với bàn ăn được chuẩn bị tinh tế.

Spa sử dụng đá tự nhiên, ánh sáng ấm và vật liệu cao cấp.

Lounge với lò sưởi, ghế bọc vải và chi tiết kiến trúc cổ điển.

Hình ảnh cần có màu sắc hài hòa với Royal Blue, Antique Gold và Warm Ivory.

Không sử dụng ảnh resort biển nhiệt đới, khách sạn kính hiện đại, nội thất tối giản kiểu Nhật hoặc hình ảnh cung điện quá rực rỡ như bối cảnh cổ tích.

Nếu sử dụng ảnh từ nguồn bên ngoài, cần có ảnh dự phòng hoặc màu nền thay thế khi ảnh không tải được.

5. TRANG CHỦ — HOME

Header

Nền Warm Ivory.

Logo THE GRAND AUREL ở vị trí trung tâm hoặc căn trái tùy bố cục.

Menu gồm Home, Our Heritage, Suites & Villas, Experiences.

Nút chuyển đổi ngôn ngữ VI/EN.

Header có thể chuyển sang nền bán trong suốt khi nằm trên hero, sau đó trở về nền sáng khi cuộn trang.

Thiết kế thanh lịch, không sử dụng quá nhiều biểu tượng.

Hero Section

Sử dụng ảnh lớn toàn chiều rộng về dinh thự hoặc khu vườn hoàng gia.

Tiêu đề chính: “An Extraordinary Sense of Time”.

Đoạn giới thiệu ngắn về nghệ thuật nghỉ dưỡng mang dấu ấn di sản.

Có một nhãn nhỏ phía trên tiêu đề: “EUROPEAN HERITAGE RESORT”.

CTA chỉ phục vụ điều hướng nội bộ, ví dụ “Discover Our Heritage”.

Typography lớn, bố cục cân đối và hình ảnh đóng vai trò chủ đạo.

Brand Introduction

Bố cục editorial gồm tiêu đề lớn, đoạn giới thiệu ngắn và ảnh kiến trúc.

Giới thiệu triết lý kết hợp di sản kiến trúc, nghệ thuật thủ công và dịch vụ nghỉ dưỡng.

Có thể sử dụng một đường kẻ Antique Gold để phân tách nội dung.

Không trình bày quá nhiều chữ.

The Architecture

Một ảnh kiến trúc lớn kết hợp ảnh chi tiết về cầu thang, cột đá, cửa sổ hoặc hoa văn.

Tiêu đề: “A Legacy in Every Detail”.

Mô tả ngắn về cảm hứng kiến trúc và cách các chi tiết cổ điển tạo nên bản sắc của resort.

Bố cục bất đối xứng có chủ đích để tránh cảm giác quá cứng nhắc.

Suites & Villas

Giới thiệu ba hạng phòng như một bộ sưu tập riêng:

Grand Suite.

Garden Residence.

Signature Villa.

Mỗi hạng có ảnh, tên, mô tả ngắn và liên kết đến trang Suites & Villas.

Dùng ảnh lớn, typography serif và khoảng cách rộng.

Không hiển thị giá, lịch phòng hoặc nút đặt phòng.

The Art of Living

Giới thiệu bốn trải nghiệm: Fine Dining, Palace Spa, Royal Garden và Heritage Lounge.

Mỗi trải nghiệm có ảnh riêng, tiêu đề và một đoạn mô tả ngắn.

Có thể dùng bố cục xen kẽ ảnh trái/phải hoặc các khối ảnh kích thước khác nhau.

Brand Statement

Nền Royal Blue.

Chữ Warm Ivory, điểm nhấn Antique Gold.

Tiêu đề: “Elegance Beyond Time”.

Nội dung khẳng định triết lý nghỉ dưỡng lấy di sản, sự tinh tế và lòng hiếu khách làm trọng tâm.

Footer

Nền Royal Blue hoặc Espresso Brown.

Logo, menu, thông tin liên hệ mẫu và liên kết mạng xã hội.

Đường phân cách Antique Gold mảnh.

Bố cục cân đối, trang trọng và nhất quán với toàn bộ website.

6. TRANG OUR HERITAGE — GIỚI THIỆU

Hero

Ảnh mặt tiền dinh thự với bố cục cân đối.

Tiêu đề: “A Heritage of Distinction”.

Giới thiệu ngắn về tinh thần và nguồn cảm hứng của THE GRAND AUREL.

Our Story

Bố cục hai cột gồm nội dung và ảnh kiến trúc.

Kể câu chuyện thương hiệu theo hướng trang trọng, tập trung vào di sản, kiến trúc và nghệ thuật hiếu khách.

Không tự khẳng định resort có lịch sử hàng trăm năm nếu đây chỉ là thương hiệu giả định.

Our Values
Trình bày bốn giá trị cốt lõi:

Heritage: Tôn trọng tinh thần kiến trúc và giá trị truyền thống.

Craftsmanship: Đề cao chất lượng vật liệu, chi tiết và nghệ thuật chế tác.

Hospitality: Mang đến trải nghiệm nghỉ dưỡng chu đáo và tinh tế.

Timeless Elegance: Duy trì vẻ đẹp thanh lịch không phụ thuộc xu hướng nhất thời.

Mỗi giá trị có tiêu đề serif, mô tả ngắn và chi tiết trang trí nhỏ.

Architectural Details

Gallery về cầu thang đá, cửa vòm, hành lang, đèn chùm và nội thất.

Kết hợp ảnh ngang lớn với các ảnh chi tiết nhỏ hơn.

Có thể sử dụng chú thích ảnh theo phong cách tạp chí kiến trúc.

Closing Section

Ảnh khu vườn hoặc đại sảnh.

Một thông điệp ngắn về sự kết nối giữa kiến trúc, thiên nhiên và nghệ thuật nghỉ dưỡng.

7. TRANG SUITES & VILLAS — PHÒNG NGHỈ VÀ TIỆN ÍCH

Hero

Ảnh phòng nghỉ cổ điển với ánh sáng tự nhiên.

Tiêu đề: “Private Worlds of Elegance”.

Mô tả ngắn về không gian nghỉ dưỡng được thiết kế chú trọng sự riêng tư và tiện nghi.

Accommodation Collection

Grand Suite

Không gian thanh lịch, nội thất cổ điển và tông màu ấm.

Nhấn mạnh sự cân bằng giữa tiện nghi hiện đại và ngôn ngữ thiết kế di sản.

Garden Residence

Không gian hướng ra khu vườn, sử dụng vật liệu tự nhiên và màu sắc dịu.

Nhấn mạnh sự kết nối với cảnh quan xanh.

Signature Villa

Không gian nghỉ dưỡng riêng tư, có phòng khách rộng và các chi tiết nội thất được tuyển chọn.

Nhấn mạnh tính độc đáo trong thiết kế và trải nghiệm nghỉ dưỡng.

Mỗi hạng phòng cần có:

Một ảnh chính nổi bật.

Tên hạng phòng.

Mô tả ngắn.

Một số đặc điểm không gian và tiện nghi.

Các ảnh phụ nếu phù hợp.

Đường phân cách hoặc nhãn trang trí Antique Gold.

Không tự đưa ra thông số diện tích, số phòng hoặc tiện ích chưa được xác định. Nội dung chỉ mang tính giới thiệu thương hiệu.

Resort Facilities
Giới thiệu các tiện ích bằng bố cục riêng biệt:

The Grand Restaurant: Không gian ẩm thực thanh lịch.

Palace Spa: Khu vực thư giãn với vật liệu tự nhiên và ánh sáng dịu.

Heritage Lounge: Lounge dành cho thưởng trà và thư giãn.

Royal Garden: Khu vườn cổ điển với lối đi và cảnh quan được chăm chút.

Garden Pool: Hồ bơi hòa hợp với kiến trúc và cảnh quan.

Mỗi tiện ích có hình ảnh, tiêu đề và đoạn mô tả ngắn. Không biến trang này thành danh sách tiện nghi khô cứng.

8. TRANG EXPERIENCES — TRẢI NGHIỆM

Hero

Ảnh khu vườn kiểu Pháp hoặc đài phun nước.

Tiêu đề: “The Art of Unhurried Living”.

Tập trung vào cảm giác thư thái, khám phá và tận hưởng vẻ đẹp của không gian.

Fine Dining

Ảnh nhà hàng thanh lịch, bàn ăn được chuẩn bị tinh tế và ánh sáng ấm.

Mô tả trải nghiệm ẩm thực trong không gian mang dấu ấn châu Âu.

Afternoon Tea

Ảnh trà, bánh ngọt và bộ ấm tách cổ điển.

Thiết kế như một trang tạp chí phong cách sống, sử dụng typography nổi bật và nhiều khoảng trắng.

The Royal Garden

Ảnh lối đi đối xứng, hàng cây cắt tỉa và đài phun nước.

Giới thiệu hoạt động dạo vườn, ngắm cảnh và tận hưởng không gian ngoài trời.

Architecture Discovery

Gallery giới thiệu các chi tiết kiến trúc đặc trưng.

Kết hợp chú thích ảnh ngắn để tạo cảm giác như đang khám phá một công trình nghệ thuật.

Wellness & Relaxation

Ảnh spa, lounge và không gian nghỉ ngơi.

Nội dung nhấn mạnh sự thư giãn trong một môi trường thanh lịch, yên tĩnh.

Closing Panorama

Ảnh toàn cảnh dinh thự hoặc khu vườn vào cuối ngày.

Tiêu đề: “A World Apart, Beyond Time”.

Kết thúc bằng một đoạn giới thiệu thương hiệu ngắn, không có CTA giao dịch.

9. MOTION & INTERACTION

Sử dụng chuyển động chậm, tinh tế và có chủ đích:

Fade-in khi các section đi vào vùng hiển thị.

Tiêu đề xuất hiện nhẹ nhàng theo từng dòng.

Ảnh có hiệu ứng zoom rất nhẹ khi hover.

Đường kẻ Antique Gold có thể xuất hiện dần khi cuộn trang.

Chuyển trang và trạng thái menu mượt mà.

Header có thay đổi nhẹ khi cuộn, không gây phân tâm.

Không sử dụng parallax quá mạnh, hiệu ứng 3D phô trương, animation liên tục, con trỏ tùy biến gây khó chịu hoặc hiệu ứng neon.

10. TECHNICAL REQUIREMENTS

Xây dựng bốn trang HTML riêng biệt bằng HTML, CSS và JavaScript thuần.

Cấu trúc gồm index.html, about.html, stays.html và experiences.html.

Có CSS và JavaScript dùng chung để duy trì nhận diện xuyên suốt.

Hỗ trợ tiếng Việt và tiếng Anh đầy đủ cho menu, tiêu đề, nội dung, nút và footer.

Có nút chuyển ngôn ngữ VI/EN hoạt động thực tế, giữ lựa chọn ngôn ngữ khi chuyển trang và tải lại.

Điều hướng giữa bốn trang phải hoạt động chính xác.

Responsive trên desktop, tablet và mobile.

Hình ảnh sử dụng đúng tỷ lệ, không bị méo hoặc cắt mất chủ thể quan trọng.

Có trạng thái dự phòng nếu ảnh không tải được.

Tối ưu kích thước ảnh, khả năng đọc và khả năng truy cập.

Không sử dụng dữ liệu hoặc tuyên bố lịch sử giả như sự thật đã được xác minh.

Giới hạn chức năng:
Đây là website giới thiệu thương hiệu resort. Không xây dựng chức năng đặt phòng, kiểm tra phòng trống, đặt lịch spa, thanh toán, giỏ hàng hoặc giao dịch.

11. FINAL DESIGN GOAL

THE GRAND AUREL phải tạo được dấu ấn khác biệt với những resort còn lại trong bộ sưu tập.

Website cần gợi lên hình ảnh một dinh thự châu Âu thanh lịch với Royal Blue sâu, Antique Gold cổ điển, nền Ivory ấm và những khu vườn xanh trầm.

Ưu tiên kiến trúc, hình ảnh, typography và cách trình bày giàu tính editorial. Mỗi trang cần có bố cục riêng nhưng vẫn thống nhất về màu sắc, kiểu chữ, chi tiết trang trí và trải nghiệm điều hướng.

Kết quả cuối cùng phải giống website thương hiệu của một European Palace Resort cao cấp, không phải giao diện khách sạn đại trà được thay màu.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Du lịch / khu nghỉ dưỡng** (`recipe:travel-resort`, chưa đánh giá): Hero-cinematic → story-pinned (3 khoảnh khắc) → gallery-lookbook → features-alternate (phòng / tour) → cta-fullbleed. Trang chi tiết tour / phòng.
- **Nhà hàng / quán cà phê** (`recipe:restaurant-cafe`, chưa đánh giá): Hero-cinematic hoặc hero-offset → story-letter → menu dạng features-numbered / tabs → gallery-filmstrip → contact-split (giờ mở cửa, bản đồ, đặt bàn = bản demo).

**Bố cục gợi ý**
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 3 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **Hero cảnh nhiều lớp** (`composition:hero-scene`, chưa đánh giá, đã dùng 1 lần): Bầu trời gradient + mây + hạt + ảnh phong cảnh hòa đáy (`data-layers`, `data-depth`, mask-image). _Tránh:_ Không gắn data-reveal / data-parallax lên lớp data-depth.
- **Hero ảnh tràn viền điện ảnh** (`composition:hero-cinematic`, chưa đánh giá, đã dùng 8 lần): Ảnh tràn `min-h-[100dvh]`, gradient từ đáy, tiêu đề góc dưới-trái cực lớn, CTA + 1 dòng phụ đề. _Tránh:_ Chữ đè mặt người / chủ thể ảnh; Thiếu lớp phủ → chữ không đọc được.
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 26 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.

**Chuyển động gợi ý**
- **Ảnh mở màn che** (`motion:clip-image`, chưa đánh giá): `data-reveal="clip"` trên khung ảnh overflow-hidden chứa <img>. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Parallax ảnh hero** (`motion:parallax-hero`, chưa đánh giá): `data-parallax="0.15"` trên lớp bọc `absolute inset-x-0 -inset-y-[15%]`. _Tránh:_ Đặt chung phần tử có data-reveal / data-tilt; Dùng inset-0 → lộ mép.
- **Hạt sáng / mây** (`motion:atmos-particles`, chưa đánh giá): atmos.js: `data-particles="dust|fireflies|stars|petals"` một section (Level 2), `data-clouds="3"`. _Tránh:_ Chữ trên nền có hạt thiếu tương phản; Tôn trọng prefers-reduced-motion (thư viện đã xử lý).

**Tránh lặp:** các website dựng gần đây đã dùng `hero-cinematic`, `gallery-lookbook`, `features-tabs`, `features-numbered`, `cta-type`, `hero-split`, `features-alternate`, `features-bento`, `gallery-masonry`, `gallery-asymmetric` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


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
