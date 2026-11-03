/* Sinh tự động bởi SRS & Prototype Builder từ srs/_registry.json + srs/_permissions.json — không sửa tay. */
// Vòng đời chứng từ đúng như 5.6 của SRS. API:
//   Workflow.initial(docId) → mã trạng thái đầu
//   Workflow.state(docId, stateId) → { name, tone, initial, final }
//   Workflow.actions(docId, stateId) → các chuyển trạng thái vai trò hiện tại được làm (theo roles + permission)
//   Workflow.apply(docId, record, event, { note }) → bản ghi mới: state đổi, history thêm 1 dòng; ném lỗi nếu không hợp lệ
//   Workflow.nextCode(docId, existingCodes) → mã chứng từ mới theo quy tắc đánh mã, ví dụ DH-2026-00042
// Bản ghi chứng từ dùng trường: code, state, history: [{ at, role, roleName, event, from, to, note }]
(function () {
  var DOCS = (window.WORKFLOWS = {
  "DOC-BOOK-ORDER": {
    "name": "\u0110\u01a1n h\u00e0ng th\u01b0\u1eddng",
    "numbering": "DH-{YYYY}-{00000}",
    "states": {
      "NEW": {
        "name": "M\u1edbi \u0111\u1eb7t",
        "tone": "info",
        "initial": true,
        "final": false
      },
      "CONFIRMED": {
        "name": "\u0110\u00e3 x\u00e1c nh\u1eadn",
        "tone": "info",
        "initial": false,
        "final": false
      },
      "SHIPPING": {
        "name": "\u0110ang giao",
        "tone": "warning",
        "initial": false,
        "final": false
      },
      "DELIVERED": {
        "name": "\u0110\u00e3 giao",
        "tone": "success",
        "initial": false,
        "final": true
      },
      "CANCELLED": {
        "name": "\u0110\u00e3 h\u1ee7y",
        "tone": "neutral",
        "initial": false,
        "final": true
      },
      "RETURNED": {
        "name": "\u0110\u00e3 b\u1ecb tr\u1ea3 l\u1ea1i",
        "tone": "danger",
        "initial": false,
        "final": true
      }
    },
    "transitions": [
      {
        "from": "NEW",
        "event": "X\u00e1c nh\u1eadn \u0111\u01a1n",
        "to": "CONFIRMED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "C\u00f2n \u0111\u1ee7 h\u00e0ng; tr\u1eeb t\u1ed3n (BR-BOOK-019)",
        "permission": "BOOK.ORDER.APPROVE"
      },
      {
        "from": "NEW",
        "event": "Kh\u00e1ch h\u1ee7y \u0111\u01a1n",
        "to": "CANCELLED",
        "roles": [
          "ROLE-02"
        ],
        "condition": "\u0110\u01a1n c\u1ee7a kh\u00e1ch (BR-BOOK-009)",
        "permission": "BOOK.MY_ORDER.UPDATE"
      },
      {
        "from": "NEW",
        "event": "C\u1eeda h\u00e0ng h\u1ee7y",
        "to": "CANCELLED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "[\u0110\u1ec0 XU\u1ea4T] Theo y\u00eau c\u1ea7u kh\u00e1ch qua \u0111i\u1ec7n tho\u1ea1i / kh\u00f4ng li\u00ean l\u1ea1c \u0111\u01b0\u1ee3c",
        "permission": "BOOK.ORDER.UPDATE"
      },
      {
        "from": "CONFIRMED",
        "event": "Kh\u00e1ch h\u1ee7y \u0111\u01a1n",
        "to": "CANCELLED",
        "roles": [
          "ROLE-02"
        ],
        "condition": "Ch\u01b0a giao cho shipper (BR-BOOK-009); c\u1ed9ng l\u1ea1i t\u1ed3n",
        "permission": "BOOK.MY_ORDER.UPDATE"
      },
      {
        "from": "CONFIRMED",
        "event": "C\u1eeda h\u00e0ng h\u1ee7y",
        "to": "CANCELLED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "[\u0110\u1ec0 XU\u1ea4T] Theo y\u00eau c\u1ea7u kh\u00e1ch; c\u1ed9ng l\u1ea1i t\u1ed3n",
        "permission": "BOOK.ORDER.UPDATE"
      },
      {
        "from": "CONFIRMED",
        "event": "B\u1eaft \u0111\u1ea7u giao",
        "to": "SHIPPING",
        "roles": [
          "ROLE-03"
        ],
        "condition": "C\u00e1ch giao = \u0110VVC ho\u1eb7c c\u1eeda h\u00e0ng t\u1ef1 giao",
        "permission": "BOOK.ORDER.UPDATE"
      },
      {
        "from": "CONFIRMED",
        "event": "Kh\u00e1ch nh\u1eadn t\u1ea1i c\u1eeda h\u00e0ng",
        "to": "DELIVERED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "[\u0110\u1ec0 XU\u1ea4T] C\u00e1ch giao = T\u1ef1 l\u1ea5y",
        "permission": "BOOK.ORDER.UPDATE"
      },
      {
        "from": "SHIPPING",
        "event": "Giao th\u00e0nh c\u00f4ng",
        "to": "DELIVERED",
        "roles": [
          "ROLE-03"
        ],
        "permission": "BOOK.ORDER.UPDATE"
      },
      {
        "from": "SHIPPING",
        "event": "\u0110VVC tr\u1ea3 h\u00e0ng",
        "to": "RETURNED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "C\u1ed9ng l\u1ea1i t\u1ed3n; ho\u00e0n ti\u1ec1n n\u1ebfu \u0111\u00e3 thanh to\u00e1n (BR-BOOK-014)",
        "permission": "BOOK.ORDER.UPDATE"
      }
    ]
  },
  "DOC-BOOK-PATE_ORDER": {
    "name": "\u0110\u01a1n pate chay",
    "numbering": "PC-{YYYY}-{00000}",
    "states": {
      "NEW": {
        "name": "M\u1edbi \u0111\u1eb7t",
        "tone": "info",
        "initial": true,
        "final": false
      },
      "CONFIRMED": {
        "name": "\u0110\u00e3 \u0111\u01b0\u1ee3c x\u00e1c nh\u1eadn",
        "tone": "info",
        "initial": false,
        "final": false
      },
      "MAKING": {
        "name": "\u0110ang l\u00e0m",
        "tone": "warning",
        "initial": false,
        "final": false
      },
      "SHIPPING": {
        "name": "\u0110ang giao",
        "tone": "warning",
        "initial": false,
        "final": false
      },
      "DELIVERED": {
        "name": "\u0110\u00e3 giao",
        "tone": "success",
        "initial": false,
        "final": true
      },
      "CANCELLED": {
        "name": "\u0110\u00e3 h\u1ee7y",
        "tone": "neutral",
        "initial": false,
        "final": true
      }
    },
    "transitions": [
      {
        "from": "NEW",
        "event": "X\u00e1c nh\u1eadn qua \u0111i\u1ec7n tho\u1ea1i",
        "to": "CONFIRMED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "\u0110\u00e3 g\u1ecdi, kh\u00e1ch \u0111\u1ed3ng \u00fd, c\u00f2n su\u1ea5t (BR-BOOK-007, BR-PROD-004)",
        "permission": "BOOK.ORDER.APPROVE"
      },
      {
        "from": "NEW",
        "event": "T\u1eeb ch\u1ed1i",
        "to": "CANCELLED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "[\u0110\u1ec0 XU\u1ea4T] H\u1ebft su\u1ea5t / kh\u00e1ch kh\u00f4ng \u0111\u1ed3ng \u00fd",
        "permission": "BOOK.ORDER.APPROVE"
      },
      {
        "from": "NEW",
        "event": "X\u00e1c nh\u1eadn h\u1ee7y",
        "to": "CANCELLED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "Kh\u00e1ch \u0111\u00e3 g\u1eedi y\u00eau c\u1ea7u h\u1ee7y (BR-BOOK-010)",
        "permission": "BOOK.ORDER.UPDATE"
      },
      {
        "from": "CONFIRMED",
        "event": "\u0110\u00e3 nh\u1eadn c\u1ecdc, b\u1eaft \u0111\u1ea7u l\u00e0m",
        "to": "MAKING",
        "roles": [
          "ROLE-03"
        ],
        "condition": "Thanh to\u00e1n = \u0110\u00e3 c\u1ecdc 200.000\u0111 (BR-BOOK-007)",
        "permission": "BOOK.ORDER.UPDATE"
      },
      {
        "from": "CONFIRMED",
        "event": "X\u00e1c nh\u1eadn h\u1ee7y",
        "to": "CANCELLED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "Kh\u00e1ch \u0111\u00e3 g\u1eedi y\u00eau c\u1ea7u h\u1ee7y; ho\u00e0n c\u1ecdc n\u1ebfu \u0111\u00e3 c\u1ecdc",
        "permission": "BOOK.ORDER.UPDATE"
      },
      {
        "from": "MAKING",
        "event": "Giao cho shipper / \u0111i giao",
        "to": "SHIPPING",
        "roles": [
          "ROLE-03"
        ],
        "condition": "L\u00e0m xong",
        "permission": "BOOK.ORDER.UPDATE"
      },
      {
        "from": "MAKING",
        "event": "Kh\u00e1ch nh\u1eadn t\u1ea1i c\u1eeda h\u00e0ng",
        "to": "DELIVERED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "[\u0110\u1ec0 XU\u1ea4T] C\u00e1ch giao = T\u1ef1 l\u1ea5y",
        "permission": "BOOK.ORDER.UPDATE"
      },
      {
        "from": "MAKING",
        "event": "X\u00e1c nh\u1eadn h\u1ee7y",
        "to": "CANCELLED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "Kh\u00e1ch \u0111\u00e3 g\u1eedi y\u00eau c\u1ea7u h\u1ee7y; ch\u01b0a giao shipper; ho\u00e0n c\u1ecdc (BR-BOOK-010)",
        "permission": "BOOK.ORDER.UPDATE"
      },
      {
        "from": "SHIPPING",
        "event": "Giao th\u00e0nh c\u00f4ng",
        "to": "DELIVERED",
        "roles": [
          "ROLE-03"
        ],
        "permission": "BOOK.ORDER.UPDATE"
      }
    ]
  },
  "DOC-BOOK-RETURN": {
    "name": "Y\u00eau c\u1ea7u \u0111\u1ed5i tr\u1ea3",
    "numbering": "DT-{YYYY}-{00000}",
    "states": {
      "PENDING": {
        "name": "Ch\u1edd x\u1eed l\u00fd",
        "tone": "warning",
        "initial": true,
        "final": false
      },
      "ACCEPTED": {
        "name": "\u0110\u00e3 ch\u1ea5p nh\u1eadn",
        "tone": "info",
        "initial": false,
        "final": false
      },
      "REJECTED": {
        "name": "T\u1eeb ch\u1ed1i",
        "tone": "danger",
        "initial": false,
        "final": true
      },
      "COMPLETED": {
        "name": "Ho\u00e0n t\u1ea5t",
        "tone": "success",
        "initial": false,
        "final": true
      }
    },
    "transitions": [
      {
        "from": "PENDING",
        "event": "Ch\u1ea5p nh\u1eadn",
        "to": "ACCEPTED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "\u0110\u00fang l\u00fd do, c\u00f3 video, h\u00e0ng c\u00f2n nguy\u00ean (BR-BOOK-011)",
        "permission": "BOOK.RETURN.APPROVE"
      },
      {
        "from": "PENDING",
        "event": "T\u1eeb ch\u1ed1i",
        "to": "REJECTED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "Kh\u00f4ng \u0111\u1ea1t \u0111i\u1ec1u ki\u1ec7n; nh\u1eadp l\u00fd do",
        "permission": "BOOK.RETURN.APPROVE"
      },
      {
        "from": "ACCEPTED",
        "event": "Ho\u00e0n t\u1ea5t",
        "to": "COMPLETED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "\u0110\u00e3 giao h\u00e0ng \u0111\u1ed5i ho\u1eb7c \u0111\u00e3 ghi nh\u1eadn ho\u00e0n ti\u1ec1n (BR-BOOK-013)",
        "permission": "BOOK.RETURN.UPDATE"
      }
    ]
  },
  "DOC-REVIEW-REVIEW": {
    "name": "\u0110\u00e1nh gi\u00e1",
    "numbering": null,
    "states": {
      "VISIBLE": {
        "name": "\u0110ang hi\u1ec3n th\u1ecb",
        "tone": "success",
        "initial": true,
        "final": false
      },
      "HIDDEN": {
        "name": "\u0110\u00e3 \u1ea9n",
        "tone": "neutral",
        "initial": false,
        "final": false
      }
    },
    "transitions": [
      {
        "from": "VISIBLE",
        "event": "\u1ea8n",
        "to": "HIDDEN",
        "roles": [
          "ROLE-03"
        ],
        "condition": "\u0110\u00e1nh gi\u00e1 x\u1ea5u / spam; nh\u1eadp l\u00fd do (BR-REVIEW-003)",
        "permission": "REVIEW.REVIEW.UPDATE"
      },
      {
        "from": "HIDDEN",
        "event": "Hi\u1ec7n l\u1ea1i",
        "to": "VISIBLE",
        "roles": [
          "ROLE-03"
        ],
        "condition": "[\u0110\u1ec0 XU\u1ea4T] \u1ea8n nh\u1ea7m",
        "permission": "REVIEW.REVIEW.UPDATE"
      }
    ]
  },
  "DOC-NEWS-POST": {
    "name": "B\u00e0i vi\u1ebft",
    "numbering": null,
    "states": {
      "DRAFT": {
        "name": "Nh\u00e1p",
        "tone": "neutral",
        "initial": true,
        "final": false
      },
      "PUBLISHED": {
        "name": "\u0110\u00e3 \u0111\u0103ng",
        "tone": "success",
        "initial": false,
        "final": false
      },
      "HIDDEN": {
        "name": "\u0110\u00e3 \u1ea9n",
        "tone": "neutral",
        "initial": false,
        "final": false
      }
    },
    "transitions": [
      {
        "from": "DRAFT",
        "event": "\u0110\u0103ng",
        "to": "PUBLISHED",
        "roles": [
          "ROLE-03"
        ],
        "condition": "C\u00f3 ti\u00eau \u0111\u1ec1, n\u1ed9i dung, \u1ea3nh b\u00eca",
        "permission": "NEWS.POST.UPDATE"
      },
      {
        "from": "PUBLISHED",
        "event": "\u1ea8n",
        "to": "HIDDEN",
        "roles": [
          "ROLE-03"
        ],
        "permission": "NEWS.POST.UPDATE"
      },
      {
        "from": "HIDDEN",
        "event": "\u0110\u0103ng l\u1ea1i",
        "to": "PUBLISHED",
        "roles": [
          "ROLE-03"
        ],
        "permission": "NEWS.POST.UPDATE"
      }
    ]
  }
});
  var MSG = {"noDoc":"Kh\u00f4ng c\u00f3 ch\u1ee9ng t\u1eeb ","cannot":"Kh\u00f4ng th\u1ec3 \"{event}\" khi ch\u1ee9ng t\u1eeb \u0111ang \u1edf tr\u1ea1ng th\u00e1i \"{state}\"","denied":"Vai tr\u00f2 hi\u1ec7n t\u1ea1i kh\u00f4ng \u0111\u01b0\u1ee3c \"{event}\""};

  function doc(id) { var d = DOCS[id]; if (!d) throw new Error(MSG.noDoc + id); return d; }
  function role() { return window.Perm ? Perm.role() : null; }
  function allowed(t) {
    var r = role();
    if (t.roles && t.roles.length && t.roles.indexOf(r) < 0) return false;
    if (t.permission && window.Perm && !Perm.can(t.permission)) return false;
    return true;
  }

  window.Workflow = {
    docs: DOCS,
    initial: function (docId) {
      var s = doc(docId).states;
      for (var k in s) if (s[k].initial) return k;
      return Object.keys(s)[0];
    },
    state: function (docId, stateId) { return doc(docId).states[stateId] || { name: stateId, tone: 'neutral' }; },
    transitions: function (docId, stateId) { return doc(docId).transitions.filter(function (t) { return t.from === stateId; }); },
    actions: function (docId, stateId) { return Workflow.transitions(docId, stateId).filter(allowed); },
    apply: function (docId, record, event, opts) {
      var t = Workflow.transitions(docId, record.state).filter(function (x) { return x.event === event; })[0];
      if (!t) throw new Error(MSG.cannot.replace('{event}', event).replace('{state}', Workflow.state(docId, record.state).name));
      if (!allowed(t)) throw new Error(MSG.denied.replace('{event}', event));
      var entry = {
        at: new Date().toISOString(),
        role: role(),
        roleName: window.Perm ? Perm.roleName() : '',
        event: event,
        from: record.state,
        to: t.to,
        note: (opts && opts.note) || ''
      };
      var next = {};
      for (var k in record) next[k] = record[k];
      next.state = t.to;
      next.history = (record.history || []).concat([entry]);
      return next;
    },
    nextCode: function (docId, existing) {
      var pattern = doc(docId).numbering;
      if (!pattern) return null;
      var now = new Date();
      var base = pattern
        .replace('{YYYY}', String(now.getFullYear()))
        .replace('{YY}', String(now.getFullYear()).slice(-2))
        .replace('{MM}', ('0' + (now.getMonth() + 1)).slice(-2));
      var m = /\{(0+)\}/.exec(base);
      if (!m) return base;
      var prefix = base.slice(0, m.index);
      var max = 0;
      (existing || []).forEach(function (c) {
        if (String(c).indexOf(prefix) === 0) { var n = parseInt(String(c).slice(prefix.length), 10); if (n > max) max = n; }
      });
      return prefix + String(max + 1).padStart(m[1].length, '0') + base.slice(m.index + m[0].length);
    }
  };
})();
