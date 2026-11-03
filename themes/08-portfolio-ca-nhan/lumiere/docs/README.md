# LUMIÈRE

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website portfolio cá nhân
- **Thương hiệu / dự án:** LUMIÈRE
- **Mục đích:** Xây dựng một landing page portfolio dành cho nhiếp ảnh gia chuyên nghiệp.

Website phải khiến người xem cảm nhận được phong cách nghệ thuật của tác giả ngay từ màn hình đầu tiên.

Hình ảnh là yếu tố chính. Chữ, nút bấm và các chi tiết giao diện chỉ đóng vai trò hỗ trợ.

Đối tượng:

Khách hàng cá nhân.

Thương hiệu thời trang.

Tạp chí.

Đơn vị tổ chức sự kiện.

Đối tác sáng tạo.

Nhà tuyển dụng trong lĩnh vực hình ảnh.
- **Ý tưởng thị giác (AI ghi):** Đi qua một phòng triển lãm: tường tối, ảnh lớn góc vuông, dưới mỗi tác phẩm là nhãn tường bảo tàng nhỏ (tên in nghiêng + series · năm · thể loại); một phòng sáng màu trắng ngà cho lời tự bạch của tác giả

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Art Gallery — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 4.911 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Cormorant Garamond`: đủ ký tự tiếng Việt
- `Montserrat`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | LUMIÈRE \| Ánh sáng kể chuyện con người và nơi chốn | Cho khách hàng, thương hiệu, tạp chí, đơn vị sự kiện và nhà tuyển dụng cảm nhận phong cách tác giả qua các series ảnh, đọc lời tự bạch, kinh nghiệm, kỹ năng, CV và gửi yêu cầu dự án | top, hero → hero-cinematic, tac-pham → gallery-lookbook, gioi-thieu → story-letter, kinh-nghiem → timeline, ky-nang → features-numbered, ho-so → accordion-cv, lien-he → cta-type, footer | 17 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
lumiere/
  web/
    assets/
      css/
        site.css
      img/  (18 ảnh + CREDITS.md)
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

- **✓ Chuỗi ảnh hoạt động:** 17 ảnh được dùng trên 1 trang

Tool đã ghi 11 lượt tìm (nguồn: openverse), 19 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| fine art portrait dramatic light | openverse | 14 ảnh | 20008 ms |
| elderly man portrait documentary | openverse | 10 ảnh | 12829 ms |
| fashion editorial model photography | openverse | 7 ảnh | 7781 ms |
| misty mountain landscape light | openverse | 13 ảnh | 10089 ms |
| street life everyday moment | openverse | 10 ảnh | 7599 ms |
| photographer holding camera portrait | openverse | 9 ảnh | 9883 ms |
| fisherman portrait vietnam | openverse | 8 ảnh | 7256 ms |
| woman portrait window light black white | openverse | 10 ảnh | 3822 ms |
| photographer with camera self portrait | openverse | 7 ảnh | 4251 ms |
| photographer camera woman portrait | openverse | 14 ảnh | 9294 ms |
| market vendor morning candid | openverse | 10 ảnh | 15256 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/hero-nui-suong.jpg` | index.html — hero toàn màn | openverse | CC CC0 1.0 | ✓ |
| `assets/img/series1-nguoi-ke-chuyen.jpg` | index.html — series Chuyện người | openverse | CC BY 2.0 | ✓ |
| `assets/img/series1-bat-doi-xung.jpg` | index.html — series Chuyện người | openverse | CC BY 2.0 | ✓ |
| `assets/img/series1-man-tuyn.jpg` | index.html — series Chuyện người | openverse | CC BY 2.0 | ✓ |
| `assets/img/series1-anh-sang-trua.jpg` | index.html — series Chuyện người | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/series2-thoi-trang-1.jpg` | index.html — series Thời trang & Hình khối | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/series2-thoi-trang-2.jpg` | index.html — series Thời trang & Hình khối | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/series2-thoi-trang-3.jpg` | index.html — series Thời trang & Hình khối | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/series3-ho-binh-minh.jpg` | index.html — series Nơi chốn & Ánh sáng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/series3-dong-suong.webp` | index.html — series Nơi chốn & Ánh sáng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/series3-tam-coc.jpg` | index.html — series Nơi chốn & Ánh sáng | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/series3-vinh-hep.jpg` | index.html — series Nơi chốn & Ánh sáng | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/series4-hem-dem.jpg` | index.html — series Khoảnh khắc thường nhật | openverse | CC BY 2.0 | ✓ |
| `assets/img/series4-con-ngo.jpg` | index.html — series Khoảnh khắc thường nhật | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/series4-pho-yen.jpg` | index.html — series Khoảnh khắc thường nhật | openverse | CC BY 2.0 | ✓ |
| `assets/img/statement-chan-dung.jpg` | index.html — chân dung tác giả (statement) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/series4-nhip-pho.jpg` | index.html — series Khoảnh khắc thường nhật (chợ hoa sáng) | openverse | CC BY-NC-SA 2.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Đánh dấu mục đang xem trên menu
- Accordion (mở / đóng nội dung)
- Phóng to ảnh (lightbox)
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Điều hướng: 1 trang liên kết qua header / footer (menu: index.html).
- Chuyển động (đếm trong code): `data-reveal` ×38, `data-header` ×1.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:40 24/10/2026: 1 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "LUMIÈRE" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 6 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 11:40 24/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng một trang (index.html) vì chú thích BA yêu cầu rõ 'Tạo một landing page duy nhất' và 'không tạo trang gallery riêng'; điều hướng dùng anchor tới từng section
- Màu theo bảng của BA (#101010, #1A1A1A, #F3F0E9, #9B9B9B) thay bảng preset Art Gallery; thêm xám đậm #57544E cho chữ phụ trên nền trắng ngà để đạt WCAG AA; không dùng màu nhấn đỏ của preset (BA: không màu rực rỡ)
- Font body dùng Inter theo chú thích BA thay Montserrat của preset; tiêu đề Cormorant Garamond
- Các nhãn tiếng Anh BA nêu (PORTFOLIO, ABOUT, Explore Portfolio, 'Photography is a way of paying attention', tên series) được dịch sang tiếng Việt vì ngôn ngữ website là tiếng Việt, không trộn ngôn ngữ
- Mức chuyển động Level 1: chỉ dùng data-reveal fade/up, header đổi nền khi cuộn, hover zoom nhẹ ảnh; không dùng con trỏ nhãn 'Xem' và reveal clip của preset (thuộc Level 2–3)
- Nút Tải CV ở trạng thái khóa (chưa có tệp CV thật) theo yêu cầu BA
- Instagram hiển thị tên tài khoản kèm nút sao chép thay vì link, vì chưa có tài khoản thật

Giới hạn:

- Form Gửi yêu cầu dự án là bản demo, chưa có backend, không gửi đi
- Email hello@lumiere.vn và tài khoản @lumiere.frames là thông tin mẫu, cần thay bằng thông tin thật
- Ảnh lấy từ Openverse (tác giả khác, xem assets/img/CREDITS.md) để minh họa; cần thay bằng tác phẩm thật của nhiếp ảnh gia
- Kinh nghiệm, triển lãm, giải thưởng, CV là nội dung minh họa đã được đánh dấu trên trang
- Chưa có tệp CV PDF nên nút Tải CV bị khóa
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
