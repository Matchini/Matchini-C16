module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
     backgroundColor: theme => ({
      'primary': '#3490dc',
      ...theme('colors'),
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'first':'#009191'
     }),
     textColor: theme => ({
      'primary': '#3490dc',
      ...theme('colors'),
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'first':'#009191'
     })
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
