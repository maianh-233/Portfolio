# Prompt đã dùng — DEVNEX

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
# Brief website — DEVNEX

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website portfolio cá nhân
- **Tên thương hiệu / dự án:** **DEVNEX** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế và triển khai một landing page Portfolio & CV cho lập trình viên mang thương hiệu cá nhân DEVNEX.

Website phải thể hiện được năng lực lập trình, tư duy giải quyết vấn đề, kinh nghiệm thực tế và phong cách làm việc chuyên nghiệp.
- **Đối tượng khách truy cập:** Đối tượng xem website:  Nhà tuyển dụng công nghệ.  HR tuyển dụng IT.  Technical Lead.  Khách hàng cần thuê freelancer.  Các doanh nghiệp tìm kiếm đối tác phát triển phần mềm.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Corporate / Professional** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** (mặc định của preset). Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA yêu cầu: «Bảng màu:  Background chính: #0B0F14.  Background section: #111820.  Background card: #151D27.  Màu chữ chính: #F3F6FA.  Màu chữ phụ: #9AA7B5.  Màu nhấn xanh neon: #A3FF68.  Border: rgba(255,255,255,0.10).» — **ưu tiên tuyệt đối**, thay bảng màu preset. Mã HEX dùng đúng mã; tên / mô tả màu → chọn giá trị HEX cụ thể sát nghĩa nhất.
- Tự dựng thêm màu bổ trợ (nền, chữ, viền, trạng thái) hài hòa. Chữ trên nền đạt tương phản WCAG AA (≥ 4.5:1 thân bài, ≥ 3:1 chữ lớn).
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA yêu cầu font: «Typography:  Tiêu đề: Space Grotesk.  Nội dung: Inter.  Các đoạn code, nhãn kỹ thuật: JetBrains Mono.» — dùng đúng font này, **không tự đổi** nếu font dùng được.
  - Tool kiểm tra: `Typography`: **không có trên Google Fonts** (không có trên Google Fonts)
  - Thiếu ký tự / không có trên Google Fonts → vẫn đặt font BA yêu cầu đầu tiên trong `font-family`, ngay sau là fallback `"Be Vietnam Pro"` (nạp từ Google Fonts) rồi `system-ui, "Segoe UI", Roboto, Arial, sans-serif` — ký tự thiếu sẽ hiển thị bằng fallback. Ghi quyết định vào `adjustments`.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 6.878 ký tự, 432 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. ĐỊNH HƯỚNG THỊ GIÁC

Phong cách chủ đạo: Dark Developer Portfolio.

Kết hợp ba ngôn ngữ thiết kế:

Giao diện lập trình viên hiện đại.

Terminal và code editor.

Portfolio cá nhân có tính thẩm mỹ cao.

Bảng màu:

Background chính: #0B0F14.

Background section: #111820.

Background card: #151D27.

Màu chữ chính: #F3F6FA.

Màu chữ phụ: #9AA7B5.

Màu nhấn xanh neon: #A3FF68.

Border: rgba(255,255,255,0.10).

Typography:

Tiêu đề: Space Grotesk.

Nội dung: Inter.

Các đoạn code, nhãn kỹ thuật: JetBrains Mono.

Sử dụng hệ thống khoảng cách nhất quán, lưới bố cục rõ ràng và các đường viền mảnh. Tránh tạo quá nhiều card nhỏ khiến trang giống dashboard quản trị.

3. CẤU TRÚC HEADER

Thiết kế header nền tối, chiều cao khoảng 76px trên desktop.

Bên trái:

Logo chữ DEVNEX.

Có thể bổ sung ký hiệu nhỏ </> trước logo.

Ở giữa:

About.

Skills.

Projects.

Experience.

Education.

Bên phải:

Nút Download CV.

Chỉ báo trạng thái Available for Opportunities nếu người dùng bật tùy chọn này.

Yêu cầu:

Header cố định khi cuộn trang.

Menu cuộn đến đúng section.

Section đang được xem có trạng thái active.

Trên mobile, chuyển thành menu thu gọn.

