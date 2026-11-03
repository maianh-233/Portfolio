/* THE SKIN ARCHIVE — Tailwind config dùng chung cho mọi trang (Retro Medical Archive) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: '#F4EDDD',      /* nền trang: giấy kem cũ */
        cream: '#E9DFC8',      /* khối kem đậm hơn, bìa hồ sơ */
        ink: '#2B211C',        /* nâu mực: chữ chính, nền tối */
        'ink-soft': '#5A4A40', /* chữ phụ */
        burgundy: '#7B2633',   /* màu nhấn chính */
        'burgundy-deep': '#5E1A26',
        steel: '#4F666B',      /* xanh xám: khối màu phụ */
        'steel-pale': '#D5DCD8',
        line: '#BFB096',       /* đường kẻ mảnh */
        /* tên màu của preset film, chỉnh theo art direction của BA */
        'faded-red': '#9C3D33',
        mustard: '#C8963E',
        teal: '#3F6468'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-body)'],
        mono: ['var(--font-mono)']
      },
      maxWidth: { prose: '65ch' }
    }
  }
};
