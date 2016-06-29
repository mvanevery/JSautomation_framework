const common = require('../../../../../core/helpers/common');

describe('Testing Home Page', () => {
  before((done) => {
    common.goTo(done);
  });
  describe('Open Menu', () => {
    it('should see the menu open', (done) => {
      common.openMenu(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(2000, done);
    });
  });
  describe('Selecting category', () => {
    it('should pick a category', (done) => {
      common.pickCategory(done);
    });
  });
  describe('Selecting Style', () => {
    it('should pick a style', (done) => {
      common.pickStyle(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Selecting Item', () => {
    it('should pick an item', (done) => {
      common.pickItem(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(2000, done);
    });
  });
  describe('Selecting a Size', () => {
    it('should select a size', (done) => {
      common.selectSize(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(2000, done);
    });
  });
  describe('Adding item to Bag', () => {
    it('should add item to bag', (done) => {
      common.addToBag(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(2000, done);
    });
  });
  describe('Proceed to Cart', () => {
    it('should click Proceed to Cart on the modal', (done) => {
      common.proceedToCartModal(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Proceed to Checkout', () => {
    it('should proceed to Checkout from Cart', (done) => {
      common.proceedToCheckoutCart(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(3000, done);
    });
  });
  describe('Add First Name (shipping)', () => {
    it('should add first name to shipping', (done) => {
      common.addShipFirstName(done);
    });
  });
  describe('Add Last Name (shipping)', () => {
    it('should add last name to shipping', (done) => {
      common.addShipLastName(done);
    });
  });
  describe('Add Address 1 (shipping)', () => {
    it('should add address 1 to shipping', (done) => {
      common.addShipAddress(done);
    });
  });
  describe('Add Address 2 (shipping)', () => {
    it('should add address 2 to shipping', (done) => {
      common.addShipAddress2(done);
    });
  });
  describe('Add City (shipping)', () => {
    it('should add City to shipping', (done) => {
      common.addShipCity(done);
    });
  });
  describe('Add State (shipping)', () => {
    it('should add State to shipping', (done) => {
      common.addShipState(done);
    });
  });
  describe('Add Zipcode (shipping)', () => {
    it('should add Zipcode to shipping', (done) => {
      common.addShipZipcode(done);
    });
  });
  describe('Add Phone (shipping)', () => {
    it('should add Phone to shipping', (done) => {
      common.addShipPhone(done);
    });
  });
  describe('Add Email (shipping)', () => {
    it('should add Email to shipping', (done) => {
      common.addShipEmail(done);
    });
  });
  describe('Click Continue to Billing', () => {
    it('proceed to Billing section', (done) => {
      common.proceedToBilling(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(2000, done);
    });
  });
  describe('Confirm typed Shipping Address', () => {
    it('should confirm Shipping Address', (done) => {
      common.useTypedAddress(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Add Credit Card Owner', () => {
    it('should add credit card owner name', (done) => {
      common.addCCName(done);
    });
  });
  describe('Add Credit Card Number', () => {
    it('should add credit card number', (done) => {
      common.addCCNumber(done);
    });
  });
  describe('Add Credit Card Expiration Month', () => {
    it('should add expiration month', (done) => {
      common.addCCExpMonth(done);
    });
  });
  describe('Add Credit Card Expiration Year', () => {
    it('should add expiration year', (done) => {
      common.addCCExpYear(done);
    });
  });
  describe('Add Credit Card Security Code', () => {
    it('should add credit card security code', (done) => {
      common.addCCSecurity(done);
    });
  });
  describe('Click the Review Order button', () => {
    it('should proceed to the Review Order page', (done) => {
      common.reviewOrder(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Verify Shipping Info', () => {
    it('should verify Shipping information is correct', (done) => {
      common.verifyShipToAddress(done);
    });
  });
  describe('Verify Payment Info', () => {
    it('should verify Payment information is correct', (done) => {
      common.verifyPaymentInfo(done);
    });
  });
  describe('Verify Billing Info', () => {
    it('should verify Billing information is correct', (done) => {
      common.verifyBillInfoSTA(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(1000, done);
    });
  });
  describe('Submit Payment', () => {
    it('should click the Place Your Order button', (done) => {
      common.submitPayment(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(7500, done);
    });
  });
  describe('Confirm Order', () => {
    it('should confirm an Order was placed', (done) => {
      common.verifyConfirmOrder(done);
    });
  });
  after((done) => {
    common.end(done);
  });
});
