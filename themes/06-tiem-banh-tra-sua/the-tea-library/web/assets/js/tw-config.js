/* THE TEA LIBRARY — tailwind config dùng chung cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#203D32', deep: '#162B23', soft: '#2E5345' },
        burgundy: { DEFAULT: '#6E2938', soft: '#8A3A4B' },
        paper: { DEFAULT: '#F0E7D5', light: '#F7F1E4', deep: '#E4D7BD' },
        wood: { DEFAULT: '#604832', light: '#8B6E52' },
        ink: { DEFAULT: '#1F2622', soft: '#3D463F' }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', 'serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif']
      },
      maxWidth: { prose: '62ch' },
      letterSpacing: { label: '0.22em' }
    }
  }
};
