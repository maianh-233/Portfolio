/* Cấu hình Tailwind dùng chung cho mọi trang — disanvietnam
   Màu theo design tokens BA cung cấp; sắc "dark" dùng cho chữ / nút để đạt tương phản ≥ 4.5:1 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0B4773', dark: '#083656', soft: '#E7EEF5' },
        academic: { DEFAULT: '#143A56', dark: '#0E2B41' },
        gis: { DEFAULT: '#0D9488', dark: '#0F766E', soft: '#E3F3F1' },
        heritage: { DEFAULT: '#C4A46A', dark: '#7A5C22', soft: '#F8F3EA' },
        surface: '#F3F6FA',
        ink: '#1A2B3C',
        muted: '#4A5B6C',
        line: '#D9E1EA'
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        serif: ['"Noto Serif"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'serif']
      },
      maxWidth: { reading: '780px' },
      boxShadow: {
        soft: '0 1px 2px rgba(20,58,86,.05), 0 6px 20px rgba(20,58,86,.06)',
        lift: '0 2px 4px rgba(20,58,86,.06), 0 14px 32px rgba(20,58,86,.10)'
      }
    }
  }
};
