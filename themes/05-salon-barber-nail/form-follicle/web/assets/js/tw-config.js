/* FORM & FOLLICLE: cấu hình Tailwind dùng chung cho mọi trang (màu theo chú thích BA) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cobalt: '#2455E8',   /* Cobalt Blue: màu thương hiệu, CTA, khối nhấn */
        electric: '#426BFF', /* Electric Blue: hover, chi tiết đồ họa */
        paper: '#FFFFFF',    /* Pure White: nền chính */
        ink: '#111111',      /* Jet Black: chữ, tiêu đề, nền tương phản */
        silver: '#C5C7CC',   /* Silver Gray: đường kẻ, chi tiết nền */
        mist: '#F2F3F5',     /* Light Gray: nền section phụ */
        graphite: '#55585F'  /* chữ phụ, đạt tương phản AA trên trắng và mist */
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Inter', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      maxWidth: { prose: '65ch' }
    }
  }
};
