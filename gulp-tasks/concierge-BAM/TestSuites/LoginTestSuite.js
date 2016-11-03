/**
 * Project:     Concierge-BAM
 * TestSuite:   LoginTestSuite
 * Author:      Aaron Feldmeyer
 * Date:        11/3/2016
 *
 * From command line type:
 * gulp initiate-TestSuites/LoginTestSuite --archon:concierge-BAM --test:TestSuites/LoginTestSuite --client:chrome
 */

const mochaOptions = {
  timeout: '30000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/concierge-BAM/reports',
    reportName: 'report',
    reportTitle: 'Login Test Suite',
    inlineAssets: true
  }
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('./src/test/concierge-BAM/Suite-Login/**/*.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
