/* Dữ liệu giả dùng chung — Tiểu Bạch Pet Shop.
 * Ngày giờ tính tương đối so với hôm nay để bản demo luôn "mới" (3 tháng gần nhất).
 * Ảnh: loremflickr (ảnh thật chó / mèo) — ảnh thật của cửa hàng chờ OI-025; lỗi tải ảnh tự thay bằng ô linh vật.
 */
(function () {
  var M = (window.MOCK = window.MOCK || {});
  /** Ảnh minh họa theo chủ đề + số khóa cố định */
  var P = (M.photo = function (tag, lock, w, h) { return 'https://loremflickr.com/' + (w || 600) + '/' + (h || w || 600) + '/' + tag + '?lock=' + lock; });
  /** Thời điểm cách hôm nay `d` ngày, lúc h:m (d âm = tương lai) */
  M.ago = function (d, h, m) { var t = new Date(); t.setDate(t.getDate() - d); t.setHours(h == null ? 9 : h, m || 0, 0, 0); return t.toISOString(); };
  M.hoursAgo = function (h) { return new Date(Date.now() - h * 3600e3).toISOString(); };
  var A = M.ago;

  M.settings = {
    name: 'Tiểu Bạch Pet Shop',
    address: '123 Lũy Bán Bích, P. Tân Thới Hòa, Q. Tân Phú, TP.HCM',
    hours: '8:00 - 21:00 hằng ngày',
    phone: '0901 234 567', phoneRaw: '0901234567',
    zalo: 'https://zalo.me/0901234567', facebook: 'https://facebook.com/tieubachpetshop', messenger: 'https://m.me/tieubachpetshop',
    mapQuery: '123 Lũy Bán Bích, Tân Phú, Hồ Chí Minh',
    freeShip: 400000, freeDistricts: ['Tân Phú', 'Tân Bình', 'Bình Tân'],
    bank: 'Vietcombank', account: '0123456789', holder: 'TRAN VAN A',
    deposit: 200000, pateCap: 20, pateDays: 7, carriers: ['Giao Hàng Tiết Kiệm', 'Giao Hàng Nhanh', 'Viettel Post']
  };

  /* Người dùng demo — mỗi vai trò ít nhất 1 người (permissions.js: ROLE-01/02/03) */
  M.users = [
    { id: 'u-guest', name: 'Khách vãng lai', roleId: 'ROLE-01', teamId: 'web', branchId: 'cn-tanphu', email: '', phone: '', desc: 'Xem sản phẩm, thêm giỏ; cần đăng nhập để đặt hàng' },
    { id: 'u-lan', name: 'Nguyễn Thị Lan', roleId: 'ROLE-02', customerId: 'c-lan', teamId: 'web', branchId: 'cn-tanphu', email: 'lan@gmail.com', phone: '0901234567', desc: 'Đặt hàng, đặt trước pate chay, tích điểm, đổi trả' },
    { id: 'u-chu', name: 'Chủ cửa hàng', roleId: 'ROLE-03', adminId: 'a-chu', teamId: 'shop', branchId: 'cn-tanphu', email: 'chu.quan@tieubach.vn', phone: '0901234567', desc: 'Toàn quyền trang quản lý: đơn, đổi trả, sản phẩm, khuyến mãi' }
  ];

  M.petTypes = [
    { id: 'cho', ten: 'Chó', full: 'Chó', thu_tu: 1, hien_thi: true, bg: 'bg-primary-100', fg: 'text-primary-700', tone: 'primary', img: P('puppy', 11) },
    { id: 'meo', ten: 'Mèo', full: 'Mèo', thu_tu: 2, hien_thi: true, bg: 'bg-secondary-100', fg: 'text-secondary-700', tone: 'secondary', img: P('kitten', 12) },
    { id: 'thu-nho', ten: 'Thú nhỏ', full: 'Hamster / thỏ / bọ ú', thu_tu: 3, hien_thi: true, bg: 'bg-warning-100', fg: 'text-warning-700', tone: 'warning', img: P('hamster', 13) }
  ];
  M.categories = [
    { id: 'hat-kho', ten: 'Hạt khô', thu_tu: 1, hien_thi: true },
    { id: 'pate-uot', ten: 'Pate / thức ăn ướt nhập về', thu_tu: 2, hien_thi: true },
    { id: 'pate-chay', ten: 'Pate chay tự làm', thu_tu: 3, hien_thi: true, la_pate_chay: true },
    { id: 'sua-vitamin', ten: 'Sữa / vitamin', thu_tu: 4, hien_thi: true },
    { id: 'banh-thuong', ten: 'Bánh thưởng / snack', thu_tu: 5, hien_thi: true },
    { id: 'phu-kien', ten: 'Phụ kiện', thu_tu: 6, hien_thi: true }
  ];

  /* Sản phẩm: v = [id, tên biến thể, giá, giá gốc, tồn, ngưỡng sắp hết, sku] */
  function prod(id, ten, brand, cat, pets, tag, lock, vs, extra) {
    var p = {
      id: id, ten: ten, thuong_hieu: brand, category_id: cat, pet_type_ids: pets, trang_thai: 'DANG_BAN',
      anh: [P(tag, lock), P(tag, lock + 100), P(tag, lock + 200), P(tag, lock + 300)],
      variants: vs.map(function (v, i) { return { id: id + '-v' + (i + 1), ten: v[0], gia: v[1], gia_goc: v[2] || null, ton_kho: v[3], nguong: v[4] == null ? 5 : v[4], sku: v[5] || (id.toUpperCase() + '-' + (i + 1)), anh: P(tag, lock + 10 + i, 160) }; }),
      sao: 0, so_danh_gia: 0, dist: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }, sold30: 0, tao_luc: A(90), cap_nhat: A(5), has_orders: true,
      mo_ta: '<p>' + ten + ' phù hợp cho Boss mọi lứa tuổi. Hàng chính hãng, đóng gói cẩn thận, hạn dùng còn dài.</p><ul><li>Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp</li><li>Đóng kín miệng túi sau khi dùng</li><li>Luôn để sẵn nước sạch cho Boss</li></ul>'
    };
    for (var k in extra) p[k] = extra[k];
    return p;
  }
  M.products = [
    prod('p1', 'Hạt Royal Canin Kitten', 'Royal Canin', 'hat-kho', ['meo'], 'kitten', 21, [['Gói 400g', 125000, 140000, 15, 5, 'RC-K-400'], ['Gói 2kg', 450000, null, 3, 5, 'RC-K-2KG'], ['Gói 4kg', 820000, null, 0, 5, 'RC-K-4KG']], { sao: 4.8, so_danh_gia: 32, dist: { 5: 24, 4: 6, 3: 1, 2: 0, 1: 1 }, sold30: 128,
      mo_ta: '<p>Hạt Royal Canin Kitten dành cho mèo con từ 4 đến 12 tháng tuổi. Hạt nhỏ, giòn, dễ nhai, giàu đạm giúp Boss lớn nhanh và khỏe.</p><h3>Điểm nổi bật</h3><ul><li>Hỗ trợ hệ miễn dịch đang phát triển</li><li>Tốt cho tiêu hóa nhờ chất xơ hòa tan</li><li>Kích thước hạt phù hợp hàm mèo con</li></ul><p>Lượng cho ăn tham khảo: 40 đến 70g mỗi ngày tùy cân nặng, chia 3 đến 4 bữa.</p>' }),
    prod('p2', 'Pate Whiskas vị cá ngừ 85g', 'Whiskas', 'pate-uot', ['meo'], 'cat', 22, [['Gói 85g', 18000, null, 40, 10, 'WK-CN-85']], { sao: 4.6, so_danh_gia: 21, dist: { 5: 15, 4: 4, 3: 2, 2: 0, 1: 0 }, sold30: 210 }),
    prod('p3', 'Pate Whiskas vị gà 85g', 'Whiskas', 'pate-uot', ['meo'], 'cat', 23, [['Gói 85g', 18000, null, 25, 10, 'WK-GA-85']], { sao: 4.5, so_danh_gia: 14, dist: { 5: 9, 4: 3, 3: 2, 2: 0, 1: 0 }, sold30: 140 }),
    prod('p4', 'Hạt Me-O vị hải sản', 'Me-O', 'hat-kho', ['meo'], 'cat', 24, [['Túi 1,2kg', 95000, null, 20], ['Túi 3kg', 215000, null, 8]], { sao: 4.4, so_danh_gia: 18, dist: { 5: 10, 4: 6, 3: 1, 2: 1, 1: 0 }, sold30: 96 }),
    prod('p5', 'Sữa bột cho mèo con Bio Milk', 'Bio', 'sua-vitamin', ['meo'], 'kitten', 25, [['Hộp 200g', 85000, null, 12]], { sao: 4.7, so_danh_gia: 9, dist: { 5: 7, 4: 2, 3: 0, 2: 0, 1: 0 }, sold30: 44 }),
    prod('p6', 'Bánh thưởng Ciao Churu vị gà', 'Ciao', 'banh-thuong', ['meo'], 'cat', 26, [['Gói 4 thanh', 23000, null, 30]], { sao: 4.9, so_danh_gia: 27, dist: { 5: 25, 4: 2, 3: 0, 2: 0, 1: 0 }, sold30: 175 }),
    prod('p7', 'Cát vệ sinh đậu nành 6L', 'Cature', 'phu-kien', ['meo'], 'cat', 27, [['Túi 6L', 135000, null, 14]], { sao: 4.3, so_danh_gia: 11, dist: { 5: 5, 4: 4, 3: 2, 2: 0, 1: 0 }, sold30: 58 }),
    prod('p8', 'Hạt Whiskas cho mèo trưởng thành', 'Whiskas', 'hat-kho', ['meo'], 'cat', 28, [['Túi 1,2kg', 110000, 125000, 16], ['Túi 3kg', 245000, null, 9]], { sao: 4.2, so_danh_gia: 8, dist: { 5: 3, 4: 4, 3: 1, 2: 0, 1: 0 }, sold30: 37 }),
    prod('p9', 'Pate Me-O vị cá thu 80g', 'Me-O', 'pate-uot', ['meo'], 'cat', 29, [['Gói 80g', 15000, null, 0, 10]], { sao: 4.1, so_danh_gia: 6, dist: { 5: 2, 4: 3, 3: 1, 2: 0, 1: 0 }, sold30: 60 }),
    prod('p10', 'Gel dinh dưỡng Nutri-Plus', 'Virbac', 'sua-vitamin', ['meo', 'cho'], 'cat', 30, [['Tuýp 120g', 165000, null, 4]], { sao: 4.8, so_danh_gia: 12, dist: { 5: 10, 4: 2, 3: 0, 2: 0, 1: 0 }, sold30: 22 }),
    prod('p11', 'Bánh thưởng cá hồi sấy', 'Tiểu Bạch', 'banh-thuong', ['meo', 'cho'], 'cat', 31, [['Hũ 100g', 59000, null, 22]], { sao: 4.7, so_danh_gia: 15, dist: { 5: 11, 4: 4, 3: 0, 2: 0, 1: 0 }, sold30: 81 }),
    prod('p12', 'Hạt SmartHeart cho chó con', 'SmartHeart', 'hat-kho', ['cho'], 'puppy', 32, [['Túi 400g', 65000, null, 18], ['Túi 1,5kg', 185000, null, 10], ['Túi 3kg', 340000, null, 5]], { sao: 4.5, so_danh_gia: 19, dist: { 5: 12, 4: 5, 3: 2, 2: 0, 1: 0 }, sold30: 77 }),
    prod('p13', 'Hạt Pedigree vị bò', 'Pedigree', 'hat-kho', ['cho'], 'dog', 33, [['Túi 1,5kg', 155000, 175000, 12], ['Túi 3kg', 290000, null, 6]], { sao: 4.4, so_danh_gia: 23, dist: { 5: 14, 4: 6, 3: 2, 2: 1, 1: 0 }, sold30: 102 }),
    prod('p14', 'Hạt ANF 6Free cho chó', 'ANF', 'hat-kho', ['cho'], 'dog', 34, [['Túi 2kg', 420000, null, 7]], { sao: 4.6, so_danh_gia: 7, dist: { 5: 5, 4: 2, 3: 0, 2: 0, 1: 0 }, sold30: 18 }),
    prod('p15', 'Pate Pedigree vị gà 130g', 'Pedigree', 'pate-uot', ['cho'], 'dog', 35, [['Lon 130g', 28000, null, 36, 10]], { sao: 4.5, so_danh_gia: 10, dist: { 5: 6, 4: 3, 3: 1, 2: 0, 1: 0 }, sold30: 88 }),
    prod('p16', 'Xương gặm sạch răng Dentastix', 'Pedigree', 'banh-thuong', ['cho'], 'dog', 36, [['Gói 7 que', 62000, 70000, 20]], { sao: 4.6, so_danh_gia: 16, dist: { 5: 11, 4: 4, 3: 1, 2: 0, 1: 0 }, sold30: 69 }),
    prod('p17', 'Sữa tắm thảo mộc cho chó', 'Tiểu Bạch', 'phu-kien', ['cho'], 'dog', 37, [['Chai 500ml', 120000, null, 10]], { sao: 0, so_danh_gia: 0, sold30: 9, tao_luc: A(6), has_orders: false }),
    prod('p18', 'Vòng cổ chuông nhỏ', 'Tiểu Bạch', 'phu-kien', ['cho', 'meo'], 'cat', 38, [['Màu hồng', 45000, null, 15], ['Màu mint', 45000, null, 12]], { sao: 5, so_danh_gia: 2, dist: { 5: 2, 4: 0, 3: 0, 2: 0, 1: 0 }, sold30: 14, tao_luc: A(12), has_orders: false }),
    prod('p19', 'Canxi nhai cho chó', 'Vemedim', 'sua-vitamin', ['cho'], 'dog', 39, [['Hũ 100 viên', 90000, null, 11]], { sao: 4.3, so_danh_gia: 5, dist: { 5: 2, 4: 2, 3: 1, 2: 0, 1: 0 }, sold30: 21 }),
    prod('p20', 'Pate Monge cho chó 400g', 'Monge', 'pate-uot', ['cho'], 'dog', 40, [['Lon 400g', 75000, null, 0, 5]], { sao: 4.7, so_danh_gia: 9, dist: { 5: 7, 4: 2, 3: 0, 2: 0, 1: 0 }, sold30: 30 }),
    prod('p21', 'Thức ăn hỗn hợp cho hamster', 'Tiểu Bạch', 'hat-kho', ['thu-nho'], 'hamster', 41, [['Gói 500g', 55000, null, 20]], { sao: 4.6, so_danh_gia: 8, dist: { 5: 6, 4: 1, 3: 1, 2: 0, 1: 0 }, sold30: 26 }),
    prod('p22', 'Cỏ timothy cho thỏ', 'Oxbow', 'hat-kho', ['thu-nho'], 'rabbit', 42, [['Gói 450g', 98000, null, 2, 3]], { sao: 4.8, so_danh_gia: 4, dist: { 5: 3, 4: 1, 3: 0, 2: 0, 1: 0 }, sold30: 12 }),
    prod('p23', 'Bánh thưởng hamster vị trái cây', 'Tiểu Bạch', 'banh-thuong', ['thu-nho'], 'hamster', 43, [['Hũ 80g', 35000, null, 18]], { sao: 0, so_danh_gia: 0, sold30: 6, tao_luc: A(3), has_orders: false }),
    prod('p24', 'Bánh quy sữa cho chó (ngừng bán)', 'Tiểu Bạch', 'banh-thuong', ['cho'], 'dog', 44, [['Gói 200g', 39000, null, 0]], { trang_thai: 'AN', sold30: 0 }),
    /* Pate chay tự làm — không quản lý tồn (BR-PROD-005) */
    prod('pc1', 'Pate chay bí đỏ đậu gà', 'Tiểu Bạch', 'pate-chay', ['cho', 'meo'], 'pumpkin', 51, [['Bí đỏ · hũ 200g', 65000, null, null, null, 'PC-BD-200'], ['Cà rốt · hũ 200g', 65000, null, null, null, 'PC-CR-200'], ['Khoai lang · hũ 200g', 65000, null, null, null, 'PC-KL-200']], {
      sao: 4.9, so_danh_gia: 18, dist: { 5: 16, 4: 2, 3: 0, 2: 0, 1: 0 }, sold30: 64, la_pate: true,
      pate: {
        cau_chuyen: 'Tiểu Bạch kén ăn và hay đau bụng với pate công nghiệp. Chúng mình tự nấu pate từ rau củ, đậu gà và yến mạch, Boss ăn hết sạch bát. Từ đó, mỗi hũ pate chay đều được làm tay theo đơn, không chất bảo quản.',
        thanh_phan: ['Đậu gà', 'Bí đỏ', 'Yến mạch', 'Cà rốt', 'Dầu cá thực vật', 'Nước dùng rau củ'],
        nsx_hsd: 'Làm theo đơn, ghi ngày sản xuất trên nắp. Hạn dùng 10 ngày khi bảo quản ngăn mát chưa mở nắp.',
        cach_bao_quan: 'Ngăn mát 0 đến 4°C, dùng trong 5 ngày sau khi mở. Không cấp đông lại sau khi rã đông.',
        luong_cho_an: [['Dưới 5kg', '50g/ngày'], ['5 đến 10kg', '100g/ngày'], ['Trên 10kg', '150g/ngày']],
        giay_chung_nhan: P('document', 52, 900, 1200)
      }
    }),
    prod('pc2', 'Pate chay rau củ yến mạch', 'Tiểu Bạch', 'pate-chay', ['cho', 'meo'], 'vegetables', 53, [['Hũ 200g', 70000, null, null, null, 'PC-RC-200'], ['Hũ 400g', 130000, null, null, null, 'PC-RC-400']], {
      sao: 4.8, so_danh_gia: 9, dist: { 5: 7, 4: 2, 3: 0, 2: 0, 1: 0 }, sold30: 31, la_pate: true,
      pate: {
        cau_chuyen: 'Công thức dành cho Boss cần ăn nhẹ bụng: rau củ hấp, yến mạch nguyên cám, thêm chút dầu cá thực vật cho lông mượt.',
        thanh_phan: ['Yến mạch', 'Bông cải xanh', 'Cà rốt', 'Đậu Hà Lan', 'Dầu cá thực vật'],
        nsx_hsd: 'Làm theo đơn. Hạn dùng 10 ngày khi bảo quản ngăn mát chưa mở nắp.',
        cach_bao_quan: 'Ngăn mát 0 đến 4°C, dùng trong 5 ngày sau khi mở.',
        luong_cho_an: [['Dưới 5kg', '50g/ngày'], ['5 đến 10kg', '100g/ngày'], ['Trên 10kg', '150g/ngày']],
        giay_chung_nhan: P('document', 54, 900, 1200)
      }
    }),
    prod('pc3', 'Pate chay nấm hương (thử nghiệm)', 'Tiểu Bạch', 'pate-chay', ['cho'], 'mushroom', 55, [['Hũ 200g', 75000, null, null, null, 'PC-NH-200']], { trang_thai: 'AN', la_pate: true, has_orders: false, pate: { thanh_phan: ['Nấm hương', 'Đậu gà'], cach_bao_quan: 'Ngăn mát', nsx_hsd: 'Làm theo đơn', luong_cho_an: [['Dưới 5kg', '50g/ngày']] } })
  ];

  /* Combo: items = [variantId, số lượng] */
  M.combos = [
    { id: 'cb1', ten: 'Combo hạt + pate cho mèo con', trang_thai: 'BAT', gia_combo: 520000, anh: P('kitten', 61, 800, 450), items: [['p1-v2', 1], ['p2-v1', 6], ['p6-v1', 1]], mo_ta: 'Đủ cho mèo con ăn khoảng 1 tháng: hạt Royal Canin Kitten làm bữa chính, pate Whiskas đổi vị và một gói Churu để thưởng.', tao_luc: A(40), has_orders: true },
    { id: 'cb3', ten: 'Combo khởi đầu cho mèo con', trang_thai: 'BAT', gia_combo: 199000, anh: P('kitten', 62, 800, 450), items: [['p5-v1', 1], ['p4-v1', 1], ['p6-v1', 2]], mo_ta: 'Bộ đồ ăn đầu tiên khi đón mèo con về nhà: sữa bột, hạt Me-O và bánh thưởng.', tao_luc: A(25), has_orders: true },
    { id: 'cb5', ten: 'Combo pate chó tiết kiệm', trang_thai: 'BAT', gia_combo: 289000, anh: P('dog', 63, 800, 450), items: [['p15-v1', 6], ['p13-v1', 1]], mo_ta: '6 lon pate Pedigree vị gà kèm 1 túi hạt Pedigree vị bò 1,5kg.', tao_luc: A(18), has_orders: true },
    { id: 'cb4', ten: 'Combo thú nhỏ', trang_thai: 'BAT', gia_combo: 345000, anh: P('rabbit', 64, 800, 450), items: [['p21-v1', 1], ['p22-v1', 3], ['p23-v1', 1]], mo_ta: 'Cho hamster và thỏ: thức ăn hỗn hợp, cỏ timothy và bánh thưởng trái cây.', tao_luc: A(10), has_orders: false },
    { id: 'cb2', ten: 'Combo bánh thưởng cho chó', trang_thai: 'TAT', gia_combo: 160000, anh: P('dog', 65, 800, 450), items: [['p16-v1', 2], ['p11-v1', 1]], mo_ta: '', tao_luc: A(60), has_orders: true }
  ];

  /* Mã giảm giá & voucher (ENT-VOUCHER): loai MA_CHUNG | MAU_DOI_DIEM | VOUCHER_KHACH */
  M.vouchers = [
    { id: 'vc1', loai: 'MA_CHUNG', ma: 'TIEUBACH20K', ten: 'Ưu đãi Tiểu Bạch', kieu: 'TIEN', gia_tri: 20000, toi_da: null, don_toi_thieu: 200000, bat_dau: A(13), ket_thuc: A(-78), tong_luot: 200, da_dung: 37, trang_thai: 'BAT', tao_luc: A(13) },
    { id: 'vc2', loai: 'MA_CHUNG', ma: 'PETSHOP20K', ten: 'Chào bạn mới', kieu: 'TIEN', gia_tri: 20000, toi_da: null, don_toi_thieu: 200000, bat_dau: A(13), ket_thuc: A(-17), tong_luot: 100, da_dung: 12, trang_thai: 'BAT', tao_luc: A(14) },
    { id: 'vc3', loai: 'MA_CHUNG', ma: 'BOSS50K', ten: 'Đơn lớn cho Boss', kieu: 'TIEN', gia_tri: 50000, toi_da: null, don_toi_thieu: 600000, bat_dau: A(5), ket_thuc: A(-25), tong_luot: 50, da_dung: 4, trang_thai: 'BAT', tao_luc: A(5) },
    { id: 'vc4', loai: 'MA_CHUNG', ma: 'MEO10', ten: 'Tuần lễ của mèo', kieu: 'PHAN_TRAM', gia_tri: 10, toi_da: 50000, don_toi_thieu: 0, bat_dau: A(30), ket_thuc: A(-30), tong_luot: null, da_dung: 0, trang_thai: 'TAT', tao_luc: A(31) },
    { id: 'vc5', loai: 'MA_CHUNG', ma: 'HE2026', ten: 'Hè rực rỡ', kieu: 'TIEN', gia_tri: 30000, toi_da: null, don_toi_thieu: 300000, bat_dau: A(130), ket_thuc: A(45), tong_luot: 100, da_dung: 88, trang_thai: 'BAT', tao_luc: A(131) },
    { id: 'vc6', loai: 'MA_CHUNG', ma: 'HETHAN10', ten: 'Mã thử hết hạn', kieu: 'TIEN', gia_tri: 10000, toi_da: null, don_toi_thieu: 0, bat_dau: A(60), ket_thuc: A(20), tong_luot: null, da_dung: 3, trang_thai: 'BAT', tao_luc: A(61) },
    { id: 'vd1', loai: 'MAU_DOI_DIEM', ma: '', ten: 'Voucher giảm 20.000đ', kieu: 'TIEN', gia_tri: 20000, don_toi_thieu: 100000, diem_can: 200, han_dung_ngay: 60, trang_thai: 'BAT', da_dung: 41, tao_luc: A(80) },
    { id: 'vd2', loai: 'MAU_DOI_DIEM', ma: '', ten: 'Voucher giảm 50.000đ', kieu: 'TIEN', gia_tri: 50000, don_toi_thieu: 300000, diem_can: 500, han_dung_ngay: 60, trang_thai: 'BAT', da_dung: 9, tao_luc: A(80) },
    { id: 'vd3', loai: 'MAU_DOI_DIEM', ma: '', ten: 'Miễn phí giao hàng', kieu: 'SHIP', gia_tri: 32000, don_toi_thieu: 0, diem_can: 300, han_dung_ngay: 30, trang_thai: 'BAT', da_dung: 15, tao_luc: A(80) },
    { id: 'vk1', loai: 'VOUCHER_KHACH', ma: 'TB-7KQ2', ten: 'Voucher giảm 20.000đ', kieu: 'TIEN', gia_tri: 20000, don_toi_thieu: 100000, ket_thuc: A(-78), customerId: 'c-lan', ownerId: 'u-lan', trang_thai: 'BAT', used: false, tao_luc: A(20) },
    { id: 'vk2', loai: 'VOUCHER_KHACH', ma: 'TB-3MX9', ten: 'Voucher giảm 20.000đ', kieu: 'TIEN', gia_tri: 20000, don_toi_thieu: 100000, ket_thuc: A(-40), customerId: 'c-lan', ownerId: 'u-lan', trang_thai: 'BAT', used: true, tao_luc: A(55) },
    { id: 'vk3', loai: 'VOUCHER_KHACH', ma: 'TB-1AB5', ten: 'Miễn phí giao hàng', kieu: 'SHIP', gia_tri: 32000, don_toi_thieu: 0, ket_thuc: A(4), customerId: 'c-lan', ownerId: 'u-lan', trang_thai: 'BAT', used: false, tao_luc: A(40) }
  ];
  /* Lượt dùng mã (mỗi khách 1 lần — BR-PROMO-003) */
  M.voucherUsage = [{ id: 'vu1', ma: 'PETSHOP20K', customerId: 'c-lan', at: A(9) }];

  M.customers = [
    { id: 'c-lan', ho_ten: 'Nguyễn Thị Lan', so_dien_thoai: '0901234567', email: 'lan@gmail.com', diem: 450, trang_thai: 'HOAT_DONG', userId: 'u-lan' },
    { id: 'c-minh', ho_ten: 'Trần Minh', so_dien_thoai: '0912345678', email: 'tranminh@gmail.com', diem: 120 },
    { id: 'c-thu', ho_ten: 'Phạm Thu', so_dien_thoai: '0987654321', email: 'phamthu@gmail.com', diem: 85 },
    { id: 'c-hoa', ho_ten: 'Lê Hoa', so_dien_thoai: '0938123456', email: 'lehoa@gmail.com', diem: 310 },
    { id: 'c-vy', ho_ten: 'Ngô Vy', so_dien_thoai: '0903555777', email: 'ngovy@gmail.com', diem: 60 },
    { id: 'c-hung', ho_ten: 'Đỗ Hùng', so_dien_thoai: '0977222333', email: 'dohung@gmail.com', diem: 205 },
    { id: 'c-anh', ho_ten: 'Võ Ngọc Anh', so_dien_thoai: '0909888111', email: 'ngocanh@gmail.com', diem: 400 },
    { id: 'c-thao', ho_ten: 'Bùi Thảo', so_dien_thoai: '0931444555', email: 'buithao@gmail.com', diem: 150 },
    { id: 'c-nam', ho_ten: 'Hoàng Nam', so_dien_thoai: '0918666999', email: 'hoangnam@gmail.com', diem: 95 },
    { id: 'c-mai', ho_ten: 'Đặng Mai', so_dien_thoai: '0966111222', email: 'dangmai@gmail.com', diem: 40 }
  ];
  M.addresses = [
    { id: 'ad1', customerId: 'c-lan', ownerId: 'u-lan', nguoi_nhan: 'Nguyễn Thị Lan', so_dien_thoai: '0901234567', tinh: 'TP. Hồ Chí Minh', quan: 'Tân Bình', phuong: 'Phường 2', chi_tiet: '12 Hoàng Văn Thụ', mac_dinh: true },
    { id: 'ad2', customerId: 'c-lan', ownerId: 'u-lan', nguoi_nhan: 'Nguyễn Thị Lan', so_dien_thoai: '0901234567', tinh: 'TP. Hồ Chí Minh', quan: 'Quận 1', phuong: 'Phường Bến Nghé', chi_tiet: '45 Lê Lợi', mac_dinh: false }
  ];
  /* Địa giới (rút gọn cho bản demo) */
  M.locations = {
    'TP. Hồ Chí Minh': { 'Tân Phú': ['Tân Thới Hòa', 'Phú Thạnh', 'Hiệp Tân', 'Tân Quý'], 'Tân Bình': ['Phường 2', 'Phường 4', 'Phường 12', 'Phường 13'], 'Bình Tân': ['Bình Trị Đông', 'An Lạc', 'Tân Tạo'], 'Quận 1': ['Phường Bến Nghé', 'Phường Bến Thành', 'Phường Đa Kao'], 'Quận 3': ['Phường 6', 'Phường 13', 'Phường 14'], 'Quận 10': ['Phường 12', 'Phường 14'], 'Phú Nhuận': ['Phường 9', 'Phường 15'], 'Gò Vấp': ['Phường 5', 'Phường 10'], 'Bình Thạnh': ['Phường 17', 'Phường 25'], 'TP. Thủ Đức': ['Thảo Điền', 'Linh Trung'] },
    'Bình Dương': { 'TP. Thủ Dầu Một': ['Phú Cường', 'Hiệp Thành'], 'TP. Dĩ An': ['Dĩ An', 'Đông Hòa'] },
    'Hà Nội': { 'Cầu Giấy': ['Dịch Vọng', 'Quan Hoa'], 'Đống Đa': ['Láng Hạ', 'Kim Liên'] }
  };

  M.adminUsers = [
    { id: 'a-chu', ho_ten: 'Chủ cửa hàng', ten_dang_nhap: 'chu.quan', trang_thai: 'HOAT_DONG', lan_cuoi: A(0, 8, 2) },
    { id: 'a-me', ho_ten: 'Mẹ (người nhà)', ten_dang_nhap: 'me.ban', trang_thai: 'HOAT_DONG', lan_cuoi: A(1, 19, 40) },
    { id: 'a-em', ho_ten: 'Em trai', ten_dang_nhap: 'em.trai', trang_thai: 'KHOA', lan_cuoi: A(13, 10, 0) }
  ];

  /* Lịch sử tồn kho (ENT-STOCK_LOG) */
  M.stockLogs = [
    { id: 'sl1', variantId: 'p1-v2', at: A(0, 9, 0), by: 'Chủ cửa hàng', from: 1, to: 3, reason: 'Nhập hàng', source: 'Tay' },
    { id: 'sl2', variantId: 'p1-v2', at: A(1, 15, 20), by: 'Hệ thống', from: 4, to: 1, reason: 'Đơn DH-2026-00011', source: 'Đơn hàng' },
    { id: 'sl3', variantId: 'p1-v1', at: A(2, 10, 5), by: 'Mẹ (người nhà)', from: 3, to: 20, reason: 'Nhập hàng', source: 'Tay' },
    { id: 'sl4', variantId: 'p9-v1', at: A(4, 18, 30), by: 'Hệ thống', from: 2, to: 0, reason: 'Đơn DH-2026-00005', source: 'Đơn hàng' },
    { id: 'sl5', variantId: 'p22-v1', at: A(3, 11, 0), by: 'Chủ cửa hàng', from: 5, to: 2, reason: 'Hàng hỏng', source: 'Tay' },
    { id: 'sl6', variantId: 'p10-v1', at: A(6, 9, 30), by: 'Chủ cửa hàng', from: 10, to: 4, reason: 'Kiểm kê', source: 'Tay' }
  ];
})();
