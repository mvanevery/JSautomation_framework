/**
 * Created by mvanevery on 11/16/16.
 * Project:     Concierge
 * Test Name:   productSearchCategory
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/181
 * C181 - Search by Product Category
 * Author:      Mike Van Every
 * Date:        11/16/2016/
*/

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const search = require('../../../../core/projects/concierge/helpers/productSearch');

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
      landing.navSearch(done, "Product Search");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  //describe('Verify Search drawer is open', () => {
  //  it('should verify that the drawer is open', (done) => {
  //    search.verifySearchOpen(done);
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 2 seconds', (done) => {
  //    common.pause(done, 2000);
  //  });
  //});

  describe('Enter search criteria', () => {
    it('Should enter search criteria and search', (done) => {
      search.enterSearchCriteria(done, 'Shoes');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

})
