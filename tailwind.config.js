const plugin = require("tailwindcss/plugin")
// require("tailwind-scrollbar-hide"),

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    plugin(function({ addUtilities }) {
      addUtilities({     
        '.flip-card': {
          backgroundColor: 'transparent',
          width: '490px', //490=474, 495=479 diff. of 24
          height: '290px', //285=269, 290=274, 295=279
          perspective: '1000px',
          '&:hover': {
            '.flip-card-inner': {
              transform: 'rotateY(180deg)'
            }
          }
        },
        '.flip-card-inner': {
          position: 'relative',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          transition: 'transform 3s',
          transformStyle: 'preserve-3d',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        },
        '.flip-card-front': {
          position: 'absolute',
          width: '100%',
          height: '100%',
          '-webkit-backface-visibility': 'hidden',
          backfaceVisibility: 'hidden',
          backgroundColor: '#bbb',
          color: 'black',
          borderRadius: '0.5rem',
        },
        '.flip-card-back': {      // brings x-axis scroll bar on hovering last column element
          position: 'absolute',
          width: '100%',
          height: '100%',
          '-webkit-backface-visibility': 'hidden',
          backfaceVisibility: 'hidden',
          backgroundColor: '#06202A',
          // backgroundColor: '#2980b9',
          backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/fair.jpg)',
          color: 'white',
          transform: 'rotateY(180deg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: '0.5rem',
          padding: '1rem 2rem',
        }
      })
    })
  ],
}