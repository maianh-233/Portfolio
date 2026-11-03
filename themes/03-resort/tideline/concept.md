# Brief website — TIDELINE

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Tên thương hiệu / dự án:** **TIDELINE** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** hiết kế website giới thiệu TIDELINE, một resort nghỉ dưỡng ven biển lấy cảm hứng từ những vách đá ven đại dương, địa hình khô cằn và vẻ đẹp của kiến trúc điêu khắc.

Thay vì mô phỏng resort biển hiện đại thông thường, TIDELINE theo đuổi phong cách Desert Coastal Retreat: mạnh mẽ, nguyên bản, giàu kết cấu vật liệu và có sự tương phản giữa đất, đá, ánh sáng và mặt nước.

Website cần tạo cảm giác như một công trình kiến trúc được điêu khắc từ cảnh quan tự nhiên, nơi biển xanh đậm gặp những vách đá màu đất nung.

Tránh phong cách Tropical Luxury, Mediterranean Resort, Coastal Minimalism và các giao diện khách sạn sử dụng quá nhiều kính, nền trắng hoặc xanh biển nhạt.
- **Đối tượng khách truy cập:** Khách hàng du lịch muốn lưu trú
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

> Nguyên văn, 9.614 ký tự, 362 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. VISUAL IDENTITY — COLOR PALETTE

Sử dụng bảng màu ấm, trầm và có chiều sâu:

Terracotta #B65F45: Màu nhận diện chính, lấy cảm hứng từ đất nung và vách đá đỏ.

Burnt Copper #754638: Tông nâu đỏ đậm, dùng cho các section nổi bật và footer.

Sandstone #D9C5A7: Màu đá sa thạch, dùng làm nền phụ và tạo cảm giác tự nhiên.

Warm Chalk #F3EDE3: Màu trắng phấn ấm, làm nền chính cho nội dung.

Deep Plum #49323B: Màu mận trầm, dùng làm điểm nhấn cho typography, section đặc biệt và chi tiết giao diện.

Cách phối màu:

Warm Chalk tạo không gian thoáng và giúp hình ảnh nổi bật.

Terracotta là màu nhận diện dễ ghi nhớ, xuất hiện tại tiêu đề, nút điều hướng và một số mảng nền.

Sandstone kết nối giao diện với vật liệu tự nhiên.

Burnt Copper tạo chiều sâu cho các section lớn.

Deep Plum tạo điểm nhấn bất ngờ, giúp bảng màu không bị đơn điệu theo hướng nâu đất thông thường.

Không sử dụng xanh biển nhạt, xám lạnh hoặc trắng tinh làm màu chủ đạo. Màu biển nên xuất hiện chủ yếu trong hình ảnh, tạo tương phản với bảng màu đất nung.

3. TYPOGRAPHY & LAYOUT

Typography

Tiêu đề chính: Bodoni Moda hoặc Cormorant Garamond, tạo nét nghệ thuật và giàu tính kiến trúc.

Nội dung: Be Vietnam Pro, bảo đảm dễ đọc và hỗ trợ tiếng Việt.

Nhãn section: Sans-serif in hoa, cỡ nhỏ, khoảng cách ký tự rộng.

Một số tiêu đề có thể sử dụng cỡ chữ lớn vượt khỏi bố cục thông thường.

Layout

Kết hợp bố cục bất đối xứng, ảnh tràn khung và các khoảng trống lớn.

Sử dụng đường kẻ mảnh màu Terracotta hoặc Burnt Copper.

Ảnh có thể chồng lớp nhẹ hoặc đặt lệch trục để tạo cảm giác như trang tạp chí kiến trúc.

Ưu tiên hình chữ nhật, khối ngang dài và những vùng ảnh lớn.

Hạn chế card bo góc, bóng đổ nặng và các thành phần giao diện kiểu dashboard.

Tổng thể phải có tính nghệ thuật nhưng vẫn rõ ràng, dễ đọc và dễ điều hướng.

4. IMAGE ART DIRECTION

Ưu tiên hình ảnh có chất liệu rõ, ánh sáng mạnh và tương phản tự nhiên.

Các loại hình ảnh cần có:

