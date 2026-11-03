# Brief website — KIRI HOUSE

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Tên thương hiệu / dự án:** **KIRI HOUSE** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu KIRI HOUSE, một resort nghỉ dưỡng cao cấp lấy cảm hứng từ kiến trúc Nhật Bản đương đại, vườn thiền và triết lý sống tối giản.

Website cần truyền tải cảm giác tĩnh tại, sâu lắng, riêng tư và giàu tính văn hóa. Vẻ đẹp đến từ sự cân bằng giữa kiến trúc, thiên nhiên, ánh sáng và vật liệu, thay vì những chi tiết trang trí cầu kỳ.

Định hướng: Japanese Zen Minimalism kết hợp Contemporary Ryokan — tối giản Nhật Bản, sang trọng tinh tế và gần gũi với thiên nhiên.

Không sử dụng hình ảnh anime, manga, đèn lồng trang trí đại trà, hoa anh đào xuất hiện dày đặc hoặc phong cách Nhật Bản thương mại hóa
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

- **KHÔNG khả dụng**: openverse trả về 403.
- Gọi `search_images` **tối đa 1 lần** để xác nhận; vẫn lỗi thì không gọi nữa — chuyển sang **link ảnh**: tìm bằng WebSearch (Pinterest, trang ảnh, trang của thương hiệu…) rồi kiểm qua `link_image`, ghi `"status": "link"` trong sitemap.json. Không có link phù hợp mới dựng bố cục không ảnh (`"status": "none"`). **Không vẽ SVG / CSS thay ảnh chụp.**

## 8. Chú thích bổ sung của BA

> Nguyên văn, 11.230 ký tự, 411 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. VISUAL IDENTITY

Bảng màu:

Ink Black #282A28: màu chữ, nền tối và các khu vực tạo chiều sâu.

Rice Paper #F3EFE5: màu nền chủ đạo, gợi giấy washi và không gian truyền thống.

Cedar #8C6A4F: màu nhấn từ gỗ tự nhiên.

Sage #A3AA91: màu phụ lấy cảm hứng từ rêu, vườn và cây xanh.

Vermilion #A94A3D: màu nhấn nhỏ, sử dụng có kiểm soát.

Rice Paper chiếm phần lớn diện tích website. Ink Black tạo độ tương phản; Cedar và Sage xuất hiện trong các chi tiết và section liên quan đến kiến trúc, thiên nhiên. Vermilion chỉ dùng ở một số điểm nhấn nhỏ.

Typography:

Tiêu đề sử dụng serif thanh lịch, nét mảnh và có cảm giác tĩnh tại.

Nội dung sử dụng sans-serif hiện đại, dễ đọc.

Có thể sử dụng Cormorant Garamond cho tiêu đề và Be Vietnam Pro cho nội dung, bảo đảm hiển thị tiếng Việt chính xác.

Kết hợp tiêu đề lớn, nhãn section nhỏ và chú thích ảnh tối giản.

Bố cục:

Ưu tiên khoảng trắng rộng, đường kẻ mảnh và bố cục bất đối xứng.

Kết hợp ảnh ngang lớn, ảnh dọc và các vùng nội dung ngắn.

Sử dụng đường nét hình học đơn giản, gợi khung cửa trượt và tỷ lệ kiến trúc Nhật.

Tránh quá nhiều card, bo góc lớn, gradient sặc sỡ hoặc bố cục giống dashboard.

Hình ảnh:
Ưu tiên ảnh chụp thực tế về kiến trúc gỗ, cửa trượt shoji, vườn thiền, đá tự nhiên, rêu, hồ nước, hành lang gỗ và ánh sáng xuyên qua rèm hoặc khung cửa.

Hình ảnh cần có tông màu tự nhiên, ánh sáng dịu và bố cục có chiều sâu. Không lặp lại cùng một ảnh ở nhiều section nếu có thể.

3. TRANG CHỦ — HOME

Header

Nền Rice Paper, logo KIRI HOUSE đặt bên trái.

Menu ngang gồm: Trang chủ, Giới thiệu, Lưu trú, Trải nghiệm.

Công tắc ngôn ngữ VI / EN ở bên phải.

Header gọn nhẹ, có thể chuyển sang trạng thái cố định khi cuộn.

