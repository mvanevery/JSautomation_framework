/**
 * From command line type gulp test-local --archon:PROJECTNAME --test:TESTNAME (example: gulp initiate-findInStore --archon:payless --test:findInStore)
 *
 * Using arguments will set a variable in the project that tells it which project you want to run tests for and which
 * test to run
 *
 **/

const gulp = require('gulp');
const browserSync = require('browser-sync');
const selenium = require('selenium-standalone');
const mocha = require('gulp-mocha');
const project = require('./src/core/projects/config').project;
const projectType = require('./src/core/projects/config').projectType;
const test = require('./src/core/projects/config').test;

const getTask = function (task) {
   return require(`./gulp-tasks/${project}/${projectType}/${task}`)(gulp, mocha);
};

function terminateProcess() {
  selenium.child.kill();
  browserSync.exit();
}

gulp.task('serve:test', function (done) {
  browserSync({
    logLevel: 'silent',
    notify: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['test']
    },
    ui: false
  }, done);
});

/**
 * Task that will install and start server - good for CI and first time running the project
 */

gulp.task('selenium', function (done) {
  selenium.install({
    logger: function (message) {
    }
  }, function (err) {
    if (err) return done(err);

    selenium.start(function (err, child) {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
  });
});

/**
 *  Task that will only start the server - used when you already have server installed
 */

gulp.task('selenium-start', function (done) {
  selenium.start(function (err, child) {
    if (err) return done(err);
    selenium.child = child;
    done();
  });
});

gulp.task(`${test}`, ['serve:test', 'selenium'], getTask(`${test}`));

gulp.task(`initiate-${test}`, [`${test}`], function () {
  terminateProcess();
});
