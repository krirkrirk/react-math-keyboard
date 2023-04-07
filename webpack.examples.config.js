const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, "examples/src/index.html"),
  filename: "./index.html",
});

module.exports = {
  entry: path.resolve(__dirname, "examples/src/App.js"),
  output: {
    path: path.resolve(__dirname, "examples/dist"),
    filename: "script.js",
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  devtool: "source-map",
  plugins: [htmlPlugin],
};