Không để header che tiêu đề section khi điều hướng.

4. HERO SECTION — GIỚI THIỆU NỔI BẬT

Chiều cao khoảng 85–100vh trên desktop, nhưng không ép nội dung vượt quá màn hình trên thiết bị nhỏ.

Chia bố cục thành hai cột:

Cột trái chiếm khoảng 58%.

Cột phải chiếm khoảng 42%.

Cột trái:

Hiển thị nhãn nhỏ:
SOFTWARE ENGINEER / FULL-STACK DEVELOPER

Tiêu đề chính:
"Building Digital
Experiences That Work."

Tên cá nhân hiển thị nổi bật bên dưới hoặc kết hợp với tiêu đề tùy phương án thiết kế.

Đoạn giới thiệu:
Một đoạn 2–3 câu mô tả chuyên môn, thế mạnh kỹ thuật và định hướng phát triển.

Ví dụ nội dung minh họa:
"I build reliable web applications with a focus on clean architecture, thoughtful user experiences, and maintainable code."

Hai nút:

Explore My Work.

Download Resume.

Bên dưới có các thông tin ngắn:

Địa điểm làm việc.

Chuyên môn chính.

Số năm kinh nghiệm nếu có dữ liệu.

Email liên hệ.

Không tự khẳng định số năm kinh nghiệm nếu chưa được cung cấp.

Cột phải:

Tạo một khối terminal lớn, thiết kế như cửa sổ code editor.

Bao gồm:

Thanh tiêu đề với ba nút trang trí.

Tên tệp profile.ts hoặc developer.json.

Syntax highlighting.

Các trường name, role, skills và availability.

Ví dụ:

const developer = {
role: "Software Engineer",
focus: ["Web Development", "APIs"],
mindset: "Build. Test. Improve."
};

Có hiệu ứng xuất hiện từng dòng khi trang được tải.

Đoạn code chỉ phục vụ trình bày, không cần chạy như ứng dụng thực tế.

5. ABOUT ME — GIỚI THIỆU BẢN THÂN

Thiết kế section với bố cục hai cột.

Cột trái:

Tiêu đề ABOUT ME.

Một câu giới thiệu nổi bật.

Nội dung mô tả bản thân dài khoảng 100–150 từ.

Cột phải:

Phương pháp làm việc.

Các lĩnh vực quan tâm.

Mục tiêu nghề nghiệp.

Một hình ảnh cá nhân hoặc hình minh họa tối giản.

Bổ sung ba nhãn:
PROBLEM SOLVING.
CONTINUOUS LEARNING.
CLEAN CODE.

Mỗi nhãn có một câu giải thích ngắn.

Không sử dụng những lời giới thiệu chung chung lặp đi lặp lại. Nội dung phải có khả năng thay thế bằng thông tin cá nhân thật.

6. TECH STACK — NĂNG LỰC KỸ THUẬT

Chia thành các nhóm:

Frontend:

HTML.

CSS.

JavaScript.

TypeScript.

React.

Vue hoặc framework phù hợp.

Backend:

Node.js.

Express.

Java, Python hoặc ngôn ngữ phù hợp với hồ sơ.

Database:

MySQL.

PostgreSQL.

MongoDB.

Tools:

Git.

GitHub.

Docker.

Postman.

VS Code.

Không mặc định tất cả công nghệ đều là kỹ năng của nhân vật. Danh sách phải dễ chỉnh sửa.

Cách hiển thị:

Các nhóm kỹ năng có tiêu đề riêng.

Icon hoặc logo công nghệ.

Nhãn mức độ thành thạo nếu có dữ liệu.

Trạng thái hover đổi border sang màu xanh neon.

Không dùng thanh kỹ năng 95%, 90% tùy tiện. Nếu không có thang đánh giá đáng tin cậy, hãy dùng nhóm Beginner, Intermediate, Advanced hoặc chỉ liệt kê công nghệ.

7. FEATURED PROJECTS — DỰ ÁN TIÊU BIỂU

Hiển thị 3–4 dự án.

Không trình bày tất cả dự án bằng các card giống nhau.

