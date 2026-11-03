# Brief website — ROOTS ORGANIC HAIR

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu
- **Tên thương hiệu / dự án:** **ROOTS ORGANIC HAIR** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu ROOTS ORGANIC HAIR, salon tóc theo đuổi vẻ đẹp tự nhiên, mái tóc khỏe mạnh và trải nghiệm chăm sóc tóc cá nhân hóa.

Tinh thần thiết kế:

Organic Modernism kết hợp Natural Editorial.

Tự nhiên, nhẹ nhàng, ấm áp và hiện đại.

Bố cục thoáng, khoảng trắng rộng, hình ảnh lớn và đường cong hữu cơ tiết chế.

Kết hợp typography serif thanh lịch với sans-serif dễ đọc.

Tập trung vào mái tóc, kỹ thuật chăm sóc và trải nghiệm tại salon.

Không sử dụng bố cục spa truyền thống, không biến website thành cửa hàng mỹ phẩm hoặc lạm dụng hình cây lá trang trí.
- **Đối tượng khách truy cập:** Khách có nhu cầu làm tóc sẽ xem
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
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `undefined` / `undefined`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Chưa kiểm tra — dùng `search_images` / `use_image` bình thường.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 9.347 ký tự, 421 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. COLOR PALETTE

Olive Green là màu nhận diện chính, kết hợp be cát và nâu đất để tạo cảm giác gần gũi với thiên nhiên.

Olive Green — #68734F: màu chủ đạo, CTA và các điểm nhấn.

Sage Green — #A8B09A: màu phụ cho section và chi tiết.

Sand Beige — #D8C5A9: màu nền phụ ấm áp.

Warm Ivory — #F8F5EF: nền chính.

Earth Brown — #795B46: màu nhấn và tiêu đề phụ.

Deep Forest — #303A2D: chữ chính và footer.

Soft Stone — #E7E3DA: đường kẻ và nền trung tính.

Quy tắc phối màu:

Warm Ivory chiếm phần lớn diện tích để tạo cảm giác thoáng.

Olive Green xuất hiện xuyên suốt website để duy trì nhận diện.

Sand Beige và Earth Brown tạo chiều sâu, tránh giao diện quá xanh.

Deep Forest dùng cho chữ và các khu vực cần độ tương phản cao.

Có thể sử dụng chuyển sắc rất nhẹ, nhưng ưu tiên màu đơn sắc và chất liệu hình ảnh tự nhiên.

Tránh xanh neon, màu quá bão hòa hoặc phối quá nhiều màu cạnh tranh nhau.

3. TYPOGRAPHY & IMAGES

Typography

Heading: Cormorant Garamond hoặc DM Serif Display.

Body: Manrope hoặc Inter.

Tiêu đề thanh lịch, có thể ngắt dòng theo bố cục editorial.

Nhãn section dùng chữ in hoa, cỡ nhỏ và khoảng cách chữ vừa phải.

Hỗ trợ đầy đủ dấu tiếng Việt và tự thích ứng khi chuyển sang tiếng Anh.

Hình ảnh

Mái tóc khỏe, bóng tự nhiên, tóc layer, tóc uốn mềm và kiểu tóc dễ ứng dụng.

Màu tóc nâu tự nhiên, chocolate brown, caramel, beige brown và balayage nhẹ.

Ảnh stylist đang cắt tóc, tư vấn hoặc chăm sóc tóc.

Không gian salon có ánh sáng tự nhiên, gỗ sáng, đá, vải linen và cây xanh vừa phải.

Ưu tiên ảnh có chiều sâu, màu sắc chân thực và ánh sáng dịu.

Không sử dụng ảnh massage, chăm sóc da hoặc mỹ phẩm làm hình ảnh chính.

Tránh lặp lại cùng một ảnh giữa nhiều section nếu có thể thay thế.

4. GLOBAL HEADER & FOOTER

Header dùng thống nhất trên cả 4 trang:

Logo ROOTS ORGANIC HAIR.

Menu Home, Services, Hair Journal, Our Studio.

