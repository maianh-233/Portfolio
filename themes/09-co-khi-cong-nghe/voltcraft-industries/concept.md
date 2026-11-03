# Brief website — VOLTCRAFT INDUSTRIES

> Tool sinh file này từ màn hình cấu hình Quick Create. **Đọc hết file, kể cả mục Chú thích bổ sung ở cuối.**
> Thứ tự ưu tiên khi mâu thuẫn: ràng buộc cụ thể, rõ ràng của BA (chú thích, mô tả section, màu, font) → các lựa chọn trong file này → preset → guide → taste skill.
> Mâu thuẫn không tự giải quyết được → chọn phương án an toàn, khả thi và ghi lại trong `_build/sitemap.json` (`adjustments`).

## 1. Thông tin chính

- **Chủ đề:** Website Giowis thiệu xưởng cơ khí VOLTCRAFT INDUSTRIES
- **Tên thương hiệu / dự án:** **VOLTCRAFT INDUSTRIES** — dùng **đúng nguyên văn** ở `<title>`, logo chữ trên header, footer, dòng ©, meta description; website cá nhân thì đây là tên người / tên dự án.
- **Mục đích:** Thiết kế và xây dựng website đa trang giới thiệu VOLTCRAFT INDUSTRIES, doanh nghiệp chuyên gia công cơ khí chính xác, chế tạo máy, tích hợp hệ thống tự động hóa và phát triển giải pháp sản xuất công nghiệp.

Website định vị thương hiệu như một đơn vị cơ khí thế hệ mới, kết hợp năng lực chế tạo thực tế với công nghệ tự động hóa hiện đại. Giao diện cần thể hiện sự chính xác, mạnh mẽ, tiên tiến và đáng tin cậy, đồng thời tạo ấn tượng thị giác khác biệt so với website doanh nghiệp cơ khí truyền thống.

Mục tiêu chính:

Giới thiệu thương hiệu, năng lực kỹ thuật và hệ thống sản xuất.

Trình bày dịch vụ gia công, chế tạo máy và tự động hóa.

Giới thiệu nhà xưởng, thiết bị và các dự án tiêu biểu.

Thể hiện quy trình kiểm soát chất lượng và định hướng công nghệ.

Tạo kênh liên hệ để khách hàng doanh nghiệp trao đổi nhu cầu hợp tác.

Đây là website giới thiệu doanh nghiệp, không phải website thương mại điện tử. Không xây dựng giỏ hàng, thanh toán hoặc chức năng mua sản phẩm trực tuyến.
- Mục đích quyết định sitemap, nội dung, điều hướng và chức năng. Website chỉ giới thiệu thì **không** thêm giỏ hàng / thanh toán / đăng nhập.

## 2. Ngôn ngữ

- Ngôn ngữ chính: **Vietnamese — Tiếng Việt** → `<html lang="vi">` trên mọi trang.
- Mọi chữ hiển thị viết bằng tiếng Việt: menu, tiêu đề, đoạn văn, nút, nhãn & placeholder form, thông báo, footer, `<title>`, meta description, `alt` của ảnh. Không trộn ngôn ngữ (trừ tên riêng / thương hiệu). Không tạo bộ chuyển ngôn ngữ.
- `ui.js` tự đổi thông báo lỗi form theo `<html lang>` — không viết lại.

## 3. Phong cách & chuyển động

- Preset: **Futuristic / Digital Art** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 3 — Advanced** (mặc định của preset). Được dùng: thêm `data-sky`, `data-layers` + `data-depth`, cảnh ghim `data-scene` + `data-step`, `data-scrub`; `data-particles` tối đa 3 section không liền nhau; con trỏ / tilt / magnetic chỉ khi preset cho phép. Trang con nhẹ hơn trang chủ.
- Mức này phải thể hiện trong code (tool đếm thuộc tính `data-*` sau khi dựng). `motion.js` / `atmos.js` / `ui.js` đã tôn trọng `prefers-reduced-motion`; mọi `@keyframes` / `animation` tự viết trong `site.css` phải có `@media (prefers-reduced-motion: reduce)` tắt đi.

