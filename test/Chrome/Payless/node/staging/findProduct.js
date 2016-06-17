const common = require('../../../../../core/helpers/common');

describe('Testing Find A Product', () => {
  before((done) => {
    common.goTo(done);
  });
  describe('Setting viewport size', () => {
    it('should launch in mobile view', (done) => {
      common.mobileView(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Searching for an Item', () => {
    it('should search for an item', (done) => {
      common.searchItem(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Verifying Item Title', () => {
    it('should verify item title', (done) => {
      common.verifyItemTitle('SAFE STEP SOLE PADS', done);
    });
  });
  describe('Verifying Item Number', () => {
    it('should verify item number', (done) => {
      common.verifyItemNumber('142898', done);
    });
  });
  after((done) => {
    common.end(done);
  });
});

