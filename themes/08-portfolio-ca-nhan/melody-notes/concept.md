# Brief website — KOMOREBI

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website portfolio cá nhân
- **Tên thương hiệu / dự án:** **KOMOREBI** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
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

> Nguyên văn, 13.104 ký tự, 413 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
# MASTER PROMPT — KOMOREBI
## Japanese Mori Girl Photography Portfolio & CV

### 1. PROJECT OVERVIEW

Thiết kế một landing page portfolio cá nhân cho một **nữ nhiếp ảnh gia** mang thương hiệu **KOMOREBI**.

Concept chủ đạo: Japanese Mori Girl × Vintage Film Photography × Botanical Diary × Japanese Indie Magazine.

Website là thế giới nghệ thuật riêng của một cô gái yêu thiên nhiên, nhiếp ảnh analog, những khu rừng yên tĩnh, trang phục vintage và những khoảnh khắc đời thường.

Hãy tưởng tượng website là sự kết hợp giữa một cuốn nhật ký bằng ảnh, một tạp chí nghệ thuật Nhật Bản độc lập và một quyển sổ lưu giữ những kỷ niệm nhỏ.

**Cảm xúc chủ đạo:** dịu dàng, tự nhiên, hoài niệm, mơ màng, hơi cô độc nhưng ấm áp.

Đây là portfolio cá nhân chuyên nghiệp, không phải cửa hàng, blog du lịch đại trà hay website studio thương mại. Chỉ tạo một landing page duy nhất, không có trang con hoặc chức năng thương mại điện tử.

### 2. ART DIRECTION — THE WORLD OF MORI GIRL

#### Color Palette

- Milk Cream: `#F5F0E6`
- Moss Green: `#72785C`
- Forest Green: `#394638`
- Warm Brown: `#8A7058`
- Dusty Rose: `#C9A6A0`
- Paper Beige: `#E5D9C7`
- Ink Black: `#39372F`

Nền chính sử dụng màu kem giấy. Xanh rêu và xanh rừng tạo chiều sâu; nâu gỗ và hồng phấn xuất hiện ở các chi tiết nhỏ.

Tránh nền trắng tinh, màu neon, gradient công nghệ hoặc màu sắc quá bão hòa.

#### Typography

- Tiêu đề: Cormorant Garamond hoặc serif thanh lịch tương đương.
- Nội dung: Noto Sans JP hoặc sans-serif dễ đọc.
- Chú thích: monospace nhỏ hoặc chữ viết tay mang cảm giác ghi chú.

Kết hợp tiêu đề serif lớn, chữ nghiêng, caption nhỏ và những dòng chữ viết tay có chọn lọc.

Có thể sử dụng tiếng Nhật như một chi tiết trang trí, nhưng phải có ý nghĩa và hiển thị đúng. Không thêm chữ Nhật ngẫu nhiên chỉ để tạo vẻ thẩm mỹ.

#### Textures & Decorative Elements

Sử dụng có kiểm soát:
- Giấy ngà hơi ngả màu.
- Hạt nhiễu ảnh film nhẹ.
- Đường viền mảnh.
- Hoa ép và minh họa thực vật.
- Nét bút chì, dấu ngày tháng và ghi chú viết tay.
- Những mảng màu nước hoặc dấu đóng kiểu nhật ký.

Không phủ texture lên toàn bộ trang đến mức gây khó đọc. Không sử dụng quá nhiều sticker hoặc đồ trang trí khiến website trông như scrapbook trẻ em.

### 3. HEADER — A LITTLE FOREST JOURNAL

Thiết kế header nhỏ gọn, thanh lịch.

Wordmark: **KOMOREBI**

Dòng phụ: *Photography & Visual Diary*

Navigation:
- HOME
- GALLERY
- STORIES
- ABOUT
- JOURNEY
- CONTACT

Có thể thêm một biểu tượng hoa nhỏ hoặc hình chiếc lá bên cạnh logo.

Header sử dụng nền kem, đường kẻ mảnh và typography tối giản. Khi cuộn trang, header có thể chuyển sang nền kem hơi trong suốt.

Menu phải điều hướng đến đúng section. Trên mobile, sử dụng menu thu gọn gọn gàng, dễ thao tác.

