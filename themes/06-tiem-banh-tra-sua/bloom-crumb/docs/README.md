# BLOOM & CRUMB

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website tiệm bánh
- **Thương hiệu / dự án:** BLOOM & CRUMB
- **Mục đích:** 1. Tổng quan

Thiết kế website giới thiệu BLOOM & CRUMB, thương hiệu bánh thủ công lấy cảm hứng từ khu vườn, nguyên liệu tự nhiên và nhịp sống chậm. Giao diện cần có cảm giác chân thật, tinh tế, gần thiên nhiên; không sử dụng phong cách vintage quá cũ hoặc pastel dễ thương.
- **Ý tưởng thị giác (AI ghi):** Một nét thân cây mảnh vẽ tay (đường thực vật tối giản) mọc chậm xuyên các trang, đi cùng khung ảnh không đồng đều: vòm, bo lớn và vuông sắc cạnh trên nền kem yến mạch

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Nature / Organic / Atmospheric — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 2.051 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Fraunces`: đủ ký tự tiếng Anh
- `Manrope`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | BLOOM & CRUMB — Baked Slowly, Made with Nature | Giới thiệu thương hiệu, triết lý làm bánh, 3 sản phẩm tiêu biểu, nguồn cảm hứng, không gian tiệm; dẫn sang Menu và About | top, hero → hero-split, philosophy → story-letter, oven → teaser-row, inspired → features-bento, quote → quote-full, space → gallery-masonry, visit-cta → cta-type, footer | 14 |
| `pages/about.html` | Our Story — BLOOM & CRUMB | Câu chuyện thương hiệu, triết lý làm bánh thủ công, 3 nội dung biên tập (nguyên liệu, quy trình, cảm hứng theo mùa), ảnh cận cảnh, thông tin ghé tiệm | top, about-hero → page-hero, story → story-editorial, notes → features-numbered, closeups → gallery-lookbook, visit → contact-page, footer | 9 |
| `pages/menu.html` | Menu — BLOOM & CRUMB | Trình bày sản phẩm theo 4 danh mục (Artisan Bread, Viennoiserie, Fruit Tarts, Seasonal Bakes) để khách xem trước khi ghé tiệm; không đặt hàng | top, menu-hero → page-hero, products → gallery-filter, baking-day → timeline, menu-faq → accordion, menu-cta → cta-type, footer | 13 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
bloom-crumb/
  web/
    assets/
      css/
        site.css
      img/  (6 ảnh + CREDITS.md)
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

- **⚠ Một số lượt tìm ảnh lỗi:** 7/10 lượt lỗi (timeout)
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 3 ảnh chưa dùng: https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Red_Deer_coffee_shop_%28Unsplash%29.jpg/1280px-Red_Deer_coffee_shop_%28Unsplash%29.jpg, https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Pain_au_chocolat_chocolate_croissant_Stroud_Gloucestershire_01.jpg/1280px-Pain_au_chocolat_chocolate_croissant_Stroud_Gloucestershire_01.jpg, https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Pain_au_chocolat_Mayfield_Farm_Bakery_Sheering_Essex_England.jpg/1280px-Pain_au_chocolat_Mayfield_Farm_Bakery_Sheering_Essex_England.jpg

Tool đã ghi 10 lượt tìm (nguồn: openverse), 5 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| sourdough bread loaf wooden table | — | lỗi timeout | 64243 ms |
| croissant bakery pastry | openverse | 7 ảnh | 25349 ms |
| fruit tart berries | — | lỗi timeout | 38207 ms |
| flour hands dough kneading | — | lỗi timeout | 45219 ms |
| fresh flowers linen table | openverse | 11 ảnh | 44461 ms |
| bakery interior cafe shop | openverse | 14 ảnh | 38212 ms |
| sourdough bread crust | — | lỗi timeout | 45091 ms |
| artisan bread loaves | — | lỗi timeout | 31539 ms |
| tart fruit pastry | — | lỗi timeout | 31519 ms |
| baker shaping dough | — | lỗi timeout | 53241 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-oven-croissant.jpg` | index.html — From Our Oven: almond croissant | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/home-gallery-interior-1.jpg` | index.html — gallery không gian tiệm (ngang) | openverse | CC BY 2.0 | ✓ |
| `assets/img/home-gallery-interior-2.jpg` | index.html — gallery không gian tiệm (ngang) | openverse | CC BY 2.0 | ✓ |
| `assets/img/home-gallery-interior-3.jpg` | index.html — gallery không gian tiệm (dọc) | openverse | CC BY 2.0 | ✓ |
| `assets/img/home-inspired-flowers.jpg` | index.html — Inspired by Nature: hoa tươi | openverse | CC CC0 1.0 | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Fresh_Rustic_Bread_%28Unsplash%29.jpg/1920px-Fresh_Rustic_Bread_%28Unsplash%29.jpg` | index.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Baker_woman%27s_hands_kneading_bread_dough.jpg/1280px-Baker_woman%27s_hands_kneading_bread_dough.jpg` | index.html — philosophy | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Loaf_of_sourdough_bread_cooling.jpg/960px-Loaf_of_sourdough_bread_cooling.jpg` | index.html — oven sourdough | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Croissant_et_Pain_au_chocolat_in_Paris.jpg/960px-Croissant_et_Pain_au_chocolat_in_Paris.jpg` | index.html — oven croissant | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Fruit_tart_with_kiwi%2C_peach%2C_and_raspberry.jpg/960px-Fruit_tart_with_kiwi%2C_peach%2C_and_raspberry.jpg` | index.html — oven tart | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Rustic_flower_vase_%28Unsplash%29.jpg/1280px-Rustic_flower_vase_%28Unsplash%29.jpg` | index.html — inspired flowers | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Baking_a_Pie_%28Unsplash%29.jpg/960px-Baking_a_Pie_%28Unsplash%29.jpg` | index.html — inspired baking table | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Lone_ear_of_wheat_%28Unsplash%29.jpg/960px-Lone_ear_of_wheat_%28Unsplash%29.jpg` | index.html — inspired wheat | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/The_Bakery_%28Unsplash%29.jpg/1280px-The_Bakery_%28Unsplash%29.jpg` | index.html — gallery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Rustic_Bakery_Treats_%28Unsplash%29.jpg/960px-Rustic_Bakery_Treats_%28Unsplash%29.jpg` | index.html — gallery vertical | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Red_Deer_coffee_shop_%28Unsplash%29.jpg/1280px-Red_Deer_coffee_shop_%28Unsplash%29.jpg` | index.html — gallery | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Trays_of_Baked_Goods_%28Unsplash%29.jpg/1920px-Trays_of_Baked_Goods_%28Unsplash%29.jpg` | pages/menu.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Artisan_Loaves_of_Bread_%28Unsplash%29.jpg/1280px-Artisan_Loaves_of_Bread_%28Unsplash%29.jpg` | pages/menu.html — country loaf | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Nine-Grain_Sourdough_Bread_-_HMM_-_Explored_22_Aug_2017_-_Flickr_-_Thad_Zajdowicz.jpg/960px-Nine-Grain_Sourdough_Bread_-_HMM_-_Explored_22_Aug_2017_-_Flickr_-_Thad_Zajdowicz.jpg` | pages/menu.html — seeded loaf | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Sourdough_rye_with_walnuts.jpg/960px-Sourdough_rye_with_walnuts.jpg` | pages/menu.html — rye walnut | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Pain_au_chocolat_chocolate_croissant_Stroud_Gloucestershire_01.jpg/1280px-Pain_au_chocolat_chocolate_croissant_Stroud_Gloucestershire_01.jpg` | pages/menu.html — pain au chocolat | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Pistachio_%26_Chocolate_Croissant_-_GAIL%27s_2026-02-16.jpg/960px-Pistachio_%26_Chocolate_Croissant_-_GAIL%27s_2026-02-16.jpg` | pages/menu.html — pistachio croissant | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Blueberry_Strawberry_Fruit_Tart_1_2016-05-23.jpg/1280px-Blueberry_Strawberry_Fruit_Tart_1_2016-05-23.jpg` | pages/menu.html — berry tart | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Parisian_Fruit_Tartlets%2C_September_2009.jpg/960px-Parisian_Fruit_Tartlets%2C_September_2009.jpg` | pages/menu.html — tartlets | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Quince_crostata_%28168056799%29.jpg/960px-Quince_crostata_%28168056799%29.jpg` | pages/menu.html — crostata | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Kabocha_Tart_from_Little_Oven.jpg/960px-Kabocha_Tart_from_Little_Oven.jpg` | pages/menu.html — pumpkin tart | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Lemon_and_lavender_Bread_%28Unsplash%29.jpg/1280px-Lemon_and_lavender_Bread_%28Unsplash%29.jpg` | pages/menu.html — lemon lavender loaf | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Cinnamon_Cranapple_Tart%2C_2009.jpg/960px-Cinnamon_Cranapple_Tart%2C_2009.jpg` | pages/menu.html — apple tart | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Bread_on_the_Table_%28Unsplash%29.jpg/1920px-Bread_on_the_Table_%28Unsplash%29.jpg` | pages/about.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Making_Bread_%28Unsplash%29.jpg/960px-Making_Bread_%28Unsplash%29.jpg` | pages/about.html — story | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Ears_of_wheat_at_dusk_%28Unsplash%29.jpg/960px-Ears_of_wheat_at_dusk_%28Unsplash%29.jpg` | pages/about.html — ingredients | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/4/42/Active_sourdough_starter_%2849883187806%29.jpg` | pages/about.html — process | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Blueberries_and_strawberries_-_it_must_be_healthy_%288034683880%29.jpg/960px-Blueberries_and_strawberries_-_it_must_be_healthy_%288034683880%29.jpg` | pages/about.html — seasonal | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Sliced_loaf_of_sourdough_bread.jpg/1280px-Sliced_loaf_of_sourdough_bread.jpg` | pages/about.html — crust closeup | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Fresh_Bread_and_Butter_%28Unsplash%29.jpg/960px-Fresh_Bread_and_Butter_%28Unsplash%29.jpg` | pages/about.html — closeup | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Kitchen_table_%28Unsplash%29.jpg/1280px-Kitchen_table_%28Unsplash%29.jpg` | pages/about.html — space | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Bread_at_a_Bakery_%28Unsplash%29.jpg/1280px-Bread_at_a_Bakery_%28Unsplash%29.jpg` | index.html — gallery không gian tiệm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Pain_au_chocolat_Mayfield_Farm_Bakery_Sheering_Essex_England.jpg/1280px-Pain_au_chocolat_Mayfield_Farm_Bakery_Sheering_Essex_England.jpg` | pages/menu.html — pain au chocolat | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D1%81%D0%BA%D0%BE_%D0%BF%D0%B5%D1%87%D0%B8%D0%B2%D0%BE_Pain_au_chocolat_%281%29.jpg/1280px-%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D1%81%D0%BA%D0%BE_%D0%BF%D0%B5%D1%87%D0%B8%D0%B2%D0%BE_Pain_au_chocolat_%281%29.jpg` | pages/menu.html — pain au chocolat | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

31 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero — https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Fresh_Rustic_Bread_%28Unsplash%29.jpg/1920px-Fresh_Rustic_Bread_%28Unsplash%29.jpg
- index.html — philosophy — https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Baker_woman%27s_hands_kneading_bread_dough.jpg/1280px-Baker_woman%27s_hands_kneading_bread_dough.jpg
- index.html — oven sourdough — https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Loaf_of_sourdough_bread_cooling.jpg/960px-Loaf_of_sourdough_bread_cooling.jpg
- index.html — oven croissant — https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Croissant_et_Pain_au_chocolat_in_Paris.jpg/960px-Croissant_et_Pain_au_chocolat_in_Paris.jpg
- index.html — oven tart — https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Fruit_tart_with_kiwi%2C_peach%2C_and_raspberry.jpg/960px-Fruit_tart_with_kiwi%2C_peach%2C_and_raspberry.jpg
- index.html — inspired flowers — https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Rustic_flower_vase_%28Unsplash%29.jpg/1280px-Rustic_flower_vase_%28Unsplash%29.jpg
- index.html — inspired baking table — https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Baking_a_Pie_%28Unsplash%29.jpg/960px-Baking_a_Pie_%28Unsplash%29.jpg
- index.html — inspired wheat — https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Lone_ear_of_wheat_%28Unsplash%29.jpg/960px-Lone_ear_of_wheat_%28Unsplash%29.jpg
- index.html — gallery — https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/The_Bakery_%28Unsplash%29.jpg/1280px-The_Bakery_%28Unsplash%29.jpg
- index.html — gallery vertical — https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Rustic_Bakery_Treats_%28Unsplash%29.jpg/960px-Rustic_Bakery_Treats_%28Unsplash%29.jpg
- pages/menu.html — hero — https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Trays_of_Baked_Goods_%28Unsplash%29.jpg/1920px-Trays_of_Baked_Goods_%28Unsplash%29.jpg
- pages/menu.html — country loaf — https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Artisan_Loaves_of_Bread_%28Unsplash%29.jpg/1280px-Artisan_Loaves_of_Bread_%28Unsplash%29.jpg
- pages/menu.html — seeded loaf — https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Nine-Grain_Sourdough_Bread_-_HMM_-_Explored_22_Aug_2017_-_Flickr_-_Thad_Zajdowicz.jpg/960px-Nine-Grain_Sourdough_Bread_-_HMM_-_Explored_22_Aug_2017_-_Flickr_-_Thad_Zajdowicz.jpg
- pages/menu.html — rye walnut — https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Sourdough_rye_with_walnuts.jpg/960px-Sourdough_rye_with_walnuts.jpg
- pages/menu.html — pistachio croissant — https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Pistachio_%26_Chocolate_Croissant_-_GAIL%27s_2026-02-16.jpg/960px-Pistachio_%26_Chocolate_Croissant_-_GAIL%27s_2026-02-16.jpg
- pages/menu.html — berry tart — https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Blueberry_Strawberry_Fruit_Tart_1_2016-05-23.jpg/1280px-Blueberry_Strawberry_Fruit_Tart_1_2016-05-23.jpg
- pages/menu.html — tartlets — https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Parisian_Fruit_Tartlets%2C_September_2009.jpg/960px-Parisian_Fruit_Tartlets%2C_September_2009.jpg
- pages/menu.html — crostata — https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Quince_crostata_%28168056799%29.jpg/960px-Quince_crostata_%28168056799%29.jpg
- pages/menu.html — pumpkin tart — https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Kabocha_Tart_from_Little_Oven.jpg/960px-Kabocha_Tart_from_Little_Oven.jpg
- pages/menu.html — lemon lavender loaf — https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Lemon_and_lavender_Bread_%28Unsplash%29.jpg/1280px-Lemon_and_lavender_Bread_%28Unsplash%29.jpg
- pages/menu.html — apple tart — https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Cinnamon_Cranapple_Tart%2C_2009.jpg/960px-Cinnamon_Cranapple_Tart%2C_2009.jpg
- pages/about.html — hero — https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Bread_on_the_Table_%28Unsplash%29.jpg/1920px-Bread_on_the_Table_%28Unsplash%29.jpg
- pages/about.html — story — https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Making_Bread_%28Unsplash%29.jpg/960px-Making_Bread_%28Unsplash%29.jpg
- pages/about.html — ingredients — https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Ears_of_wheat_at_dusk_%28Unsplash%29.jpg/960px-Ears_of_wheat_at_dusk_%28Unsplash%29.jpg
- pages/about.html — process — https://upload.wikimedia.org/wikipedia/commons/4/42/Active_sourdough_starter_%2849883187806%29.jpg
- pages/about.html — seasonal — https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Blueberries_and_strawberries_-_it_must_be_healthy_%288034683880%29.jpg/960px-Blueberries_and_strawberries_-_it_must_be_healthy_%288034683880%29.jpg
- pages/about.html — crust closeup — https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Sliced_loaf_of_sourdough_bread.jpg/1280px-Sliced_loaf_of_sourdough_bread.jpg
- pages/about.html — closeup — https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Fresh_Bread_and_Butter_%28Unsplash%29.jpg/960px-Fresh_Bread_and_Butter_%28Unsplash%29.jpg
- pages/about.html — space — https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Kitchen_table_%28Unsplash%29.jpg/1280px-Kitchen_table_%28Unsplash%29.jpg
- index.html — gallery không gian tiệm — https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Bread_at_a_Bakery_%28Unsplash%29.jpg/1280px-Bread_at_a_Bakery_%28Unsplash%29.jpg
- pages/menu.html — pain au chocolat — https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D1%81%D0%BA%D0%BE_%D0%BF%D0%B5%D1%87%D0%B8%D0%B2%D0%BE_Pain_au_chocolat_%281%29.jpg/1280px-%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D1%81%D0%BA%D0%BE_%D0%BF%D0%B5%D1%87%D0%B8%D0%B2%D0%BE_Pain_au_chocolat_%281%29.jpg

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Accordion (mở / đóng nội dung)
- Lọc theo nhóm
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/menu.html).
- Chuyển động (đếm trong code): `data-reveal` ×40, `data-header` ×3, `data-split` ×6, `data-reveal-stagger` ×5, `data-parallax` ×3, `data-float` ×3, `data-particles` ×3, `data-reveal="clip"` ×9; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:39 23/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "BLOOM & CRUMB" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 17 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 11:34 23/10/2026 | Dựng website | xong |
| 11:39 23/10/2026 | Sửa: Cái footer bị hư rồi á nó không hiện đủ chữ của thương hiệu | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Giữ đúng 3 trang (Home, Menu, About) theo ràng buộc 'Tối đa 3 trang' của BA; thông tin liên hệ / ghé tiệm đặt ở cuối trang About (#visit) và footer thay cho trang Contact riêng
- BA yêu cầu Việt - Anh đầy đủ + nút chuyển ngôn ngữ, khác mục 2 của concept.md (không tạo bộ chuyển ngôn ngữ). Theo chú thích BA (ưu tiên cao hơn): nội dung mặc định tiếng Anh (lang=en), bản tiếng Việt nằm trong thuộc tính data-vi, nút EN / VI trên header đổi chữ tại chỗ bằng assets/js/site.js và nhớ lựa chọn (localStorage), không nhân đôi số trang
- Thêm font Be Vietnam Pro làm fallback cho chữ tiếng Việt có dấu
- Màu và font: dùng 4 màu BA chỉ định (sage #A6B49A, kem yến mạch #F5F0E5, nâu đất #8B6F52, xanh rừng #384A38) thay cho bảng màu preset; chữ nhỏ màu nâu dùng sắc đậm hơn #6B533C để đạt tương phản AA
- Không có giỏ hàng, đặt bánh, form mua hàng; giá chỉ để tham khảo tại quầy
- Không khẳng định hữu cơ / thuần chay / nguồn gốc nguyên liệu (theo chú thích BA)
- Công cụ ảnh Openverse quá thời gian chờ nhiều lần: 4 ảnh tải được về assets/img, còn lại dùng link ảnh thật từ Wikimedia Commons đã qua link_image

Giới hạn:

- Không có backend: không đặt bánh / giao dịch theo yêu cầu BA; chỉ xem menu và thông tin ghé tiệm
- Địa chỉ, số điện thoại, email, giờ mở cửa và giá là dữ liệu mẫu, cần khách xác nhận
- Bản tiếng Việt chuyển bằng JavaScript trên cùng trang (không có URL riêng cho từng ngôn ngữ, chưa tối ưu SEO song ngữ)
- Phần lớn ảnh là link ngoài Wikimedia Commons (cần mạng); nên thay bằng ảnh thật của tiệm
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
