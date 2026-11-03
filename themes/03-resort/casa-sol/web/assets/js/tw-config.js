/* CASA SOL — tailwind.config dùng chung cho mọi trang (một nguồn màu & font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        chalk: { DEFAULT: '#F7F3E9', deep: '#EFE8D8' },
        terra: { DEFAULT: '#C66B4E', deep: '#A4523A', soft: '#E7B9A6' },
        sea: { DEFAULT: '#537B91', deep: '#3E6176', soft: '#C9D8E0' },
        olive: { DEFAULT: '#7B8060', deep: '#5E6347' },
        sand: { DEFAULT: '#D8C4A7', soft: '#E9DCC8' },
        ink: { DEFAULT: '#22313A', soft: '#4A5A63' }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', 'serif'],
        body: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        arch: '999px 999px 0 0'
      }
    }
  }
};
