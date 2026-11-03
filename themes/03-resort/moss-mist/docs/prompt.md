# Prompt đã dùng — MOSS & MIST

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
# Brief website — MOSS & MIST

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Tên thương hiệu / dự án:** **MOSS & MIST** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế và xây dựng website giới thiệu thương hiệu MOSS & MIST, một khu nghỉ dưỡng sinh thái cao cấp nằm giữa rừng thông, thung lũng xanh và những triền núi phủ sương.

Website hướng đến khách hàng yêu thích thiên nhiên, kiến trúc tối giản, không gian riêng tư và phong cách nghỉ dưỡng chậm rãi.

MOSS & MIST không được thể hiện như một khách sạn thành thị hoặc resort biển. Đây phải là một thương hiệu nghỉ dưỡng có bản sắc riêng, nơi kiến trúc hòa vào cảnh quan và trải nghiệm được xây dựng quanh sự tĩnh lặng.

Thông điệp thương hiệu:

“Find Stillness in Nature.”

“Trở về với sự tĩnh tại giữa thiên nhiên.”

Định vị thương hiệu:

Premium Forest Retreat.

Nature-inspired Architecture.

Slow Living & Mindful Experiences.

Private Cabins, Villas & Lodges.

Sustainable Hospitality.

Mục tiêu website

Giới thiệu hình ảnh và câu chuyện thương hiệu.

Thể hiện triết lý kiến trúc và phong cách nghỉ dưỡng.

Giới thiệu chi tiết các loại phòng, villa, lodge và tiện ích.

Giới thiệu những trải nghiệm đặc trưng của resort.

Tạo một trải nghiệm hình ảnh cao cấp, nhất quán trên desktop và mobile.

Đây là website giới thiệu thương hiệu, không phải website giao dịch.

Tuyệt đối không xây dựng chức năng đặt phòng, đặt lịch, đặt dịch vụ, mua hàng, giỏ hàng, thanh toán hoặc gửi yêu cầu đặt chỗ.
- **Đối tượng khách truy cập:** Khách hàng du lịch muốn lưu trú
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

> Nguyên văn, 7.156 ký tự, 189 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
MOSS & MIST — GIAO DIỆN VÀ HIỆU ỨNG

1. Định hướng thiết kế

Thiết kế website resort nghỉ dưỡng giữa rừng thông theo phong cách Forest Minimalism kết hợp Editorial Design. Giao diện mang cảm giác yên tĩnh, tự nhiên, cao cấp và có chiều sâu thị giác.

Màu chủ đạo: xanh rừng #263D32.

Màu phụ: xanh rêu #71816A.

Màu nền: trắng sương #F1F0EA, be đá #D5D0C5.

Màu chữ: xám than #343A35.

Typography: tiêu đề sử dụng serif thanh lịch; nội dung sử dụng sans-serif dễ đọc.

Hình ảnh: rừng thông, thung lũng phủ sương, cabin gỗ, kiến trúc tối giản và ánh sáng tự nhiên.

Bố cục: nhiều khoảng trắng, hình ảnh lớn, đường kẻ mảnh, bố cục bất đối xứng có chủ đích.

Không sử dụng giao diện khách sạn đại trà, các khối thẻ bo tròn dày đặc, gradient sặc sỡ hoặc hiệu ứng chuyển động quá mạnh.

2. Trang chủ — Home

Bố cục

Header trong suốt đặt trên ảnh hero, logo bên trái, menu điều hướng ở giữa hoặc bên phải và nút chuyển ngôn ngữ VI/EN.

Hero chiếm gần toàn bộ chiều cao màn hình đầu tiên, sử dụng ảnh rừng thông hoặc cabin giữa thung lũng sương mù.

Tiêu đề lớn đặt lệch trái hoặc ở vùng trống của ảnh, kết hợp một dòng mô tả ngắn.

Phần giới thiệu resort sử dụng bố cục hai cột: nội dung bên trái, ảnh kiến trúc hoặc thiên nhiên bên phải.

Phần giới thiệu không gian nghỉ dưỡng sử dụng các ảnh kích thước khác nhau, bố trí theo dạng editorial grid thay vì các thẻ giống nhau.

Phần trải nghiệm sử dụng ảnh lớn kết hợp tiêu đề và mô tả ngắn.

Gallery cuối trang trình bày ảnh thiên nhiên, kiến trúc và không gian nghỉ dưỡng theo dạng lưới bất đối xứng.

Footer nền xanh rừng, bố cục gọn gàng và có khoảng cách rộng.

Hiệu ứng

Hero xuất hiện bằng hiệu ứng fade-in kết hợp dịch chuyển nhẹ cho tiêu đề và mô tả.

Ảnh hero có hiệu ứng slow zoom rất nhẹ, tạo chiều sâu nhưng không gây mất tập trung.

Header chuyển từ trong suốt sang nền đặc nhẹ khi cuộn trang.

Các khối nội dung xuất hiện lần lượt bằng hiệu ứng fade-up khi đi vào vùng nhìn thấy.

Ảnh trong gallery phóng to nhẹ khi hover.

