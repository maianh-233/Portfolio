/* Hero slider: directional wipe + slow zoom, outgoing text lifts out before the next lines rise,
   autoplay + arrows + dots + swipe + keyboard. */
(function () {
  function init() {
    var hero = document.getElementById('hero');
    if (!hero) return;
    var slides = [].slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var copies = [].slice.call(hero.querySelectorAll('[data-hero-copy]'));
    var dots = [].slice.call(hero.querySelectorAll('[data-hero-dot]'));
    var count = hero.querySelector('[data-hero-count]');
    var media = hero.querySelector('[data-hero-media]');
    var n = slides.length, cur = -1, timer = null, leaveTimer = null, paused = false;
    var MS = 6500;
    var WIPE = 1250; // matches the hs-wipe animation in index.html
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    hero.style.setProperty('--hs-ms', MS + 'ms');

    function setState(list, i, prev) {
      list.forEach(function (el, k) {
        el.classList.toggle('is-active', k === i);
        el.classList.toggle('is-leaving', k === prev);
        el.setAttribute('aria-hidden', k === i ? 'false' : 'true');
      });
    }

    function go(i, dir) {
      i = (i + n) % n;
      if (i === cur) return;
      var prev = cur;
      hero.setAttribute('data-dir', dir || (i > prev ? 'next' : 'prev'));
      cur = i;
      setState(slides, i, prev);
      setState(copies, i, prev);
      // Outgoing slide stays under the wipe, then is released
      clearTimeout(leaveTimer);
      leaveTimer = setTimeout(function () {
        slides.concat(copies).forEach(function (el) { el.classList.remove('is-leaving'); });
        hero.classList.remove('hs-first');
      }, WIPE + 100);
      dots.forEach(function (d, k) {
        d.classList.remove('is-active');
        d.setAttribute('aria-selected', k === i ? 'true' : 'false');
      });
      // restart the progress bar animation on the new dot only
      if (dots[i]) { void dots[i].offsetWidth; dots[i].classList.add('is-active'); }
      if (count) count.textContent = (i < 9 ? '0' : '') + (i + 1);
      schedule();
    }
    function schedule() {
      clearTimeout(timer);
      if (reduce || paused) return;
      timer = setTimeout(function () { go(cur + 1, 'next'); }, MS);
    }
    function pause(on) {
      paused = on;
      hero.classList.toggle('hs-paused', on);
      if (on) clearTimeout(timer); else schedule();
    }

    var prevBtn = hero.querySelector('[data-hero-prev]');
    var nextBtn = hero.querySelector('[data-hero-next]');
    if (prevBtn) prevBtn.addEventListener('click', function () { go(cur - 1, 'prev'); });
    if (nextBtn) nextBtn.addEventListener('click', function () { go(cur + 1, 'next'); });
    dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); }); });

    if (media) {
      media.addEventListener('mouseenter', function () { pause(true); });
      media.addEventListener('mouseleave', function () { pause(false); });
      var x0 = null;
      media.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      media.addEventListener('touchend', function (e) {
        if (x0 === null) return;
        var dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1), dx < 0 ? 'next' : 'prev');
        x0 = null;
      });
    }
    hero.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') go(cur + 1, 'next');
      if (e.key === 'ArrowLeft') go(cur - 1, 'prev');
    });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { clearTimeout(timer); return; }
      // Back on the tab: restart the bar so it matches the fresh timer
      var d = dots[cur];
      if (d) { d.classList.remove('is-active'); void d.offsetWidth; d.classList.add('is-active'); }
      schedule();
    });

    // First slide fades in (no wipe) and the copy rises a little sooner than on later slides
    hero.classList.add('hs-first');
    // Let the first frame paint hidden, then reveal so the text rises on load too
    requestAnimationFrame(function () { requestAnimationFrame(function () { go(0); }); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