### 4. HERO — A GIRL WHO COLLECTS MOMENTS

Tạo một hero section giàu cảm xúc, như trang mở đầu của một cuốn nhật ký nhiếp ảnh Nhật Bản.

**Bố cục:**
- Một bức ảnh film lớn chiếm phần chính.
- Một hoặc hai ảnh nhỏ đặt lệch bên cạnh như ảnh được dán vào sổ.
- Tên nhiếp ảnh gia đặt bằng serif lớn.
- Caption nhỏ giống ghi chú viết tay.
- Ngày tháng hoặc địa điểm được đặt như thông tin trong nhật ký.

Tên hiển thị: `[Tên nhiếp ảnh gia]`

Tagline:

**“Collecting little moments, somewhere between the trees and the light.”**

Giới thiệu ngắn:

“I am a photographer drawn to quiet places, soft light, and the beauty of everyday life. Through my photographs, I collect fragments of nature, memories, and the gentle stories hidden in ordinary moments.”

CTA chính: **WANDER THROUGH MY GALLERY**

CTA dẫn đến section Gallery.

Có thể thêm dòng chữ nhỏ:

*Somewhere in Japan, beneath the afternoon trees.*

Đây là chi tiết tạo không khí, không được hiểu là địa điểm thật của nhiếp ảnh gia nếu chưa có dữ liệu xác nhận.

Hero phải có chiều sâu thị giác, khoảng trắng và bố cục bất đối xứng. Tránh kiểu chia đôi màn hình với ảnh một bên và khối chữ một bên như portfolio thông thường.

### 5. PHOTO GALLERY — LITTLE FRAGMENTS OF LIFE

Tạo một gallery gồm bốn bộ ảnh với câu chuyện và bố cục khác nhau.

#### COLLECTION 01 — FOREST WHISPERS

Chủ đề: Khu rừng, ánh nắng xuyên qua tán lá, con đường nhỏ, rêu xanh và những khoảng lặng giữa thiên nhiên.

Hình ảnh:
- Ảnh rừng dọc khổ lớn.
- Chi tiết lá cây, hoa dại và ánh sáng.
- Một bức ảnh phong cảnh ngang làm điểm nghỉ thị giác.

Màu chủ đạo: xanh rêu, nâu và kem.

#### COLLECTION 02 — THE GIRL IN LINEN

Chủ đề: Chân dung một cô gái trong trang phục Mori Kei, váy linen nhiều lớp, cardigan len, túi vải và phụ kiện vintage.

Hình ảnh:
- Chân dung toàn thân trong khung cảnh tự nhiên.
- Ảnh cận chất liệu vải.
- Khoảnh khắc đời thường như đọc sách bên cửa sổ hoặc đi dạo trong vườn.

Cảm giác: tự nhiên, trong trẻo, không tạo dáng quá mức.

#### COLLECTION 03 — FLOWERS & OLD LETTERS

Chủ đề: Hoa dại, hoa ép, sách cũ, thư tay, bàn gỗ và những vật nhỏ lưu giữ kỷ niệm.

Hình ảnh:
- Still life với ánh sáng cửa sổ.
- Ảnh cận hoa và chất liệu giấy.
- Bố cục tĩnh vật có nhiều khoảng trống.

Cảm giác như một trang nhật ký được lưu giữ qua nhiều năm.

#### COLLECTION 04 — QUIET DAYS IN THE COUNTRYSIDE

Chủ đề: Cuộc sống chậm rãi ở vùng quê, căn nhà gỗ, khu vườn, cửa sổ cũ và những buổi chiều yên bình.

Hình ảnh:
- Ảnh ngang rộng về không gian.
- Khung cửa sổ đón nắng.
- Một chuỗi ảnh ghi lại những khoảnh khắc đời thường.

Cảm giác: hoài niệm, chân thật, gần gũi với thiên nhiên.

#### Quy tắc trình bày Gallery

Không hiển thị bốn bộ ảnh trong bốn card giống nhau.

Sử dụng:
- Ảnh dọc lớn xen kẽ ảnh ngang.
- Lưới bất đối xứng.
- Những ảnh nhỏ như bản in film đặt cạnh ảnh chủ đạo.
- Caption ngắn, số thứ tự và ghi chú về địa điểm hoặc thời gian.
- Khoảng trắng rộng để hình ảnh được thở.

