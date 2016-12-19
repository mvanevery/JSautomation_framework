/**
 * Project:     Concierge-BAM
 * TestName:    00_launch_and_login
 * TestSteps:
 * Author:      Aaron Feldmeyer
 * Date:        12/19/2016
 */

const common = require('../../../../core/projects/concierge-BAM/helpers/common');


describe('Launch browser and login.', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Pausing', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.logpinPageElementVisible(done, 'btn_signIn', true);
    });
  });

  describe('Login', () => {
    it('Should login as "180001"', (done) => {
      common.loginUser(done,180001,1234);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 15 seconds', (done) => {
      common.pause(done, 15000);
    });
  });


});
