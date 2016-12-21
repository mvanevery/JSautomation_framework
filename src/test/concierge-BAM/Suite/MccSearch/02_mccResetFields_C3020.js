/**
 * Project:     Concierge-BAM
 * TestName:    MccSearch/02_mccResetFields_C3020
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/3020
 * Author:      Aaron Feldmeyer
 * Date:        11/21/2016
 *
 * Execute through the "MccSearchTestSuite".
 */

const common = require('../../../../core/projects/concierge-BAM/helpers/common');


describe('Test for when there is no MCC customer found.', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Verify the MCC Search page', () => {
    it('Should navigate to the MCC Search screen', (done) => {
      common.verifyMccPage(done);
    });
  });

  describe('Click the "Reset Fields" button', () => {
    it('Should reset all the fields back to a blank state', (done) => {
      common.resetfields(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Enter a LastName', () => {
    it('Should type "Smith" into the LastName field', (done) => {
      // field options are 'name','phone','zip','email'
      common.fillMccForm(done,'name','Smith');
    });
  });

  describe('Enter a ZipCode', () => {
    it('Should type "33607" into the ZipCode field', (done) => {
      // field options are 'name','phone','zip','email'
      common.fillMccForm(done,'zip','33607');
    });
  });

  describe('Enter a Phone number', () => {
    it('Should type "813-555-5555" into the PhoneNumber field', (done) => {
      // field options are 'name','phone','zip','email'
      common.fillMccForm(done,'phone','813-555-5555');
    });
  });

  describe('Enter an Email', () => {
    it('Should type "test@user.com" into the Email field', (done) => {
      // field options are 'name','phone','zip','email'
      common.fillMccForm(done,'email','test@user.com');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the "Reset Fields" button', () => {
    it('Should reset all the fields back to a blank state', (done) => {
      common.resetfields(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify that the field is blank', () => {
    it('Should verify that there is no data in the field', (done) => {
      // field options are 'name','phone','zip','email'
      common.verifyBlankField(done,'name');
    });
  });

});
