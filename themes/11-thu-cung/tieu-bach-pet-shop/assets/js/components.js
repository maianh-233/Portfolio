/* Thư viện component Tiểu Bạch Pet Shop — window.UI
 * Tên component theo 9.12 của SRS. Hàm trả về chuỗi HTML (component tĩnh) hoặc gắn vào phần tử (component tương tác).
 * Chỉ dùng class token (primary/secondary/neutral/success/warning/danger/info), không HEX, không class giá trị tùy ý.
 * Phụ thuộc: icons.js (window.icon). Không phụ thuộc dữ liệu nghiệp vụ (xem app.js).
 */
(function () {
  'use strict';
  var UI = (window.UI = window.UI || {});
  /** Khu đang dựng: 'site' (website, nút bo tròn) | 'admin' (trang quản lý, nút bo lg). Layout.mount đặt giá trị này. */
  UI.area = 'site';
  var uid = 0;
  UI.uid = function (p) { return (p || 'ui') + '-' + (++uid); };

  /* ---------- Tiện ích ---------- */
  var esc = (UI.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  });
  /** Chuẩn hóa chuỗi để tìm kiếm tiếng Việt không dấu */
  UI.norm = function (s) { return String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd'); };
  function attrs(o) {
    if (!o) return '';
    return Object.keys(o).filter(function (k) { return o[k] !== undefined && o[k] !== null && o[k] !== false; })
      .map(function (k) { return o[k] === true ? k : k + '="' + esc(o[k]) + '"'; }).join(' ');
  }
  UI.attrs = attrs;
  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstElementChild; }
  UI.el = el;

  var ALIAS = { 'user-round': 'user', gift: 'tag', 'ticket-percent': 'percent', newspaper: 'file-text', 'calendar-heart': 'calendar-days', zalo: 'message-square', messenger: 'send', facebook: 'globe' };
  /** UI.icon(name, cls) — icon Lucide từ sprite icons.js (có bí danh cho icon SRS chưa có trong sprite) */
  UI.icon = function (name, cls) { return window.icon ? window.icon(ALIAS[name] || name, cls || '') : ''; };
  var ic = UI.icon;
  function starSvg(cls, filled) { return ic('star', cls).replace('<svg ', '<svg style="fill:' + (filled ? 'currentColor' : 'none') + '" '); }

  /* ---------- Định dạng ---------- */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  UI.fmt = {
    /** 1250000 → "1.250.000đ" (định dạng PriceTag của SRS) */
    money: function (n) { n = Math.round(Number(n) || 0); return (n < 0 ? '−' : '') + Math.abs(n).toLocaleString('vi-VN') + 'đ'; },
    number: function (n) { return (Number(n) || 0).toLocaleString('vi-VN'); },
    /** 0.038 → "3,8%"; percent(38, true) khi đã là % */
    percent: function (n, isPct) { var v = isPct ? n : n * 100; return (Math.round(v * 10) / 10).toLocaleString('vi-VN') + '%'; },
    date: function (iso) { if (!iso) return '—'; var d = new Date(iso); return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear(); },
    dm: function (iso) { var d = new Date(iso); return pad(d.getDate()) + '/' + pad(d.getMonth() + 1); },
    time: function (iso) { var d = new Date(iso); return pad(d.getHours()) + ':' + pad(d.getMinutes()); },
    datetime: function (iso) { if (!iso) return '—'; return UI.fmt.date(iso) + ' ' + UI.fmt.time(iso); },
    /** "09:42 · hôm nay" / "hôm qua" / dd/mm/yyyy HH:mm */
    rel: function (iso) {
      var d = new Date(iso), now = new Date();
      var day = Math.round((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - new Date(d.getFullYear(), d.getMonth(), d.getDate())) / 864e5);
      if (day === 0) return UI.fmt.time(iso) + ' · hôm nay';
      if (day === 1) return UI.fmt.time(iso) + ' · hôm qua';
      return UI.fmt.datetime(iso);
    },
    weekday: function (iso) { return ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'][new Date(iso).getDay()]; },
    compact: function (n) { if (n >= 1e6) return (Math.round(n / 1e5) / 10).toLocaleString('vi-VN') + 'tr'; if (n >= 1e3) return Math.round(n / 1e3) + 'K'; return String(n); }
  };
  UI.parseMoney = function (s) { var n = parseInt(String(s || '').replace(/[^\d]/g, ''), 10); return isNaN(n) ? 0 : n; };

  /* ---------- CSS bổ sung (hiệu ứng, chỉ dùng biến token) ---------- */
  var CSS = [
    '.skeleton{background:linear-gradient(90deg,rgb(var(--c-neutral-100)) 25%,rgb(var(--c-neutral-200)) 37%,rgb(var(--c-neutral-100)) 63%);background-size:400% 100%;animation:ui-sk 1.2s ease infinite}',
    '@keyframes ui-sk{0%{background-position:100% 50%}100%{background-position:0 50%}}',
    '@keyframes ui-shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-4px) rotate(-10deg)}40%,80%{transform:translateX(4px) rotate(10deg)}}.anim-shake{animation:ui-shake .5s ease}',
    '@keyframes ui-pop{0%{transform:scale(1)}50%{transform:scale(1.4)}100%{transform:scale(1)}}.anim-pop{animation:ui-pop .4s ease}',
    '@keyframes ui-flash{0%{background-color:rgb(var(--c-success-100))}100%{background-color:transparent}}.anim-flash{animation:ui-flash 1.2s ease}',
    '@keyframes ui-in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}.anim-in{animation:ui-in .5s cubic-bezier(.16,1,.3,1) both}',
    '@keyframes ui-scale{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:none}}.anim-scale{animation:ui-scale .2s cubic-bezier(.16,1,.3,1) both}',
    '@keyframes ui-up{from{transform:translateY(100%)}to{transform:none}}.anim-up{animation:ui-up .25s cubic-bezier(.16,1,.3,1) both}',
    '@keyframes ui-right{from{transform:translateX(100%)}to{transform:none}}.anim-right{animation:ui-right .25s cubic-bezier(.16,1,.3,1) both}',
    '@keyframes ui-left{from{transform:translateX(-100%)}to{transform:none}}.anim-left{animation:ui-left .25s cubic-bezier(.16,1,.3,1) both}',
    '@keyframes ui-fade{from{opacity:0}to{opacity:1}}.anim-fade{animation:ui-fade .2s ease both}',
    '[data-reveal]{opacity:0}[data-reveal].is-in{animation:ui-in .6s cubic-bezier(.16,1,.3,1) both}',
    '.confetti-bit{position:fixed;width:8px;height:10px;border-radius:2px;pointer-events:none;z-index:80}',
    '.no-scrollbar{scrollbar-width:none}.no-scrollbar::-webkit-scrollbar{display:none}',
    'details>summary{list-style:none}details>summary::-webkit-details-marker{display:none}',
    '.safe-bottom{padding-bottom:max(12px,env(safe-area-inset-bottom))}',
    '[data-rte]:empty:before{content:attr(data-placeholder);color:rgb(var(--c-neutral-500))}',
    '.prose-post{font-size:var(--text-lg);line-height:1.75;color:rgb(var(--c-neutral-800))}',
    '.prose-post h2{font-size:var(--text-2xl);line-height:var(--leading-2xl);font-weight:800;margin:2rem 0 .75rem}',
    '.prose-post h3{font-size:var(--text-xl);line-height:var(--leading-xl);font-weight:700;margin:1.5rem 0 .5rem}',
    '.prose-post p{margin:0 0 1rem}.prose-post ul,.prose-post ol{margin:0 0 1rem;padding-left:1.4rem}.prose-post ul{list-style:disc}.prose-post ol{list-style:decimal}.prose-post li{margin:.25rem 0}',
    '.prose-post blockquote{margin:1.5rem 0;padding:.75rem 1.25rem;border-left:4px solid rgb(var(--c-primary-500));background:rgb(var(--c-primary-50));border-radius:var(--radius-md);color:rgb(var(--c-neutral-700))}',
    '.prose-post img{border-radius:var(--radius-xl);margin:1.25rem 0;width:100%}.prose-post a{color:rgb(var(--c-primary-700));text-decoration:underline}',
    '@media (max-width:767px){.prose-post{font-size:var(--text-base)}}',
    '@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}[data-reveal]{opacity:1}.skeleton{animation:none}}'
  ].join('\n');
  function injectCss() { if (document.getElementById('ui-css')) return; var s = document.createElement('style'); s.id = 'ui-css'; s.textContent = CSS; document.head.appendChild(s); }
  injectCss();
  UI.reducedMotion = function () { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; };

  /* ---------- Thương hiệu ---------- */
  /** UI.mascot(size, mood) — linh vật mèo đen "ngố" Tiểu Bạch (logo tạm, OI-024). mood: 'happy' | 'sad' | 'wow' */
  UI.mascot = function (size, mood) {
    size = size || 48;
    var mouth = mood === 'sad' ? '<path d="M28 49q4-3 8 0" class="stroke-white" fill="none" stroke-width="1.6" stroke-linecap="round"/>'
      : mood === 'wow' ? '<ellipse cx="32" cy="49" rx="2.4" ry="2.8" class="fill-primary-400"/>'
        : '<path d="M28 47q2 2.6 4 0q2 2.6 4 0" class="stroke-white" fill="none" stroke-width="1.6" stroke-linecap="round"/>';
    var py = mood === 'sad' ? 2 : 0;
    return '<svg viewBox="0 0 64 64" width="' + size + '" height="' + size + '" aria-hidden="true" class="shrink-0">' +
      '<path class="fill-neutral-900" d="M9 30 11 5 27 18Z"/><path class="fill-neutral-900" d="M55 30 53 5 37 18Z"/>' +
      '<path class="fill-primary-400" d="M14 21 14.8 11 21.5 16.5Z"/><path class="fill-primary-400" d="M50 21 49.2 11 42.5 16.5Z"/>' +
      '<ellipse class="fill-neutral-900" cx="32" cy="37" rx="24" ry="21"/>' +
      '<ellipse class="fill-white" cx="23" cy="34" rx="6" ry="6.5"/><ellipse class="fill-white" cx="41" cy="34" rx="6" ry="6.5"/>' +
      '<circle class="fill-neutral-900" cx="24.5" cy="' + (35 + py) + '" r="2.8"/><circle class="fill-neutral-900" cx="39.5" cy="' + (33 + py) + '" r="2.8"/>' +
      '<ellipse class="fill-primary-400" cx="16" cy="44" rx="3.2" ry="1.9" opacity=".8"/><ellipse class="fill-primary-400" cx="48" cy="44" rx="3.2" ry="1.9" opacity=".8"/>' +
      '<path class="fill-primary-500" d="M29.5 42.5h5L32 45.5Z"/>' + mouth + '</svg>';
  };
  /** UI.logo({ sub }) — logo ngang Tiểu Bạch */
  UI.logo = function (o) {
    o = o || {};
    return '<span class="inline-flex items-center gap-2">' + UI.mascot(o.size || 38) +
      '<span class="flex flex-col leading-none"><span class="text-xl font-extrabold tracking-tight text-neutral-800">Tiểu Bạch</span>' +
      '<span class="text-xs font-bold text-primary-700">' + esc(o.sub || 'Pet Shop') + '</span></span></span>';
  };
  /** Ảnh có dự phòng: lỗi tải → ô nền primary-100 + linh vật */
  UI.img = function (o) {
    return '<img src="' + esc(o.src) + '" alt="' + esc(o.alt || '') + '" loading="' + (o.eager ? 'eager' : 'lazy') + '" decoding="async" class="w-full h-full object-cover ' + (o.cls || '') + '" onerror="UI.imgFallback(this)">';
  };
  UI.imgFallback = function (img) {
    if (!img || img.dataset.failed) return; img.dataset.failed = '1';
    var d = document.createElement('div');
    d.className = 'w-full h-full flex items-center justify-center bg-primary-100 ' + (img.className || '').replace(/object-cover/g, '');
    d.setAttribute('role', 'img'); d.setAttribute('aria-label', img.alt || 'Ảnh');
    d.innerHTML = UI.mascot(56, 'wow');
    img.replaceWith(d);
  };

  /* ---------- Nút ---------- */
  var BTN_V = {
    primary: 'bg-primary-500 text-neutral-800 hover:bg-primary-400 hover:shadow-brand motion-safe:hover:-translate-y-px',
    secondary: 'bg-secondary-300 text-secondary-800 hover:bg-secondary-200',
    outline: 'bg-white text-neutral-800 border border-neutral-300 hover:bg-primary-50 hover:border-primary-300',
    ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100',
    danger: 'bg-danger-600 text-white hover:bg-danger-700',
    'danger-outline': 'bg-white text-danger-700 border border-danger-600 hover:bg-danger-50',
    inverse: 'bg-transparent text-white hover:bg-neutral-700',
    link: 'bg-transparent text-primary-700 hover:underline underline-offset-4'
  };
  var BTN_S = { sm: 'h-9 px-4 text-sm', md: 'h-control px-5 text-base', lg: 'min-h-control py-3.5 px-7 text-base' };
  /** UI.button({ label, variant: primary|secondary|outline|ghost|danger|danger-outline|link, size: sm|md|lg, icon, iconRight, loading, disabled, full, href, type, attrs, cls }) */
  UI.button = function (o) {
    o = o || {};
    var v = o.variant || 'primary', s = o.size || 'md';
    var shape = o.shape || (UI.area === 'admin' ? 'rounded-lg' : 'rounded-full');
    var cls = ['inline-flex items-center justify-center gap-2 font-bold whitespace-nowrap select-none transition duration-200 active:scale-95',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0',
      v === 'link' ? 'h-auto px-0 ' + (s === 'sm' ? 'text-sm' : 'text-base') : BTN_S[s], v === 'link' ? '' : shape, BTN_V[v] || BTN_V.primary, o.full ? 'w-full' : '', o.cls || ''].join(' ');
    var lead = o.loading ? ic('loader-circle', 'animate-spin') : (o.icon ? ic(o.icon) : '');
    var inner = lead + (o.label != null && o.label !== '' ? '<span>' + esc(o.label) + '</span>' : '') + (o.iconRight ? ic(o.iconRight) : '');
    var a = attrs(o.attrs);
    if (o.href && !o.disabled) return '<a href="' + esc(o.href) + '" class="' + cls + '" ' + a + '>' + inner + '</a>';
    return '<button type="' + (o.type || 'button') + '" class="' + cls + '" ' + (o.disabled || o.loading ? 'disabled ' : '') + (o.loading ? 'aria-busy="true" ' : '') + a + '>' + inner + '</button>';
  };
  /** UI.iconButton({ icon, label (aria-label), variant, size: md(44px)|sm(36px), badge, attrs, href }) */
  UI.iconButton = function (o) {
    var v = o.variant || 'ghost';
    var size = o.size === 'sm' ? 'size-9' : 'size-11';
    var shape = o.shape || (UI.area === 'admin' && o.size === 'sm' ? 'rounded-lg' : 'rounded-full');
    var cls = 'relative inline-flex items-center justify-center shrink-0 transition ' + size + ' ' + shape + ' ' + (BTN_V[v] || BTN_V.ghost) +
      ' focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 disabled:opacity-50 disabled:cursor-not-allowed ' + (o.cls || '');
    var badge = o.badge ? '<span class="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 rounded-full bg-primary-500 text-neutral-800 text-xs font-bold flex items-center justify-center" ' + (o.badgeId ? 'id="' + o.badgeId + '"' : '') + '>' + esc(o.badge) + '</span>' : '';
    var a = attrs(o.attrs);
    var lab = 'aria-label="' + esc(o.label) + '" title="' + esc(o.label) + '"';
    if (o.href) return '<a href="' + esc(o.href) + '" class="' + cls + '" ' + lab + ' ' + a + '>' + ic(o.icon) + badge + '</a>';
    return '<button type="button" class="' + cls + '" ' + lab + ' ' + (o.disabled ? 'disabled ' : '') + a + '>' + ic(o.icon) + badge + '</button>';
  };
  /** Đặt / bỏ trạng thái loading cho nút đã có trên trang (chặn bấm lặp) */
  UI.setLoading = function (btn, on) {
    if (!btn) return;
    if (on) { btn.dataset.html = btn.innerHTML; btn.disabled = true; btn.setAttribute('aria-busy', 'true'); var w = btn.offsetWidth; btn.style.minWidth = w + 'px'; btn.innerHTML = ic('loader-circle', 'animate-spin') + '<span>' + esc(btn.textContent.trim()) + '</span>'; }
    else { if (btn.dataset.html) btn.innerHTML = btn.dataset.html; btn.disabled = false; btn.removeAttribute('aria-busy'); btn.style.minWidth = ''; }
  };
  /** Bọc phần tử (thường là nút disabled) để hiện Tooltip giải thích */
  UI.withTooltip = function (html, text) { return '<span class="inline-flex" tabindex="0" data-tooltip="' + esc(text) + '">' + html + '</span>'; };

  /* ---------- Hiển thị ---------- */
  var TONE = {
    primary: ['bg-primary-100', 'text-primary-700', 'bg-primary-500'],
    secondary: ['bg-secondary-100', 'text-secondary-700', 'bg-secondary-500'],
    success: ['bg-success-100', 'text-success-700', 'bg-success-500'],
    warning: ['bg-warning-100', 'text-warning-700', 'bg-warning-500'],
    danger: ['bg-danger-100', 'text-danger-700', 'bg-danger-500'],
    info: ['bg-info-100', 'text-info-700', 'bg-info-500'],
    neutral: ['bg-neutral-100', 'text-neutral-700', 'bg-neutral-400'],
    'danger-soft': ['bg-danger-50', 'text-danger-700', 'bg-danger-500'],
    dark: ['bg-neutral-800', 'text-white', 'bg-white'],
    mint: ['bg-secondary-300', 'text-secondary-800', 'bg-secondary-600']
  };
  UI.TONE = TONE;
  /** UI.statusBadge(label, tone, size) — trạng thái chứng từ: nền 100, chữ 700, chấm 500 (9.3) */
  UI.statusBadge = function (label, tone, size) {
    var t = TONE[tone] || TONE.neutral;
    return '<span class="inline-flex items-center gap-1.5 rounded-full ' + t[0] + ' ' + t[1] + ' ' + (size === 'md' ? 'px-3 py-1 text-sm' : 'px-2.5 py-0.5 text-xs') + ' font-bold whitespace-nowrap"><span class="size-1.5 rounded-full ' + t[2] + '" aria-hidden="true"></span>' + esc(label) + '</span>';
  };
  /** UI.badge(text, tone) — nhãn tròn không chấm (nhãn góc thẻ sản phẩm) */
  UI.badge = function (text, tone) { var t = TONE[tone] || TONE.neutral; return '<span class="inline-flex items-center rounded-full ' + t[0] + ' ' + t[1] + ' px-2.5 py-1 text-xs font-extrabold whitespace-nowrap">' + esc(text) + '</span>'; };
  /** UI.tag(text, tone, icon) — nhãn phụ bo sm (loại đơn, thanh toán, loại thú cưng…) */
  UI.tag = function (text, tone, icon) { var t = TONE[tone] || TONE.neutral; return '<span class="inline-flex items-center gap-1 rounded-sm ' + t[0] + ' ' + t[1] + ' px-2 py-0.5 text-xs font-bold whitespace-nowrap">' + (icon ? ic(icon, 'size-3.5') : '') + esc(text) + '</span>'; };
  UI.countBadge = function (n, id) { return '<span ' + (id ? 'id="' + id + '" ' : '') + 'class="inline-flex min-w-5 h-5 px-1.5 items-center justify-center rounded-full bg-primary-500 text-neutral-800 text-xs font-bold">' + esc(n) + '</span>'; };
  /** UI.avatar(name, size 32|40) */
  UI.avatar = function (name, size) {
    var parts = String(name || '?').trim().split(/\s+/); var ch = (parts[parts.length - 1] || '?').charAt(0).toUpperCase();
    return '<span class="inline-flex items-center justify-center shrink-0 rounded-full bg-secondary-200 text-secondary-800 font-extrabold ' + (size === 40 ? 'size-10 text-base' : 'size-8 text-sm') + '" aria-hidden="true">' + esc(ch) + '</span>';
  };
  /** UI.card({ title, body, actions, cls, pad }) — khung thẻ: website radius.xl, quản trị radius.lg */
  UI.card = function (o) {
    var r = UI.area === 'admin' ? 'rounded-lg' : 'rounded-xl';
    var head = o.title || o.actions ? '<div class="flex items-center justify-between gap-3 mb-4"><h3 class="text-lg font-bold text-neutral-800">' + (o.title || '') + '</h3>' + (o.actions || '') + '</div>' : '';
    return '<section class="bg-white border border-neutral-200 ' + r + ' ' + (o.pad === false ? '' : 'p-4 md:p-5') + ' min-w-0 ' + (o.cls || '') + '" ' + attrs(o.attrs) + '>' + head + (o.body || '') + '</section>';
  };
  /** UI.pageHeader({ title, description, actions, eyebrow }) — website 3xl, quản trị 2xl + nút chính bên phải */
  UI.pageHeader = function (o) {
    var site = UI.area !== 'admin';
    return '<div class="flex flex-col gap-3 ' + (site ? 'mb-6 md:mb-8' : 'mb-5 sm:flex-row sm:items-end sm:justify-between') + '">' +
      '<div class="min-w-0">' + (o.eyebrow || '') + '<h1 class="' + (site ? 'text-3xl' : 'text-2xl') + ' font-extrabold text-neutral-800 break-words">' + o.title + '</h1>' +
      (o.description ? '<p class="mt-1 text-' + (site ? 'base' : 'sm') + ' text-neutral-600">' + o.description + '</p>' : '') + '</div>' +
      (o.actions ? '<div class="flex flex-wrap items-center gap-2 shrink-0">' + o.actions + '</div>' : '') + '</div>';
  };
  /** UI.descriptionList(items [{ label, value(html), full }], cols 1|2) */
  UI.descriptionList = function (items, cols) {
    return '<dl class="grid grid-cols-1 ' + (cols === 1 ? '' : 'lg:grid-cols-2') + ' gap-x-6 gap-y-3">' + items.filter(Boolean).map(function (i) {
      return '<div class="min-w-0 ' + (i.full ? 'lg:col-span-2' : '') + '"><dt class="text-sm text-neutral-600">' + esc(i.label) + '</dt><dd class="text-base text-neutral-800 break-words">' + (i.value == null || i.value === '' ? '—' : i.value) + '</dd></div>';
    }).join('') + '</dl>';
  };
  /** UI.emptyState({ title, text, action(html), size: lg|sm, mood }) — linh vật Tiểu Bạch + câu chữ + nút gợi ý */
  UI.emptyState = function (o) {
    var lg = o.size !== 'sm';
    return '<div class="flex flex-col items-center text-center gap-3 ' + (lg ? 'py-12 px-4' : 'py-8 px-4') + '">' +
      '<div class="flex items-center justify-center rounded-full bg-primary-100 ' + (lg ? 'size-32' : 'size-20') + '">' + UI.mascot(lg ? 88 : 52, o.mood || 'sad') + '</div>' +
      '<p class="' + (lg ? 'text-xl' : 'text-base') + ' font-bold text-neutral-800 max-w-md">' + esc(o.title) + '</p>' +
      (o.text ? '<p class="text-sm text-neutral-600 max-w-md">' + esc(o.text) + '</p>' : '') + (o.action ? '<div class="mt-2 flex flex-wrap justify-center gap-2">' + o.action + '</div>' : '') + '</div>';
  };
  /** UI.skeleton(lines, cls) — các dòng chữ chờ tải */
  UI.skeleton = function (lines, cls) {
    var out = ''; for (var i = 0; i < (lines || 3); i++) out += '<div class="skeleton h-4 rounded-md ' + (i === lines - 1 ? 'w-2/3' : 'w-full') + '"></div>';
    return '<div class="flex flex-col gap-3 ' + (cls || '') + '" aria-hidden="true">' + out + '</div>';
  };
  UI.skeletonBlock = function (cls) { return '<div class="skeleton ' + (cls || 'h-24 rounded-lg') + '" aria-hidden="true"></div>'; };
  /** n thẻ sản phẩm Skeleton */
  UI.skeletonCards = function (n, gridCls) {
    var c = ''; for (var i = 0; i < n; i++) c += '<div class="rounded-xl bg-white border border-neutral-200 overflow-hidden"><div class="skeleton aspect-square"></div><div class="p-3 flex flex-col gap-2"><div class="skeleton h-3 w-1/3 rounded-sm"></div><div class="skeleton h-4 rounded-md"></div><div class="skeleton h-4 w-1/2 rounded-md"></div></div></div>';
    return '<div class="grid ' + (gridCls || 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4') + ' gap-4" aria-hidden="true">' + c + '</div>';
  };
  /** UI.alert({ tone: info|success|warning|danger, title, text, html, icon, actions, dismissible }) — nền 50, viền trái 4px sắc 500, chữ 700 */
  UI.alert = function (o) {
    var tone = o.tone || 'info';
    var map = { info: 'bg-info-50 border-info-500 text-info-700', success: 'bg-success-50 border-success-500 text-success-700', warning: 'bg-warning-50 border-warning-500 text-warning-700', danger: 'bg-danger-50 border-danger-500 text-danger-700' };
    var icons = { info: 'info', success: 'circle-check', warning: 'triangle-alert', danger: 'circle-alert' };
    return '<div role="' + (tone === 'danger' ? 'alert' : 'status') + '" class="flex gap-3 rounded-lg border-l-4 px-4 py-3 ' + map[tone] + ' ' + (o.cls || '') + '">' +
      ic(o.icon || icons[tone], 'mt-0.5') + '<div class="flex-1 min-w-0 text-sm">' + (o.title ? '<p class="font-bold">' + esc(o.title) + '</p>' : '') +
      (o.text ? '<p>' + esc(o.text) + '</p>' : '') + (o.html || '') + (o.actions ? '<div class="mt-2 flex flex-wrap gap-2">' + o.actions + '</div>' : '') + '</div>' +
      (o.dismissible ? '<button type="button" class="shrink-0 -m-1 p-1 rounded-md hover:bg-white" aria-label="Đóng thông báo" onclick="this.closest(\'[role]\').remove()">' + ic('x', 'size-4') + '</button>' : '') + '</div>';
  };

  /* ---------- Toast ---------- */
  function toastRoot() {
    var r = document.getElementById('ui-toasts');
    if (!r) { r = el('<div id="ui-toasts" class="fixed inset-x-4 bottom-24 md:bottom-auto md:top-4 md:left-auto md:right-4 md:w-96 flex flex-col gap-2 pointer-events-none" style="z-index:70"></div>'); document.body.appendChild(r); }
    return r;
  }
  /** UI.toast(message, tone: success|error|info|warning, { action: { label, onClick, href }, duration, sticky }) */
  UI.toast = function (message, tone, opts) {
    tone = tone || 'success'; opts = opts || {};
    var bar = { success: 'border-success-500', error: 'border-danger-500', danger: 'border-danger-500', info: 'border-info-500', warning: 'border-warning-500' }[tone] || 'border-info-500';
    var icn = { success: ic('circle-check', 'text-success-600'), error: ic('circle-alert', 'text-danger-600'), danger: ic('circle-alert', 'text-danger-600'), info: ic('info', 'text-info-600'), warning: ic('triangle-alert', 'text-warning-600') }[tone];
    var t = el('<div role="' + (tone === 'error' || tone === 'danger' ? 'alert' : 'status') + '" class="pointer-events-auto flex items-start gap-3 rounded-lg border-l-4 ' + bar + ' bg-white shadow-md px-4 py-3 text-sm text-neutral-800 anim-in">' +
      icn + '<p class="flex-1 min-w-0 font-semibold">' + esc(message) + '</p>' +
      (opts.action ? '<button type="button" data-toast-act class="shrink-0 font-bold text-primary-700 hover:underline">' + esc(opts.action.label) + '</button>' : '') +
      '<button type="button" data-toast-close class="shrink-0 text-neutral-500 hover:text-neutral-800" aria-label="Đóng">' + ic('x', 'size-4') + '</button></div>');
    toastRoot().appendChild(t);
    var timer, dur = opts.duration || (tone === 'error' || tone === 'danger' ? 6000 : 4000);
    function close() { clearTimeout(timer); t.remove(); }
    function arm() { if (!opts.sticky) timer = setTimeout(close, dur); }
    t.addEventListener('mouseenter', function () { clearTimeout(timer); });
    t.addEventListener('mouseleave', arm);
    t.querySelector('[data-toast-close]').onclick = close;
    var act = t.querySelector('[data-toast-act]');
    if (act) act.onclick = function () { close(); if (opts.action.href) location.href = opts.action.href; else if (opts.action.onClick) opts.action.onClick(); };
    arm();
    return { close: close, el: t };
  };

  /* ---------- Lớp phủ: Modal / Drawer / Confirm ---------- */
  var locks = 0;
  function lock(on) { locks += on ? 1 : -1; if (locks < 0) locks = 0; document.documentElement.style.overflow = locks ? 'hidden' : ''; }
  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"]),[contenteditable=true]';
  function overlay(kind, o) {
    o = o || {};
    var prev = document.activeElement;
    var id = UI.uid('dlg');
    var dismissible = o.dismissible !== false;
    var panelCls, wrapCls;
    if (kind === 'modal') {
      var sz = { sm: 'sm:max-w-sm', md: 'sm:max-w-xl', lg: 'sm:max-w-3xl' }[o.size || 'md'];
      wrapCls = 'items-end sm:items-center justify-center sm:p-4';
      panelCls = 'w-full ' + sz + ' rounded-t-xl sm:rounded-xl anim-scale';
    } else if (o.side === 'left') {
      wrapCls = 'justify-start'; panelCls = 'h-full w-5/6 max-w-sm rounded-r-xl anim-left';
    } else if (o.side === 'bottom') {
      wrapCls = 'items-end'; panelCls = 'w-full rounded-t-xl anim-up';
    } else {
      wrapCls = 'justify-end'; panelCls = 'h-full w-full ' + (o.size === 'lg' ? 'sm:max-w-2xl' : 'sm:max-w-lg') + ' anim-right';
    }
    var wrap = el('<div class="fixed inset-0 z-50 flex ' + wrapCls + '">' +
      '<div class="absolute inset-0 bg-neutral-900/40 anim-fade" data-backdrop></div>' +
      '<div role="dialog" aria-modal="true" aria-labelledby="' + id + '" class="relative flex flex-col bg-white shadow-lg overflow-hidden ' + panelCls + '" style="' + (kind === 'modal' || o.side === 'bottom' ? 'max-height:90dvh' : '') + '">' +
      (o.side === 'bottom' || kind === 'modal' ? '<div class="sm:hidden flex justify-center pt-2"><span class="h-1.5 w-10 rounded-full bg-neutral-300"></span></div>' : '') +
      '<div class="flex items-start justify-between gap-3 px-5 pt-4 pb-3 border-b border-neutral-100"><h2 id="' + id + '" class="text-xl font-bold text-neutral-800">' + (o.title || '') + '</h2>' +
      (dismissible ? '<button type="button" data-close class="-mr-2 inline-flex size-10 items-center justify-center rounded-full text-neutral-600 hover:bg-neutral-100" aria-label="Đóng">' + ic('x') + '</button>' : '') + '</div>' +
      '<div data-body class="flex-1 overflow-y-auto px-5 py-4"></div>' +
      (o.actions && o.actions.length ? '<div data-foot class="px-5 py-4 border-t border-neutral-100 flex flex-col-reverse sm:flex-row sm:justify-end gap-2 safe-bottom"></div>' : '') +
      '</div></div>');
    var panel = wrap.querySelector('[role=dialog]'), body = wrap.querySelector('[data-body]'), foot = wrap.querySelector('[data-foot]');
    if (typeof o.body === 'string') body.innerHTML = o.body; else if (o.body) body.appendChild(o.body);
    var api = { el: panel, body: body, wrap: wrap, closed: false };
    api.close = function (val) {
      if (api.closed) return; api.closed = true; wrap.remove(); lock(false); document.removeEventListener('keydown', onKey, true);
      if (prev && prev.focus) try { prev.focus(); } catch (e) {}
      if (o.onClose) o.onClose(val);
    };
    (o.actions || []).forEach(function (a, i) {
      var b = el(UI.button({ label: a.label, variant: a.variant || (i === o.actions.length - 1 ? 'primary' : 'ghost'), icon: a.icon, full: true, cls: 'sm:w-auto', attrs: a.attrs }));
      b.onclick = function () { var r = a.onClick ? a.onClick(api, b) : undefined; if (r !== false && a.close !== false) api.close(a.value); };
      foot.appendChild(b);
    });
    function onKey(e) {
      if (!document.body.contains(wrap)) return;
      var tops = document.querySelectorAll('[aria-modal=true]'); if (tops[tops.length - 1] !== panel) return;
      if (e.key === 'Escape' && dismissible) { e.preventDefault(); api.close(); }
      if (e.key === 'Tab') {
        var f = Array.prototype.filter.call(panel.querySelectorAll(FOCUSABLE), function (x) { return x.offsetParent !== null; });
        if (!f.length) return; var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', onKey, true);
    wrap.querySelector('[data-backdrop]').onclick = function () { if (dismissible) api.close(); };
    var cb = wrap.querySelector('[data-close]'); if (cb) cb.onclick = function () { api.close(); };
    document.body.appendChild(wrap); lock(true);
    setTimeout(function () { var f = panel.querySelector('[autofocus]') || body.querySelector(FOCUSABLE) || panel.querySelector(FOCUSABLE); if (f) f.focus(); }, 30);
    if (o.onOpen) o.onOpen(api);
    return api;
  }
  /** UI.modal({ title, body (html | Node), actions: [{ label, variant, icon, onClick(api, btn) → false để giữ mở }], size: sm|md|lg, dismissible, onClose }) — mobile thành bottom sheet */
  UI.modal = function (o) { return overlay('modal', o); };
  /** UI.drawer({ title, body, actions, side: right|left|bottom, size: md|lg }) */
  UI.drawer = function (o) { return overlay('drawer', o); };
  /** UI.confirm({ title, message, confirmLabel, cancelLabel, danger, reason: { label, required, options[], errorMsg, placeholder, otherOnly }, extraHtml, validate(body) → thông báo lỗi | true })
   *  → Promise<false | { note, reason, body }> */
  UI.confirm = function (o) {
    return new Promise(function (resolve) {
      var done = false, rid = UI.uid('rs');
      var r = o.reason;
      var html = (o.message ? '<p class="text-base text-neutral-700">' + o.message + '</p>' : '') + (o.extraHtml || '');
      if (r) {
        html += '<div class="mt-4 flex flex-col gap-3" data-reason>';
        if (r.options) html += '<fieldset><legend class="text-sm font-bold text-neutral-800 mb-2">' + esc(r.label || 'Lý do') + (r.required ? ' <span class="text-danger-600">*</span>' : '') + '</legend><div class="flex flex-col gap-2">' +
          r.options.map(function (op) { return '<label class="flex items-center gap-3 min-h-11 px-3 rounded-lg border border-neutral-200 hover:border-primary-300 cursor-pointer"><input type="radio" name="' + rid + '" value="' + esc(op) + '" class="size-5 accent-primary-500"><span class="text-base">' + esc(op) + '</span></label>'; }).join('') + '</div></fieldset>';
        html += '<div class="flex flex-col gap-1.5"><label for="' + rid + '-t" class="text-sm font-bold text-neutral-800">' + esc(r.noteLabel || (r.options ? 'Ghi chú thêm' : (r.label || 'Lý do'))) + (!r.options && r.required ? ' <span class="text-danger-600">*</span>' : '') + '</label>' +
          '<textarea id="' + rid + '-t" rows="3" maxlength="' + (r.max || 255) + '" placeholder="' + esc(r.placeholder || '') + '" class="' + INPUT_BASE + ' h-auto py-2.5"></textarea></div>' +
          '<p data-reason-err class="hidden text-xs font-bold text-danger-700"></p></div>';
      }
      var m = UI.modal({
        title: o.title, body: html, size: 'sm', onClose: function () { if (!done) resolve(false); },
        actions: [
          { label: o.cancelLabel || 'Hủy', variant: 'ghost' },
          {
            label: o.confirmLabel || 'Xác nhận', variant: o.danger ? 'danger' : 'primary', onClick: function (api) {
              var note = '', reason = '';
              if (r) {
                var picked = api.body.querySelector('input[name="' + rid + '"]:checked');
                reason = picked ? picked.value : '';
                note = api.body.querySelector('#' + rid + '-t').value.trim();
                var err = api.body.querySelector('[data-reason-err]');
                var miss = r.required && (r.options ? (!reason || (/^Khác/.test(reason) && !note)) : !note);
                if (miss) { err.innerHTML = ic('triangle-alert', 'size-3.5 inline') + ' ' + esc(r.errorMsg || 'Vui lòng nhập lý do'); err.classList.remove('hidden'); return false; }
              }
              if (o.validate) { var v = o.validate(api.body); if (v !== true && v) { UI.toast(v, 'error'); return false; } }
              done = true; resolve({ note: [reason, note].filter(Boolean).join(' — '), reason: reason, text: note, body: api.body });
            }
          }
        ]
      });
    });
  };

  /* ---------- Tooltip, Dropdown ---------- */
  var tip;
  function showTip(target, text) {
    hideTip(); if (!text) return;
    tip = el('<div role="tooltip" class="fixed max-w-xs rounded-md bg-neutral-800 px-2.5 py-1.5 text-xs font-semibold text-white shadow-md pointer-events-none anim-fade" style="z-index:80"></div>');
    tip.textContent = text; document.body.appendChild(tip);
    var r = target.getBoundingClientRect(), tr = tip.getBoundingClientRect();
    var top = r.top - tr.height - 8; if (top < 4) top = r.bottom + 8;
    var left = Math.max(4, Math.min(window.innerWidth - tr.width - 4, r.left + r.width / 2 - tr.width / 2));
    tip.style.top = top + 'px'; tip.style.left = left + 'px';
  }
  function hideTip() { if (tip) { tip.remove(); tip = null; } }
  /** UI.tooltip(el, text) — gắn tooltip cho phần tử (hoặc dùng thuộc tính data-tooltip) */
  UI.tooltip = function (node, text) { node.setAttribute('data-tooltip', text); };
  document.addEventListener('mouseover', function (e) { var t = e.target.closest && e.target.closest('[data-tooltip]'); if (t) showTip(t, t.getAttribute('data-tooltip')); });
  document.addEventListener('mouseout', function (e) { var t = e.target.closest && e.target.closest('[data-tooltip]'); if (t && !t.contains(e.relatedTarget)) hideTip(); });
  document.addEventListener('focusin', function (e) { var t = e.target.closest && e.target.closest('[data-tooltip]'); if (t) showTip(t, t.getAttribute('data-tooltip')); });
  document.addEventListener('focusout', hideTip);
  document.addEventListener('scroll', hideTip, true);

  var openMenu = null;
  /** UI.dropdown(anchorEl, items [{ label, icon, onClick, href, danger, disabled, tooltip, permission, divider }], { align }) — DropdownMenu */
  UI.dropdown = function (anchor, items, opts) {
    if (openMenu) { var same = openMenu.anchor === anchor; openMenu.close(); if (same) return; }
    opts = opts || {};
    var menu = el('<div role="menu" class="fixed min-w-52 max-w-xs rounded-lg border border-neutral-200 bg-white p-1 shadow-md anim-scale" style="z-index:60"></div>');
    items.filter(Boolean).forEach(function (it) {
      if (it.divider) { menu.appendChild(el('<div class="my-1 h-px bg-neutral-100" role="separator"></div>')); return; }
      var cls = 'flex w-full items-center gap-2.5 rounded-md px-3 min-h-10 text-left text-sm font-semibold ' + (it.danger ? 'text-danger-700 hover:bg-danger-50' : 'text-neutral-800 hover:bg-primary-50') + ' disabled:opacity-50 disabled:cursor-not-allowed';
      var inner = (it.icon ? ic(it.icon, 'size-4') : '') + '<span class="flex-1">' + esc(it.label) + '</span>';
      var node = it.href ? el('<a role="menuitem" href="' + esc(it.href) + '" class="' + cls + '" ' + (it.target ? 'target="' + it.target + '"' : '') + '>' + inner + '</a>')
        : el('<button type="button" role="menuitem" class="' + cls + '" ' + (it.disabled ? 'disabled' : '') + '>' + inner + '</button>');
      if (it.permission) node.setAttribute('data-permission', it.permission);
      if (it.tooltip) node.setAttribute('data-tooltip', it.tooltip);
      if (!it.href) node.onclick = function () { close(); if (it.onClick) it.onClick(); };
      menu.appendChild(node);
    });
    document.body.appendChild(menu);
    var r = anchor.getBoundingClientRect(), mr = menu.getBoundingClientRect();
    var top = r.bottom + 6; if (top + mr.height > window.innerHeight - 8) top = Math.max(8, r.top - mr.height - 6);
    var left = opts.align === 'left' ? r.left : r.right - mr.width; left = Math.max(8, Math.min(left, window.innerWidth - mr.width - 8));
    menu.style.top = top + 'px'; menu.style.left = left + 'px';
    anchor.setAttribute('aria-expanded', 'true');
    function onDoc(e) { if (!menu.contains(e.target) && !anchor.contains(e.target)) close(); }
    function onKey(e) { if (e.key === 'Escape') { close(); anchor.focus(); } }
    function close() { menu.remove(); anchor.setAttribute('aria-expanded', 'false'); document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); window.removeEventListener('resize', close); openMenu = null; }
    setTimeout(function () { document.addEventListener('mousedown', onDoc); document.addEventListener('keydown', onKey); window.addEventListener('resize', close); }, 0);
    var first = menu.querySelector('[role=menuitem]:not([disabled])'); if (first) first.focus();
    openMenu = { close: close, anchor: anchor };
    return openMenu;
  };

  /** UI.noPermission({ allowed, current, loginHref, homeHref }) — trang "Không có quyền truy cập" (9.15) */
  UI.noPermission = function (o) {
    o = o || {};
    return '<div class="max-w-xl mx-auto py-10">' + UI.emptyState({
      title: 'Không có quyền truy cập', mood: 'sad',
      text: 'Trang này chỉ dành cho ' + (o.allowed || 'vai trò khác') + '. Vui lòng đăng nhập đúng tài khoản.' + (o.current ? ' (Bạn đang xem với vai trò: ' + o.current + ')' : ''),
      action: UI.button({ label: 'Về trang chủ', variant: 'outline', href: o.homeHref || 'index.html', icon: 'house' }) + UI.button({ label: 'Đăng nhập', href: o.loginHref || '#', icon: 'log-in' })
    }) + '</div>';
  };

  /* ---------- Form ---------- */
  var INPUT_BASE = 'w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3.5 text-base text-neutral-800 placeholder:text-neutral-500 transition hover:border-neutral-400 focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-200 disabled:bg-neutral-100 disabled:cursor-not-allowed read-only:bg-neutral-50 read-only:border-neutral-200 read-only:focus:ring-0';
  var INPUT = INPUT_BASE + ' h-control';
  UI.INPUT = INPUT;
  /** UI.field({ name, label, type: text|email|tel|password|number|money|textarea|select|search-select|multi-select|date|date-range|checkbox|radio|radio-cards|switch|file,
   *   options [{ value, label, desc, icon, disabled }], required, optional, placeholder, hint, value, disabled, readonly, suffix, icon, maxlength, rows, cols, attrs, cls, id, upper }) → HTML */
  UI.field = function (o) {
    var id = o.id || UI.uid('f-' + o.name);
    var type = o.type || 'text';
    var req = o.required ? '<span class="text-danger-600" aria-hidden="true"> *</span>' : (o.optional ? '<span class="font-normal text-neutral-600"> (không bắt buộc)</span>' : '');
    var hint = o.hint ? '<p class="text-xs text-neutral-600" id="' + id + '-hint">' + o.hint + '</p>' : '';
    var err = '<p class="hidden items-center gap-1 text-xs font-bold text-danger-700" id="' + id + '-err" data-err></p>';
    var common = { id: id, name: o.name, disabled: o.disabled, readonly: o.readonly, required: o.required, placeholder: o.placeholder, maxlength: o.maxlength, 'aria-describedby': o.hint ? id + '-hint' : null };
    var extra = o.attrs || {};
    Object.keys(extra).forEach(function (k) { common[k] = extra[k]; });
    var ctrl = '';
    var label = o.label ? '<label for="' + id + '" class="text-sm font-bold text-neutral-800">' + esc(o.label) + req + '</label>' : '';
    if (type === 'checkbox') {
      return '<div class="flex flex-col gap-1 ' + (o.cls || '') + '" data-field="' + esc(o.name) + '"><label class="inline-flex items-start gap-3 cursor-pointer py-2.5 min-h-11"><input type="checkbox" ' + attrs(common) + ' ' + (o.value ? 'checked' : '') + ' class="mt-0.5 size-5 shrink-0 rounded-sm accent-primary-500 cursor-pointer">' +
        '<span class="text-base text-neutral-800">' + (o.labelHtml || esc(o.label)) + req + '</span></label>' + hint + err + '</div>';
    }
    if (type === 'switch') {
      var on = o.value !== false && o.value != null && o.value !== '' ? !!o.value : false;
      return '<div class="flex items-center justify-between gap-3 min-h-11 ' + (o.cls || '') + '" data-field="' + esc(o.name) + '"><span class="text-sm font-bold text-neutral-800" id="' + id + '-l">' + esc(o.label) + '</span>' +
        UI.switch({ name: o.name, checked: on, disabled: o.disabled, labelledby: id + '-l', attrs: o.attrs }) + '</div>';
    }
    switch (type) {
      case 'textarea':
        ctrl = '<textarea ' + attrs(common) + ' rows="' + (o.rows || 4) + '" class="' + INPUT_BASE + ' py-2.5" ' + (o.maxlength ? 'data-counter' : '') + '>' + esc(o.value || '') + '</textarea>' +
          (o.maxlength ? '<p class="text-xs text-neutral-600 text-right -mt-1" data-counter-for="' + id + '">' + String(o.value || '').length + '/' + o.maxlength + '</p>' : '');
        break;
      case 'select': case 'search-select':
        ctrl = '<div class="relative"><select ' + attrs(common) + ' class="' + INPUT + ' appearance-none pr-10 cursor-pointer">' +
          (o.placeholder ? '<option value="">' + esc(o.placeholder) + '</option>' : '') +
          (o.options || []).map(function (op) { op = typeof op === 'object' ? op : { value: op, label: op }; return '<option value="' + esc(op.value) + '" ' + (String(op.value) === String(o.value) ? 'selected' : '') + ' ' + (op.disabled ? 'disabled' : '') + '>' + esc(op.label) + '</option>'; }).join('') +
          '</select>' + ic('chevron-down', 'absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none') + '</div>';
        break;
      case 'multi-select':
        var vals = o.value || [];
        ctrl = '<div role="group" aria-labelledby="' + id + '-lg" class="flex flex-wrap gap-2" id="' + id + '">' + (o.options || []).map(function (op) {
          op = typeof op === 'object' ? op : { value: op, label: op };
          return '<label class="relative cursor-pointer"><input type="checkbox" data-multi name="' + esc(o.name) + '" value="' + esc(op.value) + '" ' + (vals.indexOf(op.value) >= 0 ? 'checked' : '') + ' ' + (o.disabled ? 'disabled' : '') + ' class="peer sr-only">' +
            '<span class="inline-flex items-center gap-1.5 h-10 px-4 rounded-full border-2 border-neutral-200 bg-white text-sm font-bold text-neutral-700 transition hover:border-primary-300 peer-checked:border-primary-500 peer-checked:bg-primary-100 peer-checked:text-primary-700 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-600">' + esc(op.label) + '</span></label>';
        }).join('') + '</div>';
        label = o.label ? '<span id="' + id + '-lg" class="text-sm font-bold text-neutral-800">' + esc(o.label) + req + '</span>' : '';
        break;
      case 'radio':
        ctrl = '<div role="radiogroup" aria-labelledby="' + id + '-lg" class="flex flex-wrap gap-x-5 gap-y-1" id="' + id + '">' + (o.options || []).map(function (op) {
          op = typeof op === 'object' ? op : { value: op, label: op };
          return '<label class="inline-flex items-center gap-2.5 min-h-11 cursor-pointer"><input type="radio" name="' + esc(o.name) + '" value="' + esc(op.value) + '" ' + (String(op.value) === String(o.value) ? 'checked' : '') + ' ' + (op.disabled || o.disabled ? 'disabled' : '') + ' class="size-5 accent-primary-500"><span class="text-base">' + esc(op.label) + '</span></label>';
        }).join('') + '</div>';
        label = o.label ? '<span id="' + id + '-lg" class="text-sm font-bold text-neutral-800">' + esc(o.label) + req + '</span>' : '';
        break;
      case 'radio-cards':
        ctrl = '<div role="radiogroup" aria-labelledby="' + id + '-lg" id="' + id + '" class="grid gap-3 ' + (o.cols === 3 ? 'sm:grid-cols-3' : o.cols === 1 ? '' : 'sm:grid-cols-2') + '">' + (o.options || []).map(function (op) {
          return '<label class="relative block cursor-pointer"><input type="radio" name="' + esc(o.name) + '" value="' + esc(op.value) + '" ' + (String(op.value) === String(o.value) ? 'checked' : '') + ' ' + (op.disabled || o.disabled ? 'disabled' : '') + ' class="peer sr-only">' +
            '<span class="flex h-full gap-3 rounded-lg border-2 border-neutral-200 bg-white p-4 pr-10 transition hover:border-primary-300 peer-checked:border-primary-500 peer-checked:bg-primary-50 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-600 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed">' +
            (op.icon ? '<span class="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">' + ic(op.icon) + '</span>' : '') +
            '<span class="flex flex-col gap-0.5 min-w-0"><span class="text-base font-bold text-neutral-800">' + esc(op.label) + '</span>' + (op.desc ? '<span class="text-sm text-neutral-600">' + op.desc + '</span>' : '') + '</span></span>' +
            '<span class="absolute right-3 top-3 hidden size-6 items-center justify-center rounded-full bg-primary-500 text-neutral-800 peer-checked:flex">' + ic('check', 'size-4') + '</span></label>';
        }).join('') + '</div>';
        label = o.label ? '<span id="' + id + '-lg" class="text-sm font-bold text-neutral-800">' + esc(o.label) + req + '</span>' : '';
        break;
      case 'password':
        ctrl = '<div class="relative"><input type="password" ' + attrs(common) + ' value="' + esc(o.value || '') + '" autocomplete="' + (o.autocomplete || 'current-password') + '" class="' + INPUT + ' pr-12">' +
          '<button type="button" data-pw-toggle class="absolute right-1 top-1/2 -translate-y-1/2 inline-flex size-10 items-center justify-center rounded-full text-neutral-600 hover:bg-neutral-100" aria-label="Hiện mật khẩu">' + ic('eye') + '</button></div>';
        break;
      case 'file':
        return UI.fileUpload(o);
      case 'date-range':
        ctrl = '<div class="flex items-center gap-2"><input type="date" name="' + esc(o.name) + '_tu" id="' + id + '" value="' + esc((o.value || [])[0] || '') + '" class="' + INPUT + '" aria-label="Từ ngày"><span class="text-neutral-500">–</span><input type="date" name="' + esc(o.name) + '_den" value="' + esc((o.value || [])[1] || '') + '" class="' + INPUT + '" aria-label="Đến ngày"></div>';
        break;
      default:
        var t = type === 'money' ? 'text' : type;
        if (type === 'money') { common['data-money'] = true; common.inputmode = 'numeric'; }
        if (type === 'number') common.inputmode = 'numeric';
        if (type === 'tel') common.inputmode = 'tel';
        if (o.upper) common['data-upper'] = true;
        if (o.autocomplete) common.autocomplete = o.autocomplete;
        var v = type === 'money' && o.value !== '' && o.value != null ? UI.fmt.number(o.value) : (o.value == null ? '' : o.value);
        var hasIcon = !!o.icon, suffix = o.suffix || (type === 'money' ? 'đ' : '');
        ctrl = '<div class="relative">' + (hasIcon ? ic(o.icon, 'absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none') : '') +
          '<input type="' + t + '" ' + attrs(common) + ' value="' + esc(v) + '" class="' + INPUT + ' ' + (hasIcon ? 'pl-11' : '') + ' ' + (suffix ? 'pr-14' : '') + ' ' + (o.inputCls || '') + '">' +
          (suffix ? '<span class="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-neutral-600 pointer-events-none">' + esc(suffix) + '</span>' : '') + '</div>';
    }
    return '<div class="flex flex-col gap-1.5 min-w-0 ' + (o.cls || '') + '" data-field="' + esc(o.name) + '">' + label + ctrl + hint + err + '</div>';
  };
  /** UI.switch({ name, checked, disabled, label (aria), attrs }) — Switch bật / tắt (role=switch, có input ẩn mang giá trị) */
  UI.switch = function (o) {
    return '<button type="button" role="switch" aria-checked="' + (o.checked ? 'true' : 'false') + '" ' + (o.labelledby ? 'aria-labelledby="' + o.labelledby + '"' : 'aria-label="' + esc(o.label || 'Bật / tắt') + '"') + ' ' + (o.disabled ? 'disabled' : '') + ' data-switch ' + attrs(o.attrs) +
      ' class="group relative inline-flex h-7 w-12 shrink-0 items-center rounded-full bg-neutral-300 transition aria-checked:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2">' +
      '<span class="ml-1 size-5 rounded-full bg-white shadow-sm transition group-aria-checked:translate-x-5"></span>' +
      (o.name ? '<input type="hidden" name="' + esc(o.name) + '" value="' + (o.checked ? '1' : '') + '">' : '') + '</button>';
  };
  /** UI.fieldGroup({ title, description, fields: [html], columns: 1|2 }) */
  UI.fieldGroup = function (o) {
    return '<fieldset class="min-w-0 ' + (o.cls || '') + '">' + (o.title ? '<legend class="text-lg font-bold text-neutral-800 mb-1">' + esc(o.title) + '</legend>' : '') +
      (o.description ? '<p class="text-sm text-neutral-600 mb-3">' + o.description + '</p>' : '<div class="mb-3"></div>') +
      '<div class="grid gap-4 ' + (o.columns === 2 ? 'lg:grid-cols-2' : '') + '">' + (o.fields || []).join('') + '</div></fieldset>';
  };
  /** UI.formData(formEl) → object (checkbox → bool, multi-select → [], money → số, FileUpload → [], RichTextEditor → html) */
  UI.formData = function (form) {
    var d = {};
    form.querySelectorAll('[name]').forEach(function (x) {
      var n = x.name; if (!n || x.tagName === 'BUTTON') return;
      if (x.type === 'radio') { if (x.checked) d[n] = x.value; else if (!(n in d)) d[n] = ''; return; }
      if (x.type === 'checkbox') { if (x.hasAttribute('data-multi')) { d[n] = d[n] || []; if (x.checked) d[n].push(x.value); } else d[n] = x.checked; return; }
      if (x.type === 'file') return;
      if (x.hasAttribute('data-money')) { d[n] = x.value === '' ? '' : UI.parseMoney(x.value); return; }
      d[n] = typeof x.value === 'string' ? x.value.trim() : x.value;
    });
    form.querySelectorAll('[data-upload]').forEach(function (u) { d[u.getAttribute('data-upload')] = uploadFiles(u); });
    form.querySelectorAll('[data-rte]').forEach(function (r) { d[r.getAttribute('data-rte')] = r.innerHTML.trim(); });
    return d;
  };
  function fieldWrap(form, name) { return form.querySelector('[data-field="' + name + '"]'); }
  function ctrlOf(wrap) { return wrap && (wrap.querySelector('input:not([type=hidden]):not(.sr-only),select,textarea,[data-rte],[data-upload] [data-drop]') || wrap.querySelector('input')); }
  /** UI.setError(form, name, message | '') — hiện / xóa lỗi dưới trường (viền danger, icon ⚠, aria-describedby) */
  UI.setError = function (form, name, msg) {
    var w = fieldWrap(form, name); if (!w) { if (msg) UI.toast(msg, 'error'); return; }
    var e = w.querySelector('[data-err]'), c = ctrlOf(w);
    if (msg) {
      e.innerHTML = ic('triangle-alert', 'size-3.5') + '<span>' + esc(msg) + '</span>'; e.classList.remove('hidden'); e.classList.add('flex');
      if (c) { c.classList.add('border-danger-600'); c.setAttribute('aria-invalid', 'true'); c.setAttribute('aria-describedby', e.id); }
    } else {
      e.classList.add('hidden'); e.classList.remove('flex'); e.innerHTML = '';
      if (c) { c.classList.remove('border-danger-600'); c.removeAttribute('aria-invalid'); }
    }
  };
  /** Quy tắc kiểm tra dùng với UI.validate */
  UI.rules = {
    required: function (msg) { return { test: function (v) { return Array.isArray(v) ? v.length > 0 : (v !== '' && v !== false && v != null); }, msg: msg }; },
    phone: function (msg) { return { test: function (v) { return !v || /^0\d{9}$/.test(String(v).replace(/\s/g, '')); }, msg: msg || 'Số điện thoại không hợp lệ' }; },
    email: function (msg) { return { test: function (v) { return !v || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }, msg: msg || 'Email không hợp lệ' }; },
    len: function (min, max, msg) { return { test: function (v) { var l = String(v || '').length; return !v || (l >= min && l <= max); }, msg: msg }; },
    min: function (n, msg) { return { test: function (v) { return v === '' || Number(v) >= n; }, msg: msg }; },
    match: function (field, msg) { return { test: function (v, d) { return v === d[field]; }, msg: msg }; },
    custom: function (fn, msg) { return { test: fn, msg: msg }; }
  };
  /** UI.validate(formEl, rules { name: [rule…] }) → true/false; hiện lỗi dưới trường, cuộn + focus trường lỗi đầu, tóm tắt khi > 2 lỗi (9.18) */
  UI.validate = function (form, rules, only) {
    var d = UI.formData(form), bad = [];
    Object.keys(rules).forEach(function (name) {
      if (only && only !== name) return;
      var list = rules[name], msg = '';
      for (var i = 0; i < list.length; i++) { var r = list[i]; if (!r) continue; var m = typeof r.msg === 'function' ? r.msg(d[name], d) : r.msg; if (!r.test(d[name], d)) { msg = m; break; } }
      UI.setError(form, name, msg); if (msg) bad.push(name);
    });
    if (only) return !bad.length;
    var sum = form.querySelector('[data-form-summary]');
    if (sum) sum.innerHTML = bad.length > 2 ? UI.alert({ tone: 'danger', text: 'Vui lòng kiểm tra lại ' + bad.length + ' thông tin được đánh dấu' }) : '';
    if (bad.length) {
      var w = fieldWrap(form, bad[0]); var c = ctrlOf(w);
      if (w) w.scrollIntoView({ behavior: UI.reducedMotion() ? 'auto' : 'smooth', block: 'center' });
      if (c && c.focus) setTimeout(function () { try { c.focus({ preventScroll: true }); } catch (e) {} }, 50);
    }
    return !bad.length;
  };
  /** Kiểm tra khi rời trường (blur) */
  UI.validate.live = function (form, rules) {
    form.addEventListener('focusout', function (e) { var w = e.target.closest('[data-field]'); if (w && rules[w.getAttribute('data-field')]) UI.validate(form, rules, w.getAttribute('data-field')); });
  };

  /* ---------- FileUpload ---------- */
  /** UI.fileUpload({ name, label, kind: image|video|file, accept, multiple, max, maxMB, required, optional, hint, sizeMsg, existing: [url] }) */
  UI.fileUpload = function (o) {
    var id = o.id || UI.uid('up');
    var kind = o.kind || 'image';
    var accept = o.accept || (kind === 'video' ? 'video/mp4,video/quicktime' : kind === 'image' ? 'image/jpeg,image/png,image/webp' : 'image/jpeg,image/png,application/pdf');
    var req = o.required ? '<span class="text-danger-600"> *</span>' : (o.optional ? '<span class="font-normal text-neutral-600"> (không bắt buộc)</span>' : '');
    var existing = (o.existing || []).map(function (u) { return { name: 'Ảnh hiện có', url: u, type: 'image', existing: true }; });
    return '<div class="flex flex-col gap-1.5 min-w-0 ' + (o.cls || '') + '" data-field="' + esc(o.name) + '">' +
      (o.label ? '<span class="text-sm font-bold text-neutral-800" id="' + id + '-l">' + esc(o.label) + req + '</span>' : '') +
      '<div data-upload="' + esc(o.name) + '" data-kind="' + kind + '" data-max="' + (o.max || (o.multiple ? 5 : 1)) + '" data-maxmb="' + (o.maxMB || 5) + '" data-size-msg="' + esc(o.sizeMsg || 'Tệp quá lớn') + "\" data-existing='" + esc(JSON.stringify(existing)) + "'>" +
      '<label data-drop tabindex="0" class="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-neutral-300 bg-white px-4 py-6 text-center cursor-pointer transition hover:border-primary-300 hover:bg-primary-50 focus-within:ring-2 focus-within:ring-primary-600">' +
      '<span class="inline-flex size-11 items-center justify-center rounded-full bg-primary-100 text-primary-700">' + ic(kind === 'video' ? 'upload' : 'image') + '</span>' +
      '<span class="text-sm font-bold text-neutral-800">' + (kind === 'video' ? 'Chọn video hoặc kéo thả vào đây' : 'Chọn tệp hoặc kéo thả vào đây') + '</span>' +
      '<span class="text-xs text-neutral-600">' + esc(o.hint || '') + '</span>' +
      '<input type="file" class="sr-only" accept="' + accept + '" ' + (o.multiple ? 'multiple' : '') + ' aria-labelledby="' + id + '-l"></label>' +
      '<div data-previews class="mt-3 grid grid-cols-3 sm:grid-cols-5 gap-2 empty:hidden">' + existing.map(previewHtml).join('') + '</div></div>' +
      '<p class="hidden items-center gap-1 text-xs font-bold text-danger-700" id="' + id + '-err" data-err></p></div>';
  };
  function previewHtml(f, i) {
    var media = f.type === 'video' ? '<div class="flex h-full w-full flex-col items-center justify-center gap-1 bg-neutral-800 text-white">' + ic('upload') + '<span class="px-1 text-xs truncate max-w-full">' + esc(f.name) + '</span></div>'
      : f.type === 'pdf' ? '<div class="flex h-full w-full flex-col items-center justify-center gap-1 bg-neutral-100 text-neutral-700">' + ic('file-text') + '<span class="px-1 text-xs truncate max-w-full">' + esc(f.name) + '</span></div>'
        : '<img src="' + esc(f.url) + '" alt="' + esc(f.name) + '" class="h-full w-full object-cover" onerror="UI.imgFallback(this)">';
    return '<div class="relative aspect-square overflow-hidden rounded-md border border-neutral-200 bg-neutral-50" data-i="' + i + '">' + media +
      (f.progress != null && f.progress < 100 ? '<div class="absolute inset-x-1 bottom-1 h-1.5 rounded-full bg-neutral-200"><div class="h-full rounded-full bg-primary-500" style="width:' + f.progress + '%"></div></div>' : '') +
      '<button type="button" data-up-remove="' + i + '" class="absolute right-1 top-1 inline-flex size-7 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm hover:text-danger-700" aria-label="Xóa tệp">' + ic('x', 'size-4') + '</button></div>';
  }
  function uploadFiles(u) { if (!u._files) { try { u._files = JSON.parse(u.getAttribute('data-existing') || '[]'); } catch (e) { u._files = []; } } return u._files; }
  function renderUploads(u) { u.querySelector('[data-previews]').innerHTML = uploadFiles(u).map(previewHtml).join(''); }
  function addFiles(u, list) {
    var files = uploadFiles(u), max = +u.getAttribute('data-max'), mb = +u.getAttribute('data-maxmb'), kind = u.getAttribute('data-kind');
    var wrap = u.closest('[data-field]'), form = u.closest('form') || document.body, name = u.getAttribute('data-upload');
    var errMsg = '';
    Array.prototype.forEach.call(list, function (f) {
      var isVid = /^video\//.test(f.type), isPdf = f.type === 'application/pdf', isImg = /^image\//.test(f.type);
      var okType = kind === 'video' ? isVid : kind === 'image' ? isImg : (isImg || isPdf);
      if (!okType || f.size > mb * 1048576) { errMsg = u.getAttribute('data-size-msg'); return; }
      if (files.length >= max) { if (max === 1) files.length = 0; else { errMsg = u.getAttribute('data-size-msg'); return; } }
      var entry = { name: f.name, size: f.size, url: URL.createObjectURL(f), type: isVid ? 'video' : isPdf ? 'pdf' : 'image' };
      if (isVid) { entry.progress = 0; }
      files.push(entry);
      if (isVid) {
        var t = setInterval(function () { entry.progress = Math.min(100, entry.progress + 10); renderUploads(u); if (entry.progress >= 100) { clearInterval(t); u.dispatchEvent(new CustomEvent('uploaddone', { bubbles: true })); } }, 200);
      }
    });
    renderUploads(u);
    if (wrap) UI.setError(form, name, errMsg);
    u.dispatchEvent(new CustomEvent('uploadchange', { bubbles: true, detail: { files: files } }));
  }
  UI.uploadFiles = uploadFiles;

  /* ---------- RichTextEditor ---------- */
  /** UI.richTextEditor({ name, label, value(html), placeholder, required }) — thanh công cụ H2, H3, đậm, nghiêng, danh sách, liên kết, ảnh, trích dẫn */
  UI.richTextEditor = function (o) {
    var tools = [['formatBlock:h2', 'H2', null], ['formatBlock:h3', 'H3', null], ['bold', 'Đậm', 'B'], ['italic', 'Nghiêng', 'I'], ['insertUnorderedList', 'Danh sách', 'list'], ['insertOrderedList', 'Danh sách số', '1.'], ['createLink', 'Chèn liên kết', 'link'], ['insertImage', 'Chèn ảnh', 'image'], ['formatBlock:blockquote', 'Trích dẫn', '❝']];
    var id = UI.uid('rte');
    return '<div class="flex flex-col gap-1.5 min-w-0" data-field="' + esc(o.name) + '">' + (o.label ? '<span class="text-sm font-bold text-neutral-800" id="' + id + '-l">' + esc(o.label) + (o.required ? '<span class="text-danger-600"> *</span>' : '') + '</span>' : '') +
      '<div class="rounded-md border border-neutral-300 bg-white focus-within:border-primary-600 focus-within:ring-4 focus-within:ring-primary-200">' +
      '<div class="sticky top-0 z-10 flex gap-1 overflow-x-auto no-scrollbar border-b border-neutral-200 bg-neutral-50 p-1.5 rounded-t-md" role="toolbar" aria-label="Định dạng">' +
      tools.map(function (t) {
        var face = t[2] === 'list' || t[2] === 'link' || t[2] === 'image' ? ic(t[2], 'size-4') : '<span class="text-sm font-extrabold ' + (t[2] === 'I' ? 'italic' : '') + '">' + esc(t[2] || t[1]) + '</span>';
        return '<button type="button" data-rte-cmd="' + t[0] + '" class="inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2 text-neutral-700 hover:bg-white hover:text-primary-700" aria-label="' + t[1] + '" title="' + t[1] + '">' + face + '</button>';
      }).join('') + '</div>' +
      '<div data-rte="' + esc(o.name) + '" contenteditable="true" role="textbox" aria-multiline="true" aria-labelledby="' + id + '-l" data-placeholder="' + esc(o.placeholder || '') + '" class="prose-post min-h-64 px-4 py-3 focus:outline-none">' + (o.value || '') + '</div></div>' +
      '<p class="hidden items-center gap-1 text-xs font-bold text-danger-700" id="' + id + '-err" data-err></p></div>';
  };

  /* ---------- Tabs, Accordion ---------- */
  /** UI.tabs(el, { tabs: [{ id, label, count, content: html | fn(panel) }], active, variant: underline|pill, onChange(id, panel), hash }) → { set(id), panel } */
  UI.tabs = function (root, o) {
    var active = o.active || (o.hash && location.hash.slice(1)) || o.tabs[0].id;
    if (!o.tabs.some(function (t) { return t.id === active; })) active = o.tabs[0].id;
    var pill = o.variant === 'pill';
    var pid = UI.uid('tp');
    root.innerHTML = '<div role="tablist" class="flex gap-' + (pill ? '2' : '1') + ' overflow-x-auto no-scrollbar ' + (pill ? 'pb-1' : 'border-b border-neutral-200') + '"></div><div role="tabpanel" id="' + pid + '" tabindex="0" class="' + (o.panelCls || 'pt-5') + ' focus:outline-none"></div>';
    var list = root.firstElementChild, panel = root.lastElementChild;
    function btn(t) {
      var on = t.id === active;
      var cls = pill
        ? 'inline-flex items-center gap-2 h-10 px-4 rounded-full border-2 text-sm font-bold whitespace-nowrap transition ' + (on ? 'border-primary-500 bg-primary-100 text-primary-700' : 'border-neutral-200 bg-white text-neutral-700 hover:border-primary-300')
        : 'relative inline-flex items-center gap-2 h-12 px-3 text-base font-bold whitespace-nowrap transition ' + (on ? 'text-primary-700' : 'text-neutral-600 hover:text-neutral-800');
      var count = t.count != null && t.count !== '' ? '<span class="inline-flex min-w-5 h-5 px-1.5 items-center justify-center rounded-full text-xs font-bold ' + (on ? 'bg-primary-500 text-neutral-800' : 'bg-neutral-100 text-neutral-700') + '">' + esc(t.count) + '</span>' : '';
      return '<button type="button" role="tab" id="tab-' + t.id + '" data-tab="' + esc(t.id) + '" aria-selected="' + on + '" aria-controls="' + pid + '" tabindex="' + (on ? 0 : -1) + '" class="' + cls + '">' + esc(t.label) + count +
        (!pill && on ? '<span class="absolute inset-x-2 -bottom-px h-1 rounded-full bg-primary-500"></span>' : '') + '</button>';
    }
    function paint() {
      list.innerHTML = o.tabs.map(btn).join('');
      var t = o.tabs.filter(function (x) { return x.id === active; })[0];
      panel.setAttribute('aria-labelledby', 'tab-' + active);
      if (t && t.content != null) { if (typeof t.content === 'function') { var r = t.content(panel); if (typeof r === 'string') panel.innerHTML = r; } else panel.innerHTML = t.content; }
      if (o.onChange) o.onChange(active, panel);
    }
    list.addEventListener('click', function (e) { var b = e.target.closest('[data-tab]'); if (!b) return; api.set(b.getAttribute('data-tab')); });
    list.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var i = o.tabs.findIndex(function (t) { return t.id === active; }); i = (i + (e.key === 'ArrowRight' ? 1 : -1) + o.tabs.length) % o.tabs.length;
      api.set(o.tabs[i].id); list.querySelector('[data-tab="' + o.tabs[i].id + '"]').focus();
    });
    var api = {
      panel: panel,
      set: function (id) { active = id; if (o.hash) history.replaceState(null, '', '#' + id); paint(); var b = list.querySelector('[aria-selected=true]'); if (b && b.scrollIntoView) b.scrollIntoView({ block: 'nearest', inline: 'nearest' }); },
      setCounts: function (map) { o.tabs.forEach(function (t) { if (map[t.id] != null) t.count = map[t.id]; }); list.innerHTML = o.tabs.map(btn).join(''); },
      active: function () { return active; }
    };
    paint();
    return api;
  };
  /** UI.accordion(items [{ title, content, open, id }]) — dùng <details>, tiêu đề cao ≥ 52px, xoay icon 180° khi mở */
  UI.accordion = function (items) {
    return '<div class="divide-y divide-neutral-200 border-y border-neutral-200">' + items.map(function (it) {
      return '<details class="group" ' + (it.open ? 'open' : '') + ' ' + (it.id ? 'id="' + it.id + '"' : '') + '><summary class="flex cursor-pointer items-center justify-between gap-3 py-3.5 text-base font-bold text-neutral-800 hover:text-primary-700">' +
        '<span>' + esc(it.title) + '</span>' + ic('chevron-down', 'transition group-open:rotate-180 text-neutral-500') + '</summary><div class="pb-4 text-base text-neutral-700">' + it.content + '</div></details>';
    }).join('') + '</div>';
  };

  /* ---------- DataTable ---------- */
  function inRange(iso, preset) {
    if (!iso) return false; var d = new Date(iso), now = new Date(); var start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (preset === 'today') return d >= start;
    if (preset === '7d') return d >= new Date(start - 6 * 864e5);
    if (preset === '30d') return d >= new Date(start - 29 * 864e5);
    if (preset === 'month') return d >= new Date(now.getFullYear(), now.getMonth(), 1);
    return true;
  }
  UI.inRange = inRange;
  UI.DATE_PRESETS = [{ value: 'today', label: 'Hôm nay' }, { value: '7d', label: '7 ngày' }, { value: 'month', label: 'Tháng này' }];
  /** UI.table(el, { columns: [{ key, label, render(row) | format(v,row), sortable, sortValue(row), align, width, hideBelow: 'lg'|'xl', hidden, mobile: 'title'|'badge'|'hide' }],
   *   rows, pageSize, selectable, searchKeys, searchPlaceholder, filters: [{ key, label, type: select|date-range, options, match(row,v), value }],
   *   bulkActions: [{ label, icon, onClick(rows) }], rowActions(row) → [{ label, icon, variant, primary, onClick(row, btn), danger, disabled, tooltip, permission }],
   *   onRowClick, rowClass(row), rowAttrs(row), card(row) → html, columnToggle, empty: { title, text, action }, emptyFiltered, toolbarRight, sort: { key, dir } })
   *   → { setRows, refresh, setFilter, flash(id), state, clearSelection } */
  UI.table = function (root, o) {
    var st = { q: '', f: {}, sort: o.sort || null, page: 1, sel: {}, hidden: {} };
    (o.columns || []).forEach(function (c) { if (c.hidden) st.hidden[c.key] = true; });
    (o.filters || []).forEach(function (f) { if (f.value != null && f.value !== '') st.f[f.key] = f.value; });
    var rows = o.rows || [], size = o.pageSize || 20, actsMap = {};
    var sid = UI.uid('tbl');
    function cols() { return o.columns.filter(function (c) { return !st.hidden[c.key]; }); }
    function matchQ(r) { if (!st.q) return true; var q = UI.norm(st.q); return (o.searchKeys || []).some(function (k) { return UI.norm(typeof k === 'function' ? k(r) : r[k]).indexOf(q) >= 0; }); }
    function matchF(r) { return (o.filters || []).every(function (f) { var v = st.f[f.key]; if (v == null || v === '') return true; if (f.match) return f.match(r, v); if (f.type === 'date-range') return inRange(r[f.key], v); return String(r[f.key]) === String(v); }); }
    function list() {
      var l = rows.filter(function (r) { return matchQ(r) && matchF(r); });
      if (st.sort) {
        var c = o.columns.filter(function (x) { return x.key === st.sort.key; })[0];
        var get = c && c.sortValue ? c.sortValue : function (r) { return r[st.sort.key]; };
        l = l.slice().sort(function (a, b) { var x = get(a), y = get(b); if (typeof x === 'string') { x = UI.norm(x); y = UI.norm(y); } return (x > y ? 1 : x < y ? -1 : 0) * (st.sort.dir === 'desc' ? -1 : 1); });
      }
      return l;
    }
    function cell(c, r) { return c.render ? c.render(r) : c.format ? c.format(r[c.key], r) : esc(r[c.key]); }
    function hide(c) { return c.hideBelow === 'xl' ? 'hidden xl:table-cell' : c.hideBelow === 'lg' ? 'hidden lg:table-cell' : ''; }
    function actsHtml(r, mobile) {
      if (!o.rowActions) return '';
      var acts = (o.rowActions(r) || []).filter(Boolean); actsMap[r.id] = acts;
      var prim = acts.filter(function (a) { return a.primary; }), rest = acts.filter(function (a) { return !a.primary; });
      var html = prim.map(function (a) {
        var i = acts.indexOf(a);
        var b = UI.button({ label: a.label, icon: a.icon, size: 'sm', variant: a.variant || 'secondary', disabled: a.disabled, full: mobile, attrs: { 'data-t-act': i, 'data-permission': a.permission } });
        return a.disabled && a.tooltip ? UI.withTooltip(b, a.tooltip) : b;
      }).join('');
      if (rest.length) html += UI.iconButton({ icon: 'ellipsis', label: 'Thao tác khác', size: 'sm', variant: 'outline', attrs: { 'data-t-more': r.id, 'aria-haspopup': 'menu' } });
      return '<div class="flex items-center ' + (mobile ? 'gap-2' : 'justify-end gap-1.5') + '">' + html + '</div>';
    }
    function filtersHtml(prefix) {
      return (o.filters || []).map(function (f) {
        var opts = f.type === 'date-range' ? UI.DATE_PRESETS : f.options;
        return '<div class="relative"><label class="sr-only" for="' + prefix + f.key + '">' + esc(f.label) + '</label><select id="' + prefix + f.key + '" data-t-filter="' + esc(f.key) + '" class="' + INPUT + ' w-full lg:w-auto appearance-none pr-10 text-sm cursor-pointer">' +
          '<option value="">' + esc(f.label) + ': Tất cả</option>' + opts.map(function (op) { op = typeof op === 'object' ? op : { value: op, label: op }; return '<option value="' + esc(op.value) + '" ' + (String(st.f[f.key]) === String(op.value) ? 'selected' : '') + '>' + esc(op.label) + '</option>'; }).join('') +
          '</select>' + ic('chevron-down', 'absolute right-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500 pointer-events-none') + '</div>';
      }).join('');
    }
    function activeCount() { return Object.keys(st.f).filter(function (k) { return st.f[k] !== '' && st.f[k] != null; }).length; }
    root.innerHTML =
      '<div class="flex flex-wrap items-center gap-2 mb-3">' +
      (o.searchKeys ? '<div class="flex-1 min-w-0 sm:flex-none sm:w-72">' + UI.searchInput({ placeholder: o.searchPlaceholder || 'Tìm kiếm…', attrs: { 'data-t-search': '' } }) + '</div>' : '') +
      (o.filters && o.filters.length ? '<div class="hidden lg:flex flex-wrap items-center gap-2" data-t-filters>' + filtersHtml(sid + '-') + '</div>' +
        '<button type="button" data-t-filterbtn class="lg:hidden inline-flex h-control items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 text-sm font-bold text-neutral-800 hover:bg-primary-50">' + ic('funnel', 'size-4') + '<span data-t-fcount>Bộ lọc</span></button>' : '') +
      '<div class="ml-auto flex items-center gap-2">' + (o.toolbarRight || '') + (o.columnToggle ? '<span class="hidden md:inline-flex">' + UI.button({ label: 'Cột', icon: 'columns-3', variant: 'outline', size: 'sm', attrs: { 'data-t-cols': '', 'aria-haspopup': 'menu' } }) + '</span>' : '') + '</div></div>' +
      '<div data-t-chips></div><div data-t-body></div>';
    var body = root.querySelector('[data-t-body]'), chips = root.querySelector('[data-t-chips]');
    var bulk = null;
    function renderBulk(listAll) {
      var ids = Object.keys(st.sel);
      if (!o.selectable || !ids.length) { if (bulk) { bulk.remove(); bulk = null; } return; }
      if (!bulk) { bulk = el('<div class="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 items-center gap-2 rounded-lg bg-neutral-800 px-4 py-2 text-white shadow-lg anim-in"></div>'); document.body.appendChild(bulk); }
      bulk.innerHTML = '<span class="text-sm font-bold pr-2">Đã chọn ' + ids.length + '</span>' + (o.bulkActions || []).map(function (b, i) { return UI.button({ label: b.label, icon: b.icon, size: 'sm', variant: 'inverse', attrs: { 'data-bulk': i, 'data-permission': b.permission } }); }).join('') +
        UI.button({ label: 'Bỏ chọn', size: 'sm', variant: 'inverse', attrs: { 'data-bulk-clear': '' } });
      bulk.onclick = function (e) {
        var b = e.target.closest('[data-bulk]'); if (b) { var sel = rows.filter(function (r) { return st.sel[r.id]; }); o.bulkActions[+b.getAttribute('data-bulk')].onClick(sel, api); return; }
        if (e.target.closest('[data-bulk-clear]')) api.clearSelection();
      };
    }
    function render() {
      var l = list(), total = l.length, pages = Math.max(1, Math.ceil(total / size));
      if (st.page > pages) st.page = pages;
      var from = (st.page - 1) * size, pageRows = l.slice(from, from + size), cs = cols();
      var fc = root.querySelector('[data-t-fcount]'); if (fc) fc.textContent = 'Bộ lọc' + (activeCount() ? ' (' + activeCount() + ')' : '');
      var chipList = (o.filters || []).filter(function (f) { return st.f[f.key] !== '' && st.f[f.key] != null; }).map(function (f) {
        var opts = f.type === 'date-range' ? UI.DATE_PRESETS : f.options; var op = (opts || []).map(function (x) { return typeof x === 'object' ? x : { value: x, label: x }; }).filter(function (x) { return String(x.value) === String(st.f[f.key]); })[0];
        return '<button type="button" data-t-chip="' + esc(f.key) + '" class="inline-flex items-center gap-1.5 h-8 rounded-full bg-primary-100 px-3 text-xs font-bold text-primary-700 hover:bg-primary-200">' + esc(f.label) + ': ' + esc(op ? op.label : st.f[f.key]) + ic('x', 'size-3.5') + '</button>';
      });
      chips.innerHTML = chipList.length ? '<div class="flex flex-wrap items-center gap-2 mb-3">' + chipList.join('') + '<button type="button" data-t-clear class="text-xs font-bold text-primary-700 hover:underline px-1">Xóa bộ lọc</button></div>' : '';
      var filtered = !!st.q || activeCount() > 0;
      var emptyHtml = UI.emptyState(filtered ? (o.emptyFiltered || { title: 'Không có dữ liệu phù hợp bộ lọc', action: UI.button({ label: 'Xóa bộ lọc', variant: 'outline', size: 'sm', attrs: { 'data-t-clear': '' } }) }) : (o.empty || { title: 'Chưa có dữ liệu' }));
      if (filtered && o.emptyFiltered && !o.emptyFiltered.action) emptyHtml = UI.emptyState({ title: o.emptyFiltered.title, text: o.emptyFiltered.text, size: 'sm', action: UI.button({ label: 'Xóa bộ lọc', variant: 'outline', size: 'sm', attrs: { 'data-t-clear': '' } }) });
      var allSel = pageRows.length && pageRows.every(function (r) { return st.sel[r.id]; });
      var thead = '<thead class="bg-neutral-50"><tr>' + (o.selectable ? '<th class="w-11 px-3"><input type="checkbox" data-t-all aria-label="Chọn tất cả dòng trang này" ' + (allSel ? 'checked' : '') + ' class="size-5 accent-primary-500 cursor-pointer"></th>' : '') +
        cs.map(function (c) {
          var sorted = st.sort && st.sort.key === c.key;
          var lab = c.sortable ? '<button type="button" data-t-sort="' + c.key + '" class="inline-flex items-center gap-1 hover:text-neutral-800 ' + (sorted ? 'text-neutral-800' : '') + '">' + esc(c.label) + ic(sorted ? (st.sort.dir === 'desc' ? 'arrow-down' : 'arrow-up') : 'arrow-up-down', 'size-3.5') + '</button>' : esc(c.label);
          return '<th scope="col" ' + (sorted ? 'aria-sort="' + (st.sort.dir === 'desc' ? 'descending' : 'ascending') + '"' : '') + ' class="px-3 py-3 text-xs font-bold text-neutral-600 whitespace-nowrap ' + (c.align === 'right' ? 'text-right' : c.align === 'center' ? 'text-center' : 'text-left') + ' ' + hide(c) + ' ' + (c.width || '') + '">' + lab + '</th>';
        }).join('') + (o.rowActions ? '<th scope="col" class="px-3 py-3 text-right text-xs font-bold text-neutral-600">Thao tác</th>' : '') + '</tr></thead>';
      var tbody = pageRows.map(function (r) {
        return '<tr data-t-row="' + esc(r.id) + '" class="h-table-row align-middle transition hover:bg-primary-50 ' + (st.sel[r.id] ? 'bg-secondary-50' : '') + ' ' + (o.onRowClick ? 'cursor-pointer' : '') + ' ' + (o.rowClass ? o.rowClass(r) : '') + '">' +
          (o.selectable ? '<td class="px-3"><input type="checkbox" data-t-sel="' + esc(r.id) + '" ' + (st.sel[r.id] ? 'checked' : '') + ' aria-label="Chọn dòng" class="size-5 accent-primary-500 cursor-pointer"></td>' : '') +
          cs.map(function (c) { return '<td class="px-3 py-2 ' + (c.align === 'right' ? 'text-right tabular-nums' : c.align === 'center' ? 'text-center' : '') + ' ' + hide(c) + ' ' + (c.cellCls || '') + '">' + cell(c, r) + '</td>'; }).join('') +
          (o.rowActions ? '<td class="px-3 py-2 whitespace-nowrap">' + actsHtml(r) + '</td>' : '') + '</tr>';
      }).join('');
      var pager = total > size ? pagerHtml(total, pages, from, pageRows.length) : (total ? '<div class="px-4 py-3 text-sm text-neutral-600 border-t border-neutral-100">' + total + ' dòng</div>' : '');
      var cards = pageRows.map(function (r) {
        if (o.card) return '<div data-t-row="' + esc(r.id) + '" class="' + (o.onRowClick ? 'cursor-pointer' : '') + '">' + o.card(r, actsHtml(r, true)) + '</div>';
        var title = cs.filter(function (c) { return c.mobile === 'title'; }), badge = cs.filter(function (c) { return c.mobile === 'badge'; }), rest = cs.filter(function (c) { return !c.mobile; });
        return '<div data-t-row="' + esc(r.id) + '" class="rounded-lg border border-neutral-200 bg-white p-4 ' + (o.onRowClick ? 'cursor-pointer' : '') + ' ' + (o.rowClass ? o.rowClass(r) : '') + '">' +
          '<div class="flex items-start justify-between gap-3"><div class="min-w-0">' + title.map(function (c) { return cell(c, r); }).join('') + '</div><div class="shrink-0 flex flex-col items-end gap-1">' + badge.map(function (c) { return cell(c, r); }).join('') + '</div></div>' +
          (rest.length ? '<dl class="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">' + rest.map(function (c) { return '<div class="min-w-0"><dt class="text-xs text-neutral-600">' + esc(c.label) + '</dt><dd class="text-neutral-800 break-words">' + cell(c, r) + '</dd></div>'; }).join('') + '</dl>' : '') +
          (o.rowActions ? '<div class="mt-3">' + actsHtml(r, true) + '</div>' : '') + '</div>';
      }).join('');
      body.innerHTML = total ?
        '<div class="hidden md:block rounded-lg border border-neutral-200 bg-white overflow-hidden"><div class="overflow-x-auto"><table class="w-full text-sm">' + thead + '<tbody class="divide-y divide-neutral-100">' + tbody + '</tbody></table></div>' + pager + '</div>' +
        '<div class="md:hidden flex flex-col gap-3">' + cards + (total > size ? '<div class="rounded-lg border border-neutral-200 bg-white">' + pagerHtml(total, pages, from, pageRows.length) + '</div>' : '') + '</div>'
        : '<div class="rounded-lg border border-neutral-200 bg-white">' + emptyHtml + '</div>';
      renderBulk();
    }
    function pagerHtml(total, pages, from, n) {
      var nums = [], s = Math.max(1, st.page - 2), e = Math.min(pages, s + 4); s = Math.max(1, e - 4);
      for (var i = s; i <= e; i++) nums.push('<button type="button" data-t-page="' + i + '" ' + (i === st.page ? 'aria-current="page"' : '') + ' class="inline-flex size-9 items-center justify-center rounded-md text-sm font-bold ' + (i === st.page ? 'bg-primary-500 text-neutral-800' : 'text-neutral-700 hover:bg-neutral-100') + '">' + i + '</button>');
      return '<nav aria-label="Phân trang" class="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 px-4 py-3"><p class="text-sm text-neutral-600">' + (from + 1) + '–' + (from + n) + ' / ' + total + '</p><div class="flex items-center gap-1">' +
        '<button type="button" data-t-page="' + (st.page - 1) + '" ' + (st.page === 1 ? 'disabled' : '') + ' class="inline-flex size-9 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 disabled:opacity-40" aria-label="Trang trước">' + ic('chevron-left', 'size-4') + '</button>' + nums.join('') +
        '<button type="button" data-t-page="' + (st.page + 1) + '" ' + (st.page === pages ? 'disabled' : '') + ' class="inline-flex size-9 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 disabled:opacity-40" aria-label="Trang sau">' + ic('chevron-right', 'size-4') + '</button></div></nav>';
    }
    var tmr;
    root.addEventListener('input', function (e) { if (e.target.matches('[data-t-search]')) { clearTimeout(tmr); tmr = setTimeout(function () { st.q = e.target.value; st.page = 1; render(); }, 200); } });
    root.addEventListener('change', function (e) {
      var f = e.target.closest('[data-t-filter]'); if (f) { st.f[f.getAttribute('data-t-filter')] = f.value; st.page = 1; render(); }
      var s = e.target.closest('[data-t-sel]'); if (s) { var id = s.getAttribute('data-t-sel'); if (s.checked) st.sel[id] = true; else delete st.sel[id]; render(); }
      if (e.target.matches('[data-t-all]')) { var l = list().slice((st.page - 1) * size, st.page * size); l.forEach(function (r) { if (e.target.checked) st.sel[r.id] = true; else delete st.sel[r.id]; }); render(); }
    });
    root.addEventListener('click', function (e) {
      var t = e.target;
      var sb = t.closest('[data-t-sort]'); if (sb) { var k = sb.getAttribute('data-t-sort'); st.sort = st.sort && st.sort.key === k ? { key: k, dir: st.sort.dir === 'asc' ? 'desc' : 'asc' } : { key: k, dir: 'asc' }; render(); return; }
      var pg = t.closest('[data-t-page]'); if (pg && !pg.disabled) { st.page = +pg.getAttribute('data-t-page'); render(); root.scrollIntoView({ block: 'start', behavior: 'smooth' }); return; }
      var ch = t.closest('[data-t-chip]'); if (ch) { st.f[ch.getAttribute('data-t-chip')] = ''; syncSelects(); render(); return; }
      if (t.closest('[data-t-clear]')) { st.f = {}; st.q = ''; var si = root.querySelector('[data-t-search]'); if (si) si.value = ''; syncSelects(); render(); return; }
      var ab = t.closest('[data-t-act]'); if (ab) { var row = rowOf(ab); var a = actsMap[row.id][+ab.getAttribute('data-t-act')]; if (a && a.onClick) a.onClick(row, ab); return; }
      var mb = t.closest('[data-t-more]'); if (mb) { var r2 = rowOf(mb); var acts = actsMap[r2.id].filter(function (x) { return !x.primary; }); UI.dropdown(mb, acts.map(function (x) { return { label: x.label, icon: x.icon, danger: x.danger, disabled: x.disabled, tooltip: x.tooltip, permission: x.permission, href: x.href, onClick: function () { x.onClick(r2, mb); } }; })); return; }
      if (t.closest('[data-t-cols]')) { colsMenu(t.closest('[data-t-cols]')); return; }
      if (t.closest('[data-t-filterbtn]')) { filterDrawer(); return; }
      if (t.closest('a,button,input,select,label,[data-tooltip]')) return;
      var tr = t.closest('[data-t-row]'); if (tr && o.onRowClick) { var rr = rows.filter(function (x) { return String(x.id) === tr.getAttribute('data-t-row'); })[0]; if (rr) o.onRowClick(rr); }
    });
    function rowOf(node) { var id = node.closest('[data-t-row]').getAttribute('data-t-row'); return rows.filter(function (x) { return String(x.id) === id; })[0]; }
    function syncSelects() { root.querySelectorAll('[data-t-filter]').forEach(function (s) { s.value = st.f[s.getAttribute('data-t-filter')] || ''; }); }
    function colsMenu(anchor) {
      UI.dropdown(anchor, o.columns.filter(function (c) { return c.toggle !== false && c.label; }).map(function (c) {
        return { label: (st.hidden[c.key] ? '☐ ' : '☑ ') + c.label, onClick: function () { if (st.hidden[c.key]) delete st.hidden[c.key]; else st.hidden[c.key] = true; render(); } };
      }));
    }
    function filterDrawer() {
      var d = UI.drawer({
        title: 'Bộ lọc', side: 'bottom', body: '<div class="flex flex-col gap-3">' + filtersHtml(sid + '-m-') + '</div>',
        actions: [{ label: 'Xóa bộ lọc', variant: 'ghost', onClick: function () { st.f = {}; syncSelects(); render(); } },
        { label: 'Áp dụng', onClick: function (api) { api.body.querySelectorAll('[data-t-filter]').forEach(function (s) { st.f[s.getAttribute('data-t-filter')] = s.value; }); st.page = 1; syncSelects(); render(); } }]
      });
      return d;
    }
    var api = {
      state: st,
      setRows: function (r) { rows = r; render(); },
      refresh: render,
      rows: function () { return rows; },
      filtered: list,
      setFilter: function (k, v) { st.f[k] = v; st.page = 1; syncSelects(); render(); },
      setQuery: function (q) { st.q = q; var si = root.querySelector('[data-t-search]'); if (si) si.value = q; render(); },
      clearSelection: function () { st.sel = {}; render(); },
      flash: function (id) { root.querySelectorAll('[data-t-row="' + id + '"]').forEach(function (n) { n.classList.remove('anim-flash'); void n.offsetWidth; n.classList.add('anim-flash'); }); },
      destroy: function () { if (bulk) bulk.remove(); }
    };
    render();
    return api;
  };

  /** UI.searchInput({ placeholder, value, name, attrs, id }) — SearchInput có icon kính lúp (website radius.full, quản trị radius.md) */
  UI.searchInput = function (o) {
    o = o || {};
    var id = o.id || UI.uid('s');
    return '<div class="relative w-full"><label for="' + id + '" class="sr-only">' + esc(o.label || o.placeholder || 'Tìm kiếm') + '</label>' + ic('search', 'absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none') +
      '<input id="' + id + '" type="search" ' + (o.name ? 'name="' + esc(o.name) + '"' : '') + ' value="' + esc(o.value || '') + '" placeholder="' + esc(o.placeholder || 'Tìm kiếm…') + '" maxlength="100" autocomplete="off" ' + attrs(o.attrs) +
      ' class="' + INPUT + ' pl-11 ' + (UI.area === 'admin' ? 'rounded-md' : 'rounded-full') + '"></div>';
  };

  /* ---------- LineItemsTable ---------- */
  /** UI.lineItems(el, { columns: [{ key, label, type: text|money|number|select|readonly|custom, options, render(row,i), align, width, placeholder }], rows, editable, addLabel, newRow(), minRows, minMsg, onChange(rows), cardTitle(row) }) → { rows(), setRows } */
  UI.lineItems = function (root, o) {
    var rows = (o.rows || []).map(function (r) { return Object.assign({}, r); });
    function input(c, r, i) {
      var v = r[c.key] == null ? '' : r[c.key];
      var aria = 'aria-label="' + esc(c.label) + ' dòng ' + (i + 1) + '"';
      if (c.type === 'custom') return c.render(r, i);
      if (!o.editable || c.type === 'readonly') return c.render ? c.render(r, i) : esc(c.format ? c.format(v, r) : v);
      if (c.type === 'select') return '<select data-li="' + c.key + '" data-i="' + i + '" ' + aria + ' class="' + INPUT + ' text-sm appearance-none pr-8">' + '<option value="">' + esc(c.placeholder || 'Chọn…') + '</option>' + (typeof c.options === 'function' ? c.options(r) : c.options).map(function (op) { return '<option value="' + esc(op.value) + '" ' + (String(op.value) === String(v) ? 'selected' : '') + '>' + esc(op.label) + '</option>'; }).join('') + '</select>';
      if (c.type === 'money') return '<div class="relative"><input data-li="' + c.key + '" data-i="' + i + '" ' + aria + ' data-money inputmode="numeric" value="' + (v === '' ? '' : UI.fmt.number(v)) + '" class="' + INPUT + ' text-sm pr-8 text-right"><span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-500">đ</span></div>';
      if (c.type === 'number') return '<input data-li="' + c.key + '" data-i="' + i + '" ' + aria + ' type="number" min="0" inputmode="numeric" value="' + esc(v) + '" class="' + INPUT + ' text-sm text-right">';
      return '<input data-li="' + c.key + '" data-i="' + i + '" ' + aria + ' value="' + esc(v) + '" placeholder="' + esc(c.placeholder || '') + '" class="' + INPUT + ' text-sm">';
    }
    function render() {
      var head = '<thead class="bg-neutral-50"><tr>' + o.columns.map(function (c) { return '<th class="px-3 py-2.5 text-xs font-bold text-neutral-600 ' + (c.align === 'right' ? 'text-right' : 'text-left') + ' ' + (c.width || '') + '">' + esc(c.label) + '</th>'; }).join('') + (o.editable ? '<th class="w-12"><span class="sr-only">Xóa</span></th>' : '') + '</tr></thead>';
      var body = rows.map(function (r, i) {
        return '<tr class="align-middle ' + (r._error ? 'outline outline-2 outline-danger-500' : '') + '">' + o.columns.map(function (c) { return '<td class="px-3 py-2 ' + (c.align === 'right' ? 'text-right tabular-nums' : '') + '">' + input(c, r, i) + '</td>'; }).join('') +
          (o.editable ? '<td class="px-1">' + UI.iconButton({ icon: 'trash-2', label: 'Xóa dòng ' + (i + 1), size: 'sm', attrs: { 'data-li-del': i } }) + '</td>' : '') + '</tr>';
      }).join('');
      var cards = rows.map(function (r, i) {
        return '<div class="rounded-lg border ' + (r._error ? 'border-danger-500' : 'border-neutral-200') + ' bg-white p-3 flex flex-col gap-2">' +
          (o.editable ? '<div class="flex items-center justify-between"><span class="text-sm font-bold text-neutral-600">Dòng ' + (i + 1) + '</span>' + UI.iconButton({ icon: 'trash-2', label: 'Xóa dòng ' + (i + 1), size: 'sm', attrs: { 'data-li-del': i } }) + '</div>' : '') +
          o.columns.map(function (c) { return '<div class="flex flex-col gap-1"><span class="text-xs text-neutral-600">' + esc(c.label) + '</span><div class="text-sm">' + input(c, r, i) + '</div></div>'; }).join('') + '</div>';
      }).join('');
      root.innerHTML = '<div class="hidden md:block overflow-x-auto rounded-lg border border-neutral-200"><table class="w-full text-sm">' + head + '<tbody class="divide-y divide-neutral-100 bg-white">' + body + '</tbody></table></div>' +
        '<div class="md:hidden flex flex-col gap-2">' + cards + '</div>' +
        (o.editable ? '<div class="mt-3">' + UI.button({ label: o.addLabel || 'Thêm dòng', icon: 'plus', variant: 'outline', size: 'sm', attrs: { 'data-li-add': '' } }) + '</div>' : '');
    }
    function changed() { if (o.onChange) o.onChange(rows); }
    root.addEventListener('input', function (e) {
      var x = e.target.closest('[data-li]'); if (!x) return; var i = +x.getAttribute('data-i'), k = x.getAttribute('data-li');
      rows[i][k] = x.hasAttribute('data-money') ? UI.parseMoney(x.value) : x.type === 'number' ? (x.value === '' ? '' : Number(x.value)) : x.value;
      var twin = root.querySelectorAll('[data-li="' + k + '"][data-i="' + i + '"]'); twin.forEach(function (t) { if (t !== x) t.value = x.value; });
      changed();
    });
    root.addEventListener('change', function (e) { if (e.target.closest('select[data-li]')) { render(); changed(); } });
    root.addEventListener('click', function (e) {
      var d = e.target.closest('[data-li-del]');
      if (d) { if (rows.length <= (o.minRows || 0)) { UI.toast(o.minMsg || 'Cần ít nhất ' + o.minRows + ' dòng', 'error'); return; } rows.splice(+d.getAttribute('data-li-del'), 1); render(); changed(); return; }
      if (e.target.closest('[data-li-add]')) { rows.push(o.newRow ? o.newRow() : {}); render(); changed(); }
    });
    render();
    return { rows: function () { return rows; }, setRows: function (r) { rows = r; render(); changed(); }, render: render };
  };

  /* ---------- Chi tiết ---------- */
  /** UI.detailHeader({ code, title, status(html), tags(html), meta(html), actions(html) }) — mã chứng từ font mono 2xl 800 */
  UI.detailHeader = function (o) {
    return '<div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between mb-5"><div class="min-w-0">' +
      '<div class="flex flex-wrap items-center gap-2">' + (o.code ? '<h1 class="font-mono text-2xl font-extrabold text-neutral-800 break-all">' + esc(o.code) + '</h1>' : '') + (o.title ? '<h1 class="text-2xl font-extrabold text-neutral-800">' + esc(o.title) + '</h1>' : '') + (o.tags || '') + (o.status || '') + '</div>' +
      (o.meta ? '<p class="mt-1.5 text-sm text-neutral-600">' + o.meta + '</p>' : '') + '</div>' +
      (o.actions ? '<div class="flex flex-wrap items-center gap-2 shrink-0" data-detail-actions>' + o.actions + '</div>' : '') + '</div>';
  };
  /** UI.timeline(items [{ at, title, by, note, tone }]) — lịch sử: chấm màu theo tone trạng thái mới */
  UI.timeline = function (items) {
    if (!items || !items.length) return '<p class="text-sm text-neutral-600">Chưa có lịch sử.</p>';
    return '<ol class="flex flex-col">' + items.map(function (it, i) {
      var t = TONE[it.tone] || TONE.neutral;
      return '<li class="flex gap-3"><div class="flex flex-col items-center"><span class="mt-1.5 size-3 shrink-0 rounded-full ' + t[2] + ' ring-4 ring-white"></span>' + (i < items.length - 1 ? '<span class="w-0.5 flex-1 bg-neutral-200"></span>' : '') + '</div>' +
        '<div class="min-w-0 pb-5"><p class="text-sm font-bold text-neutral-800">' + it.title + '</p><p class="text-xs text-neutral-600">' + esc(UI.fmt.datetime(it.at)) + (it.by ? ' · ' + esc(it.by) : '') + '</p>' +
        (it.note ? '<p class="mt-1 text-sm text-neutral-700 break-words">' + esc(it.note) + '</p>' : '') + '</div></li>';
    }).join('') + '</ol>';
  };
  /** UI.approvalFlow(steps [{ label, state: done|current|todo|rejected, by, at }]) — các cấp xử lý dạng ngang */
  UI.approvalFlow = function (steps) {
    return '<ol class="flex flex-wrap items-center gap-2">' + steps.map(function (s, i) {
      var c = s.state === 'done' ? 'bg-success-100 text-success-700' : s.state === 'current' ? 'bg-primary-100 text-primary-700 ring-2 ring-primary-500' : s.state === 'rejected' ? 'bg-danger-100 text-danger-700' : 'bg-neutral-100 text-neutral-600';
      return (i ? '<li aria-hidden="true" class="text-neutral-400">' + ic('chevron-right', 'size-4') + '</li>' : '') + '<li class="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold ' + c + '">' + (s.state === 'done' ? ic('check', 'size-4') : '') + esc(s.label) + (s.by ? '<span class="font-normal">· ' + esc(s.by) + '</span>' : '') + '</li>';
    }).join('') + '</ol>';
  };
  /** UI.orderStepper({ steps: [{ label, at }], current (chỉ số bước hiện tại), ended: { label, tone } (Đã hủy / Đã bị trả lại), compact }) — thanh các bước, tô màu bước hiện tại (q22) */
  UI.orderStepper = function (o) {
    var cur = o.current;
    function state(i) { if (o.ended) return i <= cur ? 'done' : 'todo'; return i < cur ? 'done' : i === cur ? (i === o.steps.length - 1 ? 'done' : 'current') : 'todo'; }
    function dot(s, i, big) {
      var sz = big ? 'size-9' : 'size-7';
      if (s === 'done') return '<span class="inline-flex ' + sz + ' shrink-0 items-center justify-center rounded-full bg-success-500 text-white">' + ic('check', 'size-4') + '</span>';
      if (s === 'current') return '<span class="inline-flex ' + sz + ' shrink-0 items-center justify-center rounded-full bg-primary-500 text-neutral-800 font-extrabold ring-4 ring-primary-200 motion-safe:scale-110">' + (i + 1) + '</span>';
      return '<span class="inline-flex ' + sz + ' shrink-0 items-center justify-center rounded-full border-2 border-neutral-300 bg-white text-sm font-bold text-neutral-500">' + (i + 1) + '</span>';
    }
    if (o.compact) {
      return '<div class="flex items-center gap-1.5" aria-label="Tiến trình: ' + esc(o.ended ? o.ended.label : o.steps[cur].label) + '">' + o.steps.map(function (s, i) {
        var st = state(i); var c = st === 'done' ? 'bg-success-500' : st === 'current' ? 'bg-primary-500 ring-2 ring-primary-200' : 'bg-neutral-300';
        return (i ? '<span class="h-0.5 flex-1 ' + (state(i) !== 'todo' ? 'bg-success-500' : 'bg-neutral-200') + '"></span>' : '') + '<span class="size-2.5 shrink-0 rounded-full ' + c + '" title="' + esc(s.label) + '"></span>';
      }).join('') + '</div>';
    }
    var end = o.ended ? '<div class="mt-3">' + UI.statusBadge(o.ended.label, o.ended.tone, 'md') + '</div>' : '';
    var hz = '<ol class="hidden md:flex items-start">' + o.steps.map(function (s, i) {
      var st = state(i);
      return '<li class="flex flex-1 flex-col items-center text-center min-w-0 relative">' + (i ? '<span class="absolute top-4 right-1/2 w-full h-1 -z-0 ' + (st !== 'todo' ? 'bg-success-500' : 'bg-neutral-200') + '"></span>' : '') +
        '<span class="relative">' + dot(st, i, true) + '</span><span class="mt-2 text-sm ' + (st === 'current' ? 'font-extrabold text-neutral-800' : st === 'done' ? 'font-bold text-neutral-800' : 'font-semibold text-neutral-500') + '">' + esc(s.label) + '</span>' +
        (s.at ? '<span class="text-xs text-neutral-600">' + esc(UI.fmt.dm(s.at) + ' ' + UI.fmt.time(s.at)) + '</span>' : '') + '</li>';
    }).join('') + '</ol>';
    var vt = '<ol class="md:hidden flex flex-col">' + o.steps.map(function (s, i) {
      var st = state(i);
      return '<li class="flex gap-3"><div class="flex flex-col items-center">' + dot(st, i) + (i < o.steps.length - 1 ? '<span class="w-1 flex-1 min-h-4 ' + (state(i + 1) !== 'todo' ? 'bg-success-500' : 'bg-neutral-200') + '"></span>' : '') + '</div>' +
        '<div class="pb-4 pt-0.5"><p class="text-sm ' + (st === 'current' ? 'font-extrabold' : 'font-bold') + ' ' + (st === 'todo' ? 'text-neutral-500' : 'text-neutral-800') + '">' + esc(s.label) + '</p>' + (s.at ? '<p class="text-xs text-neutral-600">' + esc(UI.fmt.datetime(s.at)) + '</p>' : '') + '</div></li>';
    }).join('') + '</ol>';
    return '<div class="isolate">' + hz + vt + end + '</div>';
  };

  /* ---------- Tổng quan ---------- */
  /** UI.kpiCard({ label, value, delta (%), deltaLabel, icon, tone, target: { pct 0..1, label }, href }) */
  UI.kpiCard = function (o) {
    var up = o.delta != null && o.delta >= 0;
    var delta = o.delta == null ? '' : '<p class="mt-1 inline-flex items-center gap-1 text-xs font-bold ' + (o.goodWhenDown ? (up ? 'text-danger-600' : 'text-success-600') : (up ? 'text-success-600' : 'text-danger-600')) + '">' + ic(up ? 'trending-up' : 'trending-down', 'size-3.5') + (up ? '▲ ' : '▼ ') + UI.fmt.percent(Math.abs(o.delta), true) + ' <span class="font-semibold text-neutral-600">' + esc(o.deltaLabel || 'so với kỳ trước') + '</span></p>';
    var target = o.target ? '<div class="mt-3"><div class="h-2 rounded-full bg-neutral-100 overflow-hidden"><div class="h-full rounded-full ' + (o.target.pct >= 1 ? 'bg-success-500' : 'bg-warning-500') + '" style="width:' + Math.min(100, Math.round(o.target.pct * 100)) + '%"></div></div><p class="mt-1 text-xs text-neutral-600">' + esc(o.target.label) + '</p></div>' : '';
    var t = TONE[o.tone || 'primary'];
    var inner = '<div class="flex items-start justify-between gap-2"><p class="text-sm font-bold text-neutral-600">' + esc(o.label) + '</p>' + (o.icon ? '<span class="inline-flex size-9 items-center justify-center rounded-lg ' + t[0] + ' ' + t[1] + '">' + ic(o.icon, 'size-5') + '</span>' : '') + '</div>' +
      '<p class="mt-1 text-2xl font-extrabold text-neutral-800 tabular-nums">' + esc(o.value) + '</p>' + delta + target;
    var cls = 'block rounded-lg border border-neutral-200 bg-white p-4 min-w-0 ' + (o.href ? 'transition hover:border-primary-300 hover:shadow-md' : '');
    return o.href ? '<a href="' + esc(o.href) + '" class="' + cls + '">' + inner + '</a>' : '<div class="' + cls + '">' + inner + '</div>';
  };
  /** UI.capacityBar(n, max) — suất pate chay / ngày: bình thường secondary-500, ≥ 80% warning-500, vượt danger-500 */
  UI.capacityBar = function (n, max) {
    max = max || 20; var pct = n / max;
    var c = pct > 1 ? 'bg-danger-500' : pct >= 0.8 ? 'bg-warning-500' : 'bg-secondary-500';
    return '<div class="flex items-center gap-3 min-w-0"><div class="h-2.5 flex-1 min-w-16 rounded-full bg-neutral-100 overflow-hidden" role="progressbar" aria-valuenow="' + n + '" aria-valuemax="' + max + '" aria-label="Suất pate chay"><div class="h-full rounded-full ' + c + '" style="width:' + Math.min(100, Math.round(pct * 100)) + '%"></div></div>' +
      '<span class="text-sm font-bold tabular-nums whitespace-nowrap ' + (pct > 1 ? 'text-danger-700' : 'text-neutral-800') + '">' + n + '/' + max + ' hũ</span>' + (pct > 1 ? UI.tag('Vượt suất', 'danger') : '') + '</div>';
  };

  /* Biểu đồ SVG thuần */
  function chartTip(root) {
    var t = root.querySelector('[data-ctip]');
    if (!t) { t = el('<div data-ctip class="pointer-events-none absolute hidden rounded-md bg-neutral-800 px-2.5 py-1.5 text-xs font-semibold text-white shadow-md whitespace-nowrap" style="z-index:5"></div>'); root.appendChild(t); }
    return t;
  }
  function bindTip(root, svg) {
    var t = chartTip(root);
    svg.addEventListener('mousemove', function (e) {
      var g = e.target.closest('[data-tip]'); if (!g) { t.classList.add('hidden'); return; }
      t.innerHTML = g.getAttribute('data-tip'); t.classList.remove('hidden');
      var r = root.getBoundingClientRect(); var x = e.clientX - r.left + 12, y = e.clientY - r.top - 36;
      t.style.left = Math.min(x, r.width - t.offsetWidth - 4) + 'px'; t.style.top = Math.max(0, y) + 'px';
    });
    svg.addEventListener('mouseleave', function () { t.classList.add('hidden'); });
  }
  function niceMax(v) { if (v <= 0) return 1; var p = Math.pow(10, Math.floor(Math.log10(v))); var n = v / p; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * p; }
  UI.chart = {
    /** UI.chart.bar(el, { labels, values, format, cls, height }) — cột primary-500, lưới neutral-200, có tooltip */
    bar: function (root, o) {
      var W = Math.max(320, root.clientWidth || 600), H = o.height || 260, pl = 52, pr = 12, pt = 12, pb = 32;
      var max = niceMax(Math.max.apply(null, o.values.concat([0]))), n = o.values.length, bw = (W - pl - pr) / Math.max(1, n);
      var fmt = o.format || UI.fmt.compact;
      if (!n || o.values.every(function (v) { return !v; })) { root.innerHTML = '<p class="py-16 text-center text-sm text-neutral-600">Chưa có dữ liệu trong kỳ này</p>'; return; }
      var g = '';
      for (var i = 0; i <= 4; i++) { var y = pt + (H - pt - pb) * i / 4; g += '<line x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y + '" y2="' + y + '" class="stroke-neutral-200" stroke-dasharray="' + (i === 4 ? '0' : '3 4') + '"/><text x="' + (pl - 8) + '" y="' + (y + 4) + '" text-anchor="end" class="fill-neutral-600" font-size="11">' + esc(fmt(max * (4 - i) / 4)) + '</text>'; }
      var every = Math.ceil(n / Math.max(1, Math.floor((W - pl) / 46)));
      var bars = o.values.map(function (v, i) {
        var h = (H - pt - pb) * v / max, x = pl + i * bw + bw * 0.18, w = Math.max(3, bw * 0.64), y = H - pb - h;
        return '<g data-tip="' + esc(o.labels[i] + ': ' + (o.tipFormat || UI.fmt.money)(v)) + '"><rect x="' + (pl + i * bw) + '" y="' + pt + '" width="' + bw + '" height="' + (H - pt - pb) + '" class="fill-transparent"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + Math.max(0, h) + '" rx="4" class="' + (o.cls || 'fill-primary-500') + ' hover:fill-primary-600 transition"/></g>' +
          (i % every === 0 ? '<text x="' + (pl + i * bw + bw / 2) + '" y="' + (H - 10) + '" text-anchor="middle" class="fill-neutral-600" font-size="11">' + esc(o.labels[i]) + '</text>' : '');
      }).join('');
      root.classList.add('relative');
      root.innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="w-full h-auto" role="img" aria-label="' + esc(o.label || 'Biểu đồ cột') + '">' + g + bars + '</svg>';
      bindTip(root, root.querySelector('svg'));
    },
    /** UI.chart.line(el, { labels, series: [{ name, values, cls }], targets: [{ value, label }], height }) — đường secondary-600, mục tiêu warning-600 nét đứt */
    line: function (root, o) {
      var W = Math.max(320, root.clientWidth || 600), H = o.height || 260, pl = 40, pr = 12, pt = 12, pb = 32;
      var all = []; o.series.forEach(function (s) { all = all.concat(s.values); }); (o.targets || []).forEach(function (t) { all.push(t.value); });
      var max = niceMax(Math.max.apply(null, all.concat([1]))), n = o.labels.length;
      var X = function (i) { return pl + (W - pl - pr) * (n <= 1 ? 0.5 : i / (n - 1)); }, Y = function (v) { return H - pb - (H - pt - pb) * v / max; };
      var g = '';
      for (var i = 0; i <= 4; i++) { var v = max * (4 - i) / 4, y = Y(v); g += '<line x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y + '" y2="' + y + '" class="stroke-neutral-200" stroke-dasharray="' + (i === 4 ? '0' : '3 4') + '"/><text x="' + (pl - 8) + '" y="' + (y + 4) + '" text-anchor="end" class="fill-neutral-600" font-size="11">' + Math.round(v) + '</text>'; }
      var tg = (o.targets || []).map(function (t) { var y = Y(t.value); return '<line x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y + '" y2="' + y + '" class="stroke-warning-600" stroke-width="1.5" stroke-dasharray="6 5"/><text x="' + (W - pr) + '" y="' + (y - 5) + '" text-anchor="end" class="fill-warning-700" font-size="11" font-weight="700">' + esc(t.label) + '</text>'; }).join('');
      var every = Math.ceil(n / Math.max(1, Math.floor((W - pl) / 46)));
      var xl = o.labels.map(function (l, i) { return i % every === 0 ? '<text x="' + X(i) + '" y="' + (H - 10) + '" text-anchor="middle" class="fill-neutral-600" font-size="11">' + esc(l) + '</text>' : ''; }).join('');
      var lines = o.series.map(function (s) {
        var d = s.values.map(function (v, i) { return (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1); }).join(' ');
        var pts = s.values.map(function (v, i) { return '<circle cx="' + X(i) + '" cy="' + Y(v) + '" r="3.5" class="' + (s.dot || 'fill-secondary-600') + ' stroke-white" stroke-width="1.5"/>'; }).join('');
        return '<path d="' + d + '" fill="none" class="' + (s.cls || 'stroke-secondary-600') + '" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>' + pts;
      }).join('');
      var hits = o.labels.map(function (l, i) { var w = (W - pl - pr) / Math.max(1, n - 1); return '<rect data-tip="' + esc(l + ': ' + o.series.map(function (s) { return s.name + ' ' + s.values[i]; }).join(' · ')) + '" x="' + (X(i) - w / 2) + '" y="' + pt + '" width="' + w + '" height="' + (H - pt - pb) + '" class="fill-transparent"/>'; }).join('');
      var legend = '<div class="mt-2 flex flex-wrap gap-4 text-xs font-bold text-neutral-700">' + o.series.map(function (s) { return '<span class="inline-flex items-center gap-1.5"><span class="h-1 w-4 rounded-full ' + (s.legend || 'bg-secondary-600') + '"></span>' + esc(s.name) + '</span>'; }).join('') + ((o.targets || []).length ? '<span class="inline-flex items-center gap-1.5"><span class="h-0.5 w-4 border-t-2 border-dashed border-warning-600"></span>Mục tiêu</span>' : '') + '</div>';
      root.classList.add('relative');
      root.innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="w-full h-auto" role="img" aria-label="' + esc(o.label || 'Biểu đồ đường') + '">' + g + tg + lines + xl + hits + '</svg>' + legend;
      bindTip(root, root.querySelector('svg'));
    },
    /** UI.chart.donut(el, { items: [{ label, value, stroke, bg, onClick }], centerLabel }) */
    donut: function (root, o) {
      var total = o.items.reduce(function (s, i) { return s + i.value; }, 0);
      if (!total) { root.innerHTML = '<p class="py-12 text-center text-sm text-neutral-600">Chưa có dữ liệu trong kỳ này</p>'; return; }
      var R = 54, C = 2 * Math.PI * R, off = 0;
      var arcs = o.items.map(function (it, i) {
        var len = C * it.value / total; var s = '<circle data-i="' + i + '" data-tip="' + esc(it.label + ': ' + it.value + ' (' + UI.fmt.percent(it.value / total) + ')') + '" cx="70" cy="70" r="' + R + '" fill="none" stroke-width="22" class="' + it.stroke + ' cursor-pointer hover:opacity-80" stroke-dasharray="' + len + ' ' + (C - len) + '" stroke-dashoffset="' + (-off) + '" transform="rotate(-90 70 70)"/>';
        off += len; return s;
      }).join('');
      root.classList.add('relative');
      root.innerHTML = '<div class="flex flex-col sm:flex-row items-center gap-5"><svg viewBox="0 0 140 140" class="size-40 shrink-0" role="img" aria-label="Biểu đồ tròn">' + arcs + '<text x="70" y="68" text-anchor="middle" class="fill-neutral-800" font-size="22" font-weight="800">' + total + '</text><text x="70" y="86" text-anchor="middle" class="fill-neutral-600" font-size="10">' + esc(o.centerLabel || 'tổng') + '</text></svg>' +
        '<ul class="flex flex-col gap-1.5 w-full">' + o.items.map(function (it, i) { return '<li><button type="button" data-i="' + i + '" class="flex w-full items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-neutral-50"><span class="size-3 rounded-sm ' + it.bg + '"></span><span class="flex-1 text-left text-neutral-700">' + esc(it.label) + '</span><span class="font-bold tabular-nums">' + it.value + '</span></button></li>'; }).join('') + '</ul></div>';
      bindTip(root, root.querySelector('svg'));
      root.addEventListener('click', function (e) { var t = e.target.closest('[data-i]'); if (t && o.items[+t.getAttribute('data-i')].onClick) o.items[+t.getAttribute('data-i')].onClick(); });
    }
  };
  /** UI.kanban(el, { columns: [{ id, title }], cards: [{ id, col, title, meta }], onMove(cardId, toCol) }) — kéo thả bằng pointer events */
  UI.kanban = function (root, o) {
    function paint() {
      root.innerHTML = '<div class="flex gap-4 overflow-x-auto pb-2">' + o.columns.map(function (c) {
        var cs = o.cards.filter(function (k) { return k.col === c.id; });
        return '<section data-kcol="' + c.id + '" class="w-64 shrink-0 rounded-lg bg-neutral-100 p-3"><h3 class="mb-3 flex items-center justify-between text-sm font-bold text-neutral-700">' + esc(c.title) + UI.countBadge(cs.length) + '</h3><div class="flex min-h-16 flex-col gap-2">' +
          cs.map(function (k) { return '<article data-kcard="' + k.id + '" class="cursor-grab touch-none select-none rounded-lg border border-neutral-200 bg-white p-3 shadow-sm"><p class="text-sm font-bold">' + esc(k.title) + '</p>' + (k.meta ? '<p class="text-xs text-neutral-600">' + esc(k.meta) + '</p>' : '') + '</article>'; }).join('') + '</div></section>';
      }).join('') + '</div>';
    }
    var drag = null;
    root.addEventListener('pointerdown', function (e) {
      var c = e.target.closest('[data-kcard]'); if (!c) return;
      var r = c.getBoundingClientRect(); var ghost = c.cloneNode(true); ghost.style.cssText = 'position:fixed;pointer-events:none;z-index:80;width:' + r.width + 'px;left:' + r.left + 'px;top:' + r.top + 'px;opacity:.9';
      ghost.classList.add('shadow-lg', 'rotate-2'); document.body.appendChild(ghost); c.classList.add('opacity-40');
      drag = { id: c.getAttribute('data-kcard'), ghost: ghost, dx: e.clientX - r.left, dy: e.clientY - r.top, src: c };
    });
    window.addEventListener('pointermove', function (e) { if (!drag) return; drag.ghost.style.left = (e.clientX - drag.dx) + 'px'; drag.ghost.style.top = (e.clientY - drag.dy) + 'px'; });
    window.addEventListener('pointerup', function (e) {
      if (!drag) return; var d = drag; drag = null; d.ghost.remove(); d.src.classList.remove('opacity-40');
      var under = document.elementFromPoint(e.clientX, e.clientY); var col = under && under.closest && under.closest('[data-kcol]');
      if (col) { var card = o.cards.filter(function (k) { return String(k.id) === d.id; })[0]; var to = col.getAttribute('data-kcol'); if (card && card.col !== to) { card.col = to; paint(); if (o.onMove) o.onMove(card.id, to); } }
    });
    paint();
    return { refresh: paint };
  };

  /* ---------- Thương mại (website) ---------- */
  /** UI.priceTag({ price, oldPrice, from, unit, size: sm|md|lg }) — định dạng 120.000đ; giá giảm primary-700, giá gốc gạch ngang */
  UI.priceTag = function (o) {
    var disc = o.oldPrice && o.oldPrice > o.price;
    var sz = o.size === 'lg' ? 'text-xl md:text-2xl' : o.size === 'md' ? 'text-lg' : 'text-sm md:text-base';
    return '<span class="inline-flex flex-wrap items-baseline gap-x-2 gap-y-0.5"><span class="' + sz + ' font-extrabold tabular-nums ' + (disc ? 'text-primary-700' : 'text-neutral-800') + '">' + (o.from ? '<span class="text-xs font-bold text-neutral-600">từ </span>' : '') + UI.fmt.money(o.price) + (o.unit ? '<span class="text-sm font-bold text-neutral-600"> ' + esc(o.unit) + '</span>' : '') + '</span>' +
      (disc ? '<span class="text-xs md:text-sm text-neutral-500 line-through tabular-nums">' + UI.fmt.money(o.oldPrice) + '</span>' : '') +
      (disc && o.size === 'lg' ? UI.badge('Giảm ' + Math.round((1 - o.price / o.oldPrice) * 100) + '%', 'danger') : '') + '</span>';
  };
  /** UI.ratingStars(value, { count, size: xs|sm|md, showValue }) — sao đầy warning-500, rỗng neutral-300 */
  UI.ratingStars = function (v, o) {
    o = o || {}; var sz = o.size === 'md' ? 'size-5' : o.size === 'xs' ? 'size-3.5' : 'size-4';
    var full = Math.round(v || 0), s = '';
    for (var i = 1; i <= 5; i++) s += starSvg(sz + ' ' + (i <= full ? 'text-warning-500' : 'text-neutral-300'), i <= full);
    return '<span class="inline-flex items-center gap-1" aria-label="' + (Math.round((v || 0) * 10) / 10).toLocaleString('vi-VN') + ' trên 5 sao' + (o.count != null ? ', ' + o.count + ' đánh giá' : '') + '"><span class="inline-flex" aria-hidden="true">' + s + '</span>' +
      (o.showValue ? '<span class="text-sm font-bold text-neutral-800" aria-hidden="true">' + (Math.round(v * 10) / 10).toLocaleString('vi-VN') + '</span>' : '') +
      (o.count != null ? '<span class="text-xs text-neutral-600" aria-hidden="true">(' + o.count + ')</span>' : '') + '</span>';
  };
  /** UI.ratingPicker({ name, value }) — chọn sao 32px (Modal đánh giá) */
  UI.ratingPicker = function (o) {
    var v = o.value || 0, s = '';
    for (var i = 1; i <= 5; i++) s += '<button type="button" data-rate-val="' + i + '" aria-label="' + i + ' sao" aria-pressed="' + (i <= v) + '" class="rounded-md p-0.5 transition hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary-600">' + starSvg('size-8 ' + (i <= v ? 'text-warning-500' : 'text-neutral-300'), i <= v) + '</button>';
    return '<div data-rate class="inline-flex gap-1" role="group" aria-label="Chọn số sao">' + s + '<input type="hidden" name="' + esc(o.name) + '" value="' + (v || '') + '"></div>';
  };
  /** UI.ratingSummary(el, { avg, count, dist: {5:n,…}, photoCount, onFilter(key) }) — sao trung bình to + phân bố + lọc */
  UI.ratingSummary = function (root, o) {
    var act = 'all';
    function paint() {
      var bars = [5, 4, 3, 2, 1].map(function (k) {
        var n = o.dist[k] || 0, pct = o.count ? Math.round(n / o.count * 100) : 0;
        return '<button type="button" data-rf="' + k + '" aria-pressed="' + (act === String(k)) + '" class="flex w-full items-center gap-2 rounded-md border-2 px-2 py-1 text-sm transition ' + (act === String(k) ? 'border-primary-500 bg-primary-50' : 'border-transparent hover:bg-neutral-50') + '"><span class="w-8 font-bold text-neutral-700">' + k + '★</span><span class="h-2 flex-1 rounded-full bg-neutral-100 overflow-hidden"><span class="block h-full rounded-full bg-warning-500" style="width:' + pct + '%"></span></span><span class="w-8 text-right tabular-nums text-neutral-600">' + n + '</span></button>';
      }).join('');
      root.innerHTML = '<div class="grid gap-5 sm:grid-cols-5 items-center"><div class="sm:col-span-2 flex flex-col items-center gap-1 rounded-xl bg-warning-50 p-5"><p class="text-4xl font-extrabold text-neutral-800">' + (Math.round(o.avg * 10) / 10).toLocaleString('vi-VN') + '</p>' + UI.ratingStars(o.avg, { size: 'md' }) + '<p class="text-sm text-neutral-600">' + o.count + ' đánh giá</p></div>' +
        '<div class="sm:col-span-3 flex flex-col gap-1">' + bars + '<div class="mt-2 flex gap-2">' +
        '<button type="button" data-rf="all" class="h-9 rounded-full border-2 px-4 text-sm font-bold ' + (act === 'all' ? 'border-primary-500 bg-primary-100 text-primary-700' : 'border-neutral-200 text-neutral-700') + '">Tất cả</button>' +
        '<button type="button" data-rf="photo" class="h-9 rounded-full border-2 px-4 text-sm font-bold ' + (act === 'photo' ? 'border-primary-500 bg-primary-100 text-primary-700' : 'border-neutral-200 text-neutral-700') + '">Có ảnh (' + (o.photoCount || 0) + ')</button></div></div></div>';
    }
    root.addEventListener('click', function (e) { var b = e.target.closest('[data-rf]'); if (!b) return; act = b.getAttribute('data-rf'); paint(); if (o.onFilter) o.onFilter(act); });
    paint();
  };
  /** UI.reviewCard(r { name, stars, date, text, photos[], product }, { admin, statusHtml, actionsHtml }) — tên che một phần, nhãn "Đã mua hàng" */
  UI.reviewCard = function (r, o) {
    o = o || {};
    return '<article class="rounded-xl border border-neutral-200 p-4 ' + (o.hidden ? 'bg-neutral-50' : 'bg-white') + '"><div class="flex flex-wrap items-center gap-2">' + UI.avatar(r.name) + '<span class="font-bold text-neutral-800">' + esc(r.name) + '</span>' + UI.tag('Đã mua hàng', 'success', 'circle-check') + (o.statusHtml || '') + '</div>' +
      '<div class="mt-2 flex flex-wrap items-center gap-2">' + UI.ratingStars(r.stars, { size: 'sm' }) + '<span class="text-xs text-neutral-600">' + esc(UI.fmt.date(r.date)) + (r.variant ? ' · ' + esc(r.variant) : '') + '</span></div>' +
      (r.product ? '<p class="mt-1 text-xs font-bold text-primary-700">' + esc(r.product) + '</p>' : '') +
      '<p class="mt-2 text-base text-neutral-700 break-words">' + esc(r.text) + '</p>' +
      (r.photos && r.photos.length ? '<div class="mt-3 flex flex-wrap gap-2">' + r.photos.map(function (p, i) { return '<button type="button" data-zoom=\'' + esc(JSON.stringify(r.photos)) + '\' data-zoom-i="' + i + '" class="size-16 overflow-hidden rounded-md border border-neutral-200 focus-visible:ring-2 focus-visible:ring-primary-600" aria-label="Phóng to ảnh ' + (i + 1) + '">' + UI.img({ src: p, alt: 'Ảnh khách gửi ' + (i + 1) }) + '</button>'; }).join('') + '</div>' : '') +
      (o.actionsHtml ? '<div class="mt-3 flex gap-2">' + o.actionsHtml + '</div>' : '') + '</article>';
  };
  /** UI.lightbox(images [url], index) — phóng to ảnh toàn màn hình, mũi tên chuyển ảnh */
  UI.lightbox = function (imgs, i) {
    i = i || 0;
    var m = UI.modal({ title: 'Xem ảnh', size: 'lg', body: '<div class="relative"><div data-lb class="aspect-square sm:aspect-video overflow-hidden rounded-lg bg-neutral-900"></div>' + (imgs.length > 1 ? '<div class="mt-3 flex items-center justify-between">' + UI.iconButton({ icon: 'chevron-left', label: 'Ảnh trước', variant: 'outline', attrs: { 'data-lb-prev': '' } }) + '<span data-lb-n class="text-sm font-bold text-neutral-600"></span>' + UI.iconButton({ icon: 'chevron-right', label: 'Ảnh sau', variant: 'outline', attrs: { 'data-lb-next': '' } }) + '</div>' : '') + '</div>' });
    function show() { m.body.querySelector('[data-lb]').innerHTML = UI.img({ src: imgs[i], alt: 'Ảnh ' + (i + 1), cls: 'object-contain', eager: true }); var n = m.body.querySelector('[data-lb-n]'); if (n) n.textContent = (i + 1) + ' / ' + imgs.length; }
    m.body.addEventListener('click', function (e) { if (e.target.closest('[data-lb-prev]')) { i = (i - 1 + imgs.length) % imgs.length; show(); } if (e.target.closest('[data-lb-next]')) { i = (i + 1) % imgs.length; show(); } });
    m.el.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { i = (i - 1 + imgs.length) % imgs.length; show(); } if (e.key === 'ArrowRight') { i = (i + 1) % imgs.length; show(); } });
    show();
  };
  /** UI.productGallery(el, { images: [url], alt }) — desktop ảnh nhỏ dọc bên trái, mobile vuốt ngang + chấm; bấm ảnh lớn → phóng to → { show(i) } */
  UI.productGallery = function (root, o) {
    var i = 0;
    function paint() {
      root.innerHTML =
        '<div class="hidden md:flex gap-3"><div class="flex flex-col gap-2 w-16 shrink-0">' + o.images.map(function (src, k) {
          return '<button type="button" data-g="' + k + '" aria-label="Xem ảnh ' + (k + 1) + '" aria-current="' + (k === i) + '" class="aspect-square overflow-hidden rounded-lg border-2 ' + (k === i ? 'border-primary-500' : 'border-transparent hover:border-primary-300') + '">' + UI.img({ src: src, alt: o.alt + ' ' + (k + 1) }) + '</button>';
        }).join('') + '</div><button type="button" data-g-zoom class="relative flex-1 aspect-square overflow-hidden rounded-xl bg-neutral-100 cursor-zoom-in" aria-label="Phóng to ảnh">' + UI.img({ src: o.images[i], alt: o.alt, eager: true }) + '</button></div>' +
        '<div class="md:hidden"><div data-g-track class="flex snap-x snap-mandatory overflow-x-auto no-scrollbar rounded-xl">' + o.images.map(function (src, k) { return '<button type="button" data-g-zoom="' + k + '" class="w-full shrink-0 snap-center aspect-square bg-neutral-100" aria-label="Phóng to ảnh ' + (k + 1) + '">' + UI.img({ src: src, alt: o.alt + ' ' + (k + 1), eager: k === 0 }) + '</button>'; }).join('') + '</div>' +
        '<div class="mt-2 flex justify-center gap-1.5" aria-hidden="true">' + o.images.map(function (s, k) { return '<span data-g-dot="' + k + '" class="h-2 rounded-full transition-all ' + (k === i ? 'w-5 bg-primary-500' : 'w-2 bg-neutral-300') + '"></span>'; }).join('') + '</div></div>';
      var tr = root.querySelector('[data-g-track]');
      tr.addEventListener('scroll', function () { var k = Math.round(tr.scrollLeft / tr.clientWidth); root.querySelectorAll('[data-g-dot]').forEach(function (d, j) { d.className = 'h-2 rounded-full transition-all ' + (j === k ? 'w-5 bg-primary-500' : 'w-2 bg-neutral-300'); }); });
    }
    root.addEventListener('click', function (e) {
      var t = e.target.closest('[data-g]'); if (t) { i = +t.getAttribute('data-g'); paint(); return; }
      var z = e.target.closest('[data-g-zoom]'); if (z) UI.lightbox(o.images, z.getAttribute('data-g-zoom') ? +z.getAttribute('data-g-zoom') : i);
    });
    paint();
    return { show: function (k) { if (k >= 0 && k < o.images.length) { i = k; paint(); } }, setImages: function (imgs) { o.images = imgs; i = 0; paint(); } };
  };
  /** UI.variantTiles(el, { variants: [{ id, label, price, oldPrice, img, disabled, note }], value, onChange(v), label }) — ô có ảnh nhỏ cho từng vị / gói (q15) */
  UI.variantTiles = function (root, o) {
    var val = o.value;
    function paint() {
      root.innerHTML = '<div role="radiogroup" aria-label="' + esc(o.label || 'Chọn loại / khối lượng') + '" class="grid grid-cols-2 sm:grid-cols-3 gap-2">' + o.variants.map(function (v) {
        var on = v.id === val;
        return '<button type="button" role="radio" aria-checked="' + on + '" data-v="' + esc(v.id) + '" ' + (v.disabled ? 'aria-disabled="true"' : '') +
          ' class="relative flex min-h-16 items-center gap-2.5 rounded-lg border-2 p-2 text-left transition ' + (v.disabled ? 'cursor-not-allowed opacity-50 border-neutral-200 bg-neutral-50' : on ? 'border-primary-500 bg-primary-50' : 'border-neutral-200 bg-white hover:border-primary-300') + '">' +
          '<span class="size-12 shrink-0 overflow-hidden rounded-md bg-neutral-100">' + UI.img({ src: v.img, alt: v.label }) + '</span><span class="flex min-w-0 flex-col"><span class="text-sm font-bold text-neutral-800 ' + (v.disabled ? 'line-through' : '') + '">' + esc(v.label) + '</span>' +
          '<span class="text-xs font-bold ' + (v.disabled ? 'text-danger-700' : 'text-neutral-600') + '">' + (v.disabled ? 'Hết hàng' : UI.fmt.money(v.price)) + '</span></span>' +
          (on ? '<span class="absolute -right-1.5 -top-1.5 inline-flex size-5 items-center justify-center rounded-full bg-primary-500 text-neutral-800">' + ic('check', 'size-3.5') + '</span>' : '') + '</button>';
      }).join('') + '</div>';
    }
    root.addEventListener('click', function (e) { var b = e.target.closest('[data-v]'); if (!b || b.getAttribute('aria-disabled') === 'true') return; val = b.getAttribute('data-v'); paint(); if (o.onChange) o.onChange(o.variants.filter(function (v) { return v.id === val; })[0]); });
    root.addEventListener('keydown', function (e) {
      if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].indexOf(e.key) < 0) return; e.preventDefault();
      var ok = o.variants.filter(function (v) { return !v.disabled; }); var k = ok.findIndex(function (v) { return v.id === val; });
      k = (k + (e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1) + ok.length) % ok.length; val = ok[k].id; paint(); root.querySelector('[data-v="' + val + '"]').focus(); if (o.onChange) o.onChange(ok[k]);
    });
    paint();
    return { value: function () { return val; }, set: function (id) { val = id; paint(); } };
  };
  /** UI.quantityStepper({ value, min, max, size: md|sm, name, limitMsg, label }) — − [số] +; phát sự kiện 'qtychange' (detail.value) */
  UI.quantityStepper = function (o) {
    o = o || {}; var v = o.value || 1, min = o.min == null ? 1 : o.min, max = o.max == null ? 99 : o.max, sm = o.size === 'sm';
    var b = 'inline-flex ' + (sm ? 'size-9' : 'size-11') + ' items-center justify-center rounded-full text-neutral-800 transition hover:bg-primary-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent';
    return '<div class="inline-flex flex-col gap-1" data-qty data-min="' + min + '" data-max="' + max + '" ' + (o.limitMsg ? 'data-limit-msg="' + esc(o.limitMsg) + '"' : '') + ' ' + attrs(o.attrs) + '>' +
      '<div class="inline-flex items-center rounded-full border border-neutral-300 bg-white"><button type="button" data-qty-dec class="' + b + '" aria-label="Giảm số lượng" ' + (v <= min ? 'disabled' : '') + '>' + ic('minus', 'size-4') + '</button>' +
      '<input data-qty-input ' + (o.name ? 'name="' + esc(o.name) + '"' : '') + ' inputmode="numeric" aria-label="' + esc(o.label || 'Số lượng') + '" value="' + v + '" class="' + (sm ? 'w-9 text-sm' : 'w-11 text-base') + ' bg-transparent text-center font-bold tabular-nums text-neutral-800 focus:outline-none">' +
      '<button type="button" data-qty-inc class="' + b + '" aria-label="Tăng số lượng" ' + (v >= max ? 'disabled' : '') + '>' + ic('plus', 'size-4') + '</button></div>' +
      '<p data-qty-err class="hidden text-xs font-bold text-danger-700" role="alert"></p></div>';
  };
  /** UI.productCard(vm { id, href, name, img, img2, petTags:[{label,tone}], rating, reviews, price, oldPrice, from, badges:[{text,tone}], kind: normal|pate|out, cartAttrs }) — ô sản phẩm (q13) */
  UI.productCard = function (p) {
    var out = p.kind === 'out', pate = p.kind === 'pate';
    var btn = pate
      ? '<a href="' + esc(p.href) + '" class="absolute bottom-2 right-2 inline-flex h-11 items-center gap-1.5 rounded-full bg-secondary-300 px-4 text-sm font-bold text-secondary-800 shadow-md transition hover:bg-secondary-200">' + ic('calendar-heart', 'size-4') + 'Đặt trước</a>'
      : '<button type="button" ' + attrs(p.cartAttrs || { 'data-add-cart': p.id }) + ' data-permission="BOOK.CART.CREATE" ' + (out ? 'disabled' : '') + ' aria-label="Thêm ' + esc(p.name) + ' vào giỏ" class="absolute bottom-2 right-2 inline-flex size-11 items-center justify-center rounded-full bg-primary-500 text-neutral-800 shadow-md transition hover:bg-primary-400 hover:shadow-brand active:scale-95 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none disabled:cursor-not-allowed">' + ic('shopping-cart', 'size-5') + '</button>';
    return '<article class="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition duration-300 motion-safe:hover:-translate-y-0.5 hover:shadow-md min-w-0">' +
      '<div class="relative"><a href="' + esc(p.href) + '" class="relative block aspect-square overflow-hidden bg-neutral-100" tabindex="-1" aria-hidden="true">' + UI.img({ src: p.img, alt: p.name, cls: 'transition duration-500 ' + (out ? 'opacity-60' : 'group-hover:scale-105') }) +
      (p.img2 && !out ? '<span class="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">' + UI.img({ src: p.img2, alt: '' }) + '</span>' : '') + '</a>' +
      '<div class="absolute left-2 top-2 flex flex-col items-start gap-1">' + (p.badges || []).slice(0, 2).map(function (b) { return UI.badge(b.text, b.tone); }).join('') + '</div>' + btn + '</div>' +
      '<div class="flex flex-1 flex-col gap-1.5 p-3 md:p-4"><div class="flex flex-wrap gap-1">' + (p.petTags || []).map(function (t) { return UI.tag(t.label, t.tone); }).join('') + '</div>' +
      '<h3 class="text-sm md:text-base font-bold leading-snug text-neutral-800 line-clamp-2"><a href="' + esc(p.href) + '" class="hover:text-primary-700 focus-visible:outline-none focus-visible:underline">' + esc(p.name) + '</a></h3>' +
      (p.reviews ? UI.ratingStars(p.rating, { size: 'xs', count: p.reviews }) : '') +
      '<div class="mt-auto pt-1">' + UI.priceTag({ price: p.price, oldPrice: p.oldPrice, from: p.from, unit: p.unit }) + '</div></div></article>';
  };
  /** UI.comboCard(vm { id, href, name, img, items: [string], price, retail, save, out }) */
  UI.comboCard = function (c) {
    var more = c.items.length > 3 ? '<li class="text-neutral-600">và ' + (c.items.length - 3) + ' món</li>' : '';
    return '<article class="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition duration-300 motion-safe:hover:-translate-y-0.5 hover:shadow-md min-w-0">' +
      '<div class="relative"><a href="' + esc(c.href) + '" class="block aspect-video overflow-hidden bg-neutral-100" tabindex="-1" aria-hidden="true">' + UI.img({ src: c.img, alt: c.name, cls: 'transition duration-500 ' + (c.out ? 'opacity-60' : 'group-hover:scale-105') }) + '</a>' +
      '<div class="absolute left-2 top-2 flex gap-1">' + (c.out ? UI.badge('Hết hàng', 'dark') : '') + (c.save > 0 ? UI.badge('Tiết kiệm ' + UI.fmt.money(c.save), 'success') : '') + '</div>' +
      '<button type="button" data-add-combo="' + esc(c.id) + '" data-permission="BOOK.CART.CREATE" ' + (c.out ? 'disabled' : '') + ' aria-label="Thêm ' + esc(c.name) + ' vào giỏ" class="absolute bottom-2 right-2 inline-flex size-11 items-center justify-center rounded-full bg-primary-500 text-neutral-800 shadow-md transition hover:bg-primary-400 hover:shadow-brand active:scale-95 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none disabled:cursor-not-allowed">' + ic('shopping-cart', 'size-5') + '</button></div>' +
      '<div class="flex flex-1 flex-col gap-2 p-4"><h3 class="text-base font-bold text-neutral-800 line-clamp-2"><a href="' + esc(c.href) + '" class="hover:text-primary-700">' + esc(c.name) + '</a></h3>' +
      '<ul class="flex flex-col gap-0.5 text-sm text-neutral-700">' + c.items.slice(0, 3).map(function (t) { return '<li class="flex gap-1.5">' + ic('check', 'size-4 mt-0.5 text-success-600') + '<span class="min-w-0">' + esc(t) + '</span></li>'; }).join('') + more + '</ul>' +
      '<div class="mt-auto pt-1">' + UI.priceTag({ price: c.price, oldPrice: c.retail, size: 'md' }) + '</div></div></article>';
  };
  /** UI.petTypeTile({ label, img, href, bg, fg, variant: tile|chip, active, icon }) — ô chọn loại thú cưng */
  UI.petTypeTile = function (o) {
    if (o.variant === 'chip') {
      return '<a href="' + esc(o.href) + '" ' + (o.active ? 'aria-current="true"' : '') + ' class="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border-2 px-4 text-sm font-bold whitespace-nowrap transition ' + (o.active ? 'border-primary-500 bg-primary-100 text-primary-700' : 'border-neutral-200 bg-white text-neutral-700 hover:border-primary-300') + '">' + (o.thumb ? '<span class="size-7 overflow-hidden rounded-full">' + UI.img({ src: o.thumb, alt: '' }) + '</span>' : '') + esc(o.label) + '</a>';
    }
    return '<a href="' + esc(o.href) + '" class="group flex flex-col items-center gap-2 md:gap-3 rounded-2xl ' + o.bg + ' p-2.5 md:p-5 transition hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary-600">' +
      '<span class="block aspect-square w-full overflow-hidden rounded-xl">' + UI.img({ src: o.img, alt: o.label, cls: 'transition duration-500 group-hover:scale-105' }) + '</span>' +
      '<span class="text-base md:text-xl font-extrabold ' + o.fg + '">' + esc(o.label) + '</span>' + (o.sub ? '<span class="-mt-1.5 hidden md:block text-sm ' + o.fg + '">' + esc(o.sub) + '</span>' : '') + '</a>';
  };
  /** UI.testimonial({ name, stars, text, product, productHref, photo }) */
  UI.testimonial = function (r) {
    return '<figure class="relative flex h-full flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-5"><span class="absolute right-4 top-1 text-6xl font-extrabold leading-none text-primary-300 select-none" aria-hidden="true">“</span>' +
      UI.ratingStars(r.stars, { size: 'sm' }) + '<blockquote class="text-base text-neutral-700 line-clamp-4">' + esc(r.text) + '</blockquote>' +
      '<figcaption class="mt-auto flex items-center gap-3 pt-2">' + (r.photo ? '<span class="size-10 overflow-hidden rounded-full">' + UI.img({ src: r.photo, alt: '' }) + '</span>' : UI.avatar(r.name, 40)) + '<span class="min-w-0"><span class="block font-bold text-neutral-800">' + esc(r.name) + '</span>' +
      '<a href="' + esc(r.productHref) + '" class="block truncate text-sm text-primary-700 hover:underline">' + esc(r.product) + '</a></span></figcaption></figure>';
  };
  /** UI.postCard(post { href, title, img, category, summary, date, readMin }, variant: vertical|horizontal|featured) */
  UI.postCard = function (p, v) {
    var meta = '<p class="text-xs text-neutral-600">' + esc(UI.fmt.date(p.date)) + (p.readMin ? ' · ' + p.readMin + ' phút đọc' : '') + '</p>';
    if (v === 'horizontal' || v === 'featured') {
      var big = v === 'featured';
      return '<article class="group grid ' + (big ? 'md:grid-cols-5' : 'grid-cols-5') + ' gap-4 rounded-xl border border-neutral-200 bg-white p-3 transition hover:shadow-md motion-safe:hover:-translate-y-0.5"><a href="' + esc(p.href) + '" class="' + (big ? 'md:col-span-3' : 'col-span-2') + ' block aspect-video overflow-hidden rounded-lg" tabindex="-1" aria-hidden="true">' + UI.img({ src: p.img, alt: p.title, cls: 'transition duration-500 group-hover:scale-105' }) + '</a>' +
        '<div class="' + (big ? 'md:col-span-2 md:py-3' : 'col-span-3') + ' flex min-w-0 flex-col gap-2">' + UI.tag(p.category, 'secondary') + '<h3 class="' + (big ? 'text-xl md:text-2xl font-extrabold' : 'text-base font-bold') + ' text-neutral-800 line-clamp-2"><a href="' + esc(p.href) + '" class="hover:text-primary-700">' + esc(p.title) + '</a></h3>' +
        (big || p.summary ? '<p class="text-sm text-neutral-600 line-clamp-3 ' + (big ? '' : 'hidden sm:block') + '">' + esc(p.summary) + '</p>' : '') + meta + '</div></article>';
    }
    return '<article class="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition hover:shadow-md motion-safe:hover:-translate-y-0.5"><a href="' + esc(p.href) + '" class="block aspect-video overflow-hidden" tabindex="-1" aria-hidden="true">' + UI.img({ src: p.img, alt: p.title, cls: 'transition duration-500 group-hover:scale-105' }) + '</a>' +
      '<div class="flex flex-1 flex-col gap-2 p-4">' + '<div>' + UI.tag(p.category, 'secondary') + '</div><h3 class="text-lg font-bold text-neutral-800 line-clamp-2"><a href="' + esc(p.href) + '" class="hover:text-primary-700">' + esc(p.title) + '</a></h3><p class="text-sm text-neutral-600 line-clamp-3">' + esc(p.summary) + '</p><div class="mt-auto">' + meta + '</div></div></article>';
  };
  /** UI.storeInfo(s { address, hours, phone, phoneRaw, zalo, facebook }, variant: full|compact) — bản đồ lỗi → địa chỉ chữ */
  UI.storeInfo = function (s, v) {
    var row = function (icon, label, val) { return '<div class="flex gap-3"><span class="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-600">' + ic(icon) + '</span><div class="min-w-0"><p class="text-xs font-bold text-neutral-600">' + label + '</p><p class="text-base text-neutral-800 break-words">' + val + '</p></div></div>'; };
    var rows = row('map-pin', 'Địa chỉ', esc(s.address)) + row('clock', 'Giờ mở cửa', esc(s.hours)) + row('phone', 'Điện thoại', '<a href="tel:' + esc(s.phoneRaw) + '" class="font-bold text-primary-700 hover:underline">' + esc(s.phone) + '</a>');
    if (v === 'compact') return '<div class="flex flex-col gap-3">' + rows + '</div>';
    return '<div class="flex flex-col gap-4">' + rows + '<div class="grid gap-2 sm:grid-cols-3 pt-2">' +
      UI.button({ label: 'Gọi ngay', icon: 'phone', href: 'tel:' + s.phoneRaw, full: true }) +
      UI.button({ label: 'Zalo', icon: 'zalo', variant: 'secondary', href: s.zalo, full: true, attrs: { target: '_blank', rel: 'noopener' } }) +
      UI.button({ label: 'Facebook', icon: 'facebook', variant: 'outline', href: s.facebook, full: true, attrs: { target: '_blank', rel: 'noopener' } }) + '</div></div>';
  };
  /** UI.section({ id, title, link: { label, href }, body, tone: plain|pink|mint|white, cls, inner }) — khối trang: padding dọc 48px / 80px (lg) */
  UI.section = function (o) {
    var bg = { pink: 'bg-primary-100', mint: 'bg-secondary-50', white: 'bg-white' }[o.tone] || '';
    return '<section ' + (o.id ? 'id="' + o.id + '"' : '') + ' class="py-12 lg:py-20 ' + bg + ' ' + (o.cls || '') + '"><div class="mx-auto max-w-content px-4 md:px-6 lg:px-8">' +
      (o.title ? '<div class="mb-6 md:mb-8 flex items-end justify-between gap-4" data-reveal><h2 class="text-2xl font-extrabold text-neutral-800">' + o.title + '</h2>' + (o.link ? '<a href="' + esc(o.link.href) + '" class="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-primary-700 hover:underline">' + esc(o.link.label) + ic('arrow-right', 'size-4') + '</a>' : '') + '</div>' : '') +
      o.body + '</div></section>';
  };
  /** UI.hero({ title, text, img, imgAlt, actions(html), points: [text] }) — chia đôi ảnh – chữ (lg), xếp dọc mobile */
  UI.hero = function (o) {
    return '<section class="relative overflow-hidden"><div class="mx-auto grid max-w-content items-center gap-6 px-4 pb-10 pt-6 md:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-16 lg:pt-10">' +
      '<div class="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl bg-primary-100 shadow-md anim-in">' + UI.img({ src: o.img, alt: o.imgAlt, eager: true }) + '</div>' +
      '<div class="flex flex-col gap-5 anim-in" style="animation-delay:.08s">' + (o.eyebrow || '') + '<h1 class="text-3xl lg:text-4xl font-extrabold text-neutral-800 text-balance">' + o.title + '</h1>' +
      '<p class="text-lg text-neutral-600 max-w-xl">' + esc(o.text) + '</p><div class="flex flex-col sm:flex-row sm:items-center gap-3">' + o.actions + '</div>' +
      (o.points ? '<ul class="flex flex-wrap gap-x-5 gap-y-2 pt-1">' + o.points.map(function (p) { return '<li class="inline-flex items-center gap-2 text-sm font-bold text-neutral-700"><span class="inline-flex size-6 items-center justify-center rounded-full bg-success-100 text-success-700">' + ic('check', 'size-4') + '</span>' + esc(p) + '</li>'; }).join('') + '</ul>' : '') +
      '</div></div></section>';
  };
  /** UI.ctaSection({ title, text, actions(html), tone: pink|mint, img }) */
  UI.ctaSection = function (o) {
    return '<div class="relative overflow-hidden rounded-2xl ' + (o.tone === 'mint' ? 'bg-secondary-100' : 'bg-primary-100') + ' p-6 md:p-8 ' + (o.img ? 'grid gap-6 md:grid-cols-5 items-center' : '') + '">' +
      '<div class="' + (o.img ? 'md:col-span-3' : '') + ' flex flex-col gap-3"><h2 class="text-2xl font-extrabold text-neutral-800">' + esc(o.title) + '</h2>' + (o.text ? '<p class="text-base text-neutral-700 max-w-xl">' + esc(o.text) + '</p>' : '') + '<div class="mt-1 flex flex-col sm:flex-row gap-3">' + o.actions + '</div></div>' +
      (o.img ? '<div class="md:col-span-2 aspect-video overflow-hidden rounded-xl">' + UI.img({ src: o.img, alt: o.imgAlt || '' }) + '</div>' : '') + '</div>';
  };
  /** UI.freeShipProgress(subtotal, { threshold, compact }) — "Mua thêm {x} để được miễn phí giao hàng" (BR-BOOK-005) */
  UI.freeShipProgress = function (sub, o) {
    o = o || {}; var th = o.threshold || 400000;
    if (sub >= th) return '<div class="flex items-center gap-2 rounded-lg bg-success-100 px-4 py-3 text-sm font-bold text-success-700">' + ic('truck') + 'Đơn của bạn được miễn phí giao hàng 🎉</div>';
    var pct = Math.round(sub / th * 100);
    return '<div class="flex flex-col gap-2 ' + (o.compact ? '' : 'rounded-lg bg-white border border-neutral-200 px-4 py-3') + '"><p class="flex items-center gap-2 text-sm text-neutral-700">' + ic('truck', 'text-primary-600') + '<span>Mua thêm <b class="text-primary-700">' + UI.fmt.money(th - sub) + '</b> để được miễn phí giao hàng</span></p>' +
      '<div class="h-2 rounded-full bg-primary-100 overflow-hidden" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100" aria-label="Tiến độ miễn phí giao hàng"><div class="h-full rounded-full bg-primary-500 transition-all duration-500" style="width:' + pct + '%"></div></div>' +
      (o.note ? '<p class="text-xs text-neutral-600">' + esc(o.note) + '</p>' : '') + '</div>';
  };
  /** UI.cartLine(vm { id, href, img, name, variant, items:[string], price, oldPrice, qty, max, total, error, errorHtml }, { compact, readonly }) */
  UI.cartLine = function (l, o) {
    o = o || {};
    var step = o.readonly ? '<span class="text-sm font-bold text-neutral-700">× ' + l.qty + '</span>' : UI.quantityStepper({ value: l.qty, max: l.max, size: 'sm', limitMsg: 'Chỉ còn ' + l.max + ' sản phẩm', label: 'Số lượng ' + l.name, attrs: { 'data-line-qty': l.id } });
    return '<div data-cart-line="' + esc(l.id) + '" class="relative flex gap-3 rounded-xl border ' + (l.error ? 'border-danger-500' : 'border-neutral-200') + ' bg-white p-3 ' + (o.compact ? '' : 'md:gap-4 md:p-4') + ' transition">' +
      '<a href="' + esc(l.href) + '" class="size-16 ' + (o.compact ? '' : 'md:size-20') + ' shrink-0 overflow-hidden rounded-lg bg-neutral-100">' + UI.img({ src: l.img, alt: l.name }) + '</a>' +
      '<div class="flex min-w-0 flex-1 flex-col gap-2 ' + (o.compact ? '' : 'md:flex-row md:items-center md:gap-4') + '">' +
      '<div class="min-w-0 flex-1 ' + (o.readonly ? '' : 'pr-9') + ' ' + (o.compact ? '' : 'md:pr-0') + '"><a href="' + esc(l.href) + '" class="text-sm md:text-base font-bold text-neutral-800 line-clamp-2 hover:text-primary-700">' + esc(l.name) + '</a>' +
      (l.variant ? '<p class="text-sm text-neutral-600">' + esc(l.variant) + '</p>' : '') +
      (l.items ? '<ul class="mt-1 text-xs text-neutral-600">' + l.items.map(function (t) { return '<li>· ' + esc(t) + '</li>'; }).join('') + '</ul>' : '') +
      '<div class="mt-1 ' + (o.compact ? '' : 'md:hidden') + '">' + UI.priceTag({ price: l.price, oldPrice: l.oldPrice }) + '</div></div>' +
      (o.compact ? '' : '<div class="hidden w-28 text-right md:block">' + UI.priceTag({ price: l.price, oldPrice: l.oldPrice }) + '</div>') +
      '<div class="flex items-center justify-between gap-3 ' + (o.compact ? '' : 'md:w-32 md:justify-center') + '">' + step + '<span class="text-sm font-extrabold tabular-nums text-neutral-800 ' + (o.compact ? '' : 'md:hidden') + '">' + UI.fmt.money(l.total) + '</span></div>' +
      (o.compact ? '' : '<div class="hidden w-28 text-right text-base font-extrabold tabular-nums text-neutral-800 md:block">' + UI.fmt.money(l.total) + '</div>') + '</div>' +
      (o.readonly ? '' : '<button type="button" data-cart-remove="' + esc(l.id) + '" class="absolute right-2 top-2 inline-flex size-10 items-center justify-center rounded-full text-neutral-500 hover:bg-danger-50 hover:text-danger-700 ' + (o.compact ? '' : 'md:static md:self-center') + '" aria-label="Xóa ' + esc(l.name) + ' khỏi giỏ">' + ic('trash-2', 'size-5') + '</button>') +
      '</div>' + (l.error ? '<div class="-mt-1 mb-1 rounded-b-xl bg-danger-50 px-4 py-2 text-sm font-bold text-danger-700 flex flex-wrap items-center gap-2">' + ic('triangle-alert', 'size-4') + '<span class="flex-1">' + esc(l.error) + '</span>' + (l.errorHtml || '') + '</div>' : '');
  };
  /** UI.checkoutStepper(step 1..3, labels) — ngang (≥ md), gọn "Bước x/3 — …" + thanh % (< md) */
  UI.checkoutStepper = function (step, labels) {
    labels = labels || ['Người nhận & địa chỉ', 'Giao hàng & thanh toán', 'Xem lại & đặt hàng'];
    var hz = '<ol class="hidden md:flex items-center gap-3">' + labels.map(function (l, i) {
      var n = i + 1, done = n < step, cur = n === step;
      var dot = done ? '<span class="inline-flex size-8 items-center justify-center rounded-full bg-success-500 text-white">' + ic('check', 'size-4') + '</span>'
        : '<span class="inline-flex size-8 items-center justify-center rounded-full ' + (cur ? 'bg-primary-500 text-neutral-800 ring-4 ring-primary-200' : 'border-2 border-neutral-300 text-neutral-500') + ' font-extrabold">' + n + '</span>';
      var inner = dot + '<span class="text-sm ' + (cur ? 'font-extrabold text-neutral-800' : done ? 'font-bold text-neutral-800' : 'font-semibold text-neutral-500') + '">' + esc(l) + '</span>';
      return (i ? '<li aria-hidden="true" class="h-1 flex-1 rounded-full ' + (n <= step ? 'bg-success-500' : 'bg-neutral-200') + '"></li>' : '') +
        '<li class="shrink-0">' + (done ? '<button type="button" data-step-go="' + n + '" class="inline-flex items-center gap-2 rounded-full pr-2 hover:bg-white">' + inner + '</button>' : '<span class="inline-flex items-center gap-2" ' + (cur ? 'aria-current="step"' : '') + '>' + inner + '</span>') + '</li>';
    }).join('') + '</ol>';
    var mb = '<div class="md:hidden"><p class="text-sm font-extrabold text-neutral-800">Bước ' + step + '/' + labels.length + ' — ' + esc(labels[step - 1]) + '</p><div class="mt-2 h-2 rounded-full bg-primary-100 overflow-hidden"><div class="h-full rounded-full bg-primary-500" style="width:' + Math.round(step / labels.length * 100) + '%"></div></div></div>';
    return '<nav aria-label="Các bước thanh toán">' + hz + mb + '</nav>';
  };
  /** UI.orderSummary({ title, rows: [{ label, value(html), tone }], total, totalLabel, points, note, footer(html), collapsible, headExtra }) — tổng cộng xl 800 */
  UI.orderSummary = function (o) {
    var rows = o.rows.filter(Boolean).map(function (r) { return '<div class="flex items-start justify-between gap-3 text-sm"><dt class="text-neutral-600">' + esc(r.label) + '</dt><dd class="text-right font-bold tabular-nums ' + (r.tone === 'success' ? 'text-success-700' : r.tone === 'primary' ? 'text-primary-700' : 'text-neutral-800') + '">' + r.value + '</dd></div>'; }).join('');
    var inner = (o.headExtra || '') + '<dl class="flex flex-col gap-2.5">' + rows + '</dl><div class="my-4 h-px bg-neutral-200"></div>' +
      '<div class="flex items-baseline justify-between gap-3"><span class="text-base font-bold text-neutral-800">' + esc(o.totalLabel || 'Tổng cộng') + '</span><span class="text-xl font-extrabold tabular-nums text-neutral-800">' + UI.fmt.money(o.total) + '</span></div>' +
      (o.points ? '<p class="mt-2 inline-flex items-center gap-1.5 rounded-full bg-secondary-100 px-3 py-1 text-xs font-bold text-secondary-700">' + ic('gift', 'size-3.5') + esc(o.points) + '</p>' : '') +
      (o.note ? '<div class="mt-3">' + o.note + '</div>' : '') + (o.footer ? '<div class="mt-4">' + o.footer + '</div>' : '');
    var box = 'rounded-xl border border-neutral-200 bg-white p-4 md:p-5';
    if (!o.collapsible) return '<section class="' + box + '" aria-label="Tóm tắt đơn">' + (o.title ? '<h2 class="mb-4 text-lg font-bold text-neutral-800">' + esc(o.title) + '</h2>' : '') + inner + '</section>';
    return '<details class="lg:hidden group ' + box + '"><summary class="flex cursor-pointer items-center justify-between gap-3 font-bold text-neutral-800"><span>Xem tóm tắt đơn · ' + UI.fmt.money(o.total) + '</span>' + ic('chevron-down', 'transition group-open:rotate-180') + '</summary><div class="pt-4">' + inner + '</div></details>' +
      '<section class="hidden lg:block ' + box + '" aria-label="Tóm tắt đơn">' + (o.title ? '<h2 class="mb-4 text-lg font-bold text-neutral-800">' + esc(o.title) + '</h2>' : '') + inner + '</section>';
  };
  /** UI.qr(text, size) — mã QR minh họa (prototype, không quét được) */
  UI.qr = function (text, px) {
    var N = 25, h = 0, s = String(text); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    function rnd() { h ^= h << 13; h >>>= 0; h ^= h >> 17; h ^= h << 5; h >>>= 0; return h / 4294967296; }
    function finder(x, y) { return '<rect x="' + x + '" y="' + y + '" width="7" height="7" class="fill-neutral-900"/><rect x="' + (x + 1) + '" y="' + (y + 1) + '" width="5" height="5" class="fill-white"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="3" height="3" class="fill-neutral-900"/>'; }
    var cells = '';
    for (var y = 0; y < N; y++) for (var x = 0; x < N; x++) {
      var inF = (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9); if (inF) continue;
      if (rnd() > 0.52) cells += '<rect x="' + x + '" y="' + y + '" width="1" height="1"/>';
    }
    return '<svg viewBox="-2 -2 ' + (N + 4) + ' ' + (N + 4) + '" width="' + (px || 180) + '" height="' + (px || 180) + '" role="img" aria-label="Mã QR chuyển khoản (minh họa)" shape-rendering="crispEdges"><rect x="-2" y="-2" width="' + (N + 4) + '" height="' + (N + 4) + '" class="fill-white"/><g class="fill-neutral-900">' + cells + '</g>' + finder(0, 0) + finder(N - 7, 0) + finder(0, N - 7) + '</svg>';
  };
  /** UI.paymentQR({ bank, account, holder, amount, content, paid, title, reported }) — mã QR + từng dòng có nút sao chép */
  UI.paymentQR = function (o) {
    if (o.paid) return UI.alert({ tone: 'success', title: 'Cửa hàng đã nhận tiền', text: 'Cảm ơn bạn! Khoản thanh toán ' + UI.fmt.money(o.amount) + ' đã được ghi nhận.' });
    var line = function (label, val, copy, strong) { return '<div class="flex items-center justify-between gap-2 py-2"><div class="min-w-0"><p class="text-xs text-neutral-600">' + label + '</p><p class="' + (strong ? 'text-lg font-extrabold' : 'text-base font-bold') + ' text-neutral-800 break-all">' + esc(val) + '</p></div>' + (copy ? UI.iconButton({ icon: 'copy', label: 'Sao chép ' + label.toLowerCase(), size: 'sm', variant: 'outline', attrs: { 'data-copy': copy } }) : '') + '</div>'; };
    return '<section class="rounded-xl border-2 border-dashed border-secondary-300 bg-white p-4 md:p-5"><h3 class="text-lg font-bold text-neutral-800">' + esc(o.title || 'Chuyển khoản / quét mã QR') + '</h3>' +
      '<div class="mt-3 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4"><div class="flex flex-col items-center gap-2 shrink-0"><div class="rounded-lg border border-neutral-200 p-2 bg-white">' + UI.qr(o.content + o.amount, 176) + '</div>' +
      '<span class="text-xs text-neutral-600">VietQR (minh họa)</span><span class="sm:hidden">' + UI.button({ label: 'Lưu ảnh QR', icon: 'download', variant: 'outline', size: 'sm', attrs: { 'data-demo': '' } }) + '</span></div>' +
      '<div class="flex-1 min-w-0 divide-y divide-neutral-100">' + line('Ngân hàng', o.bank) + line('Số tài khoản', o.account, o.account) + line('Chủ tài khoản', o.holder) + line('Số tiền', UI.fmt.money(o.amount), String(o.amount), true) + line('Nội dung chuyển khoản', o.content, o.content) + '</div></div>' +
      '<div class="mt-4">' + (o.reported ? UI.alert({ tone: 'info', text: 'Bạn đã báo chuyển khoản. Cửa hàng sẽ kiểm tra và xác nhận sớm.' }) : UI.button({ label: 'Tôi đã chuyển khoản', icon: 'circle-check', variant: 'secondary', full: true, attrs: { 'data-paid-report': '' } })) + '</div></section>';
  };
  /** UI.patePolicyNotice(variant: inline|alert, { date }) — nhắc điều kiện pate chay (q17) */
  UI.patePolicyNotice = function (v, o) {
    o = o || {};
    if (v === 'alert') return '<div role="note" class="rounded-xl border border-warning-500 bg-warning-50 p-4 text-warning-700"><p class="flex items-center gap-2 text-base font-extrabold">' + ic('info') + esc(o.title || 'Pate chay làm theo đơn — bạn lưu ý nhé') + '</p>' +
      '<ol class="mt-2 flex flex-col gap-1.5 pl-1 text-sm">' + (o.items || ['Cửa hàng sẽ gọi điện xác nhận đơn', 'Cọc 200.000đ sau khi xác nhận (chuyển khoản / quét QR)', 'Giao sau khoảng 7 ngày (làm theo đơn)' + (o.date ? ', dự kiến ' + o.date : ''), 'Pate chay không áp dụng đổi trả', 'Đặt riêng, không gộp với đơn khác']).map(function (t, i) { return '<li class="flex gap-2"><span class="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-warning-100 text-xs font-extrabold">' + (i + 1) + '</span><span>' + esc(t) + '</span></li>'; }).join('') + '</ol></div>';
    return '<p class="flex items-start gap-2 rounded-lg bg-warning-50 px-3 py-2 text-sm font-semibold text-warning-700">' + ic('info', 'mt-0.5 size-4') + '<span>Đặt trước · Cửa hàng gọi xác nhận · Cọc 200.000đ · Giao sau khoảng 7 ngày · Không đổi trả</span></p>';
  };
  /** UI.voucherCard({ code, value, title, cond, expires, state: available|used|expired|locked, need, action(html) }) — dạng vé răng cưa */
  UI.voucherCard = function (v) {
    var dim = v.state === 'used' || v.state === 'expired';
    var st = v.state === 'used' ? UI.tag('Đã dùng', 'neutral') : v.state === 'expired' ? UI.tag('Hết hạn', 'neutral') : '';
    return '<article class="relative flex min-w-0 overflow-visible rounded-xl border-2 border-dashed border-secondary-300 bg-secondary-50 ' + (dim ? 'opacity-60' : '') + '">' +
      '<span class="absolute -left-3 top-1/2 size-5 -translate-y-1/2 rounded-full border-2 border-dashed border-secondary-300 bg-primary-50" aria-hidden="true"></span><span class="absolute -right-3 top-1/2 size-5 -translate-y-1/2 rounded-full border-2 border-dashed border-secondary-300 bg-primary-50" aria-hidden="true"></span>' +
      '<div class="flex w-28 shrink-0 flex-col items-center justify-center gap-1 border-r-2 border-dashed border-secondary-300 px-3 py-4 text-center"><span class="text-2xl font-extrabold leading-tight text-secondary-700">' + esc(v.value) + '</span>' + (v.unit ? '<span class="text-xs font-bold text-secondary-700">' + esc(v.unit) + '</span>' : '') + '</div>' +
      '<div class="flex min-w-0 flex-1 flex-col gap-1 p-4"><div class="flex flex-wrap items-center gap-2"><p class="text-base font-bold text-neutral-800">' + esc(v.title) + '</p>' + st + '</div>' +
      (v.cond ? '<p class="text-sm text-neutral-700">' + esc(v.cond) + '</p>' : '') + (v.expires ? '<p class="text-xs text-neutral-600">HSD ' + esc(v.expires) + '</p>' : '') +
      '<div class="mt-2 flex flex-wrap items-center justify-between gap-2">' + (v.code ? '<span class="rounded-md bg-white px-2 py-1 font-mono text-sm font-bold text-neutral-800">' + esc(v.code) + '</span>' : '<span></span>') + (v.action || '') + '</div></div></article>';
  };
  /** UI.pointsCard({ points, pending, action(html) }) — số điểm 3xl 800, nền gradient primary-100 → secondary-100 */
  UI.pointsCard = function (o) {
    return '<section class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 p-5 md:p-6" aria-label="Điểm tích lũy"><p class="text-sm font-bold text-neutral-700">Điểm tích lũy của bạn</p>' +
      '<p class="mt-1 text-3xl font-extrabold text-neutral-800 tabular-nums">' + UI.fmt.number(o.points) + ' <span class="text-lg">điểm</span></p><p class="text-sm text-neutral-700">1.000đ = 1 điểm</p>' +
      (o.pending ? '<p class="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-secondary-700">' + ic('clock', 'size-3.5') + '+' + UI.fmt.number(o.pending) + ' điểm đang chờ cộng</p>' : '') +
      (o.action ? '<div class="mt-4">' + o.action + '</div>' : '') + '<span class="absolute -bottom-3 -right-3 opacity-90" aria-hidden="true">' + UI.mascot(84) + '</span></section>';
  };
  /** UI.stickyBar(html, { watch: Element }) — StickyActionBar đáy màn hình mobile; ẩn khi nút gốc đang hiển thị */
  UI.stickyBar = function (html, o) {
    o = o || {};
    var old = document.getElementById('ui-sticky'); if (old) old.remove();
    var bar = el('<div id="ui-sticky" class="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white px-4 pt-3 shadow-lg safe-bottom md:hidden transition-transform duration-300">' + html + '</div>');
    document.body.appendChild(bar); document.body.classList.add('pb-24', 'md:pb-0');
    document.dispatchEvent(new CustomEvent('stickybar', { detail: { on: true } }));
    if (o.watch && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { es.forEach(function (e) { bar.style.transform = e.isIntersecting ? 'translateY(110%)' : ''; }); }).observe(o.watch);
    }
    return bar;
  };
  /** UI.loadMore({ shown, total, label, unit }) — Pagination website: nút "Xem thêm" */
  UI.loadMore = function (o) {
    return '<div class="mt-8 flex flex-col items-center gap-3"><p class="text-sm text-neutral-600">Đã xem ' + o.shown + ' / ' + o.total + ' ' + esc(o.unit || 'sản phẩm') + '</p><div class="h-1.5 w-48 overflow-hidden rounded-full bg-neutral-200"><div class="h-full bg-primary-500" style="width:' + Math.round(o.shown / Math.max(1, o.total) * 100) + '%"></div></div>' +
      (o.shown < o.total ? UI.button({ label: o.label || 'Xem thêm sản phẩm', variant: 'outline', iconRight: 'chevron-down', attrs: { 'data-load-more': '' } }) : '') + '</div>';
  };

  /* ---------- AddToCartFeedback ---------- */
  function ting() {
    try {
      var C = window.AudioContext || window.webkitAudioContext; if (!C) return;
      UI._ac = UI._ac || new C(); var ac = UI._ac; if (ac.state === 'suspended') ac.resume();
      var t = ac.currentTime;
      [1318.5, 1975.5].forEach(function (f, i) {
        var osc = ac.createOscillator(), g = ac.createGain(), s = t + i * 0.07;
        osc.type = 'sine'; osc.frequency.value = f; g.gain.setValueAtTime(0.0001, s); g.gain.exponentialRampToValueAtTime(0.16, s + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, s + 0.32);
        osc.connect(g); g.connect(ac.destination); osc.start(s); osc.stop(s + 0.35);
      });
    } catch (e) {}
  }
  UI.ting = ting;
  /** UI.confetti(fromEl, n) — tung bông giấy màu primary-300 / secondary-300 / warning-500 / success-500 (tắt khi reduced-motion) */
  UI.confetti = function (from, n) {
    if (UI.reducedMotion() || !document.body.animate) return;
    var r = from ? from.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 3, width: 0, height: 0 };
    var cx = r.left + r.width / 2, cy = r.top + r.height / 2, cols = ['bg-primary-300', 'bg-secondary-300', 'bg-warning-500', 'bg-success-500', 'bg-primary-500'];
    for (var i = 0; i < (n || 24); i++) {
      var b = document.createElement('span'); b.className = 'confetti-bit ' + cols[i % cols.length]; b.style.left = cx + 'px'; b.style.top = cy + 'px'; document.body.appendChild(b);
      var a = Math.random() * Math.PI * 2, d = 50 + Math.random() * 90, dx = Math.cos(a) * d, dy = Math.sin(a) * d - 60;
      b.animate([{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: 'translate(' + dx + 'px,' + (dy + 120) + 'px) rotate(' + (Math.random() * 720 - 360) + 'deg)', opacity: 0 }], { duration: 900, easing: 'cubic-bezier(.16,1,.3,1)' }).onfinish = (function (x) { return function () { x.remove(); }; })(b);
    }
  };
  /** UI.addToCartFeedback(fromEl, { message, viewHref }) — (1) âm "tinh" (2) lắc icon giỏ + badge nảy (3) confetti (4) Toast "Đã thêm vào giỏ" [Xem giỏ] */
  UI.addToCartFeedback = function (from, o) {
    o = o || {};
    ting();
    if (!UI.reducedMotion()) {
      document.querySelectorAll('[data-cart-icon]').forEach(function (c) { c.classList.remove('anim-shake'); void c.offsetWidth; c.classList.add('anim-shake'); });
      document.querySelectorAll('[data-cart-count]').forEach(function (c) { c.classList.remove('anim-pop'); void c.offsetWidth; c.classList.add('anim-pop'); });
      UI.confetti(from);
    }
    if (from && from.matches && from.matches('button') && !from.closest('[role=dialog]')) {
      var html = from.innerHTML; from.innerHTML = ic('check', 'size-5'); setTimeout(function () { from.innerHTML = html; }, 1200);
    }
    UI.toast(o.message || 'Đã thêm vào giỏ', 'success', { action: o.viewHref ? { label: 'Xem giỏ', href: o.viewHref } : null });
  };

  /* ---------- Scroll reveal ---------- */
  UI.reveal = function (root) {
    var nodes = (root || document).querySelectorAll('[data-reveal]:not(.is-in)');
    if (!('IntersectionObserver' in window) || UI.reducedMotion()) { nodes.forEach(function (n) { n.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -40px 0px' });
    nodes.forEach(function (n) { io.observe(n); });
  };

  /* ---------- Ủy quyền sự kiện toàn cục (component dạng chuỗi HTML) ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target;
    var pw = t.closest('[data-pw-toggle]');
    if (pw) { var inp = pw.parentNode.querySelector('input'); var show = inp.type === 'password'; inp.type = show ? 'text' : 'password'; pw.setAttribute('aria-label', show ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'); pw.innerHTML = ic(show ? 'eye-off' : 'eye'); return; }
    var sw = t.closest('[data-switch]');
    if (sw && !sw.disabled) { var on = sw.getAttribute('aria-checked') !== 'true'; sw.setAttribute('aria-checked', on); var h = sw.querySelector('input[type=hidden]'); if (h) h.value = on ? '1' : ''; sw.dispatchEvent(new CustomEvent('switchchange', { bubbles: true, detail: { checked: on } })); return; }
    var cp = t.closest('[data-copy]');
    if (cp) {
      var txt = cp.getAttribute('data-copy'), msg = cp.getAttribute('data-copy-msg') || 'Đã sao chép';
      var done = function () { UI.toast(msg, 'success'); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, function () { fallbackCopy(txt); done(); }); else { fallbackCopy(txt); done(); }
      return;
    }
    var dec = t.closest('[data-qty-dec]'), inc = t.closest('[data-qty-inc]');
    if (dec || inc) { var q = (dec || inc).closest('[data-qty]'); var i2 = q.querySelector('[data-qty-input]'); setQty(q, (parseInt(i2.value, 10) || 1) + (inc ? 1 : -1)); return; }
    var rv = t.closest('[data-rate-val]');
    if (rv) { var g = rv.closest('[data-rate]'); var v = +rv.getAttribute('data-rate-val'); g.querySelector('input').value = v; g.querySelectorAll('[data-rate-val]').forEach(function (b, k) { b.setAttribute('aria-pressed', k < v); b.innerHTML = starSvg('size-8 ' + (k < v ? 'text-warning-500' : 'text-neutral-300'), k < v); }); var w = g.closest('[data-field]'); var f = g.closest('form'); if (w && f) UI.setError(f, w.getAttribute('data-field'), ''); return; }
    var zm = t.closest('[data-zoom]');
    if (zm) { UI.lightbox(JSON.parse(zm.getAttribute('data-zoom')), +zm.getAttribute('data-zoom-i') || 0); return; }
    var ur = t.closest('[data-up-remove]');
    if (ur) { var u = ur.closest('[data-upload]'); uploadFiles(u).splice(+ur.getAttribute('data-up-remove'), 1); renderUploads(u); u.dispatchEvent(new CustomEvent('uploadchange', { bubbles: true })); return; }
    var rc = t.closest('[data-rte-cmd]');
    if (rc) {
      e.preventDefault(); var cmd = rc.getAttribute('data-rte-cmd').split(':'); var ed = rc.closest('[data-field]').querySelector('[data-rte]'); ed.focus();
      if (cmd[0] === 'createLink') { var url = prompt('Nhập đường dẫn liên kết'); if (url) document.execCommand('createLink', false, url); }
      else if (cmd[0] === 'insertImage') { var src = prompt('Dán đường dẫn ảnh (bản demo)', 'https://loremflickr.com/960/540/cat?lock=' + Math.floor(Math.random() * 100)); if (src) document.execCommand('insertImage', false, src); }
      else document.execCommand(cmd[0], false, cmd[1] ? '<' + cmd[1] + '>' : null);
      return;
    }
    var demo = t.closest('[data-demo]');
    if (demo) { UI.toast('Tính năng sẽ có ở bản chính thức', 'info'); }
  });
  function fallbackCopy(txt) { var ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} ta.remove(); }
  function setQty(q, v) {
    var min = +q.getAttribute('data-min'), max = +q.getAttribute('data-max'), inp = q.querySelector('[data-qty-input]'), err = q.querySelector('[data-qty-err]');
    var over = v > max; v = Math.max(min, Math.min(max, isNaN(v) ? min : v));
    inp.value = v; q.querySelector('[data-qty-dec]').disabled = v <= min; q.querySelector('[data-qty-inc]').disabled = v >= max;
    if (over && q.getAttribute('data-limit-msg')) { err.textContent = q.getAttribute('data-limit-msg'); err.classList.remove('hidden'); clearTimeout(q._t); q._t = setTimeout(function () { err.classList.add('hidden'); }, 3000); }
    else err.classList.add('hidden');
    q.dispatchEvent(new CustomEvent('qtychange', { bubbles: true, detail: { value: v } }));
  }
  UI.setQty = setQty;
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.matches('[data-qty-input]')) setQty(t.closest('[data-qty]'), parseInt(t.value, 10));
    if (t.type === 'file' && t.closest('[data-upload]')) { addFiles(t.closest('[data-upload]'), t.files); t.value = ''; }
  });
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.hasAttribute && t.hasAttribute('data-money')) { var n = UI.parseMoney(t.value); t.value = t.value === '' ? '' : UI.fmt.number(n); }
    if (t.hasAttribute && t.hasAttribute('data-upper')) { var p = t.selectionStart; t.value = t.value.toUpperCase(); try { t.setSelectionRange(p, p); } catch (x) {} }
    if (t.hasAttribute && t.hasAttribute('data-counter')) { var c = document.querySelector('[data-counter-for="' + t.id + '"]'); if (c) c.textContent = t.value.length + '/' + t.getAttribute('maxlength'); }
    if (t.matches && t.matches('[data-qty-input]')) t.value = t.value.replace(/[^\d]/g, '');
  });
  document.addEventListener('dragover', function (e) { var d = e.target.closest && e.target.closest('[data-drop]'); if (d) { e.preventDefault(); d.classList.add('border-primary-500', 'bg-primary-50'); } });
  document.addEventListener('dragleave', function (e) { var d = e.target.closest && e.target.closest('[data-drop]'); if (d) d.classList.remove('border-primary-500', 'bg-primary-50'); });
  document.addEventListener('drop', function (e) { var d = e.target.closest && e.target.closest('[data-drop]'); if (d) { e.preventDefault(); d.classList.remove('border-primary-500', 'bg-primary-50'); addFiles(d.closest('[data-upload]'), e.dataTransfer.files); } });
  document.addEventListener('keydown', function (e) { var d = e.target.closest && e.target.closest('[data-drop]'); if (d && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); d.querySelector('input[type=file]').click(); } });
})();
