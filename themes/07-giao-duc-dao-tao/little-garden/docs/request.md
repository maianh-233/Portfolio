# Little Garden - Mầm non Montessori — Request & SRS tổng quan

EDU-02 · LASA 1000 Themes · Lĩnh vực `06-giao-duc-dao-tao` · Ngày 19/10/2026

## 1. Tổng quan theme

Website template cho trường mầm non theo định hướng Montessori, viết cho phụ huynh Việt Nam. Gồm 3 trang HTML tĩnh (HTML/CSS/Vanilla JS), không backend. Concept: **Natural Childhood & Joyful Discovery**. Tên trường, liên hệ và nội dung đều là dữ liệu mẫu.

## 2. Mục tiêu kinh doanh

Giúp phụ huynh hiểu trường và phương pháp, tìm được nhóm lớp đúng độ tuổi của con, rồi gửi yêu cầu tham quan qua email/Zalo hoặc gọi điện.

## 3. Đối tượng sử dụng

Phụ huynh có con 18 tháng – 6 tuổi · phụ huynh muốn tìm hiểu môi trường học · người muốn đăng ký tham quan (thường quyết định cùng vợ/chồng, ông bà).

## 4. User stories

- US-01: Là phụ huynh, tôi muốn hiểu nhanh trường là nơi thế nào và dạy theo cách nào.
- US-02: Là phụ huynh, tôi chọn độ tuổi của con để biết con hợp với nhóm lớp nào.
- US-03: Là phụ huynh, tôi xem con sẽ học gì và một ngày ở lớp diễn ra ra sao.
- US-04: Là phụ huynh, tôi xem ảnh hoạt động và môi trường học.
- US-05: Là phụ huynh, tôi đọc giải đáp các thắc mắc thường gặp.
- US-06: Là phụ huynh, tôi gửi yêu cầu tham quan mà không phải khai thông tin nhạy cảm của con.

## 5. Business workflows

Tìm hiểu trường (trang chủ) → xem phương pháp → chọn độ tuổi của bé → xem chương trình theo nhóm (Programs) → xem môi trường (About, gallery) → điền form tham quan → bản nháp gửi qua email/Zalo/điện thoại → **ngoài website:** nhà trường gọi lại để xác nhận lịch.

## 6. Sitemap 3 trang

| Trang | Nội dung chính |
| --- | --- |
| `web/index.html` | Hero collage, giới thiệu trường, chọn độ tuổi + 3 nhóm lớp, phương pháp, một ngày tại trường, gallery, CTA tham quan |
| `web/pages/about.html` | Câu chuyện, triết lý, môi trường học, cách đồng hành với trẻ, đội ngũ (minh họa), hình ảnh hoạt động, CTA |
| `web/pages/programs.html` | Tab 3 nhóm tuổi (mục tiêu, hoạt động, thời khóa biểu minh họa), FAQ, form tham quan |

## 7. Functional Requirements (FR)

| FR | Mô tả | Trang |
| --- | --- | --- |
| FR-001 | Navigation 3 trang; mobile dùng bottom sheet (Esc, bấm nền để đóng, giữ focus trong sheet) | cả 3 |
| FR-002 | Chọn độ tuổi (7 khoảng) → gợi ý nhóm lớp, làm nổi nhóm đó, kèm link sang tab chương trình | index |
| FR-003 | Tab chương trình theo nhóm tuổi (phím mũi tên/Home/End, `?nhom=` trên URL, chọn sẵn nhóm trong form) | programs |
| FR-004 | Gallery dạng masonry, lightbox (trước/sau, phím mũi tên, Esc); khi tắt JS thì link mở thẳng file ảnh | index, about |
| FR-005 | FAQ accordion cho phụ huynh | programs |
| FR-006 | Form tham quan có validation → bản nháp → email/Zalo/sao chép/tải .txt/gọi điện | programs |

## 8. Business Rules (BR)

