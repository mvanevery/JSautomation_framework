/**
 * Created by mvanevery on 7/14/2016.
 */
const common = require('../../../core/projects/payless/helpers/common');
const prod = require('../../../core/projects/payless/helpers/common-production');

describe('Testing End to End Production', () => {
  before((done) => {
    common.goTo(done);
  });
  describe('Setting up the site', () => {
    it('should set up the site to test', (done) => {
      common.pause(done, 2500);
    });
  });
  describe('Open Menu', () => {
    it('should see the menu open', (done) => {
      common.openMenu(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(done, 2000);
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
      common.pause(done, 5000);
    });
  });
  describe('Selecting Item', () => {
    it('should pick an item', (done) => {
      common.pickItem(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(done, 2000);
    });
  });
  describe('Selecting a Size', () => {
    it('should select a size', (done) => {
      common.selectSize(done, '9');
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(done, 2000);
    });
  });
  describe('Adding item to Bag', () => {
    it('should add item to bag', (done) => {
      common.addToBag(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(done, 2000);
    });
  });
  describe('Close Cart Modal', () => {
    it('should close cart modal', (done) => {
      common.closeModal(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(done, 2000);
    });
  });
  describe('Go To homepage', () => {
    it('should go to homepage', (done) => {
      common.gotoHomepage(done);
    });
 });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Screenshot the results', () => {
    it('should take a screenshot of the results', (done) => {
      common.getScreenshot(done, 'test');
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Go To Cart', () => {
    it('should go to Cart', (done) => {
      common.gotoCart(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Screenshot the results', () => {
    it('should take a screenshot of the results', (done) => {
      common.getScreenshot(done, 'test');
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(done, 5000);
    });
  });
  after((done) => {
    common.end(done);
  });
})
