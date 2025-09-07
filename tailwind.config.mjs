// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  theme: {
    extend: {
      // Tus extensiones de tema aquí
    },
  },
  plugins: [],
  // 👇 Esta es la línea clave
  darkMode: 'class', 
}