/* SIAM LINGUA - shared Tailwind config (one source for every page)
   Thai lacquer direction: crimson lacquer + champagne gold leaf on ivory, forest green as balance. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        crimson: { DEFAULT: '#8D3038', deep: '#6F242B', night: '#4E1A1F', soft: '#F1E1DC' },
        ivory: { DEFAULT: '#F8F3E9', deep: '#EFE6D5' },
        gold: { DEFAULT: '#D5B36A', soft: '#E9D6A8', deep: '#A8853D' },
        forest: { DEFAULT: '#354A3C', deep: '#26362B' },
        ink: { DEFAULT: '#302A27', muted: '#655A53' }
      },
      fontFamily: {
        /* Trirong: Thai looped serif with full Vietnamese + Thai glyphs */
        display: ['Trirong', 'Sarabun', 'Georgia', 'system-ui', 'sans-serif'],
        /* Be Vietnam Pro for Vietnamese body text, Sarabun covers Thai words inside body copy */
        sans: ['"Be Vietnam Pro"', 'Sarabun', 'system-ui', 'sans-serif'],
        thai: ['Trirong', 'Sarabun', 'system-ui', 'sans-serif']
      },
      maxWidth: { prose: '65ch' }
    }
  }
};
