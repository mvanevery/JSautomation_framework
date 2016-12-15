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
  describe('Evaluate "Finance Portal"', () => {
    it('Should verify that "Finance Portal" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_financePortal", true);
    });
  });
  describe('Evaluate the "Finance Portal" URL', () => {
    it('Should verify the "Finance Portal" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_financePortal", true);
    });
  });

  // Verify the <MCC Search> link
  describe('Evaluate "MCC Search"', () => {
    it('Should verify that "MCC Search" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_mccSearch", true);
    });
  });
  describe('Evaluate the "MCC Search" URL', () => {
    it('Should verify the "MCC Search" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_mccSearch", true);
    });
  });

  // Verify the <Customer Order Search> link
  describe('Evaluate "Customer Order Search"', () => {
    it('Should verify that "Customer Order Search" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_customerOrder", true);
    });
  });
  describe('Evaluate the "Customer Order Search" URL', () => {
    it('Should verify the "Customer Order Search" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_customerOrder", true);
    });
  });

  // Verify the <Time Clock Management> link
  describe('Evaluate "Time Clock Management"', () => {
    it('Should verify that "Time Clock Management" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_timeClock", true);
    });
  });
  describe('Evaluate the "Time Clock Management" URL', () => {
    it('Should verify the "Time Clock Management" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_timeClock", true);
    });
  });

  // Verify the <Reporting Folders> link
  describe('Evaluate "Reporting Folders"', () => {
    it('Should verify that "Reporting Folders" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_reportingFolders", true);
    });
  });
  describe('Evaluate the "Reporting Folders" URL', () => {
    it('Should verify the "Reporting Folders" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_reportingFolders", true);
    });
  });

  // Verify the <Request Tracker> link
  describe('Evaluate "Request Tracker"', () => {
    it('Should verify that "Request Tracker" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_requestTracker", true);
    });
  });
  describe('Evaluate the "Request Tracker" URL', () => {
    it('Should verify the "Request Tracker" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_requestTracker", true);
    });
  });

  // Verify the <DSI Supplies> link
  describe('Evaluate "DSI Supplies"', () => {
    it('Should verify that "DSI Supplies" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_dsiSupplies", true);
    });
  });
  describe('Evaluate the "DSI Supplies" URL', () => {
    it('Should verify the "DSI Supplies" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_dsiSupplies", true);
    });
  });

  // Verify the <UPS Campus Ship> link
  describe('Evaluate "UPS Campus Ship"', () => {
    it('Should verify that "UPS Campus Ship" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_ups", true);
    });
  });
  describe('Evaluate the "UPS Campus Ship" URL', () => {
    it('Should verify the "UPS Campus Ship" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_ups", true);
    });
  });

  // Verify the <Debit Management System> link
  describe('Evaluate "Debit Management System"', () => {
    it('Should verify that "Debit Management System" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_debitMS", true);
    });
  });
  describe('Evaluate the "Debit Management System" URL', () => {
    it('Should verify the "Debit Management System" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_debitMS", true);
    });
  });

  // Verify the <Order Quote Tool> link
  describe('Evaluate "Order Quote Tool"', () => {
    it('Should verify that "Order Quote Tool" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_orderQuote", true);
    });
  });
  describe('Evaluate the "Order Quote Tool" URL', () => {
    it('Should verify the "Order Quote Tool" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_orderQuote", true);
    });
  });

  // Verify the <Fastlane Voucher Search> link
  describe('Evaluate "Fastlane Voucher Search"', () => {
    it('Should verify that "Fastlane Voucher Search" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_fastlane", true);
    });
  });
  describe('Evaluate the "Fastlane Voucher Search" URL', () => {
    it('Should verify the "Fastlane Voucher Search" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_fastlane", true);
    });
  });

  // Verify the <Webquiz Survey Link> link
  describe('Evaluate "Webquiz Survey Link"', () => {
    it('Should verify that "Webquiz Survey Link" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_webquiz", true);
    });
  });
  describe('Evaluate the "Webquiz Survey Link" URL', () => {
    it('Should verify the "Webquiz Survey Link" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_webquiz", true);
    });
  });

  // Verify the <YOMO Supply Order> link
  describe('Evaluate "YOMO Supply Order"', () => {
    it('Should verify that "YOMO Supply Order" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_yomoSupply", true);
    });
  });
  describe('Evaluate the "YOMO Supply Order" URL', () => {
    it('Should verify the "YOMO Supply Order" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_yomoSupply", true);
    });
  });

  // Verify the <Cafe Supply Order> link
  describe('Evaluate "Cafe Supply Order"', () => {
    it('Should verify that "Cafe Supply Order" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_cafeSupply", true);
    });
  });
  describe('Evaluate the "Cafe Supply Order" URL', () => {
    it('Should verify the "Cafe Supply Order" URL is correct', (done) => {
      common.dashboardElementVisible(done, "lnk_cafeSupply", true);
    });
  });

  // Verify the <Save@BAM> link
  describe('Evaluate "Save@BAM"', () => {
    it('Should verify that "Save@BAM" appears within the Store Resources section of the dashboard.', (done) => {
      common.dashboardElementVisible(done, "btn_saveBAM", true);
    });
  });
  // describe('Evaluate the "Save@BAM" URL', () => {
  //   it('Should verify the "Save@BAM" URL is correct', (done) => {
  //     common.dashboardElementVisible(done, "lnk_saveBAM", true);
  //   });
  // });


  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });


});
