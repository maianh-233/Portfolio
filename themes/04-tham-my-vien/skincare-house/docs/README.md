# SKINCARE HOUSE

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website thẩm mỹ viện
- **Thương hiệu / dự án:** SKINCARE HOUSE
- **Mục đích:** Thiết kế website giới thiệu SKINCARE HOUSE, một thẩm mỹ viện chăm sóc da mang phong cách retro pop vui tươi, gần gũi và giàu cá tính.

Art direction: 1990s Retro Pop. Sử dụng xanh baby, đỏ gạch, vàng bơ và trắng kem. Kết hợp khung ảnh kiểu máy ảnh phim, họa tiết caro, chữ nghiêng, icon vui nhộn và các mảng đồ họa scrapbook. Tránh thiết kế quá nữ tính, quá sang trọng hoặc tối giản lạnh lẽo.
- **Ý tưởng thị giác (AI ghi):** Tạp chí scrapbook thập niên 90: ảnh lồng khung ảnh lấy liền / khung phim viền mực, nền caro xanh baby – vàng bơ, nhãn dán xoay nghiêng và chữ nghiêng cá tính xuyên suốt mọi trang

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Minimal / Premium / Editorial — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 903 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: đủ ký tự tiếng Anh
- `Geist`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | SKINCARE HOUSE — Good skin, no drama | Bìa tạp chí retro giới thiệu thương hiệu, không gian và ba nhóm dịch vụ chính, dẫn tới đặt lịch tư vấn | top, hero → hero-offset, ticker → ticker-band, intro → story-letter, services → features-bento, promises → features-numbered, reviews → testimonials-carousel, cta → cta-type, footer | 7 |
| `pages/about.html` | About — SKINCARE HOUSE | Câu chuyện hình thành thương hiệu, đội ngũ, không gian và trải nghiệm tư vấn bằng bố cục ảnh ghép scrapbook | top, page-hero → page-hero, story → story-letter, team → team-grid, space → gallery-lookbook, consultation → process-steps, cta → cta-type, footer | 3 |
| `pages/services.html` | Treatments & Prices — SKINCARE HOUSE | Danh sách dịch vụ theo ba nhóm (cơ bản, chuyên sâu, thẩm mỹ) với nhãn màu, icon, mô tả dễ hiểu và giá tham khảo khi có | top, page-hero → page-hero, menu → features-tabs, pricing-notes → stats-band, faq → faq-accordion, cta → cta-type, footer | 4 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
skincare-house/
  web/
    assets/
      css/
        site.css
      img/  (16 ảnh + CREDITS.md)
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

- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 1 ảnh chưa dùng: assets/img/about-space-lounge.jpg

