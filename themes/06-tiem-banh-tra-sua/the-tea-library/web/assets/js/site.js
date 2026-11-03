/* THE TEA LIBRARY — logic riêng: chuyển ngôn ngữ EN / VI, đường kẻ hiện dần, chuyển trang mềm */
(function () {
  var KEY = 'ttl-lang';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. Chuyển ngôn ngữ (BA yêu cầu song ngữ Việt - Anh) */
  try {
    var root = document.documentElement;
    var textNodes = document.querySelectorAll('[data-vi]');
    var altNodes = document.querySelectorAll('[data-vi-alt]');
    var ariaNodes = document.querySelectorAll('[data-vi-aria]');
    var capNodes = document.querySelectorAll('[data-vi-caption]');
    // Lưu bản tiếng Anh trước khi motion.js tách chữ
    textNodes.forEach(function (el) { el.setAttribute('data-en', el.innerHTML); });
    altNodes.forEach(function (el) { el.setAttribute('data-en-alt', el.getAttribute('alt') || ''); });
    ariaNodes.forEach(function (el) { el.setAttribute('data-en-aria', el.getAttribute('aria-label') || ''); });
    capNodes.forEach(function (el) { el.setAttribute('data-en-caption', el.getAttribute('data-caption') || ''); });
    var enTitle = document.title;
    var viTitle = root.getAttribute('data-vi-title') || enTitle;
    var metaDesc = document.querySelector('meta[name="description"]');
    var enDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    var viDesc = root.getAttribute('data-vi-desc') || enDesc;

    var apply = function (lang) {
      var vi = lang === 'vi';
      root.setAttribute('lang', vi ? 'vi' : 'en');
      textNodes.forEach(function (el) { el.innerHTML = vi ? el.getAttribute('data-vi') : el.getAttribute('data-en'); });
      altNodes.forEach(function (el) { el.setAttribute('alt', vi ? el.getAttribute('data-vi-alt') : el.getAttribute('data-en-alt')); });
      ariaNodes.forEach(function (el) { el.setAttribute('aria-label', vi ? el.getAttribute('data-vi-aria') : el.getAttribute('data-en-aria')); });
      capNodes.forEach(function (el) { el.setAttribute('data-caption', vi ? el.getAttribute('data-vi-caption') : el.getAttribute('data-en-caption')); });
      document.title = vi ? viTitle : enTitle;
      if (metaDesc) metaDesc.setAttribute('content', vi ? viDesc : enDesc);
      document.querySelectorAll('[data-lang]').forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
      });
    };

    var saved = 'en';
    try { saved = localStorage.getItem(KEY) || 'en'; } catch (e) {}
    if (saved === 'vi') apply('vi');
    else document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === 'en' ? 'true' : 'false');
    });

    document.addEventListener('click', function (ev) {
      var btn = ev.target.closest && ev.target.closest('[data-lang]');
      if (!btn) return;
      var lang = btn.getAttribute('data-lang');
      apply(lang);
      try { localStorage.setItem(KEY, lang); } catch (e) {}
    });
  } catch (e) { console.error('[site] lang', e); }

  /* 2. Đường kẻ mảnh vẽ dần khi vào màn hình */
  try {
    var rules = document.querySelectorAll('[data-rule]');
    if (reduce || !('IntersectionObserver' in window)) {
      rules.forEach(function (r) { r.classList.add('is-drawn'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-drawn'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px' });
      rules.forEach(function (r) { io.observe(r); });
    }
  } catch (e) { console.error('[site] rules', e); }

  /* 3. Chuyển trang mềm giữa các trang của website */
  try {
    if (!reduce) {
      document.addEventListener('click', function (ev) {
        var a = ev.target.closest && ev.target.closest('a[href]');
        if (!a || ev.defaultPrevented || ev.metaKey || ev.ctrlKey || ev.shiftKey || a.target === '_blank') return;
        var href = a.getAttribute('href');
        if (!href || href.charAt(0) === '#' || /^(tel:|mailto:|https?:)/.test(href) || href.indexOf('.html') === -1) return;
        if (a.hasAttribute('data-lightbox')) return;
        var samePage = href.split('#')[0] === '' ;
        if (samePage) return;
        ev.preventDefault();
        document.body.classList.add('is-leaving');
        setTimeout(function () { window.location.href = a.href; }, 360);
      });
      window.addEventListener('pageshow', function (e) { if (e.persisted) document.body.classList.remove('is-leaving'); });
    }
  } catch (e) { console.error('[site] transition', e); }
})();
