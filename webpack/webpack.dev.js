const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 4001,
    historyApiFallback: true,
  },
  stats: 'minimal',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Kiet'),
    }),
    // html css change but state not change, not reload again
    new ReactRefreshWebpackPlugin(),
  ],
}
