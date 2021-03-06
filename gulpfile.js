//這是gulp工作設定檔案
var gulp = require('gulp');

//載入gulp套件 （load gulp plugin）
var minifycss = require('gulp-minify-css'), //css壓縮 ( css compress plugin)。 referenct http://cnpmjs.org/package/gulp-minify-css
    uglify = require('gulp-uglify'),		//javascript壓縮 (js compress plugin)
    rename = require('gulp-rename');		//更改檔名	(rename plugin)

//note : 如果你想要合併多隻javascript,可以使用 require('gulp-concat').

//壓縮css任務 (task : css compress)
gulp.task('minify-css', function() {
    gulp.src('./src/*.css')                     //來源
        .pipe(minifycss())					//壓縮
        .pipe(rename({ suffix: '.min' }))	//更改檔名
        .pipe(gulp.dest( './dist/' ));			//目的
});

//壓縮javascript任務 (task : javascript compress)
gulp.task('minify-javascript', function() {
    gulp.src('./src/*.js')
        .pipe(uglify())						//壓縮 (Compress)
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/'));			//目的 (Destination)
});

//預設動作
gulp.task('default',['minify-css', 'minify-javascript']);	//輸入gulp 就會依陣列內容找尋任務執行