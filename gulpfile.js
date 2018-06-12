const gulp = require('gulp')
// const sass = require('gulp-ruby-sass')
var sass = require('gulp-sass');
gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')//编译文件
    .on('error', sass.logError)//错误信息
    .pipe(sass())
    .pipe(gulp.dest('./docs/css'));//输出路径
})

gulp.task('dist',function(){
   gulp.watch('./scss/*.scss',['sass']);// 监听的文件
});