/* NOCTURNE — logic riêng: chuyển ngữ VI/EN (lưu lựa chọn) + dự phòng ảnh lỗi */
(function () {
  'use strict';

  /* ---------- Chuyển ngữ VI / EN ---------- */
  try {
    var KEY = 'nocturne-lang';
    var html = document.documentElement;
    var texts = Array.prototype.slice.call(document.querySelectorAll('[data-en]'));
    var alts = Array.prototype.slice.call(document.querySelectorAll('[data-en-alt]'));
    var arias = Array.prototype.slice.call(document.querySelectorAll('[data-en-aria]'));
    var caps = Array.prototype.slice.call(document.querySelectorAll('[data-en-caption]'));
    var meta = document.querySelector('meta[name="description"]');

    // Ghi lại bản tiếng Việt gốc trước khi motion.js tách chữ
    texts.forEach(function (el) { el.setAttribute('data-vi', el.innerHTML); });
    alts.forEach(function (el) { el.setAttribute('data-vi-alt', el.getAttribute('alt') || ''); });
    arias.forEach(function (el) { el.setAttribute('data-vi-aria', el.getAttribute('aria-label') || ''); });
    caps.forEach(function (el) { el.setAttribute('data-vi-caption', el.getAttribute('data-caption') || ''); });
    var viTitle = document.title;
    var viDesc = meta ? meta.getAttribute('content') : '';

    function apply(lang, first) {
      var en = lang === 'en';
      if (!(first && !en)) {
        texts.forEach(function (el) { el.innerHTML = en ? el.getAttribute('data-en') : el.getAttribute('data-vi'); });
      }
      alts.forEach(function (el) { el.setAttribute('alt', en ? el.getAttribute('data-en-alt') : el.getAttribute('data-vi-alt')); });
      arias.forEach(function (el) { el.setAttribute('aria-label', en ? el.getAttribute('data-en-aria') : el.getAttribute('data-vi-aria')); });
      caps.forEach(function (el) { el.setAttribute('data-caption', en ? el.getAttribute('data-en-caption') : el.getAttribute('data-vi-caption')); });
      document.title = en && html.getAttribute('data-title-en') ? html.getAttribute('data-title-en') : viTitle;
      if (meta) meta.setAttribute('content', en && html.getAttribute('data-desc-en') ? html.getAttribute('data-desc-en') : viDesc);
      html.setAttribute('lang', en ? 'en' : 'vi');
      document.querySelectorAll('[data-lang-set]').forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-lang-set') === lang ? 'true' : 'false');
      });
    }

    var saved = 'vi';
    try { saved = localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch (e) {}
    apply(saved, true);

    document.querySelectorAll('[data-lang-set]').forEach(function (b) {
      b.addEventListener('click', function () {
        var lang = b.getAttribute('data-lang-set');
        try { localStorage.setItem(KEY, lang); } catch (e) {}
        apply(lang, false);
      });
    });
  } catch (e) { console.error('[site] lang', e); }

  /* ---------- Ảnh lỗi: ẩn ảnh, giữ nền màu của khung ---------- */
  try {
    document.querySelectorAll('img').forEach(function (img) {
      function broken() { img.classList.add('is-broken'); }
      if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) broken();
      img.addEventListener('error', broken);
    });
  } catch (e) { console.error('[site] img', e); }
})();
