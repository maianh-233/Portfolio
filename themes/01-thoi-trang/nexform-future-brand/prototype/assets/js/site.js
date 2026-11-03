/* NEXFORM - page-specific: split [data-words] paragraphs into word spans so the
   scroll value --p (set by motion.js data-scrub) can light them up one by one. */
(function () {
  var blocks = document.querySelectorAll('[data-words]');
  Array.prototype.forEach.call(blocks, function (el) {
    var words = el.textContent.trim().split(/\s+/);
    el.setAttribute('aria-label', words.join(' '));
    el.textContent = '';
    el.style.setProperty('--n', words.length);
    words.forEach(function (w, i) {
      var s = document.createElement('span');
      s.className = 'w';
      s.setAttribute('aria-hidden', 'true');
      s.style.setProperty('--i', i);
      s.textContent = w;
      el.appendChild(s);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
  });
})();
