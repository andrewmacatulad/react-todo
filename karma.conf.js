var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
  config.set({
    // Set the Browser
      browsers: ['Chrome'],
      // Set if it is run only once
      singleRun: true,
      // set what frameworks it will use
      frameworks: ['mocha'],
      // this will set the file you will test the ** and * will make you test .test.jsx files
      // example plue.test.jsx or app.test.jsx
      // this will be the one that will hold the test
      files: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/foundation-sites/dist/js/foundation.min.js',
        'app/tests/**/*.test.jsx'
      ],
      // this will specify on what you want to do with the test files
      // so with all the app/test/**/*.test.jsx you will run webpack/sourcemap
      // you use webpack so you can use require and
      // sourcemap so you when there are error in test it will not get the bundle.js but actual jsx files
      preprocessors: {
        'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
      },
      // reporters will show what pass and what fails
      reporters: ['mocha'],
      // this will test only for 5000 miliseconds or 5 seconds only so you will not be stuck
      client: {
        mocha: {
          timeout: '5000'
        }
      },
      // set the webpackconfig here
      webpack: webpackConfig,
      // you can set the webpack server here but we have not use webpack config so noinfo
      webpackServer: {
        noInfo: true
      }
  });
};
