# Prompt đã dùng — MAKEUP ÉCLAT BEAUTY ACADEMY

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
# Brief website — MAKEUP ÉCLAT BEAUTY ACADEMY

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Web Quảng bá học viện MAKEUP ÉCLAT BEAUTY ACADEMY
- **Tên thương hiệu / dự án:** **MAKEUP ÉCLAT BEAUTY ACADEMY** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế website đa trang cho ÉCLAT BEAUTY ACADEMY, học viện đào tạo nghệ thuật trang điểm chuyên nghiệp dành cho người mới bắt đầu, người yêu thích làm đẹp và những người muốn theo đuổi nghề makeup artist.

Website không chỉ giới thiệu các khóa học mà còn thể hiện tư duy thẩm mỹ, chuyên môn giảng dạy, môi trường thực hành và thành quả sáng tạo của học viên. Hình ảnh thương hiệu cần tạo cảm giác đây là một học viện makeup có định hướng nghệ thuật, chuyên nghiệp và chỉn chu.

Định vị thương hiệu: Professional Makeup Education · Beauty Artistry · Creative Excellence.

Thông điệp chính: “Makeup is an Art. Beauty is Your Expression.”

Website phục vụ mục đích giới thiệu thương hiệu, chia sẻ thông tin đào tạo và trưng bày tác phẩm. Không xây dựng cửa hàng, không bán mỹ phẩm, không có giỏ hàng, thanh toán trực tuyến hoặc chức năng mua khóa học.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.
- **Tagline:** BA không ghi — tự đặt một khẩu hiệu ngắn, ghi bằng tiếng Việt vào `_build/sitemap.json` (`theme.tagline`).

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
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
  - Tool kiểm tra font preset: `Instrument Serif`: có trên Google Fonts nhưng **THIẾU ký tự tiếng Việt** ✗
  - Tool kiểm tra font preset: `Geist`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 12.276 ký tự, 387 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. ART DIRECTION — ĐỊNH HƯỚNG THỊ GIÁC

Phong cách thiết kế

Kết hợp Luxury Beauty Editorial, Contemporary Feminine và Modern Art School. Giao diện lấy cảm hứng từ các tạp chí thời trang và beauty campaign cao cấp, nơi hình ảnh makeup đóng vai trò trung tâm.

Tránh giao diện trung tâm đào tạo đại trà, các khối nội dung giống template giáo dục thông thường hoặc phong cách quá nhiều màu sắc.

Bảng màu

Cream: #F7F1E9 — nền chủ đạo, tạo cảm giác mềm mại và tinh tế.

Nude Beige: #D8B9A5 — màu phụ cho các khu vực giới thiệu.

Deep Burgundy: #713B45 — điểm nhấn sang trọng, gợi liên tưởng đến son môi.

Chocolate Brown: #49362F — tiêu đề và nội dung quan trọng.

Soft Black: #211E1D — nền tối cho các section gallery đặc biệt.

Warm White: #FFFCF8 — nền sáng cho nội dung và khoảng trắng.

Sử dụng màu kem và nâu làm nền tảng, burgundy làm điểm nhấn có kiểm soát. Không sử dụng quá nhiều gradient, màu neon hoặc hiệu ứng kính mờ.

Typography

Tiêu đề lớn sử dụng serif thanh lịch, mang tinh thần tạp chí thời trang.

Nội dung sử dụng sans-serif hiện đại, dễ đọc.

Có thể sử dụng chữ in hoa, tracking rộng cho nhãn section và thông tin phụ.

Kết hợp tiêu đề cỡ lớn với các đoạn mô tả ngắn để tạo nhịp điệu thị giác.

Hình ảnh

Ưu tiên hình ảnh chất lượng cao về:

Chân dung beauty cận mặt, thể hiện rõ lớp nền, màu mắt, đường nét và màu son.

Makeup artist đang làm việc trên người mẫu.

Hậu trường buổi thực hành tại studio.

Makeup cô dâu, soft glam, editorial makeup và creative makeup.

Học viên thực hành dưới sự hướng dẫn của giảng viên.

Không gian studio với gương, bàn trang điểm và ánh sáng chuyên nghiệp.

Hình ảnh phải có ánh sáng đẹp, màu da tự nhiên và chất lượng như ảnh chụp editorial. Hạn chế hình minh họa hoạt hình, ảnh stock thiếu nhất quán hoặc hình ảnh không liên quan đến makeup.

3. CẤU TRÚC WEBSITE — 4 TRANG CHÍNH

TRANG 01 — HOME

Mục tiêu: Tạo ấn tượng đầu tiên mạnh mẽ, truyền tải bản sắc học viện và dẫn người xem khám phá các nội dung đào tạo.

Section 1: Header & Navigation

