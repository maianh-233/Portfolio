/* MONOCHROME GENTLEMEN — chuyển ngôn ngữ VI / EN + nút đặt lịch minh họa.
   Tiếng Việt là nội dung gốc trong HTML; bản tiếng Anh tập trung trong i18n.js (window.MG_EN). */
(function () {
  'use strict';
  var KEY = 'mg-lang';
  var EN = window.MG_EN || {};
  var MSG = {
    vi: { book: 'Bản minh họa: đặt lịch chưa kết nối hệ thống thật. Vui lòng gọi 024 7108 9264 (số mẫu).' },
    en: { book: 'Demo only: online booking is not connected yet. Please call 024 7108 9264 (sample number).' }
  };
  var vi = { text: new WeakMap(), html: new WeakMap(), attr: new WeakMap() };
  var current = 'vi';

  function parseAttr(spec) {
    return spec.split(';').map(function (p) {
      var i = p.indexOf(':');
      return i > 0 ? [p.slice(0, i).trim(), p.slice(i + 1).trim()] : null;
    }).filter(Boolean);
  }

  function capture() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (!vi.text.has(el)) vi.text.set(el, el.textContent);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      if (!vi.html.has(el)) vi.html.set(el, el.innerHTML);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      if (vi.attr.has(el)) return;
      var o = {};
      parseAttr(el.getAttribute('data-i18n-attr')).forEach(function (pair) { o[pair[0]] = el.getAttribute(pair[0]) || ''; });
      vi.attr.set(el, o);
    });
  }

  function pick(key, fallback, lang) {
    if (lang !== 'en') return fallback;
    if (Object.prototype.hasOwnProperty.call(EN, key)) return EN[key];
    console.warn('[i18n] thiếu bản dịch EN:', key);
    return fallback;
  }

  function apply(lang) {
    current = lang === 'en' ? 'en' : 'vi';
    document.documentElement.setAttribute('lang', current);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = pick(el.getAttribute('data-i18n'), vi.text.get(el), current);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = pick(el.getAttribute('data-i18n-html'), vi.html.get(el), current);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var orig = vi.attr.get(el) || {};
      parseAttr(el.getAttribute('data-i18n-attr')).forEach(function (pair) {
        el.setAttribute(pair[0], pick(pair[1], orig[pair[0]], current));
      });
    });
    document.querySelectorAll('[data-lang-set]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang-set') === current ? 'true' : 'false');
    });
  }

  try {
    capture();
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved === 'en') apply('en'); else apply('vi');

    document.addEventListener('click', function (e) {
      var sw = e.target.closest('[data-lang-set]');
      if (sw) {
        var lang = sw.getAttribute('data-lang-set');
        apply(lang);
        try { localStorage.setItem(KEY, current); } catch (err) {}
        return;
      }
      var bk = e.target.closest('[data-book]');
      if (bk) {
        e.preventDefault();
        if (window.UI && UI.toast) UI.toast(MSG[current].book, 'info');
      }
    });
  } catch (e) { console.error('[site] i18n', e); }
})();