Resort nằm trên vách đá hoặc địa hình ven biển khô cằn.

Công trình có tường đất nung, đá tự nhiên và bề mặt hoàn thiện thủ công.

Lối đi kiến trúc uốn cong hoặc các khối tường điêu khắc.

Hồ bơi vô cực tương phản với vách đá và đại dương.

Phòng nghỉ sử dụng màu đất, vải thô, gỗ sẫm và đá tự nhiên.

Nhà hàng có ánh sáng chiều, bàn ăn bằng đá và nội thất thủ công.

Khu thư giãn ngoài trời với ghế dài, bóng nắng và cảnh quan tự nhiên.

Đường chân trời và mặt biển nhìn từ những góc kiến trúc đặc biệt.

Tránh ảnh resort nhiệt đới có hàng dừa, nội thất trắng xanh kiểu Địa Trung Hải, công trình kính hiện đại hoặc những hình ảnh quá bóng bẩy như quảng cáo bất động sản.

5. TRANG CHỦ — HOME

Header

Nền Warm Chalk.

Logo TIDELINE sử dụng typography thanh lịch, có thể kết hợp biểu tượng đường chân trời cách điệu.

Menu gồm Home, The Retreat, Stays, Experiences.

Có nút chuyển đổi ngôn ngữ VI/EN.

Header gọn, không dùng nhiều biểu tượng hoặc đường viền trang trí.

Hero Section

Ảnh toàn chiều rộng về resort trên vách đá hoặc công trình màu đất nung bên đại dương.

Tiêu đề: “Where Earth Meets the Ocean”.

Dòng giới thiệu ngắn: “A retreat shaped by land, light and sea.”

Nhãn nhỏ phía trên tiêu đề: “A DESERT COASTAL RETREAT”.

CTA điều hướng nội bộ: “Discover TIDELINE”.

Có thể đặt tiêu đề lệch về một bên để giữ lại phần lớn diện tích ảnh.

Brand Introduction

Bố cục hai cột không cân xứng.

Một bên là tiêu đề lớn: “Rooted in the Landscape”.

Bên còn lại là đoạn giới thiệu về kiến trúc, vật liệu và mối liên hệ với địa hình.

Thêm một ảnh chi tiết bề mặt đá hoặc tường đất nung.

Architecture in Earth

Sử dụng một ảnh kiến trúc lớn kết hợp hai ảnh chi tiết nhỏ.

Giới thiệu cách hình khối, vật liệu và ánh sáng tạo nên bản sắc của resort.

Có thể dùng chú thích nhỏ dưới ảnh như trong tạp chí kiến trúc.

Nền Warm Chalk hoặc Sandstone.

Stay Collection
Giới thiệu ba loại hình lưu trú:

Ocean Suite: Suite hướng biển với tông đất ấm và cửa mở rộng ra cảnh quan.

Horizon Villa: Villa riêng tư với sân hiên và tầm nhìn đường chân trời.

Coastal Residence: Không gian lưu trú rộng rãi, chú trọng sự kết nối giữa nội thất và cảnh quan.

Trình bày bằng các ảnh có kích thước khác nhau, tránh lặp lại ba card giống hệt nhau.

The Elements
Giới thiệu bốn tiện ích:

Ocean Pool.

Earth Table Restaurant.

Stone Spa.

Sunset Lounge.

Mỗi tiện ích có ảnh, tiêu đề và mô tả ngắn. Bố cục cần linh hoạt, mang cảm giác của một bộ sưu tập kiến trúc và phong cách sống.

Full-Width Gallery

Một ảnh toàn chiều rộng về biển, vách đá hoặc hồ bơi.

Có thể phủ một dòng chữ ngắn: “A Different Kind of Escape”.

Không đặt quá nhiều nội dung lên ảnh.

Brand Statement

Nền Burnt Copper hoặc Deep Plum.

Chữ Warm Chalk.

Tiêu đề: “Find Your Own Horizon”.

Một đoạn giới thiệu ngắn về triết lý nghỉ dưỡng gắn với thiên nhiên.

Footer

Nền Deep Plum.

