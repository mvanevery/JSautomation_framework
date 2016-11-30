/**
 * Created by mvanevery on 11/30/16.
 * Project:     Concierge
 * Test Name:   searchBySingleField
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/2210
 * C2210 - Searching by a Single Specified Field
 * Author:      Mike Van Every
 * Date:        11/30/2016
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

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Enter First Name', () => {
    it('should enter a name in the first name field', (done) => {
      blackbook.enterFirstname(done, "Automation");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter First Name', () => {
    it('should enter a name in the first name field', (done) => {
      blackbook.enterFirstname(done, "Au");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter Last Name', () => {
    it('should enter a name in the last name field', (done) => {
      blackbook.enterLastname(done, "Customer");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter Last Name', () => {
    it('should enter a name in the last name field', (done) => {
      blackbook.enterLastname(done, "Cu");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter Phone Number', () => {
    it('should enter a number in the phone field', (done) => {
      blackbook.enterPhone(done, "8556781234");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter Phone Number', () => {
    it('should enter a number in the phone field', (done) => {
      blackbook.enterPhone(done, "855");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter Email Address', () => {
    it('should enter address in the email field', (done) => {
      blackbook.enterEmail(done, "qa.test@madmobile.com");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter Email Address', () => {
    it('should enter address in the email field', (done) => {
      blackbook.enterEmail(done, "qa");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter City ', () => {
    it('should enter city in the city field', (done) => {
      blackbook.enterCity(done, "Tatooine");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

})
