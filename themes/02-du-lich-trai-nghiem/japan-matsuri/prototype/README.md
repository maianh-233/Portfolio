# JAPAN MATSURI

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Web Quảng cáo du lịch khám phá các lễ hội Nhật Bản
- **Thương hiệu / dự án:** JAPAN MATSURI
- **Mục đích:** Xây dựng website giới thiệu du lịch Nhật Bản với chủ đề khám phá và trực tiếp trải nghiệm các lễ hội truyền thống Nhật Bản (Matsuri). Website lấy cảm hứng từ cách Travel Japan kể chuyện về văn hóa, thiên nhiên, vùng miền và trải nghiệm địa phương, kết hợp phong cách thiết kế du lịch hiện đại, giàu hình ảnh.

Tên website: JAPAN MATSURI

Thông điệp: “Chạm vào văn hóa Nhật Bản qua từng mùa lễ hội.”

Ngôn ngữ: 100% tiếng Việt.

Mục tiêu: Giới thiệu lễ hội, địa điểm tổ chức, nét văn hóa đặc trưng và gợi ý trải nghiệm cho du khách.

Phạm vi: Chỉ xây dựng 3 trang chính, không tạo thêm trang ngoài yêu cầu.
- **Ý tưởng thị giác (AI ghi):** Sợi dây đèn lồng đỏ son: mỗi trang mở bằng một dải đèn lồng chấm đỏ trên nền giấy washi / đen mực, nhãn mùa và loại trải nghiệm đặt như con dấu hanko đỏ, tiêu đề serif lớn kiểu tạp chí du lịch

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Nature / Organic / Atmospheric — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (BA chọn) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 4.571 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Fraunces`: đủ ký tự tiếng Việt
- `Manrope`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | JAPAN MATSURI — Chạm vào văn hóa Nhật Bản qua từng mùa lễ hội | Tạo ấn tượng và truyền cảm hứng, dẫn sang danh sách lễ hội và trang chi tiết | top, hero → hero-split, le-hoi-noi-bat → teaser-row, theo-mua → features-tabs, trai-nghiem → features-bento, gioi-thieu → story-editorial, vung-mien → gallery-filmstrip, cta-cuoi → cta-type, footer | 19 |
| `le-hoi-chi-tiet.html` | Gion Matsuri — JAPAN MATSURI | Một mẫu trang chi tiết dùng chung cho mọi lễ hội (le-hoi-chi-tiet.html?slug=…), render từ dữ liệu mẫu; mặc định Gion Matsuri | top, anh-bia → page-hero, cau-chuyen → detail-article, diem-noi-bat → features-numbered, trai-nghiem-du-khach → features-bento, thong-tin-chuyen-di → accordion, le-hoi-lien-quan → teaser-row, footer | 1 |
| `le-hoi.html` | Khám phá lễ hội — JAPAN MATSURI | Tìm kiếm và lọc lễ hội theo tên / địa điểm, mùa, loại trải nghiệm (dữ liệu mẫu assets/js/data.js); nhận tham số ?mua= ?loai= ?q= | top, page-hero → page-hero, tim-le-hoi → list-cards, cta-cuoi → cta-type, footer | 0 |

## 4. Cấu trúc thư mục

```
_build/
  sitemap.json
assets/
  css/
    site.css
  img/  (23 ảnh + CREDITS.md)
  js/
    atmos.js
    data.js
    motion.js
    site.js
    tw-config.js
    ui.js
