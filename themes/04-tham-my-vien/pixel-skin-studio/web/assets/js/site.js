/* PIXEL SKIN STUDIO - công tắc Việt / English (phần riêng ui.js không có) */
(function () {
  var KEY = 'pss-lang';
  var root = document.documentElement;
  var titles = { vi: root.getAttribute('data-title-vi') || document.title, en: root.getAttribute('data-title-en') || document.title };

  function apply(lang) {
    root.setAttribute('lang', lang);
    if (titles[lang]) document.title = titles[lang];
    document.querySelectorAll('[data-alt-en]').forEach(function (img) {
      if (!img.hasAttribute('data-alt-vi')) img.setAttribute('data-alt-vi', img.getAttribute('alt') || '');
      img.setAttribute('alt', img.getAttribute(lang === 'en' ? 'data-alt-en' : 'data-alt-vi'));
    });
    document.querySelectorAll('[data-lang-set]').forEach(function (b) {
      var on = b.getAttribute('data-lang-set') === lang;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.classList.toggle('is-active', on);
    });
  }

  document.querySelectorAll('[data-lang-switch]').forEach(function (root) {
    try {
      root.addEventListener('click', function (e) {
        var b = e.target.closest('[data-lang-set]');
        if (!b) return;
        var lang = b.getAttribute('data-lang-set');
        try { localStorage.setItem(KEY, lang); } catch (err) {}
        apply(lang);
      });
    } catch (e) { console.error('[site] lang-switch', e); }
  });

  apply(root.getAttribute('lang') === 'en' ? 'en' : 'vi');
})();
