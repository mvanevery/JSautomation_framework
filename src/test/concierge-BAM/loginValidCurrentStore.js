/**
 * From command line type:
 *      gulp initiate-loginValidCurrentStore --archon:concierge-BAM --test:loginValidCurrentStore --client:firefox
 */

const common = require('../../core/projects/concierge-BAM/helpers/common');
const landingPage = require('../../core/projects/concierge-BAM/selectors/landingPage');
const loginPage = require('../../core/projects/concierge-BAM/selectors/loginPage');

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
      landingPage.verifyLoginScreen(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Login', () => {
    it('Should login as "180001"', (done) => {
      landingPage.loginUser(done,180001,1234);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Verify BAM landing page', () => {
    it('Should navigate to the BAM landing page', (done) => {
      loginPage.verifyBamLandingPage(done, "Company News");
    });
  });


});
