//�o�Ogulp�u�@�]�w�ɮ�
var gulp = require('gulp');

//���Jgulp�M�� �]load gulp plugin�^
var minifycss = require('gulp-minify-css'), //css���Y ( css compress plugin)�C referenct http://cnpmjs.org/package/gulp-minify-css
    uglify = require('gulp-uglify'),		//javascript���Y (js compress plugin)
    rename = require('gulp-rename');		//����ɦW	(rename plugin)

//note : �p�G�A�Q�n�X�֦h��javascript,�i�H�ϥ� require('gulp-concat').

//���Ycss���� (task : css compress)
gulp.task('minify-css', function() {
    gulp.src('./src/*.css')                     //�ӷ�
        .pipe(minifycss())					//���Y
        .pipe(rename({ suffix: '.min' }))	//����ɦW
        .pipe(gulp.dest( './dist/' ));			//�ت�
});

//���Yjavascript���� (task : javascript compress)
gulp.task('minify-javascript', function() {
    gulp.src('./src/*.js')
        .pipe(uglify())						//���Y (Compress)
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/'));			//�ت� (Destination)
});

//�w�]�ʧ@
gulp.task('default',['minify-css', 'minify-javascript']);	//��Jgulp �N�|�̰}�C���e��M���Ȱ���