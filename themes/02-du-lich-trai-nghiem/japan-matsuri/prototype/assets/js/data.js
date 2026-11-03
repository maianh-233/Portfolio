/* JAPAN MATSURI — dữ liệu mẫu lễ hội.
 * Thêm lễ hội mới: thêm một object vào MATSURI.festivals (slug duy nhất, ảnh trong assets/img/).
 * Thời gian luôn là "thời gian thường tổ chức" — cần kiểm tra lịch chính thức theo từng năm trước khi xuất bản.
 * season: xuan | ha | thu | dong      types: truyen-thong | dieu-hanh | anh-sang | phao-hoa | tuyet | hoa
 */
window.MATSURI = {
  seasons: {
    xuan: 'Xuân',
    ha: 'Hạ',
    thu: 'Thu',
    dong: 'Đông'
  },
  types: {
    'truyen-thong': 'Lễ hội truyền thống',
    'dieu-hanh': 'Diễu hành',
    'anh-sang': 'Lễ hội ánh sáng',
    'phao-hoa': 'Pháo hoa',
    'tuyet': 'Lễ hội tuyết',
    'hoa': 'Lễ hội hoa'
  },
  festivals: [
    {
      slug: 'gion-matsuri',
      name: 'Gion Matsuri',
      location: 'Kyoto',
      region: 'Kyoto',
      season: 'ha',
      types: ['truyen-thong', 'dieu-hanh'],
      time: 'Suốt tháng 7; hai ngày rước xe chính thường vào 17/7 và 24/7',
      short: 'Lễ hội mùa hè của Đền Yasaka, nổi tiếng với những cỗ xe Yamahoko phủ thảm dệt rước qua trung tâm Kyoto.',
      img: 'assets/img/le-hoi-gion-matsuri.jpg',
      alt: 'Những người đàn ông mặc áo trắng đội nón kéo cỗ xe rước Gion Matsuri qua phố Kyoto',
      story: [
        'Gion Matsuri gắn với Đền Yasaka ở khu Gion. Theo ghi chép truyền thống, lễ hội bắt nguồn từ nghi lễ cầu xua dịch bệnh vào thế kỷ thứ 9, rồi dần trở thành lễ hội của cư dân các khu phố trung tâm Kyoto.',
        'Mỗi khu phố tự chăm lo cỗ xe của mình: dựng xe bằng dây buộc truyền thống, treo thảm dệt quý, tập nhạc Gion-bayashi suốt nhiều tuần. Lễ hội vì vậy là câu chuyện của cả cộng đồng chứ không chỉ một ngày diễu hành.',
        'Nghi lễ rước xe Yamahoko của Kyoto được UNESCO ghi danh là di sản văn hóa phi vật thể, cho thấy giá trị của nghề thủ công và tinh thần gìn giữ qua nhiều thế hệ.'
      ],
      highlights: [
        { t: 'Rước xe Yamahoko', d: 'Những cỗ xe cao nhiều tầng được kéo bằng tay qua các đại lộ, điểm nhấn là khoảnh khắc xoay xe ở góc phố.' },
        { t: 'Các đêm Yoiyama', d: 'Những tối trước ngày rước, phố quanh Shijō thành đường đi bộ, đèn lồng sáng trên các cỗ xe.' },
        { t: 'Nhạc Gion-bayashi', d: 'Tiếng sáo, trống và chiêng nhỏ vang từ trên xe, quen thuộc với người Kyoto mỗi mùa hè.' },
        { t: 'Thảm dệt và đồ trang trí', d: 'Nhiều cỗ xe phủ thảm dệt và tranh thêu được gìn giữ cẩn thận như những bảo vật di động.' }
      ],
      experiences: [
        { kind: 'Quan sát', t: 'Đứng dọc tuyến rước buổi sáng', d: 'Chọn chỗ sớm để xem các cỗ xe đi qua và màn xoay xe ở giao lộ.' },
        { kind: 'Tham gia', t: 'Dạo phố Yoiyama trong yukata', d: 'Đi bộ giữa các cỗ xe thắp đèn, thưởng thức món ăn ở quầy hàng.' },
        { kind: 'Tham gia', t: 'Xin bùa chimaki', d: 'Một số khu phố trao bùa chimaki cầu bình an; hãy hỏi trực tiếp tại điểm đặt xe.' }
      ],
      trip: {
        place: 'Trung tâm Kyoto, quanh khu Shijō và Karasuma, cùng Đền Yasaka ở Gion.',
        move: 'Đi tàu điện hoặc tàu ngầm tới khu Shijō rồi đi bộ; nhiều đoạn phố cấm xe trong những ngày cao điểm.',
        when: 'Tháng 7, đặc biệt các đêm Yoiyama và ngày rước. Thời tiết nóng ẩm, nên đi buổi sáng sớm hoặc tối.',
        notes: 'Rất đông người; mang nước, quạt tay và giày thoải mái. Tôn trọng khu vực đặt xe và không leo lên xe khi chưa được phép.'
      }
    },
    {
      slug: 'aomori-nebuta',
      name: 'Aomori Nebuta Matsuri',
      location: 'Thành phố Aomori, Aomori',
      region: 'Aomori',
      season: 'ha',
      types: ['dieu-hanh', 'anh-sang', 'truyen-thong'],
      time: 'Đầu tháng 8, thường từ 2/8 đến 7/8',
      short: 'Những cỗ xe đèn lồng khổng lồ hình võ tướng và thần thoại rực sáng trong đêm, cùng tiếng hô "Rassera" của vũ công haneto.',
      img: 'assets/img/le-hoi-aomori-nebuta.jpg',
      alt: 'Cỗ xe đèn lồng Nebuta hình võ tướng cầm giáo, sáng rực với màu cam và xanh',
      story: [
        'Nebuta là những cỗ xe đèn lồng làm từ khung và giấy được tô màu, mô tả võ tướng, thần thoại và các tích truyện. Về nguồn gốc có nhiều giả thuyết; phổ biến nhất là gắn với phong tục tiễn cơn buồn ngủ và những điều xấu theo dòng nước vào cuối hè.',
        'Mỗi cỗ xe là thành quả nhiều tháng làm việc của các nghệ nhân Nebuta cùng cộng đồng, doanh nghiệp và nhóm tình nguyện của thành phố.',
        'Khi đèn được thắp, cỗ xe như sống dậy: ánh sáng xuyên qua lớp giấy làm nổi bật từng nét mặt, từng nếp áo của nhân vật.'
      ],
      highlights: [
        { t: 'Cỗ xe đèn lồng khổng lồ', d: 'Những tác phẩm cao vài mét được kéo và xoay ngay giữa đám đông.' },
        { t: 'Vũ công haneto', d: 'Hàng trăm người mặc trang phục haneto nhảy theo nhịp và hô vang "Rassera".' },
        { t: 'Trống taiko và sáo', d: 'Đội nhạc đi theo từng xe giữ nhịp cho cả đoàn rước.' },
        { t: 'Bảo tàng Nebuta', d: 'Ngoài mùa lễ hội vẫn có thể ngắm xe Nebuta tại nhà trưng bày ở cảng Aomori.' }
      ],
      experiences: [
        { kind: 'Quan sát', t: 'Xem đoàn rước buổi tối', d: 'Ngồi dọc tuyến đường ở trung tâm thành phố để thấy xe đi qua thật gần.' },
        { kind: 'Tham gia', t: 'Nhảy cùng đoàn haneto', d: 'Du khách có thể tham gia nếu mặc đúng trang phục haneto; một số cửa hàng cho thuê trang phục.' },
        { kind: 'Quan sát', t: 'Ghé nơi làm xe', d: 'Tìm hiểu cách dựng khung và dán giấy tại khu trưng bày, nếu lịch mở cửa cho phép.' }
      ],
      trip: {
        place: 'Trung tâm thành phố Aomori, phía bắc đảo Honshu.',
        move: 'Đi tàu Shinkansen tới ga Shin-Aomori rồi đổi tàu địa phương vào trung tâm; một số du khách bay tới sân bay Aomori.',
        when: 'Đầu tháng 8. Buổi tối là thời điểm rước xe chính.',
        notes: 'Chỗ ở trong thành phố thường kín sớm vào mùa lễ hội; có thể ở các thành phố lân cận và đi tàu vào.'
      }
    },
    {
      slug: 'awa-odori',
      name: 'Awa Odori',
      location: 'Thành phố Tokushima, Tokushima',
      region: 'Tokushima',
      season: 'ha',
      types: ['truyen-thong', 'dieu-hanh'],
      time: 'Dịp Obon, thường từ 12/8 đến 15/8',
      short: 'Điệu múa dịp Obon của Tokushima, nơi từng nhóm "ren" nhảy theo tiếng đàn shamisen và trống qua khắp phố.',
      img: 'assets/img/le-hoi-awa-odori.jpg',
      alt: 'Các vũ công Awa Odori đội nón rơm và mặc yukata đứng trên sân khấu',
      story: [
        'Awa Odori là điệu múa gắn với dịp Obon, thời điểm người Nhật tưởng nhớ tổ tiên. Điệu múa có lịch sử hàng trăm năm ở vùng Awa, tên cũ của Tokushima.',
        'Các vũ công nhảy theo nhóm gọi là "ren". Nữ thường đội nón rơm hình bán nguyệt, bước nhỏ và uyển chuyển; nam bước thấp, động tác phóng khoáng hơn.',
        'Câu hát quen thuộc của lễ hội có ý: người nhảy cũng ngốc, người xem cũng ngốc, đã cùng ngốc thì sao không nhảy. Đó là lời mời ai cũng có thể hòa vào cuộc vui.'
      ],
      highlights: [
        { t: 'Các nhóm ren', d: 'Mỗi ren có trang phục và phong cách riêng, nối tiếp nhau đi qua các khán đài.' },
        { t: 'Nhạc narimono', d: 'Shamisen, trống, sáo và chuông tạo nhịp hai bước đặc trưng.' },
        { t: 'Nón rơm và yukata', d: 'Hình ảnh nhận diện của Awa Odori, đẹp nhất khi nhìn cả đoàn chuyển động.' },
        { t: 'Phố đêm Tokushima', d: 'Ngoài khán đài chính, nhiều góc phố có nhóm nhảy tự do đến khuya.' }
      ],
      experiences: [
        { kind: 'Quan sát', t: 'Ngồi khán đài có vé', d: 'Xem các ren nổi tiếng biểu diễn ở các khán đài chính.' },
        { kind: 'Tham gia', t: 'Nhảy cùng nhóm niwaka-ren', d: 'Một số nhóm dành cho người mới hướng dẫn vài động tác cơ bản rồi cùng xuống phố.' },
        { kind: 'Quan sát', t: 'Bảo tàng Awa Odori', d: 'Ngoài mùa lễ hội có thể xem biểu diễn ngắn tại hội quán Awa Odori.' }
      ],
      trip: {
        place: 'Trung tâm thành phố Tokushima, đảo Shikoku.',
        move: 'Đi xe buýt cao tốc từ vùng Kansai qua cầu, hoặc đi tàu tới ga Tokushima rồi đi bộ tới các khán đài.',
        when: 'Giữa tháng 8, dịp Obon. Buổi tối là lúc sôi động nhất.',
        notes: 'Vé khán đài và chỗ ở nên đặt sớm. Hỏi ý kiến trước khi chụp ảnh cận cảnh người biểu diễn.'
      }
    },
    {
      slug: 'sapporo-snow-festival',
      name: 'Sapporo Snow Festival',
      location: 'Sapporo, Hokkaido',
      region: 'Hokkaido',
      season: 'dong',
      types: ['tuyet', 'anh-sang'],
      time: 'Đầu tháng 2, kéo dài khoảng một tuần',
      short: 'Hàng trăm tượng tuyết và băng trải dọc Công viên Odori và khu Susukino, lung linh đèn chiếu khi trời tối.',
      img: 'assets/img/le-hoi-sapporo-snow.jpg',
      alt: 'Tượng tuyết lớn tại Công viên Odori, Sapporo lúc chạng vạng',
      story: [
        'Lễ hội tuyết Sapporo bắt đầu vào năm 1950, khi học sinh địa phương dựng vài tượng tuyết ở Công viên Odori. Từ đó lễ hội lớn dần thành sự kiện mùa đông tiêu biểu của Hokkaido.',
        'Các đội từ quân đội, doanh nghiệp, trường học và người dân cùng tham gia dựng tượng, từ công trình kiến trúc lớn đến những tượng nhỏ ngộ nghĩnh.',
        'Lễ hội cho thấy cách người Hokkaido biến mùa đông dài và lạnh thành dịp gặp gỡ, sáng tạo và vui chơi.'
      ],
      highlights: [
        { t: 'Tượng tuyết Công viên Odori', d: 'Những tượng tuyết lớn trải dài theo trục công viên giữa thành phố.' },
        { t: 'Tượng băng Susukino', d: 'Khu phố đêm trưng bày tượng băng trong suốt, đẹp nhất khi lên đèn.' },
        { t: 'Chiếu sáng buổi tối', d: 'Nhiều tượng được chiếu đèn và trình chiếu hình ảnh sau khi trời tối.' },
        { t: 'Ẩm thực mùa đông', d: 'Các quầy hàng phục vụ món nóng đặc sản Hokkaido dọc lối đi.' }
      ],
      experiences: [
        { kind: 'Quan sát', t: 'Ngắm tượng tuyết ban ngày và ban đêm', d: 'Đi hai lần để thấy hai vẻ khác nhau của cùng một tượng.' },
        { kind: 'Tham gia', t: 'Trò chơi tuyết cho gia đình', d: 'Một số khu vực có cầu trượt tuyết và hoạt động cho trẻ em.' },
        { kind: 'Tham gia', t: 'Thưởng thức món nóng', d: 'Thử các món nóng ở quầy hàng để giữ ấm giữa trời tuyết.' }
      ],
      trip: {
        place: 'Trung tâm Sapporo: Công viên Odori, khu Susukino và các điểm phụ theo từng năm.',
        move: 'Bay tới sân bay New Chitose rồi đi tàu vào ga Sapporo; các khu lễ hội nối với nhau bằng tàu điện ngầm.',
        when: 'Đầu tháng 2, khi Sapporo lạnh sâu dưới 0°C.',
        notes: 'Mặc nhiều lớp, mang giày chống trơn. Đường đi bộ có thể đóng băng vào buổi tối.'
      }
    },
    {
      slug: 'hirosaki-cherry-blossom',
      name: 'Hirosaki Cherry Blossom Festival',
      location: 'Hirosaki, Aomori',
      region: 'Aomori',
      season: 'xuan',
      types: ['hoa', 'anh-sang'],
      time: 'Cuối tháng 4 đến đầu tháng 5, tùy thời điểm hoa nở',
      short: 'Hàng nghìn cây anh đào quanh lâu đài Hirosaki và hào nước, đẹp nhất khi cánh hoa phủ kín mặt hào.',
      img: 'assets/img/le-hoi-hirosaki-sakura.jpg',
      alt: 'Cây anh đào rủ nở hồng trong công viên Hirosaki dưới trời xanh',
      story: [
        'Lễ hội hoa anh đào Hirosaki diễn ra trong Công viên Hirosaki, nơi có lâu đài Hirosaki cùng hệ thống hào nước và hàng nghìn cây anh đào.',
        'Người dân và những người làm vườn ở đây nổi tiếng với cách chăm sóc cây anh đào tỉ mỉ, giúp cây cho hoa dày và khỏe qua nhiều năm.',
        'Ngắm hoa (hanami) ở Nhật Bản là dịp gặp gỡ: gia đình, bạn bè trải bạt dưới tán hoa, cùng ăn uống và cảm nhận mùa xuân ngắn ngủi.'
      ],
      highlights: [
        { t: 'Lâu đài giữa rừng hoa', d: 'Tháp lâu đài nhìn qua tán anh đào là khung cảnh đặc trưng của Hirosaki.' },
        { t: 'Thảm hoa trên mặt hào', d: 'Khi hoa rụng, cánh hoa phủ kín mặt nước hào, người Nhật gọi là "hanaikada".' },
        { t: 'Chiếu sáng ban đêm', d: 'Hàng anh đào được thắp đèn, in bóng xuống mặt hào.' },
        { t: 'Thuyền trên hào', d: 'Một số năm có dịch vụ chèo thuyền dưới hàng hoa; hãy kiểm tra trước.' }
      ],
      experiences: [
        { kind: 'Tham gia', t: 'Hanami dưới tán hoa', d: 'Mang đồ ăn nhẹ, chọn chỗ ở khu cho phép và giữ vệ sinh chung.' },
        { kind: 'Quan sát', t: 'Ngắm hoa về đêm', d: 'Đi dọc hào nước khi đèn bật để thấy hoa phản chiếu.' },
        { kind: 'Tham gia', t: 'Thử món ở quầy hàng', d: 'Các quầy hàng trong công viên phục vụ món ăn nhẹ mùa xuân.' }
      ],
      trip: {
        place: 'Công viên Hirosaki, thành phố Hirosaki, tỉnh Aomori.',
        move: 'Đi tàu tới ga Hirosaki rồi đi xe buýt hoặc đi bộ tới công viên.',
        when: 'Cuối tháng 4 đến đầu tháng 5. Thời điểm hoa nở thay đổi theo thời tiết từng năm.',
        notes: 'Theo dõi dự báo hoa nở trước chuyến đi. Không bẻ cành, không trèo cây.'
      }
    },
    {
      slug: 'sumidagawa-hanabi',
      name: 'Sumidagawa Fireworks Festival',
      location: 'Tokyo',
      region: 'Tokyo',
      season: 'ha',
      types: ['phao-hoa'],
      time: 'Thường vào thứ Bảy cuối tháng 7',
      short: 'Lễ hội pháo hoa bên sông Sumida có nguồn gốc từ thời Edo, nhuộm sáng bầu trời quanh khu Asakusa.',
      img: 'assets/img/le-hoi-sumidagawa-hanabi.jpg',
      alt: 'Pháo hoa đỏ bung sáng trên sông Sumida lúc chạng vạng giữa các tòa nhà Tokyo',
      story: [
        'Pháo hoa bên sông Sumida có nguồn gốc từ các buổi bắn pháo hoa ở khu Ryōgoku thời Edo. Ngày nay lễ hội là một trong những đêm pháo hoa được chờ đợi nhất của Tokyo.',
        'Pháo hoa mùa hè (hanabi) ở Nhật Bản không chỉ là trình diễn ánh sáng. Đó là dịp mặc yukata, hẹn bạn bè và cùng ngồi bên bờ sông lúc chiều buông.',
        'Các nhà làm pháo hoa còn mang tác phẩm tới thi tài, nên mỗi năm người xem có thể bắt gặp những kiểu pháo mới.'
      ],
      highlights: [
        { t: 'Hai khu bắn pháo', d: 'Pháo hoa được bắn từ hai điểm dọc sông, có thể ngắm từ nhiều góc.' },
        { t: 'Phần thi pháo hoa', d: 'Các nhà làm pháo giới thiệu tác phẩm riêng của họ.' },
        { t: 'Yukata bên sông', d: 'Rất nhiều người mặc yukata, tạo không khí mùa hè đặc trưng.' },
        { t: 'Asakusa về đêm', d: 'Sau pháo hoa có thể dạo quanh khu Asakusa và đền Sensō-ji.' }
      ],
      experiences: [
        { kind: 'Quan sát', t: 'Tìm chỗ ngồi bên sông', d: 'Đến sớm từ chiều để có chỗ; một số khu vực có ghế cần đặt trước.' },
        { kind: 'Tham gia', t: 'Mặc yukata đi xem pháo hoa', d: 'Nhiều cửa hàng ở Asakusa cho thuê yukata trong ngày.' },
        { kind: 'Quan sát', t: 'Ngắm từ xa', d: 'Một số nhà hàng và điểm cao trong thành phố có tầm nhìn về phía sông.' }
      ],
      trip: {
        place: 'Dọc sông Sumida, quanh khu Asakusa và Ryōgoku, Tokyo.',
        move: 'Đi tàu tới các ga quanh Asakusa; nhiều đường bị cấm xe và ga rất đông sau giờ bắn.',
        when: 'Tối thứ Bảy cuối tháng 7; nên đến từ chiều.',
        notes: 'Lễ hội có thể hoãn khi thời tiết xấu. Lên kế hoạch về muộn hơn để tránh giờ cao điểm ở ga.'
      }
    },
    {
      slug: 'takayama-mua-thu',
      name: 'Takayama Autumn Festival',
      location: 'Takayama, Gifu',
      region: 'Gifu',
      season: 'thu',
      types: ['truyen-thong', 'dieu-hanh'],
      time: 'Thường vào 9/10 và 10/10',
      short: 'Lễ hội mùa thu của Đền Sakurayama Hachimangū với những cỗ xe yatai chạm khắc và màn rối máy karakuri.',
      img: 'assets/img/le-hoi-takayama-mua-thu.jpg',
      alt: 'Hai người thổi sáo trên cỗ xe yatai sơn son thếp vàng ở Takayama',
      story: [
        'Takayama là thị trấn vùng núi Hida nổi tiếng với phố cổ. Lễ hội mùa thu gắn với Đền Sakurayama Hachimangū, còn mùa xuân thị trấn có một lễ hội khác của Đền Hie.',
        'Những cỗ xe yatai được chạm khắc, sơn son thếp vàng bởi các nghệ nhân Hida qua nhiều thế hệ. Lễ hội xe ở Takayama cũng nằm trong nhóm lễ hội rước xe Yama, Hoko, Yatai được UNESCO ghi danh.',
        'Khi chiều xuống, các cỗ xe thắp đèn lồng đi qua phố cổ, tạo nên khung cảnh như bước ra từ một thời xa.'
      ],
      highlights: [
        { t: 'Xe yatai chạm khắc', d: 'Mỗi cỗ xe là một tác phẩm mộc và sơn mài tinh xảo.' },
        { t: 'Rối máy karakuri', d: 'Con rối trên xe chuyển động nhờ hệ thống dây do người điều khiển phía sau.' },
        { t: 'Rước xe đêm', d: 'Xe thắp đèn lồng đi chậm qua phố cổ vào buổi tối.' },
        { t: 'Phố cổ Sanmachi', d: 'Những con phố gỗ với tiệm rượu sake và cửa hàng thủ công.' }
      ],
      experiences: [
        { kind: 'Quan sát', t: 'Xem màn rối karakuri', d: 'Đến khu vực trước đền đúng giờ biểu diễn được thông báo.' },
        { kind: 'Quan sát', t: 'Theo đoàn rước đêm', d: 'Đi dọc phố cổ khi xe thắp đèn, giữ khoảng cách với xe.' },
        { kind: 'Tham gia', t: 'Dạo phố cổ', d: 'Ghé các cửa hàng thủ công, thử đặc sản Hida trong những ngày lễ hội.' }
      ],
      trip: {
        place: 'Thị trấn Takayama, tỉnh Gifu, vùng núi Hida.',
        move: 'Đi tàu tới ga Takayama hoặc xe buýt cao tốc từ các thành phố lớn; khu lễ hội cách ga một quãng đi bộ.',
        when: 'Đầu tháng 10. Buổi tối có thể khá lạnh.',
        notes: 'Chỗ ở trong thị trấn có hạn, nên đặt sớm. Mang áo ấm cho buổi tối.'
      }
    },
    {
      slug: 'jidai-matsuri',
      name: 'Jidai Matsuri',
      location: 'Kyoto',
      region: 'Kyoto',
      season: 'thu',
      types: ['dieu-hanh', 'truyen-thong'],
      time: 'Thường vào 22/10',
      short: 'Đoàn rước trang phục qua các thời kỳ lịch sử, đi từ Hoàng cung Kyoto tới Đền Heian.',
      img: 'assets/img/le-hoi-jidai-matsuri.jpg',
      alt: 'Người phụ nữ trong trang phục cổ thời Heian màu xanh lá trong đoàn rước Jidai Matsuri',
      story: [
        'Jidai Matsuri, hay "lễ hội các thời đại", bắt đầu từ năm 1895 để kỷ niệm 1.100 năm thành lập kinh đô Heian, tên xưa của Kyoto, cùng với việc xây dựng Đền Heian.',
        'Đoàn rước tái hiện trang phục và nhân vật của nhiều thời kỳ, từ thời Minh Trị ngược về thời Heian, như một cuốn sách lịch sử biết đi.',
        'Trang phục, vũ khí và đồ dùng được làm theo kỹ thuật truyền thống, phản ánh nỗ lực gìn giữ nghề thủ công của Kyoto.'
      ],
      highlights: [
        { t: 'Đoàn rước theo thời kỳ', d: 'Các nhóm nối tiếp nhau, mỗi nhóm đại diện cho một giai đoạn lịch sử.' },
        { t: 'Trang phục cổ', d: 'Từ áo võ sĩ đến trang phục cung đình nhiều lớp.' },
        { t: 'Kiệu thần', d: 'Kiệu của Đền Heian đi cùng đoàn rước.' },
        { t: 'Thu Kyoto', d: 'Lễ hội diễn ra khi thành phố bắt đầu vào mùa lá đỏ.' }
      ],
      experiences: [
        { kind: 'Quan sát', t: 'Xem đoàn rước dọc đại lộ', d: 'Chọn một điểm trên tuyến từ Hoàng cung tới Đền Heian.' },
        { kind: 'Quan sát', t: 'Ghế xem có vé', d: 'Một số khu vực có ghế ngồi bán trước.' },
        { kind: 'Tham gia', t: 'Dạo Đền Heian', d: 'Thăm đền và khu vườn sau khi đoàn rước kết thúc.' }
      ],
      trip: {
        place: 'Từ Hoàng cung Kyoto tới Đền Heian, trung tâm Kyoto.',
        move: 'Đi tàu ngầm hoặc xe buýt tới khu Hoàng cung hay Đền Heian rồi đi bộ.',
        when: 'Ngày 22/10; lễ hội có thể thay đổi khi thời tiết xấu.',
        notes: 'Đứng đúng khu vực khán giả, không chen vào đoàn rước khi chụp ảnh.'
      }
    }
  ]
};
