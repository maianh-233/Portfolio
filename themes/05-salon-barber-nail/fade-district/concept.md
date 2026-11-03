# Brief website — FADE DISTRICT

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu
- **Tên thương hiệu / dự án:** **FADE DISTRICT** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu FADE DISTRICT, một barber studio dành cho thế hệ trẻ yêu thích streetwear, văn hóa đường phố và các kiểu tóc cá tính như Skin Fade, Textured Crop, Buzz Cut và Modern Mullet.

Website kết hợp tinh thần của một barber studio hiện đại với hình ảnh của streetwear brand và tạp chí văn hóa đô thị.

Creative direction: Streetwear Editorial × Neo-Brutalism × Urban Photography.

Giao diện phải mạnh mẽ, trực diện, có nhịp điệu thị giác nhanh và khác biệt rõ ràng với website barber cổ điển hoặc luxury salon.

Tránh bố cục website doanh nghiệp truyền thống, card bo tròn đại trà và các section lặp lại theo cùng một khuôn mẫu.
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

> Nguyên văn, 12.436 ký tự, 612 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. VISUAL IDENTITY

Color palette

Neon Orange: #FF5A1F — màu nhận diện chủ đạo.

Carbon Black: #171717 — nền tối.

Concrete Gray: #B8B8B3 — màu trung tính.

Off White: #F4F2EC — nền sáng và màu chữ.

Acid Yellow: #D9FF3F — màu nhấn phụ, chỉ sử dụng ở một vài chi tiết.

Cam neon phải là điểm nhận diện nổi bật nhất. Kết hợp những mảng đen lớn với nền xám bê tông và các khối cam có hình dạng dứt khoát.

Không dùng gradient cầu vồng, pastel, ánh kim sang trọng hoặc bảng màu vintage.

Typography

Heading: Sans-serif condensed, bold hoặc extra-bold.

Body: Sans-serif hiện đại, dễ đọc.

Label: Uppercase, letter-spacing rộng.

Số thứ tự và thông tin phụ có thể sử dụng typography dạng technical/editorial.

Sử dụng heading lớn, đôi khi chiếm gần toàn bộ chiều rộng màn hình. Cho phép chữ chạm sát lề hoặc xếp thành nhiều dòng để tạo sức nặng thị giác, nhưng không được cắt mất nội dung quan trọng.

Có thể kết hợp chữ nghiêng, chữ outline và các con số lớn như yếu tố đồ họa.

Image direction

Street photography với ánh sáng flash trực diện.

Chân dung nam giới trẻ với skin fade, textured crop, buzz cut và modern mullet.

Ảnh barber đang thao tác bằng tông màu thô, chân thực.

Bối cảnh phố, tường bê tông, kim loại, gương và ghế barber hiện đại.

Ảnh cận cảnh đường fade, texture tóc và dụng cụ cắt.

Ưu tiên ảnh có cá tính, bố cục tự nhiên và cảm giác như một chiến dịch streetwear.

Không sử dụng ảnh barber shop cổ điển, nội thất gỗ vintage hoặc ảnh stock mang phong cách doanh nghiệp.

3. GLOBAL LAYOUT & COMPONENTS

Header

Thiết kế header gọn, có cá tính.

Logo FADE DISTRICT ở góc trái, chữ in hoa đậm.

Menu: HOME / SERVICES / STYLE GALLERY / THE DISTRICT.

Bộ chuyển đổi VI / EN.

Nút BOOK A VISIT nền cam neon, chữ đen.

Header có đường viền dưới dày, tương phản rõ.

Header có thể sticky khi cuộn trang. Trạng thái sticky giữ nền đặc và không che nội dung.

Trên mobile, sử dụng hamburger menu. Nút đặt lịch phải dễ tìm và dễ thao tác.

Buttons

Nút vuông hoặc chữ nhật với góc bo rất nhẹ hoặc không bo góc.

Nền cam neon, chữ đen.

Hover chuyển nền đen, chữ cam và đường viền cam.

Có mũi tên hoặc ký hiệu cộng ở cạnh phải.

Chuyển trạng thái nhanh, rõ ràng.

