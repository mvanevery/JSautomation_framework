var homepage = require('../core/helpers/homepage');

describe('Testing Home Page', function () {
	before(function (done) {
		homepage.goTo(done);
	});

	describe('The Home Page', function () {
		it('should have the homepage url', function (done) {
			homepage.verifyPageUrl(done);
		})
	});

	after(function (done) {
		homepage.end(done);
	});
});