- BR-01: Ba nhóm tuổi rõ ràng: Hạt Mầm 18–36 tháng, Chồi Non 3–4 tuổi, Lá Xanh 4–6 tuổi. Dưới 18 tháng và trên 6 tuổi có thông báo riêng.
- BR-02: Nội dung từng nhóm (mục tiêu, hoạt động, lịch) phù hợp giai đoạn phát triển của độ tuổi đó.
- BR-03: Không thu thập tên, ngày sinh, sức khỏe hay giấy tờ của trẻ; form chỉ hỏi nhóm lớp quan tâm.
- BR-04: Không xác nhận lịch tham quan; ngày mong muốn chỉ là đề xuất (từ hôm nay đến 60 ngày tới, không nhận Chủ nhật), nhà trường xác nhận qua điện thoại.
- BR-05: Không tự nhận có giấy phép, chứng nhận Montessori, giải thưởng hay cơ sở thực tế; dùng cách nói "định hướng Montessori". Thời khóa biểu, đội ngũ và câu chuyện có ghi chú là minh họa.
- BR-06: Không giả lập gửi thành công; bản nháp luôn ghi "chưa được gửi đi".

## 9. Data Requirements

- **Nhóm lớp** (trong HTML): id, tên, độ tuổi, ảnh, mô tả ngắn, 4 trọng tâm, 6 hoạt động, thời khóa biểu 9 mốc.
- **Form tham quan:** họ tên ba/mẹ\*, điện thoại\* (di động VN 10 số), email, nhóm lớp\*, ngày mong muốn (tùy chọn), buổi (sáng/chiều/linh hoạt), câu hỏi thêm (≤ 500 ký tự), đồng ý liên hệ\*.
- **Liên hệ:** `assets/js/site-config.js`, có giá trị dự phòng trong HTML (`data-cfg`).

## 10. Non-functional Requirements

100% tiếng Việt, responsive 375/768/1024/1440, chạy được qua `file://`, font/ảnh local, SEO meta + OG, dùng được bằng bàn phím, `prefers-reduced-motion` tắt hiệu ứng trôi và mở hình, khi tắt JS vẫn đọc được toàn bộ nội dung.

## 11. Acceptance Criteria (AC)

- AC-01: Từ mọi trang đều đi tới 2 trang còn lại; menu mobile mở/đóng được bằng nút, Esc và bấm nền.
- AC-02: Chọn "4–5 tuổi" → hiện nhóm Lá Xanh, nhóm này được làm nổi, link dẫn tới `programs.html?nhom=la-xanh`.
- AC-03: Mở `programs.html?nhom=choi-non` → tab Chồi Non được chọn; phím mũi tên chuyển tab.
- AC-04: Bấm ảnh gallery → lightbox mở; trước/sau và Esc hoạt động; đóng thì focus quay về ảnh vừa bấm.
- AC-05: Bấm câu hỏi FAQ → câu trả lời đóng/mở, `aria-expanded` đổi theo.
- AC-06: Form thiếu dữ liệu, sai số điện thoại hoặc chọn Chủ nhật → báo lỗi; khi hợp lệ thì hiện bản nháp ghi "chưa được gửi đi" và "chưa được xác nhận"; sửa thông tin thì bản nháp bị đánh dấu cũ.

## 12. Traceability Matrix

| US | FR | BR | AC | Trang |
| --- | --- | --- | --- | --- |
| US-01 | FR-001 | BR-05 | AC-01 | cả 3 |
| US-02 | FR-002 | BR-01 | AC-02 | index |
| US-03 | FR-003 | BR-01, BR-02 | AC-03 | programs |
| US-04 | FR-004 | BR-05 | AC-04 | index, about |
| US-05 | FR-005 | — | AC-05 | programs |
| US-06 | FR-006 | BR-03, BR-04, BR-06 | AC-06 | programs |

## 13. Design Blueprint

