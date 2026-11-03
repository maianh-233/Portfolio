# An Nam Ký Test

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website thương hiệu thời trang áo dài Việt Nam
- **Thương hiệu / dự án:** An Nam Ký Test
- **Mục đích:** Xây dựng nhận diện thương hiệu
- **Ý tưởng thị giác (AI ghi):** Đường kẻ mảnh màu đỏ mận như đường may viền tà áo: chạy dọc lưới tạp chí, đánh số trang kiểu ấn phẩm, ảnh đặt như trang đôi

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Minimal / Premium / Editorial — BA chọn |
| Mức chuyển động | Level 1 (BA chọn) |
| Màu sắc | #7A1F2B, kem và xanh rêu |
| Font | Playfair Display |
| Section BA chọn | About / Câu chuyện thương hiệu (có mô tả); Collections / Bộ sưu tập; Contact / Liên hệ |
| Chú thích bổ sung | 117 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Playfair Display`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | An Nam Ký Test — Áo dài may đo từ lụa Việt | Giới thiệu thương hiệu, dẫn sang câu chuyện, bộ sưu tập và hẹn may đo | top, hero → hero-type, story → story-letter, collections → gallery-lookbook, craft → features-numbered, quote → quote-full, cta → cta-type, footer → footer-big | 5 |
| `about.html` | Câu chuyện — An Nam Ký Test | Kể quá trình hình thành thương hiệu và cảm hứng từ văn hóa Việt | top, page-hero → page-hero, cau-chuyen → story-editorial, lua → gallery-band, quy-trinh → process-steps, hanh-trinh → timeline, cta → cta-type, footer → footer-big | 4 |
| `article-ao-bung-qua.html` | Chọn áo dài cho hội chị em bưng quả — An Nam Ký Test | Bài ghi chép mẫu về áo cưới hỏi, dẫn sang Hỷ Sự và hẹn may | top, page-hero → page-hero, bai-viet → detail-article, lien-quan → cta-type, footer → footer-big | 2 |
| `article-lua-nha-xa.html` | Một ngày ở làng lụa Nha Xá — An Nam Ký Test | Bài ghi chép mẫu về chất liệu lụa | top, page-hero → page-hero, bai-viet → detail-article, lien-quan → cta-type, footer → footer-big | 2 |
| `collection-hy-su.html` | Hỷ Sự — An Nam Ký Test | Chi tiết bộ sưu tập Hỷ Sự (cưới hỏi) | top, page-hero → page-hero, bai-viet → detail-article, hinh-anh → gallery-lookbook, cac-mau → features-numbered, lien-quan → cta-type, footer → footer-big | 6 |
| `collection-sen-ha.html` | Sen Hạ — An Nam Ký Test | Chi tiết bộ sưu tập Sen Hạ | top, page-hero → page-hero, bai-viet → detail-article, cac-mau → features-numbered, lien-quan → cta-type, footer → footer-big | 2 |
| `collections.html` | Bộ sưu tập — An Nam Ký Test | Danh sách bộ sưu tập, lọc theo dịp mặc, thư viện ảnh trên phố | top, page-hero → page-hero, danh-sach → list-cards, tren-pho → gallery-masonry, cta → cta-type, footer → footer-big | 11 |
| `contact.html` | Liên hệ — An Nam Ký Test | Thông tin xưởng, form hẹn may đo (demo) và câu hỏi trước khi ghé | top, page-hero → page-hero, hen-may → contact-split, hoi-dap → faq, footer → footer-big | 1 |
| `journal.html` | Ghi chép — An Nam Ký Test | Danh sách ghi chép (blog) về lụa, nghề may và áo dài; nhận thư theo mùa | top, page-hero → page-hero, noi-bat → editorial-feature, tat-ca → blog-list, nhan-thu → cta-newsletter, footer → footer-big | 2 |
| `may-do.html` | May đo — An Nam Ký Test | Giới thiệu các cách nhận may, chất liệu, một buổi hẹn và cách giữ áo, dẫn tới hẹn may đo | top, page-hero → page-hero, dich-vu → services-tabs, chat-lieu → features-numbered, buoi-hen → timeline, giu-ao → faq, cta → cta-type, footer → footer-big | 4 |

## 4. Cấu trúc thư mục

```
_build/
  sitemap.json
