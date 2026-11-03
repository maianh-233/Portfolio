/* VOLTCRAFT INDUSTRIES — cấu hình Tailwind dùng chung cho mọi trang (một nguồn màu / font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        space: '#10121C',      /* Deep Space — nền chính */
        void: '#0B0D15',       /* sâu hơn nền chính, dùng cho dải chuyển cảnh */
        panel: '#191D2B',      /* Panel Dark — khối nội dung, card */
        line: '#2A3044',       /* đường kẻ, viền */
        ink: '#F1F5F9',        /* Cold White — tiêu đề, nội dung chính */
        muted: '#8C95A9',      /* Slate Gray (sáng nhẹ để đạt AA trên panel) */
        slate: '#7B8498',      /* Slate Gray gốc — nhãn kỹ thuật lớn */
        violet: { DEFAULT: '#8B5CF6', soft: '#A78BFA', deep: '#6D3FE0' }, /* Electric Purple */
        cyan: { DEFAULT: '#46E5FF', soft: '#9AF0FF' }                     /* Neon Cyan */
      },
      fontFamily: {
        display: ['Unbounded', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'monospace']
      },
      maxWidth: { 'screen-2xl': '1680px' }
    }
  }
};
