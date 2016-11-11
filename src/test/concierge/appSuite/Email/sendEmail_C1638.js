/**
 *  * Project:     Concierge
 * Test Name:   sendEmail_C1638
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/1638
 * Author:      Mike Van Every
 * Date:        11/1/2016
 *
 */

const common = require('../../../../core/projects/concierge/helpers/common');

describe('Smoke Test: Search Customer', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });

  describe('Login', () => {
    it('Should login as "qauser"', (done) => {
      common.loginUser(done, 'qaUser', 'qaUser@123');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Click the Blackbook menu option', () => {
    it('Should open Blackbook sections', (done) => {
      common.navBlackbook(done, "My Clients");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Search for customer by Last Name', () => {
    it('Should search using customers Last Name', (done) => {
      common.searchCustomer(done, 'Smith', 'J');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search Results', () => {
    it('Should verify the customer search results', (done) => {
      common.verifySearchResult(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click Customer Card and Verify Customer Profile',() => {
    it('Should select the Customer Card and verify the customer profile', (done) => {
      common.selectCustomer(done, 'Customer Profile');
    });
  });

  describe('Click Email Icon in the Customer Profile', () => {
    it('Should click the email icon', (done) => {
      common.openEmail(done);
    });
  });

  describe('Selects Email Template to fill out', () => {
    it('Should select email template from the list of templates')
  })

})