Bộ chuyển ngôn ngữ VI / EN.

CTA Book a Visit / Đặt lịch.

Nền Warm Ivory, đường kẻ mảnh màu Soft Stone.

Có trạng thái active cho trang hiện tại và hiệu ứng hover nhẹ.

Header responsive, có menu thu gọn trên mobile.

Footer:

Nền Deep Forest, chữ Warm Ivory và điểm nhấn Olive Green.

Chia cột Brand, Navigation, Contact và Social.

Hiển thị địa chỉ, giờ hoạt động, điện thoại và email mẫu.

Có CTA Đặt lịch.

Giữ bố cục nhất quán trên mọi trang.

5. PAGE 01 — HOME

Hero: ROOTED IN NATURAL BEAUTY

Ảnh lớn người mẫu với mái tóc tự nhiên trong ánh sáng ngoài trời hoặc ánh sáng cửa sổ.

Bố cục bất đối xứng, kết hợp Warm Ivory và mảng Olive Green.

Headline: “Rooted in Natural Beauty.”

Bản tiếng Việt: “Nuôi dưỡng vẻ đẹp tự nhiên.”

Mô tả ngắn về nghệ thuật tạo kiểu và chăm sóc tóc theo nhu cầu cá nhân.

CTA Explore Services và Discover Our Studio.

Có thể thêm nhãn nhỏ “CARE / TEXTURE / NATURAL COLOR”.

Hạn chế họa tiết trang trí để hình ảnh tóc trở thành tâm điểm.

Our Philosophy

Bố cục chia đôi giữa ảnh tóc hoặc chất liệu thiên nhiên và nội dung.

Headline: “Healthy Hair, Thoughtfully Created.”

Giới thiệu ba giá trị:

Healthy Hair — Ưu tiên vẻ khỏe khoắn của mái tóc.

Thoughtful Care — Chăm sóc dựa trên nhu cầu riêng.

Natural Style — Tôn trọng kết cấu và vẻ đẹp tự nhiên.

Sử dụng khoảng trắng rộng, đường kẻ mảnh và typography serif.

Featured Services

Giới thiệu ba dịch vụ nổi bật:

Haircut: Kiểu tóc phù hợp với khuôn mặt, chất tóc và sinh hoạt hằng ngày.

Hair Treatment: Chăm sóc nhằm hỗ trợ độ mềm mượt và vẻ khỏe mạnh của tóc.

Natural Coloring: Màu nhuộm tự nhiên, có chiều sâu và dễ kết hợp với diện mạo.

Mỗi dịch vụ có ảnh riêng, mô tả ngắn, giá tham khảo và liên kết đến Services.

Không xếp tất cả dịch vụ thành những card giống nhau. Ưu tiên bố cục ảnh lớn xen kẽ nội dung.

Hair Journal Preview

Hiển thị ba bài viết mẫu về chăm sóc tóc, chọn kiểu tóc và duy trì màu nhuộm.

Mỗi bài có ảnh, danh mục, tiêu đề và đoạn giới thiệu.

Có thể sử dụng nội dung tĩnh, không cần hệ thống quản lý bài viết.

CTA Read the Journal dẫn đến Hair Journal.

The Studio

Gallery nhỏ gồm ảnh không gian, ghế làm tóc, gương và stylist đang làm việc.

Giới thiệu ngắn về không gian salon và triết lý chăm sóc.

CTA Discover Our Studio dẫn đến trang Our Studio.

Final CTA

Headline: “Let Your Hair Feel Like Itself.”

Bản tiếng Việt: “Để mái tóc trở về với vẻ đẹp tự nhiên.”

Nút Explore Services và Book a Visit.

6. PAGE 02 — SERVICES & PRICING

Services Hero

Ảnh tóc khỏe, ánh sáng tự nhiên và bố cục thoáng.

Headline: “Care for Your Hair.”

Bản tiếng Việt: “Chăm sóc mái tóc theo cách riêng.”

