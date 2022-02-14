const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (_, { mode }) => ({
  entry: {
    stylekit: path.resolve(__dirname, 'src/stylekit.js'),
    components: path.resolve(__dirname, 'src/index.js'),
    'web-components': path.resolve(__dirname, 'src/web-components.js'),
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
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  externals: {
    preact: {
      commonjs: 'preact',
      commonjs2: 'preact',
      amd: 'preact',
      root: '_',
    },
  },
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
          MiniCssExtractPlugin.loader,
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
          presets: ['preact'],
          plugins: [
            ['@babel/plugin-proposal-class-properties'],
            ['@babel/plugin-transform-react-jsx', { pragma: 'h' }],
          ],
        },
      },
      {
        test: /\.(svg)(\?.*)?$/i,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              limit: 10000000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      '@Components': path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*.svg',
          to: 'icons',
          context: path.resolve(__dirname, 'src', 'assets', 'icons'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'stylekit.css',
    }),
  ],
});