Menu sử dụng hiệu ứng hover tinh tế, không có biểu tượng trang trí dư thừa.

Hero
Sử dụng ảnh kiến trúc gỗ nhìn ra vườn Nhật, mặt nước hoặc khoảng sân thiền trong ánh sáng buổi sáng.

Tiêu đề: “The Art of Quiet Living”.

Mô tả ngắn về triết lý nghỉ dưỡng và sự cân bằng giữa con người với thiên nhiên.

Nút “Discover KIRI HOUSE” dẫn đến phần giới thiệu.

Có thể đặt chữ lệch về một bên để giữ lại không gian hình ảnh.

Sử dụng overlay rất nhẹ nếu cần tăng độ tương phản.

Hero cần tạo cảm giác tĩnh lặng ngay từ lần đầu truy cập, không sử dụng quá nhiều chữ hoặc hiệu ứng.

Triết lý nghỉ dưỡng

Nền Rice Paper, khoảng trắng rộng.

Một câu giới thiệu thương hiệu bằng typography lớn.

Đoạn mô tả về sự tối giản, tính riêng tư và khả năng tận hưởng những khoảnh khắc chậm rãi.

Có thể bổ sung một ảnh chi tiết về vật liệu gỗ hoặc khu vườn.

Kiến trúc và thiên nhiên

Sử dụng ảnh kiến trúc lớn kết hợp ảnh chi tiết.

Giới thiệu mối liên hệ giữa ánh sáng, gỗ, đá, nước và cảnh quan.

Chú thích ảnh ngắn, đặt gọn bên dưới hoặc cạnh hình ảnh.

Bố cục lệch trục để tạo cảm giác như một tạp chí kiến trúc cao cấp.

Không gian lưu trú
Giới thiệu ba loại hình:

Japanese Suite.

Garden Villa.

Signature Residence.

Mỗi loại có ảnh riêng, tên gọi, mô tả ngắn và liên kết đến trang Lưu trú. Sử dụng bố cục xen kẽ thay vì ba card giống hệt nhau.

Tiện ích nghỉ dưỡng
Giới thiệu:

Zen Garden.

Tea House.

Wellness Spa.

Seasonal Dining.

Quiet Water Garden.

Mỗi tiện ích có ảnh và nội dung ngắn, tập trung vào không gian, vật liệu và trải nghiệm. Không sử dụng biểu tượng nhiều màu hoặc cách trình bày như danh sách dịch vụ thương mại.

Triết lý KIRI HOUSE
Một section có nền Sage rất nhẹ hoặc Rice Paper, trình bày ba giá trị:

Stillness — Sự tĩnh tại.

Harmony — Sự hài hòa.

Simplicity — Vẻ đẹp của tối giản.

Footer
Nền Ink Black, chữ Rice Paper.

Bao gồm logo, một câu thông điệp thương hiệu, liên kết bốn trang, thông tin liên hệ mẫu và bản quyền. Giữ bố cục thoáng, đường phân cách mảnh và hạn chế chi tiết trang trí.

4. TRANG GIỚI THIỆU — ABOUT

Hero
Ảnh hành lang gỗ nhìn ra vườn, với ánh sáng tự nhiên tạo bóng đổ trên sàn.

Tiêu đề: “A Philosophy of Space and Stillness”.

Câu chuyện thương hiệu

Bố cục hai cột bất đối xứng.

Một bên là nội dung giới thiệu, một bên là ảnh kiến trúc hoặc khu vườn.

Trình bày cảm hứng từ kiến trúc Nhật Bản, sự tối giản và mối liên hệ giữa con người với thiên nhiên.

Không tự tạo lịch sử thương hiệu, giải thưởng hoặc thành tựu chưa được cung cấp.

Kiến trúc và vật liệu
Giới thiệu những yếu tố tạo nên bản sắc KIRI HOUSE:

Gỗ tự nhiên và bề mặt mộc.

Cửa trượt và khung cửa có tỷ lệ cân đối.

Đá, rêu và mặt nước.

Ánh sáng tự nhiên.

Không gian chuyển tiếp giữa trong nhà và ngoài trời.

Sử dụng ảnh lớn kết hợp chú thích ngắn, tạo cảm giác của một bài viết chuyên sâu về kiến trúc.

