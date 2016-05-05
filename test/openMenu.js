/**
 * Created by mvanevery on 5/2/2016.
 */

var common = require('../core/helpers/common-legacy');

describe('Testing Home Page', function () {
    before(function (done) {
        common.goTo(done);
    });

    describe('Setting viewport size', function () {
        it('should launch in mobile view', function (done) {
            common.mobileView(done);
        });
    });
    describe('pausing', function()  {
        it('should pause the test', function(done)  {
            common.pause(done);
        })
    });
    describe('Refresh the page', function () {
        it('should refresh the page to view mobile', function (done) {
            common.refresh(done);
        })
    });
    describe('pausing', function()  {
        it('should pause the test', function(done)  {
            common.pause(done);
        })
    });
    describe('Open Menu', function () {
        it('should see the menu open', function (done) {
            common.openMenu(done);
        })
    });


})