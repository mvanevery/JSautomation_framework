/**
 * Created by mvanevery on 5/5/2016.
 */
/**
 * Created by mvanevery on 2/23/2016.
 */

var common = require('../../../../../core/helpers/common');
var prod = require('../../../../../core/helpers/common-production');

describe('Testing Home Page', function () {
	before(function (done) {
		common.goTo(done);
	});

	describe('Setting viewport size', function () {
		it('should launch in mobile view', function (done) {
			common.mobileView(done);
		});
	});
	describe('Open Menu', function () {
		it('should see the menu open', function (done) {
			common.openMenu(done);
		})
	});

	describe('Verifying menu open and getting text', function () {
		it('should confirm open menu and bag text', function (done) {
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
	describe('Add First Name (shipping)', function () {
		it('should add first name to shipping', function (done) {
			prod.addShipFirstName(done);
		})
	});
	describe('Add Last Name (shipping)', function () {
		it('should add last name to shipping', function (done) {
			prod.addShipLastName(done);
		})
	});
	describe('Add Address 1 (shipping)', function () {
		it('should add address 1 to shipping', function (done) {
			prod.addShipAddress(done);
		})
	});
	//describe('Add Address 2 (shipping)', function () {
	//    it('should add address 2 to shipping', function (done) {
	//        common.addShipAddress2(done);
	//    })
	//});
	describe('Add City (shipping)', function () {
		it('should add City to shipping', function (done) {
			common.addShipCity(done);
		})
	});
	describe('Add State (shipping)', function () {
		it('should add State to shipping', function (done) {
			common.addShipState(done);
		})
	});
	describe('Add Zipcode (shipping)', function () {
		it('should add Zipcode to shipping', function (done) {
			common.addShipZipcode(done);
		})
	});
	describe('Add Phone (shipping)', function () {
		it('should add Phone to shipping', function (done) {
			prod.addShipPhone(done);
		})
	});
	describe('Add Email (shipping)', function () {
		it('should add Email to shipping', function (done) {
			prod.addShipEmail(done);
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
	describe('Add Credit Card Owner', function () {
		it('should add credit card owner name', function (done) {
			prod.addCCName(done);
		})
	});
	describe('Add Credit Card Number', function () {
		it('should add credit card number', function (done) {
			prod.addCCNumber(done);
		})
	});
	describe('Add Credit Card Expiration Month', function () {
		it('should add expiration month', function (done) {
			prod.addCCExpMonth(done);
		})
	});
	describe('Add Credit Card Expiration Year', function () {
		it('should add expiration year', function (done) {
			prod.addCCExpYear(done);
		})
	});
	describe('Add Credit Card Security Code', function () {
		it('should add credit card security code', function (done) {
			prod.addCCSecurity(done);
		})
	});
	describe('Click the Review Order button', function () {
		it('should proceed to the Review Order page', function (done) {
			common.reviewOrder(done);
		})
	});
	describe('pausing', function () {
		it('should pause the test', function (done) {
			common.pause(done);
		})
	});
	describe('Verify Shipping Header', function () {
		it('should verify Shipping header is correct', function (done) {
			common.verifyShippingTitle(done);
		})
	});
	describe('Verify Shipping Info', function () {
		it('should verify Shipping information is correct', function (done) {
			prod.verifyShippingInfo(done);
		})
	});
	describe('Verify Card Owner', function () {
		it('should verify Card Owner is correct', function (done) {
			prod.verifyPaymentName(done);
		})
	});
	describe('Verify Payment Type', function () {
		it('should verify Payment Type is correct', function (done) {
			prod.verifyPaymentType(done);
		})
	});
	describe('Verify Card Number', function () {
		it('should verify Card Number is correct', function (done) {
			prod.verifyPaymentNumber(done);
		})
	});
	describe('Verify Card Expiration', function () {
		it('should verify Card Expiration is correct', function (done) {
			prod.verifyPaymentExpire(done);
		})
	});
	describe('Verify Billing Info', function () {
		it('should verify Billing information is correct', function (done) {
			prod.verifyBillingInfo(done);
		})
	});
	describe('pausing', function () {
		it('should pause the test', function (done) {
			common.pause(done);
		})
	});
	describe('Submit Payment', function () {
		it('should click the Place Your Order button', function (done) {
			common.submitPayment(done);
		})
	});
	describe('pausing', function () {
		it('should pause the test', function (done) {
			common.pause(done);
		})
	});
	describe('Confirm Order Error', function () {
		it('should confirm an Order error is displayed', function (done) {
			common.verifyOrderError(done);
		})
	});
	describe('Get Screenshot', function () {
		it('should take a screenshot of the confirm page', function (done) {
			common.getScreenshot(done);
		})
	});

	//after(function (done) {
	//    common.end(done);
	//});
})