Khi nhấp vào ảnh, mở lightbox để xem ảnh lớn và chú thích. Cho phép đóng bằng nút đóng hoặc phím Escape.

Không cần tạo chức năng tải ảnh hàng loạt hoặc bán ảnh.

### 6. VISUAL DIARY — STORIES BEHIND THE PHOTOS

Tạo một section kể chuyện bằng hình ảnh và những đoạn văn ngắn.

Tiêu đề:

**“Notes from My Little World.”**

Trình bày ba câu chuyện:

**01 — A MORNING UNDER THE TREES**

Một buổi sáng đi bộ trong rừng, khi ánh nắng xuyên qua những tán cây và mọi thứ trở nên yên tĩnh.

**02 — THE OLD WOODEN WINDOW**

Một góc cửa sổ cũ, tách trà ấm và ánh sáng dịu nhẹ trên mặt bàn gỗ.

**03 — WILD FLOWERS IN MY POCKET**

Những bông hoa dại nhỏ nhặt được trên đường về, trở thành cảm hứng cho một bộ ảnh.

Mỗi câu chuyện gồm:
- Một ảnh chủ đạo.
- Tiêu đề.
- Đoạn mô tả ngắn.
- Một caption viết tay hoặc ngày tháng.
- Một đến hai ảnh chi tiết nếu cần.

Nội dung nên giống những ghi chú cá nhân chân thành, không giống bài quảng cáo hoặc blog du lịch.

Nếu sử dụng nội dung mẫu, hãy để dễ thay thế và không tuyên bố đó là trải nghiệm có thật của chủ portfolio.

### 7. MY AESTHETIC — THINGS THAT INSPIRE ME

Thiết kế section như một moodboard nghệ thuật tĩnh.

Các nhóm nội dung:

**COLORS I LOVE**
Bảng màu lấy cảm hứng từ rừng cây, giấy cũ, gỗ, hoa khô và ánh nắng chiều.

**TEXTURES**
Linen, len, gỗ thô, giấy sần, lá cây và bề mặt phủ rêu.

**LIGHT & SHADOW**
Ánh sáng cửa sổ, bóng lá, ánh nắng cuối ngày và ánh sáng tự nhiên dịu nhẹ.

**LITTLE OBJECTS**
Sách cũ, máy ảnh film, hoa ép, sổ tay, túi vải và những món đồ vintage.

Sử dụng các mảnh ảnh có kích thước khác nhau, bảng màu nhỏ và chú thích ngắn. Tạo cảm giác như một trang trong cuốn sổ sưu tầm cảm hứng.

Không biến moodboard thành dashboard hoặc công cụ kéo thả.

### 8. PHOTOGRAPHY PROCESS

Trình bày quy trình sáng tạo bằng các số thứ tự lớn, đường kẻ mảnh và hình ảnh minh họa.

**01 — NOTICE**

Quan sát những chi tiết nhỏ trong thiên nhiên và đời sống thường ngày.

**02 — GATHER**

Thu thập cảm hứng, ghi chú, lựa chọn bối cảnh và xây dựng moodboard.

**03 — CAPTURE**

Chụp ảnh với sự chú ý đến ánh sáng, bố cục, màu sắc và cảm xúc.

**04 — DEVELOP**

Chọn lọc hình ảnh, xử lý màu và duy trì ngôn ngữ thị giác nhất quán.

**05 — PRESERVE**

Sắp xếp ảnh thành những câu chuyện có thể lưu giữ như một cuốn nhật ký.

Có thể trình bày thành timeline ngang trên desktop và timeline dọc trên mobile.

### 9. ABOUT THE PHOTOGRAPHER

Tiêu đề:

**“A Quiet Soul Behind the Camera.”**

Sử dụng ảnh chân dung nữ nhiếp ảnh gia hoặc ảnh hậu trường đang cầm máy ảnh giữa thiên nhiên.

Nội dung giới thiệu gồm:
- Tình yêu dành cho thiên nhiên và nhiếp ảnh.
- Nguồn cảm hứng từ văn hóa thị giác Nhật Bản.
- Sự yêu thích với ảnh film và những khoảnh khắc đời thường.
- Quan điểm về việc lưu giữ ký ức bằng hình ảnh.

