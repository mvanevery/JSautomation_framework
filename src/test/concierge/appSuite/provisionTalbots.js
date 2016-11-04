const common = require('../../../core/projects/concierge/helpers/common');

describe('Provision Talbots and Set Store', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 1500);
    });
  });

  describe('Verify Provision Screen', () => {
    it('Should verify Provisioning Screen', (done) => {
      common.verifyProvisionScreen(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 1000);
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

  describe('Verify Login Screen', () => {
    it('Should verify the Login Screen', (done) => {
      common.verifyLoginScreen(done);
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
  describe('Logout', () => {
    it('Should Logout from the current user', (done) => {
      common.logoutUser(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 2000);
    });
  });
  after((done) => {
    common.end(done);
  })
});
