module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'usage',
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-export-default-from',
  ],
}