Logo chữ ÉCLAT BEAUTY ACADEMY.

Menu gồm Home, About, Courses, Student Portfolio.

Nút phụ “Contact” dẫn đến khu vực liên hệ ở cuối trang Student Portfolio.

Header nền trong suốt trên Hero, chuyển sang nền kem khi cuộn nếu phù hợp.

Menu tối giản, không chiếm quá nhiều diện tích.

Section 2: Hero — The Art of Beauty

Thiết kế Hero theo bố cục editorial bất đối xứng.

Một bên là tiêu đề lớn: “MAKEUP IS AN ART. BEAUTY IS YOUR EXPRESSION.”

Đoạn mô tả giới thiệu học viện là nơi phát triển kỹ thuật, tư duy thẩm mỹ và phong cách cá nhân.

CTA chính: “Khám phá chương trình đào tạo”.

CTA phụ: “Xem tác phẩm học viên”.

Bên còn lại sử dụng ảnh chân dung beauty editorial nổi bật, có thể kết hợp một ảnh phụ nhỏ hoặc nhãn typography trang trí.

Bố cục thoáng, ảnh chiếm diện tích lớn và không bị chia thành quá nhiều thẻ nhỏ.

Section 3: Introduction — Beyond Makeup

Giới thiệu ngắn về ÉCLAT BEAUTY ACADEMY.

Nội dung nhấn mạnh rằng makeup không chỉ là kỹ thuật làm đẹp mà còn là cách hiểu gương mặt, màu sắc, ánh sáng và thể hiện cá tính.

Trình bày bằng một tiêu đề lớn, đoạn văn ngắn và hình ảnh studio hoặc giảng viên hướng dẫn học viên.

Section 4: Our Philosophy

Giới thiệu ba giá trị cốt lõi:

Technique: Làm chủ kỹ thuật và quy trình trang điểm.

Aesthetic: Phát triển khả năng cảm nhận màu sắc, tỷ lệ và đường nét.

Creativity: Xây dựng phong cách cá nhân và tư duy sáng tạo.

Sử dụng bố cục ba cột trên desktop, chuyển thành các khối xếp dọc trên mobile. Mỗi khối có tiêu đề, mô tả ngắn và hình ảnh hoặc chi tiết đồ họa phù hợp.

Section 5: Training Programs

Giới thiệu tổng quan các hướng đào tạo:

Personal Makeup: Trang điểm cá nhân, lựa chọn phong cách phù hợp với gương mặt.

Professional Makeup: Kỹ thuật nền tảng và quy trình làm việc của makeup artist.

Bridal Makeup: Phong cách trang điểm cô dâu, độ bền lớp nền và xử lý ánh sáng.

Beauty & Editorial: Makeup sáng tạo cho chụp ảnh thời trang, beauty campaign và concept nghệ thuật.

Mỗi chương trình sử dụng ảnh đại diện riêng, tên chương trình và mô tả ngắn. Có nút xem chi tiết dẫn đến trang Courses.

Section 6: Learning in Studio

Trình bày không khí học tập thông qua ảnh hậu trường: học viên thực hành trên người mẫu, giảng viên chỉnh sửa kỹ thuật, chuẩn bị dụng cụ và làm việc dưới ánh sáng studio.

Sử dụng gallery ảnh bất đối xứng hoặc bố cục ảnh lớn xen kẽ ảnh nhỏ.

Section 7: Student Highlights

Hiển thị 3–4 tác phẩm makeup nổi bật của học viên. Mỗi tác phẩm có ảnh, tên concept và phong cách makeup.

CTA: “Khám phá portfolio”.

Section 8: Final CTA & Footer

Thông điệp: “Your Creativity Begins Here.”

Mời người xem tìm hiểu thêm về môi trường đào tạo và liên hệ học viện để được tư vấn.

Footer gồm logo, giới thiệu ngắn, menu điều hướng, thông tin liên hệ và các liên kết mạng xã hội mẫu có thể chỉnh sửa.

TRANG 02 — ABOUT US

Mục tiêu: Giới thiệu câu chuyện, triết lý đào tạo, đội ngũ và không gian học tập.

Section 1: About Hero

Tiêu đề: “Where Beauty Meets Artistry”.

Ảnh lớn thể hiện giảng viên makeup hoặc hoạt động trong studio.

Đoạn mở đầu giới thiệu định hướng phát triển kỹ thuật và tư duy nghệ thuật.

Section 2: Our Story

Kể câu chuyện hình thành ÉCLAT BEAUTY ACADEMY, với định hướng xây dựng môi trường học tập nghiêm túc nhưng khuyến khích sáng tạo.

Sử dụng bố cục hai cột: nội dung bên trái, hình ảnh hậu trường hoặc studio bên phải.

