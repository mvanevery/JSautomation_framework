/**
 * Created by mvanevery on 2/23/2016.
 */

var homepage = require('../core/helpers/homepage');

describe('Testing Home Page', function () {
    before(function (done) {
        homepage.goTo(done);
    });

    describe('Setting viewport size', function () {
        it('should launch in mobile view', function (done) {
            homepage.mobileView(done);
        });
    });
    describe('The Home Page Menu', function () {
        it('should see the menu open', function (done) {
            homepage.openMenu(done);
        })
    });

    describe('Verifying menu open and getting text', function () {
        it('should confirm open menu and bag text', function (done){
            homepage.menuVerify(done);
        })
    });

    after(function (done) {
        homepage.end(done);
    });
});