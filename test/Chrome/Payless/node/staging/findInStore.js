const common = require('../../../../../core/helpers/common');

describe('Testing Find A Store', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Setting viewport size', () => {
    it('should launch in mobile view', (done) => {
      common.mobileView(done);
    });
  });
  describe('Open Menu', () => {
    it('should see the menu open', (done) => {
      common.openMenu(done);
    });
  });

  describe('Verifying menu open and getting text', () => {
    it('should confirm open menu and bag text', (done) => {
      common.menuVerify(done);
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
  describe('Selecting Item', () => {
    it('should pick an item', (done) => {
      common.pickItem(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(15000, done);
    });
  });
  describe('Selecting a Size', () => {
    it('should select a size', (done) => {
      common.selectSize(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(5000, done);
    });
  });
  describe('find in store', () => {
    it('should select a size', (done) => {
      common.openFindInStore(done);
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
  after((done) => {
    common.end(done);
  });
});