Thông tin lịch sử và thành tựu chưa có dữ liệu thực tế phải sử dụng nội dung mẫu có thể chỉnh sửa, không tự khẳng định giải thưởng hoặc thành tích có thật.

Section 3: Our Educational Philosophy

Giới thiệu cách tiếp cận đào tạo:

Hiểu cấu trúc gương mặt và đặc điểm làn da.

Làm chủ kỹ thuật nền, tạo khối, mắt và môi.

Hiểu lý thuyết màu sắc và ánh sáng.

Luyện tập thường xuyên trên mẫu thực tế.

Phát triển tư duy thẩm mỹ và phong cách cá nhân.

Section 4: Meet the Instructors

Giới thiệu đội ngũ giảng viên bằng ảnh chân dung, tên, chuyên môn và mô tả ngắn.

Có thể sử dụng dữ liệu nhân vật mẫu để hoàn thiện giao diện trước khi thay bằng thông tin thực tế. Không tự gán giải thưởng, chứng chỉ hoặc kinh nghiệm cụ thể không được cung cấp.

Section 5: Inside the Studio

Gallery về bàn trang điểm, gương, ánh sáng, dụng cụ, khu vực thực hành và không gian sáng tạo.

Section 6: Our Values

Trình bày các giá trị: Professionalism, Creativity, Individuality và Continuous Learning.

Kết thúc bằng CTA dẫn đến trang Courses.

TRANG 03 — COURSES

Mục tiêu: Giúp người xem hiểu rõ nội dung và định hướng của từng chương trình đào tạo.

Section 1: Courses Hero

Tiêu đề: “Find Your Makeup Direction”.

Mô tả: Khám phá các chương trình học từ trang điểm cá nhân đến makeup chuyên nghiệp và sáng tạo hình ảnh.

Sử dụng ảnh beauty editorial kết hợp typography lớn.

Section 2: Program Overview

Hiển thị các chương trình theo dạng thẻ hoặc editorial grid. Mỗi chương trình gồm ảnh, tên, mô tả, nội dung trọng tâm và nhóm đối tượng phù hợp.

Chương trình A — Personal Makeup

Hiểu đặc điểm gương mặt và làn da.

Chuẩn bị da, lựa chọn lớp nền.

Kỹ thuật chân mày, mắt, má và môi.

Ứng dụng phong cách makeup hằng ngày và dự tiệc.

Chương trình B — Professional Makeup

Quy trình làm việc và vệ sinh dụng cụ.

Kỹ thuật nền, tạo khối, hiệu chỉnh màu sắc.

Trang điểm theo từng cấu trúc gương mặt.

Thực hành trên người mẫu và hoàn thiện một look makeup.

Chương trình C — Bridal Makeup

Phân tích phong cách trang điểm cô dâu.

Kỹ thuật tạo lớp nền bền đẹp.

Makeup phù hợp trang phục, concept và ánh sáng.

Hoàn thiện diện mạo cho chụp ảnh và sự kiện.

Chương trình D — Beauty & Editorial Makeup

Phân tích concept hình ảnh và moodboard.

Sử dụng màu sắc, texture và đường nét sáng tạo.

Makeup cho chụp ảnh thời trang và beauty editorial.

Phối hợp với nhiếp ảnh gia và xây dựng portfolio.

Section 3: Learning Approach

Mô tả quy trình học theo từng bước: làm quen kiến thức, giảng viên hướng dẫn kỹ thuật, thực hành, nhận phản hồi và hoàn thiện tác phẩm.

Có thể sử dụng timeline ngang trên desktop và dọc trên mobile.

Section 4: Learning Outcomes

Giới thiệu những kỹ năng người học hướng đến sau quá trình đào tạo, như hiểu quy trình makeup, lựa chọn phong cách phù hợp, thao tác dụng cụ và hoàn thiện tác phẩm.

Không cam kết việc làm hoặc kết quả đầu ra tuyệt đối.

Section 5: FAQ

Một số câu hỏi thường gặp:

Người mới bắt đầu có thể học không?

Học viên cần chuẩn bị dụng cụ gì?

Chương trình có thực hành không?

Làm thế nào để tìm hiểu thêm về nội dung đào tạo?

CTA cuối trang dẫn đến thông tin liên hệ. Không hiển thị giá khóa học, nút mua, thanh toán hoặc giỏ hàng.

TRANG 04 — STUDENT PORTFOLIO

Mục tiêu: Biến tác phẩm makeup thành điểm nhấn thị giác lớn nhất của website, đồng thời cung cấp thông tin liên hệ.

Section 1: Portfolio Hero

Tiêu đề: “Every Face Tells a Story”.

Mô tả ngắn về khả năng sáng tạo và hành trình phát triển phong cách của học viên.

Sử dụng ảnh beauty editorial lớn, typography tối giản và không gian âm rộng.

