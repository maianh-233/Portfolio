/* Dữ liệu giả MOD-NEWS: bài viết (DOC-NEWS-POST: DRAFT / PUBLISHED / HIDDEN).
 * 9 bài Đã đăng (4 Chăm sóc thú cưng, 3 Công thức pate, 2 Khuyến mãi) + 2 Nháp + 1 Đã ẩn.
 */
(function () {
  var M = window.MOCK, A = M.ago, P = M.photo;
  M.postCategories = ['Chăm sóc thú cưng', 'Công thức pate', 'Khuyến mãi'];
  function body(intro, parts) {
    return '<p>' + intro + '</p>' + parts.map(function (p) { return '<h2>' + p[0] + '</h2><p>' + p[1] + '</p>' + (p[2] ? '<ul>' + p[2].map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' : ''); }).join('');
  }
  function post(id, title, cat, day, tag, lock, summary, html, products, state) {
    var st = state || 'PUBLISHED';
    var h = [{ at: A(day + 1, 15), role: 'ROLE-03', roleName: 'Quản trị cửa hàng', by: 'Chủ cửa hàng', event: 'Tạo bài', from: null, to: 'DRAFT', note: '' }];
    if (st !== 'DRAFT') h.push({ at: A(day, 8, 30), role: 'ROLE-03', roleName: 'Quản trị cửa hàng', by: 'Chủ cửa hàng', event: 'Đăng', from: 'DRAFT', to: 'PUBLISHED', note: '' });
    if (st === 'HIDDEN') h.push({ at: A(Math.max(0, day - 20), 9), role: 'ROLE-03', roleName: 'Quản trị cửa hàng', by: 'Chủ cửa hàng', event: 'Ẩn', from: 'PUBLISHED', to: 'HIDDEN', note: 'Chương trình đã kết thúc' });
    return {
      id: id, slug: id, tieu_de: title, chuyen_muc: cat, tom_tat: summary, anh_bia: P(tag, lock, 960, 540), noi_dung: html,
      state: st, ngay_dang: st === 'DRAFT' ? null : A(day, 8, 30), tao_luc: A(day + 1, 15), cap_nhat: A(Math.max(0, day - 1), 10), tac_gia: 'Chủ cửa hàng',
      phut_doc: Math.max(2, Math.round(html.length / 900)), san_pham_lien_quan: products || [], history: h
    };
  }
  M.posts = [
    post('cach-chon-hat-cho-meo-con', 'Cách chọn hạt cho mèo con', 'Chăm sóc thú cưng', 4, 'kitten', 81,
      'Mèo con dưới 12 tháng cần nhiều đạm và hạt nhỏ. Tiểu Bạch chia sẻ 4 điều nên xem trên bao bì trước khi mua.',
      body('Đón mèo con về nhà, câu hỏi đầu tiên của Sen thường là: cho bé ăn hạt gì? Dưới đây là kinh nghiệm cửa hàng tích lũy sau nhiều năm tư vấn.', [
        ['Chọn đúng độ tuổi', 'Hạt ghi "Kitten" dành cho bé từ 4 đến 12 tháng tuổi, có hàm lượng đạm và năng lượng cao hơn hạt cho mèo trưởng thành.', ['Dưới 4 tháng: ưu tiên sữa bột và pate mềm', 'Từ 4 tháng: chuyển dần sang hạt Kitten']],
        ['Kích thước hạt', 'Hạt nhỏ, giòn giúp bé dễ nhai và không bị hóc. Nếu bé ăn chậm, có thể ngâm hạt với nước ấm 5 phút.'],
        ['Đổi hạt từ từ', 'Trộn hạt mới với hạt cũ theo tỉ lệ tăng dần trong 7 ngày để tránh bé bị rối loạn tiêu hóa.']
      ]), ['p1', 'p5', 'p4']),
    post('vi-sao-tieu-bach-lam-pate-chay', 'Vì sao Tiểu Bạch làm pate chay?', 'Công thức pate', 9, 'pumpkin', 82,
      'Từ chuyện chú mèo đen kén ăn hay đau bụng, cửa hàng bắt đầu tự nấu pate rau củ. Đây là câu chuyện phía sau mỗi hũ pate.',
      body('Tiểu Bạch là chú mèo đen của chủ cửa hàng. Bé từng kén ăn và hay đau bụng với pate công nghiệp.', [
        ['Bắt đầu từ căn bếp nhỏ', 'Chúng mình thử nấu bí đỏ, đậu gà và yến mạch, nghiền mịn rồi trộn dầu cá thực vật. Tiểu Bạch ăn hết sạch bát.'],
        ['Làm theo đơn, không chất bảo quản', 'Mỗi hũ được nấu sau khi khách đặt và xác nhận, ghi ngày sản xuất trên nắp, bảo quản ngăn mát.', ['Hạn dùng 10 ngày khi chưa mở nắp', 'Dùng trong 5 ngày sau khi mở']],
        ['Có giấy chứng nhận ATTP', 'Cơ sở đã được cấp giấy chứng nhận an toàn thực phẩm. Bạn có thể xem bản chụp ở trang sản phẩm pate chay.']
      ]), ['pc1', 'pc2']),
    post('thang-10-mien-ship-tu-400k', 'Tháng 10: miễn ship từ 400.000đ', 'Khuyến mãi', 13, 'dog', 83,
      'Đơn từ 400.000đ được miễn phí giao hàng. Đơn trong Tân Phú, Tân Bình, Bình Tân luôn được cửa hàng tự giao miễn phí.',
      body('Cả tháng 10, Tiểu Bạch áp dụng miễn phí giao hàng cho mọi đơn từ 400.000đ.', [
        ['Áp dụng thế nào?', 'Phí ship tự trừ ở bước thanh toán khi tạm tính đạt 400.000đ. Thanh "Mua thêm … để được miễn phí giao hàng" trong giỏ sẽ nhắc bạn.'],
        ['Kết hợp mã giảm giá', 'Bạn vẫn dùng được mã TIEUBACH20K cho đơn từ 200.000đ.', ['Mỗi đơn dùng 1 mã', 'Mỗi tài khoản dùng mã 1 lần']]
      ]), ['p13', 'p12']),
    post('tam-cho-meo-lan-dau', 'Tắm cho mèo lần đầu không bị cào', 'Chăm sóc thú cưng', 17, 'cat', 84,
      'Chuẩn bị nước ấm, khăn lớn và một món thưởng. 5 bước giúp buổi tắm đầu tiên nhẹ nhàng cho cả Boss và Sen.',
      body('Phần lớn mèo không thích nước, nhưng có thể làm quen nếu bạn kiên nhẫn.', [
        ['Chuẩn bị trước', 'Nước ấm khoảng 37 độ, sữa tắm dành riêng cho mèo, 2 khăn lớn và máy sấy để chế độ êm.'],
        ['Thưởng sau khi tắm', 'Một thanh Churu sau khi tắm giúp bé nhớ đây là trải nghiệm vui.']
      ]), ['p6']),
    post('pate-bi-do-dau-ga-tai-nha', 'Công thức pate bí đỏ đậu gà tại nhà', 'Công thức pate', 22, 'pumpkin', 85,
      'Công thức đơn giản với 4 nguyên liệu dễ mua. Lưu ý khẩu phần theo cân nặng để Boss không bị béo.',
      body('Nếu bạn muốn tự làm cho Boss, đây là phiên bản rút gọn công thức của cửa hàng.', [
        ['Nguyên liệu', 'Bí đỏ 200g, đậu gà ngâm mềm 100g, yến mạch 30g, 1 thìa dầu cá thực vật.', ['Không thêm muối, hành, tỏi', 'Rau củ hấp chín mềm']],
        ['Cách làm', 'Hấp bí đỏ và đậu gà 20 phút, nghiền mịn cùng yến mạch đã nấu, để nguội rồi trộn dầu cá.']
      ]), ['pc1']),
    post('lich-tay-giun-cho-cho', 'Lịch tẩy giun cho chó con', 'Chăm sóc thú cưng', 27, 'puppy', 86,
      'Chó con cần tẩy giun định kỳ từ 2 tuần tuổi. Bảng lịch tham khảo và những dấu hiệu cần đưa bé đi khám.',
      body('Tẩy giun đúng lịch giúp chó con hấp thu dinh dưỡng tốt hơn.', [
        ['Lịch tham khảo', 'Từ 2 tuần tuổi, tẩy 2 tuần một lần đến 3 tháng tuổi; sau đó mỗi tháng một lần đến 6 tháng.'],
        ['Khi nào nên gặp bác sĩ', 'Bé bỏ ăn, nôn nhiều hoặc tiêu chảy kéo dài trên 1 ngày.']
      ]), ['p12', 'p19']),
    post('combo-meo-con-tiet-kiem', 'Combo cho mèo con: tiết kiệm đến 65.000đ', 'Khuyến mãi', 31, 'kitten', 87,
      'Combo hạt Royal Canin Kitten, pate Whiskas và Churu giúp Sen tiết kiệm so với mua lẻ.',
      body('Combo được cửa hàng chọn sẵn cho mèo con trong tháng đầu về nhà.', [
        ['Trong combo có gì?', 'Hạt Royal Canin Kitten 2kg, 6 gói pate Whiskas cá ngừ và 1 gói Churu vị gà.'],
        ['Mua thế nào?', 'Thêm combo vào giỏ như một sản phẩm. Giá combo đã giảm, vẫn dùng được mã giảm giá cho cả đơn.']
      ]), ['p1', 'p2', 'p6']),
    post('rau-cu-cho-cho-an-duoc', 'Rau củ nào chó ăn được?', 'Chăm sóc thú cưng', 38, 'dog', 88,
      'Bí đỏ, cà rốt, đậu Hà Lan tốt cho chó; hành, tỏi, nho thì tuyệt đối tránh. Danh sách nhanh để Sen lưu lại.',
      body('Rau củ bổ sung chất xơ và vitamin, nhưng không phải loại nào cũng an toàn.', [
        ['Nên dùng', 'Bí đỏ, cà rốt, khoai lang, đậu Hà Lan, bông cải xanh (luộc chín, cắt nhỏ).'],
        ['Tuyệt đối tránh', 'Hành, tỏi, nho, nho khô, bơ, sô cô la.']
      ]), ['pc2']),
    post('bao-quan-pate-chay', 'Bảo quản pate chay đúng cách', 'Công thức pate', 45, 'vegetables', 89,
      'Pate chay không chất bảo quản nên cần ngăn mát 0 đến 4 độ. Mẹo chia hũ để dùng hết trong 5 ngày.',
      body('Pate chay làm theo đơn nên hương vị tươi nhất trong vài ngày đầu.', [
        ['Nhiệt độ', 'Bảo quản ngăn mát 0 đến 4 độ, không để cửa tủ lạnh.'],
        ['Chia hũ', 'Dùng thìa sạch, chia phần cho từng bữa ngay khi mở nắp.']
      ]), ['pc1', 'pc2']),
    post('khuyen-mai-tet-2027', 'Ưu đãi Tết 2027 (bản nháp)', 'Khuyến mãi', 0, 'cat', 90, 'Chuẩn bị chương trình Tết: combo quà Tết cho Boss và mã giảm 50.000đ.', '<p>Nội dung đang soạn…</p>', [], 'DRAFT'),
    post('cham-soc-long-meo-mua-mua', 'Chăm sóc lông mèo mùa mưa', 'Chăm sóc thú cưng', 0, 'cat', 91, '', '', [], 'DRAFT'),
    post('flash-sale-he-2026', 'Flash sale hè 2026', 'Khuyến mãi', 75, 'dog', 92, 'Giảm đến 30% các dòng hạt khô trong 3 ngày.', body('Chương trình hè đã kết thúc.', [['Thời gian', 'Từ 01/07 đến 03/07/2026.']]), ['p13'], 'HIDDEN')
  ];
})();
