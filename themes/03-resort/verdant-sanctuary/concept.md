# Brief website — VERDANT SANCTUARY

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Tên thương hiệu / dự án:** **VERDANT SANCTUARY** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu VERDANT SANCTUARY, một resort sinh thái cao cấp ẩn mình giữa không gian rừng xanh, nơi kiến trúc, ánh sáng và cảnh quan hòa quyện thành một trải nghiệm nghỉ dưỡng yên bình.

Phong cách chủ đạo là Enchanted Forest Luxury — sang trọng, tự nhiên, sâu lắng và giàu cảm xúc. Website phải gợi lên cảm giác bước vào một khu rừng xanh mát, nơi ánh nắng xuyên qua tán cây, những lối đi bằng đá dẫn đến villa riêng tư và kiến trúc được bao bọc bởi thảm thực vật.

Không sử dụng phong cách resort nhiệt đới đại trà, giao diện tối giản lạnh lẽo hoặc thiết kế sinh thái chỉ mang tính biểu tượng.
- **Đối tượng khách truy cập:** BA không ghi — tự suy ra từ chủ đề, mục đích (ảnh hưởng giọng văn, hình ảnh, CTA).
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

> Nguyên văn, 8.868 ký tự, 311 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
VISUAL IDENTITY — COLOR PALETTE

Sử dụng xanh rừng làm màu nhận diện xuyên suốt website:

Deep Forest #243D30: Xanh rừng sâu, dùng cho header, footer, các section thương hiệu và tiêu đề nổi bật.

Canopy Green #42664A: Xanh tán cây, tạo điểm nhấn và kết nối với hình ảnh thiên nhiên.

Fern #819875: Xanh dương xỉ, dùng cho chi tiết giao diện, nhãn section và hiệu ứng hover.

Moss #A1A88A: Xanh rêu dịu, dùng cho nền phụ và các chi tiết trang trí.

Forest Mist #E4E9DD: Xanh sương nhẹ, dành cho các section sáng và khu vực giới thiệu.

Warm Ivory #F5F1E7: Kem ấm, làm nền chính để cân bằng các mảng xanh đậm.

Natural Bark #665443: Nâu vỏ cây, gợi chất liệu gỗ và đất rừng.

Nguyên tắc phối màu:

Deep Forest và Canopy Green phải xuất hiện xuyên suốt để tạo nhận diện rõ ràng.

Warm Ivory và Forest Mist giúp các trang sáng, dễ đọc và không bị tối.

Fern và Moss dùng làm điểm nhấn, không lạm dụng.

Natural Bark xuất hiện ở các chi tiết liên quan đến vật liệu tự nhiên.

Có thể sử dụng ảnh rừng xanh đậm làm nền cho một số section, kết hợp chữ màu kem.

Không dùng xanh neon, xanh bạc hà kiểu công nghệ hoặc màu xanh quá bão hòa. Tổng thể phải giống sắc độ của một khu rừng tự nhiên, có chiều sâu và biến đổi theo ánh sáng.

TYPOGRAPHY & LAYOUT

Tiêu đề: Cormorant Garamond hoặc DM Serif Display, tạo vẻ thanh lịch và gần gũi với thiên nhiên.

Nội dung: Be Vietnam Pro hoặc Manrope, dễ đọc và hỗ trợ tiếng Việt tốt.

Nhãn section: Sans-serif in hoa, cỡ nhỏ, khoảng cách ký tự rộng.

Tiêu đề lớn, có khoảng thở và xuống dòng có chủ đích.

Kết hợp bố cục editorial bất đối xứng, ảnh toàn chiều rộng và các khung hình dọc. Sử dụng đường kẻ mảnh, khoảng trắng rộng và các chi tiết trang trí lấy cảm hứng từ đường nét tự nhiên.

Tránh sử dụng quá nhiều card bo góc, bóng đổ dày hoặc bố cục lặp lại giữa các section.

IMAGE ART DIRECTION

Hình ảnh cần làm nổi bật cảm giác rừng xanh sống động, có chiều sâu và ánh sáng tự nhiên.

Ưu tiên:

Rừng xanh nhiều tầng tán, cây cao và thảm thực vật phong phú.

