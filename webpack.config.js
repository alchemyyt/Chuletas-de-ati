const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
  },
  mode:'production',
  resolve:{

    extensions:['.js'],
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles/'),//estilos
    }
  },
  module: {
    rules: [
      {
        test:/\.css$/i,
        use:[MiniCssExtractPlugin.loader,'css-loader'],
      },
    ]
  },
  plugins:[

    new HtmlWebpackPlugin({
      

      template: './public/index.html',
      
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/main.css'
    }),
  ],
  optimization:{
    minimize:true,
    minimizer:[
      new CssMinimizerPlugin(),
    ]
  }
}