/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0d1b2a',
          800: '#112236',
          700: '#162d46',
          600: '#1a3654',
        },
        teal: {
          DEFAULT: '#00b894',
          light: '#00d4aa',
          dark: '#009b7d',
        },
        green: {
          cta: '#22c55e',
          kiff: '#1d8659',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(180deg, #0d1b2a 0%, #112236 100%)',
        'teal-gradient': 'linear-gradient(135deg, #0d3b2e 0%, #0a2a3d 100%)',
      },
    },
  },
  plugins: [],
};
