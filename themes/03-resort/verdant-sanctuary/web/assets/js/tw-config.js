/* VERDANT SANCTUARY — tailwind.config dùng chung cho mọi trang (một nguồn màu / font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        forest: '#243D30',   // Deep Forest — header cuộn, footer, section thương hiệu
        canopy: '#42664A',   // Canopy Green — điểm nhấn, nhãn trên nền sáng
        fern: '#819875',     // Fern — đường kẻ, hover, nhãn trên nền tối
        moss: '#A1A88A',     // Moss — nền phụ, trang trí
        mist: '#E4E9DD',     // Forest Mist — section sáng
        ivory: '#F5F1E7',    // Warm Ivory — nền chính
        bark: '#665443',     // Natural Bark — chi tiết vật liệu
        ink: '#1B2A21'       // chữ đậm nhất (xanh rừng gần đen)
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Manrope', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(.16,1,.3,1)'
      }
    }
  }
};
