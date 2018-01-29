var gulp = require('gulp'),
	webpack = require('webpack');

/* gulp.task('scripts', ['modernizr'], function(callback) { */
/* presence of modernizr dependency causes permission error */
gulp.task('scripts', ['modernizr'], function(callback) {

	/*console.log("scripts");*/

	webpack(require('../../webpack.config.js'), function(err, stats) {
		/*console.log("webpack then callback")*/


		if (err) {
			console.log(err.toString());
		}
		console.log(stats.toString());
		/* 
			Will tell Gulp that webpack has completed. "Webpack will
			Call Back Gulp" as soon as webpack finishes.
		*/
		callback();

	});

});