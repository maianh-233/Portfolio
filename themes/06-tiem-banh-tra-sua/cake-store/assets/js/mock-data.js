/* =====================================================================
 * mock-data.js - Dữ liệu giả cho prototype "Tiệm Bánh Kem"
 * Nguồn trường dữ liệu: SRS Phần 7 + Phần 9 (screens/*.md).
 * Mọi ngày tháng tính tương đối theo ngày mở prototype để demo luôn đúng
 * (đơn "Nhận hôm nay", khuyến mãi "Đang diễn ra"...).
 * Tên tiệm, SĐT, giờ mở cửa, tài khoản ngân hàng: DỮ LIỆU GIẢ [CẦN XÁC NHẬN].
 * ===================================================================== */
(function () {
  'use strict';

  /* ---------- Tiện ích ngày tương đối ---------- */
  var TODAY = new Date();
  TODAY.setHours(0, 0, 0, 0);
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  /** Trả về 'YYYY-MM-DD' cách hôm nay `offset` ngày */
  function d(offset) {
    var x = new Date(TODAY.getTime());
    x.setDate(x.getDate() + offset);
    return x.getFullYear() + '-' + pad(x.getMonth() + 1) + '-' + pad(x.getDate());
  }
  /** Trả về ISO datetime cách hôm nay `offset` ngày, lúc hh:mm */
  function dt(offset, hh, mm) { return d(offset) + 'T' + pad(hh) + ':' + pad(mm || 0) + ':00'; }
  /** Mã đơn TB + yyMMdd + 3 số */
  function code(offset, n) { return 'TB' + d(offset).slice(2).replace(/-/g, '') + ('00' + n).slice(-3); }

  /* Bộ sinh số giả có hạt giống (để dữ liệu thống kê ổn định giữa các lần mở) */
  function rng(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  var rand = rng(20261013);

  function img(seed, w, h) { return 'https://picsum.photos/seed/' + seed + '/' + (w || 800) + '/' + (h || 800); }

  /* ---------- Thông tin tiệm (FR-003) ---------- */
  var shop = {
    name: 'Tiệm Bánh Kem',
    slogan: 'Ngọt ngào cho mọi dịp',
    slogan_en: 'Sweetness for every occasion',
    intro: 'Bánh kem làm mới mỗi ngày, kem tươi mịn, ít ngọt. Viết lời chúc miễn phí trên mọi chiếc bánh.',
    intro_en: 'Fresh cakes baked daily with light, silky cream. Free message on every cake.',
    address: '292/12 Cách Mạng Tháng 8',
    mapQuery: '292/12 Cách Mạng Tháng 8',
    phone: '0938 512 674',
    zalo: '0938512674',
    hours: [
      { days: 'Thứ 2 - Thứ 6', days_en: 'Mon - Fri', open: '08:00', close: '21:00' },
      { days: 'Thứ 7 - Chủ nhật', days_en: 'Sat - Sun', open: '07:30', close: '21:30' }
    ],
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    heroImage: img('tiem-banh-hero-dau-tay', 1200, 1400),
    heroImage2: img('tiem-banh-hero-nen', 600, 600),
    story: [
      'Tiệm bắt đầu từ căn bếp nhỏ trong hẻm Cách Mạng Tháng 8, nơi những chiếc bánh đầu tiên được làm cho bạn bè và người thân vào dịp sinh nhật.',
      'Tiệm chọn kem tươi, trái cây theo mùa và giảm bớt độ ngọt để ai cũng ăn được thêm miếng nữa. Mỗi chiếc bánh được làm theo đơn, không làm sẵn để bày.',
      'Tiệm vẫn còn nhỏ, nhận số đơn vừa sức mỗi ngày để giữ chất lượng. Mong được làm bánh cho những ngày vui của bạn.'
    ],
    story_en: [
      'We started in a tiny kitchen off Cach Mang Thang 8 street, baking birthday cakes for friends and family.',
      'We use fresh cream, seasonal fruit and less sugar so everyone can enjoy another slice. Every cake is made to order.',
      'We are still small and take a limited number of orders each day to keep the quality. We would love to bake for your happy days.'
    ],
    storyImage: img('tiem-banh-chu-tiem', 900, 1100)
  };

  /* ---------- Cài đặt vận hành (FR-034, SCR-023) ---------- */
  var settings = {
    minDays: 2,                // OI-001 [CẦN XÁC NHẬN]
    defaultCapacity: 10,       // OI-002 [CẦN XÁC NHẬN]
    timeSlots: ['08:00-10:00', '10:00-12:00', '14:00-16:00', '16:00-18:00', '18:00-20:00'], // OI-017
    depositRate: 50,           // OI-003 [CẦN XÁC NHẬN]
    pointValue: 100,           // 1 điểm = 100đ, OI-006 [CẦN XÁC NHẬN]
    bank: { name: 'Vietcombank', accountNo: '0071 0004 82913', accountName: 'NGUYEN THI MAI' },
    momo: '0938512674',
    zalopay: '0938512674',
    qrImage: img('tiem-banh-ma-qr', 400, 400),
    shippingTable: [
      { area: 'Dưới 3 km', fee: 15000 },
      { area: '3 - 6 km', fee: 25000 },
      { area: '6 - 10 km', fee: 40000 }
    ],
    notifyEmails: ['chutiem@tiembanhkem.vn'],
    reviewApproval: true,      // đánh giá mới chờ tiệm duyệt, OI-013 [CẦN XÁC NHẬN]
    dayOverrides: {},          // { 'YYYY-MM-DD': { capacity: 20, off: true } }
    booked: {}                 // số bánh đã nhận mỗi ngày (bổ sung bên dưới)
  };
  settings.booked[d(2)] = 6;
  settings.booked[d(3)] = 5;   // + 4 bánh trong đơn mẫu = 9 -> gần đầy
  settings.booked[d(4)] = 10;  // hết suất
  settings.booked[d(5)] = 4;
  settings.booked[d(7)] = 10;  // hết suất
  settings.booked[d(9)] = 8;
  settings.dayOverrides[d(6)] = { off: true };            // ngày nghỉ
  settings.dayOverrides[d(10)] = { capacity: 20 };         // ngày lễ tăng sức chứa

  /* ---------- Bánh (FR-007 → FR-009, FR-031) ---------- */
  function sizes3(p1, p2, p3) {
    var s = [
      { id: 's16', label: '16 cm', servings: '6-8', price: p1, active: true },
      { id: 's20', label: '20 cm', servings: '10-12', price: p2, active: true }
    ];
    if (p3) s.push({ id: 's24', label: '24 cm', servings: '15-20', price: p3, active: true });
    return s;
  }
  function cake(id, slug, name, name_en, flavor, flavor_en, sizes, o) {
    o = o || {};
    return {
      id: id, slug: slug, name: name, name_en: name_en,
      flavor: flavor, flavor_en: flavor_en,
      description: o.desc || '', description_en: o.desc_en || '',
      ingredients: o.ing || 'Bột mì, trứng gà, sữa tươi, kem tươi, đường.',
      allergens: o.alg || ['Trứng', 'Sữa', 'Gluten'],
      sizes: sizes,
      images: [img('cake-' + slug, 800, 1000), img('cake-' + slug + '-2', 800, 1000), img('cake-' + slug + '-3', 800, 1000)],
      status: o.status || 'active',
      featured: !!o.featured,
      bestSeller: !!o.best,
      isNew: !!o.isNew,
      sold: o.sold || Math.round(10 + rand() * 60),
      createdAt: d(o.age != null ? -o.age : -Math.round(40 + rand() * 200))
    };
  }

  var cakes = [
    cake(1, 'banh-dau-tay-kem-tuoi', 'Bánh dâu tây kem tươi', 'Strawberry fresh cream cake', 'Dâu tây', 'Strawberry', sizes3(280000, 390000, 520000),
      { best: true, featured: true, sold: 124, desc: 'Cốt bông lan vani mềm, kẹp kem tươi và dâu tây Đà Lạt cắt lát. Phủ kem tươi ít ngọt, trang trí dâu nguyên trái.', desc_en: 'Soft vanilla sponge layered with fresh cream and Da Lat strawberries.', ing: 'Bột mì, trứng gà, sữa tươi, kem tươi, dâu tây Đà Lạt, đường.' }),
    cake(2, 'banh-socola-hanh-nhan', 'Bánh socola hạnh nhân', 'Chocolate almond cake', 'Socola', 'Chocolate', sizes3(300000, 420000, 560000),
      { best: true, sold: 98, desc: 'Cốt socola đậm vị, kem ganache và hạnh nhân rang giòn.', desc_en: 'Rich chocolate sponge, ganache and toasted almonds.', ing: 'Bột mì, trứng gà, socola đen 55%, kem tươi, hạnh nhân, bơ.', alg: ['Trứng', 'Sữa', 'Hạt', 'Gluten'] }),
    cake(3, 'banh-matcha-dau-do', 'Bánh matcha đậu đỏ', 'Matcha red bean cake', 'Matcha', 'Matcha', sizes3(290000, 400000, 540000),
      { isNew: true, age: 6, desc: 'Cốt matcha Nhật thơm nhẹ, xen lớp đậu đỏ sên mật và kem tươi.', desc_en: 'Japanese matcha sponge with sweet red bean and fresh cream.', ing: 'Bột mì, trứng gà, bột matcha, đậu đỏ, kem tươi, đường.' }),
    cake(4, 'banh-tiramisu', 'Bánh tiramisu', 'Tiramisu cake', 'Cà phê', 'Coffee', sizes3(320000, 450000, 600000),
      { best: true, sold: 87, desc: 'Lớp ladyfinger thấm cà phê, kem mascarpone béo nhẹ, rắc cacao.', desc_en: 'Coffee soaked ladyfingers with light mascarpone cream.', ing: 'Bánh ladyfinger, cà phê, phô mai mascarpone, trứng gà, kem tươi, cacao.' }),
    cake(5, 'banh-xoai-chanh-day', 'Bánh xoài chanh dây', 'Mango passion fruit cake', 'Xoài', 'Mango', sizes3(270000, 380000, 510000),
      { isNew: true, age: 4, desc: 'Mousse xoài cát Hòa Lộc, thạch chanh dây chua dịu, cốt bông lan mỏng.', desc_en: 'Mango mousse with passion fruit jelly on a thin sponge.', ing: 'Xoài cát Hòa Lộc, chanh dây, kem tươi, gelatin, bột mì, trứng gà.' }),
    cake(6, 'banh-pho-mai-viet-quat', 'Bánh phô mai việt quất', 'Blueberry cheesecake', 'Việt quất', 'Blueberry', sizes3(310000, 430000, 580000),
      { best: true, sold: 76, desc: 'Phô mai nướng mịn, sốt việt quất nấu tay, đế bánh quy bơ.', desc_en: 'Baked cheesecake with homemade blueberry sauce.', ing: 'Phô mai kem, trứng gà, việt quất, bánh quy bơ, đường.' }),
    cake(7, 'banh-vani-hoa-kem', 'Bánh vani hoa kem bắt bông', 'Vanilla piped flower cake', 'Vani', 'Vanilla', sizes3(250000, 350000, 480000),
      { desc: 'Cốt vani mềm, phủ kem bơ bắt bông hoa pastel. Hợp tặng mẹ, tặng cô.', desc_en: 'Vanilla sponge decorated with pastel buttercream flowers.', ing: 'Bột mì, trứng gà, sữa tươi, bơ, đường, tinh chất vani.' }),
    cake(8, 'banh-khoai-mon-dua-non', 'Bánh khoai môn dừa non', 'Taro young coconut cake', 'Khoai môn', 'Taro', sizes3(270000, 380000, 500000),
      { isNew: true, age: 9, desc: 'Kem khoai môn tím bùi bùi, cơm dừa non mềm, cốt bông lan lá dứa.', desc_en: 'Taro cream with young coconut on pandan sponge.', ing: 'Khoai môn, dừa non, kem tươi, bột mì, trứng gà, lá dứa.' }),
    cake(9, 'banh-red-velvet', 'Bánh red velvet kem phô mai', 'Red velvet cream cheese cake', 'Phô mai', 'Cream cheese', sizes3(320000, 440000, 590000),
      { best: true, sold: 69, desc: 'Cốt red velvet mềm ẩm, kem phô mai chua nhẹ.', desc_en: 'Moist red velvet with tangy cream cheese frosting.', ing: 'Bột mì, trứng gà, bơ sữa lên men, cacao, phô mai kem, đường.' }),
    cake(10, 'banh-socola-dau-tay', 'Bánh socola dâu tây', 'Chocolate strawberry cake', 'Socola', 'Chocolate', sizes3(310000, 430000, 570000),
      { desc: 'Cốt socola, kem tươi và dâu tây, phủ socola chảy.', desc_en: 'Chocolate sponge, fresh cream and strawberries with chocolate drip.', ing: 'Bột mì, trứng gà, socola, kem tươi, dâu tây.' }),
    cake(11, 'banh-tra-sua-tran-chau', 'Bánh trà sữa trân châu đường đen', 'Brown sugar boba milk tea cake', 'Trà sữa', 'Milk tea', sizes3(290000, 400000, 530000),
      { isNew: true, age: 2, desc: 'Kem trà sữa thơm, trân châu đường đen dẻo, cốt bông lan trà.', desc_en: 'Milk tea cream with brown sugar boba.', ing: 'Trà đen, sữa tươi, kem tươi, trân châu, đường đen, bột mì, trứng gà.' }),
    cake(12, 'banh-chuoi-caramel', 'Bánh chuối caramel', 'Banana caramel cake', 'Caramel', 'Caramel', sizes3(260000, 360000, 490000),
      { desc: 'Cốt chuối nướng thơm, sốt caramel mặn ngọt, kem tươi.', desc_en: 'Banana sponge with salted caramel and fresh cream.', ing: 'Chuối, bột mì, trứng gà, bơ, đường, kem tươi, muối biển.' }),
    cake(13, 'banh-dua-luoi-sua-chua', 'Bánh dưa lưới kem sữa chua', 'Melon yogurt cream cake', 'Dưa lưới', 'Melon', sizes3(280000, 390000, 520000),
      { isNew: true, age: 1, desc: 'Dưa lưới ruột cam ngọt mát, kem sữa chua nhẹ, cốt bông lan sữa.', desc_en: 'Sweet melon with light yogurt cream.', ing: 'Dưa lưới, sữa chua, kem tươi, bột mì, trứng gà.' }),
    cake(14, 'banh-ca-phe-muoi', 'Bánh cà phê muối', 'Salted coffee cake', 'Cà phê', 'Coffee', sizes3(290000, 400000, 530000),
      { best: true, sold: 64, desc: 'Cốt cà phê phin, lớp kem muối béo mặn nhẹ.', desc_en: 'Vietnamese drip coffee sponge with salted cream.', ing: 'Cà phê, bột mì, trứng gà, kem tươi, muối, đường.' }),
    cake(15, 'banh-mousse-chanh-day', 'Bánh mousse chanh dây', 'Passion fruit mousse', 'Chanh dây', 'Passion fruit', sizes3(260000, 360000),
      { desc: 'Mousse chanh dây chua ngọt, mát lạnh, hợp ngày nóng.', desc_en: 'Tangy, chilled passion fruit mousse.', ing: 'Chanh dây, kem tươi, gelatin, trứng gà, bánh quy.' }),
    cake(16, 'banh-pho-mai-nhat', 'Bánh phô mai Nhật', 'Japanese cotton cheesecake', 'Phô mai', 'Cream cheese', sizes3(240000, 340000),
      { best: true, sold: 58, desc: 'Bánh phô mai nướng kiểu Nhật, mềm xốp như bông, ít ngọt.', desc_en: 'Fluffy Japanese cotton cheesecake.', ing: 'Phô mai kem, trứng gà, sữa tươi, bột mì, đường.' }),
    cake(17, 'banh-oreo-kem-sua', 'Bánh oreo kem sữa', 'Cookies and cream cake', 'Socola', 'Chocolate', sizes3(270000, 380000, 500000),
      { best: true, sold: 71, desc: 'Kem sữa trộn bánh oreo nghiền, cốt socola. Trẻ con rất thích.', desc_en: 'Cookies and cream frosting on chocolate sponge.', ing: 'Bánh oreo, kem tươi, sữa, bột mì, trứng gà, cacao.' }),
    cake(18, 'banh-dao-tra-o-long', 'Bánh đào trà ô long', 'Peach oolong cake', 'Đào', 'Peach', sizes3(300000, 410000, 540000),
      { desc: 'Kem trà ô long thơm thanh, đào ngâm giòn, cốt bông lan trà.', desc_en: 'Oolong tea cream with crunchy peach.', ing: 'Trà ô long, đào ngâm, kem tươi, bột mì, trứng gà.' }),
    cake(19, 'banh-socola-ruby-mam-xoi', 'Bánh socola ruby mâm xôi', 'Ruby chocolate raspberry cake', 'Mâm xôi', 'Raspberry', sizes3(380000, 520000, 690000),
      { desc: 'Mousse socola ruby hồng tự nhiên, nhân mâm xôi chua nhẹ.', desc_en: 'Ruby chocolate mousse with raspberry centre.', ing: 'Socola ruby, mâm xôi, kem tươi, trứng gà, bột hạnh nhân.', alg: ['Trứng', 'Sữa', 'Hạt'] }),
    cake(20, 'banh-kem-hai-tang', 'Bánh kem hai tầng kỷ niệm', 'Two tier celebration cake', 'Vani', 'Vanilla',
      [{ id: 's1620', label: '16 + 20 cm', servings: '25-30', price: 980000, active: true },
       { id: 's2024', label: '20 + 24 cm', servings: '35-40', price: 1450000, active: true }],
      { featured: true, desc: 'Bánh hai tầng cho tiệc cưới nhỏ, kỷ niệm. Hương vị tầng có thể chọn khi tiệm gọi xác nhận.', desc_en: 'Two tier cake for small weddings and anniversaries.' }),
    cake(21, 'banh-gung-giang-sinh', 'Bánh mứt gừng Giáng sinh', 'Gingerbread Christmas cake', 'Gừng', 'Ginger', sizes3(300000, 420000),
      { status: 'inactive', desc: 'Bánh theo mùa, hiện không còn bán.' })
  ];

  /* ---------- Đánh giá (FR-023 → FR-025) ---------- */
  var reviewTexts = [
    'Bánh ngon, kem không ngấy, mẹ mình khen quá trời.',
    'Giao đúng giờ, bánh đẹp y hình. Lần sau ủng hộ tiếp.',
    'Cốt bánh mềm, ít ngọt đúng ý. Lời chúc viết rất xinh.',
    'Trái cây tươi, kem mịn. Cả nhà ăn hết sạch.',
    'Tiệm gọi xác nhận nhanh, tư vấn nhiệt tình.',
    'Hơi ngọt hơn mình nghĩ một chút nhưng vẫn ngon.',
    'Bánh đẹp, chụp hình sống ảo xịn. Giá hợp lý.',
    'Đặt gấp vẫn được tiệm hỗ trợ, cảm ơn tiệm nhiều.',
    'Kem hơi chảy do trời nóng, còn lại ổn.',
    'Mua lần thứ ba rồi, chưa bao giờ thất vọng.'
  ];
  var maskNames = ['L***n', 'K***a', 'V***y', 'H***y', 'T***c', 'B***o', 'D***n', 'T***ư', 'K***t', 'L***h', 'A***n', 'Y***n', 'H***à', 'P***g', 'N***i'];
  var reviews = [];
  var rid = 1;
  cakes.forEach(function (c) {
    if (c.id === 11 || c.id === 13 || c.status !== 'active') return; // bánh chưa có đánh giá -> demo trạng thái trống
    var n = 2 + Math.floor(rand() * 5);
    for (var i = 0; i < n; i++) {
      var r = rand();
      var stars = r > 0.35 ? 5 : r > 0.12 ? 4 : r > 0.05 ? 3 : 2;
      reviews.push({
        id: rid++, cakeId: c.id, sizeLabel: c.sizes[Math.floor(rand() * c.sizes.length)].label,
        name: maskNames[Math.floor(rand() * maskNames.length)],
        rating: stars,
        content: reviewTexts[Math.floor(rand() * reviewTexts.length)],
        images: rand() > 0.75 ? [img('review-' + c.slug + '-' + i, 600, 600)] : [],
        date: d(-Math.round(2 + rand() * 80)),
        orderCode: code(-Math.round(5 + rand() * 80), 1 + Math.floor(rand() * 9)),
        status: 'visible'
      });
    }
  });
  // Một vài đánh giá chờ duyệt / đã ẩn để demo SCR-019
  reviews.push({ id: rid++, cakeId: 2, sizeLabel: '16 cm', name: 'M***h', rating: 1, content: 'Bánh giao trễ 30 phút, kem bị lệch một bên.', images: [], date: d(-1), orderCode: code(-4, 2), status: 'pending' });
  reviews.push({ id: rid++, cakeId: 7, sizeLabel: '20 cm', name: 'Q***h', rating: 5, content: 'Hoa kem bắt đẹp quá, mẹ mình không nỡ cắt.', images: [img('review-hoa-kem', 600, 600)], date: d(0), orderCode: code(-3, 1), status: 'pending' });
  reviews.push({ id: rid++, cakeId: 1, sizeLabel: '20 cm', name: 'X***x', rating: 1, content: 'Ghé trang của mình để mua hàng giá rẻ...', images: [], date: d(-6), orderCode: code(-9, 4), status: 'hidden' });

  /* ---------- Cảm nhận khách ở trang chủ (FR-004) ---------- */
  var testimonials = [
    { id: 1, name: 'Ngọc Lan', avatar: img('khach-ngoc-lan', 160, 160), rating: 5, content: 'Bánh dâu tây của tiệm là chân ái, kem mát mà không ngấy. Sinh nhật mẹ năm nào cũng đặt ở đây.', visible: true },
    { id: 2, name: 'Minh Khoa', avatar: img('khach-minh-khoa', 160, 160), rating: 5, content: 'Đặt online nhanh, tiệm gọi xác nhận liền. Bánh tiramisu chuẩn vị.', visible: true },
    { id: 3, name: 'Thảo Vy', avatar: img('khach-thao-vy', 160, 160), rating: 5, content: 'Lời chúc viết tay xinh xỉu, bạn mình cảm động lắm luôn.', visible: true },
    { id: 4, name: 'Gia Huy', avatar: img('khach-gia-huy', 160, 160), rating: 4, content: 'Bánh red velvet ẩm mềm, giao tới văn phòng đúng giờ. Giá hợp lý.', visible: true },
    { id: 5, name: 'Mỹ Duyên', avatar: img('khach-my-duyen', 160, 160), rating: 5, content: 'Bánh xoài chanh dây mới ra ngon lắm, chua chua ngọt ngọt mát lạnh.', visible: true },
    { id: 6, name: 'Hải Yến', avatar: img('khach-hai-yen', 160, 160), rating: 5, content: 'Tiệm dễ thương, tư vấn kỹ chuyện dị ứng hạt cho bé nhà mình.', visible: false }
  ];

  /* ---------- Ảnh không gian tiệm (FR-002) ---------- */
  var gallery = [
    { src: img('khong-gian-quay-banh', 900, 900), alt: 'Quầy bánh của tiệm' },
    { src: img('khong-gian-goc-ngoi', 900, 900), alt: 'Góc ngồi nhỏ trong tiệm' },
    { src: img('khong-gian-bep', 900, 900), alt: 'Căn bếp làm bánh' },
    { src: img('khong-gian-trang-tri', 900, 900), alt: 'Bàn trang trí bánh' },
    { src: img('khong-gian-hop-banh', 900, 900), alt: 'Hộp bánh chờ giao' },
    { src: img('khong-gian-cua-tiem', 900, 900), alt: 'Cửa tiệm nhìn từ hẻm' }
  ];

  /* ---------- Bài viết (FR-005) ---------- */
  var posts = [
    { id: 1, slug: 'meo-giu-banh-kem-tuoi-lau', category: 'tips', title: 'Mẹo giữ bánh kem tươi lâu sau khi nhận', title_en: 'How to keep your fresh cream cake fresh', date: d(-1), status: 'published', cover: img('bai-meo-giu-banh', 1200, 750),
      excerpt: 'Bánh kem tươi nên để ngăn mát và dùng trong 24 giờ. Vài mẹo nhỏ giúp bánh giữ dáng đẹp tới lúc thổi nến.',
      body: [['p', 'Bánh kem tươi là món ngọt "khó tính" nhất trong tủ lạnh. Kem tươi gặp nóng là chảy, gặp lạnh quá lại khô mặt. Dưới đây là những điều tiệm luôn dặn khách khi nhận bánh.'], ['h2', 'Nhận bánh xong, cho vào ngăn mát ngay'], ['p', 'Nhiệt độ lý tưởng là 2 đến 6 độ C. Đừng để bánh ở ngăn đông vì kem sẽ bị tách nước khi rã đông.'], ['ul', ['Giữ nguyên hộp để bánh không bị ám mùi.', 'Tránh đặt cạnh sầu riêng, hành, tỏi.', 'Không xếp đồ nặng lên nóc hộp.']], ['h2', 'Lấy bánh ra trước 15 phút'], ['p', 'Bánh vừa lấy ra khỏi tủ sẽ hơi cứng. Để ở nhiệt độ phòng khoảng 15 phút cho kem mềm lại, cắt sẽ đẹp hơn.'], ['h2', 'Dùng trong 24 giờ'], ['p', 'Bánh có trái cây tươi nên ăn trong ngày. Phần bánh còn lại bọc màng thực phẩm sát mặt cắt và dùng trong 2 ngày.']] },
    { id: 2, slug: 'mung-20-10-giam-10', category: 'news', title: 'Mừng 20/10: giảm 10% cho các mẫu bánh tặng mẹ, tặng cô', title_en: 'Women\'s Day: 10% off selected cakes', date: d(-3), status: 'published', cover: img('bai-mung-20-10', 1200, 750),
      excerpt: 'Từ nay đến hết ngày 20/10, tiệm giảm 10% cho bánh dâu tây, xoài chanh dây, red velvet và matcha đậu đỏ.',
      body: [['p', 'Tháng mười là tháng của những lời cảm ơn. Tiệm giảm 10% cho bốn mẫu bánh được đặt nhiều nhất để tặng mẹ, tặng cô.'], ['ul', ['Bánh dâu tây kem tươi', 'Bánh xoài chanh dây', 'Bánh red velvet kem phô mai', 'Bánh matcha đậu đỏ']], ['p', 'Giá giảm được tự áp khi bạn đặt bánh trên trang web. Ngày 20/10 tiệm nhận nhiều đơn hơn ngày thường, bạn nhớ đặt sớm nha.']] },
    { id: 3, slug: 'chon-co-banh-theo-so-nguoi', category: 'tips', title: 'Chọn cỡ bánh theo số người ăn sao cho vừa', title_en: 'Choosing the right cake size', date: d(-8), status: 'published', cover: img('bai-chon-co-banh', 1200, 750),
      excerpt: 'Bánh 16 cm cho 6 đến 8 người, 20 cm cho 10 đến 12 người. Còn tiệc công ty thì sao?',
      body: [['p', 'Câu tiệm được hỏi nhiều nhất: "Nhà mình 10 người thì lấy cỡ nào?". Bảng dưới đây là gợi ý theo phần cắt vừa ăn.'], ['ul', ['16 cm: 6 đến 8 người', '20 cm: 10 đến 12 người', '24 cm: 15 đến 20 người', 'Bánh hai tầng: từ 25 người']], ['p', 'Nếu tiệc có nhiều món tráng miệng khác, bạn có thể chọn nhỏ hơn một cỡ.']] },
    { id: 4, slug: 'ra-mat-banh-tra-sua', category: 'news', title: 'Ra mắt bánh trà sữa trân châu đường đen', title_en: 'New: brown sugar boba milk tea cake', date: d(-2), status: 'published', cover: img('bai-banh-tra-sua', 1200, 750),
      excerpt: 'Món bánh được các bạn trẻ xin mãi cuối cùng cũng có mặt ở tiệm.',
      body: [['p', 'Kem trà sữa pha từ trà đen ủ lạnh, trân châu đường đen nấu mỗi sáng. Bánh có ba cỡ 16, 20 và 24 cm.'], ['p', 'Trân châu ngon nhất trong ngày nhận bánh, bạn nhớ thưởng thức sớm nhé.']] },
    { id: 5, slug: 'viet-loi-chuc-tren-banh', category: 'tips', title: 'Gợi ý 20 lời chúc ngắn viết trên bánh sinh nhật', title_en: '20 short messages for birthday cakes', date: d(-15), status: 'published', cover: img('bai-loi-chuc', 1200, 750),
      excerpt: 'Lời chúc trên bánh nên ngắn gọn dưới 50 ký tự để chữ viết to, rõ, đẹp.',
      body: [['p', 'Mặt bánh 16 cm chỉ đủ chỗ cho khoảng 25 đến 30 ký tự viết to. Dưới đây là vài gợi ý ngắn mà xinh.'], ['ul', ['Happy Birthday Mẹ yêu', 'Chúc bé tròn 1 tuổi', 'Mãi bên nhau nha', 'Cảm ơn cô đã dạy dỗ', 'Sinh nhật vui vẻ, sếp ơi']]] },
    { id: 6, slug: 'banh-it-ngot-co-ngon', category: 'news', title: 'Vì sao tiệm làm bánh ít ngọt?', title_en: 'Why our cakes are less sweet', date: d(-30), status: 'published', cover: img('bai-it-ngot', 1200, 750),
      excerpt: 'Ít đường hơn giúp vị trái cây và kem tươi rõ hơn, ăn hai miếng không ngấy.',
      body: [['p', 'Tiệm giảm khoảng một phần ba lượng đường so với công thức gốc. Bánh không chỉ đỡ ngấy mà còn giữ được vị chua nhẹ của trái cây.']] },
    { id: 7, slug: 'lich-nghi-le', category: 'news', title: 'Lịch nhận đơn dịp cuối năm', title_en: 'Year end order schedule', date: d(0), status: 'draft', cover: img('bai-lich-nghi', 1200, 750),
      excerpt: 'Bản nháp, chưa đăng.', body: [['p', 'Nội dung đang soạn.']] }
  ];

  /* ---------- Khuyến mãi (FR-035 → FR-038) ---------- */
  var promotions = [
    { id: 'KM03', name: 'Mừng 20/10', name_en: 'Women\'s Day', description: 'Giảm 10% cho các mẫu bánh tặng mẹ, tặng cô.', type: 'percent', value: 10, start: d(-3) + 'T00:00', end: d(7) + 'T23:59', scope: 'selected', cakeIds: [1, 3, 5, 9], enabled: true, banner: img('banner-20-10', 1600, 500) },
    { id: 'KM02', name: 'Trung thu sum vầy', name_en: 'Mid-autumn', description: 'Giảm 30.000đ cho bánh vị trà.', type: 'amount', value: 30000, start: d(-42) + 'T00:00', end: d(-26) + 'T23:59', scope: 'selected', cakeIds: [3, 11, 18], enabled: true, banner: '' },
    { id: 'KM04', name: 'Giáng sinh ngọt ngào', name_en: 'Sweet Christmas', description: 'Giảm 15% toàn bộ bánh.', type: 'percent', value: 15, start: d(60) + 'T00:00', end: d(72) + 'T23:59', scope: 'all', cakeIds: [], enabled: true, banner: '' },
    { id: 'KM01', name: 'Khai trương online', name_en: 'Online launch', description: 'Giảm 5% mọi bánh.', type: 'percent', value: 5, start: d(-90) + 'T00:00', end: d(-60) + 'T23:59', scope: 'all', cakeIds: [], enabled: false, banner: '' }
  ];

  /* ---------- Khách quen và điểm (theo SĐT) ---------- */
  var customers = [
    { phone: '0901234567', name: 'Nguyễn Ngọc Lan', points: 120, doneOrders: 5, last: d(-10), history: [
      { at: dt(-10, 18, 5), type: 'add', points: 41, order: code(-12, 2), note: 'Hoàn thành đơn' },
      { at: dt(-40, 17, 30), type: 'use', points: -30, order: code(-42, 1), note: 'Dùng điểm khi đặt bánh' },
      { at: dt(-41, 16, 0), type: 'add', points: 52, order: code(-45, 3), note: 'Hoàn thành đơn' }] },
    { phone: '0912345678', name: 'Bùi Anh Thư', points: 64, doneOrders: 2, last: d(-3), history: [{ at: dt(-3, 20, 0), type: 'add', points: 64, order: code(-6, 1), note: 'Hoàn thành đơn' }] },
    { phone: '0987654321', name: 'Ngô Tuấn Kiệt', points: 38, doneOrders: 1, last: d(-5), history: [{ at: dt(-5, 19, 10), type: 'add', points: 38, order: code(-8, 2), note: 'Hoàn thành đơn' }] },
    { phone: '0909888777', name: 'Lê Thảo Vy', points: 210, doneOrders: 8, last: d(-20), history: [{ at: dt(-20, 11, 0), type: 'add', points: 45, order: code(-22, 1), note: 'Hoàn thành đơn' }] },
    { phone: '0933221100', name: 'Phạm Gia Huy', points: 15, doneOrders: 1, last: d(-33), history: [{ at: dt(-33, 9, 0), type: 'add', points: 15, order: code(-35, 4), note: 'Hoàn thành đơn' }] }
  ];

  /* ---------- Đơn hàng (FR-010 → FR-030) ---------- */
  function item(cakeId, sizeId, qty, message, samples) {
    var c = cakes.filter(function (x) { return x.id === cakeId; })[0];
    var s = c.sizes.filter(function (x) { return x.id === sizeId; })[0];
    return { cakeId: cakeId, cakeName: c.name, sizeId: sizeId, sizeLabel: s.label, servings: s.servings, qty: qty, unitPrice: s.price, message: message || '', sampleImages: samples || [], image: c.images[0] };
  }
  function order(o) {
    o.history = o.history || [{ at: o.createdAt, by: 'Khách', text: 'Khách gửi đơn' }];
    o.depositRate = settings.depositRate;
    o.paid = o.paid || 0;
    o.pointsUsed = o.pointsUsed || 0;
    o.discount = o.discount || 0;
    o.shippingFee = o.shippingFee == null ? (o.delivery.type === 'pickup' ? 0 : null) : o.shippingFee;
    o.internalNote = o.internalNote || '';
    o.reviewed = o.reviewed || {};
    return o;
  }
  var orders = [
    order({ code: code(0, 1), createdAt: dt(0, 9, 12), status: 'pending', seen: false,
      customer: { name: 'Nguyễn Ngọc Lan', phone: '0901234567', email: 'ngoclan.nguyen@gmail.com', note: 'Giao trước 15h giúp mình nha.' },
      items: [item(1, 's20', 1, 'Happy Birthday Mẹ yêu', [img('mau-banh-hoa-hong', 600, 600)])],
      delivery: { type: 'delivery', address: '45 Nguyễn Thượng Hiền, Phường 5', date: d(2), slot: '14:00-16:00' },
      payment: { method: 'bank' }, discount: 39000 }),
    order({ code: code(0, 2), createdAt: dt(0, 10, 40), status: 'pending', seen: false,
      customer: { name: 'Trần Minh Khoa', phone: '0938111222', email: '', note: '' },
      items: [item(2, 's16', 1, 'Chúc mừng sinh nhật Khang')],
      delivery: { type: 'pickup', address: '', date: d(2), slot: '08:00-10:00' },
      payment: { method: 'wallet' } }),
    order({ code: code(-1, 3), createdAt: dt(-1, 20, 15), status: 'pending', seen: true,
      customer: { name: 'Đặng Quốc Bảo', phone: '0977345612', email: 'quocbao.dang@outlook.com', note: '' },
      items: [item(14, 's20', 1, ''), item(16, 's16', 1, '')],
      delivery: { type: 'delivery', address: '18 Trần Quốc Thảo, Phường Võ Thị Sáu', date: d(3), slot: '18:00-20:00' },
      payment: { method: 'cash' },
      history: [{ at: dt(-1, 20, 15), by: 'Khách', text: 'Khách gửi đơn' }, { at: dt(0, 8, 30), by: 'Hoa (NV)', text: 'Gọi chưa được, khách không nghe máy' }] }),
    order({ code: code(-2, 1), createdAt: dt(-2, 14, 5), status: 'confirmed', seen: true,
      customer: { name: 'Lê Thảo Vy', phone: '0909888777', email: 'thaovy.le@gmail.com', note: '' },
      items: [item(4, 's20', 1, 'Mãi bên nhau nha')],
      delivery: { type: 'pickup', address: '', date: d(1), slot: '16:00-18:00' },
      payment: { method: 'bank' }, paid: 225000, depositStatus: 'deposit', pointsUsed: 0,
      history: [{ at: dt(-2, 14, 5), by: 'Khách', text: 'Khách gửi đơn' }, { at: dt(-2, 15, 0), by: 'Mai (Chủ tiệm)', text: 'Đã xác nhận đơn' }, { at: dt(-2, 17, 20), by: 'Mai (Chủ tiệm)', text: 'Ghi nhận cọc 225.000đ, chuyển khoản' }] }),
    order({ code: code(-3, 2), createdAt: dt(-3, 11, 30), status: 'baking', seen: true,
      customer: { name: 'Phạm Gia Huy', phone: '0933221100', email: '', note: 'Bánh cho tiệc công ty.' },
      items: [item(9, 's24', 1, 'Happy 5th Anniversary')],
      delivery: { type: 'delivery', address: 'Tầng 6, 123 Võ Văn Tần, Phường 6', date: d(0), slot: '14:00-16:00' },
      payment: { method: 'bank' }, discount: 59000, shippingFee: 25000, paid: 266000, depositStatus: 'deposit',
      history: [{ at: dt(-3, 11, 30), by: 'Khách', text: 'Khách gửi đơn' }, { at: dt(-3, 13, 0), by: 'Mai (Chủ tiệm)', text: 'Đã xác nhận đơn, phí giao 25.000đ' }, { at: dt(-3, 15, 45), by: 'Mai (Chủ tiệm)', text: 'Ghi nhận cọc 266.000đ' }, { at: dt(0, 7, 30), by: 'Hoa (NV)', text: 'Bắt đầu làm bánh' }] }),
    order({ code: code(-4, 1), createdAt: dt(-4, 19, 0), status: 'shipping', seen: true,
      customer: { name: 'Võ Thanh Trúc', phone: '0918765432', email: 'thanhtruc.vo@gmail.com', note: '' },
      items: [item(6, 's16', 1, 'Chúc bé tròn 1 tuổi')],
      delivery: { type: 'delivery', address: '77/3 Lý Chính Thắng, Phường 8', date: d(0), slot: '10:00-12:00' },
      payment: { method: 'wallet' }, shippingFee: 15000, paid: 325000, depositStatus: 'paid',
      history: [{ at: dt(-4, 19, 0), by: 'Khách', text: 'Khách gửi đơn' }, { at: dt(-3, 9, 0), by: 'Mai (Chủ tiệm)', text: 'Đã xác nhận đơn' }, { at: dt(-3, 10, 0), by: 'Mai (Chủ tiệm)', text: 'Khách thanh toán đủ qua ví' }, { at: dt(0, 6, 30), by: 'Hoa (NV)', text: 'Bắt đầu làm bánh' }, { at: dt(0, 9, 40), by: 'Hoa (NV)', text: 'Bánh xong, đang giao' }] }),
    order({ code: code(-2, 2), createdAt: dt(-2, 8, 50), status: 'ready', seen: true,
      customer: { name: 'Huỳnh Mỹ Duyên', phone: '0896123456', email: '', note: '' },
      items: [item(17, 's20', 1, 'Happy Birthday Su')],
      delivery: { type: 'pickup', address: '', date: d(0), slot: '16:00-18:00' },
      payment: { method: 'cash' }, paid: 190000, depositStatus: 'deposit',
      history: [{ at: dt(-2, 8, 50), by: 'Khách', text: 'Khách gửi đơn' }, { at: dt(-2, 9, 30), by: 'Mai (Chủ tiệm)', text: 'Đã xác nhận đơn' }, { at: dt(-1, 10, 0), by: 'Mai (Chủ tiệm)', text: 'Ghi nhận cọc 190.000đ tiền mặt' }, { at: dt(0, 13, 0), by: 'Hoa (NV)', text: 'Bánh xong, chờ khách lấy' }] }),
    order({ code: code(-6, 1), createdAt: dt(-6, 10, 0), status: 'done', seen: true,
      customer: { name: 'Bùi Anh Thư', phone: '0912345678', email: 'anhthu.bui@gmail.com', note: '' },
      items: [item(1, 's16', 1, 'Chúc mừng sinh nhật ba'), item(14, 's16', 1, '')],
      delivery: { type: 'delivery', address: '210 Nam Kỳ Khởi Nghĩa, Phường 8', date: d(-3), slot: '18:00-20:00' },
      payment: { method: 'bank' }, shippingFee: 20000, paid: 590000, depositStatus: 'paid', reviewed: { 0: true },
      history: [{ at: dt(-6, 10, 0), by: 'Khách', text: 'Khách gửi đơn' }, { at: dt(-6, 11, 0), by: 'Mai (Chủ tiệm)', text: 'Đã xác nhận đơn' }, { at: dt(-3, 19, 30), by: 'Hoa (NV)', text: 'Hoàn thành, cộng 64 điểm' }] }),
    order({ code: code(-8, 2), createdAt: dt(-8, 16, 0), status: 'done', seen: true,
      customer: { name: 'Ngô Tuấn Kiệt', phone: '0987654321', email: '', note: '' },
      items: [item(12, 's20', 1, '')],
      delivery: { type: 'pickup', address: '', date: d(-5), slot: '10:00-12:00' },
      payment: { method: 'cash' }, paid: 360000, depositStatus: 'paid',
      history: [{ at: dt(-8, 16, 0), by: 'Khách', text: 'Khách gửi đơn' }, { at: dt(-5, 11, 0), by: 'Hoa (NV)', text: 'Hoàn thành' }] }),
    order({ code: code(-3, 3), createdAt: dt(-3, 21, 0), status: 'cancelled', seen: true,
      customer: { name: 'Đỗ Phương Linh', phone: '0965432198', email: '', note: '' },
      items: [item(5, 's16', 1, '')],
      delivery: { type: 'pickup', address: '', date: d(1), slot: '08:00-10:00' },
      payment: { method: 'bank' }, discount: 27000, cancel: { by: 'Khách', reason: 'Đổi ngày tổ chức sinh nhật' },
      history: [{ at: dt(-3, 21, 0), by: 'Khách', text: 'Khách gửi đơn' }, { at: dt(-3, 21, 40), by: 'Khách', text: 'Khách hủy đơn: Đổi ngày tổ chức sinh nhật' }] }),
    order({ code: code(-5, 2), createdAt: dt(-5, 9, 0), status: 'cancelled', seen: true,
      customer: { name: 'Trương Khánh An', phone: '0945678123', email: 'khanhan.truong@gmail.com', note: '' },
      items: [item(19, 's24', 1, 'Happy Wedding')],
      delivery: { type: 'delivery', address: 'Khu đô thị Vạn Phúc, TP Thủ Đức', date: d(-1), slot: '18:00-20:00' },
      payment: { method: 'bank' }, cancel: { by: 'Tiệm', reason: 'Ngoài khu vực giao' },
      history: [{ at: dt(-5, 9, 0), by: 'Khách', text: 'Khách gửi đơn' }, { at: dt(-5, 10, 15), by: 'Mai (Chủ tiệm)', text: 'Từ chối đơn: Ngoài khu vực giao' }] }),
    order({ code: code(-1, 1), createdAt: dt(-1, 9, 20), status: 'confirmed', seen: true,
      customer: { name: 'Lý Hải Yến', phone: '0923456789', email: '', note: 'Bé dị ứng hạt, tiệm lưu ý giúp.' },
      items: [item(5, 's20', 2, 'Chúc mừng thành lập')],
      delivery: { type: 'delivery', address: '56 Bà Huyện Thanh Quan, Phường 9', date: d(3), slot: '10:00-12:00' },
      payment: { method: 'bank' }, discount: 76000, shippingFee: 30000, depositStatus: 'unpaid',
      history: [{ at: dt(-1, 9, 20), by: 'Khách', text: 'Khách gửi đơn' }, { at: dt(-1, 10, 5), by: 'Mai (Chủ tiệm)', text: 'Đã xác nhận đơn, phí giao 30.000đ' }] }),
    order({ code: code(-1, 2), createdAt: dt(-1, 15, 45), status: 'pending', seen: true,
      customer: { name: 'Mai Thu Hà', phone: '0979112233', email: 'thuha.mai@yahoo.com', note: '' },
      items: [item(11, 's16', 1, 'Hà ơi tuổi mới rực rỡ')],
      delivery: { type: 'delivery', address: '9 Kỳ Đồng, Phường 9', date: d(4), slot: '14:00-16:00' },
      payment: { method: 'bank' } }),
    order({ code: code(-12, 2), createdAt: dt(-12, 8, 0), status: 'done', seen: true,
      customer: { name: 'Nguyễn Ngọc Lan', phone: '0901234567', email: 'ngoclan.nguyen@gmail.com', note: '' },
      items: [item(7, 's20', 1, 'Cảm ơn cô đã dạy dỗ')],
      delivery: { type: 'pickup', address: '', date: d(-10), slot: '16:00-18:00' },
      payment: { method: 'bank' }, paid: 350000, depositStatus: 'paid',
      history: [{ at: dt(-12, 8, 0), by: 'Khách', text: 'Khách gửi đơn' }, { at: dt(-10, 18, 5), by: 'Mai (Chủ tiệm)', text: 'Hoàn thành, cộng 41 điểm' }] })
  ];
  orders.forEach(function (o) { if (!o.depositStatus) o.depositStatus = 'unpaid'; });

  /* ---------- Tài khoản quản trị (FR-043, FR-044) ---------- */
  var accounts = [
    { id: 1, name: 'Nguyễn Thị Mai', email: 'chutiem@tiembanhkem.vn', password: 'banhkem123', role: 'owner', canEditPrice: true, status: 'active' },
    { id: 2, name: 'Trần Thị Hoa', email: 'hoa@tiembanhkem.vn', password: 'banhkem123', role: 'staff', canEditPrice: true, status: 'active' },
    { id: 3, name: 'Lê Ngọc Vy', email: 'vy@tiembanhkem.vn', password: 'banhkem123', role: 'staff', canEditPrice: false, status: 'active' },
    { id: 4, name: 'Phan Văn Nam', email: 'nam@tiembanhkem.vn', password: 'banhkem123', role: 'staff', canEditPrice: false, status: 'locked' }
  ];

  /* ---------- Thống kê 90 ngày (FR-039 → FR-042) ---------- */
  var statsDaily = [];
  for (var i = 89; i >= 0; i--) {
    var base = 4 + Math.round(rand() * 4) + (i < 30 ? 2 : 0); // tăng nhẹ sau khi có web
    var cancelled = rand() > 0.75 ? 1 : 0;
    var processing = i < 4 ? Math.round(rand() * 3) : 0;
    var done = Math.max(0, base - cancelled - processing);
    statsDaily.push({ date: d(-i), done: done, processing: processing, cancelled: cancelled, revenue: done * (330000 + Math.round(rand() * 120) * 1000) });
  }
  var topCakes = [1, 2, 4, 17, 9, 6, 14, 16, 3, 5].map(function (id, idx) {
    var c = cakes.filter(function (x) { return x.id === id; })[0];
    var qty = Math.round(58 - idx * 4.6 + rand() * 3);
    return { cakeId: id, name: c.name, qty: qty, revenue: qty * c.sizes[1].price, topSize: c.sizes[rand() > 0.4 ? 1 : 0].label };
  });

  window.MOCK = {
    today: d(0),
    helpers: { d: d, dt: dt, code: code },
    shop: shop,
    settings: settings,
    cakes: cakes,
    reviews: reviews,
    testimonials: testimonials,
    gallery: gallery,
    posts: posts,
    promotions: promotions,
    customers: customers,
    orders: orders,
    accounts: accounts,
    stats: { daily: statsDaily, topCakes: topCakes, baselinePerDay: 4 }
  };
})();
