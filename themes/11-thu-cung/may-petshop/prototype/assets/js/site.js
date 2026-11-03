/* Mây Pet Spa - menu, bảng giá, cửa hàng + giỏ hàng, form đặt lịch (dữ liệu giả, lưu localStorage) */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var money = function (n) { return n.toLocaleString('vi-VN') + 'đ'; };
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } }
  };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg) {
    var t = $('#toast'); if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2400);
  }

  /* ---------- Drawer chung ---------- */
  var openDrawer = null;
  function open(el) { if (!el) return; el.classList.add('is-open'); el.setAttribute('aria-hidden', 'false'); document.body.classList.add('lock'); openDrawer = el; }
  function close(el) { if (!el) return; el.classList.remove('is-open'); el.setAttribute('aria-hidden', 'true'); document.body.classList.remove('lock'); if (openDrawer === el) openDrawer = null; }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && openDrawer) { close(openDrawer); syncMenuBtn(); } });

  /* ---------- Menu mobile ---------- */
  var menu = $('#mobileMenu'), menuBtn = $('#menuBtn');
  function syncMenuBtn() { if (menuBtn) menuBtn.setAttribute('aria-expanded', menu && menu.classList.contains('is-open') ? 'true' : 'false'); }
  if (menuBtn) menuBtn.addEventListener('click', function () { open(menu); syncMenuBtn(); });
  $$('[data-menu-close], [data-menu-link]').forEach(function (b) { b.addEventListener('click', function () { close(menu); syncMenuBtn(); }); });

  /* ---------- Bảng giá ---------- */
  var PRICES = {
    cat: { label: 'Mèo', items: [
      { name: 'Tắm sấy', price: 180000, note: 'Tắm 2 lần, sấy, chải, cắt móng, vệ sinh tai' },
      { name: 'Tắm + tỉa gọn', price: 320000, note: 'Tỉa vệ sinh, gọn bàn chân, gỡ rối nhẹ' },
      { name: 'Cạo lông mùa hè', price: 280000, note: 'Cạo thân, giữ đầu và đuôi, kèm tắm' },
      { name: 'Giữ theo giờ', price: 35000, unit: '/giờ', note: 'Phòng mèo riêng, gói 8 giờ 240.000đ' }
    ]},
    s: { label: 'Chó dưới 5kg', items: [
      { name: 'Tắm sấy', price: 150000, note: 'Poodle, Phốc, Chihuahua, Mini...' },
      { name: 'Tắm + tỉa tạo kiểu', price: 290000, note: 'Teddy, Hàn Quốc, tỉa gọn vệ sinh' },
      { name: 'Giữ theo giờ', price: 35000, unit: '/giờ', note: 'Gói 8 giờ 240.000đ, có cho ăn' }
    ]},
    m: { label: 'Chó 5 - 15kg', items: [
      { name: 'Tắm sấy', price: 220000, note: 'Corgi, Shiba, Beagle, Cocker...' },
      { name: 'Tắm + tỉa tạo kiểu', price: 390000, note: 'Tỉa kiểu theo ảnh mẫu bạn gửi' },
      { name: 'Giữ theo giờ', price: 50000, unit: '/giờ', note: 'Gói 8 giờ 340.000đ, có cho ăn' }
    ]},
    l: { label: 'Chó trên 15kg', items: [
      { name: 'Tắm sấy', price: 320000, note: 'Golden, Husky, Alaska, Samoyed...' },
      { name: 'Tắm + tỉa gọn', price: 520000, note: 'Gỡ lông chết, tỉa gọn chân và đuôi' },
      { name: 'Giữ theo giờ', price: 50000, unit: '/giờ', note: 'Khu riêng cho chó lớn' }
    ]}
  };
  var priceTabs = $('#priceTabs'), pricePanel = $('#pricePanel');
  function renderPrice(key) {
    $$('.tab-btn', priceTabs).forEach(function (b) { b.setAttribute('aria-selected', b.dataset.key === key ? 'true' : 'false'); });
    pricePanel.innerHTML = PRICES[key].items.map(function (it, i) {
      var feat = i === 1;
      return '<article class="group flex flex-col rounded-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-may-700/10 ' +
        (feat ? 'bg-may-700 text-white' : 'bg-white text-ink-800') + '">' +
        '<h3 class="font-display text-lg font-semibold ' + (feat ? 'text-white' : 'text-ink-900') + '">' + esc(it.name) + '</h3>' +
        '<p class="mt-3 font-display text-3xl font-semibold ' + (feat ? 'text-white' : 'text-may-700') + '">' + money(it.price) +
        (it.unit ? '<span class="text-base font-medium ' + (feat ? 'text-may-200' : 'text-ink-500') + '">' + it.unit + '</span>' : '') + '</p>' +
        '<p class="mt-3 flex-1 text-sm ' + (feat ? 'text-may-100' : 'text-ink-600') + '">' + esc(it.note) + '</p>' +
        '<a href="#dat-lich" data-book-pet="' + esc(PRICES[key].label) + '" class="mt-5 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold transition active:scale-[.98] ' +
        (feat ? 'bg-white text-may-800 hover:bg-may-50' : 'border border-may-200 text-may-700 hover:bg-may-50') + '">Đặt lịch</a>' +
        '</article>';
    }).join('');
  }
  if (priceTabs) {
    priceTabs.innerHTML = Object.keys(PRICES).map(function (k) {
      return '<button type="button" role="tab" class="tab-btn" data-key="' + k + '">' + PRICES[k].label + '</button>';
    }).join('');
    priceTabs.addEventListener('click', function (e) { var b = e.target.closest('.tab-btn'); if (b) renderPrice(b.dataset.key); });
    renderPrice('s');
    pricePanel.addEventListener('click', function (e) {
      var a = e.target.closest('[data-book-pet]'); if (!a) return;
      var sel = $('#bPet'); if (sel) sel.value = a.dataset.bookPet;
    });
  }

  /* ---------- Cửa hàng ---------- */
  var CATS = {
    food: { label: 'Thức ăn', img: 'assets/img/sp-ke-thuc-an.jpg', alt: 'Kệ thức ăn hạt cho chó trong cửa hàng', desc: 'Hạt, pate, bánh thưởng và sữa cho chó mèo mọi lứa tuổi.' },
    toy: { label: 'Đồ chơi', img: 'assets/img/sp-do-choi.webp', alt: 'Chó con lông trắng đốm đen đang gặm đồ chơi cao su hình heo', desc: 'Đồ gặm, bóng, dây kéo co và cần câu cho mèo, chất liệu an toàn.' },
    gear: { label: 'Vật dụng', img: 'assets/img/sp-vat-dung.webp', alt: 'Chó Beagle đeo yếm dắt màu xanh lá trên bãi cỏ', desc: 'Yếm, dây dắt, bát ăn, nệm và cát vệ sinh dùng hằng ngày.' }
  };
  var PRODUCTS = [
    { id: 'f1', cat: 'food', name: 'Hạt Royal Canin Mini Adult', spec: 'Túi 2kg, chó nhỏ trưởng thành', price: 389000 },
    { id: 'f2', cat: 'food', name: 'Hạt Me-O vị cá ngừ', spec: 'Túi 1,2kg, mèo trưởng thành', price: 118000 },
    { id: 'f3', cat: 'food', name: 'Pate Whiskas cá ngừ', spec: 'Gói 85g', price: 18000 },
    { id: 'f4', cat: 'food', name: 'Xương gặm sạch răng Gnawlers', spec: 'Hộp 270g', price: 79000 },
    { id: 'f5', cat: 'food', name: 'Sữa bột Dr.Kyan Predogen', spec: 'Hộp 400g, chó con', price: 165000 },
    { id: 'f6', cat: 'food', name: 'Súp thưởng Ciao Churu', spec: 'Gói 4 thanh x 14g', price: 42000 },
    { id: 't1', cat: 'toy', name: 'Bóng cao su gai', spec: 'Đường kính 6cm, có chuông', price: 35000 },
    { id: 't2', cat: 'toy', name: 'Dây thừng kéo co', spec: 'Dài 30cm, cotton bện', price: 45000 },
    { id: 't3', cat: 'toy', name: 'Cần câu lông vũ cho mèo', spec: 'Cán 45cm, kèm 2 đầu thay', price: 39000 },
    { id: 't4', cat: 'toy', name: 'Trụ cào móng 3 tầng', spec: 'Cao 72cm, có ổ nằm', price: 450000 },
    { id: 't5', cat: 'toy', name: 'Heo cao su kêu chít', spec: 'Dài 12cm, cao su tự nhiên', price: 55000 },
    { id: 'g1', cat: 'gear', name: 'Yếm dắt chống giật', spec: 'Size S - M, vải lưới thoáng', price: 145000 },
    { id: 'g2', cat: 'gear', name: 'Dây dắt tự cuộn', spec: 'Dài 5m, chó dưới 15kg', price: 210000 },
    { id: 'g3', cat: 'gear', name: 'Bát inox chống trượt', spec: 'Đường kính 15cm', price: 55000 },
    { id: 'g4', cat: 'gear', name: 'Nệm tròn lông mềm', spec: 'Đường kính 60cm, giặt máy được', price: 260000 },
    { id: 'g5', cat: 'gear', name: 'Cát đậu nành vón cục', spec: 'Túi 6L, ít bụi', price: 120000 },
    { id: 'g6', cat: 'gear', name: 'Lược chải gỡ rối', spec: 'Răng inox, cán chống trượt', price: 65000 }
  ];
  var byId = {}; PRODUCTS.forEach(function (p) { byId[p.id] = p; });

  var shopTabs = $('#shopTabs'), grid = $('#productGrid');
  function renderShop(cat) {
    $$('.tab-btn', shopTabs).forEach(function (b) { b.setAttribute('aria-selected', b.dataset.key === cat ? 'true' : 'false'); });
    var c = CATS[cat], img = $('#shopImage');
    if (img && img.getAttribute('src') !== c.img) { img.src = c.img; img.alt = c.alt; }
    $('#shopTitle').textContent = c.label;
    $('#shopDesc').textContent = c.desc;
    grid.innerHTML = PRODUCTS.filter(function (p) { return p.cat === cat; }).map(function (p) {
      return '<article class="group flex flex-col rounded-card border border-may-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-may-200 hover:shadow-lg hover:shadow-may-700/10">' +
        '<h4 class="font-semibold text-ink-900">' + esc(p.name) + '</h4>' +
        '<p class="mt-1 flex-1 text-sm text-ink-500">' + esc(p.spec) + '</p>' +
        '<div class="mt-5 flex items-center justify-between gap-3">' +
        '<span class="font-display text-lg font-semibold text-may-700">' + money(p.price) + '</span>' +
        '<button type="button" data-add="' + p.id + '" data-ripple class="inline-flex h-11 items-center gap-1.5 rounded-full bg-may-100 px-4 text-sm font-semibold text-may-800 transition hover:bg-may-600 hover:text-white active:scale-[.98]" aria-label="Thêm ' + esc(p.name) + ' vào giỏ">' +
        '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>Thêm vào giỏ</button>' +
        '</div></article>';
    }).join('');
  }
  if (shopTabs) {
    shopTabs.innerHTML = Object.keys(CATS).map(function (k) {
      return '<button type="button" role="tab" class="tab-btn" data-key="' + k + '">' + CATS[k].label + '</button>';
    }).join('');
    shopTabs.addEventListener('click', function (e) { var b = e.target.closest('.tab-btn'); if (b) renderShop(b.dataset.key); });
    renderShop('food');
  }
  $$('[data-shop-jump]').forEach(function (a) { a.addEventListener('click', function () { renderShop(a.dataset.shopJump); }); });

  /* ---------- Giỏ hàng ---------- */
  var CART_KEY = 'maypet-cart';
  var cart = store.get(CART_KEY, {});
  Object.keys(cart).forEach(function (id) { if (!byId[id] || !(cart[id] > 0)) delete cart[id]; });
  var drawer = $('#cartDrawer'), checkout = $('#checkoutForm');

  function shipFee(sub) {
    var r = checkout && checkout.querySelector('input[name="ship"]:checked');
    if (!r || r.value !== 'delivery') return 0;
    return sub >= 500000 ? 0 : 20000;
  }
  function renderCart() {
    var ids = Object.keys(cart), count = 0, sub = 0;
    ids.forEach(function (id) { count += cart[id]; sub += cart[id] * byId[id].price; });
    $$('[data-cart-count]').forEach(function (b) { b.textContent = count; b.classList.toggle('hidden', count === 0); });
    $('#cartEmpty').classList.toggle('hidden', ids.length > 0 || !$('#orderSuccess').classList.contains('hidden'));
    checkout.classList.toggle('hidden', ids.length === 0);
    $('#cartFooter').classList.toggle('hidden', ids.length === 0);
    $('#cartItems').innerHTML = ids.map(function (id) {
      var p = byId[id];
      return '<li class="flex items-center gap-3 py-4">' +
        '<div class="min-w-0 flex-1"><p class="font-semibold text-ink-900 break-words">' + esc(p.name) + '</p><p class="text-sm text-ink-500">' + money(p.price) + '</p></div>' +
        '<div class="flex items-center rounded-full border border-may-200">' +
        '<button type="button" data-dec="' + id + '" class="grid h-10 w-10 place-items-center rounded-full text-may-700 hover:bg-may-50" aria-label="Giảm số lượng">−</button>' +
        '<span class="w-7 text-center font-semibold">' + cart[id] + '</span>' +
        '<button type="button" data-inc="' + id + '" class="grid h-10 w-10 place-items-center rounded-full text-may-700 hover:bg-may-50" aria-label="Tăng số lượng">+</button>' +
        '</div></li>';
    }).join('');
    var fee = shipFee(sub);
    $('#cartSubtotal').textContent = money(sub);
    $('#cartShip').textContent = fee === 0 && checkout.querySelector('input[name="ship"]:checked').value === 'delivery' ? 'Miễn phí' : money(fee);
    $('#cartTotal').textContent = money(sub + fee);
    store.set(CART_KEY, cart);
  }
  function openCart() { $('#orderSuccess').classList.add('hidden'); renderCart(); open(drawer); }

  document.addEventListener('click', function (e) {
    var add = e.target.closest('[data-add]');
    if (add) { var id = add.dataset.add; cart[id] = (cart[id] || 0) + 1; renderCart(); toast('Đã thêm ' + byId[id].name + ' vào giỏ'); return; }
    var inc = e.target.closest('[data-inc]');
    if (inc) { cart[inc.dataset.inc]++; renderCart(); return; }
    var dec = e.target.closest('[data-dec]');
    if (dec) { var d = dec.dataset.dec; cart[d]--; if (cart[d] <= 0) delete cart[d]; renderCart(); return; }
    if (e.target.closest('[data-cart-open]')) { openCart(); return; }
    if (e.target.closest('[data-cart-close]')) { close(drawer); }
  });

  if (checkout) {
    $$('input[name="ship"]', checkout).forEach(function (r) {
      r.addEventListener('change', function () {
        var del = checkout.querySelector('input[name="ship"]:checked').value === 'delivery';
        $('#addressWrap').classList.toggle('hidden', !del);
        $('#addressWrap').classList.toggle('flex', del);
        renderCart();
      });
    });
    checkout.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = checkout, del = f.querySelector('input[name="ship"]:checked').value === 'delivery';
      var errs = {};
      if (!f.elements['name'].value.trim()) errs.name = 'Vui lòng nhập tên người nhận.';
      if (!validPhone(f.phone.value)) errs.phone = 'Số điện thoại chưa đúng, ví dụ 0901 234 567.';
      if (del && f.address.value.trim().length < 8) errs.address = 'Vui lòng nhập địa chỉ giao đầy đủ (số nhà, đường, phường).';
      if (showErrors(f, errs)) return;
      var sub = 0; Object.keys(cart).forEach(function (id) { sub += cart[id] * byId[id].price; });
      var order = { code: 'MP' + String(Date.now()).slice(-6), items: cart, name: f.elements['name'].value.trim(), phone: f.phone.value.trim(), ship: del ? 'delivery' : 'pickup', address: del ? f.address.value.trim() : '', total: sub + shipFee(sub), at: new Date().toISOString() };
      var orders = store.get('maypet-orders', []); orders.push(order); store.set('maypet-orders', orders);
      cart = {}; f.reset(); $('#addressWrap').classList.add('hidden'); $('#addressWrap').classList.remove('flex');
      $('#orderSuccessText').textContent = 'Mã đơn ' + order.code + ', tổng ' + money(order.total) + '. ' + (del ? 'Tiệm sẽ gọi xác nhận và giao trong ngày.' : 'Bạn ghé tiệm nhận hàng sau 30 phút nhé.');
      $('#orderSuccess').classList.remove('hidden');
      renderCart();
    });
  }
  renderCart();

  /* ---------- Form đặt lịch ---------- */
  function validPhone(v) { return /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(String(v).replace(/[\s.\-]/g, '')); }
  function showErrors(form, errs) {
    var first = null;
    $$('[data-error-for]', form).forEach(function (p) { p.textContent = errs[p.dataset.errorFor] || ''; });
    $$('.field', form).forEach(function (el) {
      var bad = !!errs[el.name]; el.classList.toggle('is-invalid', bad);
      el.setAttribute('aria-invalid', bad ? 'true' : 'false');
      if (bad && !first) first = el;
    });
    if (!first && errs.service) first = form.querySelector('input[name="service"]');
    if (first) { first.focus({ preventScroll: true }); first.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    return Object.keys(errs).length > 0;
  }

  var booking = $('#bookingForm');
  if (booking) {
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var today = new Date(), iso = today.getFullYear() + '-' + pad(today.getMonth() + 1) + '-' + pad(today.getDate());
    booking.date.min = iso;
    var timeSel = booking.time;
    for (var h = 8; h <= 18; h++) {
      ['00', '30'].forEach(function (m) {
        if (h === 18 && m === '30') return;
        var o = document.createElement('option'); o.value = h + ':' + m; o.textContent = h + ':' + m; timeSel.appendChild(o);
      });
    }

    $$('[data-book-service]').forEach(function (b) {
      b.addEventListener('click', function () {
        var cb = booking.querySelector('input[name="service"][value="' + b.dataset.bookService + '"]');
        if (cb) cb.checked = true;
        document.getElementById('dat-lich').scrollIntoView({ behavior: 'smooth' });
      });
    });

    booking.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = booking, errs = {};
      var services = $$('input[name="service"]:checked', f).map(function (c) { return c.parentNode.textContent.trim(); });
      if (f.elements['name'].value.trim().length < 2) errs.name = 'Vui lòng nhập tên của bạn.';
      if (!validPhone(f.phone.value)) errs.phone = 'Số điện thoại chưa đúng, ví dụ 0901 234 567.';
      if (!f.pet.value) errs.pet = 'Vui lòng chọn loại thú cưng.';
      if (!services.length) errs.service = 'Chọn ít nhất một dịch vụ.';
      if (!f.date.value) errs.date = 'Vui lòng chọn ngày.';
      else if (f.date.value < iso) errs.date = 'Ngày hẹn không được ở quá khứ.';
      if (!f.time.value) errs.time = 'Vui lòng chọn giờ đưa bé tới.';
      if (showErrors(f, errs)) return;

      var bk = { code: 'LH' + String(Date.now()).slice(-6), name: f.elements['name'].value.trim(), phone: f.phone.value.trim(), pet: f.pet.value, petName: f.petName.value.trim(), services: services, date: f.date.value, time: f.time.value, note: f.note.value.trim(), at: new Date().toISOString() };
      var list = store.get('maypet-bookings', []); list.push(bk); store.set('maypet-bookings', list);
      var d = bk.date.split('-');
      $('#bookingSuccessText').textContent = 'Mã lịch hẹn ' + bk.code + ': ' + services.join(', ') + ' cho ' + (bk.petName ? 'bé ' + bk.petName : 'bé') + ' lúc ' + bk.time + ' ngày ' + d[2] + '/' + d[1] + '/' + d[0] + '. Tiệm sẽ gọi ' + bk.phone + ' để xác nhận.';
      $('#bookingSuccess').classList.remove('hidden');
      f.reset(); booking.date.min = iso;
      $('#bookingSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
      toast('Đã gửi lịch hẹn');
    });

    $$('.field', booking).forEach(function (el) {
      el.addEventListener('input', function () {
        el.classList.remove('is-invalid');
        var p = booking.querySelector('[data-error-for="' + el.name + '"]'); if (p) p.textContent = '';
      });
    });
    $$('input[name="service"]', booking).forEach(function (c) {
      c.addEventListener('change', function () { var p = booking.querySelector('[data-error-for="service"]'); if (p) p.textContent = ''; });
    });
  }

  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
