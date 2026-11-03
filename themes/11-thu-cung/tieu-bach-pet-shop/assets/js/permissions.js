/* Sinh tự động bởi SRS & Prototype Builder từ srs/_registry.json + srs/_permissions.json — không sửa tay. */
// API: Perm.role(), Perm.setRole(id), Perm.can('SALES.ORDER.APPROVE'), Perm.scope('SALES.ORDER'),
//      Perm.canOpen(screenId), Perm.home(roleId?), Perm.url(path), Perm.guard(), Perm.apply(root)
// Phần tử có data-permission="SALES.ORDER.APPROVE" tự bị gỡ nếu vai trò hiện tại không có quyền
// (data-permission-mode="disable" để chỉ làm mờ). Áp dụng cả cho phần tử render sau (MutationObserver).
(function () {
  var META = (window.APP_META = {
  "appName": "Web b\u00e1n th\u1ee9c \u0103n cho th\u00fac c\u01b0ng (Pet Shop)",
  "roles": [
    {
      "id": "ROLE-01",
      "name": "Kh\u00e1ch v\u00e3ng lai"
    },
    {
      "id": "ROLE-02",
      "name": "Kh\u00e1ch h\u00e0ng"
    },
    {
      "id": "ROLE-03",
      "name": "Qu\u1ea3n tr\u1ecb c\u1eeda h\u00e0ng"
    }
  ],
  "resources": [
    {
      "id": "SYS.ACCOUNT",
      "name": "T\u00e0i kho\u1ea3n c\u1ee7a t\u00f4i (h\u1ed3 s\u01a1, \u0111\u1ecba ch\u1ec9)",
      "module": "MOD-SYS"
    },
    {
      "id": "SYS.ADMIN_USER",
      "name": "T\u00e0i kho\u1ea3n qu\u1ea3n tr\u1ecb",
      "module": "MOD-SYS"
    },
    {
      "id": "HOME.PAGE",
      "name": "Trang ch\u1ee7, gi\u1edbi thi\u1ec7u, li\u00ean h\u1ec7",
      "module": "MOD-HOME"
    },
    {
      "id": "PROD.PRODUCT",
      "name": "S\u1ea3n ph\u1ea9m & bi\u1ebfn th\u1ec3",
      "module": "MOD-PROD"
    },
    {
      "id": "PROD.STOCK",
      "name": "T\u1ed3n kho",
      "module": "MOD-PROD"
    },
    {
      "id": "BOOK.CART",
      "name": "Gi\u1ecf h\u00e0ng",
      "module": "MOD-BOOK"
    },
    {
      "id": "BOOK.MY_ORDER",
      "name": "\u0110\u01a1n h\u00e0ng c\u1ee7a t\u00f4i",
      "module": "MOD-BOOK"
    },
    {
      "id": "BOOK.ORDER",
      "name": "Qu\u1ea3n l\u00fd \u0111\u01a1n h\u00e0ng",
      "module": "MOD-BOOK"
    },
    {
      "id": "BOOK.MY_RETURN",
      "name": "Y\u00eau c\u1ea7u \u0111\u1ed5i tr\u1ea3 c\u1ee7a t\u00f4i",
      "module": "MOD-BOOK"
    },
    {
      "id": "BOOK.RETURN",
      "name": "Qu\u1ea3n l\u00fd \u0111\u1ed5i tr\u1ea3",
      "module": "MOD-BOOK"
    },
    {
      "id": "BOOK.REFUND",
      "name": "Ho\u00e0n ti\u1ec1n",
      "module": "MOD-BOOK"
    },
    {
      "id": "PROMO.POINT",
      "name": "\u0110i\u1ec3m t\u00edch l\u0169y",
      "module": "MOD-PROMO"
    },
    {
      "id": "PROMO.VOUCHER",
      "name": "M\u00e3 gi\u1ea3m gi\u00e1 / voucher",
      "module": "MOD-PROMO"
    },
    {
      "id": "PROMO.COMBO",
      "name": "Combo",
      "module": "MOD-PROMO"
    },
    {
      "id": "REVIEW.REVIEW",
      "name": "\u0110\u00e1nh gi\u00e1",
      "module": "MOD-REVIEW"
    },
    {
      "id": "NEWS.POST",
      "name": "B\u00e0i vi\u1ebft",
      "module": "MOD-NEWS"
    },
    {
      "id": "RPT.DASHBOARD",
      "name": "Th\u1ed1ng k\u00ea",
      "module": "MOD-RPT"
    }
  ],
  "matrix": {
    "ROLE-01": {
      "SYS.ACCOUNT": [
        "CREATE"
      ],
      "HOME.PAGE": [
        "VIEW"
      ],
      "PROD.PRODUCT": [
        "VIEW"
      ],
      "BOOK.CART": [
        "VIEW",
        "CREATE",
        "UPDATE",
        "DELETE"
      ],
      "PROMO.COMBO": [
        "VIEW"
      ],
      "REVIEW.REVIEW": [
        "VIEW"
      ],
      "NEWS.POST": [
        "VIEW"
      ]
    },
    "ROLE-02": {
      "SYS.ACCOUNT": [
        "VIEW",
        "UPDATE"
      ],
      "HOME.PAGE": [
        "VIEW"
      ],
      "PROD.PRODUCT": [
        "VIEW"
      ],
      "BOOK.CART": [
        "VIEW",
        "CREATE",
        "UPDATE",
        "DELETE"
      ],
      "BOOK.MY_ORDER": [
        "VIEW",
        "CREATE",
        "UPDATE"
      ],
      "BOOK.MY_RETURN": [
        "VIEW",
        "CREATE"
      ],
      "PROMO.POINT": [
        "VIEW",
        "UPDATE"
      ],
      "PROMO.VOUCHER": [
        "VIEW"
      ],
      "PROMO.COMBO": [
        "VIEW"
      ],
      "REVIEW.REVIEW": [
        "VIEW",
        "CREATE"
      ],
      "NEWS.POST": [
        "VIEW"
      ]
    },
    "ROLE-03": {
      "SYS.ADMIN_USER": [
        "VIEW",
        "CREATE",
        "UPDATE",
        "DELETE"
      ],
      "HOME.PAGE": [
        "VIEW"
      ],
      "PROD.PRODUCT": [
        "VIEW",
        "CREATE",
        "UPDATE",
        "DELETE"
      ],
      "PROD.STOCK": [
        "VIEW",
        "UPDATE"
      ],
      "BOOK.ORDER": [
        "VIEW",
        "UPDATE",
        "APPROVE"
      ],
      "BOOK.RETURN": [
        "VIEW",
        "UPDATE",
        "APPROVE"
      ],
      "BOOK.REFUND": [
        "VIEW",
        "CREATE"
      ],
      "PROMO.POINT": [
        "VIEW"
      ],
      "PROMO.VOUCHER": [
        "VIEW",
        "CREATE",
        "UPDATE",
        "DELETE"
      ],
      "PROMO.COMBO": [
        "VIEW",
        "CREATE",
        "UPDATE",
        "DELETE"
      ],
      "REVIEW.REVIEW": [
        "VIEW",
        "UPDATE"
      ],
      "NEWS.POST": [
        "VIEW",
        "CREATE",
        "UPDATE",
        "DELETE"
      ],
      "RPT.DASHBOARD": [
        "VIEW"
      ]
    }
  },
  "scope": {
    "ROLE-02": {
      "SYS.ACCOUNT": "own",
      "BOOK.CART": "own",
      "BOOK.MY_ORDER": "own",
      "BOOK.MY_RETURN": "own",
      "PROMO.POINT": "own",
      "PROMO.VOUCHER": "own"
    }
  },
  "defaultScreen": {
    "ROLE-01": "index.html",
    "ROLE-02": "index.html",
    "ROLE-03": "pages/admin/don-hang.html"
  },
  "screens": [
    {
      "id": "SCR-HOME-001",
      "name": "Trang ch\u1ee7",
      "module": "HOME",
      "path": "index.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-HOME-002",
      "name": "Gi\u1edbi thi\u1ec7u",
      "module": "HOME",
      "path": "pages/gioi-thieu.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-HOME-003",
      "name": "Li\u00ean h\u1ec7",
      "module": "HOME",
      "path": "pages/lien-he.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-PROD-001",
      "name": "Danh s\u00e1ch s\u1ea3n ph\u1ea9m",
      "module": "PROD",
      "path": "pages/san-pham.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-PROD-002",
      "name": "Chi ti\u1ebft s\u1ea3n ph\u1ea9m",
      "module": "PROD",
      "path": "pages/chi-tiet-san-pham.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-PROD-003",
      "name": "Chi ti\u1ebft pate chay t\u1ef1 l\u00e0m",
      "module": "PROD",
      "path": "pages/pate-chay.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-PROMO-001",
      "name": "Chi ti\u1ebft combo",
      "module": "PROMO",
      "path": "pages/combo.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-BOOK-001",
      "name": "Gi\u1ecf h\u00e0ng",
      "module": "BOOK",
      "path": "pages/gio-hang.html",
      "roles": [
        "ROLE-01",
        "ROLE-02"
      ]
    },
    {
      "id": "SCR-BOOK-002",
      "name": "Thanh to\u00e1n (3 b\u01b0\u1edbc)",
      "module": "BOOK",
      "path": "pages/thanh-toan.html",
      "roles": [
        "ROLE-02"
      ]
    },
    {
      "id": "SCR-BOOK-003",
      "name": "\u0110\u1eb7t tr\u01b0\u1edbc pate chay",
      "module": "BOOK",
      "path": "pages/dat-truoc-pate.html",
      "roles": [
        "ROLE-02"
      ]
    },
    {
      "id": "SCR-BOOK-004",
      "name": "\u0110\u1eb7t h\u00e0ng th\u00e0nh c\u00f4ng",
      "module": "BOOK",
      "path": "pages/dat-hang-thanh-cong.html",
      "roles": [
        "ROLE-02"
      ]
    },
    {
      "id": "SCR-SYS-001",
      "name": "\u0110\u0103ng nh\u1eadp (kh\u00e1ch)",
      "module": "SYS",
      "path": "pages/dang-nhap.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-SYS-002",
      "name": "\u0110\u0103ng k\u00fd",
      "module": "SYS",
      "path": "pages/dang-ky.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-SYS-003",
      "name": "Qu\u00ean m\u1eadt kh\u1ea9u",
      "module": "SYS",
      "path": "pages/quen-mat-khau.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-SYS-004",
      "name": "T\u00e0i kho\u1ea3n c\u1ee7a t\u00f4i",
      "module": "SYS",
      "path": "pages/tai-khoan.html",
      "roles": [
        "ROLE-02"
      ]
    },
    {
      "id": "SCR-PROMO-002",
      "name": "\u0110i\u1ec3m & voucher",
      "module": "PROMO",
      "path": "pages/diem-voucher.html",
      "roles": [
        "ROLE-02"
      ]
    },
    {
      "id": "SCR-BOOK-005",
      "name": "\u0110\u01a1n h\u00e0ng c\u1ee7a t\u00f4i",
      "module": "BOOK",
      "path": "pages/don-hang-cua-toi.html",
      "roles": [
        "ROLE-02"
      ]
    },
    {
      "id": "SCR-BOOK-006",
      "name": "Chi ti\u1ebft \u0111\u01a1n c\u1ee7a t\u00f4i",
      "module": "BOOK",
      "path": "pages/chi-tiet-don.html",
      "roles": [
        "ROLE-02"
      ]
    },
    {
      "id": "SCR-BOOK-007",
      "name": "G\u1eedi y\u00eau c\u1ea7u \u0111\u1ed5i tr\u1ea3",
      "module": "BOOK",
      "path": "pages/yeu-cau-doi-tra.html",
      "roles": [
        "ROLE-02"
      ]
    },
    {
      "id": "SCR-NEWS-001",
      "name": "B\u00e0i vi\u1ebft chia s\u1ebb",
      "module": "NEWS",
      "path": "pages/bai-viet.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-NEWS-002",
      "name": "Chi ti\u1ebft b\u00e0i vi\u1ebft",
      "module": "NEWS",
      "path": "pages/chi-tiet-bai-viet.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-SYS-005",
      "name": "\u0110\u0103ng nh\u1eadp trang qu\u1ea3n l\u00fd",
      "module": "SYS",
      "path": "pages/admin/dang-nhap.html",
      "roles": [
        "ROLE-01",
        "ROLE-02",
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-BOOK-008",
      "name": "\u0110\u01a1n h\u00e0ng (qu\u1ea3n tr\u1ecb)",
      "module": "BOOK",
      "path": "pages/admin/don-hang.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-BOOK-009",
      "name": "Chi ti\u1ebft \u0111\u01a1n (qu\u1ea3n tr\u1ecb)",
      "module": "BOOK",
      "path": "pages/admin/chi-tiet-don.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-BOOK-010",
      "name": "\u0110\u1ed5i tr\u1ea3 (qu\u1ea3n tr\u1ecb)",
      "module": "BOOK",
      "path": "pages/admin/doi-tra.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-BOOK-011",
      "name": "Chi ti\u1ebft \u0111\u1ed5i tr\u1ea3",
      "module": "BOOK",
      "path": "pages/admin/chi-tiet-doi-tra.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-RPT-001",
      "name": "Th\u1ed1ng k\u00ea",
      "module": "RPT",
      "path": "pages/admin/thong-ke.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-PROD-004",
      "name": "S\u1ea3n ph\u1ea9m (qu\u1ea3n tr\u1ecb)",
      "module": "PROD",
      "path": "pages/admin/san-pham.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-PROD-005",
      "name": "Th\u00eam / s\u1eeda s\u1ea3n ph\u1ea9m",
      "module": "PROD",
      "path": "pages/admin/sua-san-pham.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-PROD-006",
      "name": "Danh m\u1ee5c (lo\u1ea1i th\u00fa c\u01b0ng & nh\u00f3m h\u00e0ng)",
      "module": "PROD",
      "path": "pages/admin/danh-muc.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-PROD-007",
      "name": "T\u1ed3n kho",
      "module": "PROD",
      "path": "pages/admin/ton-kho.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-PROMO-003",
      "name": "M\u00e3 gi\u1ea3m gi\u00e1 & voucher",
      "module": "PROMO",
      "path": "pages/admin/ma-giam-gia.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-PROMO-004",
      "name": "Combo (qu\u1ea3n tr\u1ecb)",
      "module": "PROMO",
      "path": "pages/admin/combo.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-REVIEW-001",
      "name": "\u0110\u00e1nh gi\u00e1 (qu\u1ea3n tr\u1ecb)",
      "module": "REVIEW",
      "path": "pages/admin/danh-gia.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-NEWS-003",
      "name": "B\u00e0i vi\u1ebft (qu\u1ea3n tr\u1ecb)",
      "module": "NEWS",
      "path": "pages/admin/bai-viet.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-NEWS-004",
      "name": "So\u1ea1n b\u00e0i vi\u1ebft",
      "module": "NEWS",
      "path": "pages/admin/soan-bai-viet.html",
      "roles": [
        "ROLE-03"
      ]
    },
    {
      "id": "SCR-SYS-006",
      "name": "T\u00e0i kho\u1ea3n qu\u1ea3n tr\u1ecb",
      "module": "SYS",
      "path": "pages/admin/tai-khoan-quan-tri.html",
      "roles": [
        "ROLE-03"
      ]
    }
  ]
});
  var MSG = {"noPerm":"B\u1ea1n kh\u00f4ng c\u00f3 quy\u1ec1n th\u1ef1c hi\u1ec7n thao t\u00e1c n\u00e0y"};
  var KEY = 'demo.role';
  var memory = null;
  // Gốc prototype tính từ vị trí file này (assets/js/permissions.js) — chạy được cả qua file://
  var src = (document.currentScript && document.currentScript.src) || '';
  var ROOT = src.replace(/assets\/js\/permissions\.js(\?.*)?$/, '');

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return memory; } }
  function write(v) { memory = v; try { if (v === null) localStorage.removeItem(KEY); else localStorage.setItem(KEY, v); } catch (e) {} }
  function screenOf(id) { for (var i = 0; i < META.screens.length; i++) if (META.screens[i].id === id) return META.screens[i]; return null; }

  var Perm = {
    meta: META,
    root: ROOT,
    /** Vai trò đang đăng nhập (null nếu chưa chọn) */
    role: function () { var r = read(); return META.roles.some(function (x) { return x.id === r; }) ? r : null; },
    roleName: function (id) { id = id || Perm.role(); for (var i = 0; i < META.roles.length; i++) if (META.roles[i].id === id) return META.roles[i].name; return ''; },
    setRole: function (id) { write(id); },
    logout: function () { write(null); location.href = ROOT + 'index.html'; },
    /** code dạng MODULE.RESOURCE.ACTION, ví dụ SALES.ORDER.APPROVE */
    can: function (code, roleId) {
      roleId = roleId || Perm.role();
      if (!roleId || !code) return false;
      var parts = String(code).split('.');
      var action = parts.pop();
      var resource = parts.join('.');
      var acts = (META.matrix[roleId] || {})[resource] || [];
      return acts.indexOf(action) >= 0;
    },
    /** Phạm vi dữ liệu: own | team | branch | all */
    scope: function (resource, roleId) { roleId = roleId || Perm.role(); return ((META.scope[roleId] || {})[resource]) || 'all'; },
    canOpen: function (screenId, roleId) {
      roleId = roleId || Perm.role();
      var s = screenOf(screenId);
      return !s || !s.roles.length || s.roles.indexOf(roleId) >= 0;
    },
    /** Màn hình mặc định sau đăng nhập của vai trò (URL đầy đủ) */
    home: function (roleId) {
      roleId = roleId || Perm.role();
      var p = META.defaultScreen[roleId];
      if (!p) for (var i = 0; i < META.screens.length; i++) if (Perm.canOpen(META.screens[i].id, roleId) && META.screens[i].path !== 'index.html') { p = META.screens[i].path; break; }
      return ROOT + (p || 'index.html');
    },
    url: function (p) { return ROOT + String(p).replace(/^\//, ''); },
    screen: screenOf,
    /** Trang hiện tại có được vào không (theo body[data-screen]). Chưa chọn vai trò → về trang đăng nhập. */
    guard: function () {
      var id = document.body && document.body.getAttribute('data-screen');
      if (!Perm.role()) { if (!/index\.html$|\/$/.test(location.pathname)) location.href = ROOT + 'index.html'; return false; }
      return !id || Perm.canOpen(id);
    },
    apply: function (root) {
      var nodes = (root || document).querySelectorAll ? (root || document).querySelectorAll('[data-permission]') : [];
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        if (Perm.can(el.getAttribute('data-permission'))) continue;
        if (el.getAttribute('data-permission-mode') === 'disable') { el.setAttribute('disabled', ''); el.setAttribute('aria-disabled', 'true'); el.title = MSG.noPerm; }
        else el.remove();
      }
    }
  };
  window.Perm = Perm;

  function start() {
    Perm.apply(document);
    new MutationObserver(function (list) {
      for (var i = 0; i < list.length; i++)
        for (var j = 0; j < list[i].addedNodes.length; j++) {
          var n = list[i].addedNodes[j];
          if (n.nodeType !== 1) continue;
          if (n.hasAttribute('data-permission')) Perm.apply(n.parentNode); else Perm.apply(n);
        }
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
