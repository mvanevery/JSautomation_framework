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

const mochaOptions = {
  timeout: '50000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'test',
    reportName: 'report',
    reportTitle: 'awesome',
    inlineAssets: true
  }
};

function terminateProcess() {
  selenium.child.kill();
  browserSync.exit();
}

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
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

gulp.task('e2e-guest', ['serve:test', 'selenium'], function () {
  return gulp.src('test/Chrome/Payless/node/staging/E2E-guest.js', {read: false})
    .pipe(mocha(mochaOptions).on("error", handleError));
});
gulp.task('e2e-prod', ['serve:test', 'selenium'], function () {
  return gulp.src('test/Chrome/Payless/node/production/end2end-prod.js', {read: false})
    .pipe(mocha(mochaOptions).on("error", handleError));
});
gulp.task('e2e-return', ['serve:test', 'selenium'], function () {
  return gulp.src('test/Chrome/Payless/node/staging/E2E-returning-user.js', {read: false})
    .pipe(mocha(mochaOptions).on("error", handleError));
});
gulp.task('findItem', ['serve:test', 'selenium'], function () {
  return gulp.src('test/Chrome/Payless/node/staging/findProduct.js', {read: false})
    .pipe(mocha(mochaOptions).on("error", handleError));
});
gulp.task('findStore', ['serve:test', 'selenium'], function () {
  return gulp.src('test/Chrome/Payless/node/staging/findStore.js', {read: false})
    .pipe(mocha(mochaOptions).on("error", handleError));
});
gulp.task('findInStore', ['serve:test', 'selenium'], function () {
  return gulp.src('test/Chrome/Payless/node/staging/findInStore.js', {read: false})
    .pipe(mocha(mochaOptions).on("error", handleError));
});

gulp.task('find-a-store', ['findStore'], function () {
  terminateProcess();
});
gulp.task('find-item', ['findItem'], function () {
  terminateProcess();
});
gulp.task('find-in-store', ['findInStore'], function () {
  terminateProcess();
});
gulp.task('e2e-return-user', ['e2e-return'], function () {
  terminateProcess();
});
gulp.task('e2e-guest-user', ['e2e-guest'], function () {
  terminateProcess();
});
gulp.task('e2e-prod-test', ['e2e-prod'], function () {
  terminateProcess();
});