Tránh nút dạng pill hoặc hiệu ứng phát sáng quá mức.

Graphic elements

Sử dụng có kiểm soát:

Số thứ tự lớn.

Đường viền đen dày.

Nhãn dạng tem.

Khung ảnh bất đối xứng.

Chữ chạy ngang.

Dấu cộng, mũi tên và ký hiệu hình học.

Các dải màu cam làm điểm phân cách section.

Các yếu tố này phải phục vụ bố cục, không được khiến website trở nên lộn xộn hoặc khó đọc.

4. PAGE 01 — HOME

Section 01: High-impact Hero

Hero phải tạo ấn tượng ngay khi trang vừa mở.

Bố cục:

Nền đen hoặc xám bê tông.

Heading cực lớn chiếm phần lớn khu vực bên trái.

Ảnh street photography lớn ở bên phải, có thể chồng nhẹ lên một khối cam neon.

Các nhãn nhỏ, số thứ tự và đường viền dày tạo cảm giác poster đường phố.

Bố cục bất đối xứng, không căn giữa mọi thành phần.

Nội dung:

Eyebrow:
YOUR HAIR. YOUR RULES.

Heading:
"FRESH
FADE.
NO RULES."

Mô tả:
Một barber studio dành cho những người thích thử nghiệm phong cách, thể hiện cá tính và không ngại khác biệt.

CTA:

FIND YOUR STYLE

BOOK A VISIT

Bổ sung nhãn đồ họa:
DISTRICT 001 / STREET CULTURE / EST. 2022.

Ảnh hero là chân dung nam giới với kiểu tóc fade nổi bật, ánh sáng flash và phông nền đô thị.

Có thể đặt chữ "FADE DISTRICT" cỡ lớn phía sau ảnh với độ tương phản thấp để tăng chiều sâu.

Trên mobile, chuyển sang bố cục dọc, giữ heading dễ đọc và ưu tiên hiển thị kiểu tóc.

Section 02: Moving Street Banner

Tạo một dải cam neon chạy ngang toàn màn hình.

Nội dung lặp:
"STAY FRESH — STAY DIFFERENT — OWN YOUR STYLE —"

Sử dụng marquee animation chạy ngang chậm, liên tục.

Chiều cao dải vừa đủ để tạo nhịp chuyển tiếp giữa hero và phần nội dung. Không làm ảnh hưởng khả năng đọc hoặc gây khó chịu.

Nếu người dùng bật giảm chuyển động, dừng marquee.

Section 03: The District Attitude

Nền xám bê tông, chữ đen.

Heading:
"NOT JUST A CUT.
IT'S YOUR IDENTITY."

Thiết kế theo dạng editorial bất đối xứng:

Một ảnh barber đang cắt tóc chiếm khoảng 55–60% chiều rộng.

Phần còn lại chứa nội dung và ba tuyên ngôn thương hiệu.

01 — NO BASIC CUTS
Không rập khuôn. Mỗi kiểu tóc được điều chỉnh theo cá tính của khách hàng.

02 — BUILT ON PRECISION
Đường fade gọn, texture rõ và sự tỉ mỉ trong từng chi tiết.

03 — STREET APPROVED
Lấy cảm hứng từ streetwear, âm nhạc và văn hóa đô thị đương đại.

Sử dụng số thứ tự lớn, đường kẻ dày và typography đậm. Không trình bày ba giá trị dưới dạng ba card bo tròn giống nhau.

Section 04: Signature Styles

Nền đen.

Heading:
"CHOOSE YOUR ATTITUDE."

Giới thiệu bốn kiểu tóc chủ lực:

SKIN FADE
Đường chuyển tiếp sát da, sắc nét và hiện đại.

TEXTURED CROP
Texture tự nhiên, tạo độ chuyển động và vẻ ngoài phóng khoáng.

BUZZ CUT
Gọn, mạnh mẽ, tối giản và dễ chăm sóc.

MODERN MULLET
Cá tính, nổi bật và mang hơi hướng street culture.

Mỗi kiểu tóc có ảnh riêng, tên kiểu tóc cỡ lớn và mô tả ngắn.

