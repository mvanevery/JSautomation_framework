/**
 * Created by mvanevery on 12/09/16.
 * Project:     Concierge
 * Test Name:   modalActivation
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/24
 * C24 - Modal Activation and Functionality
 * Author:      Mike Van Every
 * Date:        12/09/2016
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');


describe('Smoke Test: Modal Activation and Functionality', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      login.verifyLoginScreen(done, true);
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

  describe('Verify Modal Header', () => {
    it('Should verify the header on the Modal page', (done) => {
      blackbook.verifyModalHeader(done, true, 'Add Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Click the CANCEL button', () => {
    it('should click the CANCEL button and close the modal', (done) => {
      blackbook.cancelButton(done, true);
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

  describe('Verify Modal Header', () => {
    it('Should verify the header on the Modal page', (done) => {
      blackbook.verifyModalHeader(done, true, 'Add Customer');
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

  describe('Click the CANCEL button', () => {
    it('should click the CANCEL button and close the modal', (done) => {
      blackbook.cancelButton(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Click the CONTINUE button', () => {
    it('should click the CONTINUE button and continue editing the modal', (done) => {
      blackbook.continueButton(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Click the CANCEL button', () => {
    it('should click the CANCEL button and close the modal', (done) => {
      blackbook.cancelButton(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Click the DISCARD button', () => {
    it('should click the DISCARD button and close the modal', (done) => {
      blackbook.discardButton(done, true);
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
