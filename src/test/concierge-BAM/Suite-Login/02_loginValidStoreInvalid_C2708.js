/**
 * Project:     Concierge-BAM
 * TestName:    Suite-Login/02_loginValidStoreInvalid_C2708
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/2708
 * Author:      Aaron Feldmeyer
 * Date:        11/3/2016
 *
 * Execute through the "LoginTestSuite".
 */

const common = require('../../../core/projects/concierge-BAM/helpers/common');


describe('Login as a valid user but with an invalid store number.', () => {
  // before((done) => {
  //   common.goTo(done);
  // });

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

  describe('Verify the login error', () => {
    it('Should view the login error', (done) => {
      common.verifyLoginError(done);
    });
  });


});
