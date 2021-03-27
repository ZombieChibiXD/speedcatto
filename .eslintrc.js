import prettierConfig from './.prettierrc.json';
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': [
      'error',
      prettierConfig
    ],
  },
}
