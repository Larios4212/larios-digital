/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'orbit-reverse': 'orbit 25s linear infinite reverse',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'beam': 'beam 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        glow: { '0%, 100%': { opacity: '0.4' }, '50%': { opacity: '0.8' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        orbit: { from: { transform: 'rotate(0deg) translateX(var(--orbit-radius, 160px)) rotate(0deg)' }, to: { transform: 'rotate(360deg) translateX(var(--orbit-radius, 160px)) rotate(-360deg)' } },
        pulseSoft: { '0%, 100%': { opacity: '0.5', transform: 'scale(1)' }, '50%': { opacity: '1', transform: 'scale(1.05)' } },
        gradientShift: { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        beam: { '0%': { transform: 'translateX(-100%) skewX(-15deg)', opacity: '0' }, '50%': { opacity: '1' }, '100%': { transform: 'translateX(200%) skewX(-15deg)', opacity: '0' } },
      },
    },
  },
  plugins: [],
};
