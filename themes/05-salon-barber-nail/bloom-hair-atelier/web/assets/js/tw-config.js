/* BLOOM HAIR ATELIER — Tailwind config dùng chung cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        lavender: { DEFAULT: '#B7A1D9', soft: '#E9E0F3', deep: '#9F86C7' },
        milk: '#FFFDFB',
        petal: '#F2DDE5',
        lilac: '#87768F',
        plum: { DEFAULT: '#382B3D', soft: '#4A3A50' },
        taupe: '#B9AEB7',
        swatch: { rose: '#9C6B63', lavbrown: '#7E6A86', beige: '#D9C2A3', pink: '#E8B9C8' }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif']
      },
      borderRadius: { arch: '999px 999px 0 0' },
      letterSpacing: { label: '0.2em' }
    }
  }
};