Sắp xếp ảnh theo bố cục bất đối xứng. Một kiểu tóc có thể được ưu tiên bằng ảnh lớn, các kiểu còn lại dùng khung ảnh nhỏ hơn.

Hover:

Ảnh zoom nhẹ.

Xuất hiện nhãn cam neon.

Tên kiểu tóc dịch chuyển nhẹ hoặc đổi màu.

CTA: EXPLORE ALL SERVICES.

Section 05: Style Gallery Preview

Nền off-white.

Heading:
"SEEN ON THE STREETS."

Hiển thị 6–8 ảnh kiểu tóc và chân dung khách hàng.

Thiết kế theo phong cách streetwear lookbook:

Khung ảnh đa dạng.

Khoảng cách không hoàn toàn đồng đều nhưng vẫn có hệ thống.

Chú thích ngắn bên dưới hoặc chồng lên ảnh.

Một số ảnh có nhãn như FADE / TEXTURE / DISTRICT LOOK.

Ảnh phải thể hiện rõ kiểu tóc. Không đặt typography lớn lên vùng quan trọng của chân dung.

CTA: VIEW THE GALLERY.

Section 06: Meet the Barbers

Nền đen, tiêu đề cam neon.

Heading:
"THE CREW BEHIND THE CUT."

Giới thiệu ba thành viên với dữ liệu mẫu:

Minh Khoa — Fade Specialist.

Jay Nguyen — Texture & Modern Cuts.

Alex Tran — Creative Barber.

Mỗi hồ sơ gồm ảnh chân dung, tên, chuyên môn và giới thiệu ngắn.

Thiết kế ảnh dạng poster với đường viền đậm, nhãn số thứ tự và typography lớn.

Không cần tạo hồ sơ dài hoặc các card nhân sự theo phong cách corporate.

CTA: MEET THE CREW.

Section 07: Closing Statement

Nền cam neon chiếm toàn bộ chiều rộng.

Heading:
"YOUR STYLE.
YOUR DISTRICT."

Mô tả ngắn mời khách khám phá kiểu tóc phù hợp với cá tính.

CTA: BOOK A VISIT.

Sử dụng typography đen cỡ lớn, bố cục mạnh và một chi tiết đồ họa dạng mũi tên.

5. PAGE 02 — SERVICES & PRICING

Hero

Nền xám bê tông, chữ đen.

Heading:
"THE CUT MENU."

Bố cục gồm heading lớn, mô tả ngắn và ảnh barber action đặt lệch về một bên.

Có nhãn:
SERVICES / PRICING / DISTRICT 002.

Service Menu

Thiết kế danh sách dịch vụ theo phong cách poster editorial, dùng đường viền dày và số thứ tự lớn.

01 — SKIN FADE

Mô tả: Fade sát da với đường chuyển tiếp sắc nét.

Thời lượng: 45–60 phút.

Giá tham khảo: 180.000 VNĐ.

02 — LOW FADE

Mô tả: Đường fade thấp, tự nhiên và dễ kết hợp với nhiều kiểu tóc.

Thời lượng: 40–50 phút.

Giá tham khảo: 160.000 VNĐ.

03 — MID FADE

Mô tả: Độ chuyển tiếp cân bằng, tạo vẻ ngoài hiện đại.

Thời lượng: 40–50 phút.

Giá tham khảo: 170.000 VNĐ.

04 — TEXTURED CROP

Mô tả: Tạo texture rõ nét, phù hợp phong cách trẻ trung.

Thời lượng: 40–50 phút.

Giá tham khảo: 170.000 VNĐ.

05 — BUZZ CUT

Mô tả: Kiểu tóc ngắn gọn, mạnh mẽ và tối giản.

Thời lượng: 20–30 phút.

Giá tham khảo: 100.000 VNĐ.

06 — BEARD STYLING

Mô tả: Tỉa và định hình râu theo đường nét khuôn mặt.

Thời lượng: 20–30 phút.

Giá tham khảo: 80.000 VNĐ.

Giá và thời lượng chỉ mang tính minh họa.

