/* SKINCARE HOUSE - EN / VI language switch.
   English is the source markup; Vietnamese lives in data-vi (innerHTML), data-vi-ph (placeholder),
   data-vi-aria (aria-label), data-vi-alt (alt). Choice is remembered in localStorage. */
(function () {
  var KEY = 'skincare-house-lang';
  var root = document.documentElement;

  function store(lang) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  function swapAttr(sel, attr, viAttr, lang) {
    document.querySelectorAll(sel).forEach(function (el) {
      var enKey = 'data-en-' + attr;
      if (!el.hasAttribute(enKey)) el.setAttribute(enKey, el.getAttribute(attr) || '');
      el.setAttribute(attr, lang === 'vi' ? el.getAttribute(viAttr) : el.getAttribute(enKey));
    });
  }

  function apply(lang) {
    try {
      document.querySelectorAll('[data-vi]').forEach(function (el) {
        if (!el.hasAttribute('data-en')) el.setAttribute('data-en', el.innerHTML);
        el.innerHTML = lang === 'vi' ? el.getAttribute('data-vi') : el.getAttribute('data-en');
      });
      swapAttr('[data-vi-ph]', 'placeholder', 'data-vi-ph', lang);
      swapAttr('[data-vi-aria]', 'aria-label', 'data-vi-aria', lang);
      swapAttr('[data-vi-alt]', 'alt', 'data-vi-alt', lang);

      if (!root.hasAttribute('data-en-title')) root.setAttribute('data-en-title', document.title);
      var viTitle = root.getAttribute('data-vi-title');
      if (viTitle) document.title = lang === 'vi' ? viTitle : root.getAttribute('data-en-title');
      var meta = document.querySelector('meta[name="description"]');
      if (meta && meta.hasAttribute('data-vi-content')) {
        if (!meta.hasAttribute('data-en-content')) meta.setAttribute('data-en-content', meta.content);
        meta.content = lang === 'vi' ? meta.getAttribute('data-vi-content') : meta.getAttribute('data-en-content');
      }

      root.setAttribute('lang', lang);
      document.querySelectorAll('[data-lang-set]').forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-lang-set') === lang ? 'true' : 'false');
      });
    } catch (e) { console.error('[site] lang', e); }
  }

  document.querySelectorAll('[data-lang-set]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang-set');
      store(lang);
      apply(lang);
      if (window.UI && UI.toast) UI.toast(lang === 'vi' ? 'Đã chuyển sang tiếng Việt' : 'Switched to English', 'success');
    });
  });

  apply(saved() === 'vi' ? 'vi' : 'en');
})();
