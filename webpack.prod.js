const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production', // which loads TerserPlugin (-see https://webpack.js.org/guides/tree-shaking/)
  devtool: 'source-map', // We encourage you to have source maps enabled in production, as they are useful for debugging as well as running benchmark tests.
});

// TerserPlugin used by default in production mode for code minification,
// Minimize CSS - see https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
