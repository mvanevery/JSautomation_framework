const common = require('../../../core/projects/concierge/helpers/common');

describe('Smoke Test: Set Store ID', () => {

  describe('Verify Cancel Store ID Screen', () => {
    it('Should cancel Store ID Screen', (done) => {
      common.specifyStoreCancel(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
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

  describe('Verify Set Store ID Screen', () => {
    it('Should navigate to Set Store ID Screen', (done) => {
      common.specifyStore(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Concierge Screen', () => {
    it('Should navigate to the Concierge screen', (done) => {
      common.verifyConciergeScreen(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
});