Giọng văn nhẹ nhàng, chân thành, có cá tính riêng.

Có thể dùng một đoạn trích nổi bật:

*“I find beauty in things that ask for nothing but a little attention.”*

Không viết tiểu sử quá dài. Không tự tạo thông tin cá nhân, nơi sinh, tuổi hoặc thành tích.

### 10. EXPERIENCE & CREATIVE JOURNEY

Trình bày CV bằng phong cách editorial nhẹ nhàng, hòa hợp với concept Mori Girl.

Có thể gồm:
- Kinh nghiệm nhiếp ảnh.
- Dự án cá nhân.
- Triển lãm hoặc publication.
- Học vấn.
- Workshop và khóa học.
- Kỹ năng chuyên môn.

Sử dụng timeline tối giản, mốc thời gian rõ ràng và các dòng mô tả ngắn.

Kỹ năng có thể gồm:
- Portrait Photography.
- Nature Photography.
- Film Photography.
- Visual Storytelling.
- Photo Editing.
- Color Grading.

Công cụ có thể gồm Adobe Lightroom, Adobe Photoshop hoặc máy ảnh film nếu phù hợp với hồ sơ thực tế.

Không tự tạo giải thưởng, kinh nghiệm, chứng chỉ hoặc tên khách hàng.

Nếu có file CV thật, thêm nút **VIEW MY CV** hoặc **DOWNLOAD CV**. Nếu chưa có file, không tạo liên kết tải xuống giả.

### 11. CONTACT — LEAVE A LITTLE NOTE

Tạo section cuối trang như một lá thư nhỏ.

Tiêu đề:

**“If Our Worlds Cross, Leave Me a Little Note.”**

Mô tả:

“Have a story to tell, a place to explore, or a little moment you would like to preserve? I would love to hear from you.”

Hiển thị:
- Email.
- Instagram.
- Behance hoặc nền tảng portfolio nếu có.
- Địa điểm hoạt động nếu có.

CTA: **WRITE ME A LETTER**

Nút mở ứng dụng email hoặc liên kết liên hệ thực tế.

Trang trí nhẹ bằng hình hoa ép, đường viền giấy hoặc một nét vẽ thực vật. Không để các chi tiết này che khuất thông tin liên hệ.

### 12. FOOTER

Footer mang cảm giác trang cuối của một cuốn nhật ký.

Bao gồm:
- KOMOREBI.
- Photography & Visual Diary.
- Menu điều hướng nhỏ.
- Liên kết mạng xã hội nếu có.
- Dòng bản quyền.

Có thể thêm dòng:

*Made slowly, with love and a little sunlight.*

Footer không cần quá lớn hoặc có nhiều cột.

### 13. MOTION & MICRO-INTERACTIONS

Sử dụng chuyển động nhẹ, tự nhiên:
- Ảnh xuất hiện từ từ khi cuộn.
- Caption hiện nhẹ khi hover.
- Lightbox mở và đóng mượt.
- Hình ảnh có hiệu ứng zoom rất nhẹ.
- Đường kẻ hoặc nét vẽ thực vật xuất hiện tinh tế.

Không sử dụng hiệu ứng neon, parallax mạnh, 3D, con trỏ tùy chỉnh hoặc animation liên tục.

Tôn trọng cài đặt giảm chuyển động của hệ điều hành. Chuyển động phải hỗ trợ cảm xúc, không cạnh tranh với hình ảnh.

### 14. RESPONSIVE & TECHNICAL REQUIREMENTS

Website phải responsive trên desktop, tablet và mobile.

**Desktop**
- Gallery bất đối xứng.
- Ảnh lớn và khoảng trắng rộng.
- Typography rõ ràng.
- Các chi tiết trang trí được sử dụng có chủ đích.

**Tablet**
- Điều chỉnh kích thước ảnh và khoảng cách.
- Giữ được bố cục tổng thể.
- Không để caption đè lên nội dung quan trọng.

