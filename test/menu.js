/**
 * Created by mvanevery on 2/23/2016.
 */

var common = require('../core/helpers/common');

describe('Testing Home Page', function () {
    before(function (done) {
        common.goTo(done);
    });

    //describe('Setting viewport size', function () {
    //    it('should launch in mobile view', function (done) {
    //        common.mobileView(done);
    //    });
    //});
    describe('Open Menu', function () {
        it('should see the menu open', function (done) {
            common.openMenu(done);
        })
    });

    //describe('Verifying menu open and getting text', function () {
    //    it('should confirm open menu and bag text', function (done){
    //        common.menuVerify(done);
    //    })
    //});
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
    describe('Selecting Item', function() {
        it('should pick an item', function(done) {
            common.pickItem(done);
        })
    });
    describe('Selecting a Size', function() {
        it('should select a size', function(done) {
            common.selectSize(done);
        })
    });
    describe('Adding item to Bag', function() {
        it('should add item to bag', function(done) {
            common.addToBag(done)
        })
    });
    //describe('Proceed to Cart', function() {
    //    it('should click Proceed to Cart on the modal', function(done) {
    //        common.proceedToCartModal(done);
    //    })
    //});
    //describe('Proceed to Checkout', function() {
    //    it('should proceed to Checkout from Cart', function(done) {
    //        common.proceedToCheckoutCart(done)
    //    })
    //});
//})
//  after(function (done) {
//     common.end(done);
//   });

});