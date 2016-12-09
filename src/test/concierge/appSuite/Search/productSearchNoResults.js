/**
 * Created by mvanevery on 12/07/16.
 * Project:     Concierge
 * Test Name:   productSearchNoResults
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/187
 * C187 - Search for No Results
 * Author:      Mike Van Every
 * Date:        12/07/2016/
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const search = require('../../../../core/projects/concierge/helpers/productSearch');

describe('Smoke Test: Search Product for No Results', () => {
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

  describe('Click the Product Search icon', () => {
    it('Should open product search drawer', (done) => {
      landing.navigateIcons(done, "searchIcon", true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Search drawer is open', () => {
    it('should verify that the drawer is open', (done) => {
      search.verifySearchOpen(done, true, "Product Search");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Enter search criteria', () => {
    it('Should enter search criteria and search', (done) => {
      search.enterSearchCriteria(done, true, 'sfshsf');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Verify Product Results', () => {
    it('should verify the product title', (done) => {
      search.verifySearchNoResults(done, true,'Unable to load product list.');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Logout', () => {
    it('Should Logout from the current user', (done) => {
      login.logoutUser(done);
    });
  });

  describe('Test Completed: Cleaning up', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

})



