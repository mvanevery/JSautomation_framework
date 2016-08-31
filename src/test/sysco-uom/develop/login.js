const login = require('../../../core/projects/sysco-uom/helpers/login');

describe('Sysco UOM Stuffs', () => {
  before((done) => {
    login.goToChrome(done);
  });
  describe('Setting up the site', () => {
    it('should set up the site to test', (done) => {
      login.pause(done, 5000);
    });
  });
  describe('Be a thing', () => {
    it('should be a thing', (done) => {
      login.login(done);
    });
  });
  //after((done) => {
  //  login.end(done);
  //});
});
