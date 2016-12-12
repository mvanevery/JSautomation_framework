/**
 * Created by mvanevery on 12/01/16.
 * Project:     Concierge
 * Test Name:   clearSearch
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/2212
 * C2212 - Clear Search Fields
 * Author:      Mike Van Every
 * Date:        12/01/2016
 */


const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');

describe('Smoke Test: Clear Search Fields', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      login.verifyLoginScreen(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Login', () => {
    it('Should login as "testauto"', (done) => {
      login.loginUser(done, true, 'testauto', 'qaUser@123');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Click the Blackbook menu option', () => {
    it('Should open Blackbook sections', (done) => {
      landing.navigateIcons(done, "blackbookIcon", true);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Header', () => {
    it('Should verify the header on the Blackbook page', (done) => {
      blackbook.verifyPageHeader(done, true, 'My Clients');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Enter First Name', () => {
    it('should enter a name in the first name field', (done) => {
      blackbook.enterValue(done, true, "firstName", "Automation");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter Last Name', () => {
    it('should enter a name in the last name field', (done) => {
      blackbook.enterValue(done, true, "lastName", "Customer");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter Phone #', () => {
    it('should enter a phone # in the phone field', (done) => {
      blackbook.enterValue(done, true, "phone", "8135551234");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter an Email', () => {
    it('should enter email in the email field', (done) => {
      blackbook.enterValue(done, true, "email", "qa.automation@madmobile.com");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter City', () => {
    it('should enter a city in the city field', (done) => {
      blackbook.enterValue(done, true, "city", "Tampa");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter Zipcode', () => {
    it('should enter a zipcode in the zipcode field', (done) => {
      blackbook.enterValue(done, true, "zipcode", "85701");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Get Value from First Name Field', () => {
    it('Should get the value from an First Name field', (done) => {
      blackbook.getFieldValue(done, 'firstName', 'Automation');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Get Value from Last Name Field', () => {
    it('Should get the value from an Last Name field', (done) => {
      blackbook.getFieldValue(done, 'lastName', 'Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Get Value from Phone # Field', () => {
    it('Should get the value from an Phone # field', (done) => {
      blackbook.getFieldValue(done, 'phone', '8135551234');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Get Value from Email Field', () => {
    it('Should get the value from an Email field', (done) => {
      blackbook.getFieldValue(done, 'email', 'qa.automation@madmobile.com');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Get Value from City Field', () => {
    it('Should get the value from an City field', (done) => {
      blackbook.getFieldValue(done, 'city', 'Tampa');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Get Value from Zipcode Field', () => {
    it('Should get the value from an Zipcode field', (done) => {
      blackbook.getFieldValue(done, 'zipcode', '85701');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Clear Search Fields', () => {
    it('Should Logout from the current user', (done) => {
      blackbook.resetFields(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Value from First Name Field', () => {
    it('Should get the value from an First Name field and verify it is empty', (done) => {
      blackbook.getFieldValue(done, 'firstName', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Verify Value from Last Name Field', () => {
    it('Should get the value from an Last Name field and verify it is empty', (done) => {
      blackbook.getFieldValue(done, 'lastName', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Verify Value from Phone # Field', () => {
    it('Should get the value from an Phone # field and verify it is empty', (done) => {
      blackbook.getFieldValue(done, 'phone', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Verify Value from Email Field', () => {
    it('Should get the value from an Email field and verify it is empty', (done) => {
      blackbook.getFieldValue(done, 'email', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Verify Value from City Field', () => {
    it('Should get the value from an City field and verify it is empty', (done) => {
      blackbook.getFieldValue(done, 'city', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Verify Value from Zipcode Field', () => {
    it('Should get the value from an Zipcode field and verify it is empty', (done) => {
      blackbook.getFieldValue(done, 'zipcode', '');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Logout', () => {
    it('Should logout the current user', (done) => {
      login.logoutUser(done, true, true);
    });
  });

  describe('Test Completed: Cleaning up', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });




})