Logo, điều hướng, thông tin liên hệ mẫu và liên kết mạng xã hội.

Đường phân cách Terracotta mảnh.

Bố cục tối giản nhưng có cá tính.

6. TRANG THE RETREAT — GIỚI THIỆU

Hero

Ảnh kiến trúc nằm giữa địa hình đá và biển.

Tiêu đề: “Designed by the Elements”.

Our Philosophy

Giới thiệu triết lý thiết kế của TIDELINE.

Nhấn mạnh sự kết hợp giữa địa hình, vật liệu tự nhiên, ánh sáng và tầm nhìn.

Trình bày bằng đoạn văn ngắn kết hợp typography lớn.

The Materials
Giới thiệu ba yếu tố:

Earth: Bề mặt đất nung và sắc màu khoáng chất.

Stone: Kết cấu đá tự nhiên và cảm giác vững chắc.

Light: Ánh sáng tạo hình cho không gian theo từng thời điểm trong ngày.

Mỗi yếu tố có ảnh riêng và một đoạn mô tả ngắn.

Architecture & Landscape

Ảnh công trình, hành lang, sân trong và hồ bơi.

Sử dụng bố cục editorial bất đối xứng.

Chú thích ảnh ngắn, tránh các đoạn giới thiệu quá dài.

Brand Values
Trình bày bốn giá trị bằng typography lớn:

Natural Character.

Architectural Clarity.

Quiet Luxury.

Connection to Place.

Có thể sử dụng nền Sandstone hoặc Terracotta cho một section nhằm tạo nhịp điệu thị giác.

7. TRANG STAYS — PHÒNG NGHỈ & TIỆN ÍCH

Hero

Ảnh phòng nghỉ có tường màu đất, vật liệu tự nhiên và tầm nhìn hướng biển.

Tiêu đề: “Spaces with a Sense of Place”.

Ocean Suite

Hình ảnh phòng nghỉ và khu vực cửa sổ hướng biển.

Mô tả không gian, vật liệu và các tiện nghi tiêu biểu.

Horizon Villa

Ảnh villa có sân hiên riêng và tầm nhìn rộng.

Nhấn mạnh sự riêng tư, kết nối với cảnh quan và trải nghiệm thư giãn.

Coastal Residence

Ảnh không gian rộng, kết hợp phòng khách, phòng ngủ và khu vực ngoài trời.

Nhấn mạnh ngôn ngữ thiết kế xuyên suốt giữa nội thất và kiến trúc.

Mỗi hạng lưu trú có ảnh chính, tên, mô tả, đặc điểm thiết kế và danh sách tiện nghi phù hợp. Không hiển thị giá, lịch phòng hoặc thông tin chưa được xác định.

Resort Facilities
Giới thiệu các tiện ích:

Ocean Pool: Hồ bơi với đường nét hình học và tầm nhìn ra biển.

Earth Table: Nhà hàng mang phong cách ẩm thực đương đại.

Stone Spa: Không gian thư giãn với đá tự nhiên và ánh sáng dịu.

Sunset Lounge: Khu vực ngắm hoàng hôn và thư giãn.

Movement Studio: Không gian dành cho vận động và chăm sóc sức khỏe.

Sử dụng lưới ảnh linh hoạt, phối hợp giữa ảnh ngang dài và ảnh dọc. Không trình bày mọi tiện ích thành những card đồng nhất.

8. TRANG EXPERIENCES — TRẢI NGHIỆM

Hero

Ảnh đường chân trời, vách đá hoặc hồ bơi vào thời điểm hoàng hôn.

Tiêu đề: “Beyond the Ordinary Coast”.

Coastal Discovery

Giới thiệu trải nghiệm khám phá đường bờ biển và cảnh quan tự nhiên.

Dùng ảnh toàn cảnh và chú thích ngắn.

The Art of Dining

Ảnh món ăn, không gian nhà hàng và cách trình bày bàn ăn.

Tập trung vào cảm giác tinh tế, vật liệu tự nhiên và ánh sáng.

Slow Rituals

Giới thiệu spa, thư giãn và những khoảng thời gian nghỉ ngơi.

Bố cục thoáng, ảnh lớn và nội dung ngắn.

