# Brief website — NEXMOTION INDUSTRIES

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website Giowis thiệu xưởng cơ khí NEXMOTION INDUSTRIES
- **Tên thương hiệu / dự án:** **NEXMOTION INDUSTRIES** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu doanh nghiệp NEXMOTION INDUSTRIES, chuyên về cơ khí chính xác, chế tạo linh kiện máy và giải pháp tự động hóa công nghiệp.

Slogan: “Precision Engineered. Progress Delivered.”

Website truyền tải hình ảnh một doanh nghiệp cơ khí hiện đại, có năng lực kỹ thuật chuyên nghiệp, quy trình sản xuất bài bản và định hướng phát triển công nghệ.

Đây là website nhiều trang (Multi-page Website), không phải One-page Landing Page. Mỗi mục chính trên thanh điều hướng phải có trang riêng với URL, nội dung và bố cục phù hợp. Không gom toàn bộ nội dung vào một trang cuộn dài.

Website chỉ phục vụ mục đích giới thiệu doanh nghiệp, không có thương mại điện tử, giỏ hàng, thanh toán hoặc quản lý đơn hàng.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
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
  - Tool kiểm tra font preset: `Instrument Serif`: có trên Google Fonts nhưng **THIẾU ký tự tiếng Việt** ✗
  - Tool kiểm tra font preset: `Geist`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 5.416 ký tự, 223 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. Phong cách thiết kế

Sử dụng phong cách Modern Industrial kết hợp Swiss Engineering và Clean Technology.

Bảng màu:

Deep Navy: #102A43 — màu nhận diện chính.

Ice White: #F7FAFC — màu nền chủ đạo.

Steel Blue: #627D98 — màu phụ.

Mint Green: #5DD6B0 — màu nhấn.

Graphite: #243B53 — màu chữ và các khối nội dung đậm.

Giao diện sáng, hiện đại, chuyên nghiệp; sử dụng typography rõ ràng, khoảng trắng rộng, hình ảnh máy CNC, robot công nghiệp, linh kiện kim loại và nhà xưởng hiện đại.

3. Cấu trúc website nhiều trang

Trang 1 — Home (/)

Trang chủ giới thiệu tổng quan doanh nghiệp và dẫn người dùng đến các nội dung quan trọng.

Các section:

Hero với tiêu đề “ENGINEERING THE NEXT LEVEL OF PRECISION.”

Giới thiệu ngắn về NEXMOTION INDUSTRIES.

Các năng lực nổi bật.

Hình ảnh công nghệ và máy móc.

Quy trình sản xuất tổng quan.

Dự án tiêu biểu.

Lĩnh vực phục vụ.

CTA dẫn đến trang liên hệ.

Trang 2 — About Us (/about)

Giới thiệu chi tiết về doanh nghiệp:

Tổng quan và định hướng phát triển.

Sứ mệnh, tầm nhìn và giá trị cốt lõi.

Triết lý kỹ thuật và văn hóa chất lượng.

Đội ngũ kỹ thuật và môi trường làm việc.

Hình ảnh doanh nghiệp và nhà xưởng.

Thiết kế theo phong cách corporate editorial, kết hợp hình ảnh lớn với nội dung có chiều sâu.

Trang 3 — Capabilities (/capabilities)

Trình bày chi tiết năng lực chuyên môn:

CNC Precision Machining.

Mechanical Components.

Metal Fabrication.

Industrial Automation.

Technical Engineering.

Mỗi nhóm có hình ảnh riêng, mô tả ứng dụng, quy trình liên quan và các thông tin kỹ thuật có thể cập nhật. Có thể sử dụng layout chia cột hoặc các khối nội dung xen kẽ.

Trang 4 — Technology (/technology)

Giới thiệu hệ thống công nghệ và thiết bị:

Máy CNC và thiết bị gia công.

Hệ thống tự động hóa.

Thiết bị đo kiểm và kiểm soát chất lượng.

Vật liệu và công nghệ gia công.

Quy trình sản xuất và kiểm tra kỹ thuật.

Sử dụng hình ảnh cận cảnh, bố cục kỹ thuật, chú thích và sơ đồ minh họa. Không tự tạo thông số máy hoặc chứng nhận chưa có dữ liệu.

Trang 5 — Projects (/projects)

Trang portfolio giới thiệu các dự án và sản phẩm cơ khí tiêu biểu.

Bao gồm:

Lưới dự án với hình ảnh lớn.

Tên dự án và lĩnh vực ứng dụng.

