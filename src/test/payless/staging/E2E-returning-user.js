const common = require('../../../core/projects/payless/helpers/common');

describe('Testing End to End - Returning User: CC', () => {
  before((done) => {
    common.goTo(done);
  });
  describe('Setting up the site', () => {
    it('should set up the site to test', (done) => {
      common.pause(2500, done);
    });
  });
  describe('Searching for an Item', () => {
    it('should search for an item', (done) => {
      common.searchItem(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(7500, done);
    });
  });
  describe('Selecting a Size', () => {
    it('should select a size', (done) => {
      common.selectSize(done);
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
      common.pause(2000, done);
    });
  });
  describe('Proceed to Checkout', () => {
    it('should proceed to Checkout from Cart', (done) => {
      common.proceedToCheckoutCart(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Log in to Account', () => {
    it('should log in to your account', (done) => {
      common.loginButton(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Add Login info', () => {
    it('should add login info and log in to your account', (done) => {
      common.addLoginInfo(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('ship to store', () => {
    it('should add login info and log in to your account', (done) => {
      common.shipToStore(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(3000, done);
    });
  });
  describe('Search for Store using zipcode', () => {
    it('should search for stores via Zipcode', (done) => {
      common.searchZipcodeCheckout(done, 33607);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(3000, done);
    });
  });
  describe('Selects Store to Ship To', () => {
    it('should pick a store from the list of stores', (done) => {
      common.selectStore(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(3000, done);
    });
  });
  describe('Click Continue to Payment', () => {
    it('proceed to payment section', (done) => {
      common.proceedToBilling(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(3000, done);
    });
  });
  describe('Use the stored Billing address', () => {
    it('should add first name to shipping', (done) => {
      common.useBillDropdown(done);
    });
  });
  describe('Click Continue to Payment', () => {
    it('proceed to payment section', (done) => {
      common.proceedToPayment(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Use store Credit Card', () => {
    it('should apply stored credit card info', (done) => {
      common.useCCDropdown(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Add Credit Card Security Code', () => {
    it('should add credit card security code', (done) => {
      common.addCCSecurity(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Review Order', () => {
    it('should click the Review Your Order button', (done) => {
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
      common.verifyShipToStore(done);
    });
  });

  describe('Verify Billing Info', () => {
    it('should verify Billing information is correct', (done) => {
      common.verifyBillInfoSTS(done);
    });
  });

  describe('Verify Payment Info', () => {
    it('should verify Payment information is correct', (done) => {
      common.verifyPaymentInfo(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Submit Payment', () => {
    it('should click the Place Your Order button', (done) => {
      common.submitPayment(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Confirm Order', () => {
    it('should confirm atn Order was placed', (done) => {
      common.verifyConfirmOrder(done);
    });
  });
  after((done) => {
    common.end(done);
  });
});
