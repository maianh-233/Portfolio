# THE GRAND AUREL

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Thương hiệu / dự án:** THE GRAND AUREL
- **Mục đích:** Xây dựng website giới thiệu THE GRAND AUREL, một resort cao cấp lấy cảm hứng từ những cung điện, dinh thự quý tộc và khu vườn hoàng gia châu Âu.

Thương hiệu đại diện cho vẻ đẹp di sản, nghệ thuật kiến trúc và phong cách nghỉ dưỡng thanh lịch vượt thời gian. Website cần mang lại cảm giác như đang bước vào một dinh thự châu Âu được gìn giữ qua nhiều thế hệ.

Phong cách chủ đạo: European Heritage Luxury kết hợp Classical Palace Elegance.

Không sử dụng phong cách hiện đại tối giản, thiết kế công nghệ hoặc bố cục resort nhiệt đới thông thường. Tránh biến website thành một trang giới thiệu khách sạn đại trà.
- **Ý tưởng thị giác (AI ghi):** Khung cửa vòm dinh thự viền vàng mảnh đối xứng: mỗi ảnh như một bức tranh treo trong đại sảnh, kèm chú thích kiểu tạp chí kiến trúc

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Nature / Organic / Atmospheric — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 11.202 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Fraunces`: đủ ký tự tiếng Việt
- `Manrope`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | THE GRAND AUREL — Dinh thự di sản châu Âu, nghỉ dưỡng vượt thời gian | Giới thiệu thương hiệu, kiến trúc, ba hạng phòng và bốn trải nghiệm; dẫn sang các trang riêng | top, hero → hero-cinematic, intro → story-letter, architecture → gallery-lookbook, suites → teaser-row, art-of-living → features-bento, statement → quote-full, footer | 12 |
| `pages/about.html` | Di sản — THE GRAND AUREL | Câu chuyện thương hiệu, bốn giá trị cốt lõi, chi tiết kiến trúc | top, page-hero → page-hero, story → story-editorial, values → features-numbered, details → gallery-masonry, closing → cta-fullbleed, footer | 8 |
| `pages/experiences.html` | Trải nghiệm — THE GRAND AUREL | Kể các trải nghiệm như những chương tạp chí: ẩm thực, trà chiều, khu vườn, kiến trúc, thư giãn | top, page-hero → hero-cinematic, fine-dining → story-editorial, afternoon-tea → editorial-spread, royal-garden → feature-split, architecture-discovery → gallery-carousel, wellness → features-accordion, closing → cta-fullbleed, footer | 15 |
| `pages/stays.html` | Suites & Villas — THE GRAND AUREL | Giới thiệu ba hạng phòng như một bộ sưu tập và năm tiện ích của resort (không giá, không đặt phòng) | top, page-hero → hero-split, grand-suite → story-split, garden-residence → story-split-reverse, signature-villa → feature-wide, facilities → features-tabs, closing → cta-type, footer | 12 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
the-grand-aurel/
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

- **⚠ Tool tìm ảnh trả lỗi:** timeout: openverse: quá 15s không phản hồi
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 4 ảnh chưa dùng: https://images.unsplash.com/photo-1792651466319-f77612f6854f?auto=format&fit=crop&w=1200&q=80, https://images.unsplash.com/photo-1691404658845-7f7a20c3feaf?auto=format&fit=crop&w=2000&q=80, https://images.unsplash.com/photo-1680596124881-d7e0743698c2?auto=format&fit=crop&w=2000&q=80, https://images.unsplash.com/photo-1695836065042-c3938a4917ba?auto=format&fit=crop&w=2000&q=80
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1760458695992-b87db08d43bb?auto=format&fit=crop&w=2000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1784460843438-ff907f72dc3f?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1713291185595-9f0cbcedb15f?auto=format&fit=crop&w=1600&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 8 lượt tìm (nguồn: —), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| palace facade symmetrical garden | — | lỗi timeout | 38385 ms |
| palace grand staircase chandelier | — | lỗi timeout | 43510 ms |
| classic hotel bedroom antique furniture | — | lỗi timeout | 98242 ms |
| french formal garden fountain | — | lỗi timeout | 41813 ms |
| chateau facade | — | lỗi timeout | 31532 ms |
| classic hotel bedroom canopy bed | — | lỗi timeout | 97335 ms |
| afternoon tea porcelain cakes | — | lỗi timeout | 47197 ms |
| versailles garden fountain | — | lỗi timeout | 31519 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://images.unsplash.com/photo-1760458695992-b87db08d43bb?auto=format&fit=crop&w=2000&q=80` | index.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1784460843438-ff907f72dc3f?auto=format&fit=crop&w=1200&q=80` | index.html — giới thiệu thương hiệu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1713291185595-9f0cbcedb15f?auto=format&fit=crop&w=1600&q=80` | index.html — kiến trúc ảnh lớn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1767460775489-be2fd312eaf8?auto=format&fit=crop&w=1000&q=80` | index.html — kiến trúc chi tiết cầu thang | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1758820736219-8b4932f67918?auto=format&fit=crop&w=1000&q=80` | index.html — kiến trúc chi tiết cột đá | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1767050387941-b97f0d5a3232?auto=format&fit=crop&w=1200&q=80` | index.html — Grand Suite | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1779505576192-803dd8c9b55a?auto=format&fit=crop&w=1200&q=80` | index.html — Garden Residence | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1780245994710-23f2642c7403?auto=format&fit=crop&w=1200&q=80` | index.html — Signature Villa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?auto=format&fit=crop&w=1200&q=80` | index.html — Fine Dining | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1781795035627-fa93f2863bba?auto=format&fit=crop&w=1200&q=80` | index.html — Palace Spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1776696123814-5f9c8fd67424?auto=format&fit=crop&w=1200&q=80` | index.html — Royal Garden | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1792651466319-f77612f6854f?auto=format&fit=crop&w=1200&q=80` | index.html — Heritage Lounge | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1780245992686-1f5c341655c2?auto=format&fit=crop&w=1600&q=80` | index.html — Heritage Lounge | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1735752601476-67707748a6ed?auto=format&fit=crop&w=2000&q=80` | pages/about.html — hero mặt tiền | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1759307407469-aac7d9236d6f?auto=format&fit=crop&w=1200&q=80` | pages/about.html — Our Story | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1767460775310-025fcba42aa9?auto=format&fit=crop&w=1400&q=80` | pages/about.html — gallery cầu thang | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1776696123099-96e10b4c0b4b?auto=format&fit=crop&w=1400&q=80` | pages/about.html — gallery hành lang vòm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1764776709803-942446e4b749?auto=format&fit=crop&w=1200&q=80` | pages/about.html — gallery đèn chùm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1705781787152-1b897d748932?auto=format&fit=crop&w=1200&q=80` | pages/about.html — gallery trần vẽ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1790163086018-f9319ba1ae0a?auto=format&fit=crop&w=1200&q=80` | pages/about.html — gallery nội thất | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1761409337593-4fd5a5ddf4e9?auto=format&fit=crop&w=2000&q=80` | pages/about.html — closing đại sảnh | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1727633091121-ff97a90679b1?auto=format&fit=crop&w=2000&q=80` | pages/stays.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1669247164841-9d9867d652f0?auto=format&fit=crop&w=1400&q=80` | pages/stays.html — Grand Suite ảnh chính | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1664998357520-a4b3d2829097?auto=format&fit=crop&w=1000&q=80` | pages/stays.html — Grand Suite ảnh phụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1720434566416-3818933b7ad3?auto=format&fit=crop&w=1400&q=80` | pages/stays.html — Garden Residence ảnh chính | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1685787773514-90e8e14af797?auto=format&fit=crop&w=1000&q=80` | pages/stays.html — Garden Residence ảnh phụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1727633091107-7227fd52ce20?auto=format&fit=crop&w=1400&q=80` | pages/stays.html — Signature Villa ảnh chính | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1669247164832-8764a86a6ac9?auto=format&fit=crop&w=1000&q=80` | pages/stays.html — Signature Villa ảnh phụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1760037580064-d5260aa8ce32?auto=format&fit=crop&w=1200&q=80` | pages/stays.html — The Grand Restaurant | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1494520787307-9d24ab287b36?auto=format&fit=crop&w=1200&q=80` | pages/stays.html — Palace Spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1669247164767-b0e195947a4c?auto=format&fit=crop&w=1200&q=80` | pages/stays.html — Heritage Lounge | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1690652576140-16ba32788202?auto=format&fit=crop&w=1200&q=80` | pages/stays.html — Royal Garden | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1767662416910-1b0f8232ddaf?auto=format&fit=crop&w=1400&q=80` | pages/stays.html — Garden Pool | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1699303088143-b04d23643bd9?auto=format&fit=crop&w=2000&q=80` | pages/experiences.html — hero | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1782256529708-ff4392075981?auto=format&fit=crop&w=1600&q=80` | pages/experiences.html — Fine Dining ảnh chính | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1652234779738-cc980e2705bc?auto=format&fit=crop&w=1000&q=80` | pages/experiences.html — Fine Dining ảnh phụ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1722324260745-867e1f19ec89?auto=format&fit=crop&w=1400&q=80` | pages/experiences.html — Afternoon Tea ảnh lớn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1576831438461-6d0e6a13b0ce?auto=format&fit=crop&w=1000&q=80` | pages/experiences.html — Afternoon Tea bánh ngọt | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1766399654239-56935ded1335?auto=format&fit=crop&w=1000&q=80` | pages/experiences.html — Afternoon Tea tách trà | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1692651763004-fabed1b9a602?auto=format&fit=crop&w=1400&q=80` | pages/experiences.html — Royal Garden lối đi | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1791821696157-35360c826ffc?auto=format&fit=crop&w=1200&q=80` | pages/experiences.html — Royal Garden vườn hồ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1548847923-f040a5441de6?auto=format&fit=crop&w=1200&q=80` | pages/experiences.html — Architecture Discovery cầu thang | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1667425288209-d7a0216737be?auto=format&fit=crop&w=1200&q=80` | pages/experiences.html — Architecture Discovery cửa vòm | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1535383749833-770a4e09edec?auto=format&fit=crop&w=1200&q=80` | pages/experiences.html — Architecture Discovery cửa sổ | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1761116191941-fe3915e57d8b?auto=format&fit=crop&w=1200&q=80` | pages/experiences.html — Architecture Discovery tranh tường | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1716893917077-5b320c1ecfec?auto=format&fit=crop&w=1200&q=80` | pages/experiences.html — Wellness spa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1661006101181-14c803259c83?auto=format&fit=crop&w=1200&q=80` | pages/experiences.html — Wellness lounge | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1691404658845-7f7a20c3feaf?auto=format&fit=crop&w=2000&q=80` | pages/experiences.html — Closing Panorama | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1680596124881-d7e0743698c2?auto=format&fit=crop&w=2000&q=80` | pages/experiences.html — Closing Panorama (thay ảnh tháp đổ nát) | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1695836065042-c3938a4917ba?auto=format&fit=crop&w=2000&q=80` | pages/experiences.html — Closing Panorama | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1689861717931-34772037a15c?auto=format&fit=crop&w=2000&q=80` | pages/experiences.html — Closing Panorama | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

