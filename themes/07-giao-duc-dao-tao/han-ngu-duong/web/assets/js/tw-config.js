/* HÁN NGỮ ĐƯỜNG — cấu hình Tailwind dùng chung cho mọi trang.
   Đổi màu / font tại đây (và biến tương ứng trong assets/css/site.css). */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper:   { DEFAULT: '#F3EDE1', deep: '#E8DECB', line: '#D9CCB4' }, // giấy cổ
        ink:     { DEFAULT: '#1E1B18', soft: '#4A443E', mute: '#6B635A' },  // đen mực
        son:     { DEFAULT: '#A3261C', dark: '#80190F', soft: '#C9574A' },  // đỏ son (màu chủ đạo)
        lacquer: { DEFAULT: '#4A1410', deep: '#33100C' },                    // đỏ trầm sơn mài
        gold:    { DEFAULT: '#C49A52' }                                       // nét kim nhũ trang trí trên nền tối
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Noto Serif SC"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        han: ['"Noto Serif SC"', '"Songti SC"', '"SimSun"', 'serif', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      maxWidth: { prose: '65ch' }
    }
  }
};
