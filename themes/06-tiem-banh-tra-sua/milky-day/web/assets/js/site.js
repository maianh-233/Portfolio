/* MILKY DAY - công tắc ngôn ngữ VI / EN (song ngữ phía client, không cần backend).
   Phần tử có data-en="..." đổi nội dung; data-en-alt / data-en-aria-label / data-en-content đổi thuộc tính. */
(function () {
  var KEY = 'milkyday-lang';
  var ATTRS = ['alt', 'aria-label', 'content', 'title'];
  try {
    var root = document.documentElement;
    var nodes = [].slice.call(document.querySelectorAll('[data-en]'));
    nodes.forEach(function (n) { n.setAttribute('data-vi', n.innerHTML); });
    var attrNodes = [];
    ATTRS.forEach(function (a) {
      [].slice.call(document.querySelectorAll('[data-en-' + a + ']')).forEach(function (n) {
        n.setAttribute('data-vi-' + a, n.getAttribute(a) || '');
        attrNodes.push([n, a]);
      });
    });
    var btns = [].slice.call(document.querySelectorAll('[data-lang-set]'));

    function apply(lang) {
      var en = lang === 'en';
      nodes.forEach(function (n) {
        n.innerHTML = n.getAttribute(en ? 'data-en' : 'data-vi');
      });
      attrNodes.forEach(function (p) {
        p[0].setAttribute(p[1], p[0].getAttribute((en ? 'data-en-' : 'data-vi-') + p[1]));
      });
      root.setAttribute('lang', en ? 'en' : 'vi');
      btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang-set') === lang)); });
      try { localStorage.setItem(KEY, lang); } catch (e) {}
    }

    btns.forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-lang-set')); });
    });

    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved === 'en') apply('en');
  } catch (e) { console.error('[site] lang', e); }
})();
