/**
 * Project:     Concierge-BAM
 * TestName:    Dashboard/05_rightPanelLinks_C298
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/298
 * Author:      Aaron Feldmeyer
 * Date:        12/19/2016
 *
 * Execute through the "DashboardLayoutTestSuite".
 */

const common = require('../../../../core/projects/concierge-BAM/helpers/common');


describe('Test the Right Panel links.', () => {

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  // Verify the <Time Clock> link
  describe('Evaluate the "Time Clock" URL', () => {
    it('Should verify the "Time Clock" URL is correct', (done) => {
      common.verifyURL(done, "btn_rightTimeClock", true, "lnk_rightTimeClock");
    });
  });

  // Verify the <Task Management> link
  describe('Evaluate the "Task Management" URL', () => {
    it('Should verify the "Task Management" URL is correct', (done) => {
      common.verifyURL(done, "btn_taskMgmt", true, "lnk_taskMgmt");
    });
  });

  // Verify the <Customer Service Experience> link
  describe('Evaluate the "Customer Service Experience" URL', () => {
    it('Should verify the "Customer Service Experience" URL is correct', (done) => {
      common.verifyURL(done, "btn_custExperience", true, "lnk_custExperience");
    });
  });

  // Verify the <Store Locator> link
  describe('Evaluate the "Store Locator" URL', () => {
    it('Should verify the "Store Locator" URL is correct', (done) => {
      common.verifyURL(done, "btn_storeLocator", true, "lnk_storeLocator");
    });
  });

  // Verify the <Bookmark Rewards> link
  describe('Evaluate the "Bookmark Rewards" URL', () => {
    it('Should verify the "Bookmark Rewards" URL is correct', (done) => {
      common.verifyURL(done, "btn_bookmark", true, "lnk_bookmark");
    });
  });

  //  Verify the <Career Opportunities> link
  describe('Evaluate the "Career Opportunities" URL', () => {
    it('Should verify the "Career Opportunities" URL is correct', (done) => {
      common.verifyURL(done, "btn_opportunities", true, "lnk_opportunities");
    });
  });

  // Verify the <Website Feedback> link
  describe('Evaluate the "Website Feedback" URL', () => {
    it('Should verify the "Website Feedback" URL is correct', (done) => {
      common.verifyURL(done, "btn_feedback", true, "lnk_feedback");
    });
  });


  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });


})
