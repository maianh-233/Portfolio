/* MOSS & MIST — cấu hình Tailwind dùng chung cho mọi trang (một nguồn màu / font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        forest: '#263D32',      /* xanh rừng — màu chủ đạo */
        'forest-deep': '#1C2E25',
        moss: '#71816A',        /* xanh rêu — màu phụ / nhấn */
        mist: '#F1F0EA',        /* trắng sương — nền */
        stone: '#D5D0C5',       /* be đá — nền phụ */
        charcoal: '#343A35'     /* xám than — chữ */
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Manrope', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      }
    }
  }
};
