const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  // define the entry point to webpack
  entry: path.resolve(__dirname, "src", "index.jsx"),
  // define the output folder and file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // define extension files
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  // define how to handle the files
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /nodule_modules/,
        // integration between babel~webpack
        use: "babel-loader",
      },
    ],
  },
};
