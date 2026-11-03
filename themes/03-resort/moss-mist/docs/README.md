# MOSS & MIST

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Thương hiệu / dự án:** MOSS & MIST
- **Mục đích:** Thiết kế và xây dựng website giới thiệu thương hiệu MOSS & MIST, một khu nghỉ dưỡng sinh thái cao cấp nằm giữa rừng thông, thung lũng xanh và những triền núi phủ sương.

Website hướng đến khách hàng yêu thích thiên nhiên, kiến trúc tối giản, không gian riêng tư và phong cách nghỉ dưỡng chậm rãi.

MOSS & MIST không được thể hiện như một khách sạn thành thị hoặc resort biển. Đây phải là một thương hiệu nghỉ dưỡng có bản sắc riêng, nơi kiến trúc hòa vào cảnh quan và trải nghiệm được xây dựng quanh sự tĩnh lặng.

Thông điệp thương hiệu:

“Find Stillness in Nature.”

“Trở về với sự tĩnh tại giữa thiên nhiên.”

Định vị thương hiệu:

Premium Forest Retreat.

Nature-inspired Architecture.

Slow Living & Mindful Experiences.

Private Cabins, Villas & Lodges.

Sustainable Hospitality.

Mục tiêu website

Giới thiệu hình ảnh và câu chuyện thương hiệu.

Thể hiện triết lý kiến trúc và phong cách nghỉ dưỡng.

Giới thiệu chi tiết các loại phòng, villa, lodge và tiện ích.

Giới thiệu những trải nghiệm đặc trưng của resort.

Tạo một trải nghiệm hình ảnh cao cấp, nhất quán trên desktop và mobile.

Đây là website giới thiệu thương hiệu, không phải website giao dịch.

