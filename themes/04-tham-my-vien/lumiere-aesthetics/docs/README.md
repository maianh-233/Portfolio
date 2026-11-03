# LUMIÈRE AESTHETICS

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website thẩm mỹ viện
- **Thương hiệu / dự án:** LUMIÈRE AESTHETICS
- **Mục đích:** Thiết kế website đa trang giới thiệu thẩm mỹ viện LUMIÈRE AESTHETICS, thuộc lĩnh vực thẩm mỹ y khoa cao cấp.
- **Ý tưởng thị giác (AI ghi):** Khung vòm (arch) bo tròn phía trên như cửa sổ phòng khám ánh sáng dịu, lặp lại ở ảnh hero, ảnh câu chuyện và chân dung; nền trắng ngà xen be sáng và champagne, phân tách bằng đường kẻ mảnh kiểu tạp chí

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Minimal / Premium / Editorial — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (BA chọn) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 1.142 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: thiếu ký tự tiếng Việt → cần fallback
- `Geist`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | LUMIÈRE AESTHETICS — Vẻ đẹp tự nhiên, chuẩn mực y khoa | Giới thiệu định hướng thẩm mỹ, các nhóm dịch vụ nổi bật, thế mạnh chuyên môn và mời đặt lịch tư vấn | top, hero → hero-split, dinh-huong → story-editorial, dich-vu → features-numbered, the-manh → features-bento, loi-bac-si → quote-full, tu-van → cta-type, footer | 4 |
| `pages/about.html` | Về chúng tôi — LUMIÈRE AESTHETICS | Kể câu chuyện thương hiệu, giới thiệu đội ngũ chuyên gia, cơ sở vật chất, quy trình tư vấn và cam kết an toàn | top, page-hero → page-hero, cau-chuyen → story-letter, doi-ngu → team-grid, co-so → gallery-lookbook, quy-trinh → process-steps, cam-ket → features-numbered, tu-van → cta-type, footer | 4 |
| `pages/services.html` | Dịch vụ thẩm mỹ & Bảng giá — LUMIÈRE AESTHETICS | Trình bày 4 nhóm dịch vụ (chăm sóc da, trẻ hóa da, điều trị da, thẩm mỹ không phẫu thuật), mỗi dịch vụ có mô tả, mục đích, thời lượng và giá tham khảo | top, page-hero → page-hero, cham-soc-da → pricing-editorial, tre-hoa-da → pricing-editorial, dieu-tri-da → pricing-band, khong-phau-thuat → pricing-dark, luu-y → faq-accordion, tu-van → cta-type, footer | 4 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
lumiere-aesthetics/
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

- **⚠ Một số lượt tìm ảnh lỗi:** 6/23 lượt lỗi (timeout)

