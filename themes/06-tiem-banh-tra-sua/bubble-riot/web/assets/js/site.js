/* BUBBLE RIOT — EN / VI language switch.
   English lives in the HTML (source of truth). This file holds the Vietnamese copy
   and swaps text, alt, meta description and lightbox captions in place.
   Nothing here is a design token; styling stays in tw-config.js + site.css. */
(function () {
  'use strict';

  var STORE_KEY = 'bubble-riot-lang';
  var EN = {};

  var ATTRS = [
    { hook: 'data-i18n-alt', attr: 'alt' },
    { hook: 'data-i18n-content', attr: 'content' },
    { hook: 'data-i18n-caption', attr: 'data-caption' },
    { hook: 'data-i18n-aria', attr: 'aria-label' }
  ];

  var VI = {
    /* ---------- shared ---------- */
    'a11y.skip': 'Tới nội dung chính',
    'a11y.lang': 'Ngôn ngữ',
    'action.menu': 'Mở menu',
    'action.top': 'Về đầu trang',
    'nav.home': 'Trang chủ',
    'nav.menu': 'Thực đơn',
    'nav.about': 'Về chúng tôi',
    'nav.visit': 'Ghé tiệm',
    'header.hours': 'Mở hằng ngày · 08:00 — 22:00',

    'footer.kicker': 'Hà Nội · Trà sữa & bánh',
    'footer.blurb': 'Trà sữa, bánh sừng bò bơ và một chiếc loa quá to. Ghé 24 Tràng Tiền, cách rạp chiếu phim cũ vài căn.',
    'footer.cta': 'Xem thực đơn',
    'footer.pages': 'Trang',
    'footer.visit': 'Ghé tiệm',
    'footer.hoursLabel': 'Mở hằng ngày',
    'footer.rights': 'Bảo lưu mọi quyền.',
    'footer.credit': 'Làm ồn ào tại Hà Nội. Ảnh chỉ dùng cho bản mẫu.',

    /* ---------- home ---------- */
    'meta.home.title': 'BUBBLE RIOT — Khuấy tung ngày dài',
    'meta.home.desc': 'BUBBLE RIOT là quầy trà sữa và tiệm bánh ở Hà Nội. Trà đậm, đường đen, sữa lạnh, bánh sừng bò bơ và một chiếc loa rất to.',

    'home.hero.kicker': 'Hà Nội · Từ 2019',
    'home.hero.tag': 'Trà sữa + tiệm bánh',
    'home.hero.line1': 'Khuấy tung',
    'home.hero.line2': 'ngày dài',
    'home.hero.body': 'Trà đậm, đường thắng, sữa lạnh và một hàng người chờ tràn ra vỉa hè. Chúng tôi pha thật to và nướng bánh trước khi trời sáng.',
    'home.hero.cta1': 'Chọn vị đi',
    'home.hero.cta2': 'Chuyện của tiệm',
    'home.hero.sticker1': 'Không ngụm nào nhàm chán',
    'home.hero.sticker2': 'Đá là bắt buộc',
    'home.hero.cupNote': 'Trà đen · sữa tươi · trân châu',
    'home.hero.vertical': 'Tràng Tiền · Hà Nội',

    'home.marquee.1': 'Vị chất lừ',
    'home.marquee.2': 'Pha chậm',
    'home.marquee.3': 'Không ngụm nào nhàm chán',
    'home.marquee.4': 'Nướng từ 6 giờ sáng',

    'home.fav.eyebrow': 'Danh sách ngắn',
    'home.fav.title1': 'Món ruột',
    'home.fav.title2': 'của tiệm',
    'home.fav.intro': 'Ba ly gây tranh cãi ngay tại quầy. Theo hướng tích cực.',
    'home.fav.p1.meta': '01 / Trà sữa',
    'home.fav.p1.tag': 'Bán chạy',
    'home.fav.p1.desc': 'Trà đen, đường đen thắng, sữa tươi, trân châu dẻo.',
    'home.fav.p2.meta': '02 / Trà trái cây',
    'home.fav.p2.tag': 'Không sữa',
    'home.fav.p2.desc': 'Trà xanh nhài, dâu dầm, chanh, trân châu nổ.',
    'home.fav.p3.meta': '03 / Kem',
    'home.fav.p3.tag': 'Dòng kem',
    'home.fav.p3.desc': 'Khoai môn, kem dừa, muối biển, trân châu.',
    'home.fav.note': 'Giá cho ly vừa. Topping +10.000₫.',
    'home.fav.link': 'Xem đủ 24 vị',

    'home.story.eyebrow': 'Góc phố',
    'home.story.title': 'Lớn lên từ tiếng ồn.',
    'home.story.body1': 'BUBBLE RIOT bắt đầu năm 2019 với một chiếc loa, một thùng đá và hàng người chờ không dứt. Chúng tôi giữ hàng chờ. Rồi mua thêm lò nướng.',
    'home.story.body2': 'Trà pha từng mẻ nhỏ. Bánh sừng bò cán bằng tay. Danh sách nhạc thì không bàn cãi.',
    'home.story.stat1Label': 'vị xoay vòng',
    'home.story.stat2Label': 'mẻ nướng đầu',
    'home.story.stat3Label': 'góc phố cam',
    'home.story.caption': '35mm / không filter',
    'home.story.link': 'Đọc trọn câu chuyện',

    'home.bakery.eyebrow': 'Phía tiệm bánh',
    'home.bakery.title': 'Nướng trước khi phố thức.',
    'home.bakery.body': 'Bánh sừng bò bơ, cuộn lá dứa và vài loại cookie xấu nhưng ngon. Nếu khay trống, bạn tới muộn rồi.',
    'home.bakery.item1': 'Bánh sừng bò bơ',
    'home.bakery.item1Note': 'Cán bột ba ngày.',
    'home.bakery.item2': 'Cuộn dừa lá dứa',
    'home.bakery.item2Note': 'Mềm, xanh, hết trước trưa.',
    'home.bakery.item3': 'Cookie sô-cô-la miso',
    'home.bakery.item3Note': 'Rìa mặn, giữa mềm.',
    'home.bakery.note': 'Bánh ra lò 6:00 và 14:00. Hết là hết.',
    'home.bakery.link': 'Xem tủ bánh',
    'home.bakery.sticker': 'Mới ra lò 6 giờ',
    'home.bakery.caption': 'Bơ, muối, lửa. Hết.',

    'alt.heroCup': 'Ly trà sữa đường đen với trân châu',
    'alt.fav1': 'Trà sữa đường đen với trân châu',
    'alt.fav2': 'Sinh tố dâu với trân châu trái cây',
    'alt.fav3': 'Trà sữa phủ kem trong ly cao',
    'alt.story': 'Quầy đồ uống bên đường với những chiếc ly và bảng menu',
    'alt.bakery': 'Khay bánh sừng bò vàng óng',

    /* ---------- menu ---------- */
    'meta.menu.title': 'Thực đơn — BUBBLE RIOT',
    'meta.menu.desc': 'Toàn bộ bảng món BUBBLE RIOT: trà sữa, trà trái cây, dòng kem, topping và tủ bánh. Giá, ghi chú và mẻ pha trong tuần.',

    'menu.hero.kicker': 'Bảng món · 24 vị',
    'menu.hero.title1': 'Chọn vị',
    'menu.hero.title2': 'của bạn',
    'menu.hero.lead': 'Bốn chương, một luật: phải chất. Giá cho ly vừa. Topping tính thêm.',
    'menu.hero.tag1': 'Không giỏ hàng',
    'menu.hero.tag2': 'Không tài khoản',
    'menu.hero.tag3': 'Gọi tại quầy',
    'menu.hero.sticker': 'Pha theo yêu cầu',
    'menu.hero.cupNote': 'Trà đen · sữa tươi · trân châu',

    'menu.board.title1': 'Mọi thứ chúng tôi',
    'menu.board.title2': 'rót ra',
    'menu.board.intro': 'Lọc theo chương. Ly nào cũng pha khi bạn gọi, không pha trước.',
    'menu.board.footnote': 'Giá tính bằng đồng. Thanh toán tiền mặt hoặc chuyển khoản tại quầy.',
    'menu.filter.all': 'Tất cả',
    'menu.filter.milk': 'Trà sữa',
    'menu.filter.fruit': 'Trà trái cây',
    'menu.filter.cream': 'Dòng kem',
    'menu.filter.top': 'Topping',

    'menu.milk.label': '01 / Trà sữa',
    'menu.milk.note': '6 vị',
    'menu.milk.title': 'Trà sữa',
    'menu.milk.desc': 'Trà đen đậm, sữa tươi, siro đường đen. Ly vừa đã có trân châu.',
    'menu.milk.i1n': 'Đường thắng, sữa tươi, trân châu còn nóng.',
    'menu.milk.i2n': 'Trà xanh nhài, sữa, giảm đường nếu bạn muốn.',
    'menu.milk.i3n': 'Rang đậm, có sữa yến mạch, mặc định không đường.',
    'menu.milk.i4n': 'Trà Thái gia vị, sữa đặc, rất cam.',
    'menu.milk.i5n': 'Khoai môn, kem dừa, một nhúm muối biển.',
    'menu.milk.i6n': 'Trà xanh rang, sữa, phủ kem.',

    'menu.fruit.label': '02 / Trà trái cây',
    'menu.fruit.note': 'Không sữa',
    'menu.fruit.title': 'Trà trái cây',
    'menu.fruit.desc': 'Nền trà xanh nhài, trái cây cắt buổi sáng, chanh vắt bên cạnh. Lạnh và to.',
    'menu.fruit.i1n': 'Dâu dầm, chanh, trân châu nổ.',
    'menu.fruit.i2n': 'Chanh dây, cam, rất nhiều đá.',
    'menu.fruit.i3n': 'Trà ô long lạnh, siro đào, đào tươi.',
    'menu.fruit.i4n': 'Trà nhài, chanh, bạc hà, rất ít đường.',
    'menu.fruit.i5n': 'Dưa lưới, chanh, viền muối nếu bạn thích.',
    'menu.fruit.i6n': 'Xoài, nước cốt dừa, trân châu nếp.',

    'menu.cream.label': '03 / Dòng kem',
    'menu.cream.note': '4 vị',
    'menu.cream.title': 'Dòng kem',
    'menu.cream.desc': 'Lớp kem mặn phủ lên trà lạnh. Uống không ống hút nếu muốn cãi nhau.',
    'menu.cream.i1n': 'Trà đen, kem mặn, trân châu.',
    'menu.cream.i2n': 'Ô long lạnh, foam phô mai, không đường.',
    'menu.cream.i3n': 'Kem dừa, khoai môn, dừa nướng.',
    'menu.cream.i4n': 'Matcha thượng hạng, sữa, phủ kem.',

    'menu.top.label': '04 / Topping',
    'menu.top.note': '+10.000₫ mỗi loại',
    'menu.top.title': 'Topping',
    'menu.top.desc': 'Dẻo, giòn hay nổi lềnh bềnh. Mỗi ly tối đa hai topping.',
    'menu.top.i1': 'Trân châu đen',
    'menu.top.i2': 'Trân châu vàng',
    'menu.top.i3': 'Thạch sương sáo',
    'menu.top.i4': 'Bánh flan',
    'menu.top.i5': 'Trân châu nổ',
    'menu.top.i6': 'Foam phô mai',

    'menu.build.title': 'Tự chọn ly của bạn',
    'menu.build.lead': 'Ba quyết định. Nói với quầy, thứ tự nào cũng được.',
    'menu.build.s1t': 'Chọn nền trà',
    'menu.build.s1d': 'Trà đen, trà nhài, ô long rang hoặc không trà. Sữa yến mạch thêm 8.000₫.',
    'menu.build.s2t': 'Chọn độ lạnh',
    'menu.build.s2d': 'Đá thường, ít đá hoặc không đá. Chúng tôi sẽ im lặng đánh giá và vẫn rót.',
    'menu.build.s3t': 'Thêm topping',
    'menu.build.s3d': 'Trân châu, thạch, flan, foam. Hai loại mỗi ly, không ngoại lệ, thử rồi.',
    'menu.build.note': 'Ở đây không có gói đăng ký.',
    'menu.build.note2': 'Không tài khoản, không giỏ hàng, không app giao hàng. Ghé trực tiếp.',

    'menu.board2.quote': '“Không có trên bảng thì cứ hỏi. Câu trả lời thường là có.”',
    'menu.board2.cite': 'Linh, quầy trưởng · giờ cao điểm 4 giờ chiều',
    'menu.board2.n1': 'Tiền mặt hoặc chuyển khoản. Không máy quẹt, không mã QR, không app.',
    'menu.board2.n2': 'Chỉnh đường thì được. Chỉnh mọi thứ thì không.',

    'menu.bakery.label': 'Tủ bánh',
    'menu.bakery.title': 'Có gì đó để nhai.',
    'menu.bakery.lead': 'Trà ngọt cần chút muối và bơ bên cạnh. Tủ bánh nhỏ có chủ đích để bánh luôn mới.',
    'menu.bakery.i1': 'Bánh sừng bò bơ',
    'menu.bakery.i1n': 'Cán bột ba ngày.',
    'menu.bakery.i2': 'Cuộn dừa lá dứa',
    'menu.bakery.i2n': 'Mềm, xanh, hết trước trưa.',
    'menu.bakery.i3': 'Cookie sô-cô-la miso',
    'menu.bakery.i3n': 'Rìa mặn, giữa mềm.',
    'menu.bakery.i4': 'Bánh mì mật muối',
    'menu.bakery.i4n': 'Dính, nóng, nguy hiểm.',
    'menu.bakery.note': 'Bánh ra lò 6:00 và 14:00. Hết là hết.',
    'menu.bakery.cta': 'Đặt cả khay',
    'menu.bakery.cta2': 'Gửi email cho bếp',
    'menu.bakery.sticker': 'Mới ra lò 6 giờ',
    'menu.bakery.caption': 'Mẻ nhỏ, hai lần mỗi ngày.',

    'alt.menuHero': 'Ly trà sữa đường đen có trân châu và kem trên mặt',
    'alt.menuMilk': 'Ly trà sữa với trân châu ở đáy',
    'alt.menuFruit': 'Ly trà trái cây đá với trân châu nổ',
    'alt.menuCream': 'Ly nước phủ kem trong ly cao',
    'alt.menuTop': 'Cận cảnh trân châu bóng',
    'alt.menuBoard': 'Bảng menu viết tay trên bức tường tối',
    'alt.menuBakery': 'Tủ trưng bày bánh ngọt',

    /* ---------- about ---------- */
    'meta.about.title': 'Về chúng tôi — BUBBLE RIOT',
    'meta.about.desc': 'Câu chuyện BUBBLE RIOT: một góc phố Tràng Tiền, chiếc loa không ai yêu cầu, ba điều không thỏa hiệp và một bức tường cam.',

    'about.hero.kicker': 'Về tiệm · Hà Nội',
    'about.hero.title1': 'Vô tình',
    'about.hero.title2': 'ồn ào',
    'about.hero.lead': 'BUBBLE RIOT là quầy trà sữa kèm một vấn đề với bánh nướng. Tường cam, một chiếc loa, và hàng người chờ bắt đầu như một câu đùa.',
    'about.hero.cta1': 'Xem bảng món',
    'about.hero.cta2': 'Tìm tới tiệm',
    'about.hero.stamp1': 'Từ 2019',
    'about.hero.caption': 'Góc phố đầu tiên, ngõ Tràng Tiền.',

    'about.manifesto.title': 'Một góc phố cam.',
    'about.manifesto.meta': 'Tràng Tiền · 12 m² · 3 người',
    'about.manifesto.p1': 'Chúng tôi mở tiệm năm 2019 với một thùng đá thuê, một chiếc loa và công thức viết sau tờ hóa đơn. Kế hoạch là bán đủ ly để trả tiền nhà rồi dừng. Hàng người chờ nghĩ khác.',
    'about.manifesto.p2': 'Năm 2021 chúng tôi mua lò nướng vì khách cứ hỏi món gì đó để nhai. Tiệm bánh chiếm nửa sau quầy và danh sách nhạc to hơn. Không có gì là chiến lược. Nó cứ xảy ra, và người ta quay lại.',
    'about.manifesto.p3': 'Hôm nay chúng tôi vẫn pha từng mẻ nhỏ, vẫn cán bánh sừng bò bằng tay, và vẫn cãi nhau về độ ngọt ngay tại quầy. Bức tường cam là thứ duy nhất cả tiệm đồng ý ngay lập tức.',
    'about.manifesto.quote': '“Chúng tôi không cố có mặt ở mọi nơi. Chỉ góc phố này, làm cho tử tế.”',
    'about.manifesto.cite': 'Mai & Đức · đồng sáng lập',
    'about.manifesto.link': 'Chúng tôi rót gì',
    'about.manifesto.footnote': 'Mọi ảnh trên site là ảnh tham chiếu cho bản mẫu, không phải tiệm thật.',

    'about.values.title1': 'Ba nguyên tắc',
    'about.values.title2': 'không đổi',
    'about.values.lead': 'Viết trên tường sau quầy, bằng bút lông, sau một trận cãi dài.',
    'about.values.v1t': 'Chất',
    'about.values.v1d': 'Trà đậm, đường thật, loa ở mức âm lượng mà hàng xóm có ý kiến. Ly nào nhạt là không ra khỏi quầy.',
    'about.values.v2t': 'Thật',
    'about.values.v2d': 'Trà Thái Nguyên, sữa có ngày in trên hộp, trái cây cắt trong buổi sáng. Không giấu gì sau một loại siro không đọc được tên.',
    'about.values.v3t': 'Bản địa',
    'about.values.v3d': 'Một tiệm, một con phố, một đội. Chúng tôi mua ở chợ cách đây hai dãy nhà và vẫn nhớ tên những người xếp hàng lúc 4 giờ chiều.',

    'about.gallery.title1': 'Bức tường,',
    'about.gallery.title2': 'những chiếc ly',
    'about.gallery.lead': 'Sáu khung hình từ tiệm: túi giấy, mẻ nướng đầu, góc phố lúc đóng cửa. Chạm để xem gần hơn.',
    'about.gallery.c1': '01 / Mẻ đầu',
    'about.gallery.c2': '02 / Tủ bánh',
    'about.gallery.c3': '03 / Góc phố',
    'about.gallery.c4': '04 / Mẻ trà',
    'about.gallery.c5': '05 / Quầy topping',
    'about.gallery.c6': '06 / Đóng cửa',
    'about.gallery.cap1': 'Khay bánh ra lò, 6:10 sáng',
    'about.gallery.cap2': 'Một chiếc bánh, một chiếc đĩa, không chia',
    'about.gallery.cap3': 'Tường cam, trước giờ mở cửa',
    'about.gallery.cap4': 'Trà lá, lần hãm thứ ba',
    'about.gallery.cap5': 'Sương sáo, cắt bằng tay',
    'about.gallery.cap6': 'Những ly cuối, giờ đóng cửa',

    'about.visit.title': 'Ghé đứng chung hàng.',
    'about.visit.lead': 'Mở mỗi ngày. Giờ vắng nhất là 9 giờ sáng, ồn nhất là 4 giờ chiều, cả hai đều đúng.',
    'about.visit.addrLabel': 'Địa chỉ',
    'about.visit.copy': 'Sao chép địa chỉ',
    'about.visit.hoursLabel': 'Giờ mở',
    'about.visit.hoursNote': 'Mỗi ngày, kể cả tuần Tết.',
    'about.visit.phoneLabel': 'Điện thoại',
    'about.visit.emailLabel': 'Email',
    'about.visit.find': 'Đường tới tiệm',
    'about.visit.findBody': 'Tìm bức tường cam cách rạp chiếu phim cũ hai căn. Nếu bạn tới hiệu sách thì đã đi quá. Không có chỗ đỗ xe, nhưng con hẻm sau tiệm nhận xe máy.',
    'about.visit.nearLabel': 'Gần đây',
    'about.visit.near': 'Hồ Hoàn Kiếm, đi bộ 4 phút. Nhà hát Lớn, 12 phút.',
    'about.visit.crowdLabel': 'Giờ đẹp',
    'about.visit.crowd': '9 giờ sáng để có chỗ ngồi, 4 giờ chiều để nghe đủ ồn.',
    'about.visit.call': 'Gọi cho quầy',
    'about.visit.menu': 'Xem đang rót gì',
    'about.visit.note': 'Không đặt bàn, không app giao hàng. Ghé trực tiếp.',

    'alt.aboutHero': 'Mặt tiền một tiệm trà nhỏ với biển viết tay',
    'alt.aboutHands': 'Đôi tay đang pha đồ uống sau quầy',
    'alt.g1': 'Bánh sừng bò mới ra lò trên khay',
    'alt.g2': 'Một chiếc bánh sừng bò trên đĩa',
    'alt.g3': 'Mặt tiền một quán ăn vỉa hè',
    'alt.g4': 'Lá trà Long Tỉnh đã hãm trong bát trắng',
    'alt.g5': 'Bát thạch sương sáo',
    'alt.g6': 'Những ly trà dưới ánh đèn ấm'
  };

  function all(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  }

  function captureEnglish() {
    all('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!(key in EN)) EN[key] = el.textContent;
    });
    ATTRS.forEach(function (pair) {
      all('[' + pair.hook + ']').forEach(function (el) {
        if (!el.__riotEn) el.__riotEn = {};
        if (!(pair.attr in el.__riotEn)) el.__riotEn[pair.attr] = el.getAttribute(pair.attr) || '';
      });
    });
  }

  function apply(lang) {
    var dict = lang === 'vi' ? VI : null;

    all('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = dict && dict[key] != null ? dict[key] : EN[key];
      if (value != null) el.textContent = value;
    });

    ATTRS.forEach(function (pair) {
      all('[' + pair.hook + ']').forEach(function (el) {
        var key = el.getAttribute(pair.hook);
        var fallback = el.__riotEn ? el.__riotEn[pair.attr] : el.getAttribute(pair.attr);
        var value = dict && dict[key] != null ? dict[key] : fallback;
        if (value != null) el.setAttribute(pair.attr, value);
      });
    });

    document.documentElement.setAttribute('lang', lang);
    all('[data-lang]').forEach(function (btn) {
      var on = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', String(on));
    });

    try {
      localStorage.setItem(STORE_KEY, lang);
    } catch (err) {
      /* private mode: the switch still works for this page view */
    }
  }

  // Trình duyệt chỉ tải subset tiếng Việt khi gặp ký tự có dấu, nên lần đầu
  // chuyển sang VI chữ có thể thiếu dấu một nhịp. Nạp sẵn ngay từ đầu.
  function warmVietnameseFont() {
    if (!document.fonts || !document.fonts.load) return;
    var sample = 'Vô tình ồn ào Ấ Đ Ế Ố Ứ ầ ễ ộ ữ';
    ['500', '600', '700'].forEach(function (weight) {
      document.fonts.load(weight + ' 16px "Barlow Condensed"', sample)['catch'](function () {});
    });
    document.fonts.load('400 16px Archivo', sample)['catch'](function () {});
  }

  function init() {
    warmVietnameseFont();
    captureEnglish();

    var saved = 'en';
    try {
      saved = localStorage.getItem(STORE_KEY) === 'vi' ? 'vi' : 'en';
    } catch (err) {
      saved = 'en';
    }
    apply(saved);

    all('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(btn.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
