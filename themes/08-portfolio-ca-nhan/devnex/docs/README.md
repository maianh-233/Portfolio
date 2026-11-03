# DEVNEX

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website portfolio cá nhân
- **Thương hiệu / dự án:** DEVNEX
- **Mục đích:** Thiết kế và triển khai một landing page Portfolio & CV cho lập trình viên mang thương hiệu cá nhân DEVNEX.

Website phải thể hiện được năng lực lập trình, tư duy giải quyết vấn đề, kinh nghiệm thực tế và phong cách làm việc chuyên nghiệp.
- **Ý tưởng thị giác (AI ghi):** Mỗi section như một tệp đang mở trong code editor: tiêu đề có tiền tố đường dẫn ~/ màu xanh neon, nền lưới kỹ thuật mờ, viền mảnh 1px và nhãn kỹ thuật JetBrains Mono xuyên suốt

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Corporate / Professional — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | Bảng màu:  Background chính: #0B0F14.  Background section: #111820.  Background card: #151D27.  Màu chữ chính: #F3F6FA.  Màu chữ phụ: #9AA7B5.  Màu nhấn xanh neon: #A3FF68.  Border: rgba(255,255,255,0.10). |
| Font | Typography:  Tiêu đề: Space Grotesk.  Nội dung: Inter.  Các đoạn code, nhãn kỹ thuật: JetBrains Mono. |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 6.878 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Typography`: không có trên Google Fonts

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | DEVNEX \| Viết code rõ ràng, xây sản phẩm chạy thật | Landing page Portfolio & CV một trang: giới thiệu năng lực, kỹ năng, dự án, kinh nghiệm, học vấn và kênh liên hệ cho nhà tuyển dụng / khách thuê freelancer | top, hero → hero-split, about → story-letter, skills → features-tabs, projects → gallery-lookbook, experience → timeline, education → features-numbered, contact → contact-split, footer | 5 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
devnex/
  web/
    assets/
      css/
        site.css
      img/  (6 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        tw-config.js
        ui.js
    index.html
  docs/
    prompt.md
    request.md
    README.md
  info.json
```

`assets/img/thumb.jpg` là ảnh đại diện 16:9 do BA Tool chụp trang chủ sau mỗi lần dựng / sửa.

## 5. Tổ chức code & thành phần chính

- `assets/js/tw-config.js` — Cấu hình Tailwind dùng chung: màu, font (một nguồn cho mọi trang)
- `assets/css/site.css` — Biến CSS (:root) và vài style Tailwind không làm được
- `assets/js/ui.js` — Tool sinh — menu, tabs, accordion, carousel, lightbox, modal, form (qua data-*)
- `assets/js/motion.js` — Tool sinh — hiệu ứng cuộn / hover (qua data-*), tôn trọng prefers-reduced-motion
- `assets/js/atmos.js` — Tool sinh — không khí: mây, hạt sáng, cảnh nhiều lớp (Level 2–3)
- Mỗi trang là một file HTML tĩnh, header / footer giống nhau; mỗi khối nội dung là `<section id data-section="<biến thể>">` để sửa riêng từng khối.
- Tailwind CSS nạp qua CDN (`cdn.tailwindcss.com`), font qua Google Fonts.

## 6. Hình ảnh: tìm kiếm & tích hợp

- **⚠ Một số lượt tìm ảnh lỗi:** 1/6 lượt lỗi (timeout)

