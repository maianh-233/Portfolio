/* FADE DISTRICT — Tailwind config dùng chung mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        signal: '#FF5A1F',   // Neon Orange — nhận diện chủ đạo
        ink: '#171717',      // Carbon Black — nền tối, chữ
        concrete: '#B8B8B3', // Concrete Gray — trung tính
        paper: '#F4F2EC',    // Off White — nền sáng
        acid: '#D9FF3F'      // Acid Yellow — nhấn phụ, rất ít
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        body: ['"Bricolage Grotesque"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Consolas', 'system-ui', 'Arial', 'sans-serif']
      },
      boxShadow: {
        hard: '6px 6px 0 #171717',
        'hard-signal': '6px 6px 0 #FF5A1F'
      }
    }
  }
};
