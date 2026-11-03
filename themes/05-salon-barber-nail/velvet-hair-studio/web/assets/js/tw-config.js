/* VELVET HAIR STUDIO — bảng màu & font dùng chung mọi trang (một nguồn) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        velvet: '#171615', // Velvet Black — nền tối, chữ chính
        ivory: '#F5F0E8',  // Warm Ivory — nền sáng, chữ trên nền tối
        mocha: '#705548',  // Mocha Brown — chữ phụ trên nền sáng, nền CTA
        gold: '#C5A572',   // Champagne Gold — điểm nhấn, đường kẻ, nút
        taupe: '#B8AA9A'   // Soft Taupe — chữ phụ trên nền tối, nền nhạt
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Manrope', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      letterSpacing: { label: '0.22em' },
      transitionTimingFunction: { expo: 'cubic-bezier(.16,1,.3,1)' }
    }
  }
};
