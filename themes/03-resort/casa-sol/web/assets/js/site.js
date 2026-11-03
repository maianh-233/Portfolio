/* CASA SOL — song ngữ EN / VI + ảnh dự phòng.
   HTML viết sẵn tiếng Anh; từ điển dưới đây chứa bản tiếng Việt theo khóa data-i18n.
   Lựa chọn ngôn ngữ lưu trong localStorage để giữ khi chuyển trang. */
(function () {
  'use strict';

  var VI = {
    /* ---- Dùng chung ---- */
    'g.skip': 'Bỏ qua tới nội dung',
    'g.nav.home': 'Trang chủ',
    'g.nav.about': 'Giới thiệu',
    'g.nav.stays': 'Lưu trú',
    'g.nav.exp': 'Trải nghiệm',
    'g.lang': 'Ngôn ngữ',
    'g.menu': 'Mở menu',
    'g.foot.about': 'Một resort boutique mang tinh thần làng ven biển Địa Trung Hải. Nắng, đá và những ngày chậm rãi.',
    'g.foot.explore': 'Khám phá',
    'g.foot.contact': 'Liên hệ',
    'g.foot.addr': 'Ngõ Bến Cảng, Làng Cổ, bờ biển Địa Trung Hải',
    'g.foot.sample': 'Thông tin liên hệ mẫu cho website minh họa.',
    'g.foot.rights': 'Bảo lưu mọi quyền.',
    'g.foot.top': 'Lên đầu trang ↑',

    /* ---- Trang chủ ---- */
    'h.hero.eyebrow': 'Resort boutique bên bờ biển',
    'h.hero.title': 'Một mùa hè trong tâm trí',
    'h.hero.sub': 'Tường trắng, những buổi sáng thong thả và bữa trưa dài dưới bóng râm. Ngày ở đây theo nhịp mặt trời, không theo đồng hồ.',
    'h.hero.cta': 'Khám phá CASA SOL',
    'h.hero.cta2': 'Xem các không gian lưu trú',
    'h.hero.alt': 'Bàn ghế trên ban công quét vôi trắng nhìn ra biển xanh',
    'h.hero.alt2': 'Hoa giấy hồng buông xuống bức tường trắng',
    'h.hero.cap': 'Hoa giấy, cuối tháng Sáu',
    'h.intro.alt': 'Sân trong với những vòm cửa trắng, rèm mỏng và bàn ăn dưới bóng râm',
    'h.intro.cap': 'Sân trong, ngay trước giờ trưa.',
    'h.intro.title': 'Nơi ngôi làng gặp biển',
    'h.intro.p1': 'CASA SOL được dựng như một ngôi làng ven biển nhỏ. Những ngôi nhà quét vôi trắng quây quanh các sân trong rợp bóng, bậc đá dẫn xuống mặt nước, và mỗi khung cửa đều ôm lấy một mảnh xanh.',
    'h.intro.p2': 'Kiến trúc, khu vườn và biển chưa bao giờ cách xa nhau. Bạn thức dậy khi nắng chạm vào tường vôi, dùng bữa dưới giàn nho và kết thúc ngày trên sân hiên còn giữ hơi ấm của buổi chiều.',
    'h.intro.link': 'Đọc câu chuyện của chúng tôi',
    'h.rooms.title': 'Ba cách để lưu trú',
    'h.rooms.all': 'Xem tất cả không gian lưu trú',
    'h.rooms.a1': 'Phòng ngủ với tường đá tự nhiên, gương tròn và chăn ga linen trắng',
    'h.rooms.d1': 'Linen mềm, đá tự nhiên và ô cửa mở ra đường chân trời.',
    'h.rooms.a2': 'Giường trải gối xanh trắng bên dưới một bức tranh',
    'h.rooms.d2': 'Cửa vòm, nền gạch mát và một góc vườn riêng.',
    'h.rooms.a3': 'Ngôi nhà trắng đứng trên mặt nước xanh lặng',
    'h.rooms.d3': 'Sân hiên riêng, hồ bơi riêng, biển ngay bên dưới.',
    'h.arch.alt': 'Hàng cột trắng uốn cong dưới bầu trời xanh',
    'h.arch.title': 'Vẻ đẹp của lối sống Địa Trung Hải',
    'h.arch.s1': 'Tường vôi, đá địa phương và gạch đất nung làm tay. Những vật liệu già đi nhẹ nhàng và luôn mát giữa tháng Tám.',
    'h.arch.s2': 'Vòm sâu và cửa sổ hẹp làm dịu nắng trưa, để mỗi căn phòng chuyển từ sáng sang râm theo suốt ngày.',
    'h.arch.s3': 'Cửa chớp gỗ, đèn lồng sắt, bậc đá mòn nhẵn. Chi tiết mang nét truyền thống; tiện nghi hiện đại một cách lặng lẽ.',
    'h.life.eyebrow': 'Cuộc sống tại CASA SOL',
    'h.life.title': 'Nắng trên bàn ăn, nước dưới chân, hoa trên mọi bức tường',
    'h.life.a1': 'Bàn ăn dài ngoài trời nhìn ra biển và núi',
    'h.life.d1': 'Cá từ những chuyến thuyền sớm, cà chua từ vườn và dầu ô liu ép gần đây, phục vụ ngoài trời từ trưa đến lúc sao lên.',
    'h.life.a2': 'Hồ bơi xanh trong nhìn ra biển khơi',
    'h.life.d2': 'Một hồ bơi dài, yên tĩnh phía trên mặt nước. Một cuốn sách, ly nước chanh mát và chẳng cần đi đâu khác.',
    'h.life.a3': 'Hoa giấy hồng và trắng phủ trên bức tường trắng',
    'h.life.d3': 'Hoa giấy trên tường, cây ô liu trong sân và hương thảo dọc mọi lối đi. Khu vườn đặt nhịp cho nơi này.',
    'h.life.link': 'Dạo quanh khu vườn',
    'h.sum.title': 'Album mùa hè',
    'h.sum.c1': 'Hoa giấy trên nền trời không mây',
    'h.sum.a1': 'Hoa giấy trắng và hồng trên nền trời xanh',
    'h.sum.c2': 'Khung cảnh từ lối đi phía trên lúc giữa trưa',
    'h.sum.a2': 'Biển khơi nhìn từ sườn đồi',
    'h.sum.note': 'Bữa sáng ở đây thường kéo dài, và chẳng ai bận tâm.',
    'h.sum.c3': 'Bữa sáng trên sân hiên',
    'h.sum.a3': 'Bữa sáng thịnh soạn bày trên bàn nhìn ra đại dương',
    'h.next.title': 'Bữa trưa dài, hồ bơi tĩnh, buổi tối chậm rãi.',
    'h.next.cta': 'Xem các trải nghiệm',
    'h.next.cta2': 'Câu chuyện của chúng tôi',

    /* ---- Giới thiệu ---- */
    'a.hero.eyebrow': 'Về CASA SOL',
    'a.hero.title': 'Một nơi được Địa Trung Hải tạo hình',
    'a.hero.sub': 'CASA SOL bắt đầu từ một mong muốn giản dị: mang sự ấm áp của một ngôi làng ven biển nhỏ vào nơi du khách có thể sống chậm lại và thấy như ở nhà.',
    'a.hero.alt': 'Nhìn qua vòm cửa trắng vào khu vườn xanh',
    'a.story.title': 'Hiếu khách, một cách giản dị',
    'a.story.p1': 'Chúng tôi muốn một resort ít giống khách sạn mà giống một ngôi làng nơi bạn tình cờ ở lại. Có người nhớ tên bạn, chiếc bàn cạnh cửa sổ luôn được giữ cho bạn, và bữa trưa có thể đợi đến khi bạn sẵn sàng.',
    'a.story.p2': 'Cái đẹp ở đây mộc mạc và chân thật: bức tường vôi đón nắng chiều, bánh mì còn ấm từ lò, tiếng biển vọng qua ô cửa chớp mở. Không có gì vội vã, và cũng chẳng cần phải vội.',
    'a.story.alt': 'Sân trong với chậu cây và nền gạch hoa văn',
    'a.story.quote': '“Đến vì biển. Ở lại vì nhịp sống.”',
    'a.story.quoteby': 'Câu nói các chủ nhà thường nhắc',
    'a.mat.title': 'Kiến trúc và vật liệu',
    'a.mat.sub': 'Được dựng từ những gì bờ biển luôn có: vôi, đá, đất sét, gỗ và thật nhiều ánh sáng.',
    'a.mat.a1': 'Tòa nhà trắng nhìn qua một vòm cửa sâu rợp bóng',
    'a.mat.t1': 'Tường trắng và cửa vòm',
    'a.mat.d1': 'Lớp vôi phản lại sức nóng và được quét mới mỗi mùa xuân. Vòm cửa tạo bóng râm, đóng khung cảnh vật và giữ phòng luôn mát.',
    'a.mat.a3': 'Ngôi nhà màu đất nung với cửa chớp xanh sau khu vườn tươi tốt',
    'a.mat.t3': 'Gạch đất nung',
    'a.mat.d3': 'Gạch đất sét dưới chân và trên mái, ấm về màu sắc mà mát khi chạm vào.',
    'a.mat.t2': 'Đá tự nhiên và gỗ',
    'a.mat.d2': 'Đá địa phương cho bậc thềm và tường vườn, gỗ đặc cho cửa, xà và cửa chớp. Vật liệu giản dị, được chạm vào mỗi ngày.',
    'a.mat.t4': 'Ánh sáng tự nhiên',
    'a.mat.d4': 'Các phòng hướng về nắng sớm và tránh những giờ nóng nhất. Ánh sáng di chuyển trên tường như một chiếc đồng hồ chậm.',
    'a.mat.t5': 'Khu vườn và sân trong',
    'a.mat.d5': 'Mỗi ngôi nhà đều mở ra một sân trong: một gốc cây cho bóng mát, vài chậu thảo mộc, một băng ghế để ngồi sau bữa tối.',
    'a.mat.a5': 'Sân lát đá với cây bóng mát và chậu cây',
    'a.val.title': 'Tinh thần Địa Trung Hải',
    'a.val.d1': 'Sự chào đón chân thành, không dàn dựng. Chủ nhà nhớ bạn uống cà phê thế nào và thích lối đi nào lúc hoàng hôn.',
    'a.val.d2': 'Nông sản theo mùa, ngư dân và nhà vườn địa phương, những công thức truyền từ bếp này sang bếp khác dọc bờ biển.',
    'a.val.d3': 'Bữa sáng dài, nghỉ trưa, buổi tối không kế hoạch. Thời gian theo ánh sáng, không theo lịch trình.',
    'a.gal.title': 'Vòm cửa, ban công và những góc yên tĩnh',
    'a.gal.c1': 'Ban công vòm quanh sân trong chính',
    'a.gal.a1': 'Sân trong bao quanh bởi tòa nhà có ban công hình vòm',
    'a.gal.c2': 'Cây trổ hoa trước mặt tiền trắng',
    'a.gal.a2': 'Cây hoa hồng phấn trước tòa nhà trắng',
    'a.gal.note': 'Mỗi khung cửa ôm lấy một mảnh xanh nhỏ.',
    'a.gal.c3': 'Cửa chớp xanh trên ban công trắng',
    'a.gal.a3': 'Tòa nhà trắng với chi tiết màu xanh',
    'a.gal.c4': 'Vòm đá cổ hướng ra biển',
    'a.gal.a4': 'Vòm đá cổ đóng khung biển Địa Trung Hải',
    'a.end.alt': 'Cánh cửa gỗ xanh trên tường đá, viền hoa giấy hồng',
    'a.end.title': 'Nghệ thuật sống chậm',
    'a.end.p': 'Khám phá cách mỗi ngày trôi qua tại CASA SOL, từ ly cà phê đầu tiên đến tia nắng cuối cùng trên mặt nước.',
    'a.end.cta': 'Xem các trải nghiệm',

    /* ---- Lưu trú ---- */
    's.hero.eyebrow': 'Phòng, villa & tiện ích',
    's.hero.title': 'Những căn phòng mang hồn Địa Trung Hải',
    's.hero.sub': 'Tường vôi, linen, đá địa phương và ô cửa đóng khung biển hoặc khu vườn. Mỗi căn phòng được tạo hình bởi cảnh quan quanh nó.',
    's.hero.alt': 'Chiếc đèn trên bàn cạnh cửa sổ nhìn ra biển lúc hoàng hôn',
    's.toc.label': 'Các không gian lưu trú',
    's.cs.alt1': 'Biển khơi nhìn từ ban công trắng',
    's.cs.alt2': 'Giường trắng trước đầu giường màu xanh dịu',
    's.cs.cap': 'Nắng sớm, xanh biển',
    's.cs.p': 'Cửa sổ rộng hướng về chân trời, linen nhạt màu và tường trắng như phấn. Căn phòng đổi sắc theo ánh sáng, từ buổi sáng xanh dịu đến buổi tối vàng óng trên ban công.',
    's.cs.l1': 'Ban công riêng hướng biển',
    's.cs.l2': 'Giường lớn trải linen giặt mềm',
    's.cs.l3': 'Phòng tắm đá với vòi sen mưa',
    's.cs.l4': 'Góc đọc sách bên cửa sổ',
    's.cr.p': 'Cửa vòm mở thẳng ra sân trong yên tĩnh với những chậu chanh và giàn hoa nhài. Nền đất nung mát lạnh, tường dày và sự riêng tư như một ngôi nhà trong làng cổ.',
    's.cr.t1': 'Sân hiên trong vườn',
    's.cr.t2': 'Trần vòm',
    's.cr.t3': 'Sàn gạch đất nung',
    's.cr.alt1': 'Giường trắng với gối xanh trong căn phòng sáng, yên tĩnh',
    's.cr.alt2': 'Ghế ngoài trời màu trắng bên chậu cây trổ hoa',
    's.cr.cap': 'Sân trong lúc bốn giờ chiều',
    's.pv.kicker': 'Sân hiên · Hồ ngâm · Hướng biển',
    's.pv.alt1': 'Villa trắng với cầu thang xoắn ngoài trời phía trên biển',
    's.pv.p': 'Một ngôi nhà riêng, nằm hơi tách khỏi ngôi làng. Hai phòng ngủ, phòng khách mở trọn ra sân hiên, hồ ngâm và chiếc bàn dài cho những bữa tối ngoài trời. Rộng rãi và hoàn toàn yên tĩnh.',
    's.pv.l1': 'Hai phòng ngủ',
    's.pv.l2': 'Hồ ngâm riêng',
    's.pv.l3': 'Sân hiên ăn tối ngoài trời',
    's.pv.l4': 'Giường nghỉ dưới bóng râm',
    's.pv.alt2': 'Ghế mây trước những cánh cửa xanh',
    's.pv.cap': 'Cửa xanh, bóng râm buổi chiều',
    's.am.eyebrow': 'Quanh khu nghỉ dưỡng',
    's.am.title': 'Những nơi để tận hưởng một ngày',
    's.am.a1': 'Hồ bơi resort với ghế tắm nắng và vườn cây',
    's.am.t1': 'Hồ bơi ngoài trời',
    's.am.d1': 'Hồ bơi dài giữa hàng ô liu và ghế nằm, mở cửa từ lúc bình minh đến khi sao đầu tiên xuất hiện.',
    's.am.a2': 'Bàn ghế trên sân lát đá cạnh biển',
    's.am.t2': 'Nhà hàng ngoài trời',
    's.am.d2': 'Bữa sáng, bữa trưa dài và bữa tối dưới ánh nến trên sân đá cách mặt nước vài bước chân.',
    's.am.a3': 'Cành ô liu trĩu quả xanh',
    's.am.t3': 'Khu vườn Địa Trung Hải',
    's.am.d3': 'Ô liu, hương thảo, oải hương và hoa giấy, cùng lối đi lát đá và những băng ghế khuất trong bóng râm.',
    's.am.a4': 'Hai ghế nằm trên sân hiên trắng nhìn ra biển',
    's.am.t4': 'Lounge & sân hiên',
    's.am.d4': 'Sân hiên trắng với nệm và bàn thấp, dành cho đọc sách, một ly đồ uống buổi chiều hay chỉ ngắm thuyền qua lại.',
    's.dt.title': 'Những chi tiết làm nên kỳ nghỉ',
    's.dt.sub': 'Linen, gốm làm tay, chanh trên bàn, đá cũ và cánh cửa sơn màu. Kéo để xem, chạm để phóng to.',
    's.dt.c1': 'Gốm nặn tay',
    's.dt.a1': 'Đĩa gốm trắng trên bàn',
    's.dt.c2': 'Chanh và ly thủy tinh trong nắng',
    's.dt.a2': 'Bàn bày đĩa, ly và chanh dưới nắng',
    's.dt.c3': 'Sọc xanh, gốm địa phương',
    's.dt.a3': 'Cốc sọc xanh trắng bên chiếc bình cùng kiểu',
    's.dt.c4': 'Hoa dại trên bàn',
    's.dt.a4': 'Bàn với bình hoa tươi',
    's.dt.c5': 'Đá cũ, ô cửa xanh',
    's.dt.a5': 'Bức tường đá cũ với ô cửa sổ sơn xanh',
    's.dt.c6': 'Cánh cửa sơn trên tường trắng',
    's.dt.a6': 'Cánh cửa gỗ xanh trên bức tường trắng',
    's.end.alt': 'Bàn ghế gỗ trắng bên mặt nước phẳng lặng',
    's.end.title': 'Kỳ nghỉ cho những ngày chậm rãi',
    's.end.p': 'Dù bạn nghỉ ở đâu tại CASA SOL, biển, khu vườn và ánh sáng luôn chỉ cách vài bước chân.',
    's.end.cta1': 'Về trang chủ',
    's.end.cta2': 'Câu chuyện của chúng tôi',

    /* ---- Trải nghiệm ---- */
    'e.hero.alt': 'Rượu vang và món ăn trên bàn chờ hoàng hôn trên biển',
    'e.hero.eyebrow': 'Trải nghiệm & khám phá',
    'e.hero.title': 'Tận hưởng từng khoảnh khắc',
    'e.hero.sub': 'Món ăn từ biển và vườn, những con ngõ nhà trắng, buổi chiều bên mặt nước. Địa Trung Hải đẹp nhất khi được tận hưởng chậm rãi.',
    'e.toc.label': 'Trên trang này',
    'e.toc.1': 'Ẩm thực địa phương',
    'e.toc.2': 'Ngôi làng',
    'e.toc.3': 'Bên hồ bơi',
    'e.toc.4': 'Khu vườn',
    'e.cu.eyebrow': 'Chương 01 — Hương vị địa phương',
    'e.cu.title': 'Bàn ăn giữa trời',
    'e.cu.p1': 'Bữa ăn theo mùa và theo mẻ lưới sớm: cà chua còn ấm nắng từ vườn, cá nướng, rau dại, bánh mì và dầu ô liu từ những vườn lân cận.',
    'e.cu.p2': 'Mọi món đều được dọn ngoài trời, dưới giàn nho hay bên biển, và bữa trưa được phép kéo dài cả buổi chiều.',
    'e.cu.a1': 'Bàn xanh bày những bát món Địa Trung Hải tươi ngon',
    'e.cu.a3': 'Bạch tuộc nướng với salad và ly rượu vang',
    'e.cu.c3': 'Bạch tuộc nướng, chanh, một ly vang trắng',
    'e.cu.a2': 'Băng ghế gỗ và bàn ăn bên mặt nước lặng',
    'e.cu.c2': 'Bữa tối, cách mặt nước vài bước chân',
    'e.vi.eyebrow': 'Chương 02 — Ngôi làng ven biển',
    'e.vi.title': 'Bưu thiếp từ những con ngõ',
    'e.vi.sub': 'Rời resort đi bộ theo những con ngõ lát đá: nhà trắng, cửa sơn màu, hoa trổ trên tường và cuối mỗi con phố là biển.',
    'e.vi.a1': 'Con phố làng hẹp với cây trổ hoa hồng',
    'e.vi.s1': 'Điểm dừng 01',
    'e.vi.c1': 'Hoa nở trên con ngõ phía trên',
    'e.vi.a2': 'Ngôi nhà trắng với cánh cửa xanh lá trên phố lát gạch',
    'e.vi.s2': 'Điểm dừng 02',
    'e.vi.c2': 'Cánh cửa xanh vừa sơn mới',
    'e.vi.a3': 'Những ngôi nhà trắng trên vách đá rực sáng trong nắng chiều',
    'e.vi.s3': 'Điểm dừng 03',
    'e.vi.c3': 'Lối đi trên vách đá lúc hoàng hôn',
    'e.vi.a4': 'Con hẻm yên tĩnh dưới bóng cây hoa hồng',
    'e.vi.s4': 'Điểm dừng 04',
    'e.vi.c4': 'Trở về qua những bóng râm',
    'e.po.a1': 'Hồ bơi trên mép vách đá cạnh biển khơi',
    'e.po.a2': 'Bàn tay cầm tách cà phê bên hồ bơi',
    'e.po.eyebrow': 'Chương 03 — Những buổi chiều bên hồ',
    'e.po.title': 'Chẳng cần đi đâu khác',
    'e.po.p': 'Sau bữa trưa, khu nghỉ dưỡng lặng dần. Một lần bơi, chiếc ghế nằm trong bóng râm, cuốn tiểu thuyết bạn để dành cả năm. Chỉ còn tiếng nước và tiếng ve.',
    'e.po.a3': 'Một người đọc sách trong căn phòng sáng',
    'e.po.c3': 'Thêm một chương nữa trước khi mặt trời lặn.',
    'e.ga.eyebrow': 'Chương 04 — Khu vườn & thiên nhiên',
    'e.ga.title': 'Bóng ô liu và lối đi lát đá',
    'e.ga.p': 'Những cây ô liu già, hoa giấy trên tường, thảo mộc dọc lối đi. Hãy dạo bước sớm khi không khí thơm mùi hương thảo, hoặc muộn khi những phiến đá còn giữ hơi ấm của ngày.',
    'e.ga.a1': 'Vườn ô liu với những ngọn đồi phía xa',
    'e.ga.c1': 'Vườn ô liu phía sau ngôi làng',
    'e.ga.a2': 'Con ngõ lát đá với hai hàng chậu cây',
    'e.ga.c2': 'Chậu thảo mộc trên mỗi bậc thềm',
    'e.ga.a3': 'Lá xanh đổ bóng trên bức tường trắng dưới nắng',
    'e.ga.c3': 'Bóng lá trên tường trắng',
    'e.pc.title': 'Bưu thiếp từ CASA SOL',
    'e.pc.sub': 'Chạm vào một tấm bưu thiếp để phóng to.',
    'e.pc.c1': 'Mái vòm xanh trên biển Aegean',
    'e.pc.a1': 'Những tòa nhà trắng mái vòm xanh nhìn ra biển',
    'e.pc.c2': 'Bàn ăn bên tường chắn sóng',
    'e.pc.a2': 'Tòa nhà trắng với bàn ghế bên biển',
    'e.pc.c3': 'Chiếc mũ cói để quên trên bàn',
    'e.pc.a3': 'Mũ cói trên bàn gần mặt nước lặng',
    'e.pc.c4': 'Đĩa salad mùa hè',
    'e.pc.a4': 'Đĩa salad tươi',
    'e.pc.c5': 'Những ngôi nhà trắng xếp tầng trên đồi',
    'e.pc.a5': 'Nhà trắng xếp tầng trên sườn đồi',
    'e.pc.c6': 'Bàn gỗ trên sân hiên trắng',
    'e.pc.a6': 'Bàn ghế gỗ trên sân hiên trắng',
    'e.pc.c7': 'Bữa trưa nhìn ra núi',
    'e.pc.a7': 'Bàn ăn ngoài trời nhìn ra biển và núi',
    'e.end.alt': 'Mặt trời lặn trên biển phía sau những tòa nhà trắng',
    'e.end.title': 'Để ngày trôi thật chậm',
    'e.end.p': 'Bữa sáng muộn, dạo quanh làng, một lần bơi, bữa tối dài khi bầu trời ửng hồng. Tại CASA SOL, kế hoạch tốt nhất là không có kế hoạch nào.',
    'e.end.cta': 'Trở về CASA SOL'
  };

  var TITLES = {
    home: ['CASA SOL — A Mediterranean boutique resort', 'CASA SOL — Resort boutique phong cách Địa Trung Hải'],
    about: ['About — CASA SOL', 'Giới thiệu — CASA SOL'],
    stays: ['Stays — CASA SOL', 'Lưu trú — CASA SOL'],
    experiences: ['Experiences — CASA SOL', 'Trải nghiệm — CASA SOL']
  };

  var KEY = 'casasol-lang';
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(KEY) === 'vi' ? 'vi' : 'en'; } catch (e) { return 'en'; }
  }
  function save(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) { /* bỏ qua */ }
  }

  /* Ghi lại bản tiếng Anh gốc một lần để chuyển ngược lại */
  function remember(el, prop, value) {
    var k = '__en_' + prop;
    if (!(k in el)) el[k] = value;
    return el[k];
  }

  function apply(lang) {
    var vi = lang === 'vi';
    root.lang = vi ? 'vi' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var en = remember(el, 'text', el.textContent);
      var t = VI[el.getAttribute('data-i18n')];
      var next = vi && t ? t : en;
      if (el.textContent !== next) el.textContent = next;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var en = remember(el, 'alt', el.getAttribute('alt') || '');
      var t = VI[el.getAttribute('data-i18n-alt')];
      el.setAttribute('alt', vi && t ? t : en);
    });
    document.querySelectorAll('[data-i18n-cap]').forEach(function (el) {
      var en = remember(el, 'cap', el.getAttribute('data-caption') || '');
      var t = VI[el.getAttribute('data-i18n-cap')];
      el.setAttribute('data-caption', vi && t ? t : en);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var en = remember(el, 'aria', el.getAttribute('aria-label') || '');
      var t = VI[el.getAttribute('data-i18n-aria')];
      el.setAttribute('aria-label', vi && t ? t : en);
    });

    var page = document.body && document.body.getAttribute('data-page');
    if (TITLES[page]) document.title = TITLES[page][vi ? 1 : 0];

    document.querySelectorAll('[data-lang-set]').forEach(function (b) {
      var on = b.getAttribute('data-lang-set') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function init() {
    apply(stored());
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-lang-set]');
      if (!b) return;
      var lang = b.getAttribute('data-lang-set') === 'vi' ? 'vi' : 'en';
      save(lang);
      apply(lang);
    });

    /* Ảnh link ngoài không tải được → khung giữ nền cát + chữ thương hiệu, không để trống */
    document.querySelectorAll('.frame img').forEach(function (img) {
      function fail() { var f = img.closest('.frame'); if (f) f.classList.add('img-failed'); }
      if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) fail();
      img.addEventListener('error', fail);
    });
  }

  /* Nạp ở cuối <body>, trước motion.js: DOM đã có đủ → dịch ngay để motion.js tách chữ trên bản đã dịch */
  if (document.body) init();
  else document.addEventListener('DOMContentLoaded', init);
})();
