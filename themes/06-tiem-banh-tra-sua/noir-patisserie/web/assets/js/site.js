/* NOIR PATISSERIE: EN / VI language switch.
   English is written in the HTML; Vietnamese comes from the dictionary below.
   The choice is kept in localStorage ("noir-lang") and can be forced with ?lang=vi / ?lang=en. */
(function () {
  var VI = {
    /* Head */
    'NOIR PATISSERIE — The Art of Fine Pâtisserie': 'NOIR PATISSERIE — Nghệ thuật bánh Pháp tinh tế',
    'The Collection — NOIR PATISSERIE': 'Bộ sưu tập — NOIR PATISSERIE',
    'About — NOIR PATISSERIE': 'Về chúng tôi — NOIR PATISSERIE',
    'NOIR PATISSERIE is a French-inspired pâtisserie in Saigon: entremets, tarts and macarons composed by hand in the classical method.':
      'NOIR PATISSERIE là tiệm bánh Pháp tại Sài Gòn: entremet, tart và macaron làm thủ công theo phương pháp cổ điển.',
    'The Collection of NOIR PATISSERIE: signature cakes, chocolate entremets, macarons and French pastries, each made by hand in small batches.':
      'Bộ sưu tập của NOIR PATISSERIE: bánh đặc trưng, entremet sô-cô-la, macaron và bánh ngọt Pháp, làm thủ công theo từng mẻ nhỏ.',
    'The story of NOIR PATISSERIE: a Saigon pâtisserie built on chosen ingredients, classical French technique and seasonal inspiration.':
      'Câu chuyện của NOIR PATISSERIE: tiệm bánh Sài Gòn dựa trên nguyên liệu chọn lọc, kỹ thuật Pháp cổ điển và cảm hứng theo mùa.',

    /* Header, footer, accessibility labels */
    'Home': 'Trang chủ',
    'The Collection': 'Bộ sưu tập',
    'About': 'Về chúng tôi',
    'Visit the salon': 'Ghé tiệm',
    'Main': 'Điều hướng chính',
    'Mobile': 'Điều hướng di động',
    'Open menu': 'Mở menu',
    'Language': 'Ngôn ngữ',
    'Footer': 'Chân trang',
    'French pâtisserie, made slowly in Saigon.': 'Bánh Pháp, làm chậm rãi giữa lòng Sài Gòn.',
    'Pages': 'Các trang',
    'Salon': 'Tiệm',
    'Contact': 'Liên hệ',
    '42 Ly Tu Trong Street': '42 Lý Tự Trọng',
    'District 1, Ho Chi Minh City': 'Quận 1, TP. Hồ Chí Minh',
    'Tue to Sun, 10:00 to 21:00': 'Thứ Ba – Chủ nhật, 10:00 – 21:00',
    '© 2026 NOIR PATISSERIE. All rights reserved.': '© 2026 NOIR PATISSERIE. Bảo lưu mọi quyền.',
    'Back to top ↑': 'Lên đầu trang ↑',

    /* Visit block (every page) */
    'Visit the': 'Ghé thăm',
    'salon': 'tiệm',
    'Address': 'Địa chỉ',
    'Copy address': 'Sao chép địa chỉ',
    '42 Ly Tu Trong Street, District 1, Ho Chi Minh City': '42 Lý Tự Trọng, Quận 1, TP. Hồ Chí Minh',
    'Hours': 'Giờ mở cửa',
    'Tuesday to Sunday': 'Thứ Ba đến Chủ nhật',
    '10:00 to 21:00': '10:00 – 21:00',
    'Closed on Mondays': 'Nghỉ thứ Hai',
    'Telephone': 'Điện thoại',
    'Call the salon': 'Gọi cho tiệm',
    'Could not copy': 'Không sao chép được',

    /* Home */
    'Maison de pâtisserie, Saigon': 'Tiệm bánh Pháp, Sài Gòn',
    'The Art of': 'Nghệ thuật',
    'Fine Pâtisserie': 'bánh Pháp tinh tế',
    'Entremets, tarts and macarons composed by hand each morning, following the classical French method.':
      'Entremet, tart và macaron được làm thủ công mỗi sáng, theo đúng phương pháp Pháp cổ điển.',
    'Explore the collection': 'Khám phá bộ sưu tập',
    'Our story': 'Câu chuyện của chúng tôi',
    'We bake slowly and in small batches, so that every layer keeps its edge and every flavour arrives in its proper order.':
      'Chúng tôi làm bánh chậm rãi, theo từng mẻ nhỏ, để mỗi lớp giữ trọn đường nét và mỗi hương vị đến đúng thứ tự của nó.',
    'Handwork.': 'Thủ công.',
    'Every glaze is poured and every shell piped by our own pastry team.': 'Mọi lớp glaze được rót và mọi vỏ bánh được bắt bởi chính đội thợ bánh của chúng tôi.',
    'Season.': 'Theo mùa.',
    'The menu turns with the fruit, four times a year.': 'Thực đơn đổi theo mùa trái cây, bốn lần mỗi năm.',
    'Balance.': 'Cân bằng.',
    'Sugar is kept low so chocolate, fruit and butter speak first.': 'Đường được giữ ở mức thấp để sô-cô-la, trái cây và bơ lên tiếng trước.',
    'Signature': 'Tác phẩm',
    'Creations': 'đặc trưng',
    'Single-origin dark chocolate sponge, vanilla bean cream and wild blackberries, dusted with cocoa and icing sugar.':
      'Cốt bông lan sô-cô-la đen đơn nguồn gốc, kem hạt vani và mâm xôi đen, rắc bột ca cao và đường bột.',
    'Sablé breton, vanilla crème pâtissière, glazed strawberries and raspberries.': 'Đế sablé breton, kem crème pâtissière vani, dâu tây và mâm xôi phủ bóng.',
    'Bitter cocoa shell around a ganache of dark chocolate and fleur de sel.': 'Vỏ ca cao đắng ôm lấy nhân ganache sô-cô-la đen và muối hoa fleur de sel.',
    'Patience is the first': 'Kiên nhẫn là',
    'ingredient': 'nguyên liệu đầu tiên',
    'An entremet at NOIR takes three days. Praline is roasted and ground on the first, mousse and crémeux set overnight on the second, and only on the third is the glaze poured, at the exact moment it turns to silk.':
      'Một chiếc entremet ở NOIR mất ba ngày. Ngày đầu rang và xay praline, ngày thứ hai để mousse và crémeux đông qua đêm, và chỉ đến ngày thứ ba lớp glaze mới được rót, đúng khoảnh khắc nó mượt như lụa.',
    'Day one': 'Ngày thứ nhất',
    'Roast, grind, temper': 'Rang, xay, tôi sô-cô-la',
    'Day two': 'Ngày thứ hai',
    'Layer and set': 'Xếp lớp và để đông',
    'Day three': 'Ngày thứ ba',
    'Glaze and finish': 'Phủ glaze và hoàn thiện',
    'The salon': 'Không gian tiệm',
    'Marble, brass and low light at 42 Ly Tu Trong. Take a seat by the window with a pot of tea and a slice of something dark.':
      'Đá cẩm thạch, đồng thau và ánh đèn dịu tại 42 Lý Tự Trọng. Mời bạn ngồi bên cửa sổ với một ấm trà và một lát bánh sẫm màu.',
    'Photos of the salon': 'Ảnh không gian tiệm',
    'The tasting counter': 'Quầy thưởng thức',
    'The morning display': 'Tủ bánh buổi sáng',
    'The salon floor': 'Sảnh tiệm',
    'Tarts and cakes on the glass shelves': 'Tart và bánh trên kệ kính',
    'The glass shelves': 'Kệ kính',
    'The window, every afternoon': 'Ô cửa kính, mỗi buổi chiều',
    'The window': 'Ô cửa kính',
    'Dark chocolate cake crowned with fresh berries against a black background': 'Bánh sô-cô-la đen phủ quả mọng tươi trên nền đen',
    'Layered dark chocolate cake with cream and blackberries on a black surface': 'Bánh sô-cô-la đen nhiều lớp với kem và mâm xôi đen trên nền đen',
    'Red berry tart with a glossy glaze and mint leaves': 'Tart quả mọng đỏ phủ bóng cùng lá bạc hà',
    'Two dark chocolate macarons stacked close up': 'Cận cảnh hai chiếc macaron sô-cô-la đen xếp chồng',
    'Pastry chefs finishing pastries at a steel bench in a professional kitchen': 'Thợ bánh hoàn thiện bánh trên bàn inox trong bếp chuyên nghiệp',
    'Marble counter with glass cake domes in a dark salon': 'Quầy đá cẩm thạch với lồng kính đựng bánh trong không gian tối',
    'Display case filled with pastries': 'Tủ trưng bày đầy bánh ngọt',
    'Elegant salon interior with tables and chairs': 'Nội thất tiệm thanh lịch với bàn ghế',
    'Fruit tarts and chocolate cakes on glass shelves': 'Tart trái cây và bánh sô-cô-la trên kệ kính',
    'Window display of cakes and tarts seen from the street': 'Ô cửa kính trưng bày bánh nhìn từ ngoài phố',

    /* The Collection */
    'The': 'Bộ',
    'Collection': 'sưu tập',
    'Four families of French pastry, composed in small batches and changed with the seasons.':
      'Bốn dòng bánh Pháp, làm theo từng mẻ nhỏ và thay đổi theo mùa.',
    'Collection index': 'Mục lục bộ sưu tập',
    'Signature Cakes': 'Bánh đặc trưng',
    'Chocolate & Entremets': 'Sô-cô-la & Entremet',
    'Chocolate &': 'Sô-cô-la &',
    'Entremets': 'Entremet',
    'Macarons': 'Macaron',
    'French Pastries': 'Bánh ngọt Pháp',
    'French': 'Bánh ngọt',
    'Pastries': 'Pháp',
    'Whole cakes for the table, built in layers and finished by hand.': 'Bánh nguyên ổ cho bàn tiệc, xếp từng lớp và hoàn thiện bằng tay.',
    'Dark chocolate genoise, a bittersweet ganache, light chantilly and shaved chocolate curls.':
      'Cốt genoise sô-cô-la đen, ganache đắng ngọt, kem chantilly nhẹ và vụn sô-cô-la bào.',
    'Almond sponge, mousseline cream, fresh berries and a thin veil of almond paste.':
      'Cốt bông lan hạnh nhân, kem mousseline, quả mọng tươi và một lớp hạnh nhân nhuyễn mỏng.',
    'Spiced sponge, whipped crème fraîche, salted caramel and roasted hazelnuts.':
      'Cốt bông lan gia vị, crème fraîche đánh bông, caramel muối và hạt phỉ rang.',
    'Mousses, crémeux and glazes, set overnight and served cold.': 'Mousse, crémeux và lớp glaze, để đông qua đêm và dùng lạnh.',
    'Chocolate biscuit, dark chocolate mousse, griotte cherries and kirsch chantilly, finished with fresh berries.':
      'Cốt biscuit sô-cô-la, mousse sô-cô-la đen, anh đào griotte và chantilly kirsch, hoàn thiện với quả mọng tươi.',
    'Bitter chocolate cube, passion fruit heart and a cocoa butter velvet.': 'Khối sô-cô-la đắng, nhân chanh dây và lớp phủ nhung bơ ca cao.',
    'Hand-dipped bonbons of praline, coffee and passion fruit, served with a small chocolate tart.':
      'Bonbon nhúng tay vị praline, cà phê và chanh dây, dùng kèm một chiếc tart sô-cô-la nhỏ.',
    'Flourless dark chocolate cake, baked low and slow, dusted with icing sugar.': 'Bánh sô-cô-la đen không bột, nướng lửa nhỏ thật chậm, rắc đường bột.',
    'Shells rest for a day after filling, so the ganache settles in and the bite stays tender.':
      'Vỏ bánh được ủ một ngày sau khi làm nhân để ganache thấm đều và miếng cắn luôn mềm.',
    'A seasonal box of twelve: dark chocolate, pistachio, raspberry, salted caramel, vanilla and rose.':
      'Hộp mười hai chiếc theo mùa: sô-cô-la đen, hạt dẻ cười, mâm xôi, caramel muối, vani và hoa hồng.',
    'Rose shell, lychee and raspberry ganache.': 'Vỏ hương hoa hồng, ganache vải và mâm xôi.',
    'Vanilla, pistachio, chocolate and salted caramel: the four that never leave the menu.':
      'Vani, hạt dẻ cười, sô-cô-la và caramel muối: bốn vị không bao giờ vắng mặt trong thực đơn.',
    'Viennoiserie for the morning, tarts for the afternoon.': 'Viennoiserie cho buổi sáng, tart cho buổi chiều.',
    'Lemon and yuzu curd in a sweet pastry shell, with fresh berries and toasted almonds.':
      'Kem curd chanh vàng và yuzu trong vỏ tart ngọt, cùng quả mọng tươi và hạnh nhân rang.',
    'Laminated over three days with cultured butter, baked every morning before nine.':
      'Cán gấp với bơ lên men trong ba ngày, nướng mỗi sáng trước chín giờ.',
    'Sablé, vanilla crème pâtissière, strawberries, blueberries and kiwi under a light glaze.':
      'Đế sablé, kem crème pâtissière vani, dâu tây, việt quất và kiwi dưới lớp glaze mỏng.',
    'Layered chocolate cake with cream and chocolate decorations': 'Bánh sô-cô-la nhiều lớp với kem và trang trí sô-cô-la',
    'Slice of layered cake topped with fresh berries': 'Lát bánh nhiều lớp phủ quả mọng tươi',
    'Slice of cake with whipped cream, caramel sauce and toasted hazelnuts': 'Lát bánh với kem tươi, sốt caramel và hạt phỉ rang',
    'Small layered chocolate entremet topped with berries': 'Entremet sô-cô-la nhỏ nhiều lớp phủ quả mọng',
    'Dark chocolate cube dessert on a plate': 'Món tráng miệng sô-cô-la đen hình khối trên đĩa',
    'Plate of gourmet chocolate bonbons with a small tart': 'Đĩa bonbon sô-cô-la cùng một chiếc tart nhỏ',
    'Flourless chocolate cake dusted with icing sugar, one slice cut': 'Bánh sô-cô-la không bột rắc đường bột, đã cắt một lát',
    'Three stacks of macarons in assorted flavours': 'Ba chồng macaron nhiều hương vị',
    'Pink and white macarons on a black plate': 'Macaron hồng và trắng trên đĩa đen',
    'Stack of macarons close up': 'Cận cảnh chồng macaron',
    'Lemon tart garnished with fresh berries and nuts': 'Tart chanh trang trí quả mọng tươi và hạt',
    'Freshly baked butter croissants on a table': 'Croissant bơ vừa nướng trên bàn',
    'Fruit tart topped with glazed strawberries, blueberries and kiwi': 'Tart trái cây phủ dâu tây, việt quất và kiwi',

    /* About */
    'A house of': 'Một ngôi nhà của',
    'patience': 'sự kiên nhẫn',
    'One small kitchen in Saigon, a classical French method and the time it takes to do it properly.':
      'Một căn bếp nhỏ ở Sài Gòn, một phương pháp Pháp cổ điển và đủ thời gian để làm mọi thứ cho đúng.',
    'Our': 'Câu chuyện',
    'story': 'của NOIR',
    'Founded': 'Thành lập',
    '2019, Saigon': '2019, Sài Gòn',
    '32 seats': '32 chỗ ngồi',
    'NOIR PATISSERIE began in 2019 as a six-seat counter on Ly Tu Trong Street, with one oven, one marble slab and a stubborn idea: that French pastry could be made in Saigon without shortcuts, and without pretending to be somewhere else.':
      'NOIR PATISSERIE bắt đầu từ năm 2019 với một quầy sáu chỗ trên đường Lý Tự Trọng, một chiếc lò, một phiến đá cẩm thạch và một ý nghĩ bướng bỉnh: bánh Pháp có thể được làm ngay tại Sài Gòn, không đi đường tắt và không cần giả làm một nơi nào khác.',
    'Our head pastry chef, Camille Arnaud, trained in Lyon and spent a decade in hotel kitchens before settling here. The recipes are classical. The fruit, the cacao and the coffee are increasingly local, chosen bean by bean and orchard by orchard.':
      'Bếp trưởng bánh của chúng tôi, Camille Arnaud, học nghề tại Lyon và có mười năm trong bếp khách sạn trước khi gắn bó với nơi này. Công thức vẫn cổ điển. Còn trái cây, ca cao và cà phê ngày càng mang chất địa phương, được chọn từng hạt, từng vườn.',
    '“We would rather sell out by four o’clock than make one more cake than we can make well.”':
      '“Chúng tôi thà hết bánh lúc bốn giờ chiều còn hơn làm thêm một chiếc bánh mà mình không thể làm thật tốt.”',
    'Today the salon seats thirty-two. The kitchen behind it is still small, and we like it that way: every pastry passes through the same few pairs of hands before it reaches the glass.':
      'Ngày nay tiệm có ba mươi hai chỗ ngồi. Căn bếp phía sau vẫn nhỏ, và chúng tôi muốn giữ như vậy: mỗi chiếc bánh đều đi qua cùng vài đôi tay trước khi lên tủ kính.',
    'Finishing a chocolate course for a private dinner.': 'Hoàn thiện món sô-cô-la cho một bữa tối riêng.',
    'Finishing a chocolate course for a private dinner': 'Hoàn thiện món sô-cô-la cho một bữa tối riêng',
    'Three things we never': 'Ba điều chúng tôi không bao giờ',
    'rush': 'vội vàng',
    'Ingredients': 'Nguyên liệu',
    'Technique': 'Kỹ thuật',
    'Inspiration': 'Cảm hứng',
    'Cacao from the Mekong Delta and the Central Highlands, cultured butter, fruit bought ripe each morning.':
      'Ca cao từ đồng bằng sông Cửu Long và Tây Nguyên, bơ lên men, trái cây chín mua mỗi sáng.',
    'We work with two cacao growers and taste every lot in our own kitchen before we order. Butter is cultured for flavour, cream is never stabilised, and fruit is bought at the market at six and used the same day. That is why the menu changes when the season does.':
      'Chúng tôi làm việc với hai nhà trồng ca cao và nếm thử từng lô ngay trong bếp trước khi đặt hàng. Bơ được lên men để giữ hương vị, kem không dùng chất ổn định, trái cây mua ở chợ lúc sáu giờ sáng và dùng ngay trong ngày. Vì thế thực đơn đổi khi mùa đổi.',
    'The French method, unhurried: three-day entremets, doughs rested overnight, nothing frozen for display.':
      'Phương pháp Pháp, không vội vàng: entremet làm trong ba ngày, bột ủ qua đêm, không bánh nào cấp đông để trưng bày.',
    'Every component is made in house: pralines, jams, fondants and glazes. Entremets take three days from roast to glaze, viennoiserie dough rests overnight twice, and gold leaf is laid by hand. We do not use pre-mixes.':
      'Mọi thành phần đều tự làm tại bếp: praline, mứt, fondant và glaze. Entremet mất ba ngày từ lúc rang đến lúc phủ glaze, bột viennoiserie được ủ qua đêm hai lần, lá vàng được đặt bằng tay. Chúng tôi không dùng bột trộn sẵn.',
    'Flavour first, then form: the seasons, the city and the old manuals of French pastry.':
      'Hương vị trước, hình thức sau: theo mùa, theo thành phố và theo những cuốn cẩm nang bánh Pháp xưa.',
    'Each season starts with a single flavour, perhaps calamansi, a smoked tea or a late mango, and the shape follows from it. Chef Arnaud keeps a shelf of French pastry manuals from the 1930s, and many of our cakes are quiet rereadings of those recipes.':
      'Mỗi mùa bắt đầu từ một hương vị duy nhất, có thể là tắc, một loại trà xông khói hay xoài cuối vụ, rồi hình dáng chiếc bánh theo sau. Bếp trưởng Arnaud giữ cả một kệ cẩm nang bánh Pháp từ thập niên 1930, và nhiều chiếc bánh của chúng tôi là những lần đọc lại lặng lẽ các công thức ấy.',
    'Close to the': 'Cận cảnh từng',
    'grain': 'thớ bánh',
    'Croissants and pains au chocolat, fresh from the oven': 'Croissant và pain au chocolat vừa ra lò',
    'Tempered chocolate, cut by hand': 'Sô-cô-la đã tôi, cắt bằng tay',
    'Dough resting before the second fold': 'Bột đang nghỉ trước lần gấp thứ hai',
    'Macarons and flowers on a salon table': 'Macaron và hoa trên bàn trong tiệm',
    '“A pastry should be quiet on the plate and': '“Một chiếc bánh nên lặng lẽ trên đĩa và',
    'loud on the palate': 'bùng nổ nơi vị giác',
    ', Head Pastry Chef': ', Bếp trưởng bánh ngọt',
    'Pastry chef placing a garnish on a dessert with fine tweezers': 'Thợ bánh dùng nhíp đặt trang trí lên món tráng miệng',
    'Pastry chefs plating rows of chocolate desserts on a long table': 'Thợ bánh bày từng hàng món sô-cô-la trên bàn dài',
    'Croissants and chocolate pastries on a wooden board with a rolling pin and whisk': 'Croissant và bánh sô-cô-la trên thớt gỗ cùng cây cán bột và phới',
    'Cubes of chocolate on a white plate': 'Những khối sô-cô-la trên đĩa trắng',
    'Balls of dough resting on a floured bench beside a rolling pin': 'Những viên bột nghỉ trên bàn rắc bột cạnh cây cán',
    'A table set with macarons and fresh flowers': 'Bàn bày macaron và hoa tươi'
  };

  var KEY = 'noir-lang';
  var ATTRS = ['alt', 'aria-label', 'data-caption', 'data-copy', 'title', 'content'];
  var textOrig = new WeakMap();
  var attrOrig = new WeakMap();
  var lang = 'en';

  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }
  function tr(en) {
    if (lang !== 'vi') return null;
    var k = norm(en);
    if (!k) return null;
    if (Object.prototype.hasOwnProperty.call(VI, k)) return VI[k];
    var m = k.match(/^Copied: ([\s\S]*)$/);
    if (m) return 'Đã sao chép: ' + m[1];
    return null;
  }

  function doText(node) {
    var p = node.parentNode;
    if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.nodeName) || (p.closest && p.closest('[data-no-i18n]'))) return;
    if (!textOrig.has(node)) textOrig.set(node, node.nodeValue);
    var orig = textOrig.get(node);
    var t = tr(orig);
    var out = t == null ? orig : orig.match(/^\s*/)[0] + t + orig.match(/\s*$/)[0];
    if (node.nodeValue !== out) node.nodeValue = out;
  }
  function doAttrs(el) {
    var saved = attrOrig.get(el);
    if (!saved) { saved = {}; attrOrig.set(el, saved); }
    ATTRS.forEach(function (a) {
      if (a === 'content' && !(el.tagName === 'META' && el.getAttribute('name') === 'description')) return;
      if (!el.hasAttribute(a) && !(a in saved)) return;
      if (!(a in saved)) saved[a] = el.getAttribute(a);
      var t = tr(saved[a]);
      var out = t == null ? saved[a] : t;
      if (el.getAttribute(a) !== out) el.setAttribute(a, out);
    });
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = w.nextNode())) doText(n);
    var sel = '[alt],[aria-label],[data-caption],[data-copy],[title]';
    if (root.matches && root.matches(sel)) doAttrs(root);
    Array.prototype.forEach.call(root.querySelectorAll(sel), doAttrs);
  }

  var titleOrig = document.title;
  function apply(next) {
    lang = next === 'vi' ? 'vi' : 'en';
    document.documentElement.setAttribute('lang', lang);
    document.title = tr(titleOrig) || titleOrig;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) doAttrs(meta);
    walk(document.body);
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang-switch] [data-lang]'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    try { localStorage.setItem(KEY, lang); } catch (e) { /* storage blocked */ }
  }

  var start = 'en';
  try { start = localStorage.getItem(KEY) || 'en'; } catch (e) { /* storage blocked */ }
  var q = /[?&]lang=(en|vi)\b/.exec(location.search);
  if (q) start = q[1];
  apply(start);

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-lang-switch] [data-lang]');
    if (!b) return;
    e.preventDefault();
    apply(b.getAttribute('data-lang'));
  });

  /* Text added later by ui.js (toasts, lightbox caption) follows the current language */
  new MutationObserver(function (list) {
    if (lang !== 'vi') return;
    list.forEach(function (m) { Array.prototype.forEach.call(m.addedNodes, walk); });
  }).observe(document.body, { childList: true, subtree: true });
})();
