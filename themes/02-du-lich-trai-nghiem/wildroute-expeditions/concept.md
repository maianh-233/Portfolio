# Concept landing page

## Mô tả của BA

# DESIGN A CINEMATIC ADVENTURE TRAVEL LANDING PAGE

Thiết kế Landing Page cho thương hiệu tour phiêu lưu **WILDROUTE EXPEDITIONS**, chuyên trekking, leo núi, camping, khám phá hang động và chinh phục các cung đường thiên nhiên tại Việt Nam.

## 1. Art Direction

Phong cách cinematic outdoor adventure, mạnh mẽ, hoang dã và giàu cảm xúc. Website cần giống một bộ phim tài liệu khám phá thiên nhiên hơn là website bán tour thông thường.

Màu sắc: xanh rừng đậm #18392E, đen than #171B18, trắng ngà #F4F1E8 và cam đất #D77B43.

Sử dụng ảnh núi non hùng vĩ, biển mây, rừng sâu, lều cắm trại và những nhà thám hiểm nhỏ giữa cảnh quan rộng lớn. Typography lớn, đậm, tương phản mạnh.

## 2. Sections

**Hero — Into the Unknown**
- Hero toàn màn hình với ảnh núi phủ mây.
- Headline: “GO BEYOND THE MAP.”
- Subtitle: “Leave the ordinary behind. Find your wild.”
- CTA: Explore Expeditions.
- Nhãn nhỏ: Vietnam · Outdoor Adventures · Small Group Tours.
- Có một đường line chỉ dẫn người dùng cuộn xuống.

**Featured Expeditions**
- Tour Hà Giang Loop, trekking Tà Năng, chinh phục Fansipan, khám phá hang động.
- Mỗi tour có ảnh, độ dài hành trình, độ khó, khu vực và mô tả.
- Nút View Expedition mở modal hoặc trang chi tiết.

**Choose Your Adventure**
- Trekking, Camping, Mountain Climbing, Cave Exploration.
- Bố cục ảnh lớn, không dùng các card giống nhau hoàn toàn.

**The Journey**
- Timeline mô tả hành trình mẫu từ chuẩn bị, khởi hành, khám phá đến kết thúc.
- Hiển thị lịch trình theo từng ngày.

**Why Wildroute**
- Nhóm nhỏ, hướng dẫn viên địa phương, chuẩn bị an toàn, tôn trọng thiên nhiên.

**Field Notes**
- Nhật ký khám phá, kinh nghiệm trekking, hướng dẫn chuẩn bị đồ dùng.

**Final CTA**
- “THE WILD IS CALLING.”
- CTA: Find Your Next Expedition.

**Footer**
- Logo, liên hệ, mạng xã hội, thông tin doanh nghiệp.

## 3. Animation

1. Hero: ảnh nền zoom chậm từ 105% về 100%, tạo cảm giác máy quay tiến vào cảnh núi.
2. Headline: từng dòng xuất hiện bằng hiệu ứng clip reveal từ dưới lên, có độ trễ ngắn.
3. Scroll parallax: lớp núi tiền cảnh và hậu cảnh dịch chuyển với tốc độ khác nhau nhưng rất nhẹ.
4. Expedition cards: ảnh zoom 1.04 lần khi hover, thông tin xuất hiện bằng fade-up.
5. Journey timeline: đường line được vẽ dần khi người dùng cuộn đến.
6. Section transition: nội dung fade-in và dịch chuyển khoảng 20px.
7. CTA: mũi tên dịch chuyển nhẹ khi hover.
8. Không dùng hiệu ứng rung, glitch hoặc particle quá nhiều.

## 4. Yêu cầu triển khai

Responsive desktop, tablet, mobile. Navigation rõ ràng, animation nhẹ và tối ưu hiệu suất. Tất cả nút phải có hành động thực tế. Đây là website giới thiệu và khám phá tour, không cần checkout hoặc thanh toán trực tuyến. Dùng dữ liệu tour mẫu có thể chỉnh sửa.

## Định hướng đã chốt

- Preset: **Nature / Organic / Atmospheric** — tool nhận diện từ mô tả (BA để "Tự động"). Mô tả khác hẳn preset thì theo mô tả.
- Mức chuyển động: **Level 2 — Atmospheric** (mặc định của preset). Bảng thuộc tính theo mức ở motion-guide mục 1.
- Section: theo "Section gợi ý" của preset, thêm / bớt cho hợp ngành (6–9 section).

### Preset: Nature / Organic / Atmospheric (`nature`)
Rêu, gỗ, sương sớm — chất liệu tự nhiên, nhịp chậm.

**Bảng màu** (đưa vào `tailwind.config` dưới đúng các tên này): `moss` #3F5A3C · `fern` #6F8B5E · `mist` #F4F1EA · `sand` #E9E1D1 · `bark` #5A4636 · `sky` #BFD3D6 · `ochre` #C98A3D · `ink` #1F271D
**Font** (Google Fonts): display `Fraunces:opsz,wght@9..144,400;9..144,600` · body `Manrope:wght@400;500;700`

**Chữ**
- Tiêu đề Fraunces (serif mềm), một từ in nghiêng màu fern để nhấn ý.
- Thân bài Manrope 17px, màu ink/75; số liệu (độ cao, nhiệt độ, mùa) đặt thành nhãn nhỏ.
**Bố cục**
- Bố cục hữu cơ: ảnh bo góc lớn (rounded-[2rem]) hoặc vòm (rounded-t-full) xen ảnh vuông sắc cạnh.
- Lưới lệch nhịp 12 cột: ảnh chiếm 7 cột, chữ 4 cột lệch xuống; dải ảnh ngang kéo được.
- Nền mist / sand xen một dải moss đậm cho phần số liệu hoặc trích dẫn.
**Ảnh**
- Ảnh thật: rừng sương, lá cận cảnh, bàn tay làm việc, chất liệu gỗ / đá / vải lanh.
- Tông ấm hơi phai: `saturate-[.9] sepia-[.08]`.
**Khoảng trắng:** Rộng rãi, `py-24 lg:py-32`, khối chữ ngắn.
**Chuyển động mặc định:** Level 2 — Atmospheric
- `data-reveal="clip"` cho ảnh lớn, `data-reveal-stagger` cho lưới, `data-parallax` 0.1–0.15 cho ảnh hero.
- Một section có `data-particles="dust"` (nắng xuyên rừng) hoặc `data-clouds` mỏng (sương) — không hơn.
- `data-float` rất nhẹ (6px) cho 1–2 chi tiết trang trí (lá, nhãn).
**Section gợi ý (id trong sections.md, theo thứ tự):** `hero-split` → `story-editorial` → `features-numbered` → `gallery-lookbook` → `stats-band` → `quote-full` → `contact-split` → `footer-big`
**Được phép (ghi đè layout-guide mục 3):** sương mỏng bằng gradient; hình vòm / bo lớn
**Tránh:** xanh lá tươi chói; icon lá cây clip-art; gradient đa màu
