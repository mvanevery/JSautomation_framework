/**
 * Project:     Concierge-BAM
 * Test Name:   loginInvalid_C2706
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/2706
 * Author:      Aaron Feldmeyer
 * Date:        11/1/2016
 *
 * From command line type:
 *      gulp initiate-<TestName> --archon:concierge-BAM --test:<TestName> --client:chrome
 */

const common = require('../../core/projects/concierge-BAM/helpers/common');

describe('Attempt to login as an invalid user.', () => {
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
    it('Should not login as "111111"', (done) => {
      common.loginUser(done,111111,1234);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify the login error', () => {
    it('Should view the login error', (done) => {
      common.verifyLoginError(done);
    });
  });


});