assets/
  css/
    site.css
  img/  (39 ảnh + CREDITS.md)
  js/
    atmos.js
    motion.js
    tw-config.js
    ui.js
about.html
article-ao-bung-qua.html
article-lua-nha-xa.html
collection-hy-su.html
collection-sen-ha.html
collections.html
contact.html
index.html
journal.html
may-do.html
```

`_build/` là dữ liệu nội bộ của BA Tool (sitemap AI ghi) — không cần khi đưa website lên.

## 5. Tổ chức code & thành phần chính

- `assets/js/tw-config.js` — Cấu hình Tailwind dùng chung: màu, font (một nguồn cho mọi trang)
- `assets/css/site.css` — Biến CSS (:root) và vài style Tailwind không làm được
- `assets/js/ui.js` — Tool sinh — menu, tabs, accordion, carousel, lightbox, modal, form (qua data-*)
- `assets/js/motion.js` — Tool sinh — hiệu ứng cuộn / hover (qua data-*), tôn trọng prefers-reduced-motion
- `assets/js/atmos.js` — Tool sinh — không khí: mây, hạt sáng, cảnh nhiều lớp (Level 2–3)
- Mỗi trang là một file HTML tĩnh, header / footer giống nhau; mỗi khối nội dung là `<section id data-section="<biến thể>">` để sửa riêng từng khối.
- Tailwind CSS nạp qua CDN (`cdn.tailwindcss.com`), font qua Google Fonts.

## 6. Hình ảnh: tìm kiếm & tích hợp

- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 2 ảnh chưa dùng: assets/img/may-do-lua.jpg, assets/img/article-lua-ken-tam.jpg

Tool đã ghi 29 lượt tìm (nguồn: openverse), 47 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| ao dai woman portrait | openverse | 12 ảnh | 3310 ms |
| ao dai vietnamese dress | openverse | 5 ảnh | 7799 ms |
| silk fabric rolls | openverse | 8 ảnh | 2536 ms |
| tailor sewing hands | openverse | 9 ảnh | 211 ms |
| aodai | openverse | 20 ảnh | 1453 ms |
| ao dai hue | openverse | 12 ảnh | 3388 ms |
| vietnam silk shop | openverse | 1 ảnh | 5198 ms |
| lotus flower pond vietnam | openverse | 9 ảnh | 3932 ms |
| hand embroidery silk thread | openverse | 10 ảnh | 2498 ms |
| hoi an tailor shop | openverse | 11 ảnh | 6574 ms |
| ao dai white girl | openverse | 14 ảnh | 8630 ms |
| vietnamese traditional dress woman | openverse | 3 ảnh | 7827 ms |
| hue imperial citadel gate | openverse | 8 ảnh | 6491 ms |
| Ao Dai Nguyen Hue March | openverse | 20 ảnh | 2730 ms |
| ao dai students white | openverse | 13 ảnh | 4039 ms |
| tailor measuring woman | openverse | 6 ảnh | 5431 ms |
| silk weaving loom vietnam | openverse | 11 ảnh | 5004 ms |
| silk fabric rolls shop | openverse | 8 ảnh | 5188 ms |
| vietnamese wedding ao dai | openverse | 0 ảnh | 8234 ms |
| hoi an tailor shop | openverse | 13 ảnh | 7661 ms |
| silk worm cocoons | openverse | 10 ảnh | 9785 ms |
| silk fabric vietnam | openverse | 14 ảnh | 6187 ms |
| embroidery needle silk thread | openverse | 12 ảnh | 10304 ms |
| ao dai | openverse | 20 ảnh | 2988 ms |
| tailor sewing machine vietnam | openverse | 6 ảnh | 6589 ms |
| silk weaving village | openverse | 17 ảnh | 3625 ms |
| silk cocoons | openverse | 14 ảnh | 3273 ms |
| fabric shop vietnam market | openverse | 10 ảnh | 6433 ms |
| ao dai woman portrait | openverse | 13 ảnh | 10555 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-ao-dai-hue.jpg` | index.html — ảnh hero lệch | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/home-story-ao-dai.jpg` | index.html — ảnh dọc đoạn câu chuyện | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/lookbook-01.jpg` | index.html — lookbook | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/lookbook-02.jpg` | index.html — lookbook | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/lookbook-04.jpg` | collections — ảnh bộ sưu tập | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/lookbook-03.jpg` | ảnh áo dài cho lookbook/bộ sưu tập | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/lookbook-05.jpg` | ảnh áo dài cho lookbook/bộ sưu tập | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/lookbook-06.jpg` | ảnh áo dài cho lookbook/bộ sưu tập | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/lookbook-07.jpg` | ảnh áo dài cho lookbook/bộ sưu tập | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/lookbook-08.jpg` | ảnh áo dài cho lookbook/bộ sưu tập | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/lookbook-09.jpg` | ảnh áo dài cho lookbook/bộ sưu tập | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/about-tiem-may.jpg` | about.html — tiệm may đo | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/contact-boutique.jpg` | contact.html — cửa hàng | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/col-trinh-nguyen-cover.jpg` | collections — bìa BST áo dài trắng | openverse | CC BY 2.0 | ✓ |
| `assets/img/ao-dai-a.jpg` | ảnh áo dài cho chi tiết BST | openverse | CC BY 2.0 | ✓ |
| `assets/img/ao-dai-b.jpg` | ảnh áo dài cho chi tiết BST | openverse | CC BY 2.0 | ✓ |
| `assets/img/ao-dai-c.jpg` | ảnh áo dài cho chi tiết BST | openverse | CC BY 2.0 | ✓ |
| `assets/img/ao-dai-d.jpg` | ảnh áo dài cho chi tiết BST | openverse | CC BY 2.0 | ✓ |
| `assets/img/ao-dai-e.jpg` | ảnh áo dài cho chi tiết BST | openverse | CC BY 2.0 | ✓ |
| `assets/img/col-van-mieu.jpg` | collections — BST trắng / Văn Miếu | openverse | CC BY-ND 2.0 | ✓ |
| `assets/img/sen-ha-lotus.jpg` | collection-sen-ha.html — cảm hứng hoa sen | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-hue-ngo-mon.jpg` | about.html — cảm hứng cố đô Huế | openverse | CC BY 2.0 | ✓ |
| `assets/img/nh-a.jpg` | collections / chi tiết BST | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/nh-b.jpg` | collections / chi tiết BST | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/nh-c.jpg` | collections / chi tiết BST | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/nh-d.jpg` | collections / chi tiết BST | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/nh-e.jpg` | collections / chi tiết BST | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/nh-f.jpg` | collections / chi tiết BST | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/ao-dai-f.jpg` | collection-hy-su.html — ảnh BST cưới | openverse | CC BY 2.0 | ✓ |
| `assets/img/ao-dai-g.jpg` | collection-hy-su.html — ảnh BST cưới | openverse | CC BY 2.0 | ✓ |
| `assets/img/may-do-hero-may-khau.webp` | may-do.html — ảnh hero xưởng may | openverse | CC CC0 1.0 | ✓ |
| `assets/img/article-lua-khung-cui.jpg` | article-lua-nha-xa.html — ảnh hero khung cửi dệt lụa | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/may-do-lua.jpg` | may-do.html — ảnh chất liệu lụa | openverse | CC BY-NC-SA 2.0 | ✗ |
| `assets/img/may-do-gia-dinh.jpg` | may-do.html — dịch vụ áo gia đình / dịp lễ | openverse | CC BY 2.0 | ✓ |
| `assets/img/article-lua-ken-tam.jpg` | article-lua-nha-xa.html — ảnh kén tằm trong bài | openverse | CC BY-NC-ND 2.0 | ✗ |
| `assets/img/may-do-lua.webp` | may-do.html — thư viện vải tại xưởng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/article-giu-ao-hero.jpg` | article-giu-ao-lua.html — ảnh hero áo dài lụa | openverse | CC BY 2.0 | ✓ |
| `assets/img/article-lua-ken-tam.webp` | article-lua-nha-xa.html — ảnh lụa nhuộm trong bài | openverse | CC CC0 1.0 | ✓ |
| `assets/img/may-do-ca-nhan.jpg` | may-do.html — dịch vụ may đo cá nhân | openverse | CC BY 2.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Lọc theo nhóm
- Accordion (mở / đóng nội dung)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Tabs
- Điều hướng: 10 trang liên kết qua header / footer (menu: about.html, collections.html, contact.html, index.html, journal.html, may-do.html).
- Chuyển động (đếm trong code): `data-reveal` ×100, `data-header` ×10, `data-reveal-stagger` ×7, `data-count-to` ×3, `data-reveal="clip"` ×1.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:52 16/10/2026: 10 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "An Nam Ký Test" có ở title / header / footer mọi trang
- ✓ Màu BA yêu cầu: Có trong code: #7a1f2b
- ✓ Font BA yêu cầu: "Playfair Display" có trong font-family / Google Fonts
- AI tự xem lại trang bằng công cụ preview: 9 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 11:52 16/10/2026 | Sửa: Tạo tiếp các trang còi lại vơí phong cách cũ đi bạn | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Theo góp ý của BA: thêm trang May đo (may-do.html), Ghi chép (journal.html) và 2 bài chi tiết mẫu, cùng phong cách editorial cũ; menu header / footer mọi trang thêm 'May đo', 'Ghi chép'.
- Không thêm mua hàng / giỏ hàng vì website chỉ giới thiệu thương hiệu (chú thích BA).
- Bộ sưu tập Tinh Khôi để 'Sắp ra mắt', chỉ liên kết tới mục trong collections.html, chưa có trang chi tiết.
- Còn 2 file ảnh tải thử không dùng (assets/img/may-do-lua.jpg, assets/img/article-lua-ken-tam.jpg) do sai chủ đề, đã thay bằng bản .webp; tool không cho xóa file.

