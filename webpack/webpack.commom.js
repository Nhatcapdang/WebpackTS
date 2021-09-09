const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// eslint-disable-next-line functional/immutable-data
module.exports = {
  // mode defaults to 'production' if not set, overwrite dev or prod
  mode: 'development',

  // This is unnecessary in Webpack 5, because it's the default.
  // However, react-refresh-webpack-plugin can't find the entry without it.
  // path: path.resolve(__dirname, '..','../build'),
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    // Another case to customize output filename is to emit some kind of assets to a specified directory
    // https://webpack.js.org/guides/asset-modules/
    // [hash] stands for random number and alphabet
    // [ext] stands for Filename Extension .png, .jpg, .html,...
    // [query] === images
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        // webpacck 4 need loader, 5 just need 'asset/resource'
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        // webpacck 4 need loader, 5 just need 'asset/inline'
        type: 'asset/inline',
      },
      //   {
      //     // generator a folder contain HTML
      //     test: /\.html/,
      //     type: 'asset/resource',
      //     generator: {
      //       filename: 'static/[hash][ext][query]',
      //     },
      //   },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  resolve: {
    // priority search order
    extensions: ['.tsx', '.ts', '.js'],
  },
}
