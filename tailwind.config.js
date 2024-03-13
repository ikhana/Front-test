module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'cybernoir': {
          '50': '#fdf8f3',
          '100': '#f6e8dc',
          '200': '#ecd1b8',
          '300': '#e1b994',
          '400': '#d6a170',
          '500': '#cc8a4c',
          '600': '#b3733e',
          '700': '#99602f',
          '800': '#804e21',
          '900': '#663d16'
        },
        'angryduck': {
          '50': '#fff7e6',
          '100': '#ffeccc',
          '200': '#ffda99',
          '300': '#ffc766',
          '400': '#ffb533',
          '500': '#ffa300',
          '600': '#cc8400',
          '700': '#996300',
          '800': '#664200',
          '900': '#332100'
        },
        'marketing': '#f57c00',
        'liquidity': '#ffb74d',
        'presale': '#ffe0b2'
      },
      backgroundImage: {
        'cybernoir-gradient': 'linear-gradient(to bottom, var(--tw-color-opacity, #37201F) 20%, var(--tw-color-opacity, #6E5517) 100%)',
      },
      boxShadow: {
        'glow': '0 4px 6px rgba(255, 163, 0, 0.5)',
        'soft-glow': '0 2px 8px rgba(255, 163, 0, 0.2)',
        'button-glow': '0 0 15px 5px rgba(255, 163, 0, 0.6)'
      },
      fontFamily: {
        sans: ['"Exo 2"', 'sans-serif'], // Suggesting Exo 2 for a techy and modern feel
        display: ['"Bebas Neue"', 'sans-serif'] // Bebas Neue for bold, attention-grabbing headings
      },
      borderRadius: {
        '4xl': '2rem'
      },
      transitionProperty: {
        'colors': 'background-color, color, border-color, fill, stroke',
        'opacity': 'opacity',
        'transform': 'transform'
      },
      transitionTimingFunction: {
        'ease-in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        'ease-out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-in': 'scale-in 0.5s ease-in-out',
        'slide-in-bottom': 'slide-in-bottom 0.5s ease-out'
      }
    }
  },
  plugins: []
}
