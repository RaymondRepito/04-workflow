var gulp = require('gulp'),
	watch = require('gulp-watch');


gulp.task('watch', function() {

	watch('./app/index.html', function() {
		console.log("./app/index.html changed event. BrowserSync here.");
	});

	watch('./app/assets/css/**/*.css', function() {
		console.log("./app/assets/styles/**/*.css changed event. PostCSS or SASS here.");
	});

});