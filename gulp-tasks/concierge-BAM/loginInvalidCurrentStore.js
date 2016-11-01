const mochaOptions = {
  timeout: '50000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/concierge-BAM/reports',
    reportName: 'report',
    reportTitle: 'Unabke to login as invalid user for current store.',
    inlineAssets: true
  }
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('./src/test/concierge-BAM/loginInvalidCurrentStore.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
