# Prompt đã dùng — Mộc Hương Bakery

> BA Tool sinh website bằng Claude Agent SDK với skill `srs-builder` (MODE `quick-prototype`, hướng dẫn trong `references/quick-guide.md`) và skill thiết kế `design-taste-frontend`.
> Lệnh gọi skill và toàn bộ brief AI đọc được chép nguyên văn bên dưới.

## 1. Lệnh gọi

```
/srs-builder MODE: quick-prototype
PROJECT_TYPE: website
PROJECT_DIR: <thư mục theme>
TARGET_DIR: <thư mục theme>/web
```

## 2. Brief AI đọc (`concept.md`)

~~~~markdown
# Brief website — Mộc Hương Bakery

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website tiệm bánh thủ công
- **Tên thương hiệu / dự án:** **Mộc Hương Bakery** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Giới thiệu tiệm bánh, thực đơn bánh và thông tin liên hệ / đặt bánh
- **Đối tượng khách truy cập:** Người trẻ và gia đình ở Hội An thích bánh tươi làm thủ công
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Pastel / Soft** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 2 — Atmospheric** (mặc định của preset). Được dùng: thêm `data-split`, `data-reveal="clip"`, `data-reveal-stagger`, `data-parallax` ≤ 0.2, marquee, kéo ngang; atmos.js: `data-float`, `data-gradient-shift`, `data-clouds` / `data-particles` ở **một** section trên mỗi trang.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Quicksand:wght@500;700`, body `Nunito Sans:wght@400;600`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Quicksand`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `Nunito Sans`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

| # | Section (id danh mục) | Gợi ý vị trí | Mô tả của BA (nguyên văn) |
|---|---|---|---|
| 1 | Hero / Giới thiệu chính (`hero`) | Đầu trang chủ (trang con có hero nhỏ riêng) | _(trống — AI tự xây dựng nội dung, bố cục, ảnh)_ |
| 2 | About / Câu chuyện thương hiệu (`story`) | Trang About riêng + đoạn giới thiệu ngắn trên trang chủ | _(trống — AI tự xây dựng nội dung, bố cục, ảnh)_ |
| 3 | Services / Dịch vụ (`services`) | Trang Services + trang chi tiết dịch vụ; tóm tắt trên trang chủ | Thực đơn: bánh mì, bánh ngọt, bánh kem đặt trước |
| 4 | Contact / Liên hệ (`contact`) | Trang Contact riêng | _(trống — AI tự xây dựng nội dung, bố cục, ảnh)_ |

- Đây là định hướng **ưu tiên**: phân bổ vào đúng trang (không dồn hết vào trang chủ); section nào cần trang riêng / trang chi tiết thì tạo route riêng.
- Section có mô tả của BA → làm đúng mô tả đó. Section không hợp mục đích website → điều chỉnh / bỏ và ghi lý do vào `adjustments`.
- Chỉ thêm section BA không chọn khi cần cho trang trọn vẹn (header, footer, CTA cuối trang…); không tạo nội dung trùng lặp giữa các trang.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 185 ký tự, 1 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
Website CHỈ 3 TRANG: Trang chủ (index.html), Menu (pages/menu.html), Liên hệ (pages/contact.html). Không tạo thêm trang chi tiết hay trang khác. Form đặt bánh chỉ là giao diện minh họa.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Spa / làm đẹp** (`recipe:spa-beauty`, chưa đánh giá): Hero-split ảnh không gian → features-alternate liệu trình → stats/quote → gallery-masonry → contact-split (đặt lịch = bản demo).
- **Nhà hàng / quán cà phê** (`recipe:restaurant-cafe`, chưa đánh giá): Hero-cinematic hoặc hero-offset → story-letter → menu dạng features-numbered / tabs → gallery-filmstrip → contact-split (giờ mở cửa, bản đồ, đặt bàn = bản demo).

**Bố cục gợi ý**
- **Liên hệ chia đôi** (`composition:contact-split`, chưa đánh giá): Trái: thông tin + bản đồ + giờ mở cửa; phải: `form[data-form]` (bản demo nếu chưa có backend). _Tránh:_ Không tuyên bố form đã gửi email thật.
- **Hero chia đôi chữ – ảnh** (`composition:hero-split`, chưa đánh giá): Chữ 5–6/12 cột trái, ảnh tràn mép phải ở lg+; mobile chữ → ảnh.
- **Lưới bento** (`composition:features-bento`, chưa đánh giá): Lưới 6–12 cột ô to nhỏ khác nhau, `data-reveal-stagger`.
- **Ảnh – chữ zigzag** (`composition:features-alternate`, chưa đánh giá): Tối đa 2 cặp ảnh – chữ rồi đổi kiểu. _Tránh:_ Lặp zigzag quá 2 cặp gây nhàm.

**Chuyển động gợi ý**
- **Lưới hiện lần lượt** (`motion:stagger-grid`, chưa đánh giá): `data-reveal-stagger="80"` trên khối cha của lưới thẻ. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Hạt sáng / mây** (`motion:atmos-particles`, chưa đánh giá): atmos.js: `data-particles="dust|fireflies|stars|petals"` một section (Level 2), `data-clouds="3"`. _Tránh:_ Chữ trên nền có hạt thiếu tương phản; Tôn trọng prefers-reduced-motion (thư viện đã xử lý).


## Preset

### Preset: Pastel / Soft (`pastel`)
Màu dịu, hình khối mềm, cảm giác thân thiện.

**Hợp với:** tiệm bánh / tráng miệng, tiệm hoa, mẹ và bé, làm đẹp / nail, cưới hỏi
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `cream` #FFF9F4 · `blush` #F7D6D0 · `peach` #FBE3C8 · `mint` #D5EFE3 · `lilac` #E3DDF6 · `cocoa` #4B3A36 · `rose` #C25E73
**Font** (Google Fonts): display `Quicksand:wght@500;700` · body `Nunito Sans:wght@400;600`

**Thành phần giao diện**
- Nút pill nền rose chữ trắng
- Thẻ trắng bo 24px, bóng mềm
**Chữ**
- Tiêu đề Quicksand 700 bo tròn; thân Nunito Sans màu cocoa — chữ luôn đậm màu, không pastel trên pastel.
**Bố cục**
- Khối bo lớn `rounded-[2rem]`, nền pastel xen kẽ; ảnh khung vòm / tròn; lưới thoáng.
**Ảnh**
- Ảnh thật sáng, tông kem / hồng; sản phẩm cận cảnh, ánh sáng tự nhiên.
**Khoảng trắng:** Rộng vừa, mềm mại.
**Chuyển động mặc định:** Level 2 — Atmospheric
- `data-float` nhẹ, `data-reveal="up"`, hover nâng thẻ; `data-particles="petals"` tối đa một section khi hợp chủ đề.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-split` → `features-bento` → `gallery-masonry` → `quote-full` → `features-alternate` → `contact-split` → `footer-big`
**Được phép (ghi đè layout-guide mục 3):** hình vòm / tròn; nền pastel xen kẽ
**Tránh:** đen đậm diện rộng; góc vuông sắc; chữ pastel trên nền pastel
~~~~
