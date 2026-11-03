# Brief website — SIAM LINGUA

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Web giới thiệu trung tâm tiếng Thái SIAM LINGUA
- **Tên thương hiệu / dự án:** **SIAM LINGUA** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website đa trang giới thiệu SIAM LINGUA, trung tâm đào tạo tiếng Thái dành cho người Việt Nam muốn học ngôn ngữ, tìm hiểu văn hóa Thái Lan, phục vụ du lịch, học tập, công việc và giao tiếp hằng ngày.

Website truyền tải hình ảnh một trung tâm ngoại ngữ chuyên nghiệp, thân thiện và có bản sắc văn hóa riêng. Nội dung tập trung vào phương pháp giảng dạy, chương trình đào tạo, đội ngũ giáo viên và trải nghiệm học tập.

Thông điệp thương hiệu: “Learn Thai. Discover a New World.”

Đây là website giới thiệu thuần túy, không phải nền tảng học trực tuyến hoặc website thương mại điện tử. Không có giá bán, giỏ hàng, thanh toán hay chức năng mua khóa học.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **English — Tiếng Anh** → `<html lang="en">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Anh: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Minimal / Premium / Editorial** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** (mặc định của preset). Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Instrument Serif:ital@0;1`, body `Geist:wght@300;400;500;600`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Instrument Serif`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Tool kiểm tra font preset: `Geist`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Font nào thiếu ký tự tiếng Anh → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Inter` / `Source Serif 4`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 6.679 ký tự, 207 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. Art direction — Phong cách thiết kế

Phong cách: Modern Asian Editorial kết hợp Thai Cultural Aesthetic, Contemporary Education và Minimal Luxury.

Sử dụng bảng màu:

Đỏ Thái #8D3038: màu nhấn chính, tạo bản sắc.

Kem ngà #F8F3E9: màu nền chủ đạo.

Vàng champagne #D5B36A: điểm nhấn lấy cảm hứng từ kiến trúc và nghệ thuật Thái.

Xanh lá đậm #354A3C: màu phụ tạo cân bằng.

Nâu đậm #302A27: màu chữ.

Kết hợp typography sans-serif hiện đại với serif thanh lịch cho các tiêu đề lớn. Sử dụng khoảng trắng rộng, bố cục editorial bất đối xứng, hình ảnh chất lượng cao và các chi tiết trang trí lấy cảm hứng từ hoa văn Thái Lan một cách tiết chế.

Hình ảnh chủ đạo gồm lớp học tiếng Thái, giáo viên hướng dẫn học viên, đường phố Bangkok, kiến trúc Thái Lan, lễ hội truyền thống và đời sống văn hóa địa phương.

Không biến website thành giao diện du lịch hoặc sử dụng quá nhiều họa tiết truyền thống. Ưu tiên một thương hiệu giáo dục hiện đại, trong đó văn hóa Thái là yếu tố nhận diện.

3. Cấu trúc website — 4 trang chính

Trang 1: Home — Trang chủ

Hero section

Tiêu đề lớn: “Discover Thailand Through Its Language.”

Mô tả: Học tiếng Thái từ những bước đầu tiên, phát triển khả năng giao tiếp và khám phá chiều sâu văn hóa Thái Lan.

CTA: “Khám phá chương trình học” và “Tìm hiểu về trung tâm”.

Hình ảnh lớn về lớp học hoặc người bản địa giao tiếp trong bối cảnh văn hóa Thái.

Có thể thêm một câu chào tiếng Thái “สวัสดี (Sawasdee)” làm chi tiết trang trí.

About SIAM LINGUA
Giới thiệu ngắn về định hướng đào tạo, phương pháp học thực tiễn và môi trường học tập thân thiện.

Learning Programs
Giới thiệu bốn nhóm chương trình:

Thai for Beginners: Tiếng Thái dành cho người mới bắt đầu.

Thai Conversation: Luyện nghe nói và giao tiếp thực tế.

Thai for Work: Tiếng Thái ứng dụng trong môi trường công việc.

Thai Language & Culture: Ngôn ngữ kết hợp tìm hiểu văn hóa.

Mỗi chương trình có ảnh minh họa, mô tả ngắn và liên kết đến trang Programs.

Why Learn With Us
Trình bày các điểm nổi bật: thực hành giao tiếp, học phát âm và thanh điệu, nội dung gần với đời sống, giảng viên tận tâm.

A Glimpse of Thai Culture
Một khu vực hình ảnh giới thiệu ẩm thực, lễ hội, phong tục, nghệ thuật và đời sống Thái Lan.

Student Experiences
Hiển thị các câu chuyện học viên, trải nghiệm lớp học và cảm nhận mẫu có thể thay thế bằng nội dung thực tế.

Final CTA
Lời mời tìm hiểu trung tâm và liên hệ để được tư vấn chương trình phù hợp.

Trang 2: About Us — Về chúng tôi

Hero với tiêu đề “More Than Language, A Cultural Journey”.

Câu chuyện hình thành SIAM LINGUA.

Sứ mệnh và định hướng giảng dạy.

Triết lý đào tạo: học ngôn ngữ thông qua giao tiếp, ngữ cảnh và văn hóa.

Giới thiệu đội ngũ giáo viên, chuyên môn và phong cách giảng dạy.

Hình ảnh lớp học, hoạt động nhóm và các buổi giao lưu văn hóa.

Các giá trị cốt lõi: Practical Learning, Cultural Understanding, Confidence và Connection.

Thiết kế theo phong cách editorial với ảnh lớn xen kẽ nội dung, timeline hoặc các khối thông tin gọn gàng.

