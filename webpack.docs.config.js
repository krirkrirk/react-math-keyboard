const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// const htmlPlugin = new HtmlWebPackPlugin({
//   template: path.resolve(__dirname, "docs"),

//   publicPath: "/",
// });

module.exports = {
  entry: path.resolve(__dirname, "docs/home.tsx"),
  output: {
    path: path.resolve(__dirname, "docs/dist"),
    filename: "script.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "docs"),
    ],
  },
  //   target: "web",
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
  // plugins: [htmlPlugin],
};
