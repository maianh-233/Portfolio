/* MANGA CHRONICLE - logic riêng: dòng thời gian, kho lưu trữ (lọc + tìm), template hồ sơ.
 * Dữ liệu lấy từ assets/js/data.js (window.MC_RECORDS). Mỗi khối tự cô lập lỗi.
 */
(function () {
  'use strict';

  var ARROW = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var JP_FONT = "[font-family:'Yu_Mincho','Hiragino_Mincho_ProN','Noto_Serif_JP',serif]";
  var TILE = {
    'lich-su': 'bg-ink text-paper',
    'tac-gia': 'bg-ink-soft text-paper',
    'tac-pham': 'bg-vermilion text-paper',
    'nghe-thuat': 'bg-paper-deep text-ink',
    'dia-diem': 'bg-archive-deep text-paper'
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function norm(s) {
    return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'd').toLowerCase();
  }
  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : '';
  }
  function catLabel(c) { return (window.MC_CATEGORIES || {})[c] || c; }

  function cover(r, ratio) {
    if (r.img) {
      return '<div class="relative ' + ratio + ' overflow-hidden bg-paper-deep">' +
        '<img src="' + esc(r.img) + '" alt="' + esc(r.imgAlt) + '" loading="lazy" class="h-full w-full object-cover transition-transform duration-[1200ms] ease-expo group-hover:scale-[1.04]"></div>';
    }
    return '<div class="relative grid ' + ratio + ' place-items-center overflow-hidden ' + (TILE[r.cat] || TILE['lich-su']) + '">' +
      '<span aria-hidden="true" class="select-none px-6 text-center leading-tight opacity-90 transition-transform duration-[1200ms] ease-expo group-hover:scale-[1.04] ' + (String(r.jp).length > 6 ? 'text-3xl sm:text-4xl' : 'text-5xl sm:text-6xl') + ' ' + JP_FONT + '">' + esc(r.jp) + '</span>' +
      '<span class="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.18em] opacity-75">Archive No. ' + esc(r.no) + '</span></div>';
  }

  function card(r) {
    return '<li><a href="ho-so.html?id=' + encodeURIComponent(r.id) + '" class="group flex h-full flex-col border border-ink/20 bg-paper-light transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_24px_50px_-30px_rgba(36,35,33,.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vermilion">' +
      cover(r, 'aspect-[4/3]') +
      '<div class="flex flex-1 flex-col gap-3 p-5 sm:p-6">' +
      '<div class="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.16em]"><span class="text-vermilion">No. ' + esc(r.no) + '</span><span class="border border-ink/30 px-2.5 py-1 text-ink/80">' + esc(catLabel(r.cat)) + '</span></div>' +
      '<h3 class="font-display text-2xl font-bold leading-snug group-hover:text-vermilion">' + esc(r.title) + '</h3>' +
      '<p class="text-sm font-medium text-archive-deep">' + esc(r.period) + (r.city ? ' &middot; ' + esc(r.city) : '') + '</p>' +
      '<p class="flex-1 leading-relaxed text-ink/80">' + esc(r.excerpt) + '</p>' +
      '<span class="inline-flex items-center gap-2 text-sm font-semibold text-vermilion">Xem chi tiết ' + ARROW + '</span>' +
      '</div></a></li>';
  }

  /* ---------- Dòng thời gian: nút trước / sau ---------- */
  document.querySelectorAll('#dong-thoi-gian').forEach(function (root) {
    try {
      var track = root.querySelector('[data-tl-track]');
      if (!track) return;
      function step(dir) {
        var item = track.querySelector('li');
        var w = item ? item.getBoundingClientRect().width + 20 : 320;
        track.scrollBy({ left: dir * w, behavior: 'smooth' });
      }
      var p = root.querySelector('[data-tl-prev]'), n = root.querySelector('[data-tl-next]');
      if (p) p.addEventListener('click', function () { step(-1); });
      if (n) n.addEventListener('click', function () { step(1); });
    } catch (e) { console.error('[site] #dong-thoi-gian', e); }
  });

  /* ---------- Kho lưu trữ: lọc + tìm kiếm ---------- */
  document.querySelectorAll('#kho').forEach(function (root) {
    try {
      var data = window.MC_RECORDS || [];
      var grid = root.querySelector('[data-kho-grid]');
      var empty = root.querySelector('[data-kho-empty]');
      var count = root.querySelector('[data-kho-count]');
      var input = root.querySelector('[data-kho-search]');
      var chips = Array.prototype.slice.call(root.querySelectorAll('[data-kho-filter]'));
      var emptyQ = root.querySelector('[data-kho-empty-q]');
      var state = { cat: 'all', q: '' };

      var startCat = param('cat');
      if (startCat && (window.MC_CATEGORIES || {})[startCat]) state.cat = startCat;
      state.q = param('q');
      if (input) input.value = state.q;

      function haystack(r) {
        return norm([r.title, r.jp, r.excerpt, r.intro, r.period, r.city, catLabel(r.cat), (r.facts || []).map(function (f) { return f.join(' '); }).join(' ')].join(' '));
      }
      data.forEach(function (r) { r._hay = haystack(r); });

      function render() {
        var q = norm(state.q.trim());
        var words = q ? q.split(/\s+/) : [];
        var list = data.filter(function (r) {
          if (state.cat !== 'all' && r.cat !== state.cat) return false;
          return words.every(function (w) { return r._hay.indexOf(w) !== -1; });
        });
        chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c.getAttribute('data-kho-filter') === state.cat)); });
        grid.innerHTML = list.map(card).join('');
        grid.hidden = list.length === 0;
        empty.hidden = list.length !== 0;
        if (emptyQ) emptyQ.textContent = state.q.trim() ? '"' + state.q.trim() + '"' : 'bộ lọc này';
        if (count) count.textContent = list.length + ' / ' + data.length + ' hồ sơ';
      }

      chips.forEach(function (c) {
        c.addEventListener('click', function () { state.cat = c.getAttribute('data-kho-filter'); render(); });
      });
      if (input) {
        var t;
        input.addEventListener('input', function () { clearTimeout(t); t = setTimeout(function () { state.q = input.value; render(); }, 120); });
      }
      var form = root.querySelector('[data-kho-form]');
      if (form) form.addEventListener('submit', function (e) { e.preventDefault(); state.q = input.value; render(); });
      root.querySelectorAll('[data-kho-reset]').forEach(function (b) {
        b.addEventListener('click', function () { state.cat = 'all'; state.q = ''; if (input) input.value = ''; render(); if (input) input.focus(); });
      });
      render();
    } catch (e) { console.error('[site] #kho', e); }
  });

  /* ---------- Template hồ sơ ---------- */
  document.querySelectorAll('#ho-so').forEach(function (root) {
    try {
      var id = param('id');
      var r = window.MC_find ? window.MC_find(id || 'hokusai-manga') : null;
      var view = root.querySelector('[data-hs-view]');
      var missing = document.querySelector('[data-hs-missing]');
      var related = document.querySelector('#lien-quan');
      if (!r) {
        view.hidden = true;
        if (missing) missing.hidden = false;
        if (related) related.hidden = true;
        document.title = 'Không tìm thấy hồ sơ - MANGA CHRONICLE';
        return;
      }
      document.title = r.title + ' - MANGA CHRONICLE';
      var md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute('content', r.excerpt);

      function set(sel, html) { var el = root.querySelector(sel); if (el) el.innerHTML = html; }
      set('[data-hs-crumb-cat]', '<a href="kho-luu-tru.html?cat=' + esc(r.cat) + '" class="underline-offset-4 hover:text-vermilion hover:underline">' + esc(catLabel(r.cat)) + '</a>');
      set('[data-hs-crumb-title]', esc(r.title));
      set('[data-hs-cat]', esc(catLabel(r.cat)));
      set('[data-hs-no]', 'Archive No. ' + esc(r.no));
      set('[data-hs-title]', esc(r.title));
      set('[data-hs-jp]', esc(r.jp));
      set('[data-hs-period]', esc(r.period) + (r.city ? ' &middot; ' + esc(r.city) : ''));
      set('[data-hs-intro]', esc(r.intro));

      var media = root.querySelector('[data-hs-media]');
      if (media) {
        if (r.img) {
          media.innerHTML = '<figure><div data-reveal="clip" class="aspect-[4/3] overflow-hidden bg-paper-deep lg:aspect-[5/4]"><img src="' + esc(r.img) + '" alt="' + esc(r.imgAlt) + '" class="h-full w-full object-cover"></div>' +
            '<figcaption class="mt-3 text-sm text-archive-deep">' + esc(r.imgCaption || '') + '</figcaption></figure>';
        } else {
          media.innerHTML = '<figure><div data-reveal="clip" class="relative grid aspect-[4/3] place-items-center overflow-hidden lg:aspect-[5/4] ' + (TILE[r.cat] || TILE['lich-su']) + '">' +
            '<span aria-hidden="true" class="select-none px-8 text-center leading-tight ' + (String(r.jp).length > 6 ? 'text-4xl sm:text-5xl' : 'text-6xl sm:text-7xl') + ' ' + JP_FONT + '">' + esc(r.jp) + '</span>' +
            '<span class="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.18em] opacity-75">Archive No. ' + esc(r.no) + '</span></div>' +
            '<figcaption class="mt-3 text-sm text-archive-deep">Chưa có ảnh được cấp phép cho hồ sơ này; tạm hiển thị tên gốc tiếng Nhật.</figcaption></figure>';
        }
      }

      set('[data-hs-sections]', (r.sections || []).map(function (s, i) {
        return '<section data-reveal="up" aria-labelledby="muc-' + i + '"><h2 id="muc-' + i + '" class="font-display text-2xl font-bold sm:text-3xl">' + esc(s.h) + '</h2>' +
          '<p class="mt-4 text-lg leading-relaxed text-ink/85">' + esc(s.p) + '</p></section>';
      }).join(''));

      set('[data-hs-facts]', (r.facts || []).map(function (f) {
        return '<div class="grid grid-cols-[7.5rem_1fr] gap-3 border-b border-ink/15 py-3 last:border-b-0"><dt class="text-sm font-semibold text-archive-deep">' + esc(f[0]) + '</dt><dd class="text-[0.95rem] font-medium">' + esc(f[1]) + '</dd></div>';
      }).join(''));

      set('[data-hs-sources]', (r.sources || []).map(function (s) {
        return '<li class="flex gap-3"><span aria-hidden="true" class="mt-2.5 h-px w-4 shrink-0 bg-vermilion"></span><span class="leading-relaxed">' + esc(s) + '</span></li>';
      }).join(''));

      var rel = (r.related || []).map(function (x) { return window.MC_find(x); }).filter(Boolean);
      var relGrid = document.querySelector('[data-hs-related]');
      if (relGrid) relGrid.innerHTML = rel.map(card).join('');
    } catch (e) { console.error('[site] #ho-so', e); }
  });
})();
