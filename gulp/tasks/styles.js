var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	cssimport = require('postcss-import'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	autoprefixer = require('autoprefixer');

gulp.task('styles', function() {

	return gulp.src('./app/assets/css/build/styles.css')
		.pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/assets/css'));
});