# Brief website — MANGA CHRONICLE

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Web Quảng cáo du lịch khám phá các studio manga Nhật Bản
- **Tên thương hiệu / dự án:** **MANGA CHRONICLE** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế và xây dựng website MANGA CHRONICLE, một nền tảng giới thiệu và khám phá văn hóa manga Nhật Bản. Đây là website nhiều trang, không phải landing page, không có chức năng mua bán.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Bold / Experimental / Creative** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 2 — Atmospheric** (mặc định của preset). Được dùng: thêm `data-split`, `data-reveal="clip"`, `data-reveal-stagger`, `data-parallax` ≤ 0.2, marquee, kéo ngang; atmos.js: `data-float`, `data-gradient-shift`, `data-clouds` / `data-particles` ở **một** section trên mỗi trang.
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

> Nguyên văn, 4.592 ký tự, 139 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
. Phong cách thiết kế

Xây dựng giao diện theo phong cách Mysterious Archive Editorial — kho lưu trữ bí ẩn kết hợp tạp chí văn hóa.

Màu chủ đạo: giấy ngà #F0E8D8, đen mực #242321, đỏ son #A6382B, nâu lưu trữ #81735F.

Typography mang phong cách tạp chí nghệ thuật, tiêu đề serif nổi bật, nội dung dễ đọc.

Hình ảnh gợi cảm giác hồ sơ cũ, giấy lưu trữ, nét mực, bản phác thảo, thư viện và không gian văn hóa Nhật Bản.

Bố cục biên tập bất đối xứng, có khoảng trắng, hình ảnh lớn và các nhãn hồ sơ như ARCHIVE NO. 001.

Animation nhẹ: nội dung xuất hiện khi cuộn, ảnh phóng nhẹ khi hover, dấu đóng lưu trữ xuất hiện tinh tế.

Tránh hiệu ứng 3D phức tạp, glitch, neon và chuyển động gây rối.

Thông điệp thương hiệu: “Mỗi trang truyện là một dấu vết lịch sử.”

Toàn bộ giao diện sử dụng tiếng Việt, ngoại trừ tên riêng và thuật ngữ cần giữ nguyên.

2. Chỉ xây dựng 3 trang chính

Trang 1 — Trang chủ /

Header có logo MANGA CHRONICLE, menu điều hướng và biểu tượng tìm kiếm.

Hero mang cảm giác mở một kho lưu trữ bí mật, gồm tiêu đề lớn, hình ảnh manga-related hợp pháp và nút “Bắt đầu khám phá”.

Khu vực “Hồ sơ nổi bật”: các thẻ giới thiệu tác giả, tác phẩm và câu chuyện lịch sử.

Khu vực “Dòng thời gian manga”: giới thiệu một số giai đoạn lịch sử có nguồn xác minh.

Khu vực “Phía sau trang truyện”: giới thiệu quá trình sáng tác manga.

Khu vực “Dấu tích manga tại Nhật Bản”: giới thiệu các bảo tàng hoặc địa điểm văn hóa có thật.

Khu vực bài viết mới và footer.

Trang chủ phải có chiều sâu thị giác, không chỉ là danh sách các thẻ xếp nối tiếp nhau.

Trang 2 — Kho lưu trữ /kho-luu-tru

Đây là trang khám phá nội dung tổng hợp, gộp các chuyên mục lịch sử, mangaka, tác phẩm, nghệ thuật sáng tác và địa điểm.

Có tiêu đề “Kho lưu trữ manga”.

Hiển thị các thẻ nội dung với ảnh, tên, mô tả ngắn, danh mục và liên kết xem chi tiết.

Bộ lọc gồm: Tất cả, Lịch sử, Tác giả, Tác phẩm, Nghệ thuật sáng tác, Địa điểm.

Có ô tìm kiếm theo tên tác giả, tác phẩm hoặc chủ đề.

Có thể lọc nội dung bằng JavaScript phía giao diện, không cần xây dựng backend trong bản thử nghiệm.

Khi nhấp vào thẻ, mở trang chi tiết tương ứng.

Trang 3 — Chi tiết hồ sơ /ho-so/:slug

Dùng một template chung để hiển thị nội dung chi tiết của từng hồ sơ. Không tạo một trang riêng cho mỗi tác giả hoặc tác phẩm trong giai đoạn test.

Template gồm:

Đường dẫn điều hướng phân cấp.

Nhãn danh mục và mã hồ sơ.

Tiêu đề lớn, ảnh đại diện và phần giới thiệu.

Nội dung chính được chia thành các mục rõ ràng.

Thông tin lịch sử, tác giả hoặc bối cảnh liên quan nếu có căn cứ.

Khu vực nguồn tham khảo.

Các hồ sơ liên quan ở cuối trang.

Nút quay lại kho lưu trữ.

Dữ liệu mẫu có thể gồm hồ sơ tác giả, tác phẩm manga, giai đoạn lịch sử, kỹ thuật sáng tác và địa điểm văn hóa. Các hồ sơ sử dụng chung một template nhưng nội dung phải phù hợp với từng loại.

3. Điều hướng và chức năng

Menu chính chỉ gồm:

Trang chủ

Kho lưu trữ

Giới thiệu

Mục “Giới thiệu” có thể là một khu vực ngắn ở cuối trang chủ hoặc một trang đơn giản nếu cần.

Yêu cầu chức năng:

Điều hướng giữa 3 trang hoạt động.

Bộ lọc và tìm kiếm có thể sử dụng được.

Thẻ nội dung mở đúng hồ sơ.

Có trạng thái đang chọn cho bộ lọc.

Có giao diện responsive cho desktop và điện thoại.

Có trạng thái không tìm thấy kết quả.

Không tạo nút giả hoặc liên kết hỏng.

4. Nội dung và bản quyền

Chỉ sử dụng thông tin lịch sử, tác giả, tác phẩm và địa điểm có thể xác minh.

Không bịa trích dẫn, sự kiện hậu trường, ngày tháng hoặc địa điểm.

Không sử dụng tranh manga, bìa truyện, nhân vật hoặc logo có bản quyền nếu chưa có quyền sử dụng.

Ưu tiên hình ảnh được cấp phép, tư liệu có quyền sử dụng hoặc hình minh họa nguyên bản.

Nếu nội dung chỉ để minh họa giao diện, ghi rõ đó là dữ liệu mẫu.

Không giả làm ảnh lịch sử thật bằng hình ảnh AI.

5. Yêu cầu kỹ thuật và giới hạn triển khai

Ưu tiên tạo ra kết quả trực quan nhanh, hoàn chỉnh và có thể tương tác.

Chỉ triển khai 3 template trang; dùng dữ liệu mẫu để tái sử dụng template chi tiết.

Không tạo hàng loạt trang riêng, không xây dựng CMS hoặc backend phức tạp trong bản test.

Tách dữ liệu nội dung khỏi giao diện để dễ thay thế sau này.

Tối ưu ảnh, responsive, cấu trúc HTML và khả năng đọc.

Giữ code gọn, tránh thư viện không cần thiết.

Không hy sinh chất lượng giao diện để chạy theo số lượng nội dung.

Mục tiêu: Hoàn thành một bản prototype MANGA CHRONICLE có thể chạy thử ngay, thể hiện rõ phong cách kho lưu trữ manga bí ẩn, có 3 template trang, dữ liệu mẫu, điều hướng và tương tác thực tế. Hãy ưu tiên hoàn thiện bản thử nghiệm này trước, không mở rộng phạm vi khi chưa được yêu cầu.
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
