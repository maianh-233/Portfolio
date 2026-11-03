/* MONOCHROME GENTLEMEN — một nguồn màu / font cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: '#111111',      // Pure Black — tiêu đề, chữ chính, nền tối
        graphite: '#333333', // nội dung phụ trên nền sáng
        mid: '#858585',      // nhãn thứ cấp (trên nền tối / cỡ lớn)
        line: '#E5E5E5',     // đường phân cách, bề mặt phụ
        canvas: '#F7F7F5',   // nền chính
        paper: '#FFFFFF'     // vùng tương phản
      },
      fontFamily: {
        display: ['"Inter Tight"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['Inter', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      letterSpacing: {
        label: '0.16em'
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(.16,1,.3,1)'
      }
    }
  }
};
