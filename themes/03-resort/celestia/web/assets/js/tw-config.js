/* Cấu hình Tailwind dùng chung cho mọi trang CELESTIA — một nguồn màu / font */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        midnight: { DEFAULT: '#202A43', deep: '#161D30', soft: '#2C3756' },
        lavender: { DEFAULT: '#B7A8CC', soft: '#DCD3E8', mist: '#ECE6F2', deep: '#6B5C88' },
        pearl: { DEFAULT: '#F7F4F1', warm: '#EFEAE6' },
        rose: { DEFAULT: '#D5B8B0', deep: '#9C7268' },
        silver: { DEFAULT: '#C9CBD3', deep: '#8D91A0' }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      maxWidth: { prose2: '38rem' }
    }
  }
};
