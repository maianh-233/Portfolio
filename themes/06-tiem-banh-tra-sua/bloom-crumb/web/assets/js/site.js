/* BLOOM & CRUMB — chuyển ngôn ngữ EN / VI tại chỗ (BA yêu cầu "Việt – Anh đầy đủ, có nút chuyển").
   Nội dung mặc định tiếng Anh nằm trong HTML; bản tiếng Việt nằm trong data-vi (innerHTML),
   data-vi-alt / data-vi-aria-label / data-vi-content (thuộc tính), <html data-vi-title> (tiêu đề tab). */
(function () {
  var KEY = 'bloom-crumb-lang';
  var root = document.documentElement;
  var ATTRS = ['alt', 'aria-label', 'content', 'title', 'data-caption'];

  function store(lang) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  function apply(lang) {
    try {
      var vi = lang === 'vi';
      document.querySelectorAll('[data-vi]').forEach(function (el) {
        if (!el.hasAttribute('data-en')) el.setAttribute('data-en', el.innerHTML);
        var next = vi ? el.getAttribute('data-vi') : el.getAttribute('data-en');
        if (el.innerHTML !== next) el.innerHTML = next;
        if (el.hasAttribute('data-split')) el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
      });
      ATTRS.forEach(function (a) {
        document.querySelectorAll('[data-vi-' + a + ']').forEach(function (el) {
          var k = 'data-en-' + a;
          if (!el.hasAttribute(k)) el.setAttribute(k, el.getAttribute(a) || '');
          el.setAttribute(a, vi ? el.getAttribute('data-vi-' + a) : el.getAttribute(k));
        });
      });
      if (!root.hasAttribute('data-en-title')) root.setAttribute('data-en-title', document.title);
      if (root.getAttribute('data-vi-title')) document.title = vi ? root.getAttribute('data-vi-title') : root.getAttribute('data-en-title');
      root.setAttribute('lang', vi ? 'vi' : 'en');
      document.querySelectorAll('[data-lang-set]').forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-lang-set') === lang ? 'true' : 'false');
      });
    } catch (e) { console.error('[site] lang', e); }
  }

  document.querySelectorAll('[data-lang-set]').forEach(function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang-set');
      store(lang);
      apply(lang);
    });
  });

  if (saved() === 'vi') apply('vi');
})();
