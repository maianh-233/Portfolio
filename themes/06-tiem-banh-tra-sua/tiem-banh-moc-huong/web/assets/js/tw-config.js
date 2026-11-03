/* Mộc Hương Bakery: cấu hình Tailwind dùng chung cho mọi trang (preset Pastel / Soft) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: '#FFF9F4',
        blush: '#F7D6D0',
        peach: '#FBE3C8',
        mint: '#D5EFE3',
        lilac: '#E3DDF6',
        cocoa: { DEFAULT: '#4B3A36', soft: '#6E5A55' },
        rose: { DEFAULT: '#C25E73', deep: '#A3475B' }
      },
      fontFamily: {
        display: ['Quicksand', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"Nunito Sans"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 50px -20px rgba(194, 94, 115, 0.28)',
        card: '0 10px 30px -14px rgba(75, 58, 54, 0.22)'
      },
      borderRadius: {
        arch: '999px 999px 2rem 2rem'
      }
    }
  }
};