Các đường kẻ trang trí có thể mở rộng dần khi cuộn đến từng khu vực.

3. Trang giới thiệu — About

Bố cục

Hero sử dụng ảnh toàn chiều rộng về cảnh quan hoặc kiến trúc resort, kèm tiêu đề lớn.

Phần câu chuyện thương hiệu trình bày theo bố cục hai cột: đoạn văn bên trái, ảnh lớn bên phải.

Phần triết lý thiết kế sử dụng nền sáng, tiêu đề serif nổi bật và các đoạn văn ngắn có khoảng cách rộng.

Phần kiến trúc và thiên nhiên sử dụng bố cục xen kẽ: một ảnh lớn bên trái, nội dung bên phải; khu vực tiếp theo đảo ngược vị trí.

Phần hành trình phát triển resort được thể hiện bằng timeline tối giản, sử dụng đường kẻ mảnh và các mốc thời gian.

Kết thúc trang bằng một ảnh phong cảnh rộng, phủ lớp màu tối nhẹ và đặt thông điệp ở giữa.

Hiệu ứng

Ảnh hero có hiệu ứng zoom chậm khi trang tải.

Các cặp ảnh và nội dung xuất hiện lần lượt bằng fade-up khi cuộn.

Ảnh trong bố cục xen kẽ có hiệu ứng parallax nhẹ, tạo cảm giác các lớp nội dung có chiều sâu.

Timeline hiển thị từng mốc theo thứ tự khi người dùng cuộn xuống.

Đường kẻ timeline được mở rộng dần theo tiến trình cuộn.

Hạn chế hiệu ứng bay, xoay hoặc chuyển động liên tục để giữ cảm giác thư thái.

4. Trang không gian nghỉ dưỡng — Accommodation

Bố cục

Hero sử dụng ảnh cabin hoặc villa giữa rừng, kết hợp tiêu đề và đoạn giới thiệu ngắn.

Phần danh sách không gian nghỉ dưỡng gồm ba loại: Forest Cabin, Valley Villa và Signature Lodge.

Mỗi loại phòng có bố cục riêng thay vì sử dụng ba thẻ giống hệt nhau:

Forest Cabin: ảnh lớn bên trái, thông tin bên phải.

Valley Villa: đảo ngược bố cục, ảnh bên phải và thông tin bên trái.

Signature Lodge: ảnh toàn chiều rộng kết hợp nội dung đặt trên nền sáng phía dưới.

Thông tin mỗi loại gồm tên, mô tả, diện tích minh họa, sức chứa minh họa và các tiện nghi chính. Các thông số cần được đánh dấu là nội dung mẫu nếu chưa có dữ liệu thực tế.

Phần tiện nghi sử dụng lưới tối giản gồm hình ảnh, tên tiện nghi và mô tả ngắn.

Phần vật liệu kiến trúc trình bày bằng các ảnh cận cảnh gỗ, đá, vải tự nhiên và ánh sáng trong không gian.

Footer thống nhất với các trang còn lại.

Hiệu ứng

Các khu vực giới thiệu phòng xuất hiện bằng fade-up khi cuộn đến.

Ảnh có hiệu ứng zoom nhẹ khi hover, giới hạn trong khung ảnh để tránh làm vỡ bố cục.

Khi chuyển giữa các khu vực, có thể dùng hiệu ứng đổi màu nền nhẹ từ trắng sương sang be đá.

Các biểu tượng tiện nghi xuất hiện nhẹ nhàng, không sử dụng animation lặp liên tục.

Phần ảnh vật liệu có thể dùng hiệu ứng reveal từ dưới lên khi đi vào vùng nhìn thấy.

5. Trang trải nghiệm — Experiences

Bố cục

Hero sử dụng ảnh rừng hoặc ánh nắng xuyên qua tán cây, tiêu đề đặt trên vùng ảnh có độ tương phản tốt.

Phần trải nghiệm chính gồm Forest Walk, Morning Rituals, Local Cuisine và Quiet Moments.

Trình bày theo dạng editorial storytelling: ảnh lớn xen kẽ tiêu đề, mô tả và các chi tiết ngắn.

Mỗi trải nghiệm có cách bố trí hình ảnh riêng để tránh cảm giác lặp lại.

Phần khám phá thiên nhiên theo mùa sử dụng bốn hình ảnh đại diện cho các trạng thái cảnh quan, bố trí thành lưới linh hoạt.

Khu vực cuối trang là ảnh phong cảnh toàn chiều rộng, kết hợp một câu thông điệp ngắn.

Hiệu ứng

Ảnh hero xuất hiện bằng fade-in và zoom chậm.

Các khối trải nghiệm lần lượt xuất hiện khi cuộn trang.

Ảnh có hiệu ứng parallax nhẹ ở một số khu vực, không áp dụng đồng loạt cho toàn trang.

Khi hover vào ảnh, ảnh phóng to nhẹ và phần mô tả có thể dịch chuyển lên một khoảng nhỏ.

Các tiêu đề xuất hiện bằng hiệu ứng fade-in kết hợp dịch chuyển nhẹ.

