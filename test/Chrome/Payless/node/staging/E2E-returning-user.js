/**
 * Created by mvanevery on 5/9/2016.
 */

var common = require('../../../../../core/helpers/common');

describe('Testing End to End - Returning User: CC', function () {
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
    //        common.pause(done);
    //    })
    //});
    describe('Searching for an Item', function () {
        it('should search for an item', function (done) {
            common.searchItem(done);
           })
        });
    //describe('pausing', function () {
    //    it('should pause the test', function (done) {
    //        common.pause(done);
    //         })
    //    });
    //    describe('Selecting a Size', function () {
    //        it('should select a size', function (done) {
    //            common.selectSize(done);
    //        })
    //    });
    //    describe('Adding item to Bag', function () {
    //        it('should add item to bag', function (done) {
    //            common.addToBag(done)
    //        })
    //    });
    //    describe('Proceed to Cart', function () {
    //        it('should click Proceed to Cart on the modal', function (done) {
    //            common.proceedToCartModal(done);
    //        })
    //    });
    //    describe('Proceed to Checkout', function () {
    //        it('should proceed to Checkout from Cart', function (done) {
    //            common.proceedToCheckoutCart(done);
    //        })
    //    });
    //describe('Add First Name (shipping)', function () {
    //    it('should add first name to shipping', function (done) {
    //        common.addShipFirstName(done);
    //    })
    //});
    //describe('Add Last Name (shipping)', function () {
    //    it('should add last name to shipping', function (done) {
    //        common.addShipLastName(done);
    //    })
    //});
    //describe('Add Address 1 (shipping)', function () {
    //    it('should add address 1 to shipping', function (done) {
    //        common.addShipAddress(done);
    //    })
    //});
    //describe('Add Address 2 (shipping)', function () {
    //    it('should add address 2 to shipping', function (done) {
    //        common.addShipAddress2(done);
    //    })
    //});
    //describe('Add City (shipping)', function () {
    //    it('should add City to shipping', function (done) {
    //        common.addShipCity(done);
    //    })
    //});
    //describe('Add State (shipping)', function () {
    //    it('should add State to shipping', function (done) {
    //        common.addShipState(done);
    //    })
    //});
    //describe('Add Zipcode (shipping)', function () {
    //    it('should add Zipcode to shipping', function (done) {
    //        common.addShipZipcode(done);
    //    })
    //});
    //describe('Add Phone (shipping)', function () {
    //    it('should add Phone to shipping', function (done) {
    //        common.addShipPhone(done);
    //    })
    //});
    //describe('Add Email (shipping)', function () {
    //    it('should add Email to shipping', function (done) {
    //        common.addShipEmail(done);
    //    })
    //});
    //describe('Click Continue to Payment', function () {
    //    it('proceed to payment section', function (done) {
    //        common.proceedToPayment(done);
    //    })
    //});
    //describe('Confirm typed Shipping Address', function () {
    //    it('should confirm Shipping Address', function (done) {
    //        common.useTypedAddress(done);
    //    })
    //});
    })
