/**
 * Project:     Concierge
 * TestName     Catalog/selectALeafOfTheMenuTree_C1248
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/1248
 * Author:      John Harre
 * Date:        11/21/2016
 */

const mochaOptions = {
  timeout: '50000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/concierge/reports',
    reportName: 'report',
    reportTitle: 'Search Customer',
    inlineAssets: true
  }
};
const projectType = require('../../../src/core/projects/config').projectType;

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('./src/test/concierge/appSuite/Catalog/selectingALeafOfTheMenuTree_C1248.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};

