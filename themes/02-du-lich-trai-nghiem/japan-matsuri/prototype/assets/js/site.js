/* JAPAN MATSURI — logic riêng: tìm kiếm / lọc lễ hội (le-hoi.html) và mẫu trang chi tiết (le-hoi-chi-tiet.html).
 * Dữ liệu: assets/js/data.js (window.MATSURI). Mỗi khối bọc try/catch riêng. */
(function () {
  var D = window.MATSURI;
  if (!D) { console.error('[site] thiếu data.js'); return; }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').trim();
  }
  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : '';
  }
  function detailUrl(f) { return 'le-hoi-chi-tiet.html?slug=' + encodeURIComponent(f.slug); }

  var ARROW = '<svg aria-hidden="true" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var PIN = '<svg aria-hidden="true" class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
  var CAL = '<svg aria-hidden="true" class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>';

  function card(f, i) {
    return '' +
      '<article class="card-in group flex min-w-0 flex-col overflow-hidden rounded-2xl bg-ivory ring-1 ring-sumi/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(31,28,28,.55)]" style="animation-delay:' + Math.min(i * 60, 420) + 'ms">' +
        '<a href="' + detailUrl(f) + '" class="block overflow-hidden bg-washi-deep" tabindex="-1" aria-hidden="true">' +
          '<img src="' + esc(f.img) + '" alt="' + esc(f.alt) + '" loading="lazy" width="800" height="600" class="photo-tone aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-expo group-hover:scale-[1.04]">' +
        '</a>' +
        '<div class="flex flex-1 flex-col gap-3 p-5 sm:p-6">' +
          '<div class="flex flex-wrap items-center gap-2 text-sm text-sumi-muted">' +
            '<span class="hanko text-shu">' + esc(D.seasons[f.season]) + '</span>' +
            '<span class="inline-flex items-center gap-1.5">' + PIN + esc(f.location) + '</span>' +
          '</div>' +
          '<h3 class="font-display text-2xl leading-tight text-sumi"><a href="' + detailUrl(f) + '" class="hover:text-shu focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shu rounded">' + esc(f.name) + '</a></h3>' +
          '<p class="inline-flex items-start gap-1.5 text-sm font-medium text-sumi-soft">' + CAL + '<span><span class="sr-only">Thời gian thường tổ chức: </span>' + esc(f.time) + '</span></p>' +
          '<p class="text-[15px] leading-relaxed text-sumi-muted">' + esc(f.short) + '</p>' +
          '<a href="' + detailUrl(f) + '" class="mt-auto inline-flex min-h-[44px] items-center gap-2 self-start font-semibold text-shu hover:text-shu-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shu rounded">Xem chi tiết ' + ARROW + '</a>' +
        '</div>' +
      '</article>';
  }

  /* ---------- Trang danh sách: tìm kiếm + lọc ---------- */
  document.querySelectorAll('#tim-le-hoi').forEach(function (root) {
    try {
      var input = root.querySelector('#tim-kiem');
      var grid = root.querySelector('#ket-qua');
      var count = root.querySelector('#so-ket-qua');
      var empty = root.querySelector('#khong-ket-qua');
      var form = root.querySelector('#bo-loc');
      var state = { q: param('q'), season: param('mua') || 'all', type: param('loai') || 'all' };
      if (!D.seasons[state.season]) state.season = 'all';
      if (!D.types[state.type]) state.type = 'all';
      input.value = state.q;

      function syncChips() {
        root.querySelectorAll('[data-season]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.season === state.season)); });
        root.querySelectorAll('[data-type]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.type === state.type)); });
      }
      function render() {
        var q = norm(state.q);
        var list = D.festivals.filter(function (f) {
          if (state.season !== 'all' && f.season !== state.season) return false;
          if (state.type !== 'all' && f.types.indexOf(state.type) < 0) return false;
          if (q && norm(f.name + ' ' + f.location + ' ' + f.region).indexOf(q) < 0) return false;
          return true;
        });
        grid.innerHTML = list.map(card).join('');
        grid.hidden = list.length === 0;
        empty.hidden = list.length !== 0;
        count.textContent = list.length ? ('Đang hiển thị ' + list.length + ' / ' + D.festivals.length + ' lễ hội') : 'Không có lễ hội phù hợp';
        syncChips();
      }

      input.addEventListener('input', function () { state.q = input.value; render(); });
      form.addEventListener('submit', function (e) { e.preventDefault(); state.q = input.value; render(); });
      root.querySelectorAll('[data-season]').forEach(function (b) {
        b.addEventListener('click', function () { state.season = b.dataset.season; render(); });
      });
      root.querySelectorAll('[data-type]').forEach(function (b) {
        b.addEventListener('click', function () { state.type = b.dataset.type; render(); });
      });
      root.querySelectorAll('[data-reset]').forEach(function (b) {
        b.addEventListener('click', function () {
          state = { q: '', season: 'all', type: 'all' };
          input.value = '';
          render();
          input.focus();
        });
      });
      render();
    } catch (e) { console.error('[site] #tim-le-hoi', e); }
  });

  /* ---------- Mẫu trang chi tiết ---------- */
  var cover = document.getElementById('anh-bia');
  if (cover) {
    try {
      var slug = param('slug');
      var f = null;
      D.festivals.forEach(function (x) { if (x.slug === slug) f = x; });
      if (!f) f = D.festivals[0];
      var typeNames = f.types.map(function (t) { return D.types[t]; }).join(', ');

      document.title = f.name + ' — JAPAN MATSURI';
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', f.short);

      function set(key, value) {
        document.querySelectorAll('[data-f="' + key + '"]').forEach(function (el) { el.textContent = value; });
      }
      set('name', f.name);
      set('location', f.location);
      set('time', f.time);
      set('season', D.seasons[f.season]);
      set('types', typeNames);
      set('short', f.short);
      set('trip-place', f.trip.place);
      set('trip-move', f.trip.move);
      set('trip-when', f.trip.when);
      set('trip-notes', f.trip.notes);

      var img = document.getElementById('anh-bia-img');
      img.src = f.img;
      img.alt = f.alt;

      var story = document.getElementById('cau-chuyen-noi-dung');
      story.innerHTML = f.story.map(function (p, i) {
        return '<p class="' + (i === 0 ? 'drop-cap ' : '') + 'text-[17px] leading-[1.8] text-sumi-soft">' + esc(p) + '</p>';
      }).join('');

      var hl = document.getElementById('noi-bat-list');
      hl.innerHTML = f.highlights.map(function (h, i) {
        return '<li class="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-t border-sumi/15 py-7 transition-colors duration-300 hover:bg-ivory/60 sm:grid-cols-[5rem_minmax(0,18rem)_1fr] sm:gap-x-8 sm:px-4">' +
          '<span class="font-display text-4xl leading-none text-shu sm:text-5xl">0' + (i + 1) + '</span>' +
          '<h3 class="font-display text-xl leading-snug text-sumi sm:text-2xl">' + esc(h.t) + '</h3>' +
          '<p class="col-start-2 text-[16px] leading-relaxed text-sumi-muted sm:col-start-3 sm:row-start-1">' + esc(h.d) + '</p>' +
        '</li>';
      }).join('');

      var ex = document.getElementById('trai-nghiem-list');
      ex.innerHTML = f.experiences.map(function (x) {
        var join = x.kind === 'Tham gia';
        return '<li class="flex min-w-0 flex-col gap-3 rounded-2xl p-6 ring-1 ' + (join ? 'bg-shu text-ivory ring-shu' : 'bg-white/5 text-ivory ring-ivory/15') + ' transition duration-300 hover:-translate-y-1">' +
          '<span class="hanko self-start ' + (join ? 'text-ivory' : 'text-[#F08A7E]') + '">' + esc(x.kind) + '</span>' +
          '<h3 class="font-display text-2xl leading-snug">' + esc(x.t) + '</h3>' +
          '<p class="text-[15px] leading-relaxed text-ivory/80">' + esc(x.d) + '</p>' +
        '</li>';
      }).join('');

      var related = D.festivals.filter(function (x) { return x.slug !== f.slug; })
        .map(function (x) {
          var score = (x.season === f.season ? 2 : 0) + (x.region === f.region ? 3 : 0);
          return { f: x, s: score };
        })
        .filter(function (r) { return r.s > 0; })
        .sort(function (a, b) { return b.s - a.s; })
        .slice(0, 3)
        .map(function (r) { return r.f; });
      if (related.length < 3) {
        D.festivals.forEach(function (x) {
          if (related.length < 3 && x.slug !== f.slug && related.indexOf(x) < 0) related.push(x);
        });
      }
      document.getElementById('lien-quan-list').innerHTML = related.map(card).join('');
    } catch (e) { console.error('[site] chi tiết', e); }
  }
})();
