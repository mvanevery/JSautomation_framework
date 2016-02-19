var gulp = require('gulp');
var browserSync = require('browser-sync');
var selenium = require('selenium-standalone');
var mocha = require('gulp-mocha');

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
		drivers: {
			drivers: {
				chrome: {
					installPath: 'C:\\Users\\ci\\AppData\\Roaming\\npm\\node_modules\\selenium-standalone\\.selenium\\chromedriver\\2.21-x64-chromedriver'
				},
				ie: {
					installPath: 'C:\\Users\\ci\\AppData\\Roaming\\npm\\node_modules\\selenium-standalone\\.selenium\\iedriver\\2.50.0-x64-IEDriverServer.exe'
				}
			}
		},
		logger: function (message) { }
	}, function (err) {
		if (err) return done(err);

		selenium.start({
				drivers: {
					chrome: {
						installPath: 'C:\\Users\\ci\\AppData\\Roaming\\npm\\node_modules\\selenium-standalone\\.selenium\\chromedriver\\2.21-x64-chromedriver'
					},
					ie: {
						installPath: 'C:\\Users\\ci\\AppData\\Roaming\\npm\\node_modules\\selenium-standalone\\.selenium\\iedriver\\2.50.0-x64-IEDriverServer.exe'
					}
				}
			},
			function (err, child) {
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

gulp.task('integration-bamboo', ['serve:test', 'selenium'], function () {
	return gulp.src('test/*.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}));
});

/**
 *  Used locally
 */

gulp.task('local-integration', ['serve:test', 'selenium-start'], function () {
	return gulp.src('test/*.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}));
});

/**
 *  Use 'npm run test-bamboo'
 */

gulp.task('test-bamboo', ['integration-bamboo'], function () {
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