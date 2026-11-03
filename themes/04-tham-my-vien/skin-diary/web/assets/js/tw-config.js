/* SKIN DIARY — shared Tailwind config (one source for every page) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: '#FAF8F6',   // paper white
        ink: '#151314',     // near-black text
        stone: '#E4D9D4',   // nude-grey hairline / soft surface
        muted: '#6A6164',   // secondary text
        bronze: '#8C6A43',  // preset tone (reserved)
        cherry: { DEFAULT: '#B0122D', deep: '#8E0E24' }, // single accent
        nude: { DEFAULT: '#EBD3C9', soft: '#F5E9E3' }    // nude pink surfaces
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'system-ui', 'serif'],
        sans: ['Geist', 'system-ui', 'sans-serif']
      },
      letterSpacing: { label: '0.2em' }
    }
  }
};
