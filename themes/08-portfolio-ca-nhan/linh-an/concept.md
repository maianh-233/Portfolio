# Brief website — Linh An

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website portfolio cá nhân
- **Tên thương hiệu / dự án:** **Linh An** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** BA không ghi — tự suy ra từ chủ đề và các mục dưới, ghi suy luận vào `_build/sitemap.json` (`purposeInferred`).
- **Đối tượng khách truy cập:** BA không ghi — tự suy ra từ chủ đề, mục đích (ảnh hưởng giọng văn, hình ảnh, CTA).
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

> Nguyên văn, 9.820 ký tự, 254 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
# WEBSITE PORTFOLIO: BLOOMÉ
## Wedding Floral Designer — Romantic Editorial × Botanical Luxury

### 1. TỔNG QUAN

Thiết kế website portfolio cá nhân cho **Linh An**, một nghệ nhân thiết kế hoa cưới chuyên sáng tạo hoa cầm tay cô dâu, trang trí lễ đường và không gian tiệc cưới nghệ thuật.

Tên thương hiệu cá nhân: **BLOOMÉ**.

Website có nhiệm vụ giới thiệu phong cách sáng tạo, trưng bày các dự án hoa cưới tiêu biểu, kể câu chuyện nghệ thuật của người thiết kế và giúp khách hàng liên hệ hợp tác.

Đây là portfolio cá nhân, không phải website bán hoa. Không tạo giỏ hàng, thanh toán trực tuyến hoặc hệ thống thương mại điện tử.

### 2. PHONG CÁCH THIẾT KẾ

**Art direction: Romantic Editorial × Botanical Luxury × Fine Art Wedding Photography.**

Tạo cảm giác như một tạp chí nghệ thuật cưới cao cấp kết hợp triển lãm nhiếp ảnh hoa.

Bảng màu:
- Deep Burgundy: `#722F37` — màu nhận diện nổi bật.
- Champagne: `#E8D8C3` — màu nền phụ.
- Sage Green: `#929B80` — màu thiên nhiên.
- Warm Ivory: `#F8F4ED` — màu nền chủ đạo.
- Dusty Rose: `#C58F91` — màu nhấn phụ.

Sử dụng Warm Ivory làm nền chính, Burgundy cho tiêu đề và các điểm nhấn quan trọng, Sage Green để tạo sự cân bằng. Không phủ hồng pastel lên toàn bộ giao diện.

Typography kết hợp serif thanh lịch như Cormorant Garamond với sans-serif hiện đại như Manrope. Sử dụng tiêu đề lớn, chữ nghiêng nghệ thuật và cách sắp xếp chữ mang phong cách editorial.

Bố cục bất đối xứng, ảnh khổ lớn, ảnh chồng lớp, khoảng trắng có chủ đích và các chi tiết đường nét thực vật tinh tế. Tránh bố cục card đồng nhất, giao diện cửa hàng hoa truyền thống và thiết kế template đại trà.

### 3. CẤU TRÚC WEBSITE

**SECTION 01 — HERO**

Tạo màn hình mở đầu giàu tính nghệ thuật với hình ảnh một không gian tiệc cưới được trang trí bằng hoa tươi, ánh sáng tự nhiên và những chất liệu sang trọng.

Nội dung:

BLOOMÉ  
Wedding Floral Artistry

Tiêu đề lớn:
"Every Love Story Blooms Differently."

Mô tả:
"Thoughtfully designed florals that turn meaningful moments into unforgettable memories."

Nút:
- Explore My Work
- My Creative Philosophy

Bố cục tiêu đề đặt lệch về một phía, kết hợp ảnh hoa cưới khổ lớn chiếm phần lớn màn hình. Logo nhỏ gọn, thanh điều hướng thanh lịch và hiệu ứng xuất hiện nhẹ nhàng.

**SECTION 02 — ABOUT THE ARTIST**

Tiêu đề:
"Flowers are my way of telling stories."

Giới thiệu Linh An, nghệ nhân thiết kế hoa cưới yêu thích việc kết hợp màu sắc, hình khối tự nhiên và chất liệu thực vật để tạo nên những không gian giàu cảm xúc.

Nội dung nhấn mạnh triết lý thiết kế riêng cho từng cặp đôi, sự tỉ mỉ trong lựa chọn hoa và khả năng kể chuyện bằng nghệ thuật sắp đặt.

Bố cục kết hợp ảnh chân dung hoặc ảnh nghệ nhân đang làm việc với hoa, văn bản ngắn và các chi tiết typography nghệ thuật. Tránh sử dụng một profile card đơn giản.

**SECTION 03 — SIGNATURE COLLECTIONS**

Tiêu đề:
"A collection of beautiful beginnings."

Trưng bày bốn bộ sưu tập hoa cưới, mỗi bộ có bảng màu và phong cách riêng.

**01. GARDEN ROMANCE**

Phong cách: Romantic European Garden.

Hoa hồng vườn, hoa mao lương, hoa trắng nhỏ và lá xanh tự nhiên. Cách sắp đặt phóng khoáng, mềm mại, như một khu vườn đang nở rộ.

