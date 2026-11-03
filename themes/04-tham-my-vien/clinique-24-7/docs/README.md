# CLINIQUE 24/7

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website thẩm mỹ viện
- **Thương hiệu / dự án:** CLINIQUE 24/7
- **Mục đích:** Thiết kế website giới thiệu CLINIQUE 24/7, một phòng khám thẩm mỹ và chăm sóc da theo định hướng y khoa hiện đại.

Art direction: Swiss Medical Graphic Design. Sử dụng nền trắng, xanh cobalt, đỏ cam làm điểm nhấn và xám nhạt. Typography sans-serif rõ ràng, lưới bố cục nghiêm ngặt, đường kẻ mảnh, số thứ tự lớn và các khối thông tin trực quan. Không sử dụng phong cách luxury, pastel hay bố cục spa thông thường.
- **Ý tưởng thị giác (AI ghi):** Phiếu hồ sơ y khoa kiểu Swiss: lưới 12 cột kẻ mảnh, số thứ tự lớn, dấu + đỏ cam đánh dấu điểm cần chú ý, xanh cobalt cho hành động

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Minimal / Premium / Editorial — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 933 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: đủ ký tự tiếng Anh
- `Geist`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | CLINIQUE 24/7 \| Doctor-led aesthetics and skin care | Giới thiệu định hướng chuyên môn, nhóm dịch vụ, quy trình tư vấn và thông tin phòng khám; dẫn sang Dịch vụ & Bảng giá và đặt lịch tư vấn | top, hero → hero-type, approach → story-editorial, services → features-numbered, process → process-steps, clinic → contact-split, cta → cta-type, footer → footer-big | 2 |
| `pages/about.html` | About — CLINIQUE 24/7 | Giới thiệu phòng khám, đội ngũ, cơ sở vật chất, quy trình tiếp nhận và tiêu chuẩn chuyên môn | top, page-hero → page-hero, story → story-letter, team → team-grid, facilities → features-bento, intake → timeline, standards → standards-grid, cta → cta-type, footer → footer-big | 2 |
| `pages/services.html` | Services & Pricing — CLINIQUE 24/7 | Danh sách dịch vụ đánh số theo 3 nhóm (điều trị da, chăm sóc da chuyên sâu, thẩm mỹ không phẫu thuật) với mô tả, mục đích, lưu ý, giá tham khảo; bảng giá gọn có lọc theo nhóm; FAQ | top, page-hero → page-hero, skin-treatment → features-numbered, intensive-care → features-numbered, non-surgical → features-numbered, pricing → pricing-table, faq → faq-accordion, cta → cta-type, footer → footer-big | 3 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
clinique-24-7/
  web/
    assets/
      css/
        site.css
      img/  (8 ảnh + CREDITS.md)
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

- **✓ Chuỗi ảnh hoạt động:** 7 ảnh được dùng trên 3 trang

Tool đã ghi 13 lượt tìm (nguồn: openverse), 9 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| dermatologist examining skin patient | openverse | 1 ảnh | 45534 ms |
| modern clinic interior white | openverse | 10 ảnh | 23618 ms |
| facial skin treatment clinic | openverse | 10 ảnh | 17129 ms |
| laser skin treatment | openverse | 11 ảnh | 25596 ms |
| medical clinic reception | openverse | 13 ảnh | 19663 ms |
| doctor consultation patient desk | openverse | 11 ảnh | 23111 ms |
| cosmetic injection face | openverse | 6 ảnh | 23065 ms |
| skincare serum bottle | openverse | 5 ảnh | 21843 ms |
| treatment room medical bed white | openverse | 4 ảnh | 37344 ms |
| dermatology clinic equipment | openverse | 6 ảnh | 21107 ms |
| clinic hallway modern bright | openverse | 0 ảnh | 27792 ms |
| hospital corridor | openverse | 11 ảnh | 7575 ms |
| examination room doctor office | openverse | 5 ảnh | 44326 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-consultation.jpg` | index.html — hero, bác sĩ tư vấn | openverse | CC CC0 1.0 | ✓ |
| `assets/img/services-laser-cheek.jpg` | pages/services.html — nhóm điều trị da (laser) | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/services-intensive-care.jpg` | pages/services.html — nhóm chăm sóc da chuyên sâu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/services-non-surgical.jpg` | pages/services.html — nhóm thẩm mỹ không phẫu thuật | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-intake.jpg` | pages/about.html — quy trình tiếp nhận | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-skin-laser-forehead.jpg` | index.html — định hướng chuyên môn | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/about-facility-corridor.jpg` | pages/about.html — cơ sở vật chất (phòng điều trị) | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/about.html — team (từ khóa dự kiến: "dermatologist portrait")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Accordion (mở / đóng nội dung)
- Lọc theo nhóm
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×37, `data-header` ×3, `data-reveal-stagger` ×9.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 09:40 21/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "CLINIQUE 24/7" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 8 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 09:40 21/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Dựng đúng 3 trang chính theo chú thích của BA (Trang chủ, Dịch vụ & Bảng giá, Về chúng tôi); thông tin phòng khám đặt ở trang chủ, không có trang Contact riêng
- Art direction 'Swiss Medical' của BA thay cho font serif của preset editorial: dùng Geist (sans-serif) + Geist Mono cho số; bảng màu trắng / xanh cobalt / đỏ cam / xám nhạt thay cho bảng màu preset
- Concept chọn ngôn ngữ chính tiếng Anh và ghi không tạo bộ chuyển ngôn ngữ, trong khi chú thích yêu cầu song ngữ Việt - Anh: website dựng bản tiếng Anh đầy đủ, công tắc EN / VI đặt sẵn trên header, bấm VI hiện thông báo bản tiếng Việt đang chuẩn bị
- Không có dữ liệu bác sĩ, chứng nhận, số liệu y khoa: phần đội ngũ trình bày theo vai trò, phần tiêu chuẩn là cam kết làm việc, có ghi chú chờ phòng khám cung cấp

Giới hạn:

- Form 'Book a Consultation' là bản demo, chưa có backend
- Bản tiếng Việt chưa dựng; công tắc VI chỉ hiện thông báo
- Giá tham khảo, thời lượng, địa chỉ, số điện thoại, giờ mở cửa là dữ liệu mẫu, cần phòng khám xác nhận
- Cần ảnh thật từ khách: chân dung đội ngũ bác sĩ, ảnh cơ sở vật chất thực tế của phòng khám
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
