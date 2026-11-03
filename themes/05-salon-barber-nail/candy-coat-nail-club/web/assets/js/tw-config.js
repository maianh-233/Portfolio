/* CANDY COAT NAIL CLUB — tailwind.config dùng chung cho mọi trang */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        pop: { DEFAULT: '#F0529C', soft: '#F77DB6' },   /* Bubblegum Fuchsia — màu nhận diện */
        butter: '#FFE58A',                               /* Butter Yellow */
        baby: '#A9D9F7',                                 /* Baby Blue */
        cream: '#FFFDF9',                                /* Clean White */
        ink: '#242124',                                  /* Ink Black */
        blush: '#FFD8E8'                                 /* Soft Pink */
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        body: ['"Bricolage Grotesque"', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
        accent: ['"Playfair Display"', 'Georgia', 'system-ui', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif']
      },
      boxShadow: {
        hard: '5px 5px 0 #242124',
        'hard-lg': '9px 9px 0 #242124',
        'hard-sm': '3px 3px 0 #242124'
      },
      borderWidth: { 3: '3px' }
    }
  }
};
