/* LUMIÈRE AESTHETICS — cấu hình Tailwind dùng chung cho mọi trang.
   Màu theo chú thích BA: trắng ngà, champagne, be sáng, nâu nhạt.
   Tên preset editorial (paper / ink / stone / muted / bronze) giữ nguyên, ánh xạ sang bảng màu BA. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: '#FAF7F2',      // trắng ngà — nền chính
        ivory: '#FAF7F2',
        sand: '#F1EAE0',       // be sáng — nền section xen kẽ
        stone: '#E6D6BC',      // champagne — dải nhấn
        champagne: '#E6D6BC',
        bronze: '#7A5F48',     // nâu nhạt — màu nhấn duy nhất (nút, liên kết)
        'bronze-deep': '#5E4836',
        ink: '#2A231E',        // chữ chính
        muted: '#675C53',      // chữ phụ (AA trên paper / sand / champagne)
        line: 'rgba(42,35,30,0.14)'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Geist', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      letterSpacing: { label: '0.2em' },
      maxWidth: { prose: '65ch' }
    }
  }
};
