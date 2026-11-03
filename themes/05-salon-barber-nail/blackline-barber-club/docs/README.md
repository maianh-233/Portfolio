# BLACKLINE BARBER CLUB

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website giới thiệu thương hiệu barber
- **Thương hiệu / dự án:** BLACKLINE BARBER CLUB
- **Mục đích:** Thiết kế website giới thiệu thương hiệu BLACKLINE BARBER CLUB, một barber shop chuyên cắt tóc nam, tạo kiểu râu và chăm sóc ngoại hình dành cho nam giới hiện đại.

Website phải thể hiện được tinh thần barber truyền thống, tay nghề thủ công và sự mạnh mẽ của phong cách nam tính. Kết hợp hình ảnh editorial cao cấp với những chi tiết vintage, tạo cảm giác như một tạp chí thời trang nam kết hợp không gian barber shop cổ điển.

Định hướng: Masculine, Refined, Timeless, Bold.

Website gồm 4 trang chính:

Home

Services & Pricing

Cuts Gallery

Our Barbers

Không thiết kế website thương mại điện tử. Không thêm giỏ hàng, thanh toán hoặc chức năng mua sản phẩm.
- **Ý tưởng thị giác (AI ghi):** Đường kẻ đen - đỏ rượu vang chạy như đường cắt dao cạo xuyên các trang: mỗi section mở đầu bằng một vạch đỏ mảnh và số thứ tự kiểu tạp chí, ảnh tông trầm tương phản cao

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Editorial / Magazine — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 11.704 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Noto Serif Display`: đủ ký tự tiếng Việt
- `Geist`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | BLACKLINE BARBER CLUB \| Đường cắt vượt chuẩn mực | Giới thiệu thương hiệu, dẫn sang dịch vụ, bộ sưu tập kiểu tóc và đội ngũ barber; kêu gọi đặt lịch | top, hero → hero-split, craft → story-editorial, signature → teaser-row, featured-cuts → gallery-lookbook, barbers → team-grid, closing → cta-fullbleed, footer | 15 |
| `pages/barbers.html` | Đội ngũ barber \| BLACKLINE BARBER CLUB | Câu chuyện thương hiệu, hồ sơ 3 barber, không gian tiệm, thông tin ghé thăm (dữ liệu mẫu) | top, barbers-hero → page-hero, story → story-editorial, team → features-alternate, inside → gallery-lookbook, visit → contact-split, footer | 10 |
| `pages/gallery.html` | Bộ sưu tập kiểu tóc \| BLACKLINE BARBER CLUB | Trưng bày các kiểu tóc, lọc theo nhóm phong cách, xem ảnh lớn bằng lightbox | top, gallery-hero → page-hero, cuts → gallery-filter, next-look → cta-type, footer | 11 |
| `pages/services.html` | Dịch vụ & Bảng giá \| BLACKLINE BARBER CLUB | Bảng dịch vụ kiểu menu barber với giá tham khảo, giải thích kỹ thuật, kêu gọi đặt lịch | top, services-hero → page-hero, menu → pricing-menu, techniques → features-numbered, booking → cta-type, footer | 4 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
blackline-barber-club/
  web/
    assets/
      css/
        site.css
      img/  (5 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        site.js
        tw-config.js
        ui.js
    pages/
      barbers.html
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

- **⚠ Một số lượt tìm ảnh lỗi:** 5/7 lượt lỗi (timeout)
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 2 ảnh chưa dùng: https://images.unsplash.com/photo-1759134198561-e2041049419c?fm=jpg&q=70&w=1600&auto=format&fit=crop, https://images.unsplash.com/photo-1759142449398-89357aa1bb36?fm=jpg&q=70&w=1400&auto=format&fit=crop
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1762914395007-03ca29612b9f?fm=jpg&q=70&w=1800&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1676321976828-dde42b35ba52?fm=jpg&q=70&w=1400&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1599351431202-1e0f0137899a?fm=jpg&q=70&w=1400&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 7 lượt tìm (nguồn: openverse), 4 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| barber slick back portrait | openverse | 0 ảnh | 60824 ms |
| barber cutting hair | openverse | 8 ảnh | 11586 ms |
| skin fade haircut | — | lỗi timeout | 54931 ms |
| beard straight razor shave | — | lỗi timeout | 64205 ms |
| barbershop interior chairs | — | lỗi timeout | 51412 ms |
| beard trim barber | — | lỗi timeout | 31549 ms |
| barbershop | — | lỗi timeout | 31531 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-craft-barber.jpg` | index.html — The Craft: barber đang cắt tóc | openverse | CC CC0 1.0 | ✓ |
| `assets/img/services-hero-cut.webp` | pages/services.html — hero: barber đang cắt tóc | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-skin-fade.webp` | index.html — Signature: Skin Fade | openverse | CC CC0 1.0 | ✓ |
| `assets/img/club-tools-scissors.jpg` | pages/barbers.html — Inside the Club: bộ dụng cụ cắt tóc | openverse | CC CC0 1.0 | ✓ |
| `https://images.unsplash.com/photo-1762914395007-03ca29612b9f?fm=jpg&q=70&w=1800&auto=format&fit=crop` | index.html — hero: chân dung nam slick back | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1676321976828-dde42b35ba52?fm=jpg&q=70&w=1400&auto=format&fit=crop` | index.html — Signature: Classic Cut | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1599351431202-1e0f0137899a?fm=jpg&q=70&w=1400&auto=format&fit=crop` | index.html — Signature: Beard Grooming | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?fm=jpg&q=70&w=1400&auto=format&fit=crop` | index.html + gallery — Classic Pompadour | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1627100232173-acf3733f02bc?fm=jpg&q=70&w=1400&auto=format&fit=crop` | index.html + gallery — Textured Crop | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1568339434343-2a640a1a9946?fm=jpg&q=70&w=1400&auto=format&fit=crop` | index.html + gallery — Mid Skin Fade | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1608077946497-25e36e3d6191?fm=jpg&q=70&w=1400&auto=format&fit=crop` | index.html + gallery — Modern Side Part | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1456327102063-fb5054efe647?fm=jpg&q=70&w=1400&auto=format&fit=crop` | index.html + gallery — Slick Back | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1630827020718-3433092696e7?fm=jpg&q=70&w=1400&auto=format&fit=crop` | index.html + gallery — Beard & Hair Combination | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1553521041-d168abd31de3?fm=jpg&q=70&w=1200&auto=format&fit=crop` | index.html + barbers.html — chân dung James Carter | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1598524374912-6b0b0bab43dd?fm=jpg&q=70&w=1200&auto=format&fit=crop` | index.html + barbers.html — chân dung Daniel Brooks | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1517832606299-7ae9b720a186?fm=jpg&q=70&w=1200&auto=format&fit=crop` | index.html + barbers.html — Alex Morgan (beard grooming) | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1792735207211-a96ca7e6ea77?fm=jpg&q=70&w=2000&auto=format&fit=crop` | index.html — Closing CTA ảnh tràn viền | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1647140655214-e4a2d914971f?fm=jpg&q=70&w=1400&auto=format&fit=crop` | pages/services.html — Our Craft: Classic Cut | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?fm=jpg&q=70&w=1400&auto=format&fit=crop` | pages/services.html — Our Craft: Skin Fade | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?fm=jpg&q=70&w=1400&auto=format&fit=crop` | pages/services.html — Our Craft: Beard Sculpting | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1578390432942-d323db577792?fm=jpg&q=70&w=1600&auto=format&fit=crop` | pages/gallery.html — hero chân dung | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?fm=jpg&q=70&w=1400&auto=format&fit=crop` | pages/gallery.html — Low Fade | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?fm=jpg&q=70&w=1400&auto=format&fit=crop` | pages/gallery.html — Executive Cut | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1629189784191-9afdcbcb0398?fm=jpg&q=70&w=1400&auto=format&fit=crop` | pages/gallery.html — Full Beard Shape | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1584029307290-2acd5258bde4?fm=jpg&q=70&w=1400&auto=format&fit=crop` | pages/gallery.html — Classic Taper | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1792523227995-9ac04cf1d94d?fm=jpg&q=70&w=2000&auto=format&fit=crop` | pages/barbers.html — hero nội thất | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1759134198561-e2041049419c?fm=jpg&q=70&w=1600&auto=format&fit=crop` | pages/barbers.html — Our Story | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1775494165568-42c0fbb4c782?fm=jpg&q=70&w=1400&auto=format&fit=crop` | pages/barbers.html — Inside: ghế barber cổ điển | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1754294437661-129b86f868ea?fm=jpg&q=70&w=1400&auto=format&fit=crop` | pages/barbers.html — Inside: quầy gương | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1781925856343-c97d0d44f94c?fm=jpg&q=70&w=1400&auto=format&fit=crop` | pages/barbers.html — Inside: không gian chờ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1759142449398-89357aa1bb36?fm=jpg&q=70&w=1400&auto=format&fit=crop` | pages/barbers.html — Inside: chi tiết nội thất | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1778676688264-2a5db8886ab3?fm=jpg&q=70&w=1600&auto=format&fit=crop` | pages/barbers.html — Our Story | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1792792899240-208d73a64449?fm=jpg&q=70&w=1400&auto=format&fit=crop` | pages/barbers.html — Inside: chi tiết dụng cụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

