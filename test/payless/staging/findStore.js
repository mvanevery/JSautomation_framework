const common = require('../../../core/projects/payless/helpers/common');

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
  describe('Click Geolocation Button', () => {
    it('should click the geolocation button', (done) => {
      common.clickGeolocation(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(7500, done);
    });
  });
  describe('Verify Store Address (this may take a while)', () => {
    it('should verify the store address', (done) => {
      common.verifyStoreAddress(done);
    });
  });
  after((done) => {
    common.end(done);
  });
});
