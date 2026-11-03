# MATCHA ATELIER

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website tiệm bánh và trà sữa
- **Thương hiệu / dự án:** MATCHA ATELIER
- **Mục đích:** Thiết kế website giới thiệu thương hiệu trà và bánh MATCHA ATELIER, kết hợp tinh thần tối giản Nhật Bản với văn hóa trà matcha hiện đại.
- **Ý tưởng thị giác (AI ghi):** Khung giấy washi: mỗi ảnh như một bản in đặt trên giấy, có đường kẻ mực mảnh lệch trục phía sau; bố cục lệch trục, khoảng trắng rộng, một vòng ensō mảnh trôi nhẹ làm dấu ấn xuyên các trang

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Nature / Organic / Atmospheric — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 917 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Fraunces`: đủ ký tự tiếng Anh
- `Manrope`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | MATCHA ATELIER — Find Your Quiet Moment | Giới thiệu thương hiệu trong một khoảnh khắc lặng, dẫn sang Menu và About, cho biết địa chỉ / giờ mở cửa | top, hero → hero-split, ritual → story-letter, signatures → gallery-lookbook, principles → features-numbered, quote → quote-full, visit → contact-split, footer → footer-big | 6 |
| `pages/about.html` | About — MATCHA ATELIER | Theo chú thích BA: cảm hứng trà đạo, cách chọn nguyên liệu, sự cân bằng hương vị, triết lý sống chậm | top, page-hero → page-hero, inspiration → story-editorial, sourcing → features-alternate, balance → features-bento, slow-living → gallery-filmstrip, cta → cta-type, footer → footer-big | 4 |
| `pages/menu.html` | Menu — MATCHA ATELIER | Thực đơn theo 5 nhóm BA yêu cầu (matcha latte, trà nguyên bản, bánh matcha, mochi, bánh dùng kèm trà); mỗi món có ảnh, mô tả hương vị và nguyên liệu nổi bật | top, page-hero → page-hero, menu → features-tabs, notes → faq, cta → cta-type, footer → footer-big | 15 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
matcha-atelier/
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
      menu.html
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

- **⚠ Một số lượt tìm ảnh lỗi:** 8/9 lượt lỗi (timeout)
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 1 ảnh chưa dùng: https://upload.wikimedia.org/wikipedia/commons/e/e1/Full_Leaf_Tea_Company_-_Ceremonial_Matcha.jpg

Tool đã ghi 9 lượt tìm (nguồn: openverse), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| matcha tea wagashi | — | lỗi timeout | 39078 ms |
| matcha whisk chasen bowl | — | lỗi timeout | 62790 ms |
| matcha latte cafe | — | lỗi timeout | 39477 ms |
| matcha roll cake | — | lỗi timeout | 42360 ms |
| mochi daifuku | — | lỗi timeout | 31516 ms |
| green tea ceremony | openverse | 10 ảnh | 15365 ms |
| matcha | — | lỗi timeout | 31518 ms |
| mochi | — | lỗi timeout | 31516 ms |
| wagashi | — | lỗi timeout | 36306 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Matcha_chawan_and_wagashi_at_teahouse_in_Japanese_garden.jpg/1920px-Matcha_chawan_and_wagashi_at_teahouse_in_Japanese_garden.jpg` | index.html — hero: tách matcha và wagashi | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Whisk_macca_tea.jpg/1280px-Whisk_macca_tea.jpg` | index.html — ritual: đánh trà bằng chasen | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Matcha_tea_latte_with_rosetta_latte_art.jpg/1280px-Matcha_tea_latte_with_rosetta_latte_art.jpg` | index.html — signatures: matcha latte | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/e/e1/Full_Leaf_Tea_Company_-_Ceremonial_Matcha.jpg` | pages/menu.html — page hero: bột matcha | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Green_Wagashi_01.jpg/1280px-Green_Wagashi_01.jpg` | index.html — signatures: wagashi | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Matcha_Mille_Crepe_with_Ice_Cream.jpg/1280px-Matcha_Mille_Crepe_with_Ice_Cream.jpg` | index.html — signatures: matcha mille crêpe | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Iwao_Karatsu-ware_tea_bowl.jpg/1280px-Iwao_Karatsu-ware_tea_bowl.jpg` | index.html — craft: gốm thủ công | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Matcha_Latte_with_Seasalt_Cream.jpg/1280px-Matcha_Latte_with_Seasalt_Cream.jpg` | pages/menu.html — latte: sea salt cream | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Iced_Hojicha_Latte_and_Iced_Matcha_Latte_-_Rawlab_Juice_%26_Tea_2025-07-12.jpg/1280px-Iced_Hojicha_Latte_and_Iced_Matcha_Latte_-_Rawlab_Juice_%26_Tea_2025-07-12.jpg` | pages/menu.html — latte: hojicha | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Matcha_latte_in_tall_glass.jpg/1280px-Matcha_latte_in_tall_glass.jpg` | pages/menu.html — latte: iced matcha latte | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Secangkir_Matcha.jpg/1280px-Secangkir_Matcha.jpg` | pages/menu.html — pure tea: usucha | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Matcha_with_wagashi_by_rhosoi_in_Kyoto.jpg/1280px-Matcha_with_wagashi_by_rhosoi_in_Kyoto.jpg` | pages/menu.html — pure tea: koicha set | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Maccha_o_Kinkaku-ji_yn_Kyoto.JPG/1280px-Maccha_o_Kinkaku-ji_yn_Kyoto.JPG` | pages/menu.html — pure tea: hojicha / tea flight | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Matcha_Cheese_Cake.jpg/1280px-Matcha_Cheese_Cake.jpg` | pages/menu.html — cake: matcha cheesecake | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Matcha_Tiramisu_Cake.jpg/1280px-Matcha_Tiramisu_Cake.jpg` | pages/menu.html — cake: matcha tiramisu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Red_Bean_Matcha_Layer_Cake.jpg/1280px-Red_Bean_Matcha_Layer_Cake.jpg` | pages/menu.html — cake: red bean matcha roll / layer | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Maccha_tea_azuki_bean_paste_mochi.jpg/1280px-Maccha_tea_azuki_bean_paste_mochi.jpg` | pages/menu.html — mochi: azuki mochi | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Green_Wagashi_03.jpg/1280px-Green_Wagashi_03.jpg` | pages/menu.html — mochi: matcha daifuku | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Green_Wagashi_04.jpg/1280px-Green_Wagashi_04.jpg` | pages/menu.html — mochi: yomogi mochi | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Matsukaze.jpg/1280px-Matsukaze.jpg` | pages/menu.html — pairing: matsukaze | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Minaduki_001.jpg/1280px-Minaduki_001.jpg` | pages/menu.html — pairing: minazuki | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Japanese_cake_and_green_tea.jpg/1280px-Japanese_cake_and_green_tea.jpg` | pages/menu.html — pairing: afternoon pairing | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tencha_on_traditional_stone_mill_in_Uji_Japan.jpg/1280px-Tencha_on_traditional_stone_mill_in_Uji_Japan.jpg` | pages/about.html — page hero: cối đá xay trà | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bamboo_chasen_to_whisk_koicha_%2815455038443%29.jpg/1280px-Bamboo_chasen_to_whisk_koicha_%2815455038443%29.jpg` | pages/about.html — inspiration: chasen | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/%E5%AE%87%E6%B2%BB%E7%99%BD%E5%B7%9D%E3%81%AE%E8%8C%B6%E7%95%91_01.jpg/1280px-%E5%AE%87%E6%B2%BB%E7%99%BD%E5%B7%9D%E3%81%AE%E8%8C%B6%E7%95%91_01.jpg` | pages/about.html — sourcing: đồi trà Uji | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Making_of_azalea_wagashi_by_Noriko_Jazayeri_%281%29_2025-05-18.jpg/1280px-Making_of_azalea_wagashi_by_Noriko_Jazayeri_%281%29_2025-05-18.jpg` | pages/about.html — balance: tay nặn wagashi | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

25 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero: tách matcha và wagashi — https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Matcha_chawan_and_wagashi_at_teahouse_in_Japanese_garden.jpg/1920px-Matcha_chawan_and_wagashi_at_teahouse_in_Japanese_garden.jpg
- index.html — ritual: đánh trà bằng chasen — https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Whisk_macca_tea.jpg/1280px-Whisk_macca_tea.jpg
- index.html — signatures: matcha latte — https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Matcha_tea_latte_with_rosetta_latte_art.jpg/1280px-Matcha_tea_latte_with_rosetta_latte_art.jpg
- index.html — signatures: wagashi — https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Green_Wagashi_01.jpg/1280px-Green_Wagashi_01.jpg
- index.html — signatures: matcha mille crêpe — https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Matcha_Mille_Crepe_with_Ice_Cream.jpg/1280px-Matcha_Mille_Crepe_with_Ice_Cream.jpg
- index.html — craft: gốm thủ công — https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Iwao_Karatsu-ware_tea_bowl.jpg/1280px-Iwao_Karatsu-ware_tea_bowl.jpg
- pages/menu.html — latte: sea salt cream — https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Matcha_Latte_with_Seasalt_Cream.jpg/1280px-Matcha_Latte_with_Seasalt_Cream.jpg
- pages/menu.html — latte: hojicha — https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Iced_Hojicha_Latte_and_Iced_Matcha_Latte_-_Rawlab_Juice_%26_Tea_2025-07-12.jpg/1280px-Iced_Hojicha_Latte_and_Iced_Matcha_Latte_-_Rawlab_Juice_%26_Tea_2025-07-12.jpg
- pages/menu.html — latte: iced matcha latte — https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Matcha_latte_in_tall_glass.jpg/1280px-Matcha_latte_in_tall_glass.jpg
- pages/menu.html — pure tea: usucha — https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Secangkir_Matcha.jpg/1280px-Secangkir_Matcha.jpg
- pages/menu.html — pure tea: koicha set — https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Matcha_with_wagashi_by_rhosoi_in_Kyoto.jpg/1280px-Matcha_with_wagashi_by_rhosoi_in_Kyoto.jpg
- pages/menu.html — pure tea: hojicha / tea flight — https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Maccha_o_Kinkaku-ji_yn_Kyoto.JPG/1280px-Maccha_o_Kinkaku-ji_yn_Kyoto.JPG
- pages/menu.html — cake: matcha cheesecake — https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Matcha_Cheese_Cake.jpg/1280px-Matcha_Cheese_Cake.jpg
- pages/menu.html — cake: matcha tiramisu — https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Matcha_Tiramisu_Cake.jpg/1280px-Matcha_Tiramisu_Cake.jpg
- pages/menu.html — cake: red bean matcha roll / layer — https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Red_Bean_Matcha_Layer_Cake.jpg/1280px-Red_Bean_Matcha_Layer_Cake.jpg
- pages/menu.html — mochi: azuki mochi — https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Maccha_tea_azuki_bean_paste_mochi.jpg/1280px-Maccha_tea_azuki_bean_paste_mochi.jpg
- pages/menu.html — mochi: matcha daifuku — https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Green_Wagashi_03.jpg/1280px-Green_Wagashi_03.jpg
- pages/menu.html — mochi: yomogi mochi — https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Green_Wagashi_04.jpg/1280px-Green_Wagashi_04.jpg
- pages/menu.html — pairing: matsukaze — https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Matsukaze.jpg/1280px-Matsukaze.jpg
- pages/menu.html — pairing: minazuki — https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Minaduki_001.jpg/1280px-Minaduki_001.jpg
- pages/menu.html — pairing: afternoon pairing — https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Japanese_cake_and_green_tea.jpg/1280px-Japanese_cake_and_green_tea.jpg
- pages/about.html — page hero: cối đá xay trà — https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tencha_on_traditional_stone_mill_in_Uji_Japan.jpg/1280px-Tencha_on_traditional_stone_mill_in_Uji_Japan.jpg
- pages/about.html — inspiration: chasen — https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bamboo_chasen_to_whisk_koicha_%2815455038443%29.jpg/1280px-Bamboo_chasen_to_whisk_koicha_%2815455038443%29.jpg
- pages/about.html — sourcing: đồi trà Uji — https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/%E5%AE%87%E6%B2%BB%E7%99%BD%E5%B7%9D%E3%81%AE%E8%8C%B6%E7%95%91_01.jpg/1280px-%E5%AE%87%E6%B2%BB%E7%99%BD%E5%B7%9D%E3%81%AE%E8%8C%B6%E7%95%91_01.jpg
- pages/about.html — balance: tay nặn wagashi — https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Making_of_azalea_wagashi_by_Noriko_Jazayeri_%281%29_2025-05-18.jpg/1280px-Making_of_azalea_wagashi_by_Noriko_Jazayeri_%281%29_2025-05-18.jpg

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/menu.html — page-hero (từ khóa dự kiến: "ceremonial matcha powder")
- pages/about.html — slow-living (từ khóa dự kiến: "handmade ceramic tea bowl, japanese tea room")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Sao chép nhanh (số điện thoại / email)
- Tabs
- Accordion (mở / đóng nội dung)
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/menu.html).
- Chuyển động (đếm trong code): `data-reveal` ×27, `data-header` ×3, `data-split` ×3, `data-reveal-stagger` ×5, `data-parallax` ×2, `data-float` ×4, `data-particles` ×1, `data-reveal="clip"` ×7, `data-drag-scroll` ×1; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 15:42 23/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "MATCHA ATELIER" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 10 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 15:42 23/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng 3 trang (Home, Menu, About) theo chú thích BA "tối đa 3 trang"; liên hệ / giờ mở cửa đặt ở section #visit của trang chủ và footer mọi trang
- concept.md mục 2 ghi "không tạo bộ chuyển ngôn ngữ" nhưng chú thích BA (ưu tiên cao hơn) yêu cầu website song ngữ Việt - Anh và nút chuyển đổi (dòng cuối "chuyển đổi ảnh việt" hiểu là chuyển Anh - Việt): HTML mặc định tiếng Anh, lang="en"; nút EN / VI trên header đổi chữ sang tiếng Việt bằng thuộc tính data-vi (site.js), lưu lựa chọn trong localStorage
- Màu theo art direction của BA (#65764B, #F5F1E7, #242821, #B7C2A0) thay cho bảng màu preset nature; thêm matcha-deep #4B5937 cho chữ nhỏ / nút để đạt tương phản AA
- Không có form, giỏ hàng, đặt hàng hay thanh toán theo chú thích BA; hành động chính là xem thực đơn và ghé quán (gọi điện, email, sao chép địa chỉ, bản đồ)
- Chuyển trang mượt: main hiện mờ dần khi vào trang, mờ đi khi bấm link nội bộ (site.css + site.js), tắt khi prefers-reduced-motion
- Ảnh: search_images (openverse) bị quá thời gian / trả ảnh lạc đề nên dùng ảnh thật Wikimedia Commons qua link_image; hết hạn mức 40 link nên hero trang Menu dùng mục lục chữ và section slow-living trang About dùng thẻ chữ thay vì ảnh

Giới hạn:

- Địa chỉ, số điện thoại, email, giá và tên người sáng lập là nội dung mẫu, cần khách xác nhận
- Bản dịch tiếng Việt nằm trong thuộc tính data-vi và chỉ hiện sau khi bấm nút VI (cần JavaScript)
- Ảnh dùng link ngoài Wikimedia Commons (cần mạng); nên thay bằng ảnh chụp thật của quán
- Bản đồ Google Maps nhúng bằng iframe, cần mạng và không hiển thị khi mở offline
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
