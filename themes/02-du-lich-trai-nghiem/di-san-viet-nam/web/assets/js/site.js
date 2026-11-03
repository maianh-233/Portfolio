/* disanvietnam — logic riêng của website (render từ data.js, bộ lọc, bản đồ, chuyển nhãn VI/EN).
   Mỗi khối tự kiểm tra phần tử tồn tại; lỗi một khối không làm hỏng khối khác. */
(function () {
  'use strict';
  var D = window.DSVN || { works: [], awards: [], ip: [], conferences: [], layers: [], sites: [], labels: {} };
  var body = document.body;
  var BASE = body.getAttribute('data-base') || '';       // '' ở trang chủ, '../' ở pages/
  var PAGES = body.getAttribute('data-pages') || '';     // 'pages/' ở trang chủ, '' ở pages/
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function safe(name, fn) { try { fn(); } catch (e) { if (window.console) console.warn('[site.js] ' + name, e); } }
  function isMobile() { return window.matchMedia('(max-width: 1023px)').matches; }

  function badge(status, note) {
    if (status === 'verified') {
      return '<span class="badge-ok inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold"><i data-lucide="badge-check" class="h-3.5 w-3.5" aria-hidden="true"></i>' + esc(note || 'Đã đối chiếu nguồn') + '</span>';
    }
    return '<span class="badge-wait inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold"><i data-lucide="clock-3" class="h-3.5 w-3.5" aria-hidden="true"></i>Theo hồ sơ – chờ kiểm chứng</span>';
  }

  function tags(list) {
    return '<ul class="mt-4 flex flex-wrap gap-2" aria-label="Từ khóa">' + (list || []).slice(0, 5).map(function (t) {
      return '<li class="rounded-md bg-surface px-2.5 py-1 text-[13px] font-medium text-academic">' + esc(t) + '</li>';
    }).join('') + '</ul>';
  }

  function workLink(w, label) {
    if (w.detail) {
      return '<a href="' + PAGES + w.detail + '" class="group/l inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary hover:underline">' + (label || 'Xem chi tiết công trình') + '<i data-lucide="arrow-right" class="h-4 w-4 transition-transform duration-200 group-hover/l:translate-x-0.5" aria-hidden="true"></i></a>';
    }
    return '<span class="inline-flex min-h-[44px] items-center text-sm text-muted">Trang chi tiết đang cập nhật</span>';
  }

  function workCard(w) {
    var no = (w.id < 10 ? '0' : '') + w.id;
    return '<article id="cong-trinh-' + w.id + '" class="card-hover flex flex-col rounded-xl border border-line bg-white p-5 shadow-soft sm:p-6">' +
      '<div class="flex flex-wrap items-center gap-x-3 gap-y-2">' +
      '<span class="text-2xl font-bold tabular-nums text-primary">' + w.year + '</span><span class="h-0.5 w-6 bg-heritage" aria-hidden="true"></span>' +
      '<span class="text-sm font-medium text-muted">' + esc(D.labels.type[w.type]) + '</span>' +
      '<span class="sm:ml-auto">' + badge(w.status) + '</span></div>' +
      '<p class="mt-4 text-[13px] font-semibold tabular-nums text-heritage-dark">Công trình số ' + no + '</p>' +
      '<h3 class="card-title mt-1 text-[17px] font-semibold leading-snug text-ink break-anywhere">' + esc(w.title) + '</h3>' +
      '<div class="mt-3 grid gap-1.5 text-sm">' +
      '<p class="flex gap-2 leading-relaxed text-muted"><i data-lucide="book-open" class="mt-0.5 h-4 w-4 shrink-0 text-gis-dark" aria-hidden="true"></i><span class="min-w-0">' + esc(w.venue) + '</span></p>' +
      '<p class="flex gap-2 text-ink"><i data-lucide="user-round" class="mt-0.5 h-4 w-4 shrink-0 text-gis-dark" aria-hidden="true"></i><span><span class="text-muted">Vai trò tác giả:</span> <strong class="font-semibold">' + esc(w.role) + '</strong></span></p></div>' +
      tags(w.tags) +
      '<div class="mt-auto pt-5"><div class="flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-line pt-2">' + workLink(w) +
      '<span class="inline-flex items-center gap-1.5 text-[13px] text-muted"><i data-lucide="file-text" class="h-4 w-4" aria-hidden="true"></i>' + esc(D.labels.pdf[w.pdf]) + '</span></div></div>' +
      '</article>';
  }

  function recipientBlock(a) {
    var type = a.recipientType;
    var cls = type === 'Cơ quan' ? 'bg-primary-soft text-primary' : type === 'Nhóm tác giả' ? 'bg-gis-soft text-gis-dark' : 'bg-surface text-muted';
    return '<span class="inline-flex rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-wide ' + cls + '">' + esc(type === 'Chưa xác nhận' ? 'Chủ thể: chưa xác nhận' : type) + '</span>' +
      (type === 'Chưa xác nhận' ? '' : '<span class="mt-1 block text-sm font-semibold text-ink">' + esc(a.recipient) + '</span>');
  }

  function awardCard(a, compact) {
    var group = a.recipientType === 'Nhóm tác giả' ? a.recipient : (a.recipientType === 'Cơ quan' ? 'Giải trao cho cơ quan, không phải giải cá nhân' : '[Chưa có thông tin]');
    var rows = [
      ['Tên giải', esc(a.name)],
      ['Mức giải', '<strong class="font-semibold">' + esc(a.level) + '</strong>'],
      ['Đơn vị trao', '[Đơn vị trao – chờ bổ sung]'],
      ['Chủ thể nhận', recipientBlock(a)],
      ['Nhóm tác giả', esc(group)],
      ['Link nguồn', a.sourceNote ? esc(a.sourceNote) + ' · [Link – chờ bổ sung]' : '[Link nguồn – chờ bổ sung]']
    ];
    if (compact) rows = [rows[0], rows[1], rows[3]];
    return '<article class="card-hover flex h-full flex-col rounded-xl border border-line bg-white p-5 shadow-soft sm:p-6">' +
      '<div class="flex flex-wrap items-center justify-between gap-2"><span class="inline-flex items-center gap-2 text-sm font-semibold text-heritage-dark"><i data-lucide="award" class="h-4 w-4" aria-hidden="true"></i>' + a.year + '</span>' + badge(a.status, a.sourceNote) + '</div>' +
      '<h3 class="card-title mt-3 text-lg font-semibold leading-snug text-ink">' + esc(a.product) + '</h3>' +
      '<dl class="mt-4 grid gap-3 text-sm">' + rows.map(function (r) {
        return '<div class="grid gap-0.5 sm:grid-cols-[112px_1fr] sm:gap-3"><dt class="text-muted">' + r[0] + '</dt><dd class="text-ink break-anywhere">' + r[1] + '</dd></div>';
      }).join('') + '</dl></article>';
  }

  function emptyNote(text) {
    return '<div class="rounded-xl border border-dashed border-line bg-white p-6 text-sm text-muted">' + esc(text) + '</div>';
  }

  /* ---------- Chuyển nhãn giao diện VI | EN (bản demo) ---------- */
  safe('lang', function () {
    var EN = {
      home: 'Home', about: 'About', research: 'Research', bank: 'Digital heritage bank', heritage: 'Cultural heritage',
      events: 'Conferences & activities', awards: 'Awards & innovation', coop: 'Contact & partnership', contact: 'Contact',
      tagline: 'Knowledge portal on the cultural heritage of Viet Nam and Quang Tri', menu: 'Menu', go: 'Search'
    };
    var PH_EN = 'Search works, sites, conferences, authors…';
    function apply(lang) {
      $$('[data-i18n]').forEach(function (el) {
        if (!el.hasAttribute('data-vi')) el.setAttribute('data-vi', el.textContent);
        var k = el.getAttribute('data-i18n');
        el.textContent = lang === 'en' && EN[k] ? EN[k] : el.getAttribute('data-vi');
      });
      $$('[data-i18n-ph]').forEach(function (el) {
        if (!el.hasAttribute('data-vi-ph')) el.setAttribute('data-vi-ph', el.getAttribute('placeholder'));
        el.setAttribute('placeholder', lang === 'en' ? PH_EN : el.getAttribute('data-vi-ph'));
      });
      $$('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    }
    var saved = 'vi';
    try { saved = localStorage.getItem('dsvn-lang') || 'vi'; } catch (e) {}
    if (saved === 'en') apply('en');
    $$('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () {
        var lang = b.getAttribute('data-lang');
        apply(lang);
        try { localStorage.setItem('dsvn-lang', lang); } catch (e) {}
        if (lang === 'en' && window.UI) UI.toast('Bản demo: chỉ chuyển nhãn menu sang tiếng Anh, nội dung chưa dịch.', 'info');
      });
    });
  });

  /* ---------- Trang chủ ---------- */
  safe('home', function () {
    var feat = $('#featured-works');
    if (feat) {
      var imgs = {
        8: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_Foto.jpg/1280px-Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B_Foto.jpg', alt: 'Khuôn viên Thành cổ Quảng Trị nhìn từ lối vào', link: true },
        14: { src: BASE + 'assets/img/congtrinh-vinh-moc-ham.jpg', alt: 'Đường hầm có khung chống trong di tích địa đạo Vịnh Mốc' }
      };
      var order = [8, 10, 14, 7];
      feat.innerHTML = order.map(function (id, i) {
        var w = D.work(id); var im = imgs[id];
        var span = (i === 0 || i === 3) ? 'md:col-span-7' : 'md:col-span-5';
        var media = im ? '<div class="aspect-[16/9] overflow-hidden rounded-lg bg-primary-soft"><img src="' + im.src + '" alt="' + esc(im.alt) + '" loading="lazy" ' + (im.link ? 'referrerpolicy="no-referrer" ' : '') + 'class="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"></div>' : '';
        return '<article class="group flex flex-col rounded-xl border border-line bg-white p-4 shadow-soft transition duration-200 hover:shadow-lift sm:p-5 ' + span + '">' + media +
          '<div class="' + (im ? 'mt-4 ' : '') + 'flex flex-wrap items-center gap-3"><span class="text-xl font-bold tabular-nums text-primary">' + w.year + '</span><span class="h-0.5 w-6 bg-heritage" aria-hidden="true"></span><span class="text-[13px] font-medium text-muted">Công trình số ' + w.id + '</span></div>' +
          '<h4 class="mt-2 text-base font-semibold leading-snug text-ink break-anywhere">' + esc(w.title) + '</h4>' +
          '<p class="mt-2 text-sm text-muted">' + esc(w.venue) + ' · ' + esc(w.role) + '</p>' +
          (im ? '' : tags(w.tags)) +
          '<div class="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3">' + badge(w.status) + workLink(w, 'Xem chi tiết') + '</div></article>';
      }).join('');
    }
    var latest = $('#latest-works');
    if (latest) {
      var sorted = D.works.slice().sort(function (a, b) { return b.year - a.year || b.id - a.id; }).slice(0, 3);
      latest.innerHTML = sorted.map(function (w) {
        return '<li class="py-4 first:pt-0"><p class="text-sm font-semibold tabular-nums text-gis-dark">' + w.year + ' · ' + esc(D.labels.type[w.type]) + '</p>' +
          '<p class="mt-1 text-[15px] font-medium leading-snug text-ink break-anywhere">' + esc(w.title) + '</p>' +
          '<p class="mt-1 text-[13px] text-muted">' + esc(w.venue) + '</p></li>';
      }).join('');
    }
    var proc = $('#latest-proceedings');
    if (proc) {
      var maxY = 0;
      D.works.forEach(function (w) { if (w.type === 'ky-yeu' && w.year > maxY) maxY = w.year; });
      var list = D.works.filter(function (w) { return w.type === 'ky-yeu' && w.year === maxY; });
      proc.innerHTML = '<p class="text-3xl font-bold tabular-nums text-academic">' + maxY + '</p><ul class="mt-3 space-y-3">' + list.map(function (w) {
        return '<li class="flex gap-3 text-sm leading-relaxed text-ink"><i data-lucide="book-open" class="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true"></i><span>' + esc(w.venue) + ' <span class="text-muted">(công trình số ' + w.id + ')</span></span></li>';
      }).join('') + '</ul>';
    }
    var ha = $('#home-awards');
    if (ha) {
      ha.innerHTML = ['04', '06', '07'].map(function (c) {
        var a = D.awards.filter(function (x) { return x.code === c; })[0];
        return awardCard(a, true);
      }).join('');
    }
    var ht = $('#home-timeline');
    if (ht) {
      // Cùng kiểu trục thời gian với "Lịch sử dự án" (trang Giới thiệu); năm mới nhất là mốc hiện tại
      var recent = D.conferences.filter(function (c) { return c.year >= 2023; });
      ht.innerHTML = recent.map(function (c, i) {
        var now = i === recent.length - 1;
        return '<li class="tl-item group' + (now ? ' tl-now' : '') + '"><span class="tl-node" aria-hidden="true"></span><div class="tl-card">' +
          '<p class="text-2xl font-bold tabular-nums ' + (now ? 'text-gis-dark' : 'text-academic') + '">' + c.year + '</p>' +
          '<ul class="mt-2 space-y-2">' + c.items.map(function (it) {
            return '<li class="text-sm leading-relaxed text-ink">' + esc(it.name) + ' <span class="text-muted">(' + (it.works.length ? 'công trình ' + it.works.join(', ') : 'chờ xác minh') + ')</span></li>';
          }).join('') + '</ul></div></li>';
      }).join('');
    }
  });

  /* Chip lớp bản đồ ở trang chủ: nhớ lớp để trang bản đồ bật sẵn */
  safe('layer-chips', function () {
    $$('[data-layer-chip]').forEach(function (a) {
      a.addEventListener('click', function () { try { sessionStorage.setItem('dsvn-layer', a.getAttribute('data-layer-chip')); } catch (e) {} });
    });
  });

  /* ---------- Trang Nghiên cứu: bộ lọc chạy trên data.js ---------- */
  safe('research', function () {
    var listEl = $('#work-list'); if (!listEl) return;
    var form = $('#filter-form'), countEl = $('#result-count'), emptyEl = $('#work-empty'), sortEl = $('#sort');
    var params = new URLSearchParams(location.search);
    if (params.get('q') && form.q) form.q.value = params.get('q');
    function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd'); }
    function checked(name) { return $$('input[name="' + name + '"]:checked', form).map(function (i) { return i.value; }); }
    function render() {
      var q = norm(form.q.value.trim());
      var year = form.year.value;
      var f = { type: checked('type'), topic: checked('topic'), role: checked('role'), lang: checked('lang'), pdf: checked('pdf') };
      var out = D.works.filter(function (w) {
        if (year !== 'all' && String(w.year) !== year) return false;
        for (var k in f) if (f[k].length && f[k].indexOf(w[k]) < 0) return false;
        if (q) {
          var hay = norm([w.title, w.venue, w.role, w.authors, (w.tags || []).join(' '), w.code, 'Phan Tuấn Anh'].join(' '));
          if (hay.indexOf(q) < 0) return false;
        }
        return true;
      });
      out.sort(function (a, b) { return sortEl.value === 'old' ? a.year - b.year || a.id - b.id : b.year - a.year || b.id - a.id; });
      listEl.innerHTML = out.map(workCard).join('');
      countEl.textContent = 'Hiển thị ' + out.length + ' / ' + D.works.length + ' công trình';
      emptyEl.hidden = out.length > 0;
      var n = 0; for (var k2 in f) n += f[k2].length; if (year !== 'all') n++; if (q) n++;
      var fc = $('#filter-count'); if (fc) fc.textContent = n ? '(' + n + ')' : '';
      if (window.lucide) lucide.createIcons();
    }
    form.addEventListener('input', render);
    form.addEventListener('change', render);
    form.addEventListener('submit', function (e) { e.preventDefault(); render(); });
    sortEl.addEventListener('change', render);
    $$('[data-reset-filters]').forEach(function (b) {
      b.addEventListener('click', function () { form.reset(); form.q.value = ''; render(); });
    });
    // Drawer bộ lọc trên mobile
    var drawer = $('#filters'), dim = $('#dim');
    function setDrawer(open) {
      if (open) { drawer.setAttribute('data-open', ''); dim.setAttribute('data-open', ''); var c = $('[data-filter-close]', drawer); if (c) c.focus(); }
      else { drawer.removeAttribute('data-open'); dim.removeAttribute('data-open'); }
      $('#btn-filter').setAttribute('aria-expanded', String(open));
    }
    $('#btn-filter').addEventListener('click', function () { setDrawer(true); });
    $$('[data-filter-close]').forEach(function (b) { b.addEventListener('click', function () { setDrawer(false); }); });
    dim.addEventListener('click', function () { setDrawer(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setDrawer(false); });
    render();
  });

  /* Kỷ yếu theo năm (trang Nghiên cứu) */
  safe('proceedings', function () {
    var el = $('#proc-by-year'); if (!el) return;
    var by = {};
    D.works.forEach(function (w) { if (w.type === 'ky-yeu') (by[w.year] = by[w.year] || []).push(w); });
    el.innerHTML = Object.keys(by).sort(function (a, b) { return b - a; }).map(function (y) {
      return '<li class="proc-row grid grid-cols-[64px_1fr] gap-3 py-3"><span class="font-bold tabular-nums text-primary">' + y + '</span><span class="text-sm leading-relaxed text-ink">' +
        by[y].map(function (w) { return esc(w.venue) + ' <span class="text-muted">(số ' + w.id + ')</span>'; }).join('<br>') + '</span></li>';
    }).join('');
  });

  /* ---------- Trang Hội thảo ---------- */
  safe('conferences', function () {
    var tl = $('#conf-timeline'); if (!tl) return;
    var bar = $('#conf-years');
    var years = D.conferences.map(function (c) { return c.year; });
    bar.innerHTML = '<button type="button" data-year="all" aria-pressed="true" class="year-btn">Tất cả</button>' + years.map(function (y) {
      return '<button type="button" data-year="' + y + '" aria-pressed="false" class="year-btn">' + y + '</button>';
    }).join('');
    tl.innerHTML = D.conferences.map(function (c) {
      var inner = c.items.length ? c.items.map(function (it) {
        if (!it.works.length) {
          // Hội thảo có trong hồ sơ nhưng chưa gắn được công trình nào trong danh mục
          return '<div class="conf-card card-hover rounded-xl border border-dashed border-line bg-white p-5"><div class="flex flex-wrap items-start justify-between gap-3"><h3 class="card-title text-base font-semibold text-ink">' + esc(it.name) + '</h3>' + badge('pending') + '</div>' +
            '<p class="mt-3 text-sm leading-relaxed text-muted">' + esc(it.note || '') + '</p></div>';
        }
        var ws = it.works.map(function (id) { var w = D.work(id); return '<li class="text-sm leading-relaxed text-ink"><span class="font-semibold">Công trình số ' + id + ':</span> ' + esc(w.title) + (w.detail ? ' <a class="font-semibold text-primary hover:underline" href="' + PAGES + w.detail + '">Xem chi tiết</a>' : '') + '</li>'; }).join('');
        return '<div class="conf-card card-hover rounded-xl border border-line bg-white p-5 shadow-soft"><div class="flex flex-wrap items-start justify-between gap-3"><h3 class="card-title text-base font-semibold text-ink">' + esc(it.name) + '</h3>' +
          '<span class="inline-flex items-center gap-1.5 rounded-md bg-gis-soft px-2.5 py-1 text-xs font-semibold text-gis-dark"><i data-lucide="book-marked" class="h-3.5 w-3.5" aria-hidden="true"></i>Có công trình đăng kỷ yếu</span></div>' +
          '<ul class="mt-3 space-y-2">' + ws + '</ul></div>';
      }).join('') : '<div class="rounded-xl border border-dashed border-line bg-white/60 p-5 text-sm text-muted">[Chưa có dữ liệu hội thảo năm ' + c.year + ']</div>';
      return '<li data-year-item="' + c.year + '" class="conf-item relative grid gap-3 pl-8 md:grid-cols-[120px_1fr] md:gap-8 md:pl-0">' +
        '<span class="conf-node absolute left-[3px] top-2 h-3.5 w-3.5 rounded-full border-2 border-heritage bg-white md:left-[113px]" aria-hidden="true"></span>' +
        '<div class="md:text-right md:pr-8"><button type="button" data-milestone="' + c.year + '" aria-pressed="false" class="conf-year text-2xl font-bold tabular-nums text-academic" aria-label="Mốc năm ' + c.year + '">' + c.year + '</button></div>' +
        '<div class="grid gap-3 md:pl-2">' + inner + '<div data-milestone-note></div></div></li>';
    }).join('');
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-year]'); if (!b) return;
      var y = b.getAttribute('data-year');
      $$('[data-year]', bar).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      $$('[data-year-item]', tl).forEach(function (li) { li.hidden = !(y === 'all' || li.getAttribute('data-year-item') === y); });
    });
    var tb = $('#paper-rows');
    if (tb) {
      tb.innerHTML = D.conferences.filter(function (c) { return c.items.length; }).map(function (c) {
        return c.items.map(function (it) {
          return it.works.map(function (id) {
            var w = D.work(id);
            return '<tr data-row-year="' + c.year + '" class="border-t border-line align-top"><td class="px-4 py-3 font-semibold tabular-nums text-primary">' + c.year + '</td><td class="px-4 py-3">' + esc(it.name) + '</td><td class="px-4 py-3 min-w-[320px]">' + esc(w.title) + '</td><td class="px-4 py-3 whitespace-nowrap">' + esc(w.role) + '</td><td class="px-4 py-3">' + badge(w.status) + '</td></tr>';
          }).join('');
        }).join('');
      }).join('');
    }
    // Bấm mốc năm: làm nổi mốc đó, đánh dấu các dòng cùng năm trong bảng "Bài tham luận"; bấm lại để bỏ chọn
    tl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-milestone]'); if (!b) return;
      var y = b.getAttribute('data-milestone');
      var on = b.getAttribute('aria-pressed') !== 'true';
      $$('[data-milestone]', tl).forEach(function (x) {
        var li = x.closest('.conf-item'), sel = on && x === b;
        x.setAttribute('aria-pressed', String(sel));
        li.classList.toggle('is-active', sel);
        $('[data-milestone-note]', li).innerHTML = '';
      });
      var rows = tb ? $$('[data-row-year]', tb) : [];
      var n = 0;
      rows.forEach(function (r) { var hit = on && r.getAttribute('data-row-year') === y; r.classList.toggle('is-linked', hit); if (hit) n++; });
      if (!on) return;
      var note = $('[data-milestone-note]', b.closest('.conf-item'));
      note.innerHTML = n
        ? '<a href="#tham-luan" class="conf-note inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-primary hover:underline"><i data-lucide="table-2" class="h-4 w-4" aria-hidden="true"></i>Đã đánh dấu ' + n + ' bài tham luận năm ' + y + ' trong bảng bên dưới<i data-lucide="arrow-down" class="h-4 w-4" aria-hidden="true"></i></a>'
        : '<p class="conf-note text-sm text-muted">Năm ' + y + ' chưa có bài tham luận trong bảng.</p>';
      if (window.lucide) lucide.createIcons();
    });
  });

  /* ---------- Trang Giải thưởng ---------- */
  safe('awards', function () {
    $$('[data-award-tab]').forEach(function (box) {
      var tab = box.getAttribute('data-award-tab');
      if (tab === 'shtt') {
        box.innerHTML = D.ip.map(function (x) {
          return '<article class="card-hover flex h-full flex-col rounded-xl border border-line bg-white p-5 shadow-soft sm:p-6"><div class="flex flex-wrap items-center justify-between gap-2"><span class="inline-flex items-center gap-2 text-sm font-semibold text-heritage-dark"><i data-lucide="shield-check" class="h-4 w-4" aria-hidden="true"></i>' + x.year + '</span>' + badge(x.status) + '</div>' +
            '<h3 class="card-title mt-3 text-lg font-semibold leading-snug text-ink">' + esc(x.title) + '</h3><dl class="mt-4 grid gap-3 text-sm">' +
            '<div class="grid gap-0.5 sm:grid-cols-[112px_1fr] sm:gap-3"><dt class="text-muted">Chứng nhận</dt><dd class="font-semibold text-ink">' + esc(x.detail) + '</dd></div>' +
            '<div class="grid gap-0.5 sm:grid-cols-[112px_1fr] sm:gap-3"><dt class="text-muted">Chủ sở hữu</dt><dd class="text-ink">[Chủ sở hữu quyền – chờ bổ sung]</dd></div>' +
            '<div class="grid gap-0.5 sm:grid-cols-[112px_1fr] sm:gap-3"><dt class="text-muted">Link nguồn</dt><dd class="text-ink">[Link nguồn – chờ bổ sung]</dd></div></dl></article>';
        }).join('');
        return;
      }
      var list = D.awards.filter(function (a) { return a.tab === tab; }).sort(function (a, b) { return b.year - a.year; });
      box.innerHTML = list.length ? list.map(function (a) { return awardCard(a); }).join('') : emptyNote('Chưa có giải thưởng trong nhóm này.');
    });
  });

  /* ---------- Hồ sơ chuyên gia ---------- */
  safe('profile', function () {
    var pw = $('#profile-works');
    if (pw) pw.innerHTML = [10, 9, 7].map(function (id) { return workCard(D.work(id)); }).join('');
    var pa = $('#profile-awards');
    if (pa) pa.innerHTML = ['06', '04'].map(function (c) { return awardCard(D.awards.filter(function (x) { return x.code === c; })[0]); }).join('');
  });

  /* ---------- Bản đồ WebGIS (Leaflet) ---------- */
  safe('map', function () {
    var mapEl = $('#map'); if (!mapEl) return;
    var layersBox = $('#layer-list'), info = $('#info-body'), infoPanel = $('#info-panel'), layersPanel = $('#layers-panel'), dim = $('#dim');
    var active = {};
    var pre = null; try { pre = sessionStorage.getItem('dsvn-layer'); sessionStorage.removeItem('dsvn-layer'); } catch (e) {}
    D.layers.forEach(function (l) { active[l.key] = pre ? l.key === pre : true; });
    layersBox.innerHTML = D.layers.map(function (l) {
      var n = D.sites.filter(function (s) { return s.layers.indexOf(l.key) >= 0; }).length;
      return '<li><label class="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-surface">' +
        '<input type="checkbox" value="' + l.key + '"' + (active[l.key] ? ' checked' : '') + ' class="h-4 w-4 accent-[#0F766E]">' +
        '<span class="grid h-8 w-8 shrink-0 place-items-center rounded-md text-white" style="background:' + l.color + '" aria-hidden="true"><i data-lucide="' + l.icon + '" class="h-4 w-4"></i></span>' +
        '<span class="flex-1 text-sm font-medium text-ink">' + esc(l.name) + '</span>' +
        '<span class="shrink-0 text-xs tabular-nums text-muted" title="' + (n ? '' : 'Lớp chưa có dữ liệu trong bản demo') + '">' + n + ' điểm</span></label></li>';
    }).join('');

    function openSheet(el) { if (!isMobile()) return; el.setAttribute('data-open', ''); dim.setAttribute('data-open', ''); }
    function closeSheets() { [infoPanel, layersPanel].forEach(function (x) { x.removeAttribute('data-open'); }); dim.removeAttribute('data-open'); }
    $('#btn-layers').addEventListener('click', function () { openSheet(layersPanel); });
    $$('[data-sheet-close]').forEach(function (b) { b.addEventListener('click', closeSheets); });
    dim.addEventListener('click', closeSheets);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSheets(); });

    function showSite(s) {
      var linksW = s.works.map(function (id) { var w = D.work(id); return w.detail ? '<a href="' + w.detail + '" class="font-semibold text-primary hover:underline">Công trình số ' + id + '</a>' : '<a href="nghien-cuu.html" class="font-semibold text-primary hover:underline">Công trình số ' + id + '</a>'; }).join(', ');
      info.innerHTML = '<h2 class="text-xl font-bold leading-snug text-academic">' + esc(s.name) + '</h2>' +
        '<dl class="mt-4 grid gap-3 text-sm">' +
        [['Tên hiện hành', esc(s.name)], ['Địa danh tại thời điểm nghiên cứu', esc(s.histName)], ['Địa danh hành chính hiện hành', esc(s.adminNow)], ['Cấp xếp hạng', esc(s.rank)], ['Nguồn dữ liệu', esc(s.source)], ['Ngày cập nhật', esc(s.updated)]].map(function (r) {
          return '<div><dt class="text-muted">' + r[0] + '</dt><dd class="mt-0.5 font-medium text-ink break-anywhere">' + r[1] + '</dd></div>';
        }).join('') + '</dl>' +
        '<div class="mt-5 grid gap-2">' +
        '<p class="text-sm"><span class="text-muted">Bài nghiên cứu:</span> ' + (linksW || '<span class="text-muted">[Chưa liên kết]</span>') + '</p>' +
        '<a href="#mo-hinh-3d" class="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-line px-3 text-sm font-semibold text-gis-dark hover:border-gis-dark"><i data-lucide="box" class="h-4 w-4" aria-hidden="true"></i>Mô hình 3D <span class="ml-auto text-xs font-normal text-muted">đang xây dựng</span></a>' +
        '<a href="#vr360" class="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-line px-3 text-sm font-semibold text-gis-dark hover:border-gis-dark"><i data-lucide="rotate-3d" class="h-4 w-4" aria-hidden="true"></i>VR360 <span class="ml-auto text-xs font-normal text-muted">đang xây dựng</span></a></div>';
      if (window.lucide) lucide.createIcons();
      openSheet(infoPanel);
    }

    if (!window.L) {
      mapEl.innerHTML = '<div class="grid h-full place-items-center p-6 text-center text-sm text-muted">Không tải được thư viện bản đồ (cần kết nối Internet). Danh sách điểm vẫn có ở bảng “Hồ sơ di tích” bên dưới.</div>';
      return;
    }
    var map = L.map(mapEl, { scrollWheelZoom: false, zoomControl: true }).setView([16.92, 107.13], 10);
    map.attributionControl.setPrefix(false);
    // Nền CARTO Voyager (dữ liệu OpenStreetMap) — mở được cả bằng file:// (máy chủ tile.openstreetmap.org chặn yêu cầu không có Referer).
    // Lỗi tải nền liên tiếp → chuyển sang nền Esri.
    var base = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd', maxZoom: 19, attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
    }).addTo(map);
    var tileErrors = 0, switched = false;
    base.on('tileerror', function () {
      if (switched || ++tileErrors < 3) return;
      switched = true; map.removeLayer(base);
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18, attribution: 'Tiles &copy; Esri, nguồn: OpenStreetMap contributors và các bên khác'
      }).addTo(map);
    });
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var PIN = '<span class="pin"><svg viewBox="0 0 32 42" aria-hidden="true"><path class="pin-body" d="M16 1.5C8.3 1.5 2 7.6 2 15.2 2 25.6 16 40.5 16 40.5S30 25.6 30 15.2C30 7.6 23.7 1.5 16 1.5z"/><circle class="pin-dot" cx="16" cy="15" r="5.5"/></svg></span>';
    var markers = D.sites.map(function (s) {
      var m = L.marker([s.lat, s.lng], {
        title: s.name, alt: s.name, keyboard: true, riseOnHover: true,
        icon: L.divIcon({ className: 'map-marker', html: PIN, iconSize: [32, 42], iconAnchor: [16, 41], tooltipAnchor: [0, -40] })
      });
      m.bindTooltip(s.name, { direction: 'top', className: 'map-tip', opacity: 1 });
      m.on('click', function () {
        markers.forEach(function (x) { var el = x.m.getElement(); if (el) el.classList.remove('is-active'); x.m.setZIndexOffset(0); });
        var el = m.getElement(); if (el) el.classList.add('is-active');
        m.setZIndexOffset(1000);
        var z = Math.max(map.getZoom(), 12);
        if (reduce) map.setView(m.getLatLng(), z); else map.flyTo(m.getLatLng(), z, { duration: 0.6 });
        showSite(s);
      });
      return { m: m, s: s };
    });
    function refresh() {
      markers.forEach(function (x) {
        var on = x.s.layers.some(function (k) { return active[k]; });
        if (on) x.m.addTo(map); else map.removeLayer(x.m);
      });
      var visible = markers.filter(function (x) { return map.hasLayer(x.m); }).length;
      var c = $('#visible-count'); if (c) c.textContent = visible + ' / ' + D.sites.length + ' điểm đang hiển thị';
    }
    layersBox.addEventListener('change', function (e) {
      if (e.target.type !== 'checkbox') return;
      active[e.target.value] = e.target.checked; refresh();
    });
    $$('[data-layers-all]').forEach(function (b) {
      b.addEventListener('click', function () {
        var on = b.getAttribute('data-layers-all') === 'on';
        $$('input[type="checkbox"]', layersBox).forEach(function (i) { i.checked = on; active[i.value] = on; });
        refresh();
      });
    });
    refresh();
    // Nút zoom của Leaflet dùng href="#": đổi thành nút thật để không có link giả
    $$('.leaflet-control-zoom a', mapEl).forEach(function (a) {
      a.removeAttribute('href'); a.setAttribute('role', 'button'); a.setAttribute('tabindex', '0');
      a.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); a.click(); } });
    });
    setTimeout(function () { map.invalidateSize(); }, 300);
    window.addEventListener('resize', function () { map.invalidateSize(); });
  });

  /* Tầm nhìn (trang Giới thiệu): bấm một hướng để xem nội dung chi tiết bên dưới */
  safe('vision', function () {
    var btns = $$('[data-vision]'); if (!btns.length) return;
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-vision');
        btns.forEach(function (x) { var on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', String(on)); });
        $$('[data-vision-panel]').forEach(function (p) { p.hidden = p.getAttribute('data-vision-panel') !== k; });
        if (isMobile()) { var d = $('#vision-detail'); if (d) d.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
      });
    });
  });

  /* Danh mục di sản UNESCO tại Việt Nam (trang Di sản văn hóa) */
  safe('heritage-catalog', function () {
    $$('[data-heritage]').forEach(function (box) {
      var grp = box.getAttribute('data-heritage');
      var list = (D.heritage || {})[grp] || [];
      box.innerHTML = list.map(function (h, i) {
        var urgent = h.kind === 'Cần bảo vệ khẩn cấp';
        var thumb = h.img
          ? '<span class="zoom-media relative block h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-primary-soft"><img src="' + BASE + h.img + '" alt="' + esc(h.name) + (h.illus ? ' (ảnh minh họa)' : '') + '" loading="lazy" class="h-full w-full object-cover"></span>'
          : '<span class="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary"><i data-lucide="' + h.icon + '" class="h-5 w-5" aria-hidden="true"></i></span>';
        return '<li><a href="' + PAGES + 'di-san-chi-tiet.html?nhom=' + grp + '&amp;muc=' + (i + 1) + '" class="heritage-item card-hover zoom-media flex h-full gap-3.5 rounded-xl border border-line bg-white p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40" aria-label="Xem trang chi tiết: ' + esc(h.name) + '">' + thumb +
          '<div class="min-w-0"><p class="flex flex-wrap items-center gap-2 text-[13px]"><span class="font-bold tabular-nums text-heritage-dark">' + h.year + '</span>' +
          (h.kind ? '<span class="rounded px-1.5 py-0.5 font-semibold ' + (urgent ? 'bg-heritage-soft text-heritage-dark' : 'bg-surface text-muted') + '">' + esc(h.kind) + '</span>' : '') + '</p>' +
          '<h4 class="card-title mt-1 font-semibold leading-snug text-ink">' + esc(h.name) + '</h4>' +
          '<p class="mt-1 flex gap-1.5 text-sm text-muted"><i data-lucide="map-pin" class="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true"></i>' + esc(h.place) + '</p>' +
          (h.note ? '<p class="mt-1 text-[13px] text-muted">' + esc(h.note) + '</p>' : '') +
          (h.illus ? '<p class="mt-1 text-xs italic text-muted">Ảnh minh họa</p>' : '') +
          '<span class="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-primary">Xem chi tiết<i data-lucide="arrow-right" class="h-3.5 w-3.5" aria-hidden="true"></i></span></div></a></li>';
      }).join('');
      var c = $('[data-heritage-count="' + grp + '"]');
      if (c) c.textContent = list.length;
    });

  });

  /* Trang chi tiết một mục di sản UNESCO (pages/di-san-chi-tiet.html?nhom=<nhóm>&muc=<số thứ tự>) */
  safe('heritage-detail', function () {
    var root = $('[data-heritage-detail]'); if (!root || !D.heritage) return;
    var GROUP = {
      'the-gioi': ['Di sản thế giới', 'https://whc.unesco.org/en/statesparties/vn', 'whc.unesco.org'],
      'phi-vat-the': ['Di sản văn hóa phi vật thể', 'https://ich.unesco.org/en/state/viet-nam-VN', 'ich.unesco.org'],
      'tu-lieu': ['Di sản tư liệu (Chương trình Ký ức Thế giới)', 'https://www.unesco.org/en/memory-world', 'unesco.org – Memory of the World'],
      'sinh-quyen': ['Khu dự trữ sinh quyển thế giới', 'https://www.unesco.org/en/mab', 'unesco.org – Man and the Biosphere'],
      'dia-chat': ['Công viên địa chất toàn cầu UNESCO', 'https://www.unesco.org/en/iggp/geoparks', 'unesco.org – Global Geoparks']
    };
    var q = {};
    location.search.replace(/^\?/, '').split('&').forEach(function (p) { var kv = p.split('='); if (kv[0]) q[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || ''); });
    var g = GROUP[q.nhom] && D.heritage[q.nhom] ? q.nhom : 'the-gioi';
    var list = D.heritage[g], n = list.length;
    var i = parseInt(q.muc, 10) - 1; if (!(i >= 0 && i < n)) i = 0;
    var h = list[i], G = GROUP[g];
    function url(k) { return 'di-san-chi-tiet.html?nhom=' + g + '&amp;muc=' + (k + 1); }
    function set(key, html) { $$('[data-hd="' + key + '"]').forEach(function (el) { el.innerHTML = html; }); }

    document.title = h.name + ' — disanvietnam';
    var md = $('meta[name="description"]'); if (md) md.setAttribute('content', h.name + ' (' + h.place + ', ' + h.year + '): ' + (h.desc || ''));

    set('crumb', esc(h.name));
    set('group-link', '<a href="di-san.html#danh-muc-unesco" class="hover:text-primary hover:underline">' + esc(G[0]) + '</a>');
    set('eyebrow', esc(G[0]) + ' · Ghi danh ' + h.year);
    set('title', esc(h.name));
    set('place', esc(h.place));
    set('kind', h.kind ? '<span class="rounded-md px-2.5 py-1 text-xs font-semibold ' + (h.kind === 'Cần bảo vệ khẩn cấp' ? 'bg-heritage-soft text-heritage-dark' : 'bg-white text-academic ring-1 ring-line') + '">' + esc(h.kind) + '</span>' : '');

    var big = h.img ? BASE + h.img.replace('.jpg', '-lg.jpg') : '';
    set('media', h.img
      ? '<img src="' + big + '" alt="' + esc(h.name) + (h.illus ? ' (ảnh minh họa)' : '') + '" data-lightbox="hd" data-caption="' + esc(h.name) + ' · ' + esc(h.credit || '') + '" class="h-full w-full cursor-zoom-in object-cover" onerror="this.onerror=null;this.src=\'' + BASE + h.img + '\'">'
      : '<div class="grid h-full place-items-center text-primary"><i data-lucide="' + (h.icon || 'landmark') + '" class="h-16 w-16" aria-hidden="true"></i></div>');
    set('credit', (h.illus ? 'Ảnh minh họa · ' : '') + esc(h.credit || 'Chưa có ảnh có quyền sử dụng') +
      (h.src ? ' · <a href="' + h.src + '" target="_blank" rel="noopener" class="underline hover:text-primary">Nguồn ảnh</a>' : ''));
    set('desc', esc(h.desc || '[Mô tả đang được biên soạn]'));

    var rows = [['Nhóm di sản', G[0]], ['Năm ghi danh', h.year]];
    if (h.kind) rows.push(['Loại', h.kind]);
    rows.push(['Địa danh khi công nhận', h.place]);
    rows.push(['Địa danh hành chính hiện hành', '[Chờ cập nhật]']);
    if (h.note) rows.push(['Ghi chú', h.note]);
    set('facts', rows.map(function (r) {
      return '<div class="border-t border-line py-3.5 sm:grid sm:grid-cols-[42%_1fr] sm:gap-4"><dt class="text-muted">' + r[0] + '</dt><dd class="mt-0.5 font-medium text-ink sm:mt-0">' + esc(r[1]) + '</dd></div>';
    }).join(''));
    set('source', '<a href="' + G[1] + '" target="_blank" rel="noopener" class="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Đối chiếu tại ' + esc(G[2]) + '<i data-lucide="external-link" class="h-4 w-4" aria-hidden="true"></i></a>');
    set('cite', 'UNESCO. (' + h.year + '). ' + esc(h.name) + ' [' + esc(G[0]) + ']. Truy cập tại ' + G[1]);
    set('position', (i + 1) + ' / ' + n);

    function navCard(k, dir) {
      var x = list[k];
      return '<a href="' + url(k) + '" class="card-hover group flex min-h-[96px] items-center gap-4 rounded-xl border border-line bg-white p-4 ' + (dir > 0 ? 'sm:flex-row-reverse sm:text-right' : '') + '">' +
        '<span class="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-primary transition duration-200 group-hover:border-primary"><i data-lucide="' + (dir > 0 ? 'arrow-right' : 'arrow-left') + '" class="h-5 w-5" aria-hidden="true"></i></span>' +
        '<span class="min-w-0"><span class="block text-[13px] text-muted">' + (dir > 0 ? 'Mục sau' : 'Mục trước') + ' · ' + x.year + '</span><span class="card-title mt-0.5 block font-semibold leading-snug text-ink">' + esc(x.name) + '</span></span></a>';
    }
    set('pager', n > 1 ? navCard((i - 1 + n) % n, -1) + navCard((i + 1) % n, 1) : '');

    set('related', list.map(function (x, k) {
      if (k === i) return '';
      var thumb = x.img
        ? '<span class="zoom-media block aspect-[4/3] overflow-hidden bg-primary-soft"><img src="' + BASE + x.img + '" alt="' + esc(x.name) + '" loading="lazy" class="h-full w-full object-cover"></span>'
        : '<span class="grid aspect-[4/3] place-items-center bg-primary-soft text-primary"><i data-lucide="' + (x.icon || 'landmark') + '" class="h-10 w-10" aria-hidden="true"></i></span>';
      return '<li><a href="' + url(k) + '" class="card-hover zoom-media block h-full overflow-hidden rounded-xl border border-line bg-white">' + thumb +
        '<span class="block p-4"><span class="block text-[13px] font-bold tabular-nums text-heritage-dark">' + x.year + '</span>' +
        '<span class="card-title mt-1 block font-semibold leading-snug text-ink">' + esc(x.name) + '</span>' +
        '<span class="mt-1 block text-sm text-muted">' + esc(x.place) + '</span></span></a></li>';
    }).join(''));
    set('related-title', 'Cùng nhóm: ' + esc(G[0]));
    if (window.lucide) lucide.createIcons();
  });

  /* (Hộp thoại chi tiết cũ đã thay bằng trang chi tiết — giữ khối rỗng để không ảnh hưởng phần còn lại) */
  safe('heritage-dialog-removed', function () {
    if (true) return;
    var GROUP = {
      'the-gioi': ['Di sản thế giới', 'https://whc.unesco.org/en/statesparties/vn', 'whc.unesco.org'],
      'phi-vat-the': ['Di sản văn hóa phi vật thể', 'https://ich.unesco.org/en/state/viet-nam-VN', 'ich.unesco.org'],
      'tu-lieu': ['Di sản tư liệu (Chương trình Ký ức Thế giới)', 'https://www.unesco.org/en/memory-world', 'unesco.org – Memory of the World'],
      'sinh-quyen': ['Khu dự trữ sinh quyển thế giới', 'https://www.unesco.org/en/mab', 'unesco.org – Man and the Biosphere'],
      'dia-chat': ['Công viên địa chất toàn cầu UNESCO', 'https://www.unesco.org/en/iggp/geoparks', 'unesco.org – Global Geoparks']
    };
    var dlg = document.createElement('dialog');
    dlg.className = 'heritage-dialog';
    dlg.setAttribute('data-ui-modal', '');
    dlg.setAttribute('aria-labelledby', 'hd-title');
    body.appendChild(dlg);
    var cur = { g: null, i: 0, opener: null };
    function render() {
      var list = D.heritage[cur.g], h = list[cur.i], G = GROUP[cur.g];
      var big = h.img ? BASE + h.img.replace('.jpg', '-lg.jpg') : '';
      var rows = [['Nhóm di sản', G[0]], ['Năm ghi danh', h.year], ['Địa danh khi công nhận', h.place]];
      if (h.kind) rows.splice(2, 0, ['Loại', h.kind]);
      if (h.note) rows.push(['Ghi chú', h.note]);
      dlg.innerHTML =
        '<div class="hd-media relative overflow-hidden bg-primary-soft">' +
          (h.img ? '<img src="' + big + '" alt="' + esc(h.name) + (h.illus ? ' (ảnh minh họa)' : '') + '" class="h-full w-full object-cover" onerror="this.onerror=null;this.src=\'' + BASE + h.img + '\'">' : '') +
          '<span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-academic/80 to-transparent px-5 pb-2 pt-10 text-xs text-white/90">' + (h.illus ? 'Ảnh minh họa · ' : '') + esc(h.credit || '') + '</span>' +
          '<button type="button" data-hd-close class="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-academic transition duration-200 hover:bg-white" aria-label="Đóng"><i data-lucide="x" class="h-5 w-5" aria-hidden="true"></i></button>' +
        '</div>' +
        '<div class="max-h-[46vh] overflow-y-auto p-5 sm:p-7">' +
          '<p class="text-[13px] font-semibold text-heritage-dark">' + esc(G[0]) + ' · ' + h.year + '</p>' +
          '<h3 id="hd-title" class="mt-1 text-2xl font-bold leading-snug text-academic">' + esc(h.name) + '</h3>' +
          '<p class="mt-3 text-[15px] leading-relaxed text-ink">' + esc(h.desc || '') + '</p>' +
          '<dl class="mt-5 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">' + rows.map(function (r) {
            return '<div><dt class="text-muted">' + r[0] + '</dt><dd class="mt-0.5 font-medium text-ink">' + esc(r[1]) + '</dd></div>';
          }).join('') + '</dl>' +
          '<div class="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">' +
            '<a href="' + G[1] + '" target="_blank" rel="noopener" class="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Đối chiếu tại ' + G[2] + '<i data-lucide="external-link" class="h-4 w-4" aria-hidden="true"></i></a>' +
            '<div class="flex items-center gap-2"><span class="text-[13px] tabular-nums text-muted">' + (cur.i + 1) + ' / ' + list.length + '</span>' +
            '<button type="button" data-hd-step="-1" class="grid h-11 w-11 place-items-center rounded-lg border border-line text-ink transition duration-200 hover:border-primary hover:text-primary" aria-label="Mục trước"><i data-lucide="chevron-left" class="h-5 w-5" aria-hidden="true"></i></button>' +
            '<button type="button" data-hd-step="1" class="grid h-11 w-11 place-items-center rounded-lg border border-line text-ink transition duration-200 hover:border-primary hover:text-primary" aria-label="Mục sau"><i data-lucide="chevron-right" class="h-5 w-5" aria-hidden="true"></i></button></div>' +
          '</div>' +
          '<p class="mt-3 text-xs text-muted">Thông tin tổng hợp từ nguồn công khai, cần đối chiếu nguồn chính thức trước khi trích dẫn.</p>' +
        '</div>';
      if (window.lucide) lucide.createIcons();
    }
    function close() { if (window.UI && UI.closeModal) UI.closeModal(dlg); else dlg.close(); }
    function open(li) {
      cur.g = li.getAttribute('data-hgrp'); cur.i = +li.getAttribute('data-hidx'); cur.opener = li;
      render();
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
      var x = $('[data-hd-close]', dlg); if (x) x.focus();
    }
    document.addEventListener('click', function (e) { var li = e.target.closest('.heritage-item'); if (li) open(li); });
    document.addEventListener('keydown', function (e) {
      var li = e.target.closest && e.target.closest('.heritage-item');
      if (li && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); open(li); }
      if (dlg.open && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) { step(e.key === 'ArrowRight' ? 1 : -1); }
    });
    function step(d) { var n = D.heritage[cur.g].length; cur.i = (cur.i + d + n) % n; render(); var b = $('[data-hd-step="' + d + '"]', dlg); if (b) b.focus(); }
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg || e.target.closest('[data-hd-close]')) { close(); return; }
      var s = e.target.closest('[data-hd-step]'); if (s) step(+s.getAttribute('data-hd-step'));
    });
    dlg.addEventListener('cancel', function (e) { e.preventDefault(); close(); });
    dlg.addEventListener('close', function () { if (cur.opener) cur.opener.focus(); });
  });

  /* Nút nổi: Zalo, gọi điện (góc trái) và trợ lý ảo (góc phải) — bản demo, chưa kết nối dịch vụ thật */
  safe('float-buttons', function () {
    var wrap = document.createElement('div');
    wrap.innerHTML =
      '<div class="fab-stack fab-left">' +
        '<a href="#" data-fab="zalo" class="fab fab-zalo" aria-label="Chat Zalo (bản demo)"><span class="fab-zalo-text">Zalo</span><span class="fab-tip">Chat Zalo</span></a>' +
        '<a href="tel:0913421800" class="fab fab-call" aria-label="Gọi 0913 421 800"><i data-lucide="phone" class="h-5 w-5" aria-hidden="true"></i><span class="fab-tip">0913 421 800</span></a>' +
      '</div>' +
      '<div class="fab-stack fab-right">' +
        '<section id="bot-panel" class="bot-panel" role="dialog" aria-label="Trợ lý di sản (bản demo)" hidden>' +
          '<header class="flex items-center gap-3 bg-academic px-4 py-3 text-white"><span class="grid h-9 w-9 place-items-center rounded-full bg-white/15"><i data-lucide="bot" class="h-5 w-5" aria-hidden="true"></i></span>' +
          '<div class="min-w-0 flex-1"><p class="text-sm font-semibold">Trợ lý Di sản Việt Nam</p><p class="text-xs text-white/75">Bản demo · chưa kết nối máy chủ</p></div>' +
          '<button type="button" data-bot-close class="grid h-9 w-9 place-items-center rounded-lg hover:bg-white/15" aria-label="Đóng trợ lý"><i data-lucide="x" class="h-5 w-5" aria-hidden="true"></i></button></header>' +
          '<div data-bot-log class="bot-log" aria-live="polite"></div>' +
          '<div data-bot-quick class="bot-quick flex gap-2 overflow-x-auto border-t border-line px-3 pb-1 pt-3"></div>' +
          '<form data-bot-form class="flex gap-2 p-3"><label class="sr-only" for="bot-q">Câu hỏi</label><input id="bot-q" autocomplete="off" placeholder="Nhập câu hỏi…" class="h-11 min-w-0 flex-1 rounded-lg border border-line px-3 text-[15px] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">' +
          '<button type="submit" class="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-white hover:bg-primary-dark" aria-label="Gửi"><i data-lucide="send" class="h-4 w-4" aria-hidden="true"></i></button></form>' +
        '</section>' +
        '<button type="button" data-bot-toggle class="fab fab-bot" aria-controls="bot-panel" aria-expanded="false" aria-label="Mở trợ lý di sản"><i data-lucide="bot" class="h-6 w-6" aria-hidden="true"></i><span class="fab-dot" aria-hidden="true"></span><span class="fab-tip">Trợ lý di sản</span></button>' +
      '</div>';
    while (wrap.firstChild) body.appendChild(wrap.firstChild);

    $('[data-fab="zalo"]').addEventListener('click', function (e) {
      e.preventDefault();
      if (window.UI) UI.toast('Bản demo: nút này sẽ mở chat Zalo với số 0913 421 800.', 'info');
    });

    var panel = $('#bot-panel'), toggle = $('[data-bot-toggle]'), log = $('[data-bot-log]'), form = $('[data-bot-form]'), input = $('#bot-q');
    var ANSWERS = [
      { q: 'Tìm công trình nghiên cứu', k: ['cong trinh', 'nghien cuu', 'bai bao', 'ky yeu'], a: 'Thư viện có 14 công trình (2015–2026), lọc theo năm, loại công bố và chủ đề.', link: [PAGES + 'nghien-cuu.html', 'Mở thư viện nghiên cứu'] },
      { q: 'Xem bản đồ di tích', k: ['ban do', 'gis', 'di tich', 'vi tri'], a: 'Bản đồ WebGIS có 7 lớp chuyên đề và hồ sơ từng điểm di tích Quảng Trị.', link: [PAGES + 'ban-do.html', 'Mở bản đồ WebGIS'] },
      { q: 'Di sản UNESCO tại Việt Nam', k: ['unesco', 'the gioi', 'phi vat the'], a: 'Danh mục gồm di sản thế giới, phi vật thể, tư liệu, khu dự trữ sinh quyển và công viên địa chất.', link: [PAGES + 'di-san.html#danh-muc-unesco', 'Xem danh mục'] },
      { q: 'Liên hệ hợp tác', k: ['lien he', 'hop tac', 'email', 'dien thoai'], a: 'Liên hệ GIS GROUP: 0913 421 800 · gis.pta@gmail.com.', link: [PAGES + 'lien-he.html#lien-he-form', 'Gửi đề nghị'] }
    ];
    function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd'); }
    function say(text, who, link) {
      var p = document.createElement('div');
      p.className = 'bot-msg ' + (who === 'me' ? 'bot-me' : 'bot-ai');
      p.innerHTML = esc(text) + (link ? '<a href="' + link[0] + '" class="mt-1.5 flex items-center gap-1 font-semibold text-primary hover:underline">' + esc(link[1]) + ' →</a>' : '');
      log.appendChild(p); log.scrollTop = log.scrollHeight;
    }
    function reply(q) {
      say(q, 'me');
      var n = norm(q), hit = ANSWERS.filter(function (x) { return x.q === q || x.k.some(function (k) { return n.indexOf(k) >= 0; }); })[0];
      setTimeout(function () {
        if (hit) say(hit.a, 'ai', hit.link);
        else say('Bản demo chỉ trả lời các câu gợi ý. Bạn có thể gửi câu hỏi qua trang Liên hệ.', 'ai', [PAGES + 'lien-he.html#lien-he-form', 'Mở trang Liên hệ']);
      }, 450);
    }
    $('[data-bot-quick]').innerHTML = ANSWERS.map(function (x) { return '<button type="button" class="bot-chip">' + esc(x.q) + '</button>'; }).join('');
    $('[data-bot-quick]').addEventListener('click', function (e) { var b = e.target.closest('.bot-chip'); if (b) reply(b.textContent); });
    form.addEventListener('submit', function (e) { e.preventDefault(); var q = input.value.trim(); if (!q) return; input.value = ''; reply(q); });
    function setOpen(open) {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.classList.toggle('is-open', open);
      if (open) {
        if (!log.childElementCount) say('Xin chào! Tôi là trợ lý của cổng tri thức Di sản Việt Nam. Bạn muốn tìm gì?', 'ai');
        input.focus();
      }
    }
    toggle.addEventListener('click', function () { setOpen(panel.hidden); });
    $('[data-bot-close]').addEventListener('click', function () { setOpen(false); toggle.focus(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { setOpen(false); toggle.focus(); } });
  });

  /* Icon Facebook ở thanh trên cùng: bản demo */
  safe('social', function () {
    $$('[data-social]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); if (window.UI) UI.toast('Bản demo: liên kết fanpage Facebook sẽ được bổ sung.', 'info'); });
    });
  });

  /* Bảng hồ sơ di tích */
  safe('sites-table', function () {
    var tb = $('#site-rows'); if (!tb) return;
    tb.innerHTML = D.sites.map(function (s) {
      return '<tr class="border-t border-line align-top"><th scope="row" class="px-4 py-3 text-left font-semibold text-ink">' + esc(s.name) + '</th><td class="px-4 py-3 min-w-[220px]">' + esc(s.histName) + '</td><td class="px-4 py-3 min-w-[200px] text-muted">' + esc(s.adminNow) + '</td><td class="px-4 py-3 min-w-[180px]">' + esc(s.rank) + '</td><td class="px-4 py-3 min-w-[160px]">' + esc(s.source) + '</td><td class="px-4 py-3 whitespace-nowrap text-muted">' + esc(s.updated) + '</td></tr>';
    }).join('');
  });

  /* ---------- Chiều cao header dính → khoảng chừa khi nhảy tới #mục (site.css dùng --header-h) ---------- */
  function syncHeaderH() {
    var hd = document.querySelector('.site-header'); if (!hd) return;
    document.documentElement.style.setProperty('--header-h', Math.round(hd.getBoundingClientRect().height) + 'px');
  }
  syncHeaderH();
  window.addEventListener('resize', syncHeaderH);

  /* ---------- Mở đúng tab / mục hỏi đáp theo #hash ---------- */
  function openHash(e) {
    var id = location.hash.slice(1); if (!id) return;
    var el = document.getElementById(id); if (!el) return;
    if (!e) { syncHeaderH(); el.scrollIntoView({ block: 'start', behavior: 'auto' }); } // lúc tải xong: căn lại vì ảnh / font phía trên làm lệch vị trí
    if (el.hasAttribute('data-tab-panel')) {
      var group = el.closest('[data-tabs]');
      var btn = group && group.querySelector('[data-tab="' + el.getAttribute('data-tab-panel') + '"]');
      if (btn) { btn.click(); setTimeout(function () { group.scrollIntoView({ block: 'start' }); }, 60); }
    } else if (el.hasAttribute('data-acc-item') && !el.classList.contains('is-open')) {
      var t = el.querySelector('[data-acc-trigger]'); if (t) t.click();
    }
  }
  window.addEventListener('load', function () { setTimeout(openHash, 80); });
  window.addEventListener('hashchange', openHash);

  if (window.lucide) lucide.createIcons();
})();
