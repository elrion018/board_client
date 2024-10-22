const path = require("path");

module.exports = {
  // enntry file
  // entry: ["@babel/polyfill", "./src/js/write.js"],
  entry: {
    index: ["@babel/polyfill", "./src/js/index.js"],
    write: ["@babel/polyfill", "./src/js/write.js"],
    contents_page: ["@babel/polyfill", "./src/js/contents_page.js"],
    contents_edit_page: ["@babel/polyfill", "./src/js/contents_edit_page.js"],
    search_page: ["@babel/polyfill", "./src/js/search_page.js"],
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, "src/dist/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src/js")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-arrow-functions",
            ],
          },
        },
      },
    ],
  },
  devtool: "source-map",
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: "development",
};