Đoạn giới thiệu về việc lựa chọn dịch vụ dựa trên kiểu tóc, chất tóc và nhu cầu cá nhân.

Service Categories

Chia dịch vụ thành năm nhóm:

01. HAIRCUT

Signature Haircut.

Layered Haircut.

Bob Haircut.

Fringe Styling.

02. HAIR COLORING

Natural Full Color.

Root Touch-up.

Soft Balayage.

Highlights.

03. HAIR TREATMENT

Deep Conditioning.

Repair Treatment.

Color Care Treatment.

04. SCALP CARE

Scalp Cleansing.

Scalp Care Ritual.

05. STYLING

Wash & Blowout.

Natural Waves.

Event Hairstyling.

Mỗi dịch vụ cần có tên, mô tả ngắn, thời lượng và giá tham khảo. Có thể dùng dữ liệu mẫu phù hợp với salon tại Việt Nam.

Bố cục trình bày theo danh sách biên tập kết hợp ảnh xen kẽ, đường kẻ mảnh và nhãn Olive Green. Không biến trang thành một bảng giá khô cứng hoặc giao diện thương mại điện tử.

Your Hair Routine

Giới thiệu quy trình chăm sóc tóc sau khi sử dụng dịch vụ:

Understand — Tìm hiểu tình trạng và nhu cầu tóc.

Care — Lựa chọn phương pháp chăm sóc phù hợp.

Maintain — Duy trì thói quen chăm sóc tại nhà.

Refresh — Điều chỉnh quy trình theo nhu cầu của tóc.

Đây là nội dung hướng dẫn tham khảo, không đưa ra cam kết phục hồi hoặc điều trị tuyệt đối.

Pricing Note

Hiển thị ghi chú song ngữ rằng giá và thời lượng chỉ mang tính tham khảo, có thể thay đổi tùy độ dài tóc, tình trạng tóc và độ phức tạp của dịch vụ.

Final CTA

Headline: “A Little More Care Goes a Long Way.”

CTA Explore Hair Journal.

Nút Đặt lịch chỉ mang tính minh họa.

7. PAGE 03 — HAIR JOURNAL

Trang này kết hợp gallery tóc và nội dung biên tập về chăm sóc tóc, tạo cảm giác như một tạp chí làm đẹp tự nhiên.

Journal Hero

Ảnh tóc trong ánh sáng tự nhiên hoặc hình ảnh ngoài trời.

Headline: “The Natural Hair Edit.”

Bản tiếng Việt: “Góc nhìn về vẻ đẹp tự nhiên.”

Mô tả ngắn về kiểu tóc, màu nhuộm và thói quen chăm sóc.

Hair Gallery & Filters

Tạo bộ lọc:

All.

Haircut.

Color.

Treatment.

Gallery có tối thiểu 9–12 ảnh, sử dụng CSS Grid hoặc bố cục masonry bất đối xứng.

Nội dung hình ảnh gồm:

Natural Layers.

Soft Waves.

Chocolate Brown.

Caramel Balayage.

Beige Brown.

Healthy Hair Texture.

Natural Bob.

Soft Curtain Bangs.

Glossy Long Hair.

Mỗi ảnh có tên phong cách, danh mục và mô tả ngắn.

Bộ lọc phải hoạt động bằng JavaScript, không tải lại trang. Nhấn ảnh mở lightbox với ảnh lớn, tên, mô tả, nút đóng và điều hướng ảnh trước/sau.

Hair Journal Articles

Hiển thị ba bài viết mẫu:

How to Keep Your Hair Healthy — Những thói quen chăm sóc tóc cơ bản.

Finding the Right Haircut — Cách lựa chọn kiểu tóc phù hợp với chất tóc và sinh hoạt.

Caring for Color-Treated Hair — Những lưu ý khi duy trì mái tóc nhuộm.

Mỗi bài có ảnh, tiêu đề, đoạn giới thiệu và liên kết đọc thêm. Có thể mở nội dung mẫu bằng trang tĩnh hoặc khu vực mở rộng đơn giản; không cần backend.

Final CTA