Tool đã ghi 6 lượt tìm (nguồn: openverse), 5 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| developer laptop code dark | — | lỗi timeout | 58114 ms |
| chat app smartphone screen | openverse | 6 ảnh | 19960 ms |
| analytics dashboard monitor | openverse | 5 ảnh | 42432 ms |
| online shop website laptop | openverse | 9 ảnh | 34349 ms |
| programmer desk workspace | openverse | 1 ảnh | 47594 ms |
| software developer coding | openverse | 10 ảnh | 16898 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/project-chat-realtime.jpg` | index.html — #projects ảnh dự án Realtime Chat | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/project-analytics-dashboard.jpg` | index.html — #projects ảnh dự án dashboard phân tích | openverse | CC CC0 1.0 | ✓ |
| `assets/img/project-ecommerce-api.jpg` | index.html — #projects ảnh dự án API thương mại điện tử | openverse | CC BY 2.0 | ✓ |
| `assets/img/about-code-screen.webp` | index.html — #about ảnh minh họa màn hình code | openverse | CC CC0 1.0 | ✓ |
| `assets/img/project-task-api.jpg` | index.html — #projects ảnh dự án Task Management API | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Đánh dấu mục đang xem trên menu
- Tabs
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Điều hướng: 1 trang liên kết qua header / footer.
- Chuyển động (đếm trong code): `data-reveal` ×34, `data-header` ×1, `data-reveal-stagger` ×3, `data-reveal="clip"` ×1.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:02 24/10/2026: 1 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 1 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "DEVNEX" có ở title / header / footer mọi trang
- ✓ Màu BA yêu cầu: Có trong code: #0b0f14, #111820, #151d27, #f3f6fa, #9aa7b5, #a3ff68
- ✗ Font BA yêu cầu: Chưa dùng
- AI tự xem lại trang bằng công cụ preview: 10 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 08:48 24/10/2026 | Dựng website | xong |
| 11:02 24/10/2026 | Sửa: Bạn ơi các thông tin về portfolio này có thể chi tiết hơn không vì đây là prototype mẫu á . Bịa thông tin giúp tui đi | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng một trang index.html với menu anchor vì chú thích BA ghi rõ 'Chỉ một landing page, không tạo trang con'
- Nhãn menu, tiêu đề hero, tiêu đề Contact BA viết bằng tiếng Anh được dịch sang tiếng Việt vì ngôn ngữ website là tiếng Việt; đoạn code trong terminal giữ cú pháp tiếng Anh vì là mã nguồn
- Bảng màu theo đúng mã HEX BA cung cấp thay cho bảng màu preset Corporate; giao diện tối toàn trang
- Font: tool báo 'Typography' không có trên Google Fonts do đọc nhầm nhãn; dùng đúng Space Grotesk (tiêu đề), Inter (nội dung), JetBrains Mono (nhãn kỹ thuật), fallback Be Vietnam Pro rồi font hệ thống
- Hero có dòng thông tin nhanh (địa điểm, chuyên môn, kinh nghiệm, email) theo yêu cầu BA; số năm kinh nghiệm để 'Cập nhật theo hồ sơ' vì chưa có dữ liệu
- Icon công nghệ dùng ô chữ viết tắt bằng JetBrains Mono thay cho logo để không phụ thuộc ảnh ngoài
- Theo góp ý BA: bỏ nhãn PLACEHOLDER, bổ sung nội dung mẫu chi tiết (số liệu kết quả từng dự án, 4 case study trong hộp thoại, 4 vị trí kinh nghiệm, học vấn và chứng chỉ cụ thể, dải số liệu ở phần Giới thiệu)
- Hiệu ứng terminal hiện từng dòng viết bằng CSS keyframes riêng (có tắt khi prefers-reduced-motion); không nạp atmos.js vì Level 1

Lỗi QA còn mở:

- [Font BA yêu cầu] : Không thấy font "Typography" trong code.

Giới hạn:

- Nút Tải CV mở hộp thoại thông báo tệp CV chưa được tải lên, chưa có file PDF thật
- Liên kết GitHub, LinkedIn, Live Demo chưa có URL nên hiển thị trạng thái 'Chưa cấu hình', không tạo link giả
- Form liên hệ là bản demo, chưa kết nối backend, không gửi đi
- Toàn bộ hồ sơ (tên Trần Minh Khoa, công ty Lumio Commerce / Hikari Tech / Pixelgate, khách hàng Orbis / Mộc Trà / Vinamove, số liệu dự án, học vấn, chứng chỉ) là nội dung mẫu bịa theo yêu cầu BA để demo, cần thay bằng dữ liệu thật
- Form là bản demo: kiểm tra dữ liệu và lưu tạm trong trình duyệt (localStorage), **không gửi đi đâu** — cần backend / dịch vụ form khi chạy thật.
- Nội dung, số liệu, tên người trong website là nội dung mẫu, cần khách xác nhận.

## 10. Cài đặt & chạy

Website tĩnh, **không có bước cài đặt hay build**.

- Mở trực tiếp: nhấp đúp `web/index.html` (chạy được qua `file://`). Trang con nằm trong `web/pages/`.
- Hoặc chạy máy chủ tĩnh trong thư mục `web/`: `npx serve web` (cần Node.js) rồi mở địa chỉ được in ra.
- Cần Internet để nạp Tailwind CDN và Google Fonts. Khi đưa lên production nên build Tailwind thành file CSS tĩnh thay cho CDN.
- Đưa lên hosting tĩnh (Netlify, Vercel, GitHub Pages…): tải nội dung thư mục `web/`.

## 11. Biến môi trường

- Website **không cần** biến môi trường nào.
- Chỉ BA Tool (khi dựng lại / đổi ảnh) dùng tùy chọn `PEXELS_API_KEY`, `UNSPLASH_ACCESS_KEY` trong `.env` của tool — không đặt thì tool dùng Openverse. Không ghi giá trị khóa vào website.
