const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_, { mode }) => ({
  entry: {
    "stylekit": [
      path.resolve(__dirname, 'src/stylekit.js'),
      path.resolve(__dirname, 'src/css/main.scss')
    ],
    "web-components": [
      path.resolve(__dirname, 'src/web-components.js'),
      path.resolve(__dirname, 'src/css/main.scss')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: ['SK', '[name]'],
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  optimization: {
    minimize: false,
  },
  externals: {},
  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
        ],
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
      {
        test: /\.(svg)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000000,
            },
          },
        ],
      }
    ],
  },
  resolve: {
    alias: {
      "react": 'preact/compat',
      "react-dom": 'preact/compat',
      '@Components': path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
});
