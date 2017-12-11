/**
 * Project:     Concierge-BAM
 * TestName:    Suite-Login/03_loginValidCurrentSore_C2703
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/2703
 * Author:      Aaron Feldmeyer
 * Date:        11/3/2016
 *
 * Execute through the "LoginTestSuite".
 */

const common = require('../../../../core/projects/concierge-BAM/helpers/common');


describe('Login as a valid user at the current store.', () => {


  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });

  describe('Login', () => {
    it('Should login as "180001"', (done) => {
      common.loginUser(done,180001,1234);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 8 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Verify BAM landing page', () => {
    it('Should navigate to the BAM landing page', (done) => {
      common.verifyBamLandingPage(done);
    });
  });

  describe('Verify BAM store number', () => {
    it('Should verify that the store number is #180', (done) => {
      common.verifyStoreNum(done,'#180');
    });
  });


// Logout

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

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

});