Màu sắc: Ivory, Sage Green, Dusty Rose.

**02. IVORY ELEGANCE**

Phong cách: Refined Contemporary Wedding.

Hoa trắng kem, lan, hoa hồng trắng và những cụm hoa có hình dáng thanh thoát. Bố cục tinh tế, sang trọng, tập trung vào hình khối và ánh sáng.

Màu sắc: Warm Ivory, Champagne, Olive Green.

**03. WILDFLOWER DREAMS**

Phong cách: Artistic Meadow Wedding.

Hoa theo mùa, cành lá tự nhiên, hoa dại và những hình dáng bất quy tắc. Tổng thể tự do, giàu tính nghệ thuật, không quá trau chuốt hoặc đối xứng.

Màu sắc: Muted Green, Cream, Terracotta.

**04. VELVET ROSE**

Phong cách: Dramatic Romantic Luxury.

Hoa hồng đỏ rượu vang, hoa đỏ sẫm, điểm xuyết hoa kem và lá xanh đậm. Ánh sáng tương phản, không gian giàu chiều sâu và cảm giác lãng mạn trưởng thành.

Màu sắc: Deep Burgundy, Champagne, Dark Green.

Mỗi bộ sưu tập phải có hình ảnh lớn, tên bộ sưu tập, mô tả ngắn và nút "Explore Collection". Khi nhấn vào, mở trang chi tiết hoặc overlay giới thiệu thêm hình ảnh, ý tưởng thiết kế và bảng màu.

Không trình bày bốn bộ sưu tập thành bốn card giống hệt nhau. Hãy thay đổi tỷ lệ ảnh, cách sắp xếp và vị trí văn bản để tạo nhịp điệu thị giác.

**SECTION 04 — BRIDAL BOUQUETS**

Tiêu đề:
"Made to walk with you."

Tạo một gallery giới thiệu hoa cầm tay cô dâu với nhiều kiểu dáng:
- Classic Round Bouquet.
- Loose Garden Bouquet.
- Cascading Bridal Bouquet.
- Sculptural Contemporary Bouquet.
- Burgundy Statement Bouquet.

Mỗi mẫu cần thể hiện rõ hình dáng, kết cấu hoa và cách phối màu.

Thiết kế gallery như một bộ ảnh editorial thời trang cưới. Sử dụng ảnh chân dung hoặc ảnh cận cảnh chất lượng cao, phối hợp các kích thước ảnh khác nhau và caption nhỏ.

Không dùng giao diện danh sách sản phẩm hoặc hiển thị giá bán.

**SECTION 05 — BEHIND THE BLOOMS**

Tiêu đề:
"From a feeling to a floral story."

Trình bày quy trình sáng tạo qua bốn bước:

01 — Discover  
Tìm hiểu câu chuyện tình yêu, địa điểm và cảm xúc mà cặp đôi muốn lưu giữ.

02 — Imagine  
Xây dựng concept, bảng màu và lựa chọn hoa phù hợp.

03 — Compose  
Thử nghiệm hình khối, kết cấu, tỷ lệ và cách sắp đặt hoa.

04 — Bring to Life  
Hoàn thiện thiết kế và biến ý tưởng thành không gian hoa cưới thực tế.

Sử dụng ảnh hậu trường, bàn làm việc với hoa tươi, bảng phối màu và hình ảnh nghệ nhân đang cắm hoa. Bố cục dạng timeline sáng tạo hoặc chuỗi hình ảnh kể chuyện, không dùng bốn card thông thường.

**SECTION 06 — THE DETAILS**

Tiêu đề:
"Beauty lives in the details."

Tạo một bộ sưu tập ảnh cận cảnh:
- Cánh hoa và kết cấu tự nhiên.
- Sự kết hợp giữa hoa và dải ruy băng.
- Hoa trang trí bàn tiệc.
- Chi tiết hoa trên lễ đường.
- Sự tương phản giữa hoa Burgundy và hoa kem.
- Cách hoa hòa quyện với khăn trải bàn, nến và chất liệu trang trí.

Sử dụng ảnh macro và ánh sáng tự nhiên để làm nổi bật vẻ đẹp của vật liệu. Trình bày theo dạng collage nghệ thuật, không đóng khung mọi ảnh trong các card giống nhau.

**SECTION 07 — KIND WORDS**

Tiêu đề:
"Memories that continue to bloom."

Hiển thị hai hoặc ba lời nhận xét ngắn từ khách hàng giả lập, tập trung vào trải nghiệm và cảm xúc trong ngày cưới.

Mỗi nhận xét có tên viết tắt, mô tả phong cách tiệc cưới và nội dung phản hồi.

Đánh dấu đây là nội dung mẫu nếu website được dùng để trình diễn. Không trình bày lời nhận xét giả lập như đánh giá thực tế.

**SECTION 08 — CONTACT**

Sử dụng nền Deep Burgundy hoặc hình ảnh hoa cưới nghệ thuật với lớp phủ tối nhẹ.

