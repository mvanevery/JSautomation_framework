/**
 * Project:     Concierge-BAM
 * TestName:    MccSearch/03_mccSearch_C3021
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/3021
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

  describe('Click the "Search" button', () => {
    it('Should search MCC customers', (done) => {
      common.selectSearchButton(done);
    });
  });

  // Verify result.

  describe('Click the "Reset Fields" button', () => {
    it('Should reset all the fields back to a blank state', (done) => {
      common.resetfields(done);
    });
  });

  describe('Enter a ZipCode', () => {
    it('Should type "28052" into the ZipCode field', (done) => {
      // field options are 'name','phone','zip','email'
      common.fillMccForm(done,'zip','28052');
    });
  });

  describe('Click the "Search" button', () => {
    it('Should search MCC customers', (done) => {
      common.selectSearchButton(done);
    });
  });

  // Verify result.

  describe('Click the "Reset Fields" button', () => {
    it('Should reset all the fields back to a blank state', (done) => {
      common.resetfields(done);
    });
  });

  describe('Enter a Phone number', () => {
    it('Should type "7045555555" into the PhoneNumber field', (done) => {
      // field options are 'name','phone','zip','email'
      common.fillMccForm(done,'phone','7045555555');
    });
  });

  describe('Click the "Search" button', () => {
    it('Should search MCC customers', (done) => {
      common.selectSearchButton(done);
    });
  });

  // Verify result.

  describe('Click the "Reset Fields" button', () => {
    it('Should reset all the fields back to a blank state', (done) => {
      common.resetfields(done);
    });
  });

  describe('Enter an Email', () => {
    it('Should type "test@98test.test" into the Email field', (done) => {
      // field options are 'name','phone','zip','email'
      common.fillMccForm(done,'email','test@98test.test');
    });
  });

  describe('Click the "Search" button', () => {
    it('Should search MCC customers', (done) => {
      common.selectSearchButton(done);
    });
  });

  // Verify result.

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
