# Mộc Hương Bakery

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website tiệm bánh thủ công
- **Thương hiệu / dự án:** Mộc Hương Bakery
- **Mục đích:** Giới thiệu tiệm bánh, thực đơn bánh và thông tin liên hệ / đặt bánh
- **Ý tưởng thị giác (AI ghi):** Khung vòm cửa lò bánh: mọi ảnh chính đặt trong khung vòm bo tròn như miệng lò nướng / cửa nhà cổ Hội An, nền pastel xen kẽ như lớp kem

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Pastel / Soft — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Hero / Giới thiệu chính; About / Câu chuyện thương hiệu; Services / Dịch vụ (có mô tả); Contact / Liên hệ |
| Chú thích bổ sung | 185 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Quicksand`: đủ ký tự tiếng Việt
- `Nunito Sans`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | Mộc Hương Bakery — Bánh tươi ra lò mỗi sáng giữa phố Hội | Giới thiệu tiệm và câu chuyện, tóm tắt ba nhóm bánh dẫn sang Menu, kêu gọi đặt bánh ở trang Liên hệ | top, hero → hero-split, cau-chuyen → story-letter, thuc-don → features-bento, mot-ngay → timeline, goc-tiem → gallery-masonry, danh-gia → quote-full, dat-banh → cta-sky, footer | 13 |
| `pages/contact.html` | Liên hệ — Mộc Hương Bakery | Địa chỉ, giờ mở cửa, bản đồ, form đặt bánh (bản demo), câu hỏi thường gặp | top, lien-he-hero → page-hero, lien-he → contact-split, hoi-dap → faq, footer | 2 |
| `pages/menu.html` | Menu — Mộc Hương Bakery | Thực đơn đầy đủ theo ba nhóm bánh (tabs), giá bánh kem theo cỡ (switch), quy trình đặt bánh kem trước | top, menu-hero → page-hero, thuc-don-day-du → features-tabs, dat-truoc → process-steps, menu-cta → cta-type, footer | 9 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
tiem-banh-moc-huong/
  web/
    assets/
      css/
        site.css
      img/  (6 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        tw-config.js
        ui.js
    pages/
      contact.html
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
- Mỗi trang là một file HTML tĩnh, header / footer giống nhau; mỗi khối nội dung là `<section id data-section="<biến thể>">` để sửa riêng từng khối.
- Tailwind CSS nạp qua CDN (`cdn.tailwindcss.com`), font qua Google Fonts.

## 6. Hình ảnh: tìm kiếm & tích hợp

- **⚠ Một số lượt tìm ảnh lỗi:** 6/7 lượt lỗi (timeout)

Tool đã ghi 7 lượt tìm (nguồn: openverse), 5 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| bakery bread display shelf | — | lỗi timeout | 59287 ms |
| baker hands kneading dough | — | lỗi timeout | 71803 ms |
| banh mi vietnamese baguette | — | lỗi timeout | 31531 ms |
| croissant pastries tray | openverse | 8 ảnh | 23315 ms |
| strawberry cream birthday cake | — | lỗi timeout | 31523 ms |
| bakery bread display | — | lỗi timeout | 50799 ms |
| strawberry cake | — | lỗi timeout | 31539 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/hero-croissant.jpg` | index.html — ảnh hero khung vòm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/bento-banh-ngot.jpg` | index.html — ô bento bánh ngọt | openverse | CC CC0 1.0 | ✓ |
| `assets/img/gallery-tay-cam-banh.webp` | index.html — gallery | openverse | CC CC0 1.0 | ✓ |
| `assets/img/menu-croissant-mut.jpg` | pages/menu.html — tab bánh ngọt | openverse | CC CC0 1.0 | ✓ |
| `assets/img/gallery-bua-sang.jpg` | index.html — gallery | openverse | CC CC0 1.0 | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Strawberry_Cake_I.jpg/1920px-Strawberry_Cake_I.jpg` | index.html — ảnh hero khung vòm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Vietnamese_B%C3%A1nh_m%C3%AC_%28Banh_Mi%29_Sandwich.jpg/1920px-Vietnamese_B%C3%A1nh_m%C3%AC_%28Banh_Mi%29_Sandwich.jpg` | index.html — ô bento bánh mì | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%E1%BB%99i_An%2C_Ancient_Town%2C_2020-01_CN-06.jpg/1920px-H%E1%BB%99i_An%2C_Ancient_Town%2C_2020-01_CN-06.jpg` | index.html — gallery phố Hội | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Lanterns_in_Hoi_An_2.jpg/1920px-Lanterns_in_Hoi_An_2.jpg` | index.html — gallery đèn lồng | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/3/37/Strawberry_Cream_Cake.jpg` | index.html — ô bento bánh kem đặt trước | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Counter_of_the_Paillard_bakery%2C_Vieux-Qu%C3%A9bec.jpg/1920px-Counter_of_the_Paillard_bakery%2C_Vieux-Qu%C3%A9bec.jpg` | index.html — gallery quầy bánh | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/16045981/pexels-photo-16045981.jpeg?auto=compress&cs=tinysrgb&w=1600` | index.html — ảnh hero khung vòm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/10481790/pexels-photo-10481790.jpeg?auto=compress&cs=tinysrgb&w=1400` | index.html — một ngày ở lò | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/40180976/pexels-photo-40180976.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — gallery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/3983710/pexels-photo-3983710.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — gallery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/29445730/pexels-photo-29445730.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — gallery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/15009979/pexels-photo-15009979.jpeg?auto=compress&cs=tinysrgb&w=1400` | pages/menu.html — page-hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/3789032/pexels-photo-3789032.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/menu.html — tab bánh mì | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/7543099/pexels-photo-7543099.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/menu.html — tab bánh mì | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/5112580/pexels-photo-5112580.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/menu.html — tab bánh ngọt | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/29192543/pexels-photo-29192543.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/menu.html — tab bánh kem | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/11136872/pexels-photo-11136872.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/menu.html — tab bánh kem | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/7966511/pexels-photo-7966511.jpeg?auto=compress&cs=tinysrgb&w=1400` | pages/menu.html — quy trình đặt bánh kem | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/29388479/pexels-photo-29388479.jpeg?auto=compress&cs=tinysrgb&w=1400` | pages/contact.html — page-hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

