const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve('./', 'dist'),
    publicPath: './',
    filename: 'js/bundle.js',
  },

  devServer: {
    inline: true,
    port: 3333,
    publicPath: '/',
    contentBase: path.join(__dirname, '../public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'style.css',
    }),
  ],
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@images': path.resolve('src/static/images'),
    },
  },
  // externals:{
  //   //可以把外部的变量或模块加载进来,比如cdn引入的jquery,想要按需模块化引入
  //    'jquery':'window.jQuery'
  // },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[hash:8].[ext]',
            },
          },
          // 'file-loader'
        ],
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          // {
          //   loader: 'css-loader?modules',
          //   options: { importLoaders: 2 },
          // },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              // minimize: true,
              less: true,
              localIdentName: '[local]_[hash:base64:5]',
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')('last 100 versions')],
            },
          },
          {
            loader: 'less-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
            },
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // }
};
