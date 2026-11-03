# MANGA CHRONICLE

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Web Quảng cáo du lịch khám phá các studio manga Nhật Bản
- **Thương hiệu / dự án:** MANGA CHRONICLE
- **Mục đích:** Thiết kế và xây dựng website MANGA CHRONICLE, một nền tảng giới thiệu và khám phá văn hóa manga Nhật Bản. Đây là website nhiều trang, không phải landing page, không có chức năng mua bán.
- **Ý tưởng thị giác (AI ghi):** Phiếu hồ sơ lưu trữ: mỗi khối là một tờ phiếu giấy ngà có mã ARCHIVE NO., đường kẻ mực và con dấu đỏ son đóng xuống khi cuộn tới

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Bold / Experimental / Creative — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 4.592 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Bricolage Grotesque`: đủ ký tự tiếng Việt
- `Instrument Serif`: thiếu ký tự tiếng Việt → cần fallback

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | MANGA CHRONICLE - Mỗi trang truyện là một dấu vết lịch sử | Mở kho lưu trữ: hồ sơ nổi bật, dòng thời gian, quy trình sáng tác, địa điểm, hồ sơ mới và giới thiệu ngắn; dẫn sang Kho lưu trữ | top, hero → hero-split, ho-so-noi-bat → features-bento, dong-thoi-gian → timeline, phia-sau → features-numbered, thong-diep → quote-full, dau-tich → gallery-lookbook, ho-so-moi → teaser-row, gioi-thieu → story-letter, cta → cta-type, footer → footer-big | 9 |
| `ho-so.html` | Chi tiết hồ sơ - MANGA CHRONICLE | Một template chung cho mọi hồ sơ (ho-so.html?id=<slug>): breadcrumb, nhãn danh mục + mã hồ sơ, tiêu đề, ảnh, giới thiệu, các mục nội dung, thông tin bối cảnh, nguồn tham khảo, hồ sơ liên quan, nút quay lại | top, ho-so → detail-article, lien-quan → teaser-row, footer → footer-big | 0 |
| `kho-luu-tru.html` | Kho lưu trữ - MANGA CHRONICLE | Trang khám phá tổng hợp: lọc theo Tất cả / Lịch sử / Tác giả / Tác phẩm / Nghệ thuật sáng tác / Địa điểm, tìm kiếm, trạng thái không có kết quả; thẻ mở đúng hồ sơ | top, page-hero → page-hero, kho → list-cards, cta → cta-type, footer → footer-big | 1 |

## 4. Cấu trúc thư mục

```
_build/
  sitemap.json
assets/
  css/
    site.css
  img/  (12 ảnh + CREDITS.md)
  js/
    atmos.js
    data.js
    motion.js
    site.js
    tw-config.js
    ui.js
ho-so.html
index.html
kho-luu-tru.html
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

- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 2 ảnh chưa dùng: assets/img/check-kyoto-sketch.jpg, assets/img/hoso-tap-chi-tuan.jpg

