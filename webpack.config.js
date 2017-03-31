var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./src/index.js",
	module: {
	loaders: [
		{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'stage-0'],
				plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
			}
		},
		{
			test: /\.(ttf|eot|svg|woff|woff2|swf)(\?.+)?$/,
			loader: 'file'
		},
		{
			test:   /\.(png|gif|jpe?g|svg)$/i,
			loader: 'url',
			query: {
				limit: 10000
			}
		},
		{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}
	]
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "client.min.js"
	},
	plugins: debug ? [
		new ExtractTextPlugin("client.bundle.css")
	] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
		new ExtractTextPlugin("client.bundle.css")
	],
};
