/**
 * Project:     Concierge-BAM
 * TestName:    Dashboard/03_storeResourceLinks_C284
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/284
 * Author:      Aaron Feldmeyer
 * Date:        12/15/2016
 *
 * Execute through the "DashboardLayoutTestSuite".
 */

const common = require('../../../../core/projects/concierge-BAM/helpers/common');



describe('Test the Store Resources links.', () => {

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  // Verify the <Finance Portal> link
  describe('Evaluate the "Finance Portal" URL', () => {
    it('Should verify the "Finance Portal" URL is correct', (done) => {
      common.verifyURL(done, "btn_financePortal", true, "lnk_financePortal");
    });
  });

  // Verify the <MCC Search> link
  describe('Evaluate the "MCC Search" URL', () => {
    it('Should verify the "MCC Search" URL is correct', (done) => {
      common.verifyURL(done, "btn_mccSearch", true, "lnk_mccSearch");
    });
  });

  // Verify the <Customer Order Search> link
  describe('Evaluate the "Customer Order Search" URL', () => {
    it('Should verify the "Customer Order Search" URL is correct', (done) => {
      common.verifyURL(done, "btn_customerOrder", true, "lnk_customerOrder");
    });
  });

  // Verify the <Time Clock Management> link
  describe('Evaluate the "Time Clock Management" URL', () => {
    it('Should verify the "Time Clock Management" URL is correct', (done) => {
      common.verifyURL(done, "btn_timeClock", true, "lnk_timeClock");
    });
  });

  // Verify the <Reporting Folders> link
  describe('Evaluate the "Reporting Folders" URL', () => {
    it('Should verify the "Reporting Folders" URL is correct', (done) => {
      common.verifyURL(done, "btn_reportingFolders", true, "lnk_reportingFolders");
    });
  });

  // Verify the <Request Tracker> link
  describe('Evaluate the "Request Tracker" URL', () => {
    it('Should verify the "Request Tracker" URL is correct', (done) => {
      common.verifyURL(done, "btn_requestTracker", true, "lnk_requestTracker");
    });
  });

  // Verify the <DSI Supplies> link
  describe('Evaluate the "DSI Supplies" URL', () => {
    it('Should verify the "DSI Supplies" URL is correct', (done) => {
      common.verifyURL(done, "btn_dsiSupplies", true, "lnk_dsiSupplies");
    });
  });

  // Verify the <UPS Campus Ship> link
  describe('Evaluate the "UPS Campus Ship" URL', () => {
    it('Should verify the "UPS Campus Ship" URL is correct', (done) => {
      common.verifyURL(done, "btn_ups", true, "lnk_ups");
    });
  });

  // Verify the <Debit Management System> link
  describe('Evaluate the "Debit Management System" URL', () => {
    it('Should verify the "Debit Management System" URL is correct', (done) => {
      common.verifyURL(done, "btn_debitMS", true, "lnk_debitMS");
    });
  });

  // Verify the <Order Quote Tool> link
  describe('Evaluate the "Order Quote Tool" URL', () => {
    it('Should verify the "Order Quote Tool" URL is correct', (done) => {
      common.verifyURL(done, "btn_orderQuote", true, "lnk_orderQuote");
    });
  });

  // Verify the <Fastlane Voucher Search> link
  describe('Evaluate the "Fastlane Voucher Search" URL', () => {
    it('Should verify the "Fastlane Voucher Search" URL is correct', (done) => {
      common.verifyURL(done, "btn_fastlane", true, "lnk_fastlane");
    });
  });

  // Verify the <Webquiz Survey Link> link
  describe('Evaluate the "Webquiz Survey Link" URL', () => {
    it('Should verify the "Webquiz Survey Link" URL is correct', (done) => {
      common.verifyURL(done, "btn_webquiz", true, "lnk_webquiz");
    });
  });

  // Verify the <YOMO Supply Order> link
  describe('Evaluate the "YOMO Supply Order" URL', () => {
    it('Should verify the "YOMO Supply Order" URL is correct', (done) => {
      common.verifyURL(done, "btn_yomoSupply", true, "lnk_yomoSupply");
    });
  });

  // Verify the <Cafe Supply Order> link
  describe('Evaluate the "Cafe Supply Order" URL', () => {
    it('Should verify the "Cafe Supply Order" URL is correct', (done) => {
      common.verifyURL(done, "btn_cafeSupply", true, "lnk_cafeSupply");
    });
  });

  // Verify the <Save@BAM> link
  // describe('Evaluate "Save@BAM"', () => {
  //   it('Should verify that "Save@BAM" appears within the Store Resources section of the dashboard.', (done) => {
  //     common.dashboardElementVisible(done, "btn_saveBAM", true);
  //   });
  // });
  describe('Evaluate the "Save@BAM" URL', () => {
    it('Should verify the "Save@BAM" URL is correct', (done) => {
      common.verifyURL(done, "btn_saveBAM", true, "lnk_saveBAM");
    });
  });


  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });


});
