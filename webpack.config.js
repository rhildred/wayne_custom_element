const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = require('app-root-path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    mfe: __dirname + '/src/main',
    sw: __dirname + '/src/sw',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Micro-frontend Wordpress',
      inject: false,
      // Load a custom template (lodash by default)
      template: 'index.html'
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.m?js/,
        type: "javascript/auto",
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
      path: require.resolve('path-browserify'),
      process: require.resolve('process/browser'),
      stream: require.resolve('readable-stream'),
      url: require.resolve('url'),
      util: require.resolve('util'),
    },
  },
  externals: {
    fs: 'window.fs',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(root.path, 'dist'),
    publicPath: "/wayne_custom_element/"
  },
  devServer: {
    port: 9876,
    hot: false,
    historyApiFallback: true
  },
};