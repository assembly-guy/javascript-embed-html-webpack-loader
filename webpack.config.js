const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MarkupWebpackkPlugin = require('./loaders/markup.js');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: { 
    rules: [
      {
        test: /\.js$/,
        use: [
          {loader: path.resolve(__dirname, './loaders/markup.js'),}
        ]
      }
    ]
  },
  plugins:[
  ],
  watch: true,
};
