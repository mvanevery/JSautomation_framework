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


  describe('Test the layout of the dashboard and modules.', () => {

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

    describe('Evaluate "Company News"', () => {
      it('Should verify that "Company News" appears within the main section of the dashboard.', (done) => {
        common.dashboardElementVisible(done, "txt_companyNewsPanel", true);
      });
    });

    describe('Evaluate "Best Selling Items"', () => {
      it('Should verify that "Best Selling Items" appears within the main section of the dashboard.', (done) => {
        common.dashboardElementVisible(done, "txt_bestSellingItems", true);
      });
    });

    describe('Evaluate "Social Media"', () => {
      it('Should verify that "Social Media" appears within the main section of the dashboard.', (done) => {
        common.dashboardElementVisible(done, "txt_socialMedia", true);
      });
    });

    describe('Evaluate "Launch Pads"', () => {
      it('Should verify that "Launch Pads" appears within the main section of the dashboard.', (done) => {
        common.dashboardElementVisible(done, "txt_launchPad", true);
      });
    });

    describe('Evaluate "Store Resources"', () => {
      it('Should verify that "Store Resources" appears within the main section of the dashboard.', (done) => {
        common.dashboardElementVisible(done, "txt_storeResources", true);
      });
    });

    describe('Evaluate "Associate Resources"', () => {
      it('Should verify that "Launch Pads" appears within the main section of the dashboard.', (done) => {
        common.dashboardElementVisible(done, "txt_associateResources", true);
      });
    });

    describe('Evaluate "Reports"', () => {
      it('Should verify that "Reports" appears within the main section of the dashboard.', (done) => {
        common.dashboardElementVisible(done, "txt_reports", true);
      });
    });

    describe('Evaluate "Right-Panel"', () => {
      it('Should verify that "Right-Panel" appears within the main section of the dashboard.', (done) => {
        common.dashboardElementVisible(done, "txt_rightPanel", true);
      });
    });

    describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });


});
