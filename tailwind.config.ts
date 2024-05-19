/** @type {import('tailwindcss').Config} */
export const colors = {
  "bs-blue": "#065985",
  "bs-brown": "#594445",
  "bs-accent": "#dad5d9",
  "bs-gray": "#808080",
  "bs-gold": " #ffc300",
  "bs-black": "#181818",
};

export default {
  content: ['./index.html', './src/**/*.{html,js,tsx,jsx}'],
  theme: {
    screens: {
      sm: '650px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['roboto', 'system-ui', 'ui-sans-serif'],
        serif: ['ui-serif'],
      },
      colors: colors,
      spacing: {
        'bs-max': '1400px',
      },
      keyframes: {
        fadein: {
          from: { scale: 0.95, opacity: 0.3 },
          to: { scale: 1, opacity: 1 },
        },
        fadeout: {
          from: { scale: 1, opacity: 1 },
          to: { scale: 0.95, opacity: 0.3 },
        },
      },
      animation: {
        fadein: 'fadein .4s ease-in-out',
        fadeout: 'fadeout .4s ease-in-out',
      },
    },
  },
};
