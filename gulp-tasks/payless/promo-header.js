/**
 * Created by mvanevery on 7/22/2016.
 */
/**
 * Created by mvanevery on 7/14/2016.
 */
const mochaOptions = {
  timeout: '50000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/payless/reports',
    reportName: 'report',
    reportTitle: 'Go To Cart',
    inlineAssets: true
  }
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('./src/test/payless/staging/verify-header.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