Ánh nắng xuyên qua tán cây, tạo bóng đổ trên lối đi và kiến trúc.

Villa bằng gỗ và đá tự nhiên nằm giữa khu rừng.

Lối đi lát đá, cầu gỗ và sân trong phủ bóng cây.

Phòng nghỉ mở ra khu vườn hoặc rừng cây.

Hồ nước tĩnh phản chiếu tán lá.

Nhà hàng và spa hòa vào cảnh quan xanh.

Những góc chụp cận cảnh rêu, vân gỗ, đá và lá cây để thể hiện chất liệu.

Ảnh nên có màu xanh tự nhiên, ánh sáng dịu và độ tương phản vừa phải. Kết hợp ảnh rừng tươi sáng với một số ảnh xanh đậm để tạo chiều sâu.

Không sử dụng hình ảnh sa mạc, bờ biển nhiệt đới hoặc kiến trúc bê tông lạnh làm chủ đề chính.

TRANG CHỦ — HOME

Header

Logo VERDANT SANCTUARY trên nền Warm Ivory.

Menu gồm Home, Our Philosophy, Stays, Experiences.

Nút chuyển đổi ngôn ngữ VI/EN.

Có thể chuyển header sang nền Deep Forest khi cuộn trang, với chữ màu kem.

Hero Section

Ảnh lớn toàn chiều rộng về một khu nghỉ dưỡng ẩn mình giữa rừng xanh.

Tiêu đề: “Luxury, Rooted in Nature”.

Mô tả: “A secluded sanctuary shaped by the forest, natural materials and the quiet rhythm of nature.”

Nhãn nhỏ: “AN ENCHANTED FOREST RETREAT”.

CTA: “Discover the Sanctuary”.

Tiêu đề màu kem nếu đặt trên ảnh tối; bảo đảm độ tương phản dễ đọc.

Brand Introduction

Bố cục hai cột với tiêu đề lớn: “Where the Forest Becomes Home”.

Giới thiệu triết lý nghỉ dưỡng gắn với cảnh quan, kiến trúc và sự riêng tư.

Kết hợp ảnh villa giữa tán cây và ảnh chi tiết vật liệu gỗ tự nhiên.

Forest Architecture

Ảnh kiến trúc lớn kết hợp ảnh chi tiết về mái, hành lang, cửa sổ và sân trong.

Tiêu đề: “Architecture Among the Trees”.

Mô tả cách công trình hòa vào cảnh quan bằng hình khối, vật liệu và ánh sáng.

The Stay Collection
Giới thiệu ba loại hình lưu trú:

Garden Suite: Suite hướng ra khu vườn xanh, có ánh sáng tự nhiên và vật liệu ấm.

Forest Villa: Villa riêng tư giữa cây xanh, nhấn mạnh sự kết nối với thiên nhiên.

Eco Residence: Không gian lưu trú rộng rãi, kết hợp nội thất tự nhiên và cảnh quan bên ngoài.

Trình bày bằng các ảnh lớn có kích thước khác nhau, không sử dụng ba card giống hệt nhau.

The Forest Sanctuary
Giới thiệu các không gian:

Botanical Garden: Khu vườn xanh với lối đi giữa thảm thực vật.

Forest Table: Nhà hàng kết nối với cảnh quan.

Moss Spa: Không gian thư giãn lấy cảm hứng từ sắc xanh và vật liệu tự nhiên.

Canopy Lounge: Khu vực nghỉ ngơi dưới tán cây.

Living in Balance

Nền Deep Forest.

Chữ màu Warm Ivory, điểm nhấn Fern.

Tiêu đề: “A Deeper Connection to Nature”.

Giới thiệu định hướng nghỉ dưỡng có trách nhiệm và sự tôn trọng cảnh quan.

Không sử dụng số liệu hoặc tuyên bố môi trường chưa được xác thực.

Closing Gallery

Ảnh toàn chiều rộng về rừng xanh trong ánh nắng cuối ngày.

Dòng chữ: “Find Your Quiet in the Wild”.

Footer

Nền Deep Forest.

Logo, menu, thông tin liên hệ mẫu và liên kết mạng xã hội.

