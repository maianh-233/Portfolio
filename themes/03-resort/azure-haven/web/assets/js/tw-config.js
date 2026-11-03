/* AZURE HAVEN - cấu hình Tailwind dùng chung cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ocean: { DEFAULT: '#123B46', deep: '#0D2C35', soft: '#1D4D5A' },
        lagoon: { DEFAULT: '#55B9B2', ink: '#2A746E', mist: '#D5ECE9' },
        sand: { DEFAULT: '#E9D9BE', light: '#F2E9D9' },
        shell: '#FAF8F2',
        palm: '#667C59',
        line: '#E2D6C2',
        /* bí danh theo tên preset luxury */
        ivory: '#FAF8F2',
        onyx: '#123B46',
        taupe: '#667C59',
        champagne: '#E9D9BE'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Manrope', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      letterSpacing: { wideish: '0.04em' }
    }
  }
};
