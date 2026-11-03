/* CLOUD NINE BAKERY - shared Tailwind config (one source for every page) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        /* BA art direction */
        sky: '#C9E4F5',
        lavender: '#DCD2F4',
        cloud: '#FFFDFB',
        blush: '#F7DDE6',
        /* Dreamy preset roles, tuned to the BA palette */
        'sky-dawn': '#F7DDE6',
        'sky-day': '#C9E4F5',
        dusk: '#4E4A7E',
        night: '#26244A',
        ink: '#2B2A45',
        paper: '#FFFDFB',
        glow: '#FFE6CC',
        sakura: '#E7A3BB'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', 'serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif']
      },
      maxWidth: { prose: '62ch' }
    }
  }
};
