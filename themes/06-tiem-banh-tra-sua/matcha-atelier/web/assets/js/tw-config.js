/* MATCHA ATELIER — shared Tailwind config (one source for every page) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        /* Art direction from BA */
        matcha: { DEFAULT: '#65764B', deep: '#4B5937', soft: '#8A9A6E' },
        ivory: '#F5F1E7',
        ink: '#242821',
        sage: '#B7C2A0',
        /* supporting neutrals derived from the same family */
        washi: '#ECE7DA',
        line: '#D6D1C2'
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif']
      },
      maxWidth: { prose: '62ch' },
      transitionTimingFunction: { expo: 'cubic-bezier(.16,1,.3,1)' }
    }
  }
};
