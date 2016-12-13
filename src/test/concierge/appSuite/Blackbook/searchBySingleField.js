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


describe('Smoke Test: Search by Single Specified Fields', () => {
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
      blackbook.enterValue(done, true,"firstName", "Automation");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Search Customer button', () => {
    it('Should click the search customer button', (done) => {
      blackbook.searchCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, true, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter First Name', () => {
    it('should enter a name in the first name field', (done) => {
      blackbook.enterValue(done, true,"firstName", "Au");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Search Customer button', () => {
    it('Should click the search customer button', (done) => {
      blackbook.searchCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, true, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Click the Reset Fields button', () => {
    it('Should click the reset fields button', (done) => {
      blackbook.resetFields(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
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

  describe('Click the Search Customer button', () => {
    it('Should click the search customer button', (done) => {
      blackbook.searchCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, true, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter Last Name', () => {
    it('should enter a name in the last name field', (done) => {
      blackbook.enterValue(done, true, "lastName", "Cu");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Search Customer button', () => {
    it('Should click the search customer button', (done) => {
      blackbook.searchCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, true, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Reset Fields button', () => {
    it('Should click the reset fields button', (done) => {
      blackbook.resetFields(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter Phone Number', () => {
    it('should enter a number in the phone field', (done) => {
      blackbook.enterValue(done, true, 'phone', '8556781234');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Search Customer button', () => {
    it('Should click the search customer button', (done) => {
      blackbook.searchCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, true, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter Phone Number', () => {
    it('should enter a number in the phone field', (done) => {
      blackbook.enterValue(done, true, 'phone', "855");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Search Customer button', () => {
    it('Should click the search customer button', (done) => {
      blackbook.searchCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, true, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Reset Fields button', () => {
    it('Should click the reset fields button', (done) => {
      blackbook.resetFields(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter Email Address', () => {
    it('should enter address in the email field', (done) => {
      blackbook.enterValue(done, true, 'email', "qa.test@madmobile.com");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Search Customer button', () => {
    it('Should click the search customer button', (done) => {
      blackbook.searchCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, true, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter Email Address', () => {
    it('should enter address in the email field', (done) => {
      blackbook.enterValue(done, true, 'email', "qa");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Search Customer button', () => {
    it('Should click the search customer button', (done) => {
      blackbook.searchCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, true, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Reset Fields button', () => {
    it('Should click the reset fields button', (done) => {
      blackbook.resetFields(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter City ', () => {
    it('should enter city in the city field', (done) => {
      blackbook.enterValue(done, true, 'city', "Tampa");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Search Customer button', () => {
    it('Should click the search customer button', (done) => {
      blackbook.searchCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, true, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Enter City ', () => {
    it('should enter city in the city field', (done) => {
      blackbook.enterValue(done, true, 'city', "Tampa");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Search Customer button', () => {
    it('Should click the search customer button', (done) => {
      blackbook.searchCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('should return "Automation Customer" in results', (done) => {
      blackbook.verifySearchResults(done, true, 'Automation Customer');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Click the Reset Fields button', () => {
    it('Should click the reset fields button', (done) => {
      blackbook.resetFields(done, true);
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

});
