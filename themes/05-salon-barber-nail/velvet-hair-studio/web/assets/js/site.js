/* VELVET HAIR STUDIO — hệ thống song ngữ VI / EN + lọc gallery cho lightbox.
 * Nội dung tiếng Việt nằm sẵn trong HTML (data-i18n) và được thu thành từ điển VI lúc tải trang;
 * toàn bộ bản tiếng Anh khai báo tập trung trong object EN bên dưới. Không tải lại trang khi đổi ngôn ngữ. */
(function () {
  'use strict';

  var EN = {
    /* Dùng chung */
    'c.skip': 'Skip to content',
    'c.navlabel': 'Main navigation',
    'c.mnavlabel': 'Mobile menu',
    'c.langlabel': 'Language',
    'c.menu': 'Open menu',
    'c.close': 'Close',
    'c.book': 'Book a Visit',
    'c.hours': 'Open daily 09:00-20:00',
    'c.ref': 'Guide price',
    'c.detail': 'View details',
    'n.home': 'Home',
    'n.services': 'Services',
    'n.gallery': 'Gallery',
    'n.about': 'About',
    'f.about': 'A hair studio devoted to modern, personal beauty: careful consultation, precise technique and a space where you can truly unwind.',
    'f.explore': 'Explore',
    'f.visit': 'Visit Us',
    'f.follow': 'Follow',
    'f.socialnote': 'Sample links, not connected to real accounts.',
    'f.rights': 'Content and contact details are for illustration only.',
    'b.eyebrow': 'Book at VELVET',
    'b.title': 'Arrange a consultation',
    'b.text': 'Call or message the studio to choose your stylist and a time that suits you. A first consultation helps us understand your hair and what you have in mind.',
    'b.phone': 'Phone',
    'b.copy': 'Copy',
    'b.hours': 'Opening hours',
    'b.note': 'Demo only: this website has no online booking system yet. The contact details above are sample data.',

    /* Tiêu đề trang */
    't.home': 'VELVET HAIR STUDIO — Your Hair, Your Signature',
    't.services': 'Services & Pricing — VELVET HAIR STUDIO',
    't.gallery': 'Gallery — VELVET HAIR STUDIO',
    't.about': 'About — VELVET HAIR STUDIO',

    /* Trang chủ */
    'h.eyebrow': 'Premium Hair Studio',
    'h.title': 'Your Hair.<br><em class="font-normal text-gold">Your Signature.</em>',
    'h.desc': 'Discover a style that reflects your individuality through expert craftsmanship, thoughtful consultation, and personalized hair care.',
    'h.cta1': 'Explore Services',
    'h.cta2': 'View Collection',
    's.label': 'The Velvet Philosophy',
    's.quote': '“Beauty begins when your style <em class="text-mocha">feels like you.</em>”',
    'sv.title': 'Signature Services',
    'sv.all': 'View All Services',
    'sv.1.name': 'Haircut & Styling',
    'sv.1.desc': 'Cuts and styling tailored to your face shape, hair texture and personal style.',
    'sv.2.name': 'Hair Coloring',
    'sv.2.desc': 'Fashion color, balayage and techniques that add depth and dimension to your hair.',
    'sv.2.price': 'from 900,000 VND',
    'sv.3.name': 'Hair Treatment',
    'sv.3.desc': 'Intensive care that helps improve the softness, smoothness and healthy shine of your hair.',
    'sv.3.price': 'from 500,000 VND',
    'lk.title': 'The Art of <em class="text-gold">Transformation</em>',
    'lk.link': 'View the full gallery',
    'lk.1.tag': 'Haircut',
    'lk.2.tag': 'Coloring',
    'lk.3.tag': 'Styling',
    'ph.title': 'More Than <em class="text-mocha">a Haircut</em>',
    'ph.p1': 'Every appointment at VELVET begins with listening. Your stylist takes time to understand your routine, how you care for your hair and the image you want to move toward.',
    'ph.p2': 'From there we read your texture, density and base color to choose the right cut and technique. The result is hair that is easy to live with and looks good even when you style it at home.',
    'ph.cta': 'Discover Our Story',
    'cta.title': 'Your Next Signature Look Awaits.',
    'cta.note': 'Illustrative call to action, no online booking yet.',

    /* Dịch vụ */
    'sp.eyebrow': 'Our Services',
    'sp.title': 'The Art <em class="text-gold">of Hair.</em>',
    'sp.desc': 'Every service begins with a consultation. Your stylist reads your hair, face shape and lifestyle before choosing a cut, a color or a treatment plan.',
    'sp.navlabel': 'Service categories',
    'sp.c1.short': 'Haircut & Styling',
    'sp.c2.short': 'Hair Coloring',
    'sp.c3.short': 'Perm & Texture',
    'sp.c4.short': 'Hair Treatment',
    'sp.d45': 'About 45 minutes',
    'sp.d60': 'About 60 minutes',
    'sp.d75': 'About 75 minutes',
    'sp.d90': 'About 90 minutes',
    'sp.d120': 'About 120 minutes',
    'sp.d150': 'About 150 minutes',
    'sp.d180': 'About 180 minutes',
    'sp.c1.title': 'Haircut & Styling',
    'sp.c1.desc': 'Cutting and styling services adjusted to your face shape, hair texture and needs.',
    'sp.c1.i1': 'Face-shape consultation, precision cut and finishing blow-dry.',
    'sp.c1.i2': 'Haircut with a nourishing wash and a full, bouncy blowout.',
    'sp.c1.i3': 'Waves, sleek straight styles or polished updos for a special day.',
    'sp.c1.i4': 'Buns, braids or styling for parties, weddings and photo shoots.',
    'sp.c1.p4': 'from 650,000 VND',
    'sp.c2.title': 'Hair Coloring',
    'sp.c2.desc': 'Coloring techniques chosen according to your base color, style and the result you want.',
    'sp.c2.i1': 'One even, glossy, long-lasting shade from root to end.',
    'sp.c2.i2': 'Refreshing new regrowth at the roots for a seamless color.',
    'sp.c2.i3': 'Hand-painted color with a soft, sunlit transition from root to tip.',
    'sp.c2.i4': 'Fine bright strands that add depth and catch the light.',
    'sp.c2.p1': 'from 900,000 VND',
    'sp.c2.p2': 'from 450,000 VND',
    'sp.c2.p3': 'from 1,800,000 VND',
    'sp.c2.p4': 'from 1,500,000 VND',
    'sp.c2.note': 'Coloring prices may vary with hair length, thickness and condition. Your stylist will confirm a quote after the consultation.',
    'sp.c3.title': 'Perm & Texture',
    'sp.c3.desc': 'Creating texture and natural movement for your hair.',
    'sp.c3.i1': 'A cold perm for soft curls that hold their shape when air-dried.',
    'sp.c3.i2': 'A heat perm for larger, defined waves that last longer.',
    'sp.c3.i3': 'Temporary volume and texture created with heat and styling products.',
    'sp.c3.p1': 'from 1,200,000 VND',
    'sp.c3.p2': 'from 1,800,000 VND',
    'sp.c3.p3': 'from 600,000 VND',
    'sp.c4.title': 'Hair Treatment',
    'sp.c4.desc': 'Care treatments that help improve softness, shine and how well your hair holds a style.',
    'sp.c4.i1': 'Intensive moisture mask for dry, frizzy or dull hair.',
    'sp.c4.i2': 'A treatment that helps restore hair after repeated coloring or perming.',
    'sp.c4.i3': 'Deep cleansing and scalp massage for a relaxed, refreshed scalp.',
    'sp.c4.p1': 'from 500,000 VND',
    'sp.c4.p2': 'from 800,000 VND',
    'sp.c4.p3': 'from 600,000 VND',
    'sp.c4.note': 'All prices on this page are illustrative and are not a confirmed price list of a real salon.',
    'ap.title': 'Our <em class="text-gold">Approach</em>',
    'ap.1.t': 'Consultation',
    'ap.1.d': 'Understanding your needs, personal style and the condition of your hair.',
    'ap.2.t': 'Personalization',
    'ap.2.d': 'Recommending the cut, color and method that suit you.',
    'ap.3.t': 'Craftsmanship',
    'ap.3.d': 'Your stylist performs the service with close attention to technique and detail.',
    'ap.4.t': 'Finishing Touch',
    'ap.4.d': 'Final styling and advice on caring for your hair at home.',
    'spc.note': 'Service prices may vary with hair length, texture and the complexity of the technique.',
    'spc.title': 'Let\'s Find Your <em class="text-mocha">Signature Style.</em>',
    'spc.home': 'Back to Home',

    /* Bộ sưu tập */
    'gp.title': 'A Study <em class="text-gold">of Hair.</em>',
    'gp.desc': 'Signature looks from each VELVET service: the cut, the color and the finish. Use the filters to browse by category and tap an image to view it larger.',
    'gp.edit': 'The Collection',
    'gp.filterlabel': 'Filter by category',
    'gp.f.all': 'All',
    'gp.f.cut': 'Haircut',
    'gp.f.color': 'Coloring',
    'gp.f.style': 'Styling',
    'g.1.d': 'Soft layers with gentle volume around the face.',
    'g.1.cap': 'Soft Layered Cut. Soft layers with gentle volume around the face.',
    'g.1.alt': 'A stylist cutting soft layers into a client\'s long hair',
    'g.2.d': 'A deep brown that shines like silk in the light.',
    'g.2.cap': 'Modern Brunette. A deep brown that shines like silk in the light.',
    'g.2.alt': 'Model with long, sleek, glossy dark brown hair',
    'g.3.d': 'Warm copper tones blending softly from root to tip.',
    'g.3.cap': 'Copper Balayage. Warm copper tones blending softly from root to tip.',
    'g.3.alt': 'Shoulder-length hair with a warm copper balayage',
    'g.4.d': 'Loose, natural waves with light movement.',
    'g.4.cap': 'Effortless Waves. Loose, natural waves with light movement.',
    'g.4.alt': 'Creating loose waves in long blonde hair',
    'g.5.d': 'Deep brunette hair blow-dried straight with a mirror shine.',
    'g.5.cap': 'Glossy Dark Hair. Deep brunette hair blow-dried straight with a mirror shine.',
    'g.5.alt': 'Sleek, straight, glossy dark brown hair seen from behind',
    'g.6.d': 'A shoulder-length shape cut to define natural curls.',
    'g.6.cap': 'Sculpted Curls. A shoulder-length shape cut to define natural curls.',
    'g.6.alt': 'Portrait of a model with short, shoulder-length curly hair',
    'g.7.d': 'Several blonde tones woven together for depth.',
    'g.7.cap': 'Blonde Dimension. Several blonde tones woven together for depth.',
    'g.7.alt': 'Model with multi-tonal blonde hair in a black turtleneck on a dark background',
    'g.8.d': 'A round-brush blowout with volume and shine.',
    'g.8.cap': 'Signature Styling. A round-brush blowout with volume and shine.',
    'g.8.alt': 'Styling long blonde hair with a round brush',
    'g.9.d': 'A precise cut with even, healthy ends.',
    'g.9.cap': 'Precision Cut. A precise cut with even, healthy ends.',
    'g.9.alt': 'A stylist trimming a client\'s ends with scissors',
    'tr.title': 'Trending <em class="text-gold">Looks</em>',
    'tr.note': 'Suggestions from our stylists\' point of view for reference, not verified market data.',
    'tr.1.alt': 'Portrait of a model with natural, dimensional blonde hair',
    'tr.1.d': 'Color close to your natural base with a few fine bright strands, adding depth without frequent root touch-ups.',
    'tr.2.alt': 'Model with a modern layered haircut',
    'tr.2.d': 'Long, softly connected layers that make hair lighter with natural volume when blow-dried.',
    'tr.3.alt': 'Long, glossy, wavy hair of a model in a black top',
    'tr.3.d': 'Putting shine and healthy strands first: gloss treatments, regular conditioning and less heat.',
    'gc.title': 'Inspired by a Look?',

    /* Về chúng tôi */
    'ab.title': 'A Space for <em class="text-gold">Your Signature.</em>',
    'ab.desc': 'VELVET is a studio built around personalization: careful styling technique, unhurried consultations and a space where you can relax.',
    'st.title': 'The Story Behind <em class="text-mocha">VELVET</em>',
    'st.p1': 'VELVET began with a simple wish: to create a place where anyone can sit down, talk about their hair and be fully heard. We believe a beautiful haircut does not start with the scissors, but with the conversation before it.',
    'st.p2': 'Inspired by the pages of fashion magazines, we treat every appointment like a page layout: weighing line, color and light so the result has personality and still fits your everyday life.',
    'st.quote': '“The best style is the one you carry easily every day.”',
    'va.title': 'What We <em class="text-gold">Believe In</em>',
    'va.1.t': 'Individuality',
    'va.1.d': 'Every head of hair is different. We aim for a style that suits each client\'s personality and needs.',
    'va.2.t': 'Craftsmanship',
    'va.2.d': 'We focus on cutting, coloring and styling technique, and care about every detail along the way.',
    'va.3.t': 'Experience',
    'va.3.d': 'We create a friendly, refined and comfortable space where clients can enjoy time for themselves.',
    'ts.title': 'Meet the Stylists',
    'ts.note': 'Names and profiles are illustrative content for this design.',
    'ts.spec': 'Expertise:',
    'ts.1.alt': 'Portrait of Maya Tran, Creative Director',
    'ts.1.d': 'Pursues modern styling with a balance between personality and everyday wearability.',
    'ts.2.alt': 'Portrait of Linh Nguyen, Color Specialist',
    'ts.2.d': 'Focuses on depth of color and harmony with each client\'s personal style.',
    'ts.3.alt': 'Black and white portrait of Alex Pham, Senior Stylist',
    'ts.3.d': 'Favors clean lines, natural texture and cuts that style in many ways.',
    'sd.title': 'Designed for <em class="text-mocha">Your Comfort.</em>',
    'sd.1': 'Cutting area',
    'sd.2': 'Mirrors and styling chairs',
    'sd.3': 'Wash area',
    'sd.4': 'Materials and lighting',
    'sd.1.alt': 'A client having a haircut in front of a large mirror',
    'sd.2.alt': 'Three black styling chairs facing round mirrors on a dark wall',
    'sd.3.alt': 'A row of wash basins in the salon',
    'sd.4.alt': 'A white counter and chandelier giving warm light in the salon',
    'ct.title': 'Visit <em class="text-gold">VELVET</em>',
    'ct.note': 'The details below are mock data for interface design. This website has no form that sends data.',
    'ct.addr': 'Address',
    'ct.daily': 'Every day',
    'ct.social': 'Social'
  };

  var STORE = 'velvet-lang';
  var root = document.documentElement;
  var textEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var attrEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n-attr]'));

  // Thu từ điển tiếng Việt từ nội dung gốc trong HTML
  textEls.forEach(function (el) { el.__vi = el.tagName === 'TITLE' ? el.textContent : el.innerHTML; });
  attrEls.forEach(function (el) {
    el.__map = el.getAttribute('data-i18n-attr').split('|').map(function (pair) {
      var i = pair.indexOf(':');
      var name = pair.slice(0, i).trim();
      return { name: name, key: pair.slice(i + 1).trim(), vi: el.getAttribute(name) || '' };
    });
  });

  function pick(lang, key, vi) {
    if (lang !== 'en') return vi;
    if (EN[key] == null) { console.warn('[i18n] thiếu bản EN:', key); return vi; }
    return EN[key];
  }

  function apply(lang) {
    try {
      textEls.forEach(function (el) {
        var v = pick(lang, el.getAttribute('data-i18n'), el.__vi);
        if (el.tagName === 'TITLE') document.title = v; else el.innerHTML = v;
      });
      attrEls.forEach(function (el) {
        el.__map.forEach(function (m) { el.setAttribute(m.name, pick(lang, m.key, m.vi)); });
      });
      root.setAttribute('lang', lang);
      document.querySelectorAll('[data-lang-set]').forEach(function (b) {
        var on = b.getAttribute('data-lang-set') === lang;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      try { localStorage.setItem(STORE, lang); } catch (e) { /* file:// không có storage */ }
    } catch (e) { console.error('[site] i18n', e); }
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-lang-set]');
    if (b) apply(b.getAttribute('data-lang-set'));
  });

  var saved = 'vi';
  try { saved = localStorage.getItem(STORE) || 'vi'; } catch (e) { /* bỏ qua */ }
  apply(saved === 'en' ? 'en' : 'vi');

  // Gallery: lightbox chỉ chuyển qua những ảnh đang hiện theo bộ lọc
  document.querySelectorAll('#edit[data-filter-group]').forEach(function (group) {
    try {
      var sync = function (cat) {
        group.querySelectorAll('[data-category]').forEach(function (it) {
          var show = cat === 'all' || (' ' + it.getAttribute('data-category') + ' ').indexOf(' ' + cat + ' ') >= 0;
          var a = it.querySelector('[data-lightbox]');
          if (a) a.setAttribute('data-lightbox', show ? 'edit' : 'edit-hidden');
        });
      };
      group.addEventListener('click', function (e) {
        var b = e.target.closest('[data-filter]');
        if (b) sync(b.getAttribute('data-filter'));
      });
    } catch (e) { console.error('[site] #edit', e); }
  });
})();
