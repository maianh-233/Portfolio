/* CLINIQUE 24/7 - Tailwind config dùng chung cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: '#FCFCFD',
        ink: '#0F1218',
        stone: '#EEF0F3',
        line: '#D5DAE2',
        muted: '#555C69',
        cobalt: { DEFAULT: '#1637B5', deep: '#0E2680', soft: '#E7ECFB' },
        signal: { DEFAULT: '#E4471B', deep: '#B8340F' }
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        display: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'system-ui', 'sans-serif']
      },
      letterSpacing: { label: '0.16em' }
    }
  }
};
