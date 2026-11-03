# Prompt đã dùng — MONOCHROME GENTLEMEN

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
# Brief website — MONOCHROME GENTLEMEN

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu
- **Tên thương hiệu / dự án:** **MONOCHROME GENTLEMEN** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu MONOCHROME GENTLEMEN, một barber studio chuyên về kiểu tóc nam tinh gọn, kỹ thuật cắt chính xác và phong cách lịch lãm hiện đại.

Kết hợp Minimalist Modernism, Swiss Typography và Black & White Editorial Photography để tạo ra một website có tính thẩm mỹ cao, cân bằng và chuyên nghiệp.

Website không dựa vào hiệu ứng trang trí hoặc màu sắc nổi bật. Cá tính thương hiệu được thể hiện qua tỷ lệ bố cục, typography, hình ảnh, đường kẻ và khoảng trắng.

Creative direction: Minimal, Precise, Timeless, Structured.

Xây dựng bốn trang:

Home.

Services & Pricing.

Hair Portfolio.

The Studio.

Mỗi trang phải có bố cục riêng, nhưng sử dụng chung một hệ thống thiết kế nhất quán.
- **Đối tượng khách truy cập:** Khách có nhu cầu làm tóc sẽ xem
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Minimalist** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** (mặc định của preset). Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Inter Tight:wght@300;500;600`, body `Inter:wght@400;500`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Inter Tight`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Inter`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 14.715 ký tự, 736 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. VISUAL IDENTITY

Color palette

Chỉ sử dụng đen, trắng và các sắc độ xám.

Pure Black: #111111 — tiêu đề, chữ chính và nền tối.

Graphite: #333333 — nội dung phụ trên nền sáng.

Mid Gray: #858585 — nhãn và thông tin thứ cấp.

Light Gray: #E5E5E5 — đường phân cách và bề mặt phụ.

Off White: #F7F7F5 — nền chính.

Pure White: #FFFFFF — vùng tương phản.

Nền trắng hoặc off-white chiếm phần lớn diện tích website. Các section nền đen được sử dụng có chủ đích để tạo nhịp điệu thị giác.

Không sử dụng màu nhấn ngoài hệ đơn sắc, gradient màu, hiệu ứng phát sáng hoặc họa tiết trang trí không cần thiết.

Typography

Sử dụng hệ thống chữ theo tinh thần Swiss Design:

Heading: Sans-serif hiện đại, hình khối rõ, trọng lượng từ Medium đến Bold.

Body: Sans-serif dễ đọc, nét chữ sạch.

Label: Uppercase, kích thước nhỏ, letter-spacing vừa phải.

Số thứ tự: Kích thước lớn, dùng như thành phần phân cấp nội dung.

Có thể sử dụng Inter, Manrope hoặc một sans-serif tương đương hỗ trợ tiếng Việt tốt.

Heading lớn nhưng không phô trương. Hạn chế phối quá nhiều font và không sử dụng serif cổ điển làm phong cách chủ đạo.

Photography

Toàn bộ hình ảnh phải theo phong cách black-and-white editorial.

Ưu tiên:

Chân dung nam giới với classic side part, textured crop, slick back và fade.

Ảnh cận cảnh đường cắt, texture tóc và đường viền râu.

Barber đang thao tác với kéo, tông đơ và lược.

Không gian studio có gương, ghế barber và ánh sáng tự nhiên.

Ảnh có độ tương phản rõ, ánh sáng định hướng và bóng đổ tự nhiên. Giữ chi tiết tóc và đường nét khuôn mặt đủ rõ.

Không sử dụng ảnh màu xen kẽ, ảnh stock quá bóng bẩy hoặc hình ảnh mang phong cách vintage, streetwear hay luxury phô trương.

3. GLOBAL DESIGN SYSTEM

Grid & spacing

Sử dụng hệ thống grid rõ ràng, lấy cảm hứng từ Swiss International Typographic Style.

Container có chiều rộng tối đa hợp lý, căn lề nhất quán.

Desktop sử dụng grid 12 cột.

Khoảng cách giữa các section rộng và đồng đều.

Các đường kẻ ngang, dọc được dùng để phân chia nội dung.

Hình ảnh và typography phải tuân theo một hệ thống căn chỉnh chung.

Có thể tạo một số bố cục bất đối xứng nhẹ, nhưng mọi thành phần vẫn phải có trật tự.

Tránh đặt mọi section theo cùng một bố cục hai cột hoặc biến tất cả nội dung thành card.

Header

Thiết kế header nền trắng, tối giản.

Logo MONOCHROME GENTLEMEN ở góc trái.

Menu HOME / SERVICES / HAIR PORTFOLIO / THE STUDIO.

Nút chuyển đổi VI / EN.

CTA BOOK A VISIT.

Logo sử dụng wordmark chữ in hoa với khoảng cách chữ được kiểm soát. Có thể tạo monogram MG đơn giản, nhưng không thêm biểu tượng kéo, dao cạo hoặc ria mép trang trí.

Header có đường kẻ dưới mảnh. Khi cuộn trang, header chuyển sang trạng thái sticky với chiều cao gọn hơn.

Trên mobile, chuyển menu thành hamburger và giữ nút đặt lịch dễ truy cập.

Buttons

Hình chữ nhật đơn giản.

Không bo góc lớn.

Nút chính nền đen, chữ trắng.

Nút phụ nền trắng, chữ đen, viền đen mảnh.

Hover chuyển màu tương phản một cách nhẹ nhàng.

Không sử dụng bóng đổ dày, gradient hoặc animation phức tạp.

4. PAGE 01 — HOME

Section 01: Minimalist Hero

Hero phải truyền tải ngay tinh thần thương hiệu thông qua typography và một hình ảnh chân dung đen trắng có chất lượng cao.

Bố cục desktop:

Nền off-white.

Heading ở bên trái, chiếm khoảng 45% chiều rộng.

Ảnh chân dung nam giới ở bên phải, chiếm khoảng 55%.

Các thành phần được căn theo grid.

Có đường kẻ mảnh và nhãn thông tin nhỏ.

Nội dung:

Eyebrow:
MEN'S HAIR STUDIO / EST. 2020

Heading:
"LESS.
BUT BETTER."

Mô tả:
Nghệ thuật cắt tóc nam tập trung vào sự chính xác, tỷ lệ và phong cách phù hợp với từng cá nhân.

CTA:

EXPLORE SERVICES

BOOK A VISIT

Ảnh hero là chân dung nam giới với kiểu tóc classic side part hoặc textured crop, ánh sáng tương phản và nền tối giản.

Không đặt quá nhiều chữ lên ảnh. Giữ bố cục thoáng và dễ đọc.

Trên mobile, chuyển thành một cột. Heading xuất hiện trước, tiếp theo là ảnh và các CTA.

Section 02: Brand Statement

Nền đen, chữ trắng.

Tạo một section có ít nội dung nhưng tác động thị giác rõ ràng.

Heading:
"PRECISION IN EVERY DETAIL."

Bên dưới là đoạn giới thiệu ngắn về triết lý cắt tóc của MONOCHROME GENTLEMEN: loại bỏ những chi tiết thừa để tập trung vào hình dáng, cấu trúc và sự cân bằng của kiểu tóc.

Có thể đặt một con số lớn "01" hoặc đường kẻ ngang làm yếu tố phân cấp.

Không sử dụng icon trang trí hoặc hình minh họa không cần thiết.

Section 03: The Signature Cuts

Nền trắng.

Heading:
"DEFINED BY THE CUT."

Giới thiệu ba kiểu tóc chủ đạo:

01 — CLASSIC CUT
Kiểu tóc gọn gàng, cân đối và phù hợp với phong cách lịch lãm.

02 — MODERN FADE
Đường chuyển tiếp được kiểm soát chính xác, tạo cảm giác sạch và hiện đại.

03 — TEXTURED STYLE
Tập trung vào cấu trúc tóc, độ phồng và khả năng tạo kiểu tự nhiên.

Mỗi kiểu tóc có:

Một ảnh đen trắng.

Tên kiểu tóc.

Mô tả ngắn.

Liên kết xem chi tiết.

Bố cục sử dụng ba cột trên desktop với tỷ lệ ảnh thống nhất. Trên tablet và mobile, giảm số cột theo chiều rộng màn hình.

Hover chỉ cần phóng ảnh nhẹ và thay đổi màu đường kẻ.

Section 04: Our Philosophy

Bố cục chia đôi.

Một bên là ảnh barber đang thực hiện đường cắt. Bên còn lại là nội dung.

Heading:
"FORM FOLLOWS FUNCTION."

Nội dung giải thích ba nguyên tắc:

Precision — Mỗi đường cắt có mục đích rõ ràng.

Balance — Kiểu tóc phải hài hòa với khuôn mặt.

Individuality — Kỹ thuật được điều chỉnh theo từng khách hàng.

Trình bày dưới dạng danh sách có đánh số, ngăn cách bằng đường kẻ mảnh.

Không dùng ba card có icon.

Section 05: Selected Work

Nền off-white.

Heading:
"SELECTED HAIR PORTFOLIO."

Tạo gallery xem trước gồm 4–6 ảnh.

Sử dụng CSS Grid với một ảnh lớn hơn các ảnh còn lại để tạo điểm nhấn, nhưng vẫn giữ hệ thống căn chỉnh chặt chẽ.

Mỗi ảnh có chú thích nhỏ:

Classic Side Part.

Clean Fade.

Textured Crop.

Modern Slick Back.

Không dùng hiệu ứng ảnh chồng chéo hoặc bố cục masonry quá ngẫu nhiên.

CTA: VIEW ALL WORK.

Section 06: Meet the Barber

Nền xám rất nhạt.

Giới thiệu hai hoặc ba barber với dữ liệu mẫu.

Ví dụ:

MINH ANH
Classic Cuts & Scissor Techniques.

QUANG MINH
Fade & Precision Styling.

DANIEL TRAN
Texture & Modern Men's Hair.

Mỗi người có ảnh chân dung đen trắng, tên, chuyên môn và phần giới thiệu ngắn.

Bố cục gọn, hình ảnh đồng nhất về tỷ lệ và ánh sáng.

CTA: MEET THE TEAM.

Section 07: Closing CTA

Nền đen.

Heading:
"YOUR STYLE.
REFINED."

Mô tả ngắn mời khách khám phá dịch vụ và tìm kiểu tóc phù hợp.

CTA nền trắng, chữ đen:
BOOK A VISIT.

Giữ section đơn giản, không thêm hình ảnh hoặc hiệu ứng nếu chúng không đóng góp cho thông điệp.

5. PAGE 02 — SERVICES & PRICING

Hero

Nền off-white, bố cục hai cột.

Heading:
"THE SERVICE MENU."

Mô tả:
Các dịch vụ cắt tóc và chăm sóc ngoại hình nam được thực hiện với sự tập trung vào kỹ thuật, tỷ lệ và độ hoàn thiện.

Một ảnh barber đang cắt tóc được đặt ở cột còn lại.

Thêm nhãn:
SERVICES / PRICING.

Service List

Thiết kế bảng giá theo phong cách Swiss Editorial, ưu tiên danh sách có cấu trúc thay vì card.

01 — HAIRCUT
Cắt tóc theo kiểu dáng và phong cách phù hợp với khách hàng.
Thời lượng: 40–50 phút.
Giá tham khảo: 180.000 VNĐ.

02 — FADE
Tạo đường chuyển tiếp mượt và chính xác.
Thời lượng: 45–60 phút.
Giá tham khảo: 200.000 VNĐ.

03 — BEARD GROOMING
Tỉa và định hình râu theo đường nét khuôn mặt.
Thời lượng: 20–30 phút.
Giá tham khảo: 100.000 VNĐ.

04 — WASH & STYLING
Gội và tạo kiểu hoàn thiện.
Thời lượng: 20–30 phút.
Giá tham khảo: 80.000 VNĐ.

Giá và thời lượng chỉ mang tính minh họa.

Mỗi dịch vụ hiển thị:

Số thứ tự.

Tên dịch vụ.

Mô tả.

Thời lượng.

Giá.

Sử dụng đường kẻ ngang mảnh. Tên dịch vụ căn trái, thời lượng và giá căn phải trên desktop.

Trên mobile, sắp xếp thông tin theo từng dòng để tránh chữ bị chật hoặc tràn.

Our Approach

Heading:
"THE DETAILS MAKE THE DIFFERENCE."

Giới thiệu ba yếu tố:

Hair Structure.

Proportion & Balance.

Clean Finishing.

Mỗi yếu tố có một ảnh cận cảnh hoặc ảnh barber đang thao tác, kèm mô tả ngắn.

Bố cục ba cột, không dùng hiệu ứng trang trí thừa.

Booking CTA

Nền xám nhạt.

Heading:
"FIND YOUR NEXT SIGNATURE CUT."

CTA BOOK A VISIT.

Nút chỉ mang tính minh họa, không kết nối với hệ thống đặt lịch thật.

6. PAGE 03 — HAIR PORTFOLIO

Hero

Heading:
"STUDIES IN HAIR."

Mô tả:
Bộ sưu tập những kiểu tóc thể hiện kỹ thuật, cấu trúc và sự cân bằng trong từng đường cắt.

Dùng một ảnh chân dung đen trắng có tỷ lệ lớn. Bên cạnh là nhãn nhỏ HAIR PORTFOLIO / SELECTED WORKS.

Không dùng chữ quá lớn che khuất hình ảnh.

Category Filters

Tạo bộ lọc:

ALL WORK.

CLASSIC.

FADE.

TEXTURED.

BEARD.

Bộ lọc hoạt động bằng JavaScript, không tải lại trang.

Trạng thái đang chọn sử dụng nền đen và chữ trắng. Các nút còn lại có nền trắng và viền xám.

Portfolio Gallery

Tạo gallery gồm 8–12 ảnh chất lượng cao.

Các nhóm ảnh:

Classic side part.

Skin fade.

Textured crop.

Slick back.

Buzz cut.

Beard detailing.

Barber at work.

Close-up hair texture.

Sử dụng grid 3 cột trên desktop, có thể dành diện tích lớn hơn cho một số ảnh quan trọng.

Mỗi ảnh có chú thích ngắn bên dưới. Không đặt nhiều thông tin chồng lên ảnh.

Hover:

Phóng ảnh nhẹ.

Chuyển đường viền từ xám sang đen.

Hiện mũi tên nhỏ để thể hiện khả năng xem chi tiết.

Khi nhấn ảnh, mở lightbox với ảnh lớn, tên kiểu tóc và mô tả.

Lightbox phải hỗ trợ:

Nút đóng.

Phím Escape.

Nhấn ra ngoài ảnh để đóng.

Khóa cuộn nền khi mở.

Khả năng thao tác trên mobile.

Không sử dụng carousel tự động nếu không cần thiết.

7. PAGE 04 — THE STUDIO

Hero

Bố cục tối giản gồm ảnh nội thất studio và heading:

"BUILT AROUND THE CRAFT."

Ảnh đen trắng thể hiện ghế barber, gương lớn, khu vực làm việc và ánh sáng tự nhiên.

Ưu tiên sự gọn gàng và cảm giác chân thực.

Our Philosophy

Heading:
"SIMPLICITY IS A DISCIPLINE."

Giới thiệu triết lý thương hiệu: tập trung vào kỹ thuật, loại bỏ sự phức tạp không cần thiết và tạo ra những kiểu tóc phù hợp với phong cách cá nhân.

Bố cục hai cột:

Cột nội dung với các đoạn văn ngắn.

Cột hình ảnh barber đang thực hiện công việc.

Sử dụng khoảng trắng rộng và đường kẻ mảnh.

Meet the Team

Giới thiệu đội ngũ barber với ảnh chân dung đen trắng đồng nhất.

Mỗi hồ sơ gồm:

Tên.

Chuyên môn.

Kinh nghiệm hoặc giới thiệu ngắn.

Phong cách cắt tóc đặc trưng.

Chỉ sử dụng dữ liệu minh họa. Không tạo thành tích hoặc chứng chỉ không có căn cứ.

Inside the Studio

Gallery ảnh không gian:

Ghế barber.

Gương và bàn làm việc.

Dụng cụ cắt tóc.

Khu vực chờ.

Chi tiết kiến trúc.

Sắp xếp ảnh theo grid rõ ràng, thống nhất về tỷ lệ và khoảng cách.

Có thể mở lightbox khi nhấn ảnh.

Visit Us

Hiển thị:

Địa chỉ mẫu.

Số điện thoại mẫu.

Email mẫu.

Giờ hoạt động.

Liên kết mạng xã hội minh họa.

Đánh dấu dữ liệu mẫu rõ ràng để tránh nhầm lẫn với thông tin của cơ sở có thật.

Sử dụng đường kẻ phân cách, icon đơn giản nếu cần và typography dễ đọc.

CTA: BOOK A VISIT.

8. BILINGUAL VIETNAMESE–ENGLISH

Toàn bộ website phải hỗ trợ tiếng Việt và tiếng Anh.

Nút VI / EN đặt ở header và dễ truy cập trên mobile.

Khi chuyển ngôn ngữ:

Giữ nguyên trang hiện tại.

Không điều hướng về trang chủ.

Không tải lại trang.

Cập nhật toàn bộ nội dung của trang.

Duy trì ngôn ngữ khi chuyển trang.

Lưu lựa chọn bằng localStorage.

Các nội dung cần dịch:

Menu.

Heading và mô tả.

Danh sách dịch vụ.

Bộ lọc gallery.

Chú thích hình ảnh.

CTA.

Footer.

Thông báo tương tác.

Sử dụng JavaScript với hệ thống bản dịch tập trung, tránh viết hai phiên bản giao diện độc lập.

Không để nội dung bị cắt khi chuyển ngôn ngữ do độ dài câu thay đổi.

9. INTERACTIONS & MOTION

Animation phải nhẹ nhàng, phục vụ trải nghiệm thay vì gây chú ý.

Page entrance

Heading fade-in hoặc fade-up nhẹ.

Ảnh xuất hiện với hiệu ứng opacity.

Không sử dụng hiệu ứng zoom mạnh.

Scroll

Các section xuất hiện khi đi vào vùng nhìn.

Thời lượng ngắn, chuyển động nhỏ.

Không để nội dung phụ thuộc hoàn toàn vào JavaScript animation.

Hover

Ảnh phóng to nhẹ.

Đường kẻ chuyển màu.

CTA chuyển đổi đen trắng.

Liên kết có underline tinh tế.

Navigation

Menu desktop hoạt động.

Hamburger menu mở và đóng đúng cách.

Header sticky không che nội dung.

Gallery

Bộ lọc hoạt động thực sự.

Lightbox hoạt động.

Hỗ trợ bàn phím và thiết bị cảm ứng.

Tôn trọng prefers-reduced-motion và tránh hiệu ứng parallax hoặc chuyển cảnh phức tạp.

10. TECHNICAL REQUIREMENTS

Sử dụng HTML5, CSS3 và JavaScript thuần.

Không sử dụng React, Vue, Angular hoặc framework frontend.

Cấu trúc đề xuất:

/monochrome-gentlemen
├── index.html
├── pages/
│   ├── services.html
│   ├── portfolio.html
│   └── studio.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── language.js
│   │   └── portfolio.js
│   └── images/
└── README.md

Có thể điều chỉnh cấu trúc nếu cần, nhưng phải bảo đảm tất cả trang hoạt động qua local server và không có đường dẫn sai.

Yêu cầu:

Không backend.

Không cơ sở dữ liệu.

Không tích hợp API bắt buộc.

Không có chức năng bán hàng.

Không thanh toán.

Không triển khai đặt lịch thật.

CTA đặt lịch ở header, footer và mobile chỉ mang tính minh họa. Khi nhấn, hiển thị thông báo ngắn thay vì gửi dữ liệu.

11. RESPONSIVE DESIGN

Desktop

Grid rõ ràng.

Khoảng trắng rộng.

Heading có phân cấp.

Hình ảnh tỷ lệ lớn và thống nhất.

Tablet

Điều chỉnh số cột và khoảng cách.

Giữ nguyên thứ tự đọc.

Không để heading chiếm quá nhiều diện tích.

Mobile

Bố cục một cột khi phù hợp.

Menu hamburger.

Typography không tràn màn hình.

Bảng giá dễ đọc.

Gallery một hoặc hai cột tùy chiều rộng.

CTA đặt lịch nổi ở cạnh dưới màn hình, có khoảng đệm an toàn và không che nội dung.

Nút và liên kết đủ lớn để thao tác bằng ngón tay.

Không sử dụng chiều rộng cố định khiến trang bị tràn ngang.

12. FINAL QUALITY CHECK

Trước khi hoàn thành, kiểm tra:

Có đủ bốn trang và điều hướng chính xác.

Ngôn ngữ VI / EN hoạt động trên toàn bộ website.

Header, footer và hệ thống typography thống nhất.

Không xuất hiện màu ngoài bảng màu đơn sắc.

Hình ảnh được xử lý nhất quán theo phong cách đen trắng.

Grid và khoảng cách có trật tự.

Không lạm dụng card, icon hoặc họa tiết trang trí.

Gallery filter và lightbox hoạt động.

Responsive tốt trên desktop, tablet và mobile.

Không có lỗi hình ảnh, đường dẫn hoặc tràn nội dung.

CTA đặt lịch chỉ mang tính minh họa.

Không có backend, bán hàng hoặc thanh toán.

FINAL DESIGN GOAL

Tạo ra một website barber studio tối giản nhưng có chiều sâu thị giác, thể hiện sự chính xác thông qua typography, hình ảnh và cấu trúc bố cục.

MONOCHROME GENTLEMEN phải mang cảm giác của một thương hiệu thiết kế hiện đại: trật tự, tinh gọn, cân bằng và có chủ đích.

Không cố tạo sự khác biệt bằng những hiệu ứng phức tạp. Sự khác biệt phải đến từ tỷ lệ, khoảng trắng, đường nét, chất lượng hình ảnh và tính nhất quán của toàn bộ hệ thống thiết kế.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Doanh nghiệp B2B / tư vấn** (`recipe:corporate-b2b`, chưa đánh giá): Hero-split → features-numbered dịch vụ → stats-band → list-cards case study → quote-full → contact-split. Trang dịch vụ + chi tiết.

**Bố cục gợi ý**
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 29 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 35 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.
- **Danh sách đánh số lớn** (`composition:features-numbered`, chưa đánh giá, đã dùng 26 lần): Số 01 02 03 font display, tên · mô tả · mũi tên, đường kẻ mảnh, hover đổi nền.
- **Hero chia đôi chữ – ảnh** (`composition:hero-split`, chưa đánh giá, đã dùng 11 lần): Chữ 5–6/12 cột trái, ảnh tràn mép phải ở lg+; mobile chữ → ảnh.

**Tránh lặp:** các website dựng gần đây đã dùng `hero-offset`, `features-bento`, `gallery-lookbook`, `cta-type`, `hero-split`, `cta-fullbleed`, `hero-type`, `features-numbered` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Minimalist (`minimal`)
Tinh giản, khoảng trắng lớn, nội dung là trung tâm.

**Hợp với:** kiến trúc, nội thất, studio thiết kế, tư vấn, sản phẩm phần mềm
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `canvas` #FAFAF8 · `ink` #18181B · `muted` #71717A · `line` #E4E4E7 · `accent` #2F5D50
**Font** (Google Fonts): display `Inter Tight:wght@300;500;600` · body `Inter:wght@400;500`

**Thành phần giao diện**
- Nút chữ nhật bo 2px nền ink hoặc chỉ chữ + gạch chân
- Thẻ không viền, không bóng; đường kẻ 1px màu line
**Chữ**
- Tiêu đề Inter Tight 500, cỡ vừa-lớn (clamp 2.75rem → 5.5rem), tracking-tight; phân cấp bằng cỡ và màu, không bằng nhiều độ đậm.
- Thân 16–17px, leading-[1.7], màu ink/80; tối đa 2 cỡ chữ trong một section.
**Bố cục**
- Lưới 12 cột rộng, căn trái, để trống cả cột; hero-split ảnh lớn một bên.
- Section tách nhau bằng khoảng trắng, không nền màu xen kẽ; đúng một màu nhấn (accent) cho CTA và link.
**Ảnh**
- Ít ảnh nhưng lớn: nền trơn, ánh sáng tự nhiên, tỉ lệ cố định 4:5 / 3:2.
**Khoảng trắng:** Rất rộng: section `py-28 lg:py-40`, mỗi section một ý.
**Chuyển động mặc định:** Level 1 — Basic
- Chỉ `data-reveal="fade"`/`"up"`; hover gạch chân chạy; không parallax / particles / tilt.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-split` → `features-numbered` → `gallery-lookbook` → `quote-full` → `cta-type` → `footer-minimal`
**Tránh:** nhiều màu nhấn; bóng đổ; icon trang trí; khối chữ dày đặc
~~~~
