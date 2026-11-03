# NOIR AESTHETIC

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website thẩm mỹ viện
- **Thương hiệu / dự án:** NOIR AESTHETIC
- **Mục đích:** Thiết kế website giới thiệu NOIR AESTHETIC, thương hiệu thẩm mỹ y khoa theo đuổi sự tinh tế, riêng tư và trải nghiệm cao cấp.

Art direction: Dark Luxury Editorial. Sử dụng đen than, espresso, đồng ánh kim và trắng ngà. Ảnh không gian kiến trúc có chiều sâu, ánh sáng tương phản, typography lớn và bố cục bất đối xứng
- **Ý tưởng thị giác (AI ghi):** A bronze magazine hairline cutting through charcoal architecture, ivory serif type, and private treatment rooms

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Minimal / Premium / Editorial — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 874 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: đủ ký tự tiếng Anh
- `Geist`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | NOIR AESTHETIC — Private medical aesthetics | Introduce the brand, philosophy, featured treatments, and the private clinic space | top, hero → hero-cinematic, philosophy → story-editorial, treatments → teaser-row, atelier → gallery-lookbook, assurance → stats-band, cta → cta-type, footer → footer-big | 4 |
| `pages/about.html` | About — NOIR AESTHETIC | Brand story, clinical team, facilities, and patient-care process | top, page-hero → page-hero, story → story-editorial, team → team-grid, rooms → gallery-lookbook, process → process-steps, cta → cta-type, footer → footer-big | 2 |
| `pages/service-rejuvenation.html` | Rejuvenation — NOIR AESTHETIC | Sample treatment detail for regenerative facial protocols | top, page-hero → page-hero, article → detail-article, cta → cta-type, footer → footer-big | 1 |
| `pages/service-skin.html` | Deep skin care — NOIR AESTHETIC | Sample treatment detail for medical-grade skin protocols | top, page-hero → page-hero, article → detail-article, cta → cta-type, footer → footer-big | 1 |
| `pages/services.html` | Treatments — NOIR AESTHETIC | Present treatment groups and indicative fees in an editorial layout | top, page-hero → page-hero, menu → features-tabs, fees → features-numbered, faq → faq, cta → cta-type, footer → footer-big | 0 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
noir-aesthetic/
  web/
    assets/
      css/
        site.css
      img/  (10 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        site.js
        tw-config.js
        ui.js
    pages/
      about.html
      service-rejuvenation.html
      service-skin.html
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

- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 1 ảnh chưa dùng: assets/img/hero-suite.webp

Tool đã ghi 9 lượt tìm (nguồn: openverse), 9 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| facial treatment spa dark | openverse | 10 ảnh | 8216 ms |
| skincare serum glass bottles | openverse | 3 ảnh | 12514 ms |
| luxury hotel lobby dark interior | openverse | 5 ảnh | 59622 ms |
| spa treatment room bed | openverse | 10 ảnh | 24399 ms |
| dark corridor minimalist architecture | openverse | 11 ảnh | 38121 ms |
| medical consultation room modern | openverse | 4 ảnh | 26754 ms |
| dark stone interior architecture light | openverse | 12 ảnh | 11547 ms |
| luxury spa interior dark | openverse | 7 ảnh | 21950 ms |
| massage room dim candles | openverse | 6 ảnh | 21315 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/rejuvenation-hero.jpg` | pages/service-rejuvenation.html — hero | openverse | CC CC0 1.0 | ✓ |
| `assets/img/skin-hero.webp` | pages/service-skin.html — hero | openverse | CC CC0 1.0 | ✓ |
| `assets/img/atelier-lounge.webp` | index.html — atelier arrival hall | openverse | CC CC0 1.0 | ✓ |
| `assets/img/atelier-suite.jpg` | index.html — atelier treatment suite | openverse | CC BY-ND 2.0 | ✓ |
| `assets/img/atelier-alcove.webp` | index.html — atelier recovery alcove | openverse | CC CC0 1.0 | ✓ |
| `assets/img/room-consult.webp` | pages/about.html — rooms consult | openverse | CC CC0 1.0 | ✓ |
| `assets/img/room-treatment.jpg` | pages/about.html — rooms treatment | openverse | CC BY-ND 2.0 | ✓ |
| `assets/img/hero-suite.webp` | index.html — hero | openverse | CC CC0 1.0 | ✗ |
| `assets/img/atelier-bed.webp` | index.html — atelier treatment suite | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/services.html — menu (từ khóa dự kiến: "editorial typographic layout, no photography by design")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Tabs
- Accordion (mở / đóng nội dung)
- Điều hướng: 5 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×65, `data-count-to` ×1, `data-header` ×5.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 09:13 21/10/2026: 5 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 5 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✗ Ngôn ngữ: 5 trang chưa đúng tiếng Anh: index.html, pages/about.html, pages/service-rejuvenation.html, pages/service-skin.html, pages/services.html
- ✓ Tên thương hiệu: "NOIR AESTHETIC" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 24 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 16:09 20/10/2026 | Dựng website | lỗi: Đã chạm giới hạn sử dụng của tài khoản, vui lòng chờ rồi thử lại. Hạn mức sẽ được làm mới lúc 18:40 20-10. |
| 09:07 21/10/2026 | Dựng website | xong |
| 09:13 21/10/2026 | Sửa: Phần khách muốn đổi là font chữu tiếng việt vì đang bị lỗi font rất nặng . Phaagn button khách cúng không đồng ý vì tự n | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- BA requested three main pages; two sample treatment details were added so the services list has real destinations.
- Art direction Dark Luxury Editorial inverts the editorial palette: ink and espresso grounds, paper type, bronze rules.
- Bilingual EN/VI toggle added because BA notes requested it; default language remains English per concept.md.
- Revision: preset fonts Instrument Serif / Geist lack Vietnamese glyphs; replaced with Cormorant Garamond (display) and Be Vietnam Pro (body), both with full Vietnamese support.
- Revision: consultation buttons now show one language at a time (EN 'Book a Consultation' / VI 'Đặt lịch tư vấn'); language switch restyled as a high-contrast EN|VI segmented control in the header.
- No cart, checkout, or product purchase flows.
- Indicative fees are clearly labeled as consultation-based samples because BA did not supply a price list.
- Motion stays at Level 1: fade/up, count, header shrink, hover. atmos.js is not loaded. Preset clip/split omitted to match concept Level 1 wording.

Lỗi QA còn mở:

- [Ngôn ngữ] index.html: Nội dung trang có 360 ký tự tiếng Việt có dấu — website chọn tiếng Anh.
- [Ngôn ngữ] pages/about.html: Nội dung trang có 303 ký tự tiếng Việt có dấu — website chọn tiếng Anh.
- [Ngôn ngữ] pages/service-rejuvenation.html: Nội dung trang có 315 ký tự tiếng Việt có dấu — website chọn tiếng Anh.
- [Ngôn ngữ] pages/service-skin.html: Nội dung trang có 289 ký tự tiếng Việt có dấu — website chọn tiếng Anh.
- [Ngôn ngữ] pages/services.html: Nội dung trang có 370 ký tự tiếng Việt có dấu — website chọn tiếng Anh.

Giới hạn:

- Consultation form is a demo and does not send data.
- Language toggle stores preference in localStorage when available; file:// may still default to English on first open.
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
