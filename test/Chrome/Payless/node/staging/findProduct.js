/**
 * Created by mvanevery on 5/12/2016.
 */

var common = require('../../../../../core/helpers/common');

describe('Testing Find A Product', function () {
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
    describe('Searching for an Item', function () {
        it('should search for an item', function (done) {
            common.searchItem(done);
        })
    });
    describe('pausing', function () {
        it('should pause the test', function (done) {
            common.pause(5000, done);
        })
    });
    //describe('Verifying Item Title', function () {
    //    it('should verify item title', function (done) {
    //        common.verifyItemTitle('SAFE STEP SOLE PADS', done);
    //    })
    //});
    describe('Verifying Item Number', function () {
        it('should verify item number', function (done) {
            common.verifyItemNumber('142898', done);
        })
    });
    //describe('Verifying Item Number', function () {
    //    it('should verify item number', function (done) {
    //        common.verifyItemNumber('Item No: 142898', done);
    //    })
    //})
})

