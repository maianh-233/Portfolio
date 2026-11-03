# THE SKIN ARCHIVE

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website thẩm mỹ viện
- **Thương hiệu / dự án:** THE SKIN ARCHIVE
- **Mục đích:** Thiết kế website giới thiệu THE SKIN ARCHIVE, một cơ sở chăm sóc da và thẩm mỹ với cách tiếp cận dựa trên sự tìm hiểu, theo dõi và chăm sóc làn da có hệ thống.

Art direction: Retro Medical Archive. Sử dụng kem cũ, burgundy, nâu mực và xanh xám. Kết hợp typography serif cổ điển với sans-serif hiện đại, nhãn hồ sơ, số hiệu, đường kẻ mảnh và hình ảnh có chất liệu tư liệu. Không sử dụng phong cách luxury hoặc giao diện spa thông thường.
- **Ý tưởng thị giác (AI ghi):** Mỗi trang là một tập hồ sơ lưu trữ: bìa kem cũ có tab giấy, nhãn đánh máy số hiệu (chỉ để thiết kế), đường kẻ đôi mảnh, ảnh kẹp khung trắng xoay nhẹ và lớp hạt phim phủ toàn trang

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Vintage / Retro / Film — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 927 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Young Serif`: đủ ký tự tiếng Anh
- `Work Sans`: đủ ký tự tiếng Anh
- `Courier Prime`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | THE SKIN ARCHIVE — Skin care, kept on record | Trang bìa hồ sơ: giới thiệu triết lý thương hiệu, các nhóm dịch vụ và quy trình tìm hiểu nhu cầu da, dẫn sang Dịch vụ và đặt lịch tư vấn | top, hero → hero-offset, philosophy → story-letter, method-band → marquee-band, service-index → features-numbered, process → process-steps, cta → cta-fullbleed, footer | 5 |
| `pages/about.html` | About Us — THE SKIN ARCHIVE | Câu chuyện thương hiệu, đội ngũ, không gian và quy trình tư vấn trình bày như một bộ tư liệu có cấu trúc | top, page-hero → page-hero, story → story-editorial, team → team-grid, space → gallery-filmstrip, consultation → timeline, faq → faq-accordion, cta → cta-type, footer | 5 |
| `pages/services.html` | Services & Price Guide — THE SKIN ARCHIVE | Danh mục hồ sơ dịch vụ: mỗi mục có mã số minh họa, mô tả, mục đích, thông tin cần biết, giá tham khảo mẫu | top, page-hero → page-hero, catalogue → list-cards, price-notes → pricing-notes, cta → cta-type, footer | 7 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
the-skin-archive/
  web/
    assets/
      css/
        site.css
      img/  (21 ảnh + CREDITS.md)
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

- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 3 ảnh chưa dùng: assets/img/about-space-calm.jpg, assets/img/about-space-reception.webp, assets/img/about-space-towels.jpg

Tool đã ghi 16 lượt tìm (nguồn: openverse), 20 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| vintage archive file folders | openverse | 6 ảnh | 31262 ms |
| woman skin close up face | openverse | 10 ảnh | 13553 ms |
| vintage apothecary bottles | openverse | 3 ảnh | 25817 ms |
| facial skincare treatment clinic | openverse | 12 ảnh | 16156 ms |
| treatment room spa bed | openverse | 10 ảnh | 15992 ms |
| dermatologist examining patient skin | openverse | 1 ảnh | 4246 ms |
| serum dropper bottles skincare | openverse | 0 ảnh | 14439 ms |
| vintage microscope laboratory | openverse | 3 ảnh | 7458 ms |
| handwritten notebook journal desk | openverse | 2 ảnh | 23861 ms |
| skincare products shelf | openverse | 10 ảnh | 18356 ms |
| clinic reception waiting room | openverse | 11 ảnh | 39107 ms |
| rolled towels spa | openverse | 11 ảnh | 17665 ms |
| card catalog drawers library | openverse | 3 ảnh | 18075 ms |
| facial mask treatment woman | openverse | 5 ảnh | 15879 ms |
| cosmetic cream jars | openverse | 10 ảnh | 9160 ms |
| vintage armchair interior lamp | openverse | 5 ảnh | 16787 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-skin.jpg` | index.html — hero ảnh chính (bìa hồ sơ) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-hero-care.jpg` | index.html — hero ảnh phụ chồng lệch | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-story-apothecary.webp` | index.html — story-letter ảnh tư liệu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/svc-cleansing.jpg` | pages/services.html — nhóm làm sạch & phục hồi | openverse | CC CC0 1.0 | ✓ |
| `assets/img/svc-hydration.jpg` | pages/services.html — nhóm cấp ẩm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-process-mirror.jpg` | index.html — quy trình tìm hiểu nhu cầu da | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-space-room.jpg` | pages/about.html — không gian phòng chăm sóc | openverse | CC BY-ND 2.0 | ✓ |
| `assets/img/about-hero-lab.webp` | pages/about.html — page hero ảnh tư liệu phòng nghiên cứu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-story-notes.jpg` | pages/about.html — câu chuyện thương hiệu, sổ ghi chép | openverse | CC BY-NC-SA 4.0 | ✓ |
| `assets/img/about-space-calm.jpg` | pages/about.html — không gian, phòng nghỉ | openverse | CC BY 2.0 | ✗ |
| `assets/img/svc-analysis.jpg` | pages/services.html — nhóm soi & phân tích da | openverse | CC CC0 1.0 | ✓ |
| `assets/img/svc-renewal.jpg` | pages/services.html — nhóm tái tạo & chống lão hóa | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-space-shelf.webp` | pages/about.html — không gian, kệ sản phẩm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/svc-hero-catalog.webp` | pages/services.html — page hero tủ phiếu lưu trữ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-space-reception.webp` | pages/about.html — không gian tiếp đón | openverse | CC CC0 1.0 | ✗ |
| `assets/img/about-space-towels.jpg` | pages/about.html — không gian, khăn sạch | openverse | CC BY-NC-SA 2.0 | ✗ |
| `assets/img/home-cta-care.jpg` | index.html — CTA cuối tràn viền | openverse | CC CC0 1.0 | ✓ |
| `assets/img/svc-acne.jpg` | pages/services.html — nhóm da mụn & nhạy cảm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-space-lounge.jpg` | pages/about.html — không gian chờ tư vấn | openverse | CC BY 2.0 | ✓ |
| `assets/img/about-consult-skin.jpg` | pages/about.html — quy trình tư vấn | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Cửa sổ (modal)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Accordion (mở / đóng nội dung)
- Phóng to ảnh (lightbox)
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×39, `data-header` ×3, `data-split` ×6, `data-reveal-stagger` ×4, `data-parallax` ×1, `data-marquee` ×1, `data-float` ×1, `data-particles` ×3, `data-reveal="clip"` ×2, `data-drag-scroll` ×1; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:39 21/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "THE SKIN ARCHIVE" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 8 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 11:39 21/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng 3 trang (Home, Services & Price Guide, About Us) theo chú thích của BA; không thêm trang chi tiết dịch vụ, mỗi nhóm dịch vụ có neo #id trên trang Services
- BA yêu cầu công tắc ngôn ngữ Việt – English với nội dung song ngữ đầy đủ, mâu thuẫn với mục 2 concept ('không tạo bộ chuyển ngôn ngữ') → theo chú thích BA: tiếng Anh là mặc định (<html lang="en">, chữ trong HTML là tiếng Anh), bản tiếng Việt lưu trong thuộc tính data-vi và đổi bằng nút EN / VI (site.js, nhớ lựa chọn bằng localStorage)
- Khi chuyển sang tiếng Việt, font tiêu đề đổi sang Lora và font nhãn sang IBM Plex Mono (Young Serif, Courier Prime không đủ dấu tiếng Việt)
- Bảng màu theo art direction của BA (kem cũ, burgundy, nâu mực, xanh xám) thay cho bảng màu preset film; vẫn khai báo tên màu preset trong tw-config
- Mã số SA-xx trên dịch vụ chỉ là nhãn thiết kế; footer mọi trang ghi rõ không phải hồ sơ y tế. Không dùng ảnh trước–sau, hồ sơ bệnh nhân, chứng nhận hay số liệu điều trị
- Đội ngũ hiển thị bằng chữ cái đầu tên (không có ảnh thật của nhân sự), không ghi bằng cấp / chứng chỉ

Giới hạn:

- Form 'Book a Consultation' là bản demo, chưa có backend, chưa gửi dữ liệu
- Giá trên trang Services là giá mẫu để minh họa thiết kế, cần THE SKIN ARCHIVE cung cấp giá thật
- Tên nhân sự, địa chỉ, số điện thoại, giờ mở cửa là nội dung mẫu cần khách xác nhận
- Ảnh là ảnh stock minh họa (Openverse), cần thay bằng ảnh thật của cơ sở
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
