// .prettierrc.cjs
module.exports = {
  // --- Opciones de Estilo Básicas ---
  printWidth: 160,       // Ancho máximo de línea antes de saltar.
  tabWidth: 1,          // Número de espacios por tabulación.
  useTabs: true,       // Usar espacios en lugar de tabulaciones.
  semi: true,           // Poner punto y coma al final de las líneas.
  singleQuote: true,    // Usar comillas simples en lugar de dobles.
  trailingComma: 'es5', // Poner comas finales en arrays y objetos.

  // --- Integración con Plugins ---
  // Carga los plugins para que Prettier entienda Astro y Svelte. ¡Esta es la parte clave!
  plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte'],

  // --- Sobrescribir configuraciones para archivos específicos ---
  // Esto asegura que los archivos .astro usen el parser correcto.
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};