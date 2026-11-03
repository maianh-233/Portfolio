# MONOCHROME GENTLEMEN

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website giới thiệu thương hiệu
- **Thương hiệu / dự án:** MONOCHROME GENTLEMEN
- **Mục đích:** Thiết kế website giới thiệu MONOCHROME GENTLEMEN, một barber studio chuyên về kiểu tóc nam tinh gọn, kỹ thuật cắt chính xác và phong cách lịch lãm hiện đại.

Kết hợp Minimalist Modernism, Swiss Typography và Black & White Editorial Photography để tạo ra một website có tính thẩm mỹ cao, cân bằng và chuyên nghiệp.

Website không dựa vào hiệu ứng trang trí hoặc màu sắc nổi bật. Cá tính thương hiệu được thể hiện qua tỷ lệ bố cục, typography, hình ảnh, đường kẻ và khoảng trắng.

Creative direction: Minimal, Precise, Timeless, Structured.

Xây dựng bốn trang:

Home.

Services & Pricing.

Hair Portfolio.

The Studio.

Mỗi trang phải có bố cục riêng, nhưng sử dụng chung một hệ thống thiết kế nhất quán.
- **Ý tưởng thị giác (AI ghi):** Lưới Swiss 12 cột lộ ra bằng đường kẻ mảnh và số thứ tự lớn 01 02 03; mọi ảnh xử lý đen trắng, nhịp nền off-white xen một vài dải đen có chủ đích

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Minimalist — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 14.715 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Inter Tight`: đủ ký tự tiếng Việt
- `Inter`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | MONOCHROME GENTLEMEN — Ít hơn, nhưng tốt hơn | Truyền tải tinh thần thương hiệu, giới thiệu kiểu tóc chủ đạo, triết lý, portfolio và đội ngũ, dẫn sang các trang con và CTA đặt lịch | top, hero → hero-split, statement → quote-full, signature → teaser-row, philosophy → features-numbered, work → gallery-lookbook, barbers → team-grid, closing → cta-type, footer | 12 |
| `pages/portfolio.html` | Bộ sưu tập tóc — MONOCHROME GENTLEMEN | Bộ sưu tập kiểu tóc có bộ lọc theo nhóm và lightbox xem chi tiết | top, portfolio-hero → page-hero, gallery → gallery-filter, portfolio-cta → cta-type, footer | 11 |
| `pages/services.html` | Dịch vụ & Bảng giá — MONOCHROME GENTLEMEN | Trình bày menu dịch vụ, thời lượng, giá tham khảo và cách làm việc; dẫn tới đặt lịch (demo) | top, services-hero → page-hero, menu → features-numbered, approach → features-bento, booking → cta-type, footer | 4 |
| `pages/studio.html` | The Studio — MONOCHROME GENTLEMEN | Giới thiệu không gian, triết lý, đội ngũ barber và thông tin ghé thăm (dữ liệu mẫu) | top, studio-hero → page-hero, studio-philosophy → story-editorial, team → team-grid, inside → gallery-lookbook, visit → contact-split, footer | 11 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
monochrome-gentlemen/
  web/
    assets/
      css/
        site.css
      img/  (1 ảnh + CREDITS.md)
      js/
        atmos.js
        i18n.js
        motion.js
        site.js
        tw-config.js
        ui.js
    pages/
      portfolio.html
      services.html
      studio.html
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
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 38 ảnh chưa dùng: https://images.pexels.com/photos/4850600/pexels-photo-4850600.jpeg?auto=compress&cs=tinysrgb&w=1600, https://images.pexels.com/photos/7781848/pexels-photo-7781848.jpeg?auto=compress&cs=tinysrgb&w=1200, https://images.pexels.com/photos/12074386/pexels-photo-12074386.jpeg?auto=compress&cs=tinysrgb&w=1200, https://images.pexels.com/photos/12706272/pexels-photo-12706272.jpeg?auto=compress&cs=tinysrgb&w=1200
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1768742466927-42153b867e8b?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 12 lượt tìm (nguồn: —), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| man portrait side part hair black white | — | lỗi timeout | 31507 ms |
| barber cutting hair scissors | — | lỗi timeout | 31514 ms |
| skin fade haircut | — | lỗi timeout | 43135 ms |
| barbershop interior chair mirror | — | lỗi timeout | 42479 ms |
| beard trim barber | — | lỗi timeout | 31533 ms |
| barber portrait man black and white | — | lỗi timeout | 105962 ms |
| barber haircut black white | — | lỗi timeout | 31533 ms |
| man side part haircut black white portrait | — | lỗi timeout | 31525 ms |
| barber cutting hair scissors | — | lỗi timeout | 31521 ms |
| barbershop interior chair mirror | — | lỗi timeout | 57420 ms |
| skin fade haircut | — | lỗi timeout | 31731 ms |
| barber haircut black and white | — | lỗi timeout | 39996 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://images.pexels.com/photos/4850600/pexels-photo-4850600.jpeg?auto=compress&cs=tinysrgb&w=1600` | index.html — hero chân dung | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/7781848/pexels-photo-7781848.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — signature Classic Cut | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/12074386/pexels-photo-12074386.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — signature Modern Fade | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/12706272/pexels-photo-12706272.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — signature Textured Style | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/13758248/pexels-photo-13758248.jpeg?auto=compress&cs=tinysrgb&w=1400` | index.html — Our Philosophy | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/17163741/pexels-photo-17163741.jpeg?auto=compress&cs=tinysrgb&w=1400` | index.html — Selected work: Classic Side Part | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/35157694/pexels-photo-35157694.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — Selected work: Clean Fade | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/7460149/pexels-photo-7460149.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — Selected work: Textured Crop | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/5337943/pexels-photo-5337943.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — Selected work: Modern Slick Back | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/5188606/pexels-photo-5188606.jpeg?auto=compress&cs=tinysrgb&w=1000` | index.html + pages/studio.html — barber Minh Anh | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/16030380/pexels-photo-16030380.jpeg?auto=compress&cs=tinysrgb&w=1000` | index.html + pages/studio.html — barber Quang Minh | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/8552627/pexels-photo-8552627.jpeg?auto=compress&cs=tinysrgb&w=1000` | index.html + pages/studio.html — barber Daniel Tran | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/668196/pexels-photo-668196.jpeg?auto=compress&cs=tinysrgb&w=1600` | pages/services.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/11262382/pexels-photo-11262382.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/services.html — Hair Structure | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/10775070/pexels-photo-10775070.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/services.html — Proportion & Balance | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/10775082/pexels-photo-10775082.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/services.html — Clean Finishing | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/7265071/pexels-photo-7265071.jpeg?auto=compress&cs=tinysrgb&w=1600` | pages/portfolio.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/17163746/pexels-photo-17163746.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/portfolio.html — Classic side part | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/5337945/pexels-photo-5337945.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/portfolio.html — Classic taper | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/portfolio.html — Skin fade | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/4663136/pexels-photo-4663136.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/portfolio.html — Low fade | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/27467943/pexels-photo-27467943.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/portfolio.html — Textured crop | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/9102985/pexels-photo-9102985.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/portfolio.html — Slick back | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/39559325/pexels-photo-39559325.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/portfolio.html — Buzz cut | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/7518732/pexels-photo-7518732.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/portfolio.html — Beard detailing | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/9387375/pexels-photo-9387375.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/portfolio.html — Beard line | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/10775080/pexels-photo-10775080.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/portfolio.html — Barber at work | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/10775085/pexels-photo-10775085.jpeg?auto=compress&cs=tinysrgb&w=1000` | pages/portfolio.html — Hair texture close-up | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/3993296/pexels-photo-3993296.jpeg?auto=compress&cs=tinysrgb&w=1800` | pages/studio.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/3037239/pexels-photo-3037239.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/studio.html — philosophy | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/20785318/pexels-photo-20785318.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/studio.html — gallery barber chair | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/4969864/pexels-photo-4969864.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/studio.html — gallery mirror & station | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/10775075/pexels-photo-10775075.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/studio.html — gallery tools | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/4969838/pexels-photo-4969838.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/studio.html — gallery waiting area | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/1895701/pexels-photo-1895701.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/studio.html — gallery architecture | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1768742466927-42153b867e8b?w=1600&q=80&auto=format&fit=crop` | index.html — hero chân dung | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=1200&q=80&auto=format&fit=crop` | index.html — signature cut Classic | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=1200&q=80&auto=format&fit=crop` | index.html — signature cut Modern Fade | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1568339434343-2a640a1a9946?w=1200&q=80&auto=format&fit=crop` | index.html — signature cut Textured | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1657105052497-f996284ffff8?w=1400&q=80&auto=format&fit=crop` | index.html — philosophy barber cắt | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1630827020718-3433092696e7?w=1400&q=80&auto=format&fit=crop` | index.html — selected work ảnh lớn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1618049049816-43a00d5b0c3d?w=1000&q=80&auto=format&fit=crop` | index.html — selected work | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1764592358977-a181a6e71af4?w=1000&q=80&auto=format&fit=crop` | index.html — selected work | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=1000&q=80&auto=format&fit=crop` | index.html — selected work | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1558730234-d8b2281b0d00?w=900&q=80&auto=format&fit=crop` | barber Minh Anh — index & studio | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1450133064473-71024230f91b?w=900&q=80&auto=format&fit=crop` | barber Quang Minh — index & studio | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?w=900&q=80&auto=format&fit=crop` | barber Daniel Tran — index & studio | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?w=1400&q=80&auto=format&fit=crop` | pages/services.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1635273051839-003bf06a8751?w=1000&q=80&auto=format&fit=crop` | pages/services.html — approach Hair Structure | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1761931403667-a6753db21f32?w=1000&q=80&auto=format&fit=crop` | pages/services.html — approach Proportion | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1000&q=80&auto=format&fit=crop` | pages/services.html — approach Clean Finishing | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1578390432942-d323db577792?w=1600&q=80&auto=format&fit=crop` | pages/portfolio.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1598198414976-ddb788ec80c1?w=1000&q=80&auto=format&fit=crop` | pages/portfolio.html — classic side part | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1772442088712-df1780cbb709?w=1000&q=80&auto=format&fit=crop` | pages/portfolio.html — skin fade | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1618566105831-d604c45a7316?w=1000&q=80&auto=format&fit=crop` | pages/portfolio.html — textured crop | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1617746652908-91e66c07499a?w=1000&q=80&auto=format&fit=crop` | pages/portfolio.html — slick back | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1583674392771-2abf6be75965?w=1000&q=80&auto=format&fit=crop` | pages/portfolio.html — buzz cut | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1000&q=80&auto=format&fit=crop` | pages/portfolio.html — beard detailing | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?w=1000&q=80&auto=format&fit=crop` | pages/portfolio.html — beard | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=1000&q=80&auto=format&fit=crop` | pages/portfolio.html — barber at work | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?w=1000&q=80&auto=format&fit=crop` | pages/portfolio.html — close-up texture | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1783908688260-0c47404926f3?w=1000&q=80&auto=format&fit=crop` | pages/portfolio.html — fade at work | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1781455793310-8427c96454c7?w=1800&q=80&auto=format&fit=crop` | pages/studio.html — hero nội thất | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=1200&q=80&auto=format&fit=crop` | pages/studio.html — philosophy barber làm việc | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1560889980-1e8c2d8eb388?w=1200&q=80&auto=format&fit=crop` | pages/studio.html — gallery ghế barber | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1754294437661-129b86f868ea?w=1000&q=80&auto=format&fit=crop` | pages/studio.html — gallery gương & bàn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1596362601603-b74f6ef166e4?w=1000&q=80&auto=format&fit=crop` | pages/studio.html — gallery dụng cụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1781925856343-c97d0d44f94c?w=1000&q=80&auto=format&fit=crop` | pages/studio.html — gallery khu vực chờ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1792735207211-a96ca7e6ea77?w=1200&q=80&auto=format&fit=crop` | pages/studio.html — gallery kiến trúc | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1761931403807-f33fc582b1f5?w=1000&q=80&auto=format&fit=crop` | pages/studio.html — gallery tông đơ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1775494165568-42c0fbb4c782?w=1200&q=80&auto=format&fit=crop` | pages/studio.html — gallery ghế barber trong ánh sáng tự nhiên | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

33 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero chân dung — https://images.unsplash.com/photo-1768742466927-42153b867e8b?w=1600&q=80&auto=format&fit=crop
- index.html — signature cut Classic — https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=1200&q=80&auto=format&fit=crop
- index.html — signature cut Modern Fade — https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=1200&q=80&auto=format&fit=crop
- index.html — signature cut Textured — https://images.unsplash.com/photo-1568339434343-2a640a1a9946?w=1200&q=80&auto=format&fit=crop
- index.html — philosophy barber cắt — https://images.unsplash.com/photo-1657105052497-f996284ffff8?w=1400&q=80&auto=format&fit=crop
- index.html — selected work ảnh lớn — https://images.unsplash.com/photo-1630827020718-3433092696e7?w=1400&q=80&auto=format&fit=crop
- index.html — selected work — https://images.unsplash.com/photo-1618049049816-43a00d5b0c3d?w=1000&q=80&auto=format&fit=crop
- index.html — selected work — https://images.unsplash.com/photo-1764592358977-a181a6e71af4?w=1000&q=80&auto=format&fit=crop
- index.html — selected work — https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=1000&q=80&auto=format&fit=crop
- barber Minh Anh — index & studio — https://images.unsplash.com/photo-1558730234-d8b2281b0d00?w=900&q=80&auto=format&fit=crop
- barber Quang Minh — index & studio — https://images.unsplash.com/photo-1450133064473-71024230f91b?w=900&q=80&auto=format&fit=crop
- barber Daniel Tran — index & studio — https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?w=900&q=80&auto=format&fit=crop
- pages/services.html — hero — https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?w=1400&q=80&auto=format&fit=crop
- pages/services.html — approach Hair Structure — https://images.unsplash.com/photo-1635273051839-003bf06a8751?w=1000&q=80&auto=format&fit=crop
- pages/services.html — approach Proportion — https://images.unsplash.com/photo-1761931403667-a6753db21f32?w=1000&q=80&auto=format&fit=crop
- pages/services.html — approach Clean Finishing — https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1000&q=80&auto=format&fit=crop
- pages/portfolio.html — hero — https://images.unsplash.com/photo-1578390432942-d323db577792?w=1600&q=80&auto=format&fit=crop
- pages/portfolio.html — skin fade — https://images.unsplash.com/photo-1772442088712-df1780cbb709?w=1000&q=80&auto=format&fit=crop
- pages/portfolio.html — textured crop — https://images.unsplash.com/photo-1618566105831-d604c45a7316?w=1000&q=80&auto=format&fit=crop
- pages/portfolio.html — slick back — https://images.unsplash.com/photo-1617746652908-91e66c07499a?w=1000&q=80&auto=format&fit=crop
- pages/portfolio.html — buzz cut — https://images.unsplash.com/photo-1583674392771-2abf6be75965?w=1000&q=80&auto=format&fit=crop
- pages/portfolio.html — beard — https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?w=1000&q=80&auto=format&fit=crop
- pages/portfolio.html — barber at work — https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=1000&q=80&auto=format&fit=crop
- pages/portfolio.html — close-up texture — https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?w=1000&q=80&auto=format&fit=crop
- pages/portfolio.html — fade at work — https://images.unsplash.com/photo-1783908688260-0c47404926f3?w=1000&q=80&auto=format&fit=crop
- pages/studio.html — hero nội thất — https://images.unsplash.com/photo-1781455793310-8427c96454c7?w=1800&q=80&auto=format&fit=crop
- pages/studio.html — philosophy barber làm việc — https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=1200&q=80&auto=format&fit=crop
- pages/studio.html — gallery gương & bàn — https://images.unsplash.com/photo-1754294437661-129b86f868ea?w=1000&q=80&auto=format&fit=crop
- pages/studio.html — gallery dụng cụ — https://images.unsplash.com/photo-1596362601603-b74f6ef166e4?w=1000&q=80&auto=format&fit=crop
- pages/studio.html — gallery khu vực chờ — https://images.unsplash.com/photo-1781925856343-c97d0d44f94c?w=1000&q=80&auto=format&fit=crop
- pages/studio.html — gallery kiến trúc — https://images.unsplash.com/photo-1792735207211-a96ca7e6ea77?w=1200&q=80&auto=format&fit=crop
- pages/studio.html — gallery tông đơ — https://images.unsplash.com/photo-1761931403807-f33fc582b1f5?w=1000&q=80&auto=format&fit=crop
- pages/studio.html — gallery ghế barber trong ánh sáng tự nhiên — https://images.unsplash.com/photo-1775494165568-42c0fbb4c782?w=1200&q=80&auto=format&fit=crop

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Lọc theo nhóm
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/portfolio.html, pages/services.html, pages/studio.html).
- Chuyển động (đếm trong code): `data-reveal` ×42, `data-header` ×4, `data-reveal-stagger` ×7.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 15:06 30/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 38 cần sửa, 3 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "MONOCHROME GENTLEMEN" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 13 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 14:44 30/10/2026 | Dựng website | lỗi: Đã chạm giới hạn sử dụng của tài khoản, vui lòng chờ rồi thử lại. Hạn mức sẽ được làm mới lúc 18:40 30-10. |
| 15:06 30/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng đúng 4 trang theo yêu cầu BA (Home, Services & Pricing, Hair Portfolio, The Studio); không thêm trang Contact riêng — thông tin ghé thăm nằm cuối trang The Studio
- BA yêu cầu song ngữ VI / EN (ghi đè dòng 'không tạo bộ chuyển ngôn ngữ' của brief): tiếng Việt là nội dung gốc trong HTML, bản tiếng Anh tập trung trong assets/js/i18n.js, chuyển bằng site.js, lưu localStorage
- Dùng bảng màu đơn sắc của BA thay cho bảng màu preset (bỏ màu nhấn xanh của preset Minimalist)
- Mid Gray #858585 chỉ dùng cho số lớn / chữ trên nền đen để đạt tương phản WCAG AA; nhãn nhỏ trên nền sáng dùng Graphite #333333
- Công cụ tìm ảnh (openverse) quá thời gian chờ → toàn bộ ảnh dùng link Unsplash đã kiểm qua link_image; mọi ảnh được xử lý đen trắng bằng CSS grayscale cho thống nhất
- Cấu trúc file theo chuẩn công ty (assets/js/site.js, i18n.js) thay cho main.js / language.js / portfolio.js gợi ý của BA; bộ lọc và lightbox dùng ui.js

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1768742466927-42153b867e8b?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1568339434343-2a640a1a9946?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1657105052497-f996284ffff8?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1630827020718-3433092696e7?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1618049049816-43a00d5b0c3d?w=1000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1764592358977-a181a6e71af4?w=1000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=1000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1558730234-d8b2281b0d00?w=900&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1450133064473-71024230f91b?w=900&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?w=900&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/portfolio.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1578390432942-d323db577792?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/portfolio.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1598198414976-ddb788ec80c1?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/portfolio.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1772442088712-df1780cbb709?w=1000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Nút BOOK A VISIT / ĐẶT LỊCH chỉ hiện thông báo minh họa, chưa kết nối hệ thống đặt lịch
- Địa chỉ, số điện thoại, email, giờ mở cửa và mạng xã hội là dữ liệu mẫu
- Ảnh dùng link ngoài (Unsplash) — cần thay bằng ảnh thật của studio trước khi đưa lên thật
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
