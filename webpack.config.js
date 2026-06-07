"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const child_process = require("child_process");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function git(command) {
  return child_process.execSync(`git ${command}`, { encoding: "utf8" }).trim();
}

module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/main.js",
    krlo: "./src/js/main-krlo.js",
    gbrso: "./src/js/main-gbrso.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html", chunks: ["main"] }),
    new HtmlWebpackPlugin({
      template: "./src/credits.html",
      filename: "credits.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/krlo.html",
      filename: "krlo.html",
      chunks: ["main", "krlo"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/gbrso.html",
      filename: "gbrso.html",
      chunks: ["main", "gbrso"],
    }),
    new webpack.EnvironmentPlugin({
      GIT_VERSION: git("describe --always"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader",
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.txt$/,
        use: [
          {
            loader: path.resolve("loaders/text-loader.js"),
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
