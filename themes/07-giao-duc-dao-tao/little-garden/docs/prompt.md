# Prompt triển khai — Little Garden (EDU-02)

Công cụ: Claude Code (Claude Opus 5.5) · Ngày: 19/10/2026.
Tài liệu áp dụng: `QUY_CHUAN_DEV_THEME_AI.md` và các quy chuẩn bộ EDU trước đó (prompt thiết lập bộ sưu tập và prompt áp dụng quy chuẩn lưu trữ được lưu nguyên văn trong `brightpath/docs/prompt.md`).
Ghi nhận từ phiên trước có ảnh hưởng tới cách làm theme này: người dùng muốn `request.md` là SRS dạng tổng quan, và muốn giao diện tự nhiên, bám sát reference ("trông AI quá" ở BrightPath bản đầu).

---

## Prompt triển khai (nguyên văn)

```text
Tiếp tục LASA 1000 Themes theo QUY_CHUAN_DEV_THEME_AI.md.

Đóng vai Senior Business Analyst, Early Childhood Education UX Designer, Creative Art Director và Frontend Engineer.

# NHIỆM VỤ

EDU-02 — Little Garden.

Mô hình: Trường mầm non áp dụng định hướng Montessori, phục vụ phụ huynh Việt Nam.

Reference:
https://guidepostmontessori.com/

Nếu có browser, nghiên cứu art direction, hình ảnh, nội dung hướng phụ huynh, navigation, chương trình độ tuổi và CTA tham quan.

Không sao chép website reference.

# SRS NGHIỆP VỤ

Người dùng:
- Phụ huynh có con trong độ tuổi mầm non.
- Phụ huynh muốn tìm hiểu môi trường học.
- Người muốn đăng ký tham quan trường.

Luồng nghiệp vụ:
1. Phụ huynh tìm hiểu trường.
2. Xem phương pháp giáo dục.
3. Chọn độ tuổi của trẻ.
4. Xem chương trình phù hợp.
5. Xem môi trường học.
6. Yêu cầu tham quan trường.

Functional Requirements:
FR-001: Navigation.
FR-002: Chọn độ tuổi.
FR-003: Chương trình học theo độ tuổi.
FR-004: Gallery hoạt động.
FR-005: FAQ phụ huynh.
FR-006: Form yêu cầu tham quan.

Business Rules:
- Nhóm tuổi phải rõ ràng.
- Nội dung từng chương trình phù hợp giai đoạn phát triển.
- Không thu thập thông tin nhạy cảm của trẻ.
- Không xác nhận lịch tham quan khi chưa có backend.
- Không tự nhận trường có giấy phép, chứng nhận Montessori hoặc cơ sở thực tế.

Viết SRS đầy đủ user stories, FR, BR, AC, dữ liệu và traceability.

# DESIGN BLUEPRINT

Concept: Natural Childhood & Joyful Discovery.

Palette:
- Cream #FFF8ED
- Sage #9AB89A
- Peach #EDB6A2
- Light Yellow #F4DC90
- Cocoa #64483D

Typography:
Rounded sans-serif hỗ trợ tiếng Việt, heading mềm mại.

Header:
Organic navigation, không dùng pill header giống BrightPath.

Hero:
Collage nhiều hình ảnh, bố cục organic, các shape tròn/oval, bố cục giàu cảm xúc.

Buttons:
- Bo tròn bất đối xứng.
- Padding mềm.
- Icon dạng nét vẽ.
- Hover chuyển động rất nhẹ.
- Không dùng kiểu button BrightPath.

Cards:
- Organic shapes.
- Minh họa nhóm tuổi.
- Chương trình dạng khối màu mềm.
- Gallery ảnh dạng collage/masonry.

Motion:
Subtle floating, shape reveal và ảnh chuyển động nhẹ.

# BA TRANG

web/index.html:
Hero, giới thiệu trường, chương trình theo độ tuổi, phương pháp giáo dục, một ngày tại trường, gallery, CTA tham quan.

web/pages/about.html:
Câu chuyện thương hiệu, triết lý, môi trường học, cách đồng hành với trẻ, đội ngũ minh họa, hình ảnh hoạt động.

web/pages/programs.html:
Nhóm tuổi, chương trình, hoạt động, thời khóa biểu minh họa, FAQ và form tham quan.

# TƯƠNG TÁC

- Age selector.
- Program tabs.
- Image gallery.
- FAQ accordion.
- Form validation.
- Mobile navigation.

# CẤU TRÚC

Themes_Repository/06-giao-duc-dao-tao/little-garden/
  web/index.html
  web/pages/about.html
  web/pages/programs.html
  web/assets/css/
  web/assets/js/
  web/assets/fonts/
  web/assets/img/thumb.jpg
  docs/prompt.md
  docs/request.md
  info.json

docs/request.md phải có SRS + Design Blueprint + QA Summary.

docs/prompt.md lưu prompt thực tế.

info.json đúng schema quy chuẩn, category = "06-giao-duc-dao-tao".

# CHẤT LƯỢNG

HTML5/CSS3/Vanilla JS.
100% tiếng Việt.
Responsive 375/768/1024/1440.

Sử dụng ảnh được cấp phép phù hợp và tránh những hình ảnh trẻ em có vấn đề về quyền sử dụng hoặc quyền riêng tư.

Không dead buttons.
Không fake form submission.
Không lỗi hình ảnh hoặc navigation.

Nếu có browser automation, chụp screenshot trang chủ thật tỷ lệ 16:9 để tạo thumb.jpg.

Quan trọng: Giao diện này phải khác BrightPath ở header, hero, button, card, typography, motion và mobile layout.

Triển khai SRS → Blueprint → Code → QA hoàn chỉnh.
Không sửa theme khác.
Không dừng ở planning.
```
