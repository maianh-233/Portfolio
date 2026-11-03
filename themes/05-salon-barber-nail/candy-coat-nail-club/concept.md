# Brief website — CANDY COAT NAIL CLUB

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu
- **Tên thương hiệu / dự án:** **CANDY COAT NAIL CLUB** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Playful Nail Art Studio — Playful Pop Art × Y2K Graphic Design

1. PROJECT OVERVIEW

Thiết kế website giới thiệu CANDY COAT NAIL CLUB, một nail studio trẻ trung dành cho những người yêu thích nail art sáng tạo, màu sắc nổi bật và phong cách thể hiện cá tính.

Website lấy cảm hứng từ Y2K beauty culture, pop art, sticker scrapbook và các ấn phẩm thời trang dành cho giới trẻ. Giao diện phải vui nhộn, tự tin, giàu năng lượng và có bản sắc thị giác rõ ràng.

Tinh thần thương hiệu: Colorful, cheeky, creative, expressive.

Đây là website giới thiệu thương hiệu và dịch vụ, không phải cửa hàng trực tuyến. Hãy tạo cảm giác như bước vào một playground dành cho nail art, nơi mỗi bộ móng là một cách thể hiện cá tính.
- **Đối tượng khách truy cập:** Khách có nhu cầu sẽ xem
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Neo-Brutalism / Bold** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 2 — Atmospheric** (mặc định của preset). Được dùng: thêm `data-split`, `data-reveal="clip"`, `data-reveal-stagger`, `data-parallax` ≤ 0.2, marquee, kéo ngang; atmos.js: `data-float`, `data-gradient-shift`, `data-clouds` / `data-particles` ở **một** section trên mỗi trang.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Bricolage Grotesque:opsz,wght@12..96,400;12..96,800`, body `Bricolage Grotesque:opsz,wght@12..96,400;12..96,500`, nhãn `Playfair Display:ital@1`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Bricolage Grotesque`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Playfair Display`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 13.990 ký tự, 620 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
. ART DIRECTION & COLOR SYSTEM

Phong cách: Playful Pop Art × Y2K Graphic Design × Contemporary Beauty Editorial.

Bảng màu chủ đạo

Bubblegum Fuchsia #F0529C — màu nhận diện nổi bật, dùng cho hero, CTA và các section đặc trưng.

Butter Yellow #FFE58A — tạo cảm giác vui tươi, xuất hiện ở sticker, nhãn và nền phụ.

Baby Blue #A9D9F7 — tạo tương phản mát mắt, dùng cho gallery và các khối nội dung.

Clean White #FFFDF9 — nền trung tính giúp cân bằng màu sắc.

Ink Black #242124 — màu chữ chính, tạo độ tương phản và giữ giao diện dễ đọc.

Soft Pink #FFD8E8 — màu nền phụ cho các khu vực nữ tính và nhẹ nhàng.

Fuchsia là màu nhận diện chính. Kết hợp vàng bơ và xanh baby blue theo từng section, không sử dụng tất cả màu nổi cùng cường độ trong mọi khu vực.

Dùng màu đen hoặc màu mực đậm cho nội dung chữ trên nền sáng. Không đặt chữ nhỏ màu trắng trên nền vàng nhạt hoặc xanh nhạt nếu độ tương phản không đủ.

Typography

Font display đậm, vui nhộn, có cá tính cho tiêu đề.

Sans-serif hiện đại, dễ đọc cho nội dung và điều hướng.

Có thể dùng chữ in hoa, chữ nghiêng và cách xuống dòng bất đối xứng để tạo chất Y2K.

Sử dụng serif hoặc font viết tay trang trí rất hạn chế, chỉ dành cho một vài chú thích.

Hỗ trợ đầy đủ tiếng Việt có dấu; không chọn font display khiến chữ tiếng Việt bị lỗi.

Tiêu đề được phép phá cách, nhưng nội dung dịch vụ, bảng giá và thông tin liên hệ phải dễ đọc.

Graphic Elements

Sử dụng hệ thống sticker và hình khối riêng cho thương hiệu:

Ngôi sao bốn cánh và ngôi sao nhiều tia.

Hoa nhỏ, trái tim, mặt cười.

Cherry, dâu tây, lát cam và các hình trái cây mini.

Hình oval, bong bóng, tia sáng, đường viền uốn lượn.

Sticker chữ như “NAIL CLUB”, “COLOR YOUR MOOD”, “FRESH SET”.

Các nhãn hình ngôi sao hoặc nhãn dán viền tương phản.

Graphic elements nên trông như được sắp đặt có chủ ý, không rải ngẫu nhiên trên toàn bộ giao diện.

Quy tắc quan trọng: Mỗi section chỉ nên có một hoặc hai nhóm họa tiết chính. Sticker trang trí không được che tiêu đề, CTA hoặc nội dung quan trọng.

3. GLOBAL LAYOUT & BRAND IDENTITY

Header

Logo chữ CANDY COAT nổi bật, kết hợp dòng nhỏ “NAIL CLUB”.

Menu: Home, Services, Nail Playground, Meet the Artists.

Bộ chuyển đổi ngôn ngữ VI / EN.

CTA “Đặt lịch / Book a Visit” với màu fuchsia nổi bật.

Header nền trắng hoặc hồng nhạt, có thể sử dụng đường viền đen mảnh.

Có thể thêm một sticker ngôi sao nhỏ cạnh logo, nhưng không làm logo khó đọc.

Khi cuộn, header có thể chuyển sang dạng compact với nền đặc để giữ khả năng đọc.

Announcement Strip

Ngay dưới header có thể sử dụng một dải thông báo ngang, ví dụ:

“GOOD NAILS. GOOD MOOD. ✦ REPEAT.”

Dải này có thể chạy chữ chậm theo chiều ngang, sử dụng màu fuchsia hoặc vàng bơ. Trên mobile, tốc độ và chiều rộng cần được kiểm soát để không gây khó chịu.

Footer

Logo CANDY COAT NAIL CLUB.

Một câu tagline vui nhộn.

Điều hướng đến bốn trang.

Thông tin liên hệ, giờ hoạt động và mạng xã hội mẫu.

CTA đặt lịch.

Graphic nhỏ như hoa, ngôi sao hoặc hình mặt cười.

Footer có thể dùng nền fuchsia hoặc đen, nhưng phải bảo đảm chữ có độ tương phản cao.

Layout Principles

Sử dụng bố cục linh hoạt, thay đổi nhịp điệu giữa các section.

Kết hợp grid, ảnh lớn, khối màu và typography quá khổ.

Một số section có thể sử dụng đường viền đen dày vừa phải để tạo chất pop art.

Không biến toàn bộ website thành các card bo góc giống nhau.

Không sử dụng quá nhiều bóng đổ, gradient và hiệu ứng 3D cùng lúc.

Hình ảnh nail art là nội dung chính; sticker và hình khối chỉ đóng vai trò bổ trợ.

4. PAGE 01 — HOME

Mục tiêu: Tạo ấn tượng ngay từ màn hình đầu tiên, thể hiện một nail club sáng tạo, vui nhộn và khác biệt.

Hero Section — “NAILS THAT POP!”

Thiết kế hero với bố cục bất đối xứng và năng lượng thị giác mạnh.

Bố cục đề xuất:

Một bên là tiêu đề lớn “NAILS THAT POP!”

Bên còn lại là ảnh bàn tay với bộ nail art nhiều màu, charm trái cây, hoa mini hoặc chrome.

Nền fuchsia kết hợp một mảng vàng bơ hoặc baby blue.

Một vài sticker ngôi sao, hoa nhỏ hoặc nhãn dán trang trí quanh ảnh.

Có thể xoay nhẹ một số sticker, nhưng không xoay các khối chữ dài hoặc nội dung quan trọng.

Nội dung giới thiệu:

“Your nails, your mood, your rules.”

Bản tiếng Việt:

“Móng xinh theo mood, chất riêng theo cách bạn.”

Mô tả ngắn về CANDY COAT NAIL CLUB: nơi những ý tưởng nail art vui nhộn, màu sắc và cá tính được biến thành những bộ móng mang dấu ấn riêng.

CTA:

“Khám phá nail art / Explore Nail Art”

“Đặt lịch / Book a Visit”

Có thể đặt thêm một nhãn nhỏ “CREATIVE NAIL STUDIO” gần tiêu đề.

Không dùng hero dạng ảnh banner thông thường với nội dung căn giữa đơn điệu.

Brand Introduction — “A LITTLE EXTRA IS A GOOD THING”

Section nền trắng, bố cục rộng và typography đậm.

Giới thiệu tinh thần thương hiệu:

Khuyến khích khách hàng thử nghiệm màu sắc.

Tôn trọng phong cách cá nhân.

Kết hợp kỹ thuật làm móng với các ý tưởng nail art sáng tạo.

Tạo ra trải nghiệm vui vẻ, thân thiện và giàu cảm hứng.

Sử dụng một ảnh editorial kết hợp với những câu chữ lớn như:
“Cute.”
“Bold.”
“Totally You.”

Các từ khóa có thể được bố trí lệch nhau như một trang tạp chí.

Signature Nail Styles

Giới thiệu bốn phong cách nổi bật:

01. Fruity Pop

Cherry, dâu tây, cam và họa tiết trái cây.

Màu sắc tươi sáng, phù hợp với phong cách playful.

02. Flower Power

Hoa mini, hoa nổi, họa tiết cánh hoa và màu pastel.

Vui nhộn nhưng không quá trẻ con.

03. Chrome Crush

Chrome ánh bạc, hiệu ứng phản chiếu và chi tiết metallic.

Tạo điểm nhấn Y2K.

04. Charm Attack

Charm nhỏ, ngôi sao, trái tim và phụ kiện trang trí.

Thiết kế giàu chi tiết, thể hiện cá tính.

Mỗi phong cách có hình ảnh riêng, tên phong cách, mô tả ngắn và liên kết đến Nail Playground.

Moodboard Section — “PICK YOUR VIBE”

Tạo một moodboard hình ảnh với nhiều tỷ lệ khác nhau:

Bộ móng hồng fuchsia.

French tip nhiều màu.

Nail art cherry.

Hoa mini.

Chrome bạc.

Móng pastel phối họa tiết.

Ảnh nên được sắp xếp như một bảng cảm hứng, không phải một grid sản phẩm thương mại điện tử.

Meet the Artists Preview

Giới thiệu 2–3 nail artist bằng ảnh chân dung hoặc ảnh đang thực hiện nail art.

Mỗi người có:

Tên.

Phong cách yêu thích.

Một câu giới thiệu ngắn, thân thiện.

Ví dụ:
“Color addict. Detail lover. Nail art enthusiast.”

Thông tin nhân sự chỉ là dữ liệu mẫu, không tự nhận là người thật hoặc tự thêm thành tích chưa được cung cấp.

Final CTA — “READY FOR A FRESH SET?”

Tạo section nền vàng bơ hoặc baby blue, với tiêu đề lớn và một sticker hình ngôi sao.

CTA: “Đặt lịch / Book a Visit”.

5. PAGE 02 — SERVICES & PRICING

Mục tiêu: Trình bày dịch vụ rõ ràng, thân thiện và phù hợp với phong cách trẻ trung của thương hiệu.

Không làm trang dịch vụ giống bảng giá của spa truyền thống.

Page Hero

Tiêu đề: “GOOD NAILS START HERE.”

Mô tả ngắn về các dịch vụ từ chăm sóc móng cơ bản đến nail art thiết kế riêng.

Sử dụng một ảnh cận cảnh bộ móng và các nhãn nhỏ như “YOUR NEXT SET”, “NAIL CLUB FAVORITE”.

Service Category 01 — Nail Care

Bao gồm:

Basic Manicure.

Signature Nail Care.

Cuticle Care.

Nail Repair.

Mô tả ngắn về tạo hình, chăm sóc móng và hoàn thiện sạch đẹp.

Service Category 02 — Gel Polish

Bao gồm:

Classic Gel Polish.

Sheer & Jelly Gel.

French Tip.

Multi-color Gel.

Tập trung vào lựa chọn màu sắc, độ bóng và phong cách hoàn thiện.

Service Category 03 — Nail Extension

Bao gồm:

Gel Extension.

Natural Shape Extension.

Nail Refill.

Giải thích ngắn về tạo dáng và độ dài móng.

Service Category 04 — Custom Nail Art

Bao gồm:

Minimal Nail Art.

Fruity & Floral Art.

Chrome Design.

3D Charms & Details.

Custom Art Set.

Nêu rõ giá có thể thay đổi tùy độ phức tạp của thiết kế và phụ kiện.

Service Category 05 — Nail Removal

Bao gồm:

Gel Polish Removal.

Extension Removal.

Removal with Nail Care.

Mô tả ngắn gọn, dễ hiểu.

Pricing Layout

Hiển thị tên dịch vụ, mô tả, thời lượng dự kiến và giá minh họa bằng VND.

Có thể chia danh mục thành các section nền trắng, hồng nhạt và baby blue.

Sử dụng đường viền, typography đậm và nhãn màu để tạo nhận diện.

Không để bảng giá trở nên rối mắt bởi quá nhiều icon.

Ghi chú rằng giá nail art tùy thuộc vào độ phức tạp và phụ kiện.

Các mức giá phải được đánh dấu là dữ liệu mẫu có thể thay đổi.

Không tự tạo chính sách đặt cọc, phí hủy lịch hoặc cam kết chuyên môn như thể đây là thông tin chính thức.

Booking CTA

Một khối màu nổi bật ở cuối trang:

“FOUND YOUR NEXT SET?”

CTA: “Đặt lịch / Book a Visit”.

CTA chỉ mang tính minh họa, không tạo lịch hẹn thật.

6. PAGE 03 — NAIL PLAYGROUND

Mục tiêu: Tạo một không gian khám phá nail art như bảng cảm hứng kỹ thuật số, vui nhộn và giàu tính tương tác.

Gallery Hero

Tiêu đề lớn: “WELCOME TO THE NAIL PLAYGROUND!”

Bên dưới là mô tả ngắn khuyến khích người xem khám phá màu sắc, họa tiết và phong cách thiết kế.

Có thể dùng các nhãn đồ họa như:

COLOR PARTY.

CHROME CLUB.

FRUITY MOOD.

EXTRA CUTE.

Interactive Category Filters

Tạo các bộ lọc hoạt động thực tế:

All Looks.

Pink & Sweet.

Fruity Nails.

Flower Power.

Chrome & Metallic.

Charms & 3D.

French & Minimal.

Khi nhấn bộ lọc, gallery cập nhật ngay mà không tải lại trang.

Nút lọc có thể có nền màu khác nhau, đường viền rõ và hiệu ứng hover nhẹ. Trạng thái đang chọn phải dễ nhận biết.

Nail Art Gallery

Thiết kế gallery dạng collage với:

Ảnh vuông, ảnh dọc và một số ảnh ngang.

Các kích thước khác nhau để tạo nhịp điệu.

Một số hình ảnh có nhãn sticker nhỏ.

Khoảng cách đủ rộng để hình ảnh không bị dính vào nhau.

Nội dung mô tả ngắn bên dưới hoặc hiển thị khi hover.

Các hình ảnh phải đa dạng thực sự về kiểu dáng, màu sắc, họa tiết và phụ kiện. Không lặp lại cùng một mẫu móng chỉ bằng cách đổi màu.

Interactive Lightbox

Khi nhấn ảnh:

Mở ảnh lớn trên nền tối hoặc nền trung tính.

Hiển thị tên thiết kế và nhóm phong cách.

Có nút đóng, ảnh trước và ảnh tiếp theo.

Hỗ trợ phím Escape và phím mũi tên.

Có thể nhấn bên ngoài ảnh để đóng.

Trên mobile, bố cục phải vừa màn hình và các nút đủ lớn.

Không để ảnh phóng to vượt khỏi viewport hoặc khiến trang bị cuộn ngang.

Featured Moodboard — “CURRENT OBSESSION”

Tạo một moodboard nổi bật theo chủ đề, ví dụ “SUGAR RUSH”.

Bộ sưu tập kết hợp:

Hồng kẹo.

Vàng bơ.

Cherry đỏ.

Chrome bạc.

Hoa mini.

Charm ngộ nghĩnh.

Thay đổi bố cục, tỷ lệ ảnh và vị trí typography để tạo cảm giác như một trang editorial, không chỉ là gallery thông thường.

Gallery CTA

Thông điệp:
“SPOTTED A LOOK YOU LOVE?”

CTA: “Đặt lịch / Book a Visit”.

7. PAGE 04 — MEET THE ARTISTS

Mục tiêu: Giới thiệu con người, cá tính sáng tạo và không gian của CANDY COAT NAIL CLUB.

Page Hero — “MEET YOUR NAIL BESTIES”

Sử dụng ảnh nhóm hoặc ảnh chân dung nail artist trong không gian studio.

Tiêu đề lớn, vui nhộn, kết hợp các sticker nhỏ nhưng vẫn dễ đọc.

Our Story

Kể câu chuyện thương hiệu theo hướng thân thiện và chân thành:

Vì sao CANDY COAT NAIL CLUB ra đời.

Niềm yêu thích với màu sắc và nail art sáng tạo.

Mong muốn tạo không gian để khách hàng tự do thử nghiệm phong cách riêng.

Tinh thần cởi mở, vui vẻ và tôn trọng sự khác biệt.

Tránh những tuyên bố phóng đại như “số một”, “tốt nhất thành phố” hoặc “studio nổi tiếng hàng đầu” khi chưa có dữ liệu xác thực.

Meet the Artists

Tạo hồ sơ cho 2–3 nail artist mẫu.

Mỗi hồ sơ gồm:

Ảnh chân dung hoặc ảnh thao tác.

Tên hiển thị.

Vai trò hoặc thế mạnh.

Phong cách yêu thích.

Một câu mô tả cá tính.

Ví dụ phong cách:

The Color Lover — yêu thích phối màu nổi bật.

The Detail Queen — chuyên họa tiết mini và charm.

The Chrome Artist — theo đuổi hiệu ứng metallic và thiết kế Y2K.

Các mô tả này chỉ là ví dụ sáng tạo; thông tin có thể thay đổi khi có dữ liệu thật.

Thiết kế các hồ sơ có màu nền và cách bố trí khác nhau, tránh ba card giống hệt nhau.

Inside the Club

Giới thiệu không gian studio:

Bàn làm móng gọn gàng.

Khu vực trưng bày bảng màu.

Góc chụp ảnh bộ móng.

Kệ phụ kiện và charm.

Không gian tiếp khách trẻ trung.

Sử dụng ảnh thật hoặc ảnh minh họa phù hợp, kết hợp chú thích ngắn như trong tạp chí.

Không để các hình ảnh trang trí lấn át thông tin về studio.

Contact & Visit

Hiển thị:

Địa chỉ mẫu.

Số điện thoại mẫu.

Giờ hoạt động mẫu.

Liên kết mạng xã hội mẫu.

CTA liên hệ và đặt lịch.

Thông tin chưa được cung cấp phải được đánh dấu là dữ liệu minh họa để dễ thay thế.

Không tạo form gửi dữ liệu lên server hoặc tự động gửi tin nhắn.

8. BILINGUAL VIETNAMESE–ENGLISH

Toàn bộ website phải hỗ trợ tiếng Việt và tiếng Anh.

Bao gồm:

Header, menu và footer.

Tiêu đề, đoạn mô tả và CTA.

Tên dịch vụ, mô tả và bảng giá.

Bộ lọc gallery và thông tin từng ảnh.

Hồ sơ nail artist.

Thông tin liên hệ và thông báo giao diện.

Language Switcher:

Có nút VI / EN ở header và trong menu mobile.

Chuyển đổi ngôn ngữ ngay tại trang hiện tại.

Không tải lại về Home chỉ vì thay đổi ngôn ngữ.

Lưu lựa chọn bằng localStorage.

Sử dụng hệ thống dữ liệu dịch tập trung để dễ bảo trì.

Dịch tự nhiên, không dịch từng từ một cách máy móc.

Bảo đảm chữ tiếng Việt không bị lỗi font, tràn dòng hoặc vỡ layout.

Không để nội dung tiếng Anh sót lại trong giao diện tiếng Việt, ngoại trừ tên thương hiệu và tên phong cách cần giữ nguyên.

9. MOTION & MICRO-INTERACTIONS

Sử dụng chuyển động vui nhộn nhưng có kiểm soát.

Sticker animations:

Ngôi sao xoay nhẹ hoặc nhún nhẹ khi xuất hiện.

Sticker hoa và trái tim có thể nổi lên vài pixel.

Một vài graphic có hiệu ứng pop-in khi section đi vào viewport.

Các sticker trang trí không được chuyển động liên tục cùng lúc.

Hover interactions:

Ảnh nail art phóng to nhẹ.

Nút CTA thay đổi màu nền và vị trí rất nhẹ.

Service labels có thể đổi màu hoặc nghiêng nhẹ khi hover.

Gallery thumbnail có phản hồi thị giác rõ ràng.

Scroll effects:

Tiêu đề xuất hiện bằng fade-in kết hợp dịch chuyển nhỏ.

Một vài graphic có thể chuyển động theo tiến trình cuộn.

Giữ hiệu ứng đủ nhẹ để không ảnh hưởng hiệu năng.

Accessibility:

Hỗ trợ prefers-reduced-motion.

Không dùng hiệu ứng nhấp nháy nhanh.

Không làm chữ rung hoặc di chuyển khiến người dùng khó đọc.

Mọi thao tác gallery và menu phải sử dụng được bằng bàn phím.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Tổ hợp bold: hero-cinematic → features-bento → marquee-band…** (`recipe:learned-bold-mvlrve5y`, bản nháp): Trang chủ: hero-cinematic → features-bento → marquee-band → story-letter → stats-band → teaser-row → features-tabs → cta-type. Ý tưởng thị giác: Phiếu tư liệu: mọi công trình, dự án, giải thưởng trình bày như một phiếu lưu trữ có dải siêu dữ liệu (mã, năm, nguồn, trạng thái kiểm chứng) với vạch xanh GIS bên trái; góc vuông, viền đậm xanh học thuật và bóng cứng lệch cho nút chính

**Bố cục gợi ý**
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 31 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Hero ảnh chồng lệch** (`composition:hero-offset`, chưa đánh giá, đã dùng 4 lần): 2–3 ảnh chồng lệch / xoay nhẹ, tiêu đề đè mép ảnh, nhãn dán bo tròn.
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 37 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.
- **Hero chia đôi chữ – ảnh** (`composition:hero-split`, chưa đánh giá, đã dùng 13 lần): Chữ 5–6/12 cột trái, ảnh tràn mép phải ở lg+; mobile chữ → ảnh.

**Chuyển động gợi ý**
- **Lưới hiện lần lượt** (`motion:stagger-grid`, chưa đánh giá): `data-reveal-stagger="80"` trên khối cha của lưới thẻ. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Băng chuyền chữ / logo** (`motion:marquee`, chưa đánh giá): `data-marquee="40"`. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).

**Tránh lặp:** các website dựng gần đây đã dùng `hero-split`, `features-numbered`, `gallery-lookbook`, `features-alternate`, `cta-type`, `hero-offset`, `features-bento` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Neo-Brutalism / Bold (`bold`)
Khối rõ, viền mạnh, chữ khổng lồ, tương phản nổi bật — phá lưới có kiểm soát.

**Hợp với:** agency sáng tạo, portfolio thiết kế, lễ hội / sự kiện trẻ, thương hiệu Gen Z
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `paper` #F2EFE6 · `ink` #0F0F0F · `signal` #FF4D1F · `cobalt` #2340FF · `acid` #E9FF3B
**Font** (Google Fonts): display `Bricolage Grotesque:opsz,wght@12..96,400;12..96,800` · body `Bricolage Grotesque:opsz,wght@12..96,400;12..96,500` · nhãn `Playfair Display:ital@1`
_(Đã thay font thiếu dấu tiếng Việt của preset gốc bằng font cùng tinh thần có đủ dấu.)_

**Thành phần giao diện**
- Nút khối màu viền 2–3px ink, bóng cứng lệch `shadow-[5px_5px_0_#0F0F0F]`, nhấn xuống khi bấm
- Thẻ viền dày góc vuông; nhãn dán (sticker) bo tròn
**Chữ**
- Một family Bricolage Grotesque: tiêu đề 800 cực lớn (tràn khung, chữ chạm mép), thân 400; điểm nhấn Instrument Serif nghiêng.
**Bố cục**
- Khối màu phẳng full-bleed đổi liên tục (signal → cobalt → paper); chữ khổng lồ chồng lên ảnh.
- Phá lưới có chủ đích: ảnh lệch, chữ xoay 90°, nhãn dán (sticker) bo tròn.
**Ảnh**
- Ảnh thật tương phản mạnh, cắt sát; có thể cắt khung hình tròn / pill.
**Khoảng trắng:** Ít hơn, dày đặc năng lượng nhưng mỗi section một ý.
**Chuyển động mặc định:** Level 2 — Atmospheric
- `data-marquee` chữ lớn, `data-magnetic` CTA, `data-tilt` thẻ dự án, `data-split="chars"` cho 1 tiêu đề, `data-cursor="dot"` + `data-cursor-label`.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-offset` → `features-bento` → `gallery-masonry` → `stats-band` → `quote-full` → `cta-type` → `footer-big`
**Được phép (ghi đè layout-guide mục 3):** chữ xoay / chồng ảnh; khối màu bão hòa
**Tránh:** pastel nhạt nhòa; bố cục an toàn đối xứng
