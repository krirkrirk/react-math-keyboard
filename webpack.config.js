const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry:
      argv.mode === "development" ? "./examples/home.tsx" : "./src/index.tsx",
    // entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "./dist"),
      filename: "react-math-keyboard.js",
      library: "MathInput",
      libraryTarget: "umd",
      umdNamedDefine: true,
      // libraryExport: "default",
      // globalObject: this,
      globalObject: `typeof self !== 'undefined' ? self : this`,
      publicPath: "",
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    devServer: { static: path.join(__dirname, "src") },
    // target: "node",
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
          test: /\.(ttf|eot|woff|woff2|otf|svg)$/,
          loader: "file-loader",
          options: {
            name: "font/[name].[ext]",
          },
        },
        {
          test: /\.css$/i,
          // include: path.join(__dirname, "src"),
          use: ["style-loader", "css-loader"],
        },
        {
          test: /mathquill\.css$/,
          loader: "string-replace-loader",
          options: {
            search: "@font-face {(.|\n)+?}",
            replace:
              "@font-face {\n" +
              "  /* Heavy fonts have been removed */\n" +
              "  font-family: Symbola;\n" +
              // '  src: url("font/Symbola.woff2") format("woff2"), url("font/Symbola.woff") format("woff");\n' +
              // '  src: url("font/Symbola.ttf") format("truetype");\n',
              "}",
            flags: "g",
          },
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
