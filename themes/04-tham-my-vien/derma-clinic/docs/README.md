# DERMA CLINIC

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website thẩm mỹ viện
- **Thương hiệu / dự án:** DERMA CLINIC
- **Mục đích:** Thiết kế website giới thiệu phòng khám thẩm mỹ và chăm sóc da DERMA CLINIC theo phong cách Clinical Modern, nhấn mạnh tính khoa học, chuyên nghiệp và minh bạch.

Art direction: Trắng chủ đạo, xanh mint, xanh teal và xám lạnh. Giao diện sạch, đường nét gọn, icon y khoa tối giản, hình ảnh chuyên gia và thiết bị thực tế. Tránh cảm giác website bệnh viện khô cứng.
- **Ý tưởng thị giác (AI ghi):** Các lớp da (biểu bì, trung bì, hạ bì) vẽ thành dải mint → teal trừu tượng kèm vạch đo mảnh, xuất hiện ở hero, các mốc chuyển section và footer như một sơ đồ lâm sàng sạch sẽ

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Minimal / Premium / Editorial — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 1.217 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: thiếu ký tự tiếng Việt → cần fallback
- `Geist`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | DERMA CLINIC \| Chăm sóc da bằng khoa học, minh bạch từng bước | Giới thiệu phòng khám, định hướng chăm sóc da, nhóm dịch vụ chính, quy trình thăm khám, điểm nổi bật chuyên môn; dẫn sang Dịch vụ & Bảng giá và mở form đặt lịch tư vấn | top, hero → hero-split, approach → story-editorial, services → features-numbered, process → process-steps, expertise → features-bento, faq → faq-accordion, cta → cta-type, footer → footer-big | 2 |
| `pages/about.html` | Về chúng tôi — DERMA CLINIC | Giới thiệu phòng khám, đội ngũ chuyên gia, trang thiết bị, quy trình tư vấn và tiêu chuẩn vệ sinh | top, page-hero → page-hero, intro → story-letter, team → team-grid, equipment → features-tabs, consultation → timeline, hygiene → stats-band, cta → cta-type, footer → footer-big | 0 |
| `pages/services.html` | Dịch vụ thẩm mỹ & Bảng giá — DERMA CLINIC | Tra cứu danh mục điều trị: mỗi dịch vụ có mô tả, đối tượng phù hợp, giá tham khảo; lọc theo nhóm; đặt lịch theo từng dịch vụ | top, page-hero → page-hero, catalog → list-cards, pricing-policy → story-editorial, service-faq → faq-accordion, cta → cta-type, footer → footer-big | 0 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
derma-clinic/
  web/
    assets/
      css/
        site.css
      img/  (3 ảnh + CREDITS.md)
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

- **⚠ Một số lượt tìm ảnh lỗi:** 6/10 lượt lỗi (timeout)
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 2 ảnh chưa dùng: https://media.healthcaresnapshots.com/wp-content/uploads/sites/5/2025/04/meru-dermatology-clinic-1050x750-compact.jpg, assets/img/home-approach-skin.jpg

Tool đã ghi 10 lượt tìm (nguồn: openverse), 2 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| dermatologist examining patient skin | — | lỗi timeout | 61231 ms |
| aesthetic clinic interior white | — | lỗi timeout | 78585 ms |
| facial skin care treatment | — | lỗi timeout | 31512 ms |
| dermatology clinic doctor | — | lỗi timeout | 71090 ms |
| dermatologist examining patient skin | — | lỗi timeout | 102224 ms |
| dermatology clinic | — | lỗi timeout | 31531 ms |
| dermatologist examining patient skin | openverse | 0 ảnh | 15737 ms |
| facial skin treatment clinic | openverse | 8 ảnh | 20281 ms |
| dermatology skin examination | openverse | 10 ảnh | 26291 ms |
| clinic treatment room interior | openverse | 12 ảnh | 19894 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://media.healthcaresnapshots.com/wp-content/uploads/sites/5/2025/04/meru-dermatology-clinic-1050x750-compact.jpg` | index.html — expertise, ảnh nội thất phòng khám da liễu | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `assets/img/home-hero-skin.jpg` | index.html — hero, ảnh làn da / chăm sóc da | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-approach-skin.jpg` | index.html — approach, ảnh chăm sóc da | openverse | CC CC0 1.0 | ✗ |
| `https://media.healthcaresnapshots.com/wp-content/uploads/sites/5/2025/04/meru-dermatology-clinic-3-1200x799-compact.jpg` | index.html — expertise, ảnh phòng điều trị da liễu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

