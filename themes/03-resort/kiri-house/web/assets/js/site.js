/* KIRI HOUSE: chuyển ngôn ngữ VI / EN + ảnh dự phòng. Nạp trước motion.js. */
(function () {
  /* ---- VI / EN ---- */
  try {
    var KEY = 'kiri-lang';
    var texts = [].slice.call(document.querySelectorAll('[data-en]'));
    var alts = [].slice.call(document.querySelectorAll('[data-en-alt]'));
    var labels = [].slice.call(document.querySelectorAll('[data-en-label]'));
    texts.forEach(function (el) { el.setAttribute('data-vi', el.innerHTML); });
    alts.forEach(function (el) { el.setAttribute('data-vi-alt', el.getAttribute('alt') || ''); });
    labels.forEach(function (el) { el.setAttribute('data-vi-label', el.getAttribute('aria-label') || ''); });
    var body = document.body;
    var meta = document.querySelector('meta[name="description"]');
    var vi = { title: document.title, desc: meta ? meta.getAttribute('content') : '' };

    function apply(lang) {
      var en = lang === 'en';
      texts.forEach(function (el) { el.innerHTML = el.getAttribute(en ? 'data-en' : 'data-vi'); });
      alts.forEach(function (el) { el.setAttribute('alt', el.getAttribute(en ? 'data-en-alt' : 'data-vi-alt')); });
      labels.forEach(function (el) { el.setAttribute('aria-label', el.getAttribute(en ? 'data-en-label' : 'data-vi-label')); });
      document.documentElement.setAttribute('lang', en ? 'en' : 'vi');
      document.title = en ? (body.getAttribute('data-title-en') || vi.title) : vi.title;
      if (meta) meta.setAttribute('content', en ? (body.getAttribute('data-desc-en') || vi.desc) : vi.desc);
      [].forEach.call(document.querySelectorAll('[data-lang-set]'), function (b) {
        var on = b.getAttribute('data-lang-set') === lang;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }

    var saved = 'vi';
    try { saved = localStorage.getItem(KEY) || 'vi'; } catch (e) {}
    apply(saved === 'en' ? 'en' : 'vi');

    document.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('[data-lang-set]');
      if (!btn) return;
      var lang = btn.getAttribute('data-lang-set');
      try { localStorage.setItem(KEY, lang); } catch (err) {}
      apply(lang);
    });
  } catch (e) { console.error('[site] lang', e); }

  /* ---- Ảnh dự phòng ---- */
  try {
    function fallback(img) {
      if (img.getAttribute('data-failed')) return;
      img.setAttribute('data-failed', '1');
      img.style.opacity = '0';
      var box = document.createElement('div');
      box.className = 'img-fallback';
      box.textContent = img.getAttribute('alt') || 'KIRI HOUSE';
      var parent = img.parentNode;
      if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative';
      parent.appendChild(box);
    }
    [].forEach.call(document.querySelectorAll('img'), function (img) {
      if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) fallback(img);
      img.addEventListener('error', function () { fallback(img); });
    });
  } catch (e) { console.error('[site] img', e); }
})();
