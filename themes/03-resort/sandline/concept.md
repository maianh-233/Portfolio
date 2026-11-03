# Brief website — SANDLINE

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** website giới thiệu thương hiệu resort
- **Tên thương hiệu / dự án:** **SANDLINE** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website giới thiệu SANDLINE, một resort kiến trúc đương đại lấy cảm hứng từ sa mạc, địa hình đá và ánh sáng tự nhiên.

Giao diện phải có cá tính kiến trúc rõ rệt, tối giản nhưng mạnh mẽ, không giống website nghỉ dưỡng nhiệt đới thông thường.
- **Đối tượng khách truy cập:** Khách hàng du lịch muốn lưu trú
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).
- **Mô tả theme** (1 câu tiếng Việt, ví dụ "Giao diện spa và phụ kiện cho chó mèo.") → ghi vào `_build/sitemap.json` (`theme.description`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **English — Tiếng Anh** → `<html lang="en">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Anh: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Industrial** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 2 — Atmospheric** (mặc định của preset). Được dùng: thêm `data-split`, `data-reveal="clip"`, `data-reveal-stagger`, `data-parallax` ≤ 0.2, marquee, kéo ngang; atmos.js: `data-float`, `data-gradient-shift`, `data-clouds` / `data-particles` ở **một** section trên mỗi trang.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Barlow Condensed:wght@600;800`, body `Barlow:wght@400;500;600`, nhãn `IBM Plex Mono:wght@400;600`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Barlow Condensed`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Tool kiểm tra font preset: `Barlow`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Tool kiểm tra font preset: `IBM Plex Mono`: có trên Google Fonts, **có đủ ký tự tiếng Anh** ✓
  - Font nào thiếu ký tự tiếng Anh → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Inter` / `Source Serif 4`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 8.954 ký tự, 130 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
# UI DESIGN SPECIFICATION — SANDLINE

## 1. Định hướng giao diện

Xây dựng giao diện theo phong cách Contemporary Desert Architecture kết hợp Brutalist Editorial. Thiết kế phải thể hiện rõ tinh thần kiến trúc đương đại, hình khối mạnh mẽ, đường nét dứt khoát và sự tương phản giữa vật liệu thô với ánh sáng tự nhiên.

- **Màu sắc:** Desert Sand `#D7BD96`, Terracotta `#A75F43`, Bone White `#F4EFE5`, Dark Umber `#342B25`, Clay `#C58D69`.
- **Typography:** kết hợp serif giàu cá tính cho tiêu đề và sans-serif hình học cho nội dung.
- **Bố cục:** sử dụng lưới bất đối xứng, tiêu đề cỡ lớn, đường kẻ mảnh và khoảng trắng rộng.
- **Hình ảnh:** ưu tiên kiến trúc bê tông màu cát, villa dạng khối, vách đá, hồ phản chiếu, bề mặt vật liệu và bóng nắng dài.
- **Ngôn ngữ thị giác:** tối giản, có tính kiến trúc, giàu chiều sâu và tránh phong cách resort nhiệt đới đại trà.

Không lạm dụng card bo tròn, gradient, icon trang trí hoặc bố cục chia cột đồng đều trên toàn bộ website.

## 2. Giao diện trang chủ — Home

- Header dạng thanh ngang gọn, logo SANDLINE nổi bật, điều hướng rõ ràng và công tắc VI/EN. Có thể sử dụng header nền trong suốt trên hero, sau đó chuyển sang nền đặc khi cuộn.
- Hero sử dụng ảnh kiến trúc sa mạc toàn chiều rộng hoặc gần toàn màn hình. Tiêu đề lớn “Architecture Shaped by the Land” đặt lệch về một phía, tận dụng vùng trống của ảnh để tạo bố cục có chủ đích.
- Section giới thiệu thương hiệu sử dụng bố cục hai cột không cân xứng: nội dung ngắn một bên, ảnh kiến trúc dọc bên còn lại.
- Section công trình nổi bật trình bày theo lưới bất đối xứng, kết hợp ảnh lớn, ảnh nhỏ và các khoảng trống có chủ đích.
- Section phòng nghỉ và villa được thiết kế như một bộ sưu tập kiến trúc. Mỗi loại không gian có tỷ lệ ảnh, vị trí tiêu đề và cách trình bày khác nhau.
- Section tiện ích sử dụng hình ảnh lớn kết hợp nhãn nội dung tối giản cho hồ phản chiếu, nhà hàng, lounge và khu thư giãn.
- Footer nền Dark Umber, chữ Bone White, bố cục gọn và có đường phân cách mảnh.

## 3. Giao diện trang giới thiệu — About

- Hero sử dụng ảnh toàn cảnh kiến trúc trong ánh sáng hoàng hôn, kết hợp tiêu đề lớn và phần mô tả ngắn.
- Section ý tưởng thiết kế sử dụng bố cục editorial, ưu tiên văn bản có chiều rộng giới hạn và hình ảnh kiến trúc tỷ lệ dọc.
- Section vật liệu trình bày đá, bê tông, gỗ và kính bằng ảnh cận cảnh. Kết hợp tên vật liệu, mô tả ngắn và số thứ tự lớn.
- Section nguyên tắc thiết kế sử dụng các khối nội dung độc lập với kích thước không đồng đều, tránh biến mọi nội dung thành những card giống nhau.
- Gallery kiến trúc kết hợp ảnh ngang, ảnh dọc và ảnh cận cảnh vật liệu, tạo nhịp điệu thị giác như một tạp chí kiến trúc.
- Phần kết thúc sử dụng một ảnh kiến trúc nổi bật cùng thông điệp ngắn, giữ nhiều khoảng trống xung quanh.

## 4. Giao diện trang phòng nghỉ và tiện ích — Accommodation

- Hero sử dụng ảnh nội thất villa nhìn ra cảnh quan, tiêu đề đặt ở vùng ít chi tiết để bảo đảm khả năng đọc.
- Ba loại không gian gồm Desert Suite, Courtyard Villa và Horizon Residence phải được trình bày như ba sản phẩm kiến trúc có cá tính riêng, không dùng một mẫu card lặp lại.
- Desert Suite: bố cục ảnh lớn bên trái, thông tin bên phải.
- Courtyard Villa: đảo ngược bố cục, ưu tiên hình ảnh sân trong và mối liên hệ giữa nội thất với ngoại thất.
- Horizon Residence: sử dụng ảnh ngang khổ lớn, tiếp nối bằng phần mô tả nằm trong một cột hẹp.
- Thông tin từng loại gồm mô tả kiến trúc, đặc điểm không gian và tiện nghi tiêu biểu; không hiển thị giá hoặc tình trạng phòng.
- Section tiện ích sử dụng lưới hình học có khoảng cách rõ ràng. Có thể kết hợp số thứ tự lớn, nhãn nhỏ và ảnh tỷ lệ khác nhau để tăng tính biên tập.
- Các khu vực tiện ích cần có sự phân cấp thị giác rõ ràng, không để ảnh, tiêu đề và mô tả cạnh tranh sự chú ý.

## 5. Giao diện trang trải nghiệm — Experiences

- Hero sử dụng ảnh sa mạc lúc bình minh, ưu tiên đường chân trời, bóng đổ và chiều sâu cảnh quan.
- Các trải nghiệm như ngắm sao, khám phá địa hình, ẩm thực, thư giãn bên hồ và văn hóa địa phương được trình bày theo bố cục editorial.
- Mỗi trải nghiệm có một ảnh chủ đạo, tiêu đề nổi bật và mô tả ngắn. Luân phiên vị trí ảnh và nội dung để tránh sự đơn điệu.
- Có thể dùng số thứ tự lớn hoặc đường kẻ mảnh để phân chia từng trải nghiệm.
- Hạn chế icon minh họa; ưu tiên nhiếp ảnh, typography và bố cục để truyền tải cảm xúc.
- Phần cuối trang sử dụng ảnh toàn cảnh rộng cùng tiêu đề lớn, tạo điểm kết thúc thị giác rõ ràng.

## 6. Quy tắc nhất quán giao diện

- Duy trì cùng hệ thống màu sắc, typography, header, footer và quy tắc khoảng cách trên cả bốn trang.
- Mỗi trang phải có bố cục riêng, phù hợp với nội dung, nhưng vẫn nhận diện được là cùng một thương hiệu.
- Ưu tiên ảnh chất lượng cao, tỷ lệ ảnh có chủ đích và cách cắt ảnh phù hợp với kiến trúc.
- Không đặt chữ lên vùng ảnh quá nhiều chi tiết hoặc có độ tương phản thấp.
- Hạn chế sử dụng nhiều thành phần trang trí không phục vụ nội dung.
- Thiết kế responsive: trên mobile chuyển sang bố cục một cột, giảm kích thước tiêu đề và giữ khoảng cách hợp lý; không thu nhỏ nguyên trạng bố cục desktop.
- Giao diện phải có đủ nội dung tiếng Việt và tiếng Anh, không vỡ bố cục khi chuyển ngôn ngữ.
# ANIMATION & MOTION SPECIFICATION — SANDLINE

## 1. Triết lý chuyển động

Chuyển động của SANDLINE phải thể hiện sự tĩnh tại, sức nặng của hình khối kiến trúc và nhịp điệu chậm của ánh sáng sa mạc.

Ưu tiên hiệu ứng tinh tế, có chủ đích và phục vụ bố cục. Không biến website thành một bản trình diễn animation liên tục.

## 2. Hiệu ứng khi tải trang

- Header xuất hiện bằng fade-in nhẹ.
- Tiêu đề hero xuất hiện bằng fade-in kết hợp dịch chuyển theo chiều dọc một khoảng ngắn.
- Phần mô tả và nhãn phụ xuất hiện sau tiêu đề, tạo thứ tự thị giác rõ ràng.
- Ảnh hero có thể sử dụng hiệu ứng zoom chậm từ khoảng 1.04 về 1.0.
- Không cho toàn bộ thành phần xuất hiện cùng lúc hoặc sử dụng hiệu ứng nảy mạnh.

## 3. Hiệu ứng khi cuộn trang

- Sử dụng scroll reveal: nội dung xuất hiện bằng fade-in và dịch chuyển nhẹ từ dưới lên khi đi vào vùng nhìn thấy.
- Các phần tử trong cùng một khu vực có thể xuất hiện lệch thời gian ngắn, nhưng không kéo dài khiến người dùng phải chờ.
- Ảnh kiến trúc có thể dùng hiệu ứng reveal bằng cách mở dần vùng hiển thị theo chiều dọc.
- Đường kẻ trang trí có thể mở rộng từ một đầu sang đầu còn lại khi khu vực tương ứng xuất hiện.
- Chỉ áp dụng parallax nhẹ cho một số ảnh lớn; không sử dụng trên tất cả các section.
- Các hiệu ứng phải kết thúc nhanh và ổn định, không tiếp tục chuyển động khi người dùng đã cuộn qua khu vực.

## 4. Hiệu ứng hình ảnh

- Ảnh có thể phóng to nhẹ khi hover, với phần ảnh được giới hạn trong khung để không làm vỡ bố cục.
- Các ảnh kiến trúc lớn có thể sử dụng hiệu ứng dịch chuyển chậm khi cuộn để tạo chiều sâu.
- Ảnh gallery có thể chuyển trạng thái từ độ sáng hoặc tỷ lệ zoom nhẹ sang bình thường khi hover.
- Không dùng hiệu ứng lật ảnh, xoay 3D, rung, nảy hoặc chuyển cảnh quá phức tạp.
- Không áp dụng zoom mạnh cho ảnh chứa nhiều chi tiết kiến trúc vì dễ làm mất cảm giác cân đối.

## 5. Hiệu ứng typography

- Tiêu đề hero có thể xuất hiện theo từng dòng bằng fade-in và dịch chuyển nhẹ.
- Các tiêu đề section xuất hiện khi cuộn đến khu vực tương ứng.
- Số thứ tự lớn có thể hiện dần bằng hiệu ứng opacity.
- Menu điều hướng sử dụng gạch chân mảnh hoặc thay đổi màu chữ khi hover.
- Không sử dụng chữ nhấp nháy, chữ chạy liên tục hoặc hiệu ứng thay đổi kích thước không cần thiết.

## 6. Hiệu ứng tương tác

- Liên kết và nút điều hướng chuyển màu nhẹ khi hover.
- Menu mobile mở và đóng bằng chuyển động ngắn, rõ ràng.
- Nút chuyển ngôn ngữ VI/EN phải phản hồi tức thì và không tạo hiệu ứng gây phân tâm.
- Các liên kết điều hướng giữa bốn trang hoạt động bình thường; không dùng hiệu ứng chuyển trang khiến người dùng phải chờ.
- Không tạo hiệu ứng hover bắt buộc để đọc nội dung. Trên thiết bị cảm ứng, toàn bộ thông tin quan trọng phải hiển thị mà không cần hover.

## 7. Thông số và nguyên tắc kỹ thuật

- Hiệu ứng giao diện thông thường: khoảng 250–600 ms.
- Hiệu ứng reveal theo cuộn: khoảng 400–800 ms.
- Zoom ảnh nền: chậm và nhẹ, không gây cảm giác ảnh đang liên tục phóng to.
- Ưu tiên `transform` và `opacity` để chuyển động mượt.
- Tránh animation gây thay đổi kích thước bố cục hoặc làm nội dung nhảy vị trí.
- Chỉ kích hoạt scroll reveal khi phần tử đi vào vùng nhìn thấy; tránh khởi tạo lại liên tục khi cuộn.
- Sử dụng `prefers-reduced-motion` để giảm hoặc tắt các chuyển động không cần thiết theo thiết lập trợ năng.
- Không để hiệu ứng làm chậm thao tác điều hướng, ảnh hưởng khả năng đọc hoặc cản trở sử dụng trên mobile.

## 8. Tiêu chí đánh giá

Giao diện đạt yêu cầu khi:
- Chuyển động hỗ trợ cảm giác kiến trúc, không lấn át hình ảnh và nội dung.
- Các hiệu ứng nhất quán giữa bốn trang.
- Không có animation quá mạnh hoặc chạy liên tục không cần thiết.
- Ảnh và nội dung không bị nhảy bố cục trong lúc tải.
- Website vẫn dễ đọc, dễ thao tác khi tắt animation hoặc sử dụng thiết bị di động.
~~~

## Design Brain — mẫu tham khảo phù hợp (không bắt buộc)

> Tool chọn từ kho kinh nghiệm thiết kế theo chủ đề / ngành / phong cách. Dùng làm **gợi ý**, không phải template: kết hợp có chọn lọc, ưu tiên yêu cầu của người dùng và preset. Bản ghi "chưa đánh giá" / "bản nháp" chưa được kiểm chứng.

**Công thức theo ngành**
- **Du lịch / khu nghỉ dưỡng** (`recipe:travel-resort`, chưa đánh giá): Hero-cinematic → story-pinned (3 khoảnh khắc) → gallery-lookbook → features-alternate (phòng / tour) → cta-fullbleed. Trang chi tiết tour / phòng.
- **Nhà hàng / quán cà phê** (`recipe:restaurant-cafe`, chưa đánh giá): Hero-cinematic hoặc hero-offset → story-letter → menu dạng features-numbered / tabs → gallery-filmstrip → contact-split (giờ mở cửa, bản đồ, đặt bàn = bản demo).

**Bố cục gợi ý**
- **Hero ảnh tràn viền điện ảnh** (`composition:hero-cinematic`, chưa đánh giá, đã dùng 5 lần): Ảnh tràn `min-h-[100dvh]`, gradient từ đáy, tiêu đề góc dưới-trái cực lớn, CTA + 1 dòng phụ đề. _Tránh:_ Chữ đè mặt người / chủ thể ảnh; Thiếu lớp phủ → chữ không đọc được.
- **Hero chữ là chính** (`composition:hero-type`, chưa đánh giá, đã dùng 3 lần): Chữ 8–10rem ở 2xl, ảnh nhỏ đặt lệch, dòng thông tin dạng cột.
- **Footer wordmark lớn** (`composition:footer-big`, chưa đánh giá, đã dùng 1 lần): Tên thương hiệu cực lớn ở đáy, 3–4 cột link / liên hệ phía trên.
- **Câu chuyện kiểu tạp chí** (`composition:story-editorial`, chưa đánh giá, đã dùng 17 lần): Tiêu đề 4 cột dính trái, thân 6 cột phải có drop cap, 1 trích dẫn kéo ra lề.

**Chuyển động gợi ý**
- **Parallax ảnh hero** (`motion:parallax-hero`, chưa đánh giá): `data-parallax="0.15"` trên lớp bọc `absolute inset-x-0 -inset-y-[15%]`. _Tránh:_ Đặt chung phần tử có data-reveal / data-tilt; Dùng inset-0 → lộ mép.
- **Số đếm** (`motion:count-up`, chưa đánh giá): `data-count-to="1284" data-suffix="+"`, viết sẵn giá trị cuối trong thẻ. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).
- **Băng chuyền chữ / logo** (`motion:marquee`, chưa đánh giá): `data-marquee="40"`. _Tránh:_ Tôn trọng prefers-reduced-motion (thư viện đã xử lý).

