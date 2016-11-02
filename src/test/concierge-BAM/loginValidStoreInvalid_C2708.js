/**
 * Project:     Concierge-BAM
 * Test Name:   loginValidStoreInvalid_C2708
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/2708
 * Author:      Aaron Feldmeyer
 * Date:        11/2/2016
 *
 * From command line type:
 *      gulp initiate-<TestName> --archon:concierge-BAM --test:<TestName> --client:chrome
 */


const common = require('../../core/projects/concierge-BAM/helpers/common');
// const loginPage = require('../../core/projects/concierge-BAM/selectors/loginPage');
// const landingPage = require('../../core/projects/concierge-BAM/selectors/landingPage');

describe('Login as a valid user but with an invalid store number.', () => {
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
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Login', () => {
    it('Should login as "180001"', (done) => {
      common.loginUser(done,180001,1234,9999);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify BAM landing page', () => {
    it('Should navigate to the BAM landing page', (done) => {
      common.verifyBamLandingPage(done);
    });
  });

  describe('Verify the login error', () => {
    it('Should view the login error', (done) => {
      common.verifyLoginError(done);
    });
  });


});
