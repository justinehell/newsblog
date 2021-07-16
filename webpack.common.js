const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { EnvironmentPlugin } = require('webpack');
const { DefinePlugin } = require('webpack');
const dotenv = require('dotenv').config({ path: '.env' });

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
    detail: path.resolve(__dirname, './src/detail.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // determine the file location (path =  node js utility)
    filename: '[name].bundle.js', // --> name will be the same as the entry
    clean: true, // good practice to clean the /dist folder before each build, so that only used files will be generated
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // match files to loaders
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // build-in Asset Modules for images
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', // build-in Asset Modules for fonts
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['index'], // to add only index.bundle.js as script to index.html
      scriptLoading: 'blocking',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/detail.html'),
      filename: 'detail.html',
      chunks: ['detail'], // to add only detail.bundle.js as script to detail.html
      scriptLoading: 'blocking',
    }),
    // new EnvironmentPlugin({
    //   API_KEY: 'MySecretKey',
    //   BASE_URL: 'http://google.com',
    // }), // accessible via process.env.API_KEY
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed), // it will automatically pick up key values from .env file
    }),
  ],
};
