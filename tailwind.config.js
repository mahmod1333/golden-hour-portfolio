/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        cream: { DEFAULT: '#FFF4E6', deep: '#FFEAD1' },
        peach: { DEFAULT: '#FFE0C2', soft: '#FFF0E0' },
        sunset: { DEFAULT: '#FF8A4C', hover: '#FF752E' },
        coral: '#FF6F61',
        gold: '#FFC857',
        rose: '#F4A8A0',
        espresso: '#3B2A20',
        terracotta: '#6B4E3D',
        warmdark: {
          bg: '#2A1B14',
          surface: '#38241B',
          surface2: '#473025',
          border: '#573C2F',
          text: '#FDF0E4',
          muted: '#D4B8A5',
        },
      },
      borderRadius: { '4xl': '2rem', '5xl': '2.5rem' },
      animation: {
        blob: 'blob 14s infinite alternate ease-in-out',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'spin-slow': 'spin 24s linear infinite',
        marquee: 'marquee 25s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '33%': { transform: 'translate(25px, -35px) scale(1.08) rotate(45deg)', borderRadius: '40% 60% 70% 30% / 40% 40% 60% 55%' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95) rotate(90deg)', borderRadius: '70% 30% 50% 50% / 30% 60% 40% 70%' },
          '100%': { transform: 'translate(0px, 0px) scale(1) rotate(180deg)', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(calc(-50% - 0.5rem))' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
      },
    },
  },
};
