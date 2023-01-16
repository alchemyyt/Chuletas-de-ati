const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
let htmlPageNames = ['html', 'css'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    filename: `pages/${name}.html`,
    template: `src/pages/${name}.html`,
  })
});
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
      '@styles': path.resolve(__dirname, 'src/styles/'),
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
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins:[

    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/main.css'
    }),
  ].concat(multipleHtmlPlugins),
  optimization:{
    minimize:true,
    minimizer:[
      new CssMinimizerPlugin(),
    ]
  }
}