## 4. Màu sắc

- BA để trống → dùng bảng màu preset (hoặc tự chọn theo chủ đề, thương hiệu, đối tượng nếu không có preset). Tương phản đạt WCAG AA.
- Khai báo **một lần** trong `assets/js/tw-config.js` (tên màu theo vai trò) và biến CSS trong `assets/css/site.css` `:root` — mọi trang dùng chung, không mã màu rời rạc.

## 5. Font chữ

- BA để trống → dùng font của preset (display `Unbounded:wght@400;600;800`, body `IBM Plex Sans:wght@400;500;600`) hoặc tự chọn hợp phong cách & ngôn ngữ.
  - Tool kiểm tra font preset: `Unbounded`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `IBM Plex Sans`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Tool kiểm tra font preset: `JetBrains Mono`: có trên Google Fonts, **có đủ ký tự tiếng Việt** ✓
  - Font nào thiếu ký tự tiếng Việt → thay bằng font cùng tinh thần có đủ ký tự (ví dụ `Be Vietnam Pro` / `Noto Serif`), hoặc chỉ giữ cho chữ Latin trang trí và thêm fallback.
- Mọi `font-family` kết thúc bằng fallback hệ thống: `system-ui, "Segoe UI", Roboto, Arial, sans-serif`. Google Fonts nạp bằng `<link>` với `display=swap`.

## 6. Section BA chọn

- BA không chọn section → tự đề xuất sitemap và section hợp chủ đề, mục đích, phong cách.

## 7. Công cụ ảnh (tool kiểm tra trước khi giao việc)

- Sẵn sàng. Nguồn đang dùng: **openverse**.
- Tìm ảnh **theo từng trang / section** (image-guide), không dùng một nhóm ảnh chung cho cả website.

## 8. Chú thích bổ sung của BA

> Nguyên văn, 11.657 ký tự, 383 dòng. Đọc **đến dòng cuối** — yêu cầu ở cuối có giá trị như ở đầu. Kết hợp với các mục trên, không xử lý như prompt tách rời.

~~~text
2. Art Direction — Industrial Sci-Fi

Phong cách tổng thể

Kết hợp ba yếu tố:

Industrial Sci-Fi: Không gian công nghiệp tương lai, hệ thống điều khiển, lưới kỹ thuật và ánh sáng điện tử.

Futuristic Manufacturing: Robot công nghiệp, máy CNC, dây chuyền tự động hóa và hệ thống chế tạo thông minh.

Cinematic Technology: Hình ảnh có chiều sâu, ánh sáng tương phản, vùng tối rộng và điểm nhấn phát sáng có kiểm soát.

Website phải có cá tính của một thương hiệu công nghệ công nghiệp cao cấp, không giống dashboard quản trị, trang thương mại điện tử hoặc template doanh nghiệp có sẵn.

Bảng màu

Deep Space #10121C: nền chính.

Electric Purple #8B5CF6: màu nhận diện, điểm nhấn và đường sáng.

Neon Cyan #46E5FF: thông số kỹ thuật, trạng thái và chi tiết tương tác.

Cold White #F1F5F9: tiêu đề và nội dung chính.

Slate Gray #7B8498: nội dung phụ và nhãn kỹ thuật.

Panel Dark #191D2B: nền các khối nội dung và card.

Sử dụng nền tối làm chủ đạo. Tím điện và cyan chỉ xuất hiện tại các chi tiết quan trọng để giữ sự tinh tế, tránh biến toàn bộ website thành giao diện neon quá rực rỡ.

Typography

Dùng font sans-serif hiện đại, hình học, rõ ràng.

Tiêu đề lớn, đậm, có thể viết hoa để tạo cảm giác kỹ thuật.

Nội dung dài sử dụng cỡ chữ dễ đọc và khoảng cách dòng thoáng.

Thông số, mã dự án và nhãn kỹ thuật có thể dùng font monospace.

Phân cấp rõ giữa tiêu đề, mô tả, thông số và chú thích hình ảnh.

Hình ảnh

