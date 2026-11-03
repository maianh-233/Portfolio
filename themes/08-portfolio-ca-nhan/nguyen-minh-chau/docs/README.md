# Nguyễn Minh Châu

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website portfolio cá nhân
- **Thương hiệu / dự án:** Nguyễn Minh Châu
- **Mục đích:** Portfolio cá nhân của một Traditional Wedding Planner: giới thiệu chân dung, hiểu biết nghi lễ cưới hỏi Việt, dự án tiêu biểu, kinh nghiệm, học vấn và CV để ứng tuyển / giới thiệu bản thân với nhà tuyển dụng, studio cưới và các gia đình _(AI suy luận — BA không ghi)_
- **Ý tưởng thị giác (AI ghi):** Dấu triện đỏ và khung vòm cửa nhà rường: mỗi ảnh đặt trong khung vòm / viền chỉ vàng cổ, con dấu đỏ đóng như chữ ký trên hero, dự án, chứng chỉ và CV

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Neo-Brutalism / Bold — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 5.715 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Bricolage Grotesque`: đủ ký tự tiếng Anh
- `Instrument Serif`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | Nguyễn Minh Châu · Traditional Wedding Planner | Landing page portfolio một trang: chân dung, câu chuyện nghề, dự án, năng lực, kinh nghiệm, học vấn, liên hệ và CV | top, home → hero-offset, rites → marquee-band, about → story-editorial, portfolio → gallery-lookbook, heritage → quote-full, expertise → features-tabs, experience → timeline, education → features-bento, contact → cta-type, footer | 11 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
nguyen-minh-chau/
  web/
    assets/
      css/
        site.css
      files/
        nguyen-minh-chau-cv-sample.txt
      img/  (15 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        tw-config.js
        ui.js
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

- **⚠ Một số lượt tìm ảnh lỗi:** 1/15 lượt lỗi (timeout)
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 7 ảnh chưa dùng: assets/img/hero-ceremony-detail.jpg, assets/img/about-ao-dai.jpg, assets/img/project-to-hong-family.jpg, assets/img/expertise-ceremony.jpg

Tool đã ghi 15 lượt tìm (nguồn: openverse), 17 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| vietnamese woman ao dai portrait | — | lỗi timeout | 72993 ms |
| vietnamese engagement ceremony trays | openverse | 1 ảnh | 29189 ms |
| vietnamese traditional wedding | openverse | 17 ảnh | 27749 ms |
| lotus flower wedding decoration | openverse | 11 ảnh | 28757 ms |
| ao dai bride groom | openverse | 15 ảnh | 21560 ms |
| vietnamese ancestral altar | openverse | 0 ảnh | 11879 ms |
| woman ao dai elegant | openverse | 13 ảnh | 20654 ms |
| wedding flowers table arrangement | openverse | 10 ảnh | 27478 ms |
| ao dai woman hue | openverse | 16 ảnh | 28363 ms |
| vietnam wedding ceremony family | openverse | 16 ảnh | 28143 ms |
| red wedding gift boxes | openverse | 12 ảnh | 17496 ms |
| betel areca nut | openverse | 9 ảnh | 16630 ms |
| vietnamese wedding dress khan dong | openverse | 2 ảnh | 39476 ms |
| hue wedding costumes museum | openverse | 9 ảnh | 30150 ms |
| hue garden house vietnam | openverse | 12 ảnh | 18491 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/project-hong-duyen.jpg` | index.html — project 01 Hong Duyen engagement ceremony | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/project-sen-hong-lotus.webp` | index.html — project 02 Sen Hong lotus concept | openverse | CC CC0 1.0 | ✓ |
| `assets/img/project-to-hong-table.jpg` | index.html — project 03 To Hong family wedding table | openverse | CC CC0 1.0 | ✓ |
| `assets/img/expertise-embroidery.jpg` | index.html — expertise detail image, hand embroidery | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/hero-incense-ritual.jpg` | index.html — hero secondary image, ritual incense | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/hero-portrait-ao-dai.jpg` | index.html — hero portrait, woman in ao dai | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/hero-ceremony-detail.jpg` | index.html — hero secondary, ceremony still life | openverse | CC BY 2.0 | ✗ |
| `assets/img/about-ao-dai.jpg` | index.html — about me image | openverse | CC BY-NC-SA 2.0 | ✗ |
| `assets/img/project-to-hong-family.jpg` | index.html — project 03 family wedding | openverse | CC BY 2.0 | ✗ |
| `assets/img/expertise-ceremony.jpg` | index.html — expertise detail image | openverse | CC BY-NC-SA 2.0 | ✗ |
| `assets/img/experience-wedding-day.jpg` | index.html — experience section image | openverse | CC BY-NC-SA 2.0 | ✗ |
| `https://upload.wikimedia.org/wikipedia/commons/5/50/Do_le_an_hoi.JPG` | index.html — hero secondary image, betrothal trays | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/e/e7/Thaiquoc-ngockieu.jpg` | index.html — project 01 Hong Duyen detail | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://upload.wikimedia.org/wikipedia/commons/1/13/VNese_Wedding_021.jpg` | index.html — about section image | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/5/50/Trau_cau_%28Vietnam%29.JPG` | index.html — expertise detail image | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `assets/img/expertise-areca-betel.jpg` | index.html — expertise main image, areca and betel offering | openverse | CC BY 2.0 | ✓ |
| `assets/img/project-to-hong-wedding.jpg` | index.html — project 03 To Hong, traditional dress | openverse | CC BY-ND 2.0 | ✓ |
| `assets/img/project-to-hong-hue-garden.jpg` | index.html — project 03 To Hong, Hue garden house venue | openverse | CC BY-NC 2.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

2 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero secondary image, betrothal trays — https://upload.wikimedia.org/wikipedia/commons/5/50/Do_le_an_hoi.JPG
- index.html — about section image — https://upload.wikimedia.org/wikipedia/commons/1/13/VNese_Wedding_021.jpg

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Đánh dấu mục đang xem trên menu
- Accordion (mở / đóng nội dung)
- Phóng to ảnh (lightbox)
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Nút về đầu trang
- Điều hướng: 1 trang liên kết qua header / footer (menu: index.html).
- Chuyển động (đếm trong code): `data-reveal` ×24, `data-header` ×1, `data-split` ×2, `data-reveal-stagger` ×2, `data-parallax` ×1, `data-marquee` ×1, `data-float` ×1, `data-particles` ×1, `data-magnetic` ×2, `data-reveal="clip"` ×9; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 14:39 26/10/2026: 1 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 3 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✗ Ngôn ngữ: 1 trang chưa đúng tiếng Anh: index.html
- ✓ Tên thương hiệu: "Nguyễn Minh Châu" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 5 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 14:39 26/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng một landing page (index.html) theo yêu cầu rõ của BA: 'Chỉ xây dựng một landing page', menu cuộn tới section trên cùng trang
- Màu và font theo BA (đỏ trầm #8E2028, kem #F7F0E5, vàng cổ #B79A62, nâu đậm #3C2B25; Cormorant Garamond + Be Vietnam Pro) thay cho bảng màu / font của preset Bold; chỉ giữ tinh thần chữ lớn, khối màu đậm, chi tiết lệch của preset
- Không dùng con trỏ tùy biến / tilt của preset vì phong cách heritage editorial cần sự tĩnh và trang trọng
- Đoạn giới thiệu dài trong hero được rút gọn cho vừa màn hình đầu; nguyên văn đặt ở About Me dưới dạng trích dẫn
- Nút DOWNLOAD CV tải file CV mẫu dạng văn bản (assets/files/nguyen-minh-chau-cv-sample.txt); VIEW MY CV mở cửa sổ CV ngay trên trang
- Một số ảnh đã tải nhưng không đúng chủ đề (about-ao-dai, hero-ceremony-detail, project-to-hong-family, expertise-ceremony, experience-wedding-day) được loại; link Wikimedia Thaiquoc-ngockieu / Trau_cau bị chặn (429) nên thay bằng ảnh tải về, không dùng trên trang

Lỗi QA còn mở:

- [Cấu trúc website] : Website chỉ có 1 trang — chế độ này dựng website nhiều trang theo sitemap.
- [Mức chuyển động] : BA chọn Level 2 nhưng trang dùng hiệu ứng Level 3: data-magnetic.
- [Ngôn ngữ] index.html: Nội dung trang có 51 ký tự tiếng Việt có dấu — website chọn tiếng Anh.

Giới hạn:

- Toàn bộ dự án, kinh nghiệm, bằng cấp, chứng chỉ là dữ liệu minh họa, không phải thành tích thật
- LinkedIn / Instagram là hồ sơ demo, chưa có liên kết thật
- CV là file mẫu dạng văn bản, chưa có bản PDF thật
- Một số ảnh dùng link Wikimedia Commons, cần thay bằng ảnh thật của Minh Châu và các dự án
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
