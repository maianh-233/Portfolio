/* MATCHA ATELIER — site-specific logic: EN / VI switch + soft page transition */
(function () {
  /* ---------- EN / VI language switch ---------- */
  try {
    var KEY = 'ma-lang';
    var nodes = document.querySelectorAll('[data-vi]');
    var alts = document.querySelectorAll('[data-vi-alt]');
    var labels = document.querySelectorAll('[data-vi-label]');
    nodes.forEach(function (el) { el.setAttribute('data-en', el.innerHTML); });
    alts.forEach(function (el) { el.setAttribute('data-en-alt', el.getAttribute('alt') || ''); });
    labels.forEach(function (el) { el.setAttribute('data-en-label', el.getAttribute('aria-label') || ''); });
    var titleEn = document.title;
    var titleVi = document.documentElement.getAttribute('data-vi-title') || titleEn;

    function apply(lang) {
      var vi = lang === 'vi';
      nodes.forEach(function (el) { el.innerHTML = vi ? el.getAttribute('data-vi') : el.getAttribute('data-en'); });
      alts.forEach(function (el) { el.setAttribute('alt', vi ? el.getAttribute('data-vi-alt') : el.getAttribute('data-en-alt')); });
      labels.forEach(function (el) { el.setAttribute('aria-label', vi ? el.getAttribute('data-vi-label') : el.getAttribute('data-en-label')); });
      document.documentElement.setAttribute('lang', vi ? 'vi' : 'en');
      document.title = vi ? titleVi : titleEn;
      document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-lang-btn') === lang ? 'true' : 'false');
      });
    }

    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved === 'vi') apply('vi'); else apply('en');

    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.addEventListener('click', function () {
        var lang = b.getAttribute('data-lang-btn');
        try { localStorage.setItem(KEY, lang); } catch (e) {}
        apply(lang);
      });
    });
  } catch (e) { console.error('[site] lang', e); }

  /* ---------- Soft page transition for internal links ---------- */
  try {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      document.querySelectorAll('a[href$=".html"]').forEach(function (a) {
        a.addEventListener('click', function (ev) {
          if (ev.metaKey || ev.ctrlKey || ev.shiftKey || a.target === '_blank') return;
          var href = a.getAttribute('href');
          ev.preventDefault();
          document.body.classList.add('is-leaving');
          setTimeout(function () { window.location.href = href; }, 320);
        });
      });
      window.addEventListener('pageshow', function () { document.body.classList.remove('is-leaving'); });
    }
  } catch (e) { console.error('[site] transition', e); }
})();
