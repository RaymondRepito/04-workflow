var gulp = require('gulp'),
	watch = require('gulp-watch');


gulp.task('watch', function() {

	watch('./app/index.html', function() {
		console.log("./app/index.html changed event. BrowserSync here.");
	});

	watch('./app/assets/css/build/**/*.css', function() {
		//console.log("./app/assets/css/build/**/*.css changed event. PostCSS or SASS here.");

		gulp.start('styles'); // Run styles task found in 'gulp/tasks/styles.js
	});

});