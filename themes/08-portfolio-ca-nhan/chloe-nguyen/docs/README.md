# Chloe Nguyen

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website portfolio cá nhân
- **Thương hiệu / dự án:** Chloe Nguyen
- **Mục đích:** Portfolio cá nhân của wedding planner & creative director: giới thiệu chân dung, tư duy sáng tạo, 3 dự án tiêu biểu, kinh nghiệm / học vấn (CV) để các cặp đôi, studio và nhà tuyển dụng liên hệ hợp tác _(AI suy luận — BA không ghi)_
- **Ý tưởng thị giác (AI ghi):** Trang tạp chí cưới: chữ Cormorant Garamond rất lớn cạnh ảnh kiến trúc tràn mép, chân dung chồng lệch, đường kẻ mảnh 1px và nhãn 'No.' như trang đôi ấn phẩm in; nền ngà xen dải be cát và một dải đen than, olive chỉ làm điểm nhấn

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Editorial / Magazine — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 7.731 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Noto Serif Display`: đủ ký tự tiếng Việt
- `Geist`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | Chloe Nguyen — Wedding Planner & Creative Director | Landing page portfolio: chân dung, giới thiệu, dự án (mở panel chi tiết), năng lực, điểm nổi bật, kinh nghiệm, học vấn, liên hệ | top, hero → hero-offset, about → story-editorial, work → gallery-lookbook, expertise → features-tabs, highlights → stats-band, experience → timeline, contact → cta-type, footer | 13 |
| `pages/cv.html` | CV — Chloe Nguyen | Bản CV đọc / in được; nút Tải CV mở hộp thoại in để lưu PDF | top, cv-hero → page-hero, cv-body → detail-article, footer | 0 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
chloe-nguyen/
  web/
    assets/
      css/
        site.css
      img/  (14 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        tw-config.js
        ui.js
    pages/
      cv.html
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

- **⚠ Một số lượt tìm ảnh lỗi:** 1/9 lượt lỗi (auth)

Tool đã ghi 9 lượt tìm (nguồn: openverse), 13 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| wedding reception minimalist architecture | openverse | 11 ảnh | 12221 ms |
| woman editorial portrait elegant | openverse | 12 ảnh | 18627 ms |
| white flowers wedding table long | openverse | 14 ảnh | 20905 ms |
| garden wedding golden hour | openverse | 12 ảnh | 18853 ms |
| wedding ceremony venue modern hall | openverse | 9 ảnh | 15590 ms |
| long dinner table candles | openverse | 16 ảnh | 14867 ms |
| bali beach wedding ceremony | openverse | 13 ảnh | 14397 ms |
| wedding invitation stationery | openverse | 4 ảnh | 7913 ms |
| floral arrangement wedding outdoor table | — | lỗi auth | 39 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/hero-ban-tiec.webp` | index.html — hero, không gian tiệc cưới hiện đại | openverse | CC CC0 1.0 | ✓ |
| `assets/img/hero-chan-dung.jpg` | index.html — hero, chân dung editorial (ảnh minh họa) | openverse | CC BY 2.0 | ✓ |
| `assets/img/p01-hoa-trang.webp` | index.html — dự án 01, hoa trắng trên bàn tiệc | openverse | CC CC0 1.0 | ✓ |
| `assets/img/p01-sanh-tiec.webp` | index.html — dự án 01, sảnh tiệc kiến trúc | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-chan-dung.jpg` | index.html — about, chân dung (ảnh minh họa) | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/p02-nghi-le-ngoai-troi.jpg` | index.html — dự án 02 Afterglow, nghi lễ ngoài trời | openverse | CC BY 2.0 | ✓ |
| `assets/img/p01-san-dat-hoa.jpg` | index.html — dự án 01, sắp đặt hoa trong không gian | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/p03-le-cuoi-bai-bien.jpg` | index.html — dự án 03, lễ cưới bãi biển Bali | openverse | CC PDM 1.0 | ✓ |
| `assets/img/p03-bien-bali.webp` | index.html — dự án 03, toàn cảnh biển Bali | openverse | CC CC0 1.0 | ✓ |
| `assets/img/expertise-thiep-cuoi.jpg` | index.html — năng lực, thiệp cưới / stationery | openverse | CC CC0 1.0 | ✓ |
| `assets/img/p02-hoa-hong-trang.jpg` | index.html — dự án 02 collage, hoa trên bàn | openverse | CC CC0 1.0 | ✓ |
| `assets/img/p02-leu-tiec.webp` | index.html — dự án 02 collage, lều tiệc ngoài trời | openverse | CC CC0 1.0 | ✓ |
| `assets/img/expertise-ban-tiec.jpg` | index.html — năng lực, bàn tiệc / guest experience | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Tabs
- Phóng to ảnh (lightbox)
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Điều hướng: 2 trang liên kết qua header / footer (menu: index.html, pages/cv.html).
- Chuyển động (đếm trong code): `data-reveal` ×31, `data-count-to` ×3, `data-header` ×2, `data-reveal-stagger` ×2, `data-reveal="clip"` ×2.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 14:48 26/10/2026: 2 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "Chloe Nguyen" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 10 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 14:48 26/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- BA yêu cầu rõ 'landing page' và mở chi tiết dự án ngay trong trang → dựng trang chủ một trang dài (menu cuộn tới section) + 1 trang CV riêng để nút Xem CV / Tải CV có đích thật
- Ngôn ngữ website là tiếng Việt → dịch các câu tiếng Anh BA đưa (tiêu đề, trích dẫn, menu, nút) sang tiếng Việt; giữ nguyên tên riêng: tên dự án (The Art of Stillness, Afterglow, Somewhere, Together), chức danh nghề (Wedding Planner & Creative Director), tên công ty, tên các năng lực
- Font theo BA: Cormorant Garamond (tiêu đề) + Inter (thân), thay font preset; màu theo bảng BA (#FAF9F6, #E7DFD4, #242424, #B9B5AF, #737B68) + 2 sắc đậm phụ (olive-deep #555C4C, muted #5C5955) cho chữ nhỏ đạt tương phản AA
- Không dùng form liên hệ (BA: không giả lập gửi thành công) → mailto + nút sao chép email
- Ảnh tính năng (Spatial Styling, Event Planning) phủ grayscale nhẹ cho đồng tông editorial vì ảnh nguồn mở có màu cũ
- Công cụ ảnh báo lỗi 403 giữa chừng → dùng 13 ảnh đã tải, mỗi ảnh một vị trí

Giới hạn:

- Tải CV là in / lưu PDF từ trình duyệt, chưa có file PDF thật
- LinkedIn / Instagram trỏ về trang chủ mạng xã hội (hồ sơ demo)
- Toàn bộ dự án, số liệu, kinh nghiệm là dữ liệu hư cấu; ảnh từ nguồn mở, không phải sự kiện do Chloe tổ chức, chân dung là ảnh minh họa
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
