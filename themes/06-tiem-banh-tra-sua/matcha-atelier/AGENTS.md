# Nhiệm vụ: sửa website "MATCHA ATELIER"

Bạn thay Claude chạy skill `srs-builder` của BA Tool. Làm đúng như skill quy định, với tham số:

```
MODE: quick-revise
PROJECT_TYPE: website
PROJECT_DIR: D:\Layout_Agent\BA_Tool\workspace\matcha-atelier
TARGET_DIR: D:\Layout_Agent\BA_Tool\workspace\matcha-atelier\web
```

## Đọc trước (theo thứ tự)

1. `D:\Layout_Agent\BA_Tool\.claude\skills\srs-builder\SKILL.md` — phần MODE `quick-revise`.
2. `D:\Layout_Agent\BA_Tool\.claude\skills\srs-builder\references\quick-guide.md` — làm đúng các bước của mục `quick-revise`; các guide nó nhắc tới nằm cùng thư mục `references/`.
3. Khi guide nói "gọi skill `design-taste-frontend`" → đọc `C:\Users\Admin\.claude\skills\design-taste-frontend\SKILL.md`.
4. `D:\Layout_Agent\BA_Tool\workspace\matcha-atelier\feedback.md` — góp ý cần sửa.

## Công cụ thay thế (guide viết cho Claude)

- `search_images` / `use_image` → chạy trong terminal (giữ nguyên quy tắc chọn ảnh của image-guide; mở file ảnh đã tải để kiểm tra đúng chủ đề):

  ```
  node --import "file:///D:/Layout_Agent/BA_Tool/node_modules/tsx/dist/loader.mjs" "D:\Layout_Agent\BA_Tool\server\src\cli.ts" "D:\Layout_Agent\BA_Tool\workspace\matcha-atelier\web" search "<từ khóa tiếng Anh>" [landscape|portrait|square]
  node --import "file:///D:/Layout_Agent/BA_Tool/node_modules/tsx/dist/loader.mjs" "D:\Layout_Agent\BA_Tool\server\src\cli.ts" "D:\Layout_Agent\BA_Tool\workspace\matcha-atelier\web" use <id> <ten-file> "<trang — vị trí>"
  node --import "file:///D:/Layout_Agent/BA_Tool/node_modules/tsx/dist/loader.mjs" "D:\Layout_Agent\BA_Tool\server\src\cli.ts" "D:\Layout_Agent\BA_Tool\workspace\matcha-atelier\web" link <url-ảnh> "<trang — vị trí>"   # dự phòng: tìm không ra / không tải được → dùng thẳng link ảnh bạn tìm được (Pinterest, trang ảnh…)
  ```

- `view_page` / `check_page` → nếu bạn có trình duyệt, mở `file:///D:/Layout_Agent/BA_Tool/workspace/matcha-atelier/web/index.html` để xem lại; không có thì bỏ qua. BA Tool tự chạy QA sau khi bạn xong.

## Quy tắc

- Chỉ tạo / sửa file trong `D:\Layout_Agent\BA_Tool\workspace\matcha-atelier`. Không sửa code của BA Tool.
- Không sửa `assets/js/motion.js`, `ui.js`, `atmos.js` (tool sinh sẵn); không tự thêm thư viện JS khác.
- Không dùng link ảnh tự nghĩ ra, ảnh placeholder, ảnh AI tạo hay hình vẽ SVG / CSS thay ảnh chụp — chỉ ảnh lấy bằng các lệnh trên (link ngoài phải qua lệnh `link`).
- Xong việc: trả lời một dòng "Đã xong — quay lại BA Tool bấm Đã dựng xong".
