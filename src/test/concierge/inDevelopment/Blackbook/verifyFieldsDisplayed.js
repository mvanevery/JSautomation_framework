/**
 * Created by mvanevery on 11/29/16.
 * Project:     Concierge
 * Test Name:   verifyFieldsDisplayed
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/19
 * C19 - Specified Fields Displayed
 * Author:      Mike Van Every
 * Date:        11/29/2016
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');


describe('Smoke Test: Verify Search Fields Displayed', () => {
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

  describe('Verify the First Name field is displayed', () => {
    it('should verify the name and visibility of the field', (done) => {
      blackbook.elementVisible(done, 'firstName', true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Verify the Last Name field is displayed', () => {
    it('should verify the name and visibility of the field', (done) => {
      blackbook.elementVisible(done, 'lastName', true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Verify the Phone field is displayed', () => {
    it('should verify the name and visibility of the field', (done) => {
      blackbook.elementVisible(done, 'phone', true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Verify the Email field is displayed', () => {
    it('should verify the name and visibility of the field', (done) => {
      blackbook.elementVisible(done, 'email', true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Verify the City field is displayed', () => {
    it('should verify the name and visibility of the field', (done) => {
      blackbook.elementVisible(done, 'city', true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Verify the Zipcode field is displayed', () => {
    it('should verify the name and visibility of the field', (done) => {
      blackbook.elementVisible(done, 'postalCode', true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
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