Tool đã ghi 23 lượt tìm (nguồn: openverse), 12 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| modern aesthetic clinic interior | openverse | 13 ảnh | 31356 ms |
| dermatologist consultation patient | openverse | 2 ảnh | 19273 ms |
| facial skincare treatment spa | openverse | 12 ảnh | 17331 ms |
| beauty salon interior | openverse | 10 ảnh | 17787 ms |
| doctor portrait woman | openverse | 13 ảnh | 37780 ms |
| botox injection face | openverse | 8 ảnh | 22597 ms |
| facial treatment beautician | openverse | 12 ảnh | 18797 ms |
| laser skin treatment | openverse | 11 ảnh | 28870 ms |
| examination room clinic modern | openverse | 12 ảnh | 17007 ms |
| serum dropper bottle skincare | openverse | 1 ảnh | 59673 ms |
| minimal lobby reception interior | openverse | 6 ảnh | 34761 ms |
| dermatology skin examination | — | lỗi timeout | 63981 ms |
| spa treatment room bed | — | lỗi timeout | 50946 ms |
| medical equipment clinic interior | — | lỗi timeout | 37273 ms |
| spa treatment room | — | lỗi timeout | 41428 ms |
| dermatologist examining skin patient | openverse | 0 ảnh | 42335 ms |
| aesthetic clinic interior treatment room | openverse | 7 ảnh | 61971 ms |
| luxury clinic reception lounge | openverse | 5 ảnh | 38190 ms |
| facial treatment spa bed | openverse | 12 ảnh | 31370 ms |
| acne skin treatment face | openverse | 4 ảnh | 45178 ms |
| minimal white interior chairs | openverse | 9 ảnh | 42140 ms |
| beauty salon treatment room | — | lỗi timeout | 50948 ms |
| doctor consultation desk woman | — | lỗi timeout | 69805 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-lan-da.jpg` | index.html — hero, chân dung làn da | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-team-bac-si-nu.jpg` | pages/about.html — đội ngũ, bác sĩ nữ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-team-bac-si-nam.jpg` | pages/about.html — đội ngũ, bác sĩ nam | openverse | CC CC0 1.0 | ✓ |
| `assets/img/services-laser-tre-hoa.jpg` | pages/services.html — nhóm trẻ hóa da | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/services-tiem-khong-phau-thuat.jpg` | pages/services.html — nhóm thẩm mỹ không phẫu thuật | openverse | CC PDM 1.0 | ✓ |
| `assets/img/home-serum-duoc-my-pham.webp` | index.html — bento thế mạnh, dược mỹ phẩm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/services-cham-soc-da.jpg` | pages/services.html — nhóm chăm sóc da | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-dinh-huong-tham-my.jpg` | index.html — định hướng thẩm mỹ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-the-manh-cong-nghe.jpg` | index.html — bento thế mạnh, công nghệ laser | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/services-dieu-tri-da.jpg` | pages/services.html — nhóm điều trị da | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-phong-cho.jpg` | pages/about.html — cơ sở vật chất, phòng chờ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-phong-tu-van.jpg` | pages/about.html — cơ sở vật chất, phòng tư vấn riêng | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/about.html — doi-ngu — bác sĩ & điều dưỡng khác (từ khóa dự kiến: "asian female doctor portrait")
- pages/about.html — co-so — phòng thủ thuật vô khuẩn (từ khóa dự kiến: "aesthetic clinic treatment room")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Cửa sổ (modal)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Phóng to ảnh (lightbox)
- Accordion (mở / đóng nội dung)
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×92, `data-count-to` ×1, `data-header` ×3, `data-reveal-stagger` ×11.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 14:18 20/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "LUMIÈRE AESTHETICS" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 9 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 14:18 20/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Giữ đúng 3 trang chính BA yêu cầu (Trang chủ, Dịch vụ & Bảng giá, Về chúng tôi); không tạo trang chi tiết dịch vụ hay trang liên hệ riêng — liên hệ nằm ở footer và form đặt lịch dạng cửa sổ trên mọi trang
- Hero trang chủ dùng hero-split (chia đôi ảnh và nội dung) theo chú thích BA thay cho hero-type của preset editorial
- Concept ghi 'không tạo bộ chuyển ngôn ngữ' nhưng chú thích BA yêu cầu nút chuyển Việt – English với nội dung đủ hai ngôn ngữ → làm theo chú thích BA: HTML viết tiếng Việt (lang=vi), bản tiếng Anh nằm trong thuộc tính data-en và được site.js áp khi chọn EN (lưu lựa chọn, tải lại trang để thông báo form đúng ngôn ngữ)
- Font display Instrument Serif thiếu ký tự tiếng Việt → thay bằng Cormorant Garamond (đủ tiếng Việt); body giữ Geist
- Bảng màu preset được ánh xạ sang màu BA yêu cầu: trắng ngà, be sáng, champagne, nâu nhạt

Giới hạn:

- Form 'Đặt lịch tư vấn' là bản demo, chưa có backend — thông tin chưa được gửi đi
- Giá dịch vụ là giá tham khảo mẫu do BA chưa cung cấp, cần thẩm mỹ viện xác nhận
- Tên, chức danh bác sĩ, địa chỉ, số điện thoại, giờ làm việc là nội dung mẫu, cần khách cung cấp thông tin thật
- Cần ảnh thật từ khách: chân dung đội ngũ bác sĩ người Việt, phòng thủ thuật và thiết bị của phòng khám
- Không có bán hàng, giỏ hàng hay thanh toán trực tuyến (theo yêu cầu BA)
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
