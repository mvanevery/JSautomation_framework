const mochaOptions = {
  timeout: '50000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/sysco-uom/reports',
    reportName: 'report',
    reportTitle: 'Login',
    inlineAssets: true
  }
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('./src/test/sysco-uom/develop/login.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
