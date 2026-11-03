# VOLTCRAFT INDUSTRIES

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** Website Giowis thiệu xưởng cơ khí VOLTCRAFT INDUSTRIES
- **Thương hiệu / dự án:** VOLTCRAFT INDUSTRIES
- **Mục đích:** Thiết kế và xây dựng website đa trang giới thiệu VOLTCRAFT INDUSTRIES, doanh nghiệp chuyên gia công cơ khí chính xác, chế tạo máy, tích hợp hệ thống tự động hóa và phát triển giải pháp sản xuất công nghiệp.

Website định vị thương hiệu như một đơn vị cơ khí thế hệ mới, kết hợp năng lực chế tạo thực tế với công nghệ tự động hóa hiện đại. Giao diện cần thể hiện sự chính xác, mạnh mẽ, tiên tiến và đáng tin cậy, đồng thời tạo ấn tượng thị giác khác biệt so với website doanh nghiệp cơ khí truyền thống.

Mục tiêu chính:

Giới thiệu thương hiệu, năng lực kỹ thuật và hệ thống sản xuất.

Trình bày dịch vụ gia công, chế tạo máy và tự động hóa.

Giới thiệu nhà xưởng, thiết bị và các dự án tiêu biểu.

Thể hiện quy trình kiểm soát chất lượng và định hướng công nghệ.

Tạo kênh liên hệ để khách hàng doanh nghiệp trao đổi nhu cầu hợp tác.

Đây là website giới thiệu doanh nghiệp, không phải website thương mại điện tử. Không xây dựng giỏ hàng, thanh toán hoặc chức năng mua sản phẩm trực tuyến.
- **Ý tưởng thị giác (AI ghi):** Đường dẫn kỹ thuật (leader line) mảnh màu tím điện chạy dọc tiêu đề section, kết thúc bằng nút sáng cyan; nút và khối có góc vát như chi tiết cơ khí; ảnh máy thật phủ lớp tím tiết chế trên nền lưới kỹ thuật tối (Deep Space)

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Futuristic / Digital Art — tool nhận diện từ mô tả |
| Mức chuyển động | Level 3 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 11.657 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Unbounded`: đủ ký tự tiếng Việt
- `IBM Plex Sans`: đủ ký tự tiếng Việt
- `JetBrains Mono`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | VOLTCRAFT INDUSTRIES - Engineering Beyond Limits | Tạo ấn tượng Industrial Sci-Fi, tóm tắt năng lực, chỉ số tổng quan, dự án tiêu biểu, định hướng công nghệ và dẫn tới liên hệ | top, hero → hero-cinematic, capabilities → features-bento, glance → stats-band, featured-projects → teaser-row, technology → story-pinned, final-cta → cta-sky, footer | 9 |
| `about.html` | Giới thiệu - VOLTCRAFT INDUSTRIES | Xây dựng niềm tin: giới thiệu doanh nghiệp, triết lý kỹ thuật, phương pháp làm việc và đội ngũ | top, page-hero → page-hero, intro → story-editorial, philosophy → features-numbered, method → process-steps, team → team-grid, about-cta → cta-type, footer | 3 |
| `automation.html` | Công nghệ tự động hóa - VOLTCRAFT INDUSTRIES | Thể hiện định hướng công nghệ: 4 nhóm giải pháp, sơ đồ luồng tín hiệu đơn giản, tích hợp theo yêu cầu | top, page-hero → hero-split, role → quote-full, solutions → features-bento, flow → process-steps, integration → story-letter, footer | 3 |
| `capabilities.html` | Năng lực - VOLTCRAFT INDUSTRIES | Giải thích 5 nhóm năng lực, mỗi nhóm một bố cục khác nhau, có ứng dụng và liên kết trang liên quan | top, page-hero → page-hero, machining → features-tabs, machine-manufacturing → process-steps, fabrication → cta-fullbleed, automation → features-bento, custom → story-letter, footer | 5 |
| `contact.html` | Liên hệ - VOLTCRAFT INDUSTRIES | Giúp khách hàng doanh nghiệp gửi nhu cầu kỹ thuật nhanh: thông tin liên hệ có thể chỉnh sửa, form có kiểm tra dữ liệu | top, page-hero → page-hero, contact-form → contact-split, contact-faq → faq, footer | 0 |
| `project-automated-assembly-system.html` | Hệ thống lắp ráp tự động - VOLTCRAFT INDUSTRIES | Trang chi tiết dự án mẫu: tổng quan, yêu cầu, phương pháp, hình ảnh, kết quả | top, page-hero → page-hero, cover → cta-fullbleed, case → detail-article, related → teaser-row, footer | 1 |
| `project-precision-shaft.html` | Cụm trục truyền động chính xác - VOLTCRAFT INDUSTRIES | Trang chi tiết dự án mẫu nhóm CNC Machining | top, page-hero → page-hero, cover → cta-fullbleed, case → detail-article, related → teaser-row, footer | 1 |
| `project-steel-frame.html` | Khung kết cấu thép cho dây chuyền - VOLTCRAFT INDUSTRIES | Trang chi tiết dự án mẫu nhóm Metal Fabrication | top, page-hero → page-hero, cover → cta-fullbleed, case → detail-article, related → teaser-row, footer | 1 |
| `projects.html` | Dự án - VOLTCRAFT INDUSTRIES | Trưng bày năng lực qua dự án mẫu (đánh dấu rõ là giả lập), lọc theo nhóm, liên kết trang chi tiết | top, page-hero → page-hero, project-list → gallery-filter, projects-cta → cta-type, footer | 5 |
| `quality.html` | Kiểm soát chất lượng - VOLTCRAFT INDUSTRIES | Thể hiện cách tiếp cận về độ chính xác: nguyên tắc, quy trình 6 bước, thiết bị đo, xử lý sai lệch | top, page-hero → page-hero, principles → stats-band, process → timeline, methods → features-tabs, deviation → faq, footer | 2 |
| `workshop.html` | Nhà xưởng và thiết bị - VOLTCRAFT INDUSTRIES | Cho khách hình dung không gian sản xuất, phân khu, thư viện máy, danh mục thiết bị và khu kiểm tra | top, page-hero → page-hero, zones → features-bento, gallery → gallery-masonry, equipment → spec-table, inspection → hero-split, footer | 6 |

## 4. Cấu trúc thư mục

```
_build/
  sitemap.json
