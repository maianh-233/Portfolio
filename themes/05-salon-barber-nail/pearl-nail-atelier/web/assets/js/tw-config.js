/* PEARL NAIL ATELIER - tailwind.config dùng chung cho mọi trang (một nguồn màu / font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        /* Bảng màu BA chỉ định */
        pearl: '#F8F6F1',      /* Pearl White - nền chủ đạo */
        champagne: '#D8C3A5',  /* Champagne - chi tiết nhỏ, đường kẻ */
        beige: '#E8DFD3',      /* Warm Beige - nền phụ */
        nude: '#C9AA98',       /* Soft Nude - điểm nhấn hình ảnh */
        cocoa: '#51443D',      /* Deep Cocoa - chữ chính, nút */
        'cocoa-deep': '#3B312C',
        muted: '#6B5D55',      /* chữ phụ, đạt AA trên pearl & beige */
        line: '#E2D6C6',       /* đường kẻ mảnh */
        /* Bí danh theo preset Art Gallery */
        wall: '#F8F6F1',
        ink: '#51443D',
        gray: '#6B5D55',
        accent: '#C9AA98'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      borderRadius: {
        hair: '2px'
      }
    }
  }
};
