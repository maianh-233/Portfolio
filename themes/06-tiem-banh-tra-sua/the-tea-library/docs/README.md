# THE TEA LIBRARY

> README này do **BA Tool sinh tự động** sau khi dựng và kiểm thử website — chỉ ghi những gì kiểm chứng được từ cấu hình, file thật trong thư mục, log của tool và kết quả QA. Đây không phải README của hệ thống tạo website.

## 1. Giới thiệu & mục tiêu

- **Chủ đề:** website tiệm bánh và trà sữa
- **Thương hiệu / dự án:** THE TEA LIBRARY
- **Mục đích:** Thiết kế website giới thiệu THE TEA LIBRARY, thương hiệu trà và bánh lấy cảm hứng từ thư viện cổ, phòng trà châu Âu và nghệ thuật thưởng trà. Cảm giác cần đạt được là trầm tĩnh, có chiều sâu, giàu tính văn hóa nhưng không quá nặng nề.
- **Ý tưởng thị giác (AI ghi):** Website như một cuốn sách trong thư viện cổ: số chương La Mã, đường kẻ mảnh vẽ dần, chú thích ảnh kiểu trang sách, nền kem giấy xen dải xanh rừng

## 2. Cấu hình đã chọn

| Mục | Giá trị |
|---|---|
| Ngôn ngữ | English — Tiếng Anh (`lang="en"`) |
| Phong cách | Nature / Organic / Atmospheric — tool nhận diện từ mô tả |
| Mức chuyển động | Level 2 (mặc định của preset) |
| Màu sắc | BA để trống — theo preset / AI chọn |
| Font | BA để trống — theo preset / AI chọn |
| Section BA chọn | Không chọn — AI đề xuất |
| Chú thích bổ sung | 1.928 ký tự (lưu đầy đủ trong project.json của BA Tool) |

Kiểm tra font (Google Fonts, trước khi dựng):

- `Fraunces`: đủ ký tự tiếng Anh
- `Manrope`: đủ ký tự tiếng Anh

## 3. Sitemap & vai trò từng trang

| Trang | Tiêu đề | Vai trò (AI ghi trong sitemap) | Section (id → biến thể) | Ảnh |
|---|---|---|---|---|
| `index.html` | THE TEA LIBRARY — Every Cup Has a Story | Giới thiệu thương hiệu, món nổi bật, nghệ thuật thưởng trà, không gian phòng trà; dẫn sang Menu và About | top, hero → hero-split, favorites → teaser-row, art-of-tea → story-editorial, rituals → features-numbered, tea-room → gallery-lookbook, visit → contact-split, footer | 6 |
| `pages/about.html` | About — THE TEA LIBRARY | Câu chuyện thương hiệu kiểu tạp chí, văn hóa trà, trà và bánh, không gian, gallery có chú thích | top, about-hero → page-hero, story → story-editorial, chapters → features-alternate, quote → quote-full, gallery → gallery-masonry, about-cta → cta-type, footer | 11 |
| `pages/menu.html` | Menu — THE TEA LIBRARY | Mục lục trà và bánh: Tea Selection, Milk Tea, Fruit Infusions, Pastries theo kiểu biên tập | top, index-hero → page-hero, tea-selection → list-editorial, milk-tea → list-editorial, fruit-infusions → list-editorial, pastries → list-editorial, menu-cta → cta-type, footer | 4 |

## 4. Cấu trúc thư mục

Theo chuẩn theme của công ty: `web/` (code chạy được), `docs/` (tài liệu làm việc với AI), `info.json` (thông tin tóm tắt).

```
the-tea-library/
  web/
    assets/
      css/
        site.css
      img/  (1 ảnh + CREDITS.md)
      js/
        atmos.js
        motion.js
        site.js
        tw-config.js
        ui.js
    pages/
      about.html
      menu.html
    index.html
  docs/
    prompt.md
    request.md
    README.md
  info.json
```

`assets/img/thumb.jpg` là ảnh đại diện 16:9 do BA Tool chụp trang chủ sau mỗi lần dựng / sửa.

## 5. Tổ chức code & thành phần chính

- `assets/js/tw-config.js` — Cấu hình Tailwind dùng chung: màu, font (một nguồn cho mọi trang)
- `assets/css/site.css` — Biến CSS (:root) và vài style Tailwind không làm được
- `assets/js/ui.js` — Tool sinh — menu, tabs, accordion, carousel, lightbox, modal, form (qua data-*)
- `assets/js/motion.js` — Tool sinh — hiệu ứng cuộn / hover (qua data-*), tôn trọng prefers-reduced-motion
- `assets/js/atmos.js` — Tool sinh — không khí: mây, hạt sáng, cảnh nhiều lớp (Level 2–3)
- `assets/js/site.js` — Logic riêng của website (do AI viết)
- Mỗi trang là một file HTML tĩnh, header / footer giống nhau; mỗi khối nội dung là `<section id data-section="<biến thể>">` để sửa riêng từng khối.
- Tailwind CSS nạp qua CDN (`cdn.tailwindcss.com`), font qua Google Fonts.

