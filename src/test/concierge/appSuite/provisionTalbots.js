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
    it('Should navigate to the login screen', (done) => {
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
      common.loginUser(done);
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
  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });
  after((done) => {
    common.end(done);
  })
});
