/* TIỆM BÁNH MỘC MIÊN — chuyển ngôn ngữ Anh / Việt (nội dung song ngữ có sẵn trong trang: .en / .vi) */
(function () {
  try {
    var KEY = 'mocmien-lang';
    var root = document.documentElement;
    var body = document.body;
    var titles = { en: document.title, vi: body.getAttribute('data-title-vi') || document.title };
    var meta = document.querySelector('meta[name="description"]');
    var descs = { en: meta ? meta.getAttribute('content') : '', vi: body.getAttribute('data-desc-vi') || '' };

    function apply(lang) {
      if (lang !== 'vi') lang = 'en';
      root.setAttribute('lang', lang);
      document.title = titles[lang];
      if (meta && descs[lang]) meta.setAttribute('content', descs[lang]);
      document.querySelectorAll('img[data-alt-vi]').forEach(function (img) {
        if (!img.hasAttribute('data-alt-en')) img.setAttribute('data-alt-en', img.getAttribute('alt') || '');
        img.setAttribute('alt', img.getAttribute(lang === 'vi' ? 'data-alt-vi' : 'data-alt-en'));
      });
      document.querySelectorAll('[data-label-vi]').forEach(function (el) {
        if (!el.hasAttribute('data-label-en')) el.setAttribute('data-label-en', el.getAttribute('aria-label') || '');
        el.setAttribute('aria-label', el.getAttribute(lang === 'vi' ? 'data-label-vi' : 'data-label-en'));
      });
      document.querySelectorAll('[data-caption-vi]').forEach(function (el) {
        if (!el.hasAttribute('data-caption-en')) el.setAttribute('data-caption-en', el.getAttribute('data-caption') || '');
        el.setAttribute('data-caption', el.getAttribute(lang === 'vi' ? 'data-caption-vi' : 'data-caption-en'));
      });
      document.querySelectorAll('[data-lang-set]').forEach(function (btn) {
        var on = btn.getAttribute('data-lang-set') === lang;
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        btn.classList.toggle('is-active', on);
      });
      try { localStorage.setItem(KEY, lang); } catch (e) {}
    }

    document.addEventListener('click', function (ev) {
      var btn = ev.target.closest && ev.target.closest('[data-lang-set]');
      if (!btn) return;
      ev.preventDefault();
      apply(btn.getAttribute('data-lang-set'));
    });

    apply(root.getAttribute('lang'));
  } catch (e) { console.error('[site] lang', e); }
})();
