# NEXFORM — Landing page prototype

- **Bảng màu (sửa theo góp ý):** bỏ tông kem/olive đại trà, chuyển sang tông lạnh: nền Mist `#E9EBEE`, chữ Ink `#111317`, Steel/Stone cho bề mặt phụ, **một màu nhấn Volt `#CBF23D`** (thanh tiến trình, highlight chữ, hover nút, dải chữ chạy, logo lớn ở footer).
- **Mức chuyển động (sửa theo góp ý):** nâng lên **Biểu cảm**: con trỏ vòng có nhãn (Enter / Open), chấm Volt trôi theo chuột ở hero, nút CTA hút theo chuột (magnetic), spotlight trong phòng Post-Human, thẻ archive nghiêng 3D + vệt sáng, ảnh đơn sắc hiện màu khi rê chuột, đoạn manifesto sáng dần từng chữ theo cuộn (`assets/js/site.js` + `data-scrub`), ảnh Synthetic Nature thu dần theo cuộn, tiêu đề Form / Flux tách ra và dấu "/" xoay theo cuộn, một dải chữ chạy (marquee), chữ NEXFORM lớn ở footer hiện từng ký tự.
- **Hướng thiết kế:** triển lãm thời trang dạng biên tập (editorial gallery). Cormorant Garamond (tiêu đề, có in nghiêng chọn lọc) + DM Sans (thân bài, nhãn kỹ thuật). Góc vuông toàn trang, ảnh xử lý đơn sắc (grayscale) để thống nhất bộ ảnh.
- **Ý tưởng thị giác đặc trưng:** mỗi bộ sưu tập là một "phòng" triển lãm có bố cục riêng (phòng tối Carbon cho Post-Human; ảnh ngang tràn + ảnh dọc chồng lên cho Synthetic Nature; chữ cực lớn + cặp ảnh lệch cho Form / Flux).
- **Mức chuyển động:** Biên tập (`data-reveal="clip"` cho ảnh, `data-split="words"` cho 4 tiêu đề chính, parallax 0.12 cho ảnh hero, ảnh hover phóng chậm 1.2s, header shrink, thanh tiến trình cuộn).
- **Section:** Hero triển lãm → Manifesto → Collections as Art (3 dự án + modal chi tiết) → Creative Lab (3 giai đoạn, collage) → Visual Archive (masonry + lọc + lightbox) → Contact (form) → Footer.
- **Tương tác (ui.js):** menu mobile, scrollspy, 3 modal dự án, lọc archive, lightbox (phím ← → / Esc, vuốt), form liên hệ có kiểm lỗi và lưu localStorage.
- Không có email / mạng xã hội thật (theo yêu cầu): form là kênh liên hệ duy nhất. Không có thành phần thương mại điện tử.
- **Cách mở:** mở `index.html` trực tiếp bằng trình duyệt (chạy được qua `file://`). Nguồn ảnh: `assets/img/CREDITS.md`.
- **Cần ảnh thật từ khách:** ảnh render 3D / wireframe trang phục (giai đoạn Digital Prototyping) hiện dùng ảnh chụp bề mặt vật liệu thay thế.
