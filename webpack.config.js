const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [{
  mode: 'production',
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/server'),
  },
  externals: [nodeExternals()],
},
{
  mode: 'production',
  target: 'web',
  entry: './src/client/index.js',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'One',
      filename: 'index.html',
    }),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/client'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    }],
  },
}];
