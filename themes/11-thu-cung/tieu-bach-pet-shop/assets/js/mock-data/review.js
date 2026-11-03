/* Dữ liệu giả MOD-REVIEW: đánh giá sản phẩm (DOC-REVIEW-REVIEW: VISIBLE / HIDDEN).
 * 30 đánh giá: 24 ★4–5, 4 ★3, 2 ★1–2; 1 spam đang hiển thị; 1 đã ẩn (Spam / quảng cáo).
 * Mỗi đánh giá gắn với 1 khách đã mua (customer_id) và 1 sản phẩm có thật trong MOCK.products.
 */
(function () {
  var M = window.MOCK, A = M.ago, P = M.photo;
  var CUS = ['c-lan', 'c-minh', 'c-thu', 'c-hoa', 'c-vy', 'c-hung', 'c-anh', 'c-thao', 'c-nam', 'c-mai'];
  var ORD = { 'c-lan': 'DH-2026-00008', 'c-minh': 'DH-2026-00003', 'c-thu': 'DH-2026-00002', 'c-hoa': 'DH-2026-00001', 'c-vy': 'PC-2026-00004', 'c-hung': 'PC-2026-00008', 'c-anh': 'DH-2026-00011', 'c-thao': 'DH-2026-00007', 'c-nam': 'DH-2026-00005', 'c-mai': 'DH-2026-00004' };
  /* [productId, sao, nội dung, số ngày trước, có ảnh] */
  var R = [
    ['pc1', 5, 'Mèo nhà mình ăn pate chay bí đỏ hết sạch, sẽ đặt tiếp!', 3, 2],
    ['p1', 5, 'Hạt nhỏ vừa miệng, bé mèo 3 tháng nhà mình ăn rất hợp. Giao nhanh, đóng gói kỹ lắm.', 4, 1],
    ['p6', 5, 'Churu là món khoái khẩu của hai bạn mèo nhà mình, mở gói là chạy tới liền.', 5, 0],
    ['pc2', 5, 'Bé cún đang ăn kiêng nên mình đặt pate rau củ, bé ăn ngon và đi tiêu đẹp hơn hẳn.', 6, 1],
    ['p13', 4, 'Hạt thơm, cún ăn đều. Giá mềm hơn chỗ khác một chút, sẽ ủng hộ tiếp.', 7, 0],
    ['p2', 5, 'Pate Whiskas cá ngừ mềm, mèo già nhà mình vẫn ăn được. Shop giao đúng hẹn.', 8, 0],
    ['p12', 5, 'Hạt cho chó con viên nhỏ, bé Corgi nhà mình ăn hết bát mỗi bữa.', 9, 1],
    ['pc1', 5, 'Chủ shop gọi điện xác nhận rất dễ thương, pate có ghi ngày làm trên nắp nên yên tâm.', 10, 0],
    ['p16', 4, 'Que gặm sạch răng ổn, cún thích. Mong shop có thêm loại cho chó nhỏ.', 11, 0],
    ['p11', 5, 'Cá hồi sấy thơm, mình dùng làm phần thưởng khi tập cho bé, rất hiệu quả.', 12, 1],
    ['p4', 4, 'Mèo ăn được, hạt hơi to với bé nhỏ nhưng nhìn chung ổn trong tầm giá.', 13, 0],
    ['p5', 5, 'Sữa pha dễ tan, mèo con mới đón về uống hợp, không bị tiêu chảy.', 14, 0],
    ['p21', 5, 'Hamster nhà mình mê món này, hạt đa dạng nhiều loại.', 15, 1],
    ['p10', 5, 'Gel dinh dưỡng giúp bé mèo ốm dậy ăn lại được, cảm ơn shop đã tư vấn kỹ.', 16, 0],
    ['p15', 4, 'Pate Pedigree vị gà cún ăn tốt, lon to dùng được 2 bữa.', 18, 0],
    ['pc1', 5, 'Đặt trước một tuần mà đáng chờ, Boss ăn ngon miệng hơn pate công nghiệp nhiều.', 20, 1],
    ['p22', 5, 'Cỏ timothy thơm, sợi dài, thỏ nhà mình ăn liên tục.', 22, 0],
    ['p7', 4, 'Cát vón cục tốt, ít bụi. Mùi đậu nành dễ chịu.', 24, 0],
    ['p3', 5, 'Mèo nhà mình kén ăn mà ăn vị gà này rất hợp, sẽ mua thùng lần sau.', 26, 0],
    ['p19', 4, 'Canxi dạng viên nhai, cún thích ăn như bánh thưởng.', 28, 0],
    ['p1', 5, 'Mua lần thứ ba rồi, hàng chính hãng, date còn xa, giao trong ngày ở Tân Phú.', 30, 0],
    ['p14', 5, 'Hạt ANF cún nhà mình hết bị ngứa da sau 2 tuần đổi sang.', 33, 0],
    ['pc2', 4, 'Pate rau củ ổn, bé ăn được, mình mong có thêm vị bí đỏ cho hũ 400g.', 36, 0],
    ['p18', 5, 'Vòng cổ màu mint dễ thương, chuông kêu nhỏ không làm bé giật mình.', 9, 1],
    ['p8', 3, 'Mèo nhà mình ăn được nhưng không mê lắm, chắc do quen vị cá.', 17, 0],
    ['p9', 3, 'Pate hơi nhiều nước, mèo chỉ liếm phần nước rồi bỏ.', 21, 0],
    ['p20', 3, 'Lon to, cún ăn được nhưng giá hơi cao so với chất lượng.', 25, 0],
    ['p4', 3, 'Giao hơi chậm do trời mưa, hàng thì ổn.', 29, 0],
    ['p2', 2, 'Giao chậm 2 ngày, một gói bị móp. Shop có nhắn xin lỗi.', 2, 1],
    ['p13', 1, 'Mua giày giá rẻ tại web khác, inbox mình để nhận mã giảm 50%!!!', 1, 0]
  ];
  var HIDDEN = { id: 'rv-hidden', productId: 'p6', stars: 1, text: 'Nhắn Zalo 09xx để mua hàng xách tay giá sỉ, rẻ hơn shop này nhiều.', day: 3 };
  function prod(id) { return M.products.filter(function (p) { return p.id === id; })[0]; }
  M.reviews = R.map(function (r, i) {
    var cid = CUS[i % CUS.length], c = M.customers.filter(function (x) { return x.id === cid; })[0], p = prod(r[0]);
    var photos = []; for (var k = 0; k < r[4]; k++) photos.push(P(/^pc/.test(r[0]) ? 'cat' : (p.pet_type_ids[0] === 'cho' ? 'dog' : p.pet_type_ids[0] === 'thu-nho' ? 'hamster' : 'cat'), 300 + i * 3 + k, 600));
    return {
      id: 'rv' + (i + 1), product_id: r[0], variant: p.variants[0].ten, customer_id: cid, ownerId: c.userId || ('u-' + cid), ho_ten: c.ho_ten, ma_don: ORD[cid],
      so_sao: r[1], noi_dung: r[2], anh: photos, tao_luc: A(r[3], 9 + (i % 10), (i * 7) % 60), state: 'VISIBLE', ly_do_an: '',
      history: [{ at: A(r[3], 9 + (i % 10), (i * 7) % 60), role: 'ROLE-02', roleName: 'Khách hàng', by: c.ho_ten, event: 'Gửi đánh giá', from: null, to: 'VISIBLE', note: '' }]
    };
  });
  var hc = M.customers.filter(function (x) { return x.id === 'c-thao'; })[0];
  M.reviews.push({
    id: HIDDEN.id, product_id: HIDDEN.productId, variant: 'Gói 4 thanh', customer_id: 'c-thao', ownerId: 'u-c-thao', ho_ten: hc.ho_ten, ma_don: 'DH-2026-00017',
    so_sao: HIDDEN.stars, noi_dung: HIDDEN.text, anh: [], tao_luc: A(HIDDEN.day, 20, 15), state: 'HIDDEN', ly_do_an: 'Spam / quảng cáo',
    history: [
      { at: A(HIDDEN.day, 20, 15), role: 'ROLE-02', roleName: 'Khách hàng', by: hc.ho_ten, event: 'Gửi đánh giá', from: null, to: 'VISIBLE', note: '' },
      { at: A(HIDDEN.day - 1, 8, 40), role: 'ROLE-03', roleName: 'Quản trị cửa hàng', by: 'Chủ cửa hàng', event: 'Ẩn', from: 'VISIBLE', to: 'HIDDEN', note: 'Spam / quảng cáo' }
    ]
  });
})();
