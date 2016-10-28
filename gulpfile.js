var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');


// sass preprocess
gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/build/css/'));
});

// js uglify
gulp.task('js-uglify', function (callback) {
  pump([
        gulp.src('assets/js/*.js'),
        uglify(),
        gulp.dest('assets/build/js/')
    ],
    callback
  );
});

// gulp watch 
gulp.task('watch', function() {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
    gulp.watch('assets/js/*.js', ['js-uglify']);
});

// gulp default task
gulp.task('default', ['sass', 'js-uglify', 'watch'], function() {
  
});