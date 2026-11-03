/* ROOTS ORGANIC HAIR - cấu hình Tailwind dùng chung (màu theo vai trò, font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        olive: { DEFAULT: '#68734F', deep: '#56603F', soft: '#E4E6DC' }, // màu nhận diện, CTA
        sage: '#A8B09A',   // màu phụ cho section, chi tiết
        sand: '#D8C5A9',   // nền phụ ấm
        ivory: '#F8F5EF',  // nền chính
        earth: '#795B46',  // nhấn, tiêu đề phụ
        forest: '#303A2D', // chữ chính, footer
        stone: '#E7E3DA',  // đường kẻ, nền trung tính
        /* alias tên màu của preset nature -> cùng bảng màu BA */
        moss: '#68734F', fern: '#A8B09A', mist: '#F8F5EF', bark: '#795B46', ink: '#303A2D'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'serif'],
        sans: ['Manrope', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      maxWidth: { prose: '65ch' }
    }
  }
};
