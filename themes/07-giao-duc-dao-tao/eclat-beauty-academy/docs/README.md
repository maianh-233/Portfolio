# MAKEUP ÉCLAT BEAUTY ACADEMY

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Web Quảng bá học viện MAKEUP ÉCLAT BEAUTY ACADEMY
- **Thương hiệu / dự án:** MAKEUP ÉCLAT BEAUTY ACADEMY
- **Mục đích:** Thiết kế website đa trang cho ÉCLAT BEAUTY ACADEMY, học viện đào tạo nghệ thuật trang điểm chuyên nghiệp dành cho người mới bắt đầu, người yêu thích làm đẹp và những người muốn theo đuổi nghề makeup artist.

Website không chỉ giới thiệu các khóa học mà còn thể hiện tư duy thẩm mỹ, chuyên môn giảng dạy, môi trường thực hành và thành quả sáng tạo của học viên. Hình ảnh thương hiệu cần tạo cảm giác đây là một học viện makeup có định hướng nghệ thuật, chuyên nghiệp và chỉn chu.

Định vị thương hiệu: Professional Makeup Education · Beauty Artistry · Creative Excellence.

Thông điệp chính: “Makeup is an Art. Beauty is Your Expression.”

Website phục vụ mục đích giới thiệu thương hiệu, chia sẻ thông tin đào tạo và trưng bày tác phẩm. Không xây dựng cửa hàng, không bán mỹ phẩm, không có giỏ hàng, thanh toán trực tuyến hoặc chức năng mua khóa học.
- **Ý tưởng thị giác (AI ghi):** Khung ảnh hình vòm như chiếc gương bàn trang điểm, lặp lại xuyên các trang; kết hợp đường kẻ mảnh màu son burgundy và tiêu đề serif nghiêng kiểu tạp chí beauty

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Minimal / Premium / Editorial — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 12.276 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: thiếu ký tự tiếng Việt → cần fallback
- `Geist`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | MAKEUP ÉCLAT BEAUTY ACADEMY — Nơi trang điểm trở thành nghệ thuật | Tạo ấn tượng đầu tiên, truyền tải bản sắc học viện và dẫn sang chương trình đào tạo, portfolio học viên | top, hero → hero-split, beyond → story-editorial, philosophy → features-numbered, programs → teaser-row, studio → gallery-lookbook, highlights → teaser-row, final-cta → cta-type, footer | 12 |
| `pages/about.html` | Về học viện — MAKEUP ÉCLAT BEAUTY ACADEMY | Giới thiệu câu chuyện, triết lý đào tạo, đội ngũ giảng viên, không gian học tập và giá trị của học viện | top, about-hero → page-hero, story → story-letter, education → timeline, instructors → team-grid, inside-studio → gallery-lookbook, values → features-bento, footer | 5 |
| `pages/courses.html` | Khóa học — MAKEUP ÉCLAT BEAUTY ACADEMY | Giúp người xem hiểu rõ nội dung, đối tượng và định hướng của từng chương trình đào tạo | top, courses-hero → page-hero, overview → list-cards, approach → process-steps, outcomes → features-numbered, faq → faq-accordion, footer | 5 |
| `pages/portfolio.html` | Portfolio học viên — MAKEUP ÉCLAT BEAUTY ACADEMY | Biến tác phẩm makeup của học viên thành điểm nhấn thị giác lớn nhất và cung cấp thông tin liên hệ học viện | top, portfolio-hero → page-hero, gallery → gallery-filter, behind → timeline, contact → contact-split, footer | 14 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
website-hoc-vien-makeup-eclat-beauty-academy/
  web/
    assets/
      css/
        site.css
      img/  (37 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        tw-config.js
        ui.js
    pages/
      about.html
      courses.html
      portfolio.html
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

- **⚠ Một số lượt tìm ảnh lỗi:** 1/18 lượt lỗi (timeout)

Tool đã ghi 18 lượt tìm (nguồn: openverse), 36 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| beauty portrait makeup closeup | openverse | 16 ảnh | 25705 ms |
| makeup artist applying model | openverse | 5 ảnh | 31758 ms |
| bridal makeup bride | openverse | 13 ảnh | 20819 ms |
| editorial creative makeup | — | lỗi timeout | 53403 ms |
| makeup vanity mirror lights | openverse | 4 ảnh | 29048 ms |
| eyeshadow palette brushes | openverse | 5 ảnh | 9369 ms |
| makeup class students practice | openverse | 11 ảnh | 14825 ms |
| makeup artist portrait woman | openverse | 14 ảnh | 11004 ms |
| woman portrait makeup glamour | openverse | 6 ảnh | 5191 ms |
| backstage makeup fashion show | openverse | 5 ảnh | 18144 ms |
| bride portrait wedding makeup | openverse | 11 ảnh | 11704 ms |
| foundation brush application face | openverse | 11 ảnh | 41646 ms |
| eyeliner application closeup | openverse | 1 ảnh | 19510 ms |
| wedding bride getting ready | openverse | 14 ảnh | 15758 ms |
| makeup artist working model | openverse | 12 ảnh | 25917 ms |
| eye makeup closeup | openverse | 6 ảnh | 7714 ms |
| lipstick collection closeup | openverse | 7 ảnh | 23977 ms |
| fashion model face editorial | openverse | 12 ảnh | 16658 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-chan-dung.jpg` | index.html — hero, chân dung beauty editorial | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-intro-makeup-artist.jpg` | index.html — Beyond Makeup, makeup artist làm việc | openverse | CC CC0 1.0 | ✓ |
| `assets/img/studio-co-trang-diem.webp` | index.html — Learning in Studio, cọ trang điểm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/chuong-trinh-co-dau.webp` | index.html — Training Programs, Bridal Makeup | openverse | CC CC0 1.0 | ✓ |
| `assets/img/chuong-trinh-editorial.jpg` | index.html — Training Programs, Beauty & Editorial | openverse | CC CC0 1.0 | ✓ |
| `assets/img/chuong-trinh-ca-nhan.jpg` | index.html — Training Programs, Personal Makeup (natural) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-son-moi.jpg` | pages/portfolio.html — gallery Beauty Portraits | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-chan-dung-1.jpg` | pages/portfolio.html — gallery Beauty Portraits | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-soft-glam-1.jpg` | pages/portfolio.html — gallery Natural & Soft Glam | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-hero-bw.jpg` | pages/portfolio.html — hero ảnh beauty editorial lớn | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-highlight-1.jpg` | index.html — Student Highlights | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-highlight-2.jpg` | index.html — Student Highlights (flower concept) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-studio-ban-trang-diem.jpg` | pages/about.html — Inside the Studio, bàn trang điểm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-studio-bang-mau.webp` | pages/about.html — Inside the Studio, bảng màu mắt | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-studio-guong.jpg` | index.html — Learning in Studio, trang điểm trước gương | openverse | CC BY 2.0 | ✓ |
| `assets/img/home-studio-thuc-hanh.jpg` | index.html — Learning in Studio, thực hành với cọ và bảng màu | openverse | CC BY 2.0 | ✓ |
| `assets/img/about-studio-co.jpg` | pages/about.html — Inside the Studio, bộ cọ | openverse | CC BY 2.0 | ✓ |
| `assets/img/about-hero-makeup-artist.webp` | pages/about.html — About hero, makeup artist với cọ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-creative-hoa.jpg` | pages/portfolio.html — gallery Editorial & Creative | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-creative-mau.jpg` | pages/portfolio.html — gallery Editorial & Creative | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-glam-2.jpg` | pages/portfolio.html — gallery Natural & Soft Glam | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-chan-dung-2.jpg` | pages/portfolio.html — gallery Beauty Portraits | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-highlight-3.jpg` | index.html — Student Highlights | openverse | CC CC0 1.0 | ✓ |
| `assets/img/courses-hero-dung-cu.webp` | pages/courses.html — Learning Approach / Professional, bàn dụng cụ trang điểm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-co-dau-1.webp` | pages/portfolio.html — gallery Bridal Beauty | openverse | CC CC0 1.0 | ✓ |
| `assets/img/courses-co-dau.webp` | pages/courses.html — chương trình Bridal Makeup | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-co-dau-2.jpg` | pages/portfolio.html — gallery Bridal Beauty | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/courses-bo-co.jpg` | pages/courses.html — chương trình Professional, bộ cọ | openverse | CC BY 2.0 | ✓ |
| `assets/img/courses-hero-model.jpg` | pages/courses.html — Courses hero, beauty editorial | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-behind-mat.jpg` | pages/portfolio.html — Behind the Look, bước thực hiện makeup mắt | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-behind-son.jpg` | pages/portfolio.html — Behind the Look, chọn bảng màu son | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-chan-dung-3.jpg` | pages/portfolio.html — gallery Beauty Portraits (B&W) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-story-my-pham.jpg` | pages/about.html — Our Story, flatlay dụng cụ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/courses-editorial-mi.jpg` | pages/courses.html — chương trình Beauty & Editorial, cận mi mắt | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-highlight-4.jpg` | index.html — Student Highlights | openverse | CC CC0 1.0 | ✓ |
| `assets/img/portfolio-glam-3.jpg` | pages/portfolio.html — gallery Natural & Soft Glam | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/about.html — instructors (từ khóa dự kiến: "makeup artist portrait woman")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Accordion (mở / đóng nội dung)
- Lọc theo nhóm
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/courses.html, pages/portfolio.html).
- Chuyển động (đếm trong code): `data-reveal` ×58, `data-header` ×4, `data-split` ×4, `data-reveal-stagger` ×9, `data-reveal="clip"` ×4.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:05 19/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "MAKEUP ÉCLAT BEAUTY ACADEMY" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 12 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 11:05 19/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Giữ đúng 4 trang theo chú thích BA (Home, About, Courses, Student Portfolio); không tạo trang chi tiết chương trình riêng vì BA yêu cầu không tự thêm trang — các thẻ chương trình liên kết tới anchor tương ứng trên pages/courses.html
- Nút Contact trên header dẫn tới pages/portfolio.html#contact (khu liên hệ cuối trang Student Portfolio) theo chú thích BA
- Font preset Instrument Serif thiếu ký tự tiếng Việt → thay bằng Cormorant Garamond (serif thanh lịch kiểu tạp chí, đủ tiếng Việt); thân bài giữ Geist
- Dùng bảng màu BA chỉ định (Cream, Nude Beige, Deep Burgundy, Chocolate Brown, Soft Black, Warm White) thay cho bảng màu preset
- Mức chuyển động Level 1: chỉ hiện dần khi cuộn, header đổi nền khi cuộn, hover; theo preset dùng data-split cho tiêu đề hero và data-reveal=clip cho ảnh hero (yêu cầu tiêu đề hiện theo dòng + ảnh fade-in của BA). Không chuyển trang động vì website HTML tĩnh không có framework
- Giảng viên dùng khối chữ cái đầu tên trên nền màu thương hiệu thay ảnh chân dung: không gán ảnh người lạ cho nhân vật mẫu

Giới hạn:

- Form liên hệ là bản demo, chưa có backend — không gửi thông tin đi
- Địa chỉ, số điện thoại, email, mạng xã hội, tên giảng viên và câu chuyện học viện là dữ liệu mẫu, cần thay bằng thông tin thật
- Cần ảnh chân dung thật của giảng viên cho section Meet the Instructors
- Ảnh tác phẩm học viên là ảnh minh họa từ nguồn mở (Openverse), cần thay bằng tác phẩm thật của học viên
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
