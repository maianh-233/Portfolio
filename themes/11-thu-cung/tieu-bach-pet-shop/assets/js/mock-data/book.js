/* Dữ liệu giả MOD-BOOK: đơn thường (DOC-BOOK-ORDER), đơn pate chay (DOC-BOOK-PATE_ORDER), yêu cầu đổi trả (DOC-BOOK-RETURN), giỏ hàng.
 * Mỗi chứng từ có history đi đúng các chuyển trạng thái trong workflows.js. Tổng tiền = Σ dòng hàng − giảm giá + phí giao.
 * Kèm số liệu tổng hợp cho Thống kê (MOD-RPT): dailyStats, pateCapacity.
 */
(function () {
  var M = window.MOCK, A = M.ago, H = M.hoursAgo, P = M.photo;
  var WF = window.WORKFLOWS || {};
  function variant(vid) { for (var i = 0; i < M.products.length; i++) { var p = M.products[i]; for (var j = 0; j < p.variants.length; j++) if (p.variants[j].id === vid) return { p: p, v: p.variants[j] }; } return null; }
  function combo(cid) { return M.combos.filter(function (c) { return c.id === cid; })[0]; }
  function line(id, qty) {
    if (/^cb/.test(id)) { var c = combo(id); return { comboId: c.id, ten_hang: c.ten, ten_bien_the: 'Combo', don_gia: c.gia_combo, so_luong: qty, anh: c.anh, mon: c.items.map(function (it) { var x = variant(it[0]); return x.p.ten + ' ' + x.v.ten + ' × ' + it[1]; }) }; }
    var x = variant(id); return { productId: x.p.id, variantId: id, ten_hang: x.p.ten, ten_bien_the: x.v.ten, don_gia: x.v.gia, so_luong: qty, anh: x.v.anh };
  }
  var CUS = {}; M.customers.forEach(function (c) { CUS[c.id] = c; });
  var ROLE_NAME = { 'ROLE-02': 'Khách hàng', 'ROLE-03': 'Quản trị cửa hàng' };
  /** steps: [[event, at, by, note]] — by bắt đầu bằng "Khách" → vai trò khách */
  function history(doc, created, by, steps, extra) {
    var h = [{ at: created, role: 'ROLE-02', roleName: 'Khách hàng', by: by, event: 'Đặt đơn', from: null, to: 'NEW', note: '' }];
    var state = 'NEW', wf = WF[doc];
    (steps || []).forEach(function (s) {
      var t = wf ? wf.transitions.filter(function (x) { return x.from === state && x.event === s[0]; })[0] : null;
      if (!t) { if (window.console) console.warn('Lịch sử mẫu sai:', doc, state, s[0]); return; }
      var role = t.roles[0];
      h.push({ at: s[1], role: role, roleName: ROLE_NAME[role], by: s[2] || (role === 'ROLE-02' ? by : 'Chủ cửa hàng'), event: s[0], from: state, to: t.to, note: s[3] || '' });
      state = t.to;
    });
    (extra || []).forEach(function (e) { h.push({ at: e[0], role: 'ROLE-03', roleName: 'Quản trị cửa hàng', by: e[1], event: e[2], from: null, to: null, note: e[3] || '', log: true }); });
    h.sort(function (a, b) { return a.at < b.at ? -1 : 1; });
    return { history: h, state: state };
  }
  /** Tạo đơn: o = { code, cus, created, items: [[id, qty]], cach_giao, quan, dia_chi, tt, pay, steps, extra, ... } */
  function order(o) {
    var c = CUS[o.cus], pate = /^PC/.test(o.code), doc = pate ? 'DOC-BOOK-PATE_ORDER' : 'DOC-BOOK-ORDER';
    var items = o.items.map(function (x) { return line(x[0], x[1]); });
    var tam = items.reduce(function (s, i) { return s + i.don_gia * i.so_luong; }, 0);
    var free = o.cach_giao !== 'DVVC' || tam >= M.settings.freeShip;
    var phi = o.cach_giao === 'DVVC' && !free ? (o.phi || 32000) : 0;
    var giam = o.giam || 0;
    var hs = history(doc, o.created, c.ho_ten, o.steps, o.extra);
    var tong = tam - giam + phi;
    var rec = {
      id: o.code.toLowerCase(), code: o.code, docId: doc, loai_don: pate ? 'PATE_CHAY' : 'THUONG', state: hs.state, history: hs.history,
      ownerId: c.userId || ('u-' + c.id), customerId: c.id, teamId: 'web', branchId: 'cn-tanphu',
      ho_ten_nhan: c.ho_ten, so_dien_thoai_nhan: c.so_dien_thoai, email: c.email,
      cach_giao: o.cach_giao, quan: o.quan || '', dia_chi_giao: o.cach_giao === 'TU_LAY' ? '' : (o.dia_chi || '') + ', ' + (o.quan || '') + ', TP.HCM',
      phi_ship: phi, cua_hang_chiu_ship: o.cach_giao === 'DVVC' && free, don_vi_van_chuyen: o.dvvc || '', ma_van_don: o.mvd || '',
      cach_thanh_toan: o.tt, trang_thai_thanh_toan: o.pay || 'CHUA_THANH_TOAN', payments: o.payments || [], refunds: [],
      items: items, tam_tinh: tam, giam_gia: giam, ma_giam_gia: o.ma || '', tong_cong: tong,
      tien_coc: pate ? M.settings.deposit : 0, ngay_giao_du_kien: o.ngay_giao || null,
      ghi_chu: o.ghi_chu || '', yeu_cau_huy: o.yeu_cau_huy || null, bao_da_ck: o.bao_da_ck || null,
      tao_luc: o.created, thoi_diem_giao: o.delivered || null, diem: pate ? 0 : Math.floor(tong / 1000), diem_da_cong: hs.state === 'DELIVERED' && !pate, return_id: o.return_id || null
    };
    if (o.paidAll) rec.payments = [{ id: 'pm-' + rec.id, loai: 'Thanh toán', so_tien: tong, cach: o.tt === 'COD' ? 'Tiền mặt' : o.tt === 'QR' ? 'QR' : 'Chuyển khoản', at: o.paidAt || o.created, by: o.paidBy || 'Chủ cửa hàng', ghi_chu: '' }];
    return rec;
  }
  var L = 'c-lan';
  M.orders = [
    /* Đơn của khách demo Nguyễn Thị Lan */
    order({ code: 'DH-2026-00012', cus: L, created: A(2, 9, 15), items: [['p1-v1', 2], ['p2-v1', 3], ['p6-v1', 2]], ma: 'TIEUBACH20K', giam: 20000, cach_giao: 'TU_GIAO', quan: 'Tân Bình', dia_chi: '12 Hoàng Văn Thụ, Phường 2', tt: 'QR', pay: 'DA_THANH_TOAN', paidAll: true, paidAt: A(2, 9, 31),
      steps: [['Xác nhận đơn', A(2, 10, 2), 'Chủ cửa hàng', 'Đã kiểm tra tồn'], ['Bắt đầu giao', A(0, 8, 30), 'Mẹ (người nhà)', 'Cửa hàng tự giao']], extra: [[A(2, 9, 31), 'Chủ cửa hàng', 'Ghi nhận thanh toán 330.000đ (QR)']] }),
    order({ code: 'PC-2026-00005', cus: L, created: A(0, 8, 10), items: [['pc1-v1', 2]], cach_giao: 'TU_GIAO', quan: 'Tân Bình', dia_chi: '12 Hoàng Văn Thụ, Phường 2', tt: 'QR', ngay_giao: A(-7, 10) }),
    order({ code: 'DH-2026-00010', cus: L, created: A(1, 14, 20), items: [['p4-v1', 1], ['p8-v1', 1]], cach_giao: 'TU_GIAO', quan: 'Tân Bình', dia_chi: '12 Hoàng Văn Thụ, Phường 2', tt: 'COD', steps: [['Xác nhận đơn', A(1, 15, 0)]] }),
    order({ code: 'DH-2026-00008', cus: L, created: A(1, 10, 0), items: [['p3-v1', 3], ['cb1', 1]], cach_giao: 'TU_GIAO', quan: 'Tân Bình', dia_chi: '12 Hoàng Văn Thụ, Phường 2', tt: 'QR', pay: 'DA_THANH_TOAN', paidAll: true, paidAt: A(1, 10, 12), delivered: H(3),
      steps: [['Xác nhận đơn', A(1, 10, 40)], ['Bắt đầu giao', H(6), 'Mẹ (người nhà)'], ['Giao thành công', H(3), 'Mẹ (người nhà)', 'Khách đã nhận']] }),
    order({ code: 'DH-2026-00006', cus: L, created: A(9, 20, 0), items: [['p7-v1', 1]], cach_giao: 'TU_GIAO', quan: 'Tân Bình', dia_chi: '12 Hoàng Văn Thụ, Phường 2', tt: 'COD', steps: [['Khách hủy đơn', A(9, 20, 30), null, 'Đặt nhầm']] }),
    order({ code: 'PC-2026-00002', cus: L, created: A(30, 9, 0), items: [['pc2-v1', 3]], cach_giao: 'TU_GIAO', quan: 'Tân Bình', dia_chi: '12 Hoàng Văn Thụ, Phường 2', tt: 'CHUYEN_KHOAN', pay: 'DA_THANH_TOAN', ngay_giao: A(23, 10), delivered: A(23, 16),
      payments: [{ id: 'pm-pc2a', loai: 'Cọc', so_tien: 200000, cach: 'Chuyển khoản', at: A(30, 14), by: 'Chủ cửa hàng' }, { id: 'pm-pc2b', loai: 'Thanh toán', so_tien: 10000, cach: 'Tiền mặt', at: A(23, 16), by: 'Mẹ (người nhà)' }],
      steps: [['Xác nhận qua điện thoại', A(30, 10)], ['Đã nhận cọc, bắt đầu làm', A(29, 8)], ['Giao cho shipper / đi giao', A(23, 14)], ['Giao thành công', A(23, 16)]] }),
    order({ code: 'PC-2026-00003', cus: L, created: A(1, 11, 0), items: [['pc1-v2', 4]], cach_giao: 'TU_GIAO', quan: 'Tân Bình', dia_chi: '12 Hoàng Văn Thụ, Phường 2', tt: 'QR', ngay_giao: A(-6, 10), steps: [['Xác nhận qua điện thoại', A(1, 13, 0), 'Chủ cửa hàng', 'Đã gọi, khách đồng ý']] }),
    /* Đơn của khách khác (trang quản lý) */
    order({ code: 'DH-2026-00013', cus: 'c-minh', created: A(0, 9, 42), items: [['p12-v2', 1], ['p16-v1', 2], ['p15-v1', 5]], cach_giao: 'DVVC', quan: 'Gò Vấp', dia_chi: '88 Quang Trung, Phường 10', tt: 'CHUYEN_KHOAN', ghi_chu: 'Giao giờ hành chính giúp mình' }),
    order({ code: 'DH-2026-00014', cus: 'c-thu', created: A(0, 10, 15), items: [['p4-v1', 1], ['p6-v1', 2]], cach_giao: 'DVVC', quan: 'Quận 10', dia_chi: '201 Ba Tháng Hai, Phường 12', tt: 'COD' }),
    order({ code: 'DH-2026-00015', cus: 'c-mai', created: A(0, 11, 2), items: [['p13-v1', 1], ['p15-v1', 4]], cach_giao: 'TU_GIAO', quan: 'Bình Tân', dia_chi: '15 Tên Lửa, Bình Trị Đông', tt: 'QR', bao_da_ck: A(0, 11, 10) }),
    order({ code: 'PC-2026-00006', cus: 'c-hoa', created: A(0, 7, 50), items: [['pc1-v1', 2]], cach_giao: 'TU_GIAO', quan: 'Tân Phú', dia_chi: '40 Thoại Ngọc Hầu, Phú Thạnh', tt: 'QR', ngay_giao: A(-7, 10), yeu_cau_huy: { at: A(0, 9, 5), reason: 'Đổi ý, muốn đặt vị khác' } }),
    order({ code: 'PC-2026-00004', cus: 'c-vy', created: A(4, 9, 42), items: [['pc1-v3', 3]], cach_giao: 'TU_LAY', tt: 'CHUYEN_KHOAN', pay: 'DA_COC', ngay_giao: A(-3, 10),
      payments: [{ id: 'pm-pc4', loai: 'Cọc', so_tien: 200000, cach: 'Chuyển khoản', at: A(4, 14, 20), by: 'Mẹ (người nhà)' }],
      steps: [['Xác nhận qua điện thoại', A(4, 10, 5), 'Chủ cửa hàng', 'Đã gọi, khách đồng ý'], ['Đã nhận cọc, bắt đầu làm', A(3, 8, 0)]], extra: [[A(4, 14, 20), 'Mẹ (người nhà)', 'Ghi nhận cọc 200.000đ']] }),
    order({ code: 'PC-2026-00007', cus: 'c-nam', created: A(2, 15, 0), items: [['pc2-v2', 2]], cach_giao: 'TU_GIAO', quan: 'Tân Phú', dia_chi: '9 Lũy Bán Bích, Tân Thới Hòa', tt: 'QR', pay: 'DA_COC', ngay_giao: A(-5, 10),
      payments: [{ id: 'pm-pc7', loai: 'Cọc', so_tien: 200000, cach: 'QR', at: A(1, 9, 30), by: 'Chủ cửa hàng' }], steps: [['Xác nhận qua điện thoại', A(2, 16, 0)]], extra: [[A(1, 9, 30), 'Chủ cửa hàng', 'Ghi nhận cọc 200.000đ']] }),
    order({ code: 'PC-2026-00010', cus: 'c-vy', created: A(1, 9, 0), items: [['pc1-v1', 2], ['pc1-v2', 2]], cach_giao: 'DVVC', quan: 'Quận 3', dia_chi: '77 Lê Văn Sỹ, Phường 13', tt: 'CHUYEN_KHOAN', ngay_giao: A(-6, 10), steps: [['Xác nhận qua điện thoại', A(1, 10, 15)]] }),
    order({ code: 'PC-2026-00008', cus: 'c-hung', created: A(8, 10, 0), items: [['pc2-v1', 4]], cach_giao: 'TU_GIAO', quan: 'Tân Bình', dia_chi: '3 Cộng Hòa, Phường 4', tt: 'QR', pay: 'DA_THANH_TOAN', ngay_giao: A(1, 10),
      payments: [{ id: 'pm-pc8', loai: 'Cọc', so_tien: 200000, cach: 'QR', at: A(8, 15), by: 'Chủ cửa hàng' }, { id: 'pm-pc8b', loai: 'Thanh toán', so_tien: 80000, cach: 'QR', at: A(1, 9), by: 'Chủ cửa hàng' }],
      steps: [['Xác nhận qua điện thoại', A(8, 11)], ['Đã nhận cọc, bắt đầu làm', A(7, 8)], ['Giao cho shipper / đi giao', A(0, 9, 30), 'Mẹ (người nhà)']] }),
    order({ code: 'PC-2026-00009', cus: 'c-anh', created: A(6, 18, 0), items: [['pc1-v3', 6]], cach_giao: 'TU_GIAO', quan: 'Tân Phú', dia_chi: '22 Âu Cơ, Tân Quý', tt: 'QR', ngay_giao: A(-1, 10), steps: [['Từ chối', A(6, 19, 0), 'Chủ cửa hàng', 'Hết suất — ngày giao dự kiến đã đủ 20 hũ']] }),
    order({ code: 'PC-2026-00001', cus: 'c-thao', created: A(40, 9, 0), items: [['pc1-v1', 2]], cach_giao: 'TU_LAY', tt: 'CHUYEN_KHOAN', pay: 'DA_THANH_TOAN', ngay_giao: A(33, 10), delivered: A(33, 17),
      payments: [{ id: 'pm-pc1', loai: 'Cọc', so_tien: 130000, cach: 'Chuyển khoản', at: A(40, 12), by: 'Chủ cửa hàng' }],
      steps: [['Xác nhận qua điện thoại', A(40, 10)], ['Đã nhận cọc, bắt đầu làm', A(39, 8)], ['Khách nhận tại cửa hàng', A(33, 17)]] }),
    order({ code: 'DH-2026-00009', cus: 'c-hung', created: A(6, 9, 0), items: [['p13-v1', 1], ['p15-v1', 3]], cach_giao: 'DVVC', quan: 'Phú Nhuận', dia_chi: '50 Phan Xích Long, Phường 15', tt: 'QR', pay: 'DA_THANH_TOAN', paidAll: true, paidAt: A(6, 9, 20), dvvc: 'Giao Hàng Nhanh', mvd: 'GHN8823114',
      steps: [['Xác nhận đơn', A(6, 10)], ['Bắt đầu giao', A(5, 9), 'Chủ cửa hàng', 'GHN · GHN8823114'], ['ĐVVC trả hàng', A(2, 16), 'Chủ cửa hàng', 'Khách không nhận hàng, gọi không được']] }),
    order({ code: 'DH-2026-00011', cus: 'c-anh', created: A(1, 16, 0), items: [['p3-v1', 3], ['p1-v2', 1]], cach_giao: 'TU_GIAO', quan: 'Tân Phú', dia_chi: '22 Âu Cơ, Tân Quý', tt: 'QR', pay: 'DA_THANH_TOAN', paidAll: true, paidAt: A(1, 16, 10), delivered: H(20), return_id: 'dt-2026-00004',
      steps: [['Xác nhận đơn', A(1, 16, 30)], ['Bắt đầu giao', H(23), 'Mẹ (người nhà)'], ['Giao thành công', H(20), 'Mẹ (người nhà)']] }),
    order({ code: 'DH-2026-00007', cus: 'c-thao', created: A(5, 9, 0), items: [['p10-v1', 1], ['p11-v1', 2]], cach_giao: 'TU_GIAO', quan: 'Tân Phú', dia_chi: '18 Hòa Bình, Phú Thạnh', tt: 'QR', pay: 'DA_THANH_TOAN', paidAll: true, paidAt: A(5, 9, 10), delivered: A(4, 15), return_id: 'dt-2026-00003',
      steps: [['Xác nhận đơn', A(5, 10)], ['Bắt đầu giao', A(4, 10)], ['Giao thành công', A(4, 15)]] }),
    order({ code: 'DH-2026-00005', cus: 'c-nam', created: A(12, 9, 0), items: [['p9-v1', 6], ['p2-v1', 6]], cach_giao: 'TU_GIAO', quan: 'Tân Phú', dia_chi: '9 Lũy Bán Bích, Tân Thới Hòa', tt: 'COD', pay: 'DA_THANH_TOAN', paidAll: true, paidAt: A(11, 16), paidBy: 'Mẹ (người nhà)', delivered: A(11, 16), return_id: 'dt-2026-00002',
      steps: [['Xác nhận đơn', A(12, 10)], ['Bắt đầu giao', A(11, 9)], ['Giao thành công', A(11, 16)]] }),
    order({ code: 'DH-2026-00004', cus: 'c-mai', created: A(16, 9, 0), items: [['p12-v1', 2], ['p16-v1', 1]], cach_giao: 'TU_GIAO', quan: 'Bình Tân', dia_chi: '15 Tên Lửa, Bình Trị Đông', tt: 'COD', pay: 'DA_THANH_TOAN', paidAll: true, paidAt: A(15, 17), delivered: A(15, 17), return_id: 'dt-2026-00001',
      steps: [['Xác nhận đơn', A(16, 10)], ['Bắt đầu giao', A(15, 9)], ['Giao thành công', A(15, 17)]] }),
    order({ code: 'DH-2026-00003', cus: 'c-minh', created: A(3, 13, 0), items: [['p14-v1', 1]], cach_giao: 'DVVC', quan: 'Gò Vấp', dia_chi: '88 Quang Trung, Phường 10', tt: 'COD', dvvc: 'Giao Hàng Tiết Kiệm', mvd: 'S1923.SG01.B7.4410',
      steps: [['Xác nhận đơn', A(3, 14)], ['Bắt đầu giao', A(2, 9), 'Chủ cửa hàng', 'GHTK · S1923.SG01.B7.4410']] }),
    order({ code: 'DH-2026-00002', cus: 'c-thu', created: A(2, 18, 0), items: [['p19-v1', 1], ['p16-v1', 2]], cach_giao: 'TU_LAY', tt: 'CHUYEN_KHOAN', pay: 'DA_THANH_TOAN', paidAll: true, paidAt: A(2, 18, 20), steps: [['Xác nhận đơn', A(2, 19)]] }),
    order({ code: 'DH-2026-00001', cus: 'c-hoa', created: A(45, 10, 0), items: [['p1-v1', 1], ['p6-v1', 3]], cach_giao: 'TU_GIAO', quan: 'Tân Phú', dia_chi: '40 Thoại Ngọc Hầu, Phú Thạnh', tt: 'COD', pay: 'DA_THANH_TOAN', paidAll: true, paidAt: A(44, 15), delivered: A(44, 15),
      steps: [['Xác nhận đơn', A(45, 11)], ['Bắt đầu giao', A(44, 9)], ['Giao thành công', A(44, 15)]] }),
    order({ code: 'DH-2026-00016', cus: 'c-nam', created: A(1, 8, 0), items: [['cb5', 1], ['p19-v1', 1]], cach_giao: 'DVVC', quan: 'TP. Thủ Dầu Một', dia_chi: '5 Yersin, Phú Cường', tt: 'CHUYEN_KHOAN', pay: 'DA_THANH_TOAN', paidAll: true, paidAt: A(1, 8, 30), phi: 45000, steps: [['Xác nhận đơn', A(1, 9)]] }),
    order({ code: 'DH-2026-00017', cus: 'c-thao', created: A(1, 17, 0), items: [['cb3', 1], ['p7-v1', 1]], cach_giao: 'TU_GIAO', quan: 'Tân Phú', dia_chi: '18 Hòa Bình, Phú Thạnh', tt: 'QR', pay: 'DA_THANH_TOAN', paidAll: true, paidAt: A(1, 17, 5),
      steps: [['Xác nhận đơn', A(1, 17, 20)], ['Bắt đầu giao', A(0, 9, 0), 'Mẹ (người nhà)']] })
  ];
  M.orders.forEach(function (o) { if (o.code === 'DH-2026-00009') o.refunds = []; });

  /* Yêu cầu đổi trả (DOC-BOOK-RETURN) */
  function ret(o) {
    var ord = M.orders.filter(function (x) { return x.code === o.order; })[0];
    var h = [{ at: o.created, role: 'ROLE-02', roleName: 'Khách hàng', by: ord.ho_ten_nhan, event: 'Gửi yêu cầu', from: null, to: 'PENDING', note: '' }], st = 'PENDING';
    (o.steps || []).forEach(function (s) { var t = WF['DOC-BOOK-RETURN'].transitions.filter(function (x) { return x.from === st && x.event === s[0]; })[0]; h.push({ at: s[1], role: 'ROLE-03', roleName: 'Quản trị cửa hàng', by: s[2] || 'Chủ cửa hàng', event: s[0], from: st, to: t.to, note: s[3] || '' }); st = t.to; });
    return {
      id: o.code.toLowerCase(), code: o.code, docId: 'DOC-BOOK-RETURN', state: st, history: h, orderId: ord.id, orderCode: ord.code, ownerId: ord.ownerId, customerId: ord.customerId,
      ho_ten: ord.ho_ten_nhan, so_dien_thoai: ord.so_dien_thoai_nhan, ly_do: o.ly_do, hinh_thuc: o.hinh_thuc, mo_ta: o.mo_ta, items: o.items, tao_luc: o.created,
      video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', anh: o.anh || [], ket_qua: o.ket_qua || '', ly_do_tu_choi: o.tu_choi || '', da_hoan_tien: !!o.refunded
    };
  }
  M.returns = [
    ret({ code: 'DT-2026-00004', order: 'DH-2026-00011', created: H(4), ly_do: 'GIAO_NHAM', hinh_thuc: 'DOI_HANG', mo_ta: 'Nhận vị gà thay vị cá. Hàng còn nguyên, chưa xé gói.', items: [{ ten: 'Pate Whiskas vị gà 85g', bien_the: 'Gói 85g', so_luong: 3, gia: 18000 }], anh: [P('cat', 71, 600), P('cat', 72, 600)] }),
    ret({ code: 'DT-2026-00003', order: 'DH-2026-00007', created: A(4, 19, 0), ly_do: 'HANG_LOI', hinh_thuc: 'TRA_HANG', mo_ta: 'Tuýp gel bị nứt, chảy ra ngoài hộp.', items: [{ ten: 'Gel dinh dưỡng Nutri-Plus', bien_the: 'Tuýp 120g', so_luong: 1, gia: 165000 }], anh: [P('cat', 73, 600)], steps: [['Chấp nhận', A(3, 9, 0), 'Chủ cửa hàng', 'Video rõ, hàng lỗi do vận chuyển']] }),
    ret({ code: 'DT-2026-00002', order: 'DH-2026-00005', created: A(11, 19, 0), ly_do: 'GIAO_NHAM', hinh_thuc: 'DOI_HANG', mo_ta: 'Đặt Whiskas cá ngừ nhưng nhận Me-O cá thu 2 gói.', items: [{ ten: 'Pate Me-O vị cá thu 80g', bien_the: 'Gói 80g', so_luong: 2, gia: 15000 }], ket_qua: 'Đã giao lại 2 gói Whiskas cá ngừ', steps: [['Chấp nhận', A(10, 9)], ['Hoàn tất', A(9, 15), 'Mẹ (người nhà)', 'Đã giao lại 2 gói Whiskas cá ngừ']] }),
    ret({ code: 'DT-2026-00001', order: 'DH-2026-00004', created: A(15, 20, 0), ly_do: 'HANG_LOI', hinh_thuc: 'DOI_HANG', mo_ta: 'Túi hạt bị ẩm.', items: [{ ten: 'Hạt SmartHeart cho chó con', bien_the: 'Túi 400g', so_luong: 1, gia: 65000 }], tu_choi: 'Video không thấy lúc mở hàng', steps: [['Từ chối', A(14, 9), 'Chủ cửa hàng', 'Video không thấy lúc mở hàng']] })
  ];

  /* Giỏ hàng (ENT-CART_ITEM) — dùng chung cho khách vãng lai / khách hàng trong bản demo. Một dòng có cờ "giá đã đổi" minh họa BOOK-E01 */
  M.cart = [
    { id: 'ci1', kind: 'variant', productId: 'p1', variantId: 'p1-v1', qty: 2, addedAt: A(0, 8, 0) },
    { id: 'ci2', kind: 'variant', productId: 'p2', variantId: 'p2-v1', qty: 3, addedAt: A(0, 8, 2), oldPrice: 16000 },
    { id: 'ci3', kind: 'variant', productId: 'p6', variantId: 'p6-v1', qty: 2, addedAt: A(0, 8, 5) }
  ];

  /* Số liệu tổng hợp theo ngày cho Thống kê (120 ngày gần nhất, sinh cố định theo hạt giống) */
  var seed = 20261014; function rnd() { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; }
  M.dailyStats = [];
  for (var d = 119; d >= 0; d--) {
    var wk = new Date(A(d)).getDay(); var boost = wk === 0 || wk === 6 ? 5 : 0;
    var thuong = Math.round(15 + rnd() * 9 + boost), pate = Math.round(3 + rnd() * 3);
    var huy = rnd() < 0.55 ? 1 : 0;
    var avg = 340000 + Math.round(rnd() * 90000 / 1000) * 1000;
    M.dailyStats.push({ date: A(d, 12), thuong: thuong, pate: pate, moi: thuong + pate, da_giao: thuong + pate - huy - (d < 2 ? 6 : 0), da_huy: huy, doanh_thu: (thuong + pate - huy) * avg });
  }
  /* Suất pate chay theo ngày giao dự kiến (14 ngày tới) — số hũ đã nhận / 20 */
  var jars = [12, 15, 9, 18, 11, 16, 14, 17, 21, 8, 6, 10, 4, 3];
  M.pateCapacity = jars.map(function (j, i) { return { date: A(-(i + 1), 10), jars: j, orders: Math.ceil(j / 2.4) }; });
})();
