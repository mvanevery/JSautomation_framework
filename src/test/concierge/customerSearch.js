const common = require('../../core/projects/concierge/helpers/common');

describe('Smoke Test: Customer Search', () => {
  before((done) => {
    common.openBrowser(done);
  });

  //describe('Enter Provision Key', () => {
  //  it('Should populate the provision key', (done) => {
  //    common.enterProvisionTalbots(done);
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 5 seconds', (done) => {
  //    common.pause(done);
  //  });
  //});

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });

  describe('Login', () => {
    it('Should login as "ssales"', (done) => {
      common.loginSsales(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Click Blackbook', () => {
    it('Should take user to the Blackbook', (done) => {
      common.navBlackbook(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  //describe('Search for "McClellan"', () => {
  //  it('Should find the customer "Ryan McClellan"', (done) => {
  //    common.searchCustomer(done);
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 5 seconds', (done) => {
  //    common.pause(done, 3000);
  //  });
  //});
  //
  //describe('Select customer "Ryan McClellan"', () => {
  //  it('Should take user to the customer profile', (done) => {
  //    common.selectCustomer(done);
  //  });
  //});

  //  after((done) => {
  // 	common.end(done);
  // });

});
