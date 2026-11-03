/* Sinh tự động bởi SRS & Prototype Builder từ srs/_registry.json + srs/_permissions.json — không sửa tay. */
// Dữ liệu giả: window.MOCK.<tên> = [...] khai báo trong assets/js/mock-data/*.js.
// Thay đổi khi trình diễn (tạo, sửa, duyệt…) lưu localStorage; lỗi / trình duyệt chặn thì giữ trong bộ nhớ.
// API: DemoStore.list(name), DemoStore.get(name, id), DemoStore.insert(name, row), DemoStore.update(name, id, patch | fn),
//      DemoStore.remove(name, id), DemoStore.reset() (Đặt lại dữ liệu demo), DemoStore.on(fn) (nghe thay đổi)
(function () {
  window.MOCK = window.MOCK || {};
  var PREFIX = 'demo.web-ban-thuc-an-cho-thuc-cung-pet-shop.';
  var memory = {};
  var listeners = [];
  function key(name) { return PREFIX + name; }
  function load(name) {
    if (memory[name]) return memory[name];
    var raw = null;
    try { raw = localStorage.getItem(key(name)); } catch (e) {}
    var rows;
    try { rows = raw ? JSON.parse(raw) : null; } catch (e) { rows = null; }
    if (!rows) rows = JSON.parse(JSON.stringify(window.MOCK[name] || []));
    memory[name] = rows;
    return rows;
  }
  function save(name, rows) {
    memory[name] = rows;
    try { localStorage.setItem(key(name), JSON.stringify(rows)); } catch (e) {}
    listeners.forEach(function (fn) { try { fn(name); } catch (e) {} });
  }
  window.DemoStore = {
    list: function (name) { return load(name).slice(); },
    get: function (name, id) { return load(name).filter(function (r) { return r.id === id; })[0] || null; },
    insert: function (name, row) { var rows = load(name).slice(); rows.unshift(row); save(name, rows); return row; },
    update: function (name, id, patch) {
      var rows = load(name).map(function (r) {
        if (r.id !== id) return r;
        if (typeof patch === 'function') return patch(r);
        var n = {}; for (var k in r) n[k] = r[k]; for (var p in patch) n[p] = patch[p]; return n;
      });
      save(name, rows);
      return window.DemoStore.get(name, id);
    },
    remove: function (name, id) { save(name, load(name).filter(function (r) { return r.id !== id; })); },
    reset: function () {
      memory = {};
      try {
        for (var i = localStorage.length - 1; i >= 0; i--) { var k = localStorage.key(i); if (k && k.indexOf(PREFIX) === 0) localStorage.removeItem(k); }
      } catch (e) {}
      listeners.forEach(function (fn) { try { fn('*'); } catch (e) {} });
    },
    on: function (fn) { listeners.push(fn); }
  };
})();
