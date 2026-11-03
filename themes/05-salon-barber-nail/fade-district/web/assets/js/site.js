/* FADE DISTRICT — logic riêng: song ngữ VI / EN, nút đặt lịch minh họa, lọc gallery theo liên kết */
(function () {
  var KEY = 'fd-lang';
  var MSG = {
    vi: { book: 'Đặt lịch hiện chỉ là bản minh họa. Không có dữ liệu nào được thu thập hay gửi đi.' },
    en: { book: 'Booking is a demo only. No data is collected or sent.' }
  };
  var ATTRS = { alt: 'alt', 'aria-label': 'aria-label', caption: 'data-caption', content: 'content', placeholder: 'placeholder' };

  function getLang() {
    try { return localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch (e) { return 'vi'; }
  }

  // ---------- Song ngữ ----------
  function apply(lang) {
    try {
      document.querySelectorAll('[data-en]').forEach(function (el) {
        if (!el.hasAttribute('data-vi')) el.setAttribute('data-vi', el.innerHTML);
        var next = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-vi');
        if (el.innerHTML !== next) el.innerHTML = next;
      });
      Object.keys(ATTRS).forEach(function (k) {
        var real = ATTRS[k];
        document.querySelectorAll('[data-en-' + k + ']').forEach(function (el) {
          if (!el.hasAttribute('data-vi-' + k)) el.setAttribute('data-vi-' + k, el.getAttribute(real) || '');
          el.setAttribute(real, lang === 'en' ? el.getAttribute('data-en-' + k) : el.getAttribute('data-vi-' + k));
        });
      });
      var b = document.body;
      if (b && b.hasAttribute('data-en-title')) {
        if (!b.hasAttribute('data-vi-title')) b.setAttribute('data-vi-title', document.title);
        document.title = lang === 'en' ? b.getAttribute('data-en-title') : b.getAttribute('data-vi-title');
      }
      document.documentElement.setAttribute('lang', lang);
      document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(btn.getAttribute('data-set-lang') === lang));
      });
    } catch (e) { console.error('[site] i18n', e); }
  }

  var current = getLang();
  if (current === 'en') apply('en');
  else document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.setAttribute('aria-pressed', String(btn.getAttribute('data-set-lang') === 'vi'));
  });

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target : e.target.parentElement;
    if (!t) return;

    var langBtn = t.closest('[data-set-lang]');
    if (langBtn) {
      current = langBtn.getAttribute('data-set-lang') === 'en' ? 'en' : 'vi';
      try { localStorage.setItem(KEY, current); } catch (err) {}
      apply(current);
      return;
    }

    var book = t.closest('[data-book]');
    if (book) {
      if (window.UI && UI.toast) UI.toast(MSG[current].book, 'info');
      return;
    }

    var jump = t.closest('[data-filter-jump]');
    if (jump) {
      var btn = document.querySelector('[data-filter="' + jump.getAttribute('data-filter-jump') + '"]');
      if (btn) btn.click();
    }
  });

  // ---------- Gallery: mở sẵn bộ lọc theo #f-<danh-mục> ----------
  document.querySelectorAll('#lookbook[data-section="gallery-filter"]').forEach(function (root) {
    try {
      var run = function () {
        var h = (location.hash || '').slice(1);
        if (!h) return;
        var el = document.getElementById(h);
        if (el && el.hasAttribute('data-filter') && root.contains(el)) {
          el.click();
          root.scrollIntoView({ block: 'start' });
        }
      };
      if (document.readyState === 'complete') setTimeout(run, 0);
      else window.addEventListener('load', run);
      window.addEventListener('hashchange', run);
    } catch (e) { console.error('[site] #lookbook', e); }
  });
})();