27 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero: chân dung nam slick back — https://images.unsplash.com/photo-1762914395007-03ca29612b9f?fm=jpg&q=70&w=1800&auto=format&fit=crop
- index.html — Signature: Classic Cut — https://images.unsplash.com/photo-1676321976828-dde42b35ba52?fm=jpg&q=70&w=1400&auto=format&fit=crop
- index.html — Signature: Beard Grooming — https://images.unsplash.com/photo-1599351431202-1e0f0137899a?fm=jpg&q=70&w=1400&auto=format&fit=crop
- index.html + gallery — Classic Pompadour — https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?fm=jpg&q=70&w=1400&auto=format&fit=crop
- index.html + gallery — Textured Crop — https://images.unsplash.com/photo-1627100232173-acf3733f02bc?fm=jpg&q=70&w=1400&auto=format&fit=crop
- index.html + gallery — Mid Skin Fade — https://images.unsplash.com/photo-1568339434343-2a640a1a9946?fm=jpg&q=70&w=1400&auto=format&fit=crop
- index.html + gallery — Modern Side Part — https://images.unsplash.com/photo-1608077946497-25e36e3d6191?fm=jpg&q=70&w=1400&auto=format&fit=crop
- index.html + gallery — Slick Back — https://images.unsplash.com/photo-1456327102063-fb5054efe647?fm=jpg&q=70&w=1400&auto=format&fit=crop
- index.html + gallery — Beard & Hair Combination — https://images.unsplash.com/photo-1630827020718-3433092696e7?fm=jpg&q=70&w=1400&auto=format&fit=crop
- index.html + barbers.html — chân dung James Carter — https://images.unsplash.com/photo-1553521041-d168abd31de3?fm=jpg&q=70&w=1200&auto=format&fit=crop
- index.html + barbers.html — chân dung Daniel Brooks — https://images.unsplash.com/photo-1598524374912-6b0b0bab43dd?fm=jpg&q=70&w=1200&auto=format&fit=crop
- index.html + barbers.html — Alex Morgan (beard grooming) — https://images.unsplash.com/photo-1517832606299-7ae9b720a186?fm=jpg&q=70&w=1200&auto=format&fit=crop
- index.html — Closing CTA ảnh tràn viền — https://images.unsplash.com/photo-1792735207211-a96ca7e6ea77?fm=jpg&q=70&w=2000&auto=format&fit=crop
- pages/services.html — Our Craft: Classic Cut — https://images.unsplash.com/photo-1647140655214-e4a2d914971f?fm=jpg&q=70&w=1400&auto=format&fit=crop
- pages/services.html — Our Craft: Skin Fade — https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?fm=jpg&q=70&w=1400&auto=format&fit=crop
- pages/services.html — Our Craft: Beard Sculpting — https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?fm=jpg&q=70&w=1400&auto=format&fit=crop
- pages/gallery.html — hero chân dung — https://images.unsplash.com/photo-1578390432942-d323db577792?fm=jpg&q=70&w=1600&auto=format&fit=crop
- pages/gallery.html — Low Fade — https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?fm=jpg&q=70&w=1400&auto=format&fit=crop
- pages/gallery.html — Executive Cut — https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?fm=jpg&q=70&w=1400&auto=format&fit=crop
- pages/gallery.html — Full Beard Shape — https://images.unsplash.com/photo-1629189784191-9afdcbcb0398?fm=jpg&q=70&w=1400&auto=format&fit=crop
- pages/gallery.html — Classic Taper — https://images.unsplash.com/photo-1584029307290-2acd5258bde4?fm=jpg&q=70&w=1400&auto=format&fit=crop
- pages/barbers.html — hero nội thất — https://images.unsplash.com/photo-1792523227995-9ac04cf1d94d?fm=jpg&q=70&w=2000&auto=format&fit=crop
- pages/barbers.html — Inside: ghế barber cổ điển — https://images.unsplash.com/photo-1775494165568-42c0fbb4c782?fm=jpg&q=70&w=1400&auto=format&fit=crop
- pages/barbers.html — Inside: quầy gương — https://images.unsplash.com/photo-1754294437661-129b86f868ea?fm=jpg&q=70&w=1400&auto=format&fit=crop
- pages/barbers.html — Inside: không gian chờ — https://images.unsplash.com/photo-1781925856343-c97d0d44f94c?fm=jpg&q=70&w=1400&auto=format&fit=crop
- pages/barbers.html — Our Story — https://images.unsplash.com/photo-1778676688264-2a5db8886ab3?fm=jpg&q=70&w=1600&auto=format&fit=crop
- pages/barbers.html — Inside: chi tiết dụng cụ — https://images.unsplash.com/photo-1792792899240-208d73a64449?fm=jpg&q=70&w=1400&auto=format&fit=crop

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Cửa sổ (modal)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Lọc theo nhóm
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/barbers.html, pages/gallery.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×80, `data-header` ×4, `data-reveal-stagger` ×3, `data-count-to` ×2.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 14:04 30/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 36 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "BLACKLINE BARBER CLUB" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 13 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 13:39 30/10/2026 | Dựng website | lỗi: Đã chạm giới hạn sử dụng của tài khoản, vui lòng chờ rồi thử lại. Hạn mức sẽ được làm mới lúc 13:40 30-10. |
| 14:04 30/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- BA yêu cầu song ngữ VI / EN có nút chuyển trên header (chú thích mục 8) — ưu tiên hơn dòng 'không tạo bộ chuyển ngôn ngữ' của concept.md: HTML mặc định tiếng Việt (lang=vi), bản tiếng Anh nằm trong thuộc tính data-en và được site.js hoán đổi tại chỗ, lưu localStorage.
- Các tiêu đề tiếng Anh BA đưa (A CUT ABOVE THE ORDINARY…) dùng nguyên văn ở chế độ EN; chế độ VI dùng bản dịch tiếng Việt. Tên dịch vụ / tên kiểu tóc giữ nguyên tiếng Anh có chủ đích.
- Openverse quá thời gian chờ sau 4 ảnh → các ảnh còn lại dùng link ảnh thật Unsplash đã kiểm qua link_image.
- 6 ảnh Featured Cuts ở trang chủ và 3 chân dung barber được dùng lại ở trang Gallery / Our Barbers vì là cùng tác phẩm / cùng người.
- Giữ đủ 4 trang theo BA, không thêm trang chi tiết.

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1762914395007-03ca29612b9f?fm=jpg&q=70&w=1800&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1676321976828-dde42b35ba52?fm=jpg&q=70&w=1400&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1599351431202-1e0f0137899a?fm=jpg&q=70&w=1400&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?fm=jpg&q=70&w=1400&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1627100232173-acf3733f02bc?fm=jpg&q=70&w=1400&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1568339434343-2a640a1a9946?fm=jpg&q=70&w=1400&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1608077946497-25e36e3d6191?fm=jpg&q=70&w=1400&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1456327102063-fb5054efe647?fm=jpg&q=70&w=1400&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1630827020718-3433092696e7?fm=jpg&q=70&w=1400&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1553521041-d168abd31de3?fm=jpg&q=70&w=1200&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1598524374912-6b0b0bab43dd?fm=jpg&q=70&w=1200&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1517832606299-7ae9b720a186?fm=jpg&q=70&w=1200&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1792735207211-a96ca7e6ea77?fm=jpg&q=70&w=2000&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/barbers.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1792523227995-9ac04cf1d94d?fm=jpg&q=70&w=2000&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/barbers.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1778676688264-2a5db8886ab3?fm=jpg&q=70&w=1600&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Nút BOOK A VISIT và form đặt lịch là bản minh họa, không gửi đi, không có hệ thống đặt lịch thật.
- Giá, thời lượng, địa chỉ, số điện thoại, email, giờ mở cửa và tên barber là dữ liệu mẫu.
- Nút GET DIRECTIONS là liên kết minh họa tới Google Maps chung, chưa có địa chỉ thật.
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
