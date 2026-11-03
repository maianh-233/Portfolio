/* Đường kẻ mảnh mở rộng khi vào màn hình (data-rule) */
(function () {
  try {
    var rules = document.querySelectorAll('[data-rule]');
    if (!rules.length) return;
    if (!('IntersectionObserver' in window)) {
      rules.forEach(function (r) { r.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    rules.forEach(function (r) { io.observe(r); });
  } catch (e) { console.error('[site] data-rule', e); }
})();