Thiết kế một dự án nổi bật chiếm chiều rộng lớn, các dự án còn lại có bố cục xen kẽ.

Mỗi dự án cần có:

Tên dự án.

Ảnh screenshot hoặc mockup.

Loại dự án.

Mô tả vấn đề cần giải quyết.

Giải pháp đã triển khai.

Vai trò cá nhân.

Công nghệ sử dụng.

Kết quả thực tế nếu có.

Liên kết GitHub.

Liên kết Live Demo nếu tồn tại.

Ví dụ dự án minh họa:
Realtime Chat Application.

Mô tả:
A real-time messaging application designed to support responsive communication between users.

Tech stack:
Node.js, Express, WebSocket hoặc công nghệ thực tế của dự án.

Nút tương tác:

View Case Study.

GitHub Repository.

Live Demo.

Nếu chưa có URL, không tạo liên kết giả. Có thể ẩn nút hoặc đánh dấu chưa cấu hình.

8. EXPERIENCE — KINH NGHIỆM LÀM VIỆC

Sử dụng timeline dọc với đường kẻ mảnh màu xanh neon.

Mỗi mục gồm:

Chức danh.

Công ty hoặc tổ chức.

Thời gian.

Trách nhiệm chính.

Công nghệ sử dụng.

Thành tựu có thể kiểm chứng.

Cho phép hiển thị cả:

Thực tập.

Công việc chính thức.

Freelance.

Dự án cá nhân.

Không tự tạo tên công ty hoặc thành tích.

9. EDUCATION & CERTIFICATIONS

Hiển thị học vấn, trường học, chuyên ngành, thời gian học và chứng chỉ nếu có.

Bố cục gọn, không chiếm quá nhiều diện tích.

Nếu người dùng chưa cung cấp thông tin, hiển thị nội dung mẫu có nhãn PLACEHOLDER.

10. CONTACT SECTION

Thiết kế section nổi bật với tiêu đề:

"Have a Project in Mind?"

Thông tin:

Email.

GitHub.

LinkedIn.

Địa điểm.

Trạng thái sẵn sàng làm việc nếu có.

Có thể tạo biểu mẫu liên hệ gồm:

Name.

Email.

Subject.

Message.

Nếu chưa có backend, cần thông báo rõ rằng biểu mẫu chưa được kết nối. Không hiển thị thông báo gửi thành công giả.

11. ANIMATION VÀ MICRO-INTERACTION

Terminal xuất hiện theo từng dòng.

Các section fade-in khi cuộn.

Thẻ dự án nâng nhẹ khi hover.

Nút bấm có transition 200–300ms.

Đường timeline được làm nổi bật khi section xuất hiện.

Có thể dùng nền lưới kỹ thuật mờ.

Không tạo hiệu ứng glitch liên tục.

Tôn trọng prefers-reduced-motion.

12. RESPONSIVE

Desktop:

Bố cục hai cột.

Dự án dạng editorial grid.

Khoảng trắng rộng.

Tablet:

Giảm khoảng cách.

Điều chỉnh kích thước terminal.

Dự án chuyển thành lưới hai cột.

Mobile:

Bố cục một cột.

Terminal không vượt chiều rộng màn hình.

Menu thu gọn.

Nút bấm dễ chạm.

Không có cuộn ngang.

13. YÊU CẦU KỸ THUẬT VÀ NGHIỆM THU

Chỉ một landing page.

Các mục điều hướng dùng anchor.

Không tạo trang con.

Không tạo chức năng thương mại điện tử.

Tối ưu ảnh.

Đảm bảo tương phản màu sắc.

Có alt text cho ảnh.

Có focus state cho thành phần tương tác.

Không để nút giả hoạt động như nút thật.

Có thể thay toàn bộ dữ liệu cá nhân.

Kiểm tra các kích thước desktop, tablet và mobile.

KẾT QUẢ MONG MUỐN:

