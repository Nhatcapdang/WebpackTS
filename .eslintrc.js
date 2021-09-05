// eslint-disable-next-line functional/immutable-data
module.exports = {
  // https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    tsconfigRootDir: __dirname,
    // ES6, ES5, ES2015,... not prefix
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'], // Your TypeScript files extension
  //     parserOptions: {
  //       project: ['./tsconfig.json'], // Specify it only for TypeScript files
  //     },
  //   },
  // ],
  plugins: ['functional'],
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
    // 'plugin:functional/recommended',
    // 'plugin:functional/external-recommended',

    // config prettier
    // 'plugin:prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    // name package/rules
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'functional/immutable-data': 'error',
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
