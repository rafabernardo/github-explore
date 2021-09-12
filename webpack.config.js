const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
     // extra css in separate files and define name file to different envs
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
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
      {
        test: /\.(scss|sass|css)$/,
        exclude: /nodule_modules/,
        // add support to css.modules and postCss
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              modules: { localIdentName: "[local]___[hash:base64:5]" },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
    ],
  },
};
