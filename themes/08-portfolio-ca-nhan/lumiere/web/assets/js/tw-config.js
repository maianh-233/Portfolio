/* LUMIÈRE — cấu hình Tailwind dùng chung (bảng màu theo art direction của BA) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: '#101010',      /* đen sâu — nền chính */
        charcoal: '#1A1A1A', /* xám than — nền phụ */
        ivory: '#F3F0E9',    /* trắng ngà — chữ trên nền tối, nền phòng statement */
        mute: '#9B9B9B',     /* xám phụ — chữ phụ trên nền tối */
        stone: '#57544E',    /* chữ phụ trên nền trắng ngà (đạt AA) */
        line: '#2C2C2C'      /* đường kẻ mảnh trên nền tối */
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Inter', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      letterSpacing: {
        label: '0.2em'
      }
    }
  }
};
