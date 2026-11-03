/* Little Garden — tương tác giao diện. Không gửi dữ liệu đi đâu. */
(function () {
  'use strict';

  var CFG = window.SITE_CONFIG || {};
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var GROUP_NAMES = { 'hat-mam': 'Hạt Mầm (18–36 tháng)', 'choi-non': 'Chồi Non (3 – 4 tuổi)', 'la-xanh': 'Lá Xanh (4 – 6 tuổi)' };

  /* ---------- Cấu hình liên hệ ---------- */
  function applyConfig() {
    $$('[data-cfg]').forEach(function (el) { var v = CFG[el.getAttribute('data-cfg')]; if (v) el.textContent = v; });
    $$('[data-cfg-link]').forEach(function (el) {
      var k = el.getAttribute('data-cfg-link');
      if (k === 'tel' && CFG.tel) el.href = 'tel:' + CFG.tel;
      if (k === 'mailto' && CFG.email) el.href = 'mailto:' + CFG.email;
      if (k === 'zalo' && CFG.zalo) el.href = CFG.zalo;
    });
    $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* ---------- Menu mobile: bottom sheet ---------- */
  function initMenu() {
    var btn = $('.menu-toggle'), sheet = $('#nav-wrap'), backdrop = $('[data-backdrop]');
    if (!btn || !sheet) return;
    var label = $('span', btn);
    function focusables() { return $$('a[href], button', sheet).filter(function (el) { return el.offsetParent !== null; }); }
    function onKey(e) {
      if (e.key === 'Escape') { close(true); return; }
      if (e.key !== 'Tab') return;
      var f = focusables(); if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
    function open() {
      btn.setAttribute('aria-expanded', 'true'); label.textContent = 'Đóng';
      sheet.classList.add('is-open'); if (backdrop) backdrop.classList.add('is-open');
      document.addEventListener('keydown', onKey);
      setTimeout(function () { var f = focusables()[0]; if (f) f.focus(); }, 80);
    }
    function close(focusBtn) {
      btn.setAttribute('aria-expanded', 'false'); label.textContent = 'Menu';
      sheet.classList.remove('is-open'); if (backdrop) backdrop.classList.remove('is-open');
      document.removeEventListener('keydown', onKey);
      if (focusBtn) btn.focus();
    }
    btn.addEventListener('click', function () { btn.getAttribute('aria-expanded') === 'true' ? close(true) : open(); });
    if (backdrop) backdrop.addEventListener('click', function () { close(true); });
    $$('a', sheet).forEach(function (a) { a.addEventListener('click', function () { if (btn.getAttribute('aria-expanded') === 'true') close(false); }); });
    window.addEventListener('resize', function () { if (window.innerWidth >= 1024 && btn.getAttribute('aria-expanded') === 'true') close(false); });
  }

  /* ---------- Hiện dần, hình tròn mở ra ---------- */
  function initReveal() {
    var els = $$('.reveal, .shape-in');
    if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('is-in'); }); return; }
    // .shape-in có clip-path 0% nên diện tích thấy được bằng 0 → quan sát phần tử cha thay vì chính nó
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        (en.target.__reveal || [en.target]).forEach(function (el) { el.classList.add('is-in'); });
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.01 });
    els.forEach(function (el) {
      var t = el.classList.contains('shape-in') ? el.parentElement : el;
      (t.__reveal = t.__reveal || []).push(el);
      io.observe(t);
    });
  }

  /* ---------- Chọn độ tuổi → gợi ý nhóm lớp ---------- */
  function initAgePicker() {
    var radios = $$('input[name="age"]');
    var out = $('[data-age-result]'), groups = $('[data-groups]');
    if (!radios.length || !out || !groups) return;
    var MAP = { '18-24': 'hat-mam', '2-3': 'hat-mam', '3-4': 'choi-non', '4-5': 'la-xanh', '5-6': 'la-xanh' };
    function render(v) {
      var g = MAP[v];
      groups.classList.toggle('has-pick', !!g);
      $$('.group', groups).forEach(function (li) { li.classList.toggle('is-pick', li.getAttribute('data-group') === g); });
      out.innerHTML = '';
      if (g) {
        out.appendChild(document.createTextNode('Phù hợp với bé: '));
        var s = document.createElement('strong'); s.textContent = 'nhóm ' + GROUP_NAMES[g]; out.appendChild(s);
        out.appendChild(document.createTextNode('. '));
        var a = document.createElement('a'); a.href = 'pages/programs.html?nhom=' + g + '#chuong-trinh'; a.textContent = 'Xem chương trình nhóm này';
        out.appendChild(a);
      } else if (v === 'u18') {
        out.textContent = 'Little Garden nhận bé từ 18 tháng tuổi. Ba mẹ có thể đăng ký tham quan trước để chuẩn bị cho con.';
      } else {
        out.textContent = 'Bé đã qua độ tuổi mầm non. Ba mẹ có thể liên hệ nhà trường nếu cần tư vấn thêm.';
      }
    }
    radios.forEach(function (r) { r.addEventListener('change', function () { render(r.value); }); });
  }

  /* ---------- Tab chương trình ---------- */
  function initTabs() {
    var tabs = $$('[role="tab"]');
    if (!tabs.length) return;
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () {
        select(t, false);
        try { history.replaceState(null, '', window.location.pathname + '?nhom=' + t.getAttribute('data-tab') + window.location.hash); } catch (e) { /* file:// */ }
      });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') n = tabs[0];
        if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
    var want = new URLSearchParams(window.location.search).get('nhom');
    var start = tabs.filter(function (t) { return t.getAttribute('data-tab') === want; })[0] || tabs[0];
    select(start, false);
    var groupSel = $('#f-group');
    if (want && groupSel && $('option[value="' + want + '"]', groupSel)) groupSel.value = want;
  }

  /* ---------- FAQ ---------- */
  function initFaq() {
    $$('.faq__q').forEach(function (b) {
      var panel = document.getElementById(b.getAttribute('aria-controls'));
      panel.hidden = true;
      b.addEventListener('click', function () {
        var open = b.getAttribute('aria-expanded') !== 'true';
        b.setAttribute('aria-expanded', open ? 'true' : 'false');
        panel.hidden = !open;
      });
    });
  }

  /* ---------- Lightbox ---------- */
  function initLightbox() {
    var dlg = $('[data-lightbox-dialog]');
    var links = $$('[data-lightbox]');
    if (!dlg || !links.length || typeof dlg.showModal !== 'function') return;
    var img = $('img', dlg), cap = $('[data-lb-caption]', dlg), idx = 0, opener = null;
    function show(i) {
      idx = (i + links.length) % links.length;
      var a = links[idx], im = $('img', a);
      img.src = a.getAttribute('href'); img.alt = im ? im.alt : '';
      cap.textContent = a.getAttribute('data-caption') + ' (' + (idx + 1) + '/' + links.length + ')';
    }
    links.forEach(function (a, i) {
      a.addEventListener('click', function (e) { e.preventDefault(); opener = a; show(i); dlg.showModal(); $('[data-lb-close]', dlg).focus(); });
    });
    $('[data-lb-close]', dlg).addEventListener('click', function () { dlg.close(); });
    $('[data-lb-prev]', dlg).addEventListener('click', function () { show(idx - 1); });
    $('[data-lb-next]', dlg).addEventListener('click', function () { show(idx + 1); });
    dlg.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') show(idx + 1);
      if (e.key === 'ArrowLeft') show(idx - 1);
    });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', function () { if (opener) opener.focus(); });
  }

  /* ---------- Form tham quan ---------- */
  function initForm() {
    var form = $('#visit-form');
    if (!form) return;
    var summary = $('[data-summary]', form), draft = $('[data-draft]', form), draftText = $('[data-draft-text]', form);
    var stale = $('[data-stale]', form), mailto = $('[data-mailto]', form), copyStatus = $('[data-copy-status]', form);
    var current = '';
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var maxDay = new Date(today); maxDay.setDate(maxDay.getDate() + 60);
    var iso = function (d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
    var dateEl = form.elements.date;
    dateEl.min = iso(today); dateEl.max = iso(maxDay);
    function vnDate(v) { var p = v.split('-'); return p[2] + '/' + p[1] + '/' + p[0]; }
    function normPhone(v) { var s = v.replace(/[\s.\-()]/g, ''); if (s.indexOf('+84') === 0) s = '0' + s.slice(3); return s; }

    var rules = {
      name: function (v) { v = v.trim(); if (!v) return 'Vui lòng nhập họ tên ba/mẹ.'; if (v.length < 2 || /[0-9]/.test(v)) return 'Họ tên chưa hợp lệ.'; return ''; },
      phone: function (v) { if (!v.trim()) return 'Vui lòng nhập số điện thoại.'; return /^0(3|5|7|8|9)\d{8}$/.test(normPhone(v)) ? '' : 'Số điện thoại chưa đúng (số di động Việt Nam, 10 chữ số).'; },
      email: function (v) { v = v.trim(); if (!v) return ''; return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Email chưa đúng định dạng.'; },
      group: function (v) { return v ? '' : 'Vui lòng chọn nhóm lớp quan tâm.'; },
      date: function (v) {
        if (!v) return '';
        var d = new Date(v + 'T00:00:00');
        if (isNaN(d)) return 'Ngày chưa hợp lệ.';
        if (d < today) return 'Vui lòng chọn ngày từ hôm nay trở đi.';
        if (d > maxDay) return 'Vui lòng chọn ngày trong vòng 60 ngày tới.';
        if (d.getDay() === 0) return 'Nhà trường không đón khách vào Chủ nhật, vui lòng chọn ngày khác.';
        return '';
      },
      consent: function (v, el) { return el.checked ? '' : 'Vui lòng đồng ý để nhà trường liên hệ.'; }
    };
    function setErr(name, msg) {
      var el = form.elements[name], err = document.getElementById('e-' + name);
      if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
      if (err) err.textContent = msg;
    }
    function validate() {
      var errs = [];
      Object.keys(rules).forEach(function (n) { var el = form.elements[n], m = rules[n](el.value, el); setErr(n, m); if (m) errs.push({ id: el.id, msg: m }); });
      return errs;
    }
    function buildText() {
      var f = form.elements, g = f.group.options[f.group.selectedIndex].text;
      return [
        'YÊU CẦU THAM QUAN TRƯỜNG — ' + (CFG.name || 'Little Garden'),
        'Ngày tạo: ' + new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        '',
        'Họ tên ba/mẹ: ' + f.name.value.trim(),
        'Số điện thoại: ' + normPhone(f.phone.value),
        'Email: ' + (f.email.value.trim() || '(không cung cấp)'),
        'Nhóm lớp quan tâm: ' + g,
        'Ngày mong muốn: ' + (f.date.value ? vnDate(f.date.value) : '(chưa chọn)'),
        'Buổi thuận tiện: ' + f.slot.value,
        'Câu hỏi thêm: ' + (f.note.value.trim() || '(không có)'),
        '',
        'Lưu ý: Đây là yêu cầu tạo trên website, chưa được gửi và lịch tham quan chưa được xác nhận.'
      ].join('\n');
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var errs = validate();
      if (errs.length) {
        summary.innerHTML = '';
        var p = document.createElement('p'); p.style.margin = '0'; p.textContent = 'Ba mẹ vui lòng kiểm tra ' + errs.length + ' mục:';
        var ul = document.createElement('ul');
        errs.forEach(function (er) {
          var li = document.createElement('li'), a = document.createElement('a');
          a.href = '#' + er.id; a.textContent = er.msg;
          a.addEventListener('click', function (ev) { ev.preventDefault(); document.getElementById(er.id).focus(); });
          li.appendChild(a); ul.appendChild(li);
        });
        summary.appendChild(p); summary.appendChild(ul); summary.hidden = false; draft.hidden = true; summary.focus();
        return;
      }
      summary.hidden = true;
      current = buildText();
      draftText.textContent = current;
      mailto.href = 'mailto:' + (CFG.email || 'tuvan@example.com') + '?subject=' + encodeURIComponent('Yêu cầu tham quan trường - ' + form.elements.name.value.trim()) + '&body=' + encodeURIComponent(current);
      mailto.removeAttribute('aria-disabled');
      draft.classList.remove('is-stale'); stale.hidden = true; copyStatus.textContent = '';
      draft.hidden = false; draft.focus();
    });
    function onEdit(e) {
      if (draft.hidden) {
        var t = e.target;
        if (t && t.name && t.getAttribute('aria-invalid') === 'true' && rules[t.name]) setErr(t.name, rules[t.name](t.value, t));
        return;
      }
      draft.classList.add('is-stale'); stale.hidden = false;
      mailto.removeAttribute('href'); mailto.setAttribute('aria-disabled', 'true');
    }
    form.addEventListener('input', onEdit);
    form.addEventListener('change', onEdit);
    mailto.addEventListener('click', function (e) { if (!mailto.getAttribute('href')) e.preventDefault(); });
    $('[data-copy]', form).addEventListener('click', function () {
      if (draft.classList.contains('is-stale')) { copyStatus.textContent = 'Nội dung đã cũ — hãy tạo lại trước khi sao chép.'; return; }
      var done = function () { copyStatus.textContent = 'Đã sao chép. Ba mẹ dán vào email hoặc Zalo để gửi cho nhà trường.'; };
      var fallback = function () {
        var ta = document.createElement('textarea'); ta.value = current; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); } catch (err) { copyStatus.textContent = 'Không sao chép tự động được, ba mẹ vui lòng sao chép thủ công.'; }
        document.body.removeChild(ta);
      };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(current).then(done, fallback); else fallback();
    });
    $('[data-download]', form).addEventListener('click', function () {
      if (draft.classList.contains('is-stale')) { copyStatus.textContent = 'Nội dung đã cũ — hãy tạo lại trước khi tải về.'; return; }
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob(['﻿' + current], { type: 'text/plain;charset=utf-8' }));
      a.download = 'yeu-cau-tham-quan-little-garden.txt';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      copyStatus.textContent = 'Đã tạo tệp yeu-cau-tham-quan-little-garden.txt trên máy.';
    });
  }

  applyConfig();
  initMenu();
  initReveal();
  initAgePicker();
  initTabs();
  initFaq();
  initLightbox();
  initForm();
})();
