/* CLINIQUE 24/7 - logic riêng: công tắc ngôn ngữ (bản tiếng Việt chưa dựng) */
document.querySelectorAll('[data-lang-vi]').forEach(function (btn) {
  try {
    btn.addEventListener('click', function () {
      if (window.UI && UI.toast) {
        UI.toast('The Vietnamese version is in preparation. This demo shows the English site.', 'info');
      }
    });
  } catch (e) { console.error('[site] lang switch', e); }
});
