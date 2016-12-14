/**
 * Project:     Concierge
 * TestName     Catalog/selectingALeafOfTheMenuTree_C1248
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/1248
 * Author:      John Harre
 * Date:        11/21/2016
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const catalog = require('../../../../core/projects/concierge/helpers/catalog');

describe('Smoke Test: C1248 Selecting A Leaf Of The Menu Tree.', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Verify Login Screen.', () => {
    it('Should navigate to the login screen.', (done) => {
      login.verifyLoginScreen(done, true);
    });
  });

  describe('Pausing.', () => {
    it('Should pause the test for 10 seconds.', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Login.', () => {
    it('Should login as "testauto".', (done) => {
      login.loginUser(done, true, 'testauto', 'qaUser@123');
    });
  });

  describe('Pausing.', () => {
    it('Should pause the test for 10 seconds.', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Click on the product catalog menu icon in the left navigation bar.', () => {
    it('Product catalog menu drawer opens and a list of product categories is displayed.', (done) => {
      landing.navigateIcons(done, "catalogMenuIcon", true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click on the product catalog menu icon in the left navigation bar.', () => {
    it('Product catalog menu icon is in active state.', (done) => {
      landing.navigateActiveIcons(done, "catalogMenuIcon", "catalogMenuIconActive",  "-1");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Navigate through branches of the product catalog categories until you come to the leaves of a category branch.', () => {
  it('A list of menu items with children display.', (done) => {
      landing.navigateTree(done, "catalogDefaultCategory", "New Arrivals");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Navigate through branches of the product catalog categories until you come to the leaves of a category branch.', () => {
    it('Product catalog menu icon is in active state.', (done) => {
      landing.navigateActiveIcons(done, "catalogMenuIcon", "catalogMenuIconActive",  "-1");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Logout', () => {
    it('Should logout the current user', (done) => {
      login.logoutUser(done, true, true);
    });
  });

  describe('Pausing', () => {
   it('Should pause the test for 5 seconds', (done) => {
     common.pause(done, 5000);
   });
  });

})
