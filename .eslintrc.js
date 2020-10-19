module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: [
    'vuetify'
  ],
  rules: {
    'vue/no-unused-vars': 1,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/custom-event-name-casing': 0,
    'vue/return-in-computed-property': 0,
    'vue/no-async-in-computed-properties': 0,
    'import/no-dynamic-require': 0,
    'prefer-template': 0,
    'func-names': 0,
    'camel-case': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'consistent-return': 0,
    'global-require': 0,
    'max-len': 0,
    'no-unused-vars': 0,
    'no-plusplus': 0,
    'prefer-destructuring': 0,
    'no-unused-expressions': 0,
    'no-param-reassign': 0,
    'no-alert': 0,
    'no-restricted-globals': 0
  }
};
