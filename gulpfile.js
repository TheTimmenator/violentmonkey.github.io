const gulp = require('gulp');
const jade = require('gulp-jade');

gulp.task('build', () => (
  gulp.src('src/**/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('dist'))
));

gulp.task('watch', () => {
  gulp.watch('src/**/*.jade', ['build']);
});
