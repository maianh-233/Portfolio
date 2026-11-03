(function () {
  var KEY = 'noir-lang';

  function current() {
    return document.documentElement.getAttribute('lang') === 'vi' ? 'vi' : 'en';
  }

  function setLang(lang) {
    var next = lang === 'vi' ? 'vi' : 'en';
    document.documentElement.setAttribute('lang', next);
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {}
    document.querySelectorAll('[data-lang-set]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang-set') === next ? 'true' : 'false');
    });
  }

  var saved = 'en';
  try {
    saved = localStorage.getItem(KEY) || 'en';
  } catch (e) {}
  setLang(saved);

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-lang-set]');
    if (!btn) return;
    setLang(btn.getAttribute('data-lang-set'));
  });

  window.NoirLang = { set: setLang, current: current };
})();