## 6. Hình ảnh: tìm kiếm & tích hợp

- **⚠ Tool tìm ảnh trả lỗi:** timeout: openverse: quá 15s không phản hồi
- **⚠ Tìm được ảnh nhưng chưa tích hợp vào trang:** 3 ảnh chưa dùng: https://images.unsplash.com/photo-1772369241885-8597e9405ce3?w=1400&q=80&auto=format&fit=crop, https://images.unsplash.com/photo-1782050419194-6c40b154d7d0?w=1400&q=80&auto=format&fit=crop, https://images.unsplash.com/photo-1561668131-a6e7450dc65e?w=1200&q=80&auto=format&fit=crop
- **⚠ Ảnh trong trang không tải được / sai nguồn:** index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1780245995094-fc2a9860451b?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1585185160068-8175b6a39d84?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image | index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1777016844333-3641b8dc7f19?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Tool đã ghi 7 lượt tìm (nguồn: —), 0 lượt tải thành công.

| Từ khóa | Nguồn | Kết quả | Thời gian |
|---|---|---|---|
| tea room interior vintage | — | lỗi timeout | 31539 ms |
| porcelain teacup saucer | — | lỗi timeout | 31543 ms |
| scones afternoon tea | — | lỗi timeout | 43819 ms |
| milk tea glass | — | lỗi timeout | 40278 ms |
| pouring tea teapot cup | — | lỗi timeout | 31531 ms |
| library cafe books table | — | lỗi timeout | 53782 ms |
| teacup tea | — | lỗi timeout | 31516 ms |

| File | Dùng cho | Nguồn | Giấy phép | Đang dùng |
|---|---|---|---|---|
| `https://images.unsplash.com/photo-1780245995094-fc2a9860451b?w=1600&q=80&auto=format&fit=crop` | index.html — hero, phòng trà | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1585185160068-8175b6a39d84?w=1200&q=80&auto=format&fit=crop` | index.html — favorites 01 trà Earl Grey | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1777016844333-3641b8dc7f19?w=1200&q=80&auto=format&fit=crop` | index.html — favorites 02 scones | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1788016284568-2cfdc5994fd5?w=1200&q=80&auto=format&fit=crop` | index.html — favorites 03 trà sữa | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1772369241885-8597e9405ce3?w=1400&q=80&auto=format&fit=crop` | index.html — The Art of Tea | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1785302710677-69cc4ea97bee?w=2000&q=80&auto=format&fit=crop` | index.html — không gian phòng trà ảnh ngang lớn | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=1400&q=80&auto=format&fit=crop` | pages/menu.html — Tea Selection | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=1400&q=80&auto=format&fit=crop` | pages/menu.html — Milk Tea | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1647894111500-4ea0cea3bfe6?w=1400&q=80&auto=format&fit=crop` | pages/menu.html — Fruit Infusions | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1710077717714-976db5604dd7?w=1400&q=80&auto=format&fit=crop` | pages/menu.html — Pastries | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1759968646998-d94b93904082?w=2000&q=80&auto=format&fit=crop` | pages/about.html — hero A Place to Pause | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?w=1200&q=80&auto=format&fit=crop` | pages/about.html — câu chuyện thương hiệu | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?w=1400&q=80&auto=format&fit=crop` | pages/about.html — văn hóa trà | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1553595854-34a134b890c8?w=1400&q=80&auto=format&fit=crop` | pages/about.html — trà và bánh | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1782050419194-6c40b154d7d0?w=1400&q=80&auto=format&fit=crop` | pages/about.html — không gian thưởng thức | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1561668131-a6e7450dc65e?w=1200&q=80&auto=format&fit=crop` | pages/about.html — gallery 01 | web | Chưa rõ — chỉ dùng cho prototype | ✗ |
| `https://images.unsplash.com/photo-1766232574096-4c4380105cc7?w=1200&q=80&auto=format&fit=crop` | pages/about.html — gallery 02 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1620130674275-d709994ed7c8?w=1200&q=80&auto=format&fit=crop` | pages/about.html — gallery 03 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1610375233775-6e0166927193?w=1200&q=80&auto=format&fit=crop` | pages/about.html — gallery 04 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1763617702099-d956f3fd8324?w=1200&q=80&auto=format&fit=crop` | pages/about.html — gallery 05 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1673530598977-ee0eda88f0a2?w=1200&q=80&auto=format&fit=crop` | pages/about.html — gallery 06 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1523920290228-4f321a939b4c?w=1200&q=80&auto=format&fit=crop` | pages/about.html — gallery 01 | web | Chưa rõ — chỉ dùng cho prototype | ✓ |
| `https://images.unsplash.com/photo-1783085938835-ed3c145c44ec?w=1400&q=80&auto=format&fit=crop` | pages/about.html — không gian thưởng thức | web | Chưa rõ — chỉ dùng cho prototype | ✓ |

