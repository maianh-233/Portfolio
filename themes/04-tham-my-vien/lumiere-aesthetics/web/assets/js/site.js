/* LUMIÈRE AESTHETICS — logic riêng: chuyển ngôn ngữ Việt / English.
   Nội dung tiếng Việt viết sẵn trong HTML; bản tiếng Anh nằm ở data-en (nội dung) và data-en-<thuộc tính>.
   Đổi ngôn ngữ → lưu lựa chọn rồi tải lại trang, để ui.js báo lỗi form đúng ngôn ngữ (ui.js đọc <html lang> khi tải). */
(function () {
  var KEY = 'lumiere-lang';
  var root = document.documentElement;
  var lang = 'vi';
  try { lang = localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch (e) { /* bỏ qua */ }

  // Áp bản tiếng Anh
  try {
    if (lang === 'en') {
      document.querySelectorAll('[data-en]').forEach(function (el) {
        el.innerHTML = el.getAttribute('data-en');
      });
      ['placeholder', 'alt', 'aria-label', 'content', 'title', 'data-caption'].forEach(function (attr) {
        document.querySelectorAll('[data-en-' + attr + ']').forEach(function (el) {
          el.setAttribute(attr, el.getAttribute('data-en-' + attr));
        });
      });
    }
    root.setAttribute('lang', lang);
  } catch (e) { console.error('[site] i18n', e); }
  root.classList.remove('i18n-wait');

  // Nút chuyển ngôn ngữ
  document.querySelectorAll('[data-lang-switch]').forEach(function (wrap) {
    try {
      wrap.querySelectorAll('[data-lang]').forEach(function (btn) {
        var on = btn.getAttribute('data-lang') === lang;
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        if (on) btn.classList.add('is-active');
        btn.addEventListener('click', function () {
          var next = btn.getAttribute('data-lang');
          if (next === lang) return;
          try { localStorage.setItem(KEY, next); } catch (e) { /* bỏ qua */ }
          location.reload();
        });
      });
    } catch (e) { console.error('[site] lang-switch', e); }
  });
})();
