/* Minh An — FORM / SPACE: cấu hình Tailwind dùng chung cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#F3EFE6', deep: '#E8E1D3', soft: '#F8F5EF' },
        clay: { DEFAULT: '#B96F50', dark: '#8F4F35', light: '#D9A88F' },
        olive: { DEFAULT: '#555B43', dark: '#3E4331', light: '#7C8267' },
        ink: { DEFAULT: '#292923', soft: '#4A4A42', mute: '#6B6A60' }
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Manrope', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      borderRadius: {
        pebble: '58% 42% 46% 54% / 52% 44% 56% 48%',
        arch: '999px 999px 1.5rem 1.5rem'
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(.16,1,.3,1)'
      }
    }
  }
};
