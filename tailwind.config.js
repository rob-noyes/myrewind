module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        iconPrimary: '#616161',
        textPrimary: '#1BB6E7',
        textSecondary: '#BCBCBC',
        primary: '#454545',
        secondary: '#1F1F1F',
        tertiary: '#1A1A1A',
        navcolor: '#121212',
      },
      backgroundImage: {
        backdrop: 'url(https://image.tmdb.org/t/p/w500/)',
      },
      borderRadius: {
        half: '50%',
      },
      height: {
        112: '28rem',
        120: '30rem',
        search: '800px',
      },
      width: {
        searchResult: '1000px',
      },
      margin: {
        search: '20%',
      },
      boxShadow: {
        bg: '0 0 0 9999px rgba(0, 0 ,0 , 0.8)',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
