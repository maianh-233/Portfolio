/* =====================================================================
 * app.js - Xử lý giả dùng chung cho prototype
 * Nhóm theo tính năng để dễ chuyển sang framework:
 *   Store, DB, Fmt, I18n, Toast, Modal, Lightbox, Cakes, Promo, Reviews,
 *   Capacity, Orders, Customers, Auth, Bell, Confetti, UI, Calendar,
 *   Uploader, FormUI, App
 * ===================================================================== */
(function () {
  'use strict';

  /* ===================== Store: localStorage an toàn ===================== */
  var memory = {};
  var Store = {
    get: function (k, fallback) {
      try { var v = localStorage.getItem('cb_' + k); return v == null ? fallback : JSON.parse(v); }
      catch (e) { return memory[k] != null ? memory[k] : fallback; }
    },
    set: function (k, v) {
      memory[k] = v;
      try { localStorage.setItem('cb_' + k, JSON.stringify(v)); } catch (e) { /* dùng bộ nhớ tạm */ }
    },
    remove: function (k) {
      delete memory[k];
      try { localStorage.removeItem('cb_' + k); } catch (e) { /* bỏ qua */ }
    },
    clearAll: function () {
      memory = {};
      try {
        Object.keys(localStorage).forEach(function (k) { if (k.indexOf('cb_') === 0) localStorage.removeItem(k); });
      } catch (e) { /* bỏ qua */ }
    }
  };

  /* ===================== DB: bộ sưu tập dữ liệu giả có lưu tạm ===================== */
  var cache = {};
  var DB = {
    /** Lấy bộ sưu tập (cakes, orders, reviews...). Lần đầu sao chép từ MOCK. */
    get: function (name) {
      if (cache[name]) return cache[name];
      var saved = Store.get('db_' + name, null);
      cache[name] = saved || JSON.parse(JSON.stringify(MOCK[name]));
      return cache[name];
    },
    save: function (name) { Store.set('db_' + name, cache[name]); },
    reset: function () { cache = {}; Store.clearAll(); }
  };

  /* Thông tin tiệm có thể được sửa ở SCR-018 -> dùng bản đã lưu cho mọi trang */
  MOCK.shop = DB.get('shop');

  /* ===================== Fmt: định dạng ===================== */
  var Fmt = {
    money: function (n) { return (Math.round(n || 0)).toLocaleString('vi-VN') + ' ₫'; },
    num: function (n) { return (n || 0).toLocaleString('vi-VN'); },
    /** 'YYYY-MM-DD' -> Date (giờ địa phương) */
    parse: function (s) { var p = String(s).slice(0, 10).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); },
    iso: function (dt) { return dt.getFullYear() + '-' + ('0' + (dt.getMonth() + 1)).slice(-2) + '-' + ('0' + dt.getDate()).slice(-2); },
    date: function (s) { var x = Fmt.parse(s); return ('0' + x.getDate()).slice(-2) + '/' + ('0' + (x.getMonth() + 1)).slice(-2) + '/' + x.getFullYear(); },
    dateShort: function (s) { var x = Fmt.parse(s); return ('0' + x.getDate()).slice(-2) + '/' + ('0' + (x.getMonth() + 1)).slice(-2); },
    dateTime: function (s) { var x = new Date(s); return ('0' + x.getDate()).slice(-2) + '/' + ('0' + (x.getMonth() + 1)).slice(-2) + ' ' + ('0' + x.getHours()).slice(-2) + ':' + ('0' + x.getMinutes()).slice(-2); },
    /** "Hôm nay" / "Ngày mai" / dd/MM */
    relDay: function (s) {
      var diff = Math.round((Fmt.parse(s) - Fmt.parse(MOCK.today)) / 864e5);
      if (diff === 0) return I18n.lang === 'en' ? 'Today' : 'Hôm nay';
      if (diff === 1) return I18n.lang === 'en' ? 'Tomorrow' : 'Ngày mai';
      return Fmt.dateShort(s);
    },
    phone: function (p) {
      var x = String(p || '').replace(/\D/g, '');
      return x.length === 10 ? x.slice(0, 4) + ' ' + x.slice(4, 7) + ' ' + x.slice(7) : x;
    },
    esc: function (s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
    },
    /** Bỏ dấu tiếng Việt để tìm kiếm không dấu */
    fold: function (s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase(); }
  };

  function debounce(fn, ms) { var t; return function () { var a = arguments, c = this; clearTimeout(t); t = setTimeout(function () { fn.apply(c, a); }, ms); }; }
  function param(k) { return new URLSearchParams(location.search).get(k); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function reducedMotion() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

  /* ===================== I18n: song ngữ VI / EN (FR-006) ===================== */
  var DICT = {
    'nav.home': ['Trang chủ', 'Home'], 'nav.cakes': ['Bánh kem', 'Cakes'], 'nav.about': ['Giới thiệu', 'About'],
    'nav.blog': ['Bài viết', 'Blog'], 'nav.contact': ['Liên hệ', 'Contact'], 'nav.track': ['Tra cứu đơn', 'Track order'],
    'cta.order': ['Đặt bánh ngay', 'Order now'], 'cta.orderShort': ['Đặt bánh', 'Order'], 'cta.viewCakes': ['Xem các mẫu bánh', 'See our cakes'],
    'cta.viewAll': ['Xem tất cả', 'View all'], 'cta.orderThis': ['Đặt bánh này', 'Order this cake'], 'cta.home': ['Về trang chủ', 'Back to home'],
    'footer.tagline': ['Bánh kem làm theo đơn, ít ngọt, viết lời chúc miễn phí.', 'Made-to-order cakes, less sweet, free message.'],
    'footer.visit': ['Ghé tiệm', 'Visit us'], 'footer.links': ['Liên kết nhanh', 'Quick links'],
    'fab.zalo': ['Nhắn Zalo', 'Chat on Zalo'], 'fab.call': ['Gọi tiệm', 'Call us'],
    'home.heroNote': ['Đặt trước {n} ngày · Lời chúc miễn phí', 'Order {n} days ahead · Free message'],
    'home.best': ['Bánh bán chạy', 'Best sellers'], 'home.new': ['Bánh mới ra', 'New arrivals'],
    'home.reviews': ['Khách nói gì về tiệm', 'What customers say'], 'home.visit': ['Ghé tiệm chơi nha', 'Come visit us'],
    'home.promoCta': ['Xem bánh', 'See cakes'], 'home.until': ['đến hết', 'until'],
    'common.address': ['Địa chỉ', 'Address'], 'common.hours': ['Giờ mở cửa', 'Opening hours'], 'common.phone': ['Điện thoại', 'Phone'],
    'common.directions': ['Chỉ đường', 'Directions'], 'common.openNow': ['Đang mở cửa', 'Open now'], 'common.closed': ['Đã đóng cửa', 'Closed'],
    'common.follow': ['Theo dõi tiệm', 'Follow us'], 'common.retry': ['Thử lại', 'Try again'], 'common.people': ['người', 'people'],
    'card.from': ['Giá từ', 'From'], 'card.best': ['Bán chạy', 'Best seller'], 'card.new': ['Mới ra', 'New'],
    'card.reviews': ['đánh giá', 'reviews'], 'card.noReviews': ['Chưa có đánh giá', 'No reviews yet'],
    'list.title': ['Bánh kem của tiệm', 'Our cakes'], 'list.search': ['Tìm theo tên bánh', 'Search by cake name'],
    'list.flavor': ['Hương vị', 'Flavor'], 'list.price': ['Khoảng giá', 'Price range'], 'list.sort': ['Sắp xếp', 'Sort by'],
    'list.clear': ['Xóa bộ lọc', 'Clear filters'], 'list.count': ['{n} mẫu bánh', '{n} cakes'], 'list.more': ['Xem thêm', 'Load more'],
    'list.empty': ['Không tìm thấy bánh phù hợp.', 'No matching cakes.'], 'list.filter': ['Lọc', 'Filter'], 'list.apply': ['Xem kết quả', 'Show results'],
    'list.error': ['Chưa tải được danh sách bánh', 'Could not load cakes'],
    'sort.newest': ['Mới nhất', 'Newest'], 'sort.best': ['Bán chạy', 'Best selling'], 'sort.priceAsc': ['Giá tăng dần', 'Price: low to high'], 'sort.priceDesc': ['Giá giảm dần', 'Price: high to low'],
    'price.lt300': ['Dưới 300.000 ₫', 'Under 300,000 ₫'], 'price.300to500': ['300.000 - 500.000 ₫', '300,000 - 500,000 ₫'], 'price.gt500': ['Trên 500.000 ₫', 'Over 500,000 ₫'],
    'detail.size': ['Chọn kích cỡ', 'Choose a size'], 'detail.desc': ['Mô tả', 'Description'], 'detail.ingredients': ['Thành phần', 'Ingredients'],
    'detail.allergy': ['Lưu ý dị ứng', 'Allergy note'], 'detail.freeMsg': ['Viết lời chúc miễn phí trên bánh', 'Free message on your cake'],
    'detail.advance': ['Đặt trước ít nhất {n} ngày', 'Order at least {n} days ahead'], 'detail.reviews': ['Đánh giá', 'Reviews'],
    'detail.related': ['Có thể bạn cũng thích', 'You may also like'], 'detail.verified': ['Đã mua hàng', 'Verified buyer'],
    'detail.serves': ['Kích thước {s} · {p} người', 'Size {s} · serves {p}'],
    'step.1': ['Bánh của bạn', 'Your cake'], 'step.2': ['Nhận bánh', 'Receiving'], 'step.3': ['Thông tin của bạn', 'Your details'], 'step.4': ['Thanh toán & xem lại', 'Payment & review'],
    'order.title': ['Đặt bánh', 'Order a cake'], 'order.next': ['Tiếp tục', 'Continue'], 'order.back': ['Quay lại', 'Back'], 'order.submit': ['Gửi đơn', 'Place order'],
    'order.sending': ['Đang gửi...', 'Sending...'], 'order.summary': ['Tóm tắt đơn', 'Order summary'],
    'ok.title': ['Yay! Tiệm nhận được đơn của bạn rồi nè!', 'Yay! We\'ve got your order!'],
    'ok.msg': ['Cảm ơn bạn đã chọn bánh của tiệm nha. Bạn đợi tiệm một chút xíu nhé, tiệm sẽ gọi điện để xác nhận đơn với bạn sớm thôi. Nhớ để ý điện thoại giúp tiệm nha!', 'Thank you for choosing our cakes. Please wait a little, we\'ll give you a call soon to confirm your order. Keep your phone nearby!'],
    'track.title': ['Đơn bánh của bạn đến đâu rồi?', 'Where is your cake?'], 'track.btn': ['Tra cứu', 'Track'],
    'nf.title': ['Ối, trang này trốn đâu mất rồi!', 'Oops, this page ran away!'], 'nf.text': ['Trang bạn tìm không có hoặc đã bị gỡ.', 'The page you are looking for does not exist or was removed.'],
    'about.title': ['Câu chuyện của tiệm', 'Our story'], 'about.gallery': ['Góc nhỏ của tiệm', 'Inside our shop'], 'about.cta': ['Thèm bánh rồi đúng không?', 'Craving cake already?'],
    'blog.title': ['Góc chia sẻ của tiệm', 'From our kitchen'], 'blog.all': ['Tất cả', 'All'], 'blog.news': ['Tin tức', 'News'], 'blog.tips': ['Mẹo bảo quản', 'Storage tips'],
    'blog.empty': ['Chưa có bài viết', 'No posts yet'], 'blog.related': ['Bài liên quan', 'Related posts'], 'blog.cta': ['Thèm bánh rồi?', 'Craving cake?'],
    'contact.title': ['Ghé tiệm chơi nha', 'Come visit us']
  };
  var I18n = {
    lang: Store.get('lang', 'vi'),   // luôn mở tiếng Việt nếu chưa chọn (q12)
    t: function (key, vars) {
      var e = DICT[key];
      var s = e ? e[I18n.lang === 'en' ? 1 : 0] : key;
      if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', vars[k]); });
      return s;
    },
    /** Chọn trường theo ngôn ngữ: obj.name / obj.name_en (thiếu bản EN thì dùng VI) */
    pick: function (obj, field) { return (I18n.lang === 'en' && obj[field + '_en']) ? obj[field + '_en'] : obj[field]; },
    apply: function (root) {
      $all('[data-i18n]', root).forEach(function (el) {
        var vars = el.getAttribute('data-i18n-vars');
        el.textContent = I18n.t(el.getAttribute('data-i18n'), vars ? JSON.parse(vars) : null);
      });
      $all('[data-i18n-placeholder]', root).forEach(function (el) { el.setAttribute('placeholder', I18n.t(el.getAttribute('data-i18n-placeholder'))); });
      $all('[data-i18n-label]', root).forEach(function (el) { el.setAttribute('aria-label', I18n.t(el.getAttribute('data-i18n-label'))); });
      document.documentElement.lang = I18n.lang;
    },
    set: function (lang) {
      I18n.lang = lang; Store.set('lang', lang);
      if (document.body.getAttribute('data-layout') === 'public') Layout.renderPublic();
      I18n.apply();
      document.dispatchEvent(new CustomEvent('langchange'));
    }
  };

  /* ===================== Toast (CMP-15) ===================== */
  var Toast = {
    show: function (msg, type, opts) {
      opts = opts || {};
      var host = $('#toast-host');
      if (!host) {
        host = document.createElement('div');
        host.id = 'toast-host';
        host.className = 'fixed z-[70] top-9 inset-x-3 sm:inset-x-auto sm:right-4 sm:w-[360px] flex flex-col gap-2 pointer-events-none';
        host.setAttribute('aria-live', 'polite');
        document.body.appendChild(host);
      }
      var styles = {
        success: ['bg-mint text-mint-strong', 'ph-check-circle'],
        error: ['bg-[#FBE3E0] text-danger', 'ph-warning-circle'],
        info: ['bg-info-soft text-info', 'ph-info'],
        order: ['bg-primary-strong text-white', 'ph-bell-ringing']
      }[type || 'success'];
      var el = document.createElement('div');
      el.className = 'toast pointer-events-auto flex items-start gap-3 rounded-2xl px-4 py-3 shadow-lift font-semibold ' + styles[0];
      el.setAttribute('role', type === 'error' ? 'alert' : 'status');
      el.innerHTML = '<i class="ph-fill ' + styles[1] + ' text-xl shrink-0 mt-0.5" aria-hidden="true"></i><span class="flex-1 text-[15px] leading-snug">' + Fmt.esc(msg) + '</span>' +
        (opts.actionLabel ? '<button type="button" class="toast-action shrink-0 underline font-extrabold">' + Fmt.esc(opts.actionLabel) + '</button>' : '') +
        '<button type="button" class="toast-close shrink-0 opacity-70 hover:opacity-100" aria-label="Đóng thông báo"><i class="ph ph-x" aria-hidden="true"></i></button>';
      host.appendChild(el);
      var kill = function () { el.classList.add('toast-out'); setTimeout(function () { el.remove(); }, 200); };
      el.querySelector('.toast-close').onclick = kill;
      if (opts.actionLabel) el.querySelector('.toast-action').onclick = function () { kill(); opts.onAction && opts.onAction(); };
      setTimeout(kill, opts.duration || 4000);
    },
    soon: function () { Toast.show('Tính năng sẽ có ở bản chính thức', 'info'); }
  };

  /* ===================== Modal / Bottom sheet (CMP-14) ===================== */
  var Modal = {
    /**
     * Mở hộp thoại. opts: { title, body (html), actions: [{label, variant, onClick(close), id}], size: 'md'|'lg'|'full', onOpen(el) }
     * Máy tính: hộp giữa màn hình. Điện thoại: tấm trượt từ dưới. Giữ tiêu điểm, Esc đóng.
     */
    open: function (opts) {
      var prev = document.activeElement;
      var wrap = document.createElement('div');
      wrap.className = 'modal fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-4';
      wrap.setAttribute('role', 'dialog');
      wrap.setAttribute('aria-modal', 'true');
      var tid = 'm-title-' + Date.now();
      if (opts.title) wrap.setAttribute('aria-labelledby', tid);
      var width = { md: 'sm:max-w-md', lg: 'sm:max-w-2xl', xl: 'sm:max-w-4xl' }[opts.size || 'md'];
      var actions = (opts.actions || []).map(function (a, i) {
        var v = { primary: 'btn-primary', danger: 'btn-danger', secondary: 'btn-secondary', ghost: 'btn-ghost' }[a.variant || 'secondary'];
        return '<button type="button" class="btn ' + v + ' h-11 px-5 w-full sm:w-auto" data-idx="' + i + '"' + (a.id ? ' id="' + a.id + '"' : '') + '>' + a.label + '</button>';
      }).join('');
      wrap.innerHTML = '<div class="modal-backdrop absolute inset-0 bg-ink/45" data-close></div>' +
        '<div class="modal-panel relative w-full ' + width + ' bg-white rounded-t-3xl sm:rounded-3xl shadow-lift max-h-[92vh] flex flex-col">' +
        '<div class="sm:hidden mx-auto mt-3 w-10 h-1.5 rounded-full bg-beige"></div>' +
        (opts.title ? '<div class="flex items-start justify-between gap-4 px-5 sm:px-6 pt-4 sm:pt-6"><h2 id="' + tid + '" class="text-lg font-extrabold">' + opts.title + '</h2>' +
          '<button type="button" class="grid place-items-center w-10 h-10 -mr-2 -mt-1 rounded-full hover:bg-cream text-xl" data-close aria-label="Đóng"><i class="ph ph-x" aria-hidden="true"></i></button></div>' : '') +
        '<div class="modal-body px-5 sm:px-6 py-4 overflow-auto">' + (opts.body || '') + '</div>' +
        (actions ? '<div class="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 px-5 sm:px-6 pb-5 sm:pb-6">' + actions + '</div>' : '') +
        '</div>';
      document.body.appendChild(wrap);
      document.body.classList.add('overflow-hidden');

      function close() {
        document.removeEventListener('keydown', onKey);
        wrap.classList.add('modal-out');
        setTimeout(function () { wrap.remove(); if (!$('.modal')) document.body.classList.remove('overflow-hidden'); }, 160);
        if (prev && prev.focus) prev.focus();
      }
      function onKey(e) {
        if (e.key === 'Escape') { close(); return; }
        if (e.key === 'Tab') { // giữ tiêu điểm trong hộp thoại
          var f = $all('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', wrap).filter(function (x) { return !x.disabled && x.offsetParent !== null; });
          if (!f.length) return;
          if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
          else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
        }
      }
      document.addEventListener('keydown', onKey);
      $all('[data-close]', wrap).forEach(function (b) { b.addEventListener('click', close); });
      $all('[data-idx]', wrap).forEach(function (b) {
        b.addEventListener('click', function () {
          var a = opts.actions[+b.getAttribute('data-idx')];
          if (a.onClick) { if (a.onClick(close, wrap) !== false) close(); } else close();
        });
      });
      if (opts.onOpen) opts.onOpen(wrap, close);
      setTimeout(function () { var f = $('input, textarea, select', wrap) || $('[data-idx]', wrap) || $('[data-close]', wrap); f && f.focus(); }, 30);
      return close;
    },
    /** Hộp thoại xác nhận. Trả Promise<{ok, value}>. opts.input = { label, required, min, max, placeholder, quick: [] } */
    confirm: function (opts) {
      return new Promise(function (resolve) {
        var inputHtml = '';
        if (opts.input) {
          var q = (opts.input.quick || []).map(function (x) { return '<button type="button" class="chip" data-quick="' + Fmt.esc(x) + '">' + Fmt.esc(x) + '</button>'; }).join('');
          inputHtml = '<div class="mt-4 field">' +
            (q ? '<div class="flex flex-wrap gap-2 mb-3">' + q + '</div>' : '') +
            '<label class="field-label" for="confirm-input">' + opts.input.label + (opts.input.required ? ' <span class="text-danger">*</span>' : '') + '</label>' +
            '<textarea id="confirm-input" class="field-input min-h-[88px]" maxlength="' + (opts.input.max || 255) + '" placeholder="' + (opts.input.placeholder || '') + '" aria-describedby="confirm-input-err"></textarea>' +
            '<p id="confirm-input-err" class="field-error hidden"></p></div>';
        }
        Modal.open({
          title: opts.title,
          body: '<p class="text-ink-muted">' + (opts.message || '') + '</p>' + inputHtml,
          actions: [
            { label: opts.cancelLabel || 'Đóng', variant: 'secondary', onClick: function () { resolve({ ok: false }); } },
            { label: opts.confirmLabel || 'Xác nhận', variant: opts.danger ? 'danger' : 'primary', onClick: function (close, el) {
              var v = '';
              if (opts.input) {
                var inp = $('#confirm-input', el);
                v = inp.value.trim();
                var min = opts.input.min || (opts.input.required ? 1 : 0);
                if (v.length < min) { FormUI.setError(inp, opts.input.error || 'Vui lòng nhập lý do.'); inp.focus(); return false; }
              }
              resolve({ ok: true, value: v });
            } }
          ],
          onOpen: function (el) {
            $all('[data-quick]', el).forEach(function (b) {
              b.onclick = function () { var inp = $('#confirm-input', el); inp.value = b.getAttribute('data-quick'); FormUI.clearError(inp); $all('[data-quick]', el).forEach(function (x) { x.classList.toggle('is-on', x === b); }); };
            });
          }
        });
      });
    }
  };

  /* ===================== Lightbox: xem ảnh phóng to ===================== */
  var Lightbox = {
    open: function (images, index) {
      var i = index || 0;
      var close = Modal.open({
        size: 'xl',
        body: '<div class="relative"><img id="lb-img" class="w-full max-h-[72vh] object-contain rounded-2xl bg-cream" src="" alt="">' +
          (images.length > 1 ? '<button type="button" id="lb-prev" class="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/90 shadow-soft text-xl" aria-label="Ảnh trước"><i class="ph ph-caret-left" aria-hidden="true"></i></button>' +
            '<button type="button" id="lb-next" class="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/90 shadow-soft text-xl" aria-label="Ảnh kế"><i class="ph ph-caret-right" aria-hidden="true"></i></button>' : '') +
          '</div><p id="lb-cap" class="mt-3 text-sm text-ink-muted text-center"></p>',
        actions: [{ label: 'Đóng', variant: 'secondary' }],
        onOpen: function (el) {
          function show() {
            var it = images[i]; var img = $('#lb-img', el);
            img.src = it.src || it; img.alt = it.alt || 'Ảnh phóng to';
            img.onerror = function () { img.src = 'https://picsum.photos/seed/anh-mac-dinh/800/800'; };
            $('#lb-cap', el).textContent = (it.alt ? it.alt + ' · ' : '') + (i + 1) + '/' + images.length;
          }
          var p = $('#lb-prev', el), n = $('#lb-next', el);
          if (p) p.onclick = function () { i = (i - 1 + images.length) % images.length; show(); };
          if (n) n.onclick = function () { i = (i + 1) % images.length; show(); };
          el.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft' && p) p.click(); if (e.key === 'ArrowRight' && n) n.click(); });
          show();
        }
      });
      return close;
    }
  };

  /* ===================== Promo: khuyến mãi dịp lễ (FR-035, FR-036) ===================== */
  var Promo = {
    statusOf: function (p) {
      if (!p.enabled) return 'off';
      var now = new Date();
      if (now < new Date(p.start)) return 'upcoming';
      if (now > new Date(p.end)) return 'ended';
      return 'running';
    },
    active: function () { return DB.get('promotions').filter(function (p) { return Promo.statusOf(p) === 'running'; }); },
    forCake: function (cake) {
      return Promo.active().filter(function (p) { return p.scope === 'all' || p.cakeIds.indexOf(cake.id) > -1; })[0] || null;
    },
    apply: function (price, p) {
      if (!p) return price;
      var off = p.type === 'percent' ? Math.round(price * p.value / 100 / 1000) * 1000 : p.value;
      return Math.max(0, price - off);
    },
    label: function (p) { return p.type === 'percent' ? '-' + p.value + '%' : '-' + Fmt.num(p.value / 1000) + 'k'; }
  };

  /* ===================== Reviews (FR-023 → FR-025) ===================== */
  var Reviews = {
    forCake: function (cakeId) { return DB.get('reviews').filter(function (r) { return r.cakeId === cakeId && r.status === 'visible'; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; }); },
    stats: function (cakeId) {
      var list = Reviews.forCake(cakeId);
      var sum = list.reduce(function (s, r) { return s + r.rating; }, 0);
      return { count: list.length, avg: list.length ? Math.round(sum / list.length * 10) / 10 : 0 };
    }
  };

  /* ===================== Cakes (FR-007 → FR-009) ===================== */
  var Cakes = {
    all: function () { return DB.get('cakes'); },
    byId: function (id) { return Cakes.all().filter(function (c) { return c.id === +id; })[0] || null; },
    bySlug: function (slug) { return Cakes.all().filter(function (c) { return c.slug === slug; })[0] || null; },
    /** Bánh hiển thị cho khách: Đang bán và có ít nhất 1 cỡ đang bán */
    visible: function () { return Cakes.all().filter(function (c) { return c.status === 'active' && Cakes.sizes(c).length; }); },
    sizes: function (c) { return c.sizes.filter(function (s) { return s.active; }); },
    priceFrom: function (c) { var s = Cakes.sizes(c); return s.length ? Math.min.apply(null, s.map(function (x) { return x.price; })) : 0; },
    flavors: function () {
      var seen = {}; var out = [];
      Cakes.visible().forEach(function (c) { if (!seen[c.flavor]) { seen[c.flavor] = 1; out.push({ vi: c.flavor, en: c.flavor_en }); } });
      return out.sort(function (a, b) { return a.vi.localeCompare(b.vi, 'vi'); });
    }
  };

  /* ===================== Capacity: suất nhận bánh theo ngày (FR-015) ===================== */
  var Capacity = {
    settings: function () { return DB.get('settings'); },
    capacityOf: function (date) {
      var s = Capacity.settings(); var o = s.dayOverrides[date] || {};
      return o.capacity || s.defaultCapacity;
    },
    bookedOf: function (date) {
      var s = Capacity.settings();
      var fromOrders = DB.get('orders').filter(function (o) { return o.delivery.date === date && o.status !== 'cancelled'; })
        .reduce(function (n, o) { return n + o.items.reduce(function (m, it) { return m + it.qty; }, 0); }, 0);
      return (s.booked[date] || 0) + fromOrders; // số bánh nhận ngoài web + số bánh trong các đơn trên web
    },
    /** Trạng thái ngày: past | tooSoon | off | full | almost | ok */
    state: function (date) {
      var s = Capacity.settings();
      var diff = Math.round((Fmt.parse(date) - Fmt.parse(MOCK.today)) / 864e5);
      if (diff < 0) return { state: 'past', reason: 'Ngày đã qua' };
      if (diff < s.minDays) return { state: 'tooSoon', reason: 'Cần đặt trước ít nhất ' + s.minDays + ' ngày' };
      if ((s.dayOverrides[date] || {}).off) return { state: 'off', reason: 'Tiệm nghỉ ngày này' };
      var cap = Capacity.capacityOf(date), booked = Capacity.bookedOf(date), left = cap - booked;
      if (left <= 0) return { state: 'full', reason: 'Ngày này tiệm đã nhận đủ đơn', left: 0, cap: cap, booked: booked };
      if (left <= 2) return { state: 'almost', reason: 'Còn ' + left + ' suất', left: left, cap: cap, booked: booked };
      return { state: 'ok', reason: 'Còn ' + left + ' suất', left: left, cap: cap, booked: booked };
    }
  };

  /* ===================== Orders (FR-016 → FR-030) ===================== */
  var STATUS = {
    pending: { vi: 'Chờ xác nhận', en: 'Awaiting confirmation', cls: 'bg-butter text-butter-strong' },
    confirmed: { vi: 'Đã xác nhận', en: 'Confirmed', cls: 'bg-info-soft text-info' },
    baking: { vi: 'Đang làm bánh', en: 'Baking', cls: 'bg-primary-soft text-primary-strong' },
    shipping: { vi: 'Đang giao', en: 'Out for delivery', cls: 'bg-lilac text-lilac-strong' },
    ready: { vi: 'Chờ lấy', en: 'Ready for pickup', cls: 'bg-lilac text-lilac-strong' },
    done: { vi: 'Hoàn thành', en: 'Completed', cls: 'bg-mint text-mint-strong' },
    cancelled: { vi: 'Đã hủy', en: 'Cancelled', cls: 'bg-stone2 text-stone2-strong' }
  };
  var DEPOSIT = {
    unpaid: { vi: 'Chưa cọc', en: 'No deposit', cls: 'border border-danger text-danger bg-white' },
    deposit: { vi: 'Đã cọc', en: 'Deposit paid', cls: 'bg-mint text-mint-strong' },
    paid: { vi: 'Đã thanh toán đủ', en: 'Fully paid', cls: 'bg-mint-strong text-white' }
  };
  var PAY = { bank: 'Chuyển khoản ngân hàng', wallet: 'Ví MoMo / ZaloPay', cash: 'Tiền mặt' };

  var Orders = {
    STATUS: STATUS, DEPOSIT: DEPOSIT, PAY: PAY,
    all: function () { return DB.get('orders'); },
    byCode: function (code) { return Orders.all().filter(function (o) { return o.code === String(code || '').toUpperCase(); })[0] || null; },
    save: function () { DB.save('orders'); },
    /** Đơn Chờ xác nhận chưa xem -> huy hiệu số (q17) */
    newCount: function () { return Orders.all().filter(function (o) { return o.status === 'pending' && !o.seen; }).length; },
    /** Tính tiền đơn: tạm tính, giảm, điểm, phí giao, tổng, cọc, còn lại */
    calc: function (o) {
      var s = DB.get('settings');
      var subtotal = o.items.reduce(function (n, it) { return n + it.unitPrice * it.qty; }, 0);
      var discount = o.discount || 0;
      var points = (o.pointsUsed || 0) * s.pointValue;
      var ship = o.shippingFee == null ? null : o.shippingFee;
      var total = subtotal - discount - points + (ship || 0);
      var deposit = Math.round((o.depositRate || s.depositRate) / 100 * (subtotal - discount) / 1000) * 1000;
      return { subtotal: subtotal, discount: discount, points: points, ship: ship, total: total, deposit: deposit, paid: o.paid || 0, remaining: Math.max(0, total - (o.paid || 0)) };
    },
    statusLabel: function (st) { return STATUS[st][I18n.lang === 'en' ? 'en' : 'vi']; },
    nextCode: function () {
      var prefix = 'TB' + MOCK.today.slice(2).replace(/-/g, '');
      var n = Orders.all().filter(function (o) { return o.code.indexOf(prefix) === 0; }).length + 1;
      var c;
      do { c = prefix + ('00' + n).slice(-3); n++; } while (Orders.byCode(c));
      return c;
    },
    add: function (o) { Orders.all().unshift(o); Orders.save(); return o; },
    log: function (o, text) {
      var u = Auth.current();
      o.history.push({ at: new Date().toISOString(), by: u ? u.name.split(' ').pop() + (u.role === 'owner' ? ' (Chủ tiệm)' : ' (NV)') : 'Khách', text: text });
    },
    /** Giả lập đơn mới cho màn hình quản trị (SCR-014) */
    simulate: function () {
      var names = ['Phan Bảo Ngọc', 'Châu Minh Tâm', 'Lâm Gia Hân', 'Tạ Quang Vinh', 'Kiều Anh Đào', 'Hồ Nhật Nam'];
      var phones = ['0908123987', '0939456123', '0971234890', '0916789345', '0947812356', '0983345671'];
      var visible = Cakes.visible();
      var c = visible[Math.floor(Math.random() * visible.length)];
      var sz = Cakes.sizes(c)[Math.floor(Math.random() * Cakes.sizes(c).length)];
      var i = Math.floor(Math.random() * names.length);
      var del = Math.random() > 0.5;
      var promo = Promo.forCake(c);
      var o = {
        code: Orders.nextCode(), createdAt: new Date().toISOString(), status: 'pending', seen: false,
        customer: { name: names[i], phone: phones[i], email: '', note: '' },
        items: [{ cakeId: c.id, cakeName: c.name, sizeId: sz.id, sizeLabel: sz.label, servings: sz.servings, qty: 1, unitPrice: sz.price, message: 'Happy Birthday', sampleImages: [], image: c.images[0] }],
        delivery: { type: del ? 'delivery' : 'pickup', address: del ? '120 Trần Huy Liệu, Phường 15' : '', date: MOCK.helpers.d(3), slot: '14:00-16:00' },
        payment: { method: 'bank' }, discount: promo ? sz.price - Promo.apply(sz.price, promo) : 0, pointsUsed: 0,
        shippingFee: del ? null : 0, depositRate: DB.get('settings').depositRate, paid: 0, depositStatus: 'unpaid',
        history: [{ at: new Date().toISOString(), by: 'Khách', text: 'Khách gửi đơn' }], internalNote: '', reviewed: {}
      };
      Orders.add(o);
      return o;
    }
  };

  /* ===================== Customers: điểm khách quen theo SĐT (FR-037, FR-038) ===================== */
  var Customers = {
    byPhone: function (phone) { var p = String(phone || '').replace(/\D/g, ''); return DB.get('customers').filter(function (c) { return c.phone === p; })[0] || null; },
    addPoints: function (phone, name, pts, order, note) {
      var c = Customers.byPhone(phone);
      if (!c) { c = { phone: String(phone).replace(/\D/g, ''), name: name, points: 0, doneOrders: 0, last: MOCK.today, history: [] }; DB.get('customers').push(c); }
      c.points = Math.max(0, c.points + pts);
      c.history.unshift({ at: new Date().toISOString(), type: pts >= 0 ? 'add' : 'use', points: pts, order: order || '', note: note });
      DB.save('customers');
      return c;
    }
  };

  /* ===================== Auth: đăng nhập giả (FR-043) ===================== */
  var Auth = {
    current: function () {
      var id = Store.get('auth', null);
      if (!id) return null;
      return DB.get('accounts').filter(function (a) { return a.id === id && a.status === 'active'; })[0] || null;
    },
    /** Trả { ok, error } theo E-TK-11 / E-TK-12 / E-TK-13 */
    login: function (email, password) {
      var lock = Store.get('login_lock', 0);
      if (lock && Date.now() < lock) return { ok: false, error: 'Bạn đã nhập sai nhiều lần, thử lại sau 15 phút.' };
      var acc = DB.get('accounts').filter(function (a) { return a.email.toLowerCase() === String(email).trim().toLowerCase(); })[0];
      if (acc && acc.password === password) {
        if (acc.status === 'locked') return { ok: false, error: 'Tài khoản đã bị khóa, vui lòng liên hệ chủ tiệm.' };
        Store.set('auth', acc.id); Store.set('login_fail', 0);
        return { ok: true, user: acc };
      }
      var fails = Store.get('login_fail', 0) + 1;
      Store.set('login_fail', fails);
      if (fails >= 5) { Store.set('login_lock', Date.now() + 15 * 60 * 1000); Store.set('login_fail', 0); return { ok: false, error: 'Bạn đã nhập sai nhiều lần, thử lại sau 15 phút.' }; }
      return { ok: false, error: 'Sai email hoặc mật khẩu.' };
    },
    logout: function () { Store.remove('auth'); location.href = 'qt-dang-nhap.html'; },
    isOwner: function () { var u = Auth.current(); return !!u && u.role === 'owner'; },
    canEditPrice: function () { var u = Auth.current(); return !!u && (u.role === 'owner' || u.canEditPrice); }
  };

  /* ===================== Bell: chuông báo đơn mới (CMP-18, q17) ===================== */
  var Bell = {
    isOn: function () { return !!Store.get('bell', false); },
    toggle: function () {
      var on = !Bell.isOn(); Store.set('bell', on);
      if (on) Bell.ring();
      $all('.bell-toggle').forEach(function (b) {
        b.setAttribute('aria-pressed', on);
        b.setAttribute('aria-label', on ? 'Tắt chuông báo đơn mới' : 'Bật chuông báo đơn mới');
        b.classList.toggle('text-primary-strong', on); b.classList.toggle('text-ink-muted', !on);
        b.innerHTML = '<i class="ph' + (on ? '-fill ph-bell-ringing' : ' ph-bell-slash') + '" aria-hidden="true"></i>';
      });
      Toast.show(on ? 'Đã bật chuông báo đơn mới' : 'Đã tắt chuông báo đơn mới', 'info');
      var hint = $('#bell-hint'); if (hint) hint.remove();
    },
    /** Tiếng chuông ngắn bằng Web Audio (không cần file âm thanh) */
    ring: function () {
      try {
        var Ctx = window.AudioContext || window.webkitAudioContext; if (!Ctx) return;
        var ctx = Bell._ctx || (Bell._ctx = new Ctx());
        [[880, 0], [1320, 0.16]].forEach(function (n) {
          var o = ctx.createOscillator(), g = ctx.createGain();
          o.type = 'sine'; o.frequency.value = n[0];
          g.gain.setValueAtTime(0.0001, ctx.currentTime + n[1]);
          g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + n[1] + 0.02);
          g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + n[1] + 0.35);
          o.connect(g); g.connect(ctx.destination); o.start(ctx.currentTime + n[1]); o.stop(ctx.currentTime + n[1] + 0.4);
        });
      } catch (e) { /* trình duyệt chặn âm thanh */ }
    }
  };

  /* ===================== Confetti (CMP-16) ===================== */
  var Confetti = {
    /** Hoa giấy bắn từ 2 góc dưới ~2,5 giây, chạy 1 lần. Giảm chuyển động -> bỏ qua */
    fire: function () {
      if (reducedMotion()) return false;
      var cv = document.createElement('canvas');
      cv.className = 'fixed inset-0 z-[65] pointer-events-none';
      cv.setAttribute('aria-hidden', 'true');
      document.body.appendChild(cv);
      var ctx = cv.getContext('2d'), W, H, dpr = window.devicePixelRatio || 1;
      function size() { W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px'; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
      size();
      var colors = ['#F4A7B9', '#FFF6EC', '#BDE7D6', '#FFF1B8', '#C2456A'];
      var parts = [];
      [[0, 1], [1, -1]].forEach(function (side) {
        for (var i = 0; i < 90; i++) {
          var ang = (side[1] > 0 ? -60 : -120) + (Math.random() * 30 - 15);
          var sp = 9 + Math.random() * 9;
          parts.push({ x: side[0] * W, y: H * 0.85, vx: Math.cos(ang * Math.PI / 180) * sp, vy: Math.sin(ang * Math.PI / 180) * sp, r: 4 + Math.random() * 5, c: colors[i % colors.length], rot: Math.random() * 6, vr: Math.random() * 0.3 - 0.15, shape: i % 3 });
        }
      });
      var start = performance.now();
      (function frame(now) {
        var t = now - start;
        ctx.clearRect(0, 0, W, H);
        parts.forEach(function (p) {
          p.vy += 0.28; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.c;
          ctx.globalAlpha = Math.max(0, 1 - Math.max(0, t - 1800) / 700);
          if (p.shape === 0) { ctx.beginPath(); ctx.arc(0, 0, p.r / 1.6, 0, 6.3); ctx.fill(); }
          else ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2);
          ctx.strokeStyle = 'rgba(194,69,106,.25)'; ctx.lineWidth = .5;
          ctx.restore();
        });
        if (t < 2500) requestAnimationFrame(frame); else cv.remove();
      })(start);
      return true;
    }
  };

  /* ===================== UI: thành phần hiển thị dùng chung ===================== */
  var UI = {
    /** Sao đánh giá (chỉ hiển thị) */
    stars: function (r, size) {
      var out = '';
      for (var i = 1; i <= 5; i++) {
        var cls = r >= i ? 'ph-fill ph-star' : r >= i - 0.5 ? 'ph-fill ph-star-half' : 'ph ph-star';
        out += '<i class="' + cls + '" aria-hidden="true"></i>';
      }
      return '<span class="inline-flex text-[#E0A100] ' + (size || 'text-sm') + '" role="img" aria-label="' + r + ' trên 5 sao">' + out + '</span>';
    },
    statusBadge: function (st) {
      var s = STATUS[st];
      return '<span class="badge ' + s.cls + '">' + s[I18n.lang === 'en' ? 'en' : 'vi'] + '</span>';
    },
    depositBadge: function (st) { var s = DEPOSIT[st || 'unpaid']; return '<span class="badge ' + s.cls + '">' + s[I18n.lang === 'en' ? 'en' : 'vi'] + '</span>'; },
    /** Thẻ bánh (CMP-05) */
    cakeCard: function (c, opts) {
      opts = opts || {};
      var promo = Promo.forCake(c);
      var from = Cakes.priceFrom(c);
      var sale = Promo.apply(from, promo);
      var rv = Reviews.stats(c.id);
      var name = Fmt.esc(I18n.pick(c, 'name'));
      var tags = '';
      if (promo) tags += '<span class="badge bg-primary-strong text-white">' + Promo.label(promo) + '</span>';
      if (c.bestSeller && opts.tag !== 'new') tags += '<span class="badge bg-primary-soft text-primary-strong">' + I18n.t('card.best') + '</span>';
      if (c.isNew && opts.tag !== 'best') tags += '<span class="badge bg-butter text-butter-strong">' + I18n.t('card.new') + '</span>';
      return '<a href="chi-tiet-banh.html?slug=' + c.slug + '" class="cake-card group block rounded-2xl focus-ring ' + (opts.cls || '') + '">' +
        '<div class="relative overflow-hidden rounded-2xl bg-beige ' + (opts.ratio || 'aspect-square') + '">' +
        '<img src="' + c.images[0] + '" alt="' + name + '" loading="lazy" class="cake-img absolute inset-0 w-full h-full object-cover" onerror="this.style.opacity=0">' +
        (tags ? '<div class="absolute left-2.5 top-2.5 flex flex-wrap gap-1.5">' + tags + '</div>' : '') +
        '</div>' +
        '<div class="pt-3 px-0.5">' +
        '<h3 class="font-extrabold text-[17px] md:text-lg leading-snug line-clamp-2 group-hover:text-primary-strong transition-colors">' + name + '</h3>' +
        '<p class="text-sm text-ink-muted mt-0.5">' + Fmt.esc(I18n.pick(c, 'flavor')) + '</p>' +
        '<p class="mt-1.5 flex flex-wrap items-baseline gap-x-2"><span class="text-sm text-ink-muted">' + I18n.t('card.from') + '</span>' +
        '<span class="font-extrabold text-lg text-ink tabular-nums">' + Fmt.money(sale) + '</span>' +
        (promo ? '<span class="text-sm text-ink-muted line-through tabular-nums">' + Fmt.money(from) + '</span>' : '') + '</p>' +
        '<p class="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">' +
        (rv.count ? UI.stars(rv.avg) + '<span class="tabular-nums">' + String(rv.avg).replace('.', ',') + ' (' + rv.count + ')</span>' : '<span>' + I18n.t('card.noReviews') + '</span>') + '</p>' +
        '</div></a>';
    },
    skeletonCards: function (n, cls) {
      var s = '';
      for (var i = 0; i < n; i++) s += '<div class="' + (cls || '') + '" aria-hidden="true"><div class="skeleton aspect-square rounded-2xl"></div><div class="skeleton h-5 w-3/4 mt-3 rounded-full"></div><div class="skeleton h-4 w-1/2 mt-2 rounded-full"></div><div class="skeleton h-5 w-2/5 mt-2 rounded-full"></div></div>';
      return s;
    },
    /** Khung trống (CMP-21) */
    empty: function (o) {
      return '<div class="empty-state text-center py-14 px-4">' +
        '<div class="mx-auto grid place-items-center w-20 h-20 rounded-full bg-primary-soft text-primary-strong text-4xl mb-4"><i class="ph ' + (o.icon || 'ph-cake') + '" aria-hidden="true"></i></div>' +
        '<p class="font-extrabold text-lg">' + o.title + '</p>' + (o.text ? '<p class="mt-1 text-ink-muted max-w-sm mx-auto">' + o.text + '</p>' : '') +
        (o.action ? '<div class="mt-5">' + o.action + '</div>' : '') + '</div>';
    },
    /** Liên kết bản đồ Google */
    mapUrl: function () { return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(MOCK.shop.mapQuery); },
    mapEmbed: function () { return 'https://www.google.com/maps?q=' + encodeURIComponent(MOCK.shop.mapQuery) + '&output=embed'; },
    /** Đang mở cửa hay không (theo giờ máy) */
    isOpenNow: function () {
      var now = new Date(); var day = now.getDay(); var h = MOCK.shop.hours[(day === 0 || day === 6) ? 1 : 0];
      var cur = now.getHours() * 60 + now.getMinutes();
      var o = h.open.split(':'), c = h.close.split(':');
      return cur >= (+o[0] * 60 + +o[1]) && cur < (+c[0] * 60 + +c[1]);
    }
  };

  /* ===================== Calendar: chọn ngày (CMP-08) ===================== */
  var Calendar = {
    /**
     * Vẽ lịch tháng. opts: { month: Date, selected: 'YYYY-MM-DD', dayInfo(date) -> {state, reason, sub}, onSelect(date), admin: bool, minMonth: Date }
     */
    render: function (host, opts) {
      var m = new Date(opts.month.getFullYear(), opts.month.getMonth(), 1);
      var first = (m.getDay() + 6) % 7; // thứ 2 đầu tuần
      var days = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
      var names = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
      var title = 'Tháng ' + (m.getMonth() + 1) + ', ' + m.getFullYear();
      var cells = '';
      for (var i = 0; i < first; i++) cells += '<div></div>';
      for (var dnum = 1; dnum <= days; dnum++) {
        var iso = Fmt.iso(new Date(m.getFullYear(), m.getMonth(), dnum));
        var info = opts.dayInfo(iso);
        var sel = iso === opts.selected;
        var disabled = !opts.admin && ['past', 'tooSoon', 'off', 'full'].indexOf(info.state) > -1;
        var cls = 'cal-day cal-' + info.state + (sel ? ' is-selected' : '') + (iso === MOCK.today ? ' is-today' : '');
        cells += '<button type="button" class="' + cls + '" data-date="' + iso + '"' + (disabled ? ' aria-disabled="true"' : '') +
          ' aria-pressed="' + sel + '" title="' + Fmt.esc(info.reason || '') + '" aria-label="' + Fmt.date(iso) + ', ' + Fmt.esc(info.reason || '') + '">' +
          '<span class="cal-num">' + dnum + '</span>' + (info.sub ? '<span class="cal-sub">' + info.sub + '</span>' : (info.state === 'almost' ? '<span class="cal-dot" aria-hidden="true"></span>' : '')) + '</button>';
      }
      var canPrev = !opts.minMonth || m > new Date(opts.minMonth.getFullYear(), opts.minMonth.getMonth(), 1);
      host.innerHTML = '<div class="calendar">' +
        '<div class="flex items-center justify-between mb-3">' +
        '<button type="button" class="cal-nav" data-nav="-1" aria-label="Tháng trước"' + (canPrev ? '' : ' disabled') + '><i class="ph ph-caret-left" aria-hidden="true"></i></button>' +
        '<p class="font-extrabold" aria-live="polite">' + title + '</p>' +
        '<button type="button" class="cal-nav" data-nav="1" aria-label="Tháng sau"><i class="ph ph-caret-right" aria-hidden="true"></i></button></div>' +
        '<div class="grid grid-cols-7 gap-1 text-center text-xs font-bold text-ink-muted mb-1">' + names.map(function (n) { return '<span>' + n + '</span>'; }).join('') + '</div>' +
        '<div class="grid grid-cols-7 gap-1">' + cells + '</div>' +
        '<p class="cal-reason mt-2 text-sm text-ink-muted min-h-[20px]" aria-live="polite"></p></div>';
      $all('[data-nav]', host).forEach(function (b) {
        b.onclick = function () { opts.month = new Date(m.getFullYear(), m.getMonth() + +b.getAttribute('data-nav'), 1); Calendar.render(host, opts); };
      });
      $all('[data-date]', host).forEach(function (b) {
        b.onclick = function () {
          var iso = b.getAttribute('data-date');
          if (b.getAttribute('aria-disabled') === 'true') { $('.cal-reason', host).textContent = Fmt.date(iso) + ': ' + b.title; return; }
          opts.selected = iso; opts.onSelect(iso); Calendar.render(host, opts);
        };
      });
    }
  };

  /* ===================== Uploader: tải ảnh (CMP-20) ===================== */
  var Uploader = {
    /**
     * Gắn bộ tải ảnh vào host. opts: { max: 3, files: [{src, name}], onChange(files), label, star: bool (chọn ảnh đại diện) }
     * Kiểm tra JPG/PNG/WEBP, ≤ 5 MB. Ảnh xem trước bằng object URL.
     */
    mount: function (host, opts) {
      var files = (opts.files || []).slice();
      var id = 'up-' + Math.random().toString(36).slice(2, 7);
      function draw(err) {
        var grid = files.map(function (f, i) {
          return '<div class="relative group aspect-square rounded-xl overflow-hidden bg-beige">' +
            '<img src="' + f.src + '" alt="' + Fmt.esc(f.name || 'Ảnh ' + (i + 1)) + '" class="w-full h-full object-cover">' +
            (opts.star ? '<button type="button" data-star="' + i + '" class="absolute left-1.5 top-1.5 grid place-items-center w-8 h-8 rounded-full bg-white/90 text-lg ' + (i === 0 ? 'text-[#E0A100]' : 'text-ink-muted') + '" aria-label="' + (i === 0 ? 'Ảnh đại diện' : 'Đặt làm ảnh đại diện') + '"><i class="' + (i === 0 ? 'ph-fill' : 'ph') + ' ph-star" aria-hidden="true"></i></button>' : '') +
            '<button type="button" data-del="' + i + '" class="absolute right-1.5 top-1.5 grid place-items-center w-8 h-8 rounded-full bg-white/90 text-danger" aria-label="Xóa ảnh ' + (i + 1) + '"><i class="ph ph-trash" aria-hidden="true"></i></button></div>';
        }).join('');
        var full = files.length >= (opts.max || 3);
        host.innerHTML = '<div class="uploader">' +
          (full ? '' : '<label for="' + id + '" class="dropzone' + (err ? ' has-error' : '') + '">' +
            '<i class="ph ph-image-square text-3xl text-primary-strong" aria-hidden="true"></i>' +
            '<span class="font-bold">Chọn ảnh hoặc kéo thả vào đây</span>' +
            '<span class="text-sm text-ink-muted">JPG, PNG, WEBP · tối đa 5 MB · tối đa ' + (opts.max || 3) + ' ảnh</span>' +
            '<input id="' + id + '" type="file" accept="image/jpeg,image/png,image/webp" multiple class="sr-only"></label>') +
          (err ? '<p class="field-error mt-2" role="alert">' + err + '</p>' : '') +
          (files.length ? '<div class="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-3">' + grid + '</div>' : '') + '</div>';
        var input = $('input[type=file]', host);
        if (input) input.onchange = function () { add(input.files); };
        var dz = $('.dropzone', host);
        if (dz) {
          dz.ondragover = function (e) { e.preventDefault(); dz.classList.add('is-drag'); };
          dz.ondragleave = function () { dz.classList.remove('is-drag'); };
          dz.ondrop = function (e) { e.preventDefault(); dz.classList.remove('is-drag'); add(e.dataTransfer.files); };
        }
        $all('[data-del]', host).forEach(function (b) { b.onclick = function () { files.splice(+b.getAttribute('data-del'), 1); draw(); opts.onChange && opts.onChange(files); }; });
        $all('[data-star]', host).forEach(function (b) { b.onclick = function () { var i = +b.getAttribute('data-star'); files.unshift(files.splice(i, 1)[0]); draw(); opts.onChange && opts.onChange(files); }; });
      }
      function add(list) {
        var err = '';
        Array.prototype.forEach.call(list, function (f) {
          if (files.length >= (opts.max || 3)) { err = 'Tối đa ' + (opts.max || 3) + ' ảnh.'; return; }
          if (['image/jpeg', 'image/png', 'image/webp'].indexOf(f.type) === -1 || f.size > 5 * 1024 * 1024) { err = opts.error || 'Ảnh phải là JPG, PNG, WEBP và không quá 5 MB.'; return; }
          files.push({ src: URL.createObjectURL(f), name: f.name });
        });
        draw(err);
        opts.onChange && opts.onChange(files);
      }
      draw();
      return { get: function () { return files; } };
    }
  };

  /* ===================== FormUI: hiển thị lỗi tại ô (9.18) ===================== */
  var FormUI = {
    /** Tìm phần tử .field-error gắn với ô qua aria-describedby */
    errorEl: function (input) {
      var ids = (input.getAttribute('aria-describedby') || '').split(' ').filter(Boolean);
      for (var i = 0; i < ids.length; i++) { var el = document.getElementById(ids[i]); if (el && el.classList.contains('field-error')) return el; }
      return null;
    },
    setError: function (input, msg) {
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
      var err = FormUI.errorEl(input);
      if (!err) {
        err = document.createElement('p');
        err.id = (input.id || 'f' + Math.random().toString(36).slice(2, 6)) + '-err';
        err.className = 'field-error';
        var anchor = (input.parentElement && input.parentElement.classList.contains('relative')) ? input.parentElement : input;
        anchor.insertAdjacentElement('afterend', err);
        input.setAttribute('aria-describedby', ((input.getAttribute('aria-describedby') || '') + ' ' + err.id).trim());
      }
      err.innerHTML = '<i class="ph-fill ph-warning-circle" aria-hidden="true"></i> ' + Fmt.esc(msg);
      err.classList.remove('hidden');
    },
    clearError: function (input) {
      input.classList.remove('is-invalid');
      input.removeAttribute('aria-invalid');
      var err = FormUI.errorEl(input);
      if (err) err.classList.add('hidden');
    },
    /** Đặt tiêu điểm + cuộn tới ô lỗi đầu tiên */
    focusFirst: function (root) {
      var f = $('.is-invalid', root);
      if (f) { f.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'center' }); f.focus({ preventScroll: true }); }
    },
    /** Ô SĐT: chỉ nhận số, tự định dạng 0xxx xxx xxx */
    phoneMask: function (input) {
      input.addEventListener('input', function () {
        var x = input.value.replace(/\D/g, '').slice(0, 10);
        input.value = x.length > 7 ? x.slice(0, 4) + ' ' + x.slice(4, 7) + ' ' + x.slice(7) : x.length > 4 ? x.slice(0, 4) + ' ' + x.slice(4) : x;
      });
    },
    validPhone: function (v) { return /^0\d{9}$/.test(String(v).replace(/\D/g, '')); },
    validEmail: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); },
    /** Bộ đếm ký tự cho textarea/input có data-counter="id-bộ-đếm" */
    counter: function (input, out, max) {
      function upd() { var n = input.value.length; out.textContent = n + '/' + max; out.classList.toggle('text-danger', n >= max); out.classList.toggle('font-bold', n >= max); }
      input.addEventListener('input', upd); upd();
    },
    /** Nút đang xử lý: khóa + vòng xoay */
    busy: function (btn, on, text) {
      if (on) { btn.dataset.label = btn.innerHTML; btn.disabled = true; btn.innerHTML = '<i class="ph ph-spinner-gap animate-spin text-lg" aria-hidden="true"></i><span>' + (text || 'Đang xử lý...') + '</span>'; }
      else { btn.disabled = false; if (btn.dataset.label) btn.innerHTML = btn.dataset.label; }
    }
  };

  /* ===================== App: khởi động + sự kiện chung ===================== */
  var App = {
    /** Chạy hàm khi DOM sẵn sàng, sau Layout. Bỏ qua nếu trang bị chặn quyền */
    onReady: function (fn) {
      document.addEventListener('DOMContentLoaded', function () {
        if (document.body.getAttribute('data-denied') === 'true') return;
        fn();
      });
    },
    /** Giả lập tải dữ liệu (để thấy skeleton) */
    fakeLoad: function (cb, ms) { setTimeout(cb, ms == null ? 450 : ms); },
    param: param,
    /** Hiện dần các khối .reveal khi cuộn tới (IntersectionObserver, không dùng scroll listener) */
    reveal: function () {
      var els = $all('.reveal:not(.is-in)');
      if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('is-in'); }); return; }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      els.forEach(function (e) { io.observe(e); });
    }
  };
  document.addEventListener('DOMContentLoaded', function () { setTimeout(App.reveal, 0); });

  /* Sự kiện chung qua data-action */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action]');
    if (!el) return;
    var a = el.getAttribute('data-action');
    if (a === 'reset-demo') {
      Modal.confirm({ title: 'Đặt lại dữ liệu demo?', message: 'Mọi đơn, chỉnh sửa và đăng nhập trong bản demo sẽ quay về ban đầu.', confirmLabel: 'Đặt lại', danger: true })
        .then(function (r) { if (r.ok) { DB.reset(); location.reload(); } });
    } else if (a === 'set-lang') {
      I18n.set(el.getAttribute('data-lang'));
    } else if (a === 'open-drawer' || a === 'open-more') {
      var d = $(a === 'open-drawer' ? '#mobile-drawer' : '#admin-more');
      d.classList.remove('hidden'); document.body.classList.add('overflow-hidden');
      $all('[aria-controls="mobile-drawer"]').forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
      var f = $('a, button', d.querySelector('.drawer-panel, .sheet-panel')); f && f.focus();
    } else if (a === 'close-drawer' || a === 'close-more') {
      $(a === 'close-drawer' ? '#mobile-drawer' : '#admin-more').classList.add('hidden'); document.body.classList.remove('overflow-hidden');
      $all('[aria-controls="mobile-drawer"]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    } else if (a === 'toggle-fab') {
      var g = $('#fab-group'); var open = g.classList.contains('hidden');
      g.classList.toggle('hidden', !open); g.classList.toggle('flex', open); el.setAttribute('aria-expanded', open);
      el.innerHTML = '<i class="ph ' + (open ? 'ph-x' : 'ph-chat-circle-dots') + ' text-2xl" aria-hidden="true"></i>';
    } else if (a === 'toggle-bell') {
      Bell.toggle();
    } else if (a === 'logout') {
      Auth.logout();
    } else if (a === 'soon') {
      e.preventDefault(); Toast.soon();
    } else if (a === 'copy') {
      var txt = el.getAttribute('data-copy');
      var done = function () { Toast.show(el.getAttribute('data-copy-msg') || 'Đã sao chép', 'success'); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(done, done);
      else { var ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (x) { /* bỏ qua */ } ta.remove(); done(); }
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    ['#mobile-drawer', '#admin-more'].forEach(function (s) { var d = $(s); if (d && !d.classList.contains('hidden')) { d.classList.add('hidden'); document.body.classList.remove('overflow-hidden'); } });
  });
  /* Xóa lỗi khi người dùng sửa ô */
  document.addEventListener('input', function (e) { if (e.target.classList && e.target.classList.contains('is-invalid')) FormUI.clearError(e.target); });
  document.addEventListener('DOMContentLoaded', function () { I18n.apply(); });

  /* Xuất ra toàn cục */
  window.Store = Store; window.DB = DB; window.Fmt = Fmt; window.I18n = I18n; window.Toast = Toast; window.Modal = Modal;
  window.Lightbox = Lightbox; window.Promo = Promo; window.Reviews = Reviews; window.Cakes = Cakes; window.Capacity = Capacity;
  window.Orders = Orders; window.Customers = Customers; window.Auth = Auth; window.Bell = Bell; window.Confetti = Confetti;
  window.UI = UI; window.Calendar = Calendar; window.Uploader = Uploader; window.FormUI = FormUI; window.App = App;
  window.$ = $; window.$all = $all; window.debounce = debounce; window.reducedMotion = reducedMotion;
})();
