const common = require('../../core/projects/concierge/helpers/common');

describe('Smoke Test: Provisioning', () => {
  before((done) => {
    common.openBrowser(done);
  });

  // Talbots provisioning test
  describe('Enter Provision Key', () => {
    it('Should populate the provision key', (done) => {
      common.enterProvisionTalbots(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done);
    });
  });
  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });
  // describe('Deprovision the Application', function () {
  // 	it('Should navigate back to the Provisioning screen', function (done) {
  // 		common.deprovision(done);
  // 	})
  // });
  // describe('Pausing', function() {
  // 	it('Should pause the test for 5 seconds', function(done) {
  // 		common.pause(done);
  // 	})
  // });
  // describe('Verify Provision Screen', function () {
  // 	it('Should be on Provisioning screen', function (done) {
  // 		common.verifyProvisionScreen(done);
  // 	})
  // });
  describe('Close the application', () => {
    it('Should shutdown the Concierge application', (done) => {
      common.end(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done);
    });
  });

  // Burberry provisioning test
  describe('Open the application', () => {
    it('Should open a browser an load the Concierge app', (done) => {
      common.openBrowser(done);
    });
  });
  describe('Enter Provision Key', () => {
    it('Should populate the provision key', (done) => {
      common.enterProvisionBurberry(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done);
    });
  });
  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });

  after((done) => {
    common.end(done);
  });
});
