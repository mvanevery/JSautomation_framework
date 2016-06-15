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
	describe('Searching for an Item', function () {
		it('should search for an item', function (done) {
			common.searchItem(done);
		})
	});
	describe('pausing', function () {
		it('should pause the test', function (done) {
			common.pause(7500, done);
		})
	});
	describe('Selecting a Size', function () {
		it('should select a size', function (done) {
			common.selectSize(done);
		})
	});
	describe('Adding item to Bag', function () {
		it('should add item to bag', function (done) {
			common.addToBag(done)
		})
	});
	describe('Proceed to Cart', function () {
		it('should click Proceed to Cart on the modal', function (done) {
			common.proceedToCartModal(done);
		})
	});
	describe('Proceed to Checkout', function () {
		it('should proceed to Checkout from Cart', function (done) {
			common.proceedToCheckoutCart(done);
		})
	});
	describe('pausing', function () {
		it('should pause the test', function (done) {
			common.pause(5000, done);
		})
	});
	describe('Log in to Account', function () {
		it('should log in to your account', function (done) {
			common.loginButton(done);
		})
	});
	describe('pausing', function () {
		it('should pause the test', function (done) {
			common.pause(5000, done);
		})
	});
	describe('Add Login info', function () {
		it('should add login info and log in to your account', function (done) {
			common.addLoginInfo(done);
		})
	});
	describe('pausing', function () {
		it('should pause the test', function (done) {
			common.pause(15000, done);
		})
	});
	describe('refresh the page', function () {
		it('should refresh the page', function (done) {
			common.refreshPage(done);
		})
	});
	describe('pausing', function () {
		it('should pause the test', function (done) {
			common.pause(5000, done);
		})
	});
	describe('ship to store', function () {
		it('should add login info and log in to your account', function (done) {
			common.shipToStore(done);
		})
	});
	describe('pausing', function () {
		it('should pause the test', function (done) {
			common.pause(3000, done);
		})
	});
	describe('Selects Shipping Address Dropdown', function () {
		it('should pick a saved address from the dropdown', function (done) {
			common.clickGeolocation(done);
		})
	});
	describe('pausing', function () {
		it('should pause the test', function (done) {
			common.pause(15000, done);
		})
	});
	describe('Selects Store to Ship To', function () {
		it('should pick a store from the list of stores', function (done) {
			common.selectStore(done);
		})
	});
	describe('Click Continue to Payment', function () {
		it('proceed to payment section', function (done) {
			common.proceedToPayment(done);
		})
	});
	describe('Confirm typed Shipping Address', function () {
		it('should confirm Shipping Address', function (done) {
			common.useTypedAddress(done);
		})
	});
	after(function (done) {
		common.end(done);
	});
});
