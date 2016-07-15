const common = require('../../../core/projects/sysco-uom/helpers/login');

describe('Sysco UOM Stuffs', () => {
  before((done) => {
    common.goTo(done);
  });
  describe('Setting up the site', () => {
    it('should set up the site to test', (done) => {
      common.pause(2500, done);
    });
  });
  describe('Be a thing', () => {
    it('should be a thing', (done) => {
      common.login(done, 'squomnorm42', 'welcome1');
    });
  });
  //after((done) => {
  //  common.end(done);
  //});
});
