module.exports = {
  // https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    // ES6, ES5, ES2015,... not prefix
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    // npm i package
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    // config prettier
    'plugin:prettier/recommended',
    'plugin:prettier/@typescript-eslint',
  ],
  rules: {
    // name package/rules
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  // To report unused eslint-disable comments, use the reportUnusedDisableDirectives setting. For example:
  reportUnusedDisableDirectives: true,
}
