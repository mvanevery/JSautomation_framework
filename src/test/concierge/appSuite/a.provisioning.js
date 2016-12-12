/**
 * Project:     Concierge
 * Test Name:   a.provisioning
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/
 * Author:      Mike Van Every
 * Date:        10/11/2016
 */

const common = require('../../../core/projects/concierge/helpers/common');
const provision = require('../../../core/projects/concierge/helpers/provisioning');
const login = require('../../../core/projects/concierge/helpers/loginPage');
const store = require('../../../core/projects/concierge/helpers/store');

describe('Provision Talbots and Set Store', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Provision Screen', () => {
    it('Should verify Provisioning Screen', (done) => {
      provision.verifyProvisionScreen(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Enter Provision Key', () => {
    it('Should populate the provision key', (done) => {
      provision.enterProvisionTalbots(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Login Screen', () => {
    it('Should verify the Login Screen', (done) => {
      login.verifyLoginScreen(done, true);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Login', () => {
    it('Should login as "testauto"', (done) => {
      login.loginUser(done, true, 'testauto', 'qaUser@123');
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 8000);
    });
  });
  describe('Specify Store', () => {
    it('Should enter Store ID and Save', (done) => {
      store.specifyStore(done, "326");
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 7000);
    });
  });
  describe('Logout', () => {
    it('Should logout the current user', (done) => {
      login.logoutUser(done, true);
    });
  });
  describe('Test Completed: Cleaning up', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });
});
