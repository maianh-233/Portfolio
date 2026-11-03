# Prompt triển khai — BrightPath (EDU-01)

Công cụ: Claude Code (Claude Opus 5.5) · Ngày: 19/10/2026.
Tài liệu kèm theo trong phiên: `QUY_CHUAN_DEV_THEME_AI.md` (quy chuẩn lưu trữ local dự án theme).
Các prompt dưới đây được lưu nguyên văn, theo thứ tự sử dụng. Prompt 4 là prompt triển khai chính; các prompt sau đó là yêu cầu chỉnh sửa có ảnh hưởng tới kết quả.

---

## Prompt 1 — Thiết lập EDU Collection V1

```text
Bạn là nhóm chuyên gia gồm:
- Senior Business Analyst
- SRS Engineer
- Education Product Specialist
- Creative Art Director
- Senior UI/UX Designer
- Senior HTML/CSS/JavaScript Engineer
- Frontend QA Engineer

# PROJECT

LASA 1000 Themes — EDU Collection V1.

Mục tiêu: Sản xuất 5 website template HTML dành cho thị trường giáo dục Việt Nam.

Danh sách:
- EDU-01: BrightPath — Trung tâm ngoại ngữ
- EDU-02: Little Garden — Mầm non Montessori
- EDU-03: EduNova — Nền tảng khóa học online
- EDU-04: Horizon — Trường cao đẳng/đại học
- EDU-05: CodeForge — Trung tâm đào tạo lập trình

Mỗi theme có chính xác 3 trang HTML.

# CÔNG NGHỆ

- HTML5
- CSS3
- Vanilla JavaScript ES6+
- CSS Grid/Flexbox
- CSS Custom Properties
- Không React, Vue, Next.js, Angular
- Không backend, database, CMS
- Không npm hoặc build tool bắt buộc
- Mỗi website hoạt động độc lập trên static hosting

# THỊ TRƯỜNG VIỆT NAM

- Toàn bộ giao diện tiếng Việt.
- HTML lang="vi".
- Nội dung phù hợp phụ huynh, học sinh, sinh viên và người đi làm tại Việt Nam.
- Font hỗ trợ dấu tiếng Việt.
- Tiền tệ VNĐ.
- Ngày tháng DD/MM/YYYY.
- CTA phù hợp: Tư vấn khóa học, Đăng ký tham quan, Xem chương trình, Nhận tư vấn tuyển sinh.
- SEO metadata tiếng Việt.
- Không dùng Lorem Ipsum.
- Không bịa giấy phép giáo dục, chứng nhận, đối tác, giảng viên, học phí thực tế, đánh giá học viên, tỷ lệ đầu ra hay kết quả đào tạo.

# THƯ MỤC

lasa-edu-themes/
  AGENTS.md
  README.md
  docs/
    DESIGN-STANDARDS.md
    QA-CHECKLIST.md
    THEME-REGISTRY.md
  themes/
    edu-01-brightpath/
    edu-02-little-garden/
    edu-03-edunova/
    edu-04-horizon/
    edu-05-codeforge/

Nếu repository đã có AGENTS.md hoặc tài liệu dùng chung, tái sử dụng và bổ sung, không tạo bản trùng lặp.

# TÀI LIỆU BẮT BUỘC MỖI THEME

docs/SRS.md:
1. Mục tiêu kinh doanh và phạm vi
2. Đối tượng sử dụng
3. User stories
4. Business workflows
5. Sitemap đúng 3 trang
6. Functional Requirements có mã FR
7. Business Rules có mã BR
8. Data Requirements
9. Non-functional Requirements
10. Acceptance Criteria có mã AC
11. Out of Scope
12. Requirements Traceability Matrix

docs/DESIGN-BLUEPRINT.md:
1. Art direction
2. Design tokens
3. Typography
4. Spacing/grid
5. Header concept
6. Hero concept
7. Button system
8. Card system
9. Image direction
10. Motion
11. Mobile strategy
12. Differentiation checklist

docs/QA-REPORT.md:
- Test case
- Kết quả thực tế
- Các lỗi đã sửa
- Các kiểm thử chưa chạy
- Vấn đề còn tồn tại

# QUY TẮC THIẾT KẾ

5 theme phải khác biệt rõ rệt về:
- Header
- Hero
- Button
- Card
- Typography
- Section composition
- Gallery
- Navigation
- Motion
- Mobile layout

Không được dùng chung một công thức:
Hero + 3 cards + About + 3 cards + CTA.

Không mặc định mọi button là hình chữ nhật bo góc 6px.

Không được chỉ thay màu sắc, hình ảnh hoặc font để tạo theme mới.

Mỗi theme có ít nhất:
- 3 đặc điểm layout riêng
- 2 tương tác riêng phục vụ nghiệp vụ
- 1 cách tổ chức trang thứ ba khác biệt

Nếu hai theme có thể đổi logo/màu và trở nên gần giống nhau, phải thiết kế lại.

# QUY TRÌNH

Với từng theme:
1. Nghiên cứu nghiệp vụ và reference.
2. Tạo SRS.
3. Tạo Design Blueprint.
4. Triển khai 3 trang HTML.
5. Kiểm thử chức năng theo acceptance criteria.
6. Visual QA desktop/mobile.
7. Sửa lỗi và tạo QA Report.

# QUALITY GATES

- Đúng 3 trang HTML.
- Responsive 375/768/1024/1440.
- Navigation và CTA hoạt động.
- Không horizontal overflow.
- Không console errors.
- Không assets hỏng.
- Không dead buttons.
- Semantic HTML và SEO cơ bản.
- Accessibility và keyboard support.
- prefers-reduced-motion.
- 100% nội dung tiếng Việt.

Các form chỉ validation/frontend hoặc sử dụng kênh liên hệ thực tế.

Không giả lập gửi form thành công, đăng ký học thành công hoặc xử lý thanh toán khi chưa có backend.

# NHIỆM VỤ HIỆN TẠI

Chỉ thiết lập hoặc cập nhật quy chuẩn dùng chung, AGENTS.md và registry 5 theme ở trạng thái chưa triển khai.

Không tạo 15 trang HTML ở bước này.

Sau khi hoàn thành, báo cáo ngắn cấu trúc và trạng thái dự án.
```

