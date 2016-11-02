const common = require('../../../core/projects/concierge/helpers/common');

describe('Smoke Test: Login as "qauser"', () => {
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Login', () => {
    it('Should login as "qauser"', (done) => {
      common.loginUser(done);
    });
  });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds before set store id.', (done) => {
        common.pause(done, 5000);
      });
    });
});
