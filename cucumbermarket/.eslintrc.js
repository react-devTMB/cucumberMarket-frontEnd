module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }],
    'arrow-parens': [2, 'always'],
    'no-unused-vars': ['off'],
    'no-console': ['off'],
    'import/prefer-default-export': ['off'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': ['off'],
    'no-underscore-dangle': ['off'],
    'no-param-reassign': ['off'],
    // eslint-disable-next-line global-require
    'linebreak-style': 0,
    'arrow-body-style': 0,
    'quotes': ['off', 'single'],
    'indent': ['warn', 2, { ignoredNodes: ['JSXElement'] }],
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }],
    'jsx-a11y/label-has-associated-control': 'off',
    'max-len': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.', 'src'],
      },
    },
  },
};
