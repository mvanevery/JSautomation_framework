const common = require('../../../../core/helpers/common-legacy');

describe('Testing Home Page', () => {
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
      common.pause(done);
    });
  });
  describe('Refresh the page', () => {
    it('should refresh the page to view mobile', (done) => {
      common.refresh(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(done);
    });
  });
  describe('Open Menu', () => {
    it('should see the menu open', (done) => {
      common.openMenu(done);
    });
  });
  after((done) => {
    common.end(done);
  });
});
