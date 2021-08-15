module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	globals: {
		exports: true,
		module: true,
		process: true,
		require: true,
		__dirname: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers', 'prettier'],
	rules: {
		// Syntax
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		// Typescript
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-namespace': 'off',
		// import-helpers
		'import-helpers/order-imports': [
			'warn',
			{
				newlinesBetween: 'always',
				groups: [
					'module',
					'/^@app/',
					'/^@domain/',
					'/^@infra/',
					'/^@main/',
					['parent', 'sibling', 'index'],
				],
				alphabetize: { order: 'asc', ignoreCase: true },
			},
		],
	},
};
