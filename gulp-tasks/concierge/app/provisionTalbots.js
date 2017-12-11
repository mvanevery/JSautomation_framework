/**
 * Created by mvanevery on 10/11/16.
 */
const mochaOptions = {
  timeout: '50000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/concierge/reports',
    reportName: 'report',
    reportTitle: 'Provisioning Talbots',
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
    return gulp.src('./src/test/concierge/appSuite/a.provisioning.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};