Ưu tiên hình ảnh chất lượng cao về:

Robot công nghiệp và cánh tay robot.

Máy CNC, máy tiện, máy phay và thiết bị gia công chính xác.

Dây chuyền sản xuất tự động.

Chi tiết kim loại được gia công với độ chính xác cao.

Tủ điều khiển, cảm biến, hệ thống kỹ thuật và khu vực lắp ráp máy.

Nhà xưởng hiện đại với ánh sáng tương phản và chiều sâu không gian.

Có thể sử dụng hình ảnh nhà máy thực tế kết hợp ánh sáng tím hoặc cyan trong khâu trình bày. Không thay thế hình ảnh máy móc thật bằng các hình minh họa viễn tưởng thiếu tính thực tế.

3. Cấu trúc website — 8 trang độc lập

Trang 1: Home /

Đây là trang tạo ấn tượng đầu tiên, thể hiện rõ nhất cá tính Industrial Sci-Fi.

Header

Logo chữ VOLTCRAFT INDUSTRIES.

Menu: Home, About, Capabilities, Workshop, Projects, Automation, Quality, Contact.

Nút CTA “LET'S ENGINEER”.

Header trong suốt trên hero và chuyển sang nền tối đặc khi cuộn.

Hiển thị trạng thái active của trang hiện tại.

Hero Section

Chiếm phần lớn màn hình đầu tiên.

Hình ảnh robot công nghiệp hoặc dây chuyền tự động hóa làm nền chính.

Phủ lớp gradient tối để đảm bảo độ tương phản cho chữ.

Tiêu đề lớn: “ENGINEERING BEYOND LIMITS”.

Mô tả: “Precision manufacturing. Intelligent automation. Industrial solutions built for the future.”

Hai nút: “EXPLORE OUR CAPABILITIES” và “VIEW PROJECTS”.

Bổ sung đường lưới kỹ thuật mờ, các đường chỉ dẫn và một vài điểm sáng cyan.

Có nhãn nhỏ như “MECHANICAL ENGINEERING / INDUSTRIAL AUTOMATION”.

Capabilities Preview

Giới thiệu ngắn về năng lực của doanh nghiệp.

Bốn nhóm chính: Precision Machining, Machine Manufacturing, Industrial Automation và System Integration.

Mỗi nhóm có hình ảnh riêng, tiêu đề, mô tả ngắn và liên kết đến trang liên quan.

Engineering at a Glance

Trình bày một số chỉ số minh họa như số nhóm thiết bị, nhóm năng lực hoặc lĩnh vực phục vụ.

Dùng typography lớn và bố cục dạng bảng điều khiển tối giản.

Không tự nhận các số liệu như công suất, số năm kinh nghiệm hoặc số dự án là dữ liệu thật. Dùng placeholder dễ thay thế nếu chưa có thông tin.

Featured Projects

Hiển thị 3 dự án tiêu biểu dưới dạng các khối hình ảnh lớn.

Mỗi dự án có tên, lĩnh vực, mô tả ngắn và liên kết xem chi tiết.

Dùng bố cục bất đối xứng thay vì các card giống nhau hoàn toàn.

Technology Preview

Hình ảnh robot, cảm biến, máy móc hoặc hệ thống tự động hóa.

Mô tả định hướng ứng dụng công nghệ vào quy trình sản xuất.

CTA dẫn đến trang Automation Technology.

Final CTA

Tiêu đề: “HAVE A COMPLEX ENGINEERING CHALLENGE?”

Mô tả ngắn mời khách hàng trao đổi nhu cầu gia công hoặc chế tạo máy.

Nút “TALK TO OUR TEAM”.

Trang 2: About Us /about

Mục tiêu: Xây dựng niềm tin và giới thiệu định hướng doanh nghiệp.

Các phần nội dung:

Hero với tiêu đề “ENGINEERED WITH PURPOSE”.

Giới thiệu VOLTCRAFT INDUSTRIES, lĩnh vực hoạt động và định hướng phát triển.

Triết lý kỹ thuật: Precision, Reliability, Innovation và Accountability.

