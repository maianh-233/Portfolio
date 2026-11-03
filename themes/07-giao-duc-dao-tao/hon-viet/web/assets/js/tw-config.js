/* HỒN VIỆT — cấu hình Tailwind dùng chung cho mọi trang (màu theo vai trò, font). */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: '#E8D9B8',        /* vàng giấy cũ (BA) */
        'paper-light': '#F3EBD9',/* giấy dó sáng, nền xen kẽ */
        wood: '#594333',         /* nâu gỗ (BA) */
        'wood-deep': '#3B2C22',  /* gỗ lâu năm, nền chương tối */
        son: '#843D32',          /* đỏ son trầm (BA) — màu nhấn duy nhất */
        moss: '#62664A',         /* xanh rêu (BA) */
        ink: '#292720',          /* đen mực (BA) */
        bronze: '#8C6A43'        /* đồng hun, chỉ dùng cho đường kẻ / họa tiết */
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      transitionTimingFunction: { soft: 'cubic-bezier(.16,1,.3,1)' }
    }
  }
};
