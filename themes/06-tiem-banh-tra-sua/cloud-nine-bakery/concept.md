# Brief website — CLOUD NINE BAKERY

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website tiệm bánh và trà sữa
- **Tên thương hiệu / dự án:** **CLOUD NINE BAKERY** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu tiệm bánh CLOUD NINE BAKERY, mang cảm giác mộng mơ, siêu thực và nhẹ như đang bước vào một thế giới trên mây.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **English — Tiếng Anh** → `<html lang="en">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Anh: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Dreamy / Anime / Cinematic** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 3 — Advanced** (mặc định của preset). Được dùng: thêm `data-sky`, `data-layers` + `data-depth`, cảnh ghim `data-scene` + `data-step`, `data-scrub`; `data-particles` tối đa 3 section không liền nhau; con trỏ / tilt / magnetic chỉ khi preset cho phép. Trang con nhẹ hơn trang chủ.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Shippori Mincho:wght@500;700;800`, body `Zen Kaku Gothic New:wght@400;500;700`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Shippori Mincho`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Tool kiểm tra font preset: `Zen Kaku Gothic New`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Font nào thiếu ký tự tiếng Anh → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Inter` / `Source Serif 4`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 993 ký tự, 9 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
Art direction: Xanh trời nhạt #C9E4F5, lavender #DCD2F4, trắng mây #FFFDFB, hồng phấn #F7DDE6. Typography thanh thoát, kết hợp serif mềm mại. Hình ảnh bánh kem, meringue, mousse và bánh trái cây được bố trí như đang lơ lửng giữa mây.

Trang chủ: Hero giàu tính thị giác với chiếc bánh nổi trên nền trời, headline “A Little Dream in Every Bite”. Các khối mây, lớp nền mềm và ảnh sản phẩm tạo cảm giác phi thực nhưng vẫn tinh tế.

Sản phẩm & Menu: Bố cục dạng gallery với các thẻ bánh không đồng đều, hình ảnh nổi bật, tên sản phẩm và mô tả ngắn. Có nhóm bánh kem, mousse, pastry và đồ uống dùng kèm.

Về chúng tôi: Giới thiệu cảm hứng sáng tạo, câu chuyện đằng sau những chiếc bánh và không gian tiệm.

Song ngữ Việt – Anh, tối đa 3 trang. Sử dụng animation nhẹ như ảnh trôi chậm, fade-in và mây chuyển động tinh tế. Tránh hiệu ứng 3D nặng hoặc quá nhiều chuyển động. Không có giỏ hàng, thanh toán, form đặt bánh hay chức năng mua hàng. Responsive đầy đủ. Có nút chuyển đổi tiếng anh tiếng việt
~~~

## Preset

### Preset: Dreamy / Anime / Cinematic (`dreamy`)
Bầu trời, ánh chiều, khoảnh khắc lặng — như một khung phim hoạt hình.

**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `sky-dawn` #F6D8C8 · `sky-day` #A9C6E8 · `dusk` #2B3566 · `night` #0E1430 · `ink` #1E2340 · `paper` #FBF7F2 · `glow` #FFC98B · `sakura` #E8A6B8
**Font** (Google Fonts): display `Shippori Mincho:wght@500;700;800` · body `Zen Kaku Gothic New:wght@400;500;700` · nhãn `Zen Kaku Gothic New`

**Chữ**
- Tiêu đề Shippori Mincho (serif kiểu poster phim Nhật), cỡ rất lớn ở hero (clamp 3.5rem → 8rem), dòng chặt (leading-[0.95]), chữ thường xen chữ hoa.
- Nhãn nhỏ: chữ hoa, tracking-[0.3em], cỡ 11–12px — như phụ đề / số cảnh ("SCENE 02 — THE FIELD").
- Thân bài 17–18px, leading-relaxed, màu ink/80; câu ngắn, giàu hình ảnh, giọng tự sự.
**Bố cục**
- Hero toàn màn hình `min-h-[100dvh]`, tiêu đề đặt góc dưới-trái hoặc căn giữa trên bầu trời — được phép căn giữa.
- Mỗi section là một "cảnh": nền chuyển màu theo giờ trong ngày (sáng → chiều → đêm) khi cuộn xuống — dùng `data-sky` trên `<body>` và để section trong suốt.
- Xen kẽ cảnh rộng tràn viền với khối chữ hẹp (max-w-prose) đặt lệch trái / phải — nhiều khoảng trống bầu trời.
- Ít nhất một cảnh ghim theo cuộn (`story-pinned`) kể chuyện bằng 3 câu ngắn đổi lần lượt.
**Ảnh**
- Ảnh chụp thật: cánh đồng / ngọn đồi / ga tàu vắng / mặt hồ / đường quê / bầu trời mây lớn — một chủ thể nhỏ cô độc giữa khung rộng.
- Từ khóa gợi ý: "lone tree field clouds", "empty train station countryside", "summer clouds blue sky", "mountain lake dusk", "sunset grass field", "starry night sky".
- Xử lý ảnh bằng CSS cho tông phim hoạt hình: `saturate-[1.15] contrast-[1.05]` + lớp phủ gradient màu trời (mix-blend-soft-light), đáy ảnh hòa vào nền bằng gradient.
**Khoảng trắng:** Rất nhiều: section `py-28 lg:py-40`, chữ chiếm ≤ 40% khung, để bầu trời "thở".
**Chuyển động mặc định:** Level 3 — Advanced
- Hero: `data-clouds` (2–3 lớp) + `data-particles="dust"` hoặc `"fireflies"` (cảnh chiều / đêm) + tiêu đề `data-split="words"` chậm.
- Cảnh đêm: `data-particles="stars"`; cảnh ghim: `data-scene` + `data-step`.
- Ảnh lớn: `data-reveal="clip"`; lớp ảnh trong hero: `data-layers` với 2–3 `data-depth`.
- Nhịp chậm, êm; không tilt, không magnetic, không con trỏ tùy biến, không ripple.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-scene` → `story-letter` → `story-pinned` → `gallery-filmstrip` → `quote-full` → `cta-sky` → `footer-minimal`
**Được phép (ghi đè layout-guide mục 3):** gradient bầu trời (cam đào → xanh trời → tím đêm); quầng sáng mềm / hạt sáng; hero căn giữa; mây vẽ bằng gradient (trang trí trừu tượng, không giả ảnh chụp)
**Tránh:** gradient tím–xanh neon; thẻ bo góc có bóng đổ kiểu SaaS; icon dày đặc; phóng to / thu nhỏ ảnh tĩnh để giả nhân vật chuyển động
