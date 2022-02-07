import { defineConfig } from 'windicss/helpers'
import colors from 'material-colors-ts';

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  attributify: true,
  shortcuts: {
    btn: 'rounded-lg border border-gray-300 text-gray-100 bg-blue-500 px-4 py-2 m-2 inline-block hover:shadow',
  },
  theme: {
    extend: {
      colors: {
        ...colors,
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.grey,
        primary: {
          50: '#E9E6FD',
          100: '#CEC3FB',
          200: '#A79AF8',
          300: '#7A6FF7',
          400: '#5B4DF6',
          500: '#4724F5',
          600: '#351FF5',
          700: '#000FC3',
          800: '#121886',
          900: '#1F2262',
          DEFAULT: '#351FF5',
        },
      },
    },
  },
})
