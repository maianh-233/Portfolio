/* MANGA CHRONICLE - dữ liệu mẫu của kho lưu trữ.
 * Tách khỏi giao diện để thay bằng CMS / API sau này.
 * Nội dung dựa trên thông tin công khai; BA cần đối chiếu nguồn trước khi xuất bản.
 */
window.MC_CATEGORIES = {
  'lich-su': 'Lịch sử',
  'tac-gia': 'Tác giả',
  'tac-pham': 'Tác phẩm',
  'nghe-thuat': 'Nghệ thuật sáng tác',
  'dia-diem': 'Địa điểm'
};

window.MC_RECORDS = [
  {
    id: 'cho-ju-giga', no: '001', cat: 'lich-su',
    title: 'Chōjū-jinbutsu-giga', jp: '鳥獣人物戯画', period: 'Thế kỷ 12-13',
    excerpt: 'Bốn cuộn tranh mực vẽ ếch, thỏ, khỉ hành xử như người, thường được nhắc tới như một tiền thân xa của manga.',
    img: null,
    intro: 'Chōjū-jinbutsu-giga (thường gọi tắt là Chōjū-giga) là bộ bốn cuộn tranh thuộc sở hữu chùa Kōzan-ji ở Kyoto. Cuộn nổi tiếng nhất vẽ ếch, thỏ và khỉ vật nhau, tắm sông, làm lễ như con người, chỉ bằng nét mực và không có lời.',
    sections: [
      { h: 'Một cuộn tranh kể chuyện bằng nét', p: 'Các nhân vật được nối tiếp nhau theo chiều cuộn từ phải sang trái, người xem mở dần từng đoạn. Cách dẫn mắt liên tục này là lý do giới nghiên cứu hay đặt Chōjū-giga ở đầu các dòng thời gian về tranh truyện Nhật Bản.' },
      { h: 'Tác giả vẫn chưa xác định', p: 'Truyền thống gắn bộ tranh với tăng sĩ Toba Sōjō (Kakuyū), nhưng điều này chưa được chứng minh. Các cuộn có phong cách khác nhau và nhiều khả năng do nhiều người vẽ ở những thời điểm khác nhau.' },
      { h: 'Nơi lưu giữ hôm nay', p: 'Bộ tranh là Quốc bảo của Nhật Bản. Bản gốc được gửi bảo quản tại Bảo tàng Quốc gia Tokyo và Bảo tàng Quốc gia Kyoto; Kōzan-ji trưng bày bản sao.' }
    ],
    facts: [['Thời kỳ', 'Cuối Heian - đầu Kamakura'], ['Chất liệu', 'Mực trên giấy, 4 cuộn'], ['Sở hữu', 'Chùa Kōzan-ji, Kyoto'], ['Xếp hạng', 'Quốc bảo Nhật Bản']],
    sources: ['Website chính thức chùa Kōzan-ji (kosanji.com)', 'Tokyo National Museum, mục giới thiệu Chōjū-jinbutsu-giga', 'Frederik L. Schodt, Manga! Manga! The World of Japanese Comics, 1983'],
    related: ['hokusai-manga', 'kawanabe-kyosai', 'kyoto-manga-museum']
  },
  {
    id: 'hokusai-manga', no: '002', cat: 'tac-pham',
    title: 'Hokusai Manga', jp: '北斎漫画', period: '1814-1878',
    excerpt: 'Bộ sách phác thảo 15 tập của Katsushika Hokusai, nơi chữ "manga" xuất hiện trên một ấn phẩm nổi tiếng thời Edo.',
    img: 'assets/img/hoso-hokusai-manga.jpg', imgAlt: 'Cuốn Hokusai Manga mở ra, hai trang vẽ cá và tôm bằng mực, trưng bày trong tủ kính bảo tàng',
    imgCaption: 'Một tập Hokusai Manga trưng bày tại Museum of Fine Arts, Boston.',
    intro: 'Hokusai Manga là tập hợp các bản vẽ mẫu của họa sĩ Katsushika Hokusai: người, động vật, cây cỏ, sinh hoạt thường ngày, thần linh. Tập đầu tiên in năm 1814 tại Nagoya; tập cuối cùng ra đời năm 1878, sau khi ông đã mất.',
    sections: [
      { h: 'Sổ mẫu cho người học vẽ', p: 'Bộ sách ban đầu phục vụ học trò và người yêu tranh muốn chép mẫu. Mỗi trang dày đặc hình nhỏ, không có cốt truyện liền mạch, khác với manga hiện đại.' },
      { h: 'Vì sao hay được nhắc tới', p: 'Chữ "manga" (漫画) trong tên sách được hiểu là "tranh vẽ tùy hứng". Nhờ độ phổ biến của Hokusai Manga, từ này gắn với tranh vẽ nhanh, hài hước, trước khi mang nghĩa truyện tranh ở thế kỷ 20.' }
    ],
    facts: [['Tác giả', 'Katsushika Hokusai (1760-1849)'], ['Số tập', '15 tập'], ['Tập đầu', '1814, Nagoya'], ['Kỹ thuật', 'In khắc gỗ']],
    sources: ['Museum of Fine Arts, Boston: bộ sưu tập sách in Nhật Bản', 'British Museum: tư liệu về Katsushika Hokusai', 'Paul Gravett, Manga: Sixty Years of Japanese Comics, 2004'],
    related: ['cho-ju-giga', 'kibyoshi', 'kawanabe-kyosai']
  },
  {
    id: 'kibyoshi', no: '003', cat: 'lich-su',
    title: 'Kibyōshi, sách bìa vàng thời Edo', jp: '黄表紙', period: '1775-1806',
    excerpt: 'Sách đọc giải trí khổ nhỏ, chữ và tranh khắc gỗ nằm chung trên mỗi trang, dành cho người lớn ở Edo.',
    img: 'assets/img/hoso-kibyoshi.webp', imgAlt: 'Tranh khắc gỗ Torii Kiyonaga: nhóm nhạc công và diễn viên kịch trong trang phục thời Edo',
    imgCaption: 'Theatrical Scene, Musicians - tranh khắc gỗ của Torii Kiyonaga, minh họa phong cách in cùng thời kỳ.',
    intro: 'Kibyōshi (sách bìa vàng) là dòng sách tranh in khắc gỗ phổ biến ở Edo cuối thế kỷ 18. Lời kể và lời thoại được khắc ngay trong khoảng trống của tranh, khiến người đọc vừa xem vừa đọc như một trang truyện.',
    sections: [
      { h: 'Chữ và hình trên cùng một mặt giấy', p: 'Khác với sách minh họa thông thường, kibyōshi đặt lời thoại sát nhân vật. Nhiều nhà nghiên cứu xem đây là một bước trung gian giữa cuộn tranh cổ và trang truyện hiện đại.' },
      { h: 'Châm biếm và kiểm duyệt', p: 'Kibyōshi thường giễu cợt đời sống đô thị và cả chính quyền. Các đợt cải cách Kansei (từ 1787) siết chặt kiểm duyệt, khiến dòng sách này thay đổi giọng điệu rồi dần nhường chỗ cho thể loại gōkan dài hơn.' }
    ],
    facts: [['Thời kỳ', 'Khoảng 1775-1806'], ['Trung tâm', 'Edo (Tokyo ngày nay)'], ['Kỹ thuật', 'In khắc gỗ đen trắng'], ['Ảnh minh họa', 'Torii Kiyonaga (1752-1815)']],
    sources: ['Adam L. Kern, Manga from the Floating World: Comicbook Culture and the Kibyōshi of Edo Japan, 2006', 'The Metropolitan Museum of Art: bộ sưu tập tranh Torii Kiyonaga'],
    related: ['hokusai-manga', 'ponchi-e', 'cho-ju-giga']
  },
  {
    id: 'ponchi-e', no: '004', cat: 'lich-su',
    title: 'The Japan Punch và ponchi-e', jp: 'ポンチ絵', period: '1862',
    excerpt: 'Tạp chí biếm họa của Charles Wirgman ở Yokohama để lại một từ mới cho tranh châm biếm: ponchi-e.',
    img: 'assets/img/hoso-ponchi-e.jpg', imgAlt: 'Tranh khắc gỗ màu năm 1874: một người đàn ông cầm gương chiếu tia sáng xua đuổi yêu quái',
    imgCaption: 'Famous Mirror: The Spirit of Japan, Newly Published (1874), tranh khắc gỗ thời Minh Trị.',
    intro: 'Năm 1862, họa sĩ người Anh Charles Wirgman bắt đầu xuất bản The Japan Punch tại khu định cư nước ngoài ở Yokohama. Tạp chí mô phỏng tờ Punch của London, vẽ châm biếm cả người nước ngoài lẫn xã hội Nhật thời mở cửa.',
    sections: [
      { h: 'Từ "Punch" thành "ponchi"', p: 'Ảnh hưởng của tạp chí lớn tới mức tranh biếm họa kiểu phương Tây được gọi là ponchi-e (tranh Punch) trong nhiều thập kỷ, trước khi từ "manga" thay thế.' },
      { h: 'Biếm họa thời Minh Trị', p: 'Cùng giai đoạn, họa sĩ Nhật như Kawanabe Kyōsai cũng vẽ tranh châm biếm cho báo và tạp chí mới ra đời. Năm 1874, Kanagaki Robun và Kyōsai cho ra tạp chí Eshinbun Nipponchi.' }
    ],
    facts: [['Người sáng lập', 'Charles Wirgman (1832-1891)'], ['Nơi xuất bản', 'Yokohama'], ['Thời gian', '1862-1887'], ['Di sản', 'Từ "ponchi-e"']],
    sources: ['Frederik L. Schodt, Manga! Manga! The World of Japanese Comics, 1983', 'Yokohama Archives of History: tư liệu về Charles Wirgman'],
    related: ['kawanabe-kyosai', 'kitazawa-rakuten', 'kibyoshi']
  },
  {
    id: 'kawanabe-kyosai', no: '005', cat: 'tac-gia',
    title: 'Kawanabe Kyōsai', jp: '河鍋暁斎', period: '1831-1889',
    excerpt: 'Họa sĩ nối hai thế giới: học trường phái Kanō nhưng nổi tiếng với tranh hài hước, yêu quái và động vật nhân hóa.',
    img: 'assets/img/hoso-kyosai-animal-circus.jpg', imgAlt: 'Tranh mực màu: hai con chuột mặc áo xanh cầm quạt nhào lộn trên lưng một con vật',
    imgCaption: 'Chi tiết tranh Animal Circus, giữa thế kỷ 19, trưng bày tại triển lãm tranh minh họa Nhật Bản.',
    intro: 'Kawanabe Kyōsai sinh năm 1831, từng theo học Utagawa Kuniyoshi khi còn nhỏ rồi học hội họa trường phái Kanō. Ông nổi tiếng với nét vẽ nhanh, tranh biếm họa và những cảnh động vật, yêu quái mang tinh thần hài hước.',
    sections: [
      { h: 'Nét vẽ tùy hứng', p: 'Kyōsai tự gọi nhiều tác phẩm của mình là kyōga (tranh điên). Những cảnh ếch, chuột, mèo hành xử như người cho thấy mạch nối với truyền thống tranh động vật nhân hóa từ Chōjū-giga.' },
      { h: 'Biếm họa và kiểm duyệt', p: 'Năm 1870, ông bị bắt giữ vì một bức tranh bị cho là châm biếm quan chức. Về sau, kiến trúc sư người Anh Josiah Conder theo học vẽ với ông và viết sách giới thiệu Kyōsai ra phương Tây.' }
    ],
    facts: [['Sinh', '1831, Koga'], ['Mất', '1889, Tokyo'], ['Trường phái', 'Kanō, Utagawa'], ['Học trò nổi bật', 'Josiah Conder']],
    sources: ['Kawanabe Kyōsai Memorial Museum, Warabi, Saitama', 'British Museum: tư liệu Kawanabe Kyōsai', 'Josiah Conder, Paintings and Studies by Kawanabe Kyōsai, 1911'],
    related: ['cho-ju-giga', 'ponchi-e', 'hokusai-manga']
  },
  {
    id: 'kitazawa-rakuten', no: '006', cat: 'tac-gia',
    title: 'Kitazawa Rakuten', jp: '北沢楽天', period: '1876-1955',
    excerpt: 'Họa sĩ biếm họa chuyên nghiệp đầu tiên của Nhật, góp phần đưa chữ "manga" vào nghĩa tranh truyện báo chí.',
    img: null,
    intro: 'Kitazawa Rakuten sinh năm 1876 tại Ōmiya (nay thuộc thành phố Saitama). Ông vẽ cho báo Jiji Shinpō, phụ trách phụ trương tranh Jiji Manga và năm 1905 lập tạp chí biếm họa màu Tokyo Puck.',
    sections: [
      { h: 'Từ ponchi-e sang manga', p: 'Rakuten dùng nhất quán từ "manga" cho tranh biếm họa và truyện tranh trên báo, thay cho "ponchi-e". Cách gọi này dần phổ biến trong đầu thế kỷ 20.' },
      { h: 'Ngôi nhà thành bảo tàng', p: 'Nơi ông sống những năm cuối đời ở Ōmiya nay là Saitama City Cartoon Art Museum (Bảo tàng Manga thành phố Saitama), mở cửa năm 1966.' }
    ],
    facts: [['Sinh', '1876, Ōmiya'], ['Mất', '1955'], ['Ấn phẩm', 'Jiji Manga, Tokyo Puck'], ['Bảo tàng', 'Saitama City Cartoon Art Museum']],
    sources: ['Saitama City Cartoon Art Museum (website chính thức của thành phố Saitama)', 'Paul Gravett, Manga: Sixty Years of Japanese Comics, 2004'],
    related: ['ponchi-e', 'hasegawa-machiko', 'tezuka-osamu']
  },
  {
    id: 'hasegawa-machiko', no: '007', cat: 'tac-gia',
    title: 'Hasegawa Machiko', jp: '長谷川町子', period: '1920-1992',
    excerpt: 'Một trong những nữ mangaka chuyên nghiệp đầu tiên, tác giả bộ truyện bốn khung Sazae-san.',
    img: null,
    intro: 'Hasegawa Machiko sinh năm 1920 tại tỉnh Saga, học vẽ với họa sĩ Tagawa Suihō từ khi còn là học sinh. Bà được biết tới nhiều nhất qua Sazae-san, truyện bốn khung về đời sống một gia đình bình thường sau chiến tranh.',
    sections: [
      { h: 'Truyện bốn khung trên báo', p: 'Sazae-san đăng trên báo từ năm 1946 tới năm 1974, theo nhịp đời sống thường ngày của độc giả: giá cả, thời tiết, chuyện hàng xóm.' },
      { h: 'Ghi nhận', p: 'Năm 1992, sau khi bà mất, chính phủ Nhật trao Giải thưởng Danh dự Nhân dân (Kokumin Eiyoshō). Bộ sưu tập nghệ thuật của bà được trưng bày tại Bảo tàng Nghệ thuật Hasegawa Machiko ở Setagaya, Tokyo.' }
    ],
    facts: [['Sinh', '1920, tỉnh Saga'], ['Mất', '1992'], ['Tác phẩm chính', 'Sazae-san'], ['Bảo tàng', 'Hasegawa Machiko Art Museum, Setagaya']],
    sources: ['Hasegawa Machiko Art Museum (website chính thức)', 'Frederik L. Schodt, Manga! Manga! The World of Japanese Comics, 1983'],
    related: ['sazae-san', 'kitazawa-rakuten', 'tezuka-osamu']
  },
  {
    id: 'tezuka-osamu', no: '008', cat: 'tac-gia',
    title: 'Tezuka Osamu', jp: '手塚治虫', period: '1928-1989',
    excerpt: 'Tác giả có ảnh hưởng lớn nhất tới manga hậu chiến, từ truyện dài nhiều trang tới cách dàn khung như phim.',
    img: null,
    intro: 'Tezuka Osamu sinh năm 1928 tại Toyonaka, Osaka, lớn lên ở Takarazuka, Hyōgo. Ông ra mắt năm 1946 với truyện bốn khung Ma-chan no Nikkichō trên báo thiếu nhi, đồng thời theo học và lấy bằng y khoa.',
    sections: [
      { h: 'Truyện dài và ngôn ngữ điện ảnh', p: 'Năm 1947, Shin Takarajima (Đảo châu báu mới) mở ra dạng truyện dài in thành sách, với khung hình gợi chuyển động máy quay. Tetsuwan Atom đăng trên tạp chí Shōnen từ 1952 tới 1968.' },
      { h: 'Nhà sản xuất hoạt hình', p: 'Ông thành lập xưởng Mushi Production. Loạt phim hoạt hình truyền hình Tetsuwan Atom phát sóng từ năm 1963 đặt nền cho mô hình sản xuất anime truyền hình.' },
      { h: 'Những năm ở Tokiwa-sō', p: 'Đầu thập niên 1950, Tezuka sống tại căn hộ Tokiwa-sō ở Toshima, Tokyo. Sau khi ông chuyển đi, nhiều họa sĩ trẻ tới ở và trở thành thế hệ mangaka tiếp theo.' }
    ],
    facts: [['Sinh', '3/11/1928, Toyonaka'], ['Mất', '9/2/1989'], ['Ra mắt', '1946'], ['Bảo tàng', 'Tezuka Osamu Manga Museum, Takarazuka']],
    sources: ['Tezuka Productions, website chính thức (tezukaosamu.net)', 'Helen McCarthy, The Art of Osamu Tezuka: God of Manga, 2009', 'Takarazuka City Osamu Tezuka Manga Museum'],
    related: ['shin-takarajima', 'tezuka-museum', 'tokiwa-so']
  },
  {
    id: 'shin-takarajima', no: '009', cat: 'tac-pham',
    title: 'Shin Takarajima', jp: '新宝島', period: '1947',
    excerpt: 'Truyện dài in thành sách do Tezuka Osamu vẽ theo ý tưởng của Sakai Shichima, thường được xem là điểm khởi đầu của manga hậu chiến.',
    img: null,
    intro: 'Shin Takarajima (Đảo châu báu mới) phát hành đầu năm 1947 tại Osaka, dựa trên ý tưởng và bản thảo của Sakai Shichima, do Tezuka Osamu vẽ. Truyện kể hành trình đi tìm kho báu của cậu bé Pete.',
    sections: [
      { h: 'Một trang mở đầu nổi tiếng', p: 'Những trang đầu tả chiếc xe lao trên đường qua nhiều khung liên tiếp, gợi cảm giác chuyển động như phim. Nhiều mangaka thế hệ sau kể lại rằng họ chịu ảnh hưởng từ cách dàn trang này.' },
      { h: 'Akahon và thị trường sách tranh', p: 'Truyện thuộc dòng akahon (sách bìa đỏ), sách tranh giá rẻ in ở vùng Osaka sau chiến tranh, bán qua các quầy sách nhỏ thay vì hệ thống nhà sách lớn.' }
    ],
    facts: [['Năm', '1947'], ['Vẽ', 'Tezuka Osamu'], ['Ý tưởng', 'Sakai Shichima'], ['Dạng', 'Akahon, in thành sách']],
    sources: ['Tezuka Productions, website chính thức (tezukaosamu.net)', 'Helen McCarthy, The Art of Osamu Tezuka: God of Manga, 2009'],
    related: ['tezuka-osamu', 'tokiwa-so', 'tap-chi-tuan-1959']
  },
  {
    id: 'sazae-san', no: '010', cat: 'tac-pham',
    title: 'Sazae-san', jp: 'サザエさん', period: '1946-1974',
    excerpt: 'Truyện bốn khung về một gia đình Tokyo, đăng báo gần ba thập kỷ và trở thành tấm gương đời sống thường ngày Nhật Bản.',
    img: null,
    intro: 'Sazae-san của Hasegawa Machiko ra mắt năm 1946 trên báo địa phương Fukunichi Shimbun ở Fukuoka, sau đó chuyển sang báo Asahi Shimbun và đăng tới năm 1974.',
    sections: [
      { h: 'Bốn khung, một ngày', p: 'Mỗi kỳ chỉ có bốn khung: giới thiệu, phát triển, chuyển ý, kết. Khuôn khổ này (yonkoma) buộc tác giả nén cả câu chuyện vào vài giây đọc.' },
      { h: 'Tư liệu đời sống', p: 'Vì đăng đều đặn suốt thời kỳ tái thiết và tăng trưởng, các tập Sazae-san thường được trích dẫn như nguồn tham khảo về sinh hoạt gia đình Nhật Bản thời Shōwa.' }
    ],
    facts: [['Tác giả', 'Hasegawa Machiko'], ['Đăng báo', '1946-1974'], ['Thể loại', 'Yonkoma (bốn khung)'], ['Báo', 'Fukunichi Shimbun, Asahi Shimbun']],
    sources: ['Hasegawa Machiko Art Museum (website chính thức)', 'Frederik L. Schodt, Manga! Manga! The World of Japanese Comics, 1983'],
    related: ['hasegawa-machiko', 'kitazawa-rakuten', 'tap-chi-tuan-1959']
  },
  {
    id: 'gekiga', no: '011', cat: 'lich-su',
    title: 'Gekiga, tranh kịch', jp: '劇画', period: '1957',
    excerpt: 'Tên gọi do Tatsumi Yoshihiro đặt cho dòng truyện hiện thực, u tối, viết cho người đọc trưởng thành.',
    img: null,
    intro: 'Năm 1957, Tatsumi Yoshihiro bắt đầu dùng từ gekiga (tranh kịch) để phân biệt truyện của mình với manga thiếu nhi. Năm 1959, nhóm Gekiga Kōbō được thành lập với các tác giả cùng chí hướng.',
    sections: [
      { h: 'Thị trường sách cho thuê', p: 'Gekiga lớn lên trong mạng lưới kashihon-ya (tiệm cho thuê sách) ở vùng Kansai, nơi độc giả là thanh niên lao động muốn đọc truyện hình sự, bi kịch.' },
      { h: 'Dấu vết để lại', p: 'Phong cách hiện thực, khung hình lạnh và chủ đề người lớn của gekiga ảnh hưởng tới các tạp chí seinen ra đời cuối thập niên 1960.' }
    ],
    facts: [['Năm', '1957'], ['Người đặt tên', 'Tatsumi Yoshihiro (1935-2015)'], ['Nhóm', 'Gekiga Kōbō, 1959'], ['Kênh phát hành', 'Kashihon (sách cho thuê)']],
    sources: ['Tatsumi Yoshihiro, A Drifting Life (Gekiga Hyōryū), bản tiếng Anh 2009', 'Paul Gravett, Manga: Sixty Years of Japanese Comics, 2004'],
    related: ['tap-chi-tuan-1959', 'shin-takarajima', 'tezuka-osamu']
  },
  {
    id: 'tap-chi-tuan-1959', no: '012', cat: 'lich-su',
    title: 'Năm 1959 và tạp chí manga tuần', jp: '週刊少年誌', period: '1959',
    excerpt: 'Shūkan Shōnen Magazine và Shūkan Shōnen Sunday cùng ra mắt vào tháng 3/1959, mở đầu nhịp xuất bản hằng tuần.',
    img: null,
    intro: 'Tháng 3/1959, Kodansha phát hành Shūkan Shōnen Magazine và Shogakukan phát hành Shūkan Shōnen Sunday. Đây là hai tạp chí thiếu niên ra hằng tuần đầu tiên, thay cho nhịp hằng tháng trước đó.',
    sections: [
      { h: 'Nhịp tuần thay đổi cách vẽ', p: 'Hạn nộp bài hằng tuần buộc tác giả làm việc với trợ lý, chia nhỏ công đoạn và phát triển truyện dài nhiều kỳ. Mô hình xưởng vẽ này còn tồn tại tới ngày nay.' },
      { h: 'Cuộc đua sau đó', p: 'Năm 1968, Shueisha ra mắt Shōnen Jump (ban đầu phát hành hai tuần một kỳ, chuyển sang hằng tuần từ năm 1969), làm thị trường tạp chí tuần càng cạnh tranh.' }
    ],
    facts: [['Thời điểm', 'Tháng 3/1959'], ['Nhà xuất bản', 'Kodansha, Shogakukan'], ['Đối tượng', 'Độc giả thiếu niên'], ['Hệ quả', 'Mô hình xưởng vẽ có trợ lý']],
    sources: ['Kodansha, lịch sử công ty (website chính thức)', 'Shogakukan, lịch sử công ty (website chính thức)', 'Paul Gravett, Manga: Sixty Years of Japanese Comics, 2004'],
    related: ['gekiga', 'name-phan-canh', 'di-muc-va-tong']
  },
  {
    id: 'name-phan-canh', no: '013', cat: 'nghe-thuat',
    title: 'Name, bản phân cảnh', jp: 'ネーム', period: 'Công đoạn 1',
    excerpt: 'Bản nháp thô quyết định số trang, cách chia khung, vị trí lời thoại trước khi vẽ thật.',
    img: null,
    intro: 'Trong xưởng manga, "name" là bản phác thảo sơ bộ của cả chương: chia khung, bố trí nhân vật, ghi lời thoại. Biên tập viên thường duyệt name trước khi tác giả bắt đầu vẽ bản chính.',
    sections: [
      { h: 'Nhịp đọc nằm ở đây', p: 'Kích thước khung, chỗ lật trang và khoảng trống quyết định tốc độ đọc. Một cảnh quan trọng thường được đặt ở trang bên phải để bất ngờ hiện ra khi người đọc lật trang (truyện Nhật đọc từ phải sang trái).' },
      { h: 'Làm việc với biên tập viên', p: 'Name là nơi tác giả và biên tập viên trao đổi nhiều nhất: cắt cảnh thừa, đổi thứ tự, làm rõ lời thoại. Bản vẽ có thể rất sơ sài, chỉ cần đọc được.' }
    ],
    facts: [['Tên gọi', 'Name (ネーム)'], ['Đầu vào', 'Kịch bản, ghi chú'], ['Đầu ra', 'Bố cục trang, lời thoại'], ['Người duyệt', 'Biên tập viên']],
    sources: ['Kyoto International Manga Museum: tư liệu triển lãm về quy trình sáng tác', 'Tài liệu cần BA bổ sung trước khi xuất bản'],
    related: ['di-muc-va-tong', 'tap-chi-tuan-1959', 'kyoto-manga-museum']
  },
  {
    id: 'di-muc-va-tong', no: '014', cat: 'nghe-thuat',
    title: 'Đi mực, tông và beta', jp: 'ペン入れ', period: 'Công đoạn 2-4',
    excerpt: 'Từ nét chì tới trang in: ngòi G-pen, ngòi tròn, mảng tô đen và những tấm screentone chấm lưới.',
    img: null,
    intro: 'Sau name, tác giả phác chì (shitagaki) lên giấy bản thảo, rồi đi mực (pen-ire) bằng bút chấm ngòi. Trợ lý vẽ nền, tô mảng đen (beta) và dán tông (screentone) để tạo sắc độ xám.',
    sections: [
      { h: 'Ngòi bút', p: 'Ngòi G-pen cho nét dày mỏng rõ theo lực tay, ngòi tròn (maru-pen) cho nét mảnh, đều, hay dùng cho tóc và chi tiết. Mỗi tác giả có thói quen chọn ngòi riêng.' },
      { h: 'Screentone', p: 'Tông là tấm phim in sẵn chấm lưới hoặc hoa văn, cắt theo hình và dán lên bản thảo. Ngày nay nhiều xưởng làm công đoạn này trên máy tính, nhưng mắt người đọc vẫn nhận ra lưới chấm quen thuộc.' },
      { h: 'Hoàn thiện', p: 'Mực trắng dùng sửa nét và tạo điểm sáng; lời thoại được sắp chữ và dán vào bóng thoại trước khi bản thảo được chụp, in.' }
    ],
    facts: [['Dụng cụ', 'G-pen, maru-pen, mực đen'], ['Sắc độ', 'Screentone, beta'], ['Sửa', 'Mực trắng'], ['Ngày nay', 'Một phần làm trên máy tính']],
    sources: ['Kyoto International Manga Museum: tư liệu triển lãm về quy trình sáng tác', 'Tài liệu cần BA bổ sung trước khi xuất bản'],
    related: ['name-phan-canh', 'tokiwa-so', 'tap-chi-tuan-1959']
  },
  {
    id: 'kyoto-manga-museum', no: '015', cat: 'dia-diem',
    title: 'Kyoto International Manga Museum', jp: '京都国際マンガミュージアム', period: 'Mở cửa 2006',
    excerpt: 'Bảo tàng kiêm thư viện manga đặt trong ngôi trường tiểu học cũ ở trung tâm Kyoto.',
    img: null, city: 'Kyoto',
    intro: 'Kyoto International Manga Museum mở cửa tháng 11/2006, là dự án chung của thành phố Kyoto và Đại học Kyoto Seika. Bảo tàng dùng lại tòa nhà của trường tiểu học Tatsuike cũ, gần giao lộ Karasuma-Oike.',
    sections: [
      { h: 'Bức tường manga', p: 'Phần lớn không gian là kệ sách mở, khách có thể lấy truyện đọc ngay trong bảo tàng hoặc ra bãi cỏ trước sân trường cũ.' },
      { h: 'Nghiên cứu và triển lãm', p: 'Ngoài thư viện, bảo tàng tổ chức triển lãm chuyên đề và lưu trữ tư liệu phục vụ nghiên cứu manga.' }
    ],
    facts: [['Thành phố', 'Kyoto'], ['Mở cửa', '2006'], ['Tòa nhà', 'Trường tiểu học Tatsuike cũ'], ['Vận hành', 'TP. Kyoto & ĐH Kyoto Seika']],
    sources: ['Kyoto International Manga Museum (kyotomm.jp)'],
    related: ['tezuka-museum', 'ishinomori-museum', 'cho-ju-giga']
  },
  {
    id: 'tezuka-museum', no: '016', cat: 'dia-diem',
    title: 'Tezuka Osamu Manga Museum', jp: '宝塚市立手塚治虫記念館', period: 'Mở cửa 1994',
    excerpt: 'Bảo tàng của thành phố Takarazuka, nơi Tezuka Osamu sống từ thuở nhỏ tới tuổi thanh niên.',
    img: null, city: 'Takarazuka, Hyōgo',
    intro: 'Bảo tàng do thành phố Takarazuka mở năm 1994, năm năm sau khi Tezuka Osamu mất. Takarazuka là nơi ông sống từ khoảng 5 tuổi tới khoảng 24 tuổi.',
    sections: [
      { h: 'Trưng bày', p: 'Bảo tàng giới thiệu bản thảo, đồ dùng cá nhân và các triển lãm thay đổi theo chủ đề về tác phẩm của Tezuka, cùng một khu xưởng nhỏ để khách thử làm hoạt hình.' },
      { h: 'Đi lại', p: 'Bảo tàng nằm gần ga Takarazuka, có thể đi kết hợp với khu nhà hát Takarazuka Revue mà Tezuka thường lui tới khi còn nhỏ.' }
    ],
    facts: [['Thành phố', 'Takarazuka, Hyōgo'], ['Mở cửa', '1994'], ['Đơn vị quản lý', 'Thành phố Takarazuka'], ['Liên quan', 'Tezuka Osamu']],
    sources: ['Takarazuka City Osamu Tezuka Manga Museum (website chính thức)', 'Tezuka Productions (tezukaosamu.net)'],
    related: ['tezuka-osamu', 'tokiwa-so', 'kyoto-manga-museum']
  },
  {
    id: 'tokiwa-so', no: '017', cat: 'dia-diem',
    title: 'Tokiwa-sō Manga Museum', jp: 'トキワ荘マンガミュージアム', period: 'Mở cửa 2020',
    excerpt: 'Bản dựng lại căn hộ gỗ ở Toshima, nơi Tezuka Osamu và nhiều mangaka trẻ từng sống những năm 1950.',
    img: null, city: 'Toshima, Tokyo',
    intro: 'Tokiwa-sō là căn hộ gỗ hai tầng ở quận Toshima, Tokyo. Tezuka Osamu sống ở đây đầu thập niên 1950, sau đó các họa sĩ trẻ như Fujiko Fujio, Ishinomori Shōtarō, Akatsuka Fujio tới ở. Tòa nhà gốc bị phá năm 1982.',
    sections: [
      { h: 'Bản dựng lại', p: 'Quận Toshima xây dựng lại Tokiwa-sō theo tư liệu và lời kể, mở cửa thành bảo tàng vào tháng 7/2020 trong công viên Minami-Nagasaki Hanasaki.' },
      { h: 'Một con phố, một thế hệ', p: 'Khu phố xung quanh có các biển chỉ dẫn và điểm dừng kể chuyện về các mangaka từng sống tại đây, phù hợp đi bộ trong nửa ngày.' }
    ],
    facts: [['Khu vực', 'Toshima, Tokyo'], ['Bản gốc', 'Bị phá năm 1982'], ['Mở cửa', 'Tháng 7/2020'], ['Liên quan', 'Tezuka, Fujiko Fujio, Ishinomori']],
    sources: ['Toshima City Tokiwasō Manga Museum (website chính thức)'],
    related: ['tezuka-osamu', 'ishinomori-museum', 'di-muc-va-tong']
  },
  {
    id: 'ishinomori-museum', no: '018', cat: 'dia-diem',
    title: 'Ishinomori Manga Museum', jp: '石ノ森萬画館', period: 'Mở cửa 2001',
    excerpt: 'Tòa nhà hình vỏ trứng trên bãi sông Kitakami ở Ishinomaki, dành cho tác phẩm của Ishinomori Shōtarō.',
    img: 'assets/img/hoso-ishinomaki-manga-museum.jpg', imgAlt: 'Tòa nhà Ishinomori Manga Museum hình vỏ trứng màu trắng bên bờ sông Kitakami, trời nhiều mây',
    imgCaption: 'Ishinomori Manga Museum nhìn từ bờ sông Kitakami, Ishinomaki.',
    city: 'Ishinomaki, Miyagi',
    intro: 'Ishinomori Manga Museum (Ishinomori Mangattan Museum) mở cửa năm 2001 tại Ishinomaki, tỉnh Miyagi, quê hương của mangaka Ishinomori Shōtarō (1938-1998). Tòa nhà nằm trên một bãi giữa sông Kitakami.',
    sections: [
      { h: 'Sau trận sóng thần 2011', p: 'Bảo tàng bị hư hại nặng trong thảm họa động đất và sóng thần tháng 3/2011, sau đó được sửa chữa và mở cửa trở lại vào năm 2012.' },
      { h: 'Thành phố manga', p: 'Từ ga Ishinomaki tới bảo tàng có nhiều tượng nhân vật dọc đường, biến cả tuyến đi bộ thành một phần của trải nghiệm.' }
    ],
    facts: [['Thành phố', 'Ishinomaki, Miyagi'], ['Mở cửa', '2001'], ['Mở lại', '2012'], ['Liên quan', 'Ishinomori Shōtarō']],
    sources: ['Ishinomori Manga Museum (mangattan.jp)'],
    related: ['tokiwa-so', 'kyoto-manga-museum', 'tezuka-museum']
  }
];

window.MC_find = function (id) {
  for (var i = 0; i < window.MC_RECORDS.length; i++) if (window.MC_RECORDS[i].id === id) return window.MC_RECORDS[i];
  return null;
};
