var gulp = require('gulp'),
	modernizr = require('gulp-modernizr');
/*chmod = require('gulp-chmod'),*/

gulp.task('modernizr', function() {
	/*console.log('modernizr');*/

	/*.pipe(chmod(666))*/
	return gulp.src(['./src/assets/css/**/*.css', './src/assets/js/**/*.js'])

		.pipe(modernizr({
			"options": [
				"setClasses"
			]
		}))
		.pipe(gulp.dest('./tmp/assets/js'));
});