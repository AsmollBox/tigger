// var extractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  // 入口
  entry: './src/script/app.js',

  // 出口
  output: {
    path: __dirname + '/build',
    filename: 'app.js'
  },

  // webserver服务器
  devServer: {
    contentBase: './build',
    host: 'localhost',
    port: 7000
  },

  //模块
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      // {
      //   test: /\.css$/,
      //   loader: extractTextPlugin.extract({

      //   })
      // },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
  // //插件
  // plugins:[
  //   new extractTextPlugin({
  //     filename:'app.css',
  //     allChunks:true,
  //     disable:false
  //   })
  // ]
}
