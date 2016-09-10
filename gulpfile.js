'use strict';

var gulp = require('gulp'),
    livereloadPort = 35729;

// Register Express Task
gulp.task('express', function(){
    var express = require('express'),
        app = express();
    app.use(require('connect-livereload')({port: livereloadPort}));
    app.use(express.static(__dirname));
    app.listen(4000, '0.0.0.0');
});

// Register livereload task
var tinylr;
gulp.task('livereload', function(){
    tinylr = require('tiny-lr')();
    tinylr.listen(livereloadPort)
});

function notifyLiveReload(event){
    var fileName = require('path').relative(__dirname, event.path);

    tinylr.changed({
        body: {
            files: [fileName]
        }
    });
}

// Register watch task
gulp.task('watch', function(){
    gulp.watch('./js/**/*.js', notifyLiveReload);
    gulp.watch('*.html', notifyLiveReload);
    gulp.watch('./css/**/*.css', notifyLiveReload);
});

// Register deafult task
gulp.task('default', ['express', 'livereload', 'watch'], function(){
});

