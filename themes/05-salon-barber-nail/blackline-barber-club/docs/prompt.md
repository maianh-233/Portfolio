# Prompt đã dùng — BLACKLINE BARBER CLUB

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
# Brief website — BLACKLINE BARBER CLUB

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu barber
- **Tên thương hiệu / dự án:** **BLACKLINE BARBER CLUB** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu thương hiệu BLACKLINE BARBER CLUB, một barber shop chuyên cắt tóc nam, tạo kiểu râu và chăm sóc ngoại hình dành cho nam giới hiện đại.

Website phải thể hiện được tinh thần barber truyền thống, tay nghề thủ công và sự mạnh mẽ của phong cách nam tính. Kết hợp hình ảnh editorial cao cấp với những chi tiết vintage, tạo cảm giác như một tạp chí thời trang nam kết hợp không gian barber shop cổ điển.

Định hướng: Masculine, Refined, Timeless, Bold.

Website gồm 4 trang chính:

Home

Services & Pricing

Cuts Gallery

Our Barbers

Không thiết kế website thương mại điện tử. Không thêm giỏ hàng, thanh toán hoặc chức năng mua sản phẩm.
- **Đối tượng khách truy cập:** Khách có nhu cầu sẽ xem
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Editorial / Magazine** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** (mặc định của preset). Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Noto Serif Display:ital,wght@0,400;1,400`, body `Geist:wght@300;400;500;600`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Noto Serif Display`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Geist`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 11.704 ký tự, 526 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. VISUAL IDENTITY & ART DIRECTION

Phong cách thiết kế:
Classic Barber kết hợp Vintage Editorial, lấy cảm hứng từ những barber shop truyền thống châu Âu và tạp chí thời trang nam cao cấp.

Bảng màu:

Deep Black: #111111 — màu nền chủ đạo.

Charcoal: #242321 — nền section phụ.

Warm Ivory: #F2EBDD — màu chữ sáng và nền tương phản.

Burgundy Red: #702B35 — màu nhấn cho CTA, đường kẻ và chi tiết đồ họa.

Muted Brass: #A68A5B — màu phụ dùng tiết chế cho biểu tượng và đường viền.

Màu đen và trắng ngà chiếm phần lớn diện tích giao diện. Đỏ rượu vang tạo điểm nhấn mạnh mẽ, trong khi màu đồng cũ chỉ xuất hiện ở những chi tiết nhỏ.

Typography:

Heading: Serif cổ điển, tương phản nét cao, tạo cảm giác editorial.

Body: Sans-serif gọn, dễ đọc và hiện đại.

Label, số thứ tự, thông tin phụ: Chữ in hoa, tracking rộng.

Sử dụng typography phân cấp rõ ràng; kết hợp heading lớn với mô tả nhỏ và khoảng trắng rộng.

Hình ảnh:

Nam giới với kiểu tóc skin fade, textured crop, pompadour và classic slick back.

Cận cảnh đường cắt tóc, tạo kiểu râu, kéo barber và dao cạo.

Ghế barber da tối màu, gương lớn, gỗ sẫm và ánh sáng vàng ấm.

Ưu tiên ảnh editorial có tương phản mạnh, bóng đổ tự nhiên và màu sắc trầm.

Giữ phong cách xử lý ảnh nhất quán giữa các trang.

Không sử dụng ảnh salon nữ tính, màu pastel, gradient sặc sỡ hoặc hình minh họa hoạt hình.

3. GLOBAL LAYOUT & NAVIGATION

Header:

Logo BLACKLINE BARBER CLUB đặt bên trái, có thể kết hợp biểu tượng monogram BL.

Menu Home, Services, Cuts Gallery, Our Barbers.

Bộ chuyển đổi ngôn ngữ VI / EN.

Nút BOOK A VISIT nổi bật.

Header nền đen, đường viền dưới mảnh màu trắng ngà.

Khi cuộn trang, header chuyển sang trạng thái sticky với nền đen đặc và chiều cao gọn hơn.

Trên desktop, menu bố trí theo một hàng ngang. Trên mobile, chuyển thành menu hamburger với bảng điều hướng dễ sử dụng.

Footer:
Thiết kế footer nền đen, chia thành các cột:

Logo, slogan và giới thiệu ngắn.

Điều hướng website.

Địa chỉ, giờ hoạt động và thông tin liên hệ.

Mạng xã hội và nút đặt lịch.

Bổ sung một dòng typography lớn: "STAY SHARP. STAY YOURSELF."

Footer có đường kẻ đỏ rượu vang và chi tiết trang trí mang phong cách barber cổ điển.

4. PAGE 01 — HOME

Section 01: Editorial Hero

Tạo hero section có sức hút thị giác mạnh ngay khi mở trang.

Bố cục desktop:

Chiếm phần lớn chiều cao màn hình đầu tiên.

Chia thành hai khu vực: nội dung bên trái khoảng 45%, hình ảnh bên phải khoảng 55%.

Nền đen sâu, hình ảnh tràn khung với chiều cao lớn.

Có thể sử dụng đường viền mảnh, số thứ tự hoặc nhãn editorial để tạo chiều sâu.

Nội dung:
Eyebrow: EST. 2018 — MEN'S GROOMING

Heading:
"A CUT ABOVE
THE ORDINARY."

Mô tả: Giới thiệu ngắn về nghệ thuật cắt tóc, sự chính xác trong từng đường kéo và phong cách riêng của mỗi khách hàng.

Hai CTA:

EXPLORE OUR SERVICES

BOOK A VISIT

Hình ảnh hero là chân dung nam giới với kiểu tóc classic slick back hoặc skin fade. Ưu tiên ảnh chụp nghiêng, ánh sáng tương phản mạnh và phông nền tối.

Thêm dòng chữ trang trí "PRECISION • TRADITION • CHARACTER" ở vị trí phụ.

Trên mobile, chuyển thành bố cục một cột, hình ảnh xuất hiện ngay dưới heading hoặc làm nền với lớp phủ tối để bảo đảm khả năng đọc.

Section 02: Brand Philosophy — The Craft

Nền trắng ngà hoặc đen tùy nhịp điệu thị giác của trang.

Bố cục editorial bất đối xứng:

Một ảnh lớn thể hiện barber đang thực hiện đường cắt.

Một cột nội dung giới thiệu triết lý thương hiệu.

Heading: "MORE THAN A HAIRCUT."

Mô tả về tay nghề, sự tỉ mỉ và trải nghiệm cá nhân hóa.

Phía dưới là ba giá trị thương hiệu:

01 — PRECISION
Mỗi đường cắt được thực hiện với sự chính xác và chú ý đến từng chi tiết.

02 — TRADITION
Tôn trọng kỹ thuật barber truyền thống, đồng thời cập nhật những xu hướng hiện đại.

03 — PERSONAL STYLE
Mỗi kiểu tóc được điều chỉnh để phù hợp với khuôn mặt, cá tính và phong cách sống.

Sử dụng số thứ tự lớn, đường kẻ mảnh và typography rõ ràng thay vì các card bo góc thông thường.

Section 03: Signature Services

Nền charcoal, heading lớn "THE SIGNATURE CUTS".

Giới thiệu ba dịch vụ chủ lực theo dạng các cột editorial hoặc danh sách ngang có hình ảnh:

CLASSIC CUT

Cắt tóc cổ điển, gọn gàng và vượt thời gian.

Hình ảnh: Classic side part hoặc slick back.

Giá tham khảo: 180.000 VNĐ.

SKIN FADE

Kỹ thuật fade chuyển tiếp mượt, đường cắt sắc nét.

Hình ảnh: Low fade hoặc mid skin fade.

Giá tham khảo: 200.000 VNĐ.

BEARD GROOMING

Tạo hình râu, căn chỉnh đường viền và chăm sóc râu.

Hình ảnh: Barber tạo đường viền râu bằng dao cạo.

Giá tham khảo: 120.000 VNĐ.

Mỗi dịch vụ gồm ảnh, tên, mô tả ngắn, thời lượng tham khảo và giá.

Khi hover, ảnh phóng to nhẹ và xuất hiện đường kẻ đỏ rượu vang. Có liên kết "VIEW ALL SERVICES" dẫn đến trang Services & Pricing.

Giá chỉ là dữ liệu minh họa.

Section 04: Featured Cuts

Heading: "FIND YOUR SIGNATURE."

Thiết kế gallery ảnh tóc nam theo dạng lưới bất đối xứng, lấy cảm hứng từ editorial photography.

Hiển thị tối thiểu 4–6 ảnh với các kiểu:

Classic Pompadour.

Textured Crop.

Mid Skin Fade.

Modern Side Part.

Slick Back.

Beard & Hair Combination.

Mỗi ảnh có nhãn kiểu tóc, số thứ tự hoặc chú thích nhỏ.

Ảnh sử dụng tỷ lệ khung hình đa dạng nhưng có sự cân bằng tổng thể. Tránh biến gallery thành một hàng card giống nhau.

CTA: EXPLORE THE GALLERY.

Section 05: Meet Our Barbers

Nền trắng ngà, chữ đen để tạo tương phản với các section phía trên.

Heading: "THE HANDS BEHIND THE CRAFT."

Giới thiệu ba barber với thông tin mẫu:

James Carter — Classic Cuts Specialist.

Daniel Brooks — Fade & Modern Styles.

Alex Morgan — Beard Grooming Expert.

Mỗi hồ sơ bao gồm:

Ảnh chân dung.

Tên barber.

Chuyên môn.

Một câu giới thiệu ngắn.

Thiết kế ảnh chân dung theo phong cách ảnh tạp chí, có thể dùng ảnh đen trắng hoặc tông ấm.

Không sử dụng card bo tròn lớn. Ưu tiên đường kẻ mảnh, số thứ tự và typography có cá tính.

CTA: MEET THE TEAM.

Section 06: Closing CTA

Tạo section kết thúc mạnh mẽ với ảnh barber shop hoặc chân dung nam giới chiếm toàn bộ chiều rộng.

Heading:
"YOUR NEXT GREAT CUT
STARTS HERE."

Mô tả ngắn mời khách khám phá phong cách phù hợp với mình.

CTA: BOOK YOUR VISIT.

Sử dụng lớp phủ tối trên ảnh, chữ trắng ngà và nút đỏ rượu vang.

5. PAGE 02 — SERVICES & PRICING

Hero

Bố cục chia đôi:

Một bên là hình ảnh barber đang cắt tóc.

Một bên là heading "THE ART OF GROOMING".

Mô tả ngắn về kỹ thuật và dịch vụ.

Thêm nhãn nhỏ: OUR SERVICES / EST. 2018.

Service Menu

Thiết kế bảng dịch vụ giống menu barber cao cấp, không dùng lưới card thông thường.

Chia thành bốn nhóm:

01 — HAIRCUTS

Classic Haircut.

Executive Cut.

Scissor Cut.

Kids Haircut.

02 — FADE & MODERN CUTS

Skin Fade.

Low Fade.

Mid Fade.

Textured Crop.

03 — BEARD & SHAVE

Beard Trim.

Beard Shape & Line-up.

Traditional Shave.

04 — WASH & STYLING

Hair Wash.

Styling & Finish.

Haircut + Wash + Styling.

Mỗi dòng dịch vụ hiển thị:

Tên dịch vụ.

Mô tả ngắn.

Thời lượng tham khảo.

Giá tham khảo.

Dùng đường kẻ ngang mảnh để phân chia các dịch vụ. Giá căn phải, tên dịch vụ có typography nổi bật.

Không hiển thị quá nhiều thông tin cùng cấp. Giữ khoảng cách hợp lý để bảng giá dễ đọc trên desktop và mobile.

Our Craft

Heading: "EVERY DETAIL MATTERS."

Giải thích ba kỹ thuật:

Classic Cut: Tập trung vào hình dáng, tỷ lệ và khả năng tạo kiểu.

Skin Fade: Chuyển tiếp độ dài tóc mượt và chính xác.

Beard Sculpting: Định hình râu theo cấu trúc khuôn mặt.

Mỗi kỹ thuật có một ảnh cận cảnh và mô tả vừa đủ.

Booking CTA

Heading: "READY FOR A SHARPER LOOK?"

Nút BOOK A VISIT.

Nút chỉ là minh họa, có thể hiển thị thông báo khi nhấn. Không tạo hệ thống đặt lịch thật hoặc kết nối backend.

6. PAGE 03 — CUTS GALLERY

Hero

Heading lớn: "THE ART OF THE CUT."

Dùng ảnh chân dung nam giới có tỷ lệ lớn, kết hợp typography editorial và nhãn "OUR WORK / 2026".

Mô tả ngắn nhấn mạnh sự đa dạng trong phong cách và kỹ thuật cắt.

Filterable Gallery

Tạo bộ lọc:

ALL CUTS

CLASSIC

FADE

TEXTURED

BEARD

Khi nhấn bộ lọc, JavaScript lọc ảnh tương ứng mà không tải lại trang.

Gallery sử dụng bố cục masonry hoặc CSS Grid bất đối xứng, với ảnh chân dung, góc nghiêng và ảnh cận cảnh đường cắt.

Mỗi ảnh có:

Tên kiểu tóc.

Nhóm phong cách.

Chú thích ngắn.

Khi hover, hiển thị lớp phủ tối nhẹ và tên kiểu tóc.

Khi nhấn ảnh, mở lightbox với ảnh kích thước lớn, tên kiểu tóc, mô tả và nút đóng. Hỗ trợ đóng bằng phím Escape và nhấn ra ngoài ảnh.

Trên mobile, gallery chuyển sang hai cột hoặc một cột tùy chiều rộng màn hình. Không để ảnh bị méo hoặc cắt mất kiểu tóc.

Cuối trang có CTA "FIND YOUR NEXT LOOK" dẫn đến trang dịch vụ.

7. PAGE 04 — OUR BARBERS

Hero

Heading: "BUILT ON CRAFT. DEFINED BY CHARACTER."

Sử dụng ảnh nội thất barber shop với ghế da, gương lớn, dụng cụ cắt tóc và ánh sáng ấm.

Bố cục có chiều sâu, thể hiện không gian làm nghề chuyên nghiệp và truyền thống.

Our Story

Heading: "A TRADITION OF PRECISION."

Giới thiệu câu chuyện thương hiệu BLACKLINE BARBER CLUB: bắt đầu từ niềm đam mê với nghệ thuật barber, phát triển kỹ thuật truyền thống và tạo ra không gian nơi mỗi khách hàng có thể tìm thấy phong cách riêng.

Chia bố cục thành hai phần:

Một ảnh nội thất hoặc ảnh barber đang làm việc.

Một cột nội dung với các đoạn văn ngắn, số liệu minh họa và chi tiết trang trí.

Không viết nội dung quá dài hoặc mang tính quảng cáo sáo rỗng.

Meet the Team

Giới thiệu chi tiết ba barber:

JAMES CARTER
Classic Cuts Specialist.

DANIEL BROOKS
Fade & Modern Styles.

ALEX MORGAN
Beard Grooming Expert.

Mỗi hồ sơ có ảnh chân dung lớn, tên, chuyên môn và phần giới thiệu khoảng 2–3 câu.

Bố cục có thể xen kẽ ảnh trái – phải giữa các nhân vật để tạo nhịp điệu thị giác. Trên mobile, tất cả chuyển thành một cột.

Inside the Club

Gallery không gian gồm:

Ghế barber cổ điển.

Bộ dụng cụ cắt tóc.

Quầy gương và bàn làm việc.

Không gian chờ.

Chi tiết nội thất gỗ và ánh sáng.

Ảnh có thể mở lightbox khi nhấn.

Visit Us

Hiển thị:

Địa chỉ mẫu.

Số điện thoại mẫu.

Giờ hoạt động.

Email liên hệ.

Liên kết mạng xã hội.

Địa chỉ và thông tin liên hệ phải được đánh dấu là dữ liệu mẫu, không trình bày như thông tin của một cơ sở có thật.

Thêm nút GET DIRECTIONS dưới dạng liên kết minh họa nếu chưa có địa chỉ thực tế.

8. BILINGUAL VIETNAMESE–ENGLISH

Website phải có đầy đủ nội dung tiếng Việt và tiếng Anh trên cả bốn trang.

Sử dụng nút chuyển đổi VI / EN trên header.

Khi đổi ngôn ngữ:

Chỉ thay đổi nội dung ngôn ngữ, không điều hướng về trang chủ.

Giữ nguyên trang hiện tại và vị trí section nếu có thể.

Không tải lại trang.

Dịch đầy đủ menu, heading, mô tả, dịch vụ, giá, bộ lọc gallery, CTA, footer và thông báo tương tác.

Lưu ngôn ngữ đã chọn bằng localStorage.

Khi tải lại trang hoặc chuyển trang, giữ ngôn ngữ đang sử dụng.

Không trộn lẫn tiếng Việt và tiếng Anh trong cùng một trạng thái giao diện, ngoại trừ tên thương hiệu và tên dịch vụ được giữ nguyên có chủ đích.

9. MOTION & INTERACTIONS

Sử dụng hiệu ứng chuyển động tiết chế, phù hợp với thương hiệu barber cao cấp.

Page entrance:

Heading xuất hiện bằng hiệu ứng fade-up nhẹ.

Ảnh hero có hiệu ứng reveal hoặc zoom rất nhẹ.

Scroll animation:

Các section xuất hiện dần khi cuộn đến.

Ưu tiên opacity và translateY nhỏ.

Không để nội dung biến mất nếu JavaScript animation không hoạt động.

Hover:

Ảnh zoom nhẹ.

Đường kẻ hoặc màu đỏ rượu vang xuất hiện ở CTA.

Liên kết có hiệu ứng underline.

Không sử dụng hiệu ứng nhảy, xoay hoặc phóng đại quá mức.

Gallery:

Bộ lọc hoạt động thật bằng JavaScript.

Lightbox mở và đóng được.

Hỗ trợ phím Escape.

Navigation:

Menu điều hướng đúng trang.

Header sticky.

Mobile hamburger mở và đóng bình thường.

Nút đặt lịch hiển thị thông báo minh họa rõ ràng.

Tôn trọng thiết lập prefers-reduced-motion của người dùng.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Văn hóa / làng nghề / truyền thống** (`recipe:heritage-craft`, chưa đánh giá): Hero-type / hero-offset → story-letter (nghệ nhân) → process-steps → gallery-filmstrip → quote-full → contact-split.
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).

**Bố cục gợi ý**
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 32 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 26 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 26 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 5 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.

**Tránh lặp:** các website dựng gần đây đã dùng `hero-type`, `features-numbered`, `gallery-lookbook`, `cta-type`, `hero-split`, `hero-cinematic`, `features-tabs`, `cta-fullbleed` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Editorial / Magazine (`editorial`)
Như tạp chí in: chữ lớn, lưới bất đối xứng, rất ít màu.

**Hợp với:** thời trang, tạp chí / xuất bản, kiến trúc, thương hiệu cá nhân
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `paper` #F5F3EF · `ink` #111111 · `stone` #D9D4CB · `muted` #6B6760 · `bronze` #8C6A43
**Font** (Google Fonts): display `Noto Serif Display:ital,wght@0,400;1,400` · body `Geist:wght@300;400;500;600`
_(Đã thay font thiếu dấu tiếng Việt của preset gốc bằng font cùng tinh thần có đủ dấu.)_

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