- **Màu:** Cream `#FFF8ED`, Sage `#9AB89A`, Peach `#EDB6A2`, Light Yellow `#F4DC90`, Cocoa `#64483D` (chữ chính dùng `#4A342C` cho đủ tương phản).
- **Typography:** Baloo 2 (tiêu đề bo tròn) + Nunito (nội dung), WOFF2 local. Tiêu đề căn giữa, kết thúc bằng dấu chấm màu đào.
- **Header:** organic, không dính đầu trang. Link chia 2 bên, logo mầm cây ở giữa, gạch chân vẽ tay cho mục đang mở, mép dưới uốn sóng. Mobile: nút "Menu" hình viên sỏi mở bottom sheet.
- **Hero:** collage 4 ảnh (vòm, blob, tròn) cùng mặt trời, lá, nét vẽ, tất cả trôi nhẹ; mép dưới là đường cong lớn.
- **Button:** viên sỏi bo tròn bất đối xứng, mũi tên nét vẽ tay. Khi hover nút nhích lên, nghiêng nhẹ, đổi dáng bo và nét vẽ chạy lại.
- **Card:** nhóm tuổi là ảnh tròn kèm nhãn tuổi màu; phương pháp là khối màu mềm xen kẽ ảnh tròn; một ngày tại trường là thẻ có nhãn giờ màu; gallery dạng masonry với khung vòm/blob.
- **Motion:** trôi nhẹ (7–9 giây), ảnh mở ra từ hình tròn khi cuộn tới, ảnh phóng nhẹ khi hover.
- **Khác BrightPath:** header (logo giữa vs dải navy + tab), hero (collage organic vs split có khối hình học), nút (viên sỏi vs pill có vòng tròn), card (tròn/blob vs hàng trong bảng), font (Baloo 2/Nunito vs Be Vietnam Pro), mobile (bottom sheet vs thanh Menu full width).

## 14. Reference URLs

- https://guidepostmontessori.com/ và `/programs/childrens-house` (chụp bằng trình duyệt ngày 19/10/2026). Điều học được: tông màu sáng nhẹ, hero ảnh lớp học có mép cong, tiêu đề căn giữa có dấu chấm màu, chương trình theo độ tuổi là ảnh tròn, nội dung trong khối bo lớn xen ảnh tròn, CTA tìm trường/tham quan. Không sao chép logo, nội dung, ảnh hay mã nguồn.
- Ảnh: Unsplash (Unsplash License). Các ID `photo-1503919545889`, `1564429238817`, `1515488042361`, `1560421683`, `1484820540004`, `1596464716127`, `1416879595882`, `1540479859555`, `1594608661623`, `1516627145497`, `1464226184884`, `1555252333`, `1596461404969`, `1606092195730`. Chọn ảnh tay, giáo cụ, trẻ chụp từ phía sau hoặc từ trên xuống để hạn chế lộ mặt. Chưa ghi được tên tác giả.
- Font: Google Fonts, SIL OFL 1.1 (`web/assets/fonts/OFL.txt`).

## 15. Những chức năng ngoài phạm vi

Gửi form lên máy chủ, xác nhận hoặc giữ lịch tham quan, đăng ký nhập học, học phí trực tuyến, cổng phụ huynh và nhật ký của bé, video lớp học.

## 16. Kết quả kiểm tra bàn giao

Chạy ngày 19/10/2026 bằng Chromium headless (Playwright, Windows).

| Hạng mục | Kết quả |
| --- | --- |
| Checker bàn giao (cấu trúc, info.json, docs, 3 trang × 375/768/1024/1440, assets, console, link, SEO, `file://`, menu mobile, Tab/skip link, reduced motion, tắt JS, thumb 16:9) | 88/88 đạt |
| Tương tác theo AC-01 → AC-06 (chọn tuổi bằng chuột và bàn phím, lightbox + phím mũi tên + Esc, tab theo `?nhom=` + phím mũi tên/Home, FAQ, form: lỗi, Chủ nhật, ngày đã qua, bản nháp, mailto chỉ kiểm URL, bản nháp cũ, tải .txt, bottom sheet giữ focus và đóng khi bấm nền, điều hướng `file://`) | 28/28 đạt |
| Visual QA 1440 + 375 cả 3 trang | Đã xem ảnh chụp và sửa lỗi |

**Đã sửa sau visual QA:**
- Logo bị dàn ngang; nút CTA trên header mất chữ.
- Ảnh tròn không hiện vì `clip-path` 0% khiến IntersectionObserver không kích hoạt; đã chuyển sang quan sát phần tử cha.
- Panel thứ 4 trùng màu nền section.
- Chú thích ảnh ở trang About bị cắt.
- Bottom sheet căn lệch; dòng phụ của logo bị ngắt dòng trên mobile.

**Chưa kiểm:** Safari/Firefox, thiết bị thật, trình đọc màn hình.

**Còn thiếu từ đơn vị:** tên tác giả (`info.json`), liên hệ và địa chỉ thật, tên tác giả ảnh Unsplash, ảnh lớp học thật (cần có đồng ý của phụ huynh nếu có trẻ), thời khóa biểu và học phí thực tế.
