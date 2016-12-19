/**
 * Project:     Concierge-BAM
 * TestName:    99_logout_and_close_browser
 * TestSteps:
 * Author:      Aaron Feldmeyer
 * Date:        12/19/2016
 */

const common = require('../../../../core/projects/concierge-BAM/helpers/common');


describe('Logout and close the browser.', () => {


  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
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


// Close the browser

  describe('Ending the test', () => {
    it('Should close the broser', (done) => {
      common.end(done);
    });
  });

});
