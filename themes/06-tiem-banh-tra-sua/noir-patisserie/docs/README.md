# NOIR PATISSERIE

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website giới thiệu thương hiệu trà sữa và bánh ngọt
- **Thương hiệu / dự án:** NOIR PATISSERIE
- **Mục đích:** Tạo website giới thiệu NOIR PATISSERIE, thương hiệu bánh ngọt cao cấp lấy cảm hứng từ nghệ thuật làm bánh Pháp. Cảm giác cần đạt được: tinh tế, đắt giá, trưởng thành và có tính biên tập. Không sử dụng phong cách dễ thương hoặc các thẻ bo tròn kiểu ứng dụng.
- **Ý tưởng thị giác (AI ghi):** Tạp chí ẩm thực in trên nền đen: ảnh bánh cận cảnh tương phản mạnh như ảnh studio, đường kẻ 1px chia lưới 12 cột và số thứ tự nhỏ No. 01 màu champagne chạy xuyên mọi trang, kết trang bằng wordmark khổng lồ như bìa sau tạp chí

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Minimal / Premium / Editorial — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 1.944 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: đủ ký tự tiếng Anh
- `Geist`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | NOIR PATISSERIE — The Art of Fine Pâtisserie | Giới thiệu thương hiệu, 3 món signature, tinh thần chế tác và không gian tiệm; dẫn sang The Collection và About | top, hero → hero-split, manifesto → quote-full, signature → teaser-row, craft → story-editorial, salon → gallery-filmstrip, visit → cta-type, footer | 10 |
| `pages/about.html` | About — NOIR PATISSERIE | Câu chuyện thương hiệu dạng tạp chí, ba trụ cột: nguyên liệu, kỹ thuật, cảm hứng; dải ảnh kết cấu bánh và không gian | top, page-hero → page-hero, story → story-editorial, pillars → features-numbered, textures → gallery-lookbook, chef-quote → quote-full, visit → cta-type, footer | 6 |
| `pages/collection.html` | The Collection — NOIR PATISSERIE | Trình bày các dòng bánh theo 4 nhóm, chỉ tên, mô tả nguyên liệu/hương vị và ảnh; không giá, không nút mua | top, page-hero → page-hero, signature-cakes → features-alternate, chocolate-entremets → gallery-lookbook, macarons → features-alternate, french-pastries → gallery-lookbook, visit → cta-type, footer | 13 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
noir-patisserie/
  web/
    assets/
      css/
        site.css
      img/  (8 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        site.js
        tw-config.js
        ui.js
    pages/
      about.html
      collection.html
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
- **⚠ Một số lượt tìm ảnh lỗi:** 3/8 lượt lỗi (timeout)
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 4 ảnh chưa dùng: assets/img/home-salon-counter.jpg, https://images.unsplash.com/photo-1754652327575-92ff6d5bde32?w=1200&q=80&auto=format&fit=crop, https://images.unsplash.com/photo-1785960160436-242768ecc23a?w=1800&q=80&auto=format&fit=crop, https://images.unsplash.com/photo-1759146233677-292a2f1a2236?w=1200&q=80&auto=format&fit=crop
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1761315631665-cf6220061f20?w=1800&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1458253756247-1e4ed949191b?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1771556621626-353ce8ecb5e9?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 8 lượt tìm (nguồn: openverse), 7 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| chocolate entremet cake | openverse | 0 ảnh | 27310 ms |
| macarons close up | — | lỗi timeout | 36258 ms |
| fruit tart pastry | — | lỗi timeout | 31525 ms |
| pastry chef piping cream | openverse | 5 ảnh | 38293 ms |
| patisserie shop interior | openverse | 16 ảnh | 52828 ms |
| macaron pastel dessert | — | lỗi timeout | 51943 ms |
| chocolate cake dessert | openverse | 20 ảnh | 16849 ms |
| fruit tart | openverse | 15 ảnh | 19685 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-chocolate-cake.webp` | index.html — hero, bánh signature chocolate | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-signature-chocolate-slice.jpg` | index.html — Signature Creations món 1 | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-signature-fruit-tart.webp` | index.html — Signature Creations món 2 | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-craft-plating.jpg` | index.html — editorial quy trình chế tác | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-salon-window.jpg` | index.html — gallery không gian tiệm 1 | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/home-salon-counter.jpg` | index.html — gallery không gian tiệm 2 | openverse | CC BY 2.0 | ✗ |
| `https://images.unsplash.com/photo-1761315631665-cf6220061f20?w=1800&q=80&auto=format&fit=crop` | index.html — hero bánh signature | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1754652327575-92ff6d5bde32?w=1200&q=80&auto=format&fit=crop` | index.html — Signature Creations: Noir Absolu | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1771556621626-353ce8ecb5e9?w=1200&q=80&auto=format&fit=crop` | index.html — Signature Creations: tart | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1676080801076-21406293720a?w=1200&q=80&auto=format&fit=crop` | index.html — Signature Creations: macaron | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1769596717694-dc2a0a55e5d3?w=1600&q=80&auto=format&fit=crop` | index.html — editorial quy trình chế tác | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1790156591751-5c3c96e0140f?w=1400&q=80&auto=format&fit=crop` | index.html — gallery không gian tiệm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1726981897420-0778c14deedf?w=1400&q=80&auto=format&fit=crop` | index.html — gallery không gian tiệm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1765045038226-43d7cd5cfd29?w=1400&q=80&auto=format&fit=crop` | index.html — gallery không gian tiệm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=1400&q=80&auto=format&fit=crop` | index.html — gallery không gian tiệm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `assets/img/home-salon-counter.webp` | pages/about.html — dải ảnh kết cấu: bột bánh (ghi đè ảnh có logo thương hiệu khác) | openverse | CC CC0 1.0 | ✓ |
| `https://images.unsplash.com/photo-1761637604893-f049f46d2bcd?w=1800&q=80&auto=format&fit=crop` | pages/collection.html — Signature Cakes ảnh ngang lớn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1761637604927-e3656dc81383?w=1200&q=80&auto=format&fit=crop` | pages/collection.html — Signature Cakes lưới | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1785960160436-242768ecc23a?w=1800&q=80&auto=format&fit=crop` | pages/collection.html — Chocolate & Entremets ảnh lớn | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1768326119181-5f3cfe0adb4c?w=1200&q=80&auto=format&fit=crop` | pages/collection.html — Chocolate & Entremets lưới | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1458253756247-1e4ed949191b?w=1200&q=80&auto=format&fit=crop` | pages/collection.html — Chocolate & Entremets lưới | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1519665541-b13188b28be9?w=1800&q=80&auto=format&fit=crop` | pages/collection.html — Macarons ảnh lớn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1697607448688-c5ca9f87e79f?w=1200&q=80&auto=format&fit=crop` | pages/collection.html — Macarons lưới | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1680814773994-0a1db34abe9a?w=1200&q=80&auto=format&fit=crop` | pages/collection.html — Macarons lưới | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1785695797215-4345de8ab06c?w=1800&q=80&auto=format&fit=crop` | pages/collection.html — French Pastries ảnh lớn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1623334044303-241021148842?w=1200&q=80&auto=format&fit=crop` | pages/collection.html — French Pastries lưới | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1775513153018-0c7ac7899751?w=1800&q=80&auto=format&fit=crop` | pages/about.html — hero nghệ nhân | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1548741448-9f4e87b7f7ab?w=1200&q=80&auto=format&fit=crop` | pages/about.html — dải ảnh kết cấu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1597528662465-55ece5734101?w=1200&q=80&auto=format&fit=crop` | pages/about.html — dải ảnh kết cấu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1702313040416-94afddd01d79?w=1200&q=80&auto=format&fit=crop` | pages/about.html — dải ảnh kết cấu / không gian | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1759146233677-292a2f1a2236?w=1200&q=80&auto=format&fit=crop` | pages/collection.html — Chocolate & Entremets lưới | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1766734974600-b6ea9a40a03a?w=1200&q=80&auto=format&fit=crop` | pages/collection.html — Chocolate & Entremets lưới (thay ảnh nền trắng) | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

22 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero bánh signature — https://images.unsplash.com/photo-1761315631665-cf6220061f20?w=1800&q=80&auto=format&fit=crop
- index.html — Signature Creations: tart — https://images.unsplash.com/photo-1771556621626-353ce8ecb5e9?w=1200&q=80&auto=format&fit=crop
- index.html — Signature Creations: macaron — https://images.unsplash.com/photo-1676080801076-21406293720a?w=1200&q=80&auto=format&fit=crop
- index.html — editorial quy trình chế tác — https://images.unsplash.com/photo-1769596717694-dc2a0a55e5d3?w=1600&q=80&auto=format&fit=crop
- index.html — gallery không gian tiệm — https://images.unsplash.com/photo-1790156591751-5c3c96e0140f?w=1400&q=80&auto=format&fit=crop
- index.html — gallery không gian tiệm — https://images.unsplash.com/photo-1726981897420-0778c14deedf?w=1400&q=80&auto=format&fit=crop
- index.html — gallery không gian tiệm — https://images.unsplash.com/photo-1765045038226-43d7cd5cfd29?w=1400&q=80&auto=format&fit=crop
- index.html — gallery không gian tiệm — https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=1400&q=80&auto=format&fit=crop
- pages/collection.html — Signature Cakes ảnh ngang lớn — https://images.unsplash.com/photo-1761637604893-f049f46d2bcd?w=1800&q=80&auto=format&fit=crop
- pages/collection.html — Signature Cakes lưới — https://images.unsplash.com/photo-1761637604927-e3656dc81383?w=1200&q=80&auto=format&fit=crop
- pages/collection.html — Chocolate & Entremets lưới — https://images.unsplash.com/photo-1768326119181-5f3cfe0adb4c?w=1200&q=80&auto=format&fit=crop
- pages/collection.html — Chocolate & Entremets lưới — https://images.unsplash.com/photo-1458253756247-1e4ed949191b?w=1200&q=80&auto=format&fit=crop
- pages/collection.html — Macarons ảnh lớn — https://images.unsplash.com/photo-1519665541-b13188b28be9?w=1800&q=80&auto=format&fit=crop
- pages/collection.html — Macarons lưới — https://images.unsplash.com/photo-1697607448688-c5ca9f87e79f?w=1200&q=80&auto=format&fit=crop
- pages/collection.html — Macarons lưới — https://images.unsplash.com/photo-1680814773994-0a1db34abe9a?w=1200&q=80&auto=format&fit=crop
- pages/collection.html — French Pastries ảnh lớn — https://images.unsplash.com/photo-1785695797215-4345de8ab06c?w=1800&q=80&auto=format&fit=crop
- pages/collection.html — French Pastries lưới — https://images.unsplash.com/photo-1623334044303-241021148842?w=1200&q=80&auto=format&fit=crop
- pages/about.html — hero nghệ nhân — https://images.unsplash.com/photo-1775513153018-0c7ac7899751?w=1800&q=80&auto=format&fit=crop
- pages/about.html — dải ảnh kết cấu — https://images.unsplash.com/photo-1548741448-9f4e87b7f7ab?w=1200&q=80&auto=format&fit=crop
- pages/about.html — dải ảnh kết cấu — https://images.unsplash.com/photo-1597528662465-55ece5734101?w=1200&q=80&auto=format&fit=crop
- pages/about.html — dải ảnh kết cấu / không gian — https://images.unsplash.com/photo-1702313040416-94afddd01d79?w=1200&q=80&auto=format&fit=crop
- pages/collection.html — Chocolate & Entremets lưới (thay ảnh nền trắng) — https://images.unsplash.com/photo-1766734974600-b6ea9a40a03a?w=1200&q=80&auto=format&fit=crop

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Sao chép nhanh (số điện thoại / email)
- Accordion (mở / đóng nội dung)
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/collection.html).
- Chuyển động (đếm trong code): `data-reveal` ×63, `data-header` ×3.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:31 22/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 23 cần sửa, 2 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "NOIR PATISSERIE" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 19 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 11:23 22/10/2026 | Dựng website | xong |
| 11:31 22/10/2026 | Sửa: Bạn thiếu mode tiếng việt nữa chuyển qua tiếng anh và tiếng việt . Hãy chọn font chữ không lỗi tiếng việt nhưng vẫn phù  | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Giới hạn 3 trang (Home, The Collection, About) theo chú thích của BA: không có trang Contact riêng, thông tin liên hệ nằm ở khối Visit và footer
- Theo góp ý của BA: thêm bộ chuyển ngôn ngữ EN / VI ở header mọi trang (assets/js/site.js — HTML viết tiếng Anh, bản tiếng Việt lấy từ từ điển; dịch cả title, meta description, alt, chú thích ảnh, địa chỉ sao chép; lưu lựa chọn trong localStorage, hỗ trợ ?lang=vi). Mặc định vẫn là tiếng Anh
- Đổi font sang Cormorant Garamond (tiêu đề) + Be Vietnam Pro (nội dung) — đủ dấu tiếng Việt, giữ tinh thần serif tạp chí cao cấp; Instrument Serif và Geist không hỗ trợ tiếng Việt
- Hero dùng bố cục tách đôi (ảnh ~62% bên phải) theo mô tả của BA thay cho hero-type của preset
- Màu dùng bảng màu BA (#171615, #24211E, #F2EEE6, #C4A574, #B7AEA2) gán vào đúng tên màu của preset (ink, stone, paper, bronze, muted)
- CTA trang chủ viết tiếng Anh 'Explore the collection' theo ngôn ngữ website
- Openverse chậm / thiếu ảnh tông tối nên phần lớn ảnh dùng link Unsplash đã kiểm qua link_image; assets/img/home-salon-counter.jpg (có logo thương hiệu khác) không dùng

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1761315631665-cf6220061f20?w=1800&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1458253756247-1e4ed949191b?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1771556621626-353ce8ecb5e9?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1676080801076-21406293720a?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1769596717694-dc2a0a55e5d3?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1790156591751-5c3c96e0140f?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1726981897420-0778c14deedf?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1765045038226-43d7cd5cfd29?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1775513153018-0c7ac7899751?w=1800&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1597528662465-55ece5734101?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1548741448-9f4e87b7f7ab?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1702313040416-94afddd01d79?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/collection.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1761637604893-f049f46d2bcd?w=1800&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/collection.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1761637604927-e3656dc81383?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Không có giỏ hàng, đặt bánh, form hay giao dịch theo ràng buộc của BA
- Địa chỉ, số điện thoại, giờ mở cửa, tên món, tên bếp trưởng là nội dung mẫu cần khách xác nhận
- Ảnh dùng link ngoài (Unsplash) cần thay bằng ảnh thật của tiệm trước khi chạy chính thức
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
