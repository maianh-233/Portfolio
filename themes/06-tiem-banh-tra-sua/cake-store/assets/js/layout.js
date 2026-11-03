/* =====================================================================
 * layout.js - Cấu hình Tailwind + khung dùng chung
 *  - Đầu trang / chân trang / nút nổi Zalo-Gọi (CMP-01, CMP-02, CMP-03)
 *  - Thanh bên / thanh tab quản trị có huy hiệu số đơn mới (CMP-17, CMP-18)
 *  - Dải "Bản demo - dữ liệu giả"
 * Nạp ở <head> ngay sau Tailwind CDN và mock-data.js. Hàm render chạy khi
 * DOMContentLoaded (lúc đó app.js đã sẵn sàng).
 * ===================================================================== */

/* ---------- 1. Tailwind config theo SRS 9.2 → 9.5 ---------- */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#F4A7B9', soft: '#FCE4EA', strong: '#C2456A' },
        cream: '#FFF6EC',
        beige: '#F3E3D3',
        mint: { DEFAULT: '#BDE7D6', strong: '#23785C' },
        butter: { DEFAULT: '#FFF1B8', strong: '#8A6A00' },
        ink: { DEFAULT: '#4A2C35', muted: '#7A5C64' },
        danger: '#C0392B',
        warning: '#B26A00',
        info: { DEFAULT: '#3B6EA8', soft: '#E3EEFA' },
        lilac: { DEFAULT: '#EDE4F7', strong: '#6B4C9A' },
        stone2: { DEFAULT: '#EEEAEA', strong: '#6E6466' }
      },
      fontFamily: {
        display: ['"Dancing Script"', 'cursive'],
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 6px 20px rgba(194, 69, 106, 0.10)',
        lift: '0 14px 36px rgba(194, 69, 106, 0.16)'
      },
      maxWidth: { shell: '1200px', admin: '1280px' }
    }
  }
};

