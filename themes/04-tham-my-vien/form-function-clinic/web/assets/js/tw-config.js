/* FORM & FUNCTION CLINIC — cấu hình Tailwind dùng chung cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: '#EEEEEC',      /* nền chính: trắng xám bê tông rất nhạt */
        surface: '#F8F8F7',    /* nền phụ: trắng */
        concrete: '#C9C9C5',   /* xám bê tông */
        slab: '#2A2A29',       /* bê tông tối */
        ink: '#151515',        /* chữ / đen */
        muted: '#555552',      /* chữ phụ (AA trên paper) */
        lime: '#D7F032'        /* điểm nhấn vàng chanh — chỉ làm nền / dấu, không làm chữ trên nền sáng */
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Geist', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      maxWidth: { prose: '65ch' }
    }
  }
};
