// eslint.config.js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import astroParser from 'astro-eslint-parser'; // <--- IMPORTANTE: Importar el parser de Astro
import tsParser from '@typescript-eslint/parser'; // <--- IMPORTANTE: Importar el parser de TS
import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default tseslint.config(
	// Ignora directorios que no queremos analizar.
	{
		ignores: ['node_modules/', '.astro/', 'dist/'],
	},

	// Configuraciones base recomendadas
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginSvelte.configs['flat/recommended'],

	// --- CONFIGURACIÓN CLAVE PARA ASTRO + TYPESCRIPT ---
	// Esta sección es la que soluciona tu problema.
	{
		files: ['**/*.astro'], // Aplicar solo a archivos .astro
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				'astro/astro': true, // Habilita los globales de Astro (Astro, Fragment, etc.)
			},
			// 1. Usa el parser de Astro para entender la estructura del archivo .astro
			parser: astroParser,
			// 2. Pasa opciones a ese parser
			parserOptions: {
				// 3. ¡LA MAGIA! Le dice al parser de Astro que use el parser de TypeScript
				//    para analizar el contenido del bloque <script> (el frontmatter).
				parser: tsParser,
				extraFileExtensions: ['.astro'],
			},
		},
		rules: {
			// Aquí puedes poner reglas específicas que solo apliquen a Astro.
		},
	},
	// ---------------------------------------------------

	// Tu configuración personalizada global
	{
		rules: {
			'no-console': 'off',
		},
	}
);
