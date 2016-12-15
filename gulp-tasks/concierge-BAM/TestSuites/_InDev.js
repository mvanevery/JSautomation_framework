/**
 * Project:     Concierge-BAM
 * TestSuite:   InDevelopmentTestSuite
 * Author:      Aaron Feldmeyer
 * Date:        12/15/2016
 *
 * From command line type:
 * gulp initiate-_InDev --archon:concierge-BAM --archonType:TestSuites --test:_InDev --client:chrome
 */

const mochaOptions = {
  timeout: '30000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/concierge-BAM/reports',
    reportName: 'InDevelopment_Report',
    reportTitle: 'In Development Test Suite',
    inlineAssets: true
  }
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('./src/test/concierge-BAM/Suite/_InDev/**/*.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
