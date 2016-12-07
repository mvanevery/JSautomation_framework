/**
 * Created by mvanevery on 11/23/16.
 */

/**
 * Created by mvanevery on 11/23/16.
 * Project:     Concierge
 * Test Name:   productSearchName
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/178
 * C181 - Search by Product Name
 * Author:      Mike Van Every
 * Date:        11/23/2016/
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const search = require('../../../../core/projects/concierge/helpers/productSearch');

  describe('Smoke Test: Search Product by Name', () => {
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
       search.enterSearchCriteria(done, 'Edison Flats-Bonfire Plaid');
  });
});

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
     common.pause(done, 10000);
});
});

  describe('Verify Product Title', () => {
    it('should verify the product title', (done) => {
      search.verifyProductTitle(done, true, 'Edison Flats-Bonfire Plaid');
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

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
     common.pause(done, 5000);
  });
});

})

