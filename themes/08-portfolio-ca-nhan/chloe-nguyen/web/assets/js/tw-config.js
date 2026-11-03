/* Cấu hình Tailwind dùng chung — Chloe Nguyen (bảng màu BA chỉ định) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: '#FAF9F6',      // Trắng ngà — nền chính
        sand: '#E7DFD4',       // Be cát — dải nền phụ
        ink: '#242424',        // Đen than — chữ, nút chính, dải tối
        stone: '#B9B5AF',      // Xám đá — đường kẻ, chữ phụ trên nền tối
        olive: '#737B68',      // Xanh olive — điểm nhấn (chữ lớn, đường kẻ)
        'olive-deep': '#555C4C', // Olive đậm — chữ nhỏ nhấn trên nền sáng (đạt AA)
        muted: '#5C5955'       // Chữ phụ trên nền sáng (đạt AA)
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Noto Serif"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'serif'],
        sans: ['Inter', '"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      letterSpacing: { label: '0.22em' }
    }
  }
};
