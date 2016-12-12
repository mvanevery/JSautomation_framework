/**
 * Project:     Concierge-BAM
 * TestName:    Dashboard/01_verifyDashboardModules_C3334
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/3334
 * Author:      Aaron Feldmeyer
 * Date:        12/10/2016
 *
 * Execute through the "Dashboard Test Suite".
 */

const common = require('../../../../core/projects/concierge-BAM/helpers/common');


  describe('Test the layout of the dashboard.', () => {
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
    it('Should pause the test for 8 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Evaluate Company News', () => {
    it('Should verify that the Company News exists on the Dashboard', (done) => {
      common.dashboardElementVisible(done, 'txt_companyNewsPanel', true);
    });
  });


});
