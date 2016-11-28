/**
 * Project:     Concierge
 * Test Name:   addAppointment
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/1595
 * Author:      Mike Van Every
 * Date:        11/7/2016
/**
 *  C1595 - Talbots E2E - Search Customer(All Clients).
 */
const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');


//export let CUSTOMERNAME;
//const setName = (name) => CUSTOMERNAME = name;

describe('Smoke Test: Search Customer', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      login.verifyLoginScreen(done);
    });
  });

  describe('Login', () => {
    it('Should login as "qauser"', (done) => {
      login.loginUser(done, 'qaUser', 'qaUser@123');
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
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Toggle My Clients Off', () => {
    it('click the My Clients toggle switch', (done) => {
      blackbook.toggleMyClients(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  //describe('Enter First Name', () => {
  //  it('should enter a name in the first name field', (done) => {
  //    blackbook.enterFirstname(done, "J");
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 1 seconds', (done) => {
  //    common.pause(done, 1000);
  //  });
  //});
  //
  //describe('Enter Last Name', () => {
  //  it('should enter a name in the last name field', (done) => {
  //    blackbook.enterLastname(done, "Smith");
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 1 seconds', (done) => {
  //    common.pause(done, 1000);
  //  });
  //});
  //
  //describe('Click the Search Customer button', () => {
  //  it('Should click the search customer button', (done) => {
  //    blackbook.searchCustomer(done);
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 2 seconds', (done) => {
  //    common.pause(done, 5000);
  //  });
  //});
  //
  //describe('Verify Search Results', () => {
  //  it('Should verify the customer search results', (done) => {
  //    blackbook.verifySearchResult(done);
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 2 seconds', (done) => {
  //    common.pause(done, 5000);
  //  });
  //});
  //
  //describe('Logout', () => {
  //  it('Should Logout from the current user', (done) => {
  //    login.logoutUser(done);
  //  });
  //});
  //describe('Pausing', () => {
  //  it('Should pause the test for 5 seconds', (done) => {
  //    common.pause(done, 5000);
  //  });
  //});

})