import type { Config } from 'tailwindcss';

const config: Config = {
 content: [
  './app/**/*.{ts,tsx,js,jsx}',
  './components/**/*.{ts,tsx,js,jsx}',
]
,
  theme: {
    extend: {
      colors: {
        vheron: {
          green: '#5E7F57',     // main background (from image)
          greenDark: '#4A6845', // darker panels
          gold: '#D4AF37',      // accents / borders
          cream: '#F5F1E8',     // text background
          charcoal: '#1C1C1C',  // footer / contrast
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
