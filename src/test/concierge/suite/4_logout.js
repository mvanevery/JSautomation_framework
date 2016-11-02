const common = require('../../../core/projects/concierge/helpers/common');

describe('Smoke Test: Logout', () => {

  describe('Click logout icon', () => {
    it('Should click logout icon', (done) => {
      common.verifyLogoutButton(done);
    });
  });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

    describe('Click Cancel button in logout modal', () => {
      it('Should click cancel button in logout modal.', (done) => {
        common.verifyLogoutCancelButton(done);
      });
    });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

    describe('Click logout icon', () => {
      it('Should click logout icon', (done) => {
        common.verifyLogoutButton(done);
      });
    });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

    describe('Click Confirm button in logout modal', () => {
      it('Should click confirm button in logout modal.', (done) => {
        common.verifyLogoutConfirmButton(done);
      });
    });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

      describe('Verify Store ID', () => {
        it('Should see Store ID: xxx', (done) => {
          common.verifyStoreId(done);
        });
      });


});
