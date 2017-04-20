var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat')
var sass=require('gulp-sass');

gulp.task('scripts', function(){
    return gulp.src('src/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function(){
    return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
})

gulp.task('publish', ['scripts', 'styles'], function(){

});

gulp.task('watch', function(){
    gulp.watch('src/*.js',['scripts']);
    gulp.watch('sass/*.scss', ['styles']);
})
