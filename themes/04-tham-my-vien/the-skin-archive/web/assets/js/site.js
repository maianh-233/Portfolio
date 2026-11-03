/* THE SKIN ARCHIVE — công tắc ngôn ngữ EN / VI (nội dung tiếng Việt nằm trong data-vi*) */
(function () {
  var KEY = 'tsa-lang';
  var ATTRS = [['data-vi-placeholder', 'placeholder'], ['data-vi-alt', 'alt'], ['data-vi-content', 'content'], ['data-vi-aria', 'aria-label']];
  var SEL = '[data-vi],[data-vi-placeholder],[data-vi-alt],[data-vi-content],[data-vi-aria]';

  // Lưu bản tiếng Anh vào thuộc tính data-en* (được sao chép khi thư viện nhân bản phần tử, ví dụ marquee)
  function capture() {
    document.querySelectorAll(SEL).forEach(function (el) {
      if (el.hasAttribute('data-vi') && !el.hasAttribute('data-en')) el.setAttribute('data-en', el.innerHTML);
      ATTRS.forEach(function (a) {
        if (el.hasAttribute(a[0]) && !el.hasAttribute('data-en-' + a[1])) el.setAttribute('data-en-' + a[1], el.getAttribute(a[1]) || '');
      });
    });
  }

  function apply(lang) {
    var vi = lang === 'vi';
    document.querySelectorAll(SEL).forEach(function (el) {
      try {
        if (el.hasAttribute('data-vi')) {
          var next = vi ? el.getAttribute('data-vi') : el.getAttribute('data-en');
          if (next !== null && el.innerHTML !== next) el.innerHTML = next;
        }
        ATTRS.forEach(function (a) {
          if (!el.hasAttribute(a[0])) return;
          el.setAttribute(a[1], vi ? el.getAttribute(a[0]) : el.getAttribute('data-en-' + a[1]));
        });
      } catch (e) { console.error('[site] lang', e); }
    });
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-lang-set]').forEach(function (b) {
      var on = b.getAttribute('data-lang-set') === lang;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.classList.toggle('is-active', on);
    });
  }

  try {
    capture();
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    apply(saved === 'vi' ? 'vi' : 'en');
    document.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-lang-set]');
      if (!b) return;
      var lang = b.getAttribute('data-lang-set');
      capture();
      apply(lang);
      try { localStorage.setItem(KEY, lang); } catch (e) {}
    });
  } catch (e) { console.error('[site] lang switch', e); }
})();