/* ---------- 2. Nạp font, icon, CSS dùng chung vào <head> ---------- */
(function injectHead() {
  var links = [
    ['preconnect', 'https://fonts.googleapis.com'],
    ['preconnect', 'https://fonts.gstatic.com'],
    ['stylesheet', 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Nunito:wght@400;600;700;800&display=swap'],
    ['stylesheet', 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css'],
    ['stylesheet', 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css'],
    ['stylesheet', 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css'],
    ['stylesheet', 'assets/css/custom.css']
  ];
  links.forEach(function (l) {
    var el = document.createElement('link');
    el.rel = l[0]; el.href = l[1];
    if (l[1].indexOf('gstatic') > -1) el.crossOrigin = 'anonymous';
    document.head.appendChild(el);
  });
})();

/* ---------- 3. Layout ---------- */
var Layout = (function () {
  'use strict';

  var PUBLIC_NAV = [
    { key: 'home', href: 'index.html', i18n: 'nav.home' },
    { key: 'cakes', href: 'danh-sach-banh.html', i18n: 'nav.cakes' },
    { key: 'about', href: 'gioi-thieu.html', i18n: 'nav.about' },
    { key: 'blog', href: 'bai-viet.html', i18n: 'nav.blog' },
    { key: 'contact', href: 'lien-he.html', i18n: 'nav.contact' },
    { key: 'track', href: 'tra-cuu-don.html', i18n: 'nav.track' }
  ];

  var ADMIN_NAV = [
    { key: 'orders', href: 'qt-don-hang.html', label: 'Đơn hàng', icon: 'ph-receipt', roles: ['owner', 'staff'] },
    { key: 'cakes', href: 'qt-banh.html', label: 'Bánh', icon: 'ph-cake', roles: ['owner', 'staff'] },
    { key: 'content', href: 'qt-noi-dung.html', label: 'Nội dung', icon: 'ph-article', roles: ['owner', 'staff'] },
    { key: 'reviews', href: 'qt-danh-gia.html', label: 'Đánh giá', icon: 'ph-star', roles: ['owner', 'staff'] },
    { key: 'promos', href: 'qt-khuyen-mai.html', label: 'Khuyến mãi', icon: 'ph-tag', roles: ['owner'] },
    { key: 'stats', href: 'qt-thong-ke.html', label: 'Thống kê', icon: 'ph-chart-bar', roles: ['owner'] },
    { key: 'accounts', href: 'qt-tai-khoan.html', label: 'Tài khoản', icon: 'ph-users', roles: ['owner', 'staff'] },
    { key: 'settings', href: 'qt-cai-dat.html', label: 'Cài đặt', icon: 'ph-gear', roles: ['owner'] }
  ];

  function t(k) { return window.I18n ? I18n.t(k) : k; }

  /** Logo chữ tạm (OI-028: tiệm chưa có logo) */
  function logo(size) {
    var shop = MOCK.shop;
    return '<span class="inline-flex items-center gap-2">' +
      '<span class="grid place-items-center rounded-full bg-primary-soft text-primary-strong ' + (size === 'sm' ? 'w-8 h-8 text-lg' : 'w-10 h-10 text-xl') + '"><i class="ph-fill ph-cake" aria-hidden="true"></i></span>' +
      '<span class="font-display font-bold text-primary-strong leading-none ' + (size === 'sm' ? 'text-xl' : 'text-[26px]') + '">' + shop.name + '</span></span>';
  }

  /** Dải demo cố định trên cùng */
  function demoStrip(isAdmin) {
    return '<div class="demo-strip relative z-40 bg-ink text-cream text-xs">' +
      '<div class="mx-auto max-w-shell px-4 h-7 flex items-center justify-between gap-3">' +
      '<span class="inline-flex items-center gap-1.5"><i class="ph ph-flask" aria-hidden="true"></i><span>Bản demo - dữ liệu giả</span></span>' +
      '<span class="flex items-center gap-4">' +
      (isAdmin ? '<a class="underline-offset-2 hover:underline" href="index.html">Xem trang khách</a>' : '<a class="underline-offset-2 hover:underline" href="qt-dang-nhap.html">Trang quản trị</a>') +
      '<button type="button" class="underline-offset-2 hover:underline" data-action="reset-demo">Đặt lại dữ liệu</button>' +
      '</span></div></div>';
  }

  /* ----- Trang công khai ----- */
  function publicHeader(active) {
    var links = PUBLIC_NAV.map(function (n) {
      var on = n.key === active;
      return '<a href="' + n.href + '" class="nav-link relative px-2.5 xl:px-3 py-2 rounded-full text-[15px] font-semibold transition-colors ' +
        (on ? 'text-primary-strong is-active' : 'text-ink hover:text-primary-strong') + '"' + (on ? ' aria-current="page"' : '') +
        ' data-i18n="' + n.i18n + '">' + t(n.i18n) + '</a>';
    }).join('');
    var drawerLinks = PUBLIC_NAV.map(function (n) {
      var on = n.key === active;
      return '<a href="' + n.href + '" class="flex items-center justify-between px-4 h-12 rounded-2xl text-base font-bold ' +
        (on ? 'bg-primary-soft text-primary-strong' : 'text-ink hover:bg-white') + '" data-i18n="' + n.i18n + '">' + t(n.i18n) + '</a>';
    }).join('');

    return demoStrip(false) +
      '<header class="site-header sticky top-0 z-30 bg-cream/85 backdrop-blur-md border-b border-beige">' +
      '<div class="mx-auto max-w-shell px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">' +
      '<a href="index.html" class="shrink-0 rounded-full focus-ring" aria-label="' + MOCK.shop.name + ' - Trang chủ">' + logo() + '</a>' +
      '<nav class="hidden lg:flex items-center" aria-label="Menu chính">' + links + '</nav>' +
      '<div class="flex items-center gap-2">' +
      langToggle('hidden lg:inline-flex') +
      '<a href="danh-sach-banh.html" class="btn btn-primary hidden lg:inline-flex h-11 px-5" data-i18n="cta.order">' + t('cta.order') + '</a>' +
      '<a href="danh-sach-banh.html" class="btn btn-primary lg:hidden h-10 px-4 text-sm" data-i18n="cta.orderShort">' + t('cta.orderShort') + '</a>' +
      '<button type="button" class="lg:hidden grid place-items-center w-11 h-11 rounded-full hover:bg-white text-2xl" aria-label="Mở menu" aria-expanded="false" aria-controls="mobile-drawer" data-action="open-drawer"><i class="ph ph-list" aria-hidden="true"></i></button>' +
      '</div></div></header>' +
      /* Ngăn kéo menu điện thoại */
      '<div id="mobile-drawer" class="drawer fixed inset-0 z-50 hidden" role="dialog" aria-modal="true" aria-label="Menu">' +
      '<div class="drawer-backdrop absolute inset-0 bg-ink/40" data-action="close-drawer"></div>' +
      '<div class="drawer-panel absolute right-0 top-0 h-full w-[82%] max-w-sm bg-cream shadow-lift p-5 flex flex-col">' +
      '<div class="flex items-center justify-between mb-6">' + logo('sm') +
      '<button type="button" class="grid place-items-center w-11 h-11 rounded-full hover:bg-white text-2xl" aria-label="Đóng menu" data-action="close-drawer"><i class="ph ph-x" aria-hidden="true"></i></button></div>' +
      '<nav class="flex flex-col gap-1" aria-label="Menu điện thoại">' + drawerLinks + '</nav>' +
      '<div class="mt-6">' + langToggle('inline-flex') + '</div>' +
      '<a href="danh-sach-banh.html" class="btn btn-primary w-full h-12 mt-auto" data-i18n="cta.order">' + t('cta.order') + '</a>' +
      '</div></div>';
  }

  function langToggle(cls) {
    var lang = window.I18n ? I18n.lang : 'vi';
    function b(code) {
      var on = lang === code;
      return '<button type="button" data-action="set-lang" data-lang="' + code + '" aria-pressed="' + on + '" class="h-9 min-w-[44px] px-3 rounded-full text-sm font-extrabold transition-colors ' +
        (on ? 'bg-white text-primary-strong shadow-soft' : 'text-ink-muted hover:text-ink') + '">' + code.toUpperCase() + '</button>';
    }
    return '<div class="' + cls + ' items-center rounded-full bg-beige/70 p-1" role="group" aria-label="Ngôn ngữ / Language">' + b('vi') + b('en') + '</div>';
  }

  function publicFooter() {
    var s = MOCK.shop;
    var en = window.I18n && I18n.lang === 'en';
    var hours = s.hours.map(function (h) {
      return '<li class="flex justify-between gap-4"><span>' + (en ? h.days_en : h.days) + '</span><span class="tabular-nums font-semibold">' + h.open + ' - ' + h.close + '</span></li>';
    }).join('');
    return '<footer class="site-footer scallop-top bg-beige mt-24 text-ink">' +
      '<div class="mx-auto max-w-shell px-4 md:px-6 lg:px-8 pt-16 pb-28 md:pb-10 grid gap-10 md:grid-cols-12">' +
      '<div class="md:col-span-4">' + logo() +
      '<p class="mt-4 text-ink-muted max-w-[34ch]" data-i18n="footer.tagline">' + t('footer.tagline') + '</p>' +
      '<div class="mt-5 flex gap-2">' +
      '<a href="' + s.facebook + '" target="_blank" rel="noopener" class="grid place-items-center w-11 h-11 rounded-full bg-white hover:bg-primary-soft text-xl text-ink" aria-label="Facebook của tiệm"><i class="ph ph-facebook-logo" aria-hidden="true"></i></a>' +
      '<a href="' + s.instagram + '" target="_blank" rel="noopener" class="grid place-items-center w-11 h-11 rounded-full bg-white hover:bg-primary-soft text-xl text-ink" aria-label="Instagram của tiệm"><i class="ph ph-instagram-logo" aria-hidden="true"></i></a>' +
      '</div></div>' +
      '<div class="md:col-span-4 text-[15px]">' +
      '<h2 class="font-extrabold text-base mb-3" data-i18n="footer.visit">' + t('footer.visit') + '</h2>' +
      '<p class="flex gap-2"><i class="ph ph-map-pin text-lg text-primary-strong mt-0.5" aria-hidden="true"></i><span>' + s.address + '</span></p>' +
      '<p class="flex gap-2 mt-2"><i class="ph ph-phone text-lg text-primary-strong mt-0.5" aria-hidden="true"></i><a class="font-bold hover:text-primary-strong" href="tel:' + s.phone.replace(/\s/g, '') + '">' + s.phone + '</a></p>' +
      '<ul class="mt-3 space-y-1 text-ink-muted max-w-xs">' + hours + '</ul>' +
      '</div>' +
      '<div class="md:col-span-4">' +
      '<h2 class="font-extrabold text-base mb-3" data-i18n="footer.links">' + t('footer.links') + '</h2>' +
      '<ul class="grid grid-cols-2 gap-y-2 text-[15px]">' +
      '<li><a class="hover:text-primary-strong" href="danh-sach-banh.html" data-i18n="nav.cakes">' + t('nav.cakes') + '</a></li>' +
      '<li><a class="hover:text-primary-strong" href="tra-cuu-don.html" data-i18n="nav.track">' + t('nav.track') + '</a></li>' +
      '<li><a class="hover:text-primary-strong" href="bai-viet.html" data-i18n="nav.blog">' + t('nav.blog') + '</a></li>' +
      '<li><a class="hover:text-primary-strong" href="lien-he.html" data-i18n="nav.contact">' + t('nav.contact') + '</a></li>' +
      '<li><a class="hover:text-primary-strong" href="gioi-thieu.html" data-i18n="nav.about">' + t('nav.about') + '</a></li>' +
      '</ul></div></div>' +
      '<div class="border-t border-ink/10"><div class="mx-auto max-w-shell px-4 md:px-6 lg:px-8 py-4 text-sm text-ink-muted">© ' + new Date().getFullYear() + ' ' + s.name + '</div></div>' +
      '</footer>';
  }

  /** Nút nổi Zalo / Gọi. compact = thu gọn thành 1 nút mở rộng (SCR-005) */
  function floatingContact(compact) {
    var s = MOCK.shop;
    var zalo = '<a href="https://zalo.me/' + s.zalo + '" target="_blank" rel="noopener" class="fab group bg-white text-info border border-beige" aria-label="Nhắn Zalo cho tiệm">' +
      '<span class="font-extrabold text-[13px] tracking-tight">Zalo</span><span class="fab-label" data-i18n="fab.zalo">' + t('fab.zalo') + '</span></a>';
    var call = '<a href="tel:' + s.phone.replace(/\s/g, '') + '" class="fab group bg-primary-strong text-white" aria-label="Gọi điện cho tiệm">' +
      '<i class="ph-fill ph-phone text-2xl" aria-hidden="true"></i><span class="fab-label" data-i18n="fab.call">' + t('fab.call') + '</span></a>';
    if (!compact) {
      return '<div class="floating-contact fixed right-4 bottom-4 z-40 flex flex-col gap-3">' + zalo + call + '</div>';
    }
    return '<div class="floating-contact is-compact fixed right-4 bottom-24 lg:bottom-4 z-40 flex flex-col items-end gap-3">' +
      '<div class="fab-group hidden flex-col gap-3" id="fab-group">' + zalo + call + '</div>' +
      '<button type="button" class="fab bg-white text-primary-strong border border-beige" aria-expanded="false" aria-controls="fab-group" aria-label="Liên hệ tiệm" data-action="toggle-fab"><i class="ph ph-chat-circle-dots text-2xl" aria-hidden="true"></i></button>' +
      '</div>';
  }

  function renderPublic() {
    var body = document.body;
    var h = document.getElementById('app-header');
    var f = document.getElementById('app-footer');
    if (h) h.innerHTML = publicHeader(body.getAttribute('data-nav'));
    if (f) f.innerHTML = publicFooter() + floatingContact(body.hasAttribute('data-compact-contact'));
  }

  /* ----- Trang quản trị ----- */
  function renderAdmin() {
    var body = document.body;
    var user = Auth.current();
    if (!user) {
      body.setAttribute('data-denied', 'true');
      location.replace('qt-dang-nhap.html?next=' + encodeURIComponent(location.pathname.split('/').pop() + location.search));
      return false;
    }
    var active = body.getAttribute('data-nav');
    var title = body.getAttribute('data-title') || '';
    var items = ADMIN_NAV.filter(function (n) { return n.roles.indexOf(user.role) > -1; });
    var badge = Orders.newCount();

    function badgeHtml(cls) {
      return '<span class="admin-badge ' + (badge ? '' : 'hidden ') + cls + ' min-w-[22px] h-[22px] px-1.5 rounded-full bg-primary-strong text-white text-xs font-extrabold grid place-items-center tabular-nums" aria-label="' + badge + ' đơn mới">' + (badge > 99 ? '99+' : badge) + '</span>';
    }
    var side = items.map(function (n) {
      var on = n.key === active;
      return '<a href="' + n.href + '" class="flex items-center gap-3 h-11 px-3 rounded-xl text-[15px] font-bold transition-colors ' +
        (on ? 'bg-primary-soft text-primary-strong' : 'text-ink hover:bg-cream') + '"' + (on ? ' aria-current="page"' : '') + '>' +
        '<i class="ph ' + n.icon + ' text-xl" aria-hidden="true"></i><span class="flex-1">' + n.label + '</span>' +
        (n.key === 'orders' ? badgeHtml('') : '') + '</a>';
    }).join('');

    var bell = Bell.isOn();
    var bellBtn = function (extra) {
      return '<button type="button" data-action="toggle-bell" aria-pressed="' + bell + '" class="bell-toggle grid place-items-center w-10 h-10 rounded-full hover:bg-cream text-xl ' + (bell ? 'text-primary-strong' : 'text-ink-muted') + ' ' + (extra || '') + '" aria-label="' + (bell ? 'Tắt chuông báo đơn mới' : 'Bật chuông báo đơn mới') + '">' +
        '<i class="ph' + (bell ? '-fill ph-bell-ringing' : ' ph-bell-slash') + '" aria-hidden="true"></i></button>';
    };
    var roleLabel = user.role === 'owner' ? 'Chủ tiệm' : 'Nhân viên';

    /* Thanh tab dưới (< 1024 px): Đơn hàng · Bánh · Thống kê|Đánh giá · Thêm */
    var thirdKey = user.role === 'owner' ? 'stats' : 'reviews';
    var tabs = ['orders', 'cakes', thirdKey].map(function (k) {
      var n = ADMIN_NAV.filter(function (x) { return x.key === k; })[0];
      var on = k === active;
      return '<a href="' + n.href + '" class="relative flex-1 flex flex-col items-center justify-center gap-0.5 text-[11px] font-bold ' + (on ? 'text-primary-strong' : 'text-ink-muted') + '"' + (on ? ' aria-current="page"' : '') + '>' +
        '<i class="' + (on ? 'ph-fill ' : 'ph ') + n.icon + ' text-2xl" aria-hidden="true"></i>' + n.label +
        (k === 'orders' ? badgeHtml('absolute top-1.5 left-1/2 ml-1') : '') + '</a>';
    }).join('');
    var moreItems = items.filter(function (n) { return ['orders', 'cakes', thirdKey].indexOf(n.key) === -1; }).map(function (n) {
      return '<a href="' + n.href + '" class="flex items-center gap-3 h-12 px-3 rounded-xl font-bold ' + (n.key === active ? 'bg-primary-soft text-primary-strong' : 'hover:bg-cream') + '"><i class="ph ' + n.icon + ' text-xl" aria-hidden="true"></i>' + n.label + '</a>';
    }).join('');

    var html = demoStrip(true) +
      /* Thanh bên máy tính */
      '<aside class="admin-sidebar hidden lg:flex fixed left-0 top-0 bottom-0 w-60 flex-col bg-white border-r border-beige px-3 pt-12 pb-5 z-30" aria-label="Menu quản trị">' +
      '<a href="qt-don-hang.html" class="px-2 mb-6">' + logo('sm') + '</a>' +
      '<nav class="flex flex-col gap-1">' + side + '</nav>' +
      '<div class="mt-auto border-t border-beige pt-4 px-1">' +
      '<div class="flex items-center gap-2"><span class="grid place-items-center w-9 h-9 rounded-full bg-mint text-mint-strong font-extrabold">' + user.name.split(' ').pop().charAt(0) + '</span>' +
      '<span class="flex-1 min-w-0"><span class="block text-sm font-extrabold truncate">' + user.name + '</span><span class="block text-xs text-ink-muted">' + roleLabel + '</span></span>' + bellBtn() + '</div>' +
      '<button type="button" data-action="logout" class="mt-3 w-full flex items-center gap-2 h-10 px-3 rounded-xl text-sm font-bold text-ink-muted hover:bg-cream hover:text-ink"><i class="ph ph-sign-out text-lg" aria-hidden="true"></i>Đăng xuất</button>' +
      '</div></aside>' +
      /* Đầu trang điện thoại */
      '<header class="lg:hidden sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-beige">' +
      '<div class="h-14 px-3 flex items-center gap-2">' +
      (body.getAttribute('data-back') ? '<a href="' + body.getAttribute('data-back') + '" class="grid place-items-center w-10 h-10 rounded-full hover:bg-cream text-xl" aria-label="Quay lại"><i class="ph ph-arrow-left" aria-hidden="true"></i></a>' : '<span class="pl-1">' + logo('sm').replace('text-xl', 'text-lg') + '</span>') +
      '<span class="flex-1 font-extrabold text-lg truncate ' + (body.getAttribute('data-back') ? '' : 'sr-only') + '">' + title + '</span>' +
      bellBtn() + '</div></header>' +
      /* Thanh tab dưới */
      '<nav class="admin-tabbar lg:hidden fixed bottom-0 inset-x-0 h-16 bg-white border-t border-beige z-30 flex" aria-label="Menu quản trị">' + tabs +
      '<button type="button" data-action="open-more" class="flex-1 flex flex-col items-center justify-center gap-0.5 text-[11px] font-bold text-ink-muted" aria-haspopup="dialog"><i class="ph ph-dots-three-circle text-2xl" aria-hidden="true"></i>Thêm</button></nav>' +
      /* Tấm "Thêm" */
      '<div id="admin-more" class="drawer fixed inset-0 z-50 hidden" role="dialog" aria-modal="true" aria-label="Các mục khác">' +
      '<div class="drawer-backdrop absolute inset-0 bg-ink/40" data-action="close-more"></div>' +
      '<div class="sheet-panel absolute inset-x-0 bottom-0 bg-white rounded-t-3xl p-4 pb-6 max-h-[80vh] overflow-auto">' +
      '<div class="mx-auto w-10 h-1.5 rounded-full bg-beige mb-4"></div>' +
      '<div class="flex items-center gap-2 px-2 mb-3"><span class="flex-1"><span class="block font-extrabold">' + user.name + '</span><span class="text-xs text-ink-muted">' + roleLabel + '</span></span>' + bellBtn() + '</div>' +
      '<nav class="flex flex-col gap-1">' + moreItems + '</nav>' +
      '<button type="button" data-action="logout" class="mt-2 w-full flex items-center gap-3 h-12 px-3 rounded-xl font-bold text-danger hover:bg-cream"><i class="ph ph-sign-out text-xl" aria-hidden="true"></i>Đăng xuất</button>' +
      '</div></div>';

    var host = document.getElementById('app-header');
    if (host) host.innerHTML = html;

    /* Chặn trang không có quyền (E-TK-15 / E-TS-02) */
    var allowed = ADMIN_NAV.filter(function (n) { return n.key === active; })[0];
    if (allowed && allowed.roles.indexOf(user.role) === -1) {
      var main = document.getElementById('main');
      if (main) {
        main.innerHTML = '<div class="max-w-md mx-auto text-center py-24 px-4"><div class="mx-auto grid place-items-center w-16 h-16 rounded-full bg-primary-soft text-primary-strong text-3xl mb-4"><i class="ph ph-lock-key" aria-hidden="true"></i></div>' +
          '<h1 class="text-xl font-extrabold">Không có quyền truy cập</h1><p class="mt-2 text-ink-muted">' + (body.getAttribute('data-deny-msg') || 'Bạn không có quyền thực hiện thao tác này.') + '</p>' +
          '<a href="qt-don-hang.html" class="btn btn-primary h-10 px-5 mt-6">Về Đơn hàng</a></div>';
      }
      body.setAttribute('data-denied', 'true');
    }
    return true;
  }

  /** Cập nhật huy hiệu số đơn mới ở mọi vị trí */
  function refreshBadge() {
    var n = Orders.newCount();
    document.querySelectorAll('.admin-badge').forEach(function (b) {
      b.textContent = n > 99 ? '99+' : n;
      b.setAttribute('aria-label', n + ' đơn mới');
      b.classList.toggle('hidden', !n);
    });
  }

  function init() {
    var mode = document.body.getAttribute('data-layout');
    if (mode === 'public') renderPublic();
    else if (mode === 'admin') renderAdmin();
    else if (mode === 'admin-login') {
      var h = document.getElementById('app-header');
      if (h) h.innerHTML = demoStrip(true);
    }
  }

  document.addEventListener('DOMContentLoaded', init);

  return { renderPublic: renderPublic, renderAdmin: renderAdmin, refreshBadge: refreshBadge, logo: logo, ADMIN_NAV: ADMIN_NAV };
})();
