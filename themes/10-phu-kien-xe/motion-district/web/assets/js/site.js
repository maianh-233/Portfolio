/* MOTION DISTRICT — logic riêng: dữ liệu sản phẩm, tìm kiếm + lọc, xem nhanh, trang Product Showcase theo ?p= */
(function () {
  'use strict';

  var CATS = {
    accessories: 'Bike accessories',
    helmets: 'Helmets',
    protection: 'Protective gear',
    bags: 'Mounted bags',
    style: 'Style & bike toys'
  };

  var PRODUCTS = [
    {
      slug: 'starline-helmet', code: 'MD-H01', name: 'Starline 3/4 Helmet', cat: 'helmets', tone: 'ink',
      img: 'product-helmet-star.webp', alt: 'Open-face helmet with a white star graphic resting on a scooter handlebar',
      short: 'A three-quarter shell with a hand-sprayed star, cut for short city runs and long night loops.',
      story: [
        'Starline began as a sketch on a café napkin: a helmet that looks like it already has a few stories in it. We kept the shell compact, so it sits close to the head and does not shout on a small scooter.',
        'The star is masked and sprayed by hand, then sanded back in places before the clear coat. No two shells wear their scuffs the same way.'
      ],
      inspiration: 'Old race numbers on bar-shop walls, and the way paint fades on a bike that lives outside.',
      fn: 'Daily commuting and evening rides in the city.',
      material: 'ABS outer shell, EPS liner, removable cotton-blend padding.',
      finish: 'Hand-sprayed graphic, distressed by hand, satin clear coat.',
      specs: [['Shell', 'Compact 3/4'], ['Sizes', 'S to XL'], ['Visor', 'Snap-on peak'], ['Strap', 'Double D-ring']],
      compat: ['Scooters and step-throughs', 'Café racers', 'Naked city bikes'],
      highlights: [['Close-fitting shell', 'A smaller outline that suits scooters and slim café racers.'], ['Hand-finished graphic', 'Every star is masked, sprayed and aged by hand.'], ['Washable comfort liner', 'Pads unclip in seconds for a rinse after hot days.']]
    },
    {
      slug: 'riot-paint-helmet', code: 'MD-H02', name: 'Riot Paint Open-Face', cat: 'helmets', tone: 'moss',
      img: 'product-helmet-biker.webp', alt: 'Glossy open-face helmet painted with a flag-pattern skull and silver rings',
      short: 'A glitter-flake open-face shell with a loud custom skull. Made for riders who like to be spotted.',
      story: [
        'Riot Paint is our nod to custom painters who turn a helmet into a jacket patch you wear on your head.',
        'Silver flake is layered under the clear coat so the rings catch street lights at every junction.'
      ],
      inspiration: 'Garage-door murals and late-night custom shows.',
      fn: 'Slow cruising, meetups and short city rides.',
      material: 'Fibreglass shell, EPS liner, leather-trim edge.',
      finish: 'Metal-flake base, hand-cut stencil graphic, high-gloss clear.',
      specs: [['Shell', 'Open-face'], ['Sizes', 'S to XL'], ['Visor', 'Three-snap'], ['Strap', 'Double D-ring']],
      compat: ['Cruisers', 'Café racers', 'Classic scooters'],
      highlights: [['Metal-flake depth', 'Flake sits under the gloss so it sparkles under street lights.'], ['Stencil graphic', 'Cut and sprayed in our paint corner, one shell at a time.'], ['Leather edge trim', 'Soft trim that ages with every ride.']]
    },
    {
      slug: 'grip-shift-gloves', code: 'MD-P01', name: 'Grip Shift Leather Gloves', cat: 'protection', tone: 'brick',
      img: 'product-gloves-rider.jpg', alt: 'Pair of black and red leather riding gloves with knuckle armour lying on a motorcycle tank',
      short: 'Full-gauntlet leather gloves with hard knuckle shells and a pre-curved palm for a natural grip.',
      story: [
        'Grip Shift was built around one question: how do gloves feel at the fortieth traffic light of the day? The palm is pre-curved so your hand rests on the grip instead of fighting the leather.',
        'Hard shells guard the knuckles, while stretch panels between the fingers keep the gloves easy to pull on at a petrol stop.'
      ],
      inspiration: 'Track gloves, softened for stop-start city traffic.',
      fn: 'All-weather riding, sport and naked bikes.',
      material: 'Cowhide leather, stretch panels, touchscreen fingertip.',
      finish: 'Contrast stitching, red accent panels.',
      specs: [['Cuff', 'Full gauntlet'], ['Sizes', 'XS to XXL'], ['Armour', 'Knuckle shells'], ['Closure', 'Double strap']],
      compat: ['Sport bikes', 'Naked bikes', 'Adventure bikes'],
      highlights: [['Pre-curved palm', 'Less hand fatigue on long days in traffic.'], ['Hard knuckle shells', 'Shields the most exposed part of the hand.'], ['Touchscreen tip', 'Check your route without taking the gloves off.']]
    },
    {
      slug: 'night-shift-jacket', code: 'MD-P02', name: 'Night Shift Riding Jacket', cat: 'protection', tone: 'moss',
      img: null, alt: '',
      short: 'A waxed-cotton jacket that looks like streetwear and hides armour pockets at shoulders and elbows.',
      story: [
        'Night Shift is the jacket you keep on after you park. The cut follows a work jacket, with a longer back so it stays put in a riding position.',
        'Reflective tape is hidden under the collar and cuffs. Flip them out when the street goes dark.'
      ],
      inspiration: 'Dock-worker jackets and night-market riders.',
      fn: 'Commuting and evening rides, on and off the bike.',
      material: 'Waxed cotton outer, mesh lining, armour pockets.',
      finish: 'Brass-tone snaps, hidden reflective tape.',
      specs: [['Fit', 'Relaxed, long back'], ['Sizes', 'S to XXL'], ['Armour', 'Shoulder and elbow pockets'], ['Pockets', '4 outer, 2 inner']],
      compat: ['All bike types'],
      highlights: [['Streetwear cut', 'Looks at home in a café, not just on the bike.'], ['Hidden reflective tape', 'Flip-out panels for dark streets.'], ['Armour-ready', 'Pockets sized for standard shoulder and elbow pads.']]
    },
    {
      slug: 'knee-guard-sleeves', code: 'MD-P03', name: 'Knee Guard Sleeves', cat: 'protection', tone: 'ink',
      img: null, alt: '',
      short: 'Slim knee sleeves that slide under jeans, with flexible pads that stay where they should.',
      story: [
        'Most riders skip knee protection because it is bulky. These sleeves are thin enough to wear under regular denim.',
        'Silicone bands at both ends keep the pad aligned when you walk away from the bike.'
      ],
      inspiration: 'Skate pads, reworked for the street.',
      fn: 'Everyday protection under casual trousers.',
      material: 'Stretch knit sleeve, flexible impact pad.',
      finish: 'Low-profile seams, silicone grip bands.',
      specs: [['Profile', 'Under-trouser'], ['Sizes', 'S/M, L/XL'], ['Pad', 'Flexible, removable'], ['Care', 'Hand wash']],
      compat: ['All bike types'],
      highlights: [['Under-denim fit', 'No need to change trousers at the office.'], ['Grip bands', 'Pads stay over the knee when walking.'], ['Removable pad', 'Wash the sleeve, keep the pad.']]
    },
    {
      slug: 'long-way-panniers', code: 'MD-B01', name: 'Long Way Pannier Set', cat: 'bags', tone: 'moss',
      img: 'product-helmet-open-face.webp', alt: 'Yellow adventure motorcycle with black side panniers and helmets parked on a misty mountain road',
      short: 'A pair of semi-rigid side bags that click onto a rack and come off as a shoulder bag at the hostel.',
      story: [
        'Long Way was shaped on weekend trips out of the city. The bags hold their form when half empty, so they never flap against the wheel.',
        'Each bag lifts off its rail in one move and turns into a carry bag with the included strap.'
      ],
      inspiration: 'Mountain passes on a Sunday, misty road and all.',
      fn: 'Weekend touring and long commutes.',
      material: 'Coated nylon shell, semi-rigid frame, waterproof liner.',
      finish: 'Reflective piping, matt black hardware.',
      specs: [['Volume', 'Two side bags'], ['Mount', 'Quick-release rail'], ['Liner', 'Waterproof roll-top'], ['Carry', 'Shoulder strap included']],
      compat: ['Adventure bikes with side racks', 'Touring bikes', 'Scramblers with rack kit'],
      highlights: [['Holds its shape', 'Semi-rigid frame keeps the bag off the wheel.'], ['One-move release', 'Off the bike and into the hostel in seconds.'], ['Dry inside', 'Roll-top liner for rainy mountain roads.']]
    },
    {
      slug: 'sling-tank-bag', code: 'MD-B02', name: 'Sling Tank Bag', cat: 'bags', tone: 'brick',
      img: null, alt: '',
      short: 'A small magnetic tank bag with a clear phone window that unclips into a cross-body sling.',
      story: [
        'Sling holds what you reach for at every stop: phone, keys, wallet, a pair of sunglasses.',
        'Magnets keep it on the tank; a strap turns it into a sling when you walk into a café.'
      ],
      inspiration: 'Messenger bags and the pocket you wish your jacket had.',
      fn: 'Daily rides and short trips.',
      material: 'Recycled canvas, magnetic base, clear TPU window.',
      finish: 'Rubberised base, brick-red pull tabs.',
      specs: [['Mount', 'Magnetic base'], ['Window', 'Touch-through'], ['Carry', 'Cross-body strap'], ['Closure', 'Water-resistant zip']],
      compat: ['Bikes with a steel tank', 'Strap kit for scooters'],
      highlights: [['Touch-through window', 'Follow your route without stopping.'], ['Tank to shoulder', 'One clip and it is a sling bag.'], ['Small footprint', 'Does not block the handlebar turn.']]
    },
    {
      slug: 'tail-roll-bag', code: 'MD-B03', name: 'Tail Roll Bag', cat: 'bags', tone: 'ink',
      img: null, alt: '',
      short: 'A roll-top seat bag that straps to almost any pillion seat or rack.',
      story: [
        'Tail Roll is the bag for a change of clothes and a camera. It straps down tight and rolls up smaller when you need less.',
        'Four strap points mean it fits a cafe seat as easily as a touring rack.'
      ],
      inspiration: 'Surf duffels and overnight escapes.',
      fn: 'Overnight trips and weekend rides.',
      material: 'Coated canvas, welded seams, webbing straps.',
      finish: 'Matt finish, reflective logo strip.',
      specs: [['Closure', 'Roll-top'], ['Mount', 'Four-point straps'], ['Liner', 'Welded, waterproof'], ['Carry', 'Grab handle']],
      compat: ['Pillion seats', 'Rear racks', 'Café racers'],
      highlights: [['Roll to size', 'Packs down when you carry less.'], ['Fits most seats', 'Four strap points for different tails.'], ['Welded seams', 'Built for sudden rain.']]
    },
    {
      slug: 'bar-end-mirrors', code: 'MD-A01', name: 'Bar-End Mirror Pair', cat: 'accessories', tone: 'stone',
      img: null, alt: '',
      short: 'Round aluminium mirrors that move the view to the end of the bar for a cleaner front end.',
      story: [
        'Bar-end mirrors change the silhouette of a bike more than any other small part. We kept the housing round and simple.',
        'The arm folds in for tight parking between scooters.'
      ],
      inspiration: 'Café racer builds and clean cockpits.',
      fn: 'Rear view with a slimmer front profile.',
      material: 'CNC aluminium housing, convex glass.',
      finish: 'Matt black anodised.',
      specs: [['Glass', 'Convex'], ['Housing', 'Round'], ['Arm', 'Fold-in'], ['Fitting', 'Bar-end adaptor']],
      compat: ['Café racers', 'Naked bikes', 'Bikes with hollow bar ends'],
      highlights: [['Clean silhouette', 'Removes the antenna look of stock mirrors.'], ['Fold-in arm', 'Easier to squeeze into tight parking.'], ['Convex glass', 'Wider view of the lane behind.']]
    },
    {
      slug: 'grip-mount-pro', code: 'MD-A02', name: 'Grip Mount Pro', cat: 'accessories', tone: 'moss',
      img: null, alt: '',
      short: 'An aluminium phone mount with a vibration damper, built for rough city streets.',
      story: [
        'Phones do not like engine vibration. Grip Mount Pro sits on a rubber damper that soaks up the buzz before it reaches the camera.',
        'The clamp opens with one hand and closes with a twist.'
      ],
      inspiration: 'Delivery riders who live on their maps.',
      fn: 'Navigation and ride-hailing on the go.',
      material: 'Aluminium arm, rubber vibration damper.',
      finish: 'Matt black, brick-red release lever.',
      specs: [['Clamp', 'One-hand release'], ['Damper', 'Rubber'], ['Rotation', '360 degrees'], ['Fitting', 'Handlebar or mirror stem']],
      compat: ['Scooters', 'Naked bikes', 'Adventure bikes'],
      highlights: [['Vibration damper', 'Protects the phone camera from buzz.'], ['One-hand release', 'Grab your phone at a stop.'], ['Two fittings', 'Bar clamp or mirror stem.']]
    },
    {
      slug: 'short-screen', code: 'MD-A03', name: 'Short Fly Screen', cat: 'accessories', tone: 'brick',
      img: null, alt: '',
      short: 'A smoked fly screen that takes the wind off your chest without hiding the headlight.',
      story: [
        'The Short Fly Screen is cut low so it changes the look of a round headlight bike without turning it into a tourer.',
        'Smoked polycarbonate keeps the face of the bike dark and clean.'
      ],
      inspiration: 'Seventies roadsters with a tiny screen up front.',
      fn: 'Wind relief on city highways.',
      material: 'Smoked polycarbonate, steel brackets.',
      finish: 'Light smoke tint, black hardware.',
      specs: [['Material', 'Polycarbonate'], ['Tint', 'Light smoke'], ['Mount', 'Headlight brackets'], ['Height', 'Low-cut']],
      compat: ['Round-headlight naked bikes', 'Scramblers', 'Café racers'],
      highlights: [['Low profile', 'Keeps the bike looking lean.'], ['Wind relief', 'Takes pressure off the chest at speed.'], ['Smoke tint', 'Darkens the front end without hiding the light.']]
    },
    {
      slug: 'district-sticker-pack', code: 'MD-S01', name: 'District Sticker Pack', cat: 'style', tone: 'brick',
      img: null, alt: '',
      short: 'Twelve die-cut vinyl stickers drawn from city signs, street posters and our own logo marks.',
      story: [
        'The sticker pack is how most people first meet us. Every design started as a photo of a city sign or poster.',
        'The vinyl is UV-protected, so the colours survive a hot summer on a tank or helmet.'
      ],
      inspiration: 'Electric poles covered in flyers.',
      fn: 'Helmets, tanks, toolboxes and laptops.',
      material: 'Outdoor vinyl, UV laminate.',
      finish: 'Die-cut, matt laminate.',
      specs: [['Count', '12 stickers'], ['Material', 'Outdoor vinyl'], ['Laminate', 'UV, matt'], ['Use', 'Indoor and outdoor']],
      compat: ['Helmets', 'Tanks and side panels', 'Toolboxes'],
      highlights: [['Drawn from the street', 'Each design starts from a real city sign.'], ['Sun-proof', 'UV laminate keeps colours from fading.'], ['Die-cut', 'Clean edges, no white border.']]
    },
    {
      slug: 'valve-cap-keyring', code: 'MD-S02', name: 'Valve Cap & Keyring Set', cat: 'style', tone: 'ink',
      img: null, alt: '',
      short: 'Machined valve caps and a matching keyring: the smallest way to make a bike yours.',
      story: [
        'Small parts get looked at more than you would think. These caps are machined from solid aluminium with a knurled grip.',
        'The keyring uses the same knurling, so the set matches from tyre to ignition.'
      ],
      inspiration: 'Watch crowns and old tool handles.',
      fn: 'Finishing touch for any bike.',
      material: 'Solid aluminium, steel split ring.',
      finish: 'Knurled grip, brick-red or black anodised.',
      specs: [['Set', '2 caps, 1 keyring'], ['Material', 'Aluminium'], ['Grip', 'Knurled'], ['Colours', 'Brick red, black']],
      compat: ['Standard Schrader valves'],
      highlights: [['Machined solid', 'No plastic, no hollow shells.'], ['Matching set', 'Same knurl from tyre to key.'], ['Two colours', 'Brick red or stealth black.']]
    }
  ];

  var BY = {};
  PRODUCTS.forEach(function (p) { p.catLabel = CATS[p.cat]; BY[p.slug] = p; });
  window.MD_PRODUCTS = PRODUCTS;

  var IMG = '../assets/img/';
  var TONE = {
    ink: 'bg-ink text-paper', moss: 'bg-moss text-paper', brick: 'bg-brick text-white', stone: 'bg-stone text-ink'
  };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // Khối hình: ảnh thật nếu có, không thì poster chữ màu thương hiệu
  function media(p, big) {
    if (p.img) {
      return '<img src="' + IMG + p.img + '" alt="' + esc(p.alt) + '" class="film h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]" loading="lazy">';
    }
    return '<div class="poster-lines flex h-full w-full flex-col justify-between p-5 sm:p-6 ' + TONE[p.tone] + '">' +
      '<span class="text-sm font-semibold uppercase tracking-[0.18em]">' + esc(p.code) + '</span>' +
      '<span class="font-poster ' + (big ? 'text-6xl sm:text-7xl 2xl:text-8xl' : 'text-4xl sm:text-5xl') + ' leading-[0.9] transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04] origin-bottom-left">' + esc(p.catLabel) + '</span>' +
      '</div>';
  }

  function relatedCard(p) {
    return '<article class="group">' +
      '<a href="product-showcase.html?p=' + p.slug + '" class="block">' +
      '<div class="aspect-[4/5] overflow-hidden bg-stone">' + media(p, false) + '</div>' +
      '<p class="mt-4 text-sm text-muted">' + esc(p.catLabel) + '</p>' +
      '<h3 class="mt-1 text-xl font-bold leading-tight">' + esc(p.name) + '</h3>' +
      '<span class="mt-3 inline-flex items-center gap-2 text-sm font-semibold underline decoration-brick decoration-2 underline-offset-4">View details <span class="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span></span>' +
      '</a></article>';
  }

  // ---------- Collections: tìm kiếm + lọc + xem nhanh ----------
  document.querySelectorAll('#collection').forEach(function (root) {
    try {
      var items = Array.prototype.slice.call(root.querySelectorAll('[data-category]'));
      var input = root.querySelector('#search');
      var empty = root.querySelector('#no-results');
      var count = root.querySelector('#result-count');
      var update = function () {
        var shown = items.filter(function (it) { return !it.classList.contains('is-gone') && !it.classList.contains('is-out') && !it.classList.contains('is-search-hidden'); }).length;
        if (empty) empty.hidden = shown !== 0;
        if (count) count.textContent = shown + (shown === 1 ? ' piece' : ' pieces');
      };
      var search = function () {
        var q = (input.value || '').trim().toLowerCase();
        items.forEach(function (it) {
          var hay = (it.getAttribute('data-search') || '').toLowerCase();
          it.classList.toggle('is-search-hidden', q !== '' && hay.indexOf(q) < 0);
        });
        update();
      };
      if (input) input.addEventListener('input', search);
      root.querySelectorAll('[data-filter]').forEach(function (b) {
        b.addEventListener('click', function () { setTimeout(update, 360); });
      });
      var reset = root.querySelector('[data-reset]');
      if (reset) reset.addEventListener('click', function () {
        input.value = '';
        search();
        var all = root.querySelector('[data-filter="all"]');
        if (all) all.click();
      });
      // ?cat=helmets từ trang chủ
      var m = /[?&]cat=([a-z]+)/.exec(location.search);
      if (m && CATS[m[1]]) {
        var go = function () { var b = root.querySelector('[data-filter="' + m[1] + '"]'); if (b) b.click(); };
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(go, 30); });
        else setTimeout(go, 30);
      }
      update();
    } catch (e) { console.error('[site] #collection', e); }
  });

  document.querySelectorAll('#quick-view').forEach(function (dlg) {
    try {
      document.querySelectorAll('[data-quick]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var p = BY[btn.getAttribute('data-quick')];
          if (!p) return;
          dlg.querySelector('[data-q="media"]').innerHTML = media(p, true);
          dlg.querySelector('[data-q="cat"]').textContent = p.catLabel;
          dlg.querySelector('[data-q="name"]').textContent = p.name;
          dlg.querySelector('[data-q="short"]').textContent = p.short;
          dlg.querySelector('[data-q="material"]').textContent = p.material;
          dlg.querySelector('[data-q="compat"]').textContent = p.compat.join(', ');
          dlg.querySelector('[data-q="link"]').setAttribute('href', 'product-showcase.html?p=' + p.slug);
        });
      });
    } catch (e) { console.error('[site] #quick-view', e); }
  });

  // ---------- Product Showcase ----------
  document.querySelectorAll('[data-product-page]').forEach(function (root) {
    try {
      var m = /[?&]p=([a-z0-9-]+)/.exec(location.search);
      var p = (m && BY[m[1]]) || BY['starline-helmet'];
      var idx = PRODUCTS.indexOf(p);
      var prev = PRODUCTS[(idx - 1 + PRODUCTS.length) % PRODUCTS.length];
      var next = PRODUCTS[(idx + 1) % PRODUCTS.length];
      var set = function (k, v) { root.querySelectorAll('[data-bind="' + k + '"]').forEach(function (el) { el.textContent = v; }); };
      var html = function (k, v) { root.querySelectorAll('[data-bind-html="' + k + '"]').forEach(function (el) { el.innerHTML = v; }); };

      document.title = p.name + ' — MOTION DISTRICT';
      set('name', p.name); set('cat', p.catLabel); set('code', p.code); set('short', p.short);
      set('inspiration', p.inspiration); set('fn', p.fn); set('material', p.material); set('finish', p.finish);
      set('count', String(idx + 1).padStart(2, '0') + ' / ' + PRODUCTS.length);

      var mediaEl = root.querySelector('[data-bind-media]');
      if (mediaEl) mediaEl.innerHTML = media(p, true).replace(' loading="lazy"', '');

      html('story', p.story.map(function (s, i) { return '<p class="' + (i === 0 ? 'dropcap ' : '') + 'text-lg leading-relaxed text-ink/85">' + esc(s) + '</p>'; }).join(''));
      html('highlights', p.highlights.map(function (h, i) {
        return '<li class="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-ink/15 py-8 transition-colors duration-300 hover:bg-paper sm:grid-cols-[6rem_1fr_1.4fr] sm:gap-x-10 sm:px-4">' +
          '<span class="font-poster text-5xl text-brick sm:text-6xl">0' + (i + 1) + '</span>' +
          '<h3 class="self-center text-2xl font-bold leading-tight sm:text-3xl">' + esc(h[0]) + '</h3>' +
          '<p class="col-span-2 mt-3 max-w-prose text-base leading-relaxed text-muted sm:col-span-1 sm:mt-0 sm:self-center">' + esc(h[1]) + '</p></li>';
      }).join(''));
      html('specs', p.specs.map(function (s) {
        return '<div class="border border-paper/20 p-5 sm:p-6"><dt class="text-sm uppercase tracking-[0.16em] text-paper/70">' + esc(s[0]) + '</dt><dd class="mt-3 text-2xl font-bold leading-tight sm:text-3xl">' + esc(s[1]) + '</dd></div>';
      }).join(''));
      html('compat', p.compat.map(function (c) {
        return '<li class="border border-paper/40 px-4 py-2 text-base font-medium">' + esc(c) + '</li>';
      }).join(''));

      var rel = PRODUCTS.filter(function (x) { return x.cat === p.cat && x !== p; });
      PRODUCTS.forEach(function (x) { if (rel.length < 4 && x !== p && rel.indexOf(x) < 0) rel.push(x); });
      html('related', rel.slice(0, 4).map(relatedCard).join(''));

      root.querySelectorAll('[data-bind="prev-link"]').forEach(function (a) { a.setAttribute('href', 'product-showcase.html?p=' + prev.slug); });
      root.querySelectorAll('[data-bind="next-link"]').forEach(function (a) { a.setAttribute('href', 'product-showcase.html?p=' + next.slug); });
      set('prev-name', prev.name); set('next-name', next.name);
    } catch (e) { console.error('[site] product page', e); }
  });
})();
