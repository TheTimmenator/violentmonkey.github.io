const gulp = require('gulp');
const jade = require('gulp-jade');
const less = require('gulp-less');
const cssnano = require('gulp-cssnano');

gulp.task('build-jade', () => (
  gulp.src([
    'src/**/*.jade',
    '!src/_**/*',
  ])
  .pipe(jade())
  .pipe(gulp.dest('dist'))
));

gulp.task('build-css', () => (
  gulp.src('src/*.less')
  .pipe(less())
  .pipe(cssnano())
  .pipe(gulp.dest('dist'))
));

gulp.task('build', ['build-jade', 'build-css']);

gulp.task('watch', () => {
  gulp.watch('src/**/*.jade', ['build-jade']);
  gulp.watch('src/**/*.less', ['build-css']);
});
