/* MOTION DISTRICT — Tailwind config dùng chung cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: '#F3F0E8',   // nền kem nhạt (BA)
        moss: '#35483B',    // xanh rêu đậm (BA)
        ink: '#191A18',     // đen mực (BA)
        brick: '#C6533B',   // đỏ gạch (BA) — nhấn
        stone: '#D9D4CB',   // trung tính (preset)
        muted: '#5E5B54',   // chữ phụ
        mist: '#E7E3D8'     // nền phụ rất nhạt
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif']
      },
      maxWidth: { 'screen-2xl': '1536px' }
    }
  }
};