---

## Prompt 2 — Áp dụng quy chuẩn Dev Theme AI

```text
# LASA 1000 THEMES — ÁP DỤNG QUY CHUẨN DEV THEME AI

Đọc và tuân thủ tuyệt đối tài liệu QUY_CHUAN_DEV_THEME_AI.md do dự án cung cấp.

Nhiệm vụ: Áp dụng quy chuẩn lưu trữ và bàn giao cho 5 theme EDU:

1. brightpath
2. little-garden
3. edunova
4. horizon
5. codeforge

## 1. CẤU TRÚC BẮT BUỘC

Thư mục gốc:
Themes_Repository/06-giao-duc-dao-tao/

Mỗi theme phải có đúng 3 thành phần cấp cao:

[ten-theme]/
  web/
  docs/
  info.json

Trong web/:
- index.html
- pages/about.html
- pages/[trang-thu-ba].html
- assets/css/
- assets/js/
- assets/fonts/
- assets/img/thumb.jpg

Ảnh thumb.jpg phải là ảnh đại diện giao diện thực tế của theme, tỷ lệ 16:9.

Không sử dụng ảnh ngẫu nhiên thay cho screenshot giao diện.

Trong docs/:
- prompt.md
- request.md

Trong info.json:
- name
- tagline
- category
- description
- author

category phải là:
06-giao-duc-dao-tao

Không tự điền tên tác giả nếu chưa được cung cấp. Để giá trị dễ cấu hình và đánh dấu cần bổ sung.

## 2. QUY TẮC TÊN FILE

- Tên thư mục viết thường.
- Không dấu tiếng Việt.
- Sử dụng dấu gạch ngang.
- Không có khoảng trắng trong tên folder.
- Không tạo thư mục source trùng lặp.
- Không đặt HTML bên ngoài web/.

## 3. TÀI LIỆU NGHIỆP VỤ

Trong docs/request.md bắt buộc có:

1. Tổng quan theme
2. Mục tiêu kinh doanh
3. Đối tượng sử dụng
4. User stories
5. Business workflows
6. Sitemap 3 trang
7. Functional Requirements (FR)
8. Business Rules (BR)
9. Data Requirements
10. Non-functional Requirements
11. Acceptance Criteria (AC)
12. Traceability Matrix
13. Design Blueprint
14. Reference URLs
15. Những chức năng ngoài phạm vi

Trong docs/prompt.md lưu nguyên prompt triển khai đã được sử dụng, bao gồm các yêu cầu chỉnh sửa bổ sung có ảnh hưởng đến kết quả cuối cùng.

## 4. YÊU CẦU THEME

- HTML5, CSS3, Vanilla JavaScript.
- Mỗi theme chính xác 3 trang HTML.
- Giao diện 100% tiếng Việt.
- Responsive hoàn chỉnh.
- SEO metadata tiếng Việt.
- Không cần backend hoặc CMS.
- Không dùng React/Vue/Next.js.
- Có reference thiết kế riêng.
- Mỗi theme khác biệt về hero, header, button, card, typography và animation.
- Không tạo các button đều có dạng hình chữ nhật bo góc giống nhau.

## 5. KIỂM TRA BÀN GIAO

Với từng theme:

1. Kiểm tra cấu trúc folder.
2. Mở trực tiếp web/index.html bằng trình duyệt.
3. Kiểm tra navigation giữa 3 trang.
4. Kiểm tra CSS, JS và hình ảnh.
5. Kiểm tra toàn bộ đường dẫn tương đối.
6. Kiểm tra responsive desktop/mobile.
7. Kiểm tra file thumb.jpg là ảnh giao diện thực tế, đúng tỷ lệ 16:9.
8. Kiểm tra docs/prompt.md.
9. Kiểm tra docs/request.md.
10. Kiểm tra info.json hợp lệ.
11. Kiểm tra không còn đường dẫn đến cấu trúc thư mục cũ.

Nếu các theme đã có source code, chỉ chuyển đổi cấu trúc và sửa đường dẫn cần thiết, không tự ý thiết kế lại giao diện.

Không xóa dữ liệu hoặc source cũ khi chưa xác minh việc di chuyển thành công.

## 6. NGUYÊN TẮC

Quy chuẩn QUY_CHUAN_DEV_THEME_AI.md được ưu tiên đối với tổ chức thư mục và file bàn giao.

Các quy chuẩn SRS, UI/UX và kỹ thuật trước đó vẫn áp dụng nếu không mâu thuẫn.

Không tạo thêm các file cấp cao bên trong theme ngoài ba thành phần web/, docs/ và info.json.

Thực hiện công việc trực tiếp.

Cuối cùng báo cáo:
- Theme đã xử lý.
- Cấu trúc đã chuẩn hóa.
- Kết quả kiểm tra thực tế.
- File hoặc dữ liệu còn thiếu.
```

