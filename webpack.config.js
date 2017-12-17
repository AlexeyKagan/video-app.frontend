var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'main.js'
  },
  resolve: {
    modules: ['node_modules']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./dist/main.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback:{
      index:'index.html'
    },
  },
};
