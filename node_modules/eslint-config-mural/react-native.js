module.exports = {
  ecmaFeatures: {
    jsx: true
  },

  extends: [
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-airbnb/rules/react'
  ].map(require.resolve),

  plugins: [
    'react-native'
  ],

  rules: {
    'react-native/split-platform-components': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error'
  }
}
