# CLOUD NINE BAKERY

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website tiệm bánh và trà sữa
- **Thương hiệu / dự án:** CLOUD NINE BAKERY
- **Mục đích:** Thiết kế website giới thiệu tiệm bánh CLOUD NINE BAKERY, mang cảm giác mộng mơ, siêu thực và nhẹ như đang bước vào một thế giới trên mây.
- **Ý tưởng thị giác (AI ghi):** Bánh lơ lửng giữa mây: ảnh sản phẩm đặt trong khung bo mềm như đám mây trôi nhẹ trên bầu trời pastel (xanh trời, lavender, hồng phấn) đổi sắc khi cuộn, kết trang bằng bầu trời đêm có sao

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Dreamy / Anime / Cinematic — tool nhận diện từ mô tả |
| Mức chuyển động | Level 3 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 993 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Shippori Mincho`: đủ ký tự tiếng Anh
- `Zen Kaku Gothic New`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | CLOUD NINE BAKERY \| A Little Dream in Every Bite | Giới thiệu thương hiệu bằng cảnh bánh lơ lửng trên mây, dẫn sang thực đơn và câu chuyện, kết bằng thông tin ghé tiệm | top, hero → hero-scene, welcome → story-letter, scene → story-pinned, signatures → gallery-filmstrip, voices → quote-full, visit → cta-sky, footer | 9 |
| `pages/about.html` | About \| CLOUD NINE BAKERY | Cảm hứng sáng tạo, câu chuyện đằng sau những chiếc bánh và không gian tiệm | top, about-hero → page-hero, inspiration → story-editorial, space → features-bento, day → timeline, faq → faq, visit → cta-sky, footer | 5 |
| `pages/menu.html` | Menu \| CLOUD NINE BAKERY | Thực đơn dạng gallery thẻ không đều, lọc theo bánh kem / mousse / pastry / đồ uống, gợi ý kết hợp bánh và trà | top, menu-hero → page-hero, menu → gallery-filter, pairings → features-numbered, visit → cta-sky, footer | 15 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
cloud-nine-bakery/
  web/
    assets/
      css/
        site.css
      img/  (1 ảnh + CREDITS.md)
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

- **⚠ Một số lượt tìm ảnh lỗi:** 4/5 lượt lỗi (timeout)
- **⚠ Không tìm được ảnh:** 1 lượt tìm đều 0 kết quả
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 1 ảnh chưa dùng: https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_Cake_I.jpg?width=1280

Tool đã ghi 5 lượt tìm (nguồn: openverse), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| strawberry cream cake | — | lỗi timeout | 41230 ms |
| meringue pastel | openverse | 0 ảnh | 16461 ms |
| mousse cake dessert | — | lỗi timeout | 37106 ms |
| fruit tart pastry | — | lỗi timeout | 31514 ms |
| cake | — | lỗi timeout | 31524 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_Cake_I.jpg?width=1280` | index.html — hero, bánh kem dâu lơ lửng | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_Cake_I.jpg?width=1600` | index.html — hero, bánh kem dâu lơ lửng | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Lavender_meringue_%285895316063%29.jpg?width=700` | index.html — hero, meringue nổi phụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_rose_flavored_%26_white_peach_mousse_cake_%281%29.jpg?width=700` | index.html — hero, mousse hồng nổi phụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Piping_mini_cream_puffs.jpg?width=1000` | index.html — story-letter, thợ bánh bắt kem | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Meringue_dream_topping.jpg?width=1920` | index.html — story-pinned, nền meringue như mây | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_Cream_Cake.jpg?width=1000` | index.html — filmstrip, Cloud Strawberry Cake | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Cake_Kobo_Raspberry_Mousse_%2831228687021%29.jpg?width=1000` | index.html — filmstrip, raspberry mousse | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Blueberry_Strawberry_Fruit_Tart_1_2016-05-23.jpg?width=1000` | index.html — filmstrip, fruit tart | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Pearl_Milk_Tea_in_Chun_Shui_Tang.jpg?width=1000` | index.html — filmstrip, trà sữa trân châu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_cream_cake_-_Rawlab_2025-08-31.jpg?width=1000` | pages/menu.html — cakes, Strawberry Cloud Slice | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_crape_shortcake2.jpg?width=1000` | pages/menu.html — cakes, crepe cake | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/A_beautifully_arranged_dessert_table_features_a_macaron_tower_and_a_multi-layered_cake%2C_set_in_a_garden_during_a_spring_celebration.jpg?width=1000` | pages/menu.html — cakes, celebration cake | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Mousse_cake_7.jpg?width=1000` | pages/menu.html — mousse, berry mousse | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Blackberry_passionfruit_mousse_-_Jacob%27s_Bakery_%2B_Cafe_2025-06-19.jpg?width=1000` | pages/menu.html — mousse, blackberry passionfruit | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Mango_mousse_cake_%288201823494%29.jpg?width=1000` | pages/menu.html — mousse, mango | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Croissant%2C_whole.jpg?width=1000` | pages/menu.html — pastry, croissant | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Choux_%C3%A0_la_cr%C3%A8me_%2819387655069%29.jpg?width=1000` | pages/menu.html — pastry, choux | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Pistachio_eclair_-_Milfey_Patisserie_2026-05-02.jpg?width=1000` | pages/menu.html — pastry, eclair | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Macarons_Pixabay.jpg?width=1000` | pages/menu.html — pastry, macarons | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Homemade_meringues_%2816961016019%29.jpg?width=1000` | pages/menu.html — pastry, meringue clouds | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry%2C_kiwi_and_blueberry_tart_by_rmkoske.jpg?width=1000` | pages/menu.html — cakes, fruit garden tart | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Classic_bubble_tea.jpg?width=1000` | pages/menu.html — drinks, classic milk tea | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Matcha_Bubble_Milk_Tea%2C_Apr_2026.jpg?width=1000` | pages/menu.html — drinks, matcha milk tea | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Matcha_tea_latte_with_rosetta_latte_art.jpg?width=1000` | pages/menu.html — drinks, matcha latte | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Tatte_Bakery%2C_Beacon_Hill.jpg?width=1400` | pages/about.html — page-hero, không gian tiệm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Yummy_yummy_in_my_tummy_meringue_drops_with_strawberries.jpg?width=1000` | pages/about.html — inspiration, meringue dâu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Interior_of_Vete-Katten_on_Kungsgatan%2C_Stockholm%2C_2022.jpg?width=1200` | pages/about.html — bento, quầy bánh | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Seattle_-_Stone_House_Cafe%2C_Bar%2C_and_Bakery_11_-_bakery_interior.jpg?width=1000` | pages/about.html — bento, góc ngồi | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://commons.wikimedia.org/wiki/Special:FilePath/Making_meringue_-_whisking.jpg?width=1000` | pages/about.html — bento, đánh bông lòng trắng | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

