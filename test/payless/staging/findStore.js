const common = require('../../../core/helpers/common');

describe('Testing Find A Store', () => {
  before((done) => {
    common.goTo(done);
  });
  describe('Setting up the site', () => {
    it('should set up the site to test', (done) => {
      common.pause(2500, done);
    });
  });
  describe('Opening Find A Store', () => {
    it('should go to the Find A Store page', (done) => {
      common.openFindAStore(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Search for Store using zipcode', () => {
    it('should search for stores via Zipcode', (done) => {
      common.searchZipcodeFAS(done, 33759);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(3000, done);
    });
  });
  describe('Verify Store Address (this may take a while)', () => {
    it('should verify the store address', (done) => {
      common.verifyStoreAddress(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(2500, done);
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
