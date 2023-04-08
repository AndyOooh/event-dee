const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('daisyui')],
  // theme: {
  //   extend: {
  //     colors: {
  //       brandblue: colors.blue[500],
  //       // brandwhite: colors.['#F9F8F5'],
  //       brandred: colors.red[500],
  //     },
  //   },
  // },
  daisyui: {
    themes: [
      // 'coffee',
      {
        eventDee: {
          ...require('daisyui/src/colors/themes')['[data-theme=coffee]'],
          primary: '#F9F8F5',
          secondary: '#F2EFE8',
          base: 'white',
          'base-100': 'white',
          // "primary-focus": "mediumblue",
        },
      },

      // 'light',
      // 'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      
      // 'winter',
    ],
  },
};
