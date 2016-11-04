/**
 * Created by jharre on 10/28/16.
 *
 * runs all tests in order in /src/test/concierge/ directory
 *
 */
const mochaOptions = {
  timeout: '50000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/concierge/reports',
    reportName: 'report',
    reportTitle: 'Run all tests',
    inlineAssets: true
  }
};

const projectType = require('../../src/core/projects/config').projectType;

//gulp --client:chrome
if (`${projectType}` == 'local')
{
  var suiteType = 'suite';
}
else if (`${projectType}` == 'app')
{
  var suiteType = 'appSuite';
}

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('./src/test/concierge/'+suiteType+'/**/*.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