19 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — ảnh hero khung vòm — https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Strawberry_Cake_I.jpg/1920px-Strawberry_Cake_I.jpg
- index.html — ô bento bánh mì — https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Vietnamese_B%C3%A1nh_m%C3%AC_%28Banh_Mi%29_Sandwich.jpg/1920px-Vietnamese_B%C3%A1nh_m%C3%AC_%28Banh_Mi%29_Sandwich.jpg
- index.html — gallery phố Hội — https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%E1%BB%99i_An%2C_Ancient_Town%2C_2020-01_CN-06.jpg/1920px-H%E1%BB%99i_An%2C_Ancient_Town%2C_2020-01_CN-06.jpg
- index.html — gallery đèn lồng — https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Lanterns_in_Hoi_An_2.jpg/1920px-Lanterns_in_Hoi_An_2.jpg
- index.html — ô bento bánh kem đặt trước — https://upload.wikimedia.org/wikipedia/commons/3/37/Strawberry_Cream_Cake.jpg
- index.html — gallery quầy bánh — https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Counter_of_the_Paillard_bakery%2C_Vieux-Qu%C3%A9bec.jpg/1920px-Counter_of_the_Paillard_bakery%2C_Vieux-Qu%C3%A9bec.jpg
- index.html — ảnh hero khung vòm — https://images.pexels.com/photos/16045981/pexels-photo-16045981.jpeg?auto=compress&cs=tinysrgb&w=1600
- index.html — một ngày ở lò — https://images.pexels.com/photos/10481790/pexels-photo-10481790.jpeg?auto=compress&cs=tinysrgb&w=1400
- index.html — gallery — https://images.pexels.com/photos/40180976/pexels-photo-40180976.jpeg?auto=compress&cs=tinysrgb&w=1200
- index.html — gallery — https://images.pexels.com/photos/3983710/pexels-photo-3983710.jpeg?auto=compress&cs=tinysrgb&w=1200
- index.html — gallery — https://images.pexels.com/photos/29445730/pexels-photo-29445730.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/menu.html — page-hero — https://images.pexels.com/photos/15009979/pexels-photo-15009979.jpeg?auto=compress&cs=tinysrgb&w=1400
- pages/menu.html — tab bánh mì — https://images.pexels.com/photos/3789032/pexels-photo-3789032.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/menu.html — tab bánh mì — https://images.pexels.com/photos/7543099/pexels-photo-7543099.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/menu.html — tab bánh ngọt — https://images.pexels.com/photos/5112580/pexels-photo-5112580.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/menu.html — tab bánh kem — https://images.pexels.com/photos/29192543/pexels-photo-29192543.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/menu.html — tab bánh kem — https://images.pexels.com/photos/11136872/pexels-photo-11136872.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/menu.html — quy trình đặt bánh kem — https://images.pexels.com/photos/7966511/pexels-photo-7966511.jpeg?auto=compress&cs=tinysrgb&w=1400
- pages/contact.html — page-hero — https://images.pexels.com/photos/29388479/pexels-photo-29388479.jpeg?auto=compress&cs=tinysrgb&w=1400

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Carousel
- Phóng to ảnh (lightbox)
- Accordion (mở / đóng nội dung)
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Tabs
- Công tắc chuyển nội dung (ví dụ giá tháng / năm)
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/contact.html, pages/menu.html).
- Chuyển động (đếm trong code): `data-reveal` ×32, `data-header` ×3, `data-split` ×5, `data-reveal-stagger` ×7, `data-float` ×3, `data-gradient-shift` ×1, `data-particles` ×1, `data-reveal="clip"` ×7; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 22:09 23/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "Mộc Hương Bakery" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 11 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 22:09 23/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng 3 trang (Trang chủ, Menu, Liên hệ) theo chú thích của BA; không có trang About và trang chi tiết dịch vụ
- Section Story đặt trên trang chủ thay vì trang About riêng vì BA giới hạn 3 trang
- Services được thể hiện thành thực đơn: tóm tắt trên trang chủ, đầy đủ ở pages/menu.html
- Công cụ search_images (openverse) liên tục quá thời gian chờ nên phần lớn ảnh dùng link Pexels / Wikimedia Commons đã kiểm qua link_image
- Màu chữ / nút dùng thêm rose-deep #A3475B (đậm hơn rose của preset) để đạt tương phản WCAG AA với chữ trắng

Giới hạn:

- Form đặt bánh là giao diện minh họa (bản demo), chưa gửi đơn thật
- Giá bánh, địa chỉ, số điện thoại, lời khách là nội dung mẫu cần khách xác nhận
- Phần lớn ảnh là link ngoài (Pexels, Wikimedia), cần ảnh thật của tiệm khi triển khai
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