Tiêu đề:
"Let's create something unforgettable."

Mô tả:
"Tell me about your celebration, your inspiration, and the feeling you want your flowers to express."

Nút chính:
"Start a Conversation"

Thông tin liên hệ mẫu:
- Email: hello@bloome.example
- Location: Ho Chi Minh City, Vietnam.
- Instagram: BLOOMÉ Floral Artistry.

Có thể triển khai biểu mẫu liên hệ đơn giản gồm tên, email, ngày cưới dự kiến và lời nhắn. Nếu chưa có backend, sử dụng liên kết email hoặc thông báo rõ rằng biểu mẫu chỉ là giao diện demo.

**SECTION 09 — FOOTER**

Hiển thị logo BLOOMÉ, một câu tagline ngắn:

"Every flower holds a feeling."

Kèm liên kết đến About, Collections, Bridal Bouquets và Contact. Footer gọn gàng, thanh lịch, sử dụng typography phù hợp với toàn bộ website.

### 4. YÊU CẦU HÌNH ẢNH

Hình ảnh là yếu tố quan trọng nhất của website. Ưu tiên ảnh chụp hoa cưới chuyên nghiệp theo phong cách fine-art editorial.

Từ khóa tìm ảnh:
- `luxury wedding floral editorial photography`
- `burgundy wedding flowers champagne palette`
- `fine art bridal bouquet natural light`
- `romantic garden wedding flower installation`
- `editorial wedding tablescape floral design`
- `wildflower wedding floral art photography`
- `dark burgundy rose wedding ceremony flowers`

Yêu cầu:
- Ảnh phải có hoa tươi chân thực, màu sắc tự nhiên và bố cục nghệ thuật.
- Mỗi bộ sưu tập cần hình ảnh đúng với concept tương ứng.
- Không lặp lại cùng một ảnh ở nhiều section.
- Tránh ảnh hoa nhựa, hoa hoạt hình, ảnh chất lượng thấp hoặc ảnh không liên quan.
- Không sử dụng ảnh phong cảnh hay ảnh cô dâu đơn thuần để thay thế ảnh thiết kế hoa.
- Nếu không tìm được ảnh phù hợp, sử dụng placeholder có định hướng rõ ràng thay vì chọn ảnh ngẫu nhiên.
- Các dự án, tên khách hàng và thông tin cá nhân đều là dữ liệu giả lập.

### 5. HIỆU ỨNG VÀ TƯƠNG TÁC

- Ảnh xuất hiện bằng hiệu ứng fade và reveal mềm mại.
- Chữ lớn xuất hiện theo từng dòng khi tải trang hoặc cuộn.
- Gallery có hiệu ứng zoom nhẹ khi hover.
- Các bộ sưu tập mở được phần chi tiết.
- Chuyển động parallax nhẹ trên một số ảnh lớn.
- Menu điều hướng mượt mà và hoạt động tốt trên mobile.
- Nút bấm có trạng thái hover và focus rõ ràng.

Không lạm dụng hiệu ứng hoa rơi, cánh hoa bay, trái tim hoặc animation trang trí kiểu thiệp cưới. Tránh chuyển động quá nhiều gây phân tán sự chú ý khỏi hình ảnh.

### 6. YÊU CẦU KỸ THUẬT

- Sử dụng HTML, CSS và JavaScript thuần.
- Tách riêng `index.html`, `style.css` và `script.js`.
- Thiết kế responsive cho desktop, tablet và mobile.
- Tối ưu hình ảnh và tốc độ tải trang.
- Đảm bảo tiếng Việt hiển thị đúng dấu nếu có nội dung tiếng Việt.
- Các liên kết, menu, gallery và nút tương tác phải hoạt động.
- Không tạo giỏ hàng, thanh toán hoặc tính năng thương mại điện tử.
- Không tạo chức năng backend giả vờ hoạt động khi chưa được triển khai.

### 7. TIÊU CHÍ HOÀN THIỆN

Website cuối cùng phải mang cảm giác của một portfolio nghệ thuật cưới cao cấp, giàu hình ảnh và có dấu ấn cá nhân.

**Ưu tiên hàng đầu:** Hình ảnh hoa cưới chất lượng cao, bảng màu Burgundy × Champagne × Sage Green, bố cục editorial sáng tạo và sự khác biệt rõ ràng giữa các bộ sưu tập.

Không biến website thành một template dịch vụ cưới thông thường. Hãy thiết kế như một triển lãm nghệ thuật kể chuyện bằng hoa.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Văn hóa / làng nghề / truyền thống** (`recipe:heritage-craft`, chưa đánh giá): Hero-type / hero-offset → story-letter (nghệ nhân) → process-steps → gallery-filmstrip → quote-full → contact-split.

**Bố cục gợi ý**
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 3 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 17 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 15 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 20 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.

**Tránh lặp:** các website dựng gần đây đã dùng `hero-cinematic`, `features-numbered`, `cta-type`, `hero-offset`, `gallery-lookbook`, `features-tabs`, `features-bento`, `hero-type`, `gallery-masonry` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


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
