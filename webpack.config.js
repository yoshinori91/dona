module.exports = {
  entry: './public/app/app.js',

  output: {
    filename: './public/app/bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'}
    ]
  }
}