Mô tả kỹ thuật ngắn.

Bộ lọc danh mục nếu phù hợp.

Mỗi dự án có thể mở một trang chi tiết riêng theo cấu trúc /projects/project-name, trình bày bài toán kỹ thuật, phương án thực hiện, hình ảnh và kết quả. Nếu chưa có dự án thật, sử dụng dữ liệu minh họa có đánh dấu rõ ràng.

Trang 6 — Quality & Process (/quality-process)

Giới thiệu quy trình làm việc và định hướng kiểm soát chất lượng:

Tiếp nhận yêu cầu kỹ thuật.

Phân tích bản vẽ và vật liệu.

Lập phương án gia công.

Thực hiện sản xuất.

Kiểm tra chất lượng.

Hoàn thiện sản phẩm.

Trình bày bằng timeline, sơ đồ quy trình và hình ảnh minh họa. Làm rõ cách doanh nghiệp chú trọng tính chính xác, tính nhất quán và khả năng kiểm soát sản xuất.

Trang 7 — Industries (/industries)

Giới thiệu các ngành nghề và lĩnh vực ứng dụng:

Sản xuất công nghiệp.

Tự động hóa nhà máy.

Máy móc và thiết bị kỹ thuật.

Công nghiệp phụ trợ.

Chế tạo và lắp ráp cơ khí.

Mỗi lĩnh vực có hình ảnh, mô tả nhu cầu kỹ thuật và vai trò của năng lực cơ khí.

Trang 8 — Contact (/contact)

Trang thông tin liên hệ riêng:

Địa chỉ doanh nghiệp hoặc nhà máy.

Email và số điện thoại.

Thời gian làm việc.

Bản đồ vị trí nếu có địa chỉ thực tế.

Biểu mẫu liên hệ đơn giản nếu triển khai được.

Thông tin mẫu phải dễ chỉnh sửa. Không tự tạo địa chỉ hoặc thông tin liên hệ giả rồi trình bày như dữ liệu thật.

4. Header và Footer

Header:

Logo NEXMOTION INDUSTRIES.

Menu: Home, About Us, Capabilities, Technology, Projects, Quality & Process, Industries, Contact.

Có trạng thái active cho trang hiện tại.

Responsive với menu mobile.

Có thể dùng header sticky khi cuộn.

Footer:

Logo và mô tả ngắn về doanh nghiệp.

Các liên kết đến tất cả trang chính.

Thông tin liên hệ.

Liên kết mạng xã hội nếu có.

Bản quyền website.

Header và footer cần nhất quán trên tất cả các trang.

5. Animation và tương tác

Hero có hiệu ứng xuất hiện nội dung và hình ảnh nhẹ nhàng.

Các section sử dụng scroll reveal vừa phải.

Hình ảnh dự án có hiệu ứng zoom nhẹ khi hover.

Menu có trạng thái active và chuyển trang rõ ràng.

Card có hiệu ứng chuyển màu tinh tế theo bảng màu mint.

Chuyển động mượt nhưng không gây chậm tải trang.

Không lạm dụng 3D, neon hoặc hiệu ứng công nghiệp quá phức tạp.

6. Yêu cầu kỹ thuật

Xây dựng website nhiều trang thực sự, có routing và URL riêng cho từng trang.

Mỗi trang phải có nội dung riêng, không chỉ sao chép cùng một layout rồi thay tiêu đề.

Các liên kết điều hướng hoạt động chính xác.

Có thể truy cập trực tiếp từng URL và tải lại trang mà không lỗi.

Responsive trên desktop, tablet và mobile.

Tái sử dụng các thành phần chung như Header, Footer, Button và Project Card.

Duy trì nhất quán màu sắc, typography, khoảng cách và phong cách hình ảnh.

Sử dụng dữ liệu mẫu có cấu trúc, dễ thay thế.

Không tạo chức năng thương mại điện tử hoặc quản lý nội bộ.

Kiểm tra lỗi giao diện, liên kết hỏng, tràn ngang và khả năng sử dụng trên thiết bị di động.

Kết quả mong muốn: Một website doanh nghiệp cơ khí nhiều trang, có kiến trúc điều hướng rõ ràng, mỗi trang đảm nhận một mục đích giới thiệu riêng. Thiết kế mang phong cách công nghiệp hiện đại với bảng màu navy – trắng – mint, hình ảnh kỹ thuật chất lượng cao và trải nghiệm nhất quán trên toàn bộ website.
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
