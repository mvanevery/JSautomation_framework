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
var parseString = require('xml2js').parseString;
var fs = require('fs');
var util = require('util');

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
		.pipe(mocha({
			timeout: '50000',
			reporter: 'mochawesome',
			reporterOptions: {
				reportDir: 'test',
				reportName: 'report',
				reportTitle: 'awesome',
				inlineAssets: true
			}
		}).on("error", handleError));
});
gulp.task('e2e-prod', ['serve:test', 'selenium'], function () {
	return gulp.src('test/Chrome/Payless/node/production/end2end-prod.js', {read: false})
		.pipe(mocha({
			timeout: '50000',
			reporter: 'mochawesome',
			reporterOptions: {
				reportDir: 'test',
				reportName: 'report',
				reportTitle: 'awesome',
				inlineAssets: true
			}
		}).on("error", handleError));
});
gulp.task('e2e-return', ['serve:test', 'selenium'], function () {
	return gulp.src('test/Chrome/Payless/node/staging/E2E-returning-user.js', {read: false})
		.pipe(mocha({
			timeout: '50000',
			reporter: 'mochawesome',
			reporterOptions: {
				reportDir: 'test',
				reportName: 'report',
				reportTitle: 'awesome',
				inlineAssets: true
			}
		}).on("error", handleError));
});
gulp.task('findItem', ['serve:test', 'selenium'], function () {
	return gulp.src('test/Chrome/Payless/node/staging/findProduct.js', {read: false})
		.pipe(mocha({
			timeout: '50000',
			reporter: 'mochawesome',
			reporterOptions: {
				reportDir: 'test',
				reportName: 'report',
				reportTitle: 'awesome',
				inlineAssets: true
			}
		}).on("error", handleError));
});
gulp.task('findStore', ['serve:test', 'selenium'], function () {
	return gulp.src('test/Chrome/Payless/node/staging/findStore.js', {read: false})
		.pipe(mocha({
			timeout: '50000',
			reporter: 'mochawesome',
			reporterOptions: {
				reportDir: 'test',
				reportName: 'report',
				reportTitle: 'awesome',
				inlineAssets: true
			}
		}).on("error", handleError));
});

gulp.task('test-awesome', ['findStore'], function () {
	selenium.child.kill();
	browserSync.exit();
});