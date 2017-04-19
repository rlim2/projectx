var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('pug', function() {
  return gulp.src(['pug/**/*.pug', '!pug/includes/*.pug'])
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('./'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  })
});

// gulp.task('fonts', function() {
//   return gulp.src('app/fonts/**/*')
//     .pipe(gulp.dest('dist/fonts'))
// });

// gulp.task('clean:dist', function() {
//   return del.sync('dist');
// });
//
// gulp.task('build', function(callback) {
//   runSequence('clean:dist',
//     ['sass', 'fonts'],
//     callback
//   )
// });

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync', 'watch'],
    callback
  )
});

gulp.task('watch', ['browserSync', 'sass', 'pug'], function() {
  gulp.watch('sass/**/*.sass', ['sass']);
  gulp.watch('pug/**/*.pug', ['pug']);
  gulp.watch('./**/*.html', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
});
