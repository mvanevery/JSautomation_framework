/**
 * Created by mvanevery on 12/20/16.
 * Project:     Concierge
 * Test Name:   verifyCustomerCard
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/48
 * C48 - Components of Customer Card
 * Author:      Mike Van Every
 * Date:        12/20/2016/
 */


const common = require('../../../core/projects/concierge/helpers/common');
const login = require('../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../core/projects/concierge/helpers/landingPage');

describe('Smoke Test: Search Customer', () => {
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
      blackbook.enterValue(done, true, "firstName", "Au");
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

  describe('Verify Customer Card is visible', () => {
    it('Should verify that the customer card is visible', (done) => {
      blackbook.elementVisible(done, "customerCard", true );
    });
  });

  describe('Pausing.', () => {
    it('Should pause the test for 3 seconds.', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Verify Customer Name is visible.', () => {
    it('Should verify that the customer name is visible.', (done) => {
      blackbook.elementVisible(done, "searchResults", true );
    });
  });

  describe('Pausing.', () => {
    it('Should pause the test for 3 seconds.', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Verify Customer Card Address is visible.', () => {
    it('Should verify that the customer card address is visible.', (done) => {
      blackbook.elementVisible(done, "cardAddress", true );
    });
  });

  describe('Pausing.', () => {
    it('Should pause the test for 3 seconds.', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Verify Customer Card Phone # is visible.', () => {
    it('Should verify that the customer card phone # is visible.', (done) => {
      blackbook.elementVisible(done, "cardPhone", true );
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Verify Customer Card Email is visible', () => {
    it('Should verify that the customer card email is visible', (done) => {
      blackbook.elementVisible(done, "cardEmail", true );
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