Phần khám phá theo mùa có thể chuyển trạng thái ảnh bằng fade khi người dùng tương tác, nhưng không tự động chuyển quá nhanh.

6. Quy chuẩn hiệu ứng và tương tác

Tất cả hiệu ứng phải mượt, nhẹ và nhất quán giữa bốn trang.

Thời lượng animation thông thường khoảng 300–800 ms; hiệu ứng zoom ảnh nền có thể kéo dài hơn.

Chỉ kích hoạt hiệu ứng xuất hiện khi phần tử đi vào vùng nhìn thấy, tránh chạy lại liên tục khi cuộn lên xuống.

Hover chỉ áp dụng trên thiết bị có con trỏ; trên điện thoại không phụ thuộc vào hover để hiển thị nội dung.

Menu điều hướng có hiệu ứng chuyển màu hoặc gạch chân mảnh khi hover.

Nút chuyển ngôn ngữ VI/EN hoạt động thực tế và giữ phong cách tối giản.

Các liên kết giữa bốn trang phải hoạt động chính xác.

Hỗ trợ prefers-reduced-motion để giảm chuyển động theo cài đặt trợ năng của người dùng.

Tránh hiệu ứng con trỏ tùy chỉnh, chữ chạy liên tục, hiệu ứng lật thẻ, animation nảy mạnh hoặc parallax quá sâu.

7. Responsive và yêu cầu kỹ thuật

Desktop: ưu tiên bố cục rộng, hình ảnh lớn và các khu vực bất đối xứng.

Tablet: điều chỉnh kích thước chữ, khoảng cách và số cột; không để ảnh hoặc nội dung chồng lấn.

Mobile: chuyển bố cục về một cột, giảm kích thước tiêu đề, tối ưu chiều cao hero và giữ menu dễ sử dụng.

Tối ưu ảnh để hạn chế thời gian tải; sử dụng lazy loading cho ảnh nằm ngoài màn hình đầu tiên.

Xây dựng bằng HTML, CSS và JavaScript thuần.

Tách riêng bốn trang HTML, sử dụng chung hệ thống màu sắc, typography, header, footer và quy tắc animation.

Đảm bảo nội dung tiếng Việt và tiếng Anh có bố cục đẹp, không tràn chữ hoặc vỡ giao diện.

Không xây dựng chức năng đặt phòng, mua hàng, thanh toán hay biểu mẫu giao dịch.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Du lịch / khu nghỉ dưỡng** (`recipe:travel-resort`, chưa đánh giá): Hero-cinematic → story-pinned (3 khoảnh khắc) → gallery-lookbook → features-alternate (phòng / tour) → cta-fullbleed. Trang chi tiết tour / phòng.
- **Nhà hàng / quán cà phê** (`recipe:restaurant-cafe`, chưa đánh giá): Hero-cinematic hoặc hero-offset → story-letter → menu dạng features-numbered / tabs → gallery-filmstrip → contact-split (giờ mở cửa, bản đồ, đặt bàn = bản demo).

**Bố cục gợi ý**
- **Hero ảnh tràn viền điện ảnh** (`composition:hero-cinematic`, chưa đánh giá, đã dùng 4 lần): Ảnh tràn `min-h-[100dvh]`, gradient từ đáy, tiêu đề góc dưới-trái cực lớn, CTA + 1 dòng phụ đề. _Tránh:_ Chữ đè mặt người / chủ thể ảnh; Thiếu lớp phủ → chữ không đọc được.
- **Lookbook bất đối xứng** (`composition:gallery-lookbook`, chưa đánh giá, đã dùng 22 lần): Lưới 12 cột: ảnh 7 cột cao + 2 ảnh 5 cột, chú thích nhỏ, `data-reveal="clip"`.
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 17 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.
- **Hero chia đôi chữ – ảnh** (`composition:hero-split`, chưa đánh giá, đã dùng 6 lần): Chữ 5–6/12 cột trái, ảnh tràn mép phải ở lg+; mobile chữ → ảnh.

**Chuyển động gợi ý**
- **Ảnh mở màn che** (`motion:clip-image`, chưa đánh giá): `data-reveal="clip"` trên khung ảnh overflow-hidden chứa <img>. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Parallax ảnh hero** (`motion:parallax-hero`, chưa đánh giá): `data-parallax="0.15"` trên lớp bọc `absolute inset-x-0 -inset-y-[15%]`. _Tránh:_ Đặt chung phần tử có data-reveal / data-tilt; Dùng inset-0 → lộ mép.
- **Hạt sáng / mây** (`motion:atmos-particles`, chưa đánh giá): atmos.js: `data-particles="dust|fireflies|stars|petals"` một section (Level 2), `data-clouds="3"`. _Tránh:_ Chữ trên nền có hạt thiếu tương phản; Tôn trọng prefers-reduced-motion (thư viện đã xử lý).

**Tránh lặp:** các website dựng gần đây đã dùng `hero-cinematic`, `features-tabs`, `cta-fullbleed`, `cta-split`, `hero-split`, `features-numbered`, `gallery-lookbook`, `cta-type`, `hero-offset` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


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
~~~~
