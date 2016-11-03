const mochaOptions = {
  timeout: '30000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/concierge-BAM/reports',
    reportName: 'report',
    reportTitle: 'Login as valid user but invalid store.',
    inlineAssets: true
  }
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('./src/test/concierge-BAM/Suite-Login/02_loginValidStoreInvalid_C2708.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
