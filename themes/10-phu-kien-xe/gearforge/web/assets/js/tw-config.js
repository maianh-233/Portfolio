/* GEARFORGE - cấu hình Tailwind dùng chung cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        charcoal: '#111318',   /* Đen than - nền chính */
        gunmetal: '#292D33',   /* Xám kim loại - bề mặt, đường kẻ */
        silver: '#F3F4F6',     /* Trắng bạc - chữ chính */
        ember: '#FF6B2C',      /* Cam nổi bật - màu nhấn duy nhất */
        muted: '#A3A8B0',      /* Chữ phụ trên nền tối */
        deep: '#0B0C10'        /* Nền sâu hơn cho footer */
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Geist', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      screens: { '3xl': '1920px' }
    }
  }
};
