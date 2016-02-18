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

	describe('The Home Page Title', function () {
		it('should see the correct title', function (done) {
			homepage.getPageTitle(done);
		});

	});

	after(function (done) {
		homepage.end(done);
	});
});
