var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	cssimport = require('postcss-import'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	autoprefixer = require('autoprefixer'),
	mixins = require('postcss-mixins'),
	hexrgba = require('postcss-hexrgba');

/******************************************************************************/
/******************************************************************************/


/*********************** 
	CSS Related Tasks
 ***********************/
gulp.task('styles', function() {

	console.log("styles");

	return gulp.src('./src/assets/css/styles.css')
		.pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./tmp/assets/css'));
});