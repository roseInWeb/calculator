const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'asset/[name][ext]',
  },
  module: {
    rules: [
        {
            test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff(2)?|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new MiniCssExtractPlugin({filename: 'style.css'})
  ],
  devServer: {
    open: false,
    hot: true,
    port: 8080
  }
};