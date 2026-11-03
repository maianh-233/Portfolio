tailwind.config = {
  theme: {
    extend: {
      colors: {
        void: '#0B0F14',      // nền chính (không đặt tên "base" để tránh trùng text-base)
        panel: '#111820',     // nền section
        card: '#151D27',      // nền card
        raised: '#1B2531',    // card hover / input
        ink: '#F3F6FA',       // chữ chính
        muted: '#9AA7B5',     // chữ phụ
        neon: { DEFAULT: '#A3FF68', soft: '#C6FFA0', deep: '#6FD12E' },
        line: 'rgba(255,255,255,0.10)',
        linehi: 'rgba(255,255,255,0.18)',
        syn: { key: '#7CC7FF', str: '#FFC98B', fn: '#E3A8FF', com: '#6B7A8A' }
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Inter', '"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Consolas', '"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      maxWidth: { prose: '65ch' }
    }
  }
};
