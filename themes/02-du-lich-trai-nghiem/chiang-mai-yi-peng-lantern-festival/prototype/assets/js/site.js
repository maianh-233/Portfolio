/* Saeng Journeys - page-specific logic: lantern fields + package prefill */
(function () {
  // Lantern fields: [data-lanterns="N"] -> N glowing lanterns in 3 depth layers (fewer on mobile)
  document.querySelectorAll('[data-lanterns]').forEach(function (root) {
    try {
      var total = parseInt(root.getAttribute('data-lanterns'), 10) || 16;
      if (window.matchMedia('(max-width: 767px)').matches) total = Math.ceil(total * 0.45);
      var seed = parseInt(root.getAttribute('data-seed'), 10) || 7;
      var layer = root.getAttribute('data-lantern-layer') || 'mix';
      var rnd = function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
      var frag = document.createDocumentFragment();
      for (var i = 0; i < total; i++) {
        var depth = layer !== 'mix' ? layer : (i % 6 === 0 ? 'near' : (i % 3 === 0 ? 'mid' : 'far'));
        var size = depth === 'near' ? 26 + rnd() * 16 : depth === 'mid' ? 13 + rnd() * 8 : 5 + rnd() * 5;
        var dur = depth === 'near' ? 26 + rnd() * 10 : depth === 'mid' ? 38 + rnd() * 14 : 55 + rnd() * 25;
        var el = document.createElement('span');
        el.className = 'lantern';
        el.setAttribute('aria-hidden', 'true');
        el.style.setProperty('--x', (rnd() * 96).toFixed(1) + '%');
        el.style.setProperty('--y', (8 + rnd() * 70).toFixed(1) + '%');
        el.style.setProperty('--s', size.toFixed(1) + 'px');
        el.style.setProperty('--d', dur.toFixed(1) + 's');
        el.style.setProperty('--delay', (-rnd() * dur).toFixed(1) + 's');
        el.style.setProperty('--sw', (3 + rnd() * 3).toFixed(1) + 's');
        el.style.setProperty('--drift', ((rnd() - 0.35) * 120).toFixed(0) + 'px');
        el.style.setProperty('--o', depth === 'far' ? (0.45 + rnd() * 0.3).toFixed(2) : depth === 'mid' ? '0.85' : '1');
        el.style.setProperty('--b', depth === 'far' ? '0.6px' : depth === 'near' ? '0.4px' : '0px');
        el.appendChild(document.createElement('i'));
        frag.appendChild(el);
      }
      root.appendChild(frag);
    } catch (e) { console.error('[site] lanterns', e); }
  });

  // "Explore This Journey" -> preselect the package in the planning form
  document.querySelectorAll('#journeys').forEach(function (root) {
    try {
      root.addEventListener('click', function (e) {
        var a = e.target.closest('[data-package]');
        if (!a) return;
        var sel = document.getElementById('f-package');
        if (sel) sel.value = a.getAttribute('data-package');
      });
    } catch (e) { console.error('[site] #journeys', e); }
  });
})();
