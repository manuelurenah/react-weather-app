var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080',
  		'webpack/hot/only-dev-server',
		'./app/src/index.jsx'
	],
	output: {
    	path: __dirname + '/dist',
    	filename: "index_bundle.js"
  	},
	module: {
		loaders: [{
			test:/\.jsx?$/,
			exclude: [/node_modules/, /bower_components/],
			loaders: ['react-hot', 'babel-loader']
		}]
	},
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
	plugins: [HTMLWebpackPluginConfig]
};