Mỗi dòng hiển thị tên, mô tả, thời lượng và giá. Trên desktop có thể bố trí hai cột; trên mobile chuyển thành danh sách một cột.

Hover một dịch vụ sẽ làm nổi bật đường viền hoặc nhãn màu cam. Không dùng hiệu ứng quá mạnh gây khó đọc.

Find Your Cut

Tạo một section nền đen giới thiệu các hướng lựa chọn kiểu tóc.

Clean & Minimal.

Bold & Textured.

Sharp & Defined.

Mỗi phong cách có ảnh minh họa, mô tả ngắn và liên kết đến gallery.

Không tạo công cụ tư vấn phức tạp hoặc chức năng phân tích khuôn mặt.

Booking CTA

Nền cam neon.

Heading:
"YOUR NEXT CUT STARTS HERE."

Nút BOOK A VISIT.

Khi nhấn, hiển thị thông báo nhỏ cho biết chức năng đặt lịch chỉ là minh họa. Không thu thập dữ liệu hoặc gửi biểu mẫu lên máy chủ.

6. PAGE 03 — STYLE GALLERY

Hero

Heading:
"REAL CUTS.
REAL PEOPLE."

Dùng một ảnh chân dung lớn kết hợp typography mạnh và nhãn STREET LOOKBOOK.

Bố cục giống trang mở đầu của một tạp chí streetwear.

Category Filters

Tạo các bộ lọc:

ALL STYLES.

SKIN FADE.

TEXTURED.

BUZZ CUT.

MODERN MULLET.

BEARD.

Bộ lọc phải hoạt động thực sự bằng JavaScript, không chỉ thay đổi màu nút.

Main Gallery

Tạo gallery gồm 8–12 ảnh, sử dụng CSS Grid bất đối xứng.

Kết hợp:

Chân dung chính diện.

Góc nghiêng để thể hiện đường fade.

Ảnh cận cảnh texture tóc.

Ảnh barber đang thao tác.

Ảnh phong cách khách hàng trong bối cảnh đô thị.

Mỗi ảnh có tên kiểu tóc và nhãn danh mục.

Hover:

Ảnh phóng to nhẹ.

Lớp phủ đen xuất hiện.

Tên kiểu tóc và ký hiệu mũi tên được hiển thị.

Khi nhấn ảnh, mở lightbox có ảnh lớn, tên kiểu tóc và nút đóng.

Hỗ trợ đóng bằng phím Escape và nhấn bên ngoài ảnh.

Không tạo giao diện mạng xã hội hoặc chức năng đăng tải ảnh của người dùng.

District Looks

Một section nhỏ giới thiệu ba bộ sưu tập:

THE CLEAN FADE.

TEXTURE CULTURE.

NO RULES LOOK.

Mỗi bộ sưu tập gồm ảnh đại diện, mô tả ngắn và liên kết lọc gallery theo danh mục tương ứng.

7. PAGE 04 — ABOUT THE DISTRICT

Hero

Nền đen, heading cam neon:

"BUILT FOR
THE BOLD."

Sử dụng ảnh barber studio hoặc chân dung đội ngũ theo phong cách street photography.

Our Story

Heading:
"MORE THAN A BARBER SHOP."

Giới thiệu FADE DISTRICT là không gian dành cho những người xem kiểu tóc như một phần của bản sắc cá nhân.

Nội dung tập trung vào:

Văn hóa streetwear và phong cách đô thị.

Kỹ thuật fade và tạo texture.

Tinh thần sáng tạo, cởi mở và không rập khuôn.

Trải nghiệm barber gần gũi, chuyên nghiệp.

Bố cục chia đôi giữa nội dung và ảnh, có thể sử dụng typography cỡ lớn làm điểm nhấn.

Không viết câu chuyện thương hiệu quá dài hoặc dùng những tuyên bố thành tích chưa được xác thực.

Meet the Crew

Giới thiệu ba barber:

MINH KHOA
Fade Specialist.

JAY NGUYEN
Texture & Modern Cuts.

ALEX TRAN
Creative Barber.

Mỗi người có ảnh chân dung, chuyên môn và giới thiệu ngắn.

