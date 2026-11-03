# CASA SOL

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Thương hiệu / dự án:** CASA SOL
- **Mục đích:** Thiết kế website giới thiệu CASA SOL, một resort nghỉ dưỡng cao cấp lấy cảm hứng từ những ngôi làng ven biển Địa Trung Hải, nơi kiến trúc trắng, cửa vòm, hoa giấy, sân trong và ánh nắng mùa hè tạo nên vẻ đẹp đặc trưng.

Website cần truyền tải cảm giác ấm áp, phóng khoáng, lãng mạn và thư thả. Mang tinh thần của một boutique resort nằm giữa làng ven biển châu Âu, nơi du khách tận hưởng kiến trúc, ẩm thực địa phương và phong cách sống chậm.

Định hướng: Mediterranean Boutique Luxury — sang trọng tự nhiên, giàu chất nghệ thuật, có nét cổ điển nhưng không cũ kỹ.

Không thiết kế giống resort nhiệt đới, khách sạn hiện đại hoặc website thương mại điện tử.
- **Ý tưởng thị giác (AI ghi):** Tạp chí du lịch Địa Trung Hải: khung vòm cửa, ảnh postcard viền trắng nghiêng nhẹ và chú thích in nghiêng chạy xuyên các trang như những trang album mùa hè

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Cinematic — tool nhận diện từ mô tả |
| Mức chuyển động | Level 3 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 11.134 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Oswald`: đủ ký tự tiếng Anh
- `Inter`: đủ ký tự tiếng Anh
- `Roboto Mono`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | CASA SOL — A Mediterranean boutique resort | Mở đầu như trang bìa tạp chí: giới thiệu CASA SOL, ba loại lưu trú, kiến trúc, đời sống resort và album mùa hè, dẫn sang các trang con | top, hero → hero-split, intro → story-letter, rooms → teaser-row, architecture → story-pinned, life → features-bento, summer → gallery-lookbook, next → cta-type | 13 |
| `pages/about.html` | About — CASA SOL | Câu chuyện thương hiệu, kiến trúc & vật liệu, ba giá trị Địa Trung Hải, gallery kiến trúc; dẫn sang Experiences | top, about-hero → page-hero, story → story-editorial, materials → features-numbered, values → quote-full, arch-gallery → gallery-lookbook, closing → cta-split | 10 |
| `pages/experiences.html` | Experiences — CASA SOL | Ẩm thực địa phương, khám phá làng ven biển, buổi chiều bên hồ, vườn & thiên nhiên, gallery postcard; không đặt bàn / đặt dịch vụ | top, exp-hero → hero-cinematic, cuisine → story-editorial, village → postcard-journey, pool → feature-split, gardens → story-asymmetric, postcards → gallery-postcard, exp-closing → cta-split-sunset | 21 |
| `pages/stays.html` | Stays — CASA SOL | Giới thiệu ba loại lưu trú (mỗi loại bố cục ảnh khác nhau), tiện ích resort và chi tiết cận cảnh; không giá, không đặt phòng | top, stays-hero → page-hero-wide, coastal-suite → feature-split, courtyard-room → feature-arch, private-villa → feature-wide, amenities → features-alternate, details → gallery-filmstrip, stays-closing → cta-fullbleed | 18 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
casa-sol/
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

- **⚠ Tool tìm ảnh trả lỗi:** timeout: openverse: quá 15s không phản hồi | auth: openverse trả về 403
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 7 ảnh chưa dùng: https://images.pexels.com/photos/164284/pexels-photo-164284.jpeg?auto=compress&cs=tinysrgb&w=1600, https://images.unsplash.com/photo-1611971263023-105938ce12ed?auto=format&fit=crop&w=1200&q=80, https://images.unsplash.com/photo-1787155394469-0dccd2e83b4f?auto=format&fit=crop&w=1400&q=80, https://images.unsplash.com/photo-1785932697397-e7de4c3469f2?auto=format&fit=crop&w=1400&q=80
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1678266587841-ca65ff1b5b1d?auto=format&fit=crop&w=2000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1778199793901-dc0f6e5de393?auto=format&fit=crop&w=900&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1788184851263-f832bf6c76f3?auto=format&fit=crop&w=1400&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 3 lượt tìm (nguồn: —), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| mediterranean white arch terrace sea | — | lỗi timeout | 103625 ms |
| private villa terrace pool mediterranean | — | lỗi timeout | 106559 ms |
| outdoor dinner table sunset sea | — | lỗi auth | 97 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://images.pexels.com/photos/164284/pexels-photo-164284.jpeg?auto=compress&cs=tinysrgb&w=1600` | candidate | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1678266587841-ca65ff1b5b1d?auto=format&fit=crop&w=2000&q=80` | index.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1778199793901-dc0f6e5de393?auto=format&fit=crop&w=900&q=80` | index.html — hero postcard | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1788184851263-f832bf6c76f3?auto=format&fit=crop&w=1400&q=80` | index.html — intro | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1790419683322-b08a7050c424?auto=format&fit=crop&w=1200&q=80` | index.html — rooms 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1611971263023-105938ce12ed?auto=format&fit=crop&w=1200&q=80` | index.html — rooms 2 | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1787155394469-0dccd2e83b4f?auto=format&fit=crop&w=1400&q=80` | index.html — rooms 3 | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1779249920897-64dcb2255269?auto=format&fit=crop&w=2000&q=80` | index.html — architecture | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1785932697397-e7de4c3469f2?auto=format&fit=crop&w=1400&q=80` | index.html — life dining | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1765999906700-2d4dfd392966?auto=format&fit=crop&w=1400&q=80` | index.html — life pool | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1783085939775-0eadd03106d8?auto=format&fit=crop&w=1000&q=80` | index.html — life gardens | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1586718520704-f7f9db04b8c0?auto=format&fit=crop&w=1200&q=80` | index.html — gallery 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1763161468860-4e695738d985?auto=format&fit=crop&w=1000&q=80` | index.html — gallery 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1604145195376-e2c8195adf29?auto=format&fit=crop&w=1200&q=80` | index.html — gallery 3 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1560703649-e3055f28bcf8?auto=format&fit=crop&w=1200&q=80` | index.html — gallery 4 | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1715685696399-f4f92ecf6c7a?auto=format&fit=crop&w=1400&q=80` | index.html — gallery 5 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1780914117972-7997f4459523?auto=format&fit=crop&w=1400&q=80` | index.html — gallery 6 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1761629756386-15cdc055e504?auto=format&fit=crop&w=2000&q=80` | pages/about.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1777788795060-cc5dae2ab1b0?auto=format&fit=crop&w=1200&q=80` | pages/about.html — story | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/6010266/pexels-photo-6010266.jpeg?auto=compress&cs=tinysrgb&w=1600` | pages/about.html — materials walls & arches | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1656063105127-c223e7d9e401?auto=format&fit=crop&w=1200&q=80` | pages/about.html — materials stone & wood | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1767034240382-06e7b16bfbd4?auto=format&fit=crop&w=1200&q=80` | pages/about.html — materials terracotta | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1544959223-693c51f4774f?auto=format&fit=crop&w=1200&q=80` | pages/about.html — materials light | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1767034241672-bd354b8a20a8?auto=format&fit=crop&w=1200&q=80` | pages/about.html — materials garden | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1781456507236-2342945a284e?auto=format&fit=crop&w=1200&q=80` | pages/about.html — value hospitality | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1764397514746-e58523d0eaff?auto=format&fit=crop&w=1200&q=80` | pages/about.html — value local flavours | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1666813721996-42956e40788e?auto=format&fit=crop&w=1200&q=80` | pages/about.html — value slow living | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1601581875039-e899893d520c?auto=format&fit=crop&w=1000&q=80` | pages/about.html — gallery 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1612352354338-5f4a482544b0?auto=format&fit=crop&w=1200&q=80` | pages/about.html — gallery 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1790090398561-e73e53ff39d0?auto=format&fit=crop&w=1200&q=80` | pages/about.html — gallery 3 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/13506777/pexels-photo-13506777.jpeg?auto=compress&cs=tinysrgb&w=1400` | pages/about.html — gallery 4 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1788184851780-e0d4e323a64e?auto=format&fit=crop&w=1000&q=80` | pages/about.html — gallery 5 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1618500031461-a5fc01e96763?auto=format&fit=crop&w=1400&q=80` | pages/about.html — closing | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1760204741315-abfc98ce3bf5?auto=format&fit=crop&w=2000&q=80` | pages/stays.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1683387656179-6110eed7dfe2?auto=format&fit=crop&w=1800&q=80` | pages/stays.html — coastal suite | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1722095454514-661600984095?auto=format&fit=crop&w=1000&q=80` | pages/stays.html — coastal suite detail | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1639678349557-ffe5bed73ce7?auto=format&fit=crop&w=1200&q=80` | pages/stays.html — courtyard room | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1765784606995-fd43684463eb?auto=format&fit=crop&w=1000&q=80` | pages/stays.html — courtyard room detail | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1611971263023-105938ce12ed?auto=format&fit=crop&w=1400&q=80` | pages/stays.html — courtyard room | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1787155394469-0dccd2e83b4f?auto=format&fit=crop&w=2000&q=80` | pages/stays.html — private villa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1561586003-e1bcd340f5d9?auto=format&fit=crop&w=1000&q=80` | pages/stays.html — private villa detail | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1780914149187-c4f302dafbb0?auto=format&fit=crop&w=1400&q=80` | pages/stays.html — amenities pool | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1400&q=80` | pages/stays.html — amenities restaurant | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1632739148604-53b9fd796690?auto=format&fit=crop&w=1000&q=80` | pages/stays.html — amenities garden | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=1400&q=80` | pages/stays.html — amenities lounge | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1705598122310-c7532144a329?auto=format&fit=crop&w=1000&q=80` | pages/stays.html — details ceramics | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1721415290761-8202b0a094d3?auto=format&fit=crop&w=1000&q=80` | pages/stays.html — details pottery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1698517092454-c8ee5ed74b02?auto=format&fit=crop&w=1000&q=80` | pages/stays.html — details stone | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1598376700101-3138a0d40f6d?auto=format&fit=crop&w=1000&q=80` | pages/stays.html — details doorway | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1504823349073-5a888013012e?auto=format&fit=crop&w=1400&q=80` | pages/stays.html — closing | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1652627703214-c982c57904f8?auto=format&fit=crop&w=1000&q=80` | pages/stays.html — details table | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1743427522092-3e3ef36e0a24?auto=format&fit=crop&w=2000&q=80` | pages/experiences.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1682617666455-3a80f4e58840?auto=format&fit=crop&w=1400&q=80` | pages/experiences.html — cuisine 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1719518788261-fcb2f203a931?auto=format&fit=crop&w=1000&q=80` | pages/experiences.html — village 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1695552703641-96f5d0fb5b05?auto=format&fit=crop&w=1000&q=80` | pages/experiences.html — village 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1580502304784-8985b7eb7260?auto=format&fit=crop&w=1400&q=80` | pages/experiences.html — village 3 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1685697454294-122b79c6f602?auto=format&fit=crop&w=1000&q=80` | pages/experiences.html — village 4 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1646519034169-fd82895985ff?auto=format&fit=crop&w=1600&q=80` | pages/experiences.html — pool 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1653206339283-f4f7547901a1?auto=format&fit=crop&w=1000&q=80` | pages/experiences.html — pool 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1675719215722-19ba24cb677d?auto=format&fit=crop&w=1400&q=80` | pages/experiences.html — gardens 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1684903611564-230eb285e833?auto=format&fit=crop&w=1000&q=80` | pages/experiences.html — gardens 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1716125954897-a22bdb7dc1b7?auto=format&fit=crop&w=1000&q=80` | pages/experiences.html — gardens 3 | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=1400&q=80` | pages/experiences.html — cuisine 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1783442828255-cd8ea1f13750?auto=format&fit=crop&w=1400&q=80` | pages/experiences.html — gallery 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1649053679570-4e0f268002af?auto=format&fit=crop&w=1200&q=80` | pages/experiences.html — gallery 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1530996667992-a35e832cdba0?auto=format&fit=crop&w=1000&q=80` | pages/experiences.html — gallery 3 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1659270157059-06aa84f64532?auto=format&fit=crop&w=1000&q=80` | pages/experiences.html — gallery 4 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1539288541332-0efaa4749f34?auto=format&fit=crop&w=1200&q=80` | pages/experiences.html — gallery 5 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1672622851784-0dbd3df4c088?auto=format&fit=crop&w=2000&q=80` | pages/experiences.html — closing | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

