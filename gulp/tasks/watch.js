var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();


gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function() {
		//console.log("./app/index.html changed event. BrowserSync here.");
		browserSync.reload();

	});

	watch('./app/assets/css/build/**/*.css', function() {
		//console.log("./app/assets/css/build/**/*.css changed event. PostCSS or SASS here.");

		gulp.start('cssInject'); // Run cssInject task
	});

});

// Run dependency tasks (i.e param 2; ex. 'styles' task found in 'gulp/tasks/styles.js') before 
// running the specified task (i.e. 'cssInject')
gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/assets/css/styles.css')
		.pipe(browserSync.stream());
});