1 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — expertise, ảnh phòng điều trị da liễu — https://media.healthcaresnapshots.com/wp-content/uploads/sites/5/2025/04/meru-dermatology-clinic-3-1200x799-compact.jpg

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/services.html — catalog-acne (từ khóa dự kiến: "acne treatment clinic")
- pages/services.html — catalog-pigment (từ khóa dự kiến: "laser skin pigmentation treatment")
- pages/services.html — catalog-rejuvenation (từ khóa dự kiến: "facial skin rejuvenation treatment")
- pages/about.html — intro (từ khóa dự kiến: "dermatology clinic reception")
- pages/about.html — team (từ khóa dự kiến: "dermatologist doctor portrait")
- pages/about.html — equipment (từ khóa dự kiến: "skin analysis device clinic")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Accordion (mở / đóng nội dung)
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Tabs
- Lọc theo nhóm
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×51, `data-header` ×3, `data-reveal-stagger` ×7.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 08:45 21/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "DERMA CLINIC" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 14 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 15:30 20/10/2026 | Dựng website | xong |
| 15:34 20/10/2026 | Sửa: Nội dung đã được duyệt và ok . Nhưng ảnh đang bị lỗi . Bnạ tìm đại ảnh da và phòng khám , vật tư ý tế bỏ vô cho đúng | xong |
| 08:45 21/10/2026 | Sửa: Vì ảnh đang là ảnh tự tạo bạn có thể lên Pinterest để lấy link ảnh bỏ vô không . | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Dựng đúng 3 trang chính theo chú thích của BA; form đặt lịch là cửa sổ (modal) dùng chung trên mọi trang thay cho trang Liên hệ riêng
- Concept mục 2 ghi 'không tạo bộ chuyển ngôn ngữ' nhưng chú thích BA yêu cầu công tắc Việt – English với nội dung đầy đủ → làm theo BA: HTML mặc định tiếng Việt (lang=vi), bản tiếng Anh nằm trong thuộc tính data-en, công tắc lưu lựa chọn và tải lại trang để đổi lang và thông báo form
- Font preset Instrument Serif thiếu ký tự tiếng Việt và không hợp phong cách Clinical Modern → dùng Be Vietnam Pro (tiêu đề) + Geist (nội dung)
- Bảng màu preset (giấy ấm, đồng) thay bằng art direction của BA: trắng, xanh mint, xanh teal, xám lạnh
- Công cụ ảnh không phản hồi (2 lần tìm đều lỗi) → mọi vị trí ảnh dựng bằng sơ đồ lớp da trừu tượng, khối màu và chữ; cần ảnh thật chuyên gia và thiết bị từ khách
- Không ghi tên, bằng cấp, chứng chỉ chuyên gia, số liệu hiệu quả hay tên thiết bị cụ thể vì BA chưa cung cấp

Giới hạn:

- Form Đặt lịch tư vấn là bản demo, chưa có backend (dữ liệu chỉ lưu tạm trong trình duyệt)
- Giá tham khảo hiển thị 'Báo giá sau thăm khám' vì chưa có dữ liệu giá từ phòng khám
- Địa chỉ, số điện thoại, email, giờ làm việc là thông tin mẫu cần khách xác nhận
- Trang chủ đã có ảnh thật (hero tải về; khối chuyên môn dùng link ngoài vì Pinterest chặn truy cập tự động); trang Dịch vụ và Về chúng tôi vẫn chưa có ảnh thật, cần ảnh đội ngũ và thiết bị từ khách
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
