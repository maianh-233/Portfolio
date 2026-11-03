/* NOCTURNE — cấu hình Tailwind dùng chung cho mọi trang (màu theo vai trò, font) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        midnight: '#153C40', // Midnight Teal — màu nhận diện chính
        petrol: '#28545A',   // Petrol Blue — section phụ, chuyển tiếp
        plum: '#594653',     // Muted Plum — điểm nhấn hiếm
        mist: '#B8C3C4',     // Silver Mist — đường phân cách, nhãn nhỏ
        moon: '#E7E8E2',     // Moonstone — chữ sáng, section sáng
        charcoal: '#20282A'  // Deep Charcoal — nền tối thay đen
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(.16,1,.3,1)'
      }
    }
  }
};
