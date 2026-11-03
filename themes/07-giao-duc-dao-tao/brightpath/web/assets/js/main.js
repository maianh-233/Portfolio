/* BrightPath — tương tác giao diện. Không gửi dữ liệu đi đâu. */
(function () {
  'use strict';

  var CFG = window.SITE_CONFIG || {};
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Cấu hình liên hệ ---------- */
  function applyConfig() {
    $$('[data-cfg]').forEach(function (el) {
      var v = CFG[el.getAttribute('data-cfg')];
      if (v) el.textContent = v;
    });
    $$('[data-cfg-link]').forEach(function (el) {
      var k = el.getAttribute('data-cfg-link');
      if (k === 'tel' && CFG.tel) el.href = 'tel:' + CFG.tel;
      if (k === 'mailto' && CFG.email) el.href = 'mailto:' + CFG.email;
      if (k === 'zalo' && CFG.zalo) el.href = CFG.zalo;
    });
    $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* ---------- Nút mở/đóng (menu mobile, mục lục bên) ---------- */
  function disclosure(btn, closeOnLink) {
    var panel = btn && document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    var label = $('.menu-btn__label', btn);
    function set(open, focusBtn) {
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.classList.toggle('is-open', open);
      if (label) label.textContent = open ? 'Đóng menu' : 'Menu';
      if (open) {
        document.addEventListener('keydown', onKey);
        var first = $('a', panel);
        if (first) setTimeout(function () { first.focus(); }, 30);
      } else {
        document.removeEventListener('keydown', onKey);
        if (focusBtn) btn.focus();
      }
    }
    function onKey(e) { if (e.key === 'Escape') set(false, true); }
    btn.addEventListener('click', function () { set(btn.getAttribute('aria-expanded') !== 'true', false); });
    if (closeOnLink) $$('a', panel).forEach(function (a) { a.addEventListener('click', function () { set(false, false); }); });
  }

  /* ---------- Mục lục bên: đánh dấu mục đang xem ---------- */
  function initSideNav() {
    var links = $$('.side-box a[href^="#"]');
    var secs = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
    if (!links.length) return;
    var ticking = false;
    function update() {
      ticking = false;
      var line = window.innerHeight * 0.3, idx = -1;
      secs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top <= line) idx = i; });
      links.forEach(function (a, i) { if (i === idx) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* ---------- Hiện dần khi cuộn ---------- */
  function initReveal() {
    var els = $$('.main-col > section, .photos figure');
    if (reduceMotion || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    els.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) return; // phần đang thấy không cần hiệu ứng
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  /* ---------- Trang chủ: tab mục tiêu → khóa học nổi bật ---------- */
  function initGoals() {
    var tabs = $$('.goal-tab[data-goal]');
    var list = $('[data-featured]');
    if (!tabs.length || !list) return;
    var desc = $('[data-goal-desc]');
    var all = $('[data-featured-all]');
    function select(goal) {
      var name = '';
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-goal') === goal;
        t.setAttribute('aria-pressed', on ? 'true' : 'false');
        if (on) { name = t.textContent; if (desc) desc.textContent = t.getAttribute('data-desc'); }
      });
      $$('.crow', list).forEach(function (c) { c.hidden = c.getAttribute('data-goal') !== goal; });
      if (all) {
        all.setAttribute('href', 'pages/courses.html?goal=' + goal + '#danh-sach');
        all.firstChild.textContent = 'Xem tất cả khóa ' + name.toLowerCase();
      }
    }
    tabs.forEach(function (t) { t.addEventListener('click', function () { select(t.getAttribute('data-goal')); }); });
    select(tabs[0].getAttribute('data-goal'));
  }

  /* ---------- Accordion chương trình ---------- */
  function setPanel(btn, open) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (panel) panel.hidden = !open;
  }
  function initAccordions() {
    $$('.crow__more[aria-controls]').forEach(function (btn) {
      setPanel(btn, false);
      btn.addEventListener('click', function () { setPanel(btn, btn.getAttribute('aria-expanded') !== 'true'); });
    });
  }
  function openCourse(id, scroll) {
    var card = document.getElementById('khoa-' + id);
    if (!card) return;
    if (card.hidden && window.__bpResetFilters) window.__bpResetFilters();
    var btn = $('.crow__more[aria-controls]', card);
    if (btn) setPanel(btn, true);
    if (scroll) {
      card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      if (btn) btn.focus({ preventScroll: true });
    }
  }

  /* ---------- Lọc khóa học (trang Khóa học) ---------- */
  function initFilters() {
    var selGoal = $('#filter-goal'), selLevel = $('#filter-level');
    var list = $('[data-course-list]');
    if (!selGoal || !selLevel || !list) return;
    var rows = $$('.crow', list), groups = $$('.cgroup', list);
    var countEl = $('[data-count]'), empty = $('[data-empty]'), resets = $$('[data-reset]');

    var params = new URLSearchParams(window.location.search);
    [[selGoal, 'goal'], [selLevel, 'level']].forEach(function (p) {
      var v = params.get(p[1]);
      if (v && $('option[value="' + v + '"]', p[0])) p[0].value = v;
    });

    function render(updateUrl) {
      var g = selGoal.value, l = selLevel.value, n = 0;
      rows.forEach(function (c) {
        var ok = (!g || c.getAttribute('data-goal') === g) && (!l || c.getAttribute('data-level') === l);
        c.hidden = !ok;
        if (ok) n++;
      });
      groups.forEach(function (gr) { gr.hidden = !$$('.crow:not([hidden])', gr).length; });
      countEl.textContent = n === rows.length ? n + ' khóa học' : 'Hiển thị ' + n + ' / ' + rows.length + ' khóa học';
      empty.hidden = n !== 0;
      resets.forEach(function (r) { r.hidden = !(g || l); });
      if (updateUrl) {
        var q = new URLSearchParams();
        if (g) q.set('goal', g);
        if (l) q.set('level', l);
        var s = q.toString();
        try { history.replaceState(null, '', window.location.pathname + (s ? '?' + s : '') + window.location.hash); } catch (e) { /* file:// có thể chặn */ }
      }
    }
    selGoal.addEventListener('change', function () { render(true); });
    selLevel.addEventListener('change', function () { render(true); });
    function reset() { selGoal.value = ''; selLevel.value = ''; render(true); }
    window.__bpResetFilters = reset;
    resets.forEach(function (r) { r.addEventListener('click', function () { reset(); selGoal.focus(); }); });
    render(false);
  }

  /* ---------- Link mở khóa học + chọn sẵn khóa cho form ---------- */
  function initCourseLinks() {
    $$('[data-open-course]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var id = a.getAttribute('data-open-course');
        openCourse(id, true);
        try { history.replaceState(null, '', window.location.pathname + window.location.search + '#khoa-' + id); } catch (err) { /* bỏ qua */ }
      });
    });
    $$('[data-pick-course]').forEach(function (a) {
      a.addEventListener('click', function () {
        var sel = $('#f-course');
        if (!sel) return;
        var id = a.getAttribute('data-pick-course');
        sel.value = id;
        var card = document.getElementById('khoa-' + id);
        var goalSel = $('#f-goal');
        if (card && goalSel && !goalSel.value) goalSel.value = card.getAttribute('data-goal');
        sel.dispatchEvent(new Event('change', { bubbles: true }));
        setTimeout(function () { var n = $('#f-name'); if (n) n.focus({ preventScroll: true }); }, reduceMotion ? 0 : 450);
      });
    });
    function fromHash() {
      var m = /^#khoa-([a-z0-9-]+)$/.exec(window.location.hash);
      if (m) setTimeout(function () { openCourse(m[1], true); }, 120);
    }
    fromHash();
    window.addEventListener('hashchange', fromHash);
  }

  /* ---------- Lộ trình: đường tiến trình theo cuộn ---------- */
  function initTimeline() {
    var tl = $('[data-timeline]');
    if (!tl) return;
    var fill = $('.timeline__fill', tl);
    if (reduceMotion) return;
    function update() {
      var r = tl.getBoundingClientRect();
      var p = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height));
      fill.style.setProperty('--fill', (p * 100).toFixed(1) + '%');
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  /* ---------- Form tư vấn: validation + bản nháp ---------- */
  function initForm() {
    var form = $('#consult-form');
    if (!form) return;
    var summary = $('[data-summary]', form);
    var draft = $('[data-draft]', form);
    var draftText = $('[data-draft-text]', form);
    var stale = $('[data-stale]', form);
    var mailto = $('[data-mailto]', form);
    var copyStatus = $('[data-copy-status]', form);
    var current = '';

    function normPhone(v) {
      var s = v.replace(/[\s.\-()]/g, '');
      if (s.indexOf('+84') === 0) s = '0' + s.slice(3);
      else if (s.indexOf('84') === 0 && s.length === 11) s = '0' + s.slice(2);
      return s;
    }
    var rules = {
      name: function (v) { v = v.trim(); if (!v) return 'Vui lòng nhập họ và tên.'; if (v.length < 2) return 'Họ và tên cần ít nhất 2 ký tự.'; if (/[0-9]/.test(v)) return 'Họ và tên không được chứa chữ số.'; return ''; },
      phone: function (v) { if (!v.trim()) return 'Vui lòng nhập số điện thoại.'; return /^0(3|5|7|8|9)\d{8}$/.test(normPhone(v)) ? '' : 'Số điện thoại chưa đúng. Nhập số di động Việt Nam gồm 10 chữ số.'; },
      email: function (v) { v = v.trim(); if (!v) return ''; return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Email chưa đúng định dạng, ví dụ ten@email.com.'; },
      role: function (v) { return v ? '' : 'Vui lòng chọn bạn là ai.'; },
      goal: function (v) { return v ? '' : 'Vui lòng chọn mục tiêu học.'; },
      consent: function (v, el) { return el.checked ? '' : 'Vui lòng đồng ý để chúng tôi liên hệ tư vấn.'; }
    };
    function fieldError(name, msg) {
      var el = form.elements[name];
      var err = document.getElementById('e-' + name);
      if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
      if (err) err.textContent = msg;
    }
    function validate() {
      var errors = [];
      Object.keys(rules).forEach(function (name) {
        var el = form.elements[name];
        var msg = rules[name](el.value, el);
        fieldError(name, msg);
        if (msg) errors.push({ msg: msg, id: el.id });
      });
      return errors;
    }
    function optText(name) {
      var el = form.elements[name];
      return el.options[el.selectedIndex] ? el.options[el.selectedIndex].text : '';
    }
    function buildText() {
      var f = form.elements;
      return [
        'YÊU CẦU TƯ VẤN KHÓA HỌC — ' + (CFG.name || 'BrightPath'),
        'Ngày tạo: ' + new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        '',
        'Họ và tên: ' + f.name.value.trim(),
        'Số điện thoại: ' + normPhone(f.phone.value),
        'Email: ' + (f.email.value.trim() || '(không cung cấp)'),
        'Đối tượng: ' + optText('role'),
        'Mục tiêu học: ' + optText('goal'),
        'Trình độ hiện tại: ' + optText('level'),
        'Khóa học quan tâm: ' + optText('course'),
        'Thời gian liên hệ thuận tiện: ' + optText('time'),
        'Kênh liên hệ ưu tiên: ' + optText('channel'),
        'Ghi chú: ' + (f.note.value.trim() || '(không có)'),
        '',
        'Lưu ý: Nội dung này được tạo trên website, chưa được gửi tới trung tâm.'
      ].join('\n');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var errors = validate();
      if (errors.length) {
        summary.innerHTML = '';
        var p = document.createElement('p');
        p.style.margin = '0';
        p.textContent = 'Vui lòng kiểm tra ' + errors.length + ' mục chưa hợp lệ:';
        var ul = document.createElement('ul');
        errors.forEach(function (er) {
          var li = document.createElement('li');
          var a = document.createElement('a');
          a.href = '#' + er.id;
          a.textContent = er.msg;
          a.addEventListener('click', function (ev) { ev.preventDefault(); document.getElementById(er.id).focus(); });
          li.appendChild(a); ul.appendChild(li);
        });
        summary.appendChild(p); summary.appendChild(ul);
        summary.hidden = false;
        draft.hidden = true;
        summary.focus();
        return;
      }
      summary.hidden = true;
      current = buildText();
      draftText.textContent = current;
      var subject = 'Yêu cầu tư vấn khóa học - ' + form.elements.name.value.trim();
      mailto.href = 'mailto:' + (CFG.email || 'tuvan@example.com') + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(current);
      mailto.removeAttribute('aria-disabled');
      draft.classList.remove('is-stale');
      stale.hidden = true;
      copyStatus.textContent = '';
      draft.hidden = false;
      draft.focus();
    });

    // Sửa dữ liệu sau khi tạo bản nháp → bản nháp hết hiệu lực
    function onEdit(e) {
      if (draft.hidden) {
        var t = e.target;
        if (t && t.name && t.getAttribute('aria-invalid') === 'true' && rules[t.name]) fieldError(t.name, rules[t.name](t.value, t));
        return;
      }
      draft.classList.add('is-stale');
      stale.hidden = false;
      mailto.removeAttribute('href');
      mailto.setAttribute('aria-disabled', 'true');
    }
    form.addEventListener('input', onEdit);
    form.addEventListener('change', onEdit);
    mailto.addEventListener('click', function (e) { if (!mailto.getAttribute('href')) e.preventDefault(); });

    $('[data-copy]', form).addEventListener('click', function () {
      if (draft.classList.contains('is-stale')) { copyStatus.textContent = 'Nội dung đã cũ — hãy tạo lại trước khi sao chép.'; return; }
      var done = function () { copyStatus.textContent = 'Đã sao chép nội dung. Hãy dán vào email hoặc Zalo để gửi.'; };
      var fallback = function () {
        var ta = document.createElement('textarea');
        ta.value = current; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); } catch (err) { copyStatus.textContent = 'Không sao chép tự động được. Hãy bôi đen nội dung và sao chép thủ công.'; }
        document.body.removeChild(ta);
      };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(current).then(done, fallback);
      else fallback();
    });
    $('[data-download]', form).addEventListener('click', function () {
      if (draft.classList.contains('is-stale')) { copyStatus.textContent = 'Nội dung đã cũ — hãy tạo lại trước khi tải về.'; return; }
      var blob = new Blob(['﻿' + current], { type: 'text/plain;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'yeu-cau-tu-van-brightpath.txt';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      copyStatus.textContent = 'Đã tạo tệp yeu-cau-tu-van-brightpath.txt trên máy của bạn.';
    });
  }

  applyConfig();
  disclosure($('.menu-btn'), true);
  disclosure($('.side-toggle'), true);
  initSideNav();
  initReveal();
  initGoals();
  initAccordions();
  initFilters();
  initCourseLinks();
  initTimeline();
  initForm();
})();
