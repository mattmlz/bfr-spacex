//Set require variables for pre-production tasks
const gulp = require('gulp');
const browserSync = require('browser-sync');

//to test
gulp.task('hello', () => {
  console.log('Hello World');
});

/*****************
 * PRE-PRODUCTION *
 *****************/

//refresh browser at each modification
gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})

//task to reload browser after html or js or css modifications
gulp.task('watch', ['browserSync'], () => {
  //Reloads the browser whenever HTML or JS or CSS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/css/**/*.css', browserSync.reload);
});

/*************
 * PRODUCTION *
 *************/
//Set require variables for production
const useref = require('gulp-useref')
const gulpIf = require('gulp-if')
const uglify = require('gulp-uglify')
const autoprefixer = require('gulp-autoprefixer')
const minifyCSS = require('gulp-minify-css')
const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')
const del = require('del')
const runSequence = require('run-sequence')
const gutil = require('gulp-util')
const ftp = require('gulp-ftp')

//minify js & css to dist folder
gulp.task('useref', () => {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))) //to auto prefix css for compatibility
    .pipe(gulpIf('*.js', uglify())) //to minify only js
    .pipe(gulpIf('*.css', minifyCSS())) //to minify only css
    .pipe(gulp.dest('dist'));
})

//minify pictures to dist folder
gulp.task('pictures', () => {
  return gulp.src('app/pictures/**/*.+(png|jpg|jpeg|gif|svg)')
    //to do not repeat picture optimizations uselessly
    .pipe(cache(imagemin({
      interlaced: true //to create interlaced pics like GIF for example
    })))
    .pipe(gulp.dest('dist/pictures'))
})

//inject favicons config to dist
gulp.task('favicons', () => {
  return gulp.src('app/pictures/favicons/**/*')
    .pipe(gulpIf('*.xml', gulp.dest('dist/pictures/favicons')))
    .pipe(gulpIf('*.ico', gulp.dest('dist/pictures/favicons')))
    .pipe(gulpIf('*.json', gulp.dest('dist/pictures/favicons')))
})

//add fonts from app to dist folder
gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

//add videos from app to dist folder
gulp.task('videos', () => {
  return gulp.src('app/videos/**/*')
    .pipe(gulp.dest('dist/videos'))
})

//to delete all files from dist folder
gulp.task('clean', () => {
  del('dist')
})

//to combine production's task before
gulp.task('build', (callback) => {
  runSequence('clean', 'useref', 'pictures', 'fonts', 'videos', 'favicons', 'fonts', callback)
})

//to deploy dist folder on FTP
gulp.task('deploy', () => {
  return gulp.src('dist/**')
    .pipe(ftp({
      host: 'ftp.cluster026.hosting.ovh.net',
      user: 'matthieued',
      pass: 'E2Q9yf3nKUX9'
    }))
    .pipe(gutil.noop());
})
