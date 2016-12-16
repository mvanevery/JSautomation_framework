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
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

    // Verify Visual Merchandising
    describe('Evaluate the "Visual Merchandising" URL', () => {
      it('Should verify the "Visual Merchandising" URL is correct', (done) => {
        common.verifyURL(done, "img_vmWiki", true, "url_vmWiki");
      });
    });

    // Verify Procedures and Policies
    describe('Evaluate the "Procedures & Policies" URL', () => {
      it('Should verify the "Procedures & Policies" URL is correct', (done) => {
        common.verifyURL(done, "img_ppWiki", true, "url_ppWiki");
      });
    });

    // Verify Joe Muggs
    describe('Evaluate the "Joe Muggs" URL', () => {
      it('Should verify the "Joe Muggs" URL is correct', (done) => {
        common.verifyURL(done, "img_jmWiki", true, "url_jmWiki");
      });
    });

    // Verify Yogurt Mountain
    describe('Evaluate the "Yogurt Mountain" URL', () => {
      it('Should verify the "Yogurt Mountain" URL is correct', (done) => {
        common.verifyURL(done, "img_ymWiki", true, "url_ymWiki");
      });
    });


    describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
      });
    });

});
