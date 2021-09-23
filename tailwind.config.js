/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

function configs() {
  return {
    mode: 'jit',
    purge: {
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
      safelist: []
    },
    darkMode: false,
    theme: {
      screens: {
        xs: { min: '640px' },
        md: { min: '768px' },
        lg: { min: '1024px' },
        xl: { min: '1366px' }
      },
      extend: {
        backgroundColor: {
          'logo-cyan': '#6EEBFF',
          'logo-orange': '#FFAA00',
          'logo-yellow': '#FFE000',
          'logo-yellow-thin': '#FFFA50',
          'form-bg': '#2b2b2b',
          'content-bg': '#f2f2f2'
        },
        borderColor: {
          active: '#919191',
          'in-active': '#2b2b2b'
        },
        color: {
          bd: '#919191'
        },
        gradientColorStops: {
          'logo-cyan': '#6EEBFF',
          'logo-orange': '#FFAA00',
          'logo-yellow': '#FFE000',
          'logo-yellow-thin': '#FFFA50'
        },
        keyframes: {
          letter: {
            '0%': {
              opacity: 0,
              transform: 'translate3d(-50%,0,0)'
            },
            '25%': {
              opacity: 1
            },
            '50%': {
              opacity: 1,
              transform: 'translate3d(0%,0,0)'
            },
            '100%': {
              opacity: 0,
              transform: 'translate3d(50%,0,0)'
            }
          },
          'letter-once': {
            '0%': {
              opacity: 0,
              transform: 'translate3d(-50%,0,0)'
            },
            '50%': {
              opacity: 1
            },
            '100%': {
              opacity: 1,
              transform: 'translate3d(0%,0,0)'
            }
          },
          'fade-in-out': {
            '0%': { opacity: 0 },
            '10%': { opacity: 1 },
            '90%': { opacity: 1 },
            '100%': { opacity: 0 }
          },
          shadow: {
            '0%': {
              boxShadow: '0px 0px 0 rgba(0,0,0,0.16)'
            },
            '100%': {
              boxShadow: '-20px 20px 5px rgba(0,0,0,0.16)'
            }
          }
        },
        animation: {
          letter: 'letter 3s cubic-bezier(0,0.21,0,0.99) infinite',
          'letter-once': 'letter-once 3s cubic-bezier(0,0.21,0,0.99) both',
          shadow: 'shadow 1s cubic-bezier(0,0.21,0,0.99) both',
          'fade-in-out': 'fade-in-out 1.5s cubic-bezier(0,0.21,0,0.99) both'
        },
        fontFamily: {
          app: ['hypatia-sans-pro', 'Sawarabi Gothic', 'sans-serif']
        },
        fontSize: {
          xxs: rem(10),
          xs: rem(12),
          sm: rem(14),
          md: rem(16),
          xl: rem(24),
          xxl: rem(32)
        }
      }
    },
    variants: {
      opacity: ['disabled']
    },
    plugins: [
      ({ addVariant, e }) => {
        const GroupHoverItems = ['group-hover:before', 'group-hover:after']
        GroupHoverItems.forEach((GroupHoverItem) => {
          addVariant(GroupHoverItem, ({ modifySelectors, separator }) => {
            modifySelectors(
              ({ className }) =>
                `.${e(`.group .${GroupHoverItem}${separator}${className}`)}`
            )
          })
        })
      }
    ]
  }
}

module.exports = configs()

function rem(size) {
  const _size = size / 16
  return `${_size}rem`
}
