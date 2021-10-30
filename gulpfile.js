const gulp = require('gulp')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')(require('sass'));
gulp.task('style', function () {
    return gulp.src('./src/scss/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', function () {
    browserSync.init({
        server: './src/'
    });
    gulp.watch('./src/scss/**/*.scss', gulp.series('style'));
});