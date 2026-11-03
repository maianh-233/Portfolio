# Brief website — NOCTURNE

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Tên thương hiệu / dự án:** **NOCTURNE** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu NOCTURNE, một resort nghỉ dưỡng cao cấp mang phong cách Midnight Teal Luxury, lấy cảm hứng từ mặt nước lúc nửa đêm, kiến trúc đương đại và ánh sáng phản chiếu trong không gian tĩnh lặng.

Thương hiệu hướng đến cảm giác sang trọng, bí ẩn, riêng tư và giàu tính điện ảnh. Sự cao cấp được thể hiện qua vật liệu, ánh sáng, kiến trúc và cách trình bày, không phụ thuộc vào các biểu tượng xa xỉ truyền thống.

Website phải có cá tính riêng, tránh trở thành website câu lạc bộ đêm, thương hiệu thời trang hoặc khách sạn Dark Luxury thông thường.
- **Đối tượng khách truy cập:** Khách hàng du lịch muốn lưu trú
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

- **KHÔNG khả dụng**: openverse: quá 15s không phản hồi.
- Gọi `search_images` **tối đa 1 lần** để xác nhận; vẫn lỗi thì không gọi nữa — chuyển sang **link ảnh**: tìm bằng WebSearch (Pinterest, trang ảnh, trang của thương hiệu…) rồi kiểm qua `link_image`, ghi `"status": "link"` trong sitemap.json. Không có link phù hợp mới dựng bố cục không ảnh (`"status": "none"`). **Không vẽ SVG / CSS thay ảnh chụp.**

## 8. Chú thích bổ sung của BA

> Nguyên văn, 9.698 ký tự, 366 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. VISUAL IDENTITY — COLOR PALETTE

Thay hoàn toàn bảng màu đen – vàng bằng hệ màu xanh cổ vịt, tím mận và bạc lạnh.

Midnight Teal #153C40: Màu nhận diện chính, tạo cảm giác sâu, tĩnh lặng và sang trọng.

Petrol Blue #28545A: Xanh lam pha lục, dùng cho các section phụ và chi tiết giao diện.

Muted Plum #594653: Tím mận trầm, tạo điểm nhấn khác biệt cho một số mảng nền và nội dung nổi bật.

Silver Mist #B8C3C4: Xám bạc lạnh, dùng cho đường phân cách, nhãn nhỏ và chi tiết trang trí.

Moonstone #E7E8E2: Trắng đá ánh xám, dùng cho chữ sáng và những section cần độ tương phản cao.

Deep Charcoal #20282A: Xám than pha xanh, dùng làm nền tối thay cho màu đen tuyệt đối.

Nguyên tắc phối màu:

Midnight Teal là màu nhận diện xuyên suốt.

Deep Charcoal tạo chiều sâu nhưng không chiếm toàn bộ giao diện.

Petrol Blue tạo chuyển tiếp giữa các mảng màu tối.

Muted Plum chỉ xuất hiện ở một số section, tạo dấu ấn thị giác.

Silver Mist và Moonstone giúp nội dung dễ đọc, đồng thời tạo cảm giác tinh tế.

Không sử dụng vàng kim làm điểm nhấn chủ đạo, không dùng neon hoặc hiệu ứng phát sáng quá mạnh. Màu sắc cần gợi cảm giác phản chiếu trên mặt nước hơn là ánh đèn sân khấu.

3. TYPOGRAPHY & LAYOUT

Typography

Tiêu đề: Bodoni Moda hoặc Cormorant Garamond.

Nội dung: Be Vietnam Pro hoặc Manrope.

Nhãn section: Sans-serif in hoa, cỡ nhỏ, khoảng cách ký tự rộng.

Tiêu đề chính có kích thước lớn, cách xuống dòng có chủ đích.

Bố cục

Sử dụng ảnh toàn chiều rộng, bố cục bất đối xứng và khoảng trống rộng.

Kết hợp các section nền Midnight Teal, Deep Charcoal và Moonstone.

Sử dụng đường phân cách Silver Mist mảnh.

Hạn chế card bo góc lớn, bóng đổ dày và các thành phần giao diện trang trí dư thừa.

Tạo sự tương phản giữa ảnh tối và những khu vực nội dung sáng.

Giao diện phải giống một tạp chí kiến trúc và nghỉ dưỡng đương đại cao cấp, không phải trang quảng bá nightlife.

4. IMAGE ART DIRECTION

