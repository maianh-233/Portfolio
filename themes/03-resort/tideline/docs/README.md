# TIDELINE

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Thương hiệu / dự án:** TIDELINE
- **Mục đích:** hiết kế website giới thiệu TIDELINE, một resort nghỉ dưỡng ven biển lấy cảm hứng từ những vách đá ven đại dương, địa hình khô cằn và vẻ đẹp của kiến trúc điêu khắc.

Thay vì mô phỏng resort biển hiện đại thông thường, TIDELINE theo đuổi phong cách Desert Coastal Retreat: mạnh mẽ, nguyên bản, giàu kết cấu vật liệu và có sự tương phản giữa đất, đá, ánh sáng và mặt nước.

Website cần tạo cảm giác như một công trình kiến trúc được điêu khắc từ cảnh quan tự nhiên, nơi biển xanh đậm gặp những vách đá màu đất nung.

Tránh phong cách Tropical Luxury, Mediterranean Resort, Coastal Minimalism và các giao diện khách sạn sử dụng quá nhiều kính, nền trắng hoặc xanh biển nhạt.
- **Ý tưởng thị giác (AI ghi):** Đường chân trời mảnh màu Terracotta: một nét kẻ ngang tự vẽ dần chạy qua mọi trang, chia đất nung và đại dương như mép vách đá; ảnh lớn góc vuông kèm chú thích nhỏ in nghiêng kiểu tạp chí kiến trúc

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Art Gallery — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 9.614 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Cormorant Garamond`: đủ ký tự tiếng Việt
- `Montserrat`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | TIDELINE — Nơi đất liền gặp đại dương | Giới thiệu bản sắc Desert Coastal Retreat, dẫn sang Khu nghỉ, Lưu trú và Trải nghiệm | top, hero → hero-cinematic, intro → story-editorial, architecture → gallery-lookbook, stays → teaser-row, elements → features-bento, escape → quote-full, statement → cta-type, footer | 13 |
| `pages/about.html` | Khu nghỉ — TIDELINE | Kể triết lý thiết kế: địa hình, vật liệu, ánh sáng, kiến trúc và giá trị thương hiệu | top, page-hero → page-hero, philosophy → story-editorial, materials → features-alternate, architecture-landscape → gallery-lookbook, values → features-numbered, next → cta-type, footer | 9 |
| `pages/experiences.html` | Trải nghiệm — TIDELINE | Giới thiệu trải nghiệm: khám phá bờ biển, ẩm thực, thư giãn, vận động, hoàng hôn; không CTA đặt phòng | top, page-hero → page-hero, coastal-discovery → gallery-filmstrip, dining → gallery-lookbook, slow-rituals → story-letter, movement → features-tabs, sunset-hour → quote-full, closing → cta-type, footer | 7 |
| `pages/stays.html` | Lưu trú — TIDELINE | Trình bày ba hạng lưu trú (mô tả, đặc điểm thiết kế, tiện nghi, không giá) và năm tiện ích khu nghỉ | top, page-hero → page-hero, ocean-suite → detail-article, horizon-villa → detail-article, coastal-residence → detail-article, facilities → features-bento, next → cta-type, footer | 10 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
tideline/
  web/
    assets/
      css/
        site.css
      img/  (3 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        site.js
        tw-config.js
        ui.js
    pages/
      about.html
      experiences.html
      stays.html
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

- **⚠ Một số lượt tìm ảnh lỗi:** 6/11 lượt lỗi (timeout)
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 3 ảnh chưa dùng: https://images.unsplash.com/photo-1765910639954-27ae0c260586?w=1400&q=80&auto=format&fit=crop, assets/img/exp-slow-rituals.jpg, assets/img/exp-slow-rituals-2.jpg
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1622993829691-85d51ba029c2?w=2400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1533541589358-4b1083f8929b?w=2000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 11 lượt tìm (nguồn: openverse), 2 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| cliff resort ocean terracotta | openverse | 12 ảnh | 45037 ms |
| rammed earth wall texture | — | lỗi timeout | 64051 ms |
| adobe architecture curved wall | — | lỗi timeout | 63452 ms |
| infinity pool cliff sea | — | lỗi timeout | 112972 ms |
| adobe architecture desert | openverse | 12 ảnh | 19796 ms |
| Casa Malaparte Capri | openverse | 0 ảnh | 41894 ms |
| Algarve cliffs ocean | — | lỗi timeout | 31533 ms |
| hammam stone bath | openverse | 7 ảnh | 29886 ms |
| spa bath candles stone | openverse | 8 ảnh | 27491 ms |
| hot stone massage spa | — | lỗi timeout | 38486 ms |
| yoga beach sunrise | — | lỗi timeout | 42507 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://images.unsplash.com/photo-1622993829691-85d51ba029c2?w=2400&q=80&auto=format&fit=crop` | index.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1400&q=80&auto=format&fit=crop` | index.html — intro ảnh chi tiết bề mặt | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1533541589358-4b1083f8929b?w=2000&q=80&auto=format&fit=crop` | index.html — architecture ảnh lớn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1632399593344-7f96512c0c86?w=1400&q=80&auto=format&fit=crop` | index.html — architecture ảnh nhỏ 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1552853519-1793ff886074?w=1400&q=80&auto=format&fit=crop` | index.html — architecture ảnh nhỏ 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1738585608732-49294c24ece0?w=1400&q=80&auto=format&fit=crop` | index.html — stay collection Ocean Suite | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1694350639569-6706d403a30d?w=1600&q=80&auto=format&fit=crop` | index.html — stay collection Horizon Villa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1707329196116-ca454e0c5799?w=1400&q=80&auto=format&fit=crop` | index.html — stay collection Coastal Residence | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1735770517146-e95c872226fc?w=1800&q=80&auto=format&fit=crop` | index.html — the elements Ocean Pool | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1780914117972-7997f4459523?w=1400&q=80&auto=format&fit=crop` | index.html — the elements Earth Table | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1781455495578-944c2dcbd2de?w=1400&q=80&auto=format&fit=crop` | index.html — the elements Stone Spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1765910639954-27ae0c260586?w=1400&q=80&auto=format&fit=crop` | index.html — the elements Sunset Lounge | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1548130648-c7d462f2b54b?w=2400&q=80&auto=format&fit=crop` | index.html — full-width gallery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1541953747-d09e945b9083?w=2400&q=80&auto=format&fit=crop` | pages/about.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1497334251732-c0eb68e26827?w=1200&q=80&auto=format&fit=crop` | pages/about.html — materials Earth | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1741848613519-1024f262de07?w=1200&q=80&auto=format&fit=crop` | pages/about.html — materials Stone | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1771086604156-5832dafe4854?w=1200&q=80&auto=format&fit=crop` | pages/about.html — materials Light | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1780303036823-649d1992dbac?w=1600&q=80&auto=format&fit=crop` | pages/about.html — architecture & landscape 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1760261799672-2469a6c4c6f3?w=1400&q=80&auto=format&fit=crop` | pages/about.html — architecture & landscape 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1760262645776-633204d88ded?w=1400&q=80&auto=format&fit=crop` | pages/about.html — architecture & landscape 3 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1777027796404-2fee261818da?w=1400&q=80&auto=format&fit=crop` | pages/about.html — architecture & landscape 4 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1791812455370-4250b4adb509?w=1800&q=80&auto=format&fit=crop` | pages/about.html — architecture & landscape 5 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1707576156867-212a2fcf6698?w=2400&q=80&auto=format&fit=crop` | pages/stays.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1734456416941-416c08f0778e?w=1600&q=80&auto=format&fit=crop` | pages/stays.html — Ocean Suite ảnh chính | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1767555027401-6829988ca9df?w=1200&q=80&auto=format&fit=crop` | pages/stays.html — Ocean Suite ảnh cửa sổ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1705095605806-4b2936e90471?w=2000&q=80&auto=format&fit=crop` | pages/stays.html — Horizon Villa ảnh chính | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1758907749704-7ad4e48b2aa0?w=1200&q=80&auto=format&fit=crop` | pages/stays.html — Horizon Villa ảnh phụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&q=80&auto=format&fit=crop` | pages/stays.html — Coastal Residence ảnh chính | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1564137799581-baca1aa17f5d?w=1200&q=80&auto=format&fit=crop` | pages/stays.html — Coastal Residence ảnh phòng khách | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1562407132-e23789f81bb7?w=1400&q=80&auto=format&fit=crop` | pages/stays.html — facilities Ocean Pool | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1731941465921-eb4285693713?w=1400&q=80&auto=format&fit=crop` | pages/stays.html — facilities Earth Table | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1761470575018-135c213340eb?w=1200&q=80&auto=format&fit=crop` | pages/stays.html — facilities Stone Spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1782367807681-2289f10c7309?w=1600&q=80&auto=format&fit=crop` | pages/stays.html — facilities Sunset Lounge | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1745327883348-8d78cb4661b0?w=1200&q=80&auto=format&fit=crop` | pages/stays.html — facilities Movement Studio | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1749370568433-659414fdabcd?w=2400&q=80&auto=format&fit=crop` | pages/experiences.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1645149837372-b83658b3f6c0?w=2400&q=80&auto=format&fit=crop` | pages/experiences.html — coastal discovery toàn cảnh | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1668653893803-0b645b9257a1?w=1400&q=80&auto=format&fit=crop` | pages/experiences.html — coastal discovery ảnh phụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1676471926534-d5c9771909fa?w=1200&q=80&auto=format&fit=crop` | pages/experiences.html — art of dining món ăn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1750943036999-81e666b2296c?w=1200&q=80&auto=format&fit=crop` | pages/experiences.html — art of dining bàn ăn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1615234590668-43416e63bf2c?w=1600&q=80&auto=format&fit=crop` | pages/experiences.html — art of dining không gian | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `assets/img/exp-slow-rituals.jpg` | pages/experiences.html — slow rituals | openverse | CC BY-SA 2.0 | ✗ |
| `assets/img/exp-slow-rituals-2.jpg` | pages/experiences.html — slow rituals ảnh phụ | openverse | CC BY-SA 2.0 | ✗ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

39 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero — https://images.unsplash.com/photo-1622993829691-85d51ba029c2?w=2400&q=80&auto=format&fit=crop
- index.html — intro ảnh chi tiết bề mặt — https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1400&q=80&auto=format&fit=crop
- index.html — architecture ảnh lớn — https://images.unsplash.com/photo-1533541589358-4b1083f8929b?w=2000&q=80&auto=format&fit=crop
- index.html — architecture ảnh nhỏ 1 — https://images.unsplash.com/photo-1632399593344-7f96512c0c86?w=1400&q=80&auto=format&fit=crop
- index.html — architecture ảnh nhỏ 2 — https://images.unsplash.com/photo-1552853519-1793ff886074?w=1400&q=80&auto=format&fit=crop
- index.html — stay collection Ocean Suite — https://images.unsplash.com/photo-1738585608732-49294c24ece0?w=1400&q=80&auto=format&fit=crop
- index.html — stay collection Horizon Villa — https://images.unsplash.com/photo-1694350639569-6706d403a30d?w=1600&q=80&auto=format&fit=crop
- index.html — stay collection Coastal Residence — https://images.unsplash.com/photo-1707329196116-ca454e0c5799?w=1400&q=80&auto=format&fit=crop
- index.html — the elements Ocean Pool — https://images.unsplash.com/photo-1735770517146-e95c872226fc?w=1800&q=80&auto=format&fit=crop
- index.html — the elements Earth Table — https://images.unsplash.com/photo-1780914117972-7997f4459523?w=1400&q=80&auto=format&fit=crop
- index.html — the elements Stone Spa — https://images.unsplash.com/photo-1781455495578-944c2dcbd2de?w=1400&q=80&auto=format&fit=crop
- index.html — full-width gallery — https://images.unsplash.com/photo-1548130648-c7d462f2b54b?w=2400&q=80&auto=format&fit=crop
- pages/about.html — hero — https://images.unsplash.com/photo-1541953747-d09e945b9083?w=2400&q=80&auto=format&fit=crop
- pages/about.html — materials Earth — https://images.unsplash.com/photo-1497334251732-c0eb68e26827?w=1200&q=80&auto=format&fit=crop
- pages/about.html — materials Stone — https://images.unsplash.com/photo-1741848613519-1024f262de07?w=1200&q=80&auto=format&fit=crop
- pages/about.html — materials Light — https://images.unsplash.com/photo-1771086604156-5832dafe4854?w=1200&q=80&auto=format&fit=crop
- pages/about.html — architecture & landscape 1 — https://images.unsplash.com/photo-1780303036823-649d1992dbac?w=1600&q=80&auto=format&fit=crop
- pages/about.html — architecture & landscape 2 — https://images.unsplash.com/photo-1760261799672-2469a6c4c6f3?w=1400&q=80&auto=format&fit=crop
- pages/about.html — architecture & landscape 3 — https://images.unsplash.com/photo-1760262645776-633204d88ded?w=1400&q=80&auto=format&fit=crop
- pages/about.html — architecture & landscape 4 — https://images.unsplash.com/photo-1777027796404-2fee261818da?w=1400&q=80&auto=format&fit=crop
- pages/about.html — architecture & landscape 5 — https://images.unsplash.com/photo-1791812455370-4250b4adb509?w=1800&q=80&auto=format&fit=crop
- pages/stays.html — hero — https://images.unsplash.com/photo-1707576156867-212a2fcf6698?w=2400&q=80&auto=format&fit=crop
- pages/stays.html — Ocean Suite ảnh chính — https://images.unsplash.com/photo-1734456416941-416c08f0778e?w=1600&q=80&auto=format&fit=crop
- pages/stays.html — Ocean Suite ảnh cửa sổ — https://images.unsplash.com/photo-1767555027401-6829988ca9df?w=1200&q=80&auto=format&fit=crop
- pages/stays.html — Horizon Villa ảnh chính — https://images.unsplash.com/photo-1705095605806-4b2936e90471?w=2000&q=80&auto=format&fit=crop
- pages/stays.html — Horizon Villa ảnh phụ — https://images.unsplash.com/photo-1758907749704-7ad4e48b2aa0?w=1200&q=80&auto=format&fit=crop
- pages/stays.html — Coastal Residence ảnh chính — https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&q=80&auto=format&fit=crop
- pages/stays.html — Coastal Residence ảnh phòng khách — https://images.unsplash.com/photo-1564137799581-baca1aa17f5d?w=1200&q=80&auto=format&fit=crop
- pages/stays.html — facilities Ocean Pool — https://images.unsplash.com/photo-1562407132-e23789f81bb7?w=1400&q=80&auto=format&fit=crop
- pages/stays.html — facilities Earth Table — https://images.unsplash.com/photo-1731941465921-eb4285693713?w=1400&q=80&auto=format&fit=crop
- pages/stays.html — facilities Stone Spa — https://images.unsplash.com/photo-1761470575018-135c213340eb?w=1200&q=80&auto=format&fit=crop
- pages/stays.html — facilities Sunset Lounge — https://images.unsplash.com/photo-1782367807681-2289f10c7309?w=1600&q=80&auto=format&fit=crop
- pages/stays.html — facilities Movement Studio — https://images.unsplash.com/photo-1745327883348-8d78cb4661b0?w=1200&q=80&auto=format&fit=crop
- pages/experiences.html — hero — https://images.unsplash.com/photo-1749370568433-659414fdabcd?w=2400&q=80&auto=format&fit=crop
- pages/experiences.html — coastal discovery toàn cảnh — https://images.unsplash.com/photo-1645149837372-b83658b3f6c0?w=2400&q=80&auto=format&fit=crop
- pages/experiences.html — coastal discovery ảnh phụ — https://images.unsplash.com/photo-1668653893803-0b645b9257a1?w=1400&q=80&auto=format&fit=crop
- pages/experiences.html — art of dining món ăn — https://images.unsplash.com/photo-1676471926534-d5c9771909fa?w=1200&q=80&auto=format&fit=crop
- pages/experiences.html — art of dining bàn ăn — https://images.unsplash.com/photo-1750943036999-81e666b2296c?w=1200&q=80&auto=format&fit=crop
- pages/experiences.html — art of dining không gian — https://images.unsplash.com/photo-1615234590668-43416e63bf2c?w=1600&q=80&auto=format&fit=crop

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/stays.html — facilities-sunset-lounge (từ khóa dự kiến: "sunset terrace lounge")
- pages/stays.html — facilities-movement-studio (từ khóa dự kiến: "movement studio natural")
- pages/experiences.html — movement (từ khóa dự kiến: "yoga outdoor terrace")
- pages/experiences.html — sunset-hour (từ khóa dự kiến: "sunset terrace sea")
- pages/experiences.html — closing-gallery (từ khóa dự kiến: "coastal landscape panorama")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Sao chép nhanh (số điện thoại / email)
- Tabs
- Accordion (mở / đóng nội dung)
- Đánh dấu mục đang xem trên menu
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/experiences.html, pages/stays.html).
- Chuyển động (đếm trong code): `data-reveal` ×117, `data-header` ×4, `data-reveal="clip"` ×34, `data-reveal-stagger` ×2.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 14:18 29/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 39 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "TIDELINE" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 15 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 14:19 29/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Theo chú thích BA: dựng đúng 4 trang (Home, The Retreat, Stays, Experiences); trang con đặt trong pages/ (about.html, stays.html, experiences.html) theo chuẩn thư mục của tool
- Theo chú thích BA: có nút chuyển VI/EN thật cho toàn bộ nội dung, menu, nút, footer, alt ảnh, title, meta (mặc định tiếng Việt, bản EN trong thuộc tính data-en*), lưu lựa chọn bằng localStorage khi chuyển trang / tải lại; ghi đè dòng 'không tạo bộ chuyển ngôn ngữ' của concept.md
- Màu theo BA: Terracotta #B65F45, Burnt Copper #754638, Sandstone #D9C5A7, Warm Chalk #F3EDE3, Deep Plum #49323B; thêm Terracotta đậm #97492F cho chữ nhỏ / nút để đạt tương phản AA trên nền Warm Chalk
- Font theo BA: Cormorant Garamond (tiêu đề) + Be Vietnam Pro (nội dung) thay Montserrat của preset
- Tiêu đề tiếng Anh BA đưa (Where Earth Meets the Ocean…) dùng cho chế độ EN; chế độ VI dịch sang tiếng Việt, tên riêng hạng phòng / tiện ích giữ nguyên
- Thư viện ảnh openverse lỗi quá thời gian / không có ảnh đúng phong cách → dùng link ảnh Unsplash đã kiểm qua link_image; ảnh có hàng cọ / nhiệt đới bị loại theo yêu cầu BA
- Không có ảnh phù hợp cho Sunset Lounge (trang Stays), Movement Studio, Movement & Wellness, The Sunset Hour và Closing Gallery → bố cục chữ lớn trên màu thương hiệu; Closing Gallery của BA cần ảnh cảnh quan toàn chiều rộng (chờ ảnh thật từ khách)
- Hai file assets/img/exp-slow-rituals.jpg, exp-slow-rituals-2.jpg tải thử từ openverse là mặt ngoài nhà tắm cổ, không đúng chủ đề nên không dùng
- Địa điểm mẫu: bờ biển Mũi Dinh, Ninh Thuận (vùng ven biển khô cằn có vách đá); số điện thoại / email là thông tin mẫu

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1622993829691-85d51ba029c2?w=2400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1533541589358-4b1083f8929b?w=2000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1632399593344-7f96512c0c86?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1552853519-1793ff886074?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1738585608732-49294c24ece0?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1694350639569-6706d403a30d?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1707329196116-ca454e0c5799?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1735770517146-e95c872226fc?w=1800&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1780914117972-7997f4459523?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1781455495578-944c2dcbd2de?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1782367807681-2289f10c7309?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1548130648-c7d462f2b54b?w=2400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1541953747-d09e945b9083?w=2400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1497334251732-c0eb68e26827?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Website chỉ giới thiệu thương hiệu: không đặt phòng, đặt lịch, giỏ hàng hay thanh toán (theo yêu cầu BA); không hiển thị giá, lịch phòng
- Thông tin liên hệ và mạng xã hội là dữ liệu mẫu
- Ảnh dùng link ngoài (Unsplash), cần mạng để hiển thị; ảnh lỗi tự chuyển sang khung dự phòng màu Sandstone
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
