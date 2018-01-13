const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entries: './src/index',
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
  },
  rules: {
    js: {
      test: /\.js$/,
      include: path.resolve('./src'),
      use: ['babel-loader'],
    },
    css: {
      test: /\.css$/,
      use: [{
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
          minimize: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-cssnext')(),
          ],
        }
      }],
    },
    file: {
      test: /\.(wav)$/,
      use: ['file-loader']
    }
  },
  plugins: {
    clean: new CleanWebpackPlugin([
      'dist',
    ], {
      root: path.resolve(),
    }),
    html: new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  },
};