Đường phân cách Fern mảnh.

TRANG OUR PHILOSOPHY — GIỚI THIỆU

Hero ảnh kiến trúc ẩn trong tán rừng, tiêu đề “Designed to Belong”.

Giới thiệu triết lý thương hiệu bằng nội dung ngắn gọn.

Section kiến trúc và cảnh quan với ảnh villa, hành lang mở và sân trong.

Section vật liệu tự nhiên gồm gỗ, đá, đất và các bề mặt hoàn thiện có kết cấu.

Section ánh sáng tự nhiên thể hiện bóng cây và sự thay đổi ánh sáng trong không gian.

Section định hướng phát triển có trách nhiệm, sử dụng ngôn ngữ chính xác và không phóng đại thành tựu.

Gallery cuối trang kết hợp ảnh toàn cảnh rừng và chi tiết kiến trúc.

TRANG STAYS — PHÒNG NGHỈ & TIỆN ÍCH

Hero

Ảnh villa giữa rừng xanh.

Tiêu đề: “Private Spaces in Nature”.

Garden Suite

Ảnh phòng nghỉ hướng ra vườn.

Mô tả ánh sáng, vật liệu, tầm nhìn và tiện nghi.

Forest Villa

Ảnh villa riêng tư nằm giữa cây cao và thảm thực vật.

Nhấn mạnh sự yên tĩnh, không gian mở và cảm giác gần gũi thiên nhiên.

Eco Residence

Ảnh khu vực sinh hoạt rộng rãi với cửa mở ra cảnh quan.

Mô tả thiết kế và các tiện nghi phù hợp.

Resort Facilities

Botanical Garden.

Forest Table Restaurant.

Moss Spa.

Canopy Lounge.

Outdoor Wellness Space.

Mỗi tiện ích có ảnh lớn, tiêu đề và mô tả ngắn. Sử dụng nền xen kẽ giữa Warm Ivory, Forest Mist và Deep Forest.

Có thể bổ sung sơ đồ minh họa khái niệm về mối quan hệ giữa khu lưu trú, khu vườn và các tiện ích. Nếu không có mặt bằng thực tế, phải ghi rõ đây là sơ đồ minh họa.

Không hiển thị giá, lịch phòng hoặc chức năng đặt dịch vụ.

TRANG EXPERIENCES — TRẢI NGHIỆM

Hero

Ảnh lối đi giữa khu rừng, ánh nắng xuyên qua tán cây.

Tiêu đề: “Follow the Rhythm of the Forest”.

Forest Discovery

Giới thiệu trải nghiệm khám phá cảnh quan và các lối đi giữa thiên nhiên.

Botanical Garden

Hình ảnh cây xanh, vườn thảo mộc và các góc cảnh quan.

Nội dung giới thiệu không gian và trải nghiệm tìm hiểu thực vật nếu phù hợp.

Conscious Dining

Ảnh nhà hàng giữa khu vườn và không gian thưởng thức ẩm thực.

Không tự khẳng định nguyên liệu hữu cơ hoặc có nguồn gốc địa phương nếu chưa có dữ liệu xác thực.

Forest Wellness

Giới thiệu spa, thiền và các không gian thư giãn.

Dùng ảnh ánh sáng dịu, vật liệu tự nhiên và cảnh quan xanh.

Slow Living

Section nền Moss hoặc Canopy Green.

Tiêu đề lớn: “Make Space for Stillness”.

Nội dung nhấn mạnh việc nghỉ ngơi, tận hưởng không gian và kết nối với thiên nhiên.

Closing Gallery

Ảnh rừng xanh và kiến trúc trong ánh sáng dịu.

Dòng chữ kết thúc: “Return to Nature, Return to Yourself”.

MOTION & INTERACTION

Fade-in nhẹ khi các section xuất hiện.

Ảnh zoom chậm khi hover.

Tiêu đề xuất hiện theo chiều dọc.

Đường phân cách hiện dần khi cuộn trang.

Chuyển trạng thái menu và ngôn ngữ mượt mà.

Hỗ trợ prefers-reduced-motion để hạn chế chuyển động khi người dùng yêu cầu.

