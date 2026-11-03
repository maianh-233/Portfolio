# SIAM LINGUA

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Web giới thiệu trung tâm tiếng Thái SIAM LINGUA
- **Thương hiệu / dự án:** SIAM LINGUA
- **Mục đích:** Thiết kế website đa trang giới thiệu SIAM LINGUA, trung tâm đào tạo tiếng Thái dành cho người Việt Nam muốn học ngôn ngữ, tìm hiểu văn hóa Thái Lan, phục vụ du lịch, học tập, công việc và giao tiếp hằng ngày.

Website truyền tải hình ảnh một trung tâm ngoại ngữ chuyên nghiệp, thân thiện và có bản sắc văn hóa riêng. Nội dung tập trung vào phương pháp giảng dạy, chương trình đào tạo, đội ngũ giáo viên và trải nghiệm học tập.

Thông điệp thương hiệu: “Learn Thai. Discover a New World.”

Đây là website giới thiệu thuần túy, không phải nền tảng học trực tuyến hoặc website thương mại điện tử. Không có giá bán, giỏ hàng, thanh toán hay chức năng mua khóa học.
- **Ý tưởng thị giác (AI ghi):** Mỗi section ký tên bằng một từ tiếng Thái kèm phiên âm (như chú giải bên lề sách học), nối với nhau bằng đường chỉ vàng champagne mảnh có hạt kim cương nhỏ, gợi lá vàng trên sơn mài đền Thái

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Minimal / Premium / Editorial — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 6.679 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: đủ ký tự tiếng Anh
- `Geist`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | SIAM LINGUA — Learn Thai. Discover a New World. | Giới thiệu thương hiệu, dẫn sang chương trình học, trang giới thiệu và liên hệ | top, hero → hero-split, about → story-letter, programs → teaser-row, why → features-numbered, culture → gallery-lookbook, stories → testimonials-carousel, cta → cta-type, footer → footer-big | 9 |
| `pages/about.html` | About Us — SIAM LINGUA | Câu chuyện, sứ mệnh, triết lý, giá trị cốt lõi, mốc phát triển mẫu và đội ngũ giáo viên | top, page-hero → page-hero, story → story-editorial, philosophy → quote-full, values → features-bento, journey → timeline, team → team-grid, life → gallery-masonry, cta → cta-type, footer → footer-big | 4 |
| `pages/culture-contact.html` | Culture & Contact — SIAM LINGUA | Thai Culture Journal (thẻ editorial, lọc theo chủ đề, mở bài trong modal) và khu vực liên hệ có form demo | top, page-hero → page-hero, journal → gallery-filter, contact → contact-split, footer → footer-big | 5 |
| `pages/programs.html` | Programs — SIAM LINGUA | Chi tiết 4 chương trình, phương pháp học, môi trường học, FAQ (không giá, không nút mua) | top, page-hero → page-hero, overview → list-cards, method → process-steps, environment → features-alternate, faq → faq-accordion, cta → cta-type, footer → footer-big | 2 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
siam-lingua/
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
    pages/
      about.html
      culture-contact.html
      programs.html
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

- **✓ Chuỗi ảnh hoạt động:** 20 ảnh được dùng trên 4 trang

