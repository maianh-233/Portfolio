# FORM & FUNCTION CLINIC

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website thẩm mỹ viện
- **Thương hiệu / dự án:** FORM & FUNCTION CLINIC
- **Mục đích:** Thiết kế website giới thiệu FORM & FUNCTION CLINIC, một trung tâm thẩm mỹ y khoa theo định hướng kiến trúc đương đại, công năng và sự chính xác.

Art direction: Architectural Minimalism. Sử dụng xám bê tông, trắng, đen và vàng chanh làm điểm nhấn nhỏ. Hình ảnh kiến trúc có bóng đổ mạnh, bề mặt bê tông, kính, các khối hình học và bố cục bất đối xứng. Không dùng phong cách luxury, ánh kim hoặc hiệu ứng công nghệ tương lai.
- **Ý tưởng thị giác (AI ghi):** Bản vẽ mặt bằng kiến trúc: lưới đường kẻ mảnh chia khối, ảnh kiến trúc đen trắng bóng đổ mạnh, một ô vuông vàng chanh duy nhất làm điểm đánh dấu xuyên mọi trang

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Minimal / Premium / Editorial — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 910 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: thiếu ký tự tiếng Việt → cần fallback
- `Geist`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | FORM & FUNCTION CLINIC — Thẩm mỹ y khoa, chính xác như kiến trúc | Giới thiệu thương hiệu bằng hình ảnh kiến trúc toàn khổ, triết lý, nhóm dịch vụ và không gian thực tế; dẫn sang Dịch vụ, Về chúng tôi và đặt lịch tư vấn | top, hero → hero-cinematic, triet-ly → story-editorial, nhom-dich-vu → features-numbered, phat-bieu → quote-full, khong-gian → gallery-lookbook, cam-ket-y-khoa → stats-band, cta-cuoi → cta-type, footer → footer-big | 6 |
| `pages/about.html` | Về chúng tôi — FORM & FUNCTION CLINIC | Kiến trúc phòng khám, đội ngũ, cơ sở vật chất, quy trình tư vấn, định hướng chuyên môn | top, page-hero → page-hero, kien-truc → story-letter, doi-ngu → team-grid, co-so → features-bento, quy-trinh → process-steps, dinh-huong → features-numbered, cta-cuoi → cta-type, footer → footer-big | 4 |
| `pages/contact.html` | Liên hệ — FORM & FUNCTION CLINIC | Địa chỉ, điện thoại, giờ làm việc, bản đồ và form đặt lịch tư vấn | top, page-hero → page-hero, lien-he → contact-split, truoc-buoi-hen → faq-accordion, footer → footer-big | 0 |
| `pages/service-filler.html` | Tiêm filler HA — FORM & FUNCTION CLINIC | Trang chi tiết mẫu một dịch vụ tiêm thẩm mỹ | top, page-hero → page-hero, chi-tiet → detail-article, cta-cuoi → cta-type, footer → footer-big | 1 |
| `pages/service-laser.html` | Laser CO2 vi điểm — FORM & FUNCTION CLINIC | Trang chi tiết mẫu một dịch vụ da y khoa | top, page-hero → page-hero, chi-tiet → detail-article, cta-cuoi → cta-type, footer → footer-big | 1 |
| `pages/services.html` | Dịch vụ & Bảng giá — FORM & FUNCTION CLINIC | Danh sách dịch vụ theo khối lớn (mô tả, mục đích, cần biết, giá tham khảo), bảng giá tối giản, lưu ý y khoa, câu hỏi thường gặp | top, page-hero → page-hero, danh-sach → features-tabs, bang-gia → pricing-table, luu-y → features-bento, faq → faq-accordion, cta-cuoi → cta-type, footer → footer-big | 1 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
form-function-clinic/
  web/
    assets/
      css/
        site.css
      img/  (15 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        site.js
        tw-config.js
        ui.js
    pages/
      about.html
      contact.html
      service-filler.html
      service-laser.html
      services.html
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

- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 1 ảnh chưa dùng: assets/img/home-khong-gian-phong-cho.jpg

Tool đã ghi 16 lượt tìm (nguồn: openverse), 15 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| concrete architecture shadow facade | openverse | 6 ảnh | 15715 ms |
| minimalist clinic interior | openverse | 0 ảnh | 9949 ms |
| concrete staircase light shadow | openverse | 10 ảnh | 18935 ms |
| facial skin treatment clinic | openverse | 12 ảnh | 10951 ms |
| modern interior concrete glass | openverse | 12 ảnh | 7006 ms |
| dermal filler injection face | openverse | 6 ảnh | 18763 ms |
| laser skin treatment | openverse | 11 ảnh | 239 ms |
| doctor consultation patient | openverse | 10 ảnh | 5840 ms |
| botox injection forehead | openverse | 8 ảnh | 9895 ms |
| treatment room medical bed | openverse | 4 ảnh | 15251 ms |
| female doctor portrait | openverse | 11 ảnh | 9671 ms |
| minimal building glass facade | openverse | 10 ảnh | 5013 ms |
| male doctor portrait | openverse | 5 ảnh | 8168 ms |
| skincare dermatologist examining skin | openverse | 1 ảnh | 18654 ms |
| concrete interior window light | openverse | 10 ảnh | 6466 ms |
| minimalist white room architecture | openverse | 6 ảnh | 6034 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-be-tong.jpg` | index.html — hero kiến trúc bê tông toàn khổ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-triet-ly-cau-thang.jpg` | index.html — triết lý thương hiệu, ảnh dọc cầu thang bê tông | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/home-dv-cham-soc-da.jpg` | index.html — nhóm dịch vụ chăm sóc da y khoa | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-tuong-be-tong.webp` | pages/about.html — kiến trúc phòng khám, tường bê tông bóng đổ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/service-laser-ma.jpg` | pages/service-laser.html — laser CO2 vi điểm trên má | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/about-tu-van.jpg` | pages/about.html — quy trình tư vấn bác sĩ và khách | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-khong-gian-gieng-troi.jpg` | index.html — không gian thực tế, giếng trời | openverse | CC BY 2.0 | ✓ |
| `assets/img/service-filler.jpg` | pages/service-filler.html — bác sĩ tiêm botox / filler | openverse | CC PDM 1.0 | ✓ |
| `assets/img/about-bac-si-truong.jpg` | pages/about.html — chân dung bác sĩ đội ngũ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/contact-mat-tien-kinh.jpg` | pages/contact.html — mặt tiền kính toà nhà | openverse | CC CC0 1.0 | ✓ |
| `assets/img/services-hanh-lang.webp` | pages/services.html — hero trang dịch vụ, hành lang bê tông | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-bac-si-nam.jpg` | pages/about.html — chân dung bác sĩ đội ngũ (2) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-khong-gian-phong-tu-van.webp` | index.html — không gian thực tế, phòng tư vấn | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-khong-gian-phong-cho.jpg` | index.html — không gian thực tế, phòng chờ | openverse | CC BY 2.0 | ✗ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Cửa sổ (modal)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Accordion (mở / đóng nội dung)
- Sao chép nhanh (số điện thoại / email)
- Tabs
- Điều hướng: 6 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/contact.html, pages/services.html).
- Chuyển động (đếm trong code): `data-reveal` ×55, `data-header` ×6, `data-reveal-stagger` ×6.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 14:02 21/10/2026: 6 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "FORM & FUNCTION CLINIC" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 13 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 14:02 21/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Ba trang chính theo chú thích BA (Trang chủ, Dịch vụ & Bảng giá, Về chúng tôi); thêm trang Liên hệ và 2 trang chi tiết dịch vụ mẫu để thông tin liên hệ / y khoa không bị thiếu
- Mục Ngôn ngữ của concept.md ghi tiếng Việt, không bộ chuyển; chú thích BA yêu cầu song ngữ Việt - Anh có công tắc. Ưu tiên chú thích BA: trang mặc định tiếng Việt (lang=vi), công tắc VI / EN đổi nội dung bằng site.js (thuộc tính data-en), lựa chọn lưu trong localStorage
- Font Instrument Serif của preset thiếu ký tự tiếng Việt và không hợp Architectural Minimalism → dùng Archivo (tiêu đề, có tiếng Việt) + Geist (thân)
- Bảng màu theo art direction của BA: xám bê tông, trắng, đen, điểm nhấn vàng chanh #D7F032 thay cho bronze của preset; góc vuông toàn bộ
- Level 1 nên không dùng data-split / data-reveal=clip mà preset gợi ý

Giới hạn:

- Form đặt lịch tư vấn là bản demo, chưa có backend
- Bản đồ là iframe Google Maps theo địa chỉ mẫu
- Địa chỉ, số điện thoại, giá, tên bác sĩ là nội dung mẫu, cần khách xác nhận; số giấy phép hoạt động cần bổ sung
- Công tắc tiếng Anh dịch các nội dung chính; thông báo lỗi form theo ngôn ngữ đang chọn khi tải trang
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
