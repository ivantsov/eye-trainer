module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
  },
  rules: {
    'prettier/prettier': 'error',

    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^render.+$/',
          'render',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
        ],
      },
    ],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['webpack/**'],
        optionalDependencies: false,
      },
    ],

    'jsx-a11y/media-has-caption': 'off',
  },
};