Tool đã ghi 20 lượt tìm (nguồn: openverse), 25 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| thai language classroom students | openverse | 12 ảnh | 16110 ms |
| teacher student lesson thailand | openverse | 12 ảnh | 8688 ms |
| thai alphabet writing | openverse | 1 ảnh | 11553 ms |
| adult language class | openverse | 13 ảnh | 12347 ms |
| thai script sign | openverse | 10 ảnh | 5561 ms |
| thai market vendor | openverse | 10 ảnh | 3179 ms |
| bangkok business district | openverse | 13 ảnh | 9392 ms |
| thai university students | openverse | 12 ảnh | 6817 ms |
| thai temple monks ceremony | openverse | 10 ảnh | 22262 ms |
| thai street food stall | openverse | 10 ảnh | 7848 ms |
| loy krathong lanterns | openverse | 12 ảnh | 13563 ms |
| students studying together table | openverse | 18 ảnh | 11753 ms |
| wat arun temple | openverse | 11 ảnh | 6524 ms |
| thai classical dance | openverse | 10 ảnh | 7390 ms |
| thai wai greeting | openverse | 10 ảnh | 6061 ms |
| thai people talking street | openverse | 15 ảnh | 13652 ms |
| thai students uniform classroom | openverse | 16 ảnh | 16619 ms |
| teacher whiteboard adult class | openverse | 15 ảnh | 14888 ms |
| notebook pen study desk | openverse | 10 ảnh | 2900 ms |
| thai cooking class | openverse | 6 ảnh | 5762 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-class.webp` | index.html — hero, lớp học | openverse | CC CC0 1.0 | ✓ |
| `assets/img/program-conversation-market.jpg` | index.html — thẻ Thai Conversation, chợ nổi | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/program-work-bangkok.jpg` | index.html — thẻ Thai for Work, khu tài chính Bangkok | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/program-beginners-books.jpg` | index.html — thẻ Thai for Beginners, sách mở | openverse | CC CC0 1.0 | ✓ |
| `assets/img/program-culture-monks.webp` | index.html — thẻ Thai Language & Culture | openverse | CC CC0 1.0 | ✓ |
| `assets/img/culture-festival-lanterns.jpg` | index.html — Glimpse of Thai Culture, lễ hội | openverse | CC BY 2.0 | ✓ |
| `assets/img/culture-food-cooking.jpg` | index.html — Glimpse of Thai Culture, ẩm thực | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/journal-festival-krathong.jpg` | pages/culture-contact.html — journal lễ hội & phong tục | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/home-hero-class.jpg` | index.html — hero, nhóm học viên thảo luận | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/about-class-workshop.jpg` | index.html — About teaser, học viên trò chuyện | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/culture-hero-watarun.jpg` | pages/culture-contact.html — page hero Wat Arun | openverse | CC CC0 1.0 | ✓ |
| `assets/img/journal-food-somtam.jpg` | pages/culture-contact.html — journal ẩm thực | openverse | CC BY 2.0 | ✓ |
| `assets/img/journal-places-ayutthaya.jpg` | pages/culture-contact.html — journal địa điểm văn hóa | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/journal-differences-station.jpg` | pages/culture-contact.html — journal khác biệt văn hóa VN-TH | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/culture-monk-candles.jpg` | index.html — Glimpse of Thai Culture, phong tục | openverse | CC BY 2.0 | ✓ |
| `assets/img/about-story-chaophraya.jpg` | pages/about.html — câu chuyện, Wat Arun bên sông | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/about-life-group.jpg` | pages/programs.html — Learning Environment, tài liệu học | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-life-food.webp` | pages/about.html — buổi giao lưu văn hóa ẩm thực | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-teacher-board.jpg` | pages/about.html — câu chuyện, học viên trò chuyện | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/programs-env-workshop.jpg` | pages/programs.html — Learning Environment, tài liệu số | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/culture-contact.html — journal-language (từ khóa dự kiến: "thai wai greeting")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Carousel
- Phóng to ảnh (lightbox)
- Nút về đầu trang
- Lọc theo nhóm
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Accordion (mở / đóng nội dung)
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/culture-contact.html, pages/programs.html).
- Chuyển động (đếm trong code): `data-reveal` ×92, `data-header` ×4.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:27 19/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "SIAM LINGUA" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 13 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 11:27 19/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Giữ đúng 4 trang theo chú thích của BA; nội dung chi tiết bài Culture Journal mở trong cửa sổ (modal) thay vì tạo trang bài viết riêng
- BA chọn ngôn ngữ English nên toàn bộ chữ (kể cả CTA BA ghi tiếng Việt như 'Khám phá chương trình học', 'Liên hệ với SIAM LINGUA') được dịch sang tiếng Anh ('Explore programs', 'Contact SIAM LINGUA'); tiếng Thái + phiên âm giữ làm chi tiết nhận diện
- Bảng màu theo chú thích BA (#8D3038, #F8F3E9, #D5B36A, #354A3C, #302A27) thay cho bảng màu preset
- Thêm font Noto Serif Thai / Noto Sans Thai làm fallback để chữ Thái hiển thị đúng (Instrument Serif và Geist không có ký tự Thái)
- Hero dùng ảnh lớn (hero-split) thay cho hero-type của preset, theo yêu cầu 'hình ảnh lớn về lớp học' của BA
- Thẻ 'Language & politeness' trong Journal dùng khối chữ Thái ขอบคุณ trên nền xanh thay cho ảnh (không tìm được ảnh chào wai phù hợp)
- Không có ảnh giáo viên thật nên đội ngũ dùng khối chữ cái đầu tên trên nền màu thương hiệu

Giới hạn:

- Form liên hệ là bản demo, chưa có backend, không gửi dữ liệu đi
- Địa chỉ, số điện thoại, email, giờ làm việc, giáo viên, mốc lịch sử, hình thức lớp và cảm nhận học viên là dữ liệu mẫu cần thay bằng thông tin thật
- Link mạng xã hội đang trỏ tới trang chủ Facebook / Zalo / YouTube / Instagram, cần thay bằng trang thật của trung tâm
- Ảnh lớp học là ảnh minh họa chung (nguồn Openverse), nên thay bằng ảnh lớp học thật của trung tâm
- Không hiển thị giá, không có thanh toán, đăng nhập hay LMS theo yêu cầu
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
