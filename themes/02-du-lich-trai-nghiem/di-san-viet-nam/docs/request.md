# Brief — disanvietnam

- **Chủ đề:** WEBSITE DI SẢN VIỆT NAM
- **Thương hiệu / dự án:** disanvietnam
- **Tagline:** _(để trống — AI tự quyết định)_
- **Danh mục:** _(chưa có)_
- **Mục đích:** Website được định vị lại thành CỔNG TRI THỨC về di sản văn hóa Việt Nam và Quảng Trị
- **Phong cách:** Industrial (tool tự nhận diện)
- **Mức chuyển động:** Level 1
- **Ngôn ngữ website:** Vietnamese — Tiếng Việt
- **Màu sắc:** _(để trống — AI tự quyết định)_
- **Font chữ:** _(để trống — AI tự quyết định)_

## Section / nhóm nội dung

_(không chọn — AI tự đề xuất sitemap)_

## Chú thích bổ sung

# VAI TRÒ
Bạn là senior frontend developer kiêm UI designer. Hãy dựng BẢN DEMO GIAO DIỆN (chưa cần backend) cho website "Di sản Việt Nam" (disanvietnam.vn). Đây là bản nâng cấp từ một site WordPress cũ.

# BỐI CẢNH
Website được định vị lại thành CỔNG TRI THỨC về di sản văn hóa Việt Nam và Quảng Trị, gồm 5 mảng:
1) nghiên cứu khoa học và công bố học thuật; 2) thư viện, tư liệu, kỷ yếu số; 3) ngân hàng dữ liệu GIS – 3D về di sản; 4) thành tựu, giải thưởng, sản phẩm công nghệ; 5) hợp tác khoa học – giáo dục – bảo tồn.
Chuyên gia trung tâm: ông Phan Tuấn Anh (GIS, chuyển đổi số, di sản, môi trường; hiện công tác tại Viện Môi trường và Phát triển Bền vững – VESDI).
Người dùng: nhà nghiên cứu/giảng viên, cơ quan quản lý di sản, học sinh – sinh viên, khách du lịch, đối tác khoa học.
Tông giao diện: học thuật, đáng tin cậy, hiện đại, sạch sẽ. KHÔNG làm theo kiểu trang du lịch quảng cáo.
Website tham khảo phong cách: Europeana (tìm kiếm + bộ lọc), Google Arts & Culture (kể chuyện bằng hình ảnh), UNESCO World Heritage Centre (hồ sơ di sản), Smithsonian Open Access (trang chi tiết đối tượng).

# CÔNG NGHỆ
- HTML + Tailwind CSS (CDN) + JavaScript thuần. Mỗi trang là một file .html, dùng chung header/footer.
- Dữ liệu đặt trong file data.js (mảng object), render bằng JS để sau này dễ nối CMS.
- Icon: Lucide. Ảnh: dùng khung placeholder có tỉ lệ cố định và alt text mô tả. KHÔNG lấy ảnh có bản quyền trên mạng.

# DESIGN TOKENS
Màu (khai báo bằng CSS variables + Tailwind theme):
- --primary   #0B4773 : logo, menu, link chính, nút chính
- --academic  #143A56 : tiêu đề, nền footer
- --gis       #0D9488 : mọi thứ liên quan bản đồ / "Xem dữ liệu"
- --heritage  #C4A46A : điểm nhấn nhỏ (mốc năm, đường kẻ, badge). Dùng tiết chế, KHÔNG dùng làm nền mảng lớn
- --surface   #F3F6FA : nền khối, nền thẻ
- Nền trang trắng, chữ chính khoảng #1A2B3C. Mọi cặp chữ/nền phải có độ tương phản ≥ 4.5:1.
Font (Google Fonts, có subset vietnamese):
- Tiêu đề, menu, nút: "Be Vietnam Pro" 500–700
- Nội dung bài dài: "Noto Serif", 17px, line-height 1.7
Bố cục:
- Container tối đa khoảng 1200px; cột đọc bài viết 720–800px
- Bo góc 8–12px, bóng đổ rất nhẹ, nhiều khoảng trắng
- Responsive từ 360px đến 1440px; trên mobile, menu mở dạng drawer

