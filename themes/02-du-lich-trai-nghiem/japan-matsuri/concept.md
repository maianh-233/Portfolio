# Brief website — JAPAN MATSURI

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Web Quảng cáo du lịch khám phá các lễ hội Nhật Bản
- **Tên thương hiệu / dự án:** **JAPAN MATSURI** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Xây dựng website giới thiệu du lịch Nhật Bản với chủ đề khám phá và trực tiếp trải nghiệm các lễ hội truyền thống Nhật Bản (Matsuri). Website lấy cảm hứng từ cách Travel Japan kể chuyện về văn hóa, thiên nhiên, vùng miền và trải nghiệm địa phương, kết hợp phong cách thiết kế du lịch hiện đại, giàu hình ảnh.

Tên website: JAPAN MATSURI

Thông điệp: “Chạm vào văn hóa Nhật Bản qua từng mùa lễ hội.”

Ngôn ngữ: 100% tiếng Việt.

Mục tiêu: Giới thiệu lễ hội, địa điểm tổ chức, nét văn hóa đặc trưng và gợi ý trải nghiệm cho du khách.

Phạm vi: Chỉ xây dựng 3 trang chính, không tạo thêm trang ngoài yêu cầu.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Nature / Organic / Atmospheric** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** — BA chọn. Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Fraunces:opsz,wght@9..144,400;9..144,600`, body `Manrope:wght@400;500;700`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Fraunces`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Manrope`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 4.571 ký tự, 123 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. Phong cách thiết kế

Phong cách du lịch Nhật Bản hiện đại, kết hợp văn hóa truyền thống và tạp chí du lịch cao cấp.

Màu sắc chủ đạo: đỏ son Nhật Bản, trắng ngà, đen mực và màu be giấy washi.

Sử dụng hình ảnh chất lượng cao về đèn lồng, hoa anh đào, đường phố Kyoto, đoàn rước lễ hội, pháo hoa và trang phục truyền thống.

Bố cục thoáng, typography rõ ràng, tiêu đề lớn và hình ảnh nổi bật.

Animation vừa phải: hiệu ứng xuất hiện khi cuộn trang, chuyển ảnh nhẹ, hover trên thẻ và chuyển cảnh mượt.

Responsive trên desktop, tablet và mobile.

3. Cấu trúc website gồm 3 trang

Trang 1: Trang chủ /

Mục tiêu: Tạo ấn tượng ngay từ đầu và truyền cảm hứng khám phá lễ hội Nhật Bản.

Các section:

Hero: Hình ảnh lễ hội Nhật Bản ban đêm với đèn lồng hoặc pháo hoa, tiêu đề “Nhật Bản – Nơi mỗi mùa đều có một lễ hội”, đoạn giới thiệu ngắn và nút “Khám phá lễ hội”.

Lễ hội nổi bật: Hiển thị các thẻ lễ hội như Gion Matsuri, Aomori Nebuta, Awa Odori và Sapporo Snow Festival.

Khám phá theo mùa: Bốn nhóm Xuân, Hạ, Thu, Đông, mỗi nhóm có hình ảnh, mô tả và liên kết đến danh sách lễ hội tương ứng.

Trải nghiệm văn hóa: Giới thiệu hoạt động như mặc yukata, thưởng thức món ăn đường phố, xem diễu hành, tham gia điệu múa truyền thống và ngắm pháo hoa.

Khám phá vùng miền: Gợi ý những khu vực tiêu biểu như Kyoto, Tokyo, Aomori, Tokushima và Hokkaido.

Footer: Logo, điều hướng và thông tin giới thiệu website.

Trang 2: Khám phá lễ hội /le-hoi

Mục tiêu: Giúp người dùng tìm kiếm và lựa chọn lễ hội phù hợp với sở thích, mùa du lịch và địa điểm.

Các thành phần:

Tiêu đề: “Tìm lễ hội dành cho chuyến đi của bạn”.

Thanh tìm kiếm theo tên lễ hội hoặc địa điểm.

Bộ lọc theo mùa: Xuân, Hạ, Thu, Đông.

Bộ lọc theo loại trải nghiệm: lễ hội truyền thống, diễu hành, lễ hội ánh sáng, pháo hoa, lễ hội tuyết và lễ hội hoa.

Danh sách lễ hội hiển thị bằng các thẻ hình ảnh.

Mỗi thẻ gồm tên lễ hội, địa điểm, thời gian thường tổ chức, mô tả ngắn và nút “Xem chi tiết”.

Có trạng thái khi không tìm thấy kết quả.

Các lễ hội mẫu có thể sử dụng: Gion Matsuri ở Kyoto, Aomori Nebuta ở Aomori, Awa Odori ở Tokushima, Sapporo Snow Festival ở Hokkaido và Hirosaki Cherry Blossom Festival ở Aomori.

Trang 3: Chi tiết lễ hội /le-hoi/:slug

Mục tiêu: Giới thiệu sâu về một lễ hội và giúp người dùng hình dung trải nghiệm thực tế.

Sử dụng một mẫu trang chi tiết có thể tái sử dụng cho mọi lễ hội.

Các section:

Ảnh bìa lớn: Tên lễ hội, địa điểm và thời gian tổ chức thường lệ.

Câu chuyện lễ hội: Nguồn gốc, ý nghĩa văn hóa và giá trị truyền thống.

Điểm nổi bật: Các hoạt động, nghi thức, màn trình diễn hoặc món ăn đặc trưng.

Trải nghiệm dành cho du khách: Những hoạt động người tham dự có thể quan sát hoặc tham gia nếu được phép.

Thông tin chuyến đi: Địa điểm, cách di chuyển khái quát, thời gian phù hợp và lưu ý khi tham dự.

Lễ hội liên quan: Gợi ý các lễ hội khác có cùng mùa hoặc khu vực.

Nút quay lại danh sách lễ hội và điều hướng về trang chủ.

Thông tin ngày tổ chức cụ thể phải được kiểm tra theo từng năm. Nếu chưa xác minh được lịch chính thức, hãy ghi rõ “thời gian thường tổ chức” thay vì khẳng định ngày diễn ra.

4. Điều hướng và chức năng

Menu chính gồm:

Trang chủ

Khám phá lễ hội

Giới thiệu

Yêu cầu chức năng:

Điều hướng giữa đủ 3 trang.

Nút trên trang chủ dẫn đến trang danh sách lễ hội.

Nhấn thẻ lễ hội để mở đúng trang chi tiết tương ứng.

Tìm kiếm và bộ lọc trên trang /le-hoi phải hoạt động với dữ liệu mẫu.

Có nút quay lại danh sách và các liên kết đến lễ hội liên quan.

Sử dụng dữ liệu mẫu có cấu trúc rõ ràng để dễ bổ sung nội dung sau này.

Chưa cần backend, đăng nhập, thanh toán hoặc hệ thống đặt tour.

5. Yêu cầu nội dung và hình ảnh

Viết toàn bộ nội dung giao diện bằng tiếng Việt tự nhiên, dễ đọc.

Ưu tiên kể chuyện về văn hóa, con người và trải nghiệm địa phương, không chỉ liệt kê điểm đến.

Không bịa lịch sử, nguồn gốc, ngày tổ chức hoặc thông tin di chuyển.

Không sử dụng hình ảnh có bản quyền khi chưa được phép; ưu tiên ảnh được cấp phép sử dụng hoặc hình ảnh có nguồn rõ ràng.

Nội dung mẫu cần đủ chân thực để trình bày giao diện, đồng thời dễ thay thế bằng dữ liệu đã xác minh.

6. Tiêu chí hoàn thành

Tạo website hoàn chỉnh gồm đúng 3 trang chính, giao diện thống nhất, có liên kết điều hướng và chức năng tìm kiếm, lọc lễ hội hoạt động được. Ưu tiên chất lượng giao diện, khả năng sử dụng và cấu trúc code rõ ràng thay vì tạo quá nhiều hiệu ứng phức tạp.

Không xây dựng website thương mại điện tử. Không thêm trang đặt vé hoặc thanh toán. Tập trung vào cảm hứng du lịch, khám phá văn hóa và trải nghiệm lễ hội Nhật Bản.
~~~

## Preset

### Preset: Nature / Organic / Atmospheric (`nature`)
Rêu, gỗ, sương sớm — chất liệu tự nhiên, nhịp chậm.

**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `moss` #3F5A3C · `fern` #6F8B5E · `mist` #F4F1EA · `sand` #E9E1D1 · `bark` #5A4636 · `sky` #BFD3D6 · `ochre` #C98A3D · `ink` #1F271D
**Font** (Google Fonts): display `Fraunces:opsz,wght@9..144,400;9..144,600` · body `Manrope:wght@400;500;700`

**Chữ**
- Tiêu đề Fraunces (serif mềm), một từ in nghiêng màu fern để nhấn ý.
- Thân bài Manrope 17px, màu ink/75; số liệu (độ cao, nhiệt độ, mùa) đặt thành nhãn nhỏ.
**Bố cục**
- Bố cục hữu cơ: ảnh bo góc lớn (rounded-[2rem]) hoặc vòm (rounded-t-full) xen ảnh vuông sắc cạnh.
- Lưới lệch nhịp 12 cột: ảnh chiếm 7 cột, chữ 4 cột lệch xuống; dải ảnh ngang kéo được.
- Nền mist / sand xen một dải moss đậm cho phần số liệu hoặc trích dẫn.
**Ảnh**
- Ảnh thật: rừng sương, lá cận cảnh, bàn tay làm việc, chất liệu gỗ / đá / vải lanh.
- Tông ấm hơi phai: `saturate-[.9] sepia-[.08]`.
**Khoảng trắng:** Rộng rãi, `py-24 lg:py-32`, khối chữ ngắn.
**Chuyển động mặc định:** Level 2 — Atmospheric
- `data-reveal="clip"` cho ảnh lớn, `data-reveal-stagger` cho lưới, `data-parallax` 0.1–0.15 cho ảnh hero.
- Một section có `data-particles="dust"` (nắng xuyên rừng) hoặc `data-clouds` mỏng (sương) — không hơn.
- `data-float` rất nhẹ (6px) cho 1–2 chi tiết trang trí (lá, nhãn).
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-split` → `story-editorial` → `features-numbered` → `gallery-lookbook` → `stats-band` → `quote-full` → `contact-split` → `footer-big`
**Được phép (ghi đè layout-guide mục 3):** sương mỏng bằng gradient; hình vòm / bo lớn
**Tránh:** xanh lá tươi chói; icon lá cây clip-art; gradient đa màu
