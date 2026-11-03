/* DERMA CLINIC — logic riêng: công tắc Việt / English và chọn sẵn dịch vụ trong form đặt lịch.
   HTML mặc định tiếng Việt; bản tiếng Anh nằm trong data-en (chữ) và data-en-<thuộc tính> (placeholder, alt, aria-label, title, content).
   Đổi ngôn ngữ: lưu lựa chọn rồi tải lại trang để <html lang> và thông báo form của ui.js khớp ngôn ngữ. */
(function () {
  var KEY = 'derma-lang';
  var lang = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'vi';

  // Áp bản tiếng Anh
  try {
    if (lang === 'en') {
      document.querySelectorAll('[data-en]').forEach(function (el) { el.textContent = el.getAttribute('data-en'); });
      ['placeholder', 'aria-label', 'alt', 'title', 'content', 'label'].forEach(function (a) {
        document.querySelectorAll('[data-en-' + a + ']').forEach(function (el) { el.setAttribute(a, el.getAttribute('data-en-' + a)); });
      });
    }
  } catch (e) { console.error('[site] i18n', e); }

  // Công tắc ngôn ngữ
  try {
    document.querySelectorAll('[data-lang-set]').forEach(function (btn) {
      var target = btn.getAttribute('data-lang-set');
      btn.setAttribute('aria-pressed', target === lang ? 'true' : 'false');
      btn.addEventListener('click', function () {
        if (target === lang) return;
        try { localStorage.setItem(KEY, target); } catch (e) { /* bỏ qua */ }
        location.reload();
      });
    });
  } catch (e) { console.error('[site] lang switch', e); }

  // Chọn sẵn dịch vụ khi bấm Đặt lịch từ một dịch vụ cụ thể
  document.querySelectorAll('#booking').forEach(function (root) {
    try {
      var select = root.querySelector('select[name="service"]');
      document.addEventListener('click', function (ev) {
        var btn = ev.target.closest('[data-modal-open="booking"]');
        if (!btn || !select) return;
        var v = btn.getAttribute('data-service');
        select.value = v || '';
      }, true);
      var date = root.querySelector('input[type="date"]');
      if (date) date.min = new Date().toISOString().slice(0, 10);
    } catch (e) { console.error('[site] #booking', e); }
  });
})();