Triết lý hiếu khách
Trình bày ba giá trị:

Thoughtful Hospitality.

Respect for Nature.

The Beauty of Simplicity.

Mỗi giá trị có đoạn giải thích ngắn, tránh sử dụng các khẩu hiệu chung chung hoặc nội dung quảng cáo quá mức.

Gallery kiến trúc
Kết hợp ảnh hành lang, phòng nghỉ, vườn thiền và chi tiết vật liệu. Sắp xếp ảnh theo nhịp điệu tự nhiên, không sử dụng lưới ảnh đồng nhất.

Section kết thúc
Tiêu đề: “Find Your Quiet Place”.

Nút “Explore Our Stays” dẫn đến trang Lưu trú.

5. TRANG PHÒNG, VILLA & TIỆN ÍCH — STAYS

Hero
Ảnh phòng nghỉ có cửa trượt nhìn ra vườn riêng.

Tiêu đề: “Spaces for a Slower Rhythm”.

Japanese Suite

Ảnh phòng nghỉ với gỗ tự nhiên, nội thất tối giản và ánh sáng dịu.

Mô tả về cách bố trí không gian và cảm giác thư thái.

Giới thiệu các tiện nghi nổi bật bằng danh sách ngắn.

Bố cục ảnh lớn kết hợp phần nội dung gọn gàng.

Garden Villa

Ảnh villa nhìn ra vườn, có thể kết hợp khung cửa trượt và sân riêng.

Mô tả về sự riêng tư, kết nối với thiên nhiên và không gian mở.

Sử dụng bố cục đảo chiều so với Japanese Suite.

Signature Residence

Ảnh kiến trúc hoặc không gian lưu trú rộng.

Mô tả về trải nghiệm nghỉ dưỡng riêng tư, vật liệu và thiết kế.

Bố cục ảnh ngang lớn kết hợp một ảnh chi tiết dọc.

Nếu phù hợp với thiết kế thực tế, có thể giới thiệu Private Onsen Villa như một lựa chọn bổ sung. Không mặc định mọi khu lưu trú đều có onsen riêng.

Tiện ích
Giới thiệu các khu vực:

Tea House — trà thất.

Zen Garden — vườn thiền.

Wellness Spa — không gian chăm sóc và thư giãn.

Seasonal Restaurant — nhà hàng theo mùa.

Quiet Water Garden — khu vườn và mặt nước tĩnh lặng.

Mỗi tiện ích cần có ảnh riêng, mô tả ngắn và bố cục phù hợp. Kết hợp các section nền Rice Paper, Sage và những chi tiết Cedar.

Chi tiết kiến trúc
Một section ảnh cận cảnh về gỗ, giấy shoji, đá, vải tự nhiên và ánh sáng. Giúp trang có chiều sâu thị giác thay vì chỉ giới thiệu từng loại phòng.

Section kết thúc
Tiêu đề: “A Space to Simply Be”.

Nút điều hướng về trang chủ hoặc trang Giới thiệu.

Không hiển thị giá phòng, lịch phòng trống hoặc nút đặt phòng.

6. TRANG TRẢI NGHIỆM & KHÁM PHÁ — EXPERIENCES

Hero
Ảnh vườn thiền vào sáng sớm, có sương nhẹ nếu phù hợp với ảnh thực tế.

Tiêu đề: “Moments of Mindful Living”.

Mô tả ngắn về những trải nghiệm kết nối với thiên nhiên, văn hóa và nhịp sống chậm.

Tea Ritual
Giới thiệu trải nghiệm thưởng trà trong không gian yên tĩnh.

Sử dụng hình ảnh trà thất, bộ ấm chén và ánh sáng tự nhiên. Nội dung tập trung vào sự tinh tế của không gian và khoảnh khắc thưởng trà, không biến thành trang bán sản phẩm.

Meditation & Zen Garden

Ảnh vườn thiền, đá, rêu và lối đi.

Mô tả về việc dành thời gian tĩnh tâm và tận hưởng không gian thiên nhiên.

Bố cục tối giản, ưu tiên hình ảnh và khoảng trắng.

Seasonal Dining
Giới thiệu trải nghiệm ẩm thực theo mùa, nguyên liệu và cách trình bày món ăn.

