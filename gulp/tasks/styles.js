var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	cssimport = require('postcss-import'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	autoprefixer = require('autoprefixer'),
	mixins = require('postcss-mixins'),
	hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {

	return gulp.src('./app/assets/css/build/styles.css')
		.pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/assets/css'));
});