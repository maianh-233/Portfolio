# NEXMOTION INDUSTRIES

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website Giowis thiệu xưởng cơ khí NEXMOTION INDUSTRIES
- **Thương hiệu / dự án:** NEXMOTION INDUSTRIES
- **Mục đích:** Thiết kế website giới thiệu doanh nghiệp NEXMOTION INDUSTRIES, chuyên về cơ khí chính xác, chế tạo linh kiện máy và giải pháp tự động hóa công nghiệp.

Slogan: “Precision Engineered. Progress Delivered.”

Website truyền tải hình ảnh một doanh nghiệp cơ khí hiện đại, có năng lực kỹ thuật chuyên nghiệp, quy trình sản xuất bài bản và định hướng phát triển công nghệ.

Đây là website nhiều trang (Multi-page Website), không phải One-page Landing Page. Mỗi mục chính trên thanh điều hướng phải có trang riêng với URL, nội dung và bố cục phù hợp. Không gom toàn bộ nội dung vào một trang cuộn dài.

Website chỉ phục vụ mục đích giới thiệu doanh nghiệp, không có thương mại điện tử, giỏ hàng, thanh toán hoặc quản lý đơn hàng.
- **Ý tưởng thị giác (AI ghi):** Ngôn ngữ bản vẽ kỹ thuật xuyên suốt: đường kích thước (dimension line) mảnh trên mỗi tiêu đề, dấu góc định vị trên ảnh, lưới 12 cột kẻ mảnh, góc vuông tuyệt đối; bảng màu navy - trắng băng - mint theo BA

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Minimal / Premium / Editorial — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 5.416 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Instrument Serif`: thiếu ký tự tiếng Việt → cần fallback
- `Geist`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | NEXMOTION INDUSTRIES — Precision Engineered. Progress Delivered. | Giới thiệu tổng quan doanh nghiệp và dẫn sang các trang năng lực, công nghệ, quy trình, dự án, ngành phục vụ, liên hệ | top, hero → hero-split, intro → story-editorial, capabilities → features-numbered, technology → gallery-lookbook, process → process-steps, projects → teaser-row, industries → features-bento, cta → cta-type, footer | 6 |
| `about.html` | Giới thiệu — NEXMOTION INDUSTRIES | Tổng quan, định hướng, sứ mệnh - tầm nhìn - giá trị cốt lõi, triết lý kỹ thuật, đội ngũ và hình ảnh nhà xưởng | top, page-hero → page-hero, overview → story-editorial, mission → features-bento, philosophy → quote-full, team → features-alternate, gallery → gallery-lookbook, cta → cta-type, footer | 4 |
| `capabilities.html` | Năng lực — NEXMOTION INDUSTRIES | Trình bày chi tiết 5 nhóm năng lực: ứng dụng, quy trình liên quan, thông tin kỹ thuật cập nhật được | top, page-hero → page-hero, cnc → features-alternate, components → features-alternate, fabrication → quote-full, automation → features-bento, engineering → features-alternate, cta → cta-type, footer | 5 |
| `contact.html` | Liên hệ — NEXMOTION INDUSTRIES | Địa chỉ, email, điện thoại, giờ làm việc (khung mẫu chờ dữ liệu thật) và form liên hệ bản demo | top, page-hero → page-hero, contact → contact-page, faq → faq, footer | 0 |
| `industries.html` | Ngành phục vụ — NEXMOTION INDUSTRIES | 5 lĩnh vực ứng dụng: nhu cầu kỹ thuật và vai trò của năng lực cơ khí | top, page-hero → page-hero, manufacturing → features-alternate, automation → features-alternate, machinery → quote-full, supporting → features-bento, cta → cta-type, footer | 5 |
| `project-gearbox.html` | Cụm truyền động trục vít bánh vít — NEXMOTION INDUSTRIES | Chi tiết dự án minh họa: bài toán kỹ thuật, phương án, hình ảnh, kết quả | top, page-hero → page-hero, case → detail-article, related → teaser-row, cta → cta-type, footer | 3 |
| `project-robot-base.html` | Đế lắp robot và ray dẫn hướng — NEXMOTION INDUSTRIES | Chi tiết dự án minh họa về tự động hóa | top, page-hero → page-hero, case → detail-article, related → teaser-row, cta → cta-type, footer | 3 |
| `project-welded-frame.html` | Khung kết cấu thép hàn cho dây chuyền — NEXMOTION INDUSTRIES | Chi tiết dự án minh họa về kết cấu kim loại | top, page-hero → page-hero, case → detail-article, related → teaser-row, cta → cta-type, footer | 3 |
| `projects.html` | Dự án — NEXMOTION INDUSTRIES | Portfolio dự án minh họa, có bộ lọc theo danh mục, dẫn sang trang chi tiết | top, page-hero → page-hero, list → list-cards, cta → cta-type, footer | 5 |
| `quality-process.html` | Chất lượng & Quy trình — NEXMOTION INDUSTRIES | Timeline 6 bước từ tiếp nhận yêu cầu đến hoàn thiện; cách kiểm soát độ chính xác, tính nhất quán | top, page-hero → page-hero, timeline → timeline, control → features-bento, faq → faq, cta → cta-type, footer | 2 |
| `technology.html` | Công nghệ — NEXMOTION INDUSTRIES | Giới thiệu hệ thống thiết bị: máy CNC, tự động hóa, đo kiểm, vật liệu, quy trình kiểm tra kỹ thuật (không tự tạo thông số máy / chứng nhận) | top, page-hero → page-hero, equipment → features-tabs, materials → story-editorial, flow → timeline, cta → cta-type, footer | 4 |

## 4. Cấu trúc thư mục

```
_build/
  sitemap.json
