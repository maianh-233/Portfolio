/* Công tắc ngôn ngữ EN ⇄ VI cho website SANDLINE.
 * Nhấp EN hoặc VI ở header / menu mobile: toàn bộ nội dung trang đổi ngôn ngữ ngay,
 * KHÔNG mở bất kỳ hộp thông báo nào. Lựa chọn được ghi vào localStorage,
 * trang nạp lại đúng ngôn ngữ đã chọn. Không thêm/xoá phần tử, không đổi bố cục.
 *
 * Cách hoạt động: gom các text node theo văn bản gốc tiếng Anh (khóa = chính câu chữ),
 * đối chiếu bản đồ T dưới đây rồi thay giá trị nút văn bản. Tiêu đề dùng data-split
 * được giữ nguyên dưới dạng phần tử và đổi textContent khi chuyển ngôn ngữ.
 * Nhận lang ban đầu từ <html lang> (đã được snippet trong <head> đặt theo localStorage).
 */
(function () {
  if (window.I18N) return;
  var KEY = 'sandline-lang';
  var html = document.documentElement;

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  // ---------- Bản đồ EN → VI ----------
  var T = {
    // Điều hướng / phần chung
    'Home': 'Trang chủ',
    'About': 'Giới thiệu',
    'Accommodation': 'Lưu trú',
    'Experiences': 'Trải nghiệm',
    'Enquire': 'Liên hệ',
    'Pages': 'Trang',
    'Visit': 'Địa chỉ',
    'Contact': 'Liên hệ',
    'Copy number': 'Chép số điện thoại',
    'Spain': 'Tây Ban Nha',
    'Two hours by road from Málaga airport.': 'Hai tiếng đi ô tô từ sân bay Málaga.',
    '© 2026 SANDLINE. All rights reserved.': '© 2026 SANDLINE. Bảo lưu mọi quyền.',
    'Prototype website for presentation.': 'Website demo dùng cho việc trình bày.',
    'Architecture shaped by the land, and the light that crosses it.': 'Kiến trúc được định hình bởi đất, và ánh sáng đi qua nơi đó.',

    // Modal liên hệ
    'Plan your stay': 'Lên kế hoạch lưu trú',
    'Tell us when you would like to come. Our reservations team replies within one working day.': 'Cho chúng tôi biết bạn muốn đến khi nào. Bộ phận đặt phòng trả lời trong vòng một ngày làm việc.',
    'Full name': 'Họ và tên',
    'Email': 'Email',
    'Residence': 'Loại lưu trú',
    'Desert Suite': 'Suite Sa mạc',
    'Courtyard Villa': 'Villa Sân trong',
    'Horizon Residence': 'Nhà Chân Trời',
    'Not sure yet': 'Chưa quyết định',
    'Arrival': 'Ngày nhận phòng',
    'Nights': 'Số đêm',
    'Anything we should know': 'Ghi chú thêm',
    'Demo form. Nothing is sent from this prototype.': 'Form demo — không có dữ liệu nào được gửi đi từ bản thử này.',
    'Send enquiry': 'Gửi yêu cầu',

    // Trang chủ
    'Architecture Shaped by the Land': 'Kiến trúc được định hình bởi đất',
    'Twenty-two residences set into the stone of southern Spain, built from sand, shadow and long desert light.': 'Hai mươi hai dãy nhà nằm trong đá của miền nam Tây Ban Nha, dựng từ cát, bóng đổ và ánh nắng sa mạc dài.',
    'Explore residences': 'Khám phá các dòng lưu trú',
    'About SANDLINE': 'Giới thiệu SANDLINE',
    'A resort that behaves like a landscape.': 'Một khu nghỉ vận hành như mảng cảnh quan.',
    'SANDLINE sits low on a dry ridge in the Tabernas desert. Its walls are poured from the same ochre earth that surrounds them, so the buildings read as terraces of rock rather than objects placed on top.': 'SANDLINE nằm thấp trên một sống lưng khô của sa mạc Tabernas. Các bức tường được đổ bê tông từ chính đất màu vỏ quýt bao quanh, nhờ đó các công trình hiện lên như những tầng đá tự nhiên, không phải vật thể đặt lên trên.',
    'Rooms open towards the east for first light and close to the west against the afternoon heat. Every courtyard, opening and pool follows the path of the sun.': 'Các phòng mở về hướng đông đón tia nắng đầu ngày và khép kín về hướng tây tránh nóng buổi chiều. Mọi sân trong, khe mở và hồ đều đi theo đường đi của mặt trời.',
    'Read our story': 'Đọc câu chuyện thương hiệu',
    'The east terraces at seven in the morning.': 'Thềm hướng đông lúc bảy giờ sáng.',
    'Built from what was already here.': 'Dựng từ những gì đã có sẵn ở đây.',
    'The Ridge Pavilion': 'Pavilion Sườn Đồi',
    'Reception, library and gallery': 'Tiếp tân, thư viện và phòng trưng bày',
    'The Light Well': 'Giếng Ánh Sáng',
    'A sky cut into the spa roof': 'Một mảnh trời cắt vọng xuống mái spa',
    'Shadow Walls': 'Tường Bóng',
    'Deep reveals that keep rooms cool': 'Khung cửa lùi sâu giữ mát cho các phòng',
    'The Mirror Court': 'Sân Hồ Gương',
    'A 60-metre reflecting pool': 'Hồ gương dài 60 mét',
    'Three ways to live in the desert.': 'Ba cách sống giữa sa mạc.',
    'A single long room under a thick concrete roof, opening onto a terrace that faces the dunes.': 'Một dãy phòng dài duy nhất dưới mái bê tông dày, mở ra thềm hướng thẳng vào cồn cát.',
    '68 m² / private terrace': '68 m² / thềm riêng',
    'Rooms wrapped around a walled garden of gravel and olive, where the outdoors becomes the living room.': 'Các phòng ôm quanh một khu vườn có tường bao của sỏi và cây olive, nơi không gian ngoài trời trở thành chính phòng khách.',
    '140 m² / inner courtyard': '140 m² / sân trong',
    'Three bedrooms along a single wall of glass, set on the highest point of the ridge with nothing between you and the horizon.': 'Ba phòng ngủ trải dọc trên một bức tường kính liền mạch, đặt ở điểm cao nhất của sống lưng núi — giữa bạn và chân trời không còn gì ngăn cách.',
    '260 m² / 3 bedrooms': '260 m² / 3 phòng ngủ',
    'View all residences': 'Xem toàn bộ các dòng lưu trú',
    'residences across the ridge': 'dãy lưu trú dọc sống lưng núi',
    'of protected desert land': 'của đất sa mạc được bảo tồn',
    'above sea level': 'so với mực nước biển',
    'hours of sunlight a year': 'giờ nắng mỗi năm',
    'Places to pause.': 'Những nơi để dừng chân.',
    'Reflecting Pool': 'Hồ Gương',
    'Restaurant': 'Nhà hàng',
    'Lounge': 'Phòng Thư Giãn',
    'Thermal Baths': 'Suối Nước Nóng',
    'A still, dark-lined pool that holds the sky. Open from first light until the last guest leaves.': 'Một hồ tĩnh lặng viền tối hứng lấy cả bầu trời. Mở cửa từ lúc nắng sớm cho đến khi vị khách cuối cùng rời đi.',
    'Almería produce, olive wood fire and a short menu that changes with the market in Tabernas.': 'Đặc sản Almería, lửa gỗ olive và một thực đơn ngắn đổi theo chợ Tabernas.',
    'Low seating, a library of architecture books and the coolest air on the ridge at three in the afternoon.': 'Ghế ngồi thấp, một thư viện sách kiến trúc và làn không khí mát nhất sống lưng núi lúc ba giờ chiều.',
    'Warm and cold pools under open sky, best taken after a morning walk in the canyon.': 'Các hồ ấm và hồ lạnh dưới bầu trời mở, lý tưởng nhất sau một buổi đi bộ sáng sớm trong hẻm núi.',
    'Come for the light. Stay for the silence.': 'Đến vì ánh sáng. Rồi ở lại vì khoảng lặng.',
    'See experiences': 'Xem các trải nghiệm',

    // Trang giới thiệu
    'Designed with the desert, not against it.': 'Thiết kế cùng sa mạc, không chống lại nó.',
    'SANDLINE began with a question: how little can a building add to a landscape and still offer shelter, comfort and calm?': 'SANDLINE bắt đầu từ một câu hỏi: một công trình có thể can thiệp vào cảnh quan ít đến mức nào mà vẫn mang lại nơi trú ẩn, sự thoải mái và sự an yên?',
    'The design idea': 'Ý tưởng thiết kế',
    'The architects spent a full year on the ridge before drawing a single wall. They mapped where the wind drops, where shade falls at noon and which hollows stay cool after dark.': 'Các kiến trúc sư trọn một năm trên sống lưng núi trước khi vẽ bức tường đầu tiên. Họ ghi lại nơi gió dừng thổi, nơi bóng rơi lúc chính ngọ và hốc nào giữ mát sau khi trời tối.',
    'The plan grew from those notes. Residences step down the slope like strata of rock, each one turned a few degrees to catch the morning sun and avoid the western glare.': 'Bản kế hoạch lớn lên từ những ghi chú đó. Các dãy nhà bậc thang theo sườn như những tầng đá, mỗi dãy xoay vài độ để đón nắng sáng và tránh ánh gắt hướng tây.',
    '“We wanted guests to feel the weight of the walls and the lightness of the sky at the same time.”': '“Chúng tôi muốn khách cảm nhận cùng lúc độ nặng của bức tường và cái nhẹ như không của bầu trời.”',
    'Inés Calvo Ruiz, lead architect': 'Inés Calvo Ruiz, kiến trúc sư trưởng',
    'Inside, the palette is reduced to what the site already offered: sand-coloured concrete, local stone, oiled oak and wide panes of low-iron glass.': 'Bên trong, bảng màu được gói gọn trong những gì địa điểm vốn có: bê tông màu cát, đá địa phương, gỗ oak thấm dầu và những tấm kính khử sắt rộng.',
    'Four materials, nothing more.': 'Bốn vật liệu, không nhiều hơn.',
    'Stone': 'Đá',
    'Sandstone quarried forty kilometres away, laid in thick dry walls that hold the night\'s coolness well into the day.': 'Đá sa mạc khai thác cách đó bốn mươi cây số, xếp thành tường dày kiểu khô giữ được hơi mát đêm đến tận ban ngày.',
    'Concrete': 'Bê tông',
    'Mixed with local sand so its colour matches the ground. Board-formed, left raw, never painted.': 'Trộn cát địa phương để màu khớp mặt đất. Đổ khuôn ván, giữ nguyên bề mặt, không sơn.',
    'Wood': 'Gỗ',
    'Oiled oak for everything the hand touches: doors, benches, window seats and the long dining tables.': 'Gỗ oak thấm dầu cho mọi thứ bàn tay chạm tới: cửa, ghế băng, bệ cửa sổ và những chiếc bàn ăn dài.',
    'Glass': 'Kính',
    'Deep-set panes shaded by the roof above, so the view stays open while the heat stays out.': 'Những tấm kính lùi sâu được mái trên che bóng, nhờ đó tầm nhìn vẫn mở còn nóng thì bị giữ bên ngoài.',
    'Five rules we built by.': 'Năm nguyên tắc khi chúng tôi dựng nhà.',
    'Rule one': 'Nguyên tắc một',
    'Build low.': 'Dựng thấp.',
    'No roof rises above the ridge line. From the valley road, SANDLINE is almost invisible.': 'Không mái nào vượt qua đường viền sống lưng núi. Từ trục đường thung lũng, SANDLINE gần như vô hình.',
    'Follow the sun.': 'Theo mặt trời.',
    'Every opening is placed by the sun path: soft east light in, hard west light out.': 'Mọi khe mở được đặt theo quỹ đạo mặt trời: nắng đông dịu đi vào, nắng tây gay gắt bị đẩy ra.',
    'Use the ground.': 'Dùng chính mặt đất.',
    'Earth from the foundations became the walls.': 'Lớp đất từ hầm móng trở thành các bức tường.',
    'Keep water still.': 'Giữ nước tĩnh lặng.',
    'Pools are mirrors, not fountains.': 'Các hồ là gương, không phải đài phun.',
    'Leave space empty.': 'Chừa lại khoảng trống.',
    'Courtyards, gaps and long walls with nothing on them give the eye somewhere to rest.': 'Các sân trong, khe hở và những bức tường dài không treo gì cả cho đôi mắt có chỗ nghỉ ngơi.',
    'Studies in light and mass.': 'Những nghiên cứu về ánh sáng và khối lượng.',
    'Curved wall in the spa wing': 'Tường cong trong dãy spa',
    'Looking up at the east tower': 'Ngước nhìn lên tháp phía đông',
    'Stair to the roof terrace': 'Cầu thang lên thềm mái',
    'Shadow on the gallery stair': 'Bóng đổ trên cầu thang phòng trưng bày',
    'Lime plaster, hand finished': 'Vữa vôi, hoàn thiện thủ công',
    'The olive court': 'Sân cây olive',
    'The land was here first. We simply made room to stay.': 'Mảnh đất đã có ở đây trước. Chúng tôi chỉ chừa một khoảng nhỏ để lưu trú.',
    'View residences': 'Xem các dòng lưu trú',

    // Trang lưu trú
    'Rooms that open to the horizon.': 'Những căn phòng mở về chân trời.',
    'Three residence types, each drawn around a different relationship between shelter and landscape.': 'Ba dòng lưu trú, mỗi dòng phác xoay quanh một mối quan hệ khác nhau giữa nơi trú ẩn và cảnh quan.',
    'One long room beneath a thirty-centimetre concrete roof. The roof overhangs the glass by two metres, so the suite stays shaded at midday while the terrace catches the morning sun.': 'Một dãy phòng dài duy nhất dưới mái bê tông dày ba mươi xăng-ti-mét. Mái vươn ra hai mét trước mặt kính, nhờ đó căn suite mát bóng lúc chính ngọ trong khi thềm hứng trọn nắng sớm.',
    'The space': 'Không gian',
    'In the suite': 'Trong căn suite',
    'In the villa': 'Trong villa',
    'In the residence': 'Trong dãy nhà',
    '68 m² interior': '68 m² phần trong nhà',
    'Shaded east terrace': 'Thềm hướng đông có bóng mát',
    'Sleeps two': 'Ngủ thoải mái hai người',
    'Plunge pool': 'Hồ ngâm nhỏ',
    'Stone soaking tub': 'Bồn ngâm đá',
    'Oak reading bench': 'Ghế gỗ oak đọc sách',
    'Four rooms turn inward around a walled garden of white gravel, agave and a single olive tree. Sliding glass walls fold away, so the courtyard becomes the true living room from April to October.': 'Bốn phòng quay mặt vào trong quanh một khu vườn có tường sỏi trắng, cây agave và một cây olive duy nhất. Các tường kính trượt gấp được sang bên, nhờ đó sân trong trở thành phòng khách thật sự từ tháng tư đến tháng mười.',
    '140 m² interior': '140 m² phần trong nhà',
    'Private courtyard': 'Sân trong riêng tư',
    'Sleeps four': 'Ngủ thoải mái bốn người',
    'Outdoor shower': 'Vòi sen ngoài trời',
    'Fire bowl': 'Bồn lửa',
    'Two bedrooms': 'Hai phòng ngủ',
    'Set on the highest point of the ridge, the residence is a single forty-metre wall of glass held between two stone ends. Bedrooms, kitchen and living space all share the same uninterrupted view west to the Sierra Alhamilla.': 'Đặt ở điểm cao nhất của sống lưng núi, dãy nhà là một bức tường kính dài bốn mươi mét neo giữ giữa hai đầu đá. Phòng ngủ, bếp và không gian sinh hoạt cùng chia sẻ một tầm nhìn không ngắt về hướng tây ra dãy Sierra Alhamilla.',
    'A sunken terrace and private pool sit below the line of sight, so the horizon is never broken.': 'Bậc thềm lõm sâu và hồ riêng nằm dưới đường tầm nhìn, nhờ đó chân trời không bao giờ bị cắt.',
    '260 m² interior': '260 m² phần trong nhà',
    'Three bedrooms': 'Ba phòng ngủ',
    'Sleeps six': 'Ngủ thoải mái sáu người',
    'Private pool': 'Hồ bơi riêng',
    'Chef\'s kitchen': 'Bếp chuẩn đầu bếp',
    'Sunken terrace': 'Bậc thềm lõm sâu',
    'Shared spaces, shaped for stillness.': 'Không gian dùng chung, được định hình cho sự tĩnh lặng.',
    'Sixty metres of still water, heated in winter, dark-lined to mirror the sky.': 'Sáu mươi mét mặt nước tĩnh lặng, sưởi ấm vào mùa đông, phủ viền tối để soi gương cả bầu trời.',
    'Breakfast until noon, dinner from eight. Produce from farms in the Andarax valley.': 'Bữa sáng đến tận trưa, bữa tối từ tám giờ. Nguyên liệu từ các nông trại vùng thung lũng Andarax.',
    'Library Lounge': 'Lounge Thư Viện',
    'Books on architecture and the desert, tea all day, no screens.': 'Sách về kiến trúc và sa mạc, trà phục vụ cả ngày, không màn hình.',
    'Sauna, warm stone room and a cold pool cut into the hillside.': 'Sauna, phòng đá ấm và một hồ nước lạnh cắt vào sườn dốc.',
    'Before you arrive': 'Trước khi bạn đến',
    'Rates and availability are shared on request by our reservations team.': 'Bảng giá và chỗ trống được bộ phận đặt phòng gửi theo yêu cầu.',
    'Check-in and check-out': 'Nhận phòng – trả phòng',
    'Check-in from 3 pm, check-out until noon. Late departures can be arranged when the residence is free.': 'Nhận phòng từ 3 giờ chiều, trả phòng trước 12 giờ trưa. Việc rời muộn có thể bố trí khi dãy nhà còn trống.',
    'Getting here': 'Di chuyển đến đây',
    'Almería airport is 35 minutes by car, Málaga about two hours. We can arrange transfers from either.': 'Sân bay Almería cách 35 phút đi ô tô, Málaga khoảng hai tiếng. Chúng tôi có thể sắp xếp xe đón từ cả hai nơi.',
    'Children': 'Trẻ em',
    'Families are welcome in Courtyard Villas and Horizon Residences. Desert Suites are designed for two adults.': 'Các gia đình được chào đón ở Villa Sân trong và Nhà Chân Trời. Suite Sa mạc được thiết kế cho hai người lớn.',
    'Accessibility': 'Khả năng tiếp cận',
    'Two Desert Suites have step-free access and a level shower. Paths between buildings are ramped throughout.': 'Hai căn Suite Sa mạc có lối vào không bậc thang và vòi sen cùng mặt bằng. Các lối đi giữa các công trình có dốc xuyên suốt.',

    // Trang trải nghiệm
    'Days measured by light.': 'Những ngày được đo bằng ánh sáng.',
    'From the first line of sun on the dunes to the last star overhead, each day here follows the desert\'s own rhythm.': 'Từ dòng nắng đầu tiên đổ lên cồn cát đến ngôi sao cuối cùng trên đỉnh đầu, mỗi ngày tại đây đi theo nhịp riêng của sa mạc.',
    'Night sky, uninterrupted': 'Bầu trời đêm không ngắt quãng',
    'With no town lights for thirty kilometres, the Milky Way rises clearly over the ridge. Our astronomer leads sessions on the roof terrace with a 14-inch telescope, blankets and hot almond milk.': 'Cách xa ánh đèn phố ba mươi cây số, dải Ngân Hà mọc rõ trên sống lưng núi. Nhà thiên văn của chúng tôi dẫn các buổi quan sát trên thềm mái với kính thiên văn 14 inch, chăn ấm và sữa hạnh nhân nóng.',
    'Nightly / 90 minutes': 'Hàng đêm / 90 phút',
    'Into the canyons': 'Vào sâu các hẻm núi',
    'Guided walks through the dry ravines of the Rambla de Tabernas, where layers of rock record millions of years. Routes range from a gentle hour to a full day with lunch in the shade of a cliff.': 'Các buổi đi bộ có hướng dẫn xuyên qua hẻm khô của Rambla de Tabernas, nơi những lớp đá ghi lại hàng triệu năm. Các tuyến kéo dài từ một giờ nhẹ nhàng đến trọn một ngày với bữa trưa trong bóng vách đá.',
    'Daily at sunrise / 2 to 7 hours': 'Hàng ngày lúc bình minh / 2 đến 7 tiếng',
    'Dinner where the road ends.': 'Bữa tối nơi con đường kết thúc.',
    'Once a week the kitchen moves out to a long table on the dunes. Lamb slow-cooked in clay, almonds, red prawns from Garrucha and wine from the hills of Laujar, served as the sky turns from orange to violet.': 'Mỗi tuần một lần, bếp chuyển ra một bàn dài trên cồn cát. Thịt cừu nấu chậm trong gốm, hạnh nhân, tôm đỏ từ Garrucha và rượu từ những ngọn đồi Laujar, dọn ra khi trời chuyển từ cam sang tím.',
    'Gather': 'Họp mặt',
    'Sunset course': 'Suất hoàng hôn',
    'Fire and stars': 'Lửa và sao',
    'Thursdays, April to October. Twelve guests at most.': 'Thứ năm, từ tháng tư đến tháng mười. Tối đa mười hai khách.',
    'Slow hours by the water': 'Những giờ êm đềm bên mặt nước',
    'The hottest part of the day is for doing very little. Shaded loungers along the reflecting pool, cold mint tea, and a massage in the open pavilion when the breeze picks up.': 'Khoảng nóng nhất của ngày dành cho việc gần như không làm gì. Ghế nghỉ có bóng mát dọc hồ gương, trà bạc hà lạnh, và một buổi massage trong pavilion mở khi gió lộng dần.',
    'Every afternoon / 13:00 to 17:00': 'Mỗi buổi chiều / 13:00 đến 17:00',
    'The makers of Almería': 'Nghệ nhân tại Almería',
    'Half-day visits with the people who keep the region\'s crafts alive, arranged in small groups and always with time to talk.': 'Các buổi tham quan nửa ngày cùng những người vẫn giữ nghề thủ công của vùng sống động, sắp xếp theo nhóm nhỏ và luôn có thời gian trò chuyện.',
    'Pottery in Níjar': 'Gốm ở Níjar',
    'Throw a bowl with a family of potters working the same clay for four generations.': 'Nặn một chiếc bát cùng một gia đình thợ gốm đã làm nghề trên cùng một lớp đất đến bốn thế hệ.',
    'Esparto weaving': 'Dệt cỏ esparto',
    'Learn to braid the wild grass of the hills into baskets and mats.': 'Học bện loại cỏ hoang của vùng đồi thành rổ và chiếu.',
    'An old olive mill': 'Một cối xay olive lâu đời',
    'Taste the new season\'s oil at a stone mill in the Alpujarra foothills.': 'Nếm thử dầu mùa vụ mới tại một cối đá ở chân đồi Alpujarra.',
    'The horizon is the whole programme.': 'Chân trời là toàn bộ chương trình.',
    'Experiences are arranged by our hosts once your stay is confirmed. Tell us what interests you and we will plan the days around the light.': 'Các trải nghiệm được đội chủ nhà sắp xếp sau khi kỳ lưu trú của bạn được xác nhận. Cho chúng tôi biết điều gì bạn quan tâm, chúng tôi sẽ lên kế hoạch các ngày xoay quanh ánh sáng.'
  };

  // Tiêu đề tab theo từng trang (khóa = tiêu đề gốc)
  var T_TITLE = {
    'SANDLINE | Architecture Shaped by the Land': 'SANDLINE | Kiến trúc được định hình bởi đất',
    'About — SANDLINE': 'Giới thiệu — SANDLINE',
    'Accommodation — SANDLINE': 'Lưu trú — SANDLINE',
    'Experiences — SANDLINE': 'Trải nghiệm — SANDLINE'
  };

  // Mô tả meta theo từng trang (khóa = phần "- meta-desc" gắn đầu chuỗi gốc)
  var T_META = {
    'SANDLINE is a contemporary desert resort of concrete, stone and long light: twenty-two residences set into the land of southern Spain.': 'SANDLINE là khu nghỉ sa mạc đương đại của bê tông, đá và ánh sáng dài: hai mươi hai dãy nhà nằm trong vùng đất của miền nam Tây Ban Nha.',
    'The design idea behind SANDLINE: stone, concrete, wood and glass shaped by the desert, the sun and long shadows.': 'Ý tưởng thiết kế phía sau SANDLINE: đá, bê tông, gỗ và kính được định hình bởi sa mạc, mặt trời và những bóng đổ dài.',
    'Desert Suite, Courtyard Villa and Horizon Residence: three architectural ways to stay at SANDLINE, plus pools, dining and thermal baths.': 'Suite Sa mạc, Villa Sân trong và Nhà Chân Trời: ba cách lưu trú mang tính kiến trúc tại SANDLINE, cùng các hồ bơi, nhà hàng và suối khoáng nóng.',
    'Stargazing, canyon walks, desert dining, quiet hours by the pool and the crafts of Almería: experiences at SANDLINE.': 'Ngắm sao, đi bộ hẻm núi, bữa tối giữa sa mạc, những giờ êm bên hồ và nghề thủ công của Almería: trải nghiệm tại SANDLINE.'
  };

  // ---------- Gom nội dung cần dịch ----------
  var pairs = [];   // {node, en}
  var splits = [];  // {el, en}
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, IFRAME: 1 };

  function collect() {
    if (!document.body) return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || p.nodeType !== 1 || SKIP[p.nodeName]) return NodeFilter.FILTER_REJECT;
        // Tiêu đề data-split được xử lý riêng theo phần tử
        if (p.closest('[data-split]')) return NodeFilter.FILTER_REJECT;
        var t = norm(n.nodeValue);
        if (!t || !T[t]) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = walker.nextNode())) pairs.push({ node: n, en: norm(n.nodeValue) });

    Array.prototype.forEach.call(document.querySelectorAll('[data-split]'), function (el) {
      var t = norm(el.textContent);
      if (T[t]) splits.push({ el: el, en: t });
    });
  }

  function swapTitle(lang) {
    var cur = document.title, next = null;
    for (var k in T_TITLE) {
      if (lang === 'vi' ? k === cur : T_TITLE[k] === cur) { next = lang === 'vi' ? T_TITLE[k] : k; break; }
    }
    if (next) document.title = next;
  }

  function swapMeta(lang) {
    var meta = document.querySelector('meta[name="description"]');
    if (!meta) return;
    var cur = meta.getAttribute('content'), next = null;
    for (var k in T_META) {
      if (lang === 'vi' ? k === cur : T_META[k] === cur) { next = lang === 'vi' ? T_META[k] : k; break; }
    }
    if (next) meta.setAttribute('content', next);
  }

  function apply(lang) {
    var vi = lang === 'vi';
    html.setAttribute('lang', lang);
    swapTitle(lang);
    swapMeta(lang);
    pairs.forEach(function (p) { p.node.nodeValue = vi ? T[p.en] : p.en; });
    splits.forEach(function (s) {
      s.el.textContent = vi ? T[s.en] : s.en;
      if (s.el.getAttribute('aria-label')) s.el.setAttribute('aria-label', norm(s.el.textContent));
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang-toggle]'), function (btn) {
      var on = btn.getAttribute('data-lang-toggle') === lang;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    try { window.dispatchEvent(new CustomEvent('sandline:lang', { detail: lang })); } catch (e) {}
  }

  function current() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    return saved || (html.getAttribute('lang') || 'en').slice(0, 2).toLowerCase();
  }

  collect();
  apply(current());

  Array.prototype.forEach.call(document.querySelectorAll('[data-lang-toggle]'), function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang-toggle');
      if (lang !== current()) apply(lang);
    });
  });

  window.I18N = {
    get: current,
    set: function (lang) { if ((lang === 'vi' || lang === 'en') && lang !== current()) apply(lang); }
  };
})();
