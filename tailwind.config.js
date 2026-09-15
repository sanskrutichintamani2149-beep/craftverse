/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbf4',
          100: '#d7f7e4',
          200: '#b2edcc',
          300: '#7dddae',
          400: '#43c48a',
          500: '#1ea66f', // Primary DhanDrishti emerald/teal
          600: '#148759',
          700: '#126b48',
          800: '#12553b',
          900: '#114632',
          950: '#05271c',
        },
        navy: {
          50: '#f0f4f9',
          100: '#dbe5f1',
          200: '#bcd0e6',
          300: '#8eb3d6',
          400: '#5991c2',
          500: '#3875af',
          600: '#285d93',
          700: '#214a77',
          800: '#1e3f64',
          900: '#0f172a',
          950: '#090d16',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
