import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mare-primary': '#0077B6',
        'mare-dark': '#023E8A',
        'mare-light': '#CAF0F8',
        'mare-accent': '#FF6B35',
        'mare-white': '#FAFAFA',
        'mare-text': '#1A1A2E',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
