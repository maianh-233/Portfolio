# VELVET HAIR STUDIO

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website giới thiệu tiệm salon tóc
- **Thương hiệu / dự án:** VELVET HAIR STUDIO
- **Mục đích:** Thiết kế website giới thiệu cho VELVET HAIR STUDIO, một salon tóc cao cấp theo đuổi vẻ đẹp hiện đại, tinh tế và cá nhân hóa.

Website cần truyền tải cảm giác sang trọng thông qua hình ảnh, typography, màu sắc và cách tổ chức bố cục. Tham khảo tinh thần editorial của các thương hiệu thời trang cao cấp, kết hợp với trải nghiệm trực quan của một salon tóc chuyên nghiệp.

Đây là website giới thiệu thương hiệu và dịch vụ, không phải website thương mại điện tử.
- **Ý tưởng thị giác (AI ghi):** Trang tạp chí thời trang: chữ Cormorant Garamond rất lớn có một phần in nghiêng vàng champagne, đường kẻ mảnh và số mục 01/02 chạy xuyên các trang; ảnh tóc chân dung lớn đặt lệch, nền Warm Ivory xen Velvet Black, kết trang bằng dải Mocha Brown

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Editorial / Magazine — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 14.960 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Noto Serif Display`: đủ ký tự tiếng Việt
- `Geist`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | VELVET HAIR STUDIO — Mái tóc của bạn, dấu ấn của bạn | Giới thiệu thương hiệu, 3 dịch vụ nổi bật, phong cách tiêu biểu; dẫn sang Services, Gallery, About | top, hero → hero-split, statement → quote-full, signature → teaser-row, looks → gallery-lookbook, philosophy → story-letter, cta → cta-type, footer | 9 |
| `pages/about.html` | Về chúng tôi — VELVET HAIR STUDIO | Câu chuyện, giá trị, stylist, không gian salon và thông tin liên hệ mẫu | top, hero → page-hero, story → story-editorial, values → features-numbered, stylists → team-grid, studio → gallery-lookbook, contact → contact-split, footer | 9 |
| `pages/gallery.html` | Bộ sưu tập — VELVET HAIR STUDIO | Tuyển tập kiểu tóc có bộ lọc theo danh mục, lightbox, xu hướng tham khảo; dẫn sang Services | top, hero → page-hero, edit → gallery-filter, trends → features-bento, cta → cta-type, footer | 13 |
| `pages/services.html` | Dịch vụ & bảng giá — VELVET HAIR STUDIO | Bảng giá tham khảo 4 nhóm dịch vụ, quy trình 4 bước, CTA đặt lịch | top, hero → page-hero, menu → features-numbered, approach → process-steps, cta → cta-type, footer | 5 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
velvet-hair-studio/
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
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 7 ảnh chưa dùng: https://images.unsplash.com/photo-1770576568718-6747e3d85de8?auto=format&fit=crop&w=1600&q=80, https://images.unsplash.com/photo-1637777269308-6a072f24e8a4?auto=format&fit=crop&w=1200&q=80, https://images.unsplash.com/photo-1554519934-e32b1629d9ee?auto=format&fit=crop&w=1200&q=80, https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=1200&q=80
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1554519934-e32b1629d9ee?auto=format&fit=crop&w=1600&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1637308596839-9487d9894028?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 4 lượt tìm (nguồn: —), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| woman glossy hair portrait | — | lỗi timeout | 31544 ms |
| hair salon interior | — | lỗi timeout | 39600 ms |
| hairdresser cutting hair | — | lỗi timeout | 31526 ms |
| balayage hair | — | lỗi timeout | 31529 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://images.unsplash.com/photo-1770576568718-6747e3d85de8?auto=format&fit=crop&w=1600&q=80` | index.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1200&q=80` | index.html — dịch vụ Haircut & Styling | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?auto=format&fit=crop&w=1200&q=80` | index.html — dịch vụ Hair Coloring | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1637777269308-6a072f24e8a4?auto=format&fit=crop&w=1200&q=80` | index.html — dịch vụ Hair Treatment | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1554519934-e32b1629d9ee?auto=format&fit=crop&w=1200&q=80` | index.html — Featured Looks: Soft Layers | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1636153279424-cb5d1e00f5a2?auto=format&fit=crop&w=1200&q=80` | index.html — Featured Looks: Modern Brunette | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1785456283212-338f5bc44d50?auto=format&fit=crop&w=1200&q=80` | index.html — Featured Looks: Effortless Waves | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80` | index.html — Featured Looks: Signature Balayage | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1600&q=80` | index.html — Our Philosophy, không gian salon | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1600&q=80` | pages/services.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1774660810725-fb04e002003d?auto=format&fit=crop&w=1200&q=80` | pages/services.html — Haircut & Styling | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=1200&q=80` | pages/services.html — Hair Coloring | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80` | pages/services.html — Perm & Texture | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1787880172059-1c52decb1ca9?auto=format&fit=crop&w=1200&q=80` | pages/services.html — Hair Treatment | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?auto=format&fit=crop&w=1600&q=80` | pages/gallery.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1647462741351-4e7a5e7317c7?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Soft Layered Cut | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1634510979979-4be6881d31bb?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Modern Brunette | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1554519515-242161756769?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Honey Balayage | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1785456390070-9960e3997066?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Effortless Waves | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1779350676620-fde279b1d023?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Sculpted Bob | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1614204424926-196a80bf0be8?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Glossy Dark Hair | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1779406859387-5d6fd116b3ff?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Blonde Dimension | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1734111719430-fe4a3973f8af?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Signature Styling | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Precision Cut | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Trend Natural Dimension | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Trend Modern Layers | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Trend Healthy Hair Gloss | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1781450090585-1a511b7066d9?auto=format&fit=crop&w=1600&q=80` | pages/about.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1761839256791-6a93f89fb8b0?auto=format&fit=crop&w=1200&q=80` | pages/about.html — Our Story | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1000&q=80` | pages/about.html — stylist Maya Tran (minh họa) | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=1000&q=80` | pages/about.html — stylist Linh Nguyen (minh họa) | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1558730234-d8b2281b0d00?auto=format&fit=crop&w=1000&q=80` | pages/about.html — stylist Alex Pham (minh họa) | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1637308596973-231d1a9221f5?auto=format&fit=crop&w=1200&q=80` | pages/about.html — The Studio: khu cắt tóc | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80` | pages/about.html — The Studio: gương và ghế | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1637777269327-c4d5c7944d7b?auto=format&fit=crop&w=1200&q=80` | pages/about.html — The Studio: khu gội đầu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1634449862841-8c6e970117e5?auto=format&fit=crop&w=1200&q=80` | pages/about.html — The Studio: vật liệu & ánh sáng | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1707812343087-c9ff9e5abb43?auto=format&fit=crop&w=1200&q=80` | index.html — dịch vụ 01 Haircut & Styling | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1535579710123-3c0f261c474e?auto=format&fit=crop&w=1200&q=80` | index.html — Featured Looks: Soft Layers | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1637308596839-9487d9894028?auto=format&fit=crop&w=1200&q=80` | index.html — dịch vụ 01 Haircut & Styling | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1522664101602-c1e70bcc9996?auto=format&fit=crop&w=1200&q=80` | pages/gallery.html — Honey Balayage | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

33 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — dịch vụ Haircut & Styling — https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1200&q=80
- index.html — dịch vụ Hair Coloring — https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?auto=format&fit=crop&w=1200&q=80
- index.html — Featured Looks: Modern Brunette — https://images.unsplash.com/photo-1636153279424-cb5d1e00f5a2?auto=format&fit=crop&w=1200&q=80
- index.html — Featured Looks: Effortless Waves — https://images.unsplash.com/photo-1785456283212-338f5bc44d50?auto=format&fit=crop&w=1200&q=80
- index.html — Featured Looks: Signature Balayage — https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80
- index.html — Our Philosophy, không gian salon — https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1600&q=80
- pages/services.html — hero — https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1600&q=80
- pages/services.html — Haircut & Styling — https://images.unsplash.com/photo-1774660810725-fb04e002003d?auto=format&fit=crop&w=1200&q=80
- pages/services.html — Perm & Texture — https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80
- pages/services.html — Hair Treatment — https://images.unsplash.com/photo-1787880172059-1c52decb1ca9?auto=format&fit=crop&w=1200&q=80
- pages/gallery.html — hero — https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?auto=format&fit=crop&w=1600&q=80
- pages/gallery.html — Soft Layered Cut — https://images.unsplash.com/photo-1647462741351-4e7a5e7317c7?auto=format&fit=crop&w=1200&q=80
- pages/gallery.html — Modern Brunette — https://images.unsplash.com/photo-1634510979979-4be6881d31bb?auto=format&fit=crop&w=1200&q=80
- pages/gallery.html — Effortless Waves — https://images.unsplash.com/photo-1785456390070-9960e3997066?auto=format&fit=crop&w=1200&q=80
- pages/gallery.html — Sculpted Bob — https://images.unsplash.com/photo-1779350676620-fde279b1d023?auto=format&fit=crop&w=1200&q=80
- pages/gallery.html — Glossy Dark Hair — https://images.unsplash.com/photo-1614204424926-196a80bf0be8?auto=format&fit=crop&w=1200&q=80
- pages/gallery.html — Blonde Dimension — https://images.unsplash.com/photo-1779406859387-5d6fd116b3ff?auto=format&fit=crop&w=1200&q=80
- pages/gallery.html — Signature Styling — https://images.unsplash.com/photo-1734111719430-fe4a3973f8af?auto=format&fit=crop&w=1200&q=80
- pages/gallery.html — Precision Cut — https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?auto=format&fit=crop&w=1200&q=80
- pages/gallery.html — Trend Natural Dimension — https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80
- pages/gallery.html — Trend Modern Layers — https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?auto=format&fit=crop&w=1200&q=80
- pages/about.html — hero — https://images.unsplash.com/photo-1781450090585-1a511b7066d9?auto=format&fit=crop&w=1600&q=80
- pages/about.html — Our Story — https://images.unsplash.com/photo-1761839256791-6a93f89fb8b0?auto=format&fit=crop&w=1200&q=80
- pages/about.html — stylist Maya Tran (minh họa) — https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1000&q=80
- pages/about.html — stylist Linh Nguyen (minh họa) — https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=1000&q=80
- pages/about.html — stylist Alex Pham (minh họa) — https://images.unsplash.com/photo-1558730234-d8b2281b0d00?auto=format&fit=crop&w=1000&q=80
- pages/about.html — The Studio: khu cắt tóc — https://images.unsplash.com/photo-1637308596973-231d1a9221f5?auto=format&fit=crop&w=1200&q=80
- pages/about.html — The Studio: gương và ghế — https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80
- pages/about.html — The Studio: khu gội đầu — https://images.unsplash.com/photo-1637777269327-c4d5c7944d7b?auto=format&fit=crop&w=1200&q=80
- index.html — dịch vụ 01 Haircut & Styling — https://images.unsplash.com/photo-1707812343087-c9ff9e5abb43?auto=format&fit=crop&w=1200&q=80
- index.html — Featured Looks: Soft Layers — https://images.unsplash.com/photo-1535579710123-3c0f261c474e?auto=format&fit=crop&w=1200&q=80
- index.html — dịch vụ 01 Haircut & Styling — https://images.unsplash.com/photo-1637308596839-9487d9894028?auto=format&fit=crop&w=1200&q=80
- pages/gallery.html — Honey Balayage — https://images.unsplash.com/photo-1522664101602-c1e70bcc9996?auto=format&fit=crop&w=1200&q=80

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Lọc theo nhóm
- Phóng to ảnh (lightbox)
- Đánh dấu mục đang xem trên menu
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/gallery.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×60, `data-header` ×4, `data-reveal-stagger` ×3.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 09:06 30/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 36 cần sửa, 4 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "VELVET HAIR STUDIO" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 17 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 09:06 30/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Theo chú thích BA: đúng 4 trang Home / Services / Gallery / About, không thêm trang chi tiết; liên kết 'Xem chi tiết' của dịch vụ trỏ tới mục tương ứng (#cutting, #coloring, #treatment) trên trang Services
- BA yêu cầu song ngữ VI / EN có bộ chuyển trong header — ưu tiên hơn mục 'không tạo bộ chuyển ngôn ngữ' của concept.md. Mặc định tiếng Việt (<html lang="vi">), bấm EN đổi toàn bộ nội dung tại chỗ, không tải lại trang, nhớ lựa chọn bằng localStorage, giữ trạng thái bộ lọc Gallery
- Cơ chế dịch: nội dung VI viết sẵn trong HTML (data-i18n / data-i18n-attr) và được thu thành từ điển VI khi tải; toàn bộ bản EN khai báo tập trung trong một object EN ở assets/js/site.js
- Màu & font theo chú thích BA thay preset: Velvet Black #171615, Warm Ivory #F5F0E8, Mocha Brown #705548, Champagne Gold #C5A572, Soft Taupe #B8AA9A; Cormorant Garamond (tiêu đề) + Manrope (thân), cả hai có đủ dấu tiếng Việt
- Công cụ thư viện ảnh (openverse) quá thời gian chờ → toàn bộ ảnh dùng link Unsplash thật đã kiểm qua link_image (status 'link')
- Gallery: đổi tên vài mục theo đúng nội dung ảnh tìm được (Copper Balayage thay Honey Balayage, Sculpted Curls thay Sculpted Bob) vì không có ảnh bob / balayage mật ong phù hợp
- Header trong suốt trên hero tối ở mọi trang, chuyển nền Velvet Black khi cuộn; menu mobile toàn màn nền Velvet Black chữ Warm Ivory

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1554519934-e32b1629d9ee?auto=format&fit=crop&w=1600&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1637308596839-9487d9894028?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1535579710123-3c0f261c474e?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1636153279424-cb5d1e00f5a2?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1785456283212-338f5bc44d50?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1600&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1781450090585-1a511b7066d9?auto=format&fit=crop&w=1600&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1761839256791-6a93f89fb8b0?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=1000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1558730234-d8b2281b0d00?auto=format&fit=crop&w=1000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1637308596973-231d1a9221f5?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Nút Đặt lịch / Book a Visit chỉ mở hộp thoại thông tin liên hệ mẫu, chưa có hệ thống đặt lịch trực tuyến
- Địa chỉ, điện thoại, email, giờ mở cửa, hồ sơ stylist và toàn bộ giá là dữ liệu minh họa
- Liên kết Instagram / Facebook / TikTok trỏ tới trang chủ mạng xã hội, chưa gắn tài khoản thật
- Ảnh dùng link ngoài (Unsplash) — cần mạng để hiển thị; nên thay bằng ảnh thật của salon khi triển khai
- Thông báo hệ thống của lightbox / nút sao chép (ui.js) giữ ngôn ngữ lúc tải trang
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
