/* MILKY DAY - cấu hình Tailwind dùng chung cho mọi trang (một nguồn màu / font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        milk: { DEFAULT: '#FFF8EF', deep: '#F8EBDC' },          // nền kem sữa
        blush: { DEFAULT: '#F5C8D8', soft: '#FBE3EC', deep: '#EBA9C1' }, // hồng phấn - màu chính
        cocoa: { DEFAULT: '#69483F', deep: '#4A302A' },          // nâu cacao - chữ
        butter: { DEFAULT: '#FFE6A7', soft: '#FFF3D3' }          // vàng bơ - nhấn
      },
      fontFamily: {
        display: ['Nunito', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        hand: ['"Patrick Hand"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      borderRadius: { '4xl': '2rem' },
      boxShadow: {
        soft: '0 18px 40px -22px rgba(105,72,63,.38)',
        lift: '0 26px 50px -22px rgba(105,72,63,.48)'
      },
      screens: { xs: '420px' }
    }
  }
};
