# VERDANT — Landing page (chế độ nhanh)

- **Hướng thiết kế:** kể chuyện điện ảnh về thiên nhiên, biên tập cao cấp. Màu theo brief (Deep Forest, Forest Green, Moss, Warm Ivory, Mist Grey, Sunlight Gold, Earth Brown); chữ Cormorant Garamond (tiêu đề, nghiêng cho từ khóa) + Manrope (thân bài). Ý tưởng thị giác đặc trưng: hành trình rừng được ghim (pinned) — tán cây → tầng thấp → nền rừng đổi lớp theo cuộn.
- **Mức chuyển động:** Biên tập + điện ảnh (cao). Intro mở màn tối → rừng hiện, sương trôi 2 lớp ngược chiều, tia nắng thở, bụi sáng; parallax + lớp theo chuột ở hero; clip/mask reveal ảnh; scrub theo cuộn (ghim rừng, mặt nạ thác nước mở dần, nền sáng → tối, đường contour tự vẽ, camera tiến vào cảnh, ảnh cuối mở rộng). Tắt hết khi `prefers-reduced-motion`; mobile/tablet dùng bản xếp chồng thay đoạn ghim.
- **9 section:** The Awakening · Into the Quiet · The Forest Is Alive · Water in Motion · A World in Motion · The Living Earth · The Wild Journal · The Final Light · Contact & Footer.
- **Tương tác:** menu mobile, scrollspy, lightbox gallery, modal "Stay Connected" + form, sao chép email, nút về đầu trang, âm thanh gió tùy chọn (tạo bằng Web Audio, mặc định tắt).
- **Mở:** mở `index.html` trực tiếp bằng trình duyệt (chạy được qua `file://`). Ảnh thật trong `assets/img/` (nguồn ở `CREDITS.md`).
