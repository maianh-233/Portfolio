/* KOMOREBI — cấu hình Tailwind dùng chung (màu theo vai trò, font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E6',   /* nền giấy kem chính */
        paper: '#E5D9C7',   /* giấy ngà, khung ảnh, nền phụ */
        moss: '#72785C',    /* xanh rêu — chi tiết, chữ lớn */
        forest: '#394638',  /* xanh rừng — nền đậm, nút chính */
        bark: '#8A7058',    /* nâu gỗ — ghi chú viết tay (chữ lớn) */
        rose: '#C9A6A0',    /* hồng phấn — trang trí nhỏ */
        ink: '#39372F',     /* chữ chính */
        wall: '#F5F0E6',
        line: '#D6C9B4',
        accent: '#394638'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Noto Serif JP"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        body: ['Montserrat', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        jp: ['"Noto Serif JP"', '"Cormorant Garamond"', 'serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        print: '0 1px 2px rgba(57,55,47,.08), 0 14px 30px -12px rgba(57,55,47,.28)'
      }
    }
  }
};
