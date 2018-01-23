var gulp = require('gulp');

gulp.task('styles', function() {

	return gulp.src('./app/assets/css/build/styles.css')
		.pipe(gulp.dest('./app/assets/css'));
});