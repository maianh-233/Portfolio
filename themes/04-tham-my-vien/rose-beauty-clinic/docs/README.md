# ROSÉ BEAUTY CLINIC

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website thẩm mỹ viện
- **Thương hiệu / dự án:** ROSÉ BEAUTY CLINIC
- **Mục đích:** Thiết kế website giới thiệu ROSÉ BEAUTY CLINIC, thẩm mỹ viện hướng đến vẻ đẹp tự nhiên, sự tự tin và trải nghiệm chăm sóc cá nhân hóa.

Phong cách: Soft Feminine Contemporary. Bảng màu hồng phấn, kem sữa, trắng ấm và rose gold. Sử dụng ảnh chân dung tự nhiên, ánh sáng dịu, đường cong tinh tế và typography nữ tính nhưng dễ đọc.
- **Ý tưởng thị giác (AI ghi):** Khung vòm (arch) mềm như cánh hoa hồng xuyên suốt mọi trang: ảnh chân dung, thẻ và nền đều bo vòm, kết hợp đường cong đầu section

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Nature / Organic / Atmospheric — AI tự chọn |
| Mức chuyển động | theo preset (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 869 ký tự (lưu đầy đủ trong project.json của BA Tool) |

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | ROSÉ BEAUTY CLINIC - Natural beauty, personally cared for | Hero cảm xúc, triết lý làm đẹp tự nhiên, 4 nhóm dịch vụ, trải nghiệm tại phòng khám, cảm nhận khách và lời mời tư vấn | top, hero → hero-split, philosophy → story-editorial, services → features-numbered, experience → features-bento, stories → testimonials-carousel, consult → cta-fullbleed, footer | 3 |
| `pages/about.html` | About Us — ROSÉ BEAUTY CLINIC | Câu chuyện thương hiệu, quy trình tư vấn cá nhân hóa, đội ngũ, không gian và phong cách phục vụ | top, page-hero → page-hero, story → story-letter, process → process-steps, team → team-grid, space → gallery-masonry, care → quote-full, consult → cta-type, footer | 3 |
| `pages/services.html` | Treatments & Prices — ROSÉ BEAUTY CLINIC | Danh mục dịch vụ chăm sóc da, cấp ẩm, hỗ trợ trẻ hóa, chuyên sâu kèm mô tả và giá tham khảo | top, page-hero → page-hero, menu → features-tabs, programs → features-bento, faq → accordion, consult → cta-type, footer | 4 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
rose-beauty-clinic/
  web/
    assets/
      css/
        site.css
      img/  (11 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        site.js
        tw-config.js
        ui.js
    pages/
      about.html
      services.html
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
- `assets/js/site.js` — Logic riêng của website (do AI viết)
- Mỗi trang là một file HTML tĩnh, header / footer giống nhau; mỗi khối nội dung là `<section id data-section="<biến thể>">` để sửa riêng từng khối.
- Tailwind CSS nạp qua CDN (`cdn.tailwindcss.com`), font qua Google Fonts.

## 6. Hình ảnh: tìm kiếm & tích hợp

- **⚠ Một số lượt tìm ảnh lỗi:** 4/15 lượt lỗi (timeout)

Tool đã ghi 15 lượt tìm (nguồn: openverse), 12 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| woman natural skin portrait | — | lỗi timeout | 56070 ms |
| facial skincare treatment | — | lỗi timeout | 31575 ms |
| beauty clinic treatment room | — | lỗi timeout | 31536 ms |
| spa facial woman | — | lỗi timeout | 31535 ms |
| woman natural skin portrait soft light | openverse | 15 ảnh | 50839 ms |
| facial treatment spa room | openverse | 12 ảnh | 6579 ms |
| beautician facial mask client | openverse | 2 ảnh | 38351 ms |
| aesthetic clinic interior | openverse | 7 ảnh | 300 ms |
| dermatologist doctor portrait woman | openverse | 2 ảnh | 36444 ms |
| spa facial massage | openverse | 15 ảnh | 18902 ms |
| spa room towels interior | openverse | 4 ảnh | 27817 ms |
| asian woman skincare | openverse | 12 ảnh | 17691 ms |
| massage table spa candles | openverse | 2 ảnh | 21050 ms |
| female doctor white coat smiling | openverse | 11 ảnh | 34622 ms |
| woman relaxing spa towel | openverse | 12 ảnh | 11944 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-portrait.jpg` | index.html — hero, chân dung da tự nhiên | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-experience-care.jpg` | index.html — experience, trải nghiệm chăm sóc | openverse | CC CC0 1.0 | ✓ |
| `assets/img/service-hydration.jpg` | pages/services.html — tab cấp ẩm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-facial-massage.jpg` | index.html — experience, buổi chăm sóc mặt | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/service-skincare.jpg` | pages/services.html — tab chăm sóc da | openverse | CC CC0 1.0 | ✓ |
| `assets/img/service-rejuvenation.jpg` | pages/services.html — tab hỗ trợ trẻ hóa | openverse | CC CC0 1.0 | ✓ |
| `assets/img/service-intensive.jpg` | pages/services.html — tab chăm sóc chuyên sâu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-team-doctor.jpg` | pages/about.html — đội ngũ, bác sĩ trưởng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-treatment-room.jpg` | pages/about.html — không gian phòng trị liệu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-story-portrait.jpg` | pages/about.html — câu chuyện thương hiệu | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/about.html — team-others (từ khóa dự kiến: "asian dermatologist portrait")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Carousel
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Tabs
- Accordion (mở / đóng nội dung)
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×23, `data-count-to` ×1, `data-header` ×3, `data-reveal-stagger` ×6, `data-float` ×1, `data-reveal="clip"` ×1; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 08:55 21/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "ROSÉ BEAUTY CLINIC" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 7 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 15:45 20/10/2026 | Dựng website | lỗi: Đã chạm giới hạn sử dụng của tài khoản, vui lòng chờ rồi thử lại. Hạn mức sẽ được làm mới lúc 18:40 20-10. |
| 08:55 21/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ 3 trang chính theo chú thích của BA (Home, Treatments & Prices, About Us)
- Có bộ chuyển ngôn ngữ EN/VI theo chú thích BA (ghi đè mục 2 concept.md); ngôn ngữ mặc định tiếng Anh, font Be Vietnam Pro + Cormorant Garamond hỗ trợ tiếng Việt
- Màu theo mô tả BA (hồng phấn, kem sữa, trắng ấm, rose gold) thay bảng màu preset; hồng nhấn đậm vừa phải đạt tương phản AA
- Chuyển động tiết chế (reveal, float nhẹ) để giữ tính chuyên nghiệp ngành y tế
- Không có thương mại điện tử / giỏ hàng theo yêu cầu BA

Giới hạn:

- Form Đặt lịch tư vấn là bản demo, chưa có backend
- Thư viện ảnh không có ảnh bác sĩ / không gian phòng khám người Việt; cần ảnh thật của đội ngũ và phòng khám từ khách
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