Headline: “Find Your Natural Hair Rhythm.”

CTA Explore Services.

8. PAGE 04 — OUR STUDIO

Studio Hero

Ảnh không gian salon có ánh sáng tự nhiên, vật liệu gỗ và cây xanh.

Headline: “A Space to Feel Naturally You.”

Bản tiếng Việt: “Không gian để bạn tự nhiên là chính mình.”

Mô tả ngắn về triết lý làm đẹp nhẹ nhàng và chăm sóc tóc cá nhân hóa.

Our Story

Giới thiệu ROOTS ORGANIC HAIR như một không gian dành cho những người yêu thích vẻ đẹp tự nhiên và sự chăm sóc có chủ đích.

Không tự tạo lịch sử thành lập, thành tích, giải thưởng hoặc chứng nhận chưa được xác minh.

Our Philosophy

Trình bày ba giá trị:

Healthy Hair: Chú trọng vẻ khỏe mạnh và đặc điểm tự nhiên của mái tóc.

Thoughtful Care: Lựa chọn dịch vụ dựa trên nhu cầu của từng khách hàng.

Natural Style: Tôn trọng kết cấu tóc và phong cách cá nhân.

Sử dụng typography serif, ảnh minh họa và đường kẻ mảnh.

Meet the Stylists

Giới thiệu ba stylist bằng dữ liệu mẫu. Mỗi hồ sơ gồm:

Ảnh chân dung.

Tên và vai trò.

Chuyên môn.

Phong cách tạo kiểu.

Mô tả ngắn.

Trình bày theo bố cục editorial, không sử dụng avatar hoạt hình.

Inside the Studio

Gallery 4–6 ảnh không gian salon.

Tập trung vào gương, ghế làm tóc, khu vực gội đầu, gỗ và ánh sáng tự nhiên.

Bố cục ảnh bất đối xứng nhưng nhẹ nhàng.

Không biến nội dung thành giới thiệu spa hoặc mỹ phẩm.

Contact & Visit

Hiển thị:

Địa chỉ mẫu.

Giờ hoạt động.

Số điện thoại mẫu.

Email mẫu.

Liên kết mạng xã hội dạng minh họa.

Ghi rõ đây là dữ liệu mẫu, không phải thông tin liên hệ đã xác minh. Không tạo form gửi dữ liệu.

9. BILINGUAL — VIETNAMESE & ENGLISH

Toàn bộ 4 trang phải hỗ trợ tiếng Việt và tiếng Anh, bao gồm:

Menu, tiêu đề, mô tả và CTA.

Dịch vụ, giá, thời lượng và ghi chú.

Bộ lọc, lightbox và nội dung Hair Journal.

Thông tin stylist và footer.

Yêu cầu:

Chuyển ngôn ngữ ngay trên trang hiện tại.

Duy trì ngôn ngữ khi chuyển giữa các trang.

Không tự động quay về Home khi đổi ngôn ngữ.

Bố cục thích ứng với độ dài nội dung của mỗi ngôn ngữ.

Không để thiếu bản dịch hoặc trộn ngôn ngữ ngoài chủ đích.
~~~

## Preset

### Preset: Nature / Organic / Atmospheric (`nature`)
Rêu, gỗ, sương sớm — chất liệu tự nhiên, nhịp chậm.

**Hợp với:** nông sản / hữu cơ, trà / thảo mộc, homestay / retreat, spa thiên nhiên, du lịch sinh thái
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `moss` #3F5A3C · `fern` #6F8B5E · `mist` #F4F1EA · `sand` #E9E1D1 · `bark` #5A4636 · `sky` #BFD3D6 · `ochre` #C98A3D · `ink` #1F271D
**Font** (Google Fonts): display `Fraunces:opsz,wght@9..144,400;9..144,600` · body `Manrope:wght@400;500;700`

**Thành phần giao diện**
- Nút bo tròn mềm nền moss, chữ mist
- Ảnh bo lớn / vòm; thẻ nền sand không viền, bóng rất nhẹ
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
