/**
 * Project:     Concierge
 * Test Name:   loginLogout
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/985
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/991
 * Author:      Mike Van Every
 * Date:        11/1/2016
 *
 * ios_webkit_debug_proxy -c dff8ad9bb716a56766d98b2232c3f541ba9bb796:27753 -d (start proxy)
 *
 * appium (start server)
 *
 * run test with appium flag for client
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');

describe('Smoke Test: Login and Logout as "testauto"', () => {
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
      login.verifyLoginScreen(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Login', () => {
    it('Should login as "testauto"', (done) => {
      login.loginUser(done, true, 'testauto', 'qaUser@123');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 8 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Verify Concierge Screen', () => {
    it('Should navigate to the Concierge screen', (done) => {
      landing.verifyConciergeScreen(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Logout', () => {
    it('Should logout the current user', (done) => {
      login.logoutUser(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

});
