# Brief website — THIÊN THẦN NHỎ

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** THIẾT KẾ WEBSITE GIỚI THIỆU TRƯỜNG MẦM NON THIÊN THẦN NHỎ
- **Tên thương hiệu / dự án:** **THIÊN THẦN NHỎ** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website đa trang giới thiệu TRƯỜNG MẦM NON THIÊN THẦN NHỎ, một môi trường giáo dục dành cho trẻ nhỏ, hướng đến sự phát triển toàn diện về thể chất, tư duy, cảm xúc và kỹ năng xã hội.

Website có mục đích giới thiệu hình ảnh nhà trường, triết lý giáo dục, chương trình học, cơ sở vật chất và các hoạt động thường ngày của trẻ. Đối tượng truy cập chính là phụ huynh đang tìm hiểu về môi trường học tập cho con.

Đây là website giới thiệu thuần túy, không phải website thương mại. Không có cửa hàng, giỏ hàng, giá bán, thanh toán trực tuyến hoặc chức năng mua sản phẩm.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Bold / Experimental / Creative** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** — BA chọn. Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Bricolage Grotesque:opsz,wght@12..96,400;12..96,800`, body `Bricolage Grotesque:opsz,wght@12..96,400;12..96,500`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Bricolage Grotesque`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Instrument Serif`: có trên Google Fonts nhưng **THIẾU ký tự tiếng Việt** ✗
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 4.428 ký tự, 115 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. Phong cách thiết kế

Art direction: Playful Preschool, Soft Pastel, Warm & Natural, Friendly Illustration.

Màu chủ đạo: kem #FFF9F0, xanh lá pastel #B8D8B0, vàng nhạt #F9D982, cam đào #F3B7A5.

Typography tròn, thân thiện, dễ đọc; tiêu đề nổi bật nhưng không quá cầu kỳ.

Sử dụng hình ảnh trẻ em vui chơi, lớp học sáng sủa, giáo viên tương tác với trẻ, hoạt động ngoài trời và góc học tập.

Trang trí bằng hình mây, ngôi sao, cầu vồng, hoa lá và các hình khối hữu cơ.

Bố cục thoáng, bo góc mềm mại, tạo cảm giác vui tươi, an toàn và đáng tin cậy.

Kết hợp ảnh chụp thực tế với minh họa dễ thương, tránh biến toàn bộ website thành giao diện hoạt hình.

3. Cấu trúc website — 4 trang

Trang 1: Trang chủ (Home)

Header: Logo THIÊN THẦN NHỎ, menu điều hướng và nút “Liên hệ với chúng tôi”.

Hero: Tiêu đề “Mỗi ngày đến trường là một ngày vui”, mô tả ngắn về môi trường giáo dục yêu thương, hình ảnh trẻ em vui vẻ cùng giáo viên.

Giới thiệu ngắn: Nhà trường là nơi trẻ được khám phá, học hỏi, vui chơi và phát triển theo nhịp độ riêng.

Triết lý giáo dục: Yêu thương, tôn trọng sự khác biệt, khuyến khích khám phá và phát triển toàn diện.

Chương trình nổi bật: Làm quen chữ và số, sáng tạo nghệ thuật, vận động thể chất, khám phá thiên nhiên.

Khám phá môi trường học tập: Giới thiệu lớp học, sân chơi, thư viện và các không gian sinh hoạt.

Khoảnh khắc tại trường: Gallery hình ảnh hoạt động thường ngày của các bé.

CTA cuối trang: Lời mời phụ huynh tìm hiểu thêm về nhà trường, dẫn đến trang Liên hệ.

Trang 2: Về chúng tôi (About Us)

Câu chuyện hình thành trường mầm non THIÊN THẦN NHỎ.

Sứ mệnh, tầm nhìn và những giá trị giáo dục cốt lõi.

Triết lý chăm sóc và giáo dục trẻ.

Đội ngũ giáo viên: Giới thiệu giáo viên, vai trò và tinh thần đồng hành cùng trẻ.

Cam kết về môi trường học tập thân thiện, an toàn và tôn trọng trẻ.

Hình ảnh không gian trường, giáo viên và các hoạt động cộng đồng.

Trang 3: Chương trình giáo dục (Our Programs)

Giới thiệu phương pháp giáo dục và cách tổ chức hoạt động học tập.

Phân chia chương trình theo nhóm tuổi: Nhà trẻ, mẫu giáo bé, mẫu giáo nhỡ và mẫu giáo lớn.

Các lĩnh vực phát triển: Ngôn ngữ, nhận thức, thể chất, tình cảm – kỹ năng xã hội và thẩm mỹ.

Hoạt động trải nghiệm: Vẽ tranh, âm nhạc, kể chuyện, vận động, khám phá khoa học và chăm sóc cây xanh.

Một ngày của bé: Đón trẻ, hoạt động buổi sáng, học tập, ăn uống, nghỉ ngơi, vui chơi và trả trẻ.

Trình bày bằng các thẻ nội dung, hình ảnh minh họa và timeline sinh động.

Trang 4: Thư viện & Liên hệ (Gallery & Contact)

Gallery ảnh hoạt động của trẻ, lớp học, sân chơi, sự kiện và ngày hội tại trường.

Có thể chia ảnh theo danh mục: Hoạt động học tập, vui chơi, nghệ thuật và sự kiện.

Thông tin liên hệ: Địa chỉ, số điện thoại, email và giờ làm việc; sử dụng dữ liệu mẫu có thể chỉnh sửa.

Bản đồ vị trí có thể được bố trí nếu có địa chỉ thực tế.

Form liên hệ đơn giản gồm họ tên phụ huynh, số điện thoại, email và nội dung cần trao đổi.

Nút gửi thông tin có trạng thái phản hồi phù hợp; nếu chưa có backend, sử dụng giao diện demo và thông báo rõ ràng.

4. Điều hướng và trải nghiệm người dùng

Header và footer thống nhất trên cả 4 trang.

Menu gồm: Trang chủ, Về chúng tôi, Chương trình giáo dục, Thư viện & Liên hệ.

Logo nhấn vào để quay về trang chủ.

Các CTA chỉ phục vụ điều hướng, tìm hiểu thông tin và liên hệ.

Có trạng thái hover cho nút, thẻ nội dung và hình ảnh.

Responsive tốt trên desktop, tablet và điện thoại.

Nội dung tiếng Việt tự nhiên, dấu tiếng Việt hiển thị chính xác.

5. Animation và tương tác

Sử dụng chuyển động nhẹ nhàng, phù hợp với thương hiệu mầm non:

Các hình mây, ngôi sao hoặc hoa lá chuyển động chậm ở Hero.

Nội dung xuất hiện nhẹ khi cuộn trang.

Hình ảnh và thẻ thông tin có hiệu ứng hover tinh tế.

Các chi tiết trang trí có thể chuyển động nổi nhẹ, không gây mất tập trung.

Ưu tiên CSS animation đơn giản, hạn chế hiệu ứng nặng và thư viện không cần thiết.

6. Yêu cầu đầu ra

Xây dựng website hoàn chỉnh gồm 4 trang có thể điều hướng thực tế, không chỉ tạo một landing page dài rồi chia thành các section.

Ưu tiên giao diện đẹp, thân thiện, có bản sắc riêng, hình ảnh phù hợp với giáo dục mầm non và trải nghiệm dễ sử dụng cho phụ huynh.

Không tự thêm chức năng thương mại điện tử, tài khoản học sinh, hệ thống quản lý trường học hoặc các tính năng backend ngoài phạm vi yêu cầu. Thông tin chưa được cung cấp phải dùng nội dung mẫu hợp lý để dễ thay thế sau này.
~~~

## Preset

### Preset: Bold / Experimental / Creative (`bold`)
Chữ khổng lồ, khối màu mạnh, phá lưới có kiểm soát.

**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `paper` #F2EFE6 · `ink` #0F0F0F · `signal` #FF4D1F · `cobalt` #2340FF · `acid` #E9FF3B
**Font** (Google Fonts): display `Bricolage Grotesque:opsz,wght@12..96,400;12..96,800` · body `Bricolage Grotesque:opsz,wght@12..96,400;12..96,500` · nhãn `Instrument Serif`

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
