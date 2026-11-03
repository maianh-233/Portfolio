# VELVET FRAME

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website portfolio cá nhân
- **Thương hiệu / dự án:** VELVET FRAME
- **Mục đích:** Portfolio & hồ sơ năng lực cá nhân của một Fashion Designer / Stylist / Creative Director: thể hiện cái tôi, gu thẩm mỹ lấy cảm hứng từ các thời đại thời trang, dự án tiêu biểu, quy trình, kinh nghiệm và mời hợp tác. Khách truy cập: thương hiệu thời trang, tạp chí, studio, nhà tuyển dụng sáng tạo. _(AI suy luận — BA không ghi)_
- **Ý tưởng thị giác (AI ghi):** Portfolio như một số tạp chí kiêm kho lưu trữ vượt thời gian: bìa tối với masthead VELVET FRAME khổng lồ đảo màu khi đè lên ảnh, số năm Bodoni cỡ lớn (1860, 1920, 1960, 1997, 2026) chạy xuyên các trang như dấu thời gian, ảnh tư liệu đơn sắc 'về hiện tại' khi rê chuột; nền kem xen charcoal, một dải đỏ rượu duy nhất cho phần thời đại

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Editorial / Magazine — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 8.735 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: đủ ký tự tiếng Anh
- `Geist`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | VELVET FRAME \| Trang phục là một cách biểu đạt | Landing page duy nhất: bìa tạp chí, tuyên ngôn cá nhân, 4 dự án tiêu biểu, những thời đại truyền cảm hứng, moodboard thẩm mỹ, quy trình, kỹ năng, kinh nghiệm, giới thiệu và liên hệ hợp tác | top, hero → hero-type, manifesto → quote-full, work → gallery-lookbook, eras → timeline, aesthetic → gallery-masonry, process → timeline, skills → features-tabs, experience → features-numbered, about → story-editorial, contact → cta-type, footer | 19 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
velvet-frame/
  web/
    assets/
      css/
        site.css
      img/  (21 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        tw-config.js
        ui.js
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

- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 1 ảnh chưa dùng: assets/img/experience-runway.jpg

Tool đã ghi 18 lượt tìm (nguồn: openverse), 22 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| fashion editorial model portrait | openverse | 12 ảnh | 7901 ms |
| haute couture gown runway | openverse | 10 ảnh | 6212 ms |
| fashion photo shoot studio | openverse | 10 ảnh | 6320 ms |
| fabric texture drape folds | openverse | 10 ảnh | 9628 ms |
| fashion designer sketch drawing | openverse | 5 ảnh | 5735 ms |
| tailor fitting dress atelier | openverse | 5 ảnh | 9129 ms |
| dress form mannequin atelier | openverse | 9 ảnh | 10059 ms |
| sewing stitching closeup | openverse | 7 ảnh | 3335 ms |
| silk fabric close up | openverse | 15 ảnh | 9429 ms |
| backstage fashion show | openverse | 10 ảnh | 4288 ms |
| fashion week runway model | openverse | 10 ảnh | 5133 ms |
| leather gloves accessories | openverse | 10 ảnh | 10222 ms |
| woman fashion editorial black dress | openverse | 17 ảnh | 16426 ms |
| model tailored coat editorial | openverse | 12 ảnh | 11771 ms |
| catwalk model collection runway | openverse | 12 ảnh | 4480 ms |
| black and white fashion model coat | openverse | 12 ảnh | 14711 ms |
| 1920s fashion vintage photograph | openverse | 7 ảnh | 5910 ms |
| 1950s couture fashion model | openverse | 2 ảnh | 7289 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/work-01-collection.jpg` | index.html #work — dự án 01 Fashion Collection, ảnh dọc lớn | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/work-02-editorial.jpg` | index.html #work — dự án 02 Editorial Styling, ảnh ngang toàn chiều rộng | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/work-03-campaign-b.jpg` | index.html #work — dự án 03 Campaign, bộ ba ảnh (2, hậu trường) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/work-03-campaign-c.jpg` | index.html #work — dự án 03 Campaign, bộ ba ảnh (3) | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/work-04-concept-sketch.webp` | index.html #work — dự án 04 Costume/Concept, phác thảo | openverse | CC CC0 1.0 | ✓ |
| `assets/img/work-04-concept-silk.jpg` | index.html #work — dự án 04 moodboard, mẫu lụa | openverse | CC BY-NC-SA 4.0 | ✓ |
| `assets/img/aesthetic-stitch.jpg` | index.html #aesthetic — đường may cận cảnh | openverse | CC BY 2.0 | ✓ |
| `assets/img/aesthetic-couture-detail.jpg` | index.html #aesthetic — chi tiết trang phục, nút bọc vải | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/aesthetic-scissors.jpg` | index.html #aesthetic — kéo và chỉ, đen trắng | openverse | CC BY 2.0 | ✓ |
| `assets/img/aesthetic-tabi-boots.webp` | index.html #aesthetic — phụ kiện, giày tabi | openverse | CC CC0 1.0 | ✓ |
| `assets/img/aesthetic-eyelets.jpg` | index.html #aesthetic — chi tiết khoen, ánh sáng | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/about-backstage.jpg` | index.html #about — ảnh hậu trường | openverse | CC CC0 1.0 | ✓ |
| `assets/img/hero-editorial-portrait.jpg` | index.html — hero, ảnh editorial chủ đạo | openverse | CC CC0 1.0 | ✓ |
| `assets/img/work-03-campaign-a.jpg` | index.html #work — dự án 03 Campaign, bộ ba ảnh (1) | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/experience-runway.jpg` | index.html #experience — ảnh runway minh họa | openverse | CC BY-NC-ND 2.0 | ✗ |
| `assets/img/experience-runway.webp` | index.html #experience — ảnh thời trang đen trắng minh họa | openverse | CC CC0 1.0 | ✓ |
| `assets/img/era-1920-portrait.webp` | index.html #eras — chân dung studio thập niên 1920 | openverse | CC CC0 1.0 | ✓ |
| `assets/img/era-chanel-evening.jpg` | index.html #eras — trang phục dạ hội Chanel | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/era-1997-galliera.jpg` | index.html #eras — triển lãm thời trang 1997 | openverse | CC BY 2.0 | ✓ |
| `assets/img/era-1860-empress.webp` | index.html #eras — chân dung thế kỷ 19 | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Đánh dấu mục đang xem trên menu
- Tabs
- Accordion (mở / đóng nội dung)
- Phóng to ảnh (lightbox)
- Cửa sổ (modal)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Điều hướng: 1 trang liên kết qua header / footer (menu: index.html).
- Chuyển động (đếm trong code): `data-reveal` ×15, `data-header` ×1, `data-split` ×1, `data-reveal-stagger` ×3, `data-reveal="clip"` ×3.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 09:26 26/10/2026: 1 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 3 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✗ Ngôn ngữ: 1 trang chưa đúng tiếng Anh: index.html
- ✓ Tên thương hiệu: "VELVET FRAME" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 11 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 09:14 26/10/2026 | Dựng website | xong |
| 09:26 26/10/2026 | Sửa: Bạn ơi cho Tiếng việt đi . Nội dung  đã ổn nhưng phong cách chưa thật sự ấn tượng lắm. Họ muốn một bản prototype thể hiệ | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng một landing page (index.html), không có trang con, theo chú thích của BA ('Chỉ tạo một landing page duy nhất').
- Theo góp ý mới, toàn bộ chữ hiển thị chuyển sang tiếng Việt (lang="vi"), thay cho ngôn ngữ tiếng Anh ghi trong concept.md; tên dự án mẫu (Nocturne Archive, White Silence...) giữ nguyên như tên riêng.
- Bodoni Moda không có đủ dấu tiếng Việt: tiêu đề tiếng Việt dùng Noto Serif Display (serif tương phản cao kiểu Didone, đủ dấu); Bodoni Moda chỉ còn cho wordmark VELVET FRAME và số năm. Nội dung Inter. Màu giữ đúng bảng của BA (Charcoal #151313, Warm Cream #F2EADF, Burgundy #702B3B, Chocolate #513A32, Smoke Grey #A7A09A).
- Theo góp ý 'phong cách chưa ấn tượng, cần thể hiện cái tôi và phong cách thời gian': hero đổi thành bìa tạp chí tối với masthead khổng lồ đè lên ảnh; thêm section Tuyên ngôn (manifesto) và Những thời đại tôi mang theo (eras) với ảnh tư liệu 1860 / 1920 / 1960 / 1997; số năm lớn làm dấu thời gian trong phần dự án; quy trình đổi sang danh mục dọc.
- Tên cá nhân hiển thị là VELVET FRAME (tên dự án do BA cung cấp); dễ thay bằng tên thật.
- Mọi dự án, kinh nghiệm, học vấn là nội dung mẫu có nhãn '(mẫu)' / 'Dự án mẫu'; ảnh là ảnh minh họa có nguồn (CREDITS.md), không phải tác phẩm thật của chủ portfolio.
- Không tạo email / Instagram / LinkedIn / địa điểm giả: hiển thị 'Sẽ bổ sung'; CTA LIÊN HỆ HỢP TÁC mở form liên hệ bản demo.
- Không tạo nút tải CV vì chưa có file CV thật.
- Ảnh assets/img/experience-runway.jpg (có watermark) đã được thay bằng experience-runway.webp; file .jpg cũ không dùng trên trang.

Lỗi QA còn mở:

- [Cấu trúc website] : Website chỉ có 1 trang — chế độ này dựng website nhiều trang theo sitemap.
- [Ngôn ngữ] index.html: <html lang="vi"> — cần lang="en" (tiếng Anh).
- [Ngôn ngữ] index.html: Nội dung trang có 1363 ký tự tiếng Việt có dấu — website chọn tiếng Anh.

Giới hạn:

- Form liên hệ là bản demo, chưa có backend gửi đi.
- Thông tin liên hệ thật (email, mạng xã hội, địa điểm) cần khách cung cấp.
- Ảnh là ảnh minh họa và ảnh tư liệu giấy phép mở, cần thay bằng ảnh dự án thật của nhà thiết kế.
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
