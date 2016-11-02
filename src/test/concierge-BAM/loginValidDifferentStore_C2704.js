/**
 * Project:     Concierge-BAM
 * TestName:    loginValidDifferentSore_C2704
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/2704
 * Author:      Aaron Feldmeyer
 * Date:        11/2/2016
 *
 * From command line type:
 *      gulp initiate-<TestName> --archon:concierge-BAM --test:<TestName> --client:chrome
 */


const common = require('../../core/projects/concierge-BAM/helpers/common');
// const loginPage = require('../../core/projects/concierge-BAM/selectors/loginPage');
// const landingPage = require('../../core/projects/concierge-BAM/selectors/landingPage');

describe('Login as a valid user.', () => {
  before((done) => {
    //common.goTo(done,'https:\\serviceqa.booksamillion.com');
    common.goTo(done,'https://www.google.com');
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
    it('Should login as "180001" at store location 224.', (done) => {
      common.loginUser(done,180001,1234,224);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Verify BAM landing page', () => {
    it('Should navigate to the BAM landing page', (done) => {
      common.verifyBamLandingPage(done);
    });
  });

  describe('Verify BAM store number', () => {
    it('Should verify that the store number is #224', (done) => {
      common.verifyStoreNum(done,'#224');
    });
  });


});
