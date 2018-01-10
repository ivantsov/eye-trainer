const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const {
  entries,
  output,
  rules,
  plugins,
} = require('./base');

module.exports = {
  entry: entries,
  output,
  module: {
    rules: [
      rules.js,
      {
        ...rules.css,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: rules.css.use,
        })
      },
      rules.file,
    ],
  },
  plugins: [
    plugins.clean,
    new ExtractTextPlugin('[name].[contenthash].css'),
    plugins.html,
    new UglifyJSPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        if (module.resource && (/^.*\.(css)$/).test(module.resource)) {
          return false;
        }

        return module.context && module.context.includes('node_modules');
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'manifest'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
