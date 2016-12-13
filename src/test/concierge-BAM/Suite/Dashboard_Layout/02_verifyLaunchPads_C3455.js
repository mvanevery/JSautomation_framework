/**
 * Project:     Concierge-BAM
 * TestName:    Dashboard/02_verifyLaunchPad_C3455
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/3355
 * Author:      Aaron Feldmeyer
 * Date:        12/12/2016
 *
 * Execute through the "Dashboard Test Suite".
 */

const common = require('../../../../core/projects/concierge-BAM/helpers/common');



  describe('Test the Launch Pads on the dashboard.', () => {

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
      it('Should pause the test for 2 seconds', (done) => {
        common.pause(done, 2000);
      });
    });

    // Verify Visual Merchandising
    describe('Evaluate "Visual Merchandising"', () => {
      it('Should verify that "Visual Merchandising" appears within the main section of the dashboard.', (done) => {
        common.dashboardElementVisible(done, "img_vmWiki", true);
      });
    });
    describe('Evaluate the "Visual Merchandising" URL', () => {
      it('Should verify the "Visual Merchandising" URL is correct', (done) => {
        common.dashboardElementVisible(done, "url_vmWiki", true);
      });
    });

    // Verify Procedures and Policies
    describe('Evaluate "Procedures & Policies"', () => {
      it('Should verify that "Procedures & Policies" appears within the main section of the dashboard.', (done) => {
        common.dashboardElementVisible(done, "img_ppWiki", true);
      });
    });
    describe('Evaluate the "Procedures & Policies" URL', () => {
      it('Should verify the "Procedures & Policies" URL is correct', (done) => {
        common.dashboardElementVisible(done, "url_ppWiki", true);
      });
    });

    // Verify Joe Muggs
    describe('Evaluate "Joe Muggs"', () => {
      it('Should verify that "Joe Muggs" appears within the main section of the dashboard.', (done) => {
        common.dashboardElementVisible(done, "img_jmWiki", true);
      });
    });
    describe('Evaluate the "Joe Muggs" URL', () => {
      it('Should verify the "Joe Muggs" URL is correct', (done) => {
        common.dashboardElementVisible(done, "url_jmWiki", true);
      });
    });

    // Verify Yogurt Mountain
    describe('Evaluate "Yogurt Mountain"', () => {
      it('Should verify that "Yogurt Mountain" appears within the main section of the dashboard.', (done) => {
        common.dashboardElementVisible(done, "img_ymWiki", true);
      });
    });
    describe('Evaluate the "Yogurt Mountain" URL', () => {
      it('Should verify the "Yogurt Mountain" URL is correct', (done) => {
        common.dashboardElementVisible(done, "url_ymWiki", true);
      });
    });


    describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
      });
    });

});
