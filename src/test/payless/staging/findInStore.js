const common = require('../../../core/projects/payless/helpers/common');

describe('Testing Find In Store', () => {
  before((done) => {
    common.goTo(done);
  });
  describe('Setting up the site', () => {
    it('should set up the site to test', (done) => {
      common.pause(2500, done);
    });
  });
  describe('Open Menu', () => {
    it('should see the menu open', (done) => {
      common.openMenu(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(2500, done);
    });
  });
  describe('Selecting category', () => {
    it('should pick a category', (done) => {
      common.pickCategory(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(2500, done);
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
      common.pause(7500, done);
    });
  });
  describe('Selecting a Size', () => {
    it('should select t size', (done) => {
      common.selectSize(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('find in store', () => {
    it('should click find in stores link', (done) => {
      common.openFindInStore(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(3000, done);
    });
  });
  describe('Search for Store using zipcode', () => {
    it('should search for stores via Zipcode', (done) => {
      common.searchZipcodeFIS(done, 33759);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(10000, done);
    });
  });
  describe('Verify Store Address', () => {
    it('should verify the store address (this may take a while)', (done) => {
      common.verifyStoreAddress(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Screenshot the results', () => {
    it('should take a screenshot of the results', (done) => {
      common.getScreenshot(done, 'test');
    });
  });
  after((done) => {
    common.end(done);
  });
});