index.html
le-hoi-chi-tiet.html
le-hoi.html
```

`_build/` là dữ liệu nội bộ của BA Tool (sitemap AI ghi) — không cần khi đưa website lên.

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

- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 4 ảnh chưa dùng: assets/img/le-hoi-hirosaki-sakura.jpg, assets/img/le-hoi-sumidagawa-hanabi.jpg, assets/img/le-hoi-takayama-mua-thu.jpg, assets/img/le-hoi-jidai-matsuri.jpg

Tool đã ghi 27 lượt tìm (nguồn: openverse), 28 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| japanese festival lanterns night | openverse | 7 ảnh | 2772 ms |
| gion matsuri float | openverse | 5 ảnh | 4055 ms |
| nebuta festival float | openverse | 8 ảnh | 2699 ms |
| awa odori dance | openverse | 9 ảnh | 5552 ms |
| awa odori festival street dancers | openverse | 10 ảnh | 10657 ms |
| sapporo snow festival sculpture | openverse | 8 ảnh | 2982 ms |
| hirosaki castle cherry blossom | openverse | 2 ảnh | 7258 ms |
| sumida river fireworks | openverse | 13 ảnh | 5719 ms |
| fireworks tokyo summer night | openverse | 11 ảnh | 7768 ms |
| takayama festival yatai float | openverse | 8 ảnh | 9225 ms |
| jidai matsuri procession kyoto | openverse | 8 ảnh | 11426 ms |
| bon odori dance yukata | openverse | 12 ảnh | 11380 ms |
| yukata women festival | openverse | 4 ảnh | 6607 ms |
| japanese festival food stall yatai | openverse | 10 ảnh | 9530 ms |
| takoyaki street stall japan | openverse | 5 ảnh | 5664 ms |
| matsuri parade mikoshi street | openverse | 2 ảnh | 13799 ms |
| paper lanterns shrine festival night | openverse | 12 ảnh | 14204 ms |
| kyoto autumn maple temple | openverse | 8 ảnh | 4260 ms |
| sakura temple japan spring | openverse | 8 ảnh | 5118 ms |
| shirakawa-go snow winter | openverse | 4 ảnh | 12090 ms |
| kyoto yasaka pagoda street | openverse | 6 ảnh | 9054 ms |
| tokushima naruto iya valley | openverse | 8 ảnh | 9040 ms |
| aomori hirosaki oirase landscape | openverse | 8 ảnh | 11083 ms |
| otaru canal hokkaido | openverse | 8 ảnh | 4473 ms |
| iya valley vine bridge | openverse | 0 ảnh | 11672 ms |
| tokushima city bizan | openverse | 5 ảnh | 7973 ms |
| naruto whirlpools strait | openverse | 5 ảnh | 9933 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/le-hoi-aomori-nebuta.jpg` | le-hoi.html / chi tiết — ảnh xe đèn Nebuta | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/hero-nebuta-dem.jpg` | index.html — hero, lễ hội đêm đèn lồng | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/le-hoi-gion-matsuri.jpg` | le-hoi.html / chi tiết — ảnh Gion Matsuri | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/le-hoi-awa-odori.jpg` | le-hoi.html / chi tiết — ảnh Awa Odori | openverse | CC BY 2.0 | ✓ |
| `assets/img/le-hoi-sapporo-snow.jpg` | le-hoi.html / chi tiết — ảnh tượng tuyết Sapporo | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/le-hoi-hirosaki-sakura.jpg` | le-hoi.html / chi tiết — ảnh lễ hội hoa anh đào Hirosaki | openverse | CC BY 2.0 | ✗ |
| `assets/img/le-hoi-sumidagawa-hanabi.jpg` | le-hoi.html — pháo hoa sông Sumida | openverse | CC BY-NC-ND 2.0 | ✗ |
| `assets/img/trai-nghiem-phao-hoa.jpg` | index.html #trai-nghiem — ngắm pháo hoa | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/le-hoi-takayama-mua-thu.jpg` | le-hoi.html — xe yatai Takayama | openverse | CC BY-NC 2.0 | ✗ |
| `assets/img/le-hoi-jidai-matsuri.jpg` | le-hoi.html — đoàn rước Jidai Matsuri | openverse | CC BY-NC 2.0 | ✗ |
| `assets/img/trai-nghiem-dieu-mua.jpg` | index.html #trai-nghiem — điệu múa Bon Odori | openverse | CC BY 2.0 | ✓ |
| `assets/img/trai-nghiem-yukata.webp` | index.html #trai-nghiem — mặc yukata dạo phố Kyoto | openverse | CC CC0 1.0 | ✓ |
| `assets/img/trai-nghiem-am-thuc.jpg` | index.html #trai-nghiem — quầy takoyaki đường phố | openverse | CC BY 2.0 | ✓ |
| `assets/img/trai-nghiem-dieu-hanh.webp` | index.html #trai-nghiem — xem diễu hành mikoshi | openverse | CC CC0 1.0 | ✓ |
| `assets/img/mua-xuan-hanami.jpg` | index.html #theo-mua — mùa Xuân | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/mua-thu-la-do.jpg` | index.html #theo-mua — mùa Thu | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/mua-dong-tuyet.jpg` | index.html #theo-mua — mùa Đông | openverse | CC BY 2.0 | ✓ |
| `assets/img/le-hoi-awa-odori-2.jpg` | index.html #trai-nghiem — điệu múa Bon Odori | openverse | CC BY 2.0 | ✓ |
| `assets/img/vung-kyoto.jpg` | index.html #vung-mien — Kyoto | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/vung-tokyo.jpg` | index.html #vung-mien — Tokyo (Asakusa) | openverse | CC BY 2.0 | ✓ |
| `assets/img/vung-aomori.jpg` | index.html #vung-mien — Aomori (Hirosaki đêm) | openverse | CC BY 2.0 | ✓ |
| `assets/img/vung-hokkaido.jpg` | index.html #vung-mien — Hokkaido (Otaru) | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/vung-tokushima.jpg` | index.html #vung-mien — Tokushima (xoáy nước Naruto) | openverse | CC BY 2.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Tabs
- Carousel
- Nút về đầu trang
- Accordion (mở / đóng nội dung)
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, le-hoi.html).
- Chuyển động (đếm trong code): `data-reveal` ×38, `data-count-to` ×4, `data-header` ×3.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 16:03 16/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 5 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "JAPAN MATSURI" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 13 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 16:03 16/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Giữ đúng 3 trang theo chú thích BA (Trang chủ, Khám phá lễ hội, Chi tiết lễ hội); mục menu 'Giới thiệu' trỏ tới section #gioi-thieu của trang chủ thay vì tạo trang thứ 4
- Đường dẫn /le-hoi và /le-hoi/:slug chạy bằng file:// nên thành le-hoi.html và le-hoi-chi-tiet.html?slug=<slug> (một mẫu trang chi tiết render từ dữ liệu mẫu trong assets/js/data.js)
- Màu theo BA (đỏ son shu, trắng ngà ivory, đen mực sumi, be washi) thay bảng màu preset nature; giữ font preset Fraunces + Manrope (đủ ký tự tiếng Việt)
- Thêm 3 lễ hội mẫu ngoài danh sách BA (Sumidagawa Fireworks, Takayama mùa thu, Jidai Matsuri) để bộ lọc mùa Thu và loại 'Pháo hoa' có kết quả
- Level 1: chỉ data-reveal fade/up, data-count-to, data-header, hover; 'chuyển ảnh nhẹ' dùng tabs + carousel của ui.js, không nạp atmos.js
- Ảnh Awa Odori là cảnh biểu diễn trên sân khấu (nguồn openverse không có ảnh diễu hành ngoài phố đủ tốt); ảnh Tokushima là lối đi trên cầu Ōnaruto nhìn xuống eo biển Naruto

