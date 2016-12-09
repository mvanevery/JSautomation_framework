/**
 * Project:     Concierge
 * TestName     Catalog/navigationToLeafOfMenuAndBackToParent_C1247
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/1247
 * Author:      John Harre
 * Date:        11/21/2016
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const catalog = require('../../../../core/projects/concierge/helpers/catalog');

describe('Smoke Test: C1247 Navigation to Leaf Menu and Back to Parent', () => {
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

  describe('Click the Catalog menu option', () => {
    it('Should open Catalog section', (done) => {
      landing.navCatalog(done, "Catalog");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the Shoes menu option', () => {
    it('Should open Shoes section', (done) => {
      catalog.LeftDrawer(done, "Shoes");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Logout', () => {
    it('Should logout the current user', (done) => {
      login.logoutUser(done, true);
    });
  });

  describe('Test Completed: Cleaning up', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

})
