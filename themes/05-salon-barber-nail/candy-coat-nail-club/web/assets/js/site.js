/* CANDY COAT NAIL CLUB — chuyển ngôn ngữ VI / EN (từ điển tiếng Anh tập trung trong i18n.js) */
(function () {
  try {
    var EN = window.CC_I18N_EN || {};
    var KEY = 'cc-lang';
    var viText = {}, viAttr = {};

    // Lưu bản tiếng Việt gốc theo khóa (dùng chung cho mọi phần tử cùng khóa, kể cả bản sao của marquee)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!(k in viText)) viText[k] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'); if (p.length < 2) return;
        var a = p[0].trim(), k = p[1].trim();
        if (!(k in viAttr)) viAttr[k] = el.getAttribute(a) || '';
      });
    });

    var dec = document.createElement('textarea');
    function decode(s) { dec.innerHTML = s; return dec.value; }

    function apply(lang) {
      var en = lang === 'en';
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var k = el.getAttribute('data-i18n');
        var v = en && EN[k] != null ? EN[k] : viText[k];
        if (v != null && el.innerHTML !== v) el.innerHTML = v;
      });
      document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
        el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
          var p = pair.split(':'); if (p.length < 2) return;
          var a = p[0].trim(), k = p[1].trim();
          var v = en && EN[k] != null ? decode(EN[k]) : viAttr[k];
          if (v != null) el.setAttribute(a, v);
        });
      });
      document.documentElement.lang = en ? 'en' : 'vi';
      document.querySelectorAll('[data-lang-set]').forEach(function (b) {
        var on = b.getAttribute('data-lang-set') === lang;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      try { localStorage.setItem(KEY, lang); } catch (e) {}
    }

    var saved = 'vi';
    try { saved = localStorage.getItem(KEY) || 'vi'; } catch (e) {}
    apply(saved === 'en' ? 'en' : 'vi');

    document.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-lang-set]');
      if (b) apply(b.getAttribute('data-lang-set'));
    });
  } catch (e) { console.error('[site] i18n', e); }
})();
