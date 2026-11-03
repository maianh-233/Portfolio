/* SANDLINE - Tailwind config dùng chung cho mọi trang (một nguồn màu / font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        sand: '#D7BD96',        // Desert Sand (BA)
        terracotta: '#A75F43',  // Terracotta (BA) - đường kẻ, số lớn, chữ lớn
        bone: '#F4EFE5',        // Bone White (BA) - nền chính
        umber: '#342B25',       // Dark Umber (BA) - chữ, nền tối, footer
        clay: '#C58D69',        // Clay (BA) - nhấn phụ trên nền tối
        rust: '#8E4D35',        // Terracotta đậm - hover / chữ nhỏ màu nhấn (đạt AA trên bone)
        stone: '#6B5B4E',       // chữ phụ trên nền sáng (AA)
        dune: '#E9DCC6',        // nền phụ sáng
        line: '#D3C4AD'         // đường kẻ mảnh
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'system-ui', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'system-ui', 'monospace']
      },
      maxWidth: { 'screen-2xl': '1680px' }
    }
  }
};