Thông tin lịch sử, chứng chỉ và thành tích chưa được cung cấp phải sử dụng dữ liệu mẫu có thể chỉnh sửa, không tự khẳng định là thành tích thực tế.

Trang 3: Programs — Chương trình đào tạo

Hero: “Find Your Path to Thai Fluency.”

Giới thiệu tổng quan các chương trình đào tạo theo nhu cầu người học.

Các chương trình chính:

Thai for Beginners

Làm quen bảng chữ cái và hệ thống âm tiếng Thái.

Học phát âm, thanh điệu và từ vựng cơ bản.

Luyện chào hỏi, giới thiệu bản thân và hội thoại đơn giản.

Thai Conversation

Luyện nghe và nói trong tình huống thực tế.

Giao tiếp tại nhà hàng, khách sạn, cửa hàng và khi đi du lịch.

Thực hành hội thoại theo cặp và nhóm.

Thai for Work

Từ vựng và cách giao tiếp trong môi trường công việc.

Hội thoại chuyên nghiệp, trao đổi thông tin và ứng xử lịch sự.

Tình huống giao tiếp với đồng nghiệp hoặc đối tác Thái Lan.

Thai Language & Culture

Tìm hiểu cách xưng hô và phép lịch sự.

Khám phá lễ hội, phong tục và đời sống Thái Lan.

Học ngôn ngữ thông qua tình huống văn hóa.

Learning Method: Trình bày phương pháp học theo các bước: tiếp nhận kiến thức, nghe mẫu, luyện phát âm, thực hành hội thoại và ứng dụng vào tình huống thực tế.

Learning Environment: Hình ảnh lớp học, hoạt động tương tác và các tài liệu học tập.

FAQ: Giải đáp các câu hỏi như người chưa biết tiếng Thái có thể bắt đầu không, cần chuẩn bị gì khi học và chương trình nào phù hợp với mục tiêu cá nhân.

Không hiển thị giá khóa học, chức năng thanh toán hoặc nút mua khóa học.

Trang 4: Culture & Contact — Văn hóa và liên hệ

Thai Culture Journal

Giới thiệu văn hóa Thái Lan thông qua các nhóm nội dung:

Ngôn ngữ và cách giao tiếp lịch sự.

Lễ hội và phong tục.

Ẩm thực và đời sống.

Địa điểm văn hóa nổi bật.

Những khác biệt văn hóa thú vị giữa Việt Nam và Thái Lan.

Trình bày dưới dạng editorial cards với hình ảnh lớn, tiêu đề và phần giới thiệu ngắn. Các thẻ có thể mở bài viết hoặc nội dung chi tiết nếu hệ thống hỗ trợ.

Contact Section

Địa chỉ trung tâm dạng dữ liệu mẫu có thể chỉnh sửa.

Số điện thoại, email và giờ làm việc.

Liên kết mạng xã hội.

Biểu mẫu liên hệ gồm họ tên, thông tin liên lạc và nội dung cần tư vấn.

CTA “Liên hệ với SIAM LINGUA”.

Nếu chưa có backend, biểu mẫu phải thể hiện rõ trạng thái demo và không giả vờ gửi thông tin thành công.

4. Điều hướng và UI/UX

Header gồm logo SIAM LINGUA và bốn mục: Home, About Us, Programs, Culture & Contact.

Điều hướng giữa các trang phải hoạt động thực tế.

Các CTA dẫn đến đúng trang hoặc khu vực liên hệ.

Header và footer thống nhất trên toàn bộ website.

Thiết kế responsive trên desktop, tablet và mobile.

Nội dung tiếng Việt tự nhiên; tiếng Thái và phiên âm phải hiển thị chính xác.

Thẻ chương trình có trạng thái hover và liên kết phù hợp.

Form liên hệ có kiểm tra dữ liệu cơ bản.

5. Animation và tương tác

Sử dụng animation nhẹ nhàng, hiện đại:

Hero có hiệu ứng fade-in và chuyển động ảnh chậm.

Các section xuất hiện nhẹ khi cuộn.

Hình ảnh văn hóa có hiệu ứng zoom nhẹ khi hover.

Các thẻ chương trình có chuyển động tinh tế.

Có thể sử dụng đường nét hoặc họa tiết lấy cảm hứng từ nghệ thuật Thái để tạo điểm nhấn.

Hạn chế hiệu ứng nặng, chuyển động liên tục và parallax phức tạp.

6. Yêu cầu đầu ra

Xây dựng website hoàn chỉnh gồm đúng 4 trang chính, có hệ thống điều hướng, giao diện nhất quán và nội dung mẫu đầy đủ.

Tập trung vào chất lượng UI/UX, hình ảnh, typography và bản sắc thương hiệu. Website phải mang cảm giác của một trung tâm đào tạo tiếng Thái chuyên nghiệp, không phải website bán khóa học hoặc trang giới thiệu tour du lịch.

Không tự thêm trang thương mại điện tử, hệ thống đăng nhập học viên, LMS hoặc các chức năng ngoài phạm vi yêu cầu.
~~~

## Preset

### Preset: Minimal / Premium / Editorial (`editorial`)
Như tạp chí in: chữ lớn, lưới chặt, rất ít màu.

**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `paper` #F5F3EF · `ink` #111111 · `stone` #D9D4CB · `muted` #6B6760 · `bronze` #8C6A43
**Font** (Google Fonts): display `Instrument Serif:ital@0;1` · body `Geist:wght@300;400;500;600`

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
