/* NEXMOTION INDUSTRIES — cấu hình Tailwind dùng chung cho mọi trang (một nguồn màu / font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: '#102A43',      /* Deep Navy — màu nhận diện chính */
        ice: '#F7FAFC',       /* Ice White — nền chủ đạo */
        steel: '#627D98',     /* Steel Blue — màu phụ, đường kẻ, chữ lớn phụ */
        mint: '#5DD6B0',      /* Mint Green — màu nhấn */
        graphite: '#243B53',  /* Graphite — chữ và khối đậm */
        line: '#D9E2EC',      /* đường kẻ mảnh trên nền sáng */
        mist: '#EEF3F7'       /* nền section xen kẽ rất nhạt */
      },
      fontFamily: {
        display: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Geist', '"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      borderRadius: { none: '0', DEFAULT: '0' }
    }
  }
};