assets/
  css/
    site.css
  img/  (32 ảnh + CREDITS.md)
  js/
    atmos.js
    motion.js
    tw-config.js
    ui.js
about.html
automation.html
capabilities.html
contact.html
index.html
project-automated-assembly-system.html
project-precision-shaft.html
project-steel-frame.html
projects.html
quality.html
workshop.html
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

- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 2 ảnh chưa dùng: assets/img/workshop-chips.jpg, assets/img/automation-sensor.jpg

Tool đã ghi 40 lượt tìm (nguồn: openverse), 34 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| industrial robot arm factory | openverse | 9 ảnh | 9894 ms |
| cnc milling machine cutting | openverse | 12 ảnh | 19156 ms |
| automated production line | openverse | 12 ảnh | 9757 ms |
| KUKA robot welding | openverse | 9 ảnh | 18997 ms |
| CNC machine | openverse | 17 ảnh | 21237 ms |
| lathe metal turning | openverse | 7 ảnh | 6427 ms |
| robotic arm manufacturing | openverse | 6 ảnh | 11862 ms |
| car factory robots assembly | openverse | 16 ảnh | 27693 ms |
| welding sparks steel | openverse | 7 ảnh | 24707 ms |
| robot arm | openverse | 20 ảnh | 6797 ms |
| Fanuc industrial robot | openverse | 6 ảnh | 9395 ms |
| industrial robots automotive plant | openverse | 10 ảnh | 26282 ms |
| robot welding line factory | openverse | 1 ảnh | 28492 ms |
| factory interior machinery | openverse | 15 ảnh | 15861 ms |
| industrial robot | openverse | 9 ảnh | 5709 ms |
| robots assembly line BMW | openverse | 8 ảnh | 20893 ms |
| electrical control panel wiring | openverse | 13 ảnh | 15568 ms |
| conveyor belt factory | openverse | 15 ảnh | 15003 ms |
| caliper measuring metal part | openverse | 6 ảnh | 17909 ms |
| machined metal parts | openverse | 6 ảnh | 6181 ms |
| metal workshop interior machines | openverse | 15 ảnh | 22419 ms |
| milling machine metal | openverse | 19 ảnh | 14946 ms |
| laser cutting metal sheet | openverse | 16 ảnh | 20445 ms |
| micrometer precision measurement | openverse | 2 ảnh | 16836 ms |
| engineer technical drawing | openverse | 12 ảnh | 10210 ms |
| mechanic assembling machine | openverse | 12 ảnh | 9989 ms |
| industrial sensor | openverse | 12 ảnh | 9505 ms |
| steel shafts gears manufacturing | openverse | 13 ảnh | 21574 ms |
| lathe chuck closeup | openverse | 4 ảnh | 12772 ms |
| quality inspection factory worker | openverse | 6 ảnh | 24181 ms |
| steel beams construction factory | openverse | 7 ảnh | 6140 ms |
| angle grinder sparks | openverse | 2 ảnh | 11061 ms |
| aluminum machined part cnc | openverse | 10 ảnh | 12726 ms |
| engineer computer CAD design | openverse | 3 ảnh | 13387 ms |
| gears machinery closeup | openverse | 9 ảnh | 9913 ms |
| factory hall industrial building interior | openverse | 7 ảnh | 9598 ms |
| proximity sensor machine | openverse | 10 ảnh | 17703 ms |
| sheet metal bending press brake | openverse | 11 ảnh | 22641 ms |
| dial indicator gauge | openverse | 10 ảnh | 10337 ms |
| machine shop engine assembly | openverse | 11 ảnh | 19389 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/home-cap-machining.webp` | index.html — ô năng lực Precision Machining | openverse | CC CC0 1.0 | ✓ |
| `assets/img/cap-machining-lathe.webp` | capabilities.html — Precision Machining, cận cảnh tiện kim loại | openverse | CC CC0 1.0 | ✓ |
| `assets/img/quality-cmm.jpg` | quality.html — máy đo tọa độ CMM | openverse | CC BY-NC-SA 4.0 | ✓ |
| `assets/img/automation-robot-rail.jpg` | automation.html — robot công nghiệp trên ray tuyến tính | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/cap-fabrication-welding.webp` | capabilities.html — Metal Fabrication, hàn kim loại | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-workshop-sparks.webp` | about.html — hoạt động chế tạo trong xưởng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/project-steel-frame.jpg` | project-steel-frame.html — dự án kết cấu thép hàn | openverse | CC CC0 1.0 | ✓ |
| `assets/img/automation-robotics.jpg` | automation.html — Industrial Robotics | openverse | CC BY-NC 2.0 | ✓ |
| `assets/img/home-hero-robot.jpg` | index.html — hero, cánh tay robot công nghiệp | openverse | CC PDM 1.0 | ✓ |
| `assets/img/home-tech-robot.jpg` | index.html — Technology Preview, robot lắp ráp | openverse | CC PDM 1.0 | ✓ |
| `assets/img/automation-hero-kuka.jpg` | automation.html — hero, robot KUKA | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/automation-control-panel.jpg` | automation.html — Control Systems, bảng điều khiển | openverse | CC CC0 1.0 | ✓ |
| `assets/img/automation-conveyor.webp` | automation.html — Automated Workflows, băng tải | openverse | CC CC0 1.0 | ✓ |
| `assets/img/cap-machine-mfg.jpg` | capabilities.html — Machine Manufacturing, cụm cơ khí | openverse | CC CC0 1.0 | ✓ |
| `assets/img/workshop-chips.jpg` | workshop.html — gallery, phoi kim loại sau gia công | openverse | CC CC0 1.0 | ✗ |
| `assets/img/project-assembly-system.jpg` | project-automated-assembly-system.html — dây chuyền lắp ráp | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/workshop-hero-milling.webp` | workshop.html — hero, máy phay trong xưởng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/workshop-drill.webp` | workshop.html — gallery, mũi khoan cận cảnh | openverse | CC CC0 1.0 | ✓ |
| `assets/img/quality-micrometer.jpg` | quality.html — panme đo chính xác | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/about-technician.jpg` | about.html — kỹ thuật viên lắp ráp, hiệu chỉnh máy | openverse | CC BY 2.0 | ✓ |
| `assets/img/cap-automation-hydraulics.jpg` | capabilities.html — Industrial Automation, cơ cấu chấp hành | openverse | CC BY 2.0 | ✓ |
| `assets/img/workshop-tool.jpg` | workshop.html — gallery, dụng cụ thép | openverse | CC BY 2.0 | ✓ |
| `assets/img/workshop-chips.webp` | workshop.html — gallery, cắt kim loại bằng máy mài | openverse | CC CC0 1.0 | ✓ |
| `assets/img/projects-structure.webp` | projects.html — dự án mẫu kết cấu khung thép | openverse | CC CC0 1.0 | ✓ |
| `assets/img/about-hero-hall.webp` | about.html — hero, nhà xưởng sản xuất | openverse | CC CC0 1.0 | ✓ |
| `assets/img/workshop-zone-hall.webp` | workshop.html — giới thiệu môi trường sản xuất | openverse | CC CC0 1.0 | ✓ |
| `assets/img/project-gearbox.webp` | projects.html — dự án mẫu cụm truyền động bánh răng | openverse | CC CC0 1.0 | ✓ |
| `assets/img/cap-custom-engineering.webp` | capabilities.html — Custom Engineering, chi tiết máy theo yêu cầu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/workshop-inspection-gauge.jpg` | workshop.html — khu kiểm tra, đồng hồ so đo lỗ | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/automation-sensor.jpg` | automation.html — Sensors & Monitoring, cảm biến tiệm cận | openverse | CC BY-NC-SA 4.0 | ✗ |
| `assets/img/workshop-sheetmetal.webp` | workshop.html — gallery, gia công kim loại tấm | openverse | CC CC0 1.0 | ✓ |
| `assets/img/home-cap-machine-mfg.webp` | index.html — ô năng lực Machine Manufacturing, cụm máy | openverse | CC CC0 1.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- automation.html — solutions-sensors (từ khóa dự kiến: "proximity sensor machine")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Accordion (mở / đóng nội dung)
- Tabs
- Sao chép nhanh (số điện thoại / email)
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Lọc theo nhóm
- Phóng to ảnh (lightbox)
- Điều hướng: 11 trang liên kết qua header / footer (menu: about.html, automation.html, capabilities.html, contact.html, index.html, projects.html, quality.html, workshop.html).
- Chuyển động (đếm trong code): `data-reveal` ×93, `data-count-to` ×4, `data-header` ×11, `data-split` ×11, `data-reveal-stagger` ×15, `data-gradient-shift` ×2, `data-particles` ×3, `data-layers` ×1, `data-depth` ×2, `data-scene` ×1, `data-step` ×3, `data-scrub` ×2, `data-tilt` ×6, `data-magnetic` ×11, `data-spotlight` ×14, `data-parallax` ×4, `data-reveal="clip"` ×8; có nạp atmos.js.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:18 17/10/2026: 11 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 0 cần sửa, 1 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "VOLTCRAFT INDUSTRIES" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 20 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 11:18 17/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Ngôn ngữ chính là tiếng Việt (concept.md): menu, nút, nội dung, form, footer viết tiếng Việt. Riêng các khẩu hiệu tiêu đề BA ghi nguyên văn (ENGINEERING BEYOND LIMITS, ENGINEERED WITH PURPOSE, INSIDE OUR WORKSHOP, BUILT FOR REAL-WORLD CHALLENGES, INTELLIGENCE MEETS INDUSTRY, PRECISION IS A STANDARD, LET'S BUILD SOMETHING PRECISE, HAVE A COMPLEX ENGINEERING CHALLENGE?) và tên nhóm năng lực / bộ lọc dự án giữ tiếng Anh như tên riêng thương hiệu
- Nút CTA BA ghi tiếng Anh (LET'S ENGINEER, EXPLORE OUR CAPABILITIES, VIEW PROJECTS, TALK TO OUR TEAM) được dịch: 'Trao đổi kỹ thuật', 'Xem năng lực', 'Xem dự án'; mọi CTA ý định liên hệ dùng chung một nhãn
- Màu theo bảng màu BA (Deep Space, Electric Purple, Neon Cyan, Cold White, Slate Gray, Panel Dark) thay cho bảng màu preset; font giữ của preset (Unbounded, IBM Plex Sans, JetBrains Mono)
- Không dùng con trỏ tùy biến (BA cấm), chỉ giữ tilt nhẹ, magnetic cho CTA, spotlight cho panel
- Trang Capabilities BA không đặt tiêu đề hero, dùng 'BUILT TO SPECIFICATION'
- URL dạng file tĩnh (about.html, project-automated-assembly-system.html...) để chạy bằng file:// không lỗi routing
- Trang Projects có 5 dự án mẫu; 3 dự án có trang chi tiết, 2 dự án ghi 'Trang chi tiết sắp cập nhật'
- Ảnh: nguồn Openverse hạn chế, một số ảnh 1024px (hero dùng lớp phủ và lưới kỹ thuật để giảm cảm giác thiếu nét); assets/img/workshop-chips.jpg (có watermark) và automation-sensor.jpg (ảnh hiện vật bảo tàng nền trắng) đã tải nhưng không dùng; ô Sensors & Monitoring dùng khối hoa văn lưới thay ảnh

Giới hạn:

- Form liên hệ là bản demo: chỉ kiểm tra dữ liệu, chưa gửi đến doanh nghiệp (chưa có backend)
- Chưa hỗ trợ tải bản vẽ / tài liệu kỹ thuật qua form
- Bản đồ chưa hiển thị vì chưa có địa chỉ thực
- Địa chỉ, email, điện thoại, giờ làm việc, số năm hoạt động, lĩnh vực phục vụ, model và thông số thiết bị, tiêu chuẩn / chứng nhận là placeholder chờ doanh nghiệp xác nhận
- Toàn bộ dự án là nội dung giả lập minh họa giao diện
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
