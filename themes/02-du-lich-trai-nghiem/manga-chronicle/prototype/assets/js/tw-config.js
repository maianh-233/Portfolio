/* MANGA CHRONICLE - cấu hình Tailwind dùng chung cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: '#F0E8D8', deep: '#E6DCC6', light: '#F6F0E4' },
        ink: { DEFAULT: '#242321', soft: '#3A3835', line: '#2423212E' },
        vermilion: { DEFAULT: '#A6382B', deep: '#8A2C21', light: '#C9604F' },
        archive: { DEFAULT: '#81735F', deep: '#5C5243', light: '#B3A68F' }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'serif'],
        body: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      letterSpacing: { label: '0.22em' },
      transitionTimingFunction: { expo: 'cubic-bezier(.16,1,.3,1)' }
    }
  }
};
