var gulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite'),
	rename = require('gulp-rename'),
	del = require('del');

var config = {
	mode: {
		css : {
			sprite: 'svg/sprite.svg',
			render : {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('beginClean', function() {
	return del(['./app/assets/img/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {

	return gulp.src('./app/assets/img/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/assets/img/sprites/'));

});

/* let createSprite finish first before running copySpriteCSS */
gulp.task('copySpriteCSS', ['createSprite'], function() {
	return gulp.src('./app/assets/img/sprites/css/*.css')
		.pipe(rename(function(path) {
			path.basename = "_" + path.basename;
		}))
		.pipe(gulp.dest('./app/assets/css/build/sprites'));
});

/* run both createSprite and copySpriteCSS */
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteCSS']);
