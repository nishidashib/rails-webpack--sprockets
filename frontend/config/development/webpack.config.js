module.exports = {
  devtool: 'inline-source-map',
  entry: {
    application: './src/javascripts/application.js',
  },
  output: {
    path: '../app/assets/javascripts',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['react', 'es2015','es2016', 'stage-2']
        }
      }
    ]
  }
}
