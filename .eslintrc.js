module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'next',
		'next/core-web-vitals',
		'prettier',
		'plugin:sonarjs/recommended',
	],
	rules: {
		'react/no-unescaped-entities': 'off',
		'no-console': ['warn', { allow: ['error'] }],
		curly: 'error',
		'@typescript-eslint/no-unused-vars': [
			1,
			{ args: 'after-used', argsIgnorePattern: '^_' },
		],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/display-name': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'react/jsx-curly-brace-presence': [
			'warn',
			{
				props: 'never',
				children: 'never',
			},
		],
		//#region  //*=========== Unused Import ===========
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		//#endregion  //*======== Unused Import ===========
		//#region  //*=========== Import Sort ===========
		'simple-import-sort/exports': 'warn',
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					// ext library & side effect imports
					['^@?\\w', '^\\u0000'], // {s}css files
					['^.+\\.s?css$'], // Lib and hooks
					['^@/lib', '^@/hooks'], // static data
					['^@/data'], // components
					['^@/components', '^@/container'], // zustand store
					['^@/store'], // Other imports
					['^@/'], // relative paths up until 3 level
					[
						'^\\./?$',
						'^\\.(?!/?$)',
						'^\\.\\./?$',
						'^\\.\\.(?!/?$)',
						'^\\.\\./\\.\\./?$',
						'^\\.\\./\\.\\.(?!/?$)',
						'^\\.\\./\\.\\./\\.\\./?$',
						'^\\.\\./\\.\\./\\.\\.(?!/?$)',
					],
					['^@/types'], // other that didnt fit in
					['^'],
				],
			},
		], //#endregion  //*======== Import Sort ===========
	},
	globals: {
		React: true,
		JSX: true,
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
		{
			files: ['*.mdx'],
			extends: 'plugin:mdx/recommended',
			settings: {
				'mdx/code-blocks': true,
			},
		},
	],
};
