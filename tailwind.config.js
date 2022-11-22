/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pageElements/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      desktop: { max: '1460px' },
      laptop: { max: '1024px' },
      tablet: { max: '768px' },
      mobile: { max: '480px' },
    },
    // fontSize: {
    //   // If necessary, add more font sizes
    //   xs: ['1rem', '1.25rem'],
    //   sm: ['1.25rem', '1.5rem'],
    //   base: ['1.75rem', '2rem'],
    //   xl: ['2.25rem', '2.5rem'],
    //   '2xl': ['2.75rem', '2.75rem'],
    //   // '3xl': '1.953rem',
    //   // '4xl':
    //   // '5xl': ['2.75rem', '2.75rem'],
    //   '10xl': ['8rem', '8rem'],
    // },
    extend: {
      fontSize: {
        '8xl': ['5rem', '5rem'],
        '9xl': ['7rem', '7rem'],
        '10xl': ['9rem', '9rem'],
      },
      width: {
        'width-clamp': 'var(--width-clamp)',
      },
      margin: {
        'width-clamp': 'calc((100% - var(--width-clamp)) / 2)',
      },
      padding: {
        'width-clamp': 'calc((100% - var(--width-clamp)) / 2)',
      },
      colors: {
        floodgate: 'var(--floodgate)',
        'floodgate-dark': 'var(--floodgate-dark)',
        'off-black': 'var(--off-black)',
        'off-white': 'var(--off-white)',
        gray: 'var(--gray)',
        'light-gray': 'var(--light-gray)',
        'dark-gray': 'var(--dark-gray)',
        'error-color': 'var(--error-color)',
      },
    },
  },
};
