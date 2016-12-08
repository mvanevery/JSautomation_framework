

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');


//export let CUSTOMERNAME;
//const setName = (name) => CUSTOMERNAME = name;

describe('Smoke Test: Add Customer', () => {
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
      common.pause(done, 2000);
    });
  });

  describe('Click + to open Add customer Modal', ()=> {
    it('should click the + button and open a modal', (done) => {
      blackbook.addCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter First Name', () => {
    it('should enter a name in the first name field', (done) => {
      blackbook.enterValue(done, true, "firstNameModal", "Automation");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter Last Name', () => {
    it('should enter a name in the last name field', (done) => {
      blackbook.enterValue(done, true, "lastNameModal", "Test");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Open Phone section', () => {
    it('should open the phone section', (done) => {
      blackbook.openPhone(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter Modal Phone #', () => {
    it('should enter phone # in the modal', (done) => {
      blackbook.enterValue(done, true, "phoneModal", '8135551234')
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Select Phone Type', () => {
    it('should select the phone type', (done) => {
      blackbook.modalPhoneType(done, true, 'PERSONAL');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Open Email Section', () => {
    it('should open the email section', (done) => {
      blackbook.openEmail(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter Email address in the modal', () => {
    it('should enter the email address in the modal', (done) => {
      blackbook.enterValue(done, true, "emailModal", 'qa.automation@gmail.com');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Select Email Type', () => {
    it('should select the email type', (done) => {
      blackbook.modalEmailType(done, true, 'OTHER');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Open Address Section', () => {
    it('should open the Address section', (done) => {
      blackbook.openAddress(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter Address Line 1', () => {
    it('should enter address line 1', (done) => {
      blackbook.enterValue(done, true, "street1Modal", '2701 N Rocky Point Dr');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter Address Line 2', () => {
    it('should enter address line 2', (done) => {
      blackbook.enterValue(done, true, "street2Modal", 'Suite 500');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter City in the modal', () => {
    it('should enter city in the modal', (done) => {
      blackbook.enterValue(done, true, "cityModal", 'Tampa');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter State in the modal', () => {
    it('should enter State in the modal', (done) => {
      blackbook.enterValue(done, true, "stateModal", 'FL');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter Zipcode in the modal', () => {
    it('should enter Zipcode in the modal', (done) => {
      blackbook.enterValue(done, true, "zipcodeModal", '33608');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter Country in the modal', () => {
    it('should enter Zipcode in the modal', (done) => {
      blackbook.enterValue(done, true, "countryModal", 'USA');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Enter Address Type in the modal', () => {
    it('should enter address type in the modal', (done) => {
      blackbook.enterValue(done, true, "addressTypeModal", 'OTHER');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the DONE button', () => {
    it('should click the DONE button and save the customer', (done) => {
      blackbook.saveButton(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Logout', () => {
    it('Should logout the current user', (done) => {
      login.logoutUser(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

})