Ghi công đầy đủ: `assets/img/CREDITS.md`. Khi đưa lên web thật, giữ ghi công theo giấy phép hoặc thay bằng ảnh của khách.

20 ảnh đang dùng **link ngoài** (không tải về được) — cần mạng mới hiển thị, chỉ dùng cho prototype; thay bằng ảnh của khách trước khi đưa lên web thật:

- index.html — hero, phòng trà — https://images.unsplash.com/photo-1780245995094-fc2a9860451b?w=1600&q=80&auto=format&fit=crop
- index.html — favorites 01 trà Earl Grey — https://images.unsplash.com/photo-1585185160068-8175b6a39d84?w=1200&q=80&auto=format&fit=crop
- index.html — favorites 02 scones — https://images.unsplash.com/photo-1777016844333-3641b8dc7f19?w=1200&q=80&auto=format&fit=crop
- index.html — favorites 03 trà sữa — https://images.unsplash.com/photo-1788016284568-2cfdc5994fd5?w=1200&q=80&auto=format&fit=crop
- index.html — không gian phòng trà ảnh ngang lớn — https://images.unsplash.com/photo-1785302710677-69cc4ea97bee?w=2000&q=80&auto=format&fit=crop
- pages/menu.html — Tea Selection — https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=1400&q=80&auto=format&fit=crop
- pages/menu.html — Milk Tea — https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=1400&q=80&auto=format&fit=crop
- pages/menu.html — Fruit Infusions — https://images.unsplash.com/photo-1647894111500-4ea0cea3bfe6?w=1400&q=80&auto=format&fit=crop
- pages/menu.html — Pastries — https://images.unsplash.com/photo-1710077717714-976db5604dd7?w=1400&q=80&auto=format&fit=crop
- pages/about.html — hero A Place to Pause — https://images.unsplash.com/photo-1759968646998-d94b93904082?w=2000&q=80&auto=format&fit=crop
- pages/about.html — câu chuyện thương hiệu — https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?w=1200&q=80&auto=format&fit=crop
- pages/about.html — văn hóa trà — https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?w=1400&q=80&auto=format&fit=crop
- pages/about.html — trà và bánh — https://images.unsplash.com/photo-1553595854-34a134b890c8?w=1400&q=80&auto=format&fit=crop
- pages/about.html — gallery 02 — https://images.unsplash.com/photo-1766232574096-4c4380105cc7?w=1200&q=80&auto=format&fit=crop
- pages/about.html — gallery 03 — https://images.unsplash.com/photo-1620130674275-d709994ed7c8?w=1200&q=80&auto=format&fit=crop
- pages/about.html — gallery 04 — https://images.unsplash.com/photo-1610375233775-6e0166927193?w=1200&q=80&auto=format&fit=crop
- pages/about.html — gallery 05 — https://images.unsplash.com/photo-1763617702099-d956f3fd8324?w=1200&q=80&auto=format&fit=crop
- pages/about.html — gallery 06 — https://images.unsplash.com/photo-1673530598977-ee0eda88f0a2?w=1200&q=80&auto=format&fit=crop
- pages/about.html — gallery 01 — https://images.unsplash.com/photo-1523920290228-4f321a939b4c?w=1200&q=80&auto=format&fit=crop
- pages/about.html — không gian thưởng thức — https://images.unsplash.com/photo-1783085938835-ed3c145c44ec?w=1400&q=80&auto=format&fit=crop

## 7. Chức năng đã triển khai

- Menu thu gọn trên điện thoại
- Sao chép nhanh (số điện thoại / email)
- Nút về đầu trang
- Phóng to ảnh (lightbox)
- Điều hướng: 3 trang liên kết qua header / footer (menu: index.html, pages/about.html, pages/menu.html).
- Chuyển động (đếm trong code): `data-reveal` ×44, `data-header` ×3, `data-split` ×3, `data-reveal-stagger` ×9, `data-parallax` ×2, `data-reveal="clip"` ×13.

## 8. Kiểm thử & kết quả

