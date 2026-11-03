# Nhiệm vụ: dựng website "DERMA CLINIC"

Bạn thay Claude chạy skill `srs-builder` của BA Tool. Làm đúng như skill quy định, với tham số:

```
MODE: quick-prototype
PROJECT_TYPE: website
PROJECT_DIR: D:\Layout_Agent\BA_Tool\workspace\derma-clinic
TARGET_DIR: D:\Layout_Agent\BA_Tool\workspace\derma-clinic\web
```

## Đọc trước (theo thứ tự)

1. `D:\Layout_Agent\BA_Tool\.claude\skills\srs-builder\SKILL.md` — phần MODE `quick-prototype`.
2. `D:\Layout_Agent\BA_Tool\.claude\skills\srs-builder\references\quick-guide.md` — làm đúng các bước của mục `quick-prototype`; các guide nó nhắc tới nằm cùng thư mục `references/`.
3. Khi guide nói "gọi skill `design-taste-frontend`" → đọc `C:\Users\Admin\.claude\skills\design-taste-frontend\SKILL.md`.
4. `D:\Layout_Agent\BA_Tool\workspace\derma-clinic\concept.md` — cấu hình website BA nhập (đọc tới dòng cuối).

## Công cụ thay thế (guide viết cho Claude)

- `search_images` / `use_image` → chạy trong terminal (giữ nguyên quy tắc chọn ảnh của image-guide; mở file ảnh đã tải để kiểm tra đúng chủ đề):

  ```
  node --import "file:///D:/Layout_Agent/BA_Tool/node_modules/tsx/dist/loader.mjs" "D:\Layout_Agent\BA_Tool\server\src\cli.ts" "D:\Layout_Agent\BA_Tool\workspace\derma-clinic\web" search "<từ khóa tiếng Anh>" [landscape|portrait|square]
  node --import "file:///D:/Layout_Agent/BA_Tool/node_modules/tsx/dist/loader.mjs" "D:\Layout_Agent\BA_Tool\server\src\cli.ts" "D:\Layout_Agent\BA_Tool\workspace\derma-clinic\web" use <id> <ten-file> "<trang — vị trí>"
  ```

- `view_page` / `check_page` → nếu bạn có trình duyệt, mở `file:///D:/Layout_Agent/BA_Tool/workspace/derma-clinic/web/index.html` để xem lại; không có thì bỏ qua. BA Tool tự chạy QA sau khi bạn xong.

## Quy tắc

- Chỉ tạo / sửa file trong `D:\Layout_Agent\BA_Tool\workspace\derma-clinic`. Không sửa code của BA Tool.
- Không sửa `assets/js/motion.js`, `ui.js`, `atmos.js` (tool sinh sẵn); không tự thêm thư viện JS khác.
- Không dùng link ảnh tự nghĩ ra, ảnh placeholder hay ảnh AI tạo — chỉ ảnh tải bằng lệnh trên.
- Xong việc: trả lời một dòng "Đã xong — quay lại BA Tool bấm Đã dựng xong".
