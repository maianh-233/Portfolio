tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: '#F5F5F2',
        white: '#FFFFFF',
        ink: '#191919',
        concrete: '#B7B7B0',
        graphite: '#666660',
        stone: '#827B70'
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Inter', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'Consolas', 'system-ui', 'monospace']
      },
      maxWidth: {
        frame: '1760px'
      }
    }
  }
};