Sử dụng ảnh món ăn, bàn gỗ và không gian nhà hàng nhìn ra vườn. Tránh tuyên bố chưa được xác thực về nguồn nguyên liệu hoặc lợi ích sức khỏe.

Wellness & Reconnection
Giới thiệu không gian spa, thư giãn và chăm sóc bản thân. Tập trung vào cảm giác nghỉ ngơi, ánh sáng, vật liệu và sự riêng tư.

Cultural Discovery
Giới thiệu những nét văn hóa địa phương có thể khám phá xung quanh resort. Chỉ đưa thông tin địa điểm cụ thể khi có dữ liệu phù hợp; không tự tạo các hoạt động hoặc địa danh không có thật.

Gallery
Bố cục ảnh tự do, kết hợp kiến trúc, trà đạo, thiên nhiên và ẩm thực. Hiệu ứng hover nhẹ, không xoay ảnh hoặc sử dụng chuyển động phô trương.

Section kết thúc
Nền Rice Paper, tiêu đề lớn:

“Return to What Matters.”

Một đoạn văn ngắn về sự tĩnh tại, cân bằng và những khoảnh khắc dành riêng cho bản thân.

Nút “Return to KIRI HOUSE” dẫn về trang chủ.

7. MOTION & INTERACTION

Sử dụng hiệu ứng vừa đủ:

Fade-in nhẹ khi section xuất hiện.

Ảnh phóng to rất nhẹ khi hover.

Header chuyển trạng thái mềm khi cuộn.

Đường kẻ hoặc chữ có hiệu ứng xuất hiện tinh tế.

Chuyển tiếp màu nền nhẹ giữa các section.

Menu mobile mở và đóng mượt mà.

Không sử dụng hiệu ứng bay, xoay, parallax mạnh, neon hoặc hiệu ứng công nghệ không phù hợp với tinh thần Zen.

Tôn trọng cài đặt giảm chuyển động của người dùng. Đảm bảo nội dung vẫn dễ đọc và sử dụng khi tắt animation.

8. TECHNICAL REQUIREMENTS

Cấu trúc trang:

index.html — Trang chủ.

about.html — Giới thiệu.

stays.html — Phòng, villa & tiện ích.

experiences.html — Trải nghiệm & khám phá.

Sử dụng HTML, CSS và JavaScript thuần. Có thể tổ chức CSS, JavaScript và hình ảnh trong thư mục dùng chung để tránh lặp mã giữa các trang.

Điều hướng:

Header và footer thống nhất.

Logo dẫn về trang chủ.

Các liên kết điều hướng chính xác.

Menu mobile hoạt động đầy đủ.

Không để nút giả hoặc liên kết không có mục đích.

Chuyển đổi VI / EN:

Có công tắc ngôn ngữ trên cả bốn trang.

Dịch đầy đủ menu, tiêu đề, mô tả, nút, chú thích ảnh và footer.

Chuyển ngôn ngữ nhưng vẫn giữ nguyên trang đang xem.

Lưu lựa chọn ngôn ngữ bằng localStorage.

Có thể sử dụng data-vi, data-en và JavaScript.

Cập nhật thuộc tính lang của HTML theo ngôn ngữ đang hiển thị.

Đảm bảo font chữ hỗ trợ tiếng Việt và không lỗi dấu.

Responsive:

Desktop: bố cục rộng, bất đối xứng và nhiều khoảng trắng.

Tablet: điều chỉnh kích thước ảnh, khoảng cách và tỷ lệ cột.

Mobile: bố cục một cột, menu thu gọn, chữ dễ đọc và ảnh không bị méo.

Không để nội dung tràn hoặc xuất hiện cuộn ngang ngoài ý muốn.

Hình ảnh và hiệu năng:

Ưu tiên ảnh thực tế, đúng concept và có URL tải ổn định.

Có ảnh dự phòng khi ảnh chính không tải được.

Không để ảnh lỗi hoặc khung ảnh trống.

Lazy-load ảnh nằm bên dưới hero.

Bổ sung alt text phù hợp cho hình ảnh.

9. GIỚI HẠN CHỨC NĂNG

Website chỉ dùng để giới thiệu thương hiệu và trải nghiệm nghỉ dưỡng.

Không triển khai:

Đặt phòng.

