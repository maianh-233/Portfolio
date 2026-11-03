/* BLACKLINE BARBER CLUB — chuyển ngôn ngữ VI / EN tại chỗ (không tải lại trang, lưu localStorage).
   HTML mặc định tiếng Việt; bản tiếng Anh nằm trong data-en (nội dung) và data-en-<thuộc tính> (alt, placeholder…). */
(function () {
  try {
    var KEY = 'blackline-lang';
    var ATTRS = ['alt', 'placeholder', 'aria-label', 'data-caption', 'content', 'title'];

    function apply(lang) {
      document.querySelectorAll('[data-en]').forEach(function (el) {
        if (!el.hasAttribute('data-vi')) el.setAttribute('data-vi', el.innerHTML);
        el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-vi');
      });
      ATTRS.forEach(function (a) {
        document.querySelectorAll('[data-en-' + a + ']').forEach(function (el) {
          var store = 'data-vi-' + a;
          if (!el.hasAttribute(store)) el.setAttribute(store, el.getAttribute(a) || '');
          el.setAttribute(a, lang === 'en' ? el.getAttribute('data-en-' + a) : el.getAttribute(store));
        });
      });
      document.documentElement.setAttribute('lang', lang);
      document.querySelectorAll('[data-lang-set]').forEach(function (b) {
        var on = b.getAttribute('data-lang-set') === lang;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
    }

    var saved = 'vi';
    try { saved = localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch (e) {}
    apply(saved);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-lang-set]');
      if (!btn) return;
      var lang = btn.getAttribute('data-lang-set');
      try { localStorage.setItem(KEY, lang); } catch (err) {}
      apply(lang);
    });
  } catch (e) { console.error('[site] i18n', e); }
})();
