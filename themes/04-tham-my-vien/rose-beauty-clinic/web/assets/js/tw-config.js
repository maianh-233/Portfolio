/* ROSÉ BEAUTY CLINIC - Tailwind config dùng chung cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: '#FBF5EF',     /* nền kem sữa */
        ivory: '#FFFCF8',     /* trắng ấm */
        blush: '#F2D9D3',     /* hồng phấn */
        petal: '#E8C1BA',     /* hồng phấn đậm hơn, chỉ để trang trí */
        rose: '#B5727C',      /* rose gold - đường kẻ, chi tiết trang trí */
        rosedeep: '#8E4E58',  /* màu nhấn đạt AA: nút, chữ nhấn */
        ink: '#35262A',       /* chữ chính */
        muted: '#6E5A5E',     /* chữ phụ */
        line: '#E6D3CC'       /* đường kẻ mảnh */
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', 'serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        arch: '999px 999px 1.5rem 1.5rem'
      }
    }
  }
};