62 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero — https://images.unsplash.com/photo-1678266587841-ca65ff1b5b1d?auto=format&fit=crop&w=2000&q=80
- index.html — hero postcard — https://images.unsplash.com/photo-1778199793901-dc0f6e5de393?auto=format&fit=crop&w=900&q=80
- index.html — intro — https://images.unsplash.com/photo-1788184851263-f832bf6c76f3?auto=format&fit=crop&w=1400&q=80
- index.html — rooms 1 — https://images.unsplash.com/photo-1790419683322-b08a7050c424?auto=format&fit=crop&w=1200&q=80
- index.html — architecture — https://images.unsplash.com/photo-1779249920897-64dcb2255269?auto=format&fit=crop&w=2000&q=80
- index.html — life pool — https://images.unsplash.com/photo-1765999906700-2d4dfd392966?auto=format&fit=crop&w=1400&q=80
- index.html — life gardens — https://images.unsplash.com/photo-1783085939775-0eadd03106d8?auto=format&fit=crop&w=1000&q=80
- index.html — gallery 1 — https://images.unsplash.com/photo-1586718520704-f7f9db04b8c0?auto=format&fit=crop&w=1200&q=80
- index.html — gallery 2 — https://images.unsplash.com/photo-1763161468860-4e695738d985?auto=format&fit=crop&w=1000&q=80
- index.html — gallery 3 — https://images.unsplash.com/photo-1604145195376-e2c8195adf29?auto=format&fit=crop&w=1200&q=80
- index.html — gallery 5 — https://images.unsplash.com/photo-1715685696399-f4f92ecf6c7a?auto=format&fit=crop&w=1400&q=80
- index.html — gallery 6 — https://images.unsplash.com/photo-1780914117972-7997f4459523?auto=format&fit=crop&w=1400&q=80
- pages/about.html — hero — https://images.unsplash.com/photo-1761629756386-15cdc055e504?auto=format&fit=crop&w=2000&q=80
- pages/about.html — story — https://images.unsplash.com/photo-1777788795060-cc5dae2ab1b0?auto=format&fit=crop&w=1200&q=80
- pages/about.html — materials walls & arches — https://images.pexels.com/photos/6010266/pexels-photo-6010266.jpeg?auto=compress&cs=tinysrgb&w=1600
- pages/about.html — materials terracotta — https://images.unsplash.com/photo-1767034240382-06e7b16bfbd4?auto=format&fit=crop&w=1200&q=80
- pages/about.html — materials light — https://images.unsplash.com/photo-1544959223-693c51f4774f?auto=format&fit=crop&w=1200&q=80
- pages/about.html — materials garden — https://images.unsplash.com/photo-1767034241672-bd354b8a20a8?auto=format&fit=crop&w=1200&q=80
- pages/about.html — value hospitality — https://images.unsplash.com/photo-1781456507236-2342945a284e?auto=format&fit=crop&w=1200&q=80
- pages/about.html — value local flavours — https://images.unsplash.com/photo-1764397514746-e58523d0eaff?auto=format&fit=crop&w=1200&q=80
- pages/about.html — value slow living — https://images.unsplash.com/photo-1666813721996-42956e40788e?auto=format&fit=crop&w=1200&q=80
- pages/about.html — gallery 1 — https://images.unsplash.com/photo-1601581875039-e899893d520c?auto=format&fit=crop&w=1000&q=80
- pages/about.html — gallery 2 — https://images.unsplash.com/photo-1612352354338-5f4a482544b0?auto=format&fit=crop&w=1200&q=80
- pages/about.html — gallery 3 — https://images.unsplash.com/photo-1790090398561-e73e53ff39d0?auto=format&fit=crop&w=1200&q=80
- pages/about.html — gallery 4 — https://images.pexels.com/photos/13506777/pexels-photo-13506777.jpeg?auto=compress&cs=tinysrgb&w=1400
- pages/about.html — gallery 5 — https://images.unsplash.com/photo-1788184851780-e0d4e323a64e?auto=format&fit=crop&w=1000&q=80
- pages/about.html — closing — https://images.unsplash.com/photo-1618500031461-a5fc01e96763?auto=format&fit=crop&w=1400&q=80
- pages/stays.html — hero — https://images.unsplash.com/photo-1760204741315-abfc98ce3bf5?auto=format&fit=crop&w=2000&q=80
- pages/stays.html — coastal suite — https://images.unsplash.com/photo-1683387656179-6110eed7dfe2?auto=format&fit=crop&w=1800&q=80
- pages/stays.html — coastal suite detail — https://images.unsplash.com/photo-1722095454514-661600984095?auto=format&fit=crop&w=1000&q=80
- pages/stays.html — courtyard room — https://images.unsplash.com/photo-1639678349557-ffe5bed73ce7?auto=format&fit=crop&w=1200&q=80
- pages/stays.html — courtyard room detail — https://images.unsplash.com/photo-1765784606995-fd43684463eb?auto=format&fit=crop&w=1000&q=80
- pages/stays.html — courtyard room — https://images.unsplash.com/photo-1611971263023-105938ce12ed?auto=format&fit=crop&w=1400&q=80
- pages/stays.html — private villa — https://images.unsplash.com/photo-1787155394469-0dccd2e83b4f?auto=format&fit=crop&w=2000&q=80
- pages/stays.html — private villa detail — https://images.unsplash.com/photo-1561586003-e1bcd340f5d9?auto=format&fit=crop&w=1000&q=80
- pages/stays.html — amenities pool — https://images.unsplash.com/photo-1780914149187-c4f302dafbb0?auto=format&fit=crop&w=1400&q=80
- pages/stays.html — amenities restaurant — https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1400&q=80
- pages/stays.html — amenities garden — https://images.unsplash.com/photo-1632739148604-53b9fd796690?auto=format&fit=crop&w=1000&q=80
- pages/stays.html — amenities lounge — https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=1400&q=80
- pages/stays.html — details ceramics — https://images.unsplash.com/photo-1705598122310-c7532144a329?auto=format&fit=crop&w=1000&q=80
- pages/stays.html — details pottery — https://images.unsplash.com/photo-1721415290761-8202b0a094d3?auto=format&fit=crop&w=1000&q=80
- pages/stays.html — details stone — https://images.unsplash.com/photo-1698517092454-c8ee5ed74b02?auto=format&fit=crop&w=1000&q=80
- pages/stays.html — details doorway — https://images.unsplash.com/photo-1598376700101-3138a0d40f6d?auto=format&fit=crop&w=1000&q=80
- pages/stays.html — closing — https://images.unsplash.com/photo-1504823349073-5a888013012e?auto=format&fit=crop&w=1400&q=80
- pages/stays.html — details table — https://images.unsplash.com/photo-1652627703214-c982c57904f8?auto=format&fit=crop&w=1000&q=80
- pages/experiences.html — hero — https://images.unsplash.com/photo-1743427522092-3e3ef36e0a24?auto=format&fit=crop&w=2000&q=80
- pages/experiences.html — cuisine 1 — https://images.unsplash.com/photo-1682617666455-3a80f4e58840?auto=format&fit=crop&w=1400&q=80
- pages/experiences.html — village 1 — https://images.unsplash.com/photo-1719518788261-fcb2f203a931?auto=format&fit=crop&w=1000&q=80
- pages/experiences.html — village 2 — https://images.unsplash.com/photo-1695552703641-96f5d0fb5b05?auto=format&fit=crop&w=1000&q=80
- pages/experiences.html — village 3 — https://images.unsplash.com/photo-1580502304784-8985b7eb7260?auto=format&fit=crop&w=1400&q=80
- pages/experiences.html — village 4 — https://images.unsplash.com/photo-1685697454294-122b79c6f602?auto=format&fit=crop&w=1000&q=80
- pages/experiences.html — pool 1 — https://images.unsplash.com/photo-1646519034169-fd82895985ff?auto=format&fit=crop&w=1600&q=80
- pages/experiences.html — pool 2 — https://images.unsplash.com/photo-1653206339283-f4f7547901a1?auto=format&fit=crop&w=1000&q=80
- pages/experiences.html — gardens 1 — https://images.unsplash.com/photo-1675719215722-19ba24cb677d?auto=format&fit=crop&w=1400&q=80
- pages/experiences.html — gardens 2 — https://images.unsplash.com/photo-1684903611564-230eb285e833?auto=format&fit=crop&w=1000&q=80
- pages/experiences.html — cuisine 2 — https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=1400&q=80
- pages/experiences.html — gallery 1 — https://images.unsplash.com/photo-1783442828255-cd8ea1f13750?auto=format&fit=crop&w=1400&q=80
- pages/experiences.html — gallery 2 — https://images.unsplash.com/photo-1649053679570-4e0f268002af?auto=format&fit=crop&w=1200&q=80
- pages/experiences.html — gallery 3 — https://images.unsplash.com/photo-1530996667992-a35e832cdba0?auto=format&fit=crop&w=1000&q=80
- pages/experiences.html — gallery 4 — https://images.unsplash.com/photo-1659270157059-06aa84f64532?auto=format&fit=crop&w=1000&q=80
- pages/experiences.html — gallery 5 — https://images.unsplash.com/photo-1539288541332-0efaa4749f34?auto=format&fit=crop&w=1200&q=80
- pages/experiences.html — closing — https://images.unsplash.com/photo-1672622851784-0dbd3df4c088?auto=format&fit=crop&w=2000&q=80

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/experiences.html, pages/stays.html).
- Chuyển động (đếm trong code): `data-reveal` ×65, `data-header` ×4, `data-split` ×5, `data-reveal-stagger` ×3, `data-parallax` ×3, `data-sky` ×3, `data-scene` ×1, `data-step` ×3, `data-reveal="clip"` ×23, `data-scrub` ×2, `data-drag-scroll` ×1; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 09:59 29/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 60 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "CASA SOL" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 12 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 09:35 29/10/2026 | Dựng website | lỗi: Đã chạm giới hạn sử dụng của tài khoản, vui lòng chờ rồi thử lại. Hạn mức sẽ được làm mới lúc 13:20 29-10. |
| 09:59 29/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Dùng đúng 4 trang theo yêu cầu kỹ thuật của BA (index, about, stays, experiences) — không thêm trang chi tiết.
- Bảng màu và font theo chú thích BA (Chalk White, Terracotta, Sea Blue, Olive, Warm Sand; Cormorant Garamond + Be Vietnam Pro) thay cho màu / font của preset Cinematic; preset chỉ giữ cách kể chuyện bằng ảnh lớn, cảnh ghim và letterbox ở hero trang Experiences.
- Màu Terracotta #C66B4E dùng cho chi tiết trang trí; chữ trắng trên nền đất nung dùng sắc đậm #A4523A để đạt tương phản WCAG AA.
- BA yêu cầu công tắc VI / EN: HTML mặc định tiếng Anh (lang=en), site.js đổi nội dung sang tiếng Việt qua data-i18n và ghi nhớ lựa chọn bằng localStorage — ghi đè mục 'không tạo bộ chuyển ngôn ngữ' của brief vì chú thích BA cụ thể hơn.
- Mức chuyển động Level 3 được tiết chế theo chú thích BA: không hạt sáng (data-particles), không parallax mạnh, không tilt / con trỏ tùy biến; chỉ reveal, chữ trượt lên, scrub phóng ảnh nhẹ, một cảnh ghim ở trang chủ, nền chuyển màu mềm (data-sky).
- Nguồn ảnh tự động (openverse) lỗi → dùng link ảnh thật qua link_image.

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1678266587841-ca65ff1b5b1d?auto=format&fit=crop&w=2000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1778199793901-dc0f6e5de393?auto=format&fit=crop&w=900&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1788184851263-f832bf6c76f3?auto=format&fit=crop&w=1400&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1790419683322-b08a7050c424?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1639678349557-ffe5bed73ce7?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1618500031461-a5fc01e96763?auto=format&fit=crop&w=1400&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1779249920897-64dcb2255269?auto=format&fit=crop&w=2000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1780914117972-7997f4459523?auto=format&fit=crop&w=1400&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1765999906700-2d4dfd392966?auto=format&fit=crop&w=1400&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1783085939775-0eadd03106d8?auto=format&fit=crop&w=1000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1763161468860-4e695738d985?auto=format&fit=crop&w=1000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1715685696399-f4f92ecf6c7a?auto=format&fit=crop&w=1400&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1781456507236-2342945a284e?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1761629756386-15cdc055e504?auto=format&fit=crop&w=2000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1777788795060-cc5dae2ab1b0?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Không có chức năng đặt phòng, đặt bàn, đặt dịch vụ hay thanh toán — theo phạm vi BA; các nút chỉ điều hướng giữa các trang.
- Thông tin liên hệ ở footer là dữ liệu mẫu.
- Ảnh dùng bằng link ngoài (Unsplash / Pexels), cần mạng để hiển thị; khung ảnh có nền dự phòng khi ảnh không tải được.
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
