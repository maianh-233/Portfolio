# Brief website — HÁN NGỮ ĐƯỜNG

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Web cho trung tâm tiếng trung
- **Tên thương hiệu / dự án:** **HÁN NGỮ ĐƯỜNG** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website đa trang cho HÁN NGỮ ĐƯỜNG · 汉语堂, trung tâm đào tạo tiếng Trung và tư vấn định hướng du học Trung Quốc. Website tập trung giới thiệu trung tâm, chương trình học, văn hóa Trung Hoa và dịch vụ tư vấn du học; không xây dựng chức năng bán khóa học hoặc thanh toán trực tuyến.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Nature / Organic / Atmospheric** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 2 — Atmospheric** (mặc định của preset). Được dùng: thêm `data-split`, `data-reveal="clip"`, `data-reveal-stagger`, `data-parallax` ≤ 0.2, marquee, kéo ngang; atmos.js: `data-float`, `data-gradient-shift`, `data-clouds` / `data-particles` ở **một** section trên mỗi trang.
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

> Nguyên văn, 5.337 ký tự, 103 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
Hero: Toàn màn hình với hình ảnh kiến trúc Trung Hoa, cổng đỏ hoặc mái cung điện trong làn sương. Logo HÁN NGỮ ĐƯỜNG, chữ Hán 汉语堂, tiêu đề “Mở cánh cửa ngôn ngữ — Khám phá một Trung Hoa rộng lớn”. Nút “Khám phá chương trình học” và “Tìm hiểu du học Trung Quốc”.

Giới thiệu trung tâm: Bố cục kiểu trang sách cổ, hình ảnh thư phòng, bút lông, giấy viết chữ Hán và nghiên cứu văn hóa Trung Hoa.

Chương trình đào tạo: Các thẻ khóa học có viền trang trí truyền thống, hình ảnh riêng cho từng cấp độ.

Cánh cửa du học Trung Quốc: Hình ảnh khuôn viên đại học, thư viện, kiến trúc học viện và thành phố Trung Quốc.

Khám phá văn hóa Trung Hoa: Các khung hình giới thiệu thư pháp, trà đạo, thư họa, lễ hội và kiến trúc.

Footer: Nền đỏ trầm hoặc đen mực, logo chữ Hán, họa tiết mây và thông tin liên hệ.

Trang 2 — Chương trình tiếng Trung | 中文课程

Hero: Hình ảnh thư pháp trên giấy Tuyên, nghiên mực, bút lông và sách Hán ngữ.

Giới thiệu phương pháp học: Bố cục kết hợp chữ Hán lớn, minh họa nét bút và hình ảnh lớp học.

Các chương trình: Tiếng Trung cho người mới bắt đầu, giao tiếp, luyện thi HSK và nâng cao. Mỗi chương trình có hình ảnh, mô tả, đối tượng phù hợp và mục tiêu học tập.

Trải nghiệm học tiếng Trung: Minh họa từ vựng, thanh điệu, chữ Hán và câu giao tiếp thông dụng theo cách trực quan.

Văn hóa qua ngôn ngữ: Giới thiệu thành ngữ, thư pháp, thơ cổ và những nét văn hóa giúp việc học thú vị hơn.

CTA: “Tìm chương trình phù hợp” dẫn đến trang liên hệ hoặc biểu mẫu tư vấn.

Trang 3 — Tư vấn du học Trung Quốc | 中国留学

Hero: Hình ảnh khuôn viên đại học Trung Quốc, cổng trường cổ điển hoặc sinh viên giữa không gian học thuật hiện đại. Kết hợp kiến trúc truyền thống và môi trường đại học đương đại.

Vì sao lựa chọn Trung Quốc: Trình bày các khía cạnh về học tập, ngôn ngữ, văn hóa và trải nghiệm quốc tế bằng bố cục hình ảnh biên tập.

Lộ trình tư vấn: Tìm hiểu nhu cầu → định hướng trường và ngành → chuẩn bị hồ sơ → tìm hiểu học bổng và điều kiện ứng tuyển → chuẩn bị trước khi lên đường.

Định hướng trường và ngành: Các nhóm ngành minh họa bằng hình ảnh thư viện, phòng nghiên cứu, công nghệ, kinh tế, ngôn ngữ và văn hóa.

Thông tin cần chuẩn bị: Hồ sơ học tập, năng lực tiếng Trung, giấy tờ cần thiết và các mốc thời gian tham khảo.

