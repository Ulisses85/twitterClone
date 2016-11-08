// path is a Node.js core module to manipulate paths
const path = require('path');
// webpack-validator gives us a function that checks our syntax
const validate = require('webpack-validator');

// create some path constants for convenience
const PATH = {
  ENTRY: path.join(__dirname, 'src', 'index.js'),
  BUNDLE: path.join(__dirname, 'public', 'js')
};

module.exports = validate({
  // the index of the app
  entry: PATH.ENTRY,
  // where do we want to put the bundle
  output: {
    path: PATH.BUNDLE,
    filename: 'bundle.js'
  },
  // resolves extensions so that we don't have to write them in our require statements
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // generate a source map for better development experience
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        // transpile with the Babel loader every file ending in .js or .jsx
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
});
