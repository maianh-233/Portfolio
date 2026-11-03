(function () {
  'use strict';

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const gsap = window.gsap;
  const ST = window.ScrollTrigger;
  const Flip = window.Flip;
  const motion = !!(gsap && ST) && !reduce;
  if (motion) gsap.registerPlugin(ST, ...(Flip ? [Flip] : []));

  const THEMES = window.THEMES || [];
  const CATS = window.CATEGORIES || [];
  const catById = Object.fromEntries(CATS.map(c => [c.id, c]));
  const bySlug = Object.fromEntries(THEMES.map(t => [t.slug, t]));

  /* ---------------- Toast ---------------- */
  const toast = $('#toast');
  let toastTimer;
  function say(msg) {
    toast.textContent = msg;
    toast.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-on'), 2200);
  }

  /* ---------------- Theme toggle (circular view transition) ---------------- */
  const toggle = $('#theme-toggle');
  const root = document.documentElement;
  const current = () => root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const syncIcon = () => { toggle.innerHTML = `<i class="ph ph-${current() === 'dark' ? 'sun' : 'moon'}" aria-hidden="true"></i>`; };
  syncIcon();
  toggle.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    const apply = () => {
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncIcon();
    };
    if (!document.startViewTransition || reduce) return apply();
    const r = toggle.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(apply).ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'cubic-bezier(.16,1,.3,1)', pseudoElement: '::view-transition-new(root)' }
      );
    });
  });

  /* ---------------- Mobile menu ---------------- */
  const nav = $('.nav'), menuBtn = $('#menu-toggle');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuBtn.innerHTML = `<i class="ph ph-${open ? 'x' : 'list'}" aria-hidden="true"></i>`;
  }
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  $('#nav-links').addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); } });
  document.addEventListener('click', e => { if (!nav.contains(e.target)) setMenu(false); });
  matchMedia('(min-width: 769px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

  /* ---------------- Text scramble (decodes mono labels into place) ---------------- */
  const GLYPHS = '<>/\{}[]=+*#_01';
  function scramble(el, text = el.dataset.text || el.textContent, dur = 700) {
    el.dataset.text = text;
    if (reduce) { el.textContent = text; return; }
    cancelAnimationFrame(el._scr);
    const start = performance.now();
    const step = now => {
      const k = Math.min(1, (now - start) / dur);
      const fixed = Math.floor(text.length * k);
      let out = esc(text.slice(0, fixed));
      for (let i = fixed; i < text.length; i++)
        out += text[i] === ' ' ? ' ' : `<span class="scramble-glyph">${esc(GLYPHS[(Math.random() * GLYPHS.length) | 0])}</span>`;
      el.innerHTML = out;
      if (k < 1) el._scr = requestAnimationFrame(step);
      else el.textContent = text;
    };
    el._scr = requestAnimationFrame(step);
  }
  $$('[data-scramble]').forEach(el => scramble(el, el.textContent, 900));
  if ('IntersectionObserver' in window) {
    const kio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { scramble(e.target, e.target.textContent, 800); kio.unobserve(e.target); } }), { threshold: .6 });
    $$('.proj__kind, .themes .eyebrow').forEach(el => kio.observe(el));
  }

  /* ---------------- Split headings into words ---------------- */
  function splitWords(el) {
    const out = [];
    [...el.childNodes].forEach(node => {
      if (node.nodeType === 3) {
        node.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { out.push(document.createTextNode(' ')); return; }
          out.push(wrap(document.createTextNode(part)));
        });
      } else out.push(wrap(node));
    });
    el.replaceChildren(...out);
    function wrap(n) {
      const w = document.createElement('span'); w.className = 'w';
      const i = document.createElement('span'); i.appendChild(n); w.appendChild(i);
      return w;
    }
  }
  $$('.split-words').forEach(splitWords);

  /* ---------------- Hero: kinetic name ---------------- */
  const name = $('#hero-name');
  $$('.line', name).forEach(line => {
    const nodes = [...line.childNodes];
    line.replaceChildren(...nodes.flatMap(n => {
      if (n.nodeType !== 3) { const s = document.createElement('span'); s.className = 'ch'; s.appendChild(n); return [s]; }
      return [...n.textContent].map(c => {
        const s = document.createElement('span'); s.className = 'ch'; s.textContent = c === ' ' ? ' ' : c; return s;
      });
    }));
  });
  const chars = $$('.ch', name);

  if (motion) {
    const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
    intro.from(chars, { yPercent: 115, rotate: 8, duration: 1.2, stagger: .045 })
      .from('.hero .eyebrow', { y: 16, opacity: 0, duration: .8 }, .2)
      .from('.hero__lead', { y: 24, opacity: 0, duration: 1 }, .55)
      .from('.hero__cta > *', { y: 20, opacity: 0, duration: .9, stagger: .08 }, .7);
  }

  // Letters lose weight and narrow as the pointer gets close (variable font axes).
  if (fine && !reduce) {
    const state = chars.map(() => ({ w: 800, wd: 100, tw: 800, twd: 100 }));
    let raf = 0, px = -1e4, py = -1e4;
    const hero = $('.hero');
    hero.addEventListener('pointermove', e => {
      px = e.clientX; py = e.clientY; kick();
      const r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', `${e.clientX}px`);
      hero.style.setProperty('--my', `${e.clientY - r.top}px`);
      hero.style.setProperty('--spot', '1');
    });
    hero.addEventListener('pointerleave', () => { px = py = -1e4; kick(); hero.style.setProperty('--spot', '0'); });
    function kick() { if (!raf) raf = requestAnimationFrame(tick); }
    function tick() {
      raf = 0;
      let moving = false;
      chars.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const d = Math.hypot(px - (r.left + r.width / 2), py - (r.top + r.height / 2));
        const k = Math.max(0, 1 - d / 260);
        const s = state[i];
        s.tw = 800 - k * 560; s.twd = 100 - k * 25;
        s.w += (s.tw - s.w) * .18; s.wd += (s.twd - s.wd) * .18;
        if (Math.abs(s.tw - s.w) > .5 || Math.abs(s.twd - s.wd) > .1) moving = true;
        c.style.setProperty('--w', s.w.toFixed(1));
        c.style.setProperty('--wd', s.wd.toFixed(2));
      });
      if (moving) kick();
    }
  }

  /* ---------------- Hero: 3D deck of real theme screenshots ---------------- */
  const deckPick = ['kiri-house', 'candy-coat-nail-club', 'japan-matsuri', 'noir-patisserie', 'fade-district', 'hon-viet', 'the-grand-aurel', 'skincare-house', 'wildroute-expeditions', 'bubble-riot']
    .map(s => bySlug[s]).filter(Boolean);
  const stage = $('#deck-stage'), tiltEl = $('#deck-tilt');
  const deckName = $('#deck-name'), deckCat = $('#deck-cat');
  const DEPTH = 5;
  let deck = deckPick.map((t, i) => {
    const el = document.createElement('div');
    el.className = 'deck__card';
    el.innerHTML = `<a href="${t.href}" target="_blank" rel="noopener" tabindex="${i === 0 ? 0 : -1}" aria-label="Open ${esc(t.name)}"><img src="${t.thumb}" alt="${esc(t.name)} homepage" ${i < DEPTH ? '' : 'loading="lazy"'} width="960" height="600"></a>`;
    stage.appendChild(el);
    return { el, t };
  });
  // Cards climb back and to the right like a staircase, so five themes are visible at once.
  const slot = i => {
    const d = Math.min(i, DEPTH);
    return { xPercent: d * 9, yPercent: -d * 12, z: -d * 130, rotationY: 0, opacity: i < DEPTH ? 1 - d * .13 : 0, zIndex: 50 - i };
  };
  function layoutDeck(animate) {
    deck.forEach(({ el }, i) => {
      const p = slot(i);
      el.querySelector('a').tabIndex = i === 0 ? 0 : -1;
      el.classList.toggle('is-front', i === 0);
      if (gsap) animate ? gsap.to(el, { ...p, duration: 1, ease: 'expo.out', overwrite: 'auto' }) : gsap.set(el, p);
      else {
        el.style.zIndex = p.zIndex; el.style.opacity = p.opacity;
        el.style.transform = `translate3d(${p.xPercent}%, ${p.yPercent}%, ${p.z}px)`;
      }
    });
    const top = deck[0].t;
    scramble(deckName, top.name, 500);
    scramble(deckCat, catById[top.cat].en, 500);
  }
  layoutDeck(false);

  if (motion) {
    // Cards fan out from a single point on load.
    gsap.from(deck.slice(0, DEPTH).map(d => d.el), { z: 420, xPercent: -10, yPercent: 20, opacity: 0, duration: 1.5, ease: 'expo.out', stagger: { each: .1, from: 'end' }, delay: .35 });
    gsap.fromTo('.deck__glow', { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.8, ease: 'expo.out', delay: .3 });
    gsap.fromTo('.badge', { scale: 0, rotate: -120 }, { scale: 1, rotate: 0, duration: 1.3, ease: 'back.out(1.7)', delay: 1, clearProps: 'transform' });

    // Rotating badge; scrolling makes it spin faster.
    const spin = gsap.to('.badge svg', { rotation: 360, duration: 16, ease: 'none', repeat: -1, transformOrigin: '50% 50%' });
    ST.create({
      onUpdate: self => {
        const v = Math.min(Math.abs(self.getVelocity()) / 300, 6);
        gsap.timeline({ overwrite: true }).to(spin, { timeScale: 1 + v, duration: .2 }).to(spin, { timeScale: 1, duration: 1.2 });
      },
    });

    // Leaving the hero: the two name lines slide apart, the deck tips back and recedes.
    gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .6 } })
      .to('.hero__name .line:nth-child(1)', { xPercent: -14, ease: 'none' }, 0)
      .to('.hero__name .line:nth-child(2)', { xPercent: 14, ease: 'none' }, 0)
      .to('.hero__lead, .hero__cta', { y: -40, opacity: 0, ease: 'none' }, 0)
      .to('.deck', { yPercent: -10, scale: .9, rotate: -3, opacity: .25, ease: 'none' }, 0);
  }

  if (motion && fine) {
    // The whole deck leans toward the pointer.
    const rx = gsap.quickTo(tiltEl, 'rotationX', { duration: .9, ease: 'power3.out' });
    const ry = gsap.quickTo(tiltEl, 'rotationY', { duration: .9, ease: 'power3.out' });
    const heroEl = $('.hero');
    heroEl.addEventListener('pointermove', e => {
      const r = heroEl.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - .5) * 16);
      rx(-((e.clientY - r.top) / r.height - .5) * 12);
    });
    heroEl.addEventListener('pointerleave', () => { rx(0); ry(0); });
  }

  if (motion && deck.length > 1) {
    let paused = false, visible = true;
    const deckEl = $('#deck');
    deckEl.addEventListener('pointerenter', () => paused = true);
    deckEl.addEventListener('pointerleave', () => paused = false);
    deckEl.addEventListener('focusin', () => paused = true);
    deckEl.addEventListener('focusout', () => paused = false);
    new IntersectionObserver(([e]) => visible = e.isIntersecting).observe(deckEl);
    setInterval(() => {
      if (paused || !visible || document.hidden) return;
      const top = deck.shift();
      // The front card flies out toward the viewer, then rejoins at the back of the stack.
      gsap.timeline()
        .to(top.el, { z: 300, xPercent: -30, yPercent: 14, rotationY: 28, opacity: 0, duration: .65, ease: 'power3.in' })
        .add(() => {
          deck.push(top);
          gsap.set(top.el, { ...slot(deck.length - 1), z: -900, opacity: 0, rotationY: 0 });
          layoutDeck(true);
        });
    }, 3000);
  }

  /* ---------------- Count-up numbers ---------------- */
  const pages = THEMES.reduce((n, t) => n + t.pages, 0);
  const setCount = (sel, v) => { const el = $(sel); if (el) { el.dataset.count = v; el.textContent = v; } };
  $('#themes-count').textContent = THEMES.length;
  $('#themes-cats').textContent = CATS.length;
  setCount('.num:nth-child(1) strong', THEMES.length);
  setCount('.num:nth-child(2) strong', pages);
  setCount('.num:nth-child(3) strong', CATS.length);
  if (motion) {
    $$('[data-count]').forEach(el => {
      const end = parseFloat(el.dataset.count), dec = +(el.dataset.decimals || 0), o = { v: 0 };
      gsap.to(o, {
        v: end, duration: 1.8, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: () => { el.textContent = o.v.toFixed(dec); },
        onComplete: () => { el.textContent = end.toFixed(dec); },
      });
    });
  }

  /* ---------------- Marquee that reacts to scroll speed ---------------- */
  const track = $('#marquee');
  track.innerHTML += track.innerHTML;
  [...track.children].slice(track.children.length / 2).forEach(s => s.setAttribute('aria-hidden', 'true'));
  if (motion) {
    let x = 0, boost = 0, dir = 1;
    ST.create({ onUpdate: self => { boost = Math.min(Math.abs(self.getVelocity()) / 120, 18); dir = self.direction; } });
    gsap.ticker.add((t, dt) => {
      const half = track.scrollWidth / 2;
      x -= (0.9 + boost) * dir * dt * .06;
      boost *= .94;
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      gsap.set(track, { x });
    });
  }

  /* ---------------- Selected work: Lunaria chapters ---------------- */
  const chapters = [
    ['01-khach-hang/01-kham-pha-san-pham', 'Browse products'],
    ['01-khach-hang/02-dat-hang-cod', 'Checkout (COD)'],
    ['01-khach-hang/03-yeu-thich-voucher-cua-hang', 'Wishlist & vouchers'],
    ['02-admin-ban-hang/01-dang-nhap-va-tong-quan', 'Admin dashboard'],
    ['02-admin-ban-hang/02-bao-cao-thong-ke', 'Reports'],
    ['02-admin-ban-hang/03-xu-ly-don-online', 'Online orders'],
    ['02-admin-ban-hang/04-ban-tai-quay', 'Point of sale'],
    ['02-admin-ban-hang/05-hang-khach-hang', 'Customer tiers'],
    ['03-admin-kho-san-pham/01-san-pham-va-bien-the', 'Products & variants'],
    ['03-admin-kho-san-pham/02-ton-kho-cua-hang', 'Store stock'],
    ['03-admin-kho-san-pham/03-phieu-nhap-xuat', 'Goods receipts'],
    ['04-admin-he-thong/01-nhan-su', 'Staff'],
    ['04-admin-he-thong/02-phan-quyen-va-log', 'Permissions & audit log'],
  ];
  const lv = $('#lunaria-video'), lcap = $('#lunaria-caption'), chapBox = $('#chapters');
  chapBox.innerHTML = chapters.map(([, label], i) =>
    `<button type="button" role="tab" aria-selected="${i === 0}" data-i="${i}">${esc(label)}</button>`).join('');
  let chap = 0;
  function loadChapter(i, play) {
    chap = i;
    lv.src = `fashion-system/videos/${chapters[i][0]}.webm`;
    lcap.textContent = `${String(i + 1).padStart(2, '0')} of ${chapters.length}: ${chapters[i][1]}`;
    $$('button', chapBox).forEach(b => b.setAttribute('aria-selected', String(+b.dataset.i === i)));
    const btn = chapBox.children[i];
    chapBox.scrollTo({ left: btn.offsetLeft - chapBox.offsetLeft - 8, behavior: reduce ? 'auto' : 'smooth' });
    if (play) lv.play().catch(() => {});
  }
  // Drag to scroll the chapter strip with a mouse (its scrollbar is hidden).
  let drag = null;
  chapBox.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse') return;
    drag = { x: e.clientX, left: chapBox.scrollLeft, moved: false };
  });
  addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (Math.abs(dx) > 4) { drag.moved = true; chapBox.classList.add('is-dragging'); }
    chapBox.scrollLeft = drag.left - dx;
  });
  addEventListener('pointerup', () => { if (drag) setTimeout(() => { drag = null; chapBox.classList.remove('is-dragging'); }); });
  chapBox.addEventListener('click', e => {
    if (drag && drag.moved) { e.preventDefault(); return; }
    const b = e.target.closest('button'); if (b) loadChapter(+b.dataset.i, true);
  });
  // Fade whichever edge still has hidden chapters behind it.
  const edges = () => {
    chapBox.classList.toggle('has-left', chapBox.scrollLeft > 4);
    chapBox.classList.toggle('has-right', chapBox.scrollLeft + chapBox.clientWidth < chapBox.scrollWidth - 4);
  };
  chapBox.addEventListener('scroll', edges, { passive: true });
  addEventListener('resize', edges);
  requestAnimationFrame(edges);
  lv.addEventListener('ended', () => loadChapter((chap + 1) % chapters.length, true));
  loadChapter(0, false);
  lv.dataset.autoplay = '';

  // Demo videos play (muted) while mostly on screen and pause when they leave.
  if (!reduce) {
    const io = new IntersectionObserver(entries => entries.forEach(({ target: v, intersectionRatio }) => {
      if (intersectionRatio > .55) { if (v.preload === 'none') v.preload = 'auto'; v.play().catch(() => {}); }
      else if (!v.paused) v.pause();
    }), { threshold: [0, .55] });
    $$('video[data-autoplay]').forEach(v => io.observe(v));
  }

  // Project cards rise into place one by one; the demo screen drifts slower than the text for depth.
  if (motion) {
    $$('.stack__card').forEach(card => {
      gsap.fromTo(card.querySelector('.stack__inner'), { y: 90, scale: .95, opacity: 0 }, {
        y: 0, scale: 1, opacity: 1, duration: 1.2, ease: 'expo.out', clearProps: 'transform,opacity',
        scrollTrigger: { trigger: card, start: 'top 85%', once: true },
      });
      // Parallax only once text and media sit side by side; stacked, it pushes the video into the text.
      if (innerWidth > 1024) gsap.fromTo(card.querySelector('.proj__media'), { y: 50 }, {
        y: -50, ease: 'none',
        scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: .5 },
      });
    });
    $$('.proj').forEach(p => {
      // fromTo with explicit end values: the lens adds a CSS opacity transition on [data-role],
      // which would make a plain from() read a half-transitioned end value.
      gsap.fromTo(p.querySelectorAll('.proj__kind, h3, .proj__lead, .facts li, .proj .chips, .proj__text .link'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: .9, ease: 'expo.out', stagger: .06, clearProps: 'opacity,transform',
          scrollTrigger: { trigger: p, start: 'top 70%', once: true } });
      gsap.from(p.querySelector('.screen'), {
        clipPath: 'inset(12% 12% 12% 12% round 16px)', scale: 1.06, duration: 1.3, ease: 'expo.out',
        scrollTrigger: { trigger: p, start: 'top 70%', once: true },
      });
    });
  }

  /* ---------------- Role lens (?role=frontend | fullstack) ---------------- */
  const lensBtns = $$('.lens button');
  const statusEl = $('.hero .status');
  const statusText = { all: 'Open to frontend & fullstack roles', frontend: 'Open to frontend roles', fullstack: 'Open to fullstack roles' };
  function setLens(lens, fromUser) {
    if (!statusText[lens]) lens = 'all';
    if (lens === 'all') delete root.dataset.lens; else root.dataset.lens = lens;
    lensBtns.forEach(b => b.setAttribute('aria-checked', String(b.dataset.lens === lens)));
    if (fromUser) {
      scramble(statusEl, statusText[lens], 600);
      const u = new URL(location.href);
      lens === 'all' ? u.searchParams.delete('role') : u.searchParams.set('role', lens);
      history.replaceState(null, '', u);
    } else scramble(statusEl, statusText[lens], 900);
  }
  lensBtns.forEach(b => b.addEventListener('click', () => setLens(b.dataset.lens, true)));
  setLens(new URLSearchParams(location.search).get('role') || 'all', false);

  /* ---------------- Themes gallery ---------------- */
  const grid = $('#grid'), filters = $('#filters'), moreBtn = $('#more'), shuffleBtn = $('#shuffle');
  const counts = THEMES.reduce((m, t) => (m[t.cat] = (m[t.cat] || 0) + 1, m), {});
  filters.innerHTML = [`<button type="button" data-cat="all" aria-pressed="true">All<sup>${THEMES.length}</sup></button>`]
    .concat(CATS.map(c => `<button type="button" data-cat="${c.id}" aria-pressed="false" title="${esc(c.vi)}">${esc(c.en)}<sup>${counts[c.id] || 0}</sup></button>`))
    .join('');

  const cardEls = new Map();
  THEMES.forEach(t => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = t.href; a.target = '_blank'; a.rel = 'noopener';
    a.dataset.slug = t.slug;
    a.innerHTML = `
      <div class="card__img"><img src="${t.thumb}" alt="${esc(t.name)} homepage" loading="lazy" width="960" height="600"></div>
      <div class="card__meta"><span>${esc(catById[t.cat].en)}</span><span>${t.kind === 'App prototype' ? '<span class="card__badge">App prototype</span>, ' : ''}${t.pages} ${t.pages === 1 ? 'page' : 'pages'}</span></div>
      <h3 class="card__name">${esc(t.name)}<i class="ph-bold ph-arrow-up-right" aria-hidden="true"></i></h3>
      <p class="card__sub">${esc(t.sub)}</p>`;
    cardEls.set(t.slug, a);
  });

  const LIMIT = 16;
  let cat = 'all', showAll = false, order = THEMES.map(t => t.slug);
  function visibleSlugs() {
    const list = order.filter(s => cat === 'all' || bySlug[s].cat === cat);
    return cat === 'all' && !showAll ? list.slice(0, LIMIT) : list;
  }
  function render(animate) {
    const els = [...cardEls.values()];
    const state = animate && motion && Flip ? Flip.getState(els) : null;
    const show = visibleSlugs();
    const set = new Set(show);
    show.forEach((s, i) => {
      const el = cardEls.get(s);
      el.style.display = '';
      el.classList.toggle('card--wide', show.length > 5 && i % 7 === 0);
      grid.appendChild(el);
    });
    els.forEach(el => { if (!set.has(el.dataset.slug)) el.style.display = 'none'; });
    const total = order.filter(s => cat === 'all' || bySlug[s].cat === cat).length;
    moreBtn.hidden = total <= LIMIT || cat !== 'all';
    moreBtn.querySelector('span').textContent = showAll ? 'Show fewer' : `Show all ${total} themes`;
    if (state) {
      Flip.from(state, {
        duration: .7, ease: 'expo.inOut', absolute: true, stagger: { amount: .25 }, nested: true,
        onEnter: els => gsap.fromTo(els, { opacity: 0, scale: .85 }, { opacity: 1, scale: 1, duration: .6, ease: 'expo.out', delay: .15 }),
        onLeave: els => gsap.to(els, { opacity: 0, scale: .85, duration: .3 }),
        onComplete: () => ST.refresh(),
      });
    } else if (motion) ST.refresh();
  }
  filters.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('button', filters).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    cat = b.dataset.cat;
    render(true);
  });
  moreBtn.addEventListener('click', () => {
    showAll = !showAll;
    render(true);
    if (!showAll) grid.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  });
  shuffleBtn.addEventListener('click', () => {
    for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
    render(true);
  });
  render(false);

  if (motion) {
    ST.batch('.card', {
      start: 'top 92%', once: true,
      onEnter: batch => gsap.from(batch, { y: 50, opacity: 0, rotateX: -12, duration: .9, ease: 'expo.out', stagger: .06, clearProps: 'transform,opacity' }),
    });
  }

  // 3D tilt with a glare that follows the pointer.
  if (fine && motion) {
    grid.addEventListener('pointermove', e => {
      const img = e.target.closest('.card__img'); if (!img) return;
      const r = img.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width, ny = (e.clientY - r.top) / r.height;
      img.style.setProperty('--gx', `${nx * 100}%`);
      img.style.setProperty('--gy', `${ny * 100}%`);
      gsap.to(img, { rotateY: (nx - .5) * 12, rotateX: (.5 - ny) * 10, duration: .5, ease: 'power3.out', overwrite: 'auto' });
    });
    grid.addEventListener('pointerout', e => {
      const img = e.target.closest('.card__img');
      if (img && !img.contains(e.relatedTarget)) gsap.to(img, { rotateX: 0, rotateY: 0, duration: .8, ease: 'elastic.out(1, .5)' });
    });
  }

  /* ---------------- Experience timeline ---------------- */
  const EXP = (window.PROFILE || {}).experience || {};
  if (EXP.role) $('#exp-role').textContent = EXP.role;
  if (EXP.period) { $('#exp-period').textContent = EXP.period; $('#exp-period').hidden = false; }
  if (motion) {
    const expEl = $('#experience'), list = $('#exp-list');
    expEl.classList.add('is-live');
    // The accent line grows with scroll; the item crossing the middle of the screen lights up.
    gsap.to('.exp__line span', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: list, start: 'top 55%', end: 'bottom 55%', scrub: .4 } });
    const items = $$('.exp__item', list);
    // Exactly one item is lit at a time; the last one crossed stays lit after scrolling past.
    const light = i => items.forEach((it, j) => it.classList.toggle('is-active', j === i));
    light(0);
    items.forEach((item, i) => {
      ST.create({
        trigger: item, start: 'top 58%', end: 'bottom 58%',
        onEnter: () => light(i), onEnterBack: () => light(i),
      });
      gsap.fromTo(item.querySelector('div'), { x: 40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: 'expo.out', clearProps: 'transform,opacity',
        scrollTrigger: { trigger: item, start: 'top 85%', once: true },
      });
    });
    gsap.fromTo('.exp__company', { y: 30, opacity: 0, rotate: -2 }, {
      y: 0, opacity: 1, rotate: 0, duration: 1.1, ease: 'expo.out', clearProps: 'transform,opacity',
      scrollTrigger: { trigger: expEl, start: 'top 75%', once: true },
    });
  }

  /* ---------------- About ---------------- */
  $('#collage').innerHTML = ['chloe-nguyen', 'bubble-riot', 'nocturne', 'han-ngu-duong']
    .map(s => bySlug[s]).filter(Boolean)
    .map(t => `<img src="${t.thumb}" alt="" loading="lazy" width="960" height="600">`).join('');
  const P = window.PROFILE || {};
  const chipRow = (label, items) => items && items.length
    ? `<div><p>${esc(label)}</p><ul>${items.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>` : '';
  $('#interests').innerHTML = chipRow('Into', P.interests);

  // GPA ring draws to 3.35 / 4.
  const ring = $('#gpa-fill'), C = 2 * Math.PI * 52;
  ring.style.strokeDasharray = C;
  ring.style.strokeDashoffset = C * (1 - 3.35 / 4);
  if (motion) gsap.fromTo(ring, { strokeDashoffset: C }, { strokeDashoffset: C * (1 - 3.35 / 4), duration: 1.8, ease: 'expo.out', scrollTrigger: { trigger: ring, start: 'top 90%', once: true } });

  // Collage: one slot at a time swaps to another theme screenshot.
  const pool = ['nocturne', 'kiri-house', 'matcha-atelier', 'pearl-nail-atelier', 'siam-lingua', 'gearforge', 'casa-sol', 'noir-aesthetic', 'tiem-banh-moc-mien']
    .map(s => bySlug[s]).filter(Boolean);
  const slots = $$('#collage img');
  if (motion && slots.length) {
    let k = 0, inView = false;
    new IntersectionObserver(([e]) => inView = e.isIntersecting).observe($('#collage'));
    setInterval(() => {
      if (!inView || document.hidden) return;
      const img = slots[k % slots.length]; k++;
      const showing = new Set(slots.map(i => i.getAttribute('src')));
      const choices = pool.filter(t => !showing.has(t.thumb));
      if (!choices.length) return;
      const next = choices[Math.floor(Math.random() * choices.length)];
      img.classList.add('is-out');
      setTimeout(() => { img.src = next.thumb; img.onload = () => img.classList.remove('is-out'); }, 600);
    }, 2400);
  }

  // Bento borders light up under the pointer.
  const bento = $('#bento');
  bento.addEventListener('pointermove', e => {
    $$('.cell', bento).forEach(c => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--cx', `${e.clientX - r.left}px`);
      c.style.setProperty('--cy', `${e.clientY - r.top}px`);
    });
  });
  if (motion) {
    gsap.from('.bento .cell', {
      y: 60, opacity: 0, duration: 1, ease: 'expo.out', stagger: .08,
      scrollTrigger: { trigger: '.bento', start: 'top 80%', once: true },
    });
  }

  /* ---------------- Headings reveal ---------------- */
  if (motion) {
    $$('.split-words').forEach(el => {
      gsap.from(el.querySelectorAll('.w > span'), {
        yPercent: 115, rotate: 4, duration: 1.1, ease: 'expo.out', stagger: .07,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
    gsap.to('.progress span', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .3 } });
  }

  /* ---------------- Magnetic controls + directional fill ---------------- */
  $$('.btn').forEach(b => b.addEventListener('pointerenter', e => {
    const r = b.getBoundingClientRect();
    b.style.setProperty('--from', e.clientX - r.left < r.width / 2 ? 'left' : 'right');
  }));
  if (fine && motion) {
    $$('.magnetic').forEach(el => {
      const xTo = gsap.quickTo(el, 'x', { duration: .6, ease: 'elastic.out(1, .4)' });
      const yTo = gsap.quickTo(el, 'y', { duration: .6, ease: 'elastic.out(1, .4)' });
      const pull = el.classList.contains('mail') ? .12 : .3;
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * pull);
        yTo((e.clientY - r.top - r.height / 2) * pull * 1.2);
      });
      el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
    });
  }

  /* ---------------- Contact: copy email ---------------- */
  $('#copy').addEventListener('click', async () => {
    const mail = $('#mail').textContent.trim();
    try {
      await navigator.clipboard.writeText(mail);
      say('Email copied');
    } catch (e) {
      const range = document.createRange(); range.selectNodeContents($('#mail'));
      const sel = getSelection(); sel.removeAllRanges(); sel.addRange(range);
      say('Copy blocked, the address is selected');
    }
  });

  /* ---------------- Active nav link ---------------- */
  const links = $$('.nav__links a');
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    links.forEach(l => l.setAttribute('aria-current', String(l.getAttribute('href') === `#${en.target.id}`)));
  }), { rootMargin: '-45% 0px -50% 0px' });
  ['experience', 'work', 'themes', 'about', 'contact'].forEach(id => io.observe($(`#${id}`)));

  if (motion) {
    document.fonts && document.fonts.ready.then(() => ST.refresh());
    addEventListener('load', () => ST.refresh());
  }
})();
