//large javascript opject
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/client.js'
    ],
    output: {
        path: require('path').resolve('./dist'),
        filename:  'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        //needs to middleware within server
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                //use babel file in project directory or setup query
                query: {
                    presets: ['react','es2015','react-hmre'] //hot module reload 
                }
            }
        ]
    }
}
