/* Khởi động trang + trạng thái demo dùng chung — window.App
 * Ghép dữ liệu giả (DemoStore) thành view-model cho component: sản phẩm, combo, giỏ hàng, đơn, đánh giá.
 * Xử lý giả: thêm giỏ (AddToCartFeedback), chọn nhanh biến thể, CartDrawer, tác động liên module khi chuyển trạng thái đơn
 * (theo _integration.md: xác nhận đơn thường → trừ tồn; hủy / trả lại → cộng tồn; đã giao → cộng điểm).
 */
(function () {
  'use strict';
  var esc = UI.esc, ic = UI.icon;
  var S = function () { return MOCK.settings; };
  var DAY = 864e5;

  var App = (window.App = {});

  /* ---------- URL & điều hướng ---------- */
  App.url = function (p) { return Perm.url(p); };
  App.param = function (k) { return new URLSearchParams(location.search).get(k); };
  App.setParams = function (obj) {
    var sp = new URLSearchParams(location.search);
    Object.keys(obj).forEach(function (k) { var v = obj[k]; if (v == null || v === '' || (Array.isArray(v) && !v.length)) sp.delete(k); else sp.set(k, Array.isArray(v) ? v.join(',') : v); });
    var q = sp.toString(); history.replaceState(null, '', location.pathname + (q ? '?' + q : '') + location.hash);
  };
  /** Đường dẫn trang hiện tại tính từ gốc prototype (dùng cho ?quay_lai=) */
  App.here = function () { return decodeURIComponent(location.href.replace(Perm.root, '').replace(/#.*$/, '')); };
  /** Link đăng nhập khách kèm ?quay_lai= (mặc định: trang hiện tại) */
  App.loginHref = function (back) { return Perm.url('pages/dang-nhap.html') + '?quay_lai=' + encodeURIComponent(back || App.here()); };
  /** Giải ?quay_lai=: "thanh-toan" → pages/thanh-toan.html; đường dẫn đầy đủ giữ nguyên */
  App.resolveBack = function (v) {
    if (!v) return Perm.url('index.html');
    if (/^https?:|^file:/.test(v)) return Perm.url('index.html');
    if (v.indexOf('/') < 0 && !/\.html/.test(v)) return Perm.url('pages/' + v + '.html');
    return Perm.url(v);
  };
  /** Trì hoãn giả ~400ms để thấy Skeleton */
  App.load = function (el, skeleton, fn) { if (el) el.innerHTML = skeleton; setTimeout(fn, 400); };

  /* ---------- Người dùng demo ---------- */
  App.me = function () { var r = Perm.role(); return (MOCK.users || []).filter(function (u) { return u.roleId === r; })[0] || null; };
  App.customer = function () { var me = App.me(); return me && me.customerId ? DemoStore.get('customers', me.customerId) : null; };
  /** "Nguyễn Thị Lan" → "Lan N***" (che một phần tên ở website) */
  App.maskName = function (n) { var p = String(n || '').trim().split(/\s+/); if (p.length < 2) return p[0] + '***'; return p[p.length - 1] + ' ' + p[0].charAt(0) + '***'; };

  /* ---------- Sản phẩm ---------- */
  App.products = function (all) { return DemoStore.list('products').filter(function (p) { return all || p.trang_thai === 'DANG_BAN'; }); };
  App.product = function (id) { return DemoStore.get('products', id); };
  App.variant = function (vid) {
    var ps = DemoStore.list('products');
    for (var i = 0; i < ps.length; i++) for (var j = 0; j < ps[i].variants.length; j++) if (ps[i].variants[j].id === vid) return { p: ps[i], v: ps[i].variants[j] };
    return null;
  };
  App.petType = function (id) { return MOCK.petTypes.filter(function (t) { return t.id === id; })[0]; };
  App.category = function (id) { return DemoStore.list('categories').filter(function (c) { return c.id === id; })[0] || { ten: '' }; };
  App.petTags = function (ids) { return (ids || []).map(function (id) { var t = App.petType(id); return t ? { label: 'Cho ' + t.ten.toLowerCase(), tone: t.tone } : null; }).filter(Boolean); };
  App.inStock = function (v) { return v.ton_kho == null || v.ton_kho > 0; };
  App.isOut = function (p) { return !p.la_pate && p.variants.every(function (v) { return !App.inStock(v); }); };
  App.minPrice = function (p) { var vs = p.variants.filter(App.inStock); if (!vs.length) vs = p.variants; return Math.min.apply(null, vs.map(function (v) { return v.gia; })); };
  App.isNew = function (p) { return Date.now() - new Date(p.tao_luc) <= 30 * DAY; };
  App.discount = function (p) { var d = 0; p.variants.forEach(function (v) { if (v.gia_goc && v.gia_goc > v.gia) d = Math.max(d, Math.round((1 - v.gia / v.gia_goc) * 100)); }); return d; };
  App.productHref = function (p, vid) { return Perm.url(p.la_pate ? 'pages/pate-chay.html' : 'pages/chi-tiet-san-pham.html') + '?id=' + p.id + (vid ? '&bien-the=' + vid : ''); };
  /** Nhãn góc thẻ: tối đa 2, ưu tiên Hết hàng > Giảm x% > Mới; pate chay có nhãn riêng */
  App.badges = function (p) {
    var b = [];
    if (p.la_pate) b.push({ text: 'Pate chay tự làm', tone: 'mint' });
    if (App.isOut(p)) b.push({ text: 'Hết hàng', tone: 'dark' });
    var d = App.discount(p); if (d) b.push({ text: 'Giảm ' + d + '%', tone: 'danger' });
    if (App.isNew(p)) b.push({ text: 'Mới', tone: 'info' });
    return b.slice(0, 2);
  };
  App.productVM = function (p) {
    var cheapest = p.variants.filter(App.inStock).sort(function (a, b) { return a.gia - b.gia; })[0] || p.variants[0];
    return {
      id: p.id, href: App.productHref(p), name: p.ten, img: p.anh[0], img2: p.anh[1], petTags: App.petTags(p.pet_type_ids),
      rating: p.sao, reviews: p.so_danh_gia, price: App.minPrice(p), oldPrice: p.variants.length === 1 ? cheapest.gia_goc : (cheapest.gia_goc || null), from: p.variants.length > 1,
      badges: App.badges(p), kind: p.la_pate ? 'pate' : App.isOut(p) ? 'out' : 'normal', unit: p.la_pate ? '/ hũ' : ''
    };
  };
  App.productCard = function (p) { return UI.productCard(App.productVM(p)); };

  /* ---------- Combo ---------- */
  App.combos = function (all) { return DemoStore.list('combos').filter(function (c) { return all || c.trang_thai === 'BAT'; }); };
  App.comboItems = function (c) { return c.items.map(function (it) { var x = App.variant(it[0]); return x ? { p: x.p, v: x.v, qty: it[1], text: x.p.ten + ' ' + x.v.ten + ' × ' + it[1] } : null; }).filter(Boolean); };
  App.comboRetail = function (c) { return App.comboItems(c).reduce(function (s, i) { return s + i.v.gia * i.qty; }, 0); };
  App.comboOut = function (c) { return App.comboItems(c).some(function (i) { return i.v.ton_kho != null && i.v.ton_kho < i.qty; }); };
  App.comboMax = function (c) { var m = 99; App.comboItems(c).forEach(function (i) { if (i.v.ton_kho != null) m = Math.min(m, Math.floor(i.v.ton_kho / i.qty)); }); return m; };
  App.comboHref = function (c) { return Perm.url('pages/combo.html') + '?id=' + c.id; };
  App.comboVM = function (c) { var r = App.comboRetail(c); return { id: c.id, href: App.comboHref(c), name: c.ten, img: c.anh, items: App.comboItems(c).map(function (i) { return i.text; }), price: c.gia_combo, retail: r, save: r - c.gia_combo, out: App.comboOut(c) }; };

  /* ---------- Giỏ hàng (ENT-CART_ITEM) ---------- */
  var cart = (App.cart = {
    items: function () { return DemoStore.list('cart'); },
    count: function () { return cart.items().reduce(function (s, i) { return s + i.qty; }, 0); },
    /** Dòng giỏ đã ghép dữ liệu: giá hiện tại, tồn, lỗi BOOK-E01 / PROD-E03 */
    lines: function () {
      return cart.items().map(function (it) {
        if (it.kind === 'combo') {
          var c = DemoStore.get('combos', it.comboId); if (!c) return null;
          var max = App.comboMax(c), err = max <= 0 ? 'Combo đã hết hàng' : it.qty > max ? 'Chỉ còn ' + max + ' combo' : '';
          return { id: it.id, kind: 'combo', ref: c, href: App.comboHref(c), img: c.anh, name: c.ten, variant: 'Combo', items: App.comboItems(c).map(function (i) { return i.text; }), price: c.gia_combo, qty: it.qty, max: Math.max(1, Math.min(99, max)), total: c.gia_combo * it.qty, error: err, out: max <= 0 };
        }
        var x = App.variant(it.variantId); if (!x) return null;
        var v = x.v, stock = v.ton_kho == null ? 99 : v.ton_kho;
        var e = stock <= 0 ? 'Sản phẩm này đã hết hàng' : it.qty > stock ? 'Chỉ còn ' + stock + ' sản phẩm' : (it.oldPrice && it.oldPrice !== v.gia ? 'Giá đã thay đổi từ ' + UI.fmt.money(it.oldPrice) + ' thành ' + UI.fmt.money(v.gia) : '');
        return { id: it.id, kind: 'variant', ref: x.p, v: v, href: App.productHref(x.p, v.id), img: v.anh || x.p.anh[0], name: x.p.ten, variant: v.ten, price: v.gia, oldPrice: v.gia_goc, qty: it.qty, max: Math.max(1, Math.min(99, stock)), total: v.gia * it.qty, error: e, out: stock <= 0, priceChanged: !!(it.oldPrice && it.oldPrice !== v.gia) };
      }).filter(Boolean);
    },
    subtotal: function () { return cart.lines().reduce(function (s, l) { return s + l.total; }, 0); },
    hasBlocking: function () { return cart.lines().some(function (l) { return l.out || /Chỉ còn/.test(l.error); }); },
    /** Thêm / cộng dồn. Trả về thông báo lỗi (PROD-E03) hoặc '' */
    add: function (o) {
      var items = cart.items();
      var same = items.filter(function (i) { return o.comboId ? i.comboId === o.comboId : i.variantId === o.variantId; })[0];
      var max = 99;
      if (o.comboId) max = App.comboMax(DemoStore.get('combos', o.comboId)); else { var x = App.variant(o.variantId); if (x && x.v.ton_kho != null) max = Math.min(99, x.v.ton_kho); }
      var want = (same ? same.qty : 0) + (o.qty || 1);
      if (want > max) return max <= (same ? same.qty : 0) ? 'Chỉ còn ' + max + ' sản phẩm' : 'Chỉ còn ' + max + ' sản phẩm';
      if (same) DemoStore.update('cart', same.id, { qty: want, addedAt: new Date().toISOString() });
      else DemoStore.insert('cart', { id: 'ci' + Date.now(), kind: o.comboId ? 'combo' : 'variant', productId: o.productId || null, variantId: o.variantId || null, comboId: o.comboId || null, qty: o.qty || 1, addedAt: new Date().toISOString() });
      Layout.refreshCart();
      return '';
    },
    setQty: function (id, q) { DemoStore.update('cart', id, { qty: q }); Layout.refreshCart(); },
    remove: function (id) { var row = DemoStore.get('cart', id); DemoStore.remove('cart', id); Layout.refreshCart(); return row; },
    restore: function (row) { DemoStore.insert('cart', row); Layout.refreshCart(); },
    acceptChanges: function () { cart.items().forEach(function (i) { if (i.oldPrice) DemoStore.update('cart', i.id, { oldPrice: null }); }); },
    clear: function () { cart.items().forEach(function (i) { DemoStore.remove('cart', i.id); }); Layout.refreshCart(); }
  });
  App.points = function (amount) { return Math.floor((amount || 0) / 1000); };

  /** Bấm "Thanh toán": khách hàng → thanh toán; khách vãng lai → đăng nhập ?quay_lai=thanh-toan */
  App.goCheckout = function () {
    if (Perm.role() === 'ROLE-02') { location.href = Perm.url('pages/thanh-toan.html'); return; }
    UI.toast('Vui lòng đăng nhập để đặt hàng', 'info');
    setTimeout(function () { location.href = App.loginHref('thanh-toan'); }, 600);
  };

  /** Thêm giỏ từ nút trên thẻ: 1 biến thể → thêm luôn; ≥ 2 biến thể → chọn nhanh */
  App.quickAdd = function (productId, btn) {
    var p = App.product(productId); if (!p) return;
    if (p.la_pate) { location.href = App.productHref(p); return; }
    var avail = p.variants.filter(App.inStock);
    if (!avail.length) { UI.toast('Sản phẩm này đã hết hàng', 'error'); return; }
    if (p.variants.length === 1) {
      var err = cart.add({ productId: p.id, variantId: p.variants[0].id, qty: 1 });
      if (err) UI.toast(err, 'error'); else UI.addToCartFeedback(btn, { message: 'Đã thêm vào giỏ', viewHref: Perm.url('pages/gio-hang.html') });
      return;
    }
    App.variantPicker(p, btn);
  };
  /** Drawer đáy (mobile) / Modal md (desktop): VariantTiles + QuantityStepper + PriceTag + "Thêm vào giỏ" */
  App.variantPicker = function (p, fromBtn) {
    var sel = p.variants.filter(App.inStock).sort(function (a, b) { return a.gia - b.gia; })[0];
    var body = '<div class="flex gap-3 mb-4"><span class="size-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100" data-qa-img>' + UI.img({ src: sel.anh || p.anh[0], alt: p.ten }) + '</span><div class="min-w-0"><p class="font-bold text-neutral-800 line-clamp-2">' + esc(p.ten) + '</p><div data-qa-price class="mt-1">' + UI.priceTag({ price: sel.gia, oldPrice: sel.gia_goc, size: 'md' }) + '</div></div></div>' +
      '<p class="mb-2 text-sm font-bold text-neutral-800">Chọn loại / khối lượng <span class="text-danger-600">*</span></p><div data-qa-tiles></div><p data-qa-err class="hidden mt-1 text-xs font-bold text-danger-700"></p>' +
      '<div class="mt-4 flex items-center justify-between gap-3"><span class="text-sm font-bold text-neutral-800">Số lượng</span><span data-qa-qty>' + UI.quantityStepper({ value: 1, max: Math.min(99, sel.ton_kho == null ? 99 : sel.ton_kho), limitMsg: 'Chỉ còn ' + sel.ton_kho + ' sản phẩm' }) + '</span></div>';
    var mobile = window.innerWidth < 768;
    var opts = {
      title: 'Chọn nhanh', body: body, size: 'md', side: 'bottom',
      actions: [{ label: 'Thêm vào giỏ', icon: 'shopping-cart', onClick: function (api) {
        if (!sel) { var e = api.body.querySelector('[data-qa-err]'); e.textContent = 'Vui lòng chọn loại / khối lượng'; e.classList.remove('hidden'); return false; }
        var q = parseInt(api.body.querySelector('[data-qty-input]').value, 10) || 1;
        var err = cart.add({ productId: p.id, variantId: sel.id, qty: q });
        if (err) { UI.toast(err, 'error'); return false; }
        setTimeout(function () { UI.addToCartFeedback(fromBtn, { message: 'Đã thêm ' + p.ten + ' (' + sel.ten + ') vào giỏ', viewHref: Perm.url('pages/gio-hang.html') }); }, 50);
      } }]
    };
    var d = mobile ? UI.drawer(opts) : UI.modal(opts);
    UI.variantTiles(d.body.querySelector('[data-qa-tiles]'), {
      variants: p.variants.map(function (v) { return { id: v.id, label: v.ten, price: v.gia, img: v.anh, disabled: !App.inStock(v) }; }), value: sel.id,
      onChange: function (vv) {
        sel = p.variants.filter(function (v) { return v.id === vv.id; })[0];
        d.body.querySelector('[data-qa-price]').innerHTML = UI.priceTag({ price: sel.gia, oldPrice: sel.gia_goc, size: 'md' });
        d.body.querySelector('[data-qa-img]').innerHTML = UI.img({ src: sel.anh || p.anh[0], alt: p.ten });
        d.body.querySelector('[data-qa-qty]').innerHTML = UI.quantityStepper({ value: 1, max: Math.min(99, sel.ton_kho == null ? 99 : sel.ton_kho), limitMsg: 'Chỉ còn ' + sel.ton_kho + ' sản phẩm' });
        d.body.querySelector('[data-qa-err]').classList.add('hidden');
      }
    });
  };
  App.addCombo = function (comboId, btn, qty) {
    var c = DemoStore.get('combos', comboId); if (!c) return;
    var err = cart.add({ comboId: comboId, qty: qty || 1 });
    if (err) { UI.toast(err.replace('sản phẩm', 'combo'), 'error'); return false; }
    UI.addToCartFeedback(btn, { message: 'Đã thêm vào giỏ', viewHref: Perm.url('pages/gio-hang.html') });
    return true;
  };

  /* ---------- CartDrawer ---------- */
  App.openCartDrawer = function () {
    var d = UI.drawer({ title: 'Giỏ hàng', size: 'md', body: '<div data-cd></div>' });
    function paint() {
      var lines = cart.lines(), sub = cart.subtotal(), root = d.body.querySelector('[data-cd]');
      d.el.querySelector('h2').textContent = 'Giỏ hàng (' + cart.count() + ')';
      if (!lines.length) { root.innerHTML = UI.emptyState({ title: 'Giỏ hàng đang trống', text: 'Boss nhà bạn đang chờ món ngon đó!', size: 'sm', action: UI.button({ label: 'Xem sản phẩm', href: Perm.url('pages/san-pham.html') }) }); return; }
      root.innerHTML = '<div class="flex flex-col gap-4">' + UI.freeShipProgress(sub, { threshold: S().freeShip }) +
        (lines.some(function (l) { return l.error; }) ? UI.alert({ tone: 'warning', text: 'Một số sản phẩm đã thay đổi giá hoặc hết hàng, vui lòng kiểm tra lại' }) : '') +
        '<div class="flex flex-col gap-2">' + lines.map(function (l) { return UI.cartLine(l, { compact: true }); }).join('') + '</div>' +
        '<div class="sticky bottom-0 -mx-5 -mb-4 border-t border-neutral-100 bg-white px-5 py-4 flex flex-col gap-2 safe-bottom"><div class="flex items-baseline justify-between"><span class="text-sm text-neutral-600">Tạm tính</span><span class="text-xl font-extrabold tabular-nums">' + UI.fmt.money(sub) + '</span></div>' +
        UI.button({ label: 'Thanh toán', size: 'lg', full: true, disabled: cart.hasBlocking(), attrs: { 'data-cd-checkout': '', 'data-permission': 'BOOK.CART.VIEW' } }) +
        UI.button({ label: 'Xem giỏ hàng', variant: 'outline', full: true, href: Perm.url('pages/gio-hang.html') }) + '</div></div>';
    }
    d.body.addEventListener('qtychange', function (e) { var id = e.target.closest('[data-line-qty]'); if (id) { cart.setQty(id.getAttribute('data-line-qty'), e.detail.value); paint(); } });
    d.body.addEventListener('click', function (e) {
      var rm = e.target.closest('[data-cart-remove]');
      if (rm) { var row = cart.remove(rm.getAttribute('data-cart-remove')); var name = rm.getAttribute('aria-label').replace(/^Xóa /, '').replace(/ khỏi giỏ$/, ''); paint(); UI.toast('Đã xóa ' + name + ' khỏi giỏ', 'success', { duration: 5000, action: { label: 'Hoàn tác', onClick: function () { cart.restore(row); paint(); } } }); return; }
      if (e.target.closest('[data-cd-checkout]')) App.goCheckout();
    });
    paint();
    return d;
  };

  /* ---------- Chứng từ ---------- */
  App.docOf = function (o) { return o.docId || (/^PC/.test(o.code) ? 'DOC-BOOK-PATE_ORDER' : 'DOC-BOOK-ORDER'); };
  App.stateBadge = function (docId, state, size) { var s = Workflow.state(docId, state); return UI.statusBadge(s.name, s.tone, size); };
  App.PAY = { CHUA_THANH_TOAN: ['Chưa trả', 'danger-soft'], DA_COC: ['Đã cọc', 'warning'], DA_THANH_TOAN: ['Đã trả', 'success'], HOAN_MOT_PHAN: ['Hoàn một phần', 'info'], DA_HOAN_TIEN: ['Đã hoàn tiền', 'neutral'] };
  App.payTag = function (st) { var p = App.PAY[st] || App.PAY.CHUA_THANH_TOAN; return UI.tag(p[0], p[1]); };
  App.PAY_METHOD = { COD: 'Tiền mặt khi nhận hàng (COD)', CHUYEN_KHOAN: 'Chuyển khoản', QR: 'Quét mã QR' };
  App.SHIP = { DVVC: 'Đơn vị vận chuyển', TU_GIAO: 'Cửa hàng tự giao', TU_LAY: 'Tự lấy tại cửa hàng' };
  App.typeTag = function (o) { return App.docOf(o) === 'DOC-BOOK-PATE_ORDER' ? UI.tag('Pate chay', 'mint') : UI.tag('Thường', 'neutral'); };
  /** Các bước OrderStepper theo loại đơn + chỉ số bước hiện tại */
  App.stepper = function (o, compact) {
    var pate = App.docOf(o) === 'DOC-BOOK-PATE_ORDER';
    var keys = pate ? ['NEW', 'CONFIRMED', 'MAKING', 'SHIPPING', 'DELIVERED'] : ['NEW', 'CONFIRMED', 'SHIPPING', 'DELIVERED'];
    var at = {}; (o.history || []).forEach(function (h) { if (h.to) at[h.to] = h.at; });
    var steps = keys.map(function (k) { return { label: Workflow.state(App.docOf(o), k).name, at: at[k] }; });
    var ended = null, cur;
    if (o.state === 'CANCELLED' || o.state === 'RETURNED') {
      var last = 0; keys.forEach(function (k, i) { if (at[k]) last = i; });
      cur = last; ended = { label: Workflow.state(App.docOf(o), o.state).name, tone: o.state === 'RETURNED' ? 'danger' : 'neutral' };
    } else cur = Math.max(0, keys.indexOf(o.state));
    return UI.orderStepper({ steps: steps, current: cur, ended: ended, compact: compact });
  };

  /** Tác động liên module khi chuyển trạng thái đơn (_integration.md). Trả về câu mô tả tác động cho Toast */
  App.orderEffects = function (before, after) {
    var notes = [];
    var normal = App.docOf(after) === 'DOC-BOOK-ORDER';
    function stock(sign) {
      (after.items || []).forEach(function (it) {
        var ids = it.comboId ? App.comboItems(DemoStore.get('combos', it.comboId) || { items: [] }).map(function (x) { return [x.v.id, x.qty * it.so_luong]; }) : [[it.variantId, it.so_luong]];
        ids.forEach(function (pair) {
          var x = App.variant(pair[0]); if (!x || x.v.ton_kho == null) return;
          DemoStore.update('products', x.p.id, function (p) { var n = JSON.parse(JSON.stringify(p)); n.variants.forEach(function (v) { if (v.id === pair[0]) { var from = v.ton_kho; v.ton_kho = Math.max(0, v.ton_kho + sign * pair[1]); DemoStore.insert('stockLogs', { id: 'sl' + Date.now() + Math.random().toString(36).slice(2, 5), variantId: v.id, at: new Date().toISOString(), by: 'Hệ thống', from: from, to: v.ton_kho, reason: 'Đơn ' + after.code, source: 'Đơn hàng' }); } }); return n; });
        });
      });
    }
    if (normal && before.state === 'NEW' && after.state === 'CONFIRMED') { stock(-1); notes.push('đã trừ tồn kho'); }
    if (normal && ['CONFIRMED', 'SHIPPING'].indexOf(before.state) >= 0 && ['CANCELLED', 'RETURNED'].indexOf(after.state) >= 0) { stock(1); notes.push('đã cộng lại tồn kho'); }
    if (normal && after.state === 'DELIVERED' && !after.diem_da_cong) {
      DemoStore.update('customers', after.customerId, function (c) { var n = Object.assign({}, c); n.diem = (c.diem || 0) + App.points(after.tong_cong); return n; });
      DemoStore.update('orders', after.id, { diem_da_cong: true, thoi_diem_giao: new Date().toISOString() });
      notes.push('khách được cộng ' + App.points(after.tong_cong) + ' điểm');
    }
    if (after.state === 'DELIVERED' && !after.thoi_diem_giao) DemoStore.update('orders', after.id, { thoi_diem_giao: new Date().toISOString() });
    return notes.length ? ' (' + notes.join(', ') + ')' : '';
  };

  /* ---------- Xử lý đơn ở trang quản lý (dùng chung SCR-BOOK-008 / SCR-BOOK-009 / SCR-BOOK-011) ---------- */
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  /** yyyy-mm-dd theo giờ máy (cho input date) */
  App.localDate = function (d) { d = d || new Date(); return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); };
  App.adminName = function () { var me = App.me(); var a = me && (MOCK.adminUsers || []).filter(function (x) { return x.id === me.adminId; })[0]; return a ? a.ho_ten : (me ? me.name : ''); };
  App.paid = function (o) { return (o.payments || []).reduce(function (s, p) { return s + p.so_tien; }, 0); };
  App.refunded = function (o) { return (o.refunds || []).reduce(function (s, p) { return s + p.so_tien; }, 0); };
  App.isFinal = function (o) { return Workflow.state(App.docOf(o), o.state).final; };
  App.needsRefund = function (o) { return ['CANCELLED', 'RETURNED'].indexOf(o.state) >= 0 && App.paid(o) > App.refunded(o); };
  App.cancelRequested = function (o) { return !!o.yeu_cau_huy && !App.isFinal(o); };
  App.paidReported = function (o) { return !!o.bao_da_ck && o.trang_thai_thanh_toan === 'CHUA_THANH_TOAN' && !App.isFinal(o); };
  /** Đơn thuộc nhóm "Cần chú ý": có yêu cầu hủy / chờ hoàn tiền / khách báo đã chuyển khoản */
  App.needsAttention = function (o) { return App.cancelRequested(o) || App.needsRefund(o) || App.paidReported(o); };
  App.orderFlags = function (o) {
    var pate = App.docOf(o) === 'DOC-BOOK-PATE_ORDER';
    return (App.cancelRequested(o) ? UI.tag('Yêu cầu hủy', 'danger') : '') + (App.needsRefund(o) ? UI.tag(pate ? 'Chờ hoàn cọc' : 'Chờ hoàn tiền', 'warning') : '') + (App.paidReported(o) ? UI.tag('Khách báo đã chuyển khoản', 'info') : '');
  };
  /** Số hũ pate chay đã nhận cho ngày giao (FR-RPT-002) */
  App.pateJars = function (iso) {
    if (!iso) return 0;
    var day = App.localDate(new Date(iso));
    var base = (MOCK.pateCapacity || []).filter(function (c) { return App.localDate(new Date(c.date)) === day; })[0];
    var fromOrders = DemoStore.list('orders').filter(function (o) { return o.loai_don === 'PATE_CHAY' && o.state !== 'CANCELLED' && o.ngay_giao_du_kien && App.localDate(new Date(o.ngay_giao_du_kien)) === day; })
      .reduce(function (s, o) { return s + o.items.reduce(function (t, i) { return t + i.so_luong; }, 0); }, 0);
    return Math.max(base ? base.jars : 0, fromOrders);
  };
  /** Các thao tác hợp lệ trên đơn cho vai trò hiện tại: chuyển trạng thái (Workflow.actions) + ghi nhận thanh toán / hoàn tiền.
   *  → [{ kind: event|pay|refund, event, label, icon, primary, danger, disabled, tooltip, permission }] */
  App.orderActions = function (o) {
    var doc = App.docOf(o), pate = doc === 'DOC-BOOK-PATE_ORDER', list = [];
    Workflow.actions(doc, o.state).forEach(function (t) {
      var e = t.event;
      if ((e === 'Bắt đầu giao' || e === 'Giao cho shipper / đi giao') && o.cach_giao === 'TU_LAY') return;
      if (e === 'Khách nhận tại cửa hàng' && o.cach_giao !== 'TU_LAY') return;
      if (e === 'Xác nhận hủy' && !o.yeu_cau_huy) return;
      var a = { kind: 'event', event: e, label: e, permission: t.permission, danger: /hủy|Từ chối|trả hàng/i.test(e), icon: /hủy|Từ chối/.test(e) ? 'circle-x' : /trả hàng/.test(e) ? 'rotate-ccw' : /giao|shipper/i.test(e) ? 'truck' : 'circle-check' };
      if (e === 'Đã nhận cọc, bắt đầu làm' && ['DA_COC', 'DA_THANH_TOAN'].indexOf(o.trang_thai_thanh_toan) < 0) { a.disabled = true; a.tooltip = 'Chưa ghi nhận tiền cọc 200.000đ'; }
      list.push(a);
    });
    var canPay = !App.isFinal(o) && Perm.can('BOOK.ORDER.UPDATE') && (o.trang_thai_thanh_toan === 'CHUA_THANH_TOAN' || (pate && o.trang_thai_thanh_toan === 'DA_COC'));
    var pay = canPay ? { kind: 'pay', label: pate && o.trang_thai_thanh_toan === 'CHUA_THANH_TOAN' ? 'Ghi nhận cọc' : 'Ghi nhận thanh toán', icon: 'wallet', permission: 'BOOK.ORDER.UPDATE' } : null;
    var refund = App.needsRefund(o) && Perm.can('BOOK.REFUND.CREATE') ? { kind: 'refund', label: 'Ghi nhận hoàn tiền', icon: 'hand-coins', permission: 'BOOK.REFUND.CREATE' } : null;
    var prim = (pate && o.state === 'CONFIRMED' && pay && o.trang_thai_thanh_toan === 'CHUA_THANH_TOAN') ? pay : list.filter(function (a) { return !a.danger; })[0] || refund;
    if (prim) prim.primary = true;
    return (prim === pay ? [pay] : []).concat(list).concat(pay && prim !== pay ? [pay] : []).concat(refund ? [refund] : []);
  };
  var DONE_MSG = { 'Xác nhận đơn': 'Đã xác nhận đơn {c}', 'Xác nhận qua điện thoại': 'Đã xác nhận đơn {c}', 'Cửa hàng hủy': 'Đã hủy đơn {c}', 'Xác nhận hủy': 'Đã hủy đơn {c}', 'Từ chối': 'Đã từ chối đơn {c}',
    'Bắt đầu giao': 'Đơn {c} đang giao', 'Giao cho shipper / đi giao': 'Đơn {c} đang giao', 'Khách nhận tại cửa hàng': 'Đơn {c} đã giao', 'Giao thành công': 'Đơn {c} đã giao thành công', 'ĐVVC trả hàng': 'Đã ghi nhận đơn bị trả lại', 'Đã nhận cọc, bắt đầu làm': 'Đơn {c} đang làm' };
  /** Chạy một thao tác (event | pay | refund) với hộp xác nhận đúng 9.13; done(orderMới) sau khi lưu */
  App.runOrderAction = function (o, a, done) {
    if (a.disabled) { UI.toast(a.tooltip || 'Chưa thể thực hiện thao tác này', 'error'); return; }
    if (a.kind === 'pay') return App.paymentModal(o, done);
    if (a.kind === 'refund') return App.refundModal(o, done);
    var ev = a.event, doc = App.docOf(o), S = MOCK.settings;
    var cfg = { title: ev + ' ' + o.code + '?', confirmLabel: ev, message: '', danger: a.danger };
    if (ev === 'Xác nhận đơn') {
      var bad = null;
      o.items.forEach(function (it) {
        var pairs = it.comboId ? App.comboItems(DemoStore.get('combos', it.comboId) || { items: [] }).map(function (x) { return [x.v.id, x.qty * it.so_luong, x.p.ten]; }) : [[it.variantId, it.so_luong, it.ten_hang]];
        pairs.forEach(function (p) { var x = App.variant(p[0]); if (!bad && x && x.v.ton_kho != null && x.v.ton_kho < p[1]) bad = p[2]; });
      });
      if (bad) { UI.toast('Sản phẩm ' + bad + ' vừa hết hàng', 'error'); return; }
      cfg.message = 'Xác nhận đơn và trừ tồn kho các sản phẩm trong đơn.';
    }
    if (ev === 'Cửa hàng hủy' || ev === 'Xác nhận hủy') {
      cfg.reason = { label: 'Lý do hủy', required: true, options: ['Khách yêu cầu', 'Không liên lạc được', 'Hết hàng', 'Khác'], errorMsg: 'Vui lòng nhập lý do' };
      cfg.message = o.yeu_cau_huy ? 'Khách yêu cầu hủy lúc ' + UI.fmt.datetime(o.yeu_cau_huy.at) + '. Lý do: ' + esc(o.yeu_cau_huy.reason) + '.' : 'Đơn sẽ chuyển sang Đã hủy' + (doc === 'DOC-BOOK-ORDER' && o.state === 'CONFIRMED' ? ' và cộng lại tồn kho.' : '.');
      if (App.paid(o)) cfg.message += ' Đơn đã thanh toán ' + UI.fmt.money(App.paid(o)) + ', nhớ ghi nhận hoàn tiền sau khi hủy.';
    }
    if (ev === 'Từ chối') cfg.reason = { label: 'Lý do từ chối', required: true, options: ['Hết suất', 'Khách không đồng ý', 'Khác'], errorMsg: 'Vui lòng nhập lý do' };
    if (ev === 'ĐVVC trả hàng') { cfg.reason = { label: 'Lý do', required: true, placeholder: 'Ví dụ: khách không nhận hàng', errorMsg: 'Vui lòng nhập lý do' }; cfg.message = 'Tồn kho sẽ được cộng lại.' + (App.paid(o) ? ' Đơn đã thanh toán sẽ chuyển sang Chờ hoàn tiền.' : ''); }
    if (ev === 'Xác nhận qua điện thoại') {
      var jars = App.pateJars(o.ngay_giao_du_kien), mine = o.items.reduce(function (s, i) { return s + i.so_luong; }, 0);
      cfg.extraHtml = '<div class="mt-3 rounded-lg bg-neutral-50 p-3"><p class="mb-2 text-sm font-bold text-neutral-800">Suất pate ngày ' + UI.fmt.date(o.ngay_giao_du_kien) + '</p>' + UI.capacityBar(jars, S.pateCap) + '<p class="mt-1 text-xs text-neutral-600">Đơn này: ' + mine + ' hũ</p></div>';
      cfg.reason = { label: 'Ghi chú cuộc gọi', required: false, placeholder: 'Ví dụ: đã gọi, khách đồng ý', max: 500 };
      cfg.message = 'Gọi ' + esc(o.ho_ten_nhan) + ' (' + esc(o.so_dien_thoai_nhan) + ') để xác nhận đơn và hẹn cọc 200.000đ.';
    }
    if (ev === 'Bắt đầu giao' && o.cach_giao === 'DVVC') {
      cfg.extraHtml = '<div class="mt-3 grid gap-3">' + UI.field({ name: 'dvvc', label: 'Đơn vị vận chuyển', type: 'select', required: true, placeholder: 'Chọn đơn vị vận chuyển', options: S.carriers, value: S.carriers[0] }) + UI.field({ name: 'mvd', label: 'Mã vận đơn', optional: true, maxlength: 50 }) + '</div>';
      cfg.validate = function (body) { return body.querySelector('[name=dvvc]').value ? true : 'Vui lòng chọn đơn vị vận chuyển'; };
    }
    if (ev === 'Giao thành công' && o.cach_thanh_toan === 'COD' && o.trang_thai_thanh_toan === 'CHUA_THANH_TOAN') cfg.message = 'Đơn COD sẽ được ghi nhận Đã trả ' + UI.fmt.money(o.tong_cong) + '.';
    if ((ev === 'Giao thành công' || ev === 'Khách nhận tại cửa hàng') && doc === 'DOC-BOOK-ORDER') cfg.message += ' Khách được cộng ' + App.points(o.tong_cong) + ' điểm.';
    UI.confirm(cfg).then(function (r) {
      if (!r) return;
      var fresh = DemoStore.get('orders', o.id);
      if (fresh.state !== o.state) { UI.toast('Trạng thái đơn đã thay đổi, vui lòng tải lại', 'error'); if (done) done(fresh); return; }
      var next;
      try { next = Workflow.apply(doc, fresh, ev, { note: r.note }); } catch (err) { UI.toast(err.message, 'error'); return; }
      var h = next.history[next.history.length - 1]; h.by = App.adminName();
      if (ev === 'Bắt đầu giao' && r.body && r.body.querySelector('[name=dvvc]')) { next.don_vi_van_chuyen = r.body.querySelector('[name=dvvc]').value; next.ma_van_don = r.body.querySelector('[name=mvd]').value.trim(); h.note = [next.don_vi_van_chuyen, next.ma_van_don].filter(Boolean).join(' · '); }
      if (ev === 'Giao thành công' && fresh.cach_thanh_toan === 'COD' && fresh.trang_thai_thanh_toan === 'CHUA_THANH_TOAN') { next.payments = (fresh.payments || []).concat([{ id: 'pm' + Date.now(), loai: 'Thanh toán', so_tien: fresh.tong_cong - App.paid(fresh), cach: 'Tiền mặt', at: new Date().toISOString(), by: App.adminName() }]); next.trang_thai_thanh_toan = 'DA_THANH_TOAN'; }
      DemoStore.update('orders', o.id, next);
      var fx = App.orderEffects(fresh, next);
      UI.toast((DONE_MSG[ev] || 'Đã cập nhật đơn {c}').replace('{c}', o.code) + fx, 'success');
      if (done) done(DemoStore.get('orders', o.id));
    });
  };
  function logEntry(o, text, note) { return (o.history || []).concat([{ at: new Date().toISOString(), role: Perm.role(), roleName: Perm.roleName(), by: App.adminName(), event: text, from: null, to: null, note: note || '', log: true }]); }
  /** Modal "Ghi nhận thanh toán / cọc" (FR-BOOK-013) */
  App.paymentModal = function (o, done) {
    var pate = App.docOf(o) === 'DOC-BOOK-PATE_ORDER', S = MOCK.settings, paid = App.paid(o);
    var loai = pate && o.trang_thai_thanh_toan === 'CHUA_THANH_TOAN' ? 'Cọc' : 'Thanh toán';
    var amount = loai === 'Cọc' ? S.deposit : Math.max(0, o.tong_cong - paid);
    var cach = { COD: 'Tiền mặt', CHUYEN_KHOAN: 'Chuyển khoản', QR: 'QR' }[o.cach_thanh_toan] || 'Chuyển khoản';
    var body = '<form novalidate class="flex flex-col gap-4" data-pay>' + (o.bao_da_ck ? UI.alert({ tone: 'info', text: 'Khách báo đã chuyển khoản lúc ' + UI.fmt.datetime(o.bao_da_ck) + '.' }) : '') +
      '<p class="text-sm text-neutral-600">Tổng đơn ' + UI.fmt.money(o.tong_cong) + ' · Đã nhận ' + UI.fmt.money(paid) + '</p>' +
      UI.field({ name: 'loai', label: 'Loại', type: 'radio', required: true, options: ['Thanh toán', 'Cọc'], value: loai }) +
      UI.field({ name: 'so_tien', label: 'Số tiền', type: 'money', required: true, value: amount }) +
      UI.field({ name: 'cach', label: 'Nhận qua', type: 'radio', required: true, options: ['Tiền mặt', 'Chuyển khoản', 'QR'], value: cach }) +
      UI.field({ name: 'ngay', label: 'Ngày nhận', type: 'date', required: true, value: App.localDate(), attrs: { max: App.localDate() } }) +
      UI.field({ name: 'ghi_chu', label: 'Ghi chú', type: 'textarea', rows: 2, maxlength: 255, optional: true }) + '</form>';
    UI.modal({ title: 'Ghi nhận thanh toán / cọc', size: 'md', body: body, actions: [{ label: 'Hủy', variant: 'ghost' }, { label: 'Ghi nhận', icon: 'wallet', attrs: { 'data-permission': 'BOOK.ORDER.UPDATE' }, onClick: function (api) {
      var f = api.body.querySelector('[data-pay]'), R = UI.rules;
      var ok = UI.validate(f, { so_tien: [R.custom(function (v) { return +v > 0; }, 'Số tiền phải lớn hơn 0')], cach: [R.required('Vui lòng chọn cách nhận')], ngay: [R.required('Ngày nhận không hợp lệ'), R.custom(function (v) { return v <= App.localDate(); }, 'Ngày nhận không hợp lệ')] });
      if (!ok) return false;
      var d = UI.formData(f), fresh = DemoStore.get('orders', o.id), total = App.paid(fresh) + d.so_tien;
      var st = total >= fresh.tong_cong ? 'DA_THANH_TOAN' : (pate && total >= S.deposit) ? 'DA_COC' : fresh.trang_thai_thanh_toan;
      var at = new Date(d.ngay + 'T' + new Date().toTimeString().slice(0, 8)).toISOString();
      DemoStore.update('orders', o.id, { payments: (fresh.payments || []).concat([{ id: 'pm' + Date.now(), loai: d.loai, so_tien: d.so_tien, cach: d.cach, at: at, by: App.adminName(), ghi_chu: d.ghi_chu }]), trang_thai_thanh_toan: st, bao_da_ck: null,
        history: logEntry(fresh, 'Ghi nhận ' + (d.loai === 'Cọc' ? 'cọc ' : 'thanh toán ') + UI.fmt.money(d.so_tien) + ' (' + d.cach + ')', d.ghi_chu) });
      UI.toast('Đã ghi nhận ' + UI.fmt.money(d.so_tien), 'success');
      if (done) setTimeout(function () { done(DemoStore.get('orders', o.id)); }, 0);
    } }] });
  };
  /** Modal "Ghi nhận hoàn tiền" (FR-BOOK-015). opts: { amount, reason, onSaved } */
  App.refundModal = function (o, done, opts) {
    opts = opts || {};
    var pate = App.docOf(o) === 'DOC-BOOK-PATE_ORDER', left = App.paid(o) - App.refunded(o);
    if (left <= 0) { UI.toast('Đơn chưa thanh toán, không cần hoàn tiền', 'error'); return; }
    var reason = opts.reason || (o.state === 'RETURNED' ? 'Đơn bị trả lại' : pate ? 'Hoàn cọc' : 'Hủy đơn');
    var body = '<form novalidate class="flex flex-col gap-4" data-refund><p class="text-sm text-neutral-600">Đã nhận ' + UI.fmt.money(App.paid(o)) + ' · Đã hoàn ' + UI.fmt.money(App.refunded(o)) + '</p>' +
      UI.field({ name: 'ly_do', label: 'Lý do', type: 'select', required: true, placeholder: 'Chọn lý do', options: ['Hủy đơn', 'Hoàn cọc', 'Đơn bị trả lại', 'Trả hàng'], value: reason }) +
      UI.field({ name: 'so_tien', label: 'Số tiền hoàn', type: 'money', required: true, value: Math.min(left, opts.amount || left) }) +
      UI.field({ name: 'ngay', label: 'Ngày hoàn', type: 'date', required: true, value: App.localDate(), attrs: { max: App.localDate() } }) +
      UI.fileUpload({ name: 'bien_lai', label: 'Ảnh biên lai', optional: true, kind: 'image', maxMB: 5, hint: 'JPG, PNG tối đa 5MB', sizeMsg: 'Ảnh tối đa 5MB' }) +
      UI.field({ name: 'ghi_chu', label: 'Ghi chú', type: 'textarea', rows: 2, maxlength: 255, optional: true }) + '</form>';
    UI.modal({ title: 'Ghi nhận hoàn tiền', size: 'md', body: body, actions: [{ label: 'Hủy', variant: 'ghost' }, { label: 'Ghi nhận hoàn tiền', icon: 'hand-coins', attrs: { 'data-permission': 'BOOK.REFUND.CREATE' }, onClick: function (api) {
      var f = api.body.querySelector('[data-refund]'), R = UI.rules;
      var ok = UI.validate(f, { ly_do: [R.required('Vui lòng chọn lý do')], so_tien: [R.custom(function (v) { return +v > 0; }, 'Số tiền phải lớn hơn 0'), R.custom(function (v) { return +v <= left; }, 'Số tiền hoàn không được lớn hơn ' + UI.fmt.money(left))], ngay: [R.required('Ngày hoàn không hợp lệ'), R.custom(function (v) { return v <= App.localDate(); }, 'Ngày hoàn không hợp lệ')] });
      if (!ok) return false;
      var d = UI.formData(f), fresh = DemoStore.get('orders', o.id), refunds = (fresh.refunds || []).concat([{ id: 'rf' + Date.now(), so_tien: d.so_tien, ly_do: d.ly_do, at: new Date(d.ngay + 'T' + new Date().toTimeString().slice(0, 8)).toISOString(), by: App.adminName(), ghi_chu: d.ghi_chu }]);
      var sum = refunds.reduce(function (s, r) { return s + r.so_tien; }, 0);
      DemoStore.update('orders', o.id, { refunds: refunds, trang_thai_thanh_toan: sum >= App.paid(fresh) ? 'DA_HOAN_TIEN' : 'HOAN_MOT_PHAN', history: logEntry(fresh, 'Ghi nhận hoàn tiền ' + UI.fmt.money(d.so_tien), d.ly_do + (d.ghi_chu ? ' · ' + d.ghi_chu : '')) });
      UI.toast('Đã ghi nhận hoàn tiền ' + UI.fmt.money(d.so_tien), 'success');
      if (opts.onSaved) opts.onSaved(d);
      if (done) setTimeout(function () { done(DemoStore.get('orders', o.id)); }, 0);
    } }] });
  };

  /* ---------- Ủy quyền sự kiện toàn cục ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-add-cart]');
    if (a && !a.disabled) { e.preventDefault(); App.quickAdd(a.getAttribute('data-add-cart'), a); return; }
    var c = e.target.closest('[data-add-combo]');
    if (c && !c.disabled) { e.preventDefault(); App.addCombo(c.getAttribute('data-add-combo'), c); }
  });
  DemoStore.on(function (name) { if (name === 'cart' || name === '*') { try { Layout.refreshCart(); } catch (x) {} } });
})();
