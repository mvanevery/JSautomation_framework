/**
 * ios_webkit_debug_proxy -c dff8ad9bb716a56766d98b2232c3f541ba9bb796:27753 -d (start proxy)
 *
 * appium (start server)
 *
 * run test with appium flag for client
 */

const common = require('../../core/projects/concierge/helpers/common');

describe('Smoke Test: Login as "ssales"', () => {
  before((done) => {
    common.goTo(done);
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
      common.pause(done, 3000);
    });
  });

  describe('Login', () => {
    it('Should login as "ssales"', (done) => {
      common.loginUser(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Cancel Select a Store', () => {
      it('Should cancel select a store.', (done) => {
        common.specifyStoreCancel(done);
      });
    });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 1500);
      });
    });

    describe('Login after store id is set', () => {
      it('Should login as "qauser" after store id is set', (done) => {
        common.loginUserStore(done);
      });
    });

      describe('Pausing', () => {
        it('Should pause the test for 5 seconds', (done) => {
          common.pause(done, 1500);
        });
      });

    describe('Save Select a Store', () => {
      it('Should save select a store.', (done) => {
        common.specifyStore(done);
      });
    });

      describe('Pausing', () => {
        it('Should pause the test for 5 seconds', (done) => {
          common.pause(done, 1500);
        });
      });

      describe('Login after store id is set', () => {
        it('Should login as "qauser" after store id is set', (done) => {
          common.loginUserStore(done);
        });
      });


  describe('Verify Concierge Screen', () => {
    it('Should navigate to the Concierge screen', (done) => {
      common.verifyConciergeScreen(done);
    });
  });
  //
  //after((done) => {
  //  common.end(done);
  //})

});