Tool đã ghi 14 lượt tìm (nguồn: openverse), 16 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| facial treatment spa woman | openverse | 4 ảnh | 11708 ms |
| beauty salon interior | openverse | 7 ảnh | 197 ms |
| facial mask skincare | openverse | 10 ảnh | 5578 ms |
| laser skin treatment | openverse | 11 ảnh | 346 ms |
| microdermabrasion facial | openverse | 0 ảnh | 7136 ms |
| beautician facial client | openverse | 3 ảnh | 15650 ms |
| spa treatment room | openverse | 12 ảnh | 116 ms |
| skin care products | openverse | 12 ảnh | 5778 ms |
| facial massage spa | openverse | 5 ảnh | 11007 ms |
| woman face cream skincare | openverse | 12 ảnh | 5368 ms |
| dermatologist consultation patient | openverse | 2 ảnh | 12669 ms |
| salon reception waiting area | openverse | 10 ảnh | 21244 ms |
| esthetician portrait smiling | openverse | 0 ảnh | 12422 ms |
| spa towels candles | openverse | 7 ảnh | 5436 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-cover.jpg` | index.html — hero, ảnh bìa tạp chí | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-hero-snap.jpg` | index.html — hero, ảnh nhỏ khung phim | openverse | CC CC0 1.0 | ✓ |
| `assets/img/service-basic.jpg` | index.html + services — nhóm chăm sóc da cơ bản | openverse | CC CC0 1.0 | ✓ |
| `assets/img/service-intensive.jpg` | index.html + services — nhóm chăm sóc chuyên sâu | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/service-aesthetic.jpg` | index.html + services — nhóm dịch vụ thẩm mỹ (laser) | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/home-intro-space.jpg` | index.html — giới thiệu, ảnh phòng chăm sóc | openverse | CC BY-ND 2.0 | ✓ |
| `assets/img/about-space-room.jpg` | pages/about.html — không gian, phòng trị liệu | openverse | CC BY-ND 2.0 | ✓ |
| `assets/img/about-space-lounge.jpg` | pages/about.html — không gian thư giãn | openverse | CC BY 2.0 | ✗ |
| `assets/img/about-story-mirror.jpg` | pages/about.html — câu chuyện thương hiệu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/services-products.jpg` | pages/services.html — ảnh sản phẩm dùng trong liệu trình | openverse | CC CC0 1.0 | ✓ |
| `assets/img/services-laser-forehead.jpg` | pages/services.html — dịch vụ thẩm mỹ laser | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/about-consult.jpg` | pages/about.html — trải nghiệm tư vấn | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-review-glow.jpg` | index.html — khối đánh giá khách, ảnh khách hàng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-space-lounge.webp` | pages/about.html — không gian, góc khăn và tinh dầu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/services-basic-cream.jpg` | pages/services.html — tab chăm sóc da cơ bản | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/about.html — team (từ khóa dự kiến: "esthetician portrait smiling")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Carousel
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Phóng to ảnh (lightbox)
- Tabs
- Accordion (mở / đóng nội dung)
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×24, `data-header` ×3, `data-split` ×4, `data-reveal-stagger` ×6, `data-parallax` ×2, `data-marquee` ×1, `data-float` ×3, `data-particles` ×1, `data-tilt` ×3, `data-magnetic` ×2, `data-reveal="clip"` ×4, `data-count-to` ×2; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 13:38 21/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 1 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "SKINCARE HOUSE" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 19 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 11:56 21/10/2026 | Dựng website | xong |
| 13:38 21/10/2026 | Sửa: Phong cách retro mà . Nhìn phong cách này hơi trẻ con á . Thêm hiệu ứng cho sinh đông đi | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Theo chú thích BA: dựng đúng 3 trang chính (Home, Treatments & Prices, About); không có trang Contact riêng, thông tin liên hệ ở footer và form tư vấn dạng cửa sổ.
- Chú thích BA yêu cầu website song ngữ Việt – Anh có công tắc chuyển ngôn ngữ (ghi đè mục 'không tạo bộ chuyển ngôn ngữ' của concept): mặc định tiếng Anh, <html lang="en">; bản tiếng Việt nằm trong thuộc tính data-vi, site.js đổi chữ + lang khi bấm EN/VI và ghi nhớ lựa chọn.
- Mô tả art direction 1990s Retro Pop khác preset Editorial: dùng bảng màu BA mô tả (xanh baby, đỏ gạch, vàng bơ, trắng kem) và font Bricolage Grotesque + Be Vietnam Pro (đủ ký tự tiếng Việt cho bản song ngữ) thay cho Instrument Serif + Geist.
- Theo góp ý BA (retro nhưng đang trẻ con, cần sinh động hơn): nâng lên Level 2 (tách chữ tiêu đề, clip ảnh, marquee dải dịch vụ, parallax, float nhãn/ảnh, magnetic CTA, thanh tiến độ cuộn, atmos.js); làm retro trưởng thành hơn theo hướng film: hạt phim phủ trang, ảnh tông phai, bảng màu dịu hơn, chữ tiêu đề nhẹ nét hơn, bóng đổ ngắn, nhãn dán thành con dấu viền kép; bỏ 'Pinky promise'.
- Góp ý BA lần 2 (vẫn trẻ con, cần sinh động hơn): đổi chữ tiêu đề sang Playfair Display (serif tạp chí thời trang thập niên 90, có nghiêng thật, đủ dấu tiếng Việt) thay Bricolage Grotesque; mọi viền mực còn 1px; bóng đổ cứng lệch thành bóng mềm; caro nhạt và nhỏ hơn; con dấu chữ nhỏ kiểu in. Trang chủ thêm hạt bụi nắng ở hero, parallax ảnh bìa, vòng nét đứt quay chậm quanh con dấu, thẻ dịch vụ nghiêng 3D + vệt sáng theo chuột, ripple cho nút đặt lịch, ảnh lấy liền / khung phim tự thẳng lại và nhấc lên khi rê chuột.
- Giá tham khảo chỉ hiển thị cho dịch vụ có giá mẫu; dịch vụ thẩm mỹ cần bác sĩ khám ghi 'Price after skin check'.
- Tên, địa chỉ, số điện thoại, giá, đánh giá khách là nội dung mẫu cần khách xác nhận.

Lỗi QA còn mở:

- [Mức chuyển động] : BA chọn Level 1 nhưng trang dùng data-float, data-particles, data-tilt, data-magnetic — chỉ được reveal / đếm số / hover.

Giới hạn:

- Form 'Book a Consultation' là bản demo, chưa có backend, không gửi dữ liệu đi.
- Chưa có ảnh đội ngũ thật: dùng khối chữ cái đầu tên, cần ảnh chân dung từ khách.
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
