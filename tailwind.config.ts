/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#E8251A',
          dark: '#0F0F0F',
          cream: '#F5F0E8',
          gold: '#D4A853',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'flag-wave': 'flagWave 3s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        flagWave: {
          '0%, 100%': { transform: 'skewX(0deg) scaleX(1)' },
          '25%': { transform: 'skewX(-2deg) scaleX(0.98)' },
          '75%': { transform: 'skewX(2deg) scaleX(1.01)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
