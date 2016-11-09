/**
 * Created by mvanevery on 11/7/16.
 */
/**
 *  C1595 Talbots E2E - Search Customer(All Clients).
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
  })
  describe('Verify Search Results', () => {
    it('Should verify the customer search results', (done) => {
      common.verifySearchResult(done);
    })
  })
})
