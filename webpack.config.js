module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "AJ-Try.min.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