# HEADER (dùng chung)
- Thanh trên cùng: nút chuyển ngôn ngữ VI | EN (chỉ cần chuyển giao diện), link Liên hệ.
- Logo chữ "DI SẢN VIỆT NAM" + ô tìm kiếm tổng hợp (placeholder: "Tìm công trình, di tích, hội thảo, tác giả…").
- Menu chính gồm 8 mục, có dropdown:
  1. Trang chủ
  2. Giới thiệu → Tầm nhìn · Nhóm nghiên cứu · Hồ sơ Phan Tuấn Anh · Đối tác · Lịch sử dự án
  3. Nghiên cứu khoa học → Công trình · Bài báo · Kỷ yếu · Đề tài · Hướng dẫn trích dẫn
  4. Ngân hàng số di sản → Bản đồ WebGIS · Hồ sơ di tích · VR360 · Mô hình 3D · Tour số · Bộ sưu tập
  5. Di sản văn hóa → Loại hình di tích · Di sản thế giới (UNESCO) · Di tích quốc gia · Chuyên đề Quảng Trị
  6. Hội thảo & hoạt động → Hội thảo theo năm · Bài tham luận · Bản tin · Album
  7. Giải thưởng & sáng tạo → Giải thưởng · Sản phẩm ứng dụng · Bản quyền – chứng nhận · Câu chuyện thành tựu
  8. Liên hệ & hợp tác → Yêu cầu dữ liệu · Liên hệ · Chính sách dữ liệu · Website liên kết · Bảo mật

# TRANG CHỦ (index.html): 6 khối theo thứ tự
A. Header như trên.
B. Hero: tiêu đề "Nghiên cứu – Số hóa – Bảo tồn – Phát huy giá trị di sản"; đoạn giới thiệu lấy từ phần DỮ LIỆU MẪU; 2 nút "Khám phá bản đồ di sản" (màu --gis) và "Thư viện nghiên cứu" (màu --primary).
C. Lối vào: 3 thẻ lớn là Bản đồ GIS | Thư viện nghiên cứu | Khám phá di sản. Bên dưới là hàng 7 lớp bản đồ chuyên đề: Di sản UNESCO · Di sản cấp quốc gia · Bảo tàng · Cụm di tích Quảng Trị · Cấp quản lý · Địa giới hành chính · Loại hình di tích.
D. Tri thức: "Công trình tiêu biểu" gồm 4 thẻ (công trình số 7, 8, 10, 14 trong danh sách), "Công bố mới nhất", "Kỷ yếu năm gần nhất".
E. Thành tựu: 3 thẻ giải thưởng nổi bật (giải số 04, 06, 07) + link "Xem tất cả giải thưởng".
F. Kết nối: timeline hội thảo gần đây (2023–2026); khối nguồn liên kết (UNESCO, Cục Di sản văn hóa – dsvh.gov.vn, Bảo tàng Lịch sử Quốc gia); ô đăng ký "Nhận tin nghiên cứu và sự kiện" kèm dòng nhỏ "Email chỉ dùng để gửi bản tin – xem Chính sách bảo mật"; nút "Đề nghị hợp tác".
Footer.

# CÁC TRANG CON
1. nghien-cuu.html: danh sách công trình
   - Bộ lọc cột trái (trên mobile là nút "Bộ lọc" mở drawer) gồm: Năm, Loại công bố (kỷ yếu trong nước / tạp chí / hội thảo quốc tế), Chủ đề, Vai trò tác giả, Ngôn ngữ, Quyền truy cập PDF. Có ô tìm kiếm và sắp xếp mới nhất/cũ nhất. Bộ lọc phải chạy thật trên data.js.
   - Mỗi thẻ hiển thị: năm, tiêu đề, nơi công bố, vai trò, 3–5 tag từ khóa, badge trạng thái.
2. cong-trinh.html: chi tiết công trình (lấy công trình số 10 làm mẫu)
   - Breadcrumb, tiêu đề, tác giả, mã hội thảo, nguồn, năm, từ khóa, tóm tắt (để placeholder "[Tóm tắt 100–200 từ – chờ tác giả cung cấp]").
   - Khung "Tệp PDF" với trạng thái "Đang xác minh quyền công bố – xem tại trang hội thảo".
   - Nút "Trích dẫn" mở popup có định dạng APA và Vancouver, kèm nút copy.
   - Mục "Cùng chủ đề nghiên cứu" (liên kết sang công trình số 12) và mục "Di tích liên quan".
3. hoi-thao.html: hội thảo theo năm
   - Timeline dọc 2015 → 2026, có lọc theo năm.
   - Có 2 loại nhãn tách biệt: "Có công trình đăng kỷ yếu" và "Đã trực tiếp tham dự". Trong demo chỉ gắn nhãn thứ nhất.
