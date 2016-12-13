/**
 * Project:     Concierge-BAM
 * TestSuite:   InDevelopmentTestSuite
 * Author:      Aaron Feldmeyer
 * Date:        12/10/2016
 *
 * From command line type:
 * gulp initiate-InDevelopment --archon:concierge-BAM --archonType:TestSuites --test:InDevelopment --client:chrome
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
    return gulp.src('./src/test/concierge-BAM/Suite/InDevelopment/**/*.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
