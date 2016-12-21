/**
 * Project:     Concierge
 * Test Name:   loginValidUserInvalidPass
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/15
 * Author:      Mike Van Every
 * C16 - Attempt Login with valid username and invalid password
 * Date:        12/21/2016
 *
 */

const common = require('../../../core/projects/concierge/helpers/common');
const login = require('../../../core/projects/concierge/helpers/loginPage');

describe('Smoke Test: Login with valid username and invalid password.', () => {
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
    it('Should login with no data. No Username, no Password', (done) => {
      login.loginUser(done, true, 'testauto', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 8 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Verify User is still at the Login Screen', () => {
    it('Should remain on the login screen', (done) => {
      login.verifyLoginScreen(done, true);
    });
  });

  describe('Test Completed: Cleaning up', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });


})
