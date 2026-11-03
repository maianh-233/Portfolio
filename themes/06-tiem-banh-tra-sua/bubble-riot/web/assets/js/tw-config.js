/* BUBBLE RIOT — Tailwind CDN config. One source of truth for colour + type. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        riot: '#FF5A1F',
        zap: '#FFE83D',
        cherry: '#F22945',
        ink: '#181818',
        paper: '#FFFDF7',
        bone: '#F3E9D2',
        smoke: '#6B655C'
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'system-ui', 'sans-serif'],
        body: ['Archivo', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        hard: '6px 6px 0 0 #181818',
        'hard-sm': '3px 3px 0 0 #181818',
        'hard-lg': '10px 10px 0 0 #181818',
        'hard-paper': '6px 6px 0 0 #FFFDF7',
        'hard-zap': '6px 6px 0 0 #FFE83D'
      }
    }
  }
};