Kèm tin nhắn: `Theo cái promt làm thôi`

---

## Prompt 3 — Triển khai EDU-01 BrightPath (prompt chính)

```text
Bạn là Senior Business Analyst, Education UX Designer, Art Director và Frontend Engineer.

Tiếp tục dự án LASA 1000 Themes theo QUY_CHUAN_DEV_THEME_AI.md.

# NHIỆM VỤ

Tạo hoàn chỉnh EDU-01 — BrightPath, website trung tâm đào tạo tiếng Anh tại Việt Nam.

Reference:
https://www.britishcouncil.vn/en/english-courses/adults

Nếu có browser, nghiên cứu cách tổ chức khóa học, hình ảnh, typography, navigation, CTA và luồng tư vấn của reference.

Tham khảo chất lượng thiết kế, tuyệt đối không sao chép nguyên bản.

# SRS NGHIỆP VỤ

Đối tượng:
- Học sinh, sinh viên.
- Người đi làm.
- Phụ huynh tìm khóa tiếng Anh.
- Người chuẩn bị thi IELTS.

Luồng nghiệp vụ:
1. Khách chọn mục tiêu học tiếng Anh.
2. Tìm khóa học phù hợp trình độ.
3. Xem lộ trình và thông tin khóa.
4. Xem phương pháp đào tạo.
5. Đăng ký nhận tư vấn.

Yêu cầu chức năng:
FR-001: Điều hướng 3 trang.
FR-002: Lọc khóa học theo mục tiêu.
FR-003: Lọc theo trình độ.
FR-004: Xem nội dung chương trình.
FR-005: Xem lộ trình học.
FR-006: Form tư vấn có validation.
FR-007: CTA hotline/email hoạt động.

Business Rules:
- Mỗi khóa có tên, mục tiêu, trình độ, mô tả và các học phần.
- Không giả lập bài kiểm tra trình độ nếu chưa xây dựng bộ câu hỏi.
- Không hứa hẹn điểm IELTS đầu ra.
- Không bịa học phí, lịch khai giảng hoặc chứng chỉ.
- Thông tin tư vấn frontend không được giả lập đã gửi thành công.

Trong docs/request.md, viết đầy đủ SRS, user stories, BR, AC, data requirements, traceability và out of scope.

# DESIGN BLUEPRINT

Concept: Confident Modern Learning.

Màu sắc:
- Navy #173D70
- Academic Blue #2674C8
- Warm Yellow #F4CC58
- White #FFFFFF
- Soft Gray #F4F7FB

Font:
Be Vietnam Pro, kết hợp display typography hiện đại có hỗ trợ tiếng Việt.

Header:
Floating navigation dạng pill, nổi trên hero.

Hero:
Split composition có ảnh học viên/lớp học, typography lớn và CTA nổi bật.

Button:
- Primary pill radius 999px.
- Icon mũi tên đặt trong vòng tròn riêng.
- Secondary dùng animated underline.
- Hover/focus có tính tương tác.

Card:
- Course cards dùng nhãn trình độ.
- Roadmap là timeline, không dùng card giống khóa học.
- Section giảng dạy dùng image/text editorial.

Motion:
Smooth reveal và pathway animation nhẹ.

# 3 TRANG

web/index.html:
Header, hero, mục tiêu học, khóa học nổi bật, phương pháp học, lộ trình, trải nghiệm lớp học, CTA tư vấn, footer.

web/pages/about.html:
Giới thiệu, triết lý đào tạo, phương pháp học, đội ngũ minh họa, môi trường học, giá trị và CTA.

web/pages/courses.html:
Danh sách khóa, bộ lọc trình độ/mục tiêu, chi tiết khóa dạng accordion hoặc modal, lộ trình và form tư vấn.

# TƯƠNG TÁC

- Mobile navigation.
- Course filtering.
- Accordion chương trình.
- Form validation.
- Navigation đúng đường dẫn.
- CTA tel/mailto hoặc anchor hợp lệ.

# THƯ MỤC BẮT BUỘC

Themes_Repository/06-giao-duc-dao-tao/brightpath/
  web/index.html
  web/pages/about.html
  web/pages/courses.html
  web/assets/css/
  web/assets/js/
  web/assets/fonts/
  web/assets/img/thumb.jpg
  docs/prompt.md
  docs/request.md
  info.json

docs/request.md chứa SRS + Design Blueprint + QA Summary.

docs/prompt.md lưu toàn bộ prompt triển khai.

info.json:
name = "BrightPath - Học viện Anh ngữ"
category = "06-giao-duc-dao-tao"
Các trường còn lại phải được điền hợp lệ, tác giả chưa biết thì ghi "Chưa cập nhật".

# YÊU CẦU CHẤT LƯỢNG

100% giao diện tiếng Việt.
HTML/CSS/Vanilla JS.
Responsive 375/768/1024/1440.

Ảnh có quyền sử dụng phù hợp, ưu tiên lưu local.
Không có dead buttons, link hỏng hoặc ảnh lỗi.

Chụp screenshot trang chủ thật làm web/assets/img/thumb.jpg tỷ lệ 16:9 nếu công cụ hỗ trợ.

Nếu không thể tạo screenshot, báo rõ thiếu thumbnail.

Thực hiện trọn quy trình SRS → Blueprint → Code → QA.
Không dừng ở lập kế hoạch.
Không chỉnh sửa theme khác.
Báo cáo ngắn kết quả thực tế.
```

---

## Yêu cầu chỉnh sửa trong quá trình làm

1. `Khoan ý là chỉ làm layout thôi á`
2. `Ý là srs mô tả tổng quan thôi` → `docs/request.md` viết dạng SRS tổng quan, ngắn gọn, vẫn giữ 15 mục theo quy chuẩn bàn giao.
3. `Nhìn nó đang bị ai quá, layout trông không tự nhiên` / `reference không giống lắm` → làm lại layout bản v2 theo cấu trúc British Council (header tab, sidebar, danh sách khóa dạng bảng, accordion cấp độ); giữ màu, font Be Vietnam Pro, nút pill; bỏ header pill nổi và các chi tiết trang trí.
