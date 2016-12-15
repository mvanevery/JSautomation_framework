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
    it('Should pause the test for 15 seconds', (done) => {
      common.pause(done, 15000);
    });
  });

// describe('Test the Associate Resources links.', () => {
//
//   describe('Pausing', () => {
//     it('Should pause the test for 5 seconds', (done) => {
//       common.pause(done, 5000);
//     });
//   });

  // Verify the <Associate Feedback Survey> link
  describe('Evaluate "Associate Feedback Survey"', () => {
    it('Should verify that "Associate Feedback Survey" appears within the Associate Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_associateFeedback", true);
    });
  });
  describe('Evaluate the "Associate Feedback Survey" URL', () => {
    it('Should verify the "Associate Feedback Survey" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_associateFeedback", true);
    });
  });

  // Verify the <Associate Magazine Center> link
  describe('Evaluate "Associate Magazine Center"', () => {
    it('Should verify that "Associate Magazine Center" appears within the Associate Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_associateMagCenter", true);
    });
  });
  describe('Evaluate the "Associate Magazine Center" URL', () => {
    it('Should verify the "Associate Magazine Center" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_associateMagCenter", true);
    });
  });

  // Verify the <Associate Self Service> link
  describe('Evaluate "Associate Self Service"', () => {
    it('Should verify that "Associate Self Service" appears within the Associate Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_associateSelfServe", true);
    });
  });
  describe('Evaluate the "Associate Self Service" URL', () => {
    it('Should verify the "Associate Self Service" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_associateSelfServe", true);
    });
  });

  // Verify the <BAM! University> link
  describe('Evaluate "BAM! University"', () => {
    it('Should verify that "BAM! University" appears within the Associate Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_bamUniversity", true);
    });
  });
  describe('Evaluate the "BAM! University" URL', () => {
    it('Should verify the "BAM! University" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_bamUniversity", true);
    });
  });

  // Verify the <BAM! Company Store> link
  describe('Evaluate "BAM! Company Store"', () => {
    it('Should verify that "BAM! Company Store" appears within the Associate Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_bamStore", true);
    });
  });
  describe('Evaluate the "BAM! Company Store" URL', () => {
    it('Should verify the "BAM! Company Store" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_bamStore", true);
    });
  });

  // Verify the <Bright Ideas> link
  describe('Evaluate "Bright Ideas"', () => {
    it('Should verify that "Bright Ideas" appears within the Associate Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_brightIdeas", true);
    });
  });
  describe('Evaluate the "Bright Ideas" URL', () => {
    it('Should verify the "Bright Ideas" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_brightIdeas", true);
    });
  });

  // Verify the <Exit Survey> link
  describe('Evaluate "Exit Survey"', () => {
    it('Should verify that "Exit Survey" appears within the Associate Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_exitSurvey", true);
    });
  });
  describe('Evaluate the "Exit Survey" URL', () => {
    it('Should verify the "Exit Survey" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_exitSurvey", true);
    });
  });


  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });


});
