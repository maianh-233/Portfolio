/* ROOTS ORGANIC HAIR - logic riêng: chuyển ngôn ngữ VI / EN, đồng bộ lightbox với bộ lọc */

/* ---------- Song ngữ ----------
   Bản tiếng Việt nằm sẵn trong HTML. Bản tiếng Anh nằm trong data-en (nội dung),
   data-en-alt, data-en-aria-label, data-en-caption, data-en-content, data-en-placeholder.
   Lựa chọn lưu trong localStorage để giữ khi chuyển trang, không đổi URL. */
(function () {
  try {
    var KEY = 'roots-lang';
    var ATTRS = ['alt', 'aria-label', 'data-caption', 'content', 'placeholder', 'title'];
    var store = {
      get: function () { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
      set: function (v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
    };

    function apply(lang) {
      var en = lang === 'en';
      document.querySelectorAll('[data-en]').forEach(function (el) {
        if (el._vi === undefined) el._vi = el.innerHTML;
        el.innerHTML = en ? el.getAttribute('data-en') : el._vi;
      });
      ATTRS.forEach(function (a) {
        var key = 'data-en-' + a.replace(/^data-/, '');
        document.querySelectorAll('[' + key + ']').forEach(function (el) {
          var store_ = '_vi_' + a;
          if (el[store_] === undefined) el[store_] = el.getAttribute(a) || '';
          el.setAttribute(a, en ? el.getAttribute(key) : el[store_]);
        });
      });
      document.documentElement.lang = en ? 'en' : 'vi';
      document.querySelectorAll('[data-lang-set]').forEach(function (b) {
        var on = b.getAttribute('data-lang-set') === lang;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
    }

    var current = store.get() === 'en' ? 'en' : 'vi';
    if (current === 'en') apply('en'); else apply('vi');

    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-lang-set]');
      if (!b) return;
      e.preventDefault();
      var lang = b.getAttribute('data-lang-set');
      if (lang === current) return;
      current = lang;
      store.set(lang);
      apply(lang);
    });
  } catch (e) { console.error('[site] lang', e); }
})();

/* ---------- Hair Journal: lightbox chỉ đi qua ảnh đang hiển thị theo bộ lọc ---------- */
document.querySelectorAll('#hair-gallery').forEach(function (root) {
  try {
    var sync = function () {
      root.querySelectorAll('[data-category]').forEach(function (it) {
        var a = it.querySelector('a[data-lightbox], a[data-lightbox-off]');
        if (!a) return;
        var hidden = it.classList.contains('is-out') || it.classList.contains('is-gone');
        if (hidden) { a.setAttribute('data-lightbox-off', 'journal'); a.setAttribute('data-lightbox', 'journal-off'); }
        else { a.setAttribute('data-lightbox', 'journal'); }
      });
    };
    root.querySelectorAll('[data-filter]').forEach(function (b) {
      b.addEventListener('click', function () { setTimeout(sync, 0); });
    });
  } catch (e) { console.error('[site] #hair-gallery', e); }
});

/* ---------- Hair Journal: mở đúng bài khi vào từ link #article-... ---------- */
(function () {
  var root = document.getElementById('articles');
  if (!root) return;

  function openFromHash() {
    if (!location.hash) return;
    var item = null;
    try { item = root.querySelector(location.hash); } catch (e) { return; }
    if (!item || !item.hasAttribute('data-acc-item')) return;
    if (item.classList.contains('is-open')) return;
    var trigger = item.querySelector('[data-acc-trigger]');
    if (trigger) trigger.click();
  }

  if (document.readyState === 'loading') {
    // ui.js khởi tạo accordion ở DOMContentLoaded trước, nên chờ sau một nhịp
    document.addEventListener('DOMContentLoaded', function () { setTimeout(openFromHash, 60); });
  } else {
    setTimeout(openFromHash, 60);
  }
  window.addEventListener('hashchange', openFromHash);
})();
