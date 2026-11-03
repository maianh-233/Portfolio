/* AZURE HAVEN - chuyển ngôn ngữ VI / EN (nội dung tiếng Anh nằm trong data-en, data-en-alt, data-en-aria, data-en-content) */
(function () {
  try {
    var KEY = 'azh-lang';
    var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-en]'));
    var ATTRS = [['data-en-alt', 'alt'], ['data-en-aria', 'aria-label'], ['data-en-content', 'content'], ['data-en-caption', 'data-caption']];
    // Lưu bản tiếng Việt gốc trước khi motion.js tách chữ
    nodes.forEach(function (n) { n.__vi = n.innerHTML; });
    var attrNodes = [];
    ATTRS.forEach(function (pair) {
      document.querySelectorAll('[' + pair[0] + ']').forEach(function (n) {
        n['__vi_' + pair[1]] = n.getAttribute(pair[1]) || '';
        attrNodes.push([n, pair[0], pair[1]]);
      });
    });

    function paintToggles(lang) {
      document.querySelectorAll('[data-lang-opt]').forEach(function (s) {
        s.classList.toggle('is-off', s.getAttribute('data-lang-opt') !== lang);
      });
      document.querySelectorAll('[data-lang-toggle]').forEach(function (b) {
        b.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
      });
    }

    function apply(lang) {
      document.documentElement.setAttribute('lang', lang);
      nodes.forEach(function (n) {
        n.innerHTML = lang === 'en' ? n.getAttribute('data-en') : n.__vi;
      });
      attrNodes.forEach(function (a) {
        a[0].setAttribute(a[2], lang === 'en' ? a[0].getAttribute(a[1]) : a[0]['__vi_' + a[2]]);
      });
      paintToggles(lang);
      try { localStorage.setItem(KEY, lang); } catch (e) {}
    }

    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved === 'en') apply('en'); else paintToggles('vi');

    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(document.documentElement.getAttribute('lang') === 'en' ? 'vi' : 'en');
      });
    });
  } catch (e) { console.error('[site] lang', e); }
})();
