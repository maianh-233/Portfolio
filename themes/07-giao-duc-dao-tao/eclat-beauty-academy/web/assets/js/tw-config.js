/* Cấu hình Tailwind dùng chung cho mọi trang — ÉCLAT BEAUTY ACADEMY */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: '#F7F1E9',      /* nền chủ đạo */
        nude: '#D8B9A5',       /* màu phụ khu vực giới thiệu */
        burgundy: '#713B45',   /* điểm nhấn (son môi) */
        'burgundy-deep': '#5C2F38',
        cocoa: '#49362F',      /* tiêu đề, nội dung quan trọng */
        soot: '#211E1D',       /* nền tối gallery */
        warm: '#FFFCF8'        /* nền sáng nội dung */
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Geist', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      borderRadius: {
        arch: '999px 999px 0 0'
      },
      letterSpacing: {
        label: '0.22em'
      }
    }
  }
};
