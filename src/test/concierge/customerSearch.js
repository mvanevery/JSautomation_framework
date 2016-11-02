const common = require('../../core/projects/concierge/helpers/common');

describe('Smoke Test: Customer Search', () => {
  before((done) => {
    common.goTo(done);
  });

  //describe('Enter Provision Key', () => {
  //  it('Should populate the provision key', (done) => {
  //    common.enterProvisionTalbots(done);
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 5 seconds', (done) => {
  //    common.pause(done, 5000);
  //  });
  //});

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });

  describe('Login', () => {
    it('Should login as "qauser"', (done) => {
      common.loginUser(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click Blackbook', () => {
    it('Should take user to the Blackbook', (done) => {
      common.navBlackbook(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.getsomeText(done);
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

//    after((done) => {
//   	common.end(done);
//   });

});
