/**
 * Created by mvanevery on 12/01/16.
 * Project:     Concierge
 * Test Name:   searchBySingleField
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/2210
 * C2210 - Searching by a Single Specified Field
 * Author:      Mike Van Every
 * Date:        12/01/2016
 */


const common = require('../../../core/projects/concierge/helpers/common');
const login = require('../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../core/projects/concierge/helpers/landingPage');
const provision = require('../../../core/projects/concierge/helpers/provisioning');

describe('Smoke Test: Verify Search Fields Displayed', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      login.verifyLoginScreen(done);
    });
  });

  describe('Login', () => {
    it('Should login as "testauto"', (done) => {
      login.loginUser(done, 'testauto', 'qaUser@123');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Click the Blackbook menu option', () => {
    it('Should open Blackbook sections', (done) => {
      landing.navBlackbook(done, "My Clients");
    });
  });
  //
  //describe('Get visible', () => {
  //  it('Should get value of field', (done) => {
  //    blackbook.elementVisible(done, "blackbookHeader", true);
  //  });
  //});

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Enter First Name', () => {
    it('should enter a name in the first name field', (done) => {
      blackbook.enterFieldValue(done,"firstName", "Automation");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Enter Last Name', () => {
    it('should enter a name in the last name field', (done) => {
      blackbook.enterFieldValue(done, "lastName", "Customer");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Enter Last Name', () => {
    it('should enter a name in the last name field', (done) => {
      blackbook.enterFieldValue(done, "phone", "8135551234");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Enter Last Name', () => {
    it('should enter a name in the last name field', (done) => {
      blackbook.enterFieldValue(done, "email", "qa.automation@madmobile.com");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Enter Last Name', () => {
    it('should enter a name in the last name field', (done) => {
      blackbook.enterFieldValue(done, "city", "Tampa");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Enter Last Name', () => {
    it('should enter a name in the last name field', (done) => {
      blackbook.enterFieldValue(done, "zipcode", "85701");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Get Value from First Name Field', () => {
    it('Should get the value from an First Name field', (done) => {
      blackbook.getFieldValue(done, 'firstName', 'Automation');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Get Value from Last Name Field', () => {
    it('Should get the value from an Last Name field', (done) => {
      blackbook.getFieldValue(done, 'lastName', 'Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Get Value from Phone # Field', () => {
    it('Should get the value from an Phone # field', (done) => {
      blackbook.getFieldValue(done, 'phone', '8135551234');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Get Value from Email Field', () => {
    it('Should get the value from an Email field', (done) => {
      blackbook.getFieldValue(done, 'email', 'qa.automation@madmobile.com');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Get Value from city Field', () => {
    it('Should get the value from an City field', (done) => {
      blackbook.getFieldValue(done, 'city', 'Tampa');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Get Value from Zipcode Field', () => {
    it('Should get the value from an Zipcode field', (done) => {
      blackbook.getFieldValue(done, 'zipcode', '85701');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Clear Search Fields', () => {
    it('Should Logout from the current user', (done) => {
      blackbook.resetFields(done);
    });
  });

  describe('Verify Value from First Name Field', () => {
    it('Should get the value from an First Name field and verify it is empty', (done) => {
      blackbook.getFieldValue(done, 'firstName', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Verify Value from Last Name Field', () => {
    it('Should get the value from an Last Name field and verify it is empty', (done) => {
      blackbook.getFieldValue(done, 'lastName', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Verify Value from Phone # Field', () => {
    it('Should get the value from an Phone # field and verify it is empty', (done) => {
      blackbook.getFieldValue(done, 'phone', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Verify Value from Email Field', () => {
    it('Should get the value from an Email field and verify it is empty', (done) => {
      blackbook.getFieldValue(done, 'email', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Verify Value from City Field', () => {
    it('Should get the value from an City field and verify it is empty', (done) => {
      blackbook.getFieldValue(done, 'city', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Verify Value from Zipcode Field', () => {
    it('Should get the value from an Zipcode field and verify it is empty', (done) => {
      blackbook.getFieldValue(done, 'zipcode', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Logout', () => {
    it('Should Logout from the current user', (done) => {
      login.logoutUser(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });




})
