module.exports = [
	{
		test: /\.js?$/,
		exclude: /(node_modules|bower_components|public)/,
		loaders: ['react-hot']
	},
	{
		test: /\.js?$/,
		exclude: /(node_modules|bower_components|public)/,
		loader: 'babel',
		query: {
		  presets: ['es2015', 'react'],
		  plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
		}
	},
	{
		test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
		exclude: /(node_modules|bower_components)/,
		loader: "file"
	},
	{
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /(node_modules|bower_components)/,
		loader: "file?limit=10000&mimetype=image/svg+xml&name=[name].[hash].[ext]"
	},
	{
		test: /\.gif/,
		exclude: /(node_modules|bower_components)/,
		loader: "file?limit=10000&mimetype=image/gif&name=[name].[hash].[ext]"
	},
	{
		test: /\.jpg/,
		exclude: /(node_modules|bower_components)/,
		loader: "file?limit=10000&mimetype=image/jpg&name=[name].[hash].[ext]"
	},
	{
		test: /\.ico/,
		exclude: /(node_modules|bower_components)/,
		loader: "file?limit=10000&mimetype=image/ico&name=[name].[hash].[ext]"
	},
	{
		test: /\.png/,
		exclude: /(node_modules|bower_components)/,
		loader: "file?limit=10000&mimetype=image/png&name=[name].[hash].[ext]"
	}
];