Dùng layout dạng poster hoặc editorial portrait thay vì card doanh nghiệp.

Inside the Studio

Hiển thị ảnh:

Ghế barber và gương.

Khu vực cắt tóc.

Dụng cụ và bàn làm việc.

Không gian chờ.

Chi tiết tường bê tông, kim loại và biển hiệu.

Dùng bố cục ảnh bất đối xứng, có thể mở lightbox.

Visit the District

Hiển thị:

Địa chỉ mẫu.

Số điện thoại mẫu.

Email liên hệ mẫu.

Giờ hoạt động.

Liên kết mạng xã hội dạng minh họa.

Đánh dấu dữ liệu mẫu rõ ràng. Không tạo địa chỉ hoặc thông tin liên hệ giả như thể đó là cơ sở có thật.

CTA: FIND US / BOOK A VISIT.

8. BILINGUAL VI / EN

Tất cả bốn trang phải có nội dung tiếng Việt và tiếng Anh.

Nút chuyển đổi ngôn ngữ đặt ở header, hiển thị rõ trạng thái hiện tại.

Khi chuyển ngôn ngữ:

Không điều hướng người dùng về trang chủ.

Giữ nguyên trang hiện tại.

Không tải lại trang.

Dịch toàn bộ heading, mô tả, menu, dịch vụ, giá, bộ lọc, CTA, footer và thông báo.

Lưu ngôn ngữ đã chọn bằng localStorage.

Duy trì ngôn ngữ khi chuyển sang trang khác hoặc tải lại trang.

Không để giao diện ở trạng thái nửa tiếng Việt, nửa tiếng Anh.

Giữ nguyên tên thương hiệu FADE DISTRICT và các tên kiểu tóc phổ biến khi phù hợp.

9. ANIMATION & INTERACTIONS

Animation phải tạo cảm giác nhanh, dứt khoát và hiện đại.

Hero

Heading xuất hiện bằng hiệu ứng reveal hoặc slide ngắn.

Ảnh xuất hiện với hiệu ứng fade hoặc scale nhẹ.

Scroll

Section xuất hiện khi cuộn đến.

Dùng opacity và translateY nhỏ.

Tránh animation dài hoặc nhiều lớp chuyển động đồng thời.

Marquee

Dải chữ cam chạy ngang liên tục với tốc độ vừa phải.

Tạm dừng khi hover nếu phù hợp.

Hỗ trợ reduced motion.

Hover

Ảnh zoom nhẹ.

Viền chuyển màu cam.

CTA đổi màu tương phản.

Các nhãn đồ họa dịch chuyển nhẹ.

Navigation

Menu desktop hoạt động.

Hamburger menu mở và đóng bình thường.

Header sticky không che nội dung.

Gallery

Bộ lọc hoạt động.

Lightbox mở và đóng được.

Hỗ trợ phím Escape.

Tất cả tương tác phải hoạt động thực sự, không chỉ là hiệu ứng trang trí. Tránh con trỏ tùy chỉnh hoặc hiệu ứng gây cản trở thao tác thông thường.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Nhà hàng / quán cà phê** (`recipe:restaurant-cafe`, chưa đánh giá): Hero-cinematic hoặc hero-offset → story-letter → menu dạng features-numbered / tabs → gallery-filmstrip → contact-split (giờ mở cửa, bản đồ, đặt bàn = bản demo).

**Bố cục gợi ý**
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 33 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 27 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Thư viện masonry** (`composition:gallery-masonry`, chưa đánh giá, đã dùng 10 lần): `columns-1 sm:columns-2 lg:columns-3`, ảnh `data-lightbox`.
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 5 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.

**Chuyển động gợi ý**
- **Lưới hiện lần lượt** (`motion:stagger-grid`, chưa đánh giá): `data-reveal-stagger="80"` trên khối cha của lưới thẻ. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Băng chuyền chữ / logo** (`motion:marquee`, chưa đánh giá): `data-marquee="40"`. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).

**Tránh lặp:** các website dựng gần đây đã dùng `hero-split`, `gallery-lookbook`, `cta-fullbleed`, `hero-type`, `features-numbered`, `cta-type` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


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
