# ÉLAN CREATIVE

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website portfolio cá nhân
- **Thương hiệu / dự án:** ÉLAN CREATIVE
- **Mục đích:** Giới thiệu portfolio cá nhân thui . Là một mẫu cho các khách hàng của tui tham khảo
- **Ý tưởng thị giác (AI ghi):** Trang như một ấn phẩm in Swiss: lưới kẻ mảnh, số thứ tự (01)–(05) và một vạch đỏ cam 'registration line' chạy qua mọi section; ảnh dự án đen trắng, hiện màu khi rê chuột

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Neo-Brutalism / Bold — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 1.698 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Bricolage Grotesque`: đủ ký tự tiếng Anh
- `Instrument Serif`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | ÉLAN CREATIVE — Creative Designer Portfolio & CV | Landing page duy nhất: giới thiệu designer, 4 dự án chọn lọc, quan điểm thiết kế, kỹ năng, CV và liên hệ | top, hero → hero-type, disciplines → marquee-band, work → gallery-lookbook, philosophy → story-editorial, skills → features-bento, resume → features-tabs, contact → cta-type, footer | 7 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
elan-creative/
  web/
    assets/
      css/
        site.css
      img/  (8 ảnh + CREDITS.md)
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

- **✓ Chuỗi ảnh hoạt động:** 7 ảnh được dùng trên 1 trang

Tool đã ghi 13 lượt tìm (nguồn: openverse), 7 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| designer portrait studio | openverse | 10 ảnh | 16195 ms |
| brand identity stationery mockup | openverse | 10 ảnh | 25655 ms |
| typographic poster wall | openverse | 4 ảnh | 18725 ms |
| magazine editorial layout spread | openverse | 10 ảnh | 20212 ms |
| fashion campaign photoshoot | openverse | 10 ảnh | 19113 ms |
| design sketches desk process | openverse | 10 ảnh | 10170 ms |
| business cards branding design | openverse | 12 ảnh | 16647 ms |
| swiss poster typography | openverse | 15 ảnh | 21688 ms |
| open magazine pages | openverse | 12 ảnh | 10628 ms |
| billboard advertising campaign street | openverse | 6 ảnh | 18499 ms |
| graphic designer working | openverse | 12 ảnh | 8807 ms |
| packaging design branding | openverse | 12 ảnh | 12638 ms |
| magazine print typography layout | openverse | 12 ảnh | 11439 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/hero-portrait.jpg` | index.html hero, portrait of the designer | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/work-poster.jpg` | index.html #work, poster project | openverse | CC BY-NC-SA 4.0 | ✓ |
| `assets/img/work-editorial.jpg` | index.html #work, editorial project | openverse | CC PDM 1.0 | ✓ |
| `assets/img/work-campaign.webp` | index.html #work, visual campaign project | openverse | CC CC0 1.0 | ✓ |
| `assets/img/philosophy-sketch.jpg` | index.html #philosophy, logo sketching process | openverse | CC CC0 1.0 | ✓ |
| `assets/img/work-branding.jpg` | index.html #work, brand identity project | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/work-magazine.webp` | index.html #work, editorial magazine project | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Đánh dấu mục đang xem trên menu
- Tabs
- Phóng to ảnh (lightbox)
- Sao chép nhanh (số điện thoại / email)
- Điều hướng: 1 trang liên kết qua header / footer (menu: index.html).
- Chuyển động (đếm trong code): `data-reveal` ×7, `data-count-to` ×2, `data-header` ×1, `data-split` ×4, `data-reveal-stagger` ×2, `data-parallax` ×1, `data-marquee` ×1, `data-float` ×1, `data-cursor` ×1, `data-magnetic` ×2, `data-reveal="clip"` ×5; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:15 24/10/2026: 1 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 1 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "ÉLAN CREATIVE" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 7 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 11:15 24/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng một trang (index.html) vì BA yêu cầu rõ: 'Tất cả nội dung nằm trên một landing page duy nhất'
- Phong cách theo chú thích BA (Swiss Editorial + Creative Art Direction) thay vì Neo-Brutalism thuần: giữ màu paper / ink / signal của preset (trắng ngà, đen tuyền, đỏ cam), bỏ cobalt và acid; viền mảnh, ít bóng cứng
- Bỏ font nhãn Instrument Serif vì BA yêu cầu sans-serif hiện đại; dùng một family Bricolage Grotesque cho cả tiêu đề, thân và nhãn
- Menu theo BA: Work, About, Resume, Contact (About trỏ tới phần Design Philosophy)
- Tên file ảnh do lần tải đầu đặt khác vai trò (ví dụ work-editorial.jpg là loạt poster, hero-portrait.jpg là ảnh chiến dịch); alt và sitemap mô tả đúng nội dung

Lỗi QA còn mở:

- [Mức chuyển động] : BA chọn Level 2 nhưng trang dùng hiệu ứng Level 3: data-cursor, data-magnetic.

Giới hạn:

- Không có form gửi; liên hệ qua email (mailto + nút sao chép) và link LinkedIn mẫu
- Dự án, kinh nghiệm, giải thưởng là nội dung mẫu để khách tham khảo; ảnh dự án là ảnh minh họa nguồn mở, cần thay bằng tác phẩm thật
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
