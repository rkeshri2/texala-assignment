const path = require("path");
const htmlwepackplugin = require("html-webpack-plugin");
const minicssextractplugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: "./index.js",
  },
  output: {
    filename: ["name"].js,
    path: path.join(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: minicssextractplugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 5100,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlwepackplugin({
      template: "./index.html",
    }),
    new minicssextractplugin({
      filename: "style.css",
    }),
  ],
};