4. giai-thuong.html: giải thưởng & sáng tạo
   - 4 tab: Khoa học – kỹ thuật & sáng tạo · Chuyển đổi số · Truyền thông – quảng bá di sản · Sở hữu trí tuệ – chứng nhận.
   - Mỗi thẻ hiển thị: năm, tên giải, sản phẩm, mức giải, đơn vị trao, CHỦ THỂ NHẬN (ghi rõ là cá nhân, nhóm hay cơ quan), nhóm tác giả, link nguồn, badge trạng thái.
5. ho-so-chuyen-gia.html: hồ sơ Phan Tuấn Anh
   - Ảnh chân dung placeholder, đoạn tóm tắt, lĩnh vực chuyên môn (dạng tag), timeline công tác rút gọn, học vấn rút gọn, công trình chọn lọc, giải thưởng.
   - Form "Đề nghị hợp tác" có checkbox đồng ý xử lý dữ liệu cá nhân.
6. ban-do.html: ngân hàng số di sản
   - Panel trái: 7 lớp bản đồ dạng checkbox. Giữa: khung bản đồ lớn (Leaflet + OpenStreetMap với 3–4 điểm, ghi chú rõ "Tọa độ minh họa"). Panel phải: hiện khi bấm vào một điểm, gồm tên hiện hành, tên lịch sử, cấp xếp hạng, nguồn dữ liệu, ngày cập nhật, các link Bài nghiên cứu / Mô hình 3D / VR360.
   - Dưới bản đồ ghi: phiên bản bản đồ, nguồn, ngày cập nhật, giới hạn sử dụng.
   - Trên mobile: bản đồ chiếm toàn màn hình, các panel chuyển thành bottom sheet.
7. lien-he.html: form liên hệ / yêu cầu dữ liệu và thông tin đơn vị vận hành.

# FOOTER
4 cột: (1) giới thiệu ngắn + [Tên đơn vị vận hành], [Địa chỉ], [Email], [Điện thoại]; (2) Nghiên cứu; (3) Di sản; (4) Hỗ trợ & chính sách: Chính sách dữ liệu, Bản quyền hình ảnh, Hướng dẫn trích dẫn, Câu hỏi thường gặp, Bảo mật.
Dòng cuối: "© 2026 Di sản Việt Nam · [Tên đơn vị vận hành]". Nền màu --academic, chữ sáng.
Tùy chọn: nút nổi Zalo, Gọi điện, Chatbot hỏi đáp.

# DỮ LIỆU MẪU (dùng đúng như dưới đây, không tự bịa thêm)

## Văn bản
- Giới thiệu website: "Di sản Việt Nam hướng tới trở thành không gian kết nối tri thức nghiên cứu, ứng dụng công nghệ số và bảo tồn giá trị di sản văn hóa Việt Nam. Trọng tâm của website là hệ thống công trình nghiên cứu, tư liệu di tích, kỷ yếu khoa học và các ứng dụng GIS – 3D phục vụ quản lý, nghiên cứu, giáo dục và trải nghiệm di sản. Các nguồn thông tin được chú trọng trích dẫn và liên kết đến tài liệu gốc; dữ liệu bản đồ được cập nhật theo nguồn và thời điểm công bố."
- Hồ sơ ngắn: "Ông Phan Tuấn Anh hoạt động trong các lĩnh vực khoa học và công nghệ, đổi mới sáng tạo, công nghệ thông tin, GIS, chuyển đổi số và môi trường. Theo hồ sơ khoa học năm 2026, ông đang công tác tại Viện Môi trường và Phát triển Bền vững (VESDI). Các hướng nghiên cứu nổi bật bao gồm xây dựng cơ sở dữ liệu di sản, ứng dụng GIS/3D trong quản lý di tích, ngân hàng số di sản văn hóa Quảng Trị, nghiên cứu Thành cổ Quảng Trị, Dinh Chúa Nguyễn và địa đạo Vịnh Mốc."
- Dẫn mục giải thưởng: "Chuyên mục giới thiệu các giải pháp, công trình và sản phẩm liên quan đến di sản số, ứng dụng GIS và chuyển đổi số được ghi nhận qua các giải thưởng, cuộc thi sáng tạo kỹ thuật và hoạt động thông tin đối ngoại. Mỗi kết quả được trình bày kèm tên sản phẩm, năm, tổ chức trao tặng, cấp/mức giải, chủ thể được trao và nhóm tác giả (nếu có), đồng thời dẫn đến chứng nhận hoặc nguồn công bố chính thức."