Giới hạn:

- Dữ liệu lễ hội là nội dung mẫu; thời gian ghi là 'thời gian thường tổ chức', cần kiểm tra lịch chính thức theo từng năm
- Không có backend, đặt tour, đăng nhập hay thanh toán (theo yêu cầu)
- Bộ lọc / tìm kiếm chạy phía trình duyệt trên dữ liệu mẫu
- Form là bản demo: kiểm tra dữ liệu và lưu tạm trong trình duyệt (localStorage), **không gửi đi đâu** — cần backend / dịch vụ form khi chạy thật.
- Nội dung, số liệu, tên người trong website là nội dung mẫu, cần khách xác nhận.

## 10. Cài đặt & chạy

Website tĩnh, **không có bước cài đặt hay build**.

- Mở trực tiếp: nhấp đúp `index.html` (chạy được qua `file://`).
- Hoặc chạy máy chủ tĩnh trong thư mục này: `npx serve .` (cần Node.js) rồi mở địa chỉ được in ra.
- Cần Internet để nạp Tailwind CDN và Google Fonts. Khi đưa lên production nên build Tailwind thành file CSS tĩnh thay cho CDN.
- Đưa lên hosting tĩnh (Netlify, Vercel, GitHub Pages…): tải toàn bộ thư mục, có thể bỏ `_build/`.

## 11. Biến môi trường

- Website **không cần** biến môi trường nào.
- Chỉ BA Tool (khi dựng lại / đổi ảnh) dùng tùy chọn `PEXELS_API_KEY`, `UNSPLASH_ACCESS_KEY` trong `.env` của tool — không đặt thì tool dùng Openverse. Không ghi giá trị khóa vào website.