Tuyệt đối không xây dựng chức năng đặt phòng, đặt lịch, đặt dịch vụ, mua hàng, giỏ hàng, thanh toán hoặc gửi yêu cầu đặt chỗ.
- **Ý tưởng thị giác (AI ghi):** Đường kẻ mảnh như đường chân trời trong sương: hairline mở rộng dần khi cuộn, dẫn mắt qua mọi trang; ảnh lớn đặt bất đối xứng, góc vuông sắc, chữ serif với một từ nghiêng nhấn ý

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Nature / Organic / Atmospheric — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 7.156 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Fraunces`: đủ ký tự tiếng Việt
- `Manrope`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | MOSS & MIST — Trở về với sự tĩnh tại giữa rừng thông | Giới thiệu thương hiệu, dẫn sang không gian nghỉ dưỡng, câu chuyện và trải nghiệm | top, hero → hero-cinematic, intro → story-split, spaces → gallery-lookbook, experience → feature-fullbleed, stillness → quote-full, gallery → gallery-asymmetric, footer | 11 |
| `pages/about.html` | Giới thiệu — MOSS & MIST | Câu chuyện thương hiệu, triết lý thiết kế, kiến trúc và hành trình phát triển | top, about-hero → page-hero, story → story-split, philosophy → principles-columns, architecture → features-alternate, journey → timeline, closing → cta-fullbleed, footer | 5 |
| `pages/accommodation.html` | Không gian nghỉ — MOSS & MIST | Giới thiệu Forest Cabin, Valley Villa, Signature Lodge, tiện nghi và vật liệu kiến trúc | top, stay-hero → page-hero, forest-cabin → room-split-left, valley-villa → room-split-right, signature-lodge → room-fullwidth, amenities → features-bento, materials → materials-reveal, stay-info → accordion, footer | 10 |
| `pages/experiences.html` | Trải nghiệm — MOSS & MIST | Forest Walk, Morning Rituals, Local Cuisine, Quiet Moments và thiên nhiên theo mùa | top, exp-hero → page-hero, forest-walk → story-duo-images, morning-rituals → story-stacked-offset, local-cuisine → feature-fullbleed, quiet-moments → panorama-statement, seasons → features-tabs, exp-closing → cta-fullbleed, footer | 12 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
moss-mist/
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
      accommodation.html
      experiences.html
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

- **⚠ Tool tìm ảnh trả lỗi:** timeout: openverse: quá 15s không phản hồi
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 2 ảnh chưa dùng: https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Inside_the_log_cabin%2C_Harestanes.jpg/1280px-Inside_the_log_cabin%2C_Harestanes.jpg, https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Pinterian_Stone_Clad%2C_E5.jpg/1280px-Pinterian_Stone_Clad%2C_E5.jpg

Tool đã ghi 4 lượt tìm (nguồn: —), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| misty pine forest valley | — | lỗi timeout | 43769 ms |
| wooden cabin forest modern | — | lỗi timeout | 52992 ms |
| cabin interior wood window forest | — | lỗi timeout | 94939 ms |
| foggy pine forest | — | lỗi timeout | 31517 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Foggy_pine_%28Unsplash%29.jpg/1920px-Foggy_pine_%28Unsplash%29.jpg` | index.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Shafts_of_sunlight_through_trees_above_Dimples%2C_Macclesfield_Forest_-_geograph.org.uk_-_6711872.jpg/1920px-Shafts_of_sunlight_through_trees_above_Dimples%2C_Macclesfield_Forest_-_geograph.org.uk_-_6711872.jpg` | index.html — trải nghiệm nổi bật | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Sunlight_through_pines_and_spruces_at_Myrstigen.jpg/1280px-Sunlight_through_pines_and_spruces_at_Myrstigen.jpg` | index.html — giới thiệu resort | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Big_Springs_Cabin_Rentals_-_3_%2815229626478%29.jpg/1280px-Big_Springs_Cabin_Rentals_-_3_%2815229626478%29.jpg` | index.html — không gian nghỉ dưỡng 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Cozy_wooden_cabin_interior_with_seating_area_and_bedroom_space.jpg/1280px-Cozy_wooden_cabin_interior_with_seating_area_and_bedroom_space.jpg` | index.html — không gian nghỉ dưỡng 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Historic_Cabin_in_Wilsonia%2C_California.jpg/1280px-Historic_Cabin_in_Wilsonia%2C_California.jpg` | index.html — không gian nghỉ dưỡng 3 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Misty_Morning%2C_GB.jpg/1280px-Misty_Morning%2C_GB.jpg` | index.html — gallery 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Widok_na_Pieniny_wcze%C5%9Bnie_rano_z_Lubania%2C_20230715_0500_7070.jpg/1280px-Widok_na_Pieniny_wcze%C5%9Bnie_rano_z_Lubania%2C_20230715_0500_7070.jpg` | index.html — gallery 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_Pine_Cathedral_2_Kings_Forest.JPG/1280px-Red_Pine_Cathedral_2_Kings_Forest.JPG` | index.html — gallery 3 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Hoar_frost_on_trees_along_Myrstigen_2.jpg/1280px-Hoar_frost_on_trees_along_Myrstigen_2.jpg` | index.html — gallery 4 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Neblina_en_el_Bosque.JPG/1280px-Neblina_en_el_Bosque.JPG` | index.html — gallery 5 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Morning_Clouds_Over_North_Van_Mountain_Valley_%283%29.jpg/1920px-Morning_Clouds_Over_North_Van_Mountain_Valley_%283%29.jpg` | pages/about.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/b/b5/Old_wooden_cabin_in_forest.jpg` | pages/about.html — câu chuyện thương hiệu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Rustic_wood_cabin_interior_with_dining_table_kitchenette_and_bedroom_area.jpg/1280px-Rustic_wood_cabin_interior_with_dining_table_kitchenette_and_bedroom_area.jpg` | pages/about.html — kiến trúc | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Spruces_and_pines_along_Myrstigen_1.jpg/1280px-Spruces_and_pines_along_Myrstigen_1.jpg` | pages/about.html — thiên nhiên | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Views_along_the_Mary_Mountain_Trail-_misty_morning_views_after_the_rain_in_Hayden_Valley_%2855367555875%29.jpg/1920px-Views_along_the_Mary_Mountain_Trail-_misty_morning_views_after_the_rain_in_Hayden_Valley_%2855367555875%29.jpg` | pages/about.html — thông điệp cuối | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Cabin_next_to_the_Fr%C3%B8ylandsvatnet%2C_Sandnes%2C_Norway_julesvernex2.jpg/1920px-Cabin_next_to_the_Fr%C3%B8ylandsvatnet%2C_Sandnes%2C_Norway_julesvernex2.jpg` | pages/accommodation.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Cabin_In_The_Forest_Of_Finland_%28175931625%29.jpeg/1280px-Cabin_In_The_Forest_Of_Finland_%28175931625%29.jpeg` | pages/accommodation.html — Forest Cabin | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/DREVEN%C3%9D_ZRUB_V_LESE_-_WOODEN_LOG_CABIN_IN_THE_FOREST_-_panoramio.jpg/1280px-DREVEN%C3%9D_ZRUB_V_LESE_-_WOODEN_LOG_CABIN_IN_THE_FOREST_-_panoramio.jpg` | pages/accommodation.html — Valley Villa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Wooden_cabin_in_Kherzouza_forest.jpg/1920px-Wooden_cabin_in_Kherzouza_forest.jpg` | pages/accommodation.html — Signature Lodge | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Sauna_room_next_to_a_bedroom_in_a_modern_apartment.jpg/1280px-Sauna_room_next_to_a_bedroom_in_a_modern_apartment.jpg` | pages/accommodation.html — tiện nghi xông hơi | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Cozy_wooden_cabin_interior_with_kitchen.jpg/1280px-Cozy_wooden_cabin_interior_with_kitchen.jpg` | pages/accommodation.html — tiện nghi bếp | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Inside_the_log_cabin%2C_Harestanes.jpg/1280px-Inside_the_log_cabin%2C_Harestanes.jpg` | pages/accommodation.html — tiện nghi phòng sinh hoạt | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Weathered_wood_texture.jpg/1280px-Weathered_wood_texture.jpg` | pages/accommodation.html — vật liệu gỗ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Pinterian_Stone_Clad%2C_E5.jpg/1280px-Pinterian_Stone_Clad%2C_E5.jpg` | pages/accommodation.html — vật liệu đá | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/ICM_of_sunlight_through_pines_and_spruces_at_Myrstigen.jpg/1280px-ICM_of_sunlight_through_pines_and_spruces_at_Myrstigen.jpg` | pages/accommodation.html — vật liệu ánh sáng | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Sunlight_through_trees_%281%29.jpg/1920px-Sunlight_through_trees_%281%29.jpg` | pages/experiences.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/La_Palma%2C_path_to_Time%2C_pine_forest.jpg/1280px-La_Palma%2C_path_to_Time%2C_pine_forest.jpg` | pages/experiences.html — Forest Walk 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Path_through_Pine_Forest_Langtang.JPG/1280px-Path_through_Pine_Forest_Langtang.JPG` | pages/experiences.html — Forest Walk 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Tea_seemed_especially_steamy_this_morning_%2823553842543%29.jpg/1280px-Tea_seemed_especially_steamy_this_morning_%2823553842543%29.jpg` | pages/experiences.html — Morning Rituals 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Widok_z_Lubania_wcze%C5%9Bnie_rano%2C_20230715_0508_7102.jpg/1280px-Widok_z_Lubania_wcze%C5%9Bnie_rano%2C_20230715_0508_7102.jpg` | pages/experiences.html — Morning Rituals 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Chile_-_Cocham%C3%B3_climbing_23_-_misty_mountains_%286873698866%29.jpg/1920px-Chile_-_Cocham%C3%B3_climbing_23_-_misty_mountains_%286873698866%29.jpg` | pages/experiences.html — Quiet Moments | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/d/d5/Sunlight_through_trees_in_a_spring_forest_with_white_flowers.jpg` | pages/experiences.html — mùa xuân | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Yumthang_Valley.jpg/1280px-Yumthang_Valley.jpg` | pages/experiences.html — mùa hạ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Alsatian_mountain_forest_in_autumn.jpg/1280px-Alsatian_mountain_forest_in_autumn.jpg` | pages/experiences.html — mùa thu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Sunlight_in_the_snowy_forest_1.jpg/1280px-Sunlight_in_the_snowy_forest_1.jpg` | pages/experiences.html — mùa đông | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Morning_Clouds_Over_North_Van_Mountain_Valley_%285%29.jpg/1920px-Morning_Clouds_Over_North_Van_Mountain_Valley_%285%29.jpg` | pages/experiences.html — thông điệp cuối | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Fresh_red_peppers_displayed_at_a_local_farm.jpg/1280px-Fresh_red_peppers_displayed_at_a_local_farm.jpg` | pages/experiences.html — Local Cuisine | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Cabin_next_to_the_Fr%C3%B8ylandsvatnet%2C_Sandnes%2C_Norway_julesvernex2-2.jpg/1280px-Cabin_next_to_the_Fr%C3%B8ylandsvatnet%2C_Sandnes%2C_Norway_julesvernex2-2.jpg` | index.html — không gian nghỉ dưỡng 1 (Forest Cabin) | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/2/23/Stone_wall_facade_texture.jpg` | pages/accommodation.html — vật liệu đá (thay ảnh cũ sai chủ đề) | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

38 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero — https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Foggy_pine_%28Unsplash%29.jpg/1920px-Foggy_pine_%28Unsplash%29.jpg
- index.html — trải nghiệm nổi bật — https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Shafts_of_sunlight_through_trees_above_Dimples%2C_Macclesfield_Forest_-_geograph.org.uk_-_6711872.jpg/1920px-Shafts_of_sunlight_through_trees_above_Dimples%2C_Macclesfield_Forest_-_geograph.org.uk_-_6711872.jpg
- index.html — giới thiệu resort — https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Sunlight_through_pines_and_spruces_at_Myrstigen.jpg/1280px-Sunlight_through_pines_and_spruces_at_Myrstigen.jpg
- index.html — không gian nghỉ dưỡng 1 — https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Big_Springs_Cabin_Rentals_-_3_%2815229626478%29.jpg/1280px-Big_Springs_Cabin_Rentals_-_3_%2815229626478%29.jpg
- index.html — không gian nghỉ dưỡng 2 — https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Cozy_wooden_cabin_interior_with_seating_area_and_bedroom_space.jpg/1280px-Cozy_wooden_cabin_interior_with_seating_area_and_bedroom_space.jpg
- index.html — không gian nghỉ dưỡng 3 — https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Historic_Cabin_in_Wilsonia%2C_California.jpg/1280px-Historic_Cabin_in_Wilsonia%2C_California.jpg
- index.html — gallery 1 — https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Misty_Morning%2C_GB.jpg/1280px-Misty_Morning%2C_GB.jpg
- index.html — gallery 2 — https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Widok_na_Pieniny_wcze%C5%9Bnie_rano_z_Lubania%2C_20230715_0500_7070.jpg/1280px-Widok_na_Pieniny_wcze%C5%9Bnie_rano_z_Lubania%2C_20230715_0500_7070.jpg
- index.html — gallery 3 — https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_Pine_Cathedral_2_Kings_Forest.JPG/1280px-Red_Pine_Cathedral_2_Kings_Forest.JPG
- index.html — gallery 4 — https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Hoar_frost_on_trees_along_Myrstigen_2.jpg/1280px-Hoar_frost_on_trees_along_Myrstigen_2.jpg
- index.html — gallery 5 — https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Neblina_en_el_Bosque.JPG/1280px-Neblina_en_el_Bosque.JPG
- pages/about.html — hero — https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Morning_Clouds_Over_North_Van_Mountain_Valley_%283%29.jpg/1920px-Morning_Clouds_Over_North_Van_Mountain_Valley_%283%29.jpg
- pages/about.html — câu chuyện thương hiệu — https://upload.wikimedia.org/wikipedia/commons/b/b5/Old_wooden_cabin_in_forest.jpg
- pages/about.html — kiến trúc — https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Rustic_wood_cabin_interior_with_dining_table_kitchenette_and_bedroom_area.jpg/1280px-Rustic_wood_cabin_interior_with_dining_table_kitchenette_and_bedroom_area.jpg
- pages/about.html — thiên nhiên — https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Spruces_and_pines_along_Myrstigen_1.jpg/1280px-Spruces_and_pines_along_Myrstigen_1.jpg
- pages/about.html — thông điệp cuối — https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Views_along_the_Mary_Mountain_Trail-_misty_morning_views_after_the_rain_in_Hayden_Valley_%2855367555875%29.jpg/1920px-Views_along_the_Mary_Mountain_Trail-_misty_morning_views_after_the_rain_in_Hayden_Valley_%2855367555875%29.jpg
- pages/accommodation.html — hero — https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Cabin_next_to_the_Fr%C3%B8ylandsvatnet%2C_Sandnes%2C_Norway_julesvernex2.jpg/1920px-Cabin_next_to_the_Fr%C3%B8ylandsvatnet%2C_Sandnes%2C_Norway_julesvernex2.jpg
- pages/accommodation.html — Forest Cabin — https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Cabin_In_The_Forest_Of_Finland_%28175931625%29.jpeg/1280px-Cabin_In_The_Forest_Of_Finland_%28175931625%29.jpeg
- pages/accommodation.html — Valley Villa — https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/DREVEN%C3%9D_ZRUB_V_LESE_-_WOODEN_LOG_CABIN_IN_THE_FOREST_-_panoramio.jpg/1280px-DREVEN%C3%9D_ZRUB_V_LESE_-_WOODEN_LOG_CABIN_IN_THE_FOREST_-_panoramio.jpg
- pages/accommodation.html — Signature Lodge — https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Wooden_cabin_in_Kherzouza_forest.jpg/1920px-Wooden_cabin_in_Kherzouza_forest.jpg
- pages/accommodation.html — tiện nghi xông hơi — https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Sauna_room_next_to_a_bedroom_in_a_modern_apartment.jpg/1280px-Sauna_room_next_to_a_bedroom_in_a_modern_apartment.jpg
- pages/accommodation.html — tiện nghi bếp — https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Cozy_wooden_cabin_interior_with_kitchen.jpg/1280px-Cozy_wooden_cabin_interior_with_kitchen.jpg
- pages/accommodation.html — vật liệu gỗ — https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Weathered_wood_texture.jpg/1280px-Weathered_wood_texture.jpg
- pages/accommodation.html — vật liệu ánh sáng — https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/ICM_of_sunlight_through_pines_and_spruces_at_Myrstigen.jpg/1280px-ICM_of_sunlight_through_pines_and_spruces_at_Myrstigen.jpg
- pages/experiences.html — hero — https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Sunlight_through_trees_%281%29.jpg/1920px-Sunlight_through_trees_%281%29.jpg
- pages/experiences.html — Forest Walk 1 — https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/La_Palma%2C_path_to_Time%2C_pine_forest.jpg/1280px-La_Palma%2C_path_to_Time%2C_pine_forest.jpg
- pages/experiences.html — Forest Walk 2 — https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Path_through_Pine_Forest_Langtang.JPG/1280px-Path_through_Pine_Forest_Langtang.JPG
- pages/experiences.html — Morning Rituals 1 — https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Tea_seemed_especially_steamy_this_morning_%2823553842543%29.jpg/1280px-Tea_seemed_especially_steamy_this_morning_%2823553842543%29.jpg
- pages/experiences.html — Morning Rituals 2 — https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Widok_z_Lubania_wcze%C5%9Bnie_rano%2C_20230715_0508_7102.jpg/1280px-Widok_z_Lubania_wcze%C5%9Bnie_rano%2C_20230715_0508_7102.jpg
- pages/experiences.html — Quiet Moments — https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Chile_-_Cocham%C3%B3_climbing_23_-_misty_mountains_%286873698866%29.jpg/1920px-Chile_-_Cocham%C3%B3_climbing_23_-_misty_mountains_%286873698866%29.jpg
- pages/experiences.html — mùa xuân — https://upload.wikimedia.org/wikipedia/commons/d/d5/Sunlight_through_trees_in_a_spring_forest_with_white_flowers.jpg
- pages/experiences.html — mùa hạ — https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Yumthang_Valley.jpg/1280px-Yumthang_Valley.jpg
- pages/experiences.html — mùa thu — https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Alsatian_mountain_forest_in_autumn.jpg/1280px-Alsatian_mountain_forest_in_autumn.jpg
- pages/experiences.html — mùa đông — https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Sunlight_in_the_snowy_forest_1.jpg/1280px-Sunlight_in_the_snowy_forest_1.jpg
- pages/experiences.html — thông điệp cuối — https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Morning_Clouds_Over_North_Van_Mountain_Valley_%285%29.jpg/1920px-Morning_Clouds_Over_North_Van_Mountain_Valley_%285%29.jpg
- pages/experiences.html — Local Cuisine — https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Fresh_red_peppers_displayed_at_a_local_farm.jpg/1280px-Fresh_red_peppers_displayed_at_a_local_farm.jpg
- index.html — không gian nghỉ dưỡng 1 (Forest Cabin) — https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Cabin_next_to_the_Fr%C3%B8ylandsvatnet%2C_Sandnes%2C_Norway_julesvernex2-2.jpg/1280px-Cabin_next_to_the_Fr%C3%B8ylandsvatnet%2C_Sandnes%2C_Norway_julesvernex2-2.jpg
- pages/accommodation.html — vật liệu đá (thay ảnh cũ sai chủ đề) — https://upload.wikimedia.org/wikipedia/commons/2/23/Stone_wall_facade_texture.jpg

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/accommodation.html — material-linen (từ khóa dự kiến: "linen fabric texture")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Sao chép nhanh (số điện thoại / email)
- Nút về đầu trang
- Accordion (mở / đóng nội dung)
- Tabs
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/accommodation.html, pages/experiences.html).
- Chuyển động (đếm trong code): `data-reveal` ×63, `data-header` ×4, `data-split` ×8, `data-reveal-stagger` ×4, `data-parallax` ×8, `data-clouds` ×2, `data-scrub` ×8, `data-reveal="clip"` ×15, `data-particles` ×2; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 09:49 28/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 1 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "MOSS & MIST" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 16 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 09:49 28/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Dựng đúng 4 trang (Home, About, Accommodation, Experiences) theo chú thích của BA, không thêm trang Contact; thông tin liên hệ đặt ở khối cuối trang dùng chung trong footer (mailto / tel / sao chép số).
- Có nút chuyển VI/EN hoạt động thật theo yêu cầu cụ thể của BA (ghi đè mục 'Không tạo bộ chuyển ngôn ngữ' của concept.md): HTML gốc là tiếng Việt (lang=vi), site.js thay chữ sang tiếng Anh từ thuộc tính data-en, đổi lang và lưu lựa chọn trong localStorage.
- Màu theo BA: xanh rừng #263D32, xanh rêu #71816A, trắng sương #F1F0EA, be đá #D5D0C5, xám than #343A35 (thay bảng màu preset). Góc vuông sắc, không thẻ bo tròn theo yêu cầu 'không khối thẻ bo tròn dày đặc'.
- Thư viện ảnh (openverse) lỗi quá thời gian chờ → dùng link ảnh thật từ Wikimedia Commons qua link_image.
- Phần vật liệu: không tìm được ảnh vải lanh phù hợp → trình bày gỗ, đá, ánh sáng; vải tự nhiên nêu bằng chữ.
- Sau khi tự xem: thay ảnh vật liệu đá (ảnh cũ là dãy nhà phố, sai chủ đề) và ảnh tiện nghi tối; hai link đã kiểm nhưng bỏ không dùng (Pinterian Stone Clad, Inside the log cabin Harestanes) vẫn còn trong CREDITS. Đã chạm giới hạn 40 link nên ảnh Forest Cabin (đen trắng), Valley Villa và Signature Lodge vẫn mang vẻ mộc / cũ, nên thay bằng ảnh thật của resort.

Lỗi QA còn mở:

- [Mức chuyển động] : BA chọn Level 2 nhưng trang dùng hiệu ứng Level 3: data-scrub.

Giới hạn:

- Website giới thiệu, không có chức năng đặt phòng, đặt dịch vụ, thanh toán hay biểu mẫu giao dịch (theo yêu cầu).
- Diện tích, sức chứa, mốc thời gian và địa chỉ / số điện thoại là nội dung mẫu, cần thay bằng dữ liệu thật.
- Ảnh dùng bằng link ngoài (Wikimedia Commons), cần ảnh thật của resort khi triển khai.
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
