/**
 * Project:     Concierge-BAM
 * TestName:    Dashboard/03_associateResourceLinks_C282
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/282
 * Author:      Aaron Feldmeyer
 * Date:        12/15/2016
 *
 * Execute through the "DashboardLayoutTestSuite".
 */

const common = require('../../../../core/projects/concierge-BAM/helpers/common');


describe('Test the Associate Resources links.', () => {

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  // Verify the <Associate Feedback Survey> link
  describe('Evaluate the "Associate Feedback Survey" URL', () => {
    it('Should verify the "Associate Feedback Survey" URL is correct', (done) => {
      common.verifyURL(done, "btn_associateFeedback", true, "lnk_associateFeedback");
    });
  });

  // Verify the <Associate Magazine Center> link
  describe('Evaluate the "Associate Magazine Center" URL', () => {
    it('Should verify the "Associate Magazine Center" URL is correct', (done) => {
      common.verifyURL(done, "btn_associateMagCenter", true, "lnk_associateMagCenter");
    });
  });

  // Verify the <Associate Self Service> link
  describe('Evaluate the "Associate Self Service" URL', () => {
    it('Should verify the "Associate Self Service" URL is correct', (done) => {
      common.verifyURL(done, "btn_associateSelfServe", true, "lnk_associateSelfServe");
    });
  });

  // Verify the <BAM! University> link
  describe('Evaluate the "BAM! University" URL', () => {
    it('Should verify the "BAM! University" URL is correct', (done) => {
      common.verifyURL(done, "btn_bamUniversity", true, "lnk_bamUniversity");
    });
  });

  // Verify the <BAM! Company Store> link
  describe('Evaluate the "BAM! Company Store" URL', () => {
    it('Should verify the "BAM! Company Store" URL is correct', (done) => {
      common.verifyURL(done, "btn_bamStore", true, "lnk_bamStore");
    });
  });

  //  Verify the <Bright Ideas> link
  describe('Evaluate the "Bright Ideas" URL', () => {
    it('Should verify the "Bright Ideas" URL is correct', (done) => {
      common.verifyURL(done, "btn_brightIdeas", true, "lnk_brightIdeas");
    });
  });

  // Verify the <Exit Survey> link
  describe('Evaluate the "Exit Survey" URL', () => {
    it('Should verify the "Exit Survey" URL is correct', (done) => {
      common.verifyURL(done, "btn_brightIdeas", true, "lnk_brightIdeas");
    });
  });


  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });


})
