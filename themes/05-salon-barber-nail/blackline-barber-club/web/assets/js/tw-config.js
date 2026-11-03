/* BLACKLINE BARBER CLUB — cấu hình Tailwind dùng chung cho mọi trang (một nguồn màu / font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: '#111111',      // Deep Black — nền chủ đạo
        coal: '#242321',     // Charcoal — nền section phụ
        ivory: '#F2EBDD',    // Warm Ivory — chữ sáng / nền tương phản
        paper: '#F2EBDD',    // bí danh preset editorial
        wine: '#702B35',     // Burgundy Red — CTA, đường kẻ nhấn
        wineDeep: '#5A222B', // hover của CTA
        brass: '#A68A5B',    // Muted Brass — chi tiết nhỏ
        bronze: '#A68A5B',   // bí danh preset editorial
        muted: '#6B6760'
      },
      fontFamily: {
        display: ['"Noto Serif Display"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'serif'],
        sans: ['Geist', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      letterSpacing: { label: '0.22em' }
    }
  }
};
