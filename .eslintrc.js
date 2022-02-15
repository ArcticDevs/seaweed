module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['*/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {},
}
