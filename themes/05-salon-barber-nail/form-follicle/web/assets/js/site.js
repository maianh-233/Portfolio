/* FORM & FOLLICLE: chuyển ngôn ngữ VI / EN ngay trên trang (BA yêu cầu song ngữ).
   Nội dung tiếng Việt nằm sẵn trong HTML; bản tiếng Anh nằm trong data-en (nội dung) và
   data-en-alt / data-en-placeholder / data-en-aria-label / data-en-caption / data-en-title (thuộc tính).
   Lựa chọn được nhớ bằng localStorage để giữ nguyên khi chuyển trang. */
(function () {
  var KEY = 'ff-lang';
  var root = document.documentElement;
  var ATTRS = [['alt', 'alt'], ['placeholder', 'placeholder'], ['aria-label', 'aria-label'], ['caption', 'data-caption'], ['title', 'title']];

  function stored() { try { return localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch (e) { return 'vi'; } }
  function save(l) { try { localStorage.setItem(KEY, l); } catch (e) {} }

  if (stored() === 'en') {
    root.classList.add('lang-pending');
    setTimeout(function () { root.classList.remove('lang-pending'); }, 1500);
  }

  var baseTitle = null;

  function apply(lang) {
    try {
      document.querySelectorAll('[data-en]').forEach(function (el) {
        if (!el.hasAttribute('data-vi')) el.setAttribute('data-vi', el.innerHTML);
        el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-vi');
      });
      ATTRS.forEach(function (pair) {
        var en = 'data-en-' + pair[0], vi = 'data-vi-' + pair[0], target = pair[1];
        document.querySelectorAll('[' + en + ']').forEach(function (el) {
          if (!el.hasAttribute(vi)) el.setAttribute(vi, el.getAttribute(target) || '');
          el.setAttribute(target, lang === 'en' ? el.getAttribute(en) : el.getAttribute(vi));
        });
      });
      if (baseTitle === null) baseTitle = document.title;
      var tEn = document.body && document.body.getAttribute('data-title-en');
      document.title = lang === 'en' && tEn ? tEn : baseTitle;
      root.setAttribute('lang', lang);
      document.querySelectorAll('[data-lang-set]').forEach(function (b) {
        var on = b.getAttribute('data-lang-set') === lang;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
    } catch (e) {
      console.error('[site] i18n', e);
    }
    root.classList.remove('lang-pending');
  }

  function init() {
    apply(stored());
    document.addEventListener('click', function (ev) {
      var b = ev.target.closest && ev.target.closest('[data-lang-set]');
      if (!b) return;
      ev.preventDefault();
      var l = b.getAttribute('data-lang-set') === 'en' ? 'en' : 'vi';
      save(l);
      apply(l);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
