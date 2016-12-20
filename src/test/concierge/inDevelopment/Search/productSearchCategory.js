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

describe('Smoke Test: Search Product by Category', () => {
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
      common.pause(done, 15000);
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
      search.enterSearchCriteria(done, true, 'Shoes');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 8 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Verify PLP Header', () => {
    it('should verify the PLP header', (done) => {
      search.verifySearchPLP(done, true, 'Searching "Shoes"');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 5000);
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