Phương pháp làm việc từ phân tích yêu cầu đến triển khai giải pháp.

Giới thiệu đội ngũ kỹ thuật, vận hành và kiểm soát chất lượng.

Hình ảnh nhà xưởng, kỹ sư và hoạt động chế tạo.

CTA dẫn đến trang năng lực hoặc liên hệ.

Trình bày bằng bố cục editorial, hình ảnh lớn xen kẽ các khối nội dung. Không dùng timeline thành lập hoặc thành tích giả như dữ liệu thực tế.

Trang 3: Capabilities /capabilities

Mục tiêu: Giải thích rõ doanh nghiệp có thể thực hiện những công việc nào.

Chia thành các nhóm năng lực:

Precision Machining

Gia công CNC, tiện, phay và xử lý chi tiết cơ khí theo bản vẽ.

Trình bày loại chi tiết, vật liệu và ứng dụng phù hợp.

Hình ảnh cận cảnh bề mặt kim loại và máy gia công.

Machine Manufacturing

Chế tạo cụm máy, chi tiết máy và hệ thống cơ khí theo yêu cầu.

Mô tả quy trình từ thiết kế, chế tạo đến lắp ráp.

Metal Fabrication

Gia công kim loại, cắt, hàn và lắp ráp kết cấu.

Sử dụng hình ảnh thực tế, tránh mô tả chung chung.

Industrial Automation

Tích hợp thiết bị, cảm biến, cơ cấu chấp hành và hệ thống điều khiển.

Trình bày khả năng hỗ trợ tự động hóa quy trình sản xuất khi phù hợp.

Custom Engineering

Tiếp nhận yêu cầu kỹ thuật và phát triển giải pháp theo từng dự án.

Mỗi nhóm cần có tiêu đề, mô tả, hình ảnh, ứng dụng và liên kết đến trang liên quan. Bố cục phải đa dạng, không lặp lại cùng một mẫu card cho toàn bộ trang.

Trang 4: Workshop & Machinery /workshop

Mục tiêu: Cho khách hàng hình dung rõ về không gian sản xuất và thiết bị.

Các phần:

Hero “INSIDE OUR WORKSHOP”.

Giới thiệu môi trường sản xuất và các khu vực làm việc.

Phân khu gia công CNC, gia công kim loại, lắp ráp và kiểm tra.

Thư viện hình ảnh máy móc với bố cục dạng gallery.

Danh mục thiết bị trình bày dưới dạng bảng thông số.

Khu vực kiểm tra, đo lường và hoàn thiện sản phẩm.

CTA dẫn đến trang Quality Control.

Mỗi thiết bị có thể hiển thị tên, loại máy, chức năng, ứng dụng và thông số khi có dữ liệu. Thông tin chưa được xác nhận phải dùng placeholder, không tự bịa model máy hoặc thông số chính xác.

Trang 5: Projects /projects

Mục tiêu: Trưng bày năng lực qua các dự án chế tạo và giải pháp kỹ thuật.

Hero “BUILT FOR REAL-WORLD CHALLENGES”.

Bộ lọc theo nhóm: CNC Machining, Machine Manufacturing, Automation và Metal Fabrication.

Gallery hình ảnh với bố cục bất đối xứng, thay đổi kích thước ảnh có chủ đích.

Mỗi dự án có hình ảnh, tên dự án, lĩnh vực, phạm vi công việc và mô tả kết quả.

Có trang chi tiết riêng cho từng dự án, ví dụ /projects/automated-assembly-system.

Trang chi tiết gồm tổng quan, yêu cầu, phương pháp triển khai, hình ảnh và kết quả thực hiện.

Có thể sử dụng dự án mẫu để minh họa giao diện nhưng phải đánh dấu rõ là nội dung giả lập có thể chỉnh sửa, không tuyên bố đó là dự án khách hàng thật.

Trang 6: Automation Technology /automation

Mục tiêu: Thể hiện định hướng công nghệ và năng lực tích hợp hệ thống.

Các phần:

Hero “INTELLIGENCE MEETS INDUSTRY”.

Giới thiệu vai trò của tự động hóa trong sản xuất.

