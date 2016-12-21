/**
 * Project:     Concierge
 * TestName     Catalog/openingAndClosingFunctionality_C1249
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/1249
 * Author:      John Harre
 * Date:        11/23/2016
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const catalog = require('../../../../core/projects/concierge/helpers/catalog');

describe('Smoke Test: C1249 Opening and Closing Functionality.', () => {

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

  describe('Click the product catalog menu icon in the left navigation bar.', () => {
    it('Product catalog menu drawer pops open.', (done) => {
      landing.navigateIcons(done, "catalogMenuIcon", true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the product catalog menu icon in the left navigation bar.', () => {
    it('A list of categories is displayed.', (done) => {
      landing.navigateTree(done, "catalogMenuIcon", true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the product catalog menu icon in the left navigation bar.', () => {
    it('Product catalog menu icon is in active state.', (done) => {
      landing.navigateActiveIcons(done, "catalogMenuIcon", "catalogMenuIconActive",  "-1");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the product catalog menu icon in the left navigation bar.', () => {
    it('Product catalog menu drawer closes.', (done) => {
      landing.navigateIcons(done, "catalogMenuIcon", true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the product catalog menu icon in the left navigation bar.', () => {
    it('The product catalog menu icon is again in inactive state.', (done) => {
      landing.navigateActiveIcons(done, "catalogMenuIcon", "catalogMenuIconInActive",  "-1");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the product catalog menu icon in the left navigation bar.', () => {
    it('Product catalog menu drawer pops open.', (done) => {
      landing.navigateIcons(done, "catalogMenuIcon", true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the product catalog menu icon in the left navigation bar.', () => {
    it('A list of categories is displayed.', (done) => {
      landing.navigateTree(done, "catalogMenuTitle", true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the product catalog menu icon in the left navigation bar.', () => {
    it('Product catalog menu icon is in active state.', (done) => {
      landing.navigateActiveIcons(done, "catalogMenuIcon", "catalogMenuIconActive",  "-1");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click into the gray mask anywhere in the application that is not the product catalog menu drawer.', () => {
    it('Product catalog menu drawer closes.', (done) => {
      catalog.overlay(done, "catalogMenuTitle", true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click into the gray mask anywhere in the application that is not the product catalog menu drawer.', () => {
    it('A list of categories is not displayed.', (done) => {
      landing.navigateTree(done, "catalogMenuTitle", false);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click into the gray mask anywhere in the application that is not the product catalog menu drawer.', () => {
    it('The product catalog menu icon is again in inactive state.', (done) => {
      landing.navigateActiveIcons(done, "catalogMenuIcon", "catalogMenuIconInActive",  "-1");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

})
