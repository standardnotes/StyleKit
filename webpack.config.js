const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    "stylekit.js" : path.resolve(__dirname, 'src/js/Stylekit.js'),
    "stylekit.min.js" : path.resolve(__dirname, 'src/js/Stylekit.js'),
    "stylekit.css" : path.resolve(__dirname, 'src/css/main.scss'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name]',
    library: 'Stylekit',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimize: false //Update this to true or false
  },
  externals: {

  },
  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  module: {
    rules: [
      { test: /\.css$/, include: path.resolve(__dirname, 'src'), loader: 'style-loader!css-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            { loader: 'sass-loader', query: { sourceMap: false } },
          ],
          publicPath: '../'
        }),
      },
      {
        test: /\.js[x]?$/, include: [
          path.resolve(__dirname, 'src'),
        ], exclude: /node_modules/, loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    function() {
      this.plugin("done", function(stats) {
        if (stats.compilation.errors && stats.compilation.errors.length &&
          process.argv.indexOf("--watch") == -1) {
          console.log(stats.compilation.errors);
          process.exit(1);
        }
      });
    },

    new ExtractTextPlugin({ filename: './stylekit.css', disable: false, allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};
