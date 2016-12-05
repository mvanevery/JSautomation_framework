/**
 * Project:     Concierge-BAM
 * TestName:    MccSearch/01_noMccCustomer_C3019
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/3019
 * Author:      Aaron Feldmeyer
 * Date:        11/8/2016
 *
 * Execute through the "MccSearchTestSuite".
 */

const common = require('../../../../core/projects/concierge-BAM/helpers/common');


  describe('Test for when there is no MCC customer found.', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Pausing', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.logpinPageElementVisible(done, 'btn_signIn', true);
    });
  });

    describe('Login', () => {
      it('Should login as "180001"', (done) => {
        common.loginUser(done,180001,1234);
      });
    });

  describe('Pausing', () => {
    it('Should pause the test for 8 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Verify BAM store number', () => {
    it('Should verify that the store number is #180', (done) => {
      common.verifyStoreNum(done,'#180');
    });
  });

  describe('Select MCC Search', () => {
    it('Should navigate to the MCC Search page', (done) => {
      common.selectMccSearch(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Verify the MCC Search page', () => {
    it('Should navigate to the MCC Search screen', (done) => {
      common.verifyMccPage(done);
    });
  });

  describe('Enter "999" into the Phone field', () => {
    it('Should type "999" into the Phone field', (done) => {
      // field options are: fld_lastName, fld_zipCode, fld_phone, fld_email
      //common.enterMccFormValue(done,"fld_phone",999);
      common.enterMccFormValue(done,"fld_lastName","feldmeyer");
    });
  });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

  describe('Select Search button', () => {
    it('Should search for a MCC customer', (done) => {
      common.selectSearchButton(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify the No Results message', () => {
    it('Should find the No Results message', (done) => {
      common.mccElementVisible(done,"txt_noResults");
    });
  });

});
