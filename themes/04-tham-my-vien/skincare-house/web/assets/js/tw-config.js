/* SKINCARE HOUSE - shared Tailwind config (grown-up 1990s magazine retro, faded-print palette) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: '#FBF4E4',
        paper: '#FFFBF2',
        ink: { DEFAULT: '#1E2A47', soft: '#47506A' },
        baby: { DEFAULT: '#A9CDE0', soft: '#E1EEF4', deep: '#4F8DB0' },
        brick: { DEFAULT: '#AE4330', dark: '#8E3320' },
        butter: { DEFAULT: '#EBD394', soft: '#F6EBCB' }
      },
      fontFamily: {
        /* Playfair Display: 90s fashion-magazine serif with a real italic, full Vietnamese set */
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        /* Soft, ink-tinted print shadows (no hard cartoon offsets) */
        'pop-sm': '0 2px 10px -4px rgba(30, 42, 71, .22)',
        pop: '0 18px 36px -22px rgba(30, 42, 71, .55)',
        'pop-lg': '0 30px 60px -28px rgba(30, 42, 71, .6)'
      },
      maxWidth: { prose: '62ch' }
    }
  }
};
