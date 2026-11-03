/* TEA ORBIT — cấu hình Tailwind dùng chung cho mọi trang.
   Giữ bảng màu gốc (tím điện, cobalt, cyan, trắng lạnh, mực #10111B); nền chuyển sang sáng, ấm kiểu quán trà. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        void: { DEFAULT: '#10111B', 2: '#1B1C2B', 3: '#26283A' },
        violet: { DEFAULT: '#795BFF', deep: '#5A3FE0', soft: '#B9A8FF', wash: '#ECE7FF' },
        cobalt: { DEFAULT: '#3157F5', soft: '#8FA4FF', wash: '#E3E9FF' },
        cyan: { DEFAULT: '#62E8F2', deep: '#0F7C86', wash: '#DDF9FB' },
        frost: { DEFAULT: '#F4F5FF', 2: '#FAFAFF' },
        pearl: { DEFAULT: '#2A2233' }
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif']
      },
      transitionTimingFunction: { expo: 'cubic-bezier(.16,1,.3,1)' }
    }
  }
};
