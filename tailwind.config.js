module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'cybernoir': {
          '50': '#f3f8fd',
          '100': '#e6f1fc',
          '200': '#b8daf8',
          '300': '#8ac2f5',
          '400': '#5caaf1',
          '500': '#2e91ee',
          '600': '#2677c7',
          '700': '#1f5d9f',
          '800': '#174478',
          '900': '#102c51'
        },
        'coolgray': {
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#1f2937',
          '900': '#111827'
        },
        'marketing': '#f57c00',
        'liquidity': '#ffb74d',
        'presale': '#ffe0b2'
      },
      backgroundImage: {
        'cybernoir-gradient': 'linear-gradient(to bottom, var(--tw-color-opacity, #8ac2f5) 20%, var(--tw-color-opacity, #2e91ee) 100%)',
      },
      boxShadow: {
        'glow': '0 4px 6px rgba(46, 145, 238, 0.5)',
        'soft-glow': '0 2px 8px rgba(46, 145, 238, 0.2)',
        'button-glow': '0 0 15px 5px rgba(46, 145, 238, 0.6)'
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif']
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