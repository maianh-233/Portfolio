# Prompt đã dùng — NOIR PATISSERIE

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
# Brief website — NOIR PATISSERIE

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website giới thiệu thương hiệu trà sữa và bánh ngọt
- **Tên thương hiệu / dự án:** **NOIR PATISSERIE** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Tạo website giới thiệu NOIR PATISSERIE, thương hiệu bánh ngọt cao cấp lấy cảm hứng từ nghệ thuật làm bánh Pháp. Cảm giác cần đạt được: tinh tế, đắt giá, trưởng thành và có tính biên tập. Không sử dụng phong cách dễ thương hoặc các thẻ bo tròn kiểu ứng dụng.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **English — Tiếng Anh** → `<html lang="en">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Anh: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Minimal / Premium / Editorial** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 1 — Basic** (mặc định của preset). Được dùng: chỉ hiện dần khi cuộn (`data-reveal="fade"|"up"`), đếm số, header thu gọn, hover; KHÔNG nạp `atmos.js`, không parallax / mây / hạt / cảnh ghim.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Instrument Serif:ital@0;1`, body `Geist:wght@300;400;500;600`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Instrument Serif`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Tool kiểm tra font preset: `Geist`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Font nào thiếu ký tự tiếng Anh → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Inter` / `Source Serif 4`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 1.944 ký tự, 61 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. Art direction

Nền chính #171615; nền phụ #24211E.

Trắng ngà #F2EEE6; vàng champagne #C4A574; chữ phụ #B7AEA2.

Heading dùng serif thanh lịch; nội dung dùng sans-serif trung tính.

Lưới 12 cột trên desktop, khoảng trắng rộng, đường kẻ 1px và các số thứ tự nhỏ.

Ảnh bánh chocolate, entremet, macaron, tart trái cây chụp cận cảnh, ánh sáng tương phản mạnh.

Tránh gradient neon, icon hoạt hình, bóng đổ dày và quá nhiều khung viền.

3. Trang chủ

Header tối giản, logo chữ NOIR PATISSERIE, điều hướng và VI–EN.

Hero gần toàn màn hình: ảnh bánh signature chiếm khoảng 60–65% chiều ngang; bên còn lại là dòng chữ “The Art of Fine Pâtisserie”, mô tả ngắn và CTA “Khám phá bộ sưu tập”.

Dải chữ nhỏ giới thiệu tinh thần thủ công và nghệ thuật hương vị.

Section “Signature Creations”: 3 sản phẩm, ảnh lớn, tên món và mô tả súc tích.

Section editorial chia hai nửa: ảnh quy trình chế tác và nội dung về sự tỉ mỉ.

Section ảnh không gian tiệm theo dạng gallery ngang.

Footer tối, ít thành phần, trình bày như trang cuối tạp chí.

4. Trang Sản phẩm & Menu

Mở đầu bằng tiêu đề lớn “The Collection”.

Phân loại Signature Cakes, Chocolate & Entremets, Macarons, French Pastries.

Dùng bố cục xen kẽ: ảnh ngang lớn đi cùng mô tả, sau đó là lưới ảnh bất đối xứng.

Mỗi món chỉ có tên, mô tả nguyên liệu/hương vị và ảnh.

Không dùng giá, nút mua hoặc giao diện giống sàn thương mại điện tử.

5. Trang Về chúng tôi

Hero với ảnh nghệ nhân hoặc bàn chế tác bánh.

Bài giới thiệu thương hiệu theo dạng tạp chí.

Ba nội dung: tuyển chọn nguyên liệu, kỹ thuật làm bánh, cảm hứng sáng tạo.

Một dải ảnh cận cảnh kết cấu bánh và không gian.

Footer nhất quán.

6. Chuyển động

Chuyển cảnh mượt, ảnh xuất hiện bằng fade nhẹ, zoom ảnh cực chậm khi hover. Không dùng parallax nhiều lớp hoặc hiệu ứng gây phân tâm.

7. Ràng buộc

Tuân thủ QUY CHUẨN CHUNG; tối đa 3 trang; Việt–Anh hoàn chỉnh; không có giỏ hàng, checkout, form đặt bánh hoặc chức năng giao dịch.
~~~

## Preset

### Preset: Minimal / Premium / Editorial (`editorial`)
Như tạp chí in: chữ lớn, lưới chặt, rất ít màu.

**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `paper` #F5F3EF · `ink` #111111 · `stone` #D9D4CB · `muted` #6B6760 · `bronze` #8C6A43
**Font** (Google Fonts): display `Instrument Serif:ital@0;1` · body `Geist:wght@300;400;500;600`

**Chữ**
- Tiêu đề Instrument Serif cực lớn (đến 10rem ở 2xl), một phần in nghiêng; tracking-tight.
- Thân Geist 16px; nhãn chữ hoa 11px tracking-[0.2em]; số trang / số mục kiểu tạp chí (No. 01).
**Bố cục**
- Lưới 12 cột với đường kẻ mảnh (border-ink/15) chia khối; căn trái tuyệt đối.
- Hero chữ là chính (`hero-type`), ảnh nhỏ đặt lệch; ảnh lớn xuất hiện ở section sau như trang đôi tạp chí.
- Không thẻ có bóng đổ; phân tách bằng đường kẻ và khoảng trắng.
**Ảnh**
- Ảnh studio / kiến trúc, nền trơn, nhiều khoảng trống; có thể đen trắng (`grayscale`) với 1 ảnh màu làm điểm nhấn.
**Khoảng trắng:** Rất rộng nhưng có kỷ luật: lề cố định, khối căn theo lưới.
**Chuyển động mặc định:** Level 1 — Basic
- Chỉ `data-reveal="fade"`/`"up"`, `data-reveal="clip"` cho 1–2 ảnh lớn, `data-split="words"` cho 1 tiêu đề.
- Hover: gạch chân chạy, ảnh phóng chậm 1.04. Không particles / clouds / tilt / cursor.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-type` → `story-editorial` → `gallery-lookbook` → `features-numbered` → `quote-full` → `cta-type` → `footer-big`
**Tránh:** bo góc lớn; bóng đổ; nhiều màu; icon trang trí
~~~~

## 3. Các lượt sửa (MODE `quick-revise`, mỗi lượt là một prompt góp ý)

### Lượt 1 — 11:31:01 22/10/2026

Bạn thiếu mode tiếng việt nữa chuyển qua tiếng anh và tiếng việt . Hãy chọn font chữ không lỗi tiếng việt nhưng vẫn phù hợp phong cách trang
