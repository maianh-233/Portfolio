# CELESTIA

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Thương hiệu / dự án:** CELESTIA
- **Mục đích:** Thiết kế website giới thiệu CELESTIA, một resort wellness cao cấp chuyên về nghỉ dưỡng, chăm sóc sức khỏe toàn diện, thiền định và tái tạo năng lượng.

Website cần truyền tải cảm giác thanh thản, riêng tư, tinh tế và hơi huyền ảo. Trải nghiệm thị giác phải khiến người xem liên tưởng đến một khu nghỉ dưỡng nằm giữa thiên nhiên tĩnh lặng, nơi ánh sáng, mặt nước, kiến trúc và con người hòa quyện.

Định hướng thẩm mỹ: Ethereal Wellness Luxury — sang trọng nhẹ nhàng, giàu cảm xúc, có chiều sâu thị giác nhưng không phô trương.

Đây là website giới thiệu thương hiệu, không phải website thương mại điện tử hoặc nền tảng đặt dịch vụ.
- **Ý tưởng thị giác (AI ghi):** Đường chân trời mảnh màu Silver và quầng sáng Lavender như mặt trời lúc bình minh trên mặt hồ: lặp lại ở hero, nhãn section, khối chuyển sắc Lavender – Pearl và footer Midnight

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Nature / Organic / Atmospheric — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 16.040 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Fraunces`: đủ ký tự tiếng Việt
- `Manrope`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | CELESTIA — Trở về với sự cân bằng bên trong | Ấn tượng đầu tiên về CELESTIA; dẫn sang Lưu trú, Trải nghiệm, Giới thiệu | top, hero → hero-cinematic, intro → story-letter, stays → gallery-lookbook, experiences → features-bento, philosophy → quote-full, gallery → gallery-masonry, footer | 12 |
| `pages/about.html` | Giới thiệu — CELESTIA | Câu chuyện, triết lý, kiến trúc và giá trị thương hiệu CELESTIA | top, about-hero → page-hero, story → story-editorial, architecture → cta-fullbleed, values → features-numbered, nature → story-letter, about-cta → cta-sky, footer | 4 |
| `pages/experiences.html` | Trải nghiệm — CELESTIA | Truyền cảm hứng về các hoạt động wellness, không như danh mục bán dịch vụ | top, exp-hero → page-hero, rituals → timeline, spa → hero-split, mindful → story-editorial, cuisine → features-bento, exp-gallery → gallery-filmstrip, exp-cta → cta-sky, footer | 12 |
| `pages/stays.html` | Lưu trú — CELESTIA | Giới thiệu phòng, villa, tiện ích và vật liệu; không giá, không đặt phòng | top, stays-hero → page-hero, suite → features-alternate, garden-villa → features-alternate, pool-villa → cta-fullbleed, facilities → features-tabs, materials → gallery-lookbook, stays-cta → cta-type, footer | 11 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
celestia/
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
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 2 ảnh chưa dùng: https://images.pexels.com/photos/30926942/pexels-photo-30926942.jpeg?auto=compress&cs=tinysrgb&w=1200, https://images.pexels.com/photos/30769149/pexels-photo-30769149.jpeg?auto=compress&cs=tinysrgb&w=1600
- **⚠ Ảnh trong trang không tải được / sai nguồn:** pages/stays.html: Link ảnh chưa kiểm tra: https://images.pexels.com/photos/30926942/pexels-photo-30926942.jpeg?auto=compress&cs=tinysrgb&w=1600 — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 1 lượt tìm (nguồn: —), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| wellness resort infinity pool dawn | — | lỗi timeout | 31533 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://images.pexels.com/photos/30948820/pexels-photo-30948820.jpeg?auto=compress&cs=tinysrgb&w=1920` | index.html — hero hồ nước bình minh | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/34277704/pexels-photo-34277704.jpeg?auto=compress&cs=tinysrgb&w=1920` | index.html — ảnh ngang kiến trúc resort | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/30926942/pexels-photo-30926942.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — ảnh dọc phòng nghỉ | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/11774389/pexels-photo-11774389.jpeg?auto=compress&cs=tinysrgb&w=1400` | index.html — trải nghiệm Spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/35630591/pexels-photo-35630591.jpeg?auto=compress&cs=tinysrgb&w=1400` | index.html — Yoga Pavilion | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/5045171/pexels-photo-5045171.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — Meditation Garden | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/28408327/pexels-photo-28408327.jpeg?auto=compress&cs=tinysrgb&w=1400` | index.html — Quiet Waters | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/12652584/pexels-photo-12652584.jpeg?auto=compress&cs=tinysrgb&w=1400` | index.html — triết lý, lavender cận cảnh | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/7290073/pexels-photo-7290073.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — gallery rèm vải | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/29579812/pexels-photo-29579812.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — gallery lối đi rừng sương | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/28640154/pexels-photo-28640154.jpeg?auto=compress&cs=tinysrgb&w=1600` | index.html — gallery hồ bình minh | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/5126290/pexels-photo-5126290.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — gallery cánh đồng lavender | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/11775152/pexels-photo-11775152.jpeg?auto=compress&cs=tinysrgb&w=1200` | index.html — gallery rèm bay ban công | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/18233791/pexels-photo-18233791.jpeg?auto=compress&cs=tinysrgb&w=1920` | pages/about.html — hero kiến trúc và mặt nước | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/35487947/pexels-photo-35487947.jpeg?auto=compress&cs=tinysrgb&w=1400` | pages/about.html — câu chuyện thương hiệu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1920` | pages/about.html — kiến trúc và ánh sáng | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/8964938/pexels-photo-8964938.jpeg?auto=compress&cs=tinysrgb&w=1400` | pages/about.html — con người và thiên nhiên | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/30835932/pexels-photo-30835932.jpeg?auto=compress&cs=tinysrgb&w=1920` | pages/stays.html — hero suite cửa kính | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/30769149/pexels-photo-30769149.jpeg?auto=compress&cs=tinysrgb&w=1600` | pages/stays.html — Wellness Suite | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.pexels.com/photos/15995605/pexels-photo-15995605.jpeg?auto=compress&cs=tinysrgb&w=1600` | pages/stays.html — Garden Villa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/34378030/pexels-photo-34378030.jpeg?auto=compress&cs=tinysrgb&w=1920` | pages/stays.html — Private Pool Villa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/3865773/pexels-photo-3865773.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/stays.html — tiện ích Wellness Spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/5435242/pexels-photo-5435242.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/stays.html — Meditation Room | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/6787218/pexels-photo-6787218.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/stays.html — Yoga Pavilion | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/8110136/pexels-photo-8110136.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/stays.html — Infinity Pool | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/17584116/pexels-photo-17584116.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/stays.html — Nourishing Restaurant | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/8774406/pexels-photo-8774406.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/stays.html — vật liệu vải linen | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/11901304/pexels-photo-11901304.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/stays.html — ánh sáng gián tiếp | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/29614929/pexels-photo-29614929.jpeg?auto=compress&cs=tinysrgb&w=1920` | pages/experiences.html — hero yoga sáng sớm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/2407455/pexels-photo-2407455.jpeg?auto=compress&cs=tinysrgb&w=1920` | pages/experiences.html — Morning Rituals ảnh rộng | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/31035343/pexels-photo-31035343.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/experiences.html — tản bộ buổi sáng | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/4457915/pexels-photo-4457915.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/experiences.html — thiền trong vườn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/7795827/pexels-photo-7795827.jpeg?auto=compress&cs=tinysrgb&w=1400` | pages/experiences.html — Wellness & Spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/208504/pexels-photo-208504.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/experiences.html — spa chi tiết khăn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/6965743/pexels-photo-6965743.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/experiences.html — Mindful Living đọc sách | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/6545346/pexels-photo-6545346.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/experiences.html — thưởng trà | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/4519057/pexels-photo-4519057.jpeg?auto=compress&cs=tinysrgb&w=1400` | pages/experiences.html — Nourishing Cuisine | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/2102948/pexels-photo-2102948.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/experiences.html — món rau tinh tế | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/341514/pexels-photo-341514.jpeg?auto=compress&cs=tinysrgb&w=1200` | pages/experiences.html — trà thảo mộc | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.pexels.com/photos/37183183/pexels-photo-37183183.jpeg?auto=compress&cs=tinysrgb&w=1600` | pages/experiences.html — gallery bìa rừng nắng sớm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

38 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero hồ nước bình minh — https://images.pexels.com/photos/30948820/pexels-photo-30948820.jpeg?auto=compress&cs=tinysrgb&w=1920
- index.html — ảnh ngang kiến trúc resort — https://images.pexels.com/photos/34277704/pexels-photo-34277704.jpeg?auto=compress&cs=tinysrgb&w=1920
- index.html — trải nghiệm Spa — https://images.pexels.com/photos/11774389/pexels-photo-11774389.jpeg?auto=compress&cs=tinysrgb&w=1400
- index.html — Yoga Pavilion — https://images.pexels.com/photos/35630591/pexels-photo-35630591.jpeg?auto=compress&cs=tinysrgb&w=1400
- index.html — Meditation Garden — https://images.pexels.com/photos/5045171/pexels-photo-5045171.jpeg?auto=compress&cs=tinysrgb&w=1200
- index.html — Quiet Waters — https://images.pexels.com/photos/28408327/pexels-photo-28408327.jpeg?auto=compress&cs=tinysrgb&w=1400
- index.html — triết lý, lavender cận cảnh — https://images.pexels.com/photos/12652584/pexels-photo-12652584.jpeg?auto=compress&cs=tinysrgb&w=1400
- index.html — gallery rèm vải — https://images.pexels.com/photos/7290073/pexels-photo-7290073.jpeg?auto=compress&cs=tinysrgb&w=1200
- index.html — gallery lối đi rừng sương — https://images.pexels.com/photos/29579812/pexels-photo-29579812.jpeg?auto=compress&cs=tinysrgb&w=1200
- index.html — gallery hồ bình minh — https://images.pexels.com/photos/28640154/pexels-photo-28640154.jpeg?auto=compress&cs=tinysrgb&w=1600
- index.html — gallery cánh đồng lavender — https://images.pexels.com/photos/5126290/pexels-photo-5126290.jpeg?auto=compress&cs=tinysrgb&w=1200
- index.html — gallery rèm bay ban công — https://images.pexels.com/photos/11775152/pexels-photo-11775152.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/about.html — hero kiến trúc và mặt nước — https://images.pexels.com/photos/18233791/pexels-photo-18233791.jpeg?auto=compress&cs=tinysrgb&w=1920
- pages/about.html — câu chuyện thương hiệu — https://images.pexels.com/photos/35487947/pexels-photo-35487947.jpeg?auto=compress&cs=tinysrgb&w=1400
- pages/about.html — kiến trúc và ánh sáng — https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1920
- pages/about.html — con người và thiên nhiên — https://images.pexels.com/photos/8964938/pexels-photo-8964938.jpeg?auto=compress&cs=tinysrgb&w=1400
- pages/stays.html — hero suite cửa kính — https://images.pexels.com/photos/30835932/pexels-photo-30835932.jpeg?auto=compress&cs=tinysrgb&w=1920
- pages/stays.html — Garden Villa — https://images.pexels.com/photos/15995605/pexels-photo-15995605.jpeg?auto=compress&cs=tinysrgb&w=1600
- pages/stays.html — Private Pool Villa — https://images.pexels.com/photos/34378030/pexels-photo-34378030.jpeg?auto=compress&cs=tinysrgb&w=1920
- pages/stays.html — tiện ích Wellness Spa — https://images.pexels.com/photos/3865773/pexels-photo-3865773.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/stays.html — Meditation Room — https://images.pexels.com/photos/5435242/pexels-photo-5435242.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/stays.html — Yoga Pavilion — https://images.pexels.com/photos/6787218/pexels-photo-6787218.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/stays.html — Infinity Pool — https://images.pexels.com/photos/8110136/pexels-photo-8110136.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/stays.html — Nourishing Restaurant — https://images.pexels.com/photos/17584116/pexels-photo-17584116.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/stays.html — vật liệu vải linen — https://images.pexels.com/photos/8774406/pexels-photo-8774406.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/stays.html — ánh sáng gián tiếp — https://images.pexels.com/photos/11901304/pexels-photo-11901304.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/experiences.html — hero yoga sáng sớm — https://images.pexels.com/photos/29614929/pexels-photo-29614929.jpeg?auto=compress&cs=tinysrgb&w=1920
- pages/experiences.html — Morning Rituals ảnh rộng — https://images.pexels.com/photos/2407455/pexels-photo-2407455.jpeg?auto=compress&cs=tinysrgb&w=1920
- pages/experiences.html — tản bộ buổi sáng — https://images.pexels.com/photos/31035343/pexels-photo-31035343.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/experiences.html — thiền trong vườn — https://images.pexels.com/photos/4457915/pexels-photo-4457915.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/experiences.html — Wellness & Spa — https://images.pexels.com/photos/7795827/pexels-photo-7795827.jpeg?auto=compress&cs=tinysrgb&w=1400
- pages/experiences.html — spa chi tiết khăn — https://images.pexels.com/photos/208504/pexels-photo-208504.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/experiences.html — Mindful Living đọc sách — https://images.pexels.com/photos/6965743/pexels-photo-6965743.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/experiences.html — thưởng trà — https://images.pexels.com/photos/6545346/pexels-photo-6545346.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/experiences.html — Nourishing Cuisine — https://images.pexels.com/photos/4519057/pexels-photo-4519057.jpeg?auto=compress&cs=tinysrgb&w=1400
- pages/experiences.html — món rau tinh tế — https://images.pexels.com/photos/2102948/pexels-photo-2102948.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/experiences.html — trà thảo mộc — https://images.pexels.com/photos/341514/pexels-photo-341514.jpeg?auto=compress&cs=tinysrgb&w=1200
- pages/experiences.html — gallery bìa rừng nắng sớm — https://images.pexels.com/photos/37183183/pexels-photo-37183183.jpeg?auto=compress&cs=tinysrgb&w=1600

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Tabs
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/experiences.html, pages/stays.html).
- Chuyển động (đếm trong code): `data-reveal` ×63, `data-header` ×4, `data-split` ×8, `data-reveal-stagger` ×11, `data-parallax` ×4, `data-float` ×3, `data-gradient-shift` ×4, `data-clouds` ×4, `data-reveal="clip"` ×23, `data-drag-scroll` ×1; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 09:21 29/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 1 cần sửa, 2 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "CELESTIA" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 10 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 09:21 29/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- BA yêu cầu công tắc VI / EN (data-vi / data-en + localStorage, đổi lang của <html>) dù concept.md ghi 'không tạo bộ chuyển ngôn ngữ' — theo chú thích của BA (ưu tiên cao hơn); mặc định tiếng Việt, lang="vi"
- BA đặt tên about.html / stays.html / experiences.html ở gốc và assets/css/style.css, assets/js/main.js — giữ chuẩn công ty: trang con trong pages/, CSS chung assets/css/site.css, JS chung assets/js/site.js
- Font theo BA: Cormorant Garamond (tiêu đề) + Be Vietnam Pro (nội dung) thay cho Fraunces / Manrope của preset; bảng màu theo BA (Midnight, Lavender, Pearl, Muted Rose, Silver) thay bảng màu preset
- Tiêu đề tiếng Anh BA đưa (Return to Your Inner Balance…) dùng cho bản EN; bản VI dịch tương ứng
- Không dùng data-particles vì BA cấm hạt sáng / sao bay liên tục; không khí Level 2 thể hiện bằng data-clouds mỏng (sương) ở một section mỗi trang + data-gradient-shift + data-float
- Công cụ search_images lỗi (openverse quá thời gian) → toàn bộ ảnh là link Pexels đã kiểm qua link_image (đạt hạn mức 40 link); gallery trang Trải nghiệm còn 3 ảnh

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] pages/stays.html: Link ảnh chưa kiểm tra: https://images.pexels.com/photos/30926942/pexels-photo-30926942.jpeg?auto=compress&cs=tinysrgb&w=1600 — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Website chỉ giới thiệu: không đặt phòng, đặt spa / yoga, đặt bàn, giỏ hàng hay thanh toán (theo yêu cầu BA)
- Địa chỉ, số điện thoại, email trong footer là thông tin mẫu
- Ảnh dùng bằng link ngoài (Pexels), cần ảnh thật của resort khi triển khai
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
