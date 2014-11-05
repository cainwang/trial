var gulp = require('gulp');
var source = require("vinyl-source-stream");
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');

gulp.task('browserify', function() {
    var b = browserify();
    b.transform(reactify);
    b.add('./scripts/main.js');

    return b.bundle().pipe(source('bundle.js')).pipe(gulp.dest('./build'));
});

gulp.task('watchify', function() {
    var bundler = watchify({
        watch: true
    });
    bundler.add('./scripts/main.js');
    bundler.transform(reactify);

    function rebundle() {
        return bundler.bundle().pipe(source('bundle.js')).pipe(gulp.dest('./build'));
    }

    bundler.on('update', function() {
        rebundle();
        console.log('Scripts bundled by watchify.');
    });

    return rebundle();
});
