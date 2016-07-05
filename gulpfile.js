/**
 * From command line type gulp test-local --archon:PROJECTNAME (example: gulp test-local --archon:payless)
 *
 * Using arguments will set a variable in the project that tells it which project you want to run tests for
 *
 **/

const gulp = require('gulp');
const browserSync = require('browser-sync');
const selenium = require('selenium-standalone');
const mocha = require('gulp-mocha');
const project = require('./core/projects/config').project;

const getTask = function (task) {
   return require(`./gulp-tasks/${project}/${task}`)(gulp, mocha);
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

gulp.task('findInStore', ['serve:test', 'selenium'], getTask('findInStore'));
gulp.task('findStore', ['serve:test', 'selenium'], getTask('findStore'));
gulp.task('findItem', ['serve:test', 'selenium'], getTask('findItem'));
gulp.task('e2e-guest', ['serve:test', 'selenium'], getTask('e2e-guest'));
gulp.task('e2e-prod', ['serve:test', 'selenium'], getTask('e2e-prod'));
gulp.task('e2e-return', ['serve:test', 'selenium'], getTask('e2e-return'));

gulp.task('initiate-find-in-store', ['findInStore'], function () {
  terminateProcess();
});

gulp.task('init-find-store', ['findInStore'], function () {
  terminateProcess();
});

gulp.task('init-find-item', ['findItem'], function () {
  terminateProcess();
});

gulp.task('init-find-a-store', ['findStore'], function () {
  terminateProcess();
});

gulp.task('init-find-item', ['findItem'], function () {
  terminateProcess();
});

gulp.task('init-find-in-store', ['findInStore'], function () {
  terminateProcess();
});

gulp.task('init-e2e-return-user', ['e2e-return'], function () {
  terminateProcess();
});

gulp.task('init-e2e-guest-user', ['e2e-guest'], function () {
  terminateProcess();
});

gulp.task('init-e2e-prod-test', ['e2e-prod'], function () {
  terminateProcess();
});

gulp.task('init-e2e-return', ['e2e-return'], function () {
  terminateProcess();
});
