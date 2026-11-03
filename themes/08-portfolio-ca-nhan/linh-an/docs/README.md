# Linh An

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website portfolio cá nhân
- **Thương hiệu / dự án:** Linh An
- **Mục đích:** Portfolio cá nhân của nghệ nhân hoa cưới Linh An (thương hiệu BLOOMÉ): giới thiệu phong cách, trưng bày bộ sưu tập và hoa cầm tay, kể quy trình sáng tạo và dẫn các cặp đôi sắp cưới tới trang liên hệ để trao đổi hợp tác. Khách truy cập: cặp đôi sắp cưới và wedding planner tìm phong cách hoa nghệ thuật. _(AI suy luận — BA không ghi)_
- **Ý tưởng thị giác (AI ghi):** Phòng triển lãm hoa: mỗi ảnh đi kèm một nhãn tường bảo tàng (tên tác phẩm in nghiêng + chất liệu hoa), một nét thân cây mảnh màu sage dẫn vào tiêu đề, nền Warm Ivory và điểm nhấn Burgundy

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Art Gallery — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 9.820 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Cormorant Garamond`: đủ ký tự tiếng Việt
- `Montserrat`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | Linh An — Mỗi chuyện tình nở theo một cách riêng | Mở đầu bằng không gian hoa cưới, giới thiệu ngắn nghệ nhân, dẫn sang bộ sưu tập, trưng bày chi tiết, lời khách và kêu gọi liên hệ | top, hero → hero-split, artist → story-letter, collections → features-numbered, details → gallery-lookbook, kind-words → quote-full, cta → cta-type, footer | 8 |
| `pages/about.html` | Giới thiệu — Linh An | Câu chuyện nghệ nhân Linh An, triết lý thiết kế và quy trình sáng tạo Behind the Blooms | top, page-hero → page-hero, story → story-editorial, process → timeline, cta → cta-fullbleed, footer | 3 |
| `pages/bouquets.html` | Hoa cầm tay — Linh An | Gallery editorial các kiểu hoa cầm tay cô dâu, không hiển thị giá | top, page-hero → page-hero, lookbook → gallery-lookbook, shapes → features-numbered, cta → cta-type, footer | 5 |
| `pages/collection-garden-romance.html` | Garden Romance — Linh An | Chi tiết bộ sưu tập Garden Romance: ý tưởng, chất liệu hoa, bảng màu | top, page-hero → page-hero, concept → detail-article, next → teaser-row, footer | 2 |
| `pages/collection-ivory-elegance.html` | Ivory Elegance — Linh An | Chi tiết bộ sưu tập Ivory Elegance | top, page-hero → page-hero, concept → detail-article, next → teaser-row, footer | 2 |
| `pages/collection-velvet-rose.html` | Velvet Rose — Linh An | Chi tiết bộ sưu tập Velvet Rose | top, page-hero → page-hero, concept → detail-article, next → teaser-row, footer | 2 |
| `pages/collection-wildflower-dreams.html` | Wildflower Dreams — Linh An | Chi tiết bộ sưu tập Wildflower Dreams | top, page-hero → page-hero, concept → detail-article, next → teaser-row, footer | 2 |
| `pages/collections.html` | Bộ sưu tập — Linh An | Trưng bày 4 bộ sưu tập chữ ký với tỷ lệ ảnh và bố cục khác nhau, dẫn sang trang chi tiết | top, page-hero → page-hero, signature → list-cards, cta → cta-type, footer | 4 |
| `pages/contact.html` | Liên hệ — Linh An | Mời cặp đôi chia sẻ ý tưởng; form demo, thông tin liên hệ mẫu, câu hỏi thường gặp | top, contact → contact-split, faq → contact-page, footer | 0 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
linh-an/
  web/
    assets/
      css/
        site.css
      img/  (29 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        tw-config.js
        ui.js
    pages/
      about.html
      bouquets.html
      collection-garden-romance.html
      collection-ivory-elegance.html
      collection-velvet-rose.html
      collection-wildflower-dreams.html
      collections.html
      contact.html
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
- Mỗi trang là một file HTML tĩnh, header / footer giống nhau; mỗi khối nội dung là `<section id data-section="<biến thể>">` để sửa riêng từng khối.
- Tailwind CSS nạp qua CDN (`cdn.tailwindcss.com`), font qua Google Fonts.

## 6. Hình ảnh: tìm kiếm & tích hợp

- **✓ Chuỗi ảnh hoạt động:** 28 ảnh được dùng trên 8 trang

Tool đã ghi 21 lượt tìm (nguồn: openverse), 30 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| wedding reception floral decoration | openverse | 11 ảnh | 14130 ms |
| florist arranging flowers | openverse | 5 ảnh | 11713 ms |
| bridal bouquet | openverse | 20 ảnh | 6592 ms |
| wedding bouquet roses bride | openverse | 20 ảnh | 12091 ms |
| wedding table flowers candles | openverse | 10 ảnh | 15616 ms |
| wedding ceremony flower arch | openverse | 18 ảnh | 17357 ms |
| burgundy roses dark moody | openverse | 11 ảnh | 14302 ms |
| white peonies ranunculus bouquet | openverse | 14 ảnh | 32629 ms |
| garden roses pink bouquet | openverse | 16 ảnh | 16574 ms |
| wedding aisle flowers ceremony | openverse | 3 ảnh | 25731 ms |
| dark red roses bouquet | openverse | 14 ảnh | 20168 ms |
| wildflower bouquet meadow | openverse | 7 ảnh | 10904 ms |
| bride holding bouquet | openverse | 5 ảnh | 25395 ms |
| woman florist flower shop | openverse | 14 ảnh | 22364 ms |
| burgundy dahlia bouquet | openverse | 14 ảnh | 13696 ms |
| wildflowers vase rustic | openverse | 14 ảnh | 12320 ms |
| roses arrangement vase garden | openverse | 11 ảnh | 14060 ms |
| candlelight table roses | openverse | 17 ảnh | 14777 ms |
| field flowers bouquet daisies | openverse | 7 ảnh | 10263 ms |
| dried grasses flower arrangement | openverse | 6 ảnh | 5417 ms |
| cascade wedding bouquet trailing | openverse | 2 ảnh | 17586 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-tiec-cuoi.jpg` | index.html — hero không gian tiệc cưới hoa tươi | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-about-cam-hoa.jpg` | index.html — story-letter ảnh cắm hoa | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-ban-lam-viec.jpg` | pages/about.html — bàn làm việc với hoa tươi | openverse | CC CC0 1.0 | ✓ |
| `assets/img/detail-ban-tiec.webp` | index.html — The Details: hoa bàn tiệc | openverse | CC CC0 1.0 | ✓ |
| `assets/img/bouquet-ivory-sculptural.webp` | pages/bouquets.html — bó hoa trắng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-hero-le-duong.webp` | index.html — hero lối đi lễ cưới hoa tươi | openverse | CC CC0 1.0 | ✓ |
| `assets/img/col-ivory-cover.webp` | pages/collections.html — Ivory Elegance cover | openverse | CC CC0 1.0 | ✓ |
| `assets/img/col-garden-cover.jpg` | pages/collections.html — Garden Romance cover | openverse | CC CC0 1.0 | ✓ |
| `assets/img/detail-le-duong.jpg` | index.html — The Details: hoa lễ đường | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/ivory-detail-mau-don.webp` | pages/collection-ivory-elegance.html — mẫu đơn trắng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/detail-canh-hoa.jpg` | index.html — The Details: cánh hoa cận cảnh | openverse | CC CC0 1.0 | ✓ |
| `assets/img/col-velvet-cover.webp` | pages/collections.html — Velvet Rose cover | openverse | CC CC0 1.0 | ✓ |
| `assets/img/velvet-detail-hong-do.webp` | pages/collection-velvet-rose.html — hồng đỏ sẫm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/bouquet-cascading.webp` | pages/bouquets.html — bó hoa cô dâu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-nghe-nhan.jpg` | pages/about.html — nghệ nhân với hoa | openverse | CC CC0 1.0 | ✓ |
| `assets/img/bouquet-loose-garden.jpg` | pages/bouquets.html — bó hoa vườn phóng khoáng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/velvet-detail-tay-hong.webp` | pages/collection-velvet-rose.html — bàn tay và hồng đỏ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/detail-burgundy-kem.jpg` | index.html — The Details: tương phản burgundy & kem | openverse | CC BY 2.0 | ✓ |
| `assets/img/detail-nen-hoa.jpg` | index.html — The Details: hoa và nến | openverse | CC BY 2.0 | ✓ |
| `assets/img/garden-detail-binh-hoa.jpg` | pages/collection-garden-romance.html — bình hoa vườn | openverse | CC CC0 1.0 | ✓ |
| `assets/img/garden-detail-hong-binh.webp` | pages/collection-garden-romance.html — hồng vườn trong bình | openverse | CC CC0 1.0 | ✓ |
| `assets/img/bouquet-burgundy-statement.jpg` | pages/bouquets.html — thược dược đỏ rượu vang | openverse | CC BY 2.0 | ✓ |
| `assets/img/wild-detail-hoa-dong.webp` | pages/collection-wildflower-dreams.html — bó hoa đồng nội | openverse | CC CC0 1.0 | ✓ |
| `assets/img/wild-detail-co-kho.jpg` | pages/collection-wildflower-dreams.html — cỏ khô và hoa dại | openverse | CC BY 2.0 | ✓ |
| `assets/img/bouquet-classic-round.webp` | pages/bouquets.html — bó tròn cổ điển | openverse | CC CC0 1.0 | ✓ |
| `assets/img/ivory-detail-binh-trang.webp` | pages/collection-ivory-elegance.html — lan trắng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-story-ban-hoa.jpg` | index.html — story-letter bàn hoa của nghệ nhân | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-process-bang-mau.jpg` | pages/about.html — quy trình: hình khối & phối màu | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/bouquets.html — cascading (từ khóa dự kiến: "cascade wedding bouquet trailing")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Carousel
- Phóng to ảnh (lightbox)
- Nút về đầu trang
- Sao chép nhanh (số điện thoại / email)
- Accordion (mở / đóng nội dung)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Điều hướng: 9 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/bouquets.html, pages/collections.html, pages/contact.html).
- Chuyển động (đếm trong code): `data-reveal` ×80, `data-header` ×9, `data-reveal="clip"` ×28.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 15:26 26/10/2026: 9 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "Linh An" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 17 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 15:26 26/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Tên thương hiệu: concept.md yêu cầu dùng nguyên văn 'Linh An' ở title/header/footer; BLOOMÉ (tên thương hiệu cá nhân trong chú thích) hiển thị kèm như tên studio
- Nội dung tiếng Anh trong chú thích (tiêu đề, nút) được dịch sang tiếng Việt vì concept.md chọn ngôn ngữ Tiếng Việt và cấm trộn ngôn ngữ; giữ tên riêng các bộ sưu tập (Garden Romance, Ivory Elegance, Wildflower Dreams, Velvet Rose)
- Font body dùng Manrope theo chú thích của BA thay cho Montserrat của preset; màu theo bảng của BA
- Mức chuyển động Level 1: bỏ parallax và chữ hiện theo từng dòng (data-split) mà chú thích đề cập; dùng reveal fade/up, clip cho ảnh theo preset Art Gallery, hover zoom nhẹ
- Website 9 trang (nhiều hơn 4–7) vì chú thích yêu cầu mỗi bộ sưu tập mở được trang chi tiết riêng
- Không tìm được ảnh bó hoa thác đổ (cascading) thật trên nguồn ảnh: dáng này được mô tả bằng chữ, ảnh thay bằng bó posy mẫu đơn
- Yêu cầu tách index.html/style.css/script.js được hiện thực theo chuẩn công ty: assets/css/site.css và các script dùng chung

Giới hạn:

- Form liên hệ là bản demo, chưa có backend; có liên kết email mẫu hello@bloome.example
- Lời nhận xét khách hàng là nội dung mẫu giả lập
- Thông tin liên hệ, Instagram và các dự án là dữ liệu giả lập
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