Tool đã ghi 21 lượt tìm (nguồn: openverse), 12 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| Hokusai Manga sketchbook page | openverse | 10 ảnh | 9928 ms |
| Choju giga scroll frogs rabbits | openverse | 0 ảnh | 10625 ms |
| Kyoto International Manga Museum | openverse | 10 ảnh | 8909 ms |
| Tezuka Osamu Manga Museum Takarazuka | openverse | 2 ảnh | 13497 ms |
| Tokiwa-so manga museum Toshima | openverse | 0 ảnh | 9190 ms |
| Hokusai manga woodblock book | openverse | 9 ảnh | 4128 ms |
| Chojugiga | openverse | 0 ảnh | 3897 ms |
| manga museum kyoto bookshelves | openverse | 12 ảnh | 8647 ms |
| Takarazuka Tezuka museum | openverse | 0 ảnh | 3641 ms |
| old archive paper documents | openverse | 13 ảnh | 5981 ms |
| Mizuki Shigeru Road Sakaiminato | openverse | 0 ảnh | 11788 ms |
| ink pen nib drawing paper | openverse | 13 ảnh | 8228 ms |
| manga artist drawing desk | openverse | 10 ảnh | 7920 ms |
| Tezuka Osamu | openverse | 2 ảnh | 132 ms |
| Japanese manga magazines stack | openverse | 11 ảnh | 8465 ms |
| Kyoto manga museum | openverse | 3 ảnh | 10006 ms |
| manga library shelves Japan | openverse | 10 ảnh | 11548 ms |
| Takarazuka city Hyogo | openverse | 1 ảnh | 6271 ms |
| screentone manga drawing | openverse | 0 ảnh | 5550 ms |
| Japan Punch Wirgman cartoon | openverse | 6 ảnh | 8818 ms |
| old japanese books stack | openverse | 11 ảnh | 9745 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/hero-oyo-manga.webp` | index.html — hero, trang sổ phác thảo Ōyō manga | openverse | CC CC0 1.0 | ✓ |
| `assets/img/hoso-hokusai-manga.jpg` | hồ sơ Hokusai Manga — ảnh sổ phác thảo Hokusai tại MFA Boston | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/hoso-ishinomaki-manga-museum.jpg` | hồ sơ địa điểm Bảo tàng Manga Ishinomori, Ishinomaki | openverse | CC BY 2.0 | ✓ |
| `assets/img/hoso-battle-of-frogs.jpg` | hồ sơ lịch sử tranh biếm họa thời Minh Trị — Battle of the Frogs 1877 | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/archive-old-paper.webp` | kho-luu-tru.html — page hero, giấy viết tay cũ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/process-ngoi-but.webp` | index.html — Phía sau trang truyện, cận cảnh ngòi bút mực | openverse | CC CC0 1.0 | ✓ |
| `assets/img/check-kyoto-sketch.jpg` | kiểm tra — ảnh phác thảo manga tại Kyoto | openverse | CC BY 2.0 | ✗ |
| `assets/img/hoso-tap-chi-tuan.jpg` | hồ sơ tạp chí manga tuần 1959 — hiệu sách manga Nhật | openverse | CC BY 2.0 | ✗ |
| `assets/img/hoso-ponchi-e.jpg` | hồ sơ Japan Punch / ponchi-e — tranh 1874 | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/hoso-kibyoshi.webp` | hồ sơ sách tranh thời Edo — minh họa Torii Kiyonaga | openverse | CC CC0 1.0 | ✓ |
| `assets/img/hoso-kyosai-animal-circus.jpg` | hồ sơ Kawanabe Kyōsai — Animal Circus | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/index-frog-school.jpg` | index.html — Giới thiệu, tranh Frog School | openverse | CC BY-NC-SA 2.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- index.html — dau-tich (từ khóa dự kiến: "Kyoto International Manga Museum")
- index.html — dau-tich (từ khóa dự kiến: "Tezuka Osamu Manga Museum Takarazuka")
- index.html — dau-tich (từ khóa dự kiến: "Tokiwa-so manga museum Toshima")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Cửa sổ (modal)
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, kho-luu-tru.html).
- Chuyển động (đếm trong code): `data-reveal` ×34, `data-header` ×3, `data-split` ×5, `data-reveal-stagger` ×4, `data-parallax` ×2, `data-drag-scroll` ×1, `data-particles` ×2, `data-reveal="clip"` ×5; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 15:41 16/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "MANGA CHRONICLE" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 12 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 15:41 16/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng 3 template trang theo chú thích BA; 'Giới thiệu' là khu vực #gioi-thieu cuối trang chủ.
- Đường dẫn /kho-luu-tru và /ho-so/:slug được thể hiện bằng kho-luu-tru.html và ho-so.html?id=<slug> để chạy được bằng file://, không cần backend.
- Màu và font theo chú thích BA (giấy ngà, đen mực, đỏ son, nâu lưu trữ; tiêu đề serif) thay cho bảng màu và font của preset Bold. Instrument Serif thiếu ký tự tiếng Việt nên dùng Playfair Display + Be Vietnam Pro.
- Bỏ con trỏ tùy biến, tilt, magnetic của preset Bold vì BA yêu cầu animation nhẹ, tránh chuyển động gây rối.
- Không dùng tranh manga, bìa truyện, nhân vật có bản quyền: ảnh là tranh và sách khắc gỗ thời Edo, Minh Trị (đã hết bản quyền) và ảnh công trình có giấy phép Creative Commons.
- Hai ảnh đã tải nhưng không dùng: check-kyoto-sketch.jpg và hoso-tap-chi-tuan.jpg (có tranh nhân vật manga có bản quyền).

Giới hạn:

- Dữ liệu hồ sơ là dữ liệu mẫu tách riêng ở assets/js/data.js; thông tin dựa trên nguồn công khai, cần BA đối chiếu nguồn trước khi xuất bản.
- Tìm kiếm và bộ lọc chạy bằng JavaScript phía giao diện, chưa có backend / CMS.
- Chưa có ảnh thật cho Kyoto International Manga Museum, Tezuka Osamu Manga Museum, Tokiwa-sō Manga Museum và các hồ sơ tác giả; đang dùng thẻ chữ.
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
