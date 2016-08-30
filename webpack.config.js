module.exports = {
  entry: './public/app/app.js',


  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'}
      //{test: /\.js$/, loaders: ['babel'], exclude: /node_modules/}
    ]
  },
  output: {
    filename: './public/app/bundle.js',
    publicPath: ''
  }
}
