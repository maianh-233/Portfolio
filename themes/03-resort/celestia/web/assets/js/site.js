/* CELESTIA — chuyển ngôn ngữ VI / EN (data-vi / data-en), lưu lựa chọn trong localStorage.
   Nạp TRƯỚC motion.js để nội dung đúng ngôn ngữ trước khi tách chữ (data-split). */
(function () {
  try {
    var KEY = 'celestia-lang';
    var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

    // Ghi nhớ bản tiếng Việt gốc
    var texts = $$('[data-en]');
    texts.forEach(function (el) {
      if (el.hasAttribute('data-vi')) return;
      el.setAttribute('data-vi', el.tagName === 'META' ? (el.getAttribute('content') || '') : el.innerHTML);
    });
    var pairs = [
      ['data-en-alt', 'data-vi-alt', 'alt'],
      ['data-en-aria', 'data-vi-aria', 'aria-label'],
      ['data-en-caption', 'data-vi-caption', 'data-caption']
    ];
    pairs.forEach(function (p) {
      $$('[' + p[0] + ']').forEach(function (el) {
        if (!el.hasAttribute(p[1])) el.setAttribute(p[1], el.getAttribute(p[2]) || '');
      });
    });

    function markButtons(lang) {
      $$('[data-lang-set]').forEach(function (b) {
        var on = b.getAttribute('data-lang-set') === lang;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }

    function apply(lang) {
      var key = lang === 'en' ? 'data-en' : 'data-vi';
      document.documentElement.setAttribute('lang', lang);
      texts.forEach(function (el) {
        var v = el.getAttribute(key);
        if (v == null) return;
        if (el.tagName === 'META') { el.setAttribute('content', v); return; }
        if (el.tagName === 'TITLE') { document.title = v; return; }
        el.innerHTML = v;
        if (el.hasAttribute('data-split')) el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
      });
      pairs.forEach(function (p) {
        var src = lang === 'en' ? p[0] : p[1];
        $$('[' + p[0] + ']').forEach(function (el) {
          var v = el.getAttribute(src);
          if (v != null) el.setAttribute(p[2], v);
        });
      });
      markButtons(lang);
    }

    var current = 'vi';
    try { if (localStorage.getItem(KEY) === 'en') current = 'en'; } catch (e) {}
    if (current === 'en') apply('en'); else markButtons('vi');

    document.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('[data-lang-set]') : null;
      if (!b) return;
      var lang = b.getAttribute('data-lang-set');
      if (lang === current) return;
      current = lang;
      try { localStorage.setItem(KEY, lang); } catch (err) {}
      apply(lang);
    });
  } catch (err) {
    console.error('[site] lang', err);
  }
})();
