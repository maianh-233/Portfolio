# TIỆM BÁNH MỘC MIÊN

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website tiệm bánh
- **Thương hiệu / dự án:** TIỆM BÁNH MỘC MIÊN
- **Mục đích:** Xây dựng website giới thiệu Tiệm Bánh Mộc Miên, một thương hiệu gợi nhớ tiệm bánh Việt Nam xưa, ký ức gia đình và những buổi sáng bình dị. Không gian cần ấm áp, chân thật, không biến thành website du lịch hoặc bảo tàng.
- **Ý tưởng thị giác (AI ghi):** Một tấm bưu thiếp gửi từ tiệm bánh xưa: khung ảnh film viền giấy lệch nhẹ, tem nhãn đánh số, dòng ghi chú viết tay bên lề, và một cành hoa mộc miên nhỏ làm dấu xuyên suốt ba trang

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Vintage / Retro / Film — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 1.898 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Young Serif`: đủ ký tự tiếng Anh
- `Work Sans`: đủ ký tự tiếng Anh
- `Courier Prime`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | TIỆM BÁNH MỘC MIÊN — Yesterday's bakes, today's fond memories | Giới thiệu tiệm bánh như một tấm bưu thiếp, dẫn sang thực đơn và câu chuyện | top, hero → hero-offset, notebook → marquee-band, favourites → teaser-row, story → story-letter, gallery → gallery-lookbook, visit → cta-type, footer | 9 |
| `pages/about.html` | Our story — TIỆM BÁNH MỘC MIÊN | Câu chuyện thương hiệu song ngữ, hành trình, giá trị và không gian làm bánh | top, about-hero → page-hero, letter → story-editorial, journey → timeline, values → features-bento, workshop → gallery-filmstrip, visit → cta-type, footer | 6 |
| `pages/menu.html` | Menu — TIỆM BÁNH MỘC MIÊN | Thực đơn như tờ menu in trên giấy, chia 4 nhóm bánh; không phải catalog thương mại điện tử | top, menu-hero → page-hero, bread → features-numbered, pastries → gallery-lookbook, traditional → features-alternate, seasonal → story-letter, menu-note → cta-type, footer | 6 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
tiem-banh-moc-mien/
  web/
    assets/
      css/
        site.css
      img/  (22 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        site.js
        tw-config.js
        ui.js
    pages/
      about.html
      menu.html
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

- **⚠ Một số lượt tìm ảnh lỗi:** 8/27 lượt lỗi (timeout)

Tool đã ghi 27 lượt tìm (nguồn: openverse), 24 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| bakery bread tray | — | lỗi timeout | 48264 ms |
| banh mi baguette | openverse | 8 ảnh | 27673 ms |
| sponge cake slice | openverse | 8 ảnh | 20160 ms |
| butter cookies | openverse | 5 ảnh | 14176 ms |
| sweet bread buns | openverse | 9 ảnh | 32304 ms |
| castella sponge cake | openverse | 0 ảnh | 22074 ms |
| sponge cake | openverse | 10 ảnh | 12536 ms |
| bakery counter wooden | — | lỗi timeout | 61907 ms |
| bread paper bag | — | lỗi timeout | 31536 ms |
| bakery counter | openverse | 11 ảnh | 202 ms |
| bread paper bag | openverse | 5 ảnh | 9535 ms |
| baker kneading dough | — | lỗi timeout | 34923 ms |
| kneading dough hands | — | lỗi timeout | 31591 ms |
| bread dough flour | — | lỗi timeout | 31546 ms |
| banh mi vietnamese sandwich | — | lỗi timeout | 48190 ms |
| mooncake chinese pastry | openverse | 8 ảnh | 36971 ms |
| pandan cake green | openverse | 8 ảnh | 22344 ms |
| hands kneading dough | openverse | 8 ảnh | 9669 ms |
| wooden bakery counter bread | openverse | 11 ảnh | 54078 ms |
| cream puff choux pastry | — | lỗi timeout | 77800 ms |
| egg tart pastry | openverse | 8 ảnh | 36649 ms |
| vietnamese sandwich baguette | openverse | 3 ảnh | 42396 ms |
| steamed rice cake asian | openverse | 8 ảnh | 27565 ms |
| chiffon cake slice | openverse | 8 ảnh | 25826 ms |
| bread oven bakery baker | openverse | 9 ảnh | 24530 ms |
| bread paper bag | openverse | 5 ảnh | 196 ms |
| rolling pin flour dough table | openverse | 12 ảnh | 67965 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-khay-banh.jpg` | index.html — hero bưu thiếp, khay bánh | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/home-banh-quy.webp` | index.html — món thân quen: bánh quy bơ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-banh-mi-ngot.webp` | index.html — món thân quen: bánh mì ngọt | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-banh-mi.jpg` | index.html — món thân quen: bánh mì | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/home-bong-lan.webp` | index.html — món thân quen: bánh bông lan | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-quay-banh.jpg` | index.html — kể chuyện: quầy bánh | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/about-tiem-hero.jpg` | pages/about.html — hero ảnh tiệm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-giay-goi.webp` | index.html — gallery: bánh trong giấy gói | openverse | CC CC0 1.0 | ✓ |
| `assets/img/menu-banh-trung-thu.jpg` | pages/menu.html — Bánh theo mùa: bánh trung thu | openverse | CC BY 2.0 | ✓ |
| `assets/img/about-nhoi-bot.webp` | pages/about.html — gallery: tay nhồi bột | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-ban-lam-banh.webp` | pages/about.html — gallery: bàn làm bánh | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-ke-banh-go.webp` | index.html — kể chuyện: kệ gỗ bánh mì | openverse | CC CC0 1.0 | ✓ |
| `assets/img/menu-banh-mi-go.webp` | pages/menu.html — Bánh mì: bánh mì trên thớt gỗ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-ray-bot.webp` | pages/about.html — gallery: rây bột trên thớt gỗ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/menu-banh-tart-trung.webp` | pages/menu.html — Bánh ngọt: bánh tart trứng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/menu-banh-mi-thit.jpg` | pages/menu.html — Bánh mì: bánh mì kẹp thịt | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/menu-banh-bo.jpg` | pages/menu.html — Bánh truyền thống: bánh bò hấp nước cốt dừa | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/menu-bong-lan-la-dua.jpg` | pages/menu.html — Bánh ngọt: bông lan lá dứa | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/about-lo-nuong.webp` | pages/about.html — gallery: lò nướng bánh mì | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-cay-can-bot.webp` | pages/about.html — gallery: cây cán bột gỗ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-can-bot.webp` | pages/about.html — giá trị: sự chăm chút, cán bột | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Sao chép nhanh (số điện thoại / email)
- Nút về đầu trang
- Đánh dấu mục đang xem trên menu
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/menu.html).
- Chuyển động (đếm trong code): `data-reveal` ×36, `data-header` ×3, `data-split` ×12, `data-reveal-stagger` ×7, `data-marquee` ×1, `data-float` ×2, `data-reveal="clip"` ×11, `data-drag-scroll` ×2; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:06 23/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 3 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✗ Ngôn ngữ: 3 trang chưa đúng tiếng Anh: index.html, pages/about.html, pages/menu.html
- ✓ Tên thương hiệu: "TIỆM BÁNH MỘC MIÊN" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 10 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 11:05 23/10/2026 | Dựng website | xong |
| 11:07 23/10/2026 | Sửa: Phần Inside the bakehouse ở OurStory có thanh cuộn ngang họ muốn mất thanh cuộn đó đi | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ 3 trang (Home, Menu, About) theo ràng buộc 'Tối đa 3 trang' của BA; thông tin liên hệ / giờ mở cửa đặt ở khối cuối trang và footer dạng cuối thư, không có trang Contact riêng
- BA yêu cầu song ngữ đầy đủ + nút chuyển ngôn ngữ Anh / Việt → mặc định tiếng Anh (<html lang="en">), nút EN / VI đổi lang thành "vi" và hiện bản tiếng Việt; lựa chọn lưu trong localStorage. Ghi đè dòng 'không tạo bộ chuyển ngôn ngữ' của brief
- Đổi font tiêu đề Young Serif → Playfair Display và nhãn đánh máy Courier Prime → chữ viết tay Dancing Script, vì cần đủ dấu tiếng Việt cho bản song ngữ; Work Sans giữ nguyên (có tiếng Việt)
- Dùng bảng màu BA chỉ định (vàng giấy #E9D8B5, đỏ gạch #9E4034, xanh rêu #59634B, nâu gỗ #624631) thay bảng màu preset film
- Không dùng parallax (BA: không parallax phức tạp); hover ảnh chỉ sáng lên và phóng nhẹ
- Timeline hành trình ghi rõ là nội dung minh họa chờ tiệm xác nhận, không đưa năm tháng như sự thật lịch sử
- Không có form nào vì BA cấm chức năng đặt bánh / mua hàng

Lỗi QA còn mở:

- [Ngôn ngữ] index.html: Nội dung trang có 249 ký tự tiếng Việt có dấu — website chọn tiếng Anh.
- [Ngôn ngữ] pages/about.html: Nội dung trang có 320 ký tự tiếng Việt có dấu — website chọn tiếng Anh.
- [Ngôn ngữ] pages/menu.html: Nội dung trang có 319 ký tự tiếng Việt có dấu — website chọn tiếng Anh.

Giới hạn:

- Không có đặt bánh, giỏ hàng, thanh toán hay form mua hàng (theo yêu cầu)
- Giá, địa chỉ, giờ mở cửa, số điện thoại là nội dung mẫu, cần tiệm cung cấp bản thật
- Bản đồ chỉ là liên kết mở Google Maps theo địa chỉ mẫu
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
