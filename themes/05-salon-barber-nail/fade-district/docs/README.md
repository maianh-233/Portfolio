# FADE DISTRICT

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website giới thiệu thương hiệu
- **Thương hiệu / dự án:** FADE DISTRICT
- **Mục đích:** Thiết kế website giới thiệu FADE DISTRICT, một barber studio dành cho thế hệ trẻ yêu thích streetwear, văn hóa đường phố và các kiểu tóc cá tính như Skin Fade, Textured Crop, Buzz Cut và Modern Mullet.

Website kết hợp tinh thần của một barber studio hiện đại với hình ảnh của streetwear brand và tạp chí văn hóa đô thị.

Creative direction: Streetwear Editorial × Neo-Brutalism × Urban Photography.

Giao diện phải mạnh mẽ, trực diện, có nhịp điệu thị giác nhanh và khác biệt rõ ràng với website barber cổ điển hoặc luxury salon.

Tránh bố cục website doanh nghiệp truyền thống, card bo tròn đại trà và các section lặp lại theo cùng một khuôn mẫu.
- **Ý tưởng thị giác (AI ghi):** Poster dán tường phố: băng dán cam neon cắt ngang section, viền đen 3px, tem số hiệu DISTRICT 00X và số thứ tự khổng lồ chạy xuyên mọi trang

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Neo-Brutalism / Bold — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 12.436 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Bricolage Grotesque`: đủ ký tự tiếng Việt
- `Playfair Display`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | FADE DISTRICT — Barber studio cho thế hệ streetwear | Tạo ấn tượng thương hiệu, giới thiệu tinh thần, 4 kiểu tóc chủ lực, xem trước gallery và đội ngũ, dẫn sang đặt lịch | top, hero → hero-offset, street-banner → marquee-band, attitude → story-editorial, styles → features-bento, lookbook → gallery-lookbook, crew → team-grid, closing → cta-type, footer | 15 |
| `pages/district.html` | Về District — FADE DISTRICT | Câu chuyện thương hiệu, đội ngũ, không gian studio và thông tin ghé thăm (dữ liệu mẫu) | top, page-hero → page-hero, story → story-letter, crew → team-grid, studio → gallery-masonry, visit → contact-split, footer | 11 |
| `pages/gallery.html` | Thư viện kiểu tóc — FADE DISTRICT | Lookbook 12 ảnh có bộ lọc thật theo kiểu tóc, lightbox; 3 bộ sưu tập lọc nhanh | top, page-hero → page-hero, lookbook → gallery-filter, looks → teaser-row, gallery-cta → cta-type, footer | 16 |
| `pages/services.html` | Dịch vụ & Bảng giá — FADE DISTRICT | Menu 6 dịch vụ với thời lượng, giá tham khảo; 3 hướng phong cách dẫn sang gallery; CTA đặt lịch minh họa | top, page-hero → page-hero, menu → features-numbered, find-cut → gallery-filmstrip, booking → cta-type, footer | 5 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
fade-district/
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
      district.html
      gallery.html
      services.html
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
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 1 ảnh chưa dùng: https://images.unsplash.com/photo-1673118306698-ffda943ec1b9?w=1000&q=70&auto=format&fit=crop
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=1600&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1568339434343-2a640a1a9946?w=1200&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 7 lượt tìm (nguồn: —), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| skin fade haircut man | — | lỗi timeout | 31531 ms |
| barber cutting hair | — | lỗi timeout | 31531 ms |
| mullet haircut | — | lỗi timeout | 36507 ms |
| buzz cut man portrait | — | lỗi timeout | 65455 ms |
| barber shop interior chair | — | lỗi timeout | 31545 ms |
| barber portrait tattoo | — | lỗi timeout | 31547 ms |
| barber haircut | — | lỗi timeout | 31539 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=1600&q=70&auto=format&fit=crop` | index.html — hero chân dung fade | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=70&auto=format&fit=crop` | index.html — attitude barber đang cắt | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1568339434343-2a640a1a9946?w=1200&q=70&auto=format&fit=crop` | index.html — style Skin Fade | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1673118306590-0a82988ba2c3?w=1000&q=70&auto=format&fit=crop` | index.html — style Textured Crop | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1644199161554-f9e84cd64b7b?w=1000&q=70&auto=format&fit=crop` | index.html — style Buzz Cut | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1785970151269-1c77b401afb6?w=1000&q=70&auto=format&fit=crop` | index.html — style Modern Mullet | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1553521041-d168abd31de3?w=900&q=70&auto=format&fit=crop` | index.html + pages/district.html — crew Minh Khoa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1598524374912-6b0b0bab43dd?w=900&q=70&auto=format&fit=crop` | index.html + pages/district.html — crew Jay Nguyen | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1673118306669-ba0aa4189636?w=900&q=70&auto=format&fit=crop` | index.html + pages/district.html — crew Alex Tran | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1788328155052-e02abe9ba983?w=1400&q=70&auto=format&fit=crop` | pages/services.html — hero barber action | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=1000&q=70&auto=format&fit=crop` | pages/services.html — Find your cut: Clean & Minimal | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1578390432942-d323db577792?w=1000&q=70&auto=format&fit=crop` | pages/services.html — Find your cut: Bold & Textured | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1630827020718-3433092696e7?w=1000&q=70&auto=format&fit=crop` | pages/services.html — Find your cut: Sharp & Defined | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1558954066-620ba460bae2?w=1600&q=70&auto=format&fit=crop` | pages/gallery.html — hero lookbook | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1629189784191-9afdcbcb0398?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery fade 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1764592358977-a181a6e71af4?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery fade 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1768742466927-42153b867e8b?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery fade 3 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1673118306786-317c5a6531bc?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery textured 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1686543972602-da0c7ea61ce2?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery textured 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1724022057448-15024eaf2341?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery buzz 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1704572636607-78b65b21b165?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery buzz 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1785970151283-e5484bdbc5d7?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery mullet 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1700585560130-84a0a58e420f?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery mullet 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery beard 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery beard 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1783908688260-0c47404926f3?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery fade action | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1673118306698-ffda943ec1b9?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — gallery textured 3 | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1635273051839-003bf06a8751?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — look The Clean Fade | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1657105052497-f996284ffff8?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — look Texture Culture | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1790802924762-19b41482a04b?w=1000&q=70&auto=format&fit=crop` | pages/gallery.html — look No Rules | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1759134198561-e2041049419c?w=1600&q=70&auto=format&fit=crop` | pages/district.html — hero studio | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=1200&q=70&auto=format&fit=crop` | pages/district.html — our story | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1781455793310-8427c96454c7?w=1400&q=70&auto=format&fit=crop` | pages/district.html — studio ghế & gương | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1792792899240-208d73a64449?w=1000&q=70&auto=format&fit=crop` | pages/district.html — studio dụng cụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1000&q=70&auto=format&fit=crop` | pages/district.html — studio bàn làm việc | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1781925856343-c97d0d44f94c?w=1000&q=70&auto=format&fit=crop` | pages/district.html — studio khu chờ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1792735207211-a96ca7e6ea77?w=1000&q=70&auto=format&fit=crop` | pages/district.html — studio khu cắt | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1000&q=70&auto=format&fit=crop` | pages/district.html — studio chi tiết tường | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1761931403667-a6753db21f32?w=1000&q=70&auto=format&fit=crop` | pages/services.html — service menu ảnh phụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

38 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero chân dung fade — https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=1600&q=70&auto=format&fit=crop
- index.html — attitude barber đang cắt — https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=70&auto=format&fit=crop
- index.html — style Skin Fade — https://images.unsplash.com/photo-1568339434343-2a640a1a9946?w=1200&q=70&auto=format&fit=crop
- index.html — style Textured Crop — https://images.unsplash.com/photo-1673118306590-0a82988ba2c3?w=1000&q=70&auto=format&fit=crop
- index.html — style Buzz Cut — https://images.unsplash.com/photo-1644199161554-f9e84cd64b7b?w=1000&q=70&auto=format&fit=crop
- index.html — style Modern Mullet — https://images.unsplash.com/photo-1785970151269-1c77b401afb6?w=1000&q=70&auto=format&fit=crop
- index.html + pages/district.html — crew Minh Khoa — https://images.unsplash.com/photo-1553521041-d168abd31de3?w=900&q=70&auto=format&fit=crop
- index.html + pages/district.html — crew Jay Nguyen — https://images.unsplash.com/photo-1598524374912-6b0b0bab43dd?w=900&q=70&auto=format&fit=crop
- index.html + pages/district.html — crew Alex Tran — https://images.unsplash.com/photo-1673118306669-ba0aa4189636?w=900&q=70&auto=format&fit=crop
- pages/services.html — hero barber action — https://images.unsplash.com/photo-1788328155052-e02abe9ba983?w=1400&q=70&auto=format&fit=crop
- pages/services.html — Find your cut: Clean & Minimal — https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=1000&q=70&auto=format&fit=crop
- pages/services.html — Find your cut: Bold & Textured — https://images.unsplash.com/photo-1578390432942-d323db577792?w=1000&q=70&auto=format&fit=crop
- pages/services.html — Find your cut: Sharp & Defined — https://images.unsplash.com/photo-1630827020718-3433092696e7?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — hero lookbook — https://images.unsplash.com/photo-1558954066-620ba460bae2?w=1600&q=70&auto=format&fit=crop
- pages/gallery.html — gallery fade 1 — https://images.unsplash.com/photo-1629189784191-9afdcbcb0398?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — gallery fade 2 — https://images.unsplash.com/photo-1764592358977-a181a6e71af4?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — gallery fade 3 — https://images.unsplash.com/photo-1768742466927-42153b867e8b?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — gallery textured 1 — https://images.unsplash.com/photo-1673118306786-317c5a6531bc?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — gallery textured 2 — https://images.unsplash.com/photo-1686543972602-da0c7ea61ce2?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — gallery buzz 1 — https://images.unsplash.com/photo-1724022057448-15024eaf2341?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — gallery buzz 2 — https://images.unsplash.com/photo-1704572636607-78b65b21b165?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — gallery mullet 1 — https://images.unsplash.com/photo-1785970151283-e5484bdbc5d7?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — gallery mullet 2 — https://images.unsplash.com/photo-1700585560130-84a0a58e420f?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — gallery beard 1 — https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — gallery beard 2 — https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — gallery fade action — https://images.unsplash.com/photo-1783908688260-0c47404926f3?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — look The Clean Fade — https://images.unsplash.com/photo-1635273051839-003bf06a8751?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — look Texture Culture — https://images.unsplash.com/photo-1657105052497-f996284ffff8?w=1000&q=70&auto=format&fit=crop
- pages/gallery.html — look No Rules — https://images.unsplash.com/photo-1790802924762-19b41482a04b?w=1000&q=70&auto=format&fit=crop
- pages/district.html — hero studio — https://images.unsplash.com/photo-1759134198561-e2041049419c?w=1600&q=70&auto=format&fit=crop
- pages/district.html — our story — https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=1200&q=70&auto=format&fit=crop
- pages/district.html — studio ghế & gương — https://images.unsplash.com/photo-1781455793310-8427c96454c7?w=1400&q=70&auto=format&fit=crop
- pages/district.html — studio dụng cụ — https://images.unsplash.com/photo-1792792899240-208d73a64449?w=1000&q=70&auto=format&fit=crop
- pages/district.html — studio bàn làm việc — https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1000&q=70&auto=format&fit=crop
- pages/district.html — studio khu chờ — https://images.unsplash.com/photo-1781925856343-c97d0d44f94c?w=1000&q=70&auto=format&fit=crop
- pages/district.html — studio khu cắt — https://images.unsplash.com/photo-1792735207211-a96ca7e6ea77?w=1000&q=70&auto=format&fit=crop
- pages/district.html — studio chi tiết tường — https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1000&q=70&auto=format&fit=crop
- pages/services.html — service menu ảnh phụ — https://images.unsplash.com/photo-1761931403667-a6753db21f32?w=1000&q=70&auto=format&fit=crop

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Lọc theo nhóm
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/district.html, pages/gallery.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×45, `data-header` ×4, `data-split` ×9, `data-reveal-stagger` ×6, `data-marquee` ×1, `data-float` ×3, `data-particles` ×1, `data-magnetic` ×5, `data-reveal="clip"` ×11, `data-parallax` ×1, `data-drag-scroll` ×1; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 14:29 30/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 48 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "FADE DISTRICT" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 16 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 14:25 30/10/2026 | Dựng website | xong |
| 14:29 30/10/2026 | Sửa: Ở Trang chủ phần "Bắt gặp trên phố." phần đó các ảnh đang đè lên chữ | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Dựng đúng 4 trang theo chú thích của BA (Home / Services / Style Gallery / The District), không thêm trang chi tiết.
- Có bộ chuyển VI / EN theo chú thích BA (ghi đè mục 'không tạo bộ chuyển ngôn ngữ' của concept.md): mặc định tiếng Việt, lang=vi; tiếng Anh lưu trong data-en, chuyển tại chỗ, nhớ bằng localStorage.
- Màu theo bảng BA (#FF5A1F, #171717, #B8B8B3, #F4F2EC, #D9FF3F) thay bảng preset, giữ tên vai trò của preset (signal, ink, paper, acid) + concrete.
- Tiêu đề dùng Barlow Condensed (condensed, đủ dấu tiếng Việt) theo yêu cầu 'sans-serif condensed' của BA; thân Bricolage Grotesque (preset); số kỹ thuật JetBrains Mono. Bỏ Playfair Display của preset.
- Công cụ ảnh (openverse) quá thời gian chờ → toàn bộ ảnh dùng link Unsplash đã kiểm qua link_image.
- Phần xem trước gallery ở trang chủ dùng lại 6 ảnh của trang Gallery; chân dung 3 barber dùng chung trang chủ và District (cùng người).
- Dấu gạch dài trong dải chạy chữ thay bằng dấu + (yếu tố đồ họa BA cho phép).

Lỗi QA còn mở:

- [Mức chuyển động] : BA chọn Level 2 nhưng trang dùng hiệu ứng Level 3: data-magnetic.
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=1600&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1568339434343-2a640a1a9946?w=1200&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1673118306590-0a82988ba2c3?w=1000&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1644199161554-f9e84cd64b7b?w=1000&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1785970151269-1c77b401afb6?w=1000&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1629189784191-9afdcbcb0398?w=1000&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1673118306786-317c5a6531bc?w=1000&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1724022057448-15024eaf2341?w=1000&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1785970151283-e5484bdbc5d7?w=1000&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1783908688260-0c47404926f3?w=1000&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1686543972602-da0c7ea61ce2?w=1000&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1553521041-d168abd31de3?w=900&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1598524374912-6b0b0bab43dd?w=900&q=70&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Nút BOOK A VISIT chỉ hiện thông báo minh họa, không có form, không thu thập / gửi dữ liệu.
- Địa chỉ, số điện thoại, email, giờ mở cửa, mạng xã hội là dữ liệu mẫu, đã đánh dấu trên trang.
- Giá và thời lượng dịch vụ chỉ mang tính minh họa.
- Ảnh dùng link ngoài Unsplash, cần mạng để hiển thị; nên thay bằng ảnh thật của studio.
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
