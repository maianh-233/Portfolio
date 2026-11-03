/* Khung ứng dụng Tiểu Bạch Pet Shop — window.Layout
 * Hai khu (9.6):
 *  - 'site'  : DemoBanner + SiteHeader + MobileNav + (AccountNav) + SiteFooter + FloatingChat + CartDrawer
 *  - 'admin' : DemoBanner + AppShell (Sidebar thu gọn được / drawer mobile + Topbar + Breadcrumb + UserMenu)
 *  - 'bare'  : DemoBanner + nội dung căn giữa (đăng nhập trang quản lý)
 * Layout.mount(opts, render(main)) — opts: { area, title, active, breadcrumb: [[label, href?]], account, wide, pad }
 * Phân quyền: Perm.guard(); không được vào → khung + UI.noPermission(). Menu chỉ hiện mục Perm.canOpen(screenId).
 */
(function () {
  'use strict';
  var ic = UI.icon, esc = UI.esc;
  var U = function (p) { return Perm.url(p); };

  /* Menu website (9.6) */
  var SITE_NAV = [
    { key: 'home', label: 'Trang chủ', icon: 'house', path: 'index.html', scr: 'SCR-HOME-001' },
    { key: 'products', label: 'Sản phẩm', icon: 'shopping-bag', path: 'pages/san-pham.html', scr: 'SCR-PROD-001' },
    { key: 'about', label: 'Giới thiệu', icon: 'heart', path: 'pages/gioi-thieu.html', scr: 'SCR-HOME-002' },
    { key: 'contact', label: 'Liên hệ', icon: 'phone', path: 'pages/lien-he.html', scr: 'SCR-HOME-003' }
  ];
  /* Sidebar trang quản lý (9.6) */
  var ADMIN_NAV = [
    { group: 'Bán hàng', items: [
      { key: 'orders', label: 'Đơn hàng', icon: 'receipt', scr: 'SCR-BOOK-008', badge: 'orders' },
      { key: 'returns', label: 'Đổi trả', icon: 'rotate-ccw', scr: 'SCR-BOOK-010', badge: 'returns' },
      { key: 'stats', label: 'Thống kê', icon: 'chart-column', scr: 'SCR-RPT-001' }] },
    { group: 'Hàng hóa', items: [
      { key: 'products', label: 'Sản phẩm', icon: 'package', scr: 'SCR-PROD-004' },
      { key: 'stock', label: 'Tồn kho', icon: 'boxes', scr: 'SCR-PROD-007', badge: 'stock' },
      { key: 'categories', label: 'Danh mục', icon: 'tags', scr: 'SCR-PROD-006' }] },
    { group: 'Khuyến mãi', items: [
      { key: 'vouchers', label: 'Mã giảm giá & voucher', icon: 'ticket-percent', scr: 'SCR-PROMO-003' },
      { key: 'combos', label: 'Combo', icon: 'gift', scr: 'SCR-PROMO-004' }] },
    { group: 'Nội dung', items: [
      { key: 'reviews', label: 'Đánh giá', icon: 'star', scr: 'SCR-REVIEW-001' },
      { key: 'posts', label: 'Bài viết', icon: 'newspaper', scr: 'SCR-NEWS-003' }] },
    { group: 'Hệ thống', items: [
      { key: 'admins', label: 'Tài khoản quản trị', icon: 'users', scr: 'SCR-SYS-006' }] }
  ];
  /* Khu tài khoản khách (AccountNav) */
  var ACCOUNT_NAV = [
    { key: 'profile', label: 'Tổng quan & hồ sơ', icon: 'user-round', scr: 'SCR-SYS-004' },
    { key: 'orders', label: 'Đơn hàng của tôi', icon: 'package', scr: 'SCR-BOOK-005', badge: 'myOrders' },
    { key: 'points', label: 'Điểm & voucher', icon: 'gift', scr: 'SCR-PROMO-002', badge: 'myVouchers' }
  ];
  function pathOf(scr) { var s = Perm.screen(scr); return s ? s.path : 'index.html'; }
  function demoUser(roleId) { return (window.MOCK && MOCK.users || []).filter(function (u) { return u.roleId === roleId; })[0] || { name: Perm.roleName(roleId) }; }

  /* ---------- Huy hiệu số (đếm từ DemoStore) ---------- */
  function counts() {
    var c = { orders: 0, returns: 0, stock: 0, myOrders: 0, myVouchers: 0, cart: 0 };
    try {
      var orders = DemoStore.list('orders');
      c.orders = orders.filter(function (o) { return o.state === 'NEW' || (o.yeu_cau_huy && ['NEW', 'CONFIRMED', 'MAKING'].indexOf(o.state) >= 0); }).length;
      c.returns = DemoStore.list('returns').filter(function (r) { return r.state === 'PENDING'; }).length;
      DemoStore.list('products').forEach(function (p) { if (p.la_pate || p.trang_thai !== 'DANG_BAN') return; p.variants.forEach(function (v) { if (v.ton_kho != null && v.ton_kho <= v.nguong) c.stock++; }); });
      var me = window.App && App.me();
      if (me && me.customerId) {
        c.myOrders = orders.filter(function (o) { return o.customerId === me.customerId && ['DELIVERED', 'CANCELLED', 'RETURNED'].indexOf(o.state) < 0; }).length;
        c.myVouchers = DemoStore.list('vouchers').filter(function (v) { return v.loai === 'VOUCHER_KHACH' && v.customerId === me.customerId && !v.used && new Date(v.ket_thuc) > new Date(); }).length;
      }
      if (window.App) c.cart = App.cart.count();
    } catch (e) {}
    return c;
  }

  /* ---------- DemoBanner + RoleSwitcher ---------- */
  function demoBanner() {
    var r = Perm.role(), u = demoUser(r);
    return '<div class="relative z-40 bg-warning-100 text-warning-700" data-demo-banner><div class="mx-auto flex min-h-8 max-w-content flex-wrap items-center justify-between gap-x-3 gap-y-1 px-4 py-1 text-xs font-bold md:px-6 lg:px-8">' +
      '<span class="inline-flex items-center gap-1.5">' + ic('info', 'size-3.5') + 'Bản demo — dữ liệu giả</span>' +
      '<span class="flex items-center gap-1"><span class="hidden sm:inline">Vai trò demo:</span>' +
      '<button type="button" data-role-switch aria-haspopup="menu" aria-expanded="false" class="inline-flex h-7 items-center gap-1 rounded-full bg-white px-3 text-xs font-bold text-warning-700 hover:bg-warning-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600">' + esc(Perm.roleName(r) || 'Chưa chọn') + '<span class="hidden md:inline font-semibold"> · ' + esc(u.name) + '</span>' + ic('chevron-down', 'size-3.5') + '</button>' +
      '<button type="button" data-demo-reset class="inline-flex h-7 items-center gap-1 rounded-full px-2 hover:bg-warning-50" aria-label="Đặt lại dữ liệu demo">' + ic('rotate-ccw', 'size-3.5') + '<span class="hidden sm:inline">Đặt lại dữ liệu</span></button></span></div></div>';
  }
  function switchRole(id) {
    Perm.setRole(id);
    var scr = document.body.getAttribute('data-screen');
    if (scr && !Perm.canOpen(scr, id)) location.href = Perm.home(id); else location.reload();
  }
  function resetDemo() {
    UI.confirm({ title: 'Đặt lại dữ liệu demo?', message: 'Mọi thay đổi khi trình diễn (giỏ hàng, đơn mới, trạng thái…) sẽ trở về dữ liệu mẫu ban đầu.', confirmLabel: 'Đặt lại', danger: true })
      .then(function (ok) { if (ok) { DemoStore.reset(); location.reload(); } });
  }
  function bindDemo(root) {
    root.addEventListener('click', function (e) {
      var rs = e.target.closest('[data-role-switch]');
      if (rs) {
        var cur = Perm.role();
        UI.dropdown(rs, APP_META.roles.map(function (r) { var u = demoUser(r.id); return { label: (r.id === cur ? '✓ ' : '') + r.name + ' · ' + u.name, icon: r.id === 'ROLE-03' ? 'layout-dashboard' : r.id === 'ROLE-02' ? 'user-round' : 'user', onClick: function () { if (r.id !== cur) switchRole(r.id); } }; }), { align: 'right' });
        return;
      }
      if (e.target.closest('[data-demo-reset]')) resetDemo();
    });
  }

  /* ---------- Website: SiteHeader, MobileNav, SiteFooter, FloatingChat ---------- */
  function siteHeader(active) {
    var r = Perm.role(), c = counts();
    var nav = SITE_NAV.map(function (n) {
      var on = n.key === active;
      return '<a href="' + U(n.path) + '" ' + (on ? 'aria-current="page"' : '') + ' class="group relative inline-flex h-11 items-center px-3 text-base font-bold ' + (on ? 'text-primary-700' : 'text-neutral-800 hover:text-primary-700') + '">' + esc(n.label) +
        '<span class="absolute inset-x-3 bottom-1 h-1 rounded-full bg-primary-500 transition ' + (on ? 'opacity-100' : 'opacity-0 group-hover:opacity-100') + '"></span></a>';
    }).join('');
    var right = UI.iconButton({ icon: 'search', label: 'Tìm kiếm', attrs: { 'data-search-open': '' } });
    if (Perm.can('BOOK.CART.VIEW')) right += '<button type="button" data-cart-open class="relative inline-flex size-11 items-center justify-center rounded-full text-neutral-800 hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600" aria-label="Giỏ hàng (' + c.cart + ' sản phẩm)"><span data-cart-icon class="inline-flex">' + ic('shopping-cart', 'size-6') + '</span>' +
      '<span data-cart-count class="absolute -right-0.5 -top-0.5 min-w-5 h-5 rounded-full bg-primary-500 px-1 text-xs font-bold text-neutral-800 items-center justify-center ' + (c.cart ? 'inline-flex' : 'hidden') + '">' + c.cart + '</span></button>';
    if (r === 'ROLE-01') right += '<a href="' + App.loginHref() + '" class="hidden sm:inline-flex h-11 items-center gap-2 rounded-full px-3 text-sm font-bold text-neutral-800 hover:bg-primary-100">' + ic('user') + 'Đăng nhập</a>' +
      UI.iconButton({ icon: 'user', label: 'Đăng nhập', href: App.loginHref(), cls: 'sm:hidden' });
    if (r === 'ROLE-02') { var me = App.me(); right += '<button type="button" data-account-menu aria-haspopup="menu" class="inline-flex h-11 items-center gap-2 rounded-full pl-1 pr-2 hover:bg-primary-100" aria-label="Tài khoản">' + UI.avatar(me ? me.name : 'Khách') + '<span class="hidden xl:inline text-sm font-bold text-neutral-800 max-w-32 truncate">' + esc(me ? me.name.split(' ').pop() : '') + '</span>' + ic('chevron-down', 'size-4 hidden xl:inline') + '</button>'; }
    if (r === 'ROLE-03') right += '<a href="' + U(pathOf('SCR-BOOK-008')) + '" class="relative inline-flex h-11 items-center gap-2 rounded-full bg-secondary-100 px-3 text-sm font-bold text-secondary-800 hover:bg-secondary-200">' + ic('layout-dashboard') + '<span class="hidden md:inline">Trang quản lý</span>' + (c.orders ? UI.countBadge(c.orders) : '') + '</a>';
    return '<header data-site-header data-active="' + esc(active || '') + '" class="sticky top-0 z-30 border-b border-transparent bg-white/95 backdrop-blur transition-shadow">' +
      '<div class="mx-auto flex h-16 lg:h-site-header max-w-content items-center gap-2 px-2 md:px-6 lg:px-8">' +
      '<button type="button" data-mobile-nav class="lg:hidden inline-flex size-11 items-center justify-center rounded-full hover:bg-primary-100" aria-label="Mở menu">' + ic('menu', 'size-6') + '</button>' +
      '<a href="' + U('index.html') + '" class="mx-auto lg:mx-0 shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600" aria-label="Tiểu Bạch Pet Shop — Trang chủ">' + UI.logo({ size: 40 }) + '</a>' +
      '<nav aria-label="Menu chính" class="hidden lg:flex items-center gap-1 ml-8">' + nav + '</nav>' +
      '<div class="lg:ml-auto flex items-center gap-1">' + right + '</div></div>' +
      '<div data-search-bar class="hidden border-t border-neutral-100 bg-white"><form action="' + U('pages/san-pham.html') + '" method="get" class="mx-auto max-w-content px-4 py-3 md:px-6 lg:px-8" role="search" data-search-form>' +
      '<div class="relative max-w-2xl mx-auto">' + UI.searchInput({ name: 'q', placeholder: 'Tìm hạt, pate, bánh thưởng…', label: 'Tìm sản phẩm', attrs: { 'data-search-input': '' } }) +
      '<div data-suggest class="absolute inset-x-0 top-full mt-2 hidden rounded-xl border border-neutral-200 bg-white p-2 shadow-md z-40"></div></div></form></div></header>';
  }
  function mobileNav(active) {
    var r = Perm.role();
    var links = SITE_NAV.map(function (n) { var on = n.key === active; return '<a href="' + U(n.path) + '" class="flex min-h-12 items-center gap-3 rounded-lg px-4 py-3.5 text-base font-bold ' + (on ? 'bg-primary-100 text-primary-700' : 'text-neutral-800 hover:bg-white') + '">' + ic(n.icon) + esc(n.label) + '</a>'; }).join('');
    var extra = [['Pate chay tự làm', 'pages/san-pham.html?nhom=pate-chay', 'calendar-heart'], ['Combo tiết kiệm', 'pages/san-pham.html?nhom=combo', 'gift'], ['Bài viết chia sẻ', 'pages/bai-viet.html', 'newspaper']]
      .map(function (x) { return '<a href="' + U(x[1]) + '" class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 hover:bg-white">' + ic(x[2], 'size-4') + x[0] + '</a>'; }).join('');
    var acc = r === 'ROLE-02' ? ACCOUNT_NAV.map(function (a) { return '<a href="' + U(pathOf(a.scr)) + '" class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 hover:bg-white">' + ic(a.icon, 'size-4') + a.label + '</a>'; }).join('') + '<button type="button" data-logout class="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-bold text-danger-700 hover:bg-white">' + ic('log-out', 'size-4') + 'Đăng xuất</button>'
      : r === 'ROLE-01' ? '<div class="px-2">' + UI.button({ label: 'Đăng nhập', icon: 'log-in', href: App.loginHref(), full: true }) + '</div>'
        : '<a href="' + U(pathOf('SCR-BOOK-008')) + '" class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-bold text-secondary-700 hover:bg-white">' + ic('layout-dashboard', 'size-4') + 'Trang quản lý</a>';
    return '<div class="flex flex-col gap-1"><nav aria-label="Menu" class="flex flex-col gap-1">' + links + '</nav><div class="my-3 h-px bg-primary-200"></div>' + extra + '<div class="my-3 h-px bg-primary-200"></div>' + acc + '</div>';
  }
  function siteFooter() {
    var s = MOCK.settings;
    var cols = [
      ['Mua sắm', MOCK.petTypes.map(function (t) { return ['Sản phẩm cho ' + t.ten, 'pages/san-pham.html?thu-cung=' + t.id]; }).concat([['Pate chay tự làm', 'pages/san-pham.html?nhom=pate-chay'], ['Combo tiết kiệm', 'pages/san-pham.html?nhom=combo']])],
      ['Tiểu Bạch', [['Giới thiệu', 'pages/gioi-thieu.html'], ['Bài viết chia sẻ', 'pages/bai-viet.html'], ['Liên hệ', 'pages/lien-he.html']]],
      ['Hỗ trợ', [['Đơn hàng của tôi', Perm.role() === 'ROLE-02' ? 'pages/don-hang-cua-toi.html' : 'pages/dang-nhap.html?quay_lai=don-hang-cua-toi'], ['Chính sách đổi trả', 'pages/lien-he.html#doi-tra']]]
    ];
    var colHtml = function (c) { return '<ul class="flex flex-col gap-2.5">' + c[1].map(function (l) { return '<li><a href="' + U(l[1]) + '" class="text-sm text-neutral-700 hover:text-primary-700">' + esc(l[0]) + '</a></li>'; }).join('') + '</ul>'; };
    var contact = '<div class="flex flex-col gap-3 text-sm text-neutral-700"><p class="flex gap-2">' + ic('map-pin', 'size-4 mt-0.5 text-secondary-600') + esc(s.address) + '</p><p class="flex gap-2">' + ic('clock', 'size-4 mt-0.5 text-secondary-600') + esc(s.hours) + '</p>' +
      '<a href="tel:' + s.phoneRaw + '" class="flex gap-2 font-bold text-primary-700 hover:underline">' + ic('phone', 'size-4 mt-0.5') + esc(s.phone) + '</a><div class="flex gap-2 pt-1">' +
      UI.iconButton({ icon: 'facebook', label: 'Facebook Tiểu Bạch', href: s.facebook, variant: 'outline', attrs: { target: '_blank', rel: 'noopener' } }) + UI.iconButton({ icon: 'zalo', label: 'Zalo Tiểu Bạch', href: s.zalo, variant: 'outline', attrs: { target: '_blank', rel: 'noopener' } }) + '</div></div>';
    var desk = '<div class="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">' + cols.map(function (c) { return '<div><h2 class="mb-3 text-base font-extrabold text-neutral-800">' + c[0] + '</h2>' + colHtml(c) + '</div>'; }).join('') + '<div><h2 class="mb-3 text-base font-extrabold text-neutral-800">Liên hệ</h2>' + contact + '</div></div>';
    var mob = '<div class="md:hidden">' + UI.accordion(cols.map(function (c) { return { title: c[0], content: colHtml(c) }; }).concat([{ title: 'Liên hệ', content: contact, open: true }])) + '</div>';
    return '<footer class="relative mt-16 bg-secondary-50"><svg class="absolute -top-4 left-0 h-4 w-full text-secondary-50" viewBox="0 0 1200 16" preserveAspectRatio="none" aria-hidden="true"><path d="M0 16V8C100 0 200 0 300 8s200 8 300 0 200-8 300 0 200 8 300 0v8z" fill="currentColor"/><path d="M0 8C100 0 200 0 300 8s200 8 300 0 200-8 300 0 200 8 300 0" fill="none" class="stroke-secondary-200" stroke-width="2"/></svg>' +
      '<div class="mx-auto max-w-content px-4 py-10 md:px-6 lg:px-8"><div class="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">' + UI.logo() + '<p class="max-w-md text-sm text-neutral-700">Đồ ăn ngon cho Boss, tận tâm như cho chú mèo nhà mình. Pate chay tự làm theo đơn mỗi ngày.</p></div>' + desk + mob +
      '<p class="mt-10 border-t border-secondary-200 pt-5 text-xs text-neutral-600">© 2026 ' + esc(s.name) + '. Bản demo — dữ liệu giả.</p></div></footer>';
  }
  function floatingChat() {
    var s = MOCK.settings;
    var btn = function (href, label, icon, bg) { return '<a href="' + esc(href) + '" target="_blank" rel="noopener" class="inline-flex size-14 items-center justify-center rounded-full ' + bg + ' text-white shadow-md transition hover:scale-105 hover:shadow-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600" aria-label="' + label + '" title="' + label + '">' + ic(icon, 'size-6') + '</a>'; };
    return '<div data-floating-chat class="fixed right-4 bottom-4 z-30 flex flex-col items-end gap-3 transition-all">' +
      '<div data-chat-list class="hidden md:flex flex-col gap-3">' + btn(s.zalo, 'Chat Zalo với cửa hàng', 'zalo', 'bg-info-600') + btn(s.messenger, 'Chat Messenger với cửa hàng', 'messenger', 'bg-secondary-600') + '</div>' +
      '<button type="button" data-chat-toggle aria-expanded="false" class="md:hidden inline-flex size-14 items-center justify-center rounded-full bg-primary-500 text-neutral-800 shadow-md hover:shadow-brand" aria-label="Chat với cửa hàng">' + ic('message-square', 'size-6') + '</button></div>';
  }
  function accountNav(active) {
    var c = counts();
    var items = ACCOUNT_NAV.map(function (a) {
      var on = a.key === active, n = a.badge ? c[a.badge] : 0;
      return '<a href="' + U(pathOf(a.scr)) + '" ' + (on ? 'aria-current="page"' : '') + ' class="inline-flex lg:flex shrink-0 items-center gap-3 rounded-lg px-4 h-11 lg:h-12 text-sm lg:text-base font-bold whitespace-nowrap ' + (on ? 'bg-primary-100 text-primary-700' : 'text-neutral-700 hover:bg-white') + '">' + ic(a.icon, 'size-5') + '<span class="lg:flex-1">' + a.label + '</span>' + (n ? UI.countBadge(n) : '') + '</a>';
    }).join('');
    return '<nav aria-label="Tài khoản" class="lg:sticky lg:top-24"><div class="hidden lg:flex items-center gap-3 mb-4 px-2">' + UI.avatar(App.me() ? App.me().name : '', 40) + '<div class="min-w-0"><p class="text-xs text-neutral-600">Xin chào</p><p class="font-extrabold text-neutral-800 truncate">' + esc(App.me() ? App.me().name : '') + '</p></div></div>' +
      '<div class="flex lg:flex-col gap-1 overflow-x-auto no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">' + items +
      '<button type="button" data-logout class="inline-flex lg:flex shrink-0 items-center gap-3 rounded-lg px-4 h-11 lg:h-12 text-sm lg:text-base font-bold text-neutral-700 hover:bg-white">' + ic('log-out', 'size-5') + 'Đăng xuất</button></div></nav>';
  }
  function breadcrumb(items, area) {
    if (!items || !items.length) return '';
    var list = area === 'site' ? [['Trang chủ', 'index.html']].concat(items) : items;
    return '<nav aria-label="Breadcrumb" class="min-w-0"><ol class="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-neutral-600">' + list.map(function (b, i) {
      var last = i === list.length - 1;
      return (i ? '<li aria-hidden="true" class="text-neutral-400">›</li>' : '') + '<li class="min-w-0 ' + (last ? 'font-bold text-neutral-800 truncate max-w-full' : '') + '">' + (last || !b[1] ? '<span ' + (last ? 'aria-current="page"' : '') + '>' + esc(b[0]) + '</span>' : '<a href="' + U(b[1]) + '" class="hover:text-primary-700 hover:underline">' + esc(b[0]) + '</a>') + '</li>';
    }).join('') + '</ol></nav>';
  }
  function logout() {
    UI.confirm({ title: 'Đăng xuất?', message: 'Bạn sẽ quay về trang chủ với vai trò Khách vãng lai.', confirmLabel: 'Đăng xuất' }).then(function (ok) {
      if (!ok) return; Perm.setRole(Perm.role() === 'ROLE-03' ? null : 'ROLE-01');
      location.href = Perm.role() === null ? U('pages/admin/dang-nhap.html') : U('index.html');
    });
  }

  function mountSite(opts, render, allowed) {
    var app = document.getElementById('app');
    var main = '<main id="main" class="min-h-96" tabindex="-1"></main>';
    app.innerHTML = '<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 rounded-full bg-primary-500 px-4 py-2 font-bold">Bỏ qua tới nội dung</a>' +
      demoBanner() + siteHeader(opts.active) + main + siteFooter() + floatingChat();
    var m = app.querySelector('#main');
    var inner = m;
    if (allowed && (opts.breadcrumb || opts.account)) {
      m.innerHTML = '<div class="mx-auto max-w-content px-4 pt-4 md:px-6 lg:px-8">' + breadcrumb(opts.breadcrumb, 'site') + '</div>';
      if (opts.account) {
        m.insertAdjacentHTML('beforeend', '<div class="mx-auto max-w-content px-4 pb-8 pt-5 md:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8"><aside class="lg:col-span-3 mb-5 lg:mb-0">' + accountNav(opts.account) + '</aside><div data-inner class="lg:col-span-9 min-w-0"></div></div>');
        inner = m.querySelector('[data-inner]');
      } else { m.insertAdjacentHTML('beforeend', '<div data-inner></div>'); inner = m.querySelector('[data-inner]'); }
    }
    bindDemo(app); bindSite(app);
    if (!allowed) { m.innerHTML = '<div class="px-4">' + noPerm() + '</div>'; return; }
    render(inner, m);
    UI.reveal(document);
  }
  function noPerm() {
    var scr = Perm.screen(document.body.getAttribute('data-screen'));
    var names = scr ? scr.roles.map(function (r) { return Perm.roleName(r); }).join(', ') : '';
    var admin = scr && /pages\/admin\//.test(scr.path);
    return UI.noPermission({ allowed: names, current: Perm.roleName(), homeHref: Perm.home(), loginHref: admin ? U('pages/admin/dang-nhap.html') : App.loginHref(scr ? scr.path.replace(/^pages\//, '').replace(/\.html$/, '') : '') });
  }
  function bindSite(app) {
    var header = app.querySelector('[data-site-header]');
    var sentinel = document.createElement('div'); sentinel.style.height = '1px'; header.parentNode.insertBefore(sentinel, header);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { var stuck = !es[0].isIntersecting; header.classList.toggle('shadow-sm', stuck); header.classList.toggle('border-neutral-200', stuck); }).observe(sentinel);
    var sbar = app.querySelector('[data-search-bar]'), sin = app.querySelector('[data-search-input]'), sug = app.querySelector('[data-suggest]'), tm;
    app.addEventListener('click', function (e) {
      var t = e.target;
      if (t.closest('[data-search-open]')) { sbar.classList.toggle('hidden'); if (!sbar.classList.contains('hidden')) sin.focus(); return; }
      if (t.closest('[data-cart-open]')) { App.openCartDrawer(); return; }
      if (t.closest('[data-mobile-nav]')) { UI.drawer({ title: UI.logo({ size: 32 }), side: 'left', body: mobileNav(header.dataset.active) }); return; }
      if (t.closest('[data-logout]')) { logout(); return; }
      var am = t.closest('[data-account-menu]');
      if (am) { UI.dropdown(am, ACCOUNT_NAV.map(function (a) { return { label: a.label, icon: a.icon, href: U(pathOf(a.scr)) }; }).concat([{ divider: true }, { label: 'Đăng xuất', icon: 'log-out', danger: true, onClick: logout }])); return; }
      var ct = t.closest('[data-chat-toggle]');
      if (ct) { var list = app.querySelector('[data-chat-list]'); var open = list.classList.toggle('hidden') === false; list.classList.toggle('flex', open); ct.setAttribute('aria-expanded', open); ct.innerHTML = ic(open ? 'x' : 'message-square', 'size-6'); return; }
    });
    // Gợi ý tìm kiếm sau 300ms: tối đa 5 sản phẩm
    sin.addEventListener('input', function () {
      clearTimeout(tm); var q = sin.value.trim();
      if (q.length < 2) { sug.classList.add('hidden'); return; }
      tm = setTimeout(function () {
        var list = App.products().filter(function (p) { return UI.norm(p.ten).indexOf(UI.norm(q)) >= 0; }).slice(0, 5);
        sug.innerHTML = list.length ? list.map(function (p) { var vm = App.productVM(p); return '<a href="' + vm.href + '" class="flex items-center gap-3 rounded-lg p-2 hover:bg-primary-50"><span class="size-11 shrink-0 overflow-hidden rounded-md bg-neutral-100">' + UI.img({ src: vm.img, alt: '' }) + '</span><span class="min-w-0 flex-1 text-sm font-bold text-neutral-800 truncate">' + esc(p.ten) + '</span>' + UI.priceTag({ price: vm.price, from: vm.from }) + '</a>'; }).join('') + '<button class="mt-1 w-full rounded-lg p-2 text-left text-sm font-bold text-primary-700 hover:bg-primary-50">Xem tất cả kết quả cho “' + esc(q) + '”</button>'
          : '<p class="p-3 text-sm text-neutral-600">Không tìm thấy sản phẩm phù hợp</p>';
        sug.classList.remove('hidden');
      }, 300);
    });
    sin.addEventListener('keydown', function (e) { if (e.key === 'Escape') { sbar.classList.add('hidden'); } });
    // FloatingChat đẩy lên trên StickyActionBar
    document.addEventListener('stickybar', function () { var fc = app.querySelector('[data-floating-chat]'); if (fc) { fc.classList.remove('bottom-4'); fc.classList.add('bottom-28', 'md:bottom-4'); } });
    if (window.visualViewport) visualViewport.addEventListener('resize', function () { var fc = app.querySelector('[data-floating-chat]'); if (fc) fc.classList.toggle('hidden', window.innerHeight - visualViewport.height > 150); });
  }

  /* ---------- Trang quản lý: AppShell ---------- */
  var COL_KEY = 'demo.sidebar.collapsed';
  function isCollapsed() { try { return localStorage.getItem(COL_KEY) === '1'; } catch (e) { return false; } }
  function sidebarNav(active, mode) {
    var c = counts(), col = mode === 'rail';
    return ADMIN_NAV.map(function (g) {
      var items = g.items.filter(function (it) { return Perm.canOpen(it.scr); });
      if (!items.length) return '';
      return '<div class="mb-3"><p class="px-3 pb-1 text-xs font-bold text-neutral-500 ' + (col ? 'sr-only' : '') + '">' + g.group + '</p><ul class="flex flex-col gap-0.5">' + items.map(function (it) {
        var on = it.key === active, n = it.badge ? c[it.badge] : 0;
        return '<li><a href="' + U(pathOf(it.scr)) + '" ' + (on ? 'aria-current="page"' : '') + ' data-scr="' + it.scr + '" ' + (col ? 'data-tooltip="' + esc(it.label) + '" aria-label="' + esc(it.label) + '"' : '') +
          ' class="relative flex h-11 items-center gap-3 rounded-lg ' + (col ? 'justify-center px-0' : 'px-3') + ' text-sm font-bold transition ' + (on ? 'bg-secondary-100 text-secondary-700' : 'text-neutral-700 hover:bg-secondary-50') + '">' +
          (on ? '<span class="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-secondary-600"></span>' : '') + ic(it.icon, 'size-5') +
          (col ? (n ? '<span class="absolute right-1.5 top-1.5 size-2 rounded-full bg-primary-500" aria-hidden="true"></span>' : '') : '<span class="flex-1 truncate">' + esc(it.label) + '</span>' + (n ? UI.countBadge(n) : '')) + '</a></li>';
      }).join('') + '</ul></div>';
    }).join('') + '<div class="mt-2 border-t border-neutral-200 pt-3"><a href="' + U('index.html') + '" target="_blank" class="flex h-11 items-center gap-3 rounded-lg ' + (col ? 'justify-center' : 'px-3') + ' text-sm font-bold text-neutral-700 hover:bg-secondary-50" ' + (col ? 'data-tooltip="Xem website" aria-label="Xem website"' : '') + '>' + ic('external-link', 'size-5') + (col ? '' : '<span>Xem website</span>') + '</a></div>';
  }
  function mountAdmin(opts, render, allowed) {
    UI.area = 'admin';
    var app = document.getElementById('app');
    var col = isCollapsed();
    var me = demoUser(Perm.role());
    var admin = (MOCK.adminUsers || []).filter(function (a) { return a.id === me.adminId; })[0];
    var who = admin ? admin.ho_ten : me.name;
    app.innerHTML = demoBanner() +
      '<div class="flex min-h-dvh">' +
      '<aside data-sidebar aria-label="Menu trang quản lý" class="hidden md:flex sticky top-0 h-dvh shrink-0 flex-col border-r border-neutral-200 bg-white transition-all ' + (col ? 'w-sidebar-collapsed' : 'w-sidebar-collapsed lg:w-sidebar') + '">' +
      '<div class="flex h-topbar items-center gap-2 border-b border-neutral-200 px-3"><a href="' + U(pathOf('SCR-BOOK-008')) + '" class="flex items-center" aria-label="Trang quản lý Tiểu Bạch">' + UI.mascot(36) + '<span data-rail-hide class="ml-2 text-base font-extrabold text-neutral-800 ' + (col ? 'hidden' : 'hidden lg:inline') + '">Tiểu Bạch</span></a></div>' +
      '<nav aria-label="Trang quản lý" class="flex-1 overflow-y-auto p-3" data-side-full ' + (col ? 'hidden' : '') + '><div class="hidden lg:block">' + sidebarNav(opts.active) + '</div><div class="lg:hidden">' + sidebarNav(opts.active, 'rail') + '</div></nav>' +
      (col ? '<nav aria-label="Trang quản lý (thu gọn)" class="flex-1 overflow-y-auto p-3">' + sidebarNav(opts.active, 'rail') + '</nav>' : '') + '</aside>' +
      '<div class="flex min-w-0 flex-1 flex-col">' +
      '<header class="sticky top-0 z-30 flex h-topbar items-center gap-2 border-b border-neutral-200 bg-white px-3 md:px-5">' +
      UI.iconButton({ icon: 'menu', label: 'Mở menu', cls: 'md:hidden', attrs: { 'data-admin-drawer': '' } }) +
      UI.iconButton({ icon: col ? 'panel-left-open' : 'panel-left-close', label: col ? 'Mở rộng menu' : 'Thu gọn menu', cls: 'hidden lg:inline-flex', attrs: { 'data-collapse': '' } }) +
      '<div class="min-w-0 flex-1"><p class="md:hidden text-base font-extrabold text-neutral-800 truncate">' + esc(opts.title || '') + '</p><div class="hidden md:block">' + breadcrumb(opts.breadcrumb || [[opts.title]], 'admin') + '</div></div>' +
      '<a href="' + U('index.html') + '" target="_blank" class="hidden sm:inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-bold text-neutral-700 hover:bg-neutral-100">' + ic('external-link', 'size-4') + 'Xem website</a>' +
      '<button type="button" data-user-menu aria-haspopup="menu" class="inline-flex h-11 items-center gap-2 rounded-lg px-1.5 hover:bg-neutral-100" aria-label="Tài khoản quản trị">' + UI.avatar(who) + '<span class="hidden lg:inline text-sm font-bold text-neutral-800">' + esc(who) + '</span>' + ic('chevron-down', 'size-4 hidden lg:inline') + '</button></header>' +
      '<main id="main" tabindex="-1" class="w-full max-w-screen-2xl mx-auto flex-1 p-4 lg:p-6"></main></div></div>';
    var m = app.querySelector('#main');
    bindDemo(app);
    app.addEventListener('click', function (e) {
      var t = e.target;
      if (t.closest('[data-collapse]')) { try { localStorage.setItem(COL_KEY, col ? '0' : '1'); } catch (x) {} location.reload(); return; }
      if (t.closest('[data-admin-drawer]')) { UI.drawer({ title: 'Tiểu Bạch · Quản lý', side: 'left', body: '<nav aria-label="Trang quản lý (di động)">' + sidebarNav(opts.active) + '</nav>' }); return; }
      var um = t.closest('[data-user-menu]');
      if (um) UI.dropdown(um, [{ label: who, icon: 'user-round', disabled: true }, { divider: true }, { label: 'Xem website', icon: 'external-link', href: U('index.html') }, { label: 'Đặt lại dữ liệu demo', icon: 'rotate-ccw', onClick: resetDemo }, { label: 'Đăng xuất', icon: 'log-out', danger: true, onClick: function () { Perm.logout(); } }]);
    });
    if (!allowed) { m.innerHTML = noPerm(); return; }
    render(m);
  }
  function mountBare(opts, render) {
    var app = document.getElementById('app');
    app.innerHTML = demoBanner() + '<main id="main" tabindex="-1" class="min-h-dvh"></main>';
    bindDemo(app);
    render(app.querySelector('#main'));
  }

  window.Layout = {
    SITE_NAV: SITE_NAV, ADMIN_NAV: ADMIN_NAV,
    breadcrumb: breadcrumb, counts: counts,
    /** Khởi động trang: kiểm quyền → dựng khung → gọi render(main) */
    mount: function (opts, render) {
      opts = opts || {};
      if (!Perm.role()) Perm.setRole('ROLE-01'); // website công khai: chưa chọn vai trò = Khách vãng lai
      var allowed = Perm.guard();
      if (opts.title) document.title = opts.title + ' · Tiểu Bạch Pet Shop';
      var area = opts.area || 'site';
      if (area === 'admin') return mountAdmin(opts, render, allowed);
      if (area === 'bare') return mountBare(opts, render);
      UI.area = 'site';
      return mountSite(opts, render, allowed);
    },
    /** Cập nhật huy hiệu giỏ trên SiteHeader */
    refreshCart: function () {
      var n = App.cart.count();
      document.querySelectorAll('[data-cart-count]').forEach(function (b) { b.textContent = n; b.classList.toggle('hidden', !n); b.classList.toggle('inline-flex', !!n); });
      document.querySelectorAll('[data-cart-open]').forEach(function (b) { b.setAttribute('aria-label', 'Giỏ hàng (' + n + ' sản phẩm)'); });
    }
  };
})();
