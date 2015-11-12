var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile sass into CSS
gulp.task('sass', function() {
	return gulp.src("scss/*.scss")
		.pipe(sass())
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest("css"));

});
