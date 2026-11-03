# Demi Pointe - landing page (prototype nhanh)

- **Hướng thiết kế:** balletcore sang trọng, ngọt ngào. Nền trắng hồng lạnh, màu chủ đạo hồng ballet đậm (rose 700) + dải tím mận tối; tiêu đề Cormorant Garamond (nghiêng để nhấn), thân bài Manrope. Điểm nhấn: hero tách đôi ảnh giày mũi cứng tràn mép phải, chữ tiêu đề cực lớn.
- **Mức chuyển động:** Biểu cảm vừa phải (split chữ hero, parallax, marquee, spotlight bento, đếm số, magnetic CTA), không dùng con trỏ tùy biến.
- **Section (9):** Header, Hero, dải marquee, Collection (carousel 5 sản phẩm), Our Story, Fabric (bento tối), Reviews (ảnh tràn viền + trích dẫn), Next Drop (đếm ngược + sao chép mã), FAQ + Showroom (accordion, bản đồ, gọi / Zalo), CTA đăng ký + footer. Modal "Book a Fitting".
- **Tương tác (ui.js):** menu mobile, scrollspy, carousel, accordion, countdown, copy, modal, 2 form `data-form`, nút về đầu trang.
- **Hero slider (`assets/js/site.js`):** 3 slide ảnh chuyển mờ dần + zoom chậm, tự chuyển 6,5 giây (thanh tiến trình 01/02/03), bấm mũi tên / số, vuốt trên điện thoại, phím ←→, dừng khi rê chuột lên ảnh. Mỗi lần ảnh hiện ra, chữ (nhãn → tiêu đề dòng 1 → dòng 2 → mô tả) trồi lên lần lượt.
- **Mở:** nhấp đúp `index.html` (chạy bằng `file://`, cần mạng cho Tailwind CDN + Google Fonts).
- Ảnh trong `assets/img/` (nguồn ở `CREDITS.md`); `arabesque.jpg`, `look-studio.jpg` đã tải nhưng không dùng (có chữ ký / logo). Nên thay ảnh sản phẩm bằng ảnh chụp thật của brand.
