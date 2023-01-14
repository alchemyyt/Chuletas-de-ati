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
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
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
  devServer: {
    static: 
    {
      directory: path.join(__dirname, "dist"),
      watch: true,
    },
    watchFiles: path.join(__dirname, "./**"), //observa los cambios en todos nuestros archivos y actualiza el navegador
    compress: true,
    historyApiFallback: true,
    port: 3006,
    open: true, //Hace que se abra en el navegador
  }
}