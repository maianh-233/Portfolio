/* Sinh tự động bởi SRS & Prototype Builder — thư viện chuyển động & tương tác. Không sửa tay.
 * JS thuần, chạy được khi mở bằng file://. Chỉ cần gắn thuộc tính data-* vào HTML:
 *
 *  Cuộn trang
 *   data-reveal="up|down|left|right|fade|zoom|blur"  hiện dần khi cuộn tới (data-reveal-delay="150" ms)
 *   data-reveal-stagger="80"                         đặt ở khối cha: các con trực tiếp hiện lần lượt (ms giữa mỗi con)
 *   data-split="words|chars"                          tách tiêu đề thành từng chữ, hiện lần lượt
 *   data-parallax="0.2"                               trôi chậm / nhanh hơn trang khi cuộn (âm = ngược chiều)
 *   data-scrub                                        gán biến CSS --p (0 → 1) theo tiến độ phần tử đi qua màn hình,
 *                                                     dùng trong style: transform: scale(calc(.9 + var(--p) * .1))
 *   data-count-to="1284" (data-suffix="+", data-decimals="1")  đếm số khi hiện ra (định dạng vi-VN)
 *   data-scroll-progress                              thanh tiến độ đọc trang (scaleX 0 → 1)
 *   data-header="shrink|hide"                         header: thêm class is-scrolled; "hide" ẩn khi cuộn xuống
 *   data-marquee="40"                                 dải chạy ngang vô tận (px/giây), dừng khi rê chuột
 *   data-drag-scroll                                  vùng cuộn ngang kéo được bằng chuột
 *
 *  Chuột (chỉ trên máy có chuột; điện thoại tự bỏ qua)
 *   data-tilt="8"                                     nghiêng 3D theo chuột (độ tối đa); data-tilt-glare thêm vệt sáng
 *   data-magnetic="0.3"                               nút bị "hút" nhẹ theo chuột
 *   data-spotlight (data-spotlight-color="rgba(...)") vầng sáng chạy theo chuột trong khối
 *   data-follow="0.08"                                phần tử trang trí trôi theo chuột trong khối cha
 *   <body data-cursor="dot|ring">                     con trỏ tùy biến; data-cursor-label="Xem" trên phần tử để hiện chữ
 *   data-ripple                                       gợn sóng khi bấm
 *
 *  Tôn trọng prefers-reduced-motion: tắt chuyển động, mọi nội dung hiện ngay.
 *  Nội dung render sau (JS) được tự nhận; gọi Motion.refresh() nếu cần.
 */
