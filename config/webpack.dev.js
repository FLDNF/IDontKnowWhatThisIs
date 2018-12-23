const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: '"development"',
          TEST_1: '"development_TEST_1"',
        },
      },
    }),
  ],
});
