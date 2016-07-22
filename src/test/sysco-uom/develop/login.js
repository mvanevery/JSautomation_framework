const common = require('../../../core/projects/sysco-uom/helpers/login');

describe('Sysco UOM Stuffs', () => {
  before((done) => {
    common.goTo(done);
  });
  describe('Setting up the site', () => {
    it('should set up the site to test', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Be a thing', () => {
    it('should be a thing', (done) => {
      common.login(done);
    });
  });
  after((done) => {
    common.end(done);
  });
});
