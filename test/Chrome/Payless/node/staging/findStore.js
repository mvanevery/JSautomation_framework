/**
 * Created by mvanevery on 5/12/2016.
 */

var common = require('../../../../../core/helpers/common');

describe('Testing Find A Store', function () {
    before(function (done) {
        common.goTo(done);
    });

    describe('Setting viewport size', function () {
        it('should launch in mobile view', function (done) {
            common.mobileView(done);
        });
    });
    describe('pausing', function () {
        it('should pause the test', function (done) {
            common.pause(5000, done);
        })
    });
    describe('Opening Find A Store', function () {
        it('should go to the Find A Store page', function (done) {
            common.openFindAStore(done);
        });
    });
    describe('pausing', function () {
        it('should pause the test', function (done) {
            common.pause(5000, done);
        })
    });
    describe('Click Geolocation Button', function () {
        it('should click the geolocation button', function (done) {
            common.clickGeolocation(done);
        });
    });
    describe('pausing', function () {
        it('should pause the test', function (done) {
            common.pause(10000, done);
        })
    });
    describe('Verify Store Address (this may take a while)', function () {
        it('should verify the store address', function (done) {
            common.verifyStoreAddress(done);
        });
    });
	
	after(function (done) {
		common.end(done);
	});

});