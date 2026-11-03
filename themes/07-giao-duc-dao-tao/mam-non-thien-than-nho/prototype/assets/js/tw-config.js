/* Cấu hình Tailwind dùng chung cho mọi trang — THIÊN THẦN NHỎ
   Màu theo yêu cầu BA: kem #FFF9F0, xanh lá pastel #B8D8B0, vàng nhạt #F9D982, cam đào #F3B7A5.
   Các sắc độ 600/700/800 cùng họ màu dùng cho chữ & nút để đạt tương phản WCAG AA. */
tailwind.config = {
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
    extend: {
      colors: {
        cream: { DEFAULT: '#FFF9F0', deep: '#FBEFDD' },
        leaf: { 50: '#F2F8EF', 100: '#E3F0DE', 300: '#B8D8B0', 500: '#7FB274', 600: '#5E8C55', 700: '#4A7343', 800: '#36552F' },
        sun: { 100: '#FDF3D3', 300: '#F9D982', 500: '#EDBE45', 700: '#8A6510' },
        peach: { 100: '#FDEDE7', 300: '#F3B7A5', 500: '#E38E75', 700: '#A34C35' },
        ink: { DEFAULT: '#2E3A2B', soft: '#566252' }
      },
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Nunito', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 40px -18px rgba(74, 115, 67, 0.35)',
        sticker: '0 8px 18px -8px rgba(163, 76, 53, 0.35)'
      }
    }
  }
};
