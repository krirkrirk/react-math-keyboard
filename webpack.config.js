const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    // entry: argv.mode === "development" ? "./examples/home.tsx" : "./src/index.tsx",
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "./dist"),
      filename: "react-math-keyboard.js",
      library: "MathInput",
      libraryTarget: "umd",
      libraryExport: "default",
      globalObject: "this",
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: { static: path.join(__dirname, "src") },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["ts-loader"],
        },
        {
          test: /\.css$/i,
          include: path.join(__dirname, "src"),
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
  };
};
