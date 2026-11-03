/* BLOOM & CRUMB — Tailwind config dùng chung cho mọi trang (một nguồn màu / font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        sage:   { DEFAULT: '#A6B49A', soft: '#DFE5D8', deep: '#7D8D70' },
        oat:    { DEFAULT: '#F5F0E5', deep: '#ECE4D3' },
        earth:  { DEFAULT: '#8B6F52', deep: '#6B533C' },
        forest: { DEFAULT: '#384A38', deep: '#2B3A2B' },
        ink:    '#262E25'
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'system-ui', 'sans-serif'],
        sans: ['Manrope', '"Be Vietnam Pro"', 'system-ui', 'sans-serif']
      },
      maxWidth: { prose: '65ch' }
    }
  }
};
