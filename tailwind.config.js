/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        blue: '#345FF6',
        gunmetal: '#253347',
        borders: '#D8E2E7',
        placeholder: '#c8ccd1',
        'dark-electric-blue': '#5E6E85'
      },
      gridTemplateColumns: {
        cards: 'repeat(2, 365px)'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    fontSize: {
      xl: '4rem', // 64px
      l: '3rem', // 48px
      m: '1.5rem', // 24px
      s: '1.25rem', // 20px,
      'body-m': '1rem', // 16px
      'body-s': '0.875rem' // 14px
    },
    lineHeight: {
      heading: '1.1',
      body: '1.5'
    },
    letterSpacing: {
      xl: '-3px',
      l: '-2.5px',
      m: '-1px',
      s: '-0.75px'
    },
    backgroundImage: {
      gradient: 'linear-gradient(315deg, #d6e6fe 0%, rgba(214, 250, 254, 0.07) 92.71%, rgba(214, 252, 254, 0) 100%)',
      'result-gradient': 'linear-gradient(90deg, #345FF6 0%, #587DFF 100%)',
      'gradient-cards': 'linear-gradient(315deg, rgba(214, 230, 254, 0.25) 0%, rgba(214, 252, 254, 0.00) 100%)',
      'pattern-line-left': 'url("/pattern-curved-line-left.svg")',
      'pattern-line-right': 'url("/pattern-curved-line-right.svg")'
    },
    borderRadius: {
      md: '12px',
      default: '16px',
      header: '0 0 35px 35px',
      result: '16px 100px 100px 16px',
      full: '50%'
    },
    boxShadow: {
      default: '16px 32px 56px 0px rgba(143, 174, 207, 0.25)'
    },
    screens: {
      md: '768px',
      xl: '1160px'
    }
  },
  plugins: []
}
