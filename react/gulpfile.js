var gulp = require('gulp');
var source = require("vinyl-source-stream");
var browserify = require('browserify');
var reactify = require('reactify');

gulp.task('browserify', function() {
    var b = browserify();
    b.transform(reactify);
    b.add('./scripts/main.js');

    return b.bundle().pipe(source('bundle.js')).pipe(gulp.dest('./build'));
});
