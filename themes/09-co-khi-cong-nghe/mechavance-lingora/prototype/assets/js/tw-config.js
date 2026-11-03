/* MECHAVANCE — cấu hình Tailwind dùng chung cho mọi trang (một nguồn màu / font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        void: '#0E1012',    /* nền graphite đậm */
        panel: '#16191C',   /* khối xám than */
        line: '#2B3036',    /* đường kẻ kỹ thuật */
        ink: '#E8EBEE',     /* chữ trắng bạc */
        muted: '#A1AAB4',   /* chữ phụ */
        steel: '#C3CAD1',   /* bạc kim loại */
        accent: '#F26A1B',  /* cam công nghiệp (màu nhấn duy nhất) */
        acid: '#F26A1B',    /* alias preset → cam công nghiệp theo yêu cầu BA */
        cyan: '#C3CAD1'     /* alias preset → bạc kim loại */
      },
      fontFamily: {
        display: ['Unbounded', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'monospace']
      }
    }
  }
};
