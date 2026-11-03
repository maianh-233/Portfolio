/* VELVET FRAME — shared Tailwind config (one source for every page) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: '#151313',        /* Charcoal Black */
        cream: '#F2EADF',      /* Warm Cream */
        sand: '#EAE0D3',       /* cream một bậc tối hơn, nền phụ */
        wine: '#702B3B',       /* Burgundy, accent */
        blush: '#C9A9AF',      /* burgundy pha sáng, chữ nhấn trên nền tối */
        cocoa: '#513A32',      /* Chocolate Brown */
        smoke: '#A7A09A',      /* Smoke Grey */
        stone: '#6E6660'       /* smoke đậm cho chữ nhỏ trên nền kem (AA) */
      },
      fontFamily: {
        /* Bodoni Moda: chỉ cho chữ Latin không dấu (wordmark, số năm) */
        mark: ['"Bodoni Moda"', '"Noto Serif Display"', 'Georgia', 'system-ui', 'serif'],
        /* Noto Serif Display: serif tương phản cao kiểu Didone, đủ dấu tiếng Việt */
        display: ['"Noto Serif Display"', 'Georgia', 'system-ui', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      letterSpacing: { label: '0.24em' },
      screens: { '3xl': '1800px' }
    }
  }
};