**Mobile**
- Chuyển bố cục phức tạp thành một cột khi cần.
- Giữ ảnh đủ lớn để thể hiện chất lượng.
- Đảm bảo chữ dễ đọc và menu dễ thao tác.
- Không xuất hiện cuộn ngang ngoài ý muốn.
- Lightbox phải hoạt động tốt trên màn hình cảm ứng.

Yêu cầu kỹ thuật:
- Chỉ một landing page.
- Không cần backend hoặc cơ sở dữ liệu.
- Các menu, anchor và CTA phải hoạt động.
- Tối ưu ảnh và dùng lazy loading khi phù hợp.
- Có alt text cho ảnh.
- Không sử dụng liên kết ảnh ngẫu nhiên không được kiểm tra.
- Dễ thay thế hình ảnh, nội dung, CV và liên kết.

### 15. CONTENT & IMAGE ACCURACY

Ưu tiên hình ảnh có cùng ngôn ngữ thị giác: ánh sáng tự nhiên, tông màu dịu, bố cục giàu cảm xúc và cảm giác ảnh film.

Nếu không có ảnh thật của nhiếp ảnh gia, có thể sử dụng ảnh minh họa phù hợp với concept. Không được giới thiệu ảnh minh họa là tác phẩm thực tế của chủ portfolio.

Tất cả nội dung mẫu, tên dự án, năm thực hiện, địa điểm và thông tin liên hệ phải dễ thay thế.

Không bịa đặt thành tích, kinh nghiệm, khách hàng hoặc triển lãm.

### 16. FINAL QUALITY STANDARD

Trước khi hoàn thành, kiểm tra:
- Website có thực sự mang tinh thần Mori Girl Nhật Bản không?
- Có giữ được chất ảnh film, thiên nhiên và nhật ký cá nhân không?
- Bố cục gallery có đa dạng không?
- Màu sắc có dịu mắt và nhất quán không?
- Các chi tiết trang trí có tiết chế không?
- Website có tránh được cảm giác template cottagecore đại trà không?
- CV và thông tin liên hệ có dễ đọc không?
- Tất cả menu, lightbox và liên kết có hoạt động không?
- Mobile có giữ được tinh thần thiết kế không?

**KẾT QUẢ MONG MUỐN:** Một landing page portfolio dành cho nữ nhiếp ảnh gia, mang vẻ đẹp của nàng thơ Mori Girl Nhật Bản — mộc mạc, hoài cổ, gần gũi với thiên nhiên và giàu cảm xúc. Website phải giống một cuốn nhật ký nhiếp ảnh được chăm chút bằng tình yêu, nơi mỗi bức ảnh là một ký ức nhỏ và mỗi section mở ra một góc riêng trong thế giới của người nghệ sĩ.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Portfolio / studio sáng tạo** (`recipe:portfolio-creative`, chưa đánh giá): Hero-type → gallery-filter dự án → marquee-band khách hàng → story-editorial → cta-type. Trang chi tiết dự án (detail-article).
- **Tổ hợp gallery: hero-cinematic → gallery-lookbook → story-letter…** (`recipe:learned-gallery-mvlwv4et`, bản nháp): Trang chủ: hero-cinematic → gallery-lookbook → story-letter → timeline → features-numbered → accordion-cv → cta-type. Ý tưởng thị giác: Đi qua một phòng triển lãm: tường tối, ảnh lớn góc vuông, dưới mỗi tác phẩm là nhãn tường bảo tàng nhỏ (tên in nghiêng + series · năm · thể loại); một phòng sáng màu trắng ngà cho lời tự bạch của tác giả

**Bố cục gợi ý**
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 3 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **CTA chữ khổng lồ** (`composition:cta-type`, chưa đánh giá, đã dùng 14 lần): Tiêu đề khổng lồ là cả section, nút sát chữ.
- **Câu chuyện như lá thư** (`composition:story-letter`, chưa đánh giá, đã dùng 7 lần): Khối chữ hẹp đặt lệch, ảnh dọc nhỏ + chú thích, chữ ký cuối.
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 17 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.

**Tránh lặp:** các website dựng gần đây đã dùng `hero-type`, `gallery-lookbook`, `gallery-masonry`, `features-numbered`, `features-tabs`, `cta-type`, `hero-split`, `features-bento`, `cta-fullbleed` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


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
