const mochaOptions = {
  timeout: '50000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/payless/reports',
    reportName: 'report',
    reportTitle: 'End to End - Guest',
    inlineAssets: true
  }
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('./src/test/payless/staging/E2E-guest.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