## 14 công trình (STT | Năm | Tiêu đề | Vai trò | Nguồn công bố | Trạng thái)
1 | 2015 | Xây dựng hệ thống bản đồ di tích lịch sử danh lam thắng cảnh Quảng Trị | Đồng tác giả | Kỷ yếu Hội thảo Ứng dụng GIS toàn quốc | Chờ kiểm chứng
2 | 2016 | Giáo dục lịch sử thông qua khám phá di tích lịch sử văn hóa và danh lam thắng cảnh tỉnh Quảng Trị bằng công nghệ GIS | Đồng tác giả | Kỷ yếu Hội nghị Khoa học Địa lý toàn quốc lần thứ 9, Quy Nhơn | Chờ kiểm chứng
3 | 2017 | Ứng dụng công nghệ GIS xây dựng hệ thống thông tin di tích lịch sử văn hóa và danh lam thắng cảnh tỉnh Quảng Trị | Đồng tác giả | Tạp chí Khoa học Đại học Huế: Kỹ thuật và Công nghệ, Tập 126, Số 2A, tr. 177–188 | Chờ kiểm chứng
4 | 2017 | GIS technology applications for building database of Quang Tri promotion and development of tourism | Đồng tác giả | International Conference on Earth Observations & Natural Hazards, Hà Nội | Chờ kiểm chứng
5 | 2019 | Ứng dụng GIS đánh giá hiện trạng trình độ công nghệ và xây dựng hệ thống thông tin doanh nghiệp trên địa bàn tỉnh Quảng Trị | Tác giả chính | Kỷ yếu Hội thảo Ứng dụng GIS toàn quốc | Chờ kiểm chứng
6 | 2020 | Nghiên cứu xây dựng mô hình phát triển du lịch gắn với bảo tồn đa dạng sinh học tại Khu Dự trữ Sinh quyển Kiên Giang | Đồng tác giả | Kỷ yếu Hội nghị Khoa học Địa lý lần thứ XIII | Chờ kiểm chứng
7 | 2022 | Xây dựng ngân hàng số di tích lịch sử, văn hóa và danh lam thắng cảnh nhằm góp phần hỗ trợ phát triển du lịch thông minh Quảng Trị | Tác giả chính | Kỷ yếu Hội thảo Ứng dụng GIS toàn quốc | Chờ kiểm chứng
8 | 2023 | Chuyển đổi số di sản văn hóa di tích lịch sử cấp quốc gia đặc biệt Thành cổ Quảng Trị và khu vực lân cận | Đồng tác giả | Kỷ yếu Hội thảo Ứng dụng GIS toàn quốc | Chờ kiểm chứng
9 | 2023 | Building information system for Quang Tri citadel relic and other memorial sites related to 81-day battle of 1972 using GIS and 3D technology | Tác giả chính | Conference on Construction Digitalisation for Sustainable Development (CDSD 2023) | Chờ kiểm chứng
10 | 2024 | Bước đầu ứng dụng công nghệ viễn thám, GIS và một số công nghệ thông minh phục vụ công tác nghiên cứu tìm kiếm và xác định khu vực Dinh Chúa Nguyễn giai đoạn 1558–1626 tại huyện Triệu Phong, tỉnh Quảng Trị | Tác giả chính | Kỷ yếu Hội thảo Ứng dụng GIS toàn quốc 2024, mã bài GIS24_05; tác giả: Phan Tuấn Anh, Nguyễn Quang Chức; từ khóa: Dinh Chúa Nguyễn, Quảng Trị, Viễn thám, GIS, Di sản văn hóa | ĐÃ ĐỐI CHIẾU NGUỒN
11 | 2024 | Đánh giá một số tác động từ phát triển năng lượng tái tạo đến tài nguyên môi trường: nghiên cứu điển hình tại tỉnh Quảng Trị, Việt Nam | Đồng tác giả | Kỷ yếu Hội nghị Khoa học Địa lý lần thứ XIV | Chờ kiểm chứng
12 | 2025 | Bước đầu ứng dụng công nghệ viễn thám, GIS và một số công nghệ thông minh trong nghiên cứu tìm kiếm xác định khu vực Dinh Chúa Nguyễn giai đoạn 1558–1626 tại huyện Triệu Phong, tỉnh Quảng Trị | Tác giả chính | Kỷ yếu Hội nghị Khoa học Địa lý toàn quốc lần thứ 15, TP. Hồ Chí Minh | Chờ kiểm chứng
13 | 2026 | Assessing some impact from renewable energy development on environmental resources: Case study in Quang Tri province, Vietnam | Tác giả chính | The 5th Workshop of Asian Young Geographers, Quảng Châu, Trung Quốc (5–8/6/2026) | Chờ kiểm chứng
14 | 2025 | Tích hợp công nghệ quét laser mặt đất và GIS trong xây dựng cơ sở dữ liệu địa không gian 3D hầm ngầm: thử nghiệm tại cửa số 3, di tích địa đạo Vịnh Mốc, tỉnh Quảng Trị | Đồng tác giả | Kỷ yếu Hội thảo Ứng dụng GIS toàn quốc | Chờ kiểm chứng

