// TIDELINE — cấu hình Tailwind dùng chung cho mọi trang (màu theo vai trò, font)
tailwind.config = {
  theme: {
    extend: {
      colors: {
        terracotta: { DEFAULT: '#B65F45', ink: '#97492F' }, // nhận diện chính; ink = bản đậm cho chữ nhỏ (đạt AA trên nền Warm Chalk)
        copper: '#754638',   // Burnt Copper — section nổi bật
        sand: '#D9C5A7',     // Sandstone — nền phụ
        chalk: '#F3EDE3',    // Warm Chalk — nền chính
        plum: { DEFAULT: '#49323B', deep: '#3A272F' } // Deep Plum — chữ, điểm nhấn, footer
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      screens: { '3xl': '1920px' }
    }
  }
};
