// .eslintrc.js
module.exports = {
  env: {
      browser: true,
      es2021: true,
      node: true // Adiciona suporte para sintaxe do Node.js
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true
      },
      ecmaVersion: 12,
      sourceType: 'module'
  },
  plugins: [
      'react',
      '@typescript-eslint'
  ],
  rules: {
      'no-undef': 'off' // Desabilita a regra que causa o erro 'module' is not defined
  }
};
