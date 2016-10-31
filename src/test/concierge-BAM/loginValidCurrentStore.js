/**
 * From command line type:
 *      gulp initiate-loginValidCurrentStore --archon:concierge-BAM --test:loginValidCurrentStore --client:firefox
 */

const common = require('../../core/projects/concierge-BAM/helpers/common');
const loginPage = require('../../core/projects/concierge-BAM/selectors/loginPage');
const landingPage = require('../../core/projects/concierge-BAM/selectors/landingPage');

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
      loginPage.verifyLoginScreen(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Login', () => {
    it('Should login as "180001"', (done) => {
      loginPage.loginUser(done,180001,1234);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Verify BAM landing page', () => {
    it('Should navigate to the BAM landing page', (done) => {
      landingPage.verifyBamLandingPage(done, "Company News");
    });
  });


});
