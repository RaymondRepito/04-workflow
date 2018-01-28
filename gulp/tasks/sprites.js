var gulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite'),
	rename = require('gulp-rename'),
	del = require('del'),
	browserSync = require('browser-sync').create();

/* sprite: 'svg/sprite.svg', <-- Remove .css from the middle of the filename */
/* sprite: is where the output of svgSprite will go */
var config = {
	mode: {
		css : {
			sprite: 'sprite.svg',
			render : {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('beginClean', function() {
	/*console.log('beginClean');*/

	return del(['./tmp/assets/img/sprites', './src/assets/img/icons-temp']);
});

/*gulp.task('createSprite', ['beginClean'], function() {*/
gulp.task('createSprite', ['beginClean'], function() {
	/*console.log('createSprite: compile icons into svg.');*/

	return gulp.src('./src/assets/img/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./src/assets/img/icons-temp/sprite/'));
		/* Appends './src/assets/img/icons-temp/sprite/' + 'css/svg/sprite.svg' */
});

/* let createSprite finish first before running copySpriteCSS */
gulp.task('copySpriteCSS', ['createSprite'], function() {
	/*console.log('copySpriteCSS to ./tmp/assets/css/sprites');*/

	return gulp.src('./src/assets/img/icons-temp/sprite/css/*.css')
		.pipe(rename(function(path) {
			path.basename = "_" + path.basename;
		}))
		.pipe(gulp.dest('./src/assets/css/sprites'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
	/*console.log('copySpriteGraphic to ./tmp/assets/img/sprites');*/

	return gulp.src('./src/assets/img/icons-temp/sprite/css/*.svg')
		.pipe(gulp.dest('./tmp/assets/img/sprites'));
		/* This should be what will be used as url in the sprite.css template */
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
	/*console.log('endClean');*/

	return del(['./src/assets/img/icons-temp']);
});

gulp.task('reloadBrowserSync-4-sprites', ['copyIndexHtml'], function() {

	/*console.log("reloadBrowserSync-4-sprites");*/

	browserSync.reload();
});

/* run both createSprite and copySpriteCSS */
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean'], function() {
	console.log('icons =  beginClean + createSprite + copySpriteGraphic + copySpriteCSS + endClean');
});

/*
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean', 'reloadBrowserSync-4-sprites'], function() {
	console.log('icons =  beginClean + createSprite + copySpriteGraphic + copySpriteCSS + endClean + reloadBrowserSync-4-sprites');
});
*/
