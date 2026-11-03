/* Tailwind config dùng chung cho mọi trang của TIỆM BÁNH MỘC MIÊN */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: '#E9D8B5', light: '#F5ECD9', deep: '#DCC59A' },
        brick: { DEFAULT: '#9E4034', dark: '#7E3128' },
        moss: { DEFAULT: '#59634B', dark: '#444C39' },
        wood: { DEFAULT: '#624631', dark: '#4A3424' },
        ink: '#2E2219',
        cream: '#FBF6EA'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'system-ui', 'serif'],
        body: ['"Work Sans"', 'system-ui', 'sans-serif'],
        hand: ['"Dancing Script"', 'cursive', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        print: '0 1px 0 rgba(98,70,49,.12), 0 14px 30px -12px rgba(98,70,49,.35)'
      }
    }
  }
};
