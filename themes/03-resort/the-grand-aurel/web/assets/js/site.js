/* THE GRAND AUREL — logic riêng: chuyển ngôn ngữ VI/EN (giữ lựa chọn khi chuyển trang / tải lại) + ảnh dự phòng.
   Nạp TRƯỚC motion.js để chữ đã đúng ngôn ngữ khi motion.js tách chữ (data-split). */
(function () {
  'use strict';

  /* ---------- Chuyển ngôn ngữ ---------- */
  try {
    var KEY = 'grand-aurel-lang';
    var texts = [].slice.call(document.querySelectorAll('[data-en]'));
    var alts = [].slice.call(document.querySelectorAll('[data-en-alt]'));
    var arias = [].slice.call(document.querySelectorAll('[data-en-aria]'));
    var titleVi = document.title;
    var titleEn = document.body.getAttribute('data-title-en') || titleVi;
    var descMeta = document.querySelector('meta[name="description"]');
    var descVi = descMeta ? descMeta.getAttribute('content') : '';
    var descEn = document.body.getAttribute('data-desc-en') || descVi;

    texts.forEach(function (el) { el.setAttribute('data-vi', el.textContent.replace(/\s+/g, ' ').trim()); });
    alts.forEach(function (el) { el.setAttribute('data-vi-alt', el.getAttribute('alt') || ''); });
    arias.forEach(function (el) { el.setAttribute('data-vi-aria', el.getAttribute('aria-label') || ''); });

    var getLang = function () {
      var m = location.search.match(/[?&]lang=(vi|en)/);
      if (m) return m[1];
      try { return localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch (e) { return 'vi'; }
    };

    var setLinks = function (lang) {
      document.querySelectorAll('a[href]').forEach(function (a) {
        var href = a.getAttribute('href');
        if (!/\.html(\?|#|$)/.test(href) || /^(https?:|mailto:|tel:)/.test(href)) return;
        var hash = '';
        var i = href.indexOf('#');
        if (i > -1) { hash = href.slice(i); href = href.slice(0, i); }
        href = href.replace(/\?lang=(vi|en)/, '');
        a.setAttribute('href', href + (lang === 'en' ? '?lang=en' : '') + hash);
      });
    };

    var apply = function (lang) {
      var en = lang === 'en';
      document.documentElement.lang = en ? 'en' : 'vi';
      texts.forEach(function (el) { el.textContent = en ? el.getAttribute('data-en') : el.getAttribute('data-vi'); });
      alts.forEach(function (el) { el.setAttribute('alt', en ? el.getAttribute('data-en-alt') : el.getAttribute('data-vi-alt')); });
      arias.forEach(function (el) { el.setAttribute('aria-label', en ? el.getAttribute('data-en-aria') : el.getAttribute('data-vi-aria')); });
      document.title = en ? titleEn : titleVi;
      if (descMeta) descMeta.setAttribute('content', en ? descEn : descVi);
      document.querySelectorAll('[data-lang]').forEach(function (b) {
        var on = b.getAttribute('data-lang') === lang;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      setLinks(lang);
      try { localStorage.setItem(KEY, lang); } catch (e) { /* file:// có thể chặn — đã có ?lang= trên link */ }
    };

    document.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('[data-lang]') : null;
      if (!b) return;
      e.preventDefault();
      apply(b.getAttribute('data-lang'));
    });

    apply(getLang());
  } catch (e) { console.error('[site] lang', e); }

  /* ---------- Ảnh dự phòng ---------- */
  try {
    document.querySelectorAll('img').forEach(function (img) {
      var fail = function () {
        img.classList.add('is-broken');
        if (img.parentElement) img.parentElement.classList.add('img-fallback');
      };
      if (img.complete && img.getAttribute('src') && img.naturalWidth === 0 && img.loading !== 'lazy') fail();
      img.addEventListener('error', fail);
    });
  } catch (e) { console.error('[site] img', e); }
})();
