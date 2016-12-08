/**
 * Created by mvanevery on 12/07/16.
 * Project:     Concierge
 * Test Name:   productSearchBlank
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/186
 * C186 - Blank Field
 * Author:      Mike Van Every
 * Date:        12/07/2016/
 */


const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const search = require('../../../../core/projects/concierge/helpers/productSearch');

describe('Smoke Test: Search Product - Blank Field', () => {
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

  describe('Verify the Search Button is disabled', () => {
    it('Should verify the search button is disabled and unclickable with a blank search field', (done) => {
      search.verifyButtonDisabled(done, true,"", false);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Logout', () => {
    it('Should logout the current user', (done) => {
      login.logoutUser(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

})

