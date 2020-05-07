const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const babelMerge = require('babel-merge');

module.exports = {
  options: {
    root: __dirname
  },
  use: [
    airbnb({
      settings: {
        'import/resolver': 'babel-plugin-root-import'
      },
      eslint: {
        baseConfig: {
          rules: {
            'comma-dangle': ['error', 'never'],
            'no-plusplus': 'off',
            'import/extensions': 'off',
            'import/no-unresolved': 'off',
            'react/jsx-boolean-value': ['error', 'always'],
            'no-unused-expressions': [
              'error',
              { allowShortCircuit: true, allowTernary: true }
            ],
            'react/jsx-filename-extension': [
              1,
              { extensions: ['.js', '.jsx'] }
            ],
            'consistent-return': 'off'
          }
        }
      }
    }),
    react({
      html: {
        title: 'Pandino.ve'
      }
    }),
    jest(),
    neutrino => {
      neutrino.config.module
        .rule('compile')
        .use('babel')
        .tap(options =>
          babelMerge(
            {
              plugins: [[require.resolve('babel-plugin-root-import'), {}]]
            },
            options
          )
        );
    }
  ]
};