Các nhóm giải pháp: Industrial Robotics, Control Systems, Sensors & Monitoring, Automated Workflows.

Sơ đồ quy trình từ tín hiệu đầu vào đến điều khiển và vận hành thiết bị.

Hình ảnh robot, cảm biến, tủ điều khiển và dây chuyền tự động.

Khu vực mô tả khả năng tích hợp theo yêu cầu.

CTA dẫn đến trang Contact.

Sơ đồ phải đơn giản, trực quan và dễ hiểu. Không cần xây dựng mô phỏng kỹ thuật phức tạp hoặc dashboard tương tác giả lập.

Trang 7: Quality Control /quality

Mục tiêu: Thể hiện cách tiếp cận về độ chính xác, tính ổn định và an toàn sản xuất.

Các phần:

Hero “PRECISION IS A STANDARD”.

Giới thiệu nguyên tắc kiểm soát chất lượng.

Quy trình kiểm tra từ vật liệu đầu vào đến sản phẩm hoàn thiện.

Thiết bị đo lường và phương pháp kiểm tra.

Kiểm tra kích thước, bề mặt, độ phù hợp với bản vẽ và yêu cầu kỹ thuật.

Quy trình xử lý sai lệch và xác nhận trước khi bàn giao.

CTA liên hệ bộ phận kỹ thuật.

Dùng sơ đồ quy trình, các bước được đánh số, đường kết nối và hình ảnh cận cảnh thiết bị kiểm tra. Chỉ công bố tiêu chuẩn hoặc chứng nhận khi doanh nghiệp có thông tin xác thực.

Trang 8: Contact /contact

Mục tiêu: Giúp khách hàng liên hệ nhanh để trao đổi nhu cầu kỹ thuật.

Các phần:

Hero “LET'S BUILD SOMETHING PRECISE”.

Thông tin liên hệ doanh nghiệp.

Địa chỉ, email, điện thoại và giờ làm việc ở dạng có thể chỉnh sửa.

Form liên hệ gồm họ tên, công ty, email, số điện thoại, loại nhu cầu và nội dung mô tả.

Có thể cho phép nhập thông tin bản vẽ hoặc tài liệu kỹ thuật nếu hệ thống thực sự hỗ trợ tải tệp.

Khu vực bản đồ nếu có địa chỉ thực.

CTA gửi yêu cầu tư vấn.

Form cần có kiểm tra dữ liệu đầu vào, thông báo thành công hoặc lỗi và trạng thái đang gửi. Nếu chưa có backend, tạo giao diện và validation rõ ràng, không giả vờ đã gửi dữ liệu đến doanh nghiệp.

4. Thiết kế hệ thống điều hướng

Tám trang chính phải có URL riêng và nội dung thực sự khác nhau.

Dùng header và footer thống nhất trên toàn bộ website.

Menu điều hướng hoạt động trên desktop và mobile.

Có trạng thái active cho trang đang xem.

Logo dẫn về trang Home.

Các CTA phải dẫn đến đúng trang hoặc đúng khu vực.

Các dự án có thể mở trang chi tiết riêng.

Hỗ trợ truy cập trực tiếp URL và tải lại trang mà không bị lỗi routing.

Không tạo các menu chỉ để trang trí hoặc liên kết trỏ đến # mà không có mục tiêu thực tế.

5. Animation và tương tác

Sử dụng chuyển động có chủ đích, không làm ảnh hưởng khả năng đọc và tốc độ tải trang.

Được sử dụng:

Hero có chuyển động nền rất nhẹ hoặc hiệu ứng parallax giới hạn.

Các đường kỹ thuật và điểm sáng cyan chuyển động chậm.

Nội dung xuất hiện nhẹ khi cuộn vào vùng nhìn thấy.

Ảnh dự án phóng nhẹ khi hover.

Nút CTA đổi màu hoặc phát sáng nhẹ khi tương tác.

Các con số hoặc nhãn kỹ thuật có hiệu ứng xuất hiện đơn giản.

Chuyển cảnh giữa các trang mượt nếu framework hỗ trợ.

