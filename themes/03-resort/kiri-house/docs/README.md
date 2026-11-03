# KIRI HOUSE

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Thương hiệu / dự án:** KIRI HOUSE
- **Mục đích:** Thiết kế website giới thiệu KIRI HOUSE, một resort nghỉ dưỡng cao cấp lấy cảm hứng từ kiến trúc Nhật Bản đương đại, vườn thiền và triết lý sống tối giản.

Website cần truyền tải cảm giác tĩnh tại, sâu lắng, riêng tư và giàu tính văn hóa. Vẻ đẹp đến từ sự cân bằng giữa kiến trúc, thiên nhiên, ánh sáng và vật liệu, thay vì những chi tiết trang trí cầu kỳ.

Định hướng: Japanese Zen Minimalism kết hợp Contemporary Ryokan — tối giản Nhật Bản, sang trọng tinh tế và gần gũi với thiên nhiên.

Không sử dụng hình ảnh anime, manga, đèn lồng trang trí đại trà, hoa anh đào xuất hiện dày đặc hoặc phong cách Nhật Bản thương mại hóa
- **Ý tưởng thị giác (AI ghi):** Khung cửa trượt shoji: ảnh được đóng trong khung kẻ mảnh như ô cửa, lưới tỷ lệ chiếu tatami bất đối xứng, đường kẻ mảnh màu gỗ tuyết tùng nối các trang

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Nature / Organic / Atmospheric — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 11.230 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Fraunces`: đủ ký tự tiếng Việt
- `Manrope`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | KIRI HOUSE — Nghệ thuật sống tĩnh lặng | Tạo cảm giác tĩnh lặng ngay lần đầu, giới thiệu triết lý, kiến trúc, ba loại hình lưu trú, tiện ích và ba giá trị; dẫn sang Lưu trú và Trải nghiệm | top, hero → hero-cinematic, philosophy → story-letter, architecture → gallery-lookbook, stays → teaser-row, amenities → features-tabs, values → features-numbered, closing → cta-type, footer | 12 |
| `pages/about.html` | Giới thiệu — KIRI HOUSE | Kể triết lý không gian, kiến trúc và vật liệu, triết lý hiếu khách; dẫn sang Lưu trú | top, about-hero → page-hero, story → story-editorial, materials → gallery-filmstrip, hospitality → features-numbered, gallery → gallery-lookbook, about-cta → cta-type, footer | 11 |
| `pages/experiences.html` | Trải nghiệm — KIRI HOUSE | Giới thiệu trà đạo, thiền và vườn thiền, ẩm thực theo mùa, chăm sóc bản thân, khám phá văn hóa; không đặt lịch | top, exp-hero → hero-scene, tea → story-letter, meditation → gallery-lookbook, dining → features-alternate, wellness → features-bento, culture → quote-full, exp-gallery → gallery-masonry, exp-cta → cta-type, footer | 10 |
| `pages/stays.html` | Lưu trú — KIRI HOUSE | Giới thiệu Japanese Suite, Garden Villa, Signature Residence, tiện ích và chi tiết kiến trúc; không giá, không đặt phòng | top, stays-hero → page-hero, suite → features-alternate, villa → features-alternate, residence → features-bento, facilities → features-bento, details → gallery-masonry, stays-cta → cta-type, footer | 15 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
kiri-house/
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

- **⚠ Dịch vụ ảnh không khả dụng:** Kiểm tra trước khi dựng: openverse trả về 403
- **⚠ Tool tìm ảnh trả lỗi:** auth: openverse trả về 403
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 2 ảnh chưa dùng: https://images.unsplash.com/photo-1773226145675-8a30ece4a529?auto=format&fit=crop&w=1800&q=70, https://images.unsplash.com/photo-1572626664676-d1b6c329692c?auto=format&fit=crop&w=1200&q=70
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1759310706740-e486ec5622c9?auto=format&fit=crop&w=2000&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1572186891466-4bbfec8838dc?auto=format&fit=crop&w=1400&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1490713575234-cbe010982904?auto=format&fit=crop&w=1400&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 1 lượt tìm (nguồn: —), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| japanese ryokan garden view | — | lỗi auth | 1 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://images.unsplash.com/photo-1759310706740-e486ec5622c9?auto=format&fit=crop&w=2000&q=70` | index.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1572186891466-4bbfec8838dc?auto=format&fit=crop&w=1400&q=70` | index.html — triết lý, chi tiết gỗ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1773226145675-8a30ece4a529?auto=format&fit=crop&w=1800&q=70` | index.html — kiến trúc & thiên nhiên, ảnh lớn | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1572626664676-d1b6c329692c?auto=format&fit=crop&w=1200&q=70` | index.html — kiến trúc & thiên nhiên, ảnh chi tiết | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1496113329550-ce8886d06d54?auto=format&fit=crop&w=1400&q=70` | index.html — lưu trú, Japanese Suite | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1490713575234-cbe010982904?auto=format&fit=crop&w=1400&q=70` | index.html — lưu trú, Garden Villa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1760301719767-5574393ea437?auto=format&fit=crop&w=1600&q=70` | index.html — lưu trú, Signature Residence | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1762876244984-f9d493cf4aa1?auto=format&fit=crop&w=1400&q=70` | index.html — tiện ích, Zen Garden | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?auto=format&fit=crop&w=1200&q=70` | index.html — tiện ích, Tea House | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1786343453481-3e53d1aa7108?auto=format&fit=crop&w=1200&q=70` | index.html — tiện ích, Wellness Spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1766582931800-fd79665257fa?auto=format&fit=crop&w=1200&q=70` | index.html — tiện ích, Seasonal Dining | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1635934962593-2bb931058a71?auto=format&fit=crop&w=1400&q=70` | index.html — tiện ích, Quiet Water Garden | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1580873317794-1e8b7816efbb?auto=format&fit=crop&w=1400&q=70` | index.html — triết lý KIRI HOUSE | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1714070704786-8137952f7b84?auto=format&fit=crop&w=2000&q=70` | pages/about.html — hero hành lang gỗ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1785641891392-780f6ff76c04?auto=format&fit=crop&w=1400&q=70` | pages/about.html — câu chuyện thương hiệu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1610333684078-c89bd57f2e46?auto=format&fit=crop&w=1400&q=70` | pages/about.html — vật liệu: gỗ tự nhiên | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1572177496244-bc5824e820f0?auto=format&fit=crop&w=1200&q=70` | pages/about.html — vật liệu: cửa trượt | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1605931564352-5d216e28f0f1?auto=format&fit=crop&w=1200&q=70` | pages/about.html — vật liệu: đá, rêu, nước | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1745813083487-455c70e15557?auto=format&fit=crop&w=1200&q=70` | pages/about.html — vật liệu: ánh sáng | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1672599871583-c7fa8c5bcc8a?auto=format&fit=crop&w=1400&q=70` | pages/about.html — không gian chuyển tiếp | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1698239307081-375b3f3da4c0?auto=format&fit=crop&w=1200&q=70` | pages/about.html — gallery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1776439993069-05fbfe3b1a6a?auto=format&fit=crop&w=1400&q=70` | pages/about.html — gallery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1712232907812-4bd219a99a49?auto=format&fit=crop&w=1200&q=70` | pages/about.html — gallery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1785641890997-a578e691bc04?auto=format&fit=crop&w=1200&q=70` | pages/about.html — gallery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1688047974819-a8a680ecc7f8?auto=format&fit=crop&w=1200&q=70` | pages/about.html — gallery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1512972972907-6d71529c5e92?auto=format&fit=crop&w=1200&q=70` | pages/about.html — gallery | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1785641891348-bb5704866af3?auto=format&fit=crop&w=2000&q=70` | pages/stays.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1753552502151-93914d36ecf2?auto=format&fit=crop&w=1600&q=70` | pages/stays.html — Japanese Suite, ảnh lớn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1722510154425-abad1f97b362?auto=format&fit=crop&w=1000&q=70` | pages/stays.html — Japanese Suite, ảnh phụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1788287997368-8b72dd6ce668?auto=format&fit=crop&w=1600&q=70` | pages/stays.html — Garden Villa, ảnh lớn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1693664681816-f7f8422758f0?auto=format&fit=crop&w=1000&q=70` | pages/stays.html — Garden Villa, ảnh phụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1686933021211-19a669f3acb2?auto=format&fit=crop&w=1800&q=70` | pages/stays.html — Signature Residence, ảnh ngang | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1628843481844-23e13541c57c?auto=format&fit=crop&w=1000&q=70` | pages/stays.html — Signature Residence, ảnh dọc chi tiết | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1757507423608-ae47cddef75f?auto=format&fit=crop&w=1200&q=70` | pages/stays.html — tiện ích Tea House | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1669954807964-6e98112a6b86?auto=format&fit=crop&w=1200&q=70` | pages/stays.html — tiện ích Zen Garden | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1785057707873-68aada1c09dd?auto=format&fit=crop&w=1200&q=70` | pages/stays.html — tiện ích Wellness Spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1740982931610-9309b6e88f30?auto=format&fit=crop&w=1200&q=70` | pages/stays.html — tiện ích Seasonal Restaurant | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1719462932338-50922d824392?auto=format&fit=crop&w=1200&q=70` | pages/stays.html — tiện ích Quiet Water Garden | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1757507423552-94e7b4221f7e?auto=format&fit=crop&w=1000&q=70` | pages/stays.html — chi tiết kiến trúc: giấy shoji | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1612014449419-ac12de2f2181?auto=format&fit=crop&w=1000&q=70` | pages/stays.html — chi tiết kiến trúc: gỗ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

38 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero — https://images.unsplash.com/photo-1759310706740-e486ec5622c9?auto=format&fit=crop&w=2000&q=70
- index.html — triết lý, chi tiết gỗ — https://images.unsplash.com/photo-1572186891466-4bbfec8838dc?auto=format&fit=crop&w=1400&q=70
- index.html — lưu trú, Japanese Suite — https://images.unsplash.com/photo-1496113329550-ce8886d06d54?auto=format&fit=crop&w=1400&q=70
- index.html — lưu trú, Garden Villa — https://images.unsplash.com/photo-1490713575234-cbe010982904?auto=format&fit=crop&w=1400&q=70
- index.html — lưu trú, Signature Residence — https://images.unsplash.com/photo-1760301719767-5574393ea437?auto=format&fit=crop&w=1600&q=70
- index.html — tiện ích, Zen Garden — https://images.unsplash.com/photo-1762876244984-f9d493cf4aa1?auto=format&fit=crop&w=1400&q=70
- index.html — tiện ích, Tea House — https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?auto=format&fit=crop&w=1200&q=70
- index.html — tiện ích, Wellness Spa — https://images.unsplash.com/photo-1786343453481-3e53d1aa7108?auto=format&fit=crop&w=1200&q=70
- index.html — tiện ích, Seasonal Dining — https://images.unsplash.com/photo-1766582931800-fd79665257fa?auto=format&fit=crop&w=1200&q=70
- index.html — tiện ích, Quiet Water Garden — https://images.unsplash.com/photo-1635934962593-2bb931058a71?auto=format&fit=crop&w=1400&q=70
- index.html — triết lý KIRI HOUSE — https://images.unsplash.com/photo-1580873317794-1e8b7816efbb?auto=format&fit=crop&w=1400&q=70
- pages/about.html — hero hành lang gỗ — https://images.unsplash.com/photo-1714070704786-8137952f7b84?auto=format&fit=crop&w=2000&q=70
- pages/about.html — câu chuyện thương hiệu — https://images.unsplash.com/photo-1785641891392-780f6ff76c04?auto=format&fit=crop&w=1400&q=70
- pages/about.html — vật liệu: gỗ tự nhiên — https://images.unsplash.com/photo-1610333684078-c89bd57f2e46?auto=format&fit=crop&w=1400&q=70
- pages/about.html — vật liệu: cửa trượt — https://images.unsplash.com/photo-1572177496244-bc5824e820f0?auto=format&fit=crop&w=1200&q=70
- pages/about.html — vật liệu: đá, rêu, nước — https://images.unsplash.com/photo-1605931564352-5d216e28f0f1?auto=format&fit=crop&w=1200&q=70
- pages/about.html — vật liệu: ánh sáng — https://images.unsplash.com/photo-1745813083487-455c70e15557?auto=format&fit=crop&w=1200&q=70
- pages/about.html — không gian chuyển tiếp — https://images.unsplash.com/photo-1672599871583-c7fa8c5bcc8a?auto=format&fit=crop&w=1400&q=70
- pages/about.html — gallery — https://images.unsplash.com/photo-1698239307081-375b3f3da4c0?auto=format&fit=crop&w=1200&q=70
- pages/about.html — gallery — https://images.unsplash.com/photo-1776439993069-05fbfe3b1a6a?auto=format&fit=crop&w=1400&q=70
- pages/about.html — gallery — https://images.unsplash.com/photo-1712232907812-4bd219a99a49?auto=format&fit=crop&w=1200&q=70
- pages/about.html — gallery — https://images.unsplash.com/photo-1785641890997-a578e691bc04?auto=format&fit=crop&w=1200&q=70
- pages/about.html — gallery — https://images.unsplash.com/photo-1688047974819-a8a680ecc7f8?auto=format&fit=crop&w=1200&q=70
- pages/about.html — gallery — https://images.unsplash.com/photo-1512972972907-6d71529c5e92?auto=format&fit=crop&w=1200&q=70
- pages/stays.html — hero — https://images.unsplash.com/photo-1785641891348-bb5704866af3?auto=format&fit=crop&w=2000&q=70
- pages/stays.html — Japanese Suite, ảnh lớn — https://images.unsplash.com/photo-1753552502151-93914d36ecf2?auto=format&fit=crop&w=1600&q=70
- pages/stays.html — Japanese Suite, ảnh phụ — https://images.unsplash.com/photo-1722510154425-abad1f97b362?auto=format&fit=crop&w=1000&q=70
- pages/stays.html — Garden Villa, ảnh lớn — https://images.unsplash.com/photo-1788287997368-8b72dd6ce668?auto=format&fit=crop&w=1600&q=70
- pages/stays.html — Garden Villa, ảnh phụ — https://images.unsplash.com/photo-1693664681816-f7f8422758f0?auto=format&fit=crop&w=1000&q=70
- pages/stays.html — Signature Residence, ảnh ngang — https://images.unsplash.com/photo-1686933021211-19a669f3acb2?auto=format&fit=crop&w=1800&q=70
- pages/stays.html — Signature Residence, ảnh dọc chi tiết — https://images.unsplash.com/photo-1628843481844-23e13541c57c?auto=format&fit=crop&w=1000&q=70
- pages/stays.html — tiện ích Tea House — https://images.unsplash.com/photo-1757507423608-ae47cddef75f?auto=format&fit=crop&w=1200&q=70
- pages/stays.html — tiện ích Zen Garden — https://images.unsplash.com/photo-1669954807964-6e98112a6b86?auto=format&fit=crop&w=1200&q=70
- pages/stays.html — tiện ích Wellness Spa — https://images.unsplash.com/photo-1785057707873-68aada1c09dd?auto=format&fit=crop&w=1200&q=70
- pages/stays.html — tiện ích Seasonal Restaurant — https://images.unsplash.com/photo-1740982931610-9309b6e88f30?auto=format&fit=crop&w=1200&q=70
- pages/stays.html — tiện ích Quiet Water Garden — https://images.unsplash.com/photo-1719462932338-50922d824392?auto=format&fit=crop&w=1200&q=70
- pages/stays.html — chi tiết kiến trúc: giấy shoji — https://images.unsplash.com/photo-1757507423552-94e7b4221f7e?auto=format&fit=crop&w=1000&q=70
- pages/stays.html — chi tiết kiến trúc: gỗ — https://images.unsplash.com/photo-1612014449419-ac12de2f2181?auto=format&fit=crop&w=1000&q=70

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/experiences.html — culture (từ khóa dự kiến: "local culture")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Tabs
- Sao chép nhanh (số điện thoại / email)
- Phóng to ảnh (lightbox)
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/experiences.html, pages/stays.html).
- Chuyển động (đếm trong code): `data-reveal` ×83, `data-header` ×4, `data-split` ×9, `data-reveal-stagger` ×6, `data-parallax` ×4, `data-particles` ×3, `data-reveal="clip"` ×34, `data-drag-scroll` ×1, `data-gradient-shift` ×2; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 10:18 29/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 48 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "KIRI HOUSE" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 12 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 10:18 29/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Đúng 4 trang theo chú thích BA (index, about, stays, experiences); không có trang Liên hệ riêng, thông tin liên hệ mẫu nằm ở footer
- BA yêu cầu công tắc VI / EN (localStorage, giữ trang đang xem, đổi thuộc tính lang) → ghi đè mục 'không tạo bộ chuyển ngôn ngữ' của concept; mặc định tiếng Việt, lang=vi
- Các tiêu đề BA viết bằng tiếng Anh (The Art of Quiet Living…) hiển thị nguyên văn ở chế độ EN, chế độ VI dùng bản dịch tiếng Việt
- Màu và font theo BA (Ink Black, Rice Paper, Cedar, Sage, Vermilion; Cormorant Garamond + Be Vietnam Pro) thay cho bảng màu / font preset Nature; góc vuông toàn bộ (BA tránh bo góc lớn) thay cho ảnh vòm của preset
- Công cụ tìm ảnh lỗi 403 → toàn bộ ảnh dùng link Unsplash đã kiểm qua link_image; tool giới hạn 40 link nên ảnh tiện ích ở trang chủ dùng lại ảnh tiện ích của trang Lưu trú (cùng một khu), ảnh teaser Garden Villa / chi tiết kiến trúc ở trang chủ dùng lại ảnh của trang Lưu trú / Giới thiệu, và gallery trang Trải nghiệm tổng hợp lại vài ảnh từ các trang khác; bỏ 2 ảnh lệch tông (chùa sặc sỡ, bóng cửa tím) sau khi tự xem
- Không có hiệu ứng bay / xoay / parallax mạnh theo BA: chỉ fade, clip ảnh, parallax 0.08 ở hero, bụi nắng mỏng ở một section mỗi trang (mây atmos ở hero Trải nghiệm trông như hoạt hình nên đổi sang sương bằng gradient)
- Cultural Discovery không có dữ liệu địa điểm → khối chữ nêu hướng khám phá chung, không nêu địa danh

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1759310706740-e486ec5622c9?auto=format&fit=crop&w=2000&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1572186891466-4bbfec8838dc?auto=format&fit=crop&w=1400&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1490713575234-cbe010982904?auto=format&fit=crop&w=1400&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1688047974819-a8a680ecc7f8?auto=format&fit=crop&w=1200&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1496113329550-ce8886d06d54?auto=format&fit=crop&w=1400&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1788287997368-8b72dd6ce668?auto=format&fit=crop&w=1600&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1760301719767-5574393ea437?auto=format&fit=crop&w=1600&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1669954807964-6e98112a6b86?auto=format&fit=crop&w=1200&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1757507423608-ae47cddef75f?auto=format&fit=crop&w=1200&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1785057707873-68aada1c09dd?auto=format&fit=crop&w=1200&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1740982931610-9309b6e88f30?auto=format&fit=crop&w=1200&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1719462932338-50922d824392?auto=format&fit=crop&w=1200&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1714070704786-8137952f7b84?auto=format&fit=crop&w=2000&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1785641891392-780f6ff76c04?auto=format&fit=crop&w=1400&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1512972972907-6d71529c5e92?auto=format&fit=crop&w=1200&q=70 — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Không có đặt phòng, đặt lịch spa / trà đạo / thiền, giỏ hàng, thanh toán (theo yêu cầu BA)
- Số điện thoại, email, địa chỉ ở footer là thông tin mẫu
- Ảnh là link ngoài từ Unsplash, cần thay bằng ảnh thật của resort khi có
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
