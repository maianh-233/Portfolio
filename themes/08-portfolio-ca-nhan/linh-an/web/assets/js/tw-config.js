/* Linh An · BLOOMÉ — tailwind.config dùng chung cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        wall: '#F8F4ED',        /* Warm Ivory — nền chủ đạo */
        champagne: '#E8D8C3',   /* nền phụ */
        burgundy: { DEFAULT: '#722F37', deep: '#5A232A', soft: '#8A434C' },
        sage: { DEFAULT: '#929B80', deep: '#5B6649', mist: '#DDE0D3' },
        rose: '#C58F91',
        ink: '#2B1D1F',
        muted: '#6B5C58',
        line: '#E2D6C6',
        gray: '#8A8780',
        accent: '#722F37'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'serif'],
        sans: ['Manrope', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      letterSpacing: { label: '0.2em' }
    }
  }
};
