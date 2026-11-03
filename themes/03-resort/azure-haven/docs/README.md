# AZURE HAVEN

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Thương hiệu / dự án:** AZURE HAVEN
- **Mục đích:** Xây dựng website giới thiệu AZURE HAVEN, một resort nghỉ dưỡng nhiệt đới cao cấp bên bờ biển. Website phải truyền tải cảm giác thư giãn, tự do, riêng tư và sang trọng thông qua hình ảnh thiên nhiên, không gian mở và bố cục giàu tính thẩm mỹ.

Đây là website giới thiệu thương hiệu, không phải nền tảng giao dịch.
- **Ý tưởng thị giác (AI ghi):** Đường chân trời: một vạch mảnh màu xanh ngọc chia trời và biển xuất hiện ở mọi tiêu đề, khung ảnh và chân trang; nhịp chậm như thủy triều, sắc Deep Ocean và cát sáng

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Luxury / Premium — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 3.418 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Playfair Display`: đủ ký tự tiếng Việt
- `Manrope`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | AZURE HAVEN — Nơi đại dương chạm vào bình yên | Tạo ấn tượng đầu tiên về resort, dẫn sang trang giới thiệu, phòng & villa và trải nghiệm | top, hero → hero-cinematic, intro → story-letter, stay → teaser-row, amenities → features-tabs, highlight → cta-fullbleed, closing → cta-split, footer | 10 |
| `pages/about.html` | Giới thiệu — AZURE HAVEN | Kể câu chuyện thương hiệu, triết lý nghỉ dưỡng, kiến trúc cảnh quan và giá trị của resort | top, page-hero → page-hero, story → story-editorial, philosophy → features-numbered, architecture → features-alternate, values → values-type, panorama → cta-fullbleed, footer | 5 |
| `pages/accommodation.html` | Phòng, villa & tiện ích — AZURE HAVEN | Giới thiệu các loại hình lưu trú và tiện ích, không hiển thị giá hay nút đặt phòng | top, page-hero → page-hero, types → compare-columns, rooms → list-cards, private-villa → split-dark, facilities → features-bento, closing → cta-split, footer | 10 |
| `pages/experiences.html` | Trải nghiệm & khám phá — AZURE HAVEN | Giới thiệu các trải nghiệm tại resort và vẻ đẹp thiên nhiên xung quanh | top, page-hero → page-hero, experiences → gallery-lookbook, day → timeline, nature → cta-sky, closing → cta-split, footer | 5 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
azure-haven/
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

Tool đã ghi 5 lượt tìm (nguồn: —), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| tropical beach resort infinity pool | — | lỗi timeout | 74517 ms |
| overwater bungalow turquoise lagoon | — | lỗi timeout | 102060 ms |
| luxury villa ocean view bedroom | — | lỗi timeout | 38520 ms |
| palm trees beach resort | — | lỗi timeout | 31515 ms |
| beach resort pool | — | lỗi timeout | 31522 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-09.jpg/1920px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-09.jpg` | index.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-07.jpg/1280px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-07.jpg` | index.html — giới thiệu resort | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/1_Phu_Quoc_beach_Saigon_Phu_Quoc_Resort_and_Spa.jpg/1280px-1_Phu_Quoc_beach_Saigon_Phu_Quoc_Resort_and_Spa.jpg` | index.html — thẻ bungalow | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-03.jpg/1280px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-03.jpg` | index.html — thẻ villa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/9/91/El_iconico_restaurante_Lighthouse_de_Baros_%28Maldivas%29.jpg` | index.html — tiện ích nhà hàng | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Spa_massage_parlor_in_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg/1280px-Spa_massage_parlor_in_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg` | index.html — tiện ích spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Hardrock_Hotel_-_5th_floor_ocean-pool_view_room_-_panoramio.jpg/960px-Hardrock_Hotel_-_5th_floor_ocean-pool_view_room_-_panoramio.jpg` | index.html — thẻ phòng nghỉ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Infinity_pool_at_Coco_Ocean_Resort_%26_Spa_%28The_Gambia%29_%2823202380634%29.jpg/960px-Infinity_pool_at_Coco_Ocean_Resort_%26_Spa_%28The_Gambia%29_%2823202380634%29.jpg` | index.html — tiện ích hồ bơi | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/DZ6_2428_Sunlight_filters_through_a_shaded_pergola_as_a_peaceful_pathway_winds_past_palm_trees_and_gardens.jpg/960px-DZ6_2428_Sunlight_filters_through_a_shaded_pergola_as_a_peaceful_pathway_winds_past_palm_trees_and_gardens.jpg` | index.html — tiện ích khu vườn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/DFC_1534_Two_palm_trees_silhouetted_against_a_calm_sea_and_a_soft_golden_sunset.jpg/1920px-DFC_1534_Two_palm_trees_silhouetted_against_a_calm_sea_and_a_soft_golden_sunset.jpg` | index.html — trải nghiệm nổi bật tràn viền | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Sunrise_on_the_beach%2C_Koh_Yao_Noi_%28island%29%2C_Phang_Nga_Bay%2C_Thailand.jpg/960px-Sunrise_on_the_beach%2C_Koh_Yao_Noi_%28island%29%2C_Phang_Nga_Bay%2C_Thailand.jpg` | pages/about.html — câu chuyện thương hiệu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-14.jpg/960px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-14.jpg` | pages/about.html — kiến trúc | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Cote_D%27Or_Beach_-_Anse_Volbert_-_Praslin_-_Seychelles.jpg/1920px-Cote_D%27Or_Beach_-_Anse_Volbert_-_Praslin_-_Seychelles.jpg` | pages/about.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Jw-marriott-phu-quoc-bai-kem.jpg/1920px-Jw-marriott-phu-quoc-bai-kem.jpg` | pages/about.html — toàn cảnh kết trang | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-05.jpg/960px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-05.jpg` | pages/about.html — cảnh quan | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-02.jpg/1920px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-02.jpg` | pages/accommodation.html — villa riêng tư | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/9/92/The_Residence_MALDIVES_water_villas.jpg` | pages/accommodation.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ocean-View_Room.jpg/960px-Ocean-View_Room.jpg` | pages/accommodation.html — phòng Ocean | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-11.jpg/960px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-11.jpg` | pages/accommodation.html — bungalow | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-04.jpg/960px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-04.jpg` | pages/accommodation.html — overwater villa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/JW_Marriott_Canc%C3%BAn_%2851689366806%29.jpg/960px-JW_Marriott_Canc%C3%BAn_%2851689366806%29.jpg` | pages/accommodation.html — tiện ích hồ bơi | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/11_Private_SPA_Cottage.jpg/960px-11_Private_SPA_Cottage.jpg` | pages/accommodation.html — tiện ích spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-01.jpg/960px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-01.jpg` | pages/accommodation.html — tiện ích bãi biển riêng | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Infinity_Edge_Pool%2C_Mauritius.JPG/960px-Infinity_Edge_Pool%2C_Mauritius.JPG` | pages/accommodation.html — tiện ích khu vườn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Conrad_Maldives_Rangali_Island_Resort_%E2%80%94_waterfront_and_terrace_%28evening%29_2016-06-23.jpg/960px-Conrad_Maldives_Rangali_Island_Resort_%E2%80%94_waterfront_and_terrace_%28evening%29_2016-06-23.jpg` | pages/accommodation.html — tiện ích nhà hàng | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Sunrise_on_the_coast_of_Anse_Royale_-_Mahe_-_Seychelles_-_2025_-_01.jpg/1920px-Sunrise_on_the_coast_of_Anse_Royale_-_Mahe_-_Seychelles_-_2025_-_01.jpg` | pages/experiences.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Sunset_at_Phu_Quoc.jpg/960px-Sunset_at_Phu_Quoc.jpg` | pages/experiences.html — ngắm hoàng hôn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/1/18/A_meditation_yoga_on_a_beach.jpg` | pages/experiences.html — yoga bên biển | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/GBR-snorkeling-chris-brown.jpg/960px-GBR-snorkeling-chris-brown.jpg` | pages/experiences.html — khám phá thiên nhiên | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Frutas_tropicais_para_caf%C3%A9_da_manh%C3%A3.jpg/960px-Frutas_tropicais_para_caf%C3%A9_da_manh%C3%A3.jpg` | pages/experiences.html — ẩm thực nhiệt đới | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

30 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero — https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-09.jpg/1920px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-09.jpg
- index.html — giới thiệu resort — https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-07.jpg/1280px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-07.jpg
- index.html — thẻ bungalow — https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/1_Phu_Quoc_beach_Saigon_Phu_Quoc_Resort_and_Spa.jpg/1280px-1_Phu_Quoc_beach_Saigon_Phu_Quoc_Resort_and_Spa.jpg
- index.html — thẻ villa — https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-03.jpg/1280px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-03.jpg
- index.html — tiện ích nhà hàng — https://upload.wikimedia.org/wikipedia/commons/9/91/El_iconico_restaurante_Lighthouse_de_Baros_%28Maldivas%29.jpg
- index.html — tiện ích spa — https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Spa_massage_parlor_in_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg/1280px-Spa_massage_parlor_in_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg
- index.html — thẻ phòng nghỉ — https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Hardrock_Hotel_-_5th_floor_ocean-pool_view_room_-_panoramio.jpg/960px-Hardrock_Hotel_-_5th_floor_ocean-pool_view_room_-_panoramio.jpg
- index.html — tiện ích hồ bơi — https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Infinity_pool_at_Coco_Ocean_Resort_%26_Spa_%28The_Gambia%29_%2823202380634%29.jpg/960px-Infinity_pool_at_Coco_Ocean_Resort_%26_Spa_%28The_Gambia%29_%2823202380634%29.jpg
- index.html — tiện ích khu vườn — https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/DZ6_2428_Sunlight_filters_through_a_shaded_pergola_as_a_peaceful_pathway_winds_past_palm_trees_and_gardens.jpg/960px-DZ6_2428_Sunlight_filters_through_a_shaded_pergola_as_a_peaceful_pathway_winds_past_palm_trees_and_gardens.jpg
- index.html — trải nghiệm nổi bật tràn viền — https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/DFC_1534_Two_palm_trees_silhouetted_against_a_calm_sea_and_a_soft_golden_sunset.jpg/1920px-DFC_1534_Two_palm_trees_silhouetted_against_a_calm_sea_and_a_soft_golden_sunset.jpg
- pages/about.html — câu chuyện thương hiệu — https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Sunrise_on_the_beach%2C_Koh_Yao_Noi_%28island%29%2C_Phang_Nga_Bay%2C_Thailand.jpg/960px-Sunrise_on_the_beach%2C_Koh_Yao_Noi_%28island%29%2C_Phang_Nga_Bay%2C_Thailand.jpg
- pages/about.html — kiến trúc — https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-14.jpg/960px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-14.jpg
- pages/about.html — hero — https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Cote_D%27Or_Beach_-_Anse_Volbert_-_Praslin_-_Seychelles.jpg/1920px-Cote_D%27Or_Beach_-_Anse_Volbert_-_Praslin_-_Seychelles.jpg
- pages/about.html — toàn cảnh kết trang — https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Jw-marriott-phu-quoc-bai-kem.jpg/1920px-Jw-marriott-phu-quoc-bai-kem.jpg
- pages/about.html — cảnh quan — https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-05.jpg/960px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-05.jpg
- pages/accommodation.html — villa riêng tư — https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-02.jpg/1920px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-02.jpg
- pages/accommodation.html — hero — https://upload.wikimedia.org/wikipedia/commons/9/92/The_Residence_MALDIVES_water_villas.jpg
- pages/accommodation.html — phòng Ocean — https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ocean-View_Room.jpg/960px-Ocean-View_Room.jpg
- pages/accommodation.html — bungalow — https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-11.jpg/960px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-11.jpg
- pages/accommodation.html — overwater villa — https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-04.jpg/960px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-04.jpg
- pages/accommodation.html — tiện ích hồ bơi — https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/JW_Marriott_Canc%C3%BAn_%2851689366806%29.jpg/960px-JW_Marriott_Canc%C3%BAn_%2851689366806%29.jpg
- pages/accommodation.html — tiện ích spa — https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/11_Private_SPA_Cottage.jpg/960px-11_Private_SPA_Cottage.jpg
- pages/accommodation.html — tiện ích bãi biển riêng — https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-01.jpg/960px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-01.jpg
- pages/accommodation.html — tiện ích khu vườn — https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Infinity_Edge_Pool%2C_Mauritius.JPG/960px-Infinity_Edge_Pool%2C_Mauritius.JPG
- pages/accommodation.html — tiện ích nhà hàng — https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Conrad_Maldives_Rangali_Island_Resort_%E2%80%94_waterfront_and_terrace_%28evening%29_2016-06-23.jpg/960px-Conrad_Maldives_Rangali_Island_Resort_%E2%80%94_waterfront_and_terrace_%28evening%29_2016-06-23.jpg
- pages/experiences.html — hero — https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Sunrise_on_the_coast_of_Anse_Royale_-_Mahe_-_Seychelles_-_2025_-_01.jpg/1920px-Sunrise_on_the_coast_of_Anse_Royale_-_Mahe_-_Seychelles_-_2025_-_01.jpg
- pages/experiences.html — ngắm hoàng hôn — https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Sunset_at_Phu_Quoc.jpg/960px-Sunset_at_Phu_Quoc.jpg
- pages/experiences.html — yoga bên biển — https://upload.wikimedia.org/wikipedia/commons/1/18/A_meditation_yoga_on_a_beach.jpg
- pages/experiences.html — khám phá thiên nhiên — https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/GBR-snorkeling-chris-brown.jpg/960px-GBR-snorkeling-chris-brown.jpg
- pages/experiences.html — ẩm thực nhiệt đới — https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Frutas_tropicais_para_caf%C3%A9_da_manh%C3%A3.jpg/960px-Frutas_tropicais_para_caf%C3%A9_da_manh%C3%A3.jpg

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/experiences.html — exp-spa (từ khóa dự kiến: "outdoor massage resort spa")
- pages/experiences.html — nature (từ khóa dự kiến: "tropical island jetty aerial")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Tabs
- Sao chép nhanh (số điện thoại / email)
- Phóng to ảnh (lightbox)
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/accommodation.html, pages/experiences.html).
- Chuyển động (đếm trong code): `data-reveal` ×58, `data-header` ×4, `data-split` ×7, `data-parallax` ×6, `data-particles` ×4, `data-reveal="clip"` ×15, `data-reveal-stagger` ×7, `data-gradient-shift` ×1; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 09:13 28/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "AZURE HAVEN" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 13 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 09:13 28/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Thư viện ảnh (openverse) quá thời gian chờ ở cả hai lần tìm, nên chuyển sang link ảnh Wikimedia Commons đã qua link_image
- BA yêu cầu nút chuyển VI / EN trên cả bốn trang: nội dung mặc định tiếng Việt (html lang=vi), bản tiếng Anh lưu trong thuộc tính data-en và đổi bằng assets/js/site.js; lựa chọn được ghi nhớ giữa các trang
- Tiêu đề BA ghi bằng tiếng Anh ('Where the Ocean Meets Serenity', 'A Sanctuary by the Sea') hiển thị nguyên văn ở chế độ EN; chế độ VI dùng bản dịch để không trộn ngôn ngữ
- Website giữ đúng 4 trang BA nêu; nút 'xem chi tiết' của thẻ phòng dẫn tới từng mục trong pages/accommodation.html thay vì trang chi tiết riêng
- Bảng màu theo BA (Deep Ocean, Turquoise, Sand Beige, Warm White, Palm Green) thay cho bảng màu preset; tên màu preset vẫn khai báo làm bí danh trong tw-config.js
- Turquoise #55B9B2 chỉ dùng làm điểm nhấn / nền chữ tối vì không đủ tương phản cho chữ nhỏ trên nền sáng; chữ nhấn dùng sắc đậm hơn #2A746E
- Trải nghiệm spa và section thiên nhiên cuối trang Trải nghiệm dựng không ảnh vì đã hết hạn mức link ảnh trong lượt

Giới hạn:

- Không có đặt phòng, đặt lịch, biểu mẫu, giỏ hàng hay thanh toán theo yêu cầu BA; liên hệ qua số điện thoại / email mẫu
- Diện tích và sức chứa phòng là số minh họa
- Ảnh dùng link ngoài từ Wikimedia Commons, cần thay bằng ảnh thật của resort
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
