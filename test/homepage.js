var common = require('../core/helpers/common');

describe('Testing Home Page', function () {
	before(function (done) {
		common.goTo(done);
	});

	describe('The Home Page', function () {
		it('should have the homepage url', function (done) {
			common.verifyPageUrl(done);
		})
	});

	after(function (done) {
		common.end(done);
	});
});
