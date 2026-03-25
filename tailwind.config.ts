import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        soft: '#475569',
        line: '#e2e8f0',
        brand: '#2563eb',
        accent: '#7c3aed',
        panel: '#f8fafc',
      },
    },
  },
  plugins: [],
};

export default config;
