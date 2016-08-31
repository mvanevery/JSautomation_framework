/**
 * Created by mvanevery on 8/31/16.
 */
const mochaOptions = {
    timeout: '50000',
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: './src/test/concierge/reports',
        reportName: 'report',
        reportTitle: 'Login as SSales',
        inlineAssets: true
    }
};

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

module.exports = function (gulp, mocha) {
    return function () {
        return gulp.src('./src/test/concierge/customerSearch.js', {read: false})
            .pipe(mocha(mochaOptions).on("error", handleError));
    }
};