Ưu tiên hình ảnh kiến trúc có ánh sáng điện ảnh, chiều sâu và bề mặt vật liệu rõ nét.

Các nhóm hình ảnh cần có:

Resort hiện đại với hồ nước phản chiếu kiến trúc vào ban đêm.

Villa riêng tư với cửa kính lớn và ánh sáng nội thất ấm.

Hồ bơi có màu nước xanh đậm, phản chiếu bầu trời và ánh sáng công trình.

Nội thất sử dụng đá tối màu, gỗ sẫm và kim loại hoàn thiện mờ.

Phòng nghỉ có cửa sổ lớn hướng ra cảnh quan ban đêm.

Nhà hàng cao cấp với ánh sáng tập trung trên bàn ăn.

Spa có đá tự nhiên, nước và ánh sáng dịu.

Lounge riêng tư với kiến trúc hiện đại và vật liệu cao cấp.

Hình ảnh cần có độ tương phản rõ, nhưng vẫn giữ được chi tiết ở vùng tối.

Tránh ảnh sân khấu, DJ, ánh sáng neon, quầy bar kiểu nightclub hoặc hình ảnh thời trang editorial không liên quan đến nghỉ dưỡng.

5. TRANG CHỦ — HOME

Header

Nền Midnight Teal.

Logo NOCTURNE sử dụng typography thanh lịch.

Menu gồm Home, The Philosophy, Suites & Villas, Experiences.

Nút chuyển đổi ngôn ngữ VI/EN.

Chữ Moonstone, đường phân cách Silver Mist mảnh.

Header gọn, không sử dụng biểu tượng trang trí quá mức.

Hero Section

Ảnh toàn màn hình về resort đương đại bên hồ nước vào ban đêm.

Tiêu đề: “Luxury Beyond the Ordinary”.

Mô tả ngắn: “A private retreat shaped by architecture, water and light.”

Nhãn nhỏ: “A MIDNIGHT TEAL RETREAT”.

CTA điều hướng nội bộ: “Discover NOCTURNE”.

Chữ Moonstone nổi bật trên ảnh, có lớp phủ tối vừa đủ để bảo đảm khả năng đọc.

Brand Introduction

Bố cục editorial hai cột.

Tiêu đề lớn: “An Art of Quiet Luxury”.

Nội dung giới thiệu triết lý nghỉ dưỡng riêng tư, kiến trúc đương đại và trải nghiệm được tuyển chọn.

Kết hợp một ảnh kiến trúc lớn và một ảnh chi tiết vật liệu.

Architecture & Light

Ảnh kiến trúc ngang rộng, tập trung vào hình khối, ánh sáng và sự phản chiếu.

Tiêu đề: “Designed Around Light”.

Chú thích ảnh nhỏ, sử dụng Silver Mist.

Có thể đặt một ảnh phụ lệch trục để tạo chiều sâu thị giác.

Suites & Villas
Giới thiệu ba loại hình lưu trú:

Signature Suite: Không gian nghỉ dưỡng thanh lịch với vật liệu tối màu và ánh sáng ấm.

Private Villa: Villa riêng tư, chú trọng sự tách biệt và kết nối với cảnh quan.

Panoramic Residence: Không gian rộng với cửa kính lớn và tầm nhìn mở.

Sử dụng ảnh lớn, bố cục không đồng đều và mô tả ngắn. Không trình bày thành ba card giống hệt nhau.

The NOCTURNE Experience
Giới thiệu bốn tiện ích:

Reflecting Pool.

Nocturne Dining.

Stillwater Spa.

Private Lounge.

Mỗi tiện ích có ảnh riêng, tiêu đề và đoạn mô tả ngắn. Kết hợp nền sáng và nền tối để tạo nhịp điệu.

Midnight Perspective

Nền Midnight Teal.

Tiêu đề Moonstone: “A World Apart from the Ordinary”.

Nội dung ngắn về sự riêng tư, không gian và triết lý nghỉ dưỡng của thương hiệu.

Full-Width Gallery

Ảnh toàn chiều rộng về hồ nước phản chiếu kiến trúc.

Có thể phủ một dòng chữ nhỏ: “Where the Night Finds Stillness”.

Không sử dụng hiệu ứng phát sáng nhân tạo.

Footer

Nền Deep Charcoal.

Logo, menu, thông tin liên hệ mẫu và liên kết mạng xã hội.

Đường phân cách Silver Mist mảnh.

Bố cục gọn, đồng bộ với hệ thống màu sắc.