Câu hỏi thường gặp: Điều kiện du học, yêu cầu ngôn ngữ, học bổng, hồ sơ và quy trình tư vấn.

CTA: “Đăng ký tư vấn định hướng du học” dẫn đến biểu mẫu liên hệ.

Không tự tạo tên đối tác, cam kết đậu học bổng, tỷ lệ thành công hoặc thông tin tuyển sinh chưa được xác minh. Nội dung cụ thể phải có thể chỉnh sửa.

Trang 4 — Về chúng tôi & Liên hệ | 关于我们

Câu chuyện trung tâm: Giới thiệu sứ mệnh đào tạo tiếng Trung và hỗ trợ học viên tìm hiểu cơ hội học tập tại Trung Quốc.

Triết lý giáo dục: Ngôn ngữ là cầu nối giữa con người, văn hóa và tri thức.

Đội ngũ: Khu vực giới thiệu giáo viên và chuyên viên tư vấn với ảnh, vai trò và tiểu sử có thể thay thế.

Không gian học tập: Bộ sưu tập ảnh lớp học, sách Hán ngữ, góc thư pháp và các hoạt động văn hóa.

Liên hệ: Địa chỉ, điện thoại, email, mạng xã hội, bản đồ và biểu mẫu để lại thông tin tư vấn.

Footer: Trang trí bằng hoa văn hồi văn, con dấu đỏ và đường nét kiến trúc truyền thống.

4. UI/UX và cách thể hiện

Header có logo chữ Hán, tên tiếng Việt và menu 4 trang; có thể sử dụng thanh điều hướng nền đỏ sẫm hoặc nền giấy cổ.

Tiêu đề kết hợp typography tiếng Việt thanh lịch với chữ Hán trang trí. Đảm bảo chữ tiếng Việt dễ đọc, chữ Hán hiển thị đúng.

Sử dụng khung cửa tròn nguyệt môn, khung tranh cuộn, đường viền hoa văn và các mảng màu đỏ son làm điểm nhấn.

Hình ảnh phải thay đổi theo từng trang, tránh lặp lại một ảnh hero trên toàn website.

Kết hợp khoảng trắng rộng với họa tiết truyền thống có chọn lọc, không phủ kín mọi khu vực bằng hoa văn.

Không sử dụng giao diện dashboard, thẻ bo góc kiểu SaaS hoặc bố cục website doanh nghiệp phương Tây quá phổ biến.

5. Animation và tương tác

Hero: hiệu ứng xuất hiện nhẹ cho tiêu đề, hình ảnh và nút điều hướng.

Hình ảnh thủy mặc có thể chuyển động chậm theo chiều sâu; mây hoặc sương chỉ chuyển động rất nhẹ.

Họa tiết hoa mai, cánh hoa hoặc đèn lồng chỉ xuất hiện tại một số khu vực phù hợp.

Các section xuất hiện khi cuộn trang bằng fade-in và dịch chuyển nhẹ.

Menu có hiệu ứng chuyển màu, gạch chân hoặc đường nét trang trí truyền thống.

Thẻ chương trình học và hình ảnh có hiệu ứng hover tinh tế.

Không lạm dụng hiệu ứng 3D, parallax nhiều lớp, hạt bay hoặc animation phức tạp. Ưu tiên tốc độ tải và tính ổn định.

6. Yêu cầu kỹ thuật

Website đa trang thực sự, các trang liên kết và điều hướng hoạt động.

Responsive tốt trên desktop, tablet và điện thoại.

Các nút CTA, menu, biểu mẫu liên hệ và FAQ hoạt động đúng.

Hình ảnh rõ nét, đúng chủ đề Trung Hoa; có thể sử dụng ảnh mẫu phù hợp nếu chưa có tư liệu thương hiệu.

Nội dung, hình ảnh, logo, thông tin liên hệ và màu sắc cần dễ thay thế.

Không triển khai giỏ hàng, mua khóa học, thanh toán trực tuyến hoặc chức năng thương mại điện tử.

Kết quả mong muốn: Một website trung tâm tiếng Trung mang đậm phong vị Trung Hoa, có bản sắc thị giác xuyên suốt từ trang chủ đến trang khóa học và tư vấn du học. Giao diện phải gợi cảm giác bước vào một không gian văn hóa Trung Hoa được tái hiện bằng ngôn ngữ thiết kế hiện đại, không phải một mẫu website giáo dục thông thường chỉ thêm vài họa tiết phương Đông.
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
