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
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        accent: 'var(--accent)',
        'accent-dk': 'var(--accent-dk)',
        white: 'var(--white)',
        gray: 'var(--gray)',
        border: 'var(--border)',
        'mare-primary': '#0077B6',
        'mare-dark': '#023E8A',
        'mare-light': '#CAF0F8',
        'mare-accent': '#FF6B35',
        'mare-white': '#FAFAFA',
        'mare-text': '#1A1A2E',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section-py': '5rem',
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        pill: '999px',
      },
    },
  },
  plugins: [],
};

export default config;
