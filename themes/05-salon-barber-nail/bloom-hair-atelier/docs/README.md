# BLOOM HAIR ATELIER

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website giới thiệu thương hiệu tiệm salon tóc
- **Thương hiệu / dự án:** BLOOM HAIR ATELIER
- **Mục đích:** Thiết kế website giới thiệu BLOOM HAIR ATELIER, một salon tóc nghệ thuật dành cho khách hàng yêu thích vẻ đẹp nữ tính, màu nhuộm sáng tạo và những kiểu tóc mềm mại, giàu tính thẩm mỹ.

BLOOM không chỉ là nơi cắt và nhuộm tóc mà còn là không gian để mỗi khách hàng thể hiện cá tính qua màu sắc, kiểu dáng và phong cách riêng.

Website cần mang tinh thần của một thương hiệu làm đẹp hiện đại, kết hợp vẻ mềm mại của hoa lá với phong cách editorial của các tạp chí thời trang.
- **Ý tưởng thị giác (AI ghi):** Khung ảnh hình vòm như cánh hoa / gương salon đặt trên lưới editorial kẻ mảnh, kèm dải swatch 4 màu tóc (Rose Brown, Lavender Brown, Beige Blonde, Soft Pink) lặp lại ở hero, tiêu đề và footer; lavender là màu nhận diện xuyên suốt

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Editorial / Magazine — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 5.495 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: đủ ký tự tiếng Anh
- `Geist`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | BLOOM HAIR ATELIER \| Bloom into your own beauty | Giới thiệu thương hiệu, dịch vụ nổi bật, câu chuyện màu nhuộm, stylist; dẫn sang Services / Gallery / About | top, hero → hero-type, signature → story-editorial, services → features-numbered, color-stories → gallery-lookbook, artists → team-grid, quote → quote-full, footer | 11 |
| `pages/about.html` | About \| BLOOM HAIR ATELIER | Không gian BLOOM, câu chuyện tên thương hiệu, 3 giá trị, hồ sơ stylist, ảnh không gian, thông tin liên hệ & ghé thăm (dữ liệu mẫu) | top, page-hero → page-hero, story → story-letter, philosophy → features-numbered, artists → team-grid, atelier → features-bento, visit → contact-split, footer | 10 |
| `pages/gallery.html` | Gallery \| BLOOM HAIR ATELIER | Bộ sưu tập kiểu tóc có bộ lọc + lightbox, bảng màu tóc đặc trưng, CTA sang Services | top, page-hero → page-hero, looks → gallery-filter, colors → stats-band, cta → cta-type, footer | 14 |
| `pages/services.html` | Services \| BLOOM HAIR ATELIER | Quy trình tư vấn 4 bước, bảng dịch vụ 4 nhóm (tên, mô tả, thời lượng, giá tham khảo), Find Your Hair Mood | top, page-hero → page-hero, process → process-steps, menu → features-tabs, hair-mood → features-bento, cta → cta-type, footer | 5 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
bloom-hair-atelier/
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
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 1 ảnh chưa dùng: https://images.unsplash.com/photo-1599332069800-fcf11ed035ff?w=900&q=80&auto=format&fit=crop
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 5 lượt tìm (nguồn: —), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| woman wavy hair portrait | — | lỗi timeout | 31536 ms |
| balayage hair color | — | lỗi timeout | 65511 ms |
| hairdresser cutting hair salon | — | lỗi timeout | 31535 ms |
| pink hair woman | — | lỗi timeout | 31524 ms |
| hair salon | — | lỗi timeout | 31523 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80&auto=format&fit=crop` | index.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=1200&q=80&auto=format&fit=crop` | index.html — signature services: cut | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=1200&q=80&auto=format&fit=crop` | index.html — signature services: color | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80&auto=format&fit=crop` | index.html — signature services: care | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1560264641-1b5191cc63e2?w=1000&q=80&auto=format&fit=crop` | index.html — color stories: Rose Brown | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1000&q=80&auto=format&fit=crop` | index.html — color stories: Lavender Brown | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?w=1000&q=80&auto=format&fit=crop` | index.html — color stories: Beige Blonde | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1598897506620-c6601b3c2f12?w=1000&q=80&auto=format&fit=crop` | index.html — color stories: Soft Pink | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1622418131139-8549767c2670?w=900&q=80&auto=format&fit=crop` | index.html + about — artist 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1628126929453-b519555aaabf?w=900&q=80&auto=format&fit=crop` | index.html + about — artist 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1599332069800-fcf11ed035ff?w=900&q=80&auto=format&fit=crop` | index.html + about — artist 3 | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1634449571017-5fecfd26ad76?w=1600&q=80&auto=format&fit=crop` | pages/services.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?w=1200&q=80&auto=format&fit=crop` | pages/services.html — Haircut & Styling | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1574773004910-1eeaabb62b55?w=1200&q=80&auto=format&fit=crop` | pages/services.html — Hair Coloring | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=1200&q=80&auto=format&fit=crop` | pages/services.html — Perm & Texture | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1734111719430-fe4a3973f8af?w=1200&q=80&auto=format&fit=crop` | pages/services.html — Hair Treatment | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1769007783470-cf53b045bab1?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1769006370577-d0eca8c11741?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1659683704761-4c1a34c8f6ec?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 3 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1632984814154-6e07a671ae58?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 4 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1554519515-242161756769?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 5 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1633165864153-5a83575b24af?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 6 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1707812343087-c9ff9e5abb43?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 7 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1637308596973-231d1a9221f5?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 8 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1723879371824-dfd4bd34d1f6?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 9 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 10 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1785456283212-338f5bc44d50?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 11 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1770576568718-6747e3d85de8?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 12 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1785456390070-9960e3997066?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 13 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1774660810725-fb04e002003d?w=1000&q=80&auto=format&fit=crop` | pages/gallery.html — look 14 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1781450090585-1a511b7066d9?w=1600&q=80&auto=format&fit=crop` | pages/about.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1758315949140-1972ace0644e?w=1200&q=80&auto=format&fit=crop` | pages/about.html — our story | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80&auto=format&fit=crop` | pages/about.html — inside the atelier 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1536520002442-39764a41e987?w=1200&q=80&auto=format&fit=crop` | pages/about.html — inside the atelier 2 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1746723378067-83a345ff3160?w=1200&q=80&auto=format&fit=crop` | pages/about.html — inside the atelier 3 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1200&q=80&auto=format&fit=crop` | pages/about.html — inside the atelier 4 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1776105609708-3d8908ab4dc2?w=1200&q=80&auto=format&fit=crop` | pages/about.html — inside the atelier 5 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1599148200256-649e98444ef2?w=900&q=80&auto=format&fit=crop` | index.html + about — artist 3 (thay ảnh cũ không phải chân dung) | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

37 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero — https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80&auto=format&fit=crop
- index.html — signature services: cut — https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=1200&q=80&auto=format&fit=crop
- index.html — signature services: color — https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=1200&q=80&auto=format&fit=crop
- index.html — signature services: care — https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80&auto=format&fit=crop
- index.html — color stories: Rose Brown — https://images.unsplash.com/photo-1560264641-1b5191cc63e2?w=1000&q=80&auto=format&fit=crop
- index.html — color stories: Lavender Brown — https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1000&q=80&auto=format&fit=crop
- index.html — color stories: Beige Blonde — https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?w=1000&q=80&auto=format&fit=crop
- index.html — color stories: Soft Pink — https://images.unsplash.com/photo-1598897506620-c6601b3c2f12?w=1000&q=80&auto=format&fit=crop
- index.html + about — artist 1 — https://images.unsplash.com/photo-1622418131139-8549767c2670?w=900&q=80&auto=format&fit=crop
- index.html + about — artist 2 — https://images.unsplash.com/photo-1628126929453-b519555aaabf?w=900&q=80&auto=format&fit=crop
- pages/services.html — hero — https://images.unsplash.com/photo-1634449571017-5fecfd26ad76?w=1600&q=80&auto=format&fit=crop
- pages/services.html — Haircut & Styling — https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?w=1200&q=80&auto=format&fit=crop
- pages/services.html — Hair Coloring — https://images.unsplash.com/photo-1574773004910-1eeaabb62b55?w=1200&q=80&auto=format&fit=crop
- pages/services.html — Perm & Texture — https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=1200&q=80&auto=format&fit=crop
- pages/services.html — Hair Treatment — https://images.unsplash.com/photo-1734111719430-fe4a3973f8af?w=1200&q=80&auto=format&fit=crop
- pages/gallery.html — look 1 — https://images.unsplash.com/photo-1769007783470-cf53b045bab1?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 2 — https://images.unsplash.com/photo-1769006370577-d0eca8c11741?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 3 — https://images.unsplash.com/photo-1659683704761-4c1a34c8f6ec?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 4 — https://images.unsplash.com/photo-1632984814154-6e07a671ae58?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 5 — https://images.unsplash.com/photo-1554519515-242161756769?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 6 — https://images.unsplash.com/photo-1633165864153-5a83575b24af?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 7 — https://images.unsplash.com/photo-1707812343087-c9ff9e5abb43?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 8 — https://images.unsplash.com/photo-1637308596973-231d1a9221f5?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 9 — https://images.unsplash.com/photo-1723879371824-dfd4bd34d1f6?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 10 — https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 11 — https://images.unsplash.com/photo-1785456283212-338f5bc44d50?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 12 — https://images.unsplash.com/photo-1770576568718-6747e3d85de8?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 13 — https://images.unsplash.com/photo-1785456390070-9960e3997066?w=1000&q=80&auto=format&fit=crop
- pages/gallery.html — look 14 — https://images.unsplash.com/photo-1774660810725-fb04e002003d?w=1000&q=80&auto=format&fit=crop
- pages/about.html — hero — https://images.unsplash.com/photo-1781450090585-1a511b7066d9?w=1600&q=80&auto=format&fit=crop
- pages/about.html — our story — https://images.unsplash.com/photo-1758315949140-1972ace0644e?w=1200&q=80&auto=format&fit=crop
- pages/about.html — inside the atelier 1 — https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80&auto=format&fit=crop
- pages/about.html — inside the atelier 2 — https://images.unsplash.com/photo-1536520002442-39764a41e987?w=1200&q=80&auto=format&fit=crop
- pages/about.html — inside the atelier 3 — https://images.unsplash.com/photo-1746723378067-83a345ff3160?w=1200&q=80&auto=format&fit=crop
- pages/about.html — inside the atelier 4 — https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1200&q=80&auto=format&fit=crop
- pages/about.html — inside the atelier 5 — https://images.unsplash.com/photo-1776105609708-3d8908ab4dc2?w=1200&q=80&auto=format&fit=crop
- index.html + about — artist 3 (thay ảnh cũ không phải chân dung) — https://images.unsplash.com/photo-1599148200256-649e98444ef2?w=900&q=80&auto=format&fit=crop

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Cửa sổ (modal)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Phóng to ảnh (lightbox)
- Sao chép nhanh (số điện thoại / email)
- Lọc theo nhóm
- Tabs
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/gallery.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×52, `data-header` ×4, `data-reveal-stagger` ×6.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 09:27 30/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 40 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "BLOOM HAIR ATELIER" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 11 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 09:27 30/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- BA yêu cầu song ngữ VI / EN có bộ chuyển ngôn ngữ (ưu tiên chú thích của BA hơn mục Ngôn ngữ của concept): HTML gốc viết tiếng Anh, <html lang="en">; bản tiếng Việt nằm trong thuộc tính data-vi* và được site.js đổi ngay trên trang hiện tại, nhớ lựa chọn bằng localStorage
- Font theo BA: Cormorant Garamond (tiêu đề) + Manrope (thân bài), đều hỗ trợ tiếng Việt, thay cho Instrument Serif / Geist của preset
- Bảng màu theo BA (lavender chủ đạo) thay cho bảng màu preset Editorial
- Đúng 4 trang theo BA; thông tin liên hệ đặt trong About (Contact & Visit), đặt lịch là modal dùng chung
- Thư viện ảnh (openverse) quá thời gian chờ → toàn bộ ảnh dùng link Unsplash đã kiểm qua link_image
- Mức chuyển động Level 1: chỉ data-reveal fade/up, header thu gọn, hover

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1560264641-1b5191cc63e2?w=1000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?w=1000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1598897506620-c6601b3c2f12?w=1000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1622418131139-8549767c2670?w=900&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1628126929453-b519555aaabf?w=900&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1599148200256-649e98444ef2?w=900&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1781450090585-1a511b7066d9?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1758315949140-1972ace0644e?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1622418131139-8549767c2670?w=900&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1628126929453-b519555aaabf?w=900&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Nút Book a Visit mở form đặt lịch bản demo, chưa gửi đi (không có backend / lịch thật)
- Giá, thời lượng, địa chỉ, giờ mở cửa, điện thoại, email, hồ sơ stylist là dữ liệu mẫu minh họa
- Liên kết mạng xã hội trỏ tới trang chủ của mạng xã hội, chưa có tài khoản thật
- Ảnh dùng link ngoài (Unsplash); cần ảnh thật của salon khi triển khai
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