6. TRANG THE PHILOSOPHY — GIỚI THIỆU

Hero

Ảnh kiến trúc đương đại trong ánh sáng chiều muộn hoặc ban đêm.

Tiêu đề: “The Beauty of Restraint”.

Our Philosophy

Giới thiệu triết lý về sự riêng tư, kiến trúc và trải nghiệm nghỉ dưỡng.

Bố cục typography lớn kết hợp đoạn văn ngắn.

Không sử dụng nội dung quảng cáo phô trương.

Architecture & Material

Giới thiệu các yếu tố kiến trúc: hình khối, đá tự nhiên, kính, gỗ và kim loại hoàn thiện mờ.

Kết hợp ảnh tổng thể với ảnh chi tiết.

Sử dụng chú thích ngắn theo phong cách tạp chí kiến trúc.

The Language of Light

Ảnh ánh sáng phản chiếu trên mặt nước, tường đá và bề mặt kính.

Giải thích vai trò của ánh sáng trong việc tạo nên không gian riêng tư và chiều sâu kiến trúc.

Brand Values
Trình bày bốn giá trị:

Privacy.

Architectural Integrity.

Sensory Balance.

Timeless Design.

Mỗi giá trị có tiêu đề nổi bật, mô tả ngắn và đường phân cách mảnh.

Closing Gallery

Gallery nội thất và ngoại thất.

Kết thúc bằng ảnh kiến trúc phản chiếu trên mặt nước.

7. TRANG SUITES & VILLAS — PHÒNG NGHỈ & TIỆN ÍCH

Hero

Ảnh suite với ánh sáng ấm, vật liệu tối màu và tầm nhìn mở.

Tiêu đề: “Private Worlds of Calm”.

Signature Suite

Ảnh phòng ngủ và khu vực sinh hoạt.

Mô tả vật liệu, ánh sáng, thiết kế nội thất và tiện nghi tiêu biểu.

Private Villa

Ảnh villa riêng tư với hồ nước hoặc sân hiên.

Nhấn mạnh sự riêng tư, không gian rộng và kết nối với cảnh quan.

Panoramic Residence

Ảnh không gian có cửa kính lớn và tầm nhìn mở.

Mô tả bố cục, vật liệu và các tiện nghi phù hợp.

Mỗi loại hình lưu trú cần có ảnh chính, tên, mô tả và tiện nghi. Không hiển thị giá, lịch phòng hoặc thông tin chưa được xác định.

Resort Facilities

Reflecting Pool: Hồ nước và hồ bơi tạo hiệu ứng phản chiếu kiến trúc.

Nocturne Dining: Nhà hàng với ánh sáng tập trung và nội thất thanh lịch.

Stillwater Spa: Không gian thư giãn với đá tự nhiên, nước và ánh sáng dịu.

Private Lounge: Không gian nghỉ ngơi riêng tư với vật liệu cao cấp.

Garden Retreat: Khu vực ngoài trời với cảnh quan và ánh sáng tinh tế.

Trình bày bằng ảnh lớn và bố cục linh hoạt, không sử dụng quá nhiều card nhỏ.

8. TRANG EXPERIENCES — TRẢI NGHIỆM

Hero

Ảnh hồ nước phản chiếu kiến trúc vào ban đêm.

Tiêu đề: “An Experience Beyond the Ordinary”.

The Art of Dining

Ảnh nhà hàng, bàn ăn và chi tiết nội thất.

Giới thiệu trải nghiệm ẩm thực trong không gian tinh tế.

Stillwater Rituals

Ảnh spa, mặt nước và khu vực thư giãn.

Nội dung tập trung vào cảm giác yên tĩnh và sự chăm chút trong không gian.

Private Moments

Ảnh villa, lounge và sân hiên riêng tư.

Giới thiệu trải nghiệm nghỉ ngơi trong không gian tách biệt.

Water & Reflection

Gallery về hồ bơi, mặt nước và ánh sáng phản chiếu.

Sử dụng ảnh ngang rộng, ít chữ và khoảng trắng lớn.

The Quiet Hour

Section nền Muted Plum.

Tiêu đề Moonstone: “Let the World Fall Quiet”.

Một đoạn giới thiệu ngắn về những khoảnh khắc nghỉ ngơi và tận hưởng không gian.

Closing Panorama

Ảnh toàn cảnh resort trong ánh sáng ban đêm.