- QA tự động (Playwright) lúc 14:43 23/10/2026: 3 trang × 3 kích thước (375 / 768 / 1440px) + đo bề ngang ở 1920px — 0 nghiêm trọng, 21 cần sửa, 2 gợi ý. Chi tiết: `_qa-report.md` (bản tải về không kèm thư mục QA).
- ✓ Ngôn ngữ: Mọi trang lang="en", nội dung tiếng Anh
- ✓ Tên thương hiệu: "THE TEA LIBRARY" có ở title / header / footer mọi trang
- AI tự xem lại trang bằng công cụ preview: 10 lượt chụp / kiểm.

## 9. Lịch sử dựng, lỗi đã sửa & giới hạn còn lại

| Thời điểm | Tác vụ | Kết quả |
|---|---|---|
| 14:43 23/10/2026 | Dựng website | xong |

Điều chỉnh so với yêu cầu (AI ghi):

- Tối đa 3 trang theo chú thích BA: Home, Menu, About; liên hệ / giờ mở cửa ở section Visit trang chủ và footer, không có trang Contact riêng
- BA yêu cầu song ngữ Việt–Anh có nút chuyển ngôn ngữ (ghi đè mục 'không tạo bộ chuyển ngôn ngữ' của concept): tiếng Anh mặc định, nút EN / VI trên header đổi toàn bộ chữ, alt ảnh, title, meta description bằng site.js (thuộc tính data-vi), đổi <html lang>, nhớ lựa chọn bằng localStorage
- Font: đổi Fraunces/Manrope của preset sang Cormorant Garamond (heading serif cổ điển) + Be Vietnam Pro (body), cả hai có bộ ký tự tiếng Việt, tránh lỗi phông
- Màu theo art direction của BA: xanh rừng #203D32, burgundy #6E2938, kem giấy #F0E7D5, nâu gỗ #604832 thay bảng màu preset
- Chuyển động theo BA: chuyển trang fade chậm vừa phải, ảnh hiện dần (clip), đường kẻ mảnh vẽ dần; parallax rất nhẹ 0.08 chỉ ở ảnh hero; bỏ data-particles / data-float của atmos.js vì BA tránh animation liên tục
- Không có form: BA cấm đặt hàng / giỏ hàng / form giao dịch; liên hệ bằng tel:, mailto: và nút sao chép địa chỉ
- Công cụ search_images (openverse) quá thời gian chờ → mọi ảnh dùng link Unsplash đã kiểm qua link_image

Lỗi QA còn mở:

- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1780245995094-fc2a9860451b?w=1600&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1585185160068-8175b6a39d84?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1777016844333-3641b8dc7f19?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1788016284568-2cfdc5994fd5?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1561668131-a6e7450dc65e?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] index.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1785302710677-69cc4ea97bee?w=2000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1759968646998-d94b93904082?w=2000&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1553595854-34a134b890c8?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1783085938835-ed3c145c44ec?w=1400&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1523920290228-4f321a939b4c?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1766232574096-4c4380105cc7?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1620130674275-d709994ed7c8?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image
- [Ảnh không đúng nguồn] pages/about.html: Ảnh giữ chỗ / link tự nghĩ: https://images.unsplash.com/photo-1610375233775-6e0166927193?w=1200&q=80&auto=format&fit=crop — lấy qua search_images / use_image, hoặc kiểm link qua link_image

Giới hạn:

- Website chỉ giới thiệu thương hiệu và menu; không đặt hàng, thanh toán
- Địa chỉ, số điện thoại, giờ mở cửa, giá món là nội dung mẫu cần khách xác nhận
- Ảnh là ảnh stock dùng bằng link ngoài; cần thay bằng ảnh thật của quán
- Form là bản demo: kiểm tra dữ liệu và lưu tạm trong trình duyệt (localStorage), **không gửi đi đâu** — cần backend / dịch vụ form khi chạy thật.
- Nội dung, số liệu, tên người trong website là nội dung mẫu, cần khách xác nhận.

## 10. Cài đặt & chạy

Website tĩnh, **không có bước cài đặt hay build**.

- Mở trực tiếp: nhấp đúp `web/index.html` (chạy được qua `file://`). Trang con nằm trong `web/pages/`.
- Hoặc chạy máy chủ tĩnh trong thư mục `web/`: `npx serve web` (cần Node.js) rồi mở địa chỉ được in ra.
- Cần Internet để nạp Tailwind CDN và Google Fonts. Khi đưa lên production nên build Tailwind thành file CSS tĩnh thay cho CDN.
- Đưa lên hosting tĩnh (Netlify, Vercel, GitHub Pages…): tải nội dung thư mục `web/`.

## 11. Biến môi trường

- Website **không cần** biến môi trường nào.
- Chỉ BA Tool (khi dựng lại / đổi ảnh) dùng tùy chọn `PEXELS_API_KEY`, `UNSPLASH_ACCESS_KEY` trong `.env` của tool — không đặt thì tool dùng Openverse. Không ghi giá trị khóa vào website.
