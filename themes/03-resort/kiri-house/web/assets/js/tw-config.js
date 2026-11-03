/* KIRI HOUSE: một nguồn màu / font cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#282A28', soft: '#3A3D3A' },          /* Ink Black: chữ, nền tối */
        paper: { DEFAULT: '#F3EFE5', deep: '#EAE4D6' },        /* Rice Paper: nền chủ đạo */
        cedar: { DEFAULT: '#8C6A4F', dark: '#6E5240' },        /* Cedar: nhấn gỗ */
        sage: { DEFAULT: '#A3AA91', light: '#E4E6DA', dark: '#5E6552' }, /* Sage: rêu, vườn */
        vermilion: '#A94A3D'                                   /* Vermilion: điểm nhấn nhỏ */
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      letterSpacing: { wordmark: '0.38em' }
    }
  }
};
