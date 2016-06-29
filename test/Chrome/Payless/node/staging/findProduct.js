const common = require('../../../../../core/helpers/common');

describe('Testing Find A Product', () => {
  before((done) => {
    common.goTo(done);
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
    it('should pause thte test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('Verifying Item Title', () => {
    it('should verify item title', (done) => {
      common.verifyItemTitle(done, 'SAFE STEP SOLE PADS');
    });
  });
  describe('pausing', () => {
    it('should pause thte test', (done) => {
      common.pause(2000, done);
    });
  });
  describe('Verifying Item Number', () => {
    it('should verify item number', (done) => {
      common.verifyItemNumber(done, '142899');
    });
  });
  //after((done) => {
  //  common.end(done);
  //});
});