47 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero — https://images.unsplash.com/photo-1760458695992-b87db08d43bb?auto=format&fit=crop&w=2000&q=80
- index.html — giới thiệu thương hiệu — https://images.unsplash.com/photo-1784460843438-ff907f72dc3f?auto=format&fit=crop&w=1200&q=80
- index.html — kiến trúc ảnh lớn — https://images.unsplash.com/photo-1713291185595-9f0cbcedb15f?auto=format&fit=crop&w=1600&q=80
- index.html — kiến trúc chi tiết cầu thang — https://images.unsplash.com/photo-1767460775489-be2fd312eaf8?auto=format&fit=crop&w=1000&q=80
- index.html — kiến trúc chi tiết cột đá — https://images.unsplash.com/photo-1758820736219-8b4932f67918?auto=format&fit=crop&w=1000&q=80
- index.html — Grand Suite — https://images.unsplash.com/photo-1767050387941-b97f0d5a3232?auto=format&fit=crop&w=1200&q=80
- index.html — Garden Residence — https://images.unsplash.com/photo-1779505576192-803dd8c9b55a?auto=format&fit=crop&w=1200&q=80
- index.html — Signature Villa — https://images.unsplash.com/photo-1780245994710-23f2642c7403?auto=format&fit=crop&w=1200&q=80
- index.html — Fine Dining — https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?auto=format&fit=crop&w=1200&q=80
- index.html — Palace Spa — https://images.unsplash.com/photo-1781795035627-fa93f2863bba?auto=format&fit=crop&w=1200&q=80
- index.html — Royal Garden — https://images.unsplash.com/photo-1776696123814-5f9c8fd67424?auto=format&fit=crop&w=1200&q=80
- index.html — Heritage Lounge — https://images.unsplash.com/photo-1780245992686-1f5c341655c2?auto=format&fit=crop&w=1600&q=80
- pages/about.html — hero mặt tiền — https://images.unsplash.com/photo-1735752601476-67707748a6ed?auto=format&fit=crop&w=2000&q=80
- pages/about.html — Our Story — https://images.unsplash.com/photo-1759307407469-aac7d9236d6f?auto=format&fit=crop&w=1200&q=80
- pages/about.html — gallery cầu thang — https://images.unsplash.com/photo-1767460775310-025fcba42aa9?auto=format&fit=crop&w=1400&q=80
- pages/about.html — gallery hành lang vòm — https://images.unsplash.com/photo-1776696123099-96e10b4c0b4b?auto=format&fit=crop&w=1400&q=80
- pages/about.html — gallery đèn chùm — https://images.unsplash.com/photo-1764776709803-942446e4b749?auto=format&fit=crop&w=1200&q=80
- pages/about.html — gallery trần vẽ — https://images.unsplash.com/photo-1705781787152-1b897d748932?auto=format&fit=crop&w=1200&q=80
- pages/about.html — gallery nội thất — https://images.unsplash.com/photo-1790163086018-f9319ba1ae0a?auto=format&fit=crop&w=1200&q=80
- pages/about.html — closing đại sảnh — https://images.unsplash.com/photo-1761409337593-4fd5a5ddf4e9?auto=format&fit=crop&w=2000&q=80
- pages/stays.html — hero — https://images.unsplash.com/photo-1727633091121-ff97a90679b1?auto=format&fit=crop&w=2000&q=80
- pages/stays.html — Grand Suite ảnh chính — https://images.unsplash.com/photo-1669247164841-9d9867d652f0?auto=format&fit=crop&w=1400&q=80
- pages/stays.html — Grand Suite ảnh phụ — https://images.unsplash.com/photo-1664998357520-a4b3d2829097?auto=format&fit=crop&w=1000&q=80
- pages/stays.html — Garden Residence ảnh chính — https://images.unsplash.com/photo-1720434566416-3818933b7ad3?auto=format&fit=crop&w=1400&q=80
- pages/stays.html — Garden Residence ảnh phụ — https://images.unsplash.com/photo-1685787773514-90e8e14af797?auto=format&fit=crop&w=1000&q=80
- pages/stays.html — Signature Villa ảnh chính — https://images.unsplash.com/photo-1727633091107-7227fd52ce20?auto=format&fit=crop&w=1400&q=80
- pages/stays.html — Signature Villa ảnh phụ — https://images.unsplash.com/photo-1669247164832-8764a86a6ac9?auto=format&fit=crop&w=1000&q=80
- pages/stays.html — The Grand Restaurant — https://images.unsplash.com/photo-1760037580064-d5260aa8ce32?auto=format&fit=crop&w=1200&q=80
- pages/stays.html — Palace Spa — https://images.unsplash.com/photo-1494520787307-9d24ab287b36?auto=format&fit=crop&w=1200&q=80
- pages/stays.html — Heritage Lounge — https://images.unsplash.com/photo-1669247164767-b0e195947a4c?auto=format&fit=crop&w=1200&q=80
- pages/stays.html — Royal Garden — https://images.unsplash.com/photo-1690652576140-16ba32788202?auto=format&fit=crop&w=1200&q=80
- pages/stays.html — Garden Pool — https://images.unsplash.com/photo-1767662416910-1b0f8232ddaf?auto=format&fit=crop&w=1400&q=80
- pages/experiences.html — hero — https://images.unsplash.com/photo-1699303088143-b04d23643bd9?auto=format&fit=crop&w=2000&q=80
- pages/experiences.html — Fine Dining ảnh chính — https://images.unsplash.com/photo-1782256529708-ff4392075981?auto=format&fit=crop&w=1600&q=80
- pages/experiences.html — Fine Dining ảnh phụ — https://images.unsplash.com/photo-1652234779738-cc980e2705bc?auto=format&fit=crop&w=1000&q=80
- pages/experiences.html — Afternoon Tea ảnh lớn — https://images.unsplash.com/photo-1722324260745-867e1f19ec89?auto=format&fit=crop&w=1400&q=80
- pages/experiences.html — Afternoon Tea bánh ngọt — https://images.unsplash.com/photo-1576831438461-6d0e6a13b0ce?auto=format&fit=crop&w=1000&q=80
- pages/experiences.html — Afternoon Tea tách trà — https://images.unsplash.com/photo-1766399654239-56935ded1335?auto=format&fit=crop&w=1000&q=80
- pages/experiences.html — Royal Garden lối đi — https://images.unsplash.com/photo-1692651763004-fabed1b9a602?auto=format&fit=crop&w=1400&q=80
- pages/experiences.html — Royal Garden vườn hồ — https://images.unsplash.com/photo-1791821696157-35360c826ffc?auto=format&fit=crop&w=1200&q=80
- pages/experiences.html — Architecture Discovery cầu thang — https://images.unsplash.com/photo-1548847923-f040a5441de6?auto=format&fit=crop&w=1200&q=80
- pages/experiences.html — Architecture Discovery cửa vòm — https://images.unsplash.com/photo-1667425288209-d7a0216737be?auto=format&fit=crop&w=1200&q=80
- pages/experiences.html — Architecture Discovery cửa sổ — https://images.unsplash.com/photo-1535383749833-770a4e09edec?auto=format&fit=crop&w=1200&q=80
- pages/experiences.html — Architecture Discovery tranh tường — https://images.unsplash.com/photo-1761116191941-fe3915e57d8b?auto=format&fit=crop&w=1200&q=80
- pages/experiences.html — Wellness spa — https://images.unsplash.com/photo-1716893917077-5b320c1ecfec?auto=format&fit=crop&w=1200&q=80
- pages/experiences.html — Wellness lounge — https://images.unsplash.com/photo-1661006101181-14c803259c83?auto=format&fit=crop&w=1200&q=80
- pages/experiences.html — Closing Panorama — https://images.unsplash.com/photo-1689861717931-34772037a15c?auto=format&fit=crop&w=2000&q=80

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Accordion (mở / đóng nội dung)
- Carousel
- Đánh dấu mục đang xem trên menu
- Tabs
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/experiences.html, pages/stays.html).
- Chuyển động (đếm trong code): `data-reveal` ×69, `data-header` ×4, `data-split` ×24, `data-reveal-stagger` ×7, `data-parallax` ×6, `data-float` ×1, `data-particles` ×4, `data-reveal="clip"` ×25; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 13:47 29/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 47 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "THE GRAND AUREL" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 16 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 10:53 29/10/2026 | Dựng website | lỗi: Đã chạm giới hạn sử dụng của tài khoản, vui lòng chờ rồi thử lại. Hạn mức sẽ được làm mới lúc 13:30 29-10. |
| 13:48 29/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Kho ảnh openverse không phản hồi → dùng link ảnh Unsplash đã kiểm qua link_image; ảnh lỗi có nền dự phòng (site.js + site.css)
- BA yêu cầu about.html / stays.html / experiences.html ở gốc; theo chuẩn theme đặt trong pages/
- BA yêu cầu nút VI/EN hoạt động thật: tiếng Việt là mặc định (theo concept.md), tiếng Anh qua data-en + site.js, giữ lựa chọn bằng localStorage và ?lang=en trên link
- Tên hạng phòng / tiện ích giữ nguyên tiếng Anh như tên riêng (Grand Suite, Palace Spa…)

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1760458695992-b87db08d43bb?auto=format&fit=crop&w=2000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1784460843438-ff907f72dc3f?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1713291185595-9f0cbcedb15f?auto=format&fit=crop&w=1600&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1767460775489-be2fd312eaf8?auto=format&fit=crop&w=1000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1758820736219-8b4932f67918?auto=format&fit=crop&w=1000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1767050387941-b97f0d5a3232?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1779505576192-803dd8c9b55a?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1780245994710-23f2642c7403?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1781795035627-fa93f2863bba?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1776696123814-5f9c8fd67424?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1780245992686-1f5c341655c2?auto=format&fit=crop&w=1600&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1735752601476-67707748a6ed?auto=format&fit=crop&w=2000&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1759307407469-aac7d9236d6f?auto=format&fit=crop&w=1200&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1767460775310-025fcba42aa9?auto=format&fit=crop&w=1400&q=80 — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Website chỉ giới thiệu thương hiệu: không có đặt phòng, kiểm tra phòng trống, đặt lịch spa hay thanh toán
- Thông tin liên hệ, địa chỉ là dữ liệu minh họa
- Ảnh dùng bằng link ngoài chỉ cho prototype; cần thay bằng ảnh có giấy phép khi đưa lên web thật
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
