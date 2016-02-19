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

gulp.task('selenium', function (done) {
	selenium.install({
		logger: function (message) { }
	}, function (err) {
		if (err) return done(err);

		selenium.start(function (err, child) {
			if (err) return done(err);
			selenium.child = child;
			done();
		});
	});
});

gulp.task('selenium-start', function (done) {
	selenium.start(function (err, child) {
		if (err) return done(err);
		selenium.child = child;
		done();
	});
});

gulp.task('integration', ['serve:test', 'selenium'], function () {
	return gulp.src('test/*.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}));
});

gulp.task('no-install-integration', ['serve:test', 'selenium-start'], function () {
	return gulp.src('test/*.js', {read: false})
		.pipe(mocha({
			timeout: '50000'
		}));
});



gulp.task('test', ['integration'], function () {
	selenium.child.kill();
	browserSync.exit();
});

gulp.task('test-no-install', ['no-install-integration'], function () {
	selenium.child.kill();
	browserSync.exit();
});