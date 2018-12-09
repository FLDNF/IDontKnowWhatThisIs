const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: 'production',
          TEST_1: 'production_TEST_1',
        },
      },
    }),
  ],
});
