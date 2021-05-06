const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  
//   plugins: [
//     new webpack.DefinePlugin({
//         'CANVAS_RENDERER': JSON.stringify(true),
//         'WEBGL_RENDERER': JSON.stringify(true)
//     })
// ]
};