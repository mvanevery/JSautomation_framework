const common = require('../../core/projects/concierge/helpers/common');

describe('Provision Talbots', () => {
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
      common.pause(done, 1500);
    });
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 1500);
    });
  });

  describe('Login', () => {
    it('Should login as "qauser"', (done) => {
      common.loginUser(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 1500);
    });
  });

//  describe('Save Select a Store', () => {
//    it('Should save select a store.', (done) => {
//      common.specifyStore(done);
//    });
//  });

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



  //
  //after((done) => {
  //  common.end(done);
  //})

});