Không sử dụng animation mạnh hoặc hiệu ứng gây mất tập trung.

TECHNICAL REQUIREMENTS

Xây dựng bốn trang HTML riêng: index.html, about.html, stays.html, experiences.html.

Sử dụng HTML, CSS và JavaScript thuần.

Dùng chung stylesheet và script khi phù hợp.

Hỗ trợ chuyển đổi VI/EN đầy đủ cho mọi nội dung.

Lưu ngôn ngữ đã chọn khi chuyển trang hoặc tải lại.

Responsive trên desktop, tablet và mobile.

Tối ưu ảnh, lazy-load các ảnh ngoài màn hình đầu tiên và có phương án dự phòng khi ảnh lỗi.

Đảm bảo độ tương phản, alt text và khả năng điều hướng bằng bàn phím.

Không tích hợp đặt phòng, đặt lịch, giỏ hàng hoặc thanh toán.

FINAL DESIGN GOAL

VERDANT SANCTUARY phải gợi nhớ đến một khu rừng xanh sâu, tươi mát và đầy sức sống, nơi kiến trúc cao cấp được bao bọc bởi thiên nhiên.

Xanh rừng là màu nhận diện xuyên suốt, kết hợp xanh dương xỉ, xanh rêu và màu kem ấm. Hình ảnh rừng xanh, ánh nắng xuyên qua tán cây, vật liệu gỗ và đá tự nhiên phải tạo nên bản sắc thị giác nổi bật.

Website cần sang trọng nhưng không lạnh lẽo, gần gũi thiên nhiên nhưng không đơn điệu, có chiều sâu kiến trúc nhưng vẫn dễ sử dụng.

Kết quả phải giống website của một thương hiệu Enchanted Forest Luxury Retreat, không phải một mẫu resort thông thường được đổi sang màu xanh lá.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Nhà hàng / quán cà phê** (`recipe:restaurant-cafe`, chưa đánh giá): Hero-cinematic hoặc hero-offset → story-letter → menu dạng features-numbered / tabs → gallery-filmstrip → contact-split (giờ mở cửa, bản đồ, đặt bàn = bản demo).
- **Du lịch / khu nghỉ dưỡng** (`recipe:travel-resort`, chưa đánh giá): Hero-cinematic → story-pinned (3 khoảnh khắc) → gallery-lookbook → features-alternate (phòng / tour) → cta-fullbleed. Trang chi tiết tour / phòng.

**Bố cục gợi ý**
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 22 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.
- **Hero cảnh nhiều lớp** (`composition:hero-scene`, chưa đánh giá, đã dùng 1 lần): Bầu trời gradient + mây + hạt + ảnh phong cảnh hòa đáy (`data-layers`, `data-depth`, mask-image). _Tránh:_ Không gắn data-reveal / data-parallax lên lớp data-depth.
- **Footer wordmark lớn** (`composition:footer-big`, chưa đánh giá, đã dùng 1 lần): Tên thương hiệu cực lớn ở đáy, 3–4 cột link / liên hệ phía trên.
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 3 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.

**Chuyển động gợi ý**
- **Ảnh mở màn che** (`motion:clip-image`, chưa đánh giá): `data-reveal="clip"` trên khung ảnh overflow-hidden chứa <img>. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Parallax ảnh hero** (`motion:parallax-hero`, chưa đánh giá): `data-parallax="0.15"` trên lớp bọc `absolute inset-x-0 -inset-y-[15%]`. _Tránh:_ Đặt chung phần tử có data-reveal / data-tilt; Dùng inset-0 → lộ mép.
- **Hạt sáng / mây** (`motion:atmos-particles`, chưa đánh giá): atmos.js: `data-particles="dust|fireflies|stars|petals"` một section (Level 2), `data-clouds="3"`. _Tránh:_ Chữ trên nền có hạt thiếu tương phản; Tôn trọng prefers-reduced-motion (thư viện đã xử lý).

**Tránh lặp:** các website dựng gần đây đã dùng `hero-cinematic`, `gallery-lookbook`, `features-bento`, `cta-type`, `features-tabs`, `features-numbered`, `hero-split`, `features-alternate` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


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
