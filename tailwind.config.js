/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'servicebg': 'rgb(46, 149, 143, 0.3)',
      'aboutbg': 'rgb(31, 33, 33, .7)',
      'text-servicebg': 'rgb(46, 149, 143, 0.1)',
      'main-text-color': '#424242',
      'button-bg-color': '#597C7A',
      'white': '#ffffff',
      'button-hover-color': '#1D3D3B',
      'link-col': '#3D4BCB'
    },
    boxShadow: {
      'err-shadow': 'inset 5px -5px 20px 0px #1f323b'
    },
   
    fontSize: {
      '4xl': '40px',
      'text-base': '16px',
      'text-18': '18px',
      'text-xs': '14px',
      'text-1xl': '20px',
      'text-2xl': '29px',
    },

    extend: {
      backgroundImage: {
        'footer-texture': "url('/images/clining.png')"
      },
      height: {
        '128': "calc(100vh - 200px)",
        '80': 'calc(100vh - 80px)',
        'header-h': '200px',
      },
      width: {
        'card': 'calc(100% / 4 - 0.75rem)',
        'sm-card': 'calc(100% / 2 - 0.75rem)',
        'md-card': 'calc(100% / 3 - 0.75rem)',
        'lg-card': 'calc(100% / 4 - 0.75rem)'
      },

      colors: {
        'outline-white': '#ffffff',
      },
      margin: {
        'ul-mt': '-76px',
      }
    },
  },
  plugins: [],
}

