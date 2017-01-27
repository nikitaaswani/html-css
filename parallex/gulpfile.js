var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var compass = require('gulp-compass');

gulp.task('compass', function() {
  gulp.src('scss/*.scss')
    .pipe(compass({
      css: 'css',
      scss: 'scss'
    }))
    .pipe(gulp.dest('css/'));
});

gulp.task('imagemin', () =>
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
);
gulp.task('default', ['compass'], function() {
   gulp.watch("scss/*.scss", ['compass']);
   gulp.watch("images/*", ['imagemin']);
});