## Giải thưởng (Mã | Năm | Sản phẩm | Giải | Mức giải | Chủ thể nhận | Nhóm tab | Trạng thái)
01 | 2006 | Sản phẩm Du lịch Quảng Trị | Giải thưởng Sáng tạo kỹ thuật lần thứ III | Chưa xác nhận | Chưa xác nhận | KH-KT & sáng tạo | Chờ kiểm chứng
02 | 2018 | Sản phẩm Di sản Việt Nam | Cuộc thi Khởi nghiệp đổi mới sáng tạo Bắc Trung Bộ | Bằng khen | Chưa xác nhận | KH-KT & sáng tạo | Chờ kiểm chứng
03 | 2018 | Sản phẩm Di sản Việt Nam | Cuộc thi Khởi nghiệp đổi mới sáng tạo Duyên hải miền Trung và Tây Nguyên | Bằng khen | Chưa xác nhận | KH-KT & sáng tạo | Chờ kiểm chứng
04 | 2023 | Ngân hàng số di sản văn hóa hỗ trợ du lịch thông minh | Giải thưởng Chuyển đổi số Việt Nam (Vietnam Digital Awards) 2023 | Được vinh danh | CƠ QUAN: Sở Khoa học và Công nghệ tỉnh Quảng Trị | Chuyển đổi số | ĐÃ ĐỐI CHIẾU NGUỒN
05 | 2023 | App Di sản văn hóa Quảng Trị | Hội thi Sáng tạo kỹ thuật tỉnh Quảng Trị (2022–2023) | Chưa xác nhận | Chưa xác nhận | KH-KT & sáng tạo | Chờ kiểm chứng
06 | 2023 | "Thương hiệu du lịch – App di sản văn hóa Quảng Trị" | Giải thưởng toàn quốc về Thông tin đối ngoại lần thứ IX, hạng mục "Sáng kiến, sản phẩm có giá trị thông tin đối ngoại" | GIẢI BA | NHÓM TÁC GIẢ: Phan Tuấn Anh, Nguyễn Thị Mai Anh, Nguyễn Quang Chức, Phan Thị Hoa Lợi | Truyền thông – quảng bá di sản | ĐÃ ĐỐI CHIẾU NGUỒN (TTXVN)
07 | 2024 | App Di sản văn hóa Quảng Trị | Hội thi Sáng tạo kỹ thuật toàn quốc lần thứ 17 (VIFOTEC) | Chưa xác nhận thứ hạng | Chưa xác nhận | KH-KT & sáng tạo | Chờ kiểm chứng
Tab Sở hữu trí tuệ:
- Phần mềm App Di sản văn hóa Quảng Trị: đăng ký quyền tác giả số 10055/2022/QTG | Chờ kiểm chứng
- Bộ ảnh Di tích lịch sử tỉnh Quảng Trị: số 3300/2023/QTG, ngày 27/4/2023 | Chờ kiểm chứng

## Timeline hội thảo
2015 Hội thảo Ứng dụng GIS toàn quốc (công trình 1) · 2016 Hội nghị Khoa học Địa lý toàn quốc lần 9 (công trình 2) · 2017 Hội thảo GIS; Earth Observations & Natural Hazards (công trình 3, 4) · 2019 Hội thảo GIS toàn quốc (công trình 5) · 2020 Hội nghị Khoa học Địa lý lần XIII (công trình 6) · 2022 Hội thảo GIS toàn quốc (công trình 7) · 2023 Hội thảo GIS; CDSD 2023 (công trình 8, 9) · 2024 Hội thảo Ứng dụng GIS toàn quốc (công trình 10, mã GIS24_05); Hội nghị Khoa học Địa lý lần XIV (công trình 11) · 2025 Hội nghị Khoa học Địa lý lần XV (công trình 12); Hội thảo GIS toàn quốc (công trình 14) · 2026 5th Workshop of Asian Young Geographers (công trình 13)

