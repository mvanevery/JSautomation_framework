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

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('test/concierge/loginSSales.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