Section 2: Makeup Gallery

Xây dựng gallery với các nhóm nội dung:

Natural & Soft Glam.

Bridal Beauty.

Editorial & Creative Makeup.

Beauty Portraits.

Sử dụng bố cục masonry hoặc lưới ảnh bất đối xứng. Ảnh là yếu tố chính; không đặt quá nhiều chữ lên trên ảnh.

Có thể thêm bộ lọc danh mục để người xem chọn phong cách makeup. Khi nhấn ảnh, mở chế độ xem ảnh lớn kèm tên tác phẩm và mô tả concept.

Dữ liệu mẫu phải có nội dung nhất quán với từng ảnh, tránh dùng cùng một ảnh cho nhiều tác phẩm khác nhau.

Section 3: Behind the Look

Giới thiệu quá trình tạo nên một tác phẩm: chuẩn bị concept, chọn bảng màu, thực hiện makeup và hoàn thiện ảnh.

Trình bày bằng chuỗi ảnh hoặc layout kể chuyện trực quan.

Section 4: Contact the Academy

Giới thiệu lời mời kết nối với học viện để tìm hiểu môi trường học tập và chương trình đào tạo.

Bao gồm:

Địa chỉ học viện dạng dữ liệu mẫu có thể chỉnh sửa.

Số điện thoại và email mẫu.

Liên kết mạng xã hội.

Form gồm họ tên, email hoặc số điện thoại, nội dung liên hệ.

Nếu chưa có backend, form cần hiển thị trạng thái demo rõ ràng và không giả vờ gửi thông tin thành công.

Section 5: Footer

Footer đồng nhất toàn website, có logo, mô tả ngắn, điều hướng và thông tin liên hệ.

4. UI/UX VÀ HÀNH VI GIAO DIỆN

Thiết kế website responsive, tối ưu desktop trước nhưng đảm bảo trải nghiệm tốt trên điện thoại.

Header điều hướng giữa bốn trang phải hoạt động đúng.

CTA dẫn đến đúng trang hoặc đúng section.

Các thẻ chương trình đào tạo liên kết đến phần nội dung tương ứng.

Gallery có chức năng xem ảnh lớn và bộ lọc danh mục nếu phù hợp.

Form liên hệ có kiểm tra dữ liệu đầu vào cơ bản.

Trạng thái hover, focus và các thành phần tương tác phải rõ ràng.

Không sử dụng nút trang trí mà không có hành vi.

Bảo đảm độ tương phản và khả năng đọc của văn bản.

5. ANIMATION VÀ MICRO-INTERACTIONS

Ưu tiên chuyển động tinh tế, có chủ đích và phù hợp với tinh thần beauty editorial.

Hero: Ảnh xuất hiện bằng fade-in kết hợp chuyển động nhẹ.

Typography: Tiêu đề xuất hiện theo từng dòng khi tải trang.

Scroll reveal: Nội dung xuất hiện nhẹ khi đi vào vùng nhìn.

Gallery: Ảnh phóng nhẹ khi hover, không làm vỡ bố cục.

Page transition: Chuyển trang nhẹ nhàng nếu framework hỗ trợ.

Header: Chuyển đổi màu nền và trạng thái khi cuộn.

Button: Hiệu ứng đổi màu hoặc dịch chuyển rất nhẹ khi hover.

Không lạm dụng parallax nhiều lớp, hiệu ứng 3D nặng, con trỏ tùy chỉnh phức tạp hoặc animation liên tục. Ưu tiên hiệu năng, khả năng sử dụng và sự sang trọng.

6. YÊU CẦU KỸ THUẬT VÀ CHẤT LƯỢNG

Xây dựng đủ bốn trang độc lập, không gộp toàn bộ nội dung vào một landing page.

Dùng chung hệ thống màu sắc, typography, spacing, header và footer.

Tổ chức component có thể tái sử dụng.

Tối ưu ảnh và thời gian tải trang.

Không để xuất hiện ảnh lỗi, liên kết hỏng, nội dung tràn màn hình hoặc section bị vỡ trên mobile.

Nội dung mẫu cần tự nhiên, có thể chỉnh sửa dễ dàng.

Không tự thêm các trang hoặc chức năng ngoài phạm vi yêu cầu.

Không xây dựng thương mại điện tử, thanh toán, bán mỹ phẩm hoặc hệ thống mua khóa học.

KẾT QUẢ MONG MUỐN: Một website học viện makeup có tính nhận diện cao, hình ảnh đẹp như tạp chí beauty, thể hiện được năng lực đào tạo và chất lượng tác phẩm học viên. Giao diện cần đủ chuyên nghiệp để sử dụng làm website giới thiệu thương hiệu thực tế, không mang cảm giác của một template giáo dục đại trà.
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
