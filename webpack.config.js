var path = require('path');
var webpack = require('webpack');

// Environment variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    // add this to remove the warnings and optimize to lessen size
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {

    modules: [
      __dirname,
      'node_modules',
      './app/components',
      './app/tests/components',
      './app/api'
    ],
    alias: {
      "app": path.resolve('app'),
      "applicationStyles": path.resolve('app/styles/app.scss'),
      "actions": path.resolve('app/actions/actions.jsx'),
      "reducers": path.resolve('app/reducers/reducers.jsx'),
      "configureStore": path.resolve('app/store/configureStore.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
