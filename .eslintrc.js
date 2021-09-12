module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'info', 'error'],
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'es5',
        semi: false,
        jsxSingleQuote: true,
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
  },
}
