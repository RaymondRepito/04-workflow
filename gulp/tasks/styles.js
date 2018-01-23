var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	cssimport = require('postcss-import');

gulp.task('styles', function() {

	return gulp.src('./app/assets/css/build/styles.css')
		.pipe(postcss([cssimport]))
		.pipe(gulp.dest('./app/assets/css'));
});