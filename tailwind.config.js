module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}', './UI/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
     extend: {
       screens: {
      'betterhover': {'raw': '(hover: hover)'},
  },
  colors: {
    alt: '#f2aa3c',
    primary: '#212223'
  },
  
    transitionProperty: {
        height: 'height'
    
},
    
},
     maxWidth: {
      '2xl': '1024px',
      '3xl': '1500px'
    },
    fontSize: {
      'mini': '.6rem',
      'xtiny': '.71rem',
      'xs': '.75rem',
      'sm': '.920rem',
      'tiny': '.875rem',
      'nav': '.820rem',
      'events': '.970rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    },
  variants: {
    extend: {},
  },
  plugins: []
}