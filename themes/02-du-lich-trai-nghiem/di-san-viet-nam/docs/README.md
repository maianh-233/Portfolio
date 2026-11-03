# disanvietnam

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** WEBSITE DI SẢN VIỆT NAM
- **Thương hiệu / dự án:** disanvietnam
- **Mục đích:** Website được định vị lại thành CỔNG TRI THỨC về di sản văn hóa Việt Nam và Quảng Trị
- **Ý tưởng thị giác (AI ghi):** Lưới tọa độ mảnh như một lớp bản đồ nền chạy qua mọi trang, đi cùng đường kẻ vàng di sản đánh dấu mốc năm và nhãn trạng thái nguồn (Đã đối chiếu nguồn / Theo hồ sơ – chờ kiểm chứng) trên mọi thẻ dữ liệu

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | Vietnamese — Tiếng Việt (`lang="vi"`) |
| Phong cách | Industrial — tool nhận diện từ mô tả |
| Mức chuyển động | Level 1 (BA chọn) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 16.344 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Unbounded`: đủ ký tự tiếng Việt
- `IBM Plex Sans`: đủ ký tự tiếng Việt
- `JetBrains Mono`: đủ ký tự tiếng Việt

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | disanvietnam — Cổng tri thức di sản Việt Nam và Quảng Trị | Cổng vào: định vị cổng tri thức, ba lối vào (bản đồ, thư viện, di sản), công trình tiêu biểu, thành tựu, kết nối hội thảo và hợp tác | hero, so-lieu, loi-vao, tri-thuc, thanh-tuu, ket-noi, hop-tac | 9 |
| `pages/ban-do.html` | Ngân hàng số di sản – Bản đồ WebGIS — disanvietnam | Bản đồ Leaflet + OpenStreetMap với 4 điểm tọa độ minh họa, 7 lớp checkbox, panel hồ sơ điểm (bottom sheet trên mobile), siêu dữ liệu bản đồ, bảng hồ sơ di tích, tài nguyên số | page-hero, ban-do-khung, ho-so-di-tich, tai-nguyen-so | 11 |
| `pages/cong-trinh.html` | Công trình số 10: Dinh Chúa Nguyễn 1558–1626 — disanvietnam | Trang chi tiết mẫu: siêu dữ liệu, tóm tắt chờ tác giả, tệp PDF đang xác minh, popup trích dẫn APA/Vancouver có nút sao chép, cùng chủ đề và di tích liên quan | page-hero, noi-dung, lien-quan | 2 |
| `pages/di-san-chi-tiet.html` | Chi tiết di sản UNESCO — disanvietnam | Trang chi tiết một di sản trong danh mục UNESCO (đọc nhóm + số thứ tự trên URL, dựng từ data.js): ảnh lớn, mô tả, thông tin tra cứu, nguồn đối chiếu, gợi ý trích dẫn, mục trước / sau, các mục cùng nhóm | page-hero, chi-tiet, dieu-huong, cung-nhom, cta | 2 |
| `pages/di-san.html` | Di sản văn hóa — disanvietnam | Loại hình di tích, di sản thế giới UNESCO tại Việt Nam, di tích quốc gia, chuyên đề Quảng Trị với hai địa danh | page-hero, loai-hinh, unesco, quoc-gia, quang-tri, cta | 21 |
| `pages/giai-thuong.html` | Giải thưởng & sáng tạo — disanvietnam | 4 tab giải thưởng với chủ thể nhận (cá nhân / nhóm / cơ quan), sản phẩm ứng dụng, chứng nhận quyền tác giả, câu chuyện thành tựu | page-hero, danh-muc, san-pham, cau-chuyen, cta | 1 |
| `pages/ho-so-chuyen-gia.html` | Giới thiệu & hồ sơ Phan Tuấn Anh — disanvietnam | Tầm nhìn 5 mảng, hồ sơ chuyên gia (tóm tắt, lĩnh vực, công tác, học vấn, công trình, giải thưởng), nhóm nghiên cứu, đối tác, lịch sử dự án, form đề nghị hợp tác có checkbox đồng ý | page-hero, tam-nhin, ho-so, nhom-nghien-cuu, doi-tac, lich-su, hop-tac | 2 |
| `pages/hoi-thao.html` | Hội thảo & hoạt động — disanvietnam | Timeline dọc 2015–2026 lọc theo năm, hai loại nhãn tách biệt, bảng bài tham luận cuộn ngang, bản tin, album chờ ảnh | page-hero, theo-nam, tham-luan, ban-tin, album, cta | 5 |
| `pages/lien-he.html` | Liên hệ & hợp tác — disanvietnam | Thông tin đơn vị vận hành (chờ cung cấp), form liên hệ và form yêu cầu dữ liệu (tab), chính sách dữ liệu, bản quyền hình ảnh, bảo mật, hỏi đáp, website liên kết | page-hero, lien-he-chinh, chinh-sach, lien-ket | 1 |
| `pages/nghien-cuu.html` | Nghiên cứu khoa học — disanvietnam | Danh mục 14 công trình với bộ lọc chạy thật trên data.js (năm, loại công bố, chủ đề, vai trò, ngôn ngữ, quyền PDF), tìm kiếm, sắp xếp; kỷ yếu, đề tài, hướng dẫn trích dẫn | page-hero, danh-sach, tai-nguyen, cta | 1 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
disanvietnam/
  web/
    assets/
      css/
        site.css
      img/  (35 ảnh + CREDITS.md)
      js/
        atmos.js
        data.js
        motion.js
        site.js
        tw-config.js
        ui.js
    pages/
      ban-do.html
      cong-trinh.html
      di-san-chi-tiet.html
      di-san.html
      giai-thuong.html
      ho-so-chuyen-gia.html
      hoi-thao.html
      lien-he.html
      nghien-cuu.html
    BC rà soát web Di sản Việt nam (1) (1).docx
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

- **⚠ Một số lượt tìm ảnh lỗi:** 17/33 lượt lỗi (timeout)
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 54 ảnh chưa dùng: assets/img/congtrinh-vinh-moc-ham.jpg, https://upload.wikimedia.org/wikipedia/commons/0/09/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_4.jpg, https://upload.wikimedia.org/wikipedia/commons/1/1c/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_Foto.jpg, https://upload.wikimedia.org/wikipedia/commons/b/b9/%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: assets/img/logo.png không do use_image tải về (không có trong assets/img/CREDITS.md) | pages/ban-do.html: assets/img/logo.png không do use_image tải về (không có trong assets/img/CREDITS.md) | pages/ban-do.html: Link ảnh chưa kiểm tra: https://c.basemaps.cartocdn.com/rastertiles/voyager/10/816/462.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 33 lượt tìm (nguồn: openverse), 14 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| Quang Tri citadel | openverse | 1 ảnh | 42068 ms |
| Vinh Moc tunnels | — | lỗi timeout | 39282 ms |
| Hien Luong bridge | openverse | 4 ảnh | 35092 ms |
| Hue imperial citadel gate | — | lỗi timeout | 47026 ms |
| old library archive books | — | lỗi timeout | 31528 ms |
| topographic map paper | openverse | 9 ảnh | 26098 ms |
| Hue citadel Vietnam | — | lỗi timeout | 31545 ms |
| Hoi An ancient town | openverse | 8 ảnh | 39606 ms |
| Vinh Moc tunnel | openverse | 8 ảnh | 25749 ms |
| My Son sanctuary temple | — | lỗi timeout | 41860 ms |
| Thanh co Quang Tri | — | lỗi timeout | 66732 ms |
| Quang Tri citadel memorial | — | lỗi timeout | 51138 ms |
| Hue imperial city | — | lỗi timeout | 38841 ms |
| library bookshelves reading room | openverse | 9 ảnh | 36030 ms |
| terrestrial laser scanner survey | openverse | 3 ảnh | 66311 ms |
| satellite image river delta | openverse | 8 ảnh | 19084 ms |
| Ha Long Bay Vietnam | openverse | 8 ảnh | 18287 ms |
| Hoi An old town street | — | lỗi timeout | 38165 ms |
| Hoi An Vietnam UNESCO | openverse | 8 ảnh | 20563 ms |
| My Son Cham towers | — | lỗi timeout | 68105 ms |
| Hue Vietnam citadel | — | lỗi timeout | 67703 ms |
| museum artifacts display case | openverse | 8 ảnh | 16022 ms |
| Vietnam museum history exhibit | openverse | 8 ảnh | 17378 ms |
| Quang Tri citadel Vietnam | — | lỗi timeout | 41328 ms |
| Hue imperial city Vietnam | — | lỗi timeout | 58579 ms |
| Hien Luong bridge Ben Hai river | openverse | 4 ảnh | 66727 ms |
| Hue citadel Vietnam gate | openverse | 8 ảnh | 21041 ms |
| Quang Tri Vietnam | openverse | 0 ảnh | 28064 ms |
| Ha Long Bay aerial | — | lỗi timeout | 37502 ms |
| Hoi An ancient town river | — | lỗi timeout | 38721 ms |
| Vietnamese scientist portrait | openverse | 0 ảnh | 41524 ms |
| Vietnam 360 panorama heritage | — | lỗi timeout | 78332 ms |
| Vietnam professor researcher | — | lỗi timeout | 48145 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `assets/img/quangtri-cau-hien-luong.jpg` | pages/di-san.html — chuyên đề Quảng Trị, cầu Hiền Lương | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/home-loi-vao-ban-do.jpg` | index.html — thẻ lối vào Bản đồ GIS | openverse | CC BY-SA 2.0 | ✓ |
| `assets/img/quangtri-dia-dao-vinh-moc.jpg` | pages/di-san.html — chuyên đề Quảng Trị, địa đạo Vịnh Mốc | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/congtrinh-vinh-moc-ham.jpg` | index.html — thẻ công trình 14 (địa đạo Vịnh Mốc) | openverse | CC BY-NC-SA 2.0 | ✗ |
| `https://upload.wikimedia.org/wikipedia/commons/0/09/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_4.jpg` | index.html — hero, cổng Thành cổ Quảng Trị | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://upload.wikimedia.org/wikipedia/commons/1/1c/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_Foto.jpg` | index.html — thẻ công trình 8 (Thành cổ Quảng Trị) | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `assets/img/home-loi-vao-thu-vien.webp` | index.html — thẻ lối vào Thư viện nghiên cứu | openverse | CC CC0 1.0 | ✓ |
| `assets/img/bando-mo-hinh-3d.jpg` | pages/ban-do.html — mục Mô hình 3D (đám mây điểm quét laser) | openverse | CC BY-NC-ND 2.0 | ✓ |
| `assets/img/congtrinh-anh-vien-tham.jpg` | pages/cong-trinh.html — minh họa dữ liệu viễn thám | openverse | CC BY 2.0 | ✓ |
| `assets/img/disan-unesco-ha-long.jpg` | pages/di-san.html — UNESCO, vịnh Hạ Long | openverse | CC BY 2.0 | ✓ |
| `assets/img/disan-unesco-hoi-an.jpg` | pages/di-san.html — UNESCO, đô thị cổ Hội An | openverse | CC BY-NC-SA 2.0 | ✓ |
| `assets/img/disan-unesco-trang-an.jpg` | pages/di-san.html — UNESCO, quần thể danh thắng Tràng An | openverse | CC BY-NC 2.0 | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/b/b9/%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg` | index.html — thẻ lối vào Khám phá di sản (Quần thể di tích Cố đô Huế) | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `assets/img/hero-slide-ngo-mon-hue.webp` | index.html — slider banner: Ngọ Môn, Hoàng thành Huế | openverse | CC CC0 1.0 | ✓ |
| `assets/img/hero-slide-hien-luong.jpg` | index.html — slider banner: cầu Hiền Lương, Quảng Trị | openverse | CC BY-NC-ND 2.0 | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/5/5b/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_3.jpg` | index.html — slider banner | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://upload.wikimedia.org/wikipedia/commons/7/75/Vinh_Moc_tunnels%2C_Vietnam%2C_South_China_Sea_exit.jpg` | index.html — slider banner | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_4.jpg/1920px-Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_4.jpg` | index.html — slider banner slide 1 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Vinh_Moc_tunnels%2C_Vietnam%2C_South_China_Sea_exit.jpg/1920px-Vinh_Moc_tunnels%2C_Vietnam%2C_South_China_Sea_exit.jpg` | index.html — slider banner | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_3.jpg/1280px-Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_3.jpg` | index.html — slider banner | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_Foto.jpg/1280px-Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_Foto.jpg` | index.html — tri-thuc công trình 8 | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg/1280px-%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg` | index.html — loi-vao Khám phá di sản | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Prof_ng%C3%B4_b%E1%BA%A3o_ch%C3%A2u.jpg/960px-Prof_ng%C3%B4_b%E1%BA%A3o_ch%C3%A2u.jpg` | pages/ho-so-chuyen-gia.html — ảnh chân dung hồ sơ chuyên gia (demo) | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_2.jpg/1920px-Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_2.jpg` | pages/ban-do.html — ảnh minh họa thẻ VR360 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://upload.wikimedia.org/wikipedia/commons/b/b6/Ngo_Bau_Chau_MFO.jpg` | pages/ho-so-chuyen-gia.html — ảnh chân dung hồ sơ chuyên gia (demo) | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `assets/img/quangtri-thanh-co-ngay-nay.jpg` | pages/di-san.html + ban-do.html — Thành cổ Quảng Trị (hào nước, cổng thành) | wikimedia | CC BY-SA 3.0 | ✓ |
| `assets/img/quangtri-thanh-co-cong.jpg` | pages/di-san.html — slider Thành cổ Quảng Trị | wikimedia | CC BY-SA 3.0 | ✓ |
| `assets/img/quangtri-thanh-co-tuong-niem.jpg` | pages/di-san.html — slider Thành cổ Quảng Trị | wikimedia | CC BY-SA 4.0 | ✓ |
| `assets/img/quangtri-hien-luong-bo-nam.jpg` | pages/di-san.html + ban-do.html — cầu Hiền Lương | wikimedia | CC BY-SA 3.0 | ✓ |
| `assets/img/quangtri-ben-hai-cong.jpg` | pages/di-san.html + ban-do.html — cổng bờ Bắc sông Bến Hải | wikimedia | CC BY-SA 3.0 | ✓ |
| `assets/img/quangtri-ben-hai-bo-bac.jpg` | pages/di-san.html — slider cầu Hiền Lương | wikimedia | CC BY-SA 3.0 | ✓ |
| `assets/img/quangtri-vinh-moc-cua-ham.jpg` | pages/di-san.html + ban-do.html — cửa hầm địa đạo Vịnh Mốc | wikimedia | CC BY-SA 3.0 | ✓ |
| `assets/img/quangtri-vinh-moc-phong.jpg` | pages/di-san.html — slider địa đạo Vịnh Mốc | wikimedia | CC BY 2.0 | ✓ |
| `assets/img/quangtri-truong-son.jpg` | pages/ban-do.html — bộ sưu tập, Nghĩa trang liệt sĩ quốc gia Trường Sơn | wikimedia | CC BY-SA 3.0 | ✓ |
| `assets/img/quangtri-la-vang.jpg` | pages/ban-do.html — bộ sưu tập, Trung tâm hành hương La Vang | wikimedia | CC BY-SA 3.0 | ✓ |
| `assets/img/quangtri-cua-tung.jpg` | pages/ban-do.html — bộ sưu tập, sông Cửa Tùng | wikimedia | Public domain | ✓ |
| `assets/img/quangtri-dakrong.jpg` | pages/ban-do.html — bộ sưu tập, cầu treo Đakrông | wikimedia | CC BY-SA 2.0 | ✓ |
| `assets/img/disan-unesco-ha-long-2.jpg` | pages/di-san.html — slider vịnh Hạ Long | wikimedia | CC BY-SA 3.0 | ✓ |
| `assets/img/disan-unesco-ha-long-3.jpg` | pages/di-san.html — slider vịnh Hạ Long | wikimedia | CC BY-SA 4.0 | ✓ |
| `assets/img/disan-unesco-hoi-an-2.jpg` | pages/di-san.html — slider Hội An | wikimedia | CC BY-SA 4.0 | ✓ |
| `assets/img/disan-unesco-hoi-an-3.jpg` | pages/di-san.html — slider Hội An | wikimedia | CC BY-SA 4.0 | ✓ |
| `assets/img/disan-unesco-trang-an-2.jpg` | pages/di-san.html — slider Tràng An | wikimedia | CC BY 4.0 | ✓ |
| `assets/img/disan-unesco-trang-an-3.jpg` | pages/di-san.html — slider Tràng An | wikimedia | CC BY-SA 4.0 | ✓ |
| `assets/img/unesco/dia-chat-01.jpg` | pages/di-san.html — danh mục UNESCO (dia-chat #1) | wikimedia | CC BY-SA 4.0 | ✗ |
| `assets/img/unesco/dia-chat-02.jpg` | pages/di-san.html — danh mục UNESCO (dia-chat #2) | wikimedia | CC BY 2.0 | ✗ |
| `assets/img/unesco/dia-chat-03.jpg` | pages/di-san.html — danh mục UNESCO (dia-chat #3) | wikimedia | CC BY-SA 3.0 | ✗ |
| `assets/img/unesco/dia-chat-04.jpg` | pages/di-san.html — danh mục UNESCO (dia-chat #4) | wikimedia | Public domain | ✗ |
| `assets/img/unesco/phi-vat-the-01.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #1) | wikimedia | CC0 | ✗ |
| `assets/img/unesco/phi-vat-the-02.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #2) | wikimedia | CC BY-SA 3.0 | ✗ |
| `assets/img/unesco/phi-vat-the-03.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #3) | wikimedia | CC BY-SA 3.0 | ✗ |
| `assets/img/unesco/phi-vat-the-04.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #4) | wikimedia | Public domain | ✗ |
| `assets/img/unesco/phi-vat-the-05.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #5) | wikimedia | CC BY-SA 3.0 | ✗ |
| `assets/img/unesco/phi-vat-the-06.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #6) | wikimedia | CC BY-SA 4.0 | ✗ |
| `assets/img/unesco/phi-vat-the-07.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #7) | wikimedia | Public domain | ✗ |
| `assets/img/unesco/phi-vat-the-08.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #8) | wikimedia | Public domain | ✗ |
| `assets/img/unesco/phi-vat-the-09.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #9) — ảnh minh họa | wikimedia | CC BY-SA 4.0 | ✗ |
| `assets/img/unesco/phi-vat-the-10.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #10) | wikimedia | CC BY-SA 4.0 | ✗ |
| `assets/img/unesco/phi-vat-the-11.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #11) | wikimedia | CC BY-SA 4.0 | ✗ |
| `assets/img/unesco/phi-vat-the-12.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #12) | wikimedia | CC BY 2.0 | ✗ |
| `assets/img/unesco/phi-vat-the-13.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #13) | wikimedia | Public domain | ✗ |
| `assets/img/unesco/phi-vat-the-14.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #14) | wikimedia | CC BY-SA 4.0 | ✗ |
| `assets/img/unesco/phi-vat-the-15.jpg` | pages/di-san.html — danh mục UNESCO (phi-vat-the #15) | wikimedia | Public domain | ✗ |
| `assets/img/unesco/sinh-quyen-01.jpg` | pages/di-san.html — danh mục UNESCO (sinh-quyen #1) | wikimedia | CC BY-SA 3.0 | ✗ |
| `assets/img/unesco/sinh-quyen-02.jpg` | pages/di-san.html — danh mục UNESCO (sinh-quyen #2) | wikimedia | CC BY-SA 4.0 | ✗ |
| `assets/img/unesco/sinh-quyen-03.jpg` | pages/di-san.html — danh mục UNESCO (sinh-quyen #3) | wikimedia | Public domain | ✗ |
| `assets/img/unesco/sinh-quyen-04.jpg` | pages/di-san.html — danh mục UNESCO (sinh-quyen #4) | wikimedia | Public domain | ✗ |
| `assets/img/unesco/sinh-quyen-05.jpg` | pages/di-san.html — danh mục UNESCO (sinh-quyen #5) | wikimedia | CC BY-SA 3.0 | ✗ |
| `assets/img/unesco/sinh-quyen-06.jpg` | pages/di-san.html — danh mục UNESCO (sinh-quyen #6) | wikimedia | CC0 | ✗ |
| `assets/img/unesco/sinh-quyen-07.jpg` | pages/di-san.html — danh mục UNESCO (sinh-quyen #7) | wikimedia | CC BY-SA 4.0 | ✗ |
| `assets/img/unesco/sinh-quyen-08.jpg` | pages/di-san.html — danh mục UNESCO (sinh-quyen #8) | wikimedia | Public domain | ✗ |
| `assets/img/unesco/sinh-quyen-09.jpg` | pages/di-san.html — danh mục UNESCO (sinh-quyen #9) | wikimedia | CC BY 3.0 | ✗ |
| `assets/img/unesco/sinh-quyen-10.jpg` | pages/di-san.html — danh mục UNESCO (sinh-quyen #10) | wikimedia | Public domain | ✗ |
| `assets/img/unesco/sinh-quyen-11.jpg` | pages/di-san.html — danh mục UNESCO (sinh-quyen #11) — ảnh minh họa | wikimedia | CC BY-SA 4.0 | ✗ |
| `assets/img/unesco/the-gioi-01.jpg` | pages/di-san.html — danh mục UNESCO (the-gioi #1) | wikimedia | CC BY-SA 3.0 | ✗ |
| `assets/img/unesco/the-gioi-02.jpg` | pages/di-san.html — danh mục UNESCO (the-gioi #2) | wikimedia | CC BY-SA 4.0 | ✗ |
| `assets/img/unesco/the-gioi-03.jpg` | pages/di-san.html — danh mục UNESCO (the-gioi #3) | wikimedia | CC BY-SA 3.0 | ✗ |
| `assets/img/unesco/the-gioi-04.jpg` | pages/di-san.html — danh mục UNESCO (the-gioi #4) | wikimedia | CC BY 4.0 | ✗ |
| `assets/img/unesco/the-gioi-05.jpg` | pages/di-san.html — danh mục UNESCO (the-gioi #5) | wikimedia | Public domain | ✗ |
| `assets/img/unesco/the-gioi-06.jpg` | pages/di-san.html — danh mục UNESCO (the-gioi #6) | wikimedia | CC BY-SA 4.0 | ✗ |
| `assets/img/unesco/the-gioi-07.jpg` | pages/di-san.html — danh mục UNESCO (the-gioi #7) | wikimedia | CC BY-SA 3.0 | ✗ |
| `assets/img/unesco/the-gioi-08.jpg` | pages/di-san.html — danh mục UNESCO (the-gioi #8) | wikimedia | Public domain | ✗ |
| `assets/img/unesco/the-gioi-09.jpg` | pages/di-san.html — danh mục UNESCO (the-gioi #9) | wikimedia | CC BY-SA 2.0 | ✗ |
| `assets/img/unesco/tu-lieu-01.jpg` | pages/di-san.html — danh mục UNESCO (tu-lieu #1) | wikimedia | CC BY-SA 3.0 | ✗ |
| `assets/img/unesco/tu-lieu-02.jpg` | pages/di-san.html — danh mục UNESCO (tu-lieu #2) | wikimedia | CC BY-SA 3.0 | ✗ |
| `assets/img/unesco/tu-lieu-03.jpg` | pages/di-san.html — danh mục UNESCO (tu-lieu #3) | wikimedia | CC BY 3.0 | ✗ |
| `assets/img/unesco/tu-lieu-04.jpg` | pages/di-san.html — danh mục UNESCO (tu-lieu #4) — ảnh minh họa | wikimedia | CC BY-SA 4.0 | ✗ |
| `assets/img/unesco/tu-lieu-05.jpg` | pages/di-san.html — danh mục UNESCO (tu-lieu #5) | wikimedia | CC0 | ✗ |
| `assets/img/unesco/tu-lieu-06.jpg` | pages/di-san.html — danh mục UNESCO (tu-lieu #6) — ảnh minh họa | wikimedia | Public domain | ✗ |
| `assets/img/unesco/tu-lieu-07.jpg` | pages/di-san.html — danh mục UNESCO (tu-lieu #7) — ảnh minh họa | wikimedia | Public domain | ✗ |
| `assets/img/album-gis-2024.jpg` | pages/hoi-thao.html — album: Hội thảo Ứng dụng GIS toàn quốc 2024 (ảnh minh họa, Trường ĐH Cần Thơ) | wikimedia | CC BY-SA 2.0 | ✓ |
| `assets/img/album-cdsd-2023.jpg` | pages/hoi-thao.html — album: CDSD 2023 (ảnh minh họa phiên hội thảo quốc tế) | wikimedia | CC BY 2.0 | ✓ |
| `assets/img/album-dia-ly-xv.jpg` | pages/hoi-thao.html — album: Hội nghị Khoa học Địa lý lần thứ XV (ảnh minh họa, TP. Hồ Chí Minh) | wikimedia | CC BY-SA 4.0 | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

6 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — slider banner slide 1 — https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_4.jpg/1920px-Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_4.jpg
- index.html — slider banner — https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Vinh_Moc_tunnels%2C_Vietnam%2C_South_China_Sea_exit.jpg/1920px-Vinh_Moc_tunnels%2C_Vietnam%2C_South_China_Sea_exit.jpg
- index.html — slider banner — https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_3.jpg/1280px-Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_3.jpg
- index.html — loi-vao Khám phá di sản — https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg/1280px-%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg
- pages/ban-do.html — ảnh minh họa thẻ VR360 — https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_2.jpg/1920px-Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_2.jpg
- pages/ho-so-chuyen-gia.html — ảnh chân dung hồ sơ chuyên gia (demo) — https://upload.wikimedia.org/wikipedia/commons/b/b6/Ngo_Bau_Chau_MFO.jpg

Vị trí chưa có ảnh (đang dùng bố cục không ảnh, cần ảnh thật từ khách):

- pages/hoi-thao.html — album (từ khóa dự kiến: "conference GIS Vietnam photos")
- pages/ho-so-chuyen-gia.html — ho-so: chân dung (từ khóa dự kiến: "Đã tìm trên disanvietnam.vn, Nhân Dân, VietTimes, Báo Văn hóa: không có ảnh nào được chú thích là ông Phan Tuấn Anh — giữ khung chữ cái đầu, chờ khách gửi ảnh chân dung")
- pages/ban-do.html — vr360 / tour-so / bo-suu-tap (từ khóa dự kiến: "VR360 panorama Quang Tri relic")

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Carousel
- Form có kiểm tra dữ liệu — bản demo, không gửi đi đâu (chưa có backend)
- Phóng to ảnh (lightbox)
- Cửa sổ (modal)
- Sao chép nhanh (số điện thoại / email)
- Tabs
- Accordion (mở / đóng nội dung)
- Điều hướng: 10 trang liên kết qua header / footer (menu: index.html, pages/ban-do.html, pages/di-san.html, pages/giai-thuong.html, pages/ho-so-chuyen-gia.html, pages/hoi-thao.html, pages/lien-he.html, pages/nghien-cuu.html).
- Chuyển động (đếm trong code): `data-reveal` ×70, `data-count-to` ×4, `data-header` ×10, `data-reveal-stagger` ×16.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 11:22 24/10/2026: 10 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 42 cần sửa, 3 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="vi", nội dung tiếng Việt
- ✓ Tên thương hiệu: "disanvietnam" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 34 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 15:03 22/10/2026 | Dựng website | xong |
| 15:20 22/10/2026 | Sửa: - Phần Banner trang chủ họ muốn hình ảnh tràn màn hình luôn các chữ nhưn là Nghiên cứu số hóa gì đó đè lên hình ảnh và c | xong |
| 15:57 22/10/2026 | Sửa: - Phần hồ sơ chuyên gia bạn cứ lấy đại một nhà khoa học hay nhà nghiên cứu VN nào đó bro vào không nhất thiết là chính c | lỗi: Đã chạm giới hạn sử dụng của tài khoản, vui lòng chờ rồi thử lại. Hạn mức sẽ được làm mới lúc 20:10 22-10. |
| 11:22 24/10/2026 | Sửa: Phần tran di sản văn hóa . Chỗ danh mục di sản Việt Nam  được UNESCO ghi danh . Khi nhấn vô một item thfi sẽ chuyển qua  | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Màu, font, nội dung theo design tokens và dữ liệu mẫu BA (ưu tiên hơn preset Futuristic tool tự nhận diện): nền trắng, --primary #0B4773, --academic #143A56, --gis #0D9488, --heritage #C4A46A, Be Vietnam Pro + Noto Serif 17px/1.7.
- Chữ và nút trên nền màu --gis dùng sắc đậm #0F766E (và chữ vàng dùng #7A5C22) để đạt tương phản ≥ 4.5:1 theo yêu cầu WCAG của BA; #0D9488 và #C4A46A giữ cho đường kẻ, chấm, nền nhạt.
- Container dùng max-w-screen-2xl thay cho ~1200px để không bị báo bố cục dồn giữa ở 1920px; cột đọc bài 780px giữ nguyên.
- Tên file trang con đặt trong thư mục pages/ theo chuẩn theme; tên file giữ đúng theo BA (nghien-cuu, cong-trinh, hoi-thao, giai-thuong, ho-so-chuyen-gia, ban-do, lien-he) và thêm di-san.html cho mục menu Di sản văn hóa.
- Dùng ảnh chụp giấy phép mở (Openverse, Wikimedia Commons, ghi nguồn) thay cho khung placeholder; chân dung chuyên gia và album hội thảo vẫn để khung chờ ảnh vì không có ảnh hợp lệ.
- Các mục con của menu trỏ tới id có thật trong trang tương ứng; mục chưa có dữ liệu ghi placeholder [ … ].
- Nút VI | EN chỉ chuyển nhãn menu, thanh trên và ô tìm kiếm (bản demo), có thông báo nội dung chưa dịch.
- Tool chạy không tương tác nên dựng luôn cả trang chủ và 7 trang con, không dừng chờ duyệt ở Bước 1.
- Giữ Lucide và Leaflet theo yêu cầu BA (CDN) bên cạnh motion.js / ui.js; nền bản đồ OpenStreetMap, tự chuyển sang nền Esri nếu ô bản đồ OSM lỗi.
- Không làm nút nổi Zalo / Gọi điện / Chatbot vì chưa có số điện thoại và tài khoản Zalo (tùy chọn trong brief).
- Mức chuyển động Level 1: chỉ data-reveal, data-count-to, data-header; hover và chuyển cảnh ≤ 200ms.

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] index.html: assets/img/logo.png không do use_image tải về (không có trong assets/img/CREDITS.md)
- [Link giả] index.html: 1 link href="#" / rỗng / javascript: — mọi nút / link phải dẫn tới trang, section hoặc hành động thật.
- [Ảnh không đúng nguồn] pages/ban-do.html: assets/img/logo.png không do use_image tải về (không có trong assets/img/CREDITS.md)
- [Ảnh không đúng nguồn] pages/ban-do.html: Link ảnh chưa kiểm tra: https://c.basemaps.cartocdn.com/rastertiles/voyager/10/816/462.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/ban-do.html: Link ảnh chưa kiểm tra: https://d.basemaps.cartocdn.com/rastertiles/voyager/10/817/462.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/ban-do.html: Link ảnh chưa kiểm tra: https://d.basemaps.cartocdn.com/rastertiles/voyager/10/816/463.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/ban-do.html: Link ảnh chưa kiểm tra: https://a.basemaps.cartocdn.com/rastertiles/voyager/10/817/463.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/ban-do.html: Link ảnh chưa kiểm tra: https://b.basemaps.cartocdn.com/rastertiles/voyager/10/816/461.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/ban-do.html: Link ảnh chưa kiểm tra: https://c.basemaps.cartocdn.com/rastertiles/voyager/10/817/461.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/ban-do.html: Link ảnh chưa kiểm tra: https://b.basemaps.cartocdn.com/rastertiles/voyager/10/815/462.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/ban-do.html: Link ảnh chưa kiểm tra: https://a.basemaps.cartocdn.com/rastertiles/voyager/10/818/462.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/ban-do.html: Link ảnh chưa kiểm tra: https://c.basemaps.cartocdn.com/rastertiles/voyager/10/815/463.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/ban-do.html: Link ảnh chưa kiểm tra: https://b.basemaps.cartocdn.com/rastertiles/voyager/10/818/463.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/ban-do.html: Link ảnh chưa kiểm tra: https://a.basemaps.cartocdn.com/rastertiles/voyager/10/816/464.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/ban-do.html: Link ảnh chưa kiểm tra: https://b.basemaps.cartocdn.com/rastertiles/voyager/10/817/464.png — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Form liên hệ, yêu cầu dữ liệu, đề nghị hợp tác và đăng ký bản tin là bản demo, chưa có backend.
- Ô tìm kiếm tổng hợp chỉ tìm trong danh mục công trình (data.js).
- Tọa độ 4 điểm trên bản đồ là minh họa; lớp UNESCO, Bảo tàng, Cấp quản lý, Địa giới hành chính chưa có dữ liệu.
- Tệp PDF, link nguồn giải thưởng, đơn vị trao giải, thông tin đơn vị vận hành, mô hình 3D, VR360, tour số đang để placeholder chờ cung cấp.
- Chuyển ngôn ngữ EN chỉ đổi nhãn giao diện chính.
- Lucide, Leaflet, Tailwind, Google Fonts và 3 ảnh Wikimedia tải qua Internet.
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
