# THIÊN THẦN NHỎ

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** THIẾT KẾ WEBSITE GIỚI THIỆU TRƯỜNG MẦM NON THIÊN THẦN NHỎ
- **Thương hiệu / dự án:** THIÊN THẦN NHỎ
- **Mục đích:** Thiết kế website đa trang giới thiệu TRƯỜNG MẦM NON THIÊN THẦN NHỎ, một môi trường giáo dục dành cho trẻ nhỏ, hướng đến sự phát triển toàn diện về thể chất, tư duy, cảm xúc và kỹ năng xã hội.

Website có mục đích giới thiệu hình ảnh nhà trường, triết lý giáo dục, chương trình học, cơ sở vật chất và các hoạt động thường ngày của trẻ. Đối tượng truy cập chính là phụ huynh đang tìm hiểu về môi trường học tập cho con.

Đây là website giới thiệu thuần túy, không phải website thương mại. Không có cửa hàng, giỏ hàng, giá bán, thanh toán trực tuyến hoặc chức năng mua sản phẩm.
- **Ý tưởng thị giác (AI ghi):** Mép mây vỏ sò nối các section như những đám mây trôi qua từng trang, kết hợp khung ảnh vòm cầu vồng / hữu cơ và nhãn dán bo tròn nghiêng nhẹ

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Bold / Experimental / Creative — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (BA chọn) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 4.428 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Bricolage Grotesque`: đủ ký tự tiếng Việt
- `Instrument Serif`: thiếu ký tự tiếng Việt → cần fallback

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | THIÊN THẦN NHỎ — Mỗi ngày đến trường là một ngày vui | Giới thiệu nhanh trường, triết lý, chương trình nổi bật, môi trường học tập; dẫn phụ huynh sang trang Liên hệ | top, hero → hero-split, gioi-thieu → story-letter, triet-ly → features-bento, chuong-trinh → teaser-row, moi-truong → gallery-lookbook, khoanh-khac → gallery-masonry, cta → cta-type, footer | 12 |
| `pages/about.html` | Về chúng tôi — THIÊN THẦN NHỎ | Kể câu chuyện hình thành, sứ mệnh, tầm nhìn, giá trị, triết lý chăm sóc, đội ngũ giáo viên và cam kết an toàn | top, page-hero → page-hero, cau-chuyen → story-editorial, su-menh → features-bento, cham-soc → features-numbered, doi-ngu → team-grid, cam-ket → features-alternate, cta → cta-type, footer | 4 |
| `pages/gallery-contact.html` | Thư viện & Liên hệ — THIÊN THẦN NHỎ | Thư viện ảnh lọc theo danh mục và thông tin liên hệ, bản đồ, form liên hệ bản demo | top, page-hero → page-hero, thu-vien → gallery-filter, lien-he → contact-split, hoi-dap → faq-accordion, footer | 10 |
| `pages/programs.html` | Chương trình giáo dục — THIÊN THẦN NHỎ | Trình bày phương pháp, chương trình theo nhóm tuổi, lĩnh vực phát triển, hoạt động trải nghiệm và một ngày của bé | top, page-hero → page-hero, phuong-phap → story-letter, nhom-tuoi → features-tabs, linh-vuc → features-bento, trai-nghiem → list-cards, mot-ngay → timeline, hoi-dap → faq-accordion, cta → cta-type, footer | 9 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
thiet-ke-website-gioi-thieu-truong-mam-non-thien-t/
  web/
    assets/
      css/
        site.css
      img/  (36 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        tw-config.js
        ui.js
    pages/
      about.html
      gallery-contact.html
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

- **✓ Chuỗi ảnh hoạt động:** 35 ảnh được dùng trên 4 trang

Tool đã ghi 30 lượt tìm (nguồn: openverse), 42 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| preschool teacher children classroom | openverse | 12 ảnh | 10324 ms |
| kindergarten children playing | openverse | 12 ảnh | 7710 ms |
| children painting art class | openverse | 11 ảnh | 10743 ms |
| children gardening plants | openverse | 11 ảnh | 5097 ms |
| child learning letters numbers | openverse | 10 ảnh | 6507 ms |
| children reading books library | openverse | 7 ảnh | 3864 ms |
| preschool playground slide | openverse | 11 ảnh | 7648 ms |
| kids watering plants garden | openverse | 8 ảnh | 2760 ms |
| children music class instruments | openverse | 10 ảnh | 6201 ms |
| kids building blocks toys | openverse | 4 ảnh | 6830 ms |
| kindergarten festival children performance | openverse | 10 ảnh | 8528 ms |
| teacher reading story children | openverse | 10 ảnh | 3920 ms |
| toddler playing wooden toys | openverse | 11 ảnh | 5717 ms |
| children dancing school event | openverse | 10 ảnh | 2668 ms |
| montessori classroom child | openverse | 10 ảnh | 5129 ms |
| kids science experiment | openverse | 11 ảnh | 4415 ms |
| children birthday party balloons | openverse | 6 ảnh | 5368 ms |
| kids singing classroom | openverse | 13 ảnh | 15822 ms |
| preschool children eating lunch | openverse | 8 ảnh | 22468 ms |
| kids drawing crayons | openverse | 10 ảnh | 12864 ms |
| children halloween costume parade school | openverse | 9 ảnh | 15056 ms |
| child puzzle learning table | openverse | 8 ảnh | 9567 ms |
| kids sports day race | openverse | 8 ảnh | 7810 ms |
| kindergarten children reading teacher | openverse | 8 ảnh | 9305 ms |
| preschool parents festival children | openverse | 8 ảnh | 17403 ms |
| kindergarten class children desks | openverse | 6 ảnh | 11222 ms |
| children planting garden school | openverse | 10 ảnh | 4875 ms |
| preschool children classroom activity | openverse | 6 ảnh | 15118 ms |
| family day kids school celebration | openverse | 7 ảnh | 12627 ms |
| children puzzle table learning | openverse | 3 ảnh | 23754 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-co-va-be.jpg` | index.html — hero, cô giáo chơi cùng các bé | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/home-env-lop-hoc.jpg` | index.html — môi trường học tập, lớp học | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/home-prog-nghe-thuat.webp` | index.html — chương trình sáng tạo nghệ thuật | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-prog-van-dong.jpg` | index.html — chương trình vận động thể chất | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/home-prog-chu-so.jpg` | index.html — chương trình làm quen chữ và số | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-prog-thien-nhien.jpg` | index.html — chương trình khám phá thiên nhiên | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-env-san-choi.jpg` | index.html — môi trường học tập, sân chơi | openverse | CC BY 2.0 | ✓ |
| `assets/img/home-env-goc-doc.jpg` | index.html — môi trường học tập, góc đọc sách | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-intro-be-vui-choi.jpg` | index.html — giới thiệu ngắn, các bé vui chơi ngoài trời | openverse | CC BY 2.0 | ✓ |
| `assets/img/gallery-xep-khoi.jpg` | gallery-contact.html — học tập, bé xếp khối | openverse | CC BY 2.0 | ✓ |
| `assets/img/about-co-giao.jpg` | about.html — giáo viên đồng hành cùng trẻ | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/gallery-ve-ngon-tay.jpg` | gallery-contact.html — nghệ thuật, vẽ bằng ngón tay | openverse | CC BY 2.0 | ✓ |
| `assets/img/gallery-cau-truot.jpg` | gallery-contact.html — vui chơi, cầu trượt | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/programs-nha-tre.jpg` | programs.html — nhóm nhà trẻ | openverse | CC CC0 1.0 | ✓ |
| `assets/img/programs-phuong-phap.jpg` | programs.html — phương pháp giáo dục, cô và trẻ trong giờ học | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/programs-ve-sinh.jpg` | programs.html — một ngày của bé, rửa tay vệ sinh | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/about-cam-ket.jpg` | about.html — cam kết môi trường thân thiện, tôn trọng trẻ | openverse | CC BY 2.0 | ✓ |
| `assets/img/programs-bua-trua.jpg` | programs.html — một ngày của bé, giờ ăn | openverse | CC PDM 1.0 | ✓ |
| `assets/img/programs-am-nhac.jpg` | programs.html — trải nghiệm âm nhạc, hát múa | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/gallery-su-kien-1.jpg` | gallery-contact.html — sự kiện, tiệc sinh nhật của bé | openverse | CC BY 2.0 | ✓ |
| `assets/img/gallery-bong-bong.jpg` | gallery-contact.html — vui chơi, thổi bong bóng | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/programs-cay-xanh.jpg` | programs.html — trải nghiệm chăm sóc cây xanh | openverse | CC BY 2.0 | ✓ |
| `assets/img/gallery-gio-ra-choi.jpg` | gallery-contact.html — vui chơi giờ ra chơi | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/gallery-leo-treo.jpg` | gallery-contact.html — vui chơi, bé leo trèo sân chơi | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-cau-chuyen.jpg` | about.html — câu chuyện hình thành, các bé ngoài sân trường | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/gallery-khoi-mau.webp` | gallery-contact.html — học tập, khối xếp hình nhiều màu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/programs-mau-giao-be.jpg` | programs.html — nhóm mẫu giáo bé | openverse | CC PDM 1.0 | ✓ |
| `assets/img/programs-mau-giao-nho.jpg` | programs.html — nhóm mẫu giáo nhỡ | openverse | CC PDM 1.0 | ✓ |
| `assets/img/gallery-leo-day.jpg` | gallery-contact.html — vận động, leo thang dây | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/gallery-tay-be-ve.webp` | gallery-contact.html — nghệ thuật, đôi tay bé vẽ tranh | openverse | CC CC0 1.0 | ✓ |
| `assets/img/gallery-be-tap-viet.jpg` | gallery-contact.html — học tập, bé vẽ và tập viết | openverse | CC CC0 1.0 | ✓ |
| `assets/img/gallery-but-sap.jpg` | gallery-contact.html — nghệ thuật, bé cầm bút sáp | openverse | CC CC0 1.0 | ✓ |
| `assets/img/gallery-hoa-trang.jpg` | gallery-contact.html — sự kiện, ngày hội hóa trang | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/about-cong-dong.jpg` | pages/about.html — cam kết an toàn, cô hướng dẫn bé rửa tay | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/programs-mau-giao-lon.jpg` | pages/programs.html — nhóm mẫu giáo lớn, bé chơi xâu hạt luyện tư duy | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Nút về đầu trang
- Accordion (mở / đóng nội dung)
- Lọc theo nhóm
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Tabs
- Điều hướng: 4 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/gallery-contact.html, pages/programs.html).
- Chuyển động (đếm trong code): `data-reveal` ×83, `data-header` ×4, `data-count-to` ×3.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 19:43 19/10/2026: 4 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "THIÊN THẦN NHỎ" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 9 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 09:40 19/10/2026 | Dựng website | xong |
| 19:43 19/10/2026 | Sửa: Đổi cấu trúc folder cho đúng không sửa code | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- BA chỉ định 4 trang nên không tạo trang chi tiết; 'Thư viện & Liên hệ' gộp một trang theo đúng yêu cầu
- Preset Bold (khối màu bão hòa, tránh pastel) mâu thuẫn với art direction của BA (Soft Pastel, Playful Preschool) — theo BA: bảng màu kem / xanh lá pastel / vàng nhạt / cam đào, giữ từ preset tinh thần nhãn dán bo tròn và chữ tiêu đề lớn
- Font preset thay bằng Baloo 2 (tiêu đề tròn) + Nunito (thân) theo yêu cầu 'typography tròn, thân thiện', cả hai đủ ký tự tiếng Việt; bỏ Instrument Serif vì thiếu ký tự tiếng Việt
- Mức chuyển động Level 1 không nạp atmos.js; mây / sao / cầu vồng trôi nhẹ ở hero viết bằng CSS animation đơn giản trong site.css theo yêu cầu BA, có tắt khi prefers-reduced-motion
- Minh họa dễ thương dùng hình khối SVG trừu tượng (mây, sao, cầu vồng, lá) làm trang trí, ảnh chính vẫn là ảnh chụp thật

Giới hạn:

- Form liên hệ là bản demo, chưa có backend, chưa gửi đi
- Địa chỉ, số điện thoại, email, giờ làm việc, tên giáo viên là dữ liệu mẫu cần thay
- Bản đồ Google Maps nhúng theo địa chỉ mẫu
- Đội ngũ giáo viên chưa có ảnh chân dung thật, đang dùng khối chữ cái đầu tên
- Ảnh lấy từ thư viện ảnh mở (Openverse), một số giấy phép CC BY-NC-ND, nên thay bằng ảnh thật của trường khi lên web
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