Kết thúc bằng một thông điệp thương hiệu ngắn, không có CTA giao dịch.

9. MOTION & INTERACTION

Hero image zoom rất nhẹ.

Fade-in khi section đi vào vùng hiển thị.

Tiêu đề xuất hiện từ từ theo chiều dọc.

Chuyển màu nền mượt giữa các section.

Hover ảnh tinh tế.

Có thể dùng hiệu ứng phản chiếu hoặc lớp phủ màu bằng CSS ở mức nhẹ.

Không sử dụng neon, hiệu ứng nhấp nháy, ánh sáng sân khấu hoặc animation liên tục.

Tôn trọng prefers-reduced-motion để hạn chế chuyển động khi người dùng yêu cầu.

10. TECHNICAL REQUIREMENTS

Xây dựng bốn trang HTML riêng: index.html, about.html, stays.html, experiences.html.

Sử dụng HTML, CSS và JavaScript thuần.

Dùng chung stylesheet và script khi phù hợp.

Hỗ trợ chuyển đổi VI/EN đầy đủ cho toàn bộ menu, nội dung, nút và footer.

Lưu ngôn ngữ đã chọn khi chuyển trang hoặc tải lại.

Responsive trên desktop, tablet và mobile.

Tối ưu hình ảnh, lazy-load ảnh nằm ngoài màn hình đầu tiên và có phương án dự phòng khi ảnh lỗi.

Bảo đảm độ tương phản, alt text và khả năng điều hướng bằng bàn phím.

Không tích hợp đặt phòng, đặt lịch, giỏ hàng, thanh toán hoặc biểu mẫu giao dịch.

11. FINAL DESIGN GOAL

NOCTURNE phải có bản sắc Midnight Teal Luxury rõ ràng, khác với phong cách Dark Luxury sử dụng đen và vàng truyền thống.

Xanh cổ vịt đậm, xanh lam pha lục và tím mận tạo nên một hệ màu sâu, bí ẩn và tinh tế. Ánh sáng phản chiếu, mặt nước và kiến trúc đương đại đóng vai trò trung tâm trong ngôn ngữ hình ảnh.

Website phải gợi lên một resort riêng tư, nơi kiến trúc và ánh sáng tạo nên trải nghiệm sang trọng, không mang cảm giác của câu lạc bộ đêm hoặc thương hiệu thời trang.

Ưu tiên hình ảnh chất lượng cao, bố cục editorial, typography tinh tế và chuyển động tiết chế.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Du lịch / khu nghỉ dưỡng** (`recipe:travel-resort`, chưa đánh giá): Hero-cinematic → story-pinned (3 khoảnh khắc) → gallery-lookbook → features-alternate (phòng / tour) → cta-fullbleed. Trang chi tiết tour / phòng.
- **Spa / làm đẹp** (`recipe:spa-beauty`, chưa đánh giá): Hero-split ảnh không gian → features-alternate liệu trình → stats/quote → gallery-masonry → contact-split (đặt lịch = bản demo).

**Bố cục gợi ý**
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 22 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.
- **Hero ảnh tràn viền điện ảnh** (`composition:hero-cinematic`, chưa đánh giá, đã dùng 10 lần): Ảnh tràn `min-h-[100dvh]`, gradient từ đáy, tiêu đề góc dưới-trái cực lớn, CTA + 1 dòng phụ đề. _Tránh:_ Chữ đè mặt người / chủ thể ảnh; Thiếu lớp phủ → chữ không đọc được.
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 22 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 28 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.

**Chuyển động gợi ý**
- **Ảnh mở màn che** (`motion:clip-image`, chưa đánh giá): `data-reveal="clip"` trên khung ảnh overflow-hidden chứa <img>. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Chữ tiêu đề trượt lên** (`motion:split-title`, chưa đánh giá): `data-split="words"` cho 1–2 tiêu đề lớn mỗi trang. _Tránh:_ CJK: tách theo chữ, không theo từ; Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Parallax ảnh hero** (`motion:parallax-hero`, chưa đánh giá): `data-parallax="0.15"` trên lớp bọc `absolute inset-x-0 -inset-y-[15%]`. _Tránh:_ Đặt chung phần tử có data-reveal / data-tilt; Dùng inset-0 → lộ mép.

**Tránh lặp:** các website dựng gần đây đã dùng `hero-cinematic`, `gallery-lookbook`, `features-bento`, `cta-type`, `features-tabs`, `features-numbered`, `hero-split`, `features-alternate` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


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
