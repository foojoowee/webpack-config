const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        },
    },
    ]
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Replace 'dist' with the path to your desired content base directory
    },
  },
};

