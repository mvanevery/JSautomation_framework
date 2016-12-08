/**
 * Created by mvanevery on 11/22/16.
 */

/**
 * Created by mvanevery on 10/11/16.
 */
const mochaOptions = {
  timeout: '50000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/concierge/reports',
    reportName: 'report',
    reportTitle: 'Add Appointment through Planner page',
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
    return gulp.src('./src/test/concierge/appSuite/Search/productSearchNoResults.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};