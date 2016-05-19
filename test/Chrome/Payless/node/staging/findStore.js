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
    //describe('pausing', function () {
    //    it('should pause the test', function (done) {
    //        common.pause(5000, done);
    //    })
    //});
    //describe('Opening Find A Store', function () {
    //    it('should go to the Find A Store page', function (done) {
    //        common.openFindAStore(done);
    //    });
    //});
    //describe('pausing', function () {
    //    it('should pause the test', function (done) {
    //        common.pause(5000, done);
    //    })
    //});
    //describe('Click Geolocation Button', function () {
    //    it('should click the geolocation button', function (done) {
    //        common.clickGeolocation(done);
    //    });
    //});
    //describe('pausing', function () {
    //    it('should pause the test', function (done) {
    //        common.pause(10000, done);
    //    })
    //});
    //describe('Verify Store Address', function () {
    //    it('should verify the store address', function (done) {
    //        common.verifyStoreAddress(done);
    //    });
    //});
    describe('Open Menu', function () {
        it('should see the menu open', function (done) {
            common.openMenu(done);
        })
    });

    describe('Verifying menu open and getting text', function () {
        it('should confirm open menu and bag text', function (done){
            common.menuVerify(done);
        })
    });
    describe('Selecting category', function () {
        it('should pick a category', function (done) {
            common.pickCategory(done);
        })
    });
    describe('Selecting Style', function () {
        it('should pick a style', function (done) {
            common.pickStyle(done);
        })
    });
    describe('Selecting Item', function () {
        it('should pick an item', function (done) {
            common.pickItem(done);
        })
    });
    describe('Selecting a Size', function () {
        it('should select a size', function (done) {
            common.selectSize(done);
        })
    });
    describe('find in store', function () {
        it('should select a size', function (done) {
            common.openFindInStore(done);
        })
    });
})