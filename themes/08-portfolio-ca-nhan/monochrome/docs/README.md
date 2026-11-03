# MONOCHROME

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website portfolio cá nhân
- **Thương hiệu / dự án:** MONOCHROME
- **Mục đích:** Portfolio & CV cá nhân của kiến trúc sư / nhà thiết kế nội thất: trình bày dự án chọn lọc, cách tiếp cận thiết kế, năng lực và lý lịch để nhà tuyển dụng, văn phòng kiến trúc và khách hàng cá nhân liên hệ hợp tác _(AI suy luận — BA không ghi)_
- **Ý tưởng thị giác (AI ghi):** Trang như một ấn phẩm kiến trúc: lưới 12 cột lộ bằng đường kẻ mảnh mở rộng khi cuộn, metadata kỹ thuật bằng IBM Plex Mono như ghi chú trên bản vẽ, góc vuông tuyệt đối

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Corporate / Professional — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 9.704 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Lexend`: đủ ký tự tiếng Việt
- `Source Sans 3`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | MONOCHROME · Kiến trúc sư và thiết kế nội thất | Landing page một trang: tuyên ngôn, dự án chọn lọc (case study mở bằng accordion), cách tiếp cận, năng lực, lý lịch, giới thiệu và liên hệ | top, hero → hero-split, projects → gallery-lookbook, approach → features-bento, expertise → features-numbered, resume → timeline, about → story-letter, contact → cta-fullbleed, footer | 13 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
monochrome/
  web/
    assets/
      css/
        site.css
      img/  (16 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        site.js
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
- `assets/js/site.js` — Logic riêng của website (do AI viết)
- Mỗi trang là một file HTML tĩnh, header / footer giống nhau; mỗi khối nội dung là `<section id data-section="<biến thể>">` để sửa riêng từng khối.
- Tailwind CSS nạp qua CDN (`cdn.tailwindcss.com`), font qua Google Fonts.

## 6. Hình ảnh: tìm kiếm & tích hợp

- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 2 ảnh chưa dùng: assets/img/contact-cau-thang-be-tong.jpg, assets/img/du-an-03-mo-hinh.jpg

Tool đã ghi 17 lượt tìm (nguồn: openverse), 17 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| contemporary concrete house light | openverse | 12 ảnh | 7075 ms |
| modern residential architecture facade | openverse | 10 ảnh | 7295 ms |
| minimalist interior natural light | openverse | 10 ảnh | 7531 ms |
| architectural floor plan drawing | openverse | 10 ảnh | 4419 ms |
| concrete architecture shadow | openverse | 6 ảnh | 3368 ms |
| modern villa architecture | openverse | 11 ảnh | 5518 ms |
| stone wood texture detail | openverse | 8 ảnh | 4929 ms |
| architect desk sketch model | openverse | 3 ảnh | 8839 ms |
| hotel lobby minimalist interior | openverse | 12 ảnh | 14316 ms |
| concrete staircase minimal | openverse | 7 ảnh | 6622 ms |
| marble stone surface texture | openverse | 10 ảnh | 4281 ms |
| wood joinery detail craftsmanship | openverse | 6 ảnh | 6513 ms |
| architectural model study white | openverse | 14 ảnh | 9498 ms |
| concrete architecture shadow | openverse | 6 ảnh | 1677 ms |
| travertine stone wall interior | openverse | 10 ảnh | 6111 ms |
| drafting table architect drawing | openverse | 11 ảnh | 8881 ms |
| cardboard architecture model | openverse | 10 ảnh | 4167 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/hero-kien-truc-toi-gian.jpg` | index.html #hero — ảnh kiến trúc tối giản | openverse | CC BY 2.0 | ✓ |
| `assets/img/du-an-02-noi-that.jpg` | index.html #projects — dự án 02 ảnh dọc nội thất | openverse | CC BY 2.0 | ✓ |
| `assets/img/du-an-03-mat-bang.webp` | index.html #projects — dự án 03 bản vẽ mặt bằng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/du-an-01-nha-o.webp` | index.html #projects — dự án 01 ảnh ngang lớn nhà ở | openverse | CC CC0 1.0 | ✓ |
| `assets/img/approach-anh-sang.jpg` | index.html #approach — nguyên tắc Ánh sáng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/hero-be-tong-anh-sang.jpg` | index.html #hero — khối bê tông, ánh sáng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/approach-khong-gian.webp` | index.html #approach — nguyên tắc Không gian (hành lang) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/du-an-04-hospitality.webp` | index.html #projects — dự án 04 ảnh lớn không gian hospitality | openverse | CC CC0 1.0 | ✓ |
| `assets/img/contact-cau-thang-be-tong.jpg` | index.html #contact — chi tiết cầu thang bê tông làm điểm kết | openverse | CC BY-NC-ND 2.0 | ✗ |
| `assets/img/du-an-03-mo-hinh.jpg` | index.html #projects — dự án 03 mô hình khối | openverse | CC BY-NC-SA 4.0 | ✗ |
| `assets/img/du-an-04-chi-tiet-2.jpg` | index.html #projects — dự án 04 chi tiết gỗ và gạch | openverse | CC BY 2.0 | ✓ |
| `assets/img/contact-cau-thang-be-tong.webp` | index.html #contact — tường bê tông ánh sáng làm điểm kết | openverse | CC CC0 1.0 | ✓ |
| `assets/img/du-an-04-chi-tiet-1.jpg` | index.html #projects — dự án 04 chi tiết đá travertine | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/about-mo-hinh-nghien-cuu.jpg` | index.html #about — bàn vẽ, compa, dụng cụ thiết kế | openverse | CC CC0 1.0 | ✓ |
| `assets/img/du-an-03-mo-hinh.webp` | index.html #projects — dự án 03 phối cảnh khối bê tông | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Đánh dấu mục đang xem trên menu
- Accordion (mở / đóng nội dung)
- Phóng to ảnh (lightbox)
- Nút về đầu trang
- Điều hướng: 1 trang liên kết qua header / footer.
- Chuyển động (đếm trong code): `data-reveal` ×49, `data-header` ×1.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 09:02 26/10/2026: 1 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 2 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "MONOCHROME" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 10 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 08:59 26/10/2026 | Dựng website | xong |
| 09:02 26/10/2026 | Sửa: Vì đây là prototype nên bạn bịa nội dung vô giúp tui | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Chỉ dựng một trang (index.html) vì BA yêu cầu rõ landing page, menu cuộn tới section và không tạo trang dự án riêng
- Nhãn tiếng Anh trong chú thích BA (VIEW SELECTED PROJECTS, A Way of Seeing Space, Let's Create Meaningful Spaces...) được Việt hóa vì concept.md chốt ngôn ngữ tiếng Việt, không trộn ngôn ngữ
- Màu và font theo chú thích BA (#F5F5F2, #191919, #B7B7B0, #666660, #827B70; Manrope / Inter / IBM Plex Mono) thay cho bảng màu và font của preset Corporate
- Không hiển thị nút Tải CV / Portfolio PDF vì chưa có file; LinkedIn để dạng chữ (không link tới hồ sơ không tồn tại)
- File assets/img/contact-cau-thang-be-tong.jpg (cầu thang xoắn) tải về nhưng không dùng vì có viền đen và chữ watermark; đã thay bằng contact-cau-thang-be-tong.webp. Hai ảnh mô hình in 3D màu sắc cũng bị thay vì lệch bảng màu đơn sắc
- Theo góp ý BA: thay toàn bộ placeholder bằng nội dung mẫu hư cấu (KTS Trần Minh Khang, TP.HCM, 8 năm; tên dự án, địa điểm, năm, kinh nghiệm, học vấn, liên hệ); ảnh vẫn là ảnh nguồn mở, ghi nguồn trong CREDITS.md

Giới hạn:

- Tên, email, số điện thoại, LinkedIn, địa chỉ studio là nội dung hư cấu cho prototype; CV PDF chưa có nên ghi 'gửi theo yêu cầu'
- Không có biểu mẫu liên hệ theo yêu cầu BA (tránh form không hoạt động)
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
