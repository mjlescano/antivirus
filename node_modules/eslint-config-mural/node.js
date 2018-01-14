module.exports = {
  env: {
    node: true
  },

  extends: [
    'eslint-plugin-node/lib/recommended'
  ].map(require.resolve),

  plugins: [
    'node'
  ],

  rules: {
    'node/exports-style': 0,
    'node/shebang': 0
  }
}
