/**
 * Project:     Concierge
 * Test Name:   replyingToAThread_C1639
 * Test Steps:  https://madmobile.testrail.net/index.php?/cases/view/1639
 * Author:      John Harre
 * Date:        11/9/2016
 *
 * From command line type to load in localhost:
 *      gulp initiate-<Test Name> --archon:concierge --test:<Test Name> --client:chrome
 *
 * From command line type to load in app:
 *      gulp initiate-<Test Name> --archon:concierge --test:<Test Name>
 */

const common = require('../../../../core/projects/concierge/helpers/common');

describe('Smoke Test: Replying To A Thread C1639', () => {
  before((done) => {
    common.goTo(done);
  });

  //provisioning
  describe('Verify Provision Screen', () => {
    it('Should verify Provisioning Screen', (done) => {
      common.verifyProvisionScreen(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Enter Provision Key', () => {
    it('Should populate the provision key', (done) => {
      common.enterProvisionTalbots(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Login User', () => {
    it('Should Login as user "qaUser"', (done) => {
      common.loginUser(done, "qaUser", "qaUser@123");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Specify Store', () => {
    it('Should enter Store ID and Save', (done) => {
      common.specifyStore(done, "326");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Login User', () => {
    it('Should Login as user "qaUser"', (done) => {
      common.loginUser(done, "qaUser", "qaUser@123");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  //replying to a thread
  describe('Logout', () => {
    it('Should Logout from the current user', (done) => {
      common.logoutUser(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });
})