(function () {
  if (window.Motion) return;
  var doc = document.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;
  var EASE = 'cubic-bezier(.16,1,.3,1)';

  var css =
    'html.motion-ready{scroll-behavior:smooth}' +
    '[id]{scroll-margin-top:88px}' +
    'html.motion-ready [data-reveal]:not(.is-in),html.motion-ready [data-reveal-stagger]>*:not(.is-in){opacity:0}' +
    'html.motion-ready [data-reveal],html.motion-ready [data-reveal-stagger]>*{transition:opacity .9s ' + EASE + ',transform .9s ' + EASE + ',filter .9s ' + EASE + ';transition-delay:var(--rd,0ms)}' +
    'html.motion-ready [data-reveal="up"]:not(.is-in),html.motion-ready [data-reveal-stagger]>*:not(.is-in){transform:translateY(32px)}' +
    'html.motion-ready [data-reveal="down"]:not(.is-in){transform:translateY(-32px)}' +
    'html.motion-ready [data-reveal="left"]:not(.is-in){transform:translateX(-40px)}' +
    'html.motion-ready [data-reveal="right"]:not(.is-in){transform:translateX(40px)}' +
    'html.motion-ready [data-reveal="zoom"]:not(.is-in){transform:scale(.94)}' +
    'html.motion-ready [data-reveal="blur"]:not(.is-in){filter:blur(12px);transform:translateY(12px)}' +
    '.m-split-w{display:inline-block;overflow:hidden;vertical-align:top}' +
    '.m-split-i{display:inline-block;transition:transform .9s ' + EASE + ',opacity .9s ' + EASE + ';transition-delay:var(--rd,0ms)}' +
    'html.motion-ready [data-split]:not(.is-in) .m-split-i{transform:translateY(105%);opacity:0}' +
    '[data-scroll-progress]{transform-origin:0 50%;transform:scaleX(var(--p,0))}' +
    '[data-header]{transition:transform .4s ' + EASE + ',background-color .3s,box-shadow .3s,padding .3s}' +
    '[data-header].is-hidden{transform:translateY(-110%)}' +
    '[data-marquee]{overflow:hidden}' +
    '.m-marquee-track{display:flex;width:max-content;animation:m-marquee var(--dur,30s) linear infinite}' +
    '[data-marquee]:hover .m-marquee-track{animation-play-state:paused}' +
    '@keyframes m-marquee{to{transform:translateX(-50%)}}' +
    '[data-drag-scroll]{cursor:grab}[data-drag-scroll].is-dragging{cursor:grabbing;user-select:none}' +
    '[data-tilt]{transform-style:preserve-3d;transition:transform .5s ' + EASE + ';will-change:transform}' +
    '[data-tilt].is-tilting{transition:transform .08s linear}' +
    '.m-glare{position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .3s;' +
    'background:radial-gradient(circle at var(--gx,50%) var(--gy,50%),rgba(255,255,255,.35),transparent 60%)}' +
    '[data-tilt]:hover .m-glare{opacity:1}' +
    '[data-magnetic]{transition:transform .5s ' + EASE + '}[data-magnetic].is-near{transition:transform .12s linear}' +
    '[data-spotlight]{position:relative;isolation:isolate}' +
    '[data-spotlight]::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:-1;opacity:0;transition:opacity .4s;' +
    'background:radial-gradient(var(--spot-size,420px) circle at var(--mx,50%) var(--my,50%),var(--spot-color,rgba(255,255,255,.16)),transparent 70%)}' +
    '[data-spotlight]:hover::before{opacity:1}' +
    '[data-follow]{transition:transform .2s linear;will-change:transform}' +
    '.m-cursor{position:fixed;left:0;top:0;z-index:9999;pointer-events:none;border-radius:999px;transform:translate3d(-50%,-50%,0);' +
    'display:grid;place-items:center;font:600 12px/1 system-ui,sans-serif;color:#fff;transition:width .35s ' + EASE + ',height .35s ' + EASE + ',background-color .3s,opacity .3s}' +
    '.m-cursor-dot{width:8px;height:8px;background:currentColor;mix-blend-mode:difference;color:#fff}' +
    '.m-cursor-ring{width:36px;height:36px;border:1.5px solid currentColor;mix-blend-mode:difference;color:#fff}' +
    '.m-cursor.is-hover{width:64px;height:64px}' +
    '.m-cursor.has-label{width:84px;height:84px;background:rgba(17,17,17,.88);mix-blend-mode:normal;border-color:transparent}' +
    'html.m-hide-cursor,html.m-hide-cursor a,html.m-hide-cursor button{cursor:none}' +
    '[data-ripple]{position:relative;overflow:hidden}' +
    '.m-ripple{position:absolute;border-radius:999px;transform:scale(0);background:currentColor;opacity:.25;pointer-events:none;animation:m-ripple .6s ease-out forwards}' +
    '@keyframes m-ripple{to{transform:scale(2.6);opacity:0}}' +
    '@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}' +
    'html{scroll-behavior:auto!important}.m-marquee-track{animation:none!important}}';

  function injectStyle() {
    if (document.getElementById('motion-css')) return;
    var s = document.createElement('style');
    s.id = 'motion-css';
    s.textContent = css;
    (document.head || doc).appendChild(s);
  }
  injectStyle();
  if (!reduce) doc.classList.add('motion-ready');

  var num = function (v, d) { var n = parseFloat(v); return isNaN(n) ? d : n; };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var seen = typeof WeakSet !== 'undefined' ? new WeakSet() : null;
  function once(el, key) {
    var k = 'm' + key;
    if (el.dataset[k]) return false;
    el.dataset[k] = '1';
    return true;
  }

  // ---------- Hiện dần khi cuộn ----------
  var io = 'IntersectionObserver' in window && !reduce
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting || e.boundingClientRect.bottom < 0) reveal(e.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    : null;

  // Phần tử chờ hiện: cuộn nhảy cóc (bấm link menu) qua một phần tử thì IntersectionObserver không báo → kiểm thêm khi cuộn
  var pending = [];
  function reveal(el) {
    if (el.classList.contains('is-in')) return;
    if (io) io.unobserve(el);
    var i = pending.indexOf(el);
    if (i >= 0) pending.splice(i, 1);
    show(el);
  }

  function show(el) {
    if (el.hasAttribute('data-reveal-stagger')) {
      var step = num(el.getAttribute('data-reveal-stagger'), 80);
      Array.prototype.forEach.call(el.children, function (c, i) {
        c.style.setProperty('--rd', i * step + 'ms');
        c.classList.add('is-in');
      });
    }
    if (el.hasAttribute('data-count-to')) countUp(el);
    el.classList.add('is-in');
  }

  function watch(el) {
    if (!once(el, 'Seen')) return;
    var delay = el.getAttribute('data-reveal-delay');
    if (delay) el.style.setProperty('--rd', num(delay, 0) + 'ms');
    if (io) { io.observe(el); pending.push(el); } else show(el);
  }

  function split(el) {
    if (!once(el, 'Split')) return;
    var mode = el.getAttribute('data-split') || 'words';
    var step = mode === 'chars' ? 25 : 60;
    var i = 0;
    var walk = function (node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var pieces = mode === 'chars' ? Array.from(part) : [part];
            var w = document.createElement('span');
            w.className = 'm-split-w';
            pieces.forEach(function (p) {
              var s = document.createElement('span');
              s.className = 'm-split-i';
              s.style.setProperty('--rd', i++ * step + 'ms');
              s.textContent = p;
              w.appendChild(s);
            });
            frag.appendChild(w);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', el.textContent.trim());
    walk(el);
    watch(el);
  }

  function countUp(el) {
    if (!once(el, 'Counted')) return;
    var to = num(el.getAttribute('data-count-to'), 0);
    var dec = num(el.getAttribute('data-decimals'), 0);
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var fmt = function (v) { return prefix + v.toLocaleString('vi-VN', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix; };
    if (reduce) { el.textContent = fmt(to); return; }
    var t0 = performance.now();
    var dur = num(el.getAttribute('data-duration'), 1600);
    (function tick(t) {
      var p = clamp((t - t0) / dur, 0, 1);
      el.textContent = fmt(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  // ---------- Vòng lặp cuộn: parallax, scrub, thanh tiến độ, header ----------
  var parallax = [], scrubs = [], progress = [], headers = [];
  var lastY = window.scrollY, ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var y = window.scrollY, vh = window.innerHeight;
      var max = Math.max(1, doc.scrollHeight - vh);
      for (var i = pending.length - 1; i >= 0; i--) {
        var pr = pending[i].getBoundingClientRect();
        if (pr.top < vh && (pr.width || pr.height)) reveal(pending[i]);
      }
      progress.forEach(function (el) { el.style.setProperty('--p', (y / max).toFixed(4)); });
      if (!reduce) {
        parallax.forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) return;
          var off = (r.top + r.height / 2 - vh / 2) * -num(el.getAttribute('data-parallax'), 0.2);
          el.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0)';
        });
      }
      scrubs.forEach(function (el) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--p', clamp((vh - r.top) / (vh + r.height), 0, 1).toFixed(4));
      });
      headers.forEach(function (el) {
        el.classList.toggle('is-scrolled', y > 24);
        if (el.getAttribute('data-header') === 'hide' && !reduce) el.classList.toggle('is-hidden', y > lastY && y > 160);
      });
      lastY = y;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // ---------- Dải chạy ngang, kéo để cuộn ----------
  function marquee(el) {
    if (!once(el, 'Marquee') || reduce) return;
    var track = document.createElement('div');
    track.className = 'm-marquee-track';
    while (el.firstChild) track.appendChild(el.firstChild);
    var copy = track.cloneNode(true);
    Array.prototype.forEach.call(copy.childNodes, function (n) { if (n.nodeType === 1) n.setAttribute('aria-hidden', 'true'); });
    while (copy.firstChild) track.appendChild(copy.firstChild);
    el.appendChild(track);
    requestAnimationFrame(function () {
      track.style.setProperty('--dur', (track.scrollWidth / 2 / num(el.getAttribute('data-marquee'), 40)).toFixed(1) + 's');
    });
  }

  function dragScroll(el) {
    if (!once(el, 'Drag') || !finePointer) return;
    var down = false, x0 = 0, s0 = 0, moved = false;
    el.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; moved = false; x0 = e.clientX; s0 = el.scrollLeft; });
    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      if (Math.abs(e.clientX - x0) > 4) { moved = true; el.classList.add('is-dragging'); }
      el.scrollLeft = s0 - (e.clientX - x0);
    });
    window.addEventListener('pointerup', function () { down = false; el.classList.remove('is-dragging'); });
    el.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
  }

  // ---------- Tương tác chuột ----------
  function tilt(el) {
    if (!once(el, 'Tilt') || !finePointer || reduce) return;
    var max = num(el.getAttribute('data-tilt'), 8);
    if (el.hasAttribute('data-tilt-glare')) {
      if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
      var g = document.createElement('span');
      g.className = 'm-glare';
      el.appendChild(g);
    }
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      el.classList.add('is-tilting');
      el.style.transform = 'perspective(900px) rotateX(' + ((0.5 - py) * max).toFixed(2) + 'deg) rotateY(' + ((px - 0.5) * max).toFixed(2) + 'deg)';
      el.style.setProperty('--gx', px * 100 + '%');
      el.style.setProperty('--gy', py * 100 + '%');
    });
    el.addEventListener('pointerleave', function () { el.classList.remove('is-tilting'); el.style.transform = ''; });
  }

  function magnetic(el) {
    if (!once(el, 'Magnet') || !finePointer || reduce) return;
    var k = num(el.getAttribute('data-magnetic'), 0.3);
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      el.classList.add('is-near');
      el.style.transform = 'translate3d(' + ((e.clientX - r.left - r.width / 2) * k).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * k).toFixed(1) + 'px,0)';
    });
    el.addEventListener('pointerleave', function () { el.classList.remove('is-near'); el.style.transform = ''; });
  }

  function spotlight(el) {
    if (!once(el, 'Spot') || !finePointer) return;
    var c = el.getAttribute('data-spotlight-color');
    if (c) el.style.setProperty('--spot-color', c);
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', e.clientX - r.left + 'px');
      el.style.setProperty('--my', e.clientY - r.top + 'px');
    });
  }

  function follow(el) {
    if (!once(el, 'Follow') || !finePointer || reduce) return;
    var k = num(el.getAttribute('data-follow'), 0.08);
    var host = el.parentElement || document.body;
    host.addEventListener('pointermove', function (e) {
      var r = host.getBoundingClientRect();
      el.style.transform = 'translate3d(' + ((e.clientX - r.left - r.width / 2) * k).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * k).toFixed(1) + 'px,0)';
    });
    host.addEventListener('pointerleave', function () { el.style.transform = ''; });
  }

  function ripple(el) {
    if (!once(el, 'Ripple') || reduce) return;
    el.addEventListener('pointerdown', function (e) {
      var r = el.getBoundingClientRect();
      var size = Math.max(r.width, r.height);
      var s = document.createElement('span');
      s.className = 'm-ripple';
      s.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (e.clientX - r.left - size / 2) + 'px;top:' + (e.clientY - r.top - size / 2) + 'px';
      el.appendChild(s);
      setTimeout(function () { s.remove(); }, 650);
    });
  }

  var cursor = null;
  function setupCursor() {
    var kind = document.body && document.body.getAttribute('data-cursor');
    if (!kind || cursor || !finePointer || reduce) return;
    cursor = document.createElement('div');
    cursor.className = 'm-cursor ' + (kind === 'dot' ? 'm-cursor-dot' : 'm-cursor-ring');
    cursor.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursor);
    doc.classList.add('m-hide-cursor');
    var x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    window.addEventListener('pointermove', function (e) { x = e.clientX; y = e.clientY; cursor.style.opacity = '1'; });
    document.addEventListener('pointerleave', function () { cursor.style.opacity = '0'; });
    (function loop() {
      cx += (x - cx) * 0.2; cy += (y - cy) * 0.2;
      cursor.style.transform = 'translate3d(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px,0) translate(-50%,-50%)';
      requestAnimationFrame(loop);
    })();
    document.addEventListener('pointerover', function (e) {
      var t = e.target.closest && e.target.closest('a,button,[data-cursor-label],[data-cursor-hover],input,select,textarea,label');
      var label = t && t.getAttribute('data-cursor-label');
      cursor.classList.toggle('is-hover', Boolean(t));
      cursor.classList.toggle('has-label', Boolean(label));
      cursor.textContent = label || '';
    });
  }

  // ---------- Khởi tạo ----------
  var SELECTOR = '[data-reveal],[data-reveal-stagger],[data-split],[data-parallax],[data-scrub],[data-count-to],[data-scroll-progress],[data-header],' +
    '[data-marquee],[data-drag-scroll],[data-tilt],[data-magnetic],[data-spotlight],[data-follow],[data-ripple]';

  function setup(el) {
    if (seen) { if (seen.has(el)) return; seen.add(el); }
    if (el.hasAttribute('data-split')) split(el);
    else if (el.hasAttribute('data-reveal') || el.hasAttribute('data-reveal-stagger') || el.hasAttribute('data-count-to')) watch(el);
    if (el.hasAttribute('data-parallax') && once(el, 'Px')) parallax.push(el);
    if (el.hasAttribute('data-scrub') && once(el, 'Scrub')) scrubs.push(el);
    if (el.hasAttribute('data-scroll-progress') && once(el, 'Prog')) progress.push(el);
    if (el.hasAttribute('data-header') && once(el, 'Head')) headers.push(el);
    if (el.hasAttribute('data-marquee')) marquee(el);
    if (el.hasAttribute('data-drag-scroll')) dragScroll(el);
    if (el.hasAttribute('data-tilt')) tilt(el);
    if (el.hasAttribute('data-magnetic')) magnetic(el);
    if (el.hasAttribute('data-spotlight')) spotlight(el);
    if (el.hasAttribute('data-follow')) follow(el);
    if (el.hasAttribute('data-ripple')) ripple(el);
  }

  function refresh(root) {
    root = root || document;
    if (root.nodeType === 1 && root.matches(SELECTOR)) setup(root);
    Array.prototype.forEach.call((root.querySelectorAll ? root : document).querySelectorAll(SELECTOR), setup);
    setupCursor();
    onScroll();
  }

  function start() {
    refresh(document);
    // Nội dung render sau bằng JS (bảng, thẻ, modal…) tự được gắn hiệu ứng
    if ('MutationObserver' in window) {
      var queued = false;
      new MutationObserver(function (muts) {
        // Bỏ qua thay đổi do chính thư viện (chữ của bộ đếm / con trỏ, vệt gợn sóng)
        var relevant = muts.some(function (m) {
          return Array.prototype.some.call(m.addedNodes, function (n) {
            return n.nodeType === 1 && !(n.classList && (n.classList.contains('m-ripple') || n.classList.contains('m-cursor')));
          });
        });
        if (!relevant || queued) return;
        queued = true;
        requestAnimationFrame(function () { queued = false; refresh(document); });
      }).observe(document.body, { childList: true, subtree: true });
    }
  }

  window.Motion = { refresh: refresh, reduce: reduce, finePointer: finePointer };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
