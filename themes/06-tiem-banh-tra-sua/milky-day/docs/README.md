# MILKY DAY

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website giới thiệu thương hiệu trà sữa và bánh ngọt
- **Thương hiệu / dự án:** MILKY DAY
- **Mục đích:** Thiết kế website giới thiệu thương hiệu trà sữa và bánh ngọt MILKY DAY. Thương hiệu hướng đến học sinh, sinh viên và người trẻ, mang tinh thần vui vẻ, ngọt ngào, gần gũi. Website phải giống một thương hiệu F&B được đầu tư nhận diện chuyên nghiệp, không phải giao diện bán hàng có sẵn.
- **Ý tưởng thị giác (AI ghi):** Bọt sữa và nét kem: mép section uốn lượn như lớp kem phủ, nhãn viết tay như sticker dán ly, sao nhỏ và trái tim trôi rất nhẹ quanh ảnh, bo góc lớn và nút pill trên nền kem sữa / hồng phấn

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Nature / Organic / Atmospheric — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 2.210 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Fraunces`: đủ ký tự tiếng Việt
- `Manrope`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | MILKY DAY - Ngọt ngào từ ngụm đầu tiên | Giới thiệu thương hiệu, món được yêu thích, dẫn sang Menu và Về chúng tôi | top, hero → hero-split, gioi-thieu → story-keywords, yeu-thich → list-cards, khoanh-khac → gallery-bento, khong-gian → story-split, footer | 11 |
| `pages/about.html` | Về chúng tôi - MILKY DAY | Câu chuyện thương hiệu, ba giá trị, ảnh chi tiết đồ uống / bánh / không gian | top, about-hero → page-hero, cau-chuyen → story-letter, gia-tri → features-numbered, goc-tiem → gallery-lookbook, hen-gap → cta-type, footer | 4 |
| `pages/menu.html` | Sản phẩm & Menu - MILKY DAY | Toàn bộ menu theo 4 danh mục, lọc client-side, tùy chỉnh ly, kết bằng dải ảnh + CTA về Trang chủ | top, menu-hero → page-hero, thuc-don → gallery-filter, tuy-chinh → faq-split, dai-anh → cta-strip, footer | 11 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
milky-day/
  web/
    assets/
      css/
        site.css
      img/  (29 ảnh + CREDITS.md)
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

- **⚠ Một số lượt tìm ảnh lỗi:** 2/24 lượt lỗi (timeout)
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 8 ảnh chưa dùng: assets/img/fav-cupcake.jpg, assets/img/menu-brown-sugar.jpg, assets/img/menu-cheese-foam.jpg, assets/img/menu-peach-tea.jpg

Tool đã ghi 24 lượt tìm (nguồn: openverse), 28 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| bubble tea cake pastel | openverse | 15 ảnh | 35051 ms |
| strawberry milk tea | openverse | 8 ảnh | 19851 ms |
| matcha latte | openverse | 13 ảnh | 13326 ms |
| cupcake pink frosting | openverse | 7 ảnh | 26977 ms |
| iced drink pastry cafe table | openverse | 14 ảnh | 64818 ms |
| chocolate chip cookies | openverse | 12 ảnh | 13482 ms |
| mini cake strawberry cream | openverse | 11 ảnh | 36194 ms |
| bubble tea tapioca pearls cup | openverse | 14 ảnh | 78532 ms |
| cupcakes buttercream bakery | openverse | 16 ảnh | 39763 ms |
| pink milkshake whipped cream | openverse | 9 ảnh | 41853 ms |
| dessert cafe interior cozy | openverse | 11 ảnh | 27239 ms |
| brown sugar milk tea boba | openverse | 12 ảnh | 41259 ms |
| taro milk tea | — | lỗi timeout | 36005 ms |
| peach iced tea glass | openverse | 12 ảnh | 40053 ms |
| lemon iced tea fruit | openverse | 13 ảnh | 28368 ms |
| milk tea free image | openverse | 3 ảnh | 52625 ms |
| free fruit tea image | openverse | 16 ảnh | 55471 ms |
| free cheesecake strawberry image | openverse | 4 ảnh | 18469 ms |
| free macarons pastel image | openverse | 14 ảnh | 32745 ms |
| pastel cafe interior pink | openverse | 2 ảnh | 35912 ms |
| cafe interior free image | openverse | 18 ảnh | 58175 ms |
| barista pouring milk tea | openverse | 9 ảnh | 35616 ms |
| baker hands frosting cake | openverse | 12 ảnh | 40762 ms |
| pearl milk tea | — | lỗi timeout | 37382 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero.webp` | index.html — hero, trà sữa đá | openverse | CC CC0 1.0 | ✓ |
| `assets/img/fav-strawberry-milk.jpg` | index.html — Được yêu thích: trà sữa dâu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/fav-matcha-latte.webp` | index.html — Được yêu thích: matcha latte | openverse | CC CC0 1.0 | ✓ |
| `assets/img/fav-cupcake.jpg` | index.html — Được yêu thích: cupcake | openverse | CC CC0 1.0 | ✗ |
| `assets/img/fav-cookie.webp` | index.html — Được yêu thích: cookie | openverse | CC CC0 1.0 | ✓ |
| `assets/img/fav-cupcake.webp` | index.html — Được yêu thích: cupcake | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-hero-pink.webp` | index.html — hero, đồ uống hồng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-space.webp` | index.html — không gian thương hiệu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-collage-moment.jpg` | index.html — dải ảnh ghép: khoảnh khắc tại tiệm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-collage-dessert.webp` | index.html — dải ảnh ghép: bánh ngọt dâu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/menu-brown-sugar.jpg` | pages/menu.html — trà sữa đường nâu | openverse | CC BY-NC-ND 2.0 | ✗ |
| `assets/img/menu-cheese-foam.jpg` | pages/menu.html — trà sữa kem cheese | openverse | CC BY-ND 2.0 | ✗ |
| `assets/img/menu-lemon-tea.jpg` | pages/menu.html — trà chanh mật ong | openverse | CC CC0 1.0 | ✓ |
| `assets/img/menu-peach-tea.jpg` | pages/menu.html — trà đào | openverse | CC BY 2.0 | ✗ |
| `assets/img/menu-cheesecake.webp` | pages/menu.html — bánh cheesecake dâu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/menu-fruit-tart.webp` | pages/menu.html — tart trái cây | openverse | CC CC0 1.0 | ✓ |
| `assets/img/menu-macaron.webp` | pages/menu.html — macaron hồng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/menu-berry-tea.webp` | pages/menu.html — trà dâu rừng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/menu-lychee-milk-tea.jpg` | pages/menu.html — trà sữa thạch vải | openverse | CC BY-NC 2.0 | ✗ |
| `https://cdn.pakutaso.com/shared/img/thumb/tapiocaGFVL4356_TP_V.jpg` | pages/menu.html — trà sữa trân châu truyền thống | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://cdn.pakutaso.com/shared/img/thumb/tapiocaGFVL5037_TP_V.jpg` | pages/menu.html — trà sữa đường nâu | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://cdn.pakutaso.com/shared/img/thumb/tapiocaGFVL5040_TP_V.jpg` | pages/menu.html — trà sữa kem cheese | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `assets/img/menu-cupcake-strawberry.jpg` | pages/menu.html — cupcake dâu | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/menu-strip-macarons.webp` | pages/menu.html — dải ảnh cuối trang | openverse | CC CC0 1.0 | ✓ |
| `assets/img/menu-strip-cake.webp` | pages/menu.html — dải ảnh cuối trang | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-hero-shop.webp` | pages/about.html — hero không gian tiệm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-space-window.webp` | pages/about.html — ảnh chi tiết không gian | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-drink-craft.jpg` | pages/about.html — ảnh chi tiết pha đồ uống | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-baking.webp` | pages/about.html — ảnh chi tiết làm bánh | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-collage-counter.jpg` | index.html — dải ảnh ghép: quầy tiệm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-collage-pastry.jpg` | index.html — dải ảnh ghép: bánh và đồ uống | openverse | CC CC0 1.0 | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_bubble_tea_with_tapioca_pearls%2C_July_2018.jpg/960px-A_bubble_tea_with_tapioca_pearls%2C_July_2018.jpg` | pages/menu.html — trà sữa trân châu Milky | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Taipei_pearlmilktea.jpg/960px-Taipei_pearlmilktea.jpg` | pages/menu.html — trà sữa đường nâu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/2009-12-30_cups_of_bubble_tea_at_a_Chunshuitang_in_Taipei.jpg/960px-2009-12-30_cups_of_bubble_tea_at_a_Chunshuitang_in_Taipei.jpg` | pages/menu.html — ô long sữa kem muối | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

3 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- pages/menu.html — trà sữa trân châu Milky — https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_bubble_tea_with_tapioca_pearls%2C_July_2018.jpg/960px-A_bubble_tea_with_tapioca_pearls%2C_July_2018.jpg
- pages/menu.html — trà sữa đường nâu — https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Taipei_pearlmilktea.jpg/960px-Taipei_pearlmilktea.jpg
- pages/menu.html — ô long sữa kem muối — https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/2009-12-30_cups_of_bubble_tea_at_a_Chunshuitang_in_Taipei.jpg/960px-2009-12-30_cups_of_bubble_tea_at_a_Chunshuitang_in_Taipei.jpg

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Sao chép nhanh (số điện thoại / email)
- Nút về đầu trang
- Accordion (mở / đóng nội dung)
- Lọc theo nhóm
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/menu.html).
- Chuyển động (đếm trong code): `data-reveal` ×29, `data-header` ×3, `data-split` ×4, `data-reveal-stagger` ×3, `data-parallax` ×2, `data-float` ×9, `data-particles` ×2, `data-reveal="clip"` ×12; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:04 22/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "MILKY DAY" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 10 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 11:05 22/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Website 3 trang (Trang chủ / Sản phẩm & Menu / Về chúng tôi) theo ràng buộc 'tối đa 3 trang' của BA.
- BA yêu cầu song ngữ hoàn chỉnh + công tắc VI-EN: mặc định tiếng Việt (lang=vi); công tắc ở header đổi toàn bộ chữ, alt ảnh, title, meta sang tiếng Anh bằng assets/js/site.js (data-en), lưu lựa chọn trong localStorage. Ghi đè mục 'không tạo bộ chuyển ngôn ngữ' của concept.md vì chú thích BA ưu tiên hơn. Chú thích (data-caption) trong lightbox giữ tiếng Việt.
- Màu và font theo art direction của BA thay cho preset Nature: hồng phấn #F5C8D8, kem sữa #FFF8EF, nâu cacao #69483F, vàng bơ #FFE6A7; heading Nunito (sans tròn, đậm), thân bài Be Vietnam Pro, nhãn trang trí Patrick Hand (chữ viết tay) - cả ba đủ ký tự tiếng Việt.
- Không có trang Liên hệ riêng (giới hạn 3 trang): địa chỉ, giờ mở cửa, điện thoại (tel + sao chép), email mẫu đặt ở section Không gian và footer.
- Không có giá, đặt hàng, giỏ hàng, thanh toán hay form giao dịch theo ràng buộc của BA.
- Thêm section 'Tùy chỉnh ly của bạn' (accordion) ở trang Menu và CTA cuối trang Về chúng tôi để đủ tương tác và kết trang.
- Trà sữa trên trang Menu dùng link ảnh Wikimedia Commons (thư viện ảnh không có ảnh trà sữa phù hợp); link pakutaso.com bị chặn trong trình duyệt nên đã thay.
- Một số ảnh đã tải nhưng không dùng vì có logo thương hiệu khác hoặc bối cảnh không hợp (menu-brown-sugar, menu-cheese-foam, menu-lychee-milk-tea, menu-peach-tea, fav-cupcake.jpg) - có thể xóa khỏi assets/img.

Giới hạn:

- Song ngữ VI-EN chạy phía client (không có URL riêng cho tiếng Anh, không tối ưu SEO tiếng Anh).
- Địa chỉ, số điện thoại, email, giờ mở cửa và mô tả món là nội dung mẫu, cần khách xác nhận.
- Ảnh trà sữa trên trang Menu là link ngoài (Wikimedia), cần ảnh sản phẩm thật của tiệm khi triển khai.
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
