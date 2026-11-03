/* GEARFORGE - logic riêng: tìm kiếm sản phẩm + cửa sổ giới thiệu nhanh */
(function () {
  function norm(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
  }

  // Tìm kiếm trong bộ sưu tập
  document.querySelectorAll('#catalog').forEach(function (root) {
    try {
      var input = root.querySelector('[data-search]');
      var items = Array.prototype.slice.call(root.querySelectorAll('[data-category]'));
      var empty = root.querySelector('[data-empty]');
      var count = root.querySelector('[data-result-count]');
      var update = function () {
        var shown = items.filter(function (it) {
          return !it.classList.contains('no-match') && !it.classList.contains('is-gone') && !it.classList.contains('is-out');
        }).length;
        if (empty) empty.hidden = shown !== 0;
        if (count) count.textContent = shown;
      };
      if (input) {
        input.addEventListener('input', function () {
          var q = norm(input.value.trim());
          items.forEach(function (it) {
            var hay = norm(it.getAttribute('data-keywords') + ' ' + it.textContent);
            it.classList.toggle('no-match', q !== '' && hay.indexOf(q) < 0);
          });
          update();
        });
      }
      root.querySelectorAll('[data-filter]').forEach(function (b) {
        b.addEventListener('click', function () { setTimeout(update, 380); });
      });
      root.querySelectorAll('[data-reset-search]').forEach(function (b) {
        b.addEventListener('click', function () {
          if (input) { input.value = ''; input.dispatchEvent(new Event('input')); }
          var all = root.querySelector('[data-filter="all"]');
          if (all) all.click();
        });
      });
      setTimeout(update, 400);
    } catch (e) { console.error('[site] #catalog', e); }
  });

  // Cửa sổ giới thiệu nhanh sản phẩm
  document.querySelectorAll('#quickview').forEach(function (dlg) {
    try {
      document.addEventListener('click', function (ev) {
        var btn = ev.target.closest('[data-modal-open="quickview"]');
        if (!btn) return;
        var set = function (sel, val) { var el = dlg.querySelector(sel); if (el) el.textContent = val || ''; };
        set('[data-qv="name"]', btn.getAttribute('data-qv-name'));
        set('[data-qv="code"]', btn.getAttribute('data-qv-code'));
        set('[data-qv="type"]', btn.getAttribute('data-qv-type'));
        set('[data-qv="desc"]', btn.getAttribute('data-qv-desc'));
        set('[data-qv="material"]', btn.getAttribute('data-qv-material'));
        set('[data-qv="fit"]', btn.getAttribute('data-qv-fit'));
        var img = dlg.querySelector('[data-qv="img"]');
        if (img) { img.src = btn.getAttribute('data-qv-img'); img.alt = btn.getAttribute('data-qv-alt') || ''; }
      }, true);
    } catch (e) { console.error('[site] #quickview', e); }
  });
})();
