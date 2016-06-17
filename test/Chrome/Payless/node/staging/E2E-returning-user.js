const common = require('../../../../../core/helpers/common');

describe('Testing End to End - Returning User: CC', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Setting viewport size', () => {
    it('should launch in mobile view', (done) => {
      common.mobileView(done);
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
  describe('Proceed to Cart', () => {
    it('should click Proceed to Cart on the modal', (done) => {
      common.proceedToCartModal(done);
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
      common.pause(15000, done);
    });
  });
  describe('refresh the page', () => {
    it('should refresh the page', (done) => {
      common.refreshPage(done);
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
  describe('Selects Shipping Address Dropdown', () => {
    it('should pick a saved address from the dropdown', (done) => {
      common.clickGeolocation(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(15000, done);
    });
  });
  describe('Selects Store to Ship To', () => {
    it('should pick a store from the list of stores', (done) => {
      common.selectStore(done);
    });
  });
  describe('Click Continue to Payment', () => {
    it('proceed to payment section', (done) => {
      common.proceedToPayment(done);
    });
  });
  describe('Confirm typed Shipping Address', () => {
    it('should confirm Shipping Address', (done) => {
      common.useTypedAddress(done);
    });
  });
  after((done) => {
    common.end(done);
  });
});
