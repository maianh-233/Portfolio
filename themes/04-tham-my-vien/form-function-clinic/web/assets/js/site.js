/* FORM & FUNCTION CLINIC — công tắc song ngữ Việt / Anh
 * Phần tử có data-en: nội dung tiếng Anh (HTML). Nội dung tiếng Việt gốc lưu vào data-vi lần đầu.
 * data-en-ph: placeholder · data-en-alt: alt ảnh · data-en-aria: aria-label
 * <html data-title-en data-desc-en>: tiêu đề + mô tả trang.
 */
(function () {
  var KEY = 'ff-lang';
  var root = document.documentElement;

  function swapAttr(el, attr, enAttr, lang) {
    var store = 'data-vi-' + attr;
    if (!el.hasAttribute(store)) el.setAttribute(store, el.getAttribute(attr) || '');
    el.setAttribute(attr, lang === 'en' ? el.getAttribute(enAttr) : el.getAttribute(store));
  }

  function apply(lang) {
    try {
      document.querySelectorAll('[data-en]').forEach(function (el) {
        if (!el.hasAttribute('data-vi')) el.setAttribute('data-vi', el.innerHTML);
        el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-vi');
      });
      document.querySelectorAll('[data-en-ph]').forEach(function (el) { swapAttr(el, 'placeholder', 'data-en-ph', lang); });
      document.querySelectorAll('[data-en-alt]').forEach(function (el) { swapAttr(el, 'alt', 'data-en-alt', lang); });
      document.querySelectorAll('[data-en-aria]').forEach(function (el) { swapAttr(el, 'aria-label', 'data-en-aria', lang); });

      if (!root.hasAttribute('data-title-vi')) root.setAttribute('data-title-vi', document.title);
      if (root.getAttribute('data-title-en')) document.title = lang === 'en' ? root.getAttribute('data-title-en') : root.getAttribute('data-title-vi');
      var meta = document.querySelector('meta[name="description"]');
      if (meta && root.getAttribute('data-desc-en')) {
        if (!meta.hasAttribute('data-vi')) meta.setAttribute('data-vi', meta.getAttribute('content'));
        meta.setAttribute('content', lang === 'en' ? root.getAttribute('data-desc-en') : meta.getAttribute('data-vi'));
      }
      root.setAttribute('lang', lang);
      document.querySelectorAll('[data-lang-set]').forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-lang-set') === lang ? 'true' : 'false');
      });
    } catch (e) { console.error('[site] i18n', e); }
  }

  var saved = 'vi';
  try { saved = localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch (e) {}
  apply(saved);

  document.querySelectorAll('[data-lang-set]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang-set');
      try { localStorage.setItem(KEY, lang); } catch (e) {}
      apply(lang);
    });
  });
})();