## Hồ sơ chuyên gia (rút gọn, toàn bộ gắn badge "Theo hồ sơ – chờ kiểm chứng")
Công tác: 1994–2005 chuyên môn môi trường, công nghệ tại Sở KH&CN Quảng Trị · 2005–2009 phụ trách web/CNTT, Trung tâm Tin học – Thông tin KH&CN · 2010–2013 quản lý chất lượng tại doanh nghiệp · 2013–6/2025 lãnh đạo cấp phòng về quản lý công nghệ, sở hữu trí tuệ, đổi mới sáng tạo tại Sở KH&CN Quảng Trị · Từ 7/2025 Trưởng Chi nhánh Bắc Trung Bộ, VESDI.
Đào tạo: Cử nhân Hóa học (ĐH Tổng hợp Huế, 1992) · Môi trường (CRES) · Environmental Planning (Indiana University, 1997) · Viễn thám & GIS cho quy hoạch môi trường (Vrije Universiteit Brussel, 1999) · ISO 14001/14031 (2001) · ISO 9001:2008 Lead Auditor (2010) · DAAD Summer School – GIS for Sustainable Development.
Lĩnh vực: GIS – Viễn thám, Di sản số, Chuyển đổi số, Đổi mới sáng tạo, Sở hữu trí tuệ, Môi trường.

# QUY TẮC NỘI DUNG BẮT BUỘC
1. Không dùng lorem ipsum. Không tự bịa DOI, ISBN, số trang, đồng tác giả, mức giải hay số liệu thống kê. Chỗ nào chưa có dữ liệu thì để placeholder dạng [ … ].
2. Badge có 2 trạng thái: "Đã đối chiếu nguồn" (màu --gis) và "Theo hồ sơ – chờ kiểm chứng" (viền --heritage). Badge phải có chữ, không chỉ phân biệt bằng màu.
3. Giải thưởng của cơ quan không được trình bày thành giải cá nhân. Giải có nhóm tác giả phải hiển thị đủ tên.
4. KHÔNG hiển thị số CCCD, ngày sinh, địa chỉ cá nhân, chữ ký hay ảnh scan bằng cấp.
5. Di tích và dự án phải hiển thị cả "Địa danh tại thời điểm nghiên cứu" và "Địa danh hành chính hiện hành".
6. Không xuất hiện chữ "khuyến mãi" và không xuất hiện "Flatsome Theme".

# YÊU CẦU CHẤT LƯỢNG
- HTML ngữ nghĩa (header/nav/main/article/aside/footer), alt text cho mọi ảnh, trạng thái focus rõ ràng, điều hướng được hoàn toàn bằng bàn phím. Mục tiêu WCAG 2.2 AA.
- Bảng dữ liệu cuộn ngang được trên mobile, tiêu đề cột rõ ràng.
- Hiệu ứng nhẹ (hover, chuyển cảnh ≤ 200ms), tôn trọng prefers-reduced-motion.

# CÁCH LÀM & ĐẦU RA
- Bước 1: dựng design tokens, header/footer và trang chủ, sau đó DỪNG LẠI để tôi duyệt.
- Bước 2: dựng lần lượt các trang con 1 → 7.
- Ở mỗi bước: xuất code đầy đủ của từng file, kèm cây thư mục và hướng dẫn chạy.

## Góp ý đã sửa

- 15:20:06 22/10/2026: - Phần Banner trang chủ họ muốn hình ảnh tràn màn hình luôn các chữ nhưn là Nghiên cứu số hóa gì đó đè lên hình ảnh và có nhiều hình liên quan nó tuwjj chuyển qua . Đồng thười có nút chuyển nhỏ nhỏ để người tự chuyển - Bạn tham khảo hình ảnh trang cũ của họ là trang "https://disanvietnam.vn/" để tìm hiểu hình ảnh . Có thể chọn ảnh đẹp hơn . Bắt buộc liên quan đến Việt Nam và Quảng Trị -Phần hồ sơ chuyên gia lấy hình cá nhà chuyên gia liên quan
- 11:21:53 24/10/2026: Phần tran di sản văn hóa . Chỗ danh mục di sản Việt Nam  được UNESCO ghi danh . Khi nhấn vô một item thfi sẽ chuyển qua trang chi tiết chứu không hiện dialog chi tiết nữa
