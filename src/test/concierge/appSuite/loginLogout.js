/**
 * ios_webkit_debug_proxy -c dff8ad9bb716a56766d98b2232c3f541ba9bb796:27753 -d (start proxy)
 *
 * appium (start server)
 *
 * run test with appium flag for client
 */

const common = require('../../../core/projects/concierge/helpers/common');

describe('Smoke Test: Login and Logout as "qaUser"', () => {
  before((done) => {
    common.goTo(done);
  });

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
      common.pause(done, 3000);
    });
  });

  describe('Login', () => {
    it('Should login as "qaUser"', (done) => {
      common.loginUser(done, 'qaUser', 'qaUser@123');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Verify Concierge Screen', () => {
    it('Should navigate to the Concierge screen', (done) => {
      common.verifyConciergeScreen(done);
    });
  });
  describe('Logout', () => {
    it('Should logout the current user', (done) => {
      common.logoutUser(done);
    });
  });
  after((done) => {
    common.end(done);
  });
});
