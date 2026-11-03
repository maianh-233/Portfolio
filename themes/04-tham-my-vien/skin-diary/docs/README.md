# SKIN DIARY

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website thẩm mỹ viện
- **Thương hiệu / dự án:** SKIN DIARY
- **Mục đích:** Thiết kế website giới thiệu SKIN DIARY, một thương hiệu thẩm mỹ viện chuyên chăm sóc da và giới thiệu các dịch vụ làm đẹp theo phong cách tạp chí hiện đại.

Art direction: Contemporary Beauty Magazine. Dùng trắng giấy, đỏ cherry, hồng nude và đen. Kết hợp typography tạp chí, tiêu đề lớn, ảnh chân dung cận cảnh, bố cục nhiều cột và các chi tiết đồ họa giống trang in. Tránh giao diện phòng khám truyền thống và không sử dụng layout thương mại điện tử.
- **Ý tưởng thị giác (AI ghi):** Mỗi trang là một số tạp chí làm đẹp: masthead, dòng dateline 'Issue', tiêu đề serif khổng lồ có một chữ nghiêng đỏ cherry, đường kẻ mảnh chia cột và số mục kiểu No. 01 chạy xuyên suốt

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Minimal / Premium / Editorial — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 930 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: đủ ký tự tiếng Anh
- `Geist`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | SKIN DIARY — Skin, kept like a diary | Trang bìa tạp chí: headline, tuyên ngôn thương hiệu, ba nhóm dịch vụ dẫn sang trang Dịch vụ, bài chia sẻ chăm sóc da, kêu gọi đặt lịch tư vấn | top, hero → hero-type, manifesto → story-editorial, chapters → features-numbered, journal → gallery-lookbook, quote → quote-full, book-cta → cta-type, footer | 7 |
| `pages/about.html` | About — SKIN DIARY | Kể câu chuyện thương hiệu qua thư của nhà sáng lập, cách làm việc, không gian thực tế và đội ngũ | top, page-hero → page-hero, letter → story-letter, method → process-steps, space → gallery-lookbook, team → team-grid, book-cta → cta-type, footer | 4 |
| `pages/services.html` | Services & Prices — SKIN DIARY | Trình bày dịch vụ theo 3 chuyên mục biên tập Skin Care / Skin Renewal / Skin Treatment, mỗi dịch vụ có ảnh, mô tả, thời lượng, giá tham khảo; bảng giá đầy đủ theo tab; FAQ | top, page-hero → page-hero, skin-care → features-alternate, skin-renewal → editorial-two-column, skin-treatment → features-bento, price-list → features-tabs, faq → accordion, book-cta → cta-type, footer | 6 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
skin-diary/
  web/
    assets/
      css/
        site.css
      img/  (19 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
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
- Mỗi trang là một file HTML tĩnh, header / footer giống nhau; mỗi khối nội dung là `<section id data-section="<biến thể>">` để sửa riêng từng khối.
- Tailwind CSS nạp qua CDN (`cdn.tailwindcss.com`), font qua Google Fonts.

## 6. Hình ảnh: tìm kiếm & tích hợp

- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 1 ảnh chưa dùng: assets/img/journal-spf.jpg

Tool đã ghi 13 lượt tìm (nguồn: openverse), 19 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| woman face closeup skin portrait | openverse | 10 ảnh | 40882 ms |
| facial treatment spa woman | openverse | 12 ảnh | 7330 ms |
| skincare serum dropper | openverse | 4 ảnh | 15371 ms |
| beauty salon interior | openverse | 7 ảnh | 16465 ms |
| beauty portrait studio red lips | openverse | 13 ảnh | 34257 ms |
| laser skin treatment clinic | openverse | 11 ảnh | 6421 ms |
| face mask skincare woman | openverse | 10 ảnh | 29804 ms |
| esthetician woman portrait | openverse | 0 ảnh | 19538 ms |
| microneedling face treatment | openverse | 0 ảnh | 17155 ms |
| LED light therapy face | openverse | 9 ảnh | 20534 ms |
| spa treatment room | openverse | 12 ảnh | 10733 ms |
| sunscreen cream hand | openverse | 1 ảnh | 21650 ms |
| woman doctor portrait smiling | openverse | 4 ảnh | 30456 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-manifesto-portrait.jpg` | index.html — manifesto section portrait | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-skin-care.jpg` | index.html — Skin Care category teaser | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-skin-renewal.jpg` | index.html — Skin Renewal category teaser | openverse | CC CC0 1.0 | ✓ |
| `assets/img/journal-serum.webp` | index.html — journal article serum | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-cover-portrait.jpg` | index.html — hero magazine cover portrait | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-skin-treatment.jpg` | index.html — Skin Treatment category teaser (laser) | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/svc-signature-facial.jpg` | pages/services.html — Signature Facial | openverse | CC CC0 1.0 | ✓ |
| `assets/img/svc-hydration.jpg` | pages/services.html — Deep Hydration ritual | openverse | CC CC0 1.0 | ✓ |
| `assets/img/svc-peel.jpg` | pages/services.html — Chemical peel (Skin Renewal) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/svc-microneedling.jpg` | pages/services.html — Microneedling (Skin Renewal) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/svc-laser.jpg` | pages/services.html — Fractional laser (Skin Treatment) | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/svc-clarity.jpg` | pages/services.html — Clarity clinic (Skin Treatment) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-treatment-room.jpg` | pages/about.html — treatment room space | openverse | CC BY-ND 2.0 | ✓ |
| `assets/img/about-studio-room.jpg` | pages/about.html — studio room | openverse | CC BY-ND 2.0 | ✓ |
| `assets/img/about-team-founder.jpg` | pages/about.html — team: founder dermatologist | openverse | CC CC0 1.0 | ✓ |
| `assets/img/journal-spf.jpg` | index.html — journal article SPF | openverse | CC BY-NC-SA 2.0 | ✗ |
| `assets/img/journal-routine.jpg` | index.html — journal article evening routine | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-editorial-portrait.jpg` | pages/about.html — story section portrait | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/about.html — team — aesthetician & laser specialist (từ khóa dự kiến: "esthetician woman portrait")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Phóng to ảnh (lightbox)
- Đánh dấu mục đang xem trên menu
- Tabs
- Accordion (mở / đóng nội dung)
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×27, `data-header` ×3, `data-split` ×3, `data-reveal-stagger` ×4, `data-reveal="clip"` ×6.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 09:58 21/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "SKIN DIARY" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 9 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 09:58 21/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng 3 trang chính (Home, Services & Prices, About) theo chú thích của BA; bài chia sẻ chăm sóc da mở trong modal thay vì trang riêng.
- BA yêu cầu hỗ trợ cả tiếng Việt và tiếng Anh nhưng concept.md chốt ngôn ngữ English và cấm bộ chuyển ngôn ngữ → bản demo chỉ tiếng Anh, nút dùng nhãn 'Book a Consultation'; bản tiếng Việt cần làm ở giai đoạn sau.
- Bảng màu theo art direction của BA (trắng giấy, đỏ cherry, hồng nude, đen) thay cho màu preset editorial; vẫn giữ tên màu preset (paper, ink, stone, muted, bronze) và thêm cherry, nude.
- Contact không có trang riêng: thông tin liên hệ ở footer, đặt lịch qua modal form trên mọi trang.

Giới hạn:

- Form 'Book a Consultation' là bản demo, chưa có backend, không gửi đi.
- Giá dịch vụ là giá tham khảo mẫu, cần khách xác nhận.
- Cần ảnh chân dung thật của chuyên viên thẩm mỹ và chuyên viên laser (đang dùng khối chữ cái đầu).
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
