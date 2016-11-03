const mochaOptions = {
  timeout: '50000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/concierge-BAM/reports',
    reportName: 'report',
    reportTitle: 'Logout from the BAM website.',
    inlineAssets: true
  }
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('./src/test/concierge-BAM/logout_C2705.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
