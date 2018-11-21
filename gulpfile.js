const gulp = require('gulp');
const bump = require('gulp-bump');

// `fs` is used instead of require to prevent caching in watch (require caches)
const fs = require('fs');
 
const getVersion = function () {
    return fs.readFileSync('./VERSION', 'utf8', function(err, data) {
        return data;
    });
};

const newVer = getVersion().trim();

// bump versions  on package/bower/manifest
gulp.task('bump', function () {
    return gulp.src(['./package.json', './src/environments/environment.ts', './src/environments/environment.prod.ts'])
        .pipe(bump({
            version: newVer
        }))
        .pipe(gulp.dest(function(x) {
            return x.base;
        }));
});


// Run the gulp tasks
gulp.task('default', function(){
    gulp.run('bump');
});
