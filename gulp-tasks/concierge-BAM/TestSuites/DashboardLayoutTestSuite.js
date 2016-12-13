/**
 * Project:     Concierge-BAM
 * TestSuite:   DashboardLayoutTestSuite
 * Author:      Aaron Feldmeyer
 * Date:        12/12/2016
 *
 * From command line type:
 * gulp initiate-DashboardLayoutTestSuite --archon:concierge-BAM --archonType:TestSuites --test:DashboardLayoutTestSuite --client:chrome
 */

const mochaOptions = {
  timeout: '30000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/concierge-BAM/reports',
    reportName: 'DashboardLayoutTestSuite_Report',
    reportTitle: 'Dashboard Layout Test Suite',
    inlineAssets: true
  }
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('./src/test/concierge-BAM/Suite/DashboardLayout/**/*.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