Một portfolio lập trình viên mang tính công nghệ rõ rệt, có chiều sâu thị giác, thể hiện năng lực kỹ thuật và đủ chuyên nghiệp để sử dụng làm CV trực tuyến.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Sản phẩm công nghệ / app** (`recipe:tech-product`, chưa đánh giá): Hero-split ảnh sản phẩm → features-bento → features-tabs luồng dùng → stats-band → cta-sky. Giới thiệu sản phẩm, không dựng chính phần mềm.
- **Trung tâm giáo dục / ngoại ngữ** (`recipe:education-center`, chưa đánh giá): Hero-split (học viên thật) → stats-band (chỉ số có thật) → features-tabs khóa học → timeline lộ trình → quote-full → contact-split (form đăng ký học thử = bản demo). Trang: Khóa học + chi tiết khóa, Giáo viên, Liên hệ.

**Bố cục gợi ý**
- **Hero chia đôi chữ – ảnh** (`composition:hero-split`, chưa đánh giá, đã dùng 1 lần): Chữ 5–6/12 cột trái, ảnh tràn mép phải ở lg+; mobile chữ → ảnh.
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **Tab dịch vụ** (`composition:features-tabs`, chưa đánh giá, đã dùng 1 lần): `data-tabs` của ui.js: tab trái, ảnh + mô tả phải.
- **Câu chuyện như lá thư** (`composition:story-letter`, chưa đánh giá, đã dùng 1 lần): Khối chữ hẹp đặt lệch, ảnh dọc nhỏ + chú thích, chữ ký cuối.

**Chuyển động gợi ý**
- **Số đếm** (`motion:count-up`, chưa đánh giá): `data-count-to="1284" data-suffix="+"`, viết sẵn giá trị cuối trong thẻ. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).

**Tránh lặp:** các website dựng gần đây đã dùng `hero-split`, `features-bento`, `gallery-masonry`, `cta-sky` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Corporate / Professional (`corporate`)
Chuyên nghiệp, đáng tin, dễ đọc — thông tin rõ ràng.

**Hợp với:** tư vấn, luật, tài chính / bảo hiểm, công ty B2B, giới thiệu sản phẩm phần mềm
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `white` #FFFFFF · `mist` #F4F6F8 · `navy` #0F2A47 · `blue` #1F5FBF · `slate` #4A5868 · `line` #DCE2E8 · `gold` #C9A227
**Font** (Google Fonts): display `Lexend:wght@500;600;700` · body `Source Sans 3:wght@400;600`

**Thành phần giao diện**
- Nút chữ nhật bo 6px nền blue; nút phụ viền
- Thẻ trắng viền line bo 8px, bóng rất nhẹ; icon nét đơn
**Chữ**
- Tiêu đề Lexend 600 cỡ vừa phải (clamp 2.5rem → 4.5rem); thân Source Sans 3 17px; phân cấp H1 / H2 / H3 rõ, dòng ≤ 70 ký tự.
**Bố cục**
- Lưới 12 cột đều; hero-split chữ + ảnh người thật làm việc; dải số liệu tin cậy; logo đối tác.
- Nền trắng / mist xen kẽ; một dải navy cho số liệu hoặc CTA.
**Ảnh**
- Ảnh thật con người, văn phòng, buổi làm việc, ánh sáng tự nhiên; tránh ảnh bắt tay dàn dựng.
**Khoảng trắng:** Cân đối: `py-20 lg:py-28`.
**Chuyển động mặc định:** Level 1 — Basic
- `data-reveal="up"`, `data-count-to`, `data-header="shrink"`; hover nâng thẻ nhẹ. Không particles / cursor / tilt.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-split` → `features-numbered` → `stats-band` → `features-tabs` → `quote-full` → `contact-split` → `footer-big`
**Tránh:** hiệu ứng phô trương; màu bão hòa; font trang trí
~~~~

## 3. Các lượt sửa (MODE `quick-revise`, mỗi lượt là một prompt góp ý)

### Lượt 1 — 11:02:40 24/10/2026

Bạn ơi các thông tin về portfolio này có thể chi tiết hơn không vì đây là prototype mẫu á . Bịa thông tin giúp tui đi
