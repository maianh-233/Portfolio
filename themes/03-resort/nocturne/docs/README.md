# NOCTURNE

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Thương hiệu / dự án:** NOCTURNE
- **Mục đích:** Thiết kế website giới thiệu NOCTURNE, một resort nghỉ dưỡng cao cấp mang phong cách Midnight Teal Luxury, lấy cảm hứng từ mặt nước lúc nửa đêm, kiến trúc đương đại và ánh sáng phản chiếu trong không gian tĩnh lặng.

Thương hiệu hướng đến cảm giác sang trọng, bí ẩn, riêng tư và giàu tính điện ảnh. Sự cao cấp được thể hiện qua vật liệu, ánh sáng, kiến trúc và cách trình bày, không phụ thuộc vào các biểu tượng xa xỉ truyền thống.

Website phải có cá tính riêng, tránh trở thành website câu lạc bộ đêm, thương hiệu thời trang hoặc khách sạn Dark Luxury thông thường.
- **Ý tưởng thị giác (AI ghi):** Mặt nước nửa đêm: tiêu đề lớn có bóng phản chiếu mờ như trên mặt hồ, vạch 'waterline' Silver Mist mảnh chia nhịp các section, ảnh kiến trúc tối đặt cạnh khối chữ Moonstone sáng như trang tạp chí kiến trúc

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Luxury / Premium — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 9.698 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Playfair Display`: đủ ký tự tiếng Việt
- `Manrope`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | NOCTURNE — Kiến trúc, mặt nước và ánh sáng lúc nửa đêm | Giới thiệu thương hiệu NOCTURNE, dẫn sang Triết lý, Suites & Villas và Trải nghiệm | top, hero → hero-cinematic, intro → story-editorial, light → gallery-lookbook, stays → teaser-row, experience → features-tabs, perspective → quote-full, gallery → cta-fullbleed, footer | 13 |
| `pages/about.html` | Triết lý — NOCTURNE | Triết lý tiết chế, kiến trúc, vật liệu, ánh sáng và bốn giá trị thương hiệu | top, page-hero → page-hero, philosophy → story-editorial, material → gallery-lookbook, light → story-letter, values → features-numbered, closing → gallery-masonry, footer | 8 |
| `pages/experiences.html` | Trải nghiệm — NOCTURNE | Ẩm thực, nghi thức spa, khoảnh khắc riêng tư, mặt nước và giờ tĩnh lặng | top, page-hero → page-hero, dining → features-alternate, rituals → features-alternate, moments → cta-fullbleed, water → gallery-lookbook, quiet → quote-full, closing → cta-type, footer | 8 |
| `pages/stays.html` | Suites & Villas — NOCTURNE | Ba loại hình lưu trú (ảnh, mô tả, tiện nghi, không giá) và các tiện ích khu nghỉ | top, page-hero → page-hero, signature → features-alternate, villa → cta-fullbleed, panoramic → story-editorial, facilities → features-bento, footer | 9 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
nocturne/
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

- **⚠ Dịch vụ ảnh không khả dụng:** Kiểm tra trước khi dựng: openverse: quá 15s không phản hồi
- **⚠ Tool tìm ảnh trả lỗi:** timeout: openverse: quá 15s không phản hồi
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 4 ảnh chưa dùng: https://images.unsplash.com/photo-1616756405607-590773a1fbf4?w=1600&q=80&auto=format&fit=crop, https://images.unsplash.com/photo-1762804049245-a895480b93c6?w=1000&q=80&auto=format&fit=crop, https://images.unsplash.com/photo-1631739645757-b4208e024dad?w=1400&q=80&auto=format&fit=crop, https://images.unsplash.com/photo-1685955010389-5b914b128f41?w=1600&q=80&auto=format&fit=crop
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1785910723802-99967d4fa265?w=2000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1743439895141-20db90962997?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1789373394273-4c1b6ca0809b?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 1 lượt tìm (nguồn: —), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| resort pool night reflection | — | lỗi timeout | 53881 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://images.unsplash.com/photo-1785910723802-99967d4fa265?w=2000&q=80&auto=format&fit=crop` | index.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1743439895141-20db90962997?w=1600&q=80&auto=format&fit=crop` | index.html — intro ảnh kiến trúc lớn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1789373394273-4c1b6ca0809b?w=1200&q=80&auto=format&fit=crop` | index.html — intro ảnh chi tiết vật liệu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1678889284769-b7dcbec1f082?w=2000&q=80&auto=format&fit=crop` | index.html — Designed Around Light ảnh ngang | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1769658860913-509a7d4c35a5?w=1200&q=80&auto=format&fit=crop` | index.html — Designed Around Light ảnh phụ lệch trục | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1574283006478-b972c6861ce9?w=1600&q=80&auto=format&fit=crop` | index.html — Signature Suite | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1759372945658-1e9f56e751bd?w=1600&q=80&auto=format&fit=crop` | index.html — Private Villa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1718942899965-4fc10607d805?w=1600&q=80&auto=format&fit=crop` | index.html — Panoramic Residence | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1716801408923-c2149294dad2?w=1400&q=80&auto=format&fit=crop` | index.html — Reflecting Pool | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?w=1400&q=80&auto=format&fit=crop` | index.html — Nocturne Dining | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1761470575018-135c213340eb?w=1400&q=80&auto=format&fit=crop` | index.html — Stillwater Spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=1400&q=80&auto=format&fit=crop` | index.html — Private Lounge | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1639098376571-bdca431efaee?w=2400&q=80&auto=format&fit=crop` | index.html — Full-width gallery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1748063578185-3d68121b11ff?w=2000&q=80&auto=format&fit=crop` | pages/about.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1616756405607-590773a1fbf4?w=1600&q=80&auto=format&fit=crop` | pages/about.html — Architecture & Material ảnh tổng thể | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1787880172167-d31d3231fad8?w=1000&q=80&auto=format&fit=crop` | pages/about.html — chi tiết đá & kim loại | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1591020330942-e9c3bce82096?w=1000&q=80&auto=format&fit=crop` | pages/about.html — chi tiết đá tự nhiên | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1735303865885-f03079fd1b40?w=2000&q=80&auto=format&fit=crop` | pages/about.html — The Language of Light | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1762804049245-a895480b93c6?w=1000&q=80&auto=format&fit=crop` | pages/about.html — The Language of Light ảnh phụ | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1631739645757-b4208e024dad?w=1400&q=80&auto=format&fit=crop` | pages/about.html — closing gallery ngoại thất | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1724775255163-b0f5f5241642?w=1400&q=80&auto=format&fit=crop` | pages/about.html — closing gallery nội thất | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1781795035627-fa93f2863bba?w=1400&q=80&auto=format&fit=crop` | pages/about.html — closing gallery nội thất | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1750271329214-a7dbce880e85?w=2400&q=80&auto=format&fit=crop` | pages/about.html — ảnh kết phản chiếu mặt nước | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1771775529138-a7a20ba7e032?w=2000&q=80&auto=format&fit=crop` | pages/stays.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1552858725-a19e7fcd3ac4?w=1400&q=80&auto=format&fit=crop` | pages/stays.html — Signature Suite phòng ngủ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?w=1000&q=80&auto=format&fit=crop` | pages/stays.html — Signature Suite chi tiết | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1678889284805-5c86fb1dba5a?w=1400&q=80&auto=format&fit=crop` | pages/stays.html — Private Villa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1706164971302-e30c0640cc3b?w=1000&q=80&auto=format&fit=crop` | pages/stays.html — Private Villa ảnh phụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1685955010389-5b914b128f41?w=1600&q=80&auto=format&fit=crop` | pages/stays.html — Panoramic Residence | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1671362962572-50cf4edca731?w=1400&q=80&auto=format&fit=crop` | pages/stays.html — Reflecting Pool | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1751011983324-fe9d30fe9efd?w=1200&q=80&auto=format&fit=crop` | pages/stays.html — Nocturne Dining | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1781455495578-944c2dcbd2de?w=1200&q=80&auto=format&fit=crop` | pages/stays.html — Stillwater Spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1628414233354-bec86a0e35ce?w=1200&q=80&auto=format&fit=crop` | pages/stays.html — Private Lounge | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1758612853656-def5033bccb5?w=1400&q=80&auto=format&fit=crop` | pages/stays.html — Garden Retreat | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1790737434221-e8b259499c31?w=2000&q=80&auto=format&fit=crop` | pages/experiences.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1574966739987-65e38db0f7ce?w=1400&q=80&auto=format&fit=crop` | pages/experiences.html — The Art of Dining | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1552960226-639240203497?w=1000&q=80&auto=format&fit=crop` | pages/experiences.html — The Art of Dining chi tiết | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1745327883348-8d78cb4661b0?w=1000&q=80&auto=format&fit=crop` | pages/experiences.html — Stillwater Rituals | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1776763018829-ad685e621871?w=1400&q=80&auto=format&fit=crop` | pages/experiences.html — Stillwater Rituals ảnh chính | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1612152598218-9acf01c968e3?w=1400&q=80&auto=format&fit=crop` | pages/experiences.html — Private Moments | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

36 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero — https://images.unsplash.com/photo-1785910723802-99967d4fa265?w=2000&q=80&auto=format&fit=crop
- index.html — intro ảnh kiến trúc lớn — https://images.unsplash.com/photo-1743439895141-20db90962997?w=1600&q=80&auto=format&fit=crop
- index.html — intro ảnh chi tiết vật liệu — https://images.unsplash.com/photo-1789373394273-4c1b6ca0809b?w=1200&q=80&auto=format&fit=crop
- index.html — Designed Around Light ảnh ngang — https://images.unsplash.com/photo-1678889284769-b7dcbec1f082?w=2000&q=80&auto=format&fit=crop
- index.html — Designed Around Light ảnh phụ lệch trục — https://images.unsplash.com/photo-1769658860913-509a7d4c35a5?w=1200&q=80&auto=format&fit=crop
- index.html — Signature Suite — https://images.unsplash.com/photo-1574283006478-b972c6861ce9?w=1600&q=80&auto=format&fit=crop
- index.html — Private Villa — https://images.unsplash.com/photo-1759372945658-1e9f56e751bd?w=1600&q=80&auto=format&fit=crop
- index.html — Panoramic Residence — https://images.unsplash.com/photo-1718942899965-4fc10607d805?w=1600&q=80&auto=format&fit=crop
- index.html — Reflecting Pool — https://images.unsplash.com/photo-1716801408923-c2149294dad2?w=1400&q=80&auto=format&fit=crop
- index.html — Nocturne Dining — https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?w=1400&q=80&auto=format&fit=crop
- index.html — Stillwater Spa — https://images.unsplash.com/photo-1761470575018-135c213340eb?w=1400&q=80&auto=format&fit=crop
- index.html — Private Lounge — https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=1400&q=80&auto=format&fit=crop
- index.html — Full-width gallery — https://images.unsplash.com/photo-1639098376571-bdca431efaee?w=2400&q=80&auto=format&fit=crop
- pages/about.html — hero — https://images.unsplash.com/photo-1748063578185-3d68121b11ff?w=2000&q=80&auto=format&fit=crop
- pages/about.html — chi tiết đá & kim loại — https://images.unsplash.com/photo-1787880172167-d31d3231fad8?w=1000&q=80&auto=format&fit=crop
- pages/about.html — chi tiết đá tự nhiên — https://images.unsplash.com/photo-1591020330942-e9c3bce82096?w=1000&q=80&auto=format&fit=crop
- pages/about.html — The Language of Light — https://images.unsplash.com/photo-1735303865885-f03079fd1b40?w=2000&q=80&auto=format&fit=crop
- pages/about.html — closing gallery nội thất — https://images.unsplash.com/photo-1724775255163-b0f5f5241642?w=1400&q=80&auto=format&fit=crop
- pages/about.html — closing gallery nội thất — https://images.unsplash.com/photo-1781795035627-fa93f2863bba?w=1400&q=80&auto=format&fit=crop
- pages/about.html — ảnh kết phản chiếu mặt nước — https://images.unsplash.com/photo-1750271329214-a7dbce880e85?w=2400&q=80&auto=format&fit=crop
- pages/stays.html — hero — https://images.unsplash.com/photo-1771775529138-a7a20ba7e032?w=2000&q=80&auto=format&fit=crop
- pages/stays.html — Signature Suite phòng ngủ — https://images.unsplash.com/photo-1552858725-a19e7fcd3ac4?w=1400&q=80&auto=format&fit=crop
- pages/stays.html — Signature Suite chi tiết — https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?w=1000&q=80&auto=format&fit=crop
- pages/stays.html — Private Villa — https://images.unsplash.com/photo-1678889284805-5c86fb1dba5a?w=1400&q=80&auto=format&fit=crop
- pages/stays.html — Private Villa ảnh phụ — https://images.unsplash.com/photo-1706164971302-e30c0640cc3b?w=1000&q=80&auto=format&fit=crop
- pages/stays.html — Reflecting Pool — https://images.unsplash.com/photo-1671362962572-50cf4edca731?w=1400&q=80&auto=format&fit=crop
- pages/stays.html — Nocturne Dining — https://images.unsplash.com/photo-1751011983324-fe9d30fe9efd?w=1200&q=80&auto=format&fit=crop
- pages/stays.html — Stillwater Spa — https://images.unsplash.com/photo-1781455495578-944c2dcbd2de?w=1200&q=80&auto=format&fit=crop
- pages/stays.html — Private Lounge — https://images.unsplash.com/photo-1628414233354-bec86a0e35ce?w=1200&q=80&auto=format&fit=crop
- pages/stays.html — Garden Retreat — https://images.unsplash.com/photo-1758612853656-def5033bccb5?w=1400&q=80&auto=format&fit=crop
- pages/experiences.html — hero — https://images.unsplash.com/photo-1790737434221-e8b259499c31?w=2000&q=80&auto=format&fit=crop
- pages/experiences.html — The Art of Dining — https://images.unsplash.com/photo-1574966739987-65e38db0f7ce?w=1400&q=80&auto=format&fit=crop
- pages/experiences.html — The Art of Dining chi tiết — https://images.unsplash.com/photo-1552960226-639240203497?w=1000&q=80&auto=format&fit=crop
- pages/experiences.html — Stillwater Rituals — https://images.unsplash.com/photo-1745327883348-8d78cb4661b0?w=1000&q=80&auto=format&fit=crop
- pages/experiences.html — Stillwater Rituals ảnh chính — https://images.unsplash.com/photo-1776763018829-ad685e621871?w=1400&q=80&auto=format&fit=crop
- pages/experiences.html — Private Moments — https://images.unsplash.com/photo-1612152598218-9acf01c968e3?w=1400&q=80&auto=format&fit=crop

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/stays.html — facility-pool (từ khóa dự kiến: "reflecting pool night")
- pages/experiences.html — closing-panorama (từ khóa dự kiến: "resort panorama night")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Tabs
- Nút về đầu trang
- Phóng to ảnh (lightbox)
- Accordion (mở / đóng nội dung)
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/experiences.html, pages/stays.html).
- Chuyển động (đếm trong code): `data-reveal` ×58, `data-header` ×4, `data-split` ×15, `data-parallax` ×8, `data-reveal="clip"` ×20, `data-reveal-stagger` ×4, `data-particles` ×1; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 20:42 29/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 38 cần sửa, 2 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "NOCTURNE" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 14 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 20:42 29/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- BA yêu cầu nút VI/EN và chuyển ngữ đầy đủ (chú thích bổ sung) → thêm bộ chuyển ngôn ngữ trong site.js, ghi đè dòng 'không tạo bộ chuyển ngôn ngữ' của concept; mặc định tiếng Việt (<html lang="vi">), lựa chọn lưu trong localStorage
- Tiêu đề tiếng Anh BA đưa (Luxury Beyond the Ordinary…) hiển thị ở chế độ EN; chế độ VI dùng bản dịch tương ứng để không trộn ngôn ngữ. Tên riêng tiện ích (Reflecting Pool, Nocturne Dining…) và loại phòng giữ nguyên
- Bảng màu và font theo chú thích BA thay preset Luxury: Midnight Teal / Petrol Blue / Muted Plum / Silver Mist / Moonstone / Deep Charcoal; Cormorant Garamond + Be Vietnam Pro (đủ ký tự tiếng Việt; Bodoni Moda không có bộ ký tự tiếng Việt)
- Trang con đặt trong pages/ theo chuẩn công ty: pages/about.html, pages/stays.html, pages/experiences.html
- Không có form, đặt phòng, giá hay lịch phòng theo yêu cầu BA
- Thư viện ảnh lỗi → dùng link ảnh Unsplash qua link_image; hết hạn mức 40 link nên Reflecting Pool (trang Suites & Villas) và Closing Panorama (trang Trải nghiệm) dựng dạng chữ
- Ảnh Panoramic Residence ở trang Suites & Villas dùng lại đúng ảnh của thẻ dẫn trên trang chủ (cùng một không gian); ảnh văn phòng sáng màu ban đầu bị loại vì lệch phong cách
- Sau khi tự xem: bỏ 2 ảnh nhà mái dốc kiểu ngoại ô (lệch phong cách kiến trúc đương đại) ở trang Triết lý; vài ảnh sáng màu (đá trên nền trắng, phòng khách ban ngày, Private Moments, ảnh nhà ban ngày ở Water & Reflection) được hạ sáng + phủ Midnight Teal bằng CSS (.nightgrade)

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1785910723802-99967d4fa265?w=2000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1743439895141-20db90962997?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1789373394273-4c1b6ca0809b?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1678889284769-b7dcbec1f082?w=2000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1769658860913-509a7d4c35a5?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1574283006478-b972c6861ce9?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1759372945658-1e9f56e751bd?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1718942899965-4fc10607d805?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1716801408923-c2149294dad2?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1761470575018-135c213340eb?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1639098376571-bdca431efaee?w=2400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1748063578185-3d68121b11ff?w=2000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1735303865885-f03079fd1b40?w=2000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Ảnh dùng link ngoài Unsplash (minh họa), cần thay bằng ảnh thật của resort
- Chuyển ngữ VI/EN chạy bằng JavaScript phía trình duyệt; bản EN chưa có URL riêng cho SEO
- Thông tin liên hệ, địa chỉ trong footer là dữ liệu mẫu
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
