const common = require('../core/projects/concierge/helpers/common');

describe('Smoke Test: Login as "ssales"', () => {
  before((done) => {
    common.openBrowser(done);
  });

  describe('Enter Provision Key', () => {
    it('Should populate the provision key', (done) => {
      common.enterProvisionTalbots(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done);
    });
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });

  describe('Login', () => {
    it('Should login as "ssales"', (done) => {
      common.loginSsales(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done);
    });
  });

  describe('Verify Concierge Screen', () => {
    it('Should navigate to the Concierge screen', (done) => {
      common.verifyConciergeScreen(done);
    });
  });

  after((done) => {
    common.end(done);
  });
});
