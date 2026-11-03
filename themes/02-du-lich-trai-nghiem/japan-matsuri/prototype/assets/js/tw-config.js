/* JAPAN MATSURI — cấu hình Tailwind dùng chung cho mọi trang (một nguồn màu / font).
 * Màu theo BA: đỏ son (shu), trắng ngà (ivory), đen mực (sumi), be giấy washi (washi).
 * Quy ước bo góc: ảnh & thẻ rounded-2xl, nút / chip rounded-full. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        shu: { DEFAULT: '#B8322A', deep: '#8E241E', soft: '#F4DED8' },
        ivory: '#FBF7EF',
        washi: { DEFAULT: '#EFE6D4', deep: '#E2D4B8' },
        sumi: { DEFAULT: '#1F1C1C', soft: '#3A3533', muted: '#665E59' }
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Manrope', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      transitionTimingFunction: { expo: 'cubic-bezier(.16,1,.3,1)' }
    }
  }
};
