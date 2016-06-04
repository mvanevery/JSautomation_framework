/**
 * From command line type gulp test-local --archon:PROJECTNAME (example: gulp test-local --archon:payless)
 *
 * Using arguments will set a variable in the project that tells it which project you want to run tests for
 *
 **/


var gulp = require('gulp');
var browserSync = require('browser-sync');
var selenium = require('selenium-standalone');
var mocha = require('gulp-mocha');

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

/**
 *  Used in CI
 */

gulp.task('integration-ci', ['serve:test', 'selenium'], function () {
	return gulp.src('test/*.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}).on("error", handleError));
});

gulp.task('menu-integration', ['serve:test', 'selenium'], function () {
	return gulp.src('test/Menu.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}));
});

gulp.task('local-integration', ['serve:test', 'selenium-start'], function () {
	return gulp.src('test/*.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}).on("error", handleError));
});





/**
 *  Use 'npm run test-bamboo'
 */

gulp.task('test-ci', ['integration-ci'], function () {
	selenium.child.kill();
	browserSync.exit();
});

/**
 *  Use 'npm run test-local'
 */

gulp.task('test-local', ['local-integration'], function () {
	selenium.child.kill();
	browserSync.exit();
});

gulp.task('homepage', ['serve:test', 'selenium-start'], function () {
	return gulp.src('test/homepage.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}).on("error", handleError));
});

/**
 *  Use 'gulp "test" name'
 */

gulp.task('e2e-guest', ['serve:test', 'selenium-start'], function () {
	return gulp.src('test/Chrome/Payless/node/staging/E2E-guest.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}).on("error", handleError));
});
gulp.task('openMenu', ['serve:test', 'selenium-start'], function () {
	return gulp.src('test/Chrome/Payless/legacy/staging/openMenu.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}).on("error", handleError));
});
gulp.task('e2e-prod', ['serve:test', 'selenium-start'], function () {
	return gulp.src('test/Chrome/Payless/node/production/end2end-prod.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}).on("error", handleError));
});
gulp.task('e2e-return', ['serve:test', 'selenium-start'], function () {
	return gulp.src('test/Chrome/Payless/node/staging/E2E-returning-user.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}).on("error", handleError));
});
gulp.task('findItem', ['serve:test', 'selenium'], function () {
	return gulp.src('test/Chrome/Payless/node/staging/findProduct.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}).on("error", handleError));
});
gulp.task('findStore', ['serve:test', 'selenium'], function () {
	return gulp.src('test/Chrome/Payless/node/staging/findStore.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}).on("error", handleError));
});

gulp.task('test-awesome', ['findStore'], function () {
	selenium.child.kill();
	browserSync.exit();
});