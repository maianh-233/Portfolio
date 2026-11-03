# PIXEL SKIN STUDIO

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website thẩm mỹ viện
- **Thương hiệu / dự án:** PIXEL SKIN STUDIO
- **Mục đích:** Thiết kế website giới thiệu PIXEL SKIN STUDIO, một studio thẩm mỹ và chăm sóc da hướng đến khách hàng trẻ, yêu thích sự khác biệt và phong cách hiện đại.

Art direction: Pop Graphic Design. Sử dụng cam điện, tím, xanh lime và trắng. Typography đậm, hình khối hình học, sticker đồ họa, đường viền tương phản và các mảng màu lớn. Bố cục vui nhộn nhưng có hệ thống, không biến website thành trò chơi hoặc giao diện thiếu chuyên nghiệp.
- **Ý tưởng thị giác (AI ghi):** Ô pixel: khối màu phẳng bo góc vừa và ô vuông nhỏ đánh dấu nhóm, viền mảnh, bóng mềm; màu cam điện / tím / lime phân nhóm dịch vụ xuyên suốt, giọng hình ảnh trưởng thành và đáng tin

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Bold / Experimental / Creative — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 893 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Bricolage Grotesque`: đủ ký tự tiếng Việt
- `Instrument Serif`: thiếu ký tự tiếng Việt → cần fallback

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | PIXEL SKIN STUDIO - Chăm da kỹ, sống chất riêng | Giới thiệu studio, bốn nhóm dịch vụ, triết lý chăm sóc da; dẫn sang Dịch vụ & Bảng giá, Về chúng tôi và mở form đặt lịch tư vấn | top, hero → hero-offset, ticker → marquee-band, studio → story-letter, nhom-dich-vu → teaser-row, triet-ly → quote-full, danh-gia → testimonials-carousel, cta → cta-type, footer → footer-big | 3 |
| `pages/about.html` | Về chúng tôi - PIXEL SKIN STUDIO | Câu chuyện thương hiệu, không gian studio, đội ngũ và cách tiếp cận khách hàng | top, page-hero → page-hero, cau-chuyen → story-editorial, khong-gian → gallery-lookbook, doi-ngu → team-grid, cach-tiep-can → features-alternate, cta → cta-type, footer → footer-big | 5 |
| `pages/services.html` | Dịch vụ & Bảng giá - PIXEL SKIN STUDIO | Trình bày dịch vụ bằng khối đồ họa có số thứ tự, màu phân nhóm, mô tả ngắn; cách báo giá; quy trình buổi chăm sóc; câu hỏi thường gặp | top, page-hero → page-hero, nhom → features-bento, danh-muc → features-numbered, bang-gia → stats-band, quy-trinh → timeline, faq → faq-accordion, cta → cta-type, footer → footer-big | 4 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
pixel-skin-studio/
  web/
    assets/
      css/
        site.css
      img/  (13 ảnh + CREDITS.md)
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

- **✓ Chuỗi ảnh hoạt động:** 12 ảnh được dùng trên 3 trang

Tool đã ghi 11 lượt tìm (nguồn: openverse), 12 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| asian woman skincare portrait | openverse | 12 ảnh | 7178 ms |
| facial treatment beauty salon | openverse | 12 ảnh | 11572 ms |
| serum dropper skincare | openverse | 0 ảnh | 11542 ms |
| beauty salon interior | openverse | 7 ảnh | 191 ms |
| facial cleansing foam face | openverse | 4 ảnh | 11826 ms |
| cosmetologist facial treatment clinic | openverse | 0 ảnh | 14746 ms |
| facial mask woman sheet | openverse | 12 ảnh | 25512 ms |
| skincare products bottles shelf | openverse | 13 ảnh | 13815 ms |
| LED light therapy face | openverse | 11 ảnh | 20518 ms |
| spa treatment room | openverse | 10 ảnh | 248 ms |
| esthetician client consultation | openverse | 0 ảnh | 11176 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-portrait.jpg` | index.html — ảnh chân dung chính hero | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-hero-smile.jpg` | index.html — ảnh chân dung phụ hero | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-philosophy-skincare.jpg` | index.html — ảnh giới thiệu studio / triết lý | openverse | CC CC0 1.0 | ✓ |
| `assets/img/service-cham-soc-da.jpg` | pages/services.html — chăm sóc da / cấp ẩm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-soi-da-guong.jpg` | pages/about.html — cách tiếp cận khách hàng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/service-lam-sach-sau.webp` | pages/services.html — làm sạch chuyên sâu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/service-sac-to.jpg` | pages/services.html — hỗ trợ cải thiện sắc tố | openverse | CC CC0 1.0 | ✓ |
| `assets/img/service-mat-na-than.webp` | pages/services.html — chăm sóc da dầu mụn | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-san-pham.webp` | pages/about.html — không gian studio / kệ sản phẩm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-phong-tri-lieu.jpg` | pages/about.html — không gian studio, phòng chăm sóc | openverse | CC BY-ND 2.0 | ✓ |
| `assets/img/about-cau-chuyen.jpg` | pages/about.html — câu chuyện thương hiệu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-giuong-cham-soc.jpg` | pages/about.html — không gian studio, ảnh phụ | openverse | CC BY-ND 2.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/about.html — doi-ngu (từ khóa dự kiến: "esthetician client consultation")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Carousel
- Cửa sổ (modal)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Phóng to ảnh (lightbox)
- Accordion (mở / đóng nội dung)
- Lọc theo nhóm
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×32, `data-header` ×3, `data-split` ×3, `data-reveal-stagger` ×7, `data-parallax` ×1, `data-marquee` ×1, `data-magnetic` ×7, `data-reveal="clip"` ×6; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:17 21/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 1 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "PIXEL SKIN STUDIO" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 17 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 10:33 21/10/2026 | Dựng website | lỗi: Đã chạm giới hạn sử dụng của tài khoản, vui lòng chờ rồi thử lại. Hạn mức sẽ được làm mới lúc 13:30 21-10. |
| 11:08 21/10/2026 | Dựng website | xong |
| 11:17 21/10/2026 | Sửa: Họ muốn giữ màu sắc nhưng phong cách này hơi trẻ con quá . Hãy giữu nội dung giữ màu đổi phong cách phù hợp hơn | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng 3 trang (Trang chủ, Dịch vụ & Bảng giá, Về chúng tôi) theo chú thích của BA; form tư vấn nằm trong cửa sổ (modal) dùng chung, không có trang Liên hệ riêng
- Có công tắc Việt / English theo chú thích của BA (ghi đè quy tắc 'không tạo bộ chuyển ngôn ngữ'): nội dung song ngữ đầy đủ, mặc định tiếng Việt, <html lang> đổi theo lựa chọn
- Bảng màu theo art direction của BA: cam điện (signal), tím (grape, thay cobalt của preset), lime (acid), trắng (paper), chữ đen (ink)
- Bỏ Instrument Serif của preset vì thiếu ký tự tiếng Việt
- Sửa theo góp ý 'phong cách hơi trẻ con': giữ nguyên màu và nội dung; đổi font sang Be Vietnam Pro (đậm vừa 600), bỏ sticker sao / nổ xoay, chữ xoay nghiêng, chấm nền, viền đen dày và bóng đổ cứng; thay bằng viền mảnh, bóng mềm, bo góc 16px, ô vuông 'pixel' làm điểm nhấn
- Không hiển thị giá vì BA chưa cung cấp dữ liệu giá (theo chú thích); khối Bảng giá giải thích cách báo giá sau buổi soi da
- Không dùng con trỏ tùy biến (data-cursor) để giữ tính dễ đọc, đáng tin cậy cho nội dung y khoa

Lỗi QA còn mở:

- [Mức chuyển động] : BA chọn Level 2 nhưng trang dùng hiệu ứng Level 3: data-magnetic.

Giới hạn:

- Form Đặt lịch tư vấn là bản demo, chưa có backend
- Giá dịch vụ chưa có dữ liệu: cần studio cung cấp để thêm vào trang Dịch vụ & Bảng giá
- Địa chỉ, số điện thoại, giờ mở cửa, tên đội ngũ và đánh giá khách là nội dung mẫu, cần khách xác nhận
- Cần ảnh thật của đội ngũ và không gian studio; ảnh hiện tại là ảnh minh họa có giấy phép mở
- Thông báo lỗi form theo ngôn ngữ lúc mở trang; đổi ngôn ngữ xong tải lại trang để thông báo form đổi theo
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