Giới hạn:

- Form hẹn may đo và form nhận thư là bản demo, chưa có backend.
- Ảnh lấy từ thư viện ảnh mở (Openverse), cần thay bằng ảnh thật của thương hiệu khi đưa lên web.
- Form là bản demo: kiểm tra dữ liệu và lưu tạm trong trình duyệt (localStorage), **không gửi đi đâu** — cần backend / dịch vụ form khi chạy thật.
- Nội dung, số liệu, tên người trong website là nội dung mẫu, cần khách xác nhận.

## 10. Cài đặt & chạy

Website tĩnh, **không có bước cài đặt hay build**.

- Mở trực tiếp: nhấp đúp `index.html` (chạy được qua `file://`).
- Hoặc chạy máy chủ tĩnh trong thư mục này: `npx serve .` (cần Node.js) rồi mở địa chỉ được in ra.
- Cần Internet để nạp Tailwind CDN và Google Fonts. Khi đưa lên production nên build Tailwind thành file CSS tĩnh thay cho CDN.
- Đưa lên hosting tĩnh (Netlify, Vercel, GitHub Pages…): tải toàn bộ thư mục, có thể bỏ `_build/`.

## 11. Biến môi trường

- Website **không cần** biến môi trường nào.
- Chỉ BA Tool (khi dựng lại / đổi ảnh) dùng tùy chọn `PEXELS_API_KEY`, `UNSPLASH_ACCESS_KEY` trong `.env` của tool — không đặt thì tool dùng Openverse. Không ghi giá trị khóa vào website.
