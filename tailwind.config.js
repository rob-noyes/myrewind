module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#454545',
        iconPrimary: '#616161',
        textPrimary: '#1BB6E7',
        textSecondary: '#BCBCBC',
        secondary: '#1F1F1F',
        navcolor: '#121212',
      },
      backgroundImage: {
        backdrop: 'url(https://image.tmdb.org/t/p/w500/)',
      },
      borderRadius: {
        half: '50%',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
