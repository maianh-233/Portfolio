/* VERDANT SANCTUARY — chuyển ngôn ngữ VI/EN (lưu khi đổi trang / tải lại) + dự phòng ảnh lỗi */
(function () {
  var KEY = 'vs-lang';
  var ATTRS = [['data-en-alt', 'alt'], ['data-en-aria-label', 'aria-label'], ['data-en-placeholder', 'placeholder'], ['data-en-caption', 'data-caption'], ['data-en-title', 'title']];

  function stored() {
    try { return localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch (e) { return 'vi'; }
  }
  function save(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function apply(lang) {
    try {
      document.documentElement.lang = lang;
      document.querySelectorAll('[data-en]').forEach(function (el) {
        if (el.dataset.vi === undefined) el.dataset.vi = el.innerHTML;
        el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.dataset.vi;
        // Motion tách tiêu đề thành từng từ và đặt aria-label; đổi ngôn ngữ thì bỏ nhãn cũ
        if (el.hasAttribute('data-split')) el.removeAttribute('aria-label');
      });
      ATTRS.forEach(function (pair) {
        document.querySelectorAll('[' + pair[0] + ']').forEach(function (el) {
          var viKey = 'vi' + pair[1].replace(/-/g, '');
          if (el.dataset[viKey] === undefined) el.dataset[viKey] = el.getAttribute(pair[1]) || '';
          el.setAttribute(pair[1], lang === 'en' ? el.getAttribute(pair[0]) : el.dataset[viKey]);
        });
      });
      var body = document.body;
      if (body.dataset.titleVi === undefined) body.dataset.titleVi = document.title;
      if (body.dataset.titleEn) document.title = lang === 'en' ? body.dataset.titleEn : body.dataset.titleVi;
      var meta = document.querySelector('meta[name="description"]');
      if (meta && meta.dataset.en) {
        if (meta.dataset.vi === undefined) meta.dataset.vi = meta.content;
        meta.content = lang === 'en' ? meta.dataset.en : meta.dataset.vi;
      }
      document.querySelectorAll('[data-lang-set]').forEach(function (btn) {
        btn.setAttribute('aria-pressed', btn.getAttribute('data-lang-set') === lang ? 'true' : 'false');
      });
    } catch (e) { console.error('[site] lang', e); }
  }

  // Chạy ngay (trước motion.js) để lưu chữ gốc trước khi tách chữ
  apply(stored());

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest && ev.target.closest('[data-lang-set]');
    if (!btn) return;
    var lang = btn.getAttribute('data-lang-set');
    if (lang === document.documentElement.lang) return;
    save(lang);
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { apply(lang); return; }
    document.body.classList.add('lang-switching');
    setTimeout(function () {
      apply(lang);
      document.body.classList.remove('lang-switching');
    }, 220);
  });

  // Dự phòng ảnh lỗi: ẩn ảnh, giữ nền màu thương hiệu của khung
  document.querySelectorAll('img').forEach(function (img) {
    function broken() { img.classList.add('is-broken'); }
    if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) broken();
    img.addEventListener('error', broken);
  });
})();
