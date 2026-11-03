/* TEA ORBIT — chuyển ngôn ngữ EN / VI.
   Chữ tiếng Anh nằm sẵn trong HTML; bản tiếng Việt ở thuộc tính data-vi (chữ thường, không thẻ con),
   data-vi-alt, data-vi-aria, data-vi-content, data-vi-caption (lightbox). Lựa chọn được nhớ trong localStorage. */
(function () {
  var KEY = 'teaorbit-lang';
  var TEXT_ATTRS = [
    ['data-vi-alt', 'alt', 'enAlt'],
    ['data-vi-aria', 'aria-label', 'enAria'],
    ['data-vi-content', 'content', 'enContent'],
    ['data-vi-caption', 'data-caption', 'enCaption'],
    ['data-vi-title', 'title', 'enTitle']
  ];

  function apply(lang) {
    try {
      document.querySelectorAll('[data-vi]').forEach(function (el) {
        if (el.dataset.enText === undefined) el.dataset.enText = el.textContent;
        el.textContent = lang === 'vi' ? el.getAttribute('data-vi') : el.dataset.enText;
      });

      TEXT_ATTRS.forEach(function (pair) {
        document.querySelectorAll('[' + pair[0] + ']').forEach(function (el) {
          var key = pair[2];
          if (el.dataset[key] === undefined) el.dataset[key] = el.getAttribute(pair[1]) || '';
          el.setAttribute(pair[1], lang === 'vi' ? el.getAttribute(pair[0]) : el.dataset[key]);
        });
      });

      document.documentElement.setAttribute('lang', lang);
      document.querySelectorAll('[data-lang-toggle]').forEach(function (b) {
        b.setAttribute('aria-pressed', lang === 'vi' ? 'true' : 'false');
        b.querySelectorAll('[data-lang-opt]').forEach(function (o) {
          o.classList.toggle('is-active', o.getAttribute('data-lang-opt') === lang);
        });
      });
    } catch (e) { console.error('[site] lang', e); }
  }

  var lang = 'en';
  try { lang = localStorage.getItem(KEY) === 'vi' ? 'vi' : 'en'; } catch (e) {}

  document.querySelectorAll('[data-lang-toggle]').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = lang === 'vi' ? 'en' : 'vi';
      try { localStorage.setItem(KEY, lang); } catch (e) {}
      apply(lang);
    });
  });

  apply(lang);
})();