**Tránh lặp:** các website dựng gần đây đã dùng `hero-cinematic`, `gallery-lookbook`, `gallery-asymmetric`, `features-tabs`, `cta-fullbleed`, `cta-split`, `hero-split`, `features-numbered`, `cta-type` ở trang chủ — nếu có lựa chọn phù hợp khác, ưu tiên biến thể khác (không đổi bằng mọi giá nếu làm giảm độ phù hợp).


## Preset

### Preset: Industrial (`industrial`)
Kỹ thuật, lưới rõ ràng, thép và bê tông — mạnh mẽ, đáng tin.

**Hợp với:** nhà máy / sản xuất, xây dựng / vật liệu, cơ khí / kỹ thuật, logistics
**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `concrete` #E7E5E1 · `steel` #2B2F33 · `graphite` #121416 · `rust` #C4512B · `safety` #F2B705 · `line` #C9C6C0
**Font** (Google Fonts): display `Barlow Condensed:wght@600;800` · body `Barlow:wght@400;500;600` · nhãn `IBM Plex Mono:wght@400;600`

**Thành phần giao diện**
- Nút chữ nhật góc vuông, chữ hoa, nền rust hoặc graphite
- Thẻ viền 1px không bo; tag mono
**Chữ**
- Tiêu đề Barlow Condensed chữ hoa, rất đậm, khít dòng; nhãn mono kiểu mã kỹ thuật "SPEC 04 / CAPACITY".
- Số liệu (công suất, diện tích, năm) cỡ lớn, đơn vị nhỏ bên cạnh.
**Bố cục**
- Lưới kẻ rõ (border 1px) chia ô; khối thông số dạng bảng; ảnh tràn viền xen dải số liệu.
- Vạch an toàn (sọc chéo safety) chỉ làm điểm nhấn hiếm.
**Ảnh**
- Ảnh thật: nhà máy, máy móc, công trường, công nhân bảo hộ; tương phản cao, tông hơi lạnh.
**Khoảng trắng:** Vừa — mật độ thông tin cao nhưng căn lưới chặt.
**Chuyển động mặc định:** Level 2 — Atmospheric
- `data-count-to` cho số liệu, `data-reveal="up"`, `data-marquee` cho dải đối tác / chứng nhận, `data-parallax` 0.1 cho ảnh lớn.
- Không particles / clouds / cursor.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-cinematic` → `stats-band` → `features-bento` → `timeline` → `gallery-masonry` → `marquee-band` → `contact-split` → `footer-big`
**Được phép (ghi đè layout-guide mục 3):** sọc chéo an toàn làm điểm nhấn; lưới kẻ hiện rõ
**Tránh:** pastel; bo góc lớn; font viết tay; ảnh văn phòng bóng bẩy
