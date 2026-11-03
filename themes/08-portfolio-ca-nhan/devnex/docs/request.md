# Brief — DEVNEX

- **Chủ đề:** Website portfolio cá nhân
- **Thương hiệu / dự án:** DEVNEX
- **Tagline:** _(để trống — AI tự quyết định)_
- **Danh mục:** _(chưa có)_
- **Mục đích:** Thiết kế và triển khai một landing page Portfolio & CV cho lập trình viên mang thương hiệu cá nhân DEVNEX.

Website phải thể hiện được năng lực lập trình, tư duy giải quyết vấn đề, kinh nghiệm thực tế và phong cách làm việc chuyên nghiệp.
- **Phong cách:** Corporate / Professional (tool tự nhận diện)
- **Mức chuyển động:** Theo phong cách (Level 1)
- **Ngôn ngữ website:** Vietnamese — Tiếng Việt
- **Màu sắc:** Bảng màu:  Background chính: #0B0F14.  Background section: #111820.  Background card: #151D27.  Màu chữ chính: #F3F6FA.  Màu chữ phụ: #9AA7B5.  Màu nhấn xanh neon: #A3FF68.  Border: rgba(255,255,255,0.10).
- **Font chữ:** Typography:  Tiêu đề: Space Grotesk.  Nội dung: Inter.  Các đoạn code, nhãn kỹ thuật: JetBrains Mono.

## Section / nhóm nội dung

_(không chọn — AI tự đề xuất sitemap)_

## Chú thích bổ sung

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

## Góp ý đã sửa

- 11:02:40 24/10/2026: Bạn ơi các thông tin về portfolio này có thể chi tiết hơn không vì đây là prototype mẫu á . Bịa thông tin giúp tui đi
