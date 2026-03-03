import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './docs/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        base: '#061124',
        electric: '#3182f6',
        violet: '#7f5af0'
      },
      boxShadow: {
        glow: '0 0 35px rgba(49,130,246,0.35)'
      }
    }
  },
  plugins: []
};

export default config;