Đặt lịch spa, trà đạo hoặc thiền.

Đặt dịch vụ.

Giỏ hàng.

Thanh toán.

Mua bán trực tuyến.

Các nút CTA chỉ phục vụ việc khám phá nội dung và điều hướng giữa các trang.

10. TIÊU CHÍ HOÀN THÀNH

Có đủ bốn trang HTML riêng biệt.

Mỗi trang có bố cục riêng, không lặp lại cùng một template.

Phong cách Japanese Zen Minimalism thể hiện rõ qua hình ảnh, typography và khoảng trắng.

Màu sắc được sử dụng nhất quán, Vermilion chỉ làm điểm nhấn nhỏ.

Điều hướng hoạt động chính xác.

Chuyển đổi VI / EN hoàn chỉnh.

Responsive trên desktop, tablet và mobile.

Hiệu ứng nhẹ, không làm giảm trải nghiệm.

Không có chức năng đặt phòng, đặt dịch vụ hoặc giao dịch.

Yêu cầu cuối cùng: Tạo một website giới thiệu resort Nhật Bản đương đại có chiều sâu văn hóa, chất lượng hình ảnh cao và trải nghiệm tinh tế. Ưu tiên kiến trúc, vật liệu, ánh sáng và sự tĩnh tại. Mỗi trang cần có cá tính riêng nhưng vẫn duy trì một hệ thống nhận diện thương hiệu thống nhất.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Nhà hàng / quán cà phê** (`recipe:restaurant-cafe`, chưa đánh giá): Hero-cinematic hoặc hero-offset → story-letter → menu dạng features-numbered / tabs → gallery-filmstrip → contact-split (giờ mở cửa, bản đồ, đặt bàn = bản demo).
- **Du lịch / khu nghỉ dưỡng** (`recipe:travel-resort`, chưa đánh giá): Hero-cinematic → story-pinned (3 khoảnh khắc) → gallery-lookbook → features-alternate (phòng / tour) → cta-fullbleed. Trang chi tiết tour / phòng.

**Bố cục gợi ý**
- **Hero cảnh nhiều lớp** (`composition:hero-scene`, chưa đánh giá): Bầu trời gradient + mây + hạt + ảnh phong cảnh hòa đáy (`data-layers`, `data-depth`, mask-image). _Tránh:_ Không gắn data-reveal / data-parallax lên lớp data-depth.
- **Hero ảnh tràn viền điện ảnh** (`composition:hero-cinematic`, chưa đánh giá, đã dùng 7 lần): Ảnh tràn `min-h-[100dvh]`, gradient từ đáy, tiêu đề góc dưới-trái cực lớn, CTA + 1 dòng phụ đề. _Tránh:_ Chữ đè mặt người / chủ thể ảnh; Thiếu lớp phủ → chữ không đọc được.
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 19 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.
- **Hero chia đôi chữ – ảnh** (`composition:hero-split`, chưa đánh giá, đã dùng 8 lần): Chữ 5–6/12 cột trái, ảnh tràn mép phải ở lg+; mobile chữ → ảnh.

**Chuyển động gợi ý**
- **Ảnh mở màn che** (`motion:clip-image`, chưa đánh giá): `data-reveal="clip"` trên khung ảnh overflow-hidden chứa <img>. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Parallax ảnh hero** (`motion:parallax-hero`, chưa đánh giá): `data-parallax="0.15"` trên lớp bọc `absolute inset-x-0 -inset-y-[15%]`. _Tránh:_ Đặt chung phần tử có data-reveal / data-tilt; Dùng inset-0 → lộ mép.
- **Hạt sáng / mây** (`motion:atmos-particles`, chưa đánh giá): atmos.js: `data-particles="dust|fireflies|stars|petals"` một section (Level 2), `data-clouds="3"`. _Tránh:_ Chữ trên nền có hạt thiếu tương phản; Tôn trọng prefers-reduced-motion (thư viện đã xử lý).

**Tránh lặp:** các website dựng gần đây đã dùng `hero-split`, `features-alternate`, `gallery-lookbook`, `cta-type`, `hero-cinematic`, `features-bento`, `gallery-masonry`, `gallery-asymmetric`, `features-tabs`, `cta-fullbleed`, `cta-split` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


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
