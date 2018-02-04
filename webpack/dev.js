const webpack = require('webpack');
const {entries, output, rules, plugins} = require('./base');

module.exports = {
  entry: ['react-hot-loader/patch', entries],
  output,
  module: {
    rules: [
      rules.js,
      {
        ...rules.css,
        use: ['style-loader', ...rules.css.use],
      },
      rules.file,
    ],
  },
  plugins: [
    plugins.clean,
    plugins.html,
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval',
  devServer: {
    hot: true,
    contentBase: false,
    stats: 'minimal',
  },
};
