import gulp from 'gulp';
import sass from 'gulp-sass';
import del from 'del';
import sassJspm from 'sass-jspm-importer';

function clean() {
  return del('dist/*');
}

function styles(){
  return gulp.src('app/styles/app.scss')
    .pipe(sass({
      //errLogToConsole: true,
      functions: sassJspm.resolve_function('/jspm_packages/'),
      importer: sassJspm.importer
    }))
    .pipe(gulp.dest('dist/'));
}

gulp.task('styles', gulp.series(clean,styles));
