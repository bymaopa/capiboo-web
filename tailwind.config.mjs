/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'back-primary': '#ecff8d',
        'back-secondary': '#c8e6e7',
        'tip-primary': '#a5fdb9',
        'tip-secondary': '#c9bdf7',
        primary: '#e5eeef',
        secondary: '#e5defb',
        'base-100': '#f8fafc', 
        'base-200': '#1A202C', 
        'text-base': '#1A202C', 
        'text-dark': '#f8fafc',
      },
    },
  },
  plugins: [],
}
