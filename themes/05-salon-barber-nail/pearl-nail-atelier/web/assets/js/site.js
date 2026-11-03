/* PEARL NAIL ATELIER - logic riêng của website
 * 1. Chuyển ngôn ngữ VI / EN tại chỗ (từ điển tập trung, lưu localStorage 'pna-lang')
 *    - [data-i18n]          : thay nội dung phần tử
 *    - [data-i18n-alt]      : thay alt ảnh
 *    - [data-i18n-caption]  : thay chú thích lightbox
 *    Tiếng Việt là nội dung gốc trong HTML; tiếng Anh nằm trong EN bên dưới.
 * 2. Gallery: ảnh bị bộ lọc ẩn không xuất hiện trong lightbox.
 */
(function () {
  'use strict';

  var EN = {
    /* Tiêu đề trang */
    't-home': 'PEARL NAIL ATELIER — Beauty in Every Detail',
    't-services': 'Services & Pricing — PEARL NAIL ATELIER',
    't-gallery': 'Nail Gallery — PEARL NAIL ATELIER',
    't-about': 'About the Atelier — PEARL NAIL ATELIER',

    /* Điều hướng chung */
    'n-home': 'Home',
    'n-services': 'Services &amp; Pricing',
    'n-gallery': 'Nail Gallery',
    'n-about': 'About the Atelier',
    'n-book': 'Book a Visit',

    /* Footer */
    'f-msg': 'Beauty lives in details finished with care.',
    'f-pages': 'Pages',
    'f-visit': 'Visit the Atelier',
    'f-addr': '18 Ngo Van Nam, Ben Nghe Ward, District 1, Ho Chi Minh City',
    'f-hours-t': 'Opening hours',
    'f-h1': 'Tuesday to Friday',
    'f-h2': 'Saturday, Sunday',
    'f-h3': 'Monday',
    'f-closed': 'Closed',
    'f-rights': 'All rights reserved.',
    'f-sample': 'Address, hours, prices and images on this website are sample content.',

    /* Đặt lịch (bản demo) */
    'b-eyebrow': 'Book an appointment',
    'b-title': 'Choose a moment for your hands',
    'b-name': 'Full name',
    'b-phone': 'Phone number',
    'b-service': 'Service of interest',
    'b-opt0': 'Select a service',
    'b-opt1': 'Manicure',
    'b-opt2': 'Pedicure',
    'b-opt3': 'Gel polish',
    'b-opt4': 'Nail extension',
    'b-opt5': 'Custom nail art',
    'b-opt6': 'Bridal nails (consultation first)',
    'b-opt7': 'Nail care',
    'b-date': 'Preferred date',
    'b-time': 'Time of day',
    'b-t0': 'Select a time',
    'b-t1': 'Morning (9:30 - 12:00)',
    'b-t2': 'Afternoon (13:00 - 17:00)',
    'b-t3': 'Evening (17:00 - 20:00)',
    'b-note': 'Design notes (optional)',
    'b-demo': 'Demo only: this form checks your details but sends nothing and creates no real booking.',
    'b-submit': 'Send request',

    /* Trang chủ */
    'h-eyebrow': 'Nail artistry · Est. 2024',
    'h-title': 'Beauty in <em class="italic">Every Detail.</em>',
    'h-sub': 'Manicures and nail art finished slowly, with chosen materials and careful hands.',
    'h-cta1': 'Explore Services',
    'h-hero-alt': 'Hand with soft blush nude nails resting on white fabric',
    'h-hero-cap1': 'Blush Milk',
    'h-hero-cap2': 'Signature Manicure, milky pink gel',
    'h-ph-title': 'A beautiful set begins with <em class="italic">listening.</em>',
    'h-ph-p1': 'At PEARL NAIL ATELIER, every appointment opens with a short conversation: the shape of your hands, your daily rhythm, what you like to wear. From there we choose the length, shape and shade that suit you best.',
    'h-ph-p2': 'No chasing trends. Only details made with care, refined enough to stay with you for weeks.',
    'h-ph-link': 'The Atelier story',
    'h-ph-alt': 'A nail technician carefully preparing a client\'s nails at the salon',
    'h-ph-cap1': 'Surface preparation',
    'h-ph-cap2': 'The first step of every set',
    'h-sv-title': 'Four services that define the Atelier',
    'h-sv-all': 'View the full price list',
    'h-s1-alt': 'Neat milky white manicure',
    'h-s1-d': 'Cleansing, shaping and cuticle care, finished with a natural gloss.',
    'h-s2-alt': 'A fine brush applying pale lilac gel polish to a nail',
    'h-s2-d': 'A thin layer of gel with deep shine and lasting colour that still feels light.',
    'h-s3-alt': 'Hand with intricate nail art holding a delicate sprig',
    'h-s3-d': 'Hand-painted designs in your own style, from a single fine line to pearl details.',
    'h-s4-alt': 'Manicure tools laid out neatly on a white towel',
    'h-s4-d': 'A restoring ritual for thin, weak nails that nourishes hands and nails from the root.',
    'h-dt-eyebrow': 'The Art of Detail',
    'h-dt-title': 'Small details, <em class="italic">seen up close.</em>',
    'h-d1-alt': 'Hand with a French manicure holding a small flower',
    'h-d1-c': 'A tip line just one millimetre wide, painted by hand to keep it even and fine.',
    'h-d2-alt': 'Hands with milky lilac polish and one shimmer accent nail',
    'h-d2-c': 'A smoky lilac milk, smooth as porcelain, with one fine shimmer accent nail.',
    'h-d3-alt': 'Hands with pearlescent nails and a ring on wood',
    'h-d3-c': 'Pearl and chrome laid on very thinly, visible only when they catch the light.',
    'h-dt-link': 'View the Nail Gallery',
    'h-ex-alt': 'A client having her nails done at a bright manicure table',
    'h-ex-title': 'One table, one guest, one quiet hour.',
    'h-ex-p': 'Natural light, a pared-back manicure table and a neutral palette. Tools are sterilised after every guest, and your time is never shared with anyone else.',
    'h-ex-l1': 'Dedicated tools for every guest',
    'h-ex-l2': 'Booked in advance, no waiting',
    'h-ex-l3': 'Warm tea and a quiet seat',
    'h-cta-title': 'Your Next <em class="italic">Signature Detail.</em>',
    'h-cta-call': 'Or call',

    /* Dịch vụ & Bảng giá */
    's-title': 'Thoughtfully Crafted, <em class="italic">Beautifully Finished.</em>',
    's-intro': 'Every service begins with careful cleansing and shaping. If you are not sure where to start, choose the Signature Manicure and your artist will suggest more once she sees your nails.',
    's-c3': 'Gel Polish',
    's-c4': 'Nail Extension',
    's-c5': 'Custom Nail Art',
    's-c6': 'Nail Care',
    's-hero-alt': 'Hand with a neat pale pink manicure',
    's-menu-title': 'Price list',
    's-menu-note': 'Prices are in VND and include cleansing and hand care. Nail art pricing may vary with the complexity and decorative details of the design.',
    's-menu-sample': 'Prices shown are sample data.',
    'u-min': 'min',
    'u-from': 'from',
    'u-nail': '/nail',
    'u-set': '/set',
    's-m-d': 'Complete hand nail care: cleansing, shaping, cuticle work and a refined surface finish.',
    's-m-alt': 'Pink manicure on white fabric',
    's-m1': 'Cleanse, trim and file, cuticle push and a nourishing gloss.',
    's-m2': 'Adds exfoliation, a hydrating hand mask and a light massage.',
    's-m3': 'Dry e-file cleansing for a close, clean cuticle line.',
    's-p-alt': 'Feet with neatly painted toenails',
    's-p-d': 'Care for toenails and heels, finished cleanly with a thin, even coat.',
    's-p1': 'Foot soak, cleanse, trim and file, nourishing polish.',
    's-p2': 'Adds heel care, exfoliation and deep moisture.',
    's-g-d': 'Deep shine and colour that lasts two to three weeks. Choose a solid shade, a sheer layer or a classic French.',
    's-g-alt': 'Hand with gel polish resting on white fur',
    's-g1': 'One solid shade from the Atelier\'s neutral palette.',
    's-g2': 'Sheer or milky white, as soft as natural nails.',
    's-g3': 'A nude base with a hand-painted tip line.',
    's-e-alt': 'Hands with medium-length glossy nails',
    's-e-d': 'Shape and moderate length, built with a thin gel layer so nails look natural.',
    's-e1': 'Gel built on forms, in oval, almond or soft square.',
    's-e2': 'Short length, extended just enough to even out all ten nails.',
    's-e3': 'Fills in the grown-out area and refreshes the surface.',
    's-a-h': 'Custom Nail Art',
    's-a-d': 'Personalised design added to a gel service. Pricing depends on the number of nails and the complexity of the pattern.',
    's-a-alt': 'French manicure with a soft touch of glitter',
    's-a1': 'Fine lines, small dots or minimal colour blocks.',
    's-a2': 'Tiny pearls set by hand at the base or tip of the nail.',
    's-a3': 'A thin chrome glaze with a pearl or silver sheen.',
    's-a4': 'A wedding design, including a consultation and trial session.',
    's-c-alt': 'Hand holding various nail care tools',
    's-c-d': 'Keeps nails looking healthy between appointments, especially after long-term gel wear.',
    's-r1': 'Treats cracked, broken or partly lifted nails.',
    's-r2': 'Softens and nourishes the skin around the nail.',
    's-r3': 'A nourishing coat that helps thin, weak nails feel stronger.',
    's-n-title': 'Before you visit',
    's-n-sub': 'A few small things that make your appointment complete. These are general suggestions; your artist will discuss the details when you book.',
    's-q1': 'Estimated duration',
    's-a-1': 'Times on the price list are estimates for healthy hands. Removing old gel or detailed designs may take 15 to 30 minutes longer.',
    's-q2': 'Repairs and removal',
    's-a-2': 'If a nail lifts or breaks in the first few days, message the Atelier so we can take another look. Gel and extensions are removed gently, without heavy filing on your natural nail.',
    's-q3': 'Special designs and bridal nails',
    's-a-3': 'For custom or wedding designs, we recommend sending reference images and talking with us a few days ahead, so your artist can prepare the right materials and time.',
    's-q4': 'If you need to reschedule',
    's-a-4': 'Let us know early by phone or Zalo and the Atelier will arrange another time for you.',
    's-b-title': 'Found your service? <em class="italic">Save yourself a seat.</em>',
    's-copy': 'Copy number',

    /* Bộ sưu tập */
    'g-title': 'A Study <em class="italic">in Nail Art.</em>',
    'g-intro': 'Colour, material, form and technique, placed side by side like the pages of a magazine. Choose a style or open each design to see it closer.',
    'g-hero-alt': 'Hand with nude nails resting on white fabric',
    'g-hero-cap': 'Nude &amp; Milky',
    'g-f0': 'All Designs',
    'g-f1': 'Minimalist',
    'g-f2': 'Bridal',
    'g-f3': 'Nude &amp; Milky',
    'g-f4': 'Pearl &amp; Luxury',
    'g-1c': 'Blush Line. A fine blush line on a sheer nude base.',
    'g-1a': 'Hand with minimalist nails on a pink surface',
    'g-1d': 'A fine blush line on a sheer nude base.',
    'g-2c': 'Milk Veil. Sheer milky white with a porcelain shine.',
    'g-2a': 'Hand with milky nails on a white table',
    'g-2d': 'Sheer milky white with a porcelain shine.',
    'g-3c': 'Ivory Vow. A soft ivory for the wedding day, made for any gown.',
    'g-3a': 'Hands resting on a white wedding dress',
    'g-3d': 'A soft ivory for the wedding day, made for any gown.',
    'g-4c': 'Pearl Drop. A single small pearl at the base of the nail.',
    'g-4a': 'Hand wearing a pearl bracelet and ring on a handbag',
    'g-4d': 'A single small pearl at the base of the nail.',
    'g-5c': 'Hairline French. An ultra-fine French tip, almost invisible.',
    'g-5a': 'Hand with a fine French manicure wearing a ring',
    'g-5d': 'An ultra-fine French tip, almost invisible.',
    'g-6c': 'Bare Satin. Satin nude with a soft matte finish.',
    'g-6a': 'Hand with nude nails wearing a gold and silver watch',
    'g-6d': 'Satin nude with a soft matte finish.',
    'g-7c': 'Petal Hour. A gentle powder pink for daytime weddings.',
    'g-7a': 'Manicured hand holding a flower',
    'g-7d': 'A gentle powder pink for daytime weddings.',
    'g-8c': 'Lustre Edit. A thin pearl sheen across the whole nail.',
    'g-8a': 'Hand with a pearl necklace',
    'g-8d': 'A thin pearl sheen across the whole nail.',
    'g-9c': 'Soft Point. One small dot placed off-centre on a sheer base.',
    'g-9a': 'Hand with minimal painted nails',
    'g-9d': 'One small dot placed off-centre on a sheer base.',
    'g-10c': 'Rose Quartz. A bright rosy nude, made for delicate jewellery.',
    'g-10a': 'Hand with rosy nude nails wearing a ring',
    'g-10d': 'A bright rosy nude, made for delicate jewellery.',
    'g-11c': 'Veil & Vow. Milky white with a touch of metallic for the ceremony.',
    'g-11a': 'Bride\'s clasped hands with a wedding ring and veil',
    'g-11d': 'Milky white with a touch of metallic for the ceremony.',
    'g-rv-eyebrow': 'Featured collection',
    'g-rv-p': 'Pearl white, nude and a restrained metallic glow. Three designs for days when you want your hands to shine, quietly.',
    'g-rv-1': 'Pearl white, thin chrome',
    'g-rv-2': 'Mauve, silver shimmer',
    'g-rv-3': 'Nude, metallic edge',
    'g-rv-c1': 'Moonlit Shell. Pearl white with a thin chrome layer.',
    'g-rv-c2': 'Mauve Pearl. Mauve paired with white and silver shimmer.',
    'g-rv-c3': 'Quiet Ring. Sheer nude with a fine metallic edge.',
    'g-rv-a1': 'A woman showing pearl jewellery and an elegant manicure',
    'g-rv-a2': 'Hand with mauve, white and silver shimmer nails holding a white knit sweater',
    'g-rv-a3': 'Hand with nude nails wearing a slim ring',
    'g-cta-title': 'Find the Detail <em class="italic">That Feels Like You.</em>',
    'g-cta-btn': 'Book a Design Consultation',

    /* Về Atelier */
    'a-title': 'Behind every set, <em class="italic">a patient pair of hands.</em>',
    'a-hero-alt': 'White table with a vase of flowers in the bright atelier',
    'a-st-title': 'It began with one small manicure table.',
    'a-st-p1': 'PEARL NAIL ATELIER opened in 2024 from a simple wish: a place where every guest is cared for completely, without hurry, without chasing numbers.',
    'a-st-p2': 'We believe beauty lives in details finished with care. An even tip line, a thin flat coat of polish, a shade that suits the skin. Those small things are what make you feel confident each time you reach out your hand.',
    'a-st-q': '“We don\'t work faster. We work more carefully.”',
    'a-st-p3': 'The Atelier stays small on purpose. Few tables, few guests each day, so every design has enough time and every conversation has enough listening.',
    'a-ph-title': 'Three things we hold on to',
    'a-v1': 'Care in every movement, from the cuticle push to the final brushstroke.',
    'a-v2': 'Respect for your own style. Designs are suggested by you, not by a ready-made template.',
    'a-v3': 'Refined, lasting beauty that does not depend on passing trends.',
    'a-ar-title': 'The hands behind the brush',
    'a-ar-sub': 'The profiles below are sample content and will be replaced with the real team.',
    'a-r1-alt': 'Nail artist applying polish to pink nails',
    'a-r1-role': 'Minimalist design',
    'a-r1-d': 'Loves fine lines and empty space on the nail. She will usually suggest one detail instead of ten.',
    'a-r2-alt': 'Portrait of a woman resting her hand lightly on her chin',
    'a-r2-role': 'Bridal nails',
    'a-r2-d': 'Leads our wedding consultations, paying attention to the gown, the bouquet and the light at the venue.',
    'a-r3-alt': 'Nail artist in black preparing tools at the atelier',
    'a-r3-role': 'Detailed nail art',
    'a-r3-d': 'Enjoys working with pearls, chrome and layered hand-painted patterns.',
    'a-in-title': 'Inside the Atelier',
    'a-i1': '<span class="font-display text-xl italic text-cocoa">The lounge.</span> Soft chairs, gentle light, a cup of tea before your appointment.',
    'a-i1a': 'A guest seated in the bright lounge',
    'a-i1c': 'The lounge. Soft chairs, gentle light, a cup of tea before your appointment.',
    'a-i2': '<span class="font-display text-xl italic text-cocoa">Mirror and white shelves.</span> Everything in its place, nothing extra.',
    'a-i2a': 'A mirror standing on a white shelf',
    'a-i2c': 'Mirror and white shelves. Everything in its place, nothing extra.',
    'a-i3': '<span class="font-display text-xl italic text-cocoa">Tools and materials.</span> Sterilised and put back in order after every guest.',
    'a-i3a': 'Nail care bottles arranged on a table',
    'a-i3c': 'Tools and materials. Sterilised and put back in order after every guest.',
    'a-i4': '<span class="font-display text-xl italic text-cocoa">The colour wall.</span> Where you and your artist choose a shade together.',
    'a-i4a': 'Rows of nail polish bottles on gold shelves',
    'a-i4c': 'The colour wall. Where you and your artist choose a shade together.',
    'a-vs-title': 'Visit the Atelier',
    'a-vs-addr-t': 'Address',
    'a-vs-phone-t': 'Phone',
    'a-vs-contact': 'Get in Touch',
    'a-map-note': 'Illustrative map',
    'a-map-area': 'Ben Nghe, District 1, a few minutes\' walk from Bach Dang Wharf',
    'a-map-link': 'Open Google Maps',
    'a-map-sub': 'Address and map are sample content and will be replaced with the Atelier\'s real location.'
  };

  var KEY = 'pna-lang';
  var originals = new Map();

  function remember(el, prop, value) {
    var rec = originals.get(el);
    if (!rec) { rec = {}; originals.set(el, rec); }
    if (!(prop in rec)) rec[prop] = value;
    return rec[prop];
  }

  function apply(lang) {
    var en = lang === 'en';
    try {
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var k = el.getAttribute('data-i18n');
        if (el.tagName === 'TITLE') {
          var vt = remember(el, 'text', el.textContent);
          document.title = en && EN[k] ? EN[k] : vt;
          return;
        }
        var vi = remember(el, 'html', el.innerHTML);
        el.innerHTML = en && EN[k] != null ? EN[k] : vi;
      });
      document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
        var k = el.getAttribute('data-i18n-alt');
        var vi = remember(el, 'alt', el.getAttribute('alt') || '');
        el.setAttribute('alt', en && EN[k] ? EN[k] : vi);
      });
      document.querySelectorAll('[data-i18n-caption]').forEach(function (el) {
        var k = el.getAttribute('data-i18n-caption');
        var vi = remember(el, 'cap', el.getAttribute('data-caption') || '');
        el.setAttribute('data-caption', en && EN[k] ? EN[k] : vi);
      });
      document.documentElement.setAttribute('lang', en ? 'en' : 'vi');
      document.querySelectorAll('[data-lang]').forEach(function (b) {
        var on = b.getAttribute('data-lang') === lang;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    } catch (e) { console.error('[site] i18n', e); }
  }

  var saved = 'vi';
  try { saved = localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch (e) {}
  apply(saved);

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-lang]');
    if (!b) return;
    var lang = b.getAttribute('data-lang') === 'en' ? 'en' : 'vi';
    try { localStorage.setItem(KEY, lang); } catch (err) {}
    apply(lang);
  });

  /* Gallery: chỉ ảnh đang hiển thị mới nằm trong nhóm lightbox */
  document.querySelectorAll('#gallery-grid').forEach(function (root) {
    try {
      var sync = function (cat) {
        root.querySelectorAll('[data-category]').forEach(function (it) {
          var show = cat === 'all' || (' ' + it.getAttribute('data-category') + ' ').indexOf(' ' + cat + ' ') >= 0;
          var a = it.querySelector('[data-lightbox]');
          if (a) a.setAttribute('data-lightbox', show ? 'gallery' : 'gallery-hidden');
        });
      };
      root.querySelectorAll('[data-filter]').forEach(function (btn) {
        btn.addEventListener('click', function () { sync(btn.getAttribute('data-filter')); });
      });
      sync('all');
    } catch (e) { console.error('[site] #gallery-grid', e); }
  });
})();
