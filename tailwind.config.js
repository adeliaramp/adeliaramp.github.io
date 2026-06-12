/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dusty-blue': '#8BAEC1',
        'dusty-rose': '#C9A0A0',
        cream: '#FAF7F2',
        'warm-gray': '#6B6560',
        charcoal: '#2C2825',
      },
      fontFamily: {
        // Font variables are set by next/font in app/layout.tsx
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-lora)', 'Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