assets/
  css/
    site.css
  img/  (28 ảnh + CREDITS.md)
  js/
    atmos.js
    motion.js
    tw-config.js
    ui.js
about.html
capabilities.html
contact.html
index.html
industries.html
project-gearbox.html
project-robot-base.html
project-welded-frame.html
projects.html
quality-process.html
technology.html
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

- **⚠ AI không gọi tool tìm ảnh:** MCP đã kết nối, tool đã đăng ký nhưng không có lượt gọi search_images nào.
- **⚠ Một số lượt tìm ảnh lỗi:** 1/44 lượt lỗi (timeout)

Tool đã ghi 44 lượt tìm (nguồn: openverse), 32 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| KUKA robot welding | openverse | 10 ảnh | 27238 ms |
| CNC lathe turning | openverse | 1 ảnh | 25340 ms |
| milling cutter aluminum part | openverse | 13 ảnh | 44665 ms |
| cnc milling machine | openverse | 10 ảnh | 14440 ms |
| modern factory floor | openverse | 8 ảnh | 6587 ms |
| precision machined metal parts | openverse | 9 ảnh | 9087 ms |
| industrial robot arm | openverse | 10 ảnh | 13082 ms |
| CNC machining center | openverse | 6 ảnh | 8262 ms |
| KUKA robot factory | openverse | 10 ảnh | 5871 ms |
| machine shop lathe | openverse | 10 ảnh | 16947 ms |
| automotive assembly line robots | openverse | 6 ảnh | 307 ms |
| welding sparks steel | openverse | 7 ảnh | 16110 ms |
| gears machinery closeup | openverse | 8 ảnh | 9814 ms |
| caliper measuring metal part | openverse | 6 ảnh | 25697 ms |
| laser cutting sheet metal | openverse | 12 ảnh | 30309 ms |
| engineer technical drawing blueprint | openverse | 12 ảnh | 22045 ms |
| conveyor belt factory automation | openverse | 11 ảnh | 28323 ms |
| cnc lathe cutting metal | openverse | 1 ảnh | 30717 ms |
| engineers working factory | openverse | 10 ảnh | 5399 ms |
| coordinate measuring machine | openverse | 8 ảnh | 9383 ms |
| micrometer measurement | openverse | 8 ảnh | 6705 ms |
| robotic welding cell | openverse | 5 ảnh | 22399 ms |
| machinist workshop metalworking | openverse | 7 ảnh | 22106 ms |
| milling machine aluminum | openverse | 10 ảnh | 21406 ms |
| factory interior industrial | openverse | 10 ảnh | 13221 ms |
| worker factory machine operator | openverse | 9 ảnh | 17927 ms |
| robot arm manufacturing | openverse | 6 ảnh | 18170 ms |
| steel beams fabrication workshop | openverse | 11 ảnh | 24427 ms |
| engineer computer CAD design | openverse | 3 ảnh | 19510 ms |
| automated production line | openverse | 10 ảnh | 12167 ms |
| heavy machinery equipment industrial | openverse | 9 ảnh | 13896 ms |
| hydraulic cylinder | openverse | 8 ảnh | 8875 ms |
| stainless steel machined part | openverse | 7 ảnh | 14728 ms |
| fanuc robot | openverse | 10 ảnh | 12684 ms |
| car factory robots welding | openverse | 11 ảnh | 28338 ms |
| mechanical engineer drawing desk | openverse | 10 ảnh | 24604 ms |
| industrial machine tool | openverse | 8 ảnh | 9770 ms |
| cnc milling machine cutting | openverse | 10 ảnh | 7595 ms |
| machinist lathe metal turning | openverse | 4 ảnh | 23153 ms |
| cnc machine metal part | openverse | 2 ảnh | 28885 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-hero-cnc.webp` | index.html — hero, máy gia công CNC | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-tech-robot.jpg` | index.html — hình ảnh công nghệ, robot trên ray tuyến tính | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/home-tech-machining-center.jpg` | index.html — hình ảnh công nghệ, kỹ thuật viên tại trung tâm gia công | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/cap-mechanical-components.jpg` | capabilities.html — linh kiện cơ khí (cận cảnh đầu khẩu chrome) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/tech-materials-chips.jpg` | technology.html — vật liệu và phoi kim loại sau gia công | openverse | CC CC0 1.0 | ✓ |
| `assets/img/cap-automation-robot.jpg` | capabilities.html — tự động hóa công nghiệp, robot trên ray | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/tech-cnc-controls.jpg` | technology.html — bảng điều khiển trung tâm gia công CNC | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/cap-metal-fabrication.webp` | capabilities.html — gia công kết cấu kim loại, hàn | openverse | CC CC0 1.0 | ✓ |
| `assets/img/project-gearbox.webp` | projects.html + project-gearbox.html — cụm truyền động bánh răng (minh họa) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/tech-automation-conveyor.webp` | technology.html — hệ thống tự động hóa, băng tải | openverse | CC CC0 1.0 | ✓ |
| `assets/img/ind-assembly.jpg` | industries.html — chế tạo và lắp ráp cơ khí | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/ind-supporting.jpg` | industries.html — công nghiệp phụ trợ (nhà máy ép nhựa tại Hà Nội) | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/about-workshop.webp` | about.html — môi trường làm việc nhà xưởng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/ind-manufacturing.jpg` | industries.html — sản xuất công nghiệp, dây chuyền | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/tech-cmm-inspection.jpg` | technology.html — thiết bị đo kiểm CMM | openverse | CC PDM 1.0 | ✓ |
| `assets/img/quality-inspection.jpg` | quality-process.html — kiểm tra chất lượng trên máy đo | openverse | CC PDM 1.0 | ✓ |
| `assets/img/cap-cnc-machining.webp` | capabilities.html — gia công CNC chính xác, máy phay | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-team.jpg` | about.html — đội ngũ kỹ thuật và môi trường làm việc | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/about-factory.jpg` | about.html — hình ảnh nhà xưởng hiện đại | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/quality-team-check.jpg` | quality-process.html — nhân sự kiểm tra trên chuyền | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/ind-automation.jpg` | industries.html — tự động hóa nhà máy, lập trình cobot | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/cap-automation-cobot.jpg` | capabilities.html — tự động hóa công nghiệp, cobot | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/project-welded-frame.webp` | projects.html + project-welded-frame.html — khung thép hàn (minh họa) | openverse | CC CC0 1.0 | ✓ |
| `assets/img/project-threaded-shaft.jpg` | projects.html — trục ren gia công tiện (minh họa) | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/project-machine-repair.jpg` | projects.html — cụm cơ khí thiết bị (minh họa) | openverse | CC BY 2.0 | ✓ |
| `assets/img/ind-machinery.webp` | industries.html — máy móc và thiết bị kỹ thuật | openverse | CC CC0 1.0 | ✓ |
| `assets/img/cap-engineering-drawing.webp` | capabilities.html — kỹ thuật thiết kế, bản vẽ cơ cấu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/ind-machinery-tools.webp` | industries.html — máy móc và thiết bị kỹ thuật | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Phóng to ảnh (lightbox)
- Accordion (mở / đóng nội dung)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Lọc theo nhóm
- Tabs
- Điều hướng: 11 trang liên kết qua header / footer (menu: about.html, capabilities.html, contact.html, index.html, industries.html, projects.html, quality-process.html, technology.html).
- Chuyển động (đếm trong code): `data-reveal` ×198, `data-header` ×11.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 10:39 17/10/2026: 11 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 0 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "NEXMOTION INDUSTRIES" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 16 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 10:39 17/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Font display Instrument Serif của preset thiếu ký tự tiếng Việt và BA yêu cầu phong cách Modern Industrial / Swiss → dùng Be Vietnam Pro (display) + Geist (body)
- Màu preset editorial thay bằng bảng màu BA: Deep Navy #102A43, Ice White #F7FAFC, Steel Blue #627D98, Mint Green #5DD6B0, Graphite #243B53
- URL dạng /about, /projects/project-name của BA được dựng thành file .html ở gốc (about.html, project-gearbox.html…) để chạy được bằng file:// và tải lại trực tiếp
- Menu tiếng Việt theo ngôn ngữ đã chọn: Trang chủ, Giới thiệu, Năng lực, Công nghệ, Dự án, Chất lượng & Quy trình, Ngành phục vụ, Liên hệ
- Header dùng menu thu gọn dưới 1280px (xl) để 8 mục menu luôn nằm trên một dòng
- Không tạo thông số máy, chứng nhận, số liệu năng lực vì BA chưa cung cấp

Giới hạn:

- Form liên hệ là bản demo, chưa có backend
- Địa chỉ, email, điện thoại, giờ làm việc, mạng xã hội để 'Đang cập nhật' theo yêu cầu BA không tự tạo thông tin liên hệ giả; chưa nhúng bản đồ vì chưa có địa chỉ thật
- Dự án là dữ liệu minh họa có đánh dấu rõ; 2 dự án trong lưới chưa có trang chi tiết
- Ảnh lấy từ Openverse, một số giấy phép CC BY-NC / ND, cần thay bằng ảnh thật của doanh nghiệp khi đưa lên web thương mại
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