Movement & Wellness

Giới thiệu các hoạt động vận động và chăm sóc sức khỏe.

Hình ảnh mang tính tự nhiên, không sử dụng phong cách phòng gym công nghiệp.

The Sunset Hour

Ảnh hoàng hôn trên biển, sân hiên hoặc lounge.

Tiêu đề lớn đặt trên nền Terracotta hoặc Deep Plum.

Tạo một điểm nhấn cảm xúc cho trang.

Closing Gallery

Một ảnh toàn chiều rộng về cảnh quan.

Dòng chữ kết thúc: “Let the Landscape Set the Pace”.

Không có CTA đặt phòng hoặc giao dịch.

9. INTERACTION & MOTION

Sử dụng chuyển động có tiết chế:

Fade-in theo chiều dọc khi section xuất hiện.

Ảnh zoom nhẹ khi hover.

Tiêu đề xuất hiện mượt mà khi cuộn.

Đường kẻ trang trí xuất hiện dần.

Chuyển trạng thái menu và ngôn ngữ mượt mà.

Không dùng parallax mạnh, hiệu ứng 3D nặng hoặc animation liên tục.

10. TECHNICAL REQUIREMENTS

Xây dựng bốn trang HTML riêng: index.html, about.html, stays.html, experiences.html.

Sử dụng HTML, CSS và JavaScript thuần.

Có CSS và JavaScript dùng chung để giữ nhận diện nhất quán.

Hỗ trợ chuyển đổi VI/EN thực sự cho toàn bộ nội dung, menu, nút và footer.

Lưu lựa chọn ngôn ngữ khi người dùng chuyển trang hoặc tải lại.

Responsive trên desktop, tablet và mobile.

Tối ưu hình ảnh, bảo đảm ảnh không bị méo và có phương án dự phòng khi tải lỗi.

Các liên kết điều hướng phải hoạt động chính xác.

Không tích hợp đặt phòng, đặt lịch, giỏ hàng, thanh toán hoặc giao dịch.

11. FINAL DESIGN GOAL

TIDELINE phải mang bản sắc của một Desert Coastal Retreat: mạnh mẽ, giàu chất liệu và kết nối với cảnh quan tự nhiên.

Sự kết hợp giữa Terracotta, Burnt Copper, Sandstone và Deep Plum tạo nên một bảng màu khác biệt so với những resort xanh biển, trắng và xám thông thường.

Ưu tiên ảnh kiến trúc có cá tính, bố cục editorial, typography giàu biểu cảm và sự tương phản giữa đất nung với đại dương.

Kết quả phải giống website của một resort kiến trúc độc đáo giữa vùng bờ biển khô cằn, không phải một mẫu Contemporary Coastal Resort được thay đổi màu sắc đơn thuần.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Du lịch / khu nghỉ dưỡng** (`recipe:travel-resort`, chưa đánh giá): Hero-cinematic → story-pinned (3 khoảnh khắc) → gallery-lookbook → features-alternate (phòng / tour) → cta-fullbleed. Trang chi tiết tour / phòng.
- **Tổ hợp gallery: hero-cinematic → gallery-lookbook → story-letter…** (`recipe:learned-gallery-mvlwv4et`, bản nháp): Trang chủ: hero-cinematic → gallery-lookbook → story-letter → timeline → features-numbered → accordion-cv → cta-type. Ý tưởng thị giác: Đi qua một phòng triển lãm: tường tối, ảnh lớn góc vuông, dưới mỗi tác phẩm là nhãn tường bảo tàng nhỏ (tên in nghiêng + series · năm · thể loại); một phòng sáng màu trắng ngà cho lời tự bạch của tác giả

**Bố cục gợi ý**
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 3 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 21 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 21 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Footer một hàng** (`composition:footer-minimal`, chưa đánh giá): Một hàng: tên · liên hệ · mạng xã hội · ©.

**Tránh lặp:** các website dựng gần đây đã dùng `hero-cinematic`, `gallery-lookbook`, `features-bento`, `features-tabs`, `features-numbered`, `cta-type`, `hero-split`, `features-alternate`, `gallery-masonry` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


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
