var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();


gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "tmp"
		}
	});

	/************************
		Image files
 	 ************************/
	watch(['./src/assets/img/**/*.jpg',
			'./src/assets/img/**/*.png',
			'./src/assets/img/**/*.ico'], function() {
		console.log("watch img");
		
		
		gulp.start('reloadBrowserSync-4-img');
	});

	/************************
		Sprite Icon files
 	 ************************/
	watch(['./src/assets/img/icons/**/*.svg'], function() {
		/*console.log("watch sprite icon files");*/
		
		
		gulp.start('icons');
	});

	/************************
		.html files
 	 ************************/
	watch('./src/index.html', function() {
		/*console.log("watch ./src/index.html");*/
		
		gulp.start('reloadBrowserSync-4-html');
		
	});

	/************************
		.css files
 	 ************************/
	/*watch('./app/assets/css/build/asterisk.css', function() */
	watch('./src/assets/css/**/*.css', function() {
		console.log("watch ./src/css/asterisk.css");

		gulp.start('cssInject'); // Run cssInject task*/
	});

	/************************
		.js files
 	 ************************/
	watch('./src/assets/**/*.js', function() {
		console.log("watch ./src/assets/asterisk.js");

		gulp.start('scriptsRefresh');
	});

});

/*********************** 
	Image files
 ***********************/
gulp.task('reloadBrowserSync-4-img', ['copyImage'], function() {

	console.log("reloadBrowserSync-4-img");

	browserSync.reload();
});

gulp.task('copyImage', function() {
	/*console.log("copyImage");*/

	return gulp.src(['./src/assets/img/**/*.jpg',
			'./src/assets/img/**/*.png',
			'./src/assets/img/**/*.ico'])
			.on('error', function(errorInfo) {
				console.log(errorInfo.toString());
				this.emit('end');
			})
			.pipe(gulp.dest('./tmp/assets/img'));

});
/******************************************************************************/
/******************************************************************************/


/*********************** 
	*.html files
 ***********************/
gulp.task('reloadBrowserSync-4-html', ['copyIndexHtml'], function() {

	console.log("reloadBrowserSync-4-html");

	browserSync.reload();
});

gulp.task('copyIndexHtml', function() {
	/*console.log("copyIndexHtml");*/

	return gulp.src('./src/index.html')
			.pipe(gulp.dest('./tmp'));
});
/******************************************************************************/
/******************************************************************************/


/*********************** 
	*.css files
 ***********************/
// Run dependency tasks (i.e param 2; ex. 'styles' task found in 'gulp/tasks/styles.js') before 
// running the specified task (i.e. 'cssInject')
gulp.task('cssInject', ['styles'], function() {

	console.log("cssInject");

	return gulp.src('./tmp/assets/css/styles.css')
		.pipe(browserSync.stream());
});

// Run dependency tasks (i.e param 2; ex. 'scripts' task found in 'gulp/tasks/scripts.js') before 
// running the specified task (i.e. 'scriptsRefresh')
gulp.task('scriptsRefresh', ['scripts'], function() {
	console.log("scriptsRefresh");

	browserSync.reload();
});