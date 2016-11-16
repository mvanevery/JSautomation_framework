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
      login.verifyLoginScreen(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Login User', () => {
    it('Should Login as user "qaUser"', (done) => {
      login.loginUser(done, "qaUser", "qaUser@123");
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Specify Store', () => {
    it('Should enter Store ID and Save', (done) => {
      store.specifyStore(done, "326");
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Logout', () => {
    it('Should Logout from the current user', (done) => {
      login.logoutUser(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
});
