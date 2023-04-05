const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry: argv.mode === "development" ? "./src/examples/home.tsx" : ["./src/index.tsx", "./Readme.md"],
    // entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "./dist"),
      filename: "react-math-keyboard.js",
      library: "MathInput",
      libraryTarget: "umd",
      // libraryExport: "default",
      // globalObject: "this",
      // publicPath: "",
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    devServer: { static: path.join(__dirname, "src") },
    externals:
      argv.mode !== "development"
        ? {
            react: {
              commonjs: "react",
              commonjs2: "react",
              amd: "React",
              root: "React",
            },
            "react-dom": {
              commonjs: "react-dom",
              commonjs2: "react-dom",
              amd: "ReactDOM",
              root: "ReactDOM",
            },
          }
        : {},

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["ts-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },

        {
          test: /\.css$/i,
          // include: path.join(__dirname, "src"),
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        // {
        //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        //   use: [
        //     {
        //       loader: "file-loader",
        //       options: {
        //         name: "[name].[ext]",
        //         outputPath: "fonts/",
        //       },
        //     },
        //   ],
        // },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
  };
};
