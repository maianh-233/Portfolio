/* BLOOM HAIR ATELIER — chuyển ngôn ngữ EN / VI ngay trên trang hiện tại.
   HTML gốc là tiếng Anh; bản tiếng Việt nằm trong data-vi (nội dung) và
   data-vi-alt / data-vi-placeholder / data-vi-aria-label / data-vi-caption (thuộc tính). */
(function () {
  var KEY = 'bloom-lang';
  var ATTRS = { alt: 'alt', placeholder: 'placeholder', 'aria-label': 'aria-label', caption: 'data-caption', content: 'content' };

  function store(lang) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  function apply(lang) {
    try {
      var vi = lang === 'vi';
      document.documentElement.lang = vi ? 'vi' : 'en';
      document.querySelectorAll('[data-vi]').forEach(function (el) {
        if (el.__bloomEn == null) el.__bloomEn = el.innerHTML;
        el.innerHTML = vi ? el.getAttribute('data-vi') : el.__bloomEn;
      });
      Object.keys(ATTRS).forEach(function (k) {
        var target = ATTRS[k];
        document.querySelectorAll('[data-vi-' + k + ']').forEach(function (el) {
          var store = '__bloomEn_' + k;
          if (el[store] == null) el[store] = el.getAttribute(target) || '';
          el.setAttribute(target, vi ? el.getAttribute('data-vi-' + k) : el[store]);
        });
      });
      document.querySelectorAll('[data-lang]').forEach(function (b) {
        var on = b.getAttribute('data-lang') === (vi ? 'vi' : 'en');
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
    } catch (e) { console.error('[site] lang', e); }
  }

  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang');
      store(lang);
      apply(lang);
    });
  });

  apply(saved() === 'vi' ? 'vi' : 'en');
})();
