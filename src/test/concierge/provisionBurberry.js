const common = require('../../core/projects/concierge/helpers/common');

describe('Provision Burberry', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Enter Provision Key', () => {
    it('Should populate the provision key', (done) => {
      common.enterProvisionBurberry(done);
    });
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });

//      after(function (done) {
//     	common.end(done);
//     });
});