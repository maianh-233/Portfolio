/* ROSÉ BEAUTY CLINIC - chuyển đổi ngôn ngữ Anh / Việt.
 * HTML viết sẵn tiếng Anh; bản tiếng Việt nằm trong thuộc tính:
 *   data-vi (chữ), data-vi-placeholder, data-vi-alt, data-vi-aria (aria-label), <html data-vi-title data-vi-desc>
 * Nút [data-lang-set="en|vi"]. Lựa chọn lưu localStorage. */
(function () {
  var KEY = 'rose-lang';
  var root = document.documentElement;
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }
  function swapAttr(el, attr, viKey, enKey, lang) {
    if (el.dataset[enKey] == null) el.dataset[enKey] = el.getAttribute(attr) || '';
    el.setAttribute(attr, lang === 'vi' ? el.dataset[viKey] : el.dataset[enKey]);
  }
  function apply(lang) {
    try {
      each('[data-vi]', function (el) {
        if (el.dataset.en == null) el.dataset.en = el.textContent;
        el.textContent = lang === 'vi' ? el.dataset.vi : el.dataset.en;
      });
      each('[data-vi-placeholder]', function (el) { swapAttr(el, 'placeholder', 'viPlaceholder', 'enPlaceholder', lang); });
      each('[data-vi-alt]', function (el) { swapAttr(el, 'alt', 'viAlt', 'enAlt', lang); });
      each('[data-vi-aria]', function (el) { swapAttr(el, 'aria-label', 'viAria', 'enAria', lang); });
      if (root.dataset.enTitle == null) root.dataset.enTitle = document.title;
      if (root.dataset.viTitle) document.title = lang === 'vi' ? root.dataset.viTitle : root.dataset.enTitle;
      var meta = document.querySelector('meta[name="description"]');
      if (meta && root.dataset.viDesc) {
        if (root.dataset.enDesc == null) root.dataset.enDesc = meta.getAttribute('content');
        meta.setAttribute('content', lang === 'vi' ? root.dataset.viDesc : root.dataset.enDesc);
      }
      root.lang = lang;
      each('[data-lang-set]', function (b) { b.setAttribute('aria-pressed', b.dataset.langSet === lang ? 'true' : 'false'); });
    } catch (e) { console.error('[site] lang', e); }
  }
  function init() {
    var saved = 'en';
    try { saved = localStorage.getItem(KEY) || 'en'; } catch (e) {}
    apply(saved);
    each('[data-lang-set]', function (b) {
      b.addEventListener('click', function () {
        var lang = b.dataset.langSet;
        try { localStorage.setItem(KEY, lang); } catch (e) {}
        apply(lang);
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
