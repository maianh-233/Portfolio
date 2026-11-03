# Minh An

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website portfolio cá nhân
- **Thương hiệu / dự án:** Minh An
- **Mục đích:** Portfolio cá nhân của kiến trúc sư Minh An (thương hiệu FORM / SPACE): trình bày triết lý kiến trúc hữu cơ, 4 dự án ý tưởng, quy trình và vật liệu, để chủ đầu tư / đối tác tìm hiểu và liên hệ hợp tác. Khách truy cập: chủ nhà muốn xây nhà gắn với thiên nhiên, nhà phát triển resort, đối tác thiết kế. _(AI suy luận — BA không ghi)_
- **Ý tưởng thị giác (AI ghi):** Vòm và đường cong địa hình: ảnh đặt trong khung vòm / viên sỏi bo hữu cơ, chồng lớp lệch nhau trên nền trắng kem; nhãn nhỏ ghi cao độ, năm, vật liệu như ghi chú bản vẽ; một chữ in nghiêng màu nâu đất trong mỗi tiêu đề lớn

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Nature / Organic / Atmospheric — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 2.918 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Fraunces`: đủ ký tự tiếng Việt
- `Manrope`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | Minh An — Kiến trúc thuộc về mặt đất | Giới thiệu Minh An trong 3 giây, dẫn sang công trình, triết lý, vật liệu và liên hệ | top, hero → hero-cinematic, triet-ly → story-editorial, cong-trinh → teaser-row, quy-trinh → features-numbered, vat-lieu → marquee-band, lien-he-cta → cta-type, footer → footer-big | 6 |
| `pages/about.html` | Về Minh An — Minh An | Giới thiệu kiến trúc sư, triết lý thiết kế đầy đủ và quy trình làm việc | top, page-hero → page-hero, chan-dung → story-letter, triet-ly → features-tabs, quy-trinh → timeline, cta → cta-type, footer → footer-big | 2 |
| `pages/contact.html` | Liên hệ — Minh An | Lời mời hợp tác, thông tin liên hệ, form demo, nút gửi email, câu hỏi thường gặp | top, page-hero → page-hero, lien-he → contact-page, footer → footer-big | 0 |
| `pages/materials.html` | Vật liệu — Minh An | Material Studies: bộ ảnh đất, đá, gỗ, ánh sáng, cây xanh kèm ghi chú | top, page-hero → page-hero, bo-suu-tap → gallery-lookbook, trich-dan → quote-full, cta → cta-type, footer → footer-big | 6 |
| `pages/project-earth-house.html` | Earth House — Minh An | Chi tiết dự án nhà trên đồi tường đất | top, page-hero → page-hero, noi-dung → detail-article, du-an-khac → teaser-row, footer → footer-big | 3 |
| `pages/project-moss-house.html` | Moss House — Minh An | Chi tiết dự án nhà mái xanh hòa vào cảnh quan | top, page-hero → page-hero, noi-dung → detail-article, du-an-khac → teaser-row, footer → footer-big | 3 |
| `pages/project-silent-courtyard.html` | The Silent Courtyard — Minh An | Chi tiết dự án nhà sân vườn nhiệt đới tại Hội An | top, page-hero → page-hero, noi-dung → detail-article, du-an-khac → teaser-row, footer → footer-big | 4 |
| `pages/project-stone-tide.html` | Stone & Tide — Minh An | Chi tiết dự án công trình ven biển bằng đá và bê tông điêu khắc | top, page-hero → page-hero, noi-dung → detail-article, du-an-khac → teaser-row, footer → footer-big | 3 |
| `pages/works.html` | Công trình — Minh An | Danh sách 4 dự án ý tưởng, lọc theo loại công trình, dẫn sang trang chi tiết | top, page-hero → page-hero, danh-sach → list-cards, ghi-chu → quote-full, cta → cta-type, footer → footer-big | 4 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
minh-an/
  web/
    assets/
      css/
        site.css
      img/  (20 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        tw-config.js
        ui.js
    pages/
      about.html
      contact.html
      materials.html
      project-earth-house.html
      project-moss-house.html
      project-silent-courtyard.html
      project-stone-tide.html
      works.html
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

- **✓ Chuỗi ảnh hoạt động:** 19 ảnh được dùng trên 8 trang

Tool đã ghi 26 lượt tìm (nguồn: openverse), 21 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| organic architecture curved earth house | openverse | 12 ảnh | 14631 ms |
| sculptural architecture integrated landscape | openverse | 11 ảnh | 6807 ms |
| green roof house landscape | openverse | 13 ảnh | 8772 ms |
| curved concrete tropical courtyard | openverse | 5 ảnh | 9640 ms |
| Fallingwater Frank Lloyd Wright | openverse | 10 ảnh | 6428 ms |
| earthship house | openverse | 3 ảnh | 4675 ms |
| turf house Iceland grass roof | openverse | 5 ảnh | 12402 ms |
| rammed earth wall | openverse | 7 ảnh | 5812 ms |
| hobbit house hillside | openverse | 12 ảnh | 13141 ms |
| cob house curved walls | openverse | 11 ảnh | 14109 ms |
| concrete coastal house sea cliff | openverse | 4 ảnh | 15391 ms |
| tropical courtyard house plants | openverse | 3 ảnh | 12784 ms |
| earth sheltered home | openverse | 10 ảnh | 4548 ms |
| Casa Mila Gaudi rooftop curves | openverse | 12 ảnh | 10836 ms |
| architect architectural model hands | openverse | 8 ảnh | 3662 ms |
| sunlight shadow concrete wall | openverse | 6 ảnh | 2938 ms |
| Geoffrey Bawa courtyard | openverse | 10 ảnh | 7487 ms |
| Hoi An old house courtyard | openverse | 10 ảnh | 5221 ms |
| wood grain texture | openverse | 8 ảnh | 3869 ms |
| moss on stone closeup | openverse | 8 ảnh | 4496 ms |
| moss forest floor green | openverse | 9 ảnh | 3529 ms |
| cracked clay earth texture | openverse | 9 ảnh | 7866 ms |
| architectural model wooden | openverse | 10 ảnh | 3183 ms |
| architect sketching plans desk | openverse | 11 ảnh | 6775 ms |
| dry stone wall texture | openverse | 7 ảnh | 2941 ms |
| rolling hills contour landscape aerial | openverse | 12 ảnh | 12492 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/hero-turf-house.webp` | index.html — ảnh hero toàn màn: nhà mái cỏ hòa vào đất | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-philosophy-curves.webp` | index.html — triết lý: mặt đứng đá cong điêu khắc | openverse | CC CC0 1.0 | ✓ |
| `assets/img/project-stone-tide.jpg` | Stone & Tide — ảnh bìa: đá, bê tông, nước | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/project-moss-house.jpg` | Moss House — ảnh bìa: nhà mái cỏ | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/project-earth-house.jpg` | Earth House — ảnh bìa: nhà đất cửa vòm trong sườn đồi | openverse | CC CC0 1.0 | ✓ |
| `assets/img/earth-house-detail.jpg` | pages/project-earth-house.html — ảnh phụ: nhà ẩn trong đồi | openverse | CC BY 2.0 | ✓ |
| `assets/img/project-silent-courtyard.jpg` | The Silent Courtyard — ảnh bìa: sân trong nhiệt đới | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/material-moss.jpg` | pages/materials.html — rêu & cây xanh | openverse | CC CC0 1.0 | ✓ |
| `assets/img/material-earth.jpg` | pages/materials.html — đất | openverse | CC CC0 1.0 | ✓ |
| `assets/img/material-wood.jpg` | pages/materials.html — gỗ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/material-concrete-curve.jpg` | pages/materials.html — bê tông cong | openverse | CC CC0 1.0 | ✓ |
| `assets/img/material-light-shadow.jpg` | pages/materials.html — ánh sáng & bóng đổ trên bê tông | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/courtyard-hoian.jpg` | pages/project-silent-courtyard.html — ảnh phụ: nhà cổ Hội An, bối cảnh | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/stone-tide-detail.jpg` | pages/project-stone-tide.html — ảnh phụ: đá và nước | openverse | CC BY 2.0 | ✓ |
| `assets/img/home-philosophy-cantilever.jpg` | index.html — triết lý: công trình hòa vào suối và rừng | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/material-stone.webp` | pages/materials.html — đá | openverse | CC CC0 1.0 | ✓ |
| `assets/img/process-site-hills.webp` | pages/about.html — quy trình: khảo sát địa hình đồi sương | openverse | CC CC0 1.0 | ✓ |
| `assets/img/courtyard-detail.jpg` | pages/project-silent-courtyard.html — ảnh phụ dọc: sân trong nhiệt đới | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/about-model.jpg` | pages/about.html — ảnh mô hình kiến trúc | openverse | CC BY-NC-ND 2.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Tabs
- Accordion (mở / đóng nội dung)
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Phóng to ảnh (lightbox)
- Lọc theo nhóm
- Điều hướng: 9 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/contact.html, pages/materials.html, pages/works.html).
- Chuyển động (đếm trong code): `data-reveal` ×58, `data-header` ×9, `data-split` ×18, `data-reveal-stagger` ×1, `data-parallax` ×1, `data-marquee` ×1, `data-particles` ×2, `data-reveal="clip"` ×26; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 15:06 26/10/2026: 9 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "Minh An" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 15 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 15:06 26/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Tiêu đề hero giữ nguyên văn tiếng Anh “Architecture that belongs to the earth.” theo yêu cầu cụ thể của BA (đánh dấu lang="en"); mọi chữ còn lại bằng tiếng Việt
- Tên dự án (Earth House, The Silent Courtyard, Stone & Tide, Moss House) và thương hiệu FORM / SPACE giữ nguyên là tên riêng
- Tách website thành 9 trang: trang chủ chỉ giữ phần rút gọn, triết lý + quy trình + chân dung ở trang Về Minh An, Material Studies thành trang Vật liệu, mỗi dự án có trang chi tiết riêng (BA yêu cầu chức năng xem chi tiết cho cả 4 dự án)
- Bảng màu dùng đúng 4 mã BA đưa (#F3EFE6, #B96F50, #555B43, #292923) thay cho bảng màu preset nature
- Thư viện ảnh mở (Openverse) không có ảnh công trình đúng như mô tả dự án giả lập: dùng ảnh thật gần tinh thần nhất (nhà đất trong đồi, nhà mái cỏ, công trình đá trên suối, sân trong nhiệt đới); trang có ghi rõ ảnh chỉ mang tính minh họa
- Không có ảnh chân dung kiến trúc sư phù hợp: trang Về Minh An dùng ảnh mô hình kiến trúc

Giới hạn:

- Form liên hệ là bản demo, chưa có backend; nút Gửi email mở ứng dụng email bằng mailto
- 4 dự án là nội dung giả lập, không phải công trình thực tế của kiến trúc sư; ảnh minh họa lấy từ thư viện ảnh mở
- Cần ảnh chân dung thật của kiến trúc sư và ảnh công trình thật từ khách
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
