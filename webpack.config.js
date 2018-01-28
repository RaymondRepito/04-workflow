// no need to install. already a part of node
// to be used to create an absolute path needed for path
const path = require('path');
/*const HtmlWebpackPlugin = require('html-webpack-plugin');*/

/* entry: which file to bundle (interpret) */
/* output: file to write the bundlED (interpretED) */
/* path: needs to be an absoulte path instead of a relative 
	path './tmp/assets/js' . we use path.resolve */
module.exports = {
	entry: "./src/assets/js/scripts.js",
	output: {
		path: path.resolve(__dirname, "./tmp/assets/js"),
		filename: "scripts.js"
	},
	module: {
		loaders: [
			/* 1st loader object */
			{

				/* name of the loader to use */
				loader: 'babel-loader',
				query: {
					/* which ECMAscript standard to use */
					presets: ['es2015']
				},

				/* test: /\.js$/ <-- tells to apply babel only to .js files and nothing else */
				test: /\.js$/,

				/* do not convert all. ex. jquery. COnvert only those .js we write ourselves */
				exclude: /node_modules/
			}
		]
	}
}