29 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero, bánh kem dâu lơ lửng — https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_Cake_I.jpg?width=1600
- index.html — hero, meringue nổi phụ — https://commons.wikimedia.org/wiki/Special:FilePath/Lavender_meringue_%285895316063%29.jpg?width=700
- index.html — hero, mousse hồng nổi phụ — https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_rose_flavored_%26_white_peach_mousse_cake_%281%29.jpg?width=700
- index.html — story-letter, thợ bánh bắt kem — https://commons.wikimedia.org/wiki/Special:FilePath/Piping_mini_cream_puffs.jpg?width=1000
- index.html — story-pinned, nền meringue như mây — https://commons.wikimedia.org/wiki/Special:FilePath/Meringue_dream_topping.jpg?width=1920
- index.html — filmstrip, Cloud Strawberry Cake — https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_Cream_Cake.jpg?width=1000
- index.html — filmstrip, raspberry mousse — https://commons.wikimedia.org/wiki/Special:FilePath/Cake_Kobo_Raspberry_Mousse_%2831228687021%29.jpg?width=1000
- index.html — filmstrip, fruit tart — https://commons.wikimedia.org/wiki/Special:FilePath/Blueberry_Strawberry_Fruit_Tart_1_2016-05-23.jpg?width=1000
- index.html — filmstrip, trà sữa trân châu — https://commons.wikimedia.org/wiki/Special:FilePath/Pearl_Milk_Tea_in_Chun_Shui_Tang.jpg?width=1000
- pages/menu.html — cakes, Strawberry Cloud Slice — https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_cream_cake_-_Rawlab_2025-08-31.jpg?width=1000
- pages/menu.html — cakes, crepe cake — https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_crape_shortcake2.jpg?width=1000
- pages/menu.html — cakes, celebration cake — https://commons.wikimedia.org/wiki/Special:FilePath/A_beautifully_arranged_dessert_table_features_a_macaron_tower_and_a_multi-layered_cake%2C_set_in_a_garden_during_a_spring_celebration.jpg?width=1000
- pages/menu.html — mousse, berry mousse — https://commons.wikimedia.org/wiki/Special:FilePath/Mousse_cake_7.jpg?width=1000
- pages/menu.html — mousse, blackberry passionfruit — https://commons.wikimedia.org/wiki/Special:FilePath/Blackberry_passionfruit_mousse_-_Jacob%27s_Bakery_%2B_Cafe_2025-06-19.jpg?width=1000
- pages/menu.html — mousse, mango — https://commons.wikimedia.org/wiki/Special:FilePath/Mango_mousse_cake_%288201823494%29.jpg?width=1000
- pages/menu.html — pastry, croissant — https://commons.wikimedia.org/wiki/Special:FilePath/Croissant%2C_whole.jpg?width=1000
- pages/menu.html — pastry, choux — https://commons.wikimedia.org/wiki/Special:FilePath/Choux_%C3%A0_la_cr%C3%A8me_%2819387655069%29.jpg?width=1000
- pages/menu.html — pastry, eclair — https://commons.wikimedia.org/wiki/Special:FilePath/Pistachio_eclair_-_Milfey_Patisserie_2026-05-02.jpg?width=1000
- pages/menu.html — pastry, macarons — https://commons.wikimedia.org/wiki/Special:FilePath/Macarons_Pixabay.jpg?width=1000
- pages/menu.html — pastry, meringue clouds — https://commons.wikimedia.org/wiki/Special:FilePath/Homemade_meringues_%2816961016019%29.jpg?width=1000
- pages/menu.html — cakes, fruit garden tart — https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry%2C_kiwi_and_blueberry_tart_by_rmkoske.jpg?width=1000
- pages/menu.html — drinks, classic milk tea — https://commons.wikimedia.org/wiki/Special:FilePath/Classic_bubble_tea.jpg?width=1000
- pages/menu.html — drinks, matcha milk tea — https://commons.wikimedia.org/wiki/Special:FilePath/Matcha_Bubble_Milk_Tea%2C_Apr_2026.jpg?width=1000
- pages/menu.html — drinks, matcha latte — https://commons.wikimedia.org/wiki/Special:FilePath/Matcha_tea_latte_with_rosetta_latte_art.jpg?width=1000
- pages/about.html — page-hero, không gian tiệm — https://commons.wikimedia.org/wiki/Special:FilePath/Tatte_Bakery%2C_Beacon_Hill.jpg?width=1400
- pages/about.html — inspiration, meringue dâu — https://commons.wikimedia.org/wiki/Special:FilePath/Yummy_yummy_in_my_tummy_meringue_drops_with_strawberries.jpg?width=1000
- pages/about.html — bento, quầy bánh — https://commons.wikimedia.org/wiki/Special:FilePath/Interior_of_Vete-Katten_on_Kungsgatan%2C_Stockholm%2C_2022.jpg?width=1200
- pages/about.html — bento, góc ngồi — https://commons.wikimedia.org/wiki/Special:FilePath/Seattle_-_Stone_House_Cafe%2C_Bar%2C_and_Bakery_11_-_bakery_interior.jpg?width=1000
- pages/about.html — bento, đánh bông lòng trắng — https://commons.wikimedia.org/wiki/Special:FilePath/Making_meringue_-_whisking.jpg?width=1000

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Carousel
- Sao chép nhanh (số điện thoại / email)
- Accordion (mở / đóng nội dung)
- Lọc theo nhóm
- Phóng to ảnh (lightbox)
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/menu.html).
- Chuyển động (đếm trong code): `data-reveal` ×30, `data-header` ×3, `data-split` ×4, `data-reveal-stagger` ×4, `data-drag-scroll` ×1, `data-gradient-shift` ×2, `data-clouds` ×3, `data-particles` ×4, `data-sky` ×3, `data-layers` ×1, `data-depth` ×2, `data-scene` ×1, `data-step` ×3, `data-reveal="clip"` ×2; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 15:12 23/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "CLOUD NINE BAKERY" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 10 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 15:12 23/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ 3 trang (Home, Menu, About) theo chú thích BA 'tối đa 3 trang'
- Thêm nút chuyển EN / VI trên header mọi trang (chú thích BA yêu cầu song ngữ, ghi đè mục 'không tạo bộ chuyển ngôn ngữ'); mặc định tiếng Anh, lang='en', bản tiếng Việt lưu trong data-vi và đổi lang='vi' khi chọn
- Đổi font preset (Shippori Mincho / Zen Kaku Gothic New thiếu dấu tiếng Việt) sang Cormorant Garamond (serif mềm, thanh thoát) + Nunito, cả hai đủ ký tự tiếng Việt
- Màu dùng theo art direction BA: #C9E4F5, #DCD2F4, #FFFDFB, #F7DDE6; thêm dusk #4E4A7E cho chữ nút / điểm nhấn để đạt tương phản AA
- Chuyển động Level 3 nhưng nhẹ theo chú thích BA: mây trôi, ảnh trôi chậm, fade-in, một cảnh ghim; không tilt / 3D / con trỏ tùy biến
- Không có giỏ hàng, thanh toán, form đặt bánh (theo chú thích BA); bánh sinh nhật chỉ hướng dẫn gọi điện / ghé tiệm
- Công cụ search_images (openverse) quá thời gian chờ nên toàn bộ ảnh dùng link Wikimedia Commons đã kiểm qua link_image

Giới hạn:

- Thực đơn và giá là nội dung mẫu, cần khách xác nhận
- Địa chỉ, số điện thoại, email là dữ liệu mẫu
- Ảnh là ảnh Wikimedia Commons dùng bằng link ngoài, nên thay bằng ảnh sản phẩm thật của tiệm
- Lựa chọn ngôn ngữ lưu bằng localStorage của trình duyệt
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
