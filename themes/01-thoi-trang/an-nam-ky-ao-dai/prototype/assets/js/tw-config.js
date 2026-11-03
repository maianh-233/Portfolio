/* An Nam Ký Test — cấu hình Tailwind dùng chung cho mọi trang.
   Màu theo yêu cầu BA: #7A1F2B (đỏ mận), kem, xanh rêu. Không gradient. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        wine:  { DEFAULT: '#7A1F2B', dark: '#5E1621', soft: '#EADCD8' },
        cream: { DEFAULT: '#F4EEE2', deep: '#E9E0CF' },
        moss:  { DEFAULT: '#4B5A3C', dark: '#37422C', soft: '#DDE0D2' },
        ink:   '#1F1C19',
        muted: '#635C52',
        line:  '#D6CCB9'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      maxWidth: { prose: '62ch' }
    }
  }
};
