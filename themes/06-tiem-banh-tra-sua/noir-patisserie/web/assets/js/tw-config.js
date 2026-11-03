/* NOIR PATISSERIE: shared Tailwind config (one source for every page).
   Colour names follow the editorial preset; values follow the BA art direction. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: '#171615',    /* main background */
        stone: '#24211E',  /* secondary background */
        paper: '#F2EEE6',  /* ivory text */
        bronze: '#C4A574', /* champagne accent */
        muted: '#B7AEA2'   /* secondary text */
      },
      fontFamily: {
        /* Both fonts carry full Vietnamese diacritics (EN / VI switch) */
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', 'serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif']
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(.16,1,.3,1)'
      }
    }
  }
};
