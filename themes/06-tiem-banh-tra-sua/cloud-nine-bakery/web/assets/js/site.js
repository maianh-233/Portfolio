/* CLOUD NINE BAKERY - EN / VI language toggle.
   Markup: English text in the element, Vietnamese in data-vi (innerHTML allowed).
   Optional: data-vi-alt, data-vi-aria, data-vi-placeholder; <html data-vi-title> for the document title. */
(function () {
  try {
    var KEY = 'c9-lang';
    var root = document.documentElement;
    var enTitle = document.title;

    function store(el) {
      if (el.hasAttribute('data-vi') && !el.hasAttribute('data-en')) el.setAttribute('data-en', el.innerHTML);
      ['alt', 'aria-label', 'placeholder'].forEach(function (a) {
        var vk = 'data-vi-' + (a === 'aria-label' ? 'aria' : a);
        if (el.hasAttribute(vk) && !el.hasAttribute('data-en-' + a)) el.setAttribute('data-en-' + a, el.getAttribute(a) || '');
      });
    }

    function apply(lang) {
      var nodes = document.querySelectorAll('[data-vi],[data-vi-alt],[data-vi-aria],[data-vi-placeholder]');
      Array.prototype.forEach.call(nodes, function (el) {
        store(el);
        if (el.hasAttribute('data-vi')) {
          var html = lang === 'vi' ? el.getAttribute('data-vi') : el.getAttribute('data-en');
          if (el.innerHTML !== html) {
            el.innerHTML = html;
            if (el.hasAttribute('data-split')) {
              el.classList.add('m-done', 'is-in');
              el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
            }
          }
        }
        if (el.hasAttribute('data-vi-alt')) el.setAttribute('alt', lang === 'vi' ? el.getAttribute('data-vi-alt') : el.getAttribute('data-en-alt'));
        if (el.hasAttribute('data-vi-aria')) el.setAttribute('aria-label', lang === 'vi' ? el.getAttribute('data-vi-aria') : el.getAttribute('data-en-aria-label'));
        if (el.hasAttribute('data-vi-placeholder')) el.setAttribute('placeholder', lang === 'vi' ? el.getAttribute('data-vi-placeholder') : el.getAttribute('data-en-placeholder'));
      });
      root.setAttribute('lang', lang);
      document.title = lang === 'vi' && root.getAttribute('data-vi-title') ? root.getAttribute('data-vi-title') : enTitle;
      Array.prototype.forEach.call(document.querySelectorAll('[data-lang-set]'), function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-lang-set') === lang ? 'true' : 'false');
      });
      try { localStorage.setItem(KEY, lang); } catch (e) {}
    }

    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-lang-set]');
      if (!b) return;
      e.preventDefault();
      apply(b.getAttribute('data-lang-set'));
    });

    var saved = 'en';
    try { saved = localStorage.getItem(KEY) || 'en'; } catch (e) {}
    if (saved === 'vi') apply('vi'); else apply('en');
  } catch (err) {
    console.error('[site] lang toggle', err);
  }
})();
