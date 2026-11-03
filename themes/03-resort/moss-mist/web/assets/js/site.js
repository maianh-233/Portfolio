/* MOSS & MIST — bộ chuyển ngôn ngữ VI/EN (phía trình duyệt).
   HTML gốc tiếng Việt; phần tử có data-en được thay nội dung, data-en-aria thay aria-label,
   <html data-title-en> thay tiêu đề tab. Lựa chọn lưu trong localStorage. */
(function () {
  try {
    var KEY = 'mm-lang';
    var html = document.documentElement;
    var nodes = [].slice.call(document.querySelectorAll('[data-en]'));
    var arias = [].slice.call(document.querySelectorAll('[data-en-aria]'));
    var buttons = [].slice.call(document.querySelectorAll('[data-lang-set]'));
    var titleVi = document.title;
    var titleEn = html.getAttribute('data-title-en') || titleVi;
    var current = 'vi';

    nodes.forEach(function (n) { n.setAttribute('data-vi', n.innerHTML); });
    arias.forEach(function (n) { n.setAttribute('data-vi-aria', n.getAttribute('aria-label') || ''); });

    function apply(lang) {
      if (lang !== 'en') lang = 'vi';
      if (lang !== current) {
        nodes.forEach(function (n) { n.innerHTML = n.getAttribute(lang === 'en' ? 'data-en' : 'data-vi'); });
        arias.forEach(function (n) { n.setAttribute('aria-label', n.getAttribute(lang === 'en' ? 'data-en-aria' : 'data-vi-aria')); });
        document.title = lang === 'en' ? titleEn : titleVi;
        html.setAttribute('lang', lang);
        current = lang;
      }
      buttons.forEach(function (b) {
        var on = b.getAttribute('data-lang-set') === lang;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      try { localStorage.setItem(KEY, lang); } catch (e) { /* file:// có thể chặn */ }
    }

    buttons.forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-lang-set')); });
    });

    var saved = 'vi';
    try { saved = localStorage.getItem(KEY) || 'vi'; } catch (e) { saved = 'vi'; }
    apply(saved);
  } catch (e) {
    console.error('[site] i18n', e);
  }
})();
