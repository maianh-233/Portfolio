/* DERMA CLINIC — tailwind.config dùng chung cho mọi trang (một nguồn màu / font).
   Quy ước bo góc: nút & chip bo tròn hẳn (rounded-full); khối, thẻ, ô nhập rounded-xl. Không bóng đổ đậm. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',          // nền chính
        mist: '#F2F7F7',           // nền xen kẽ, xám lạnh rất nhạt
        line: '#D5E1E2',           // đường kẻ mảnh
        ink: '#0F2A2C',            // chữ chính
        slate: '#55676C',          // chữ phụ, xám lạnh (AA trên nền trắng)
        mint: { soft: '#E7F6F0', DEFAULT: '#CDEDE2', deep: '#97D6C2' },
        teal: { DEFAULT: '#0E6F6E', dark: '#0A5050', deep: '#073B3C' }
      },
      fontFamily: {
        display: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Geist', '"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      maxWidth: { prose: '65ch' }
    }
  }
};
