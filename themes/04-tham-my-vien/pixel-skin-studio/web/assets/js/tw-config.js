/* PIXEL SKIN STUDIO - tailwind.config dùng chung cho mọi trang
   Phong cách: graphic hiện đại, tinh gọn (giữ màu cam / tím / lime / trắng).
   Viền mảnh, bóng mềm, bo góc vừa; điểm nhấn "pixel" vuông nhỏ thay sticker. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: '#FBFAF7',   // nền trắng
        ink: '#151515',     // chữ
        signal: '#FF5B1F',  // cam điện
        grape: '#7337FF',   // tím
        cobalt: '#7337FF',  // giữ tên preset, cùng giá trị tím
        acid: '#D4FF3F',    // xanh lime
        mist: '#EFEDF6'     // trung tính rất nhạt pha tím
      },
      fontFamily: {
        display: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        body: ['"Be Vietnam Pro"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      fontWeight: {
        bold: '600',
        extrabold: '600'
      },
      boxShadow: {
        pop: '0 1px 2px rgba(21,21,21,.05), 0 10px 28px -14px rgba(21,21,21,.22)',
        'pop-sm': '0 1px 2px rgba(21,21,21,.06)',
        'pop-lg': '0 30px 70px -30px rgba(21,21,21,.35)'
      },
      borderWidth: { 3: '1px' },
      borderRadius: {
        '2xl': '0.75rem',
        '3xl': '1rem'
      }
    }
  }
};
