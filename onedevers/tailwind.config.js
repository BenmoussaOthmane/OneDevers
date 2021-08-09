// tailwind.config.js
module.exports = {
  corePlugins: {
   dropShadow: false,
  },
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        boxShadow: {
         '3xl': '0 35px 60px -15px rgba(0, 22, 149 , 0.2)',
        }
      },
    },
    variants: {
      extend: {
        padding: ['hover'],
        boxShadow: ['active'],
      },
    },
    plugins: [],
  }