var gulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite'),
	rename = require('gulp-rename');

var config = {
	mode: {
		css : {
			render : {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('createSprite', function() {

	return gulp.src('./app/assets/img/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/assets/img/sprite/'));

});

gulp.task('copySpriteCSS', function() {
	return gulp.src('./app/assets/img/sprite/css/*.css')
		.pipe(rename(function(path) {
			path.basename = "_" + path.basename;
		}))
		.pipe(gulp.dest('./app/assets/css/build/sprites'));
});