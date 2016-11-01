/**
 * Project:     Concierge-BAM
 * Test Name:   logout_C2705
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/2705
 * Author:      Aaron Feldmeyer
 * Date:        11/1/2016
 *
 * From command line type:
 *      gulp initiate-<TestName> --archon:concierge-BAM --test:<TestName> --client:chrome
 */

const common = require('../../core/projects/concierge-BAM/helpers/common');
// const loginPage = require('../../core/projects/concierge-BAM/selectors/loginPage');
// const landingPage = require('../../core/projects/concierge-BAM/selectors/landingPage');

describe('Login as a valid user.', () => {
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
      common.pause(done, 5000);
    });
  });

  describe('Login', () => {
    it('Should login as "180001"', (done) => {
      common.loginUser(done,180001,1234);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Verify BAM landing page', () => {
    it('Should navigate to the BAM landing page', (done) => {
      common.verifyBamLandingPage(done, "Company News");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Select the user Avatar', () => {
    it('Should open the logout modal.', (done) => {
      common.selectAvatar(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Click the Logout button', () => {
    it('Should logout the user.', (done) => {
      common.selectLogout(done);
    });
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

});
