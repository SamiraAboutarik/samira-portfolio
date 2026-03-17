/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'grad': 'grad 4s ease infinite',
        'orbit': 'orbit 6s linear infinite',
        'orbit2': 'orbit 9s linear infinite reverse',
        'wave': 'wave 1.5s ease-in-out infinite',
        'blink': 'blink 1s infinite',
        'fadeUp': 'fadeUp .7s ease forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        grad: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        orbit: {
          to: { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' },
        },
        wave: {
          '0%,100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
        blink: {
          '0%,49%': { opacity: 1 },
          '50%,100%': { opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(28px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
