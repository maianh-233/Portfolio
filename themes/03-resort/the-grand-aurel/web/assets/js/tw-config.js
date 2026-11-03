/* THE GRAND AUREL — cấu hình Tailwind dùng chung cho mọi trang (màu theo vai trò, font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        royal: { DEFAULT: '#263B5A', deep: '#1B2A41', soft: '#3A5076' },   /* Royal Blue — nhận diện chính */
        gold: { DEFAULT: '#B69A62', ink: '#7A6334', pale: '#D9C9A3' },    /* Antique Gold — viền, điểm nhấn (gold-ink cho chữ nhỏ trên nền sáng) */
        ivory: { DEFAULT: '#F4EFE5', deep: '#EAE2D3', line: '#DCD1BD' },   /* Warm Ivory — nền chính */
        forest: { DEFAULT: '#34483A', deep: '#26352B' },                   /* Forest Green — khu vườn, thiên nhiên */
        espresso: { DEFAULT: '#40332C', soft: '#5E4D43' },                 /* Espresso Brown — chữ phụ, chi tiết di sản */
        ink: '#1F2430'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      letterSpacing: { crest: '0.32em' },
      transitionTimingFunction: { palace: 'cubic-bezier(.16,1,.3,1)' }
    }
  }
};