Không sử dụng:

WebGL hoặc 3D nặng nếu không thực sự cần thiết.

Hàng loạt hiệu ứng neon đồng thời.

Con trỏ chuột tùy biến gây cản trở thao tác.

Video nền dung lượng lớn tự động phát không cần thiết.

Animation làm chậm menu, biểu mẫu hoặc nội dung chính.

Hỗ trợ prefers-reduced-motion để giảm chuyển động cho người dùng có nhu cầu.

6. Responsive và khả năng sử dụng

Desktop: Tận dụng không gian rộng, hero ấn tượng, gallery lớn và bố cục bất đối xứng.

Tablet: Điều chỉnh lưới nội dung, khoảng cách và kích thước tiêu đề; tránh ảnh bị cắt mất chủ thể.

Mobile: Menu dạng hamburger, nội dung xếp theo cột, nút đủ lớn để thao tác, bảng thông số có thể cuộn ngang khi cần. Giảm các hiệu ứng trang trí để đảm bảo hiệu năng.

Đảm bảo độ tương phản, nội dung dễ đọc, trạng thái focus rõ ràng và các nút có nhãn dễ hiểu.

7. Yêu cầu kỹ thuật

Xây dựng website bằng cấu trúc component rõ ràng, dễ bảo trì.

Tách layout dùng chung, header, footer, navigation, gallery, CTA và các thành phần lặp lại.

Tổ chức nội dung từng trang độc lập, không nhồi toàn bộ website vào một component.

Routing hoạt động thực tế, hỗ trợ truy cập trực tiếp từng trang.

Tối ưu kích thước ảnh, lazy-load hình ảnh bên dưới màn hình đầu tiên và tránh tải thư viện không cần thiết.

Đảm bảo không có lỗi console nghiêm trọng, liên kết hỏng, nội dung tràn ngang hoặc nút không hoạt động.

Không thêm chức năng backend giả lập nếu không cần thiết.

Giữ phong cách thiết kế nhất quán nhưng mỗi trang phải có bố cục phù hợp với nội dung riêng.
~~~

## Preset

### Preset: Futuristic / Digital Art (`futuristic`)
Nền tối, lưới kỹ thuật, ánh neon tiết chế.

**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `void` #07080C · `panel` #10131B · `line` #232838 · `ink` #E8ECF5 · `muted` #8A93A6 · `acid` #C6FF3D · `cyan` #3DF2E0
**Font** (Google Fonts): display `Unbounded:wght@400;600;800` · body `IBM Plex Sans:wght@400;500;600` · nhãn `JetBrains Mono:wght@400;600`

**Chữ**
- Tiêu đề Unbounded, chữ hoa / thường trộn, cỡ lớn; nhãn JetBrains Mono kiểu chỉ số hệ thống `[ 02 / MODULE ]`.
**Bố cục**
- Nền void, lưới kẻ mảnh (background-image linear-gradient 1px) mờ 6%; khối panel viền line.
- Bento không đều cho tính năng; dải số liệu mono; con số lớn.
**Ảnh**
- Ảnh thật: kiến trúc đêm, ánh đèn, phần cứng cận cảnh — xử lý `grayscale contrast-125` + lớp phủ màu acid/cyan mix-blend-color.
**Khoảng trắng:** Đặc hơn: `py-20`, mật độ thông tin cao nhưng căn lưới chặt.
**Chuyển động mặc định:** Level 3 — Advanced
- `data-spotlight` cho panel, `data-scrub` cho chữ lớn, `data-particles="stars"` mật độ thấp ở hero, `data-gradient-shift` cho một dải CTA.
- `data-cursor="ring"` được phép; `data-tilt` nhẹ (4) cho thẻ.
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-type` → `features-bento` → `stats-band` → `story-pinned` → `gallery-masonry` → `cta-sky` → `footer-big`
**Được phép (ghi đè layout-guide mục 3):** lưới kỹ thuật; quầng sáng neon nhỏ
**Tránh:** gradient tím–xanh; robot / não bộ clip-art; glassmorphism tràn lan
