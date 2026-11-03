/* TIDELINE — chuyển đổi VI / EN (lưu lựa chọn khi chuyển trang / tải lại) + ảnh dự phòng khi tải lỗi.
   Quy ước: chữ mặc định trong HTML là tiếng Việt; bản tiếng Anh nằm ở data-en (nội dung) và data-en-<thuộc tính> (alt, aria-label, content, data-caption). */
(function () {
  var KEY = 'tideline-lang';
  var ATTRS = ['alt', 'aria-label', 'content', 'data-caption', 'title'];
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function read() { try { return localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch (e) { return 'vi'; } }
  function store(l) { try { localStorage.setItem(KEY, l); } catch (e) {} }

  function apply(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-en]').forEach(function (el) {
      if (!el.hasAttribute('data-vi')) el.setAttribute('data-vi', el.innerHTML);
      el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-vi');
    });
    ATTRS.forEach(function (a) {
      document.querySelectorAll('[data-en-' + a + ']').forEach(function (el) {
        var keep = 'data-vi-' + a;
        if (!el.hasAttribute(keep)) el.setAttribute(keep, el.getAttribute(a) || '');
        el.setAttribute(a, lang === 'en' ? el.getAttribute('data-en-' + a) : el.getAttribute(keep));
      });
    });
    document.querySelectorAll('[data-lang-set]').forEach(function (b) {
      var on = b.getAttribute('data-lang-set') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  try {
    apply(read());
  } catch (e) { console.error('[site] lang', e); }
  document.documentElement.classList.remove('lang-pending');

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest && ev.target.closest('[data-lang-set]');
    if (!btn) return;
    var lang = btn.getAttribute('data-lang-set');
    if (lang === document.documentElement.getAttribute('lang')) return;
    store(lang);
    if (reduce) { apply(lang); return; }
    document.body.classList.add('lang-out');
    setTimeout(function () {
      apply(lang);
      document.body.classList.remove('lang-out');
    }, 260);
  });

  // Ảnh dự phòng: ảnh lỗi → khung giữ nền Sandstone + chữ TIDELINE, bố cục không vỡ
  document.querySelectorAll('.frame > img').forEach(function (img) {
    function fail() { img.parentElement.classList.add('img-fallback'); }
    if (img.complete && img.getAttribute('src') && img.naturalWidth === 0) fail();
    else img.addEventListener('error', fail);
